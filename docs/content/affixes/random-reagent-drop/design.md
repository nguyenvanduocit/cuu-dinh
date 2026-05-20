---
id: random-reagent-drop
ten: Rơi Ngẫu Nhiên Đan
category: suffix
tags: [currency-control]
weight: 60
---

# Rơi Ngẫu Nhiên Đan (`random-reagent-drop`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% drop rate tất cả đan dược từ linh khí này |
| T2 | +30% drop rate đan dược |
| T3 | +40% drop rate; 5% chance drop Hồn Đan (very rare normally) |

## Tương tác

Thuộc **currency-control** layer — không ảnh hưởng combat math §7. +40% drop rate là flat additive vào drop_chance base của linh khí mỗi va chạm (§8.2). T3 Hồn Đan roll độc lập sau khi drop đã xác định (5% chance upgrade bất kỳ drop thành Hồn Đan). Hồn Đan là đan dược DropPool `VeryRare` — bình thường gần như không drop từ linh khí thông thường.

## Build & Synergy

Roll trên mọi item base type. Giá trị tỷ lệ với hit frequency của linh khí — đặt ở vị trí trung tâm board nhiều linh lực qua:
- Kết hợp `lucky-fate` (thêm đan dược mỗi lần trigger) + `reagent-stash-retain` (giữ lại drop khi pháp trận kết thúc) = combo currency farm hoàn chỉnh.
- `reagent-select` (bias drop về high-rarity) + affix này (tăng tần suất drop) = throughput đan dược chất lượng cao.
- Đạo Phái bất kỳ dùng được — affix không có element; đặc biệt tốt với Dây Phong Ấn slot (§3.1 currency control).
