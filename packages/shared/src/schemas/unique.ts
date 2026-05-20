import { z } from 'zod'
import { DisplayName, Element, ItemBaseType, Slug } from './common.ts'

export const UniqueCategory = z.enum([
  'build-defining', 'sustain-defensive', 'chaos-risk', 'mirror',
])
export type UniqueCategory = z.infer<typeof UniqueCategory>

/**
 * Unique (Cổ Vật) — unique item with a named effect.
 * 30 base + 3 Mirror tier (post-launch).
 */
export const Unique = z.object({
  id: Slug,
  ten: DisplayName,
  type: ItemBaseType,
  element: Element.nullable(),
  category: UniqueCategory,
  effect: z.string().min(1),
  buildHook: z.string().min(1),
  dropWeight: z.number().int().nonnegative(),
  /** Free-text rate hint, e.g. "1/100000", "atlas keystone", "rare". */
  dropRateHint: z.string().min(1),
})
export type Unique = z.infer<typeof Unique>

export const UniqueCsvColumns = [
  'id', 'ten', 'type', 'element', 'category', 'effect', 'buildHook', 'dropWeight', 'dropRateHint',
] as const

export const UniqueCatalog = z.array(Unique).refine(
  (items) => new Set(items.map((i) => i.id)).size === items.length,
  'duplicate id',
)
