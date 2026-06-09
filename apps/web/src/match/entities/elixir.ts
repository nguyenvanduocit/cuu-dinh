/**
 * Linh đan — objective trung tâm pháp trận (locked #14/#18).
 * Sensor: linh lực chạm vào → resolve combat rồi bị hấp thụ.
 * Visual sync qua @vue/reactivity watchEffect (critical pattern CLAUDE.md).
 */
import { ELEMENT_GLYPH, matchState } from '@cuu-dinh/shared'
import { watch, type WatchHandle } from '@vue/reactivity'
import { Container, Graphics, Text } from 'pixi.js'
import type RAPIER from '@dimforge/rapier2d-compat'
import { RAPIER as R } from '../physics-world.ts'
import { ELIXIR_POS, ELIXIR_RADIUS } from '../board-layout.ts'
import { ELEMENT_COLOR } from '../element-colors.ts'

export class Elixir {
  readonly colliderHandle: number
  readonly view: Container
  private readonly body: RAPIER.RigidBody
  private readonly aura: Graphics
  private readonly ring: Graphics
  private readonly stopWatch: WatchHandle
  private pulse = 0

  constructor(world: RAPIER.World) {
    this.body = world.createRigidBody(R.RigidBodyDesc.fixed().setTranslation(ELIXIR_POS.x, ELIXIR_POS.y))
    const collider = world.createCollider(
      R.ColliderDesc.ball(ELIXIR_RADIUS).setSensor(true).setActiveEvents(R.ActiveEvents.COLLISION_EVENTS),
      this.body,
    )
    this.colliderHandle = collider.handle

    this.view = new Container()
    this.view.position.set(ELIXIR_POS.x, ELIXIR_POS.y)
    this.aura = new Graphics()
    this.ring = new Graphics()
    const glyph = new Text({ text: ELEMENT_GLYPH[matchState.elixirElement], style: { fontSize: 20, fill: 0xfff7ed } })
    glyph.anchor.set(0.5)
    this.view.addChild(this.aura, this.ring, glyph)

    // Bridge @vue/reactivity → Pixi: vẽ lại khi quality/stability/element đổi
    // (watch không callback = watchEffect mode của @vue/reactivity standalone)
    this.stopWatch = watch(() => {
      const color = ELEMENT_COLOR[matchState.elixirElement]
      glyph.text = ELEMENT_GLYPH[matchState.elixirElement]
      const stabilityRatio = matchState.stability / 100
      const qualityRatio = Math.max(matchState.quality, 0) / matchState.targetQuality
      this.aura
        .clear()
        .circle(0, 0, ELIXIR_RADIUS + 9)
        .fill({ color, alpha: 0.12 + 0.18 * stabilityRatio })
        .circle(0, 0, ELIXIR_RADIUS)
        .fill({ color, alpha: 0.5 + 0.4 * stabilityRatio })
      this.ring
        .clear()
        .arc(0, 0, ELIXIR_RADIUS + 5, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * Math.min(qualityRatio, 1))
        .stroke({ width: 3.5, color: 0xfbbf24 })
    })
  }

  /** Nhịp thở linh đan — dao động nhẹ theo thời gian. */
  update(deltaMs: number): void {
    this.pulse += deltaMs / 600
    this.view.scale.set(1 + Math.sin(this.pulse) * 0.03)
  }

  destroy(world: RAPIER.World): void {
    this.stopWatch()
    world.removeRigidBody(this.body)
    this.view.destroy({ children: true })
  }
}
