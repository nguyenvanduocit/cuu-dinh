import { z } from 'zod'
import { DisplayName, Element, Slug } from './common.ts'

export const MapVariant = z.enum([
  'standard', 'sanctum', 'marathon', 'lightning', 'mirror',
  'ancient-furnace', 'dragon-palace', 'nine-heavens', 'underworld', 'endless',
])
export type MapVariant = z.infer<typeof MapVariant>

export const BossType = z.enum(['anomaly', 'mirror', 'lightning'])
export type BossType = z.infer<typeof BossType>

/**
 * Anchor — fixed mount point on the Map board where the player may place an Item.
 */
export const Anchor = z.object({
  id: z.string().min(1),
  position: z.object({ x: z.number(), y: z.number() }),
  /** Optional element bias hint (visual only — gameplay rules in spec). */
  elementBias: Element.nullable(),
})

/**
 * Map blueprint (Pháp Trận). Named `MapBlueprint` to avoid the JS `Map` collision.
 * 10 variants (standard, sanctum, marathon, lightning, mirror, ancient-furnace,
 * dragon-palace, nine-heavens, underworld, endless).
 */
export const MapBlueprint = z.object({
  id: Slug,
  ten: DisplayName,
  variant: MapVariant,
  /** Atlas tier range (T1-T16). */
  tierRange: z.object({
    min: z.number().int().min(1).max(16),
    max: z.number().int().min(1).max(16),
  }),
  vanCount: z.object({
    min: z.number().int().positive(),
    max: z.number().int().positive(),
  }),
  bossType: BossType,
  modifierSlots: z.object({
    min: z.number().int().min(0).max(8),
    max: z.number().int().min(0).max(8),
  }),
  geometry: z.object({
    width: z.number().positive(),
    height: z.number().positive(),
    anchors: z.array(Anchor).min(4),
  }),
  specialRules: z.string().min(1),
  description: z.string().min(1),
})
export type MapBlueprint = z.infer<typeof MapBlueprint>
