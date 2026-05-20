import { z } from 'zod'
import { DisplayName, Element, Slug } from './common.ts'

/**
 * Ascendancy (Đạo Phái) — subclass.
 * 5 subclasses, unlocked at character level 30.
 */
export const Ascendancy = z.object({
  id: Slug,
  ten: DisplayName,
  unlockLevel: z.number().int().min(1),
  primaryElement: Element.nullable(),
  tagline: z.string().min(1),
  description: z.string().min(1),
  innatePassive: z.object({
    ten: DisplayName,
    effect: z.string().min(1),
  }),
  /** Ascendancy subtree nodes — ~6-8 nodes. */
  nodes: z.array(z.object({
    id: Slug,
    ten: DisplayName,
    type: z.enum(['notable', 'keystone']),
    effect: z.string().min(1),
    prerequisites: z.array(Slug).default([]),
  })).min(4),
  buildArchetypes: z.array(z.string()).default([]),
})
export type Ascendancy = z.infer<typeof Ascendancy>

export const AscendancyCatalog = z.array(Ascendancy).refine(
  (list) => new Set(list.map((d) => d.id)).size === list.length,
  'duplicate id',
)
