---
id: yield-stability
ten: Nhường Bộ Ổn Định
category: suffix
tags: [defensive, sustain]
weight: 60
---

# Nhường Bộ Ổn Định (`yield-stability`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi tương khắc hit lên linh khí này: heal stability đan +0.8% (absorb và chuyển hóa) |
| T2 | Absorb tương khắc → heal +1.2% |
| T3 | Absorb tương khắc → heal +1.8%; 5% chance absorb toàn bộ hit không gây damage đan |

## Tương tác

Trigger khi linh lực tương khắc với đan va vào linh khí có affix này: thay vì hit đan gây -stability ×0.40, một phần được absorb và convert sang heal. Cơ chế: linh lực vẫn hit đan bình thường, nhưng sau đó cộng thêm heal +0.8-1.8% stability. T3 proc 5% absorb toàn bộ — linh lực không hit đan (0 damage, 0 stability loss) nhưng cũng không heal. Net effect T3: kỳ vọng mỗi tương khắc hit = 95% × (-stability ×0.40 + heal 1.8%) + 5% × 0 = giảm stability thực 95% × (0.40 - 1.8%/intensity).

## Build & Synergy

Roll mọi base type (suffix). Đặt linh khí có affix này trên đường linh lực tương khắc đan — chặn và chuyển hoá damage. Kết hợp `wuxing-counter-power` (cố tình tương khắc để damage cao, Yield-Stability hấp thu bớt stability loss) và `tranquil-inner-force` (linh khí này không bị đẩy lệch → luôn ở đúng vị trí chặn). Đạo Phái sustain/phòng thủ.
