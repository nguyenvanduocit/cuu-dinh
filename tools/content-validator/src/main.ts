#!/usr/bin/env bun
import { readFile, readdir } from 'node:fs/promises'
import { join, dirname, resolve, basename } from 'node:path'
import { fileURLToPath } from 'node:url'
import { z } from 'zod'

import {
  Affix, AffixCsvColumns,
  Ascendancy,
  Catalyst, CatalystCsvColumns,
  CorruptionMod, CorruptionModCsvColumns,
  Equipment, EquipmentCsvColumns,
  Item, ItemCsvColumns,
  MapBlueprint,
  PassiveTree,
  Reagent, ReagentCsvColumns,
  SetBonus,
  Unique, UniqueCsvColumns,
} from '@cuu-dinh/shared/schemas'

import { parseCsv, rowsToRecords } from './csv.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA = resolve(__dirname, '../../../packages/data')

const PIPE_ARRAY_FIELDS = new Set([
  'tags', 'compatibleItemTypes', 'connections', 'memberItemIds', 'buildArchetypes',
])
const BOOL_FIELDS = new Set(['isUnique'])
const NULLABLE_ELEMENT_AS_EMPTY = new Set(['element'])

type ReportEntry =
  | { kind: 'ok'; file: string; count: number }
  | { kind: 'error'; file: string; msg: string }

const report: ReportEntry[] = []
const allIds = new Map<string, string>() // id -> file (for cross-file uniqueness)

/** Convert a flat string record into a typed object by coercing fields per heuristics. */
function coerceRecord(rec: Record<string, string>, columns: readonly string[]): Record<string, unknown> {
  const out: Record<string, unknown> = {}
  for (const col of columns) {
    const raw = rec[col] ?? ''
    if (PIPE_ARRAY_FIELDS.has(col)) {
      out[col] = raw === '' ? [] : raw.split('|').map((s) => s.trim()).filter((s) => s.length > 0)
    } else if (BOOL_FIELDS.has(col)) {
      out[col] = raw === 'true'
    } else if (NULLABLE_ELEMENT_AS_EMPTY.has(col) && raw === '') {
      out[col] = null
    } else if (/^-?\d+$/.test(raw)) {
      out[col] = Number.parseInt(raw, 10)
    } else if (/^-?\d+\.\d+$/.test(raw)) {
      out[col] = Number.parseFloat(raw)
    } else {
      out[col] = raw
    }
  }
  return out
}

/** Special-case for Affix: merge t1/t2/t3 flat columns into nested `tiers` object. */
function reshapeAffix(obj: Record<string, unknown>): Record<string, unknown> {
  const { t1, t2, t3, ...rest } = obj
  return { ...rest, tiers: { t1, t2, t3 } }
}

async function validateCsv<T extends z.ZodTypeAny>(
  file: string,
  itemSchema: T,
  columns: readonly string[],
  reshape?: (obj: Record<string, unknown>) => Record<string, unknown>,
): Promise<void> {
  try {
    const text = await readFile(join(DATA, file), 'utf-8')
    const { header, rows } = parseCsv(text)
    const expected = [...columns]
    if (header.join(',') !== expected.join(',')) {
      report.push({
        kind: 'error',
        file,
        msg: `header mismatch.\n  expected: ${expected.join(',')}\n  actual:   ${header.join(',')}`,
      })
      return
    }
    const records = rowsToRecords(header, rows)
    const items: unknown[] = []
    for (let i = 0; i < records.length; i++) {
      const rec = records[i]!
      const coerced = coerceRecord(rec, columns)
      const reshaped = reshape ? reshape(coerced) : coerced
      const parsed = itemSchema.safeParse(reshaped)
      if (!parsed.success) {
        report.push({
          kind: 'error',
          file,
          msg: `row ${i + 2} (id=${rec.id ?? '?'}): ${parsed.error.issues
            .map((iss) => `${iss.path.join('.') || '(root)'}: ${iss.message}`)
            .join('; ')}`,
        })
        continue
      }
      items.push(parsed.data)
      const id = (parsed.data as { id: string }).id
      allIds.set(`${file}::${id}`, file)
    }
    // within-file uniqueness
    const ids = items.map((it) => (it as { id: string }).id)
    const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
    if (dupes.length > 0) {
      report.push({
        kind: 'error',
        file,
        msg: `duplicate id(s) within file: ${[...new Set(dupes)].join(', ')}`,
      })
    }
    report.push({ kind: 'ok', file, count: items.length })
  } catch (err) {
    report.push({ kind: 'error', file, msg: `read/parse failure: ${(err as Error).message}` })
  }
}

async function validateJson<T extends z.ZodTypeAny>(
  file: string,
  schema: T,
  countExtractor: (data: z.infer<T>) => number,
  idExtractor?: (data: z.infer<T>) => string[],
): Promise<void> {
  try {
    const text = await readFile(join(DATA, file), 'utf-8')
    const data = JSON.parse(text)
    const parsed = schema.safeParse(data)
    if (!parsed.success) {
      report.push({
        kind: 'error',
        file,
        msg: parsed.error.issues
          .map((iss) => `${iss.path.join('.') || '(root)'}: ${iss.message}`)
          .join('; '),
      })
      return
    }
    const count = countExtractor(parsed.data)
    if (idExtractor) {
      const ids = idExtractor(parsed.data)
      const dupes = ids.filter((id, i) => ids.indexOf(id) !== i)
      if (dupes.length > 0) {
        report.push({
          kind: 'error',
          file,
          msg: `duplicate id(s) within file: ${[...new Set(dupes)].join(', ')}`,
        })
      }
      for (const id of ids) {
        allIds.set(`${file}::${id}`, file)
      }
    }
    report.push({ kind: 'ok', file, count })
  } catch (err) {
    report.push({ kind: 'error', file, msg: `read/parse failure: ${(err as Error).message}` })
  }
}

