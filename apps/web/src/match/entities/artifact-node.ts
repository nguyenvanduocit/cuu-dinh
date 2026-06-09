/** Linh khí đặt trên anchor point — pháp bảo dẫn linh lực. */
import type { ArtifactSpec } from '@cuu-dinh/shared'
import { ELEMENT_GLYPH } from '@cuu-dinh/shared'
import { Container, Graphics, Text } from 'pixi.js'
import type RAPIER from '@dimforge/rapier2d-compat'
import { RAPIER as R } from '../physics-world.ts'
import { ARTIFACT_RADIUS, type Anchor } from '../board-layout.ts'
import { ELEMENT_COLOR } from '../element-colors.ts'

export class ArtifactNode {
  readonly spec: ArtifactSpec
  readonly anchor: Anchor
  readonly body: RAPIER.RigidBody
  readonly colliderHandle: number
  readonly view: Container
  private flashUntil = 0

  constructor(world: RAPIER.World, spec: ArtifactSpec, anchor: Anchor) {
    this.spec = spec
    this.anchor = anchor

    this.body = world.createRigidBody(R.RigidBodyDesc.fixed().setTranslation(anchor.x, anchor.y))
    const collider = world.createCollider(
      R.ColliderDesc.ball(ARTIFACT_RADIUS).setRestitution(0.85).setActiveEvents(R.ActiveEvents.COLLISION_EVENTS),
      this.body,
    )
    this.colliderHandle = collider.handle

    const color = ELEMENT_COLOR[spec.element]
    this.view = new Container()
    this.view.position.set(anchor.x, anchor.y)

    const base = new Graphics()
      .circle(0, 0, ARTIFACT_RADIUS)
      .fill({ color: 0x1c1917 })
      .stroke({ width: 2.5, color })
      .circle(0, 0, ARTIFACT_RADIUS - 5)
      .stroke({ width: 1, color, alpha: 0.4 })
    const glyph = new Text({
      text: ELEMENT_GLYPH[spec.element],
      style: { fontSize: 15, fill: color, fontWeight: 'bold' },
    })
    glyph.anchor.set(0.5)
    this.view.addChild(base, glyph)
  }

  /** Nháy sáng khi bị linh lực chạm. */
  flash(): void {
    this.flashUntil = performance.now() + 140
    this.view.scale.set(1.18)
  }

  update(): void {
    if (this.flashUntil > 0 && performance.now() > this.flashUntil) {
      this.view.scale.set(1)
      this.flashUntil = 0
    }
  }

  destroy(world: RAPIER.World): void {
    world.removeRigidBody(this.body)
    this.view.destroy({ children: true })
  }
}
