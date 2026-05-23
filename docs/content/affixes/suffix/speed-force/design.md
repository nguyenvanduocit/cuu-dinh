---
id: speed-force
ten: Tốc Độ Cuồng Lực
category: suffix
tags: [speed]
weight: 100
---

# Tốc Độ Cuồng Lực (`speed-force`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +15% velocity linh lực sau va chạm |
| T2 | +22% velocity sau va chạm |
| T3 | +30% velocity sau va chạm; velocity cao → +10% intensity |

## Tương tác

Thuộc **Layer 1 (per-collision)**: tăng velocity linh lực sau va chạm — ảnh hưởng velocity factor của hit kế tiếp (range 0.5x–2.0x, §2). T3 +10% intensity khi velocity cao: additive vào `player_mult` cho collision tiếp theo nếu velocity đạt ngưỡng cao (>1.5x base, cùng ngưỡng `storm-surge`). Không tích lũy qua chain — chỉ boost hit kế sau va chạm tại linh khí này.

## Build & Synergy

Roll suffix — ghép tự do với prefix offensive. Foundational **velocity build** cùng với `swift-speed` (prefix) và `speed-retain` (suffix: giữ velocity qua hop). Ba nguồn velocity stack multiplicative qua chain: `speed-force` boost sau mỗi bounce, `speed-retain` không mất velocity, `swift-speed` +velocity flat. Kết hợp với `storm-surge` (prefix: +intensity khi velocity >1.5x) → velocity cao → intensity cao → velocity boost mạnh hơn → feedback loop. `swift-junction` (suffix khác) thêm intensity khi charge ≥ 2 — chain nhanh build charge nhanh hơn, kích hoạt sớm hơn.
