# Rarity treatment — treatment + border

> Dệt vào prompt theo cột `rarity` (items/uniques) hoặc `variant` (equipment), dạng cụm prose.

| rarity (data) | variant (equipment) | Phẩm | Cụm prose dệt vào prompt |
|---|---|---|---|
| `Common` | Phàm | Phàm | `a plain dull finish framed by a simple thin gray border, no glow` |
| `Magic` | Linh | Linh | `a soft blue inner glow with a clean blue border frame` |
| `Rare` | Bảo | Bảo | `a purple crystalline sheen with an ornate purple border carrying a subtle repeating talisman pattern` |
| `Legendary` | Thần | Thần | `a bright orange aura with floating ember particles and a glowing orange border frame` |
| `Unique` | Cổ vật | Cổ | `an intense prismatic rainbow particle storm with a shifting iridescent border, legendary radiance` |

> Cột data `VeryRare` (La Hán Legendary) → map sang `Legendary`/Thần treatment.

## Bundle-specific overlay

| Bundle | Overlay rule ở đâu |
|---|---|
| `affixes/` (rune overlay per `AffixCategory` + `AffixTag`) | `../../affixes/README.md` |

## Rarity border sprite độc lập (9-slice)
Gen riêng khung rỗng (cutout → route gpt-image, `--background transparent`):
```
An empty square game-item icon border frame only, hollow center, [rarity treatment], ornamental corners. [STYLE SUFFIX]. The frame stands alone on a transparent background, a clean image with no lettering and no interface elements.
```
`Aspect: 1:1`.
