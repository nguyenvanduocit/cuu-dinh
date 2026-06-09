/**
 * Hiệu ứng linh khí khi linh lực chạm vào — behavior derive từ tags
 * (xem packages/shared/src/content/artifacts.ts + design.md của từng item).
 */
import type { Rng } from '@cuu-dinh/shared'
import type { ArtifactNode } from './entities/artifact-node.ts'
import type { SpiritOrb } from './entities/spirit-orb.ts'

export interface EffectContext {
  rng: Rng
  /** Xin nhân bản orb (Kiếm Cổ Bạch Hổ split) — controller áp cap MAX_LIVE_ORBS. */
  requestSplit: (orb: SpiritOrb) => void
  /** Hồi stability linh đan (Cành Bồ Đề). */
  healStability: (amount: number, x: number, y: number) => void
}

/** Debounce 250ms — tránh 1 lần nảy sát linh khí trigger nhiều event. */
const HIT_DEBOUNCE_MS = 250
const MAX_SPLIT_DEPTH = 2

export function applyArtifactHit(orb: SpiritOrb, node: ArtifactNode, ctx: EffectContext): void {
  const now = performance.now()
  const last = orb.recentHits.get(node.colliderHandle) ?? 0
  if (now - last < HIT_DEBOUNCE_MS) return
  orb.recentHits.set(node.colliderHandle, now)

  node.flash()
  // Mỗi lần qua linh khí = +1 chain hop (combat-math §2 Layer 1)
  orb.hops += 1

  for (const effect of node.spec.effects) {
    switch (effect.kind) {
      case 'convert':
        // Linh khí Vô Cực không convert (ngoài chu kỳ ngũ hành)
        if (node.spec.element !== 'void') orb.setElement(node.spec.element)
        break

      case 'split':
        if (effect.sameElementOnly && orb.element !== node.spec.element) break
        if (orb.splitDepth >= MAX_SPLIT_DEPTH) break
        ctx.requestSplit(orb)
        break

      case 'heal':
        if (orb.element === node.spec.element) {
          const pos = orb.body.translation()
          ctx.healStability(effect.amount, pos.x, pos.y)
        }
        break

      case 'charge': {
        orb.hops += effect.extraHops
        const vel = orb.body.linvel()
        orb.body.setLinvel({ x: vel.x * effect.slowFactor, y: vel.y * effect.slowFactor }, true)
        break
      }

      case 'chain':
        if (orb.element === node.spec.element) orb.hops += effect.bonusHopsOnMatch
        break

      case 'push': {
        // Đẩy linh lực văng ra theo hướng tâm linh khí → orb
        const orbPos = orb.body.translation()
        const dx = orbPos.x - node.anchor.x
        const dy = orbPos.y - node.anchor.y
        const len = Math.hypot(dx, dy) || 1
        const vel = orb.body.linvel()
        orb.body.setLinvel(
          { x: vel.x + (dx / len) * effect.impulse, y: vel.y + (dy / len) * effect.impulse },
          true,
        )
        break
      }

      case 'pierce':
        if (orb.element === node.spec.element) {
          const vel = orb.body.linvel()
          orb.body.setLinvel({ x: vel.x * effect.speedBoost, y: vel.y * effect.speedBoost }, true)
        }
        break

      case 'aura':
      case 'counter':
        // Passive — đọc lúc resolve elixir hit, không trigger tại đây
        break
    }
  }
}
