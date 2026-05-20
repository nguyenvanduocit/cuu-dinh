---
id: thunder-sound-frenzy
ten: Thiên Âm Cuồng
category: prefix
tags: [offensive, aoe]
weight: 40
---

# Thiên Âm Cuồng (`thunder-sound-frenzy`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% intensity; 5% chance tất cả linh lực trên board cùng lúc hit linh đan |
| T2 | +28% intensity; 7% chance all-hit |
| T3 | +38% intensity; 10% chance all-hit; all-hit gây 20% bonus intensity mỗi linh lực |

## Tương tác

All-hit là event đặc biệt: tất cả linh lực trên board cùng lúc apply hit lên linh đan — mỗi linh lực tính damage formula riêng (velocity + charge + multiplier của nó). T3 thêm 20% vào `player_intensity_multiplier` của mỗi linh lực trong event all-hit. Với 6-10 linh lực active, 1 proc all-hit = 6-10 × (full damage formula + 20%) trong 1 frame. Không stack nhiều all-hit cùng lúc.

## Build & Synergy

Roll mọi base type (prefix, element-neutral). Ưu tiên board có nhiều linh khí active đồng thời — giá trị tăng tuyến tính với số linh khí. Kết hợp `triple-birth` (nhân đôi linh lực → nhiều linh lực hơn trong all-hit event) và `wuxing-chain` (nếu all-hit trigger chain, mỗi hop +16% intensity T3). Đạo Phái bất kỳ — affix element-neutral, ưu tiên build nhiều linh khí đa dạng.
