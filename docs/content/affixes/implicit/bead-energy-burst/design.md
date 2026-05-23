---
id: bead-energy-burst
ten: Châu Xung Năng
category: implicit
tags: [aoe, offensive]
compatibleItemTypes: [bead]
weight: 60
---

# Châu Xung Năng (`bead-energy-burst`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi 5 va chạm: phát xung năng lực AOE Châu nguyên tố 60px |
| T2 | Mỗi 4 va chạm: phát xung năng lực AOE Châu nguyên tố 80px |
| T3 | Mỗi 3 va chạm: phát xung năng lực AOE Châu nguyên tố 100px + +20% intensity |

## Tương tác

AOE damage tính dựa trên **intensity tại thời điểm trigger** (sau N va chạm) — dùng cùng công thức §7.2 nhưng áp AOE lên tất cả linh đan/linh khí trong 60–100px. Nguyên tố xung = nguyên tố Châu → tương sinh/tương khắc áp cho mọi target trong AOE. N va chạm tích lũy từ bất kỳ linh lực nào qua Châu (không phân biệt nguyên tố). T3 +20% intensity chỉ áp cho xung AOE, không áp hit thường. Weight 60 (uncommon).

## Build & Synergy

Implicit — chỉ roll trên **bead**. Tối ưu khi nhiều linh lực đi qua Châu thường xuyên:
- `attraction` (hút linh lực về phía linh khí): tăng tần suất linh lực qua Châu → trigger burst nhanh hơn.
- `bead-chain` (chain jump): mỗi nhảy qua Châu tính 1 va chạm → chain build trigger AOE.
- Đặt Châu có `bead-energy-burst` tại **nút trung tâm** board nơi nhiều linh lực đi qua → AOE burst liên tục.
- Kết hợp với AOE affix khác (`bell-echo`, `savage-crit-burst`) để phủ AOE toàn board.
