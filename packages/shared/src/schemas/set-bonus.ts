import { z } from 'zod'
import { DisplayName, Slug } from './common.ts'

/**
 * Set Bonus — extra effect when wearing N items of the same set.
 * v1.0: 3 sets (Tứ Linh 4-piece, Ngũ Hành 5-piece, Thập Bát La Hán 18-piece).
 */
export const SetBonus = z.object({
  id: Slug,
  ten: DisplayName,
  /** Item IDs that belong to this set. */
  memberItemIds: z.array(Slug).min(2),
  /** Tiered bonuses by number of pieces equipped. */
  bonuses: z.array(z.object({
    requiredCount: z.number().int().positive(),
    effect: z.string().min(1),
  })).min(1),
  description: z.string().min(1),
})
export type SetBonus = z.infer<typeof SetBonus>

export const SetBonusCatalog = z.array(SetBonus).refine(
  (sets) => new Set(sets.map((s) => s.id)).size === sets.length,
  'duplicate id',
)
