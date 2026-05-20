import { z } from 'zod'
import { DisplayName, Element, Slug } from './common.ts'

export const PassiveNodeType = z.enum(['starting', 'small', 'notable', 'keystone'])
export type PassiveNodeType = z.infer<typeof PassiveNodeType>

/**
 * Single node on the Passive tree (Tinh Điểm).
 * ~150 nodes, with 5 starting clusters (one per element).
 */
export const PassiveNode = z.object({
  id: Slug,
  ten: DisplayName,
  type: PassiveNodeType,
  effect: z.string().min(1),
  /** Element affinity; null for cross-element nodes. */
  element: Element.nullable(),
  /** Adjacent node IDs (graph edges, undirected). */
  connections: z.array(Slug).default([]),
  position: z.object({ x: z.number(), y: z.number() }),
  cluster: z.string().min(1),
})
export type PassiveNode = z.infer<typeof PassiveNode>

export const PassiveTree = z.object({
  version: z.number().int().positive(),
  nodes: z.array(PassiveNode).refine(
    (nodes) => new Set(nodes.map((n) => n.id)).size === nodes.length,
    'duplicate node id',
  ),
})
export type PassiveTree = z.infer<typeof PassiveTree>
