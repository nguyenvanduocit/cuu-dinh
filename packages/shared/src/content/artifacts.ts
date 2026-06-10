/**
 * Catalog linh khí prototype — JSON regenerate từ docs/content (SSOT),
 * validate qua Zod lúc load. KHÔNG edit artifacts.gen.json bằng tay:
 * chạy `bun run content:gen` sau khi sửa design.md.
 *
 * Behavior vật lý derive từ `tags` của frontmatter — mapping dưới đây là
 * implementation contract của prototype (xem docs item design.md cho intent).
 */
import { artifactCatalogSchema, type ArtifactBlueprint } from './artifact-schema.ts'
import rawCatalog from './artifacts.gen.json' with { type: 'json' }

export type ArtifactEffect =
  | { kind: 'convert' }
  | { kind: 'split'; sameElementOnly: boolean }
  | { kind: 'heal'; amount: number }
  | { kind: 'charge'; extraHops: number; slowFactor: number }
  | { kind: 'chain'; bonusHopsOnMatch: number }
  | { kind: 'aura'; intensityMultiplier: number }
  | { kind: 'push'; impulse: number }
  | { kind: 'counter'; overcomeMitigation: number }
  | { kind: 'pierce'; speedBoost: number }

export interface ArtifactSpec extends ArtifactBlueprint {
  effects: ArtifactEffect[]
}

function deriveEffects(blueprint: ArtifactBlueprint): ArtifactEffect[] {
  const effects: ArtifactEffect[] = []
  const has = (tag: string): boolean => blueprint.tags.includes(tag)

  if (has('convert')) effects.push({ kind: 'convert' })
  if (has('split')) effects.push({ kind: 'split', sameElementOnly: !has('spawn') })
  if (has('heal') || has('sustain')) effects.push({ kind: 'heal', amount: 1 })
  if (has('charge')) effects.push({ kind: 'charge', extraHops: 2, slowFactor: has('slow') ? 0.7 : 1 })
  if (has('chain')) effects.push({ kind: 'chain', bonusHopsOnMatch: 1 })
  if (has('aura')) effects.push({ kind: 'aura', intensityMultiplier: 1.15 })
  if (has('push')) effects.push({ kind: 'push', impulse: 220 })
  if (has('counter')) effects.push({ kind: 'counter', overcomeMitigation: 0.2 })
  if (has('pierce')) effects.push({ kind: 'pierce', speedBoost: 1.3 })

  return effects
}

const catalog = artifactCatalogSchema.parse(rawCatalog)

export const ARTIFACTS: ReadonlyArray<ArtifactSpec> = catalog.map((blueprint) => ({
  ...blueprint,
  effects: deriveEffects(blueprint),
}))

export function artifactById(id: string): ArtifactSpec {
  const found = ARTIFACTS.find((artifact) => artifact.id === id)
  if (!found) throw new Error(`Không tìm thấy linh khí: ${id}`)
  return found
}
