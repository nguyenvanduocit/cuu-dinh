---
id: twin-hit-chain
ten: Song Hit Chuỗi
category: suffix
tags: [chain]
weight: 100
---

# Song Hit Chuỗi (`twin-hit-chain`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi va chạm: 15% chance trigger chain jump tới linh khí gần nhất |
| T2 | 20% chance chain jump |
| T3 | 25% chance chain jump; chain mang theo 80% intensity gốc |

## Tương tác

Chain jump là redirect vật lý — linh lực teleport đến linh khí gần nhất trong range, giữ velocity gốc (velocity_factor không thay đổi). T1-T2 không nêu retention: mặc định chain mang 100% intensity (không penalty). T3 explicit 80% — nghĩa là chain T3 giảm nhẹ nhưng tăng `charge_factor` nếu linh khí chain có charge buff. Proc roll mỗi va chạm bất kỳ. Không giới hạn số chain trong 1 ván — linh lực có thể chain nhiều lần.

## Build & Synergy

Roll mọi base type (suffix, element-neutral). Combo tốt nhất với `wuxing-chain` (+16% intensity mỗi hop T3 — chồng với chain jump này) và `chain-link` (tăng range chain → thêm mục tiêu). Kết hợp `sword-split` (2 đường mỗi đường 25% chain → xác suất ít nhất 1 chain ≈44%). Đạo Phái bất kỳ — utility universal.
