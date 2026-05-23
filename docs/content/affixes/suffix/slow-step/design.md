---
id: slow-step
ten: Chậm Bộ
category: suffix
tags: [utility]
weight: 100
---

# Chậm Bộ (`slow-step`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Chậm linh lực 15% trong 1.5s sau va chạm |
| T2 | Chậm linh lực 20% trong 2s sau va chạm |
| T3 | Chậm linh lực 25% trong 2s; 10% chance chậm 50% |

## Tương tác

Thuộc **Layer 1 (per-collision)**: giảm velocity linh lực sau va chạm. Velocity ảnh hưởng trực tiếp `base` intensity (§2: `linh_luc.velocity / VELOCITY_BASE`, range 0.5x–2.0x). Chậm 25% velocity → intensity giảm tương ứng (~0.75x velocity factor nếu đang ở max). Đây là affix **giảm sát thương** — hữu ích khi muốn kiểm soát chain không quá mạnh để tránh đại khắc tai họa. T3 50% chậm (10% chance) → velocity factor gần minimum (0.5x), hit tiếp theo rất nhẹ.

## Build & Synergy

Roll suffix. **Utility / control build**: không tăng damage mà tăng precision. Dùng khi linh lực quá nhanh → trajectory khó đoán → chain đi sai hướng. Combo với `stored-energy-still` (suffix: tích charge, xả cuối ván) — slow-step giữ linh lực trong vùng charge lâu hơn, `stored-energy-still` tích nhiều charge hơn → AOE cuối ván mạnh hơn. Phối hợp với `spread` (suffix: lan damage sang lân cận) — velocity chậm cho thời gian spread nhiều hit hơn trong bán kính. Đạo phái control/utility (Trận Pháp) hưởng lợi từ velocity management.
