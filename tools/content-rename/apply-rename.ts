#!/usr/bin/env bun
/**
 * Deterministic content rename: applies id-map.json + constant enum maps to
 * every data file, renaming files and rewriting IDs / enum values / cross-refs.
 *
 * Idempotent-ish: run once on the Vietnamese-ID dataset. Safe to re-run only if
 * source files still have old names (it removes old files after writing new).
 *
 * Usage: bun run tools/content-rename/apply-rename.ts
 */
import { readFile, writeFile, rm, mkdir, readdir } from 'node:fs/promises'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseCsv, rowsToRecords } from '../content-validator/src/csv.ts'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DATA = resolve(__dirname, '../../packages/data')
const idMap = JSON.parse(await readFile(join(__dirname, 'id-map.json'), 'utf-8')) as Record<
  string,
  Record<string, string>
>

// ---- constant enum-value maps (not in id-map) ----
const element: Record<string, string> = {
  kim: 'metal', moc: 'wood', thuy: 'water', hoa: 'fire', tho: 'earth', voCuc: 'void',
}
const rarity: Record<string, string> = {
  'Phàm': 'Common', 'Linh': 'Magic', 'Bảo': 'Rare', 'Thần': 'Legendary', 'Cổ': 'Unique', 'Mirror': 'Mirror',
}
const itemType: Record<string, string> = {
  'Chuông': 'bell', 'Kiếm': 'sword', 'Đao': 'saber', 'Nghiên Mực': 'inkstone', 'Châu': 'bead',
  'Tượng': 'statue', 'Bùa': 'talisman', 'Đỉnh': 'cauldron', 'Hộp': 'box', 'Quạt': 'fan',
  'Cành': 'branch', 'Đèn': 'lantern', 'Hoa': 'flower', 'Bình': 'vase', 'Trống': 'drum', 'Phù': 'charm',
}
const equipmentSlot: Record<string, string> = {
  'Đỉnh': 'crown', 'Thân': 'body', 'Đế': 'base', 'QuaiL': 'handleL', 'QuaiR': 'handleR',
  'Nắp': 'lid', 'KhắcPhù': 'amulet', 'ĐồSươngL': 'ringL', 'ĐồSươngR': 'ringR', 'DâyPhongẤn': 'belt',
}
const bossType: Record<string, string> = {
  'di-tuong': 'anomaly', 'tam-ma': 'mirror', 'thien-kiep': 'lightning',
}
const reagentCategory: Record<string, string> = { 'main': 'main', 'tinh-hoa': 'essence' }
const affixTag: Record<string, string> = {
  'anti-tam-ma': 'anti-corruption', 'phong-an-safety': 'seal-safety',
}
const npc: Record<string, string> = {
  'su-phu': 'master', 'lao-ho-ly': 'old-fox', 'dao-si-vo-danh': 'nameless-cultivator',
  'to-su-bat-tu': 'immortal-ancestor', 'dan-su-hac-bach': 'black-white-alchemist',
  'lao-ba-lo-de': 'lottery-crone', 'lo-than': 'furnace-spirit', 'phap-su-ban-do': 'map-sorcerer',
  'ngu-hanh-to-kim': 'wuxing-ancestor-metal', 'ngu-hanh-to-moc': 'wuxing-ancestor-wood',
  'ngu-hanh-to-thuy': 'wuxing-ancestor-water', 'ngu-hanh-to-hoa': 'wuxing-ancestor-fire',
  'ngu-hanh-to-tho': 'wuxing-ancestor-earth', 'hon-nguyen-tam-ma-vuong': 'primordial-corruption-king',
}

function need(map: Record<string, string>, key: string, ctx: string): string {
  const v = map[key]
  if (v === undefined) throw new Error(`MISSING mapping for "${key}" in ${ctx}`)
  return v
}

/** Translate pipe-joined tokens, mapping any token found in `m`, else keeping it. */
function pipeTokens(raw: string, m: Record<string, string>): string {
  if (raw === '') return ''
  return raw.split('|').map((t) => m[t.trim()] ?? t.trim()).join('|')
}

// ---- CSV serialisation ----
function toCsvField(v: string): string {
  if (v.includes(',') || v.includes('"') || v.includes('\n')) {
    return `"${v.replace(/"/g, '""')}"`
  }
  return v
}
function recordsToCsv(header: string[], records: Array<Record<string, string>>): string {
  const lines = [header.join(',')]
  for (const rec of records) {
    lines.push(header.map((h) => toCsvField(rec[h] ?? '')).join(','))
  }
  return lines.join('\n') + '\n'
}

