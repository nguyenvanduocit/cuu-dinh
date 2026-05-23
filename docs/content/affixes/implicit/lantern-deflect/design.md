---
id: lantern-deflect
ten: Đèn Rơi Lệch
category: implicit
tags: [utility, speed]
compatibleItemTypes: [lantern]
weight: 60
---

# Đèn Rơi Lệch (`lantern-deflect`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực rơi qua Đèn bị lệch góc +15° ngẫu nhiên |
| T2 | Linh lực rơi qua Đèn bị lệch góc +25° ngẫu nhiên; +10% intensity |
| T3 | Linh lực rơi qua Đèn bị lệch góc ±35° (player chọn); +20% intensity |

## Tương tác

Implicit của **lantern** base type. Deflect áp dụng tại lớp **physics** (§8.1) — thay đổi trajectory sau khi linh lực rời linh khí. T1-T2: lệch ngẫu nhiên trong range ±15°/±25°; T3 player chọn hướng lệch trong ±35° (control rõ ràng). Intensity +10/20% (T2-T3) nhân vào velocity_factor khi rời. Lệch góc thay đổi điểm chạm linh đan hoặc linh khí tiếp theo — có thể dùng để redirect linh lực bị lệch vào đúng chain.

## Build & Synergy

Implicit của **lantern**. T3 player-controlled deflect là tool positioning mạnh: redirect linh lực đang đi sai hướng vào chain tiếp theo. Combo với `force-ricochet`: deflect tạo angle mới → ricochet tường từ angle đó → intensity spike. `great-attraction` trên linh khí đích: hút linh lực đã deflect vào đúng chỗ ngay cả khi angle không hoàn hảo. Đạo Phái bất kỳ cần precision routing. T1-T2 khó kiểm soát — chỉ upgrade lên T3 để unlock player control.
