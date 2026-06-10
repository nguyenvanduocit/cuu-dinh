/** Linh lực ngũ hành — bóng nguyên tố rơi trong pháp trận (locked #14). */
import type { Element } from '@cuu-dinh/shared'
import { Container, Graphics } from 'pixi.js'
import type RAPIER from '@dimforge/rapier2d-compat'
import { RAPIER as R } from '../physics-world.ts'
import { ORB_RADIUS } from '../board-layout.ts'
import { ELEMENT_COLOR } from '../element-colors.ts'

export class SpiritOrb {
  element: Element
  /** Chain hop đã tích qua linh khí — nguồn charge intensity. */
  hops = 0
  /** Debounce: linh khí handle → timestamp lần hit cuối. */
  readonly recentHits = new Map<number, number>()
  /** Độ sâu split — chặn split đệ quy vô hạn. */
  splitDepth = 0

  readonly body: RAPIER.RigidBody
  readonly colliderHandle: number
  readonly view: Container
  private readonly core: Graphics

  constructor(world: RAPIER.World, element: Element, x: number, y: number, vx: number, vy: number) {
    this.element = element

    this.body = world.createRigidBody(
      R.RigidBodyDesc.dynamic().setTranslation(x, y).setLinvel(vx, vy).setCcdEnabled(true).setLinearDamping(0.02),
    )
    const collider = world.createCollider(
      R.ColliderDesc.ball(ORB_RADIUS)
        .setRestitution(0.62)
        .setFriction(0.08)
        .setDensity(1)
        .setActiveEvents(R.ActiveEvents.COLLISION_EVENTS),
      this.body,
    )
    this.colliderHandle = collider.handle

    this.view = new Container()
    this.core = new Graphics()
    this.view.addChild(this.core)
    this.redraw()
  }

  /** Convert nguyên tố (vd qua Chuông Đồng) → đổi cả visual. */
  setElement(element: Element): void {
    if (this.element === element) return
    this.element = element
    this.redraw()
  }

  get speed(): number {
    const { x, y } = this.body.linvel()
    return Math.hypot(x, y)
  }

  syncView(): void {
    const { x, y } = this.body.translation()
    this.view.position.set(x, y)
  }

  destroy(world: RAPIER.World): void {
    world.removeRigidBody(this.body)
    this.view.destroy({ children: true })
  }

  private redraw(): void {
    const color = ELEMENT_COLOR[this.element]
    this.core
      .clear()
      .circle(0, 0, ORB_RADIUS + 3)
      .fill({ color, alpha: 0.25 })
      .circle(0, 0, ORB_RADIUS)
      .fill({ color })
      .circle(-2, -2, ORB_RADIUS * 0.4)
      .fill({ color: 0xffffff, alpha: 0.5 })
  }
}