async function transformCsv(
  src: string,
  dst: string,
  rowFn: (rec: Record<string, string>) => void,
): Promise<number> {
  const text = await readFile(join(DATA, src), 'utf-8')
  const { header, rows } = parseCsv(text)
  const records = rowsToRecords(header, rows)
  for (const rec of records) rowFn(rec)
  await writeFile(join(DATA, dst), recordsToCsv(header, records), 'utf-8')
  if (src !== dst) await rm(join(DATA, src))
  return records.length
}

async function transformJson<T>(
  src: string,
  dst: string,
  fn: (data: T) => T,
): Promise<void> {
  const data = JSON.parse(await readFile(join(DATA, src), 'utf-8')) as T
  const out = fn(data)
  await writeFile(join(DATA, dst), JSON.stringify(out, null, 2) + '\n', 'utf-8')
  if (src !== dst) await rm(join(DATA, src))
}

const log: string[] = []

// ---- items.csv → items.csv (id same name, but contents change; file renamed) ----
async function run(): Promise<void> {
  const itemsN = await transformCsv('linh-khi.csv', 'items.csv', (r) => {
    r.id = need(idMap.items, r.id, 'items')
    r.type = need(itemType, r.type, 'itemType')
    r.element = need(element, r.element, 'element')
    r.rarity = need(rarity, r.rarity, 'rarity')
    r.tags = pipeTokens(r.tags, element)
  })
  log.push(`items.csv: ${itemsN}`)

  const uniquesN = await transformCsv('co-vat.csv', 'uniques.csv', (r) => {
    r.id = need(idMap.uniques, r.id, 'uniques')
    r.type = need(itemType, r.type, 'itemType')
    if (r.element !== '') r.element = need(element, r.element, 'element')
  })
  log.push(`uniques.csv: ${uniquesN}`)

  for (const [src, domain] of [
    ['affix-prefix.csv', 'affixesPrefix'],
    ['affix-suffix.csv', 'affixesSuffix'],
    ['affix-implicit.csv', 'affixesImplicit'],
  ] as const) {
    const n = await transformCsv(src, src, (r) => {
      r.id = need(idMap[domain], r.id, domain)
      if (r.element !== '') r.element = need(element, r.element, 'element')
      r.compatibleItemTypes = pipeTokens(r.compatibleItemTypes, itemType)
      r.tags = pipeTokens(r.tags, affixTag)
    })
    log.push(`${src}: ${n}`)
  }

  const reagentsN = await transformCsv('dan-duoc.csv', 'reagents.csv', (r) => {
    r.id = need(idMap.reagents, r.id, 'reagents')
    r.category = need(reagentCategory, r.category, 'reagentCategory')
    if (r.element !== '') r.element = need(element, r.element, 'element')
  })
  log.push(`reagents.csv: ${reagentsN}`)

  const catalystsN = await transformCsv('nguyen-lieu.csv', 'catalysts.csv', (r) => {
    r.id = need(idMap.catalysts, r.id, 'catalysts')
  })
  log.push(`catalysts.csv: ${catalystsN}`)

  const corrN = await transformCsv('tam-ma-mod.csv', 'corruption-mods.csv', (r) => {
    r.id = need(idMap.corruptionMods, r.id, 'corruptionMods')
  })
  log.push(`corruption-mods.csv: ${corrN}`)

  const equipN = await transformCsv('lo-part.csv', 'equipment.csv', (r) => {
    r.id = need(idMap.equipment, r.id, 'equipment')
    r.slot = need(equipmentSlot, r.slot, 'equipmentSlot')
    r.rarity = need(rarity, r.rarity, 'rarity')
  })
  log.push(`equipment.csv: ${equipN}`)

  // set-bonuses.json
  await transformJson<Array<{ id: string; memberItemIds: string[] }>>(
    'set-bonus.json', 'set-bonuses.json', (sets) =>
      sets.map((s) => ({
        ...s,
        id: need(idMap.setBonuses, s.id, 'setBonuses'),
        memberItemIds: s.memberItemIds.map((m) => need(idMap.items, m, 'items(member)')),
      })),
  )
  log.push(`set-bonuses.json`)

  // ascendancies.json
  await transformJson<Array<{
    id: string; primaryElement: string | null
    nodes: Array<{ id: string; prerequisites?: string[] }>
  }>>('dao-phai.json', 'ascendancies.json', (list) =>
    list.map((a) => ({
      ...a,
      id: need(idMap.ascendancies, a.id, 'ascendancies'),
      primaryElement: a.primaryElement === null ? null : need(element, a.primaryElement, 'element'),
      nodes: a.nodes.map((nd) => ({
        ...nd,
        id: need(idMap.ascendancyNodes, nd.id, 'ascendancyNodes'),
        prerequisites: (nd.prerequisites ?? []).map((p) =>
          need(idMap.ascendancyNodes, p, 'ascendancyNodes(prereq)')),
      })),
    })),
  )
  log.push(`ascendancies.json`)

  // passive-tree.json
  const clusterElems: Array<[string, string]> = [
    ['vo-cuc', 'void'], ['kim', 'metal'], ['moc', 'wood'], ['thuy', 'water'], ['hoa', 'fire'], ['tho', 'earth'],
  ]
  await transformJson<{
    version: number
    nodes: Array<{ id: string; element: string | null; connections: string[]; cluster: string }>
  }>('passive-tree.json', 'passive-tree.json', (tree) => ({
    ...tree,
    nodes: tree.nodes.map((n) => {
      let cluster = n.cluster
      for (const [vi, en] of clusterElems) cluster = cluster.split(vi).join(en)
      return {
        ...n,
        id: need(idMap.passiveNodes, n.id, 'passiveNodes'),
        element: n.element === null ? null : need(element, n.element, 'element'),
        connections: n.connections.map((c) => need(idMap.passiveNodes, c, 'passiveNodes(conn)')),
        cluster,
      }
    }),
  }))
  log.push(`passive-tree.json: ${idMap.passiveNodes ? Object.keys(idMap.passiveNodes).length : 0} nodes`)

  // maps/*.json — rename dir phap-tran/ → maps/
  await mkdir(join(DATA, 'maps'), { recursive: true })
  const phapTranFiles = await readdir(join(DATA, 'phap-tran'))
  for (const fname of phapTranFiles) {
    if (!fname.endsWith('.json')) continue
    const data = JSON.parse(await readFile(join(DATA, 'phap-tran', fname), 'utf-8')) as {
      id: string; variant: string; bossType: string
      geometry: { anchors: Array<{ elementBias: string | null }> }
    }
    const newId = need(idMap.maps, data.id, 'maps')
    data.id = newId
    data.variant = need(idMap.maps, data.variant, 'maps(variant)')
    data.bossType = need(bossType, data.bossType, 'bossType')
    data.geometry.anchors = data.geometry.anchors.map((a) => ({
      ...a,
      elementBias: a.elementBias === null ? null : need(element, a.elementBias, 'element'),
    }))
    await writeFile(join(DATA, 'maps', `${newId}.json`), JSON.stringify(data, null, 2) + '\n', 'utf-8')
  }
  await rm(join(DATA, 'phap-tran'), { recursive: true })
  log.push(`maps/: ${phapTranFiles.filter((f) => f.endsWith('.json')).length} files`)

  // lore/item-flavor.json — bucket rename + key translation
  await transformJson<Record<string, unknown>>(
    'lore/item-flavor.json', 'lore/item-flavor.json', (flavor) => {
      const remapKeys = (obj: Record<string, string>, m: Record<string, string>) =>
        Object.fromEntries(Object.entries(obj).map(([k, v]) => [need(m, k, 'flavor'), v]))
      const f = flavor as {
        version: number
        linhKhi: Record<string, string>
        coVat: Record<string, string>
        setBonus: Record<string, string>
      }
      return {
        version: f.version,
        item: remapKeys(f.linhKhi, idMap.items),
        unique: remapKeys(f.coVat, idMap.uniques),
        setBonus: remapKeys(f.setBonus, idMap.setBonuses),
      }
    },
  )
  log.push(`lore/item-flavor.json: buckets renamed`)

  // lore/npc-dialogue.json — npc id translation
  await transformJson<{ version: number; npcs: Array<{ id: string }> }>(
    'lore/npc-dialogue.json', 'lore/npc-dialogue.json', (d) => ({
      ...d,
      npcs: d.npcs.map((n) => ({ ...n, id: need(npc, n.id, 'npc') })),
    }),
  )
  log.push(`lore/npc-dialogue.json: ${idMap ? '' : ''}npc ids renamed`)

  console.log('\n=== Rename applied ===')
  for (const l of log) console.log(`  ${l}`)
  console.log('\n✓ Done. Run `bun run content:validate` to verify.\n')
}

run().catch((err) => {
  console.error('\n✗ Rename failed:', err.message)
  process.exit(1)
})
