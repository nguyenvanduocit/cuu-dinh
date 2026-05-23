---
id: storm-surge
ten: Bão Phong
category: prefix
tags: [offensive, speed]
weight: 100
---

# Bão Phong (`storm-surge`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% intensity khi linh lực có velocity cao (>1.5x base) |
| T2 | +28% intensity khi linh lực có velocity cao (>1.5x base) |
| T3 | +38% intensity khi linh lực có velocity cao (>1.5x base) |

## Tương tác

Thuộc **Layer 2 (player multipliers)**: conditional — chỉ áp dụng khi `linh_luc.velocity > 1.5x VELOCITY_BASE` tại thời điểm collision. Ngưỡng 1.5x là giữa range 0.5x–2.0x (§2) — khoảng 42% hits tự nhiên đạt ngưỡng này tùy build. Với `speed-retain` (giữ velocity không decay): linh lực khởi đầu >1.5x sẽ duy trì ngưỡng suốt chain → `storm-surge` trigger mọi hop. Additive với các nguồn khác trong `player_mult`. Không tích lũy — mỗi hit check riêng.

## Build & Synergy

Roll prefix, tags `offensive, speed`. **Core của velocity build** cùng `swift-speed` (prefix — đặt 2 affix này trên 2 linh khí khác nhau vì cùng prefix slot). `swift-speed` tăng velocity → đạt ngưỡng 1.5x dễ hơn, `storm-surge` nhân intensity khi đạt ngưỡng. `speed-retain` (suffix) duy trì velocity qua chain → `storm-surge` trigger mỗi hop thay vì chỉ hop đầu. `speed-force` (suffix: +velocity sau bounce) stack thêm. Tổng intensity từ velocity build: `swift-speed` +38% intensity + `storm-surge` +38% conditional + `speed-force` T3 +10% = +86% additive vào `player_mult` khi velocity peak — chưa tính multiplicative với map_mult và charge. Đạo phái cơ động (Kim, Mộc) có ascendancy bonus velocity tốt.
