---
id: stabilize
ten: Ổn Định Hoá
category: suffix
tags: [defensive, sustain]
weight: 100
---

# Ổn Định Hoá (`stabilize`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh đan stability giảm 8% chậm hơn khi bị tương khắc trong ván này |
| T2 | Stability giảm 12% chậm hơn |
| T3 | Stability giảm 18% chậm hơn; heal +0.5%/s khi không bị hit 3s |

## Tương tác

Thuộc **Layer 5 (stability mechanics)**: giảm rate stability loss từ tương khắc — tương đương giảm hệ số 0.40 (§2: `linh_dan.stability -= intensity × 0.40`) xuống còn 0.40 × (1 - 0.08/0.12/0.18). T3 ví dụ: intensity 25, tương khắc base -10 stability → với T3 -18%: -10 × 0.82 = -8.2 stability. T3 passive regen +0.5%/s khi không bị hit 3s — heal nhỏ nhưng đáng kể ở giữa ván khi board reset. Khác `stable-base` (flat reduce per hit) — `stabilize` là rate modifier (scalable với intensity).

## Build & Synergy

Roll suffix, defensive. **Hiệu quả cao nhất ở intensity cao** vì giảm theo tỷ lệ — T16 map (×2.5) + tâm ma mod (+100%) → intensity spike lớn → `stabilize` giảm được nhiều stability damage hơn theo tỷ lệ. Combo với `stable-base` (suffix: flat reduce): hai suffix stack multiplicative trên stability damage: `stable-base` giảm 20% flat × `stabilize` giảm 18% tỷ lệ → effective stability damage ≈ 65.6% gốc. T3 heal 0.5%/s cộng với tương sinh heal (intensity × 0.05) trong board Thuỷ→Mộc → sustain đáng kể trong ván dài. Đạo phái phòng thủ tích stability max bonus (Lò.Thân affix) hưởng lợi kép: pool lớn + drain chậm.
