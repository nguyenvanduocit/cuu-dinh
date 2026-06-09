/**
 * MatchController — điều phối match layer: Pixi stage + Rapier world +
 * ván flow (setup → dropping → next ván / won / lost).
 * State expose qua @vue/reactivity (matchState, placementState) cho Vue HUD.
 */
import {
  ARTIFACTS,
  MAX_LIVE_ORBS,
  ORBS_BOSS_ROUND,
  ORBS_PER_ROUND,
  ROUND_SETTLE_TIMEOUT_MS,
  applyElixirDelta,
  artifactById,
  createRng,
  finishRound,
  generatorOf,
  matchState,
  overcomerOf,
  resetMatch,
  resolveElixirHit,
  type Element,
  type Rng,
} from '@cuu-dinh/shared'
import { watch } from '@vue/reactivity'
import { Application, Container, Rectangle, type FederatedPointerEvent } from 'pixi.js'
import { ANCHORS, BOARD_HEIGHT, BOARD_WIDTH, CATCH_ZONE, SPAWN_Y, WALLS } from './board-layout.ts'
import { buildAnchorView, buildBoardView } from './board-view.ts'
import { applyArtifactHit } from './collision-effects.ts'
import { EffectLayer } from './effects.ts'
import { ArtifactNode } from './entities/artifact-node.ts'
import { Elixir } from './entities/elixir.ts'
import { SpiritOrb } from './entities/spirit-orb.ts'
import { PhysicsWorld, RAPIER, initRapier } from './physics-world.ts'
import { canPlaceMore, placementState, resetPlacement } from './placement-state.ts'

const SPAWN_INTERVAL_MS = 650
const BOSS_SPAWN_INTERVAL_MS = 480
const BOSS_GUST_INTERVAL_MS = 900
const ANCHOR_TAP_RADIUS = 38

export class MatchController {
  private app: Application | null = null
  private physics: PhysicsWorld | null = null
  private elixir: Elixir | null = null
  private effects = new EffectLayer()
  private orbLayer = new Container()
  private artifactLayer = new Container()
  private anchorLayer = new Container()

  private readonly orbs = new Map<number, SpiritOrb>()
  private readonly artifacts = new Map<number, ArtifactNode>()
  private catchHandle = -1
  private rng: Rng = createRng(Date.now() >>> 0)

  private spawnTimerMs = 0
  private gustTimerMs = 0
  private sweepMs = 0
  private settleTimerMs = 0
  private pendingSplits: SpiritOrb[] = []
  private absorbed = new Set<number>()
  private stopPlacementWatch: (() => void) | null = null

  async init(container: HTMLElement): Promise<void> {
    await initRapier()
    const app = new Application()
    await app.init({
      width: BOARD_WIDTH,
      height: BOARD_HEIGHT,
      background: 0x110f0d,
      antialias: true,
      resolution: Math.min(window.devicePixelRatio, 2),
      autoDensity: true,
    })
    container.appendChild(app.canvas)
    app.canvas.style.width = '100%'
    app.canvas.style.height = 'auto'
    this.app = app

    this.physics = new PhysicsWorld()
    this.buildStaticColliders()

    this.anchorLayer = buildAnchorView()
    app.stage.addChild(buildBoardView(), this.anchorLayer, this.artifactLayer, this.orbLayer)
    this.elixir = new Elixir(this.physics.world)
    app.stage.addChild(this.elixir.view, this.effects.view)

    app.stage.eventMode = 'static'
    app.stage.hitArea = new Rectangle(0, 0, BOARD_WIDTH, BOARD_HEIGHT)
    app.stage.on('pointertap', (event: FederatedPointerEvent) => this.onBoardTap(event))

    // Vue hand mutate placementState → rebuild linh khí trên board
    this.stopPlacementWatch = watch(
      () => ({ ...placementState.placed }),
      () => this.syncArtifacts(),
    )

    app.ticker.add((ticker) => this.update(ticker.deltaMS))
    this.startMatch()
  }

  startMatch(): void {
    resetPlacement()
    resetMatch('wood')
    for (const orb of this.orbs.values()) orb.destroy(this.physics!.world)
    this.orbs.clear()
    this.absorbed.clear()
    this.syncArtifacts()
  }

  /** Bắt đầu thả linh lực cho ván hiện tại. */
  startRound(): void {
    if (matchState.phase !== 'setup') return
    placementState.selectedId = null
    matchState.phase = 'dropping'
    matchState.orbsQueued = matchState.bossRound ? ORBS_BOSS_ROUND : ORBS_PER_ROUND
    this.spawnTimerMs = 0
    this.gustTimerMs = 0
    this.settleTimerMs = 0
  }

  destroy(): void {
    this.stopPlacementWatch?.()
    this.effects.destroy()
    if (this.physics) {
      for (const orb of this.orbs.values()) orb.destroy(this.physics.world)
      for (const node of this.artifacts.values()) node.destroy(this.physics.world)
      this.elixir?.destroy(this.physics.world)
      this.physics.destroy()
    }
    this.app?.destroy(true, { children: true })
    this.app = null
    this.physics = null
  }

