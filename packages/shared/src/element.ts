/**
 * Ngũ Hành — element grammar của toàn bộ combat math.
 * Nguồn: docs/content/combat-math.md §1 (Ngũ Hành Relationship Matrix).
 */

export const ELEMENTS = ['metal', 'wood', 'water', 'fire', 'earth'] as const
export type Element = (typeof ELEMENTS)[number]

/** Vô Cực (neutral) nằm ngoài chu kỳ ngũ hành — Cổ vật/đặc biệt. */
export type ElementOrVoid = Element | 'void'

/** Tương tác từ linh lực TỚI linh đan. */
export type Interaction = 'same' | 'generate' | 'overcome' | 'neutral'

/** Chu kỳ tương sinh: Mộc → Hoả → Thổ → Kim → Thuỷ → Mộc. */
const GENERATES: Record<Element, Element> = {
  wood: 'fire',
  fire: 'earth',
  earth: 'metal',
  metal: 'water',
  water: 'wood',
}

/** Chu kỳ tương khắc: Mộc → Thổ → Thuỷ → Hoả → Kim → Mộc. */
const OVERCOMES: Record<Element, Element> = {
  wood: 'earth',
  earth: 'water',
  water: 'fire',
  fire: 'metal',
  metal: 'wood',
}

/** Tra tương tác giữa linh lực (from) và linh đan (to). */
export function elementInteraction(from: ElementOrVoid, to: ElementOrVoid): Interaction {
  if (from === 'void' || to === 'void') return 'neutral'
  if (from === to) return 'same'
  if (GENERATES[from] === to) return 'generate'
  if (OVERCOMES[from] === to) return 'overcome'
  return 'neutral'
}

/** Hành tương sinh ra `element` (vd: wood ← water). */
export function generatorOf(element: Element): Element {
  const entry = (Object.entries(GENERATES) as [Element, Element][]).find(([, out]) => out === element)
  // Chu kỳ sinh là vòng kín 5 hành nên luôn tồn tại
  return entry![0]
}

/** Hành tương khắc `element` (vd: wood ← metal). */
export function overcomerOf(element: Element): Element {
  const entry = (Object.entries(OVERCOMES) as [Element, Element][]).find(([, out]) => out === element)
  return entry![0]
}

/** Tên hiển thị Hán-Việt — player-facing. */
export const ELEMENT_DISPLAY: Record<ElementOrVoid, string> = {
  metal: 'Kim',
  wood: 'Mộc',
  water: 'Thuỷ',
  fire: 'Hoả',
  earth: 'Thổ',
  void: 'Vô Cực',
}

/** Hán tự dùng làm glyph trên linh lực/linh khí trong pháp trận. */
export const ELEMENT_GLYPH: Record<ElementOrVoid, string> = {
  metal: '金',
  wood: '木',
  water: '水',
  fire: '火',
  earth: '土',
  void: '無',
}
