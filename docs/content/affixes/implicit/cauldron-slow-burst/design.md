---
id: cauldron-slow-burst
ten: Đỉnh Nổ Chậm
category: implicit
tags: [offensive, utility]
compatibleItemTypes: [cauldron]
weight: 100
---

# Đỉnh Nổ Chậm (`cauldron-slow-burst`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực vào Đỉnh dừng 1.5s rồi tiếp tục với +30% intensity |
| T2 | Linh lực vào Đỉnh dừng 1s rồi tiếp tục với +40% intensity |
| T3 | Linh lực vào Đỉnh dừng 0.8s rồi tiếp tục với +55% intensity |

## Tương tác

Cơ chế **delay-then-burst** tương tự `box-store-energy` nhưng dừng hoàn toàn (velocity = 0) trong thời gian dừng. Intensity bonus +30–55% áp vào velocity_factor khi rời Đỉnh — tương đương tăng velocity_factor × (1 + bonus%). Charge_factor tích trước khi vào Đỉnh bảo toàn. Không phân biệt nguyên tố — mọi linh lực đi vào đều bị delay. Không stack với `cauldron-element-slow` nếu cùng Đỉnh — lấy cơ chế `cauldron-slow-burst` (dừng hoàn toàn) ưu tiên hơn.

## Build & Synergy

Implicit — chỉ roll trên **cauldron**. Build "burst point" kiểm soát timing:
- `charge-store` (suffix): linh lực tích charge nhiều hop trước Đỉnh → vào Đỉnh dừng lại → phun ra với charge_factor cao + intensity bonus = cú đánh lớn có thể predict timing.
- `charged-might` (+intensity khi charge >= N): charge tích trước Đỉnh → trigger `charged-might` ngay khi phun.
- `bead-absorb` (sau Đỉnh trong path): phun từ Đỉnh → Châu hấp thụ → phun lần 2 = triple delay build.
- Đặt Đỉnh gần linh đan nhất có thể → sau delay, linh lực phun thẳng vào đan với intensity cao nhất.
