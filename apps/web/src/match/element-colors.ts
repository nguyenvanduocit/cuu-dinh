import type { ElementOrVoid } from '@cuu-dinh/shared'

/** Palette ngũ hành — đồng bộ với token trong styles/main.css. */
export const ELEMENT_COLOR: Record<ElementOrVoid, number> = {
  metal: 0xd8d4c8,
  wood: 0x4ade80,
  water: 0x38bdf8,
  fire: 0xf87171,
  earth: 0xd4a24c,
  void: 0xa78bfa,
}

export const ELEMENT_COLOR_CSS: Record<ElementOrVoid, string> = {
  metal: '#d8d4c8',
  wood: '#4ade80',
  water: '#38bdf8',
  fire: '#f87171',
  earth: '#d4a24c',
  void: '#a78bfa',
}
