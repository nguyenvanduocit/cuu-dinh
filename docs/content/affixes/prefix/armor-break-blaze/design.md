---
id: armor-break-blaze
ten: Phá Giáp Liệt Hoả
category: prefix
tags: [offensive, elemental]
weight: 60
---

# Phá Giáp Liệt Hoả (`armor-break-blaze`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Tương khắc hit: giảm defense linh đan mục tiêu 5% trong 2s (stack 3 lần) |
| T2 | Tương khắc hit: giảm defense 8% trong 2s (stack 4) |
| T3 | Tương khắc hit: giảm defense 10% trong 3s (stack 5); stack max gây +20% bonus damage |

## Tương tác

Kích hoạt khi linh lực **tương khắc** với linh khí mục tiêu (§7.1 Tương Khắc cycle). Defense debuff áp vào linh đan thông qua linh khí bị debuff — giảm lớp giảm thiệt hại của linh khí trên linh lực đi qua. Stack riêng biệt (3–5 stack), mỗi stack có timer 2–3s. T3: khi đạt stack max → +20% bonus intensity cho linh lực tiếp theo xuyên qua linh khí đó, nhân vào `player.intensity_multiplier` (§7.3). Element Hoả (fire) → tương khắc Kim (metal linh khí) — chuyên phá linh khí Kim.

## Build & Synergy

Roll trên mọi item base type; element `fire` → phù hợp build **Hoả**. Tối ưu khi board có nhiều linh khí Kim:
- `blazing-corruption-bane` (Hoả) + `armor-break-blaze`: cả hai đều Hoả element → cùng kích hoạt tương khắc trên linh khí Kim. Combo: phá defense stack → boss mất thêm defense.
- `raging-fire` / `hundred-fire-phoenix` (nếu trong pool): Hoả intensity affix khác cộng thêm vào `player_mult` layer.
- Tinh Hoa Hoả (Tinh Hoa essence) có thể force roll affix này trên item mong muốn.
- Yếu khi board không có linh khí Kim — tương khắc không trigger, stack không build.
