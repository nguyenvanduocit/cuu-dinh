/**
 * Rapier 2D wrapper — fixed timestep 60Hz cho deterministic-ready simulation
 * (PoC #1: replay validation cần physics tách khỏi render frame rate).
 */
import RAPIER from '@dimforge/rapier2d-compat'

export type CollisionHandler = (handle1: number, handle2: number, started: boolean) => void

const FIXED_STEP_S = 1 / 60
const MAX_STEPS_PER_FRAME = 5

let rapierReady: Promise<void> | null = null

export function initRapier(): Promise<void> {
  rapierReady ??= RAPIER.init().then(() => undefined)
  return rapierReady
}

export class PhysicsWorld {
  readonly world: RAPIER.World
  private readonly eventQueue: RAPIER.EventQueue
  private accumulatorS = 0

  constructor() {
    this.world = new RAPIER.World({ x: 0, y: 900 })
    this.world.timestep = FIXED_STEP_S
    this.eventQueue = new RAPIER.EventQueue(true)
  }

  /** Step theo accumulator; drain collision events sau mỗi step. */
  step(deltaMs: number, onCollision: CollisionHandler): void {
    this.accumulatorS = Math.min(this.accumulatorS + deltaMs / 1000, FIXED_STEP_S * MAX_STEPS_PER_FRAME)
    while (this.accumulatorS >= FIXED_STEP_S) {
      this.world.step(this.eventQueue)
      this.eventQueue.drainCollisionEvents(onCollision)
      this.accumulatorS -= FIXED_STEP_S
    }
  }

  destroy(): void {
    this.eventQueue.free()
    this.world.free()
  }
}

export { RAPIER }
