---
id: bell-push-wave
ten: Chuông Sóng Đẩy
category: implicit
tags: [utility, aoe]
compatibleItemTypes: [bell]
weight: 100
---

# Chuông Sóng Đẩy (`bell-push-wave`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Sóng đẩy linh khí khác trong 50px khi bị va chạm |
| T2 | Sóng đẩy linh khí khác trong 80px khi bị va chạm |
| T3 | Sóng đẩy linh khí khác trong 100px + +5% intensity khi bị va chạm |

## Tương tác

Sóng đẩy là **cơ chế vật lý** (Rapier impulse) — không tính intensity damage trực tiếp. Tuy nhiên đẩy linh khí khác ra → thay đổi vị trí board → gián tiếp ảnh hưởng đến path linh lực và chain angle. T3 +5% intensity khi bị va chạm áp vào velocity_factor của linh lực gây trigger (không phải xung đẩy). Không phân biệt nguyên tố — mọi linh lực đánh Chuông đều trigger sóng.

## Build & Synergy

Implicit — chỉ roll trên **bell**. Affix positioning/utility:
- Dùng sóng đẩy để **reposition linh khí** kẻ thù (linh khí nhiễm khí, linh khí boss) ra khỏi path quan trọng.
- Kết hợp `bell-echo` (AOE sau N hit): push repositions linh khí → echo AOE phủ vùng mới.
- `attraction` (hút linh lực): hút linh lực vào Chuông → trigger push liên tục → board dynamic thay đổi liên tục.
- Ít giá trị trong pháp trận board nhỏ (push không có chỗ di chuyển ý nghĩa). Mạnh nhất ở map T10+ có board rộng.
