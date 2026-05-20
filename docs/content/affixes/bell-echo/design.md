---
id: bell-echo
ten: Chuông Âm Vang
category: implicit
tags: [aoe, chain]
compatibleItemTypes: [bell]
weight: 60
---

# Chuông Âm Vang (`bell-echo`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi 5 va chạm: tạo xung âm thanh gây 8% intensity AOE trong 60px |
| T2 | Mỗi 5 va chạm: tạo xung âm thanh gây 12% intensity AOE trong 80px |
| T3 | Mỗi 4 va chạm: tạo xung âm thanh gây 18% intensity AOE trong 100px |

## Tương tác

Xung âm thanh AOE tính intensity riêng (8–18% intensity) — không phụ thuộc intensity linh lực trigger. Nguyên tố xung = nguyên tố Chuông → tương sinh/tương khắc (§7.1) áp cho mọi target AOE. N va chạm tích lũy từ bất kỳ linh lực nào qua Chuông. Không tương tác với charge_factor của linh lực trigger — xung là event độc lập. T3 giảm cooldown trigger (4 thay vì 5 va chạm) → xung AOE dày hơn. Weight 60.

## Build & Synergy

Implicit — chỉ roll trên **bell**. Tối ưu khi nhiều linh lực qua Chuông liên tục:
- `attraction` (hút linh lực vào linh khí): tăng tần suất linh lực qua Chuông → echo trigger nhanh hơn.
- `bead-energy-burst` (AOE từ Châu): kết hợp AOE từ nhiều nguồn → phủ sóng toàn board.
- `bell-push-wave` (sóng đẩy): push + echo trong cùng trigger → repositioning + damage AOE cùng lúc.
- Chuông không có element cố định → có thể chọn element bất kỳ phù hợp tương sinh với linh đan; Tinh Hoa tương ứng để force.
