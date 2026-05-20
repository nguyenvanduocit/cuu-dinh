---
id: azure-thunder-frost
ten: Bích Lôi Thiên Hàn
category: prefix
tags: [offensive, elemental, sustain]
element: water
weight: 60
---

# Bích Lôi Thiên Hàn (`azure-thunder-frost`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +25% intensity Thuỷ khi tương sinh (Thuỷ → Mộc đan) |
| T2 | +35% intensity Thuỷ tương sinh |
| T3 | +45% intensity Thuỷ tương sinh; heal stability linh đan +3% khi tương sinh hit |

## Tương tác

Bonus +intensity Thuỷ áp vào **player.intensity_multiplier** (§7.3 Lò affix layer) — chỉ khi linh lực Thuỷ hit linh đan **Mộc** (tương sinh Thuỷ→Mộc §7.1). Khi tương sinh hit, §7.2 gây `quality += intensity × 0.30` + `stability += intensity × 0.05` — T3 thêm heal stability +3% cộng dồn vào đó. Nếu linh lực Thuỷ hit linh đan không phải Mộc, bonus intensity không áp. Stack additive với `black-tortoise-fury` (cùng Thuỷ, Lò affix layer).

## Build & Synergy

Roll trên mọi item base type; element `water` → Tinh Hoa Thuỷ để force roll. Build **Thuỷ→Mộc tương sinh**:
- `azure-dragon-wrath` (Mộc): cặp đôi tự nhiên — Thuỷ nuôi Mộc đan, Mộc linh lực đánh boss mạnh.
- `branch-recovery` (Cành Mộc heal): T3 heal stability từ `azure-thunder-frost` + heal từ `branch-recovery` = sustain loop hoàn chỉnh.
- `black-tortoise-fury` (Thuỷ chain): thêm chain jump → linh lực Thuỷ hit nhiều target → nhiều lần kích hoạt tương sinh bonus.
- Đạo Phái **Thuỷ** (tree nodes tăng Thuỷ element): home build cho combo tương sinh sustain.
