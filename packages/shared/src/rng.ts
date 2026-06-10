/**
 * Seeded RNG (mulberry32) — mọi randomness của match layer đi qua đây
 * để giữ đường tới deterministic replay (PoC #1 trong CLAUDE.md).
 */
export interface Rng {
  /** [0, 1) */
  next(): number
  /** Số nguyên [min, max] inclusive. */
  int(min: number, max: number): number
  /** Chọn 1 phần tử theo trọng số. */
  weighted<T>(entries: ReadonlyArray<readonly [T, number]>): T
}

export function createRng(seed: number): Rng {
  let state = seed >>> 0
  const next = (): number => {
    state = (state + 0x6d2b79f5) >>> 0
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
  return {
    next,
    int(min, max) {
      return min + Math.floor(next() * (max - min + 1))
    },
    weighted(entries) {
      const total = entries.reduce((sum, [, w]) => sum + w, 0)
      let roll = next() * total
      for (const [value, weight] of entries) {
        roll -= weight
        if (roll <= 0) return value
      }
      return entries[entries.length - 1]![0]
    },
  }
}
