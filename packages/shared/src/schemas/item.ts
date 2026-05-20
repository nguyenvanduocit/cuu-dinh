import { z } from 'zod'
import { DisplayName, DropPool, Element, ItemBaseType, Rarity, Slug } from './common.ts'

/**
 * Item (Linh Khí) — base item placed on board during a Map run.
 * 78 items: 60 base (10/element × 6) + 18 Arhat statues (Thập Bát La Hán set).
 */
export const Item = z.object({
  id: Slug,
  ten: DisplayName,
  type: ItemBaseType,
  element: Element,
  rarity: Rarity,
  implicit: z.string().min(1),
  dropPool: DropPool,
  tags: z.array(z.string()).default([]),
})
export type Item = z.infer<typeof Item>

export const ItemCsvColumns = [
  'id', 'ten', 'type', 'element', 'rarity', 'implicit', 'dropPool', 'tags',
] as const

export const ItemCatalog = z.array(Item).refine(
  (items) => new Set(items.map((i) => i.id)).size === items.length,
  'duplicate id',
)
