> Nguồn data: `art-direction.md:105-127, :98-102` (effect specs). Append [STYLE SUFFIX] từ `../../content/_style/style-suffix.md`.

# Effects & Particles — `--ar 1:1 --stylize 100`, nền tối/trong

---

## 3.1 Linh Lực ball (banh) — `art-direction.md:105-116`

16-24px, element-coded, 8-frame motion trail.

```
/imagine prompt: a small glowing spirit-energy orb projectile with a comet motion-blur trail, [ELEMENT TOKEN từ ../../content/_style/element-tokens.md], bright core, on transparent dark background, painterly pixel art game effect, moody pixel art game art, xianxia daoist alchemy aesthetic, talismanic cinnabar runes and bagua trigram motifs, limited six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple, hand-crafted sprite craftsmanship in the spirit of Eastward and Sea of Stars, atmospheric serious mystical tone, crisp hard pixel edges --style raw --v 6 --no anime, manga, ukiyo-e, western fantasy, generic asian temple stock photo, photorealistic, 3d render, glossy plastic, modern, text, ui, watermark, signature, blur --ar 1:1 --stylize 100
```

Gen 6 bản (1 mỗi element). Trail dài/sáng hơn = velocity cao.

## 3.2 Linh Đan orb (objective) — `art-direction.md:118-127`

80px, ring fill như loading bar, crack khi stability thấp.

```
/imagine prompt: a luminous alchemical elixir orb glowing at the center of a furnace board, a circular quality-fill ring around it, suspended and precious, [element-colored glow], on dark background, painterly pixel art game object, [STYLE SUFFIX] --ar 1:1 --stylize 120
```

Biến thể: **bể (destroyed)** → `the elixir orb shattering into pieces with a red flash`. **Phẩm thăng** → `the elixir orb erupting in a particle burst, shifting to a higher-tier color`.

## 3.3 Collision burst

```
/imagine prompt: a small impact particle burst, [element-colored] sparks radiating from a collision point, sharp pixel particles, on transparent dark, painterly pixel art game effect, [STYLE SUFFIX] --ar 1:1 --stylize 90
```

## 3.4 Phong Ấn seal — `art-direction.md:103`

Big red corruption seal khắc lên item.

```
/imagine prompt: a large ominous cinnabar-red corruption seal stamp, a circular daoist talisman sigil with jagged runes, glowing dangerously, on transparent dark, painterly pixel art game effect, [STYLE SUFFIX] --ar 1:1 --stylize 110
```

## 3.5 Linh đan grade aura (7 phẩm cấp) — `art-direction.md:49-60`

Halo aura tách riêng cho từng phẩm, overlay lên orb:

| Phẩm | aura prompt |
|---|---|
| Phàm | `dull gray stone aura, no glow` |
| Linh | `soft pale-blue glow` |
| Bảo | `purple crystal sheen aura` |
| Thần | `bright orange radiant aura` |
| Cổ | `shifting rainbow multi-color glow` |
| Tiên | `blinding pure-white aura with golden particles` |
| Thánh | `imperial-gold sun-like radiance` |

---

## Lưu ý

- Effect/particle: ưu tiên nền tối tương phản; alpha/transparent xử lý ở Aseprite sau.
