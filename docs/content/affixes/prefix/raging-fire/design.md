---
id: raging-fire
ten: Liệt Hoả
category: prefix
tags: [offensive, elemental]
element: fire
weight: 100
---

# Liệt Hoả (`raging-fire`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +22% intensity Hoả lực khi va chạm |
| T2 | +30% intensity Hoả lực khi va chạm |
| T3 | +40% intensity Hoả lực khi va chạm |

## Tương tác

+40% intensity Hoả áp vào lớp **player_mult** (§7.3 additive), chỉ khi linh lực element = `fire`. Kết hợp với combat formula §7.2: nếu linh đan là Thổ (Hoả tương sinh Thổ), hit gây `quality += intensity * 0.30` — tăng quality nhanh; nếu linh đan là Thuỷ (Hoả tương khắc Thuỷ), hit gây `stability -= intensity * 0.40` — phá stability mạnh. Element-locked: không proc với linh lực non-Hoả.

## Build & Synergy

Roll trên linh khí `element: fire`. Elemental prefix đơn giản nhất của Hoả — nền tảng mọi build Hoả mono:
- Kết hợp `myriad-summon-honor` (bonus per linh khí Hoả trên board) — cả hai scale cùng nhau khi board đầy linh khí Hoả.
- `nectar-burst` counter build: Thuỷ khắc Hoả đan; đặt `raging-fire` trên board Hoả để push quality trước khi Thuỷ opponent phá.
- Đạo Phái Hoả (burst + AoE) bắt buộc affix này — passive tree Hoả có node tăng thêm intensity_fire_mult.
