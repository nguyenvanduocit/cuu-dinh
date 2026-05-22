# Rarity tokens — treatment + border

> Theo cột `rarity` (items/uniques) hoặc `variant` (equipment). Nguồn: `art-direction.md:90-103`.
>
> Treatment dưới đây là cụm danh-từ — **dệt vào câu văn xuôi** của prompt (không dán nguyên comma-token). Ví dụ `Common` → "It bears a plain dull finish inside a simple thin gray border frame, with no glow."

| rarity (data) | variant (equipment) | Phẩm | Treatment dệt vào prompt |
|---|---|---|---|
| `Common` | Phàm | Phàm | `plain dull finish, simple thin gray border frame, no glow` |
| `Magic` | Linh | Linh | `soft blue inner glow, clean blue border frame` |
| `Rare` | Bảo | Bảo | `purple crystalline sheen, ornate purple border with a subtle repeating talisman pattern` |
| `Legendary` | Thần | Thần | `bright orange aura with floating ember particles, glowing orange border frame` |
| `Unique` | Cổ vật | Cổ | `intense prismatic rainbow particle storm, shifting iridescent border, legendary radiance` |

> Cột data `VeryRare` (La Hán Legendary) → map sang `Legendary`/Thần treatment.

## Bundle-specific overlay

| Bundle | Overlay rule ở đâu |
|---|---|
| `affixes/` (rune overlay per `AffixCategory` + `AffixTag`) | `../../affixes/README.md` |

## Rarity border sprite độc lập (9-slice)
Gen riêng khung rỗng: "An empty square game-item icon border frame only, hollow center, `<treatment>`, ornamental corners. `<STYLE BLOCK>`. `<BACKGROUND magenta>`." — Aspect 1:1.
