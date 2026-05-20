import { z } from 'zod'
import { DisplayName, EquipmentSlot, Rarity, Slug } from './common.ts'

/**
 * Equipment (Lò Part) — piece occupying one of the Furnace slots.
 * (EquipmentSlot has 10 entries because Handle and Ring each have L/R.)
 */
export const Equipment = z.object({
  id: Slug,
  ten: DisplayName,
  slot: EquipmentSlot,
  rarity: Rarity,
  implicit: z.string().min(1),
  /** Variant label (e.g. "Phàm", "Linh", "Bảo", "Thần", "Cổ vật"). */
  variant: z.string().min(1),
  isUnique: z.boolean().default(false),
})
export type Equipment = z.infer<typeof Equipment>

export const EquipmentCsvColumns = [
  'id', 'ten', 'slot', 'rarity', 'implicit', 'variant', 'isUnique',
] as const
