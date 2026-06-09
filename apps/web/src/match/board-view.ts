/** Vẽ pháp trận tĩnh: tường, phễu, anchor points. */
import { Container, Graphics } from 'pixi.js'
import { ANCHORS, BOARD_HEIGHT, BOARD_WIDTH, WALLS, type WallSegment } from './board-layout.ts'

function wallCorners(wall: WallSegment): number[] {
  const cos = Math.cos(wall.rotation)
  const sin = Math.sin(wall.rotation)
  const points: number[] = []
  for (const [sx, sy] of [
    [-wall.halfWidth, -wall.halfHeight],
    [wall.halfWidth, -wall.halfHeight],
    [wall.halfWidth, wall.halfHeight],
    [-wall.halfWidth, wall.halfHeight],
  ] as const) {
    points.push(wall.cx + sx * cos - sy * sin, wall.cy + sx * sin + sy * cos)
  }
  return points
}

export function buildBoardView(): Container {
  const layer = new Container()
  const g = new Graphics()

  g.rect(0, 0, BOARD_WIDTH, BOARD_HEIGHT).fill({ color: 0x110f0d })
  // Vân pháp trận — vòng đồng tâm mờ quanh vị trí linh đan
  for (const radius of [60, 110, 170]) {
    g.circle(BOARD_WIDTH / 2, 538, radius).stroke({ width: 1, color: 0x57534e, alpha: 0.25 })
  }
  for (const wall of WALLS) {
    g.poly(wallCorners(wall)).fill({ color: 0x44403c, alpha: 0.9 })
  }
  layer.addChild(g)
  return layer
}

export function buildAnchorView(): Container {
  const layer = new Container()
  for (const anchor of ANCHORS) {
    const marker = new Graphics()
      .poly([0, -6, 6, 0, 0, 6, -6, 0])
      .stroke({ width: 1.5, color: 0xa8a29e, alpha: 0.65 })
    marker.position.set(anchor.x, anchor.y)
    layer.addChild(marker)
  }
  return layer
}
