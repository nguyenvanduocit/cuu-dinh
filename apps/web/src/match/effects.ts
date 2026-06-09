/** Floating text feedback — delta quality/stability bay lên rồi tan. */
import { Container, Text } from 'pixi.js'

interface FloatingText {
  view: Text
  ageMs: number
  lifeMs: number
}

export class EffectLayer {
  readonly view = new Container()
  private readonly texts: FloatingText[] = []

  popText(x: number, y: number, content: string, color: number, big = false): void {
    const text = new Text({
      text: content,
      style: { fontSize: big ? 18 : 13, fill: color, fontWeight: 'bold', stroke: { color: 0x0c0a09, width: 3 } },
    })
    text.anchor.set(0.5)
    text.position.set(x, y)
    this.view.addChild(text)
    this.texts.push({ view: text, ageMs: 0, lifeMs: big ? 1100 : 750 })
  }

  update(deltaMs: number): void {
    for (let i = this.texts.length - 1; i >= 0; i--) {
      const item = this.texts[i]!
      item.ageMs += deltaMs
      const t = item.ageMs / item.lifeMs
      item.view.y -= deltaMs * 0.045
      item.view.alpha = 1 - t * t
      if (item.ageMs >= item.lifeMs) {
        item.view.destroy()
        this.texts.splice(i, 1)
      }
    }
  }

  destroy(): void {
    this.view.destroy({ children: true })
    this.texts.length = 0
  }
}
