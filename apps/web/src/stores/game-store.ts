/** Forever-layer store (Pinia) — screen flow + thống kê tu luyện, persist localStorage. */
import { defineStore } from 'pinia'

export type Screen = 'home' | 'match'

interface GameStateShape {
  screen: Screen
  /** Số pháp trận đã vượt (linh đan thành phẩm). */
  refinedElixirs: number
  /** Số lần đan kiếp (bể đan / hết ván). */
  calamities: number
}

const STORAGE_KEY = 'dan-kiep:forever'

function load(): Pick<GameStateShape, 'refinedElixirs' | 'calamities'> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return JSON.parse(raw) as Pick<GameStateShape, 'refinedElixirs' | 'calamities'>
  } catch {
    // storage hỏng → bắt đầu lại
  }
  return { refinedElixirs: 0, calamities: 0 }
}

export const useGameStore = defineStore('game', {
  state: (): GameStateShape => ({ screen: 'home', ...load() }),
  actions: {
    enterMatch() {
      this.screen = 'match'
    },
    exitToHome() {
      this.screen = 'home'
    },
    recordResult(won: boolean) {
      if (won) this.refinedElixirs += 1
      else this.calamities += 1
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ refinedElixirs: this.refinedElixirs, calamities: this.calamities }),
      )
    },
  },
})
