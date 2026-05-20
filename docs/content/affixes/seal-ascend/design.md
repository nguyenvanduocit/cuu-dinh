---
id: seal-ascend
ten: Phong Ấn Thăng
category: suffix
tags: [seal-safety]
weight: 40
---

# Phong Ấn Thăng (`seal-ascend`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +15% chance Phong Ấn thăng affix khi áp lên linh khí này |
| T2 | +22% chance thăng affix |
| T3 | +30% chance thăng affix; 5% chance thêm 1 affix mới khi thăng |

## Tương tác

Gambling layer — không can thiệp combat-math trực tiếp. Tăng xác suất affix thăng tier (T1→T2, T2→T3) khi áp Phong Ấn lên linh khí này. T3 bonus 5% affix mới rare — affix mới roll từ pool tương thích với `compatibleItemTypes` của linh khí đó, có thể ra bất kỳ affix nào trong pool (bao gồm cả offensive/chain/crit). Không tương tác charge/velocity trong pháp trận.

## Build & Synergy

Roll suffix. Ngược chiến lược với `seal-anti-break`: thay vì bảo vệ tier hiện có, đây là **upgrade path** — dùng khi muốn push T1/T2 affix lên T3 với rủi ro thấp hơn. Combo mạnh nhất với `seal-safety` (suffix, giảm brick chance khi áp cùng nguyên tố) — hai suffix seal-safety giảm rủi ro + tăng upside. Tránh dùng đồng thời với `seal-preserve` (global brick reduce) nếu slot suffix đã chật — ưu tiên `seal-ascend` + `seal-safety` cho aggressive upgrade, `seal-preserve` + `seal-anti-break` cho conservative hold.
