---
id: cauldron-element-slow
ten: Đỉnh Phân Nguyên Tố
category: implicit
tags: [utility, defensive]
compatibleItemTypes: [cauldron]
weight: 60
---

# Đỉnh Phân Nguyên Tố (`cauldron-element-slow`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Chậm linh lực ngược nguyên tố 35% trong 1.5s |
| T2 | Chậm linh lực ngược nguyên tố 50% trong 2s |
| T3 | Chậm linh lực ngược nguyên tố 60% trong 2s + +20% intensity khi rời |

## Tương tác

"Ngược nguyên tố" = linh lực có element **tương khắc** với nguyên tố Đỉnh (§7.1 Tương Khắc). Slow 35–60% giảm velocity_factor của linh lực trong Đỉnh → intensity thấp hơn khi rời. T3 bonus: khi linh lực rời sau slow, +20% intensity boost (tăng velocity_factor lên 20% từ baseline khi ra). Cơ chế "phân nguyên tố" = Đỉnh chỉ slow nguyên tố khắc mình, cho qua nguyên tố tương sinh/cùng loại bình thường. Không phân biệt charge_factor — slow áp ngay khi vào Đỉnh.

## Build & Synergy

Implicit — chỉ roll trên **cauldron**. Utility kiểm soát nguyên tố:
- Đặt Đỉnh Kim để slow linh lực Mộc (Mộc khắc Thổ, không khắc Kim — cần verify cycle); chính xác hơn: Kim khắc Mộc (§7.1) → Đỉnh Kim slow linh lực Mộc.
- T3 "slow rồi burst": slow giảm velocity → khi ra +20% boost → net velocity gần bằng bình thường nhưng player kiểm soát được timing. Combo với `cauldron-slow-burst` để double-delay.
- `attraction` (hút linh lực): tăng lượng linh lực đi qua Đỉnh → slow nhiều linh lực hơn.
- Build **kiểm soát flow**: sử dụng Đỉnh làm "filter" — lọc linh lực khắc, tăng tốc linh lực không khắc.
