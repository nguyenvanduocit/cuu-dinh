---
id: box-store-energy
ten: Hộp Trữ Năng
category: implicit
tags: [offensive, utility]
compatibleItemTypes: [box]
weight: 100
---

# Hộp Trữ Năng (`box-store-energy`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Trữ linh lực 2s; phun ra với +50% intensity |
| T2 | Trữ linh lực 1.5s; phun ra với +65% intensity |
| T3 | Trữ linh lực 1s; phun ra với +80% intensity; 15% chance nhân đôi khi phun |

## Tương tác

Cơ chế **delay-then-burst**: linh lực bị giữ 0.8–2s trong Hộp, velocity tại thời điểm phun tính theo velocity vào × `1 + intensity_bonus`. Cụ thể: velocity_factor = velocity_vào × (1 + 0.50/0.65/0.80). Charge_factor tích lũy trước khi vào Hộp được bảo toàn — phun ra vẫn dùng charge_factor đó. T3 15% chance nhân đôi: một lần phun → hai linh lực cùng intensity → gấp đôi số hit. Không phân biệt nguyên tố.

## Build & Synergy

Implicit — chỉ roll trên **box**. Build "burst từ một điểm":
- `accelerate-box` (suffix, box): velocity bonus sau khi phun + `box-store-energy` intensity bonus → velocity_factor tối đa khi rời Hộp.
- `bead-absorb` (implicit bead): đặt Châu sau Hộp → linh lực phun ra từ Hộp → Châu hấp thụ thêm → phun lần 2 với +60% intensity. Double-delay = intensity cực lớn.
- `charge-store` (suffix): charge tích trước Hộp → phun ra với charge_factor lớn + intensity bonus của Hộp.
- T3 "nhân đôi" kết hợp `sun-wukong-staff` (tách ×3 sau hit đầu): một phun → nhân đôi → tách ×3 = 6 linh lực con cùng intensity.
