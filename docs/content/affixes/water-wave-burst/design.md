---
id: water-wave-burst
ten: Biến Hoá Lan Sóng
category: prefix
tags: [offensive, aoe]
element: water
weight: 60
---

# Biến Hoá Lan Sóng (`water-wave-burst`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | AOE Thuỷ 60px khi va chạm gây 15% intensity |
| T2 | AOE Thuỷ 80px khi va chạm gây 22% intensity |
| T3 | AOE Thuỷ 100px khi va chạm gây 30% intensity; chậm linh lực trong vùng 20% |

## Tương tác

AOE Thuỷ là hit độc lập — áp dụng 15-30% `player_intensity_multiplier` × 1.0 (không dùng velocity linh lực gốc) lên linh đan nếu đan trong vùng AOE. Tương tác element bình thường: Thuỷ tương sinh Mộc → +quality ×0.30 nếu đan Mộc. Chậm T3 (-20% velocity) là debuff vật lý lên mọi linh lực đang trong vùng 100px — giảm `velocity_factor` của chúng, tức là giảm damage hit tiếp theo của chúng.

## Build & Synergy

Roll mọi base type (prefix). Chậm T3 là double-edged — giảm velocity linh lực bạn nhưng cũng giảm linh lực địch (boss projectile nếu có). Kết hợp `wave-pull` (kéo linh lực về đan rồi AOE Thuỷ khi va chạm = linh lực đến đan với velocity thấp nhưng AOE bổ sung damage) và `vase-absorb-convert` (Thuỷ tương sinh Mộc → Bình convert thêm). Đạo Phái Thuỷ.
