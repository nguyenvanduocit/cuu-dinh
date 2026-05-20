---
id: sea-crest-surge
ten: Hải Quán Xung Tiên
category: prefix
tags: [offensive, chain]
weight: 100
---

# Hải Quán Xung Tiên (`sea-crest-surge`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +18% intensity sau mỗi chain hop (cộng dồn max 5) |
| T2 | +25% intensity sau mỗi chain hop (max 6) |
| T3 | +32% intensity sau mỗi chain hop (max 8) |

## Tương tác

Thuộc **Layer 2 (player multipliers)**: mỗi chain hop tăng additive vào `player_mult` stack của hit hiện tại — tương tác trực tiếp với cơ chế `charge_count` (§2 Layer 1: +20% per hop, cap 200%). Hai nguồn này multiplicative với nhau: charge_count boost (Layer 1) × hop-accumulated intensity (Layer 2) → compound nhanh theo chain dài. T1 max 5 hops: +90% từ affix này, T3 max 8 hops: +256% từ affix — kết hợp charge Layer 1 cap 200% tạo intensity spike rất lớn ở cuối chain. Không tích lũy qua ván — reset mỗi linh lực phóng mới.

## Build & Synergy

Roll prefix, suffix tự do. Core **chain build** — combo tự nhiên với `swift-junction` (suffix: +velocity + intensity khi charge ≥ 2) và `speed-retain` (suffix: giữ velocity qua hop → velocity factor cao suốt chain). Ba affix stack cùng nhau: velocity cao (Layer 1 ×2.0) × charge cap (Layer 1 +200%) × sea-crest-surge (+256% T3) = intensity rất lớn ở hit cuối. Đạo phái có ascendancy bonus element Thuỷ (Hải Linh) hưởng lợi nếu board Thuỷ-heavy — tương sinh Thuỷ→Mộc +30% quality thêm vào trên đỉnh intensity cao. Combo với `stored-energy-still` trên linh khí khác: chain dài build charge, rồi cuối ván `stored-energy-still` xả AOE với intensity đã được khuếch đại.
