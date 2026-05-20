import { z } from 'zod'
import { AffixCategory, DisplayName, Element, ItemBaseType, Slug } from './common.ts'

export const AffixTag = z.enum([
  'offensive', 'defensive', 'utility', 'sustain', 'chain', 'crit', 'elemental',
  'currency-control', 'anti-corruption', 'seal-safety', 'speed', 'aoe',
])
export type AffixTag = z.infer<typeof AffixTag>

/**
 * Affix — modifier rolled onto an Item.
 * 80 prefix + 80 suffix + 30 implicit pools. Each affix has 3 tiers (T1 → T3).
 */
export const Affix = z.object({
  id: Slug,
  ten: DisplayName,
  category: AffixCategory,
  tiers: z.object({
    t1: z.string().min(1),
    t2: z.string().min(1),
    t3: z.string().min(1),
  }),
  tags: z.array(AffixTag).min(1),
  /** Element scope; null = element-agnostic. */
  element: Element.nullable(),
  /** Item types this affix can roll on; empty array = all types. */
  compatibleItemTypes: z.array(ItemBaseType).default([]),
  /** Drop weight relative to siblings in the same pool (>0). */
  weight: z.number().int().positive(),
})
export type Affix = z.infer<typeof Affix>

export const AffixCsvColumns = [
  'id', 'ten', 'category', 't1', 't2', 't3', 'tags', 'element', 'compatibleItemTypes', 'weight',
] as const

export const AffixCatalog = z.array(Affix).refine(
  (items) => new Set(items.map((i) => i.id)).size === items.length,
  'duplicate id',
)
