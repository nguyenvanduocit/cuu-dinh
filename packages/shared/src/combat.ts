/**
 * Core damage formula — port 1:1 từ docs/content/combat-math.md §2.
 * Pure function, không side effect → dùng được cho client, server validation
 * và tools/balance-simulator.
 */
import {
  BASE_CRIT_CHANCE,
  BASE_CRIT_MULTIPLIER,
  CHARGE_HOP_CAP,
  CHARGE_PER_HOP,
  ELEMENT_APPLY,
  INTENSITY_FLOOR,
  PROTOTYPE_INTENSITY_TUNING,
  VELOCITY_BASE,
  VELOCITY_FACTOR_MAX,
  VELOCITY_FACTOR_MIN,
} from './constants.ts'
import { elementInteraction, type ElementOrVoid, type Interaction } from './element.ts'

export interface ElixirHitInput {
  orbElement: ElementOrVoid
  /** Tốc độ linh lực lúc chạm đan (px/s). */
  speed: number
  /** Số chain hop đã tích (qua linh khí). */
  hops: number
  elixirElement: ElementOrVoid
  /** Cấp Đạo Sĩ — +1%/level (combat-math §2 Layer 2). */
  playerLevel: number
  /** MAP_TIER_FACTOR × tâm ma × đan pháp bias (Layer 3). T1 = 1.0. */
  mapMultiplier: number
  /** Aura linh khí (vd Tượng Thanh Long) nhân vào intensity. */
  auraMultiplier: number
  /** Giảm stability damage từ tương khắc (vd Tượng Hắc Quy). 0 = không giảm. */
  overcomeMitigation: number
  /** Roll [0,1) cho crit — inject từ seeded RNG. */
  critRoll: number
}

export interface ElixirHitResult {
  interaction: Interaction
  intensity: number
  crit: boolean
  qualityDelta: number
  stabilityDelta: number
}

export function resolveElixirHit(input: ElixirHitInput): ElixirHitResult {
  // Layer 1: base intensity = velocity factor × charge
  const velocityFactor = clamp(input.speed / VELOCITY_BASE, VELOCITY_FACTOR_MIN, VELOCITY_FACTOR_MAX)
  const charge = 1 + Math.min(input.hops, CHARGE_HOP_CAP) * CHARGE_PER_HOP
  const base = velocityFactor * charge

  // Layer 2: player multipliers (prototype: chỉ level; tree/Lò/ascendancy TODO)
  const playerMult = 1 + input.playerLevel * 0.01

  // Layer 3: map factors
  const mapMult = input.mapMultiplier

  const intensity = Math.max(
    base * playerMult * mapMult * input.auraMultiplier * PROTOTYPE_INTENSITY_TUNING,
    INTENSITY_FLOOR,
  )

  // Layer 4: element interaction
  const interaction = elementInteraction(input.orbElement, input.elixirElement)
  const apply = ELEMENT_APPLY[interaction]

  const crit = input.critRoll < BASE_CRIT_CHANCE
  const critMult = crit ? BASE_CRIT_MULTIPLIER : 1

  let qualityDelta = intensity * apply.quality * critMult
  let stabilityDelta = intensity * apply.stability
  if (interaction === 'overcome') {
    // Crit không khuếch đại damage lên chính đan của mình
    qualityDelta = intensity * apply.quality
    stabilityDelta *= 1 - clamp(input.overcomeMitigation, 0, 0.8)
  }

  return { interaction, intensity, crit, qualityDelta, stabilityDelta }
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}