function idsFromFile(file: string): Set<string> {
  const prefix = `${file}::`
  const out = new Set<string>()
  for (const key of allIds.keys()) {
    if (key.startsWith(prefix)) out.add(key.slice(prefix.length))
  }
  return out
}

async function validateCrossRefs(): Promise<void> {
  // set-bonuses.json memberItemIds must exist in items.csv
  try {
    const setText = await readFile(join(DATA, 'set-bonuses.json'), 'utf-8')
    const sets = z.array(SetBonus).parse(JSON.parse(setText))
    const itemIds = idsFromFile('items.csv')
    for (const set of sets) {
      for (const memberId of set.memberItemIds) {
        if (!itemIds.has(memberId)) {
          report.push({
            kind: 'error',
            file: 'set-bonuses.json',
            msg: `set "${set.id}" references unknown item id "${memberId}"`,
          })
        }
      }
    }
  } catch {
    // already reported by validateJson
  }

  // item-flavor.json keys must match item + unique + set ids in their respective domains
  try {
    const flavorText = await readFile(join(DATA, 'lore/item-flavor.json'), 'utf-8')
    const flavor = JSON.parse(flavorText) as {
      item?: Record<string, string>
      unique?: Record<string, string>
      setBonus?: Record<string, string>
    }
    const itemIds = idsFromFile('items.csv')
    const uniqueIds = idsFromFile('uniques.csv')
    const setIds = idsFromFile('set-bonuses.json')

    const checkBucket = (
      bucketName: string,
      bucket: Record<string, string> | undefined,
      validIds: Set<string>,
      sourceFile: string,
    ) => {
      if (!bucket) return
      for (const id of Object.keys(bucket)) {
        if (!validIds.has(id)) {
          report.push({
            kind: 'error',
            file: 'lore/item-flavor.json',
            msg: `${bucketName}: flavor key "${id}" has no matching id in ${sourceFile}`,
          })
        }
      }
    }
    checkBucket('item', flavor.item, itemIds, 'items.csv')
    checkBucket('unique', flavor.unique, uniqueIds, 'uniques.csv')
    checkBucket('setBonus', flavor.setBonus, setIds, 'set-bonuses.json')
  } catch {
    // skip if file missing
  }
}

async function main(): Promise<void> {
  // CSV files
  await Promise.all([
    validateCsv('items.csv', Item, ItemCsvColumns),
    validateCsv('uniques.csv', Unique, UniqueCsvColumns),
    validateCsv('affix-prefix.csv', Affix, AffixCsvColumns, reshapeAffix),
    validateCsv('affix-suffix.csv', Affix, AffixCsvColumns, reshapeAffix),
    validateCsv('affix-implicit.csv', Affix, AffixCsvColumns, reshapeAffix),
    validateCsv('reagents.csv', Reagent, ReagentCsvColumns),
    validateCsv('catalysts.csv', Catalyst, CatalystCsvColumns),
    validateCsv('corruption-mods.csv', CorruptionMod, CorruptionModCsvColumns),
    validateCsv('equipment.csv', Equipment, EquipmentCsvColumns),
  ])

  // JSON files
  await validateJson(
    'set-bonuses.json',
    z.array(SetBonus),
    (d) => d.length,
    (d) => d.map((s) => s.id),
  )
  await validateJson(
    'ascendancies.json',
    z.array(Ascendancy),
    (d) => d.length,
    (d) => d.map((dp) => dp.id),
  )
  await validateJson(
    'passive-tree.json',
    PassiveTree,
    (d) => d.nodes.length,
    (d) => d.nodes.map((n) => n.id),
  )

  // Maps: one JSON per variant
  try {
    const mapsDir = join(DATA, 'maps')
    const entries = await readdir(mapsDir)
    for (const fname of entries) {
      if (!fname.endsWith('.json')) continue
      await validateJson(
        `maps/${fname}`,
        MapBlueprint,
        () => 1,
        (d) => [d.id],
      )
    }
  } catch (err) {
    report.push({ kind: 'error', file: 'maps/', msg: `directory scan failed: ${(err as Error).message}` })
  }

  // Cross-file reference integrity
  await validateCrossRefs()

  // Print report
  const oks = report.filter((r): r is Extract<ReportEntry, { kind: 'ok' }> => r.kind === 'ok')
  const errs = report.filter((r): r is Extract<ReportEntry, { kind: 'error' }> => r.kind === 'error')

  console.log('\n=== Content Validation Report ===\n')
  for (const r of oks) {
    console.log(`✓ ${r.file.padEnd(36)} ${r.count} items`)
  }
  const distinctIds = new Set<string>()
  for (const key of allIds.keys()) distinctIds.add(key.split('::')[1] ?? '')
  console.log(`\n  total tracked ids (domain-qualified): ${allIds.size}`)
  console.log(`  distinct slugs across all files:     ${distinctIds.size}`)

  if (errs.length > 0) {
    console.log(`\n=== ${errs.length} error(s) ===\n`)
    const byFile = new Map<string, string[]>()
    for (const e of errs) {
      if (!byFile.has(e.file)) byFile.set(e.file, [])
      byFile.get(e.file)!.push(e.msg)
    }
    for (const [file, msgs] of byFile) {
      console.log(`✗ ${file}`)
      for (const m of msgs) console.log(`    - ${m}`)
    }
    process.exit(1)
  }
  console.log('\n✓ All files passed validation.\n')
}

main().catch((err) => {
  console.error('validator crashed:', err)
  process.exit(2)
})
