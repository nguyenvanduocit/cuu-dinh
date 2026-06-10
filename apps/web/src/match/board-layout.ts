/**
 * Hình học pháp trận — portrait 390×600 (vùng canvas giữa HUD và thumb-bar,
 * locked #31 mobile portrait).
 */

export const BOARD_WIDTH = 390
export const BOARD_HEIGHT = 600

export const ORB_RADIUS = 7
export const ARTIFACT_RADIUS = 18
export const ELIXIR_RADIUS = 26

export const ELIXIR_POS = { x: BOARD_WIDTH / 2, y: 538 } as const

export const SPAWN_Y = 14

/** Anchor grid 5×5 — điểm đặt linh khí giữa vùng spawn và phễu. */
export const ANCHOR_COLS = [55, 125, 195, 265, 335] as const
export const ANCHOR_ROWS = [120, 192, 264, 336, 408] as const

export interface Anchor {
  index: number
  x: number
  y: number
}

export const ANCHORS: ReadonlyArray<Anchor> = ANCHOR_ROWS.flatMap((y, rowIdx) =>
  ANCHOR_COLS.map((x, colIdx) => ({
    index: rowIdx * ANCHOR_COLS.length + colIdx,
    x,
    y,
  })),
)

/** Tường + phễu — mỗi segment là cuboid mỏng đặt theo tâm/góc xoay. */
export interface WallSegment {
  cx: number
  cy: number
  halfWidth: number
  halfHeight: number
  rotation: number
}

const funnelAngle = Math.atan2(80, 135)

export const WALLS: ReadonlyArray<WallSegment> = [
  { cx: 2, cy: BOARD_HEIGHT / 2, halfWidth: 4, halfHeight: BOARD_HEIGHT / 2, rotation: 0 },
  { cx: BOARD_WIDTH - 2, cy: BOARD_HEIGHT / 2, halfWidth: 4, halfHeight: BOARD_HEIGHT / 2, rotation: 0 },
  { cx: BOARD_WIDTH / 2, cy: -10, halfWidth: BOARD_WIDTH / 2, halfHeight: 4, rotation: 0 },
  // Phễu trái: (25, 446) → (160, 526)
  { cx: 92.5, cy: 486, halfWidth: 79, halfHeight: 3, rotation: funnelAngle },
  // Phễu phải: (365, 446) → (230, 526)
  { cx: 297.5, cy: 486, halfWidth: 79, halfHeight: 3, rotation: -funnelAngle },
]

/** Catch zone (Đế) — sensor hớt linh lực lọt qua đáy. */
export const CATCH_ZONE = { cx: BOARD_WIDTH / 2, cy: BOARD_HEIGHT + 20, halfWidth: BOARD_WIDTH, halfHeight: 12 } as const