  private buildStaticColliders(): void {
    const world = this.physics!.world
    for (const wall of WALLS) {
      const body = world.createRigidBody(
        RAPIER.RigidBodyDesc.fixed().setTranslation(wall.cx, wall.cy).setRotation(wall.rotation),
      )
      world.createCollider(RAPIER.ColliderDesc.cuboid(wall.halfWidth, wall.halfHeight).setRestitution(0.4), body)
    }
    const catchBody = world.createRigidBody(
      RAPIER.RigidBodyDesc.fixed().setTranslation(CATCH_ZONE.cx, CATCH_ZONE.cy),
    )
    this.catchHandle = world.createCollider(
      RAPIER.ColliderDesc.cuboid(CATCH_ZONE.halfWidth, CATCH_ZONE.halfHeight)
        .setSensor(true)
        .setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS),
      catchBody,
    ).handle
  }

  private update(deltaMs: number): void {
    if (!this.physics || !this.app) return

    if (matchState.phase === 'dropping') {
      this.updateSpawning(deltaMs)
      if (matchState.bossRound) this.updateBossGusts(deltaMs)
    }

    this.physics.step(deltaMs, (h1, h2, started) => this.onCollision(h1, h2, started))
    this.flushPendingActions()

    for (const orb of this.orbs.values()) orb.syncView()
    for (const node of this.artifacts.values()) node.update()
    this.elixir?.update(deltaMs)
    this.effects.update(deltaMs)
    this.anchorLayer.visible = matchState.phase === 'setup'
    this.anchorLayer.alpha = placementState.selectedId ? 1 : 0.45
    matchState.orbsAlive = this.orbs.size

    if (matchState.phase === 'dropping' && matchState.orbsQueued === 0) {
      // Linh lực kẹt ở nêm phễu có thể ngủ yên mãi — Đế thu hồi sau timeout
      this.settleTimerMs += deltaMs
      if (this.settleTimerMs >= ROUND_SETTLE_TIMEOUT_MS && this.orbs.size > 0) {
        for (const orb of this.orbs.values()) orb.destroy(this.physics.world)
        this.orbs.clear()
      }
      if (this.orbs.size === 0) finishRound()
    }
    if ((matchState.phase === 'won' || matchState.phase === 'lost') && this.orbs.size > 0) {
      for (const orb of this.orbs.values()) orb.destroy(this.physics.world)
      this.orbs.clear()
    }
  }

  private updateSpawning(deltaMs: number): void {
    this.sweepMs += deltaMs
    if (matchState.orbsQueued <= 0) return
    this.spawnTimerMs -= deltaMs
    if (this.spawnTimerMs > 0) return
    this.spawnTimerMs = matchState.bossRound ? BOSS_SPAWN_INTERVAL_MS : SPAWN_INTERVAL_MS
    matchState.orbsQueued -= 1
    this.spawnOrb()
  }

  private spawnOrb(): void {
    if (this.orbs.size >= MAX_LIVE_ORBS) return
    const target = matchState.elixirElement
    // Phân bố sympathy: thiên về hành sinh đan, vẫn chừa hành khắc làm rủi ro
    const element = this.rng.weighted<Element>([
      [generatorOf(target), 30],
      [target, 20],
      [overcomerOf(target), 15],
      ...(['metal', 'wood', 'water', 'fire', 'earth'] as Element[])
        .filter((e) => e !== target && e !== generatorOf(target) && e !== overcomerOf(target))
        .map((e) => [e, 17.5] as const),
    ])
    const x = BOARD_WIDTH / 2 + Math.sin(this.sweepMs / 1300) * 150 + (this.rng.next() - 0.5) * 40
    const orb = new SpiritOrb(
      this.physics!.world,
      element,
      Math.min(Math.max(x, 20), BOARD_WIDTH - 20),
      SPAWN_Y,
      (this.rng.next() - 0.5) * 80,
      60,
    )
    this.orbs.set(orb.colliderHandle, orb)
    this.orbLayer.addChild(orb.view)
  }

  private updateBossGusts(deltaMs: number): void {
    // Dị Tượng "Cuồng Phong" — gió quật linh lực lệch hướng theo nhịp
    this.gustTimerMs += deltaMs
    if (this.gustTimerMs < BOSS_GUST_INTERVAL_MS) return
    this.gustTimerMs = 0
    const direction = this.rng.next() < 0.5 ? -1 : 1
    for (const orb of this.orbs.values()) {
      const vel = orb.body.linvel()
      orb.body.setLinvel({ x: vel.x + direction * (60 + this.rng.next() * 80), y: vel.y }, true)
    }
  }

  private onCollision(h1: number, h2: number, started: boolean): void {
    if (!started) return
    const [orbHandle, otherHandle] = this.orbs.has(h1) ? [h1, h2] : [h2, h1]
    const orb = this.orbs.get(orbHandle)
    if (!orb) return

    if (otherHandle === this.elixir?.colliderHandle) {
      if (!this.absorbed.has(orbHandle)) {
        this.absorbed.add(orbHandle)
        this.resolveHit(orb)
      }
      return
    }
    if (otherHandle === this.catchHandle) {
      this.absorbed.add(orbHandle)
      return
    }
    const node = this.artifacts.get(otherHandle)
    if (node) {
      applyArtifactHit(orb, node, {
        rng: this.rng,
        requestSplit: (source) => this.pendingSplits.push(source),
        healStability: (amount, x, y) => {
          matchState.stability = Math.min(matchState.stability + amount, 100)
          this.effects.popText(x, y, `+${amount} ổn định`, 0x4ade80)
        },
      })
    }
  }

  private resolveHit(orb: SpiritOrb): void {
    const auraCount = [...this.artifacts.values()].filter(
      (node) => node.spec.element === orb.element && node.spec.effects.some((e) => e.kind === 'aura'),
    ).length
    const mitigation = [...this.artifacts.values()].reduce(
      (sum, node) => sum + node.spec.effects.filter((e) => e.kind === 'counter').reduce((s, e) => s + e.overcomeMitigation, 0),
      0,
    )
    const result = resolveElixirHit({
      orbElement: orb.element,
      speed: orb.speed,
      hops: orb.hops,
      elixirElement: matchState.elixirElement,
      playerLevel: 1,
      mapMultiplier: 1, // T1 — MAP_TIER_FACTOR base
      auraMultiplier: 1.15 ** auraCount,
      overcomeMitigation: mitigation,
      critRoll: this.rng.next(),
    })
    applyElixirDelta(result.qualityDelta, result.stabilityDelta, result.crit)

    const pos = orb.body.translation()
    if (result.qualityDelta !== 0) {
      const sign = result.qualityDelta > 0 ? '+' : ''
      const label = `${result.crit ? 'BẠO KÍCH ' : ''}${sign}${result.qualityDelta.toFixed(1)}`
      this.effects.popText(pos.x, pos.y - 14, label, result.qualityDelta > 0 ? 0xfbbf24 : 0xef4444, result.crit)
    }
    if (result.stabilityDelta < -0.05) {
      this.effects.popText(pos.x, pos.y + 6, `${result.stabilityDelta.toFixed(1)} ổn định`, 0xf87171)
    }
  }

  /** Sau khi physics step xong mới mutate world (split/remove) cho an toàn. */
  private flushPendingActions(): void {
    const world = this.physics!.world
    for (const handle of this.absorbed) {
      const orb = this.orbs.get(handle)
      if (orb) {
        orb.destroy(world)
        this.orbs.delete(handle)
      }
    }
    this.absorbed.clear()
    for (const source of this.pendingSplits) {
      if (this.orbs.size >= MAX_LIVE_ORBS || !this.orbs.has(source.colliderHandle)) continue
      const pos = source.body.translation()
      const vel = source.body.linvel()
      const angle = Math.atan2(vel.y, vel.x)
      const speed = Math.hypot(vel.x, vel.y) * 0.8
      for (const sign of [-1, 1]) {
        const a = angle + (sign * Math.PI) / 6
        const child = new SpiritOrb(world, source.element, pos.x + sign * 9, pos.y, Math.cos(a) * speed, Math.sin(a) * speed)
        child.hops = source.hops
        child.splitDepth = source.splitDepth + 1
        this.orbs.set(child.colliderHandle, child)
        this.orbLayer.addChild(child.view)
      }
      source.destroy(world)
      this.orbs.delete(source.colliderHandle)
    }
    this.pendingSplits = []
  }

  private onBoardTap(event: FederatedPointerEvent): void {
    if (matchState.phase !== 'setup') return
    const local = event.getLocalPosition(this.app!.stage)
    const anchor = ANCHORS.find((a) => Math.hypot(a.x - local.x, a.y - local.y) < ANCHOR_TAP_RADIUS)
    if (!anchor) return

    const occupant = Object.entries(placementState.placed).find(([, idx]) => idx === anchor.index)?.[0]
    const selected = placementState.selectedId
    if (occupant && !selected) {
      // Nhấc linh khí đang đặt lên tay
      delete placementState.placed[occupant]
      placementState.selectedId = occupant
      return
    }
    if (!selected) return
    if (occupant) delete placementState.placed[occupant]
    const isMove = selected in placementState.placed
    if (!isMove && !canPlaceMore()) return
    placementState.placed[selected] = anchor.index
    placementState.selectedId = null
  }

  private syncArtifacts(): void {
    if (!this.physics) return
    for (const node of this.artifacts.values()) node.destroy(this.physics.world)
    this.artifacts.clear()
    for (const [id, anchorIndex] of Object.entries(placementState.placed)) {
      const anchor = ANCHORS[anchorIndex]
      if (!anchor) continue
      const node = new ArtifactNode(this.physics.world, artifactById(id), anchor)
      this.artifacts.set(node.colliderHandle, node)
      this.artifactLayer.addChild(node.view)
    }
  }
}

export const PROTOTYPE_HAND = ARTIFACTS.map((artifact) => artifact.id)
