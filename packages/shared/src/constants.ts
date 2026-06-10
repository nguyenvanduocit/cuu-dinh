/**
 * Hằng số match-layer. Nguồn công thức: docs/content/combat-math.md.
 * Đơn vị physics = pixel (Rapier unit-agnostic, board logic 390×844 portrait).
 */

/** Velocity chuẩn hoá intensity — combat-math §2 Layer 1 (0.5x → 2.0x). */
export const VELOCITY_BASE = 400

/** Kẹp velocity factor theo combat-math §3. */
export const VELOCITY_FACTOR_MIN = 0.5
export const VELOCITY_FACTOR_MAX = 2.0

/** +20% intensity mỗi chain hop, cap 10 hop (+200%) — combat-math §2/§3. */
export const CHARGE_PER_HOP = 0.2
export const CHARGE_HOP_CAP = 10

/** Floor intensity 0.1x — bad luck protection (combat-math §3). */
export const INTENSITY_FLOOR = 0.1

/** Crit mặc định — combat-math §4. */
export const BASE_CRIT_CHANCE = 0.05
export const BASE_CRIT_MULTIPLIER = 1.5

/** Stability — combat-math §5. */
export const STABILITY_START = 100
export const STABILITY_MAX = 100

/** Quality clamp per phẩm — combat-math §2 (clamp -50..100). Quality < -50 = bể. */
export const QUALITY_MIN = -50
export const QUALITY_MAX = 100

/** Hệ số element apply lên quality/stability — combat-math §2 Layer 4. */
export const ELEMENT_APPLY = {
  generate: { quality: 0.3, stability: 0.05 },
  same: { quality: 0.1, stability: 0.02 },
  neutral: { quality: 0.05, stability: 0 },
  overcome: { quality: -0.1, stability: -0.4 },
} as const

/**
 * WHY: vertical slice T1 chỉ có ~50 hit/pháp trận (6 ván) thay vì 80-100 hit
 * của mid-game worked example A — tuning ×9 để target Phàm 100% đạt được
 * trong 1 pháp trận prototype (playtest 2026-06-09: ×6 cho ~+15%/ván với
 * placement tốt → không thể thắng). TODO(tech-debt): thay bằng
 * MAP_TIER_FACTOR + player build mult thật khi có tools/balance-simulator.
 */
export const PROTOTYPE_INTENSITY_TUNING = 9.0

/** Sau khi hết linh lực queue, chờ tối đa X ms cho orb kẹt rồi thu hồi (Đế). */
export const ROUND_SETTLE_TIMEOUT_MS = 10_000

/** Pháp trận prototype: 5 ván thường + 1 ván Dị Tượng (locked #6, #20). */
export const ROUNDS_PER_MAP = 6
export const ORBS_PER_ROUND = 14
export const ORBS_BOSS_ROUND = 18

/** Số linh khí tối đa đặt trên board (Lò.Thân base prototype). */
export const MAX_PLACED_ARTIFACTS = 6

/** Giới hạn linh lực sống đồng thời (split có thể nhân bản). */
export const MAX_LIVE_ORBS = 40
