import { z } from 'zod'
import { DisplayName, Slug } from './common.ts'

export const RiskLevel = z.enum(['low', 'medium', 'high', 'extreme'])
export type RiskLevel = z.infer<typeof RiskLevel>

/**
 * Corruption Mod (Tâm Ma) — map-level corruption modifier (PoE map mod analogue).
 * 12 base.
 */
export const CorruptionMod = z.object({
  id: Slug,
  ten: DisplayName,
  effect: z.string().min(1),
  riskLevel: RiskLevel,
  /** Reward multiplier applied to map drops when active (e.g. 1.20 = +20%). */
  rewardMultiplier: z.number().positive(),
  difficultyTier: z.number().int().min(1).max(5),
})
export type CorruptionMod = z.infer<typeof CorruptionMod>

export const CorruptionModCsvColumns = [
  'id', 'ten', 'effect', 'riskLevel', 'rewardMultiplier', 'difficultyTier',
] as const
