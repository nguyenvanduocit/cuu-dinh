---
id: lucky-fate
ten: Kỳ Duyên
category: suffix
tags: [currency-control]
weight: 60
---

# Kỳ Duyên (`lucky-fate`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +1 đan dược thêm khi linh khí này trigger loot drop |
| T2 | +1-2 đan dược thêm khi trigger loot |
| T3 | +2 đan dược thêm; 10% chance loot Tinh Hoa thay vì thường |

## Tương tác

Thuộc **currency-control** layer — không tác động intensity, stability, hay quality. Kích hoạt khi linh khí mang affix này trigger loot drop (mỗi va chạm có drop_chance riêng theo §8.2). Số đan dược thêm là flat additive vào drop pool của lần trigger đó. T3 10% Tinh Hoa roll độc lập sau khi drop pool đã xác định — nếu thắng roll, 1 đan dược trong pool upgrade lên Tinh Hoa rarity.

## Build & Synergy

Roll trên mọi item base type. Giá trị tỷ lệ với hit frequency của linh khí — linh khí hay bị hit hơn = nhiều loot trigger hơn:
- Kết hợp `random-reagent-drop` (tăng drop rate) để tăng tần suất trigger; `lucky-fate` tăng số lượng mỗi lần trigger.
- `reagent-choice` thêm đan dược vào lựa chọn loot cuối ván — cặp đôi coverage cả trong ván lẫn cuối ván.
- Đạo Phái Mộc/Thuỷ (sustain, cần đan dược nhiều) hoặc Dây Phong Ấn slot tận dụng tốt nhất.
