# Effects & Particles — Cửu Đỉnh

> Source: `docs/art-prompts/effects/effects.md`. 5 conceptual effects (< 10 threshold) — TABLE, not per-entity bundle.
> Each effect has element/grade variants parameterized, not separate entities.

## Effects

| id | ten | type | trigger | variants | notes |
|---|---|---|---|---|---|
| linh-luc-ball | Linh Lực (banh) | particle | Always present during pháp trận | 6 element colors (Kim/Mộc/Thuỷ/Hoả/Thổ/Vô Cực) | 16-24px, element-coded, 8-frame motion trail. Trail length/brightness scales with velocity |
| linh-dan-orb | Linh Đan orb | particle | Center of board during pháp trận | Per-element glow + bể (shatter) + phẩm thăng (burst) variants | 80px, ring fill like loading bar, crack when stability low |
| collision-burst | Vụ Nổ Va Chạm | particle | Linh lực hits linh khí or linh đan | Element-colored sparks | Small impact particle burst, sharp pixel particles |
| phong-an-seal | Phong Ấn | particle | Phong Ấn applied to item | Single variant (cinnabar red) | Big red corruption seal stamp, circular daoist talisman sigil |
| grade-aura | Hào Quang Phẩm Cấp | particle | Linh đan grade display | 7 grade variants (Phàm: dull gray / Linh: pale-blue / Bảo: purple crystal / Thần: orange radiant / Cổ: rainbow / Tiên: white+gold / Thánh: imperial-gold sun) | Halo aura overlay on linh đan orb |

## MJ Prompts

### Linh Lực ball

```
/imagine prompt: a small glowing spirit-energy orb projectile with a comet motion-blur trail, [ELEMENT TOKEN from style/element-tokens.md], bright core, on transparent dark background, painterly pixel art game effect, [STYLE SUFFIX] --ar 1:1 --stylize 100
```

Gen 6 variants (1 per element). Trail longer/brighter = higher velocity.

### Linh Đan orb

```
/imagine prompt: a luminous alchemical elixir orb glowing at the center of a furnace board, a circular quality-fill ring around it, suspended and precious, [element-colored glow], on dark background, painterly pixel art game object, [STYLE SUFFIX] --ar 1:1 --stylize 120
```

Variants: bể = `the elixir orb shattering into pieces with a red flash`. Phẩm thăng = `the elixir orb erupting in a particle burst, shifting to a higher-tier color`.

### Collision burst

```
/imagine prompt: a small impact particle burst, [element-colored] sparks radiating from a collision point, sharp pixel particles, on transparent dark, painterly pixel art game effect, [STYLE SUFFIX] --ar 1:1 --stylize 90
```

### Phong Ấn seal

```
/imagine prompt: a large ominous cinnabar-red corruption seal stamp, a circular daoist talisman sigil with jagged runes, glowing dangerously, on transparent dark, painterly pixel art game effect, [STYLE SUFFIX] --ar 1:1 --stylize 110
```

### Grade aura (7 variants)

| Phẩm | Aura prompt |
|---|---|
| Phàm | `dull gray stone aura, no glow` |
| Linh | `soft pale-blue glow` |
| Bảo | `purple crystal sheen aura` |
| Thần | `bright orange radiant aura` |
| Cổ | `shifting rainbow multi-color glow` |
| Tiên | `blinding pure-white aura with golden particles` |
| Thánh | `imperial-gold sun-like radiance` |

## Notes

- Effects/particles: prioritize dark contrasting background; alpha/transparent handled in Aseprite post-processing.
- All effects are PixiJS particle systems at runtime — MJ output is reference only.
