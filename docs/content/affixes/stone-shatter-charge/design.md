---
id: stone-shatter-charge
ten: Sát Thạch Xung
category: prefix
tags: [offensive, aoe]
element: earth
weight: 60
---

# Sát Thạch Xung (`stone-shatter-charge`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực Thổ va chạm: 10% chance tạo đá vỡ projectile phụ gây 20% intensity tới linh đan |
| T2 | 15% chance đá vỡ gây 28% intensity |
| T3 | 20% chance đá vỡ gây 38% intensity; chance thêm bounce |

## Tương tác

Thuộc **Layer 1 (per-collision)**: chỉ kích hoạt khi `linh_luc.element == earth` (Thổ). Đá vỡ là projectile phụ bay thẳng đến linh đan, áp intensity = collision_intensity × 0.20/0.28/0.38, element Thổ vs linh đan (Thổ tương sinh Kim +30% quality, Thổ khắc Thuỷ -40% stability, §1 matrix). T3 bounce: projectile phụ có thể bật thêm từ linh đan sang linh khí gần nhất — nếu bật, tạo thêm +1 charge hop nhưng không tạo thêm đá vỡ (no cascade). Crit check độc lập với hit gốc.

## Build & Synergy

Roll prefix với element `earth`. **Thổ element build** — Thổ tương sinh Kim (phổ biến: saber, sword base type) → đá vỡ Thổ hit đan Kim: tương sinh +30% quality heal. Combo với `statue-four-spirit-aura` Thổ statue (implicit +30% intensity linh khí Thổ trong 100px): đá vỡ intensity × 1.30 từ aura. `sea-crest-surge` (prefix khác item) tăng intensity hit gốc → đá vỡ tỷ lệ theo. Đạo phái có ascendancy bonus Thổ element nhân vào `player_mult`. Tránh đan Thuỷ target nếu không xây damage build — Thổ khắc Thuỷ gây -40% stability mỗi đá vỡ hit.
