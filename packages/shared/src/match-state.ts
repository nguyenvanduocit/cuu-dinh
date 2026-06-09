/**
 * Match-layer reactive store — critical pattern CLAUDE.md:
 * dùng @vue/reactivity standalone nên cùng 1 state đọc được từ
 * Pixi game loop (watchEffect) lẫn Vue templates (HUD).
 */
import { reactive } from '@vue/reactivity'
import { QUALITY_MAX, QUALITY_MIN, ROUNDS_PER_MAP, STABILITY_MAX, STABILITY_START } from './constants.ts'
import type { Element } from './element.ts'

export type MatchPhase = 'idle' | 'setup' | 'dropping' | 'won' | 'lost'
export type LossReason = 'shattered' | 'exhausted' | null

export interface MatchState {
  phase: MatchPhase
  round: number
  roundCount: number
  bossRound: boolean
  /** Phẩm cấp progress 0-100 (Phàm, prototype). */
  quality: number
  targetQuality: number
  /** HP của linh đan — combat-math §5. */
  stability: number
  elixirElement: Element
  orbsQueued: number
  orbsAlive: number
  hits: number
  crits: number
  lossReason: LossReason
}

export const matchState: MatchState = reactive({
  phase: 'idle',
  round: 1,
  roundCount: ROUNDS_PER_MAP,
  bossRound: false,
  quality: 0,
  targetQuality: QUALITY_MAX,
  stability: STABILITY_START,
  elixirElement: 'wood',
  orbsQueued: 0,
  orbsAlive: 0,
  hits: 0,
  crits: 0,
  lossReason: null,
})

export function resetMatch(elixirElement: Element): void {
  matchState.phase = 'setup'
  matchState.round = 1
  matchState.bossRound = false
  matchState.quality = 0
  matchState.stability = STABILITY_START
  matchState.elixirElement = elixirElement
  matchState.orbsQueued = 0
  matchState.orbsAlive = 0
  matchState.hits = 0
  matchState.crits = 0
  matchState.lossReason = null
}

/** Apply delta từ resolveElixirHit + check fail/win state (locked #15). */
export function applyElixirDelta(qualityDelta: number, stabilityDelta: number, crit: boolean): void {
  matchState.hits += 1
  if (crit) matchState.crits += 1
  matchState.quality = clamp(matchState.quality + qualityDelta, QUALITY_MIN, QUALITY_MAX)
  matchState.stability = clamp(matchState.stability + stabilityDelta, 0, STABILITY_MAX)

  if (matchState.stability <= 0 || matchState.quality <= QUALITY_MIN) {
    matchState.phase = 'lost'
    matchState.lossReason = 'shattered'
  } else if (matchState.quality >= matchState.targetQuality) {
    matchState.phase = 'won'
  }
}

/** Hết ván — sang setup ván kế hoặc thua vì hết ván mà chưa đạt phẩm. */
export function finishRound(): void {
  if (matchState.phase !== 'dropping') return
  if (matchState.round >= matchState.roundCount) {
    matchState.phase = 'lost'
    matchState.lossReason = 'exhausted'
    return
  }
  matchState.round += 1
  matchState.bossRound = matchState.round === matchState.roundCount
  matchState.phase = 'setup'
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}
