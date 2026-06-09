/**
 * Content codegen — đọc frontmatter từ docs/content/items (SSOT concept phase)
 * và regenerate packages/shared/src/content/artifacts.gen.json.
 *
 * Usage: bun tools/content-codegen/index.ts
 *
 * Manifest = 10 linh khí của vertical prototype (docs/roadmap.md).
 * Implementation phase đầy đủ sẽ quét toàn bộ category thay vì manifest.
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { parse } from 'yaml'

const ROOT = join(import.meta.dir, '..', '..')
const ITEMS_DIR = join(ROOT, 'docs', 'content', 'items')
const OUT_FILE = join(ROOT, 'packages', 'shared', 'src', 'content', 'artifacts.gen.json')

/** <sub-type folder>/<entity-id> trong docs/content/items/. */
const PROTOTYPE_MANIFEST = [
  'misc/bronze-bell',
  'sword/white-tiger-sword',
  'inkstone/metal-essence-inkstone',
  'misc/bodhi-branch',
  'misc/spirit-lotus-flower',
  'statue/azure-dragon-statue',
  'lantern/red-lantern',
  'fan/fire-wind-fan',
  'bead/water-dragon-bead',
  'sword/flowing-ice-sword',
]

interface Frontmatter {
  id: string
  ten: string
  type: string
  element: string
  rarity: string
  tags: string[]
}

function readFrontmatter(entityPath: string): Frontmatter {
  const raw = readFileSync(join(ITEMS_DIR, entityPath, 'design.md'), 'utf8')
  const match = raw.match(/^---\n([\s\S]*?)\n---/)
  if (!match) throw new Error(`Thiếu frontmatter: ${entityPath}`)
  return parse(match[1]!) as Frontmatter
}

const catalog = PROTOTYPE_MANIFEST.map((entityPath) => {
  const fm = readFrontmatter(entityPath)
  return {
    id: fm.id,
    ten: fm.ten,
    type: fm.type,
    element: fm.element,
    rarity: fm.rarity,
    tags: fm.tags,
  }
})

writeFileSync(OUT_FILE, `${JSON.stringify(catalog, null, 2)}\n`)
console.log(`✓ Regenerated ${OUT_FILE} (${catalog.length} linh khí)`)
