---
id: dragon-spirit-qi
ten: Thần Long Khí
category: prefix
tags: [offensive, chain]
weight: 100
---

# Thần Long Khí (`dragon-spirit-qi`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% intensity khi linh lực đã qua >= 3 linh khí trong ván này |
| T2 | +28% intensity khi >= 3 linh khí |
| T3 | +38% intensity khi >= 3 linh khí; thêm +5% mỗi linh khí thêm (max +20%) |

## Tương tác
+X% intensity vào `player.intensity_multiplier`, trigger khi linh lực đã qua >= 3 linh khí trong ván (đếm hops tích lũy, không phải unique). T3 scale thêm +5%/linh khí sau hop 3, cap +20% (tức 4 linh khí thêm = hop 7 tổng). Ceiling T3: +38% + 20% = +58% intensity_multiplier từ affix này, cộng với charge_factor cũng tích lũy song song. Reset mỗi ván.

## Build & Synergy
Roll trên bead, inkstone (tag `chain`). Cặp với `dragon-charge-fist` để double-reward chain: dragon-spirit-qi cho intensity_multiplier, dragon-charge-fist tăng charge_factor per hop — hai layer cùng scale với số hops. Board cần đủ linh khí để đảm bảo >= 3 hops thường xuyên — slot Thân (Body) với +slot linh khí là prerequisite. Đạo Phái **Linh Sơn** (spawn echo linh lực) giúp linh lực "ảo" tích hop. Keystone **Thuỷ Triều** (Thuỷ) tăng velocity sau mỗi chạm, cộng hưởng.
