import { z } from 'zod'
import { DisplayName, DropPool, Element, Slug } from './common.ts'

export const ReagentCategory = z.enum(['main', 'essence'])
export type ReagentCategory = z.infer<typeof ReagentCategory>

/**
 * Reagent (Đan Dược) — crafting/gambling currency.
 * 8 main + 12 Essence (Tinh Hoa) = 20 total.
 */
export const Reagent = z.object({
  id: Slug,
  ten: DisplayName,
  category: ReagentCategory,
  effect: z.string().min(1),
  dropPool: DropPool,
  weight: z.number().int().positive(),
  /** Element scope for Essence; null for non-elemental. */
  element: Element.nullable(),
})
export type Reagent = z.infer<typeof Reagent>

export const ReagentCsvColumns = [
  'id', 'ten', 'category', 'effect', 'dropPool', 'weight', 'element',
] as const

export const CatalystCategory = z.enum([
  'drop-bias', 'mechanic-shifter', 'boss-modifier',
])
export type CatalystCategory = z.infer<typeof CatalystCategory>

/**
 * Catalyst (Nguyên Liệu) — Map-entry modifier (PoE-scarab analogue).
 * 30 total: 10 drop-bias + 10 mechanic-shifter + 10 boss-modifier.
 */
export const Catalyst = z.object({
  id: Slug,
  ten: DisplayName,
  category: CatalystCategory,
  effect: z.string().min(1),
  weight: z.number().int().positive(),
})
export type Catalyst = z.infer<typeof Catalyst>

export const CatalystCsvColumns = [
  'id', 'ten', 'category', 'effect', 'weight',
] as const
