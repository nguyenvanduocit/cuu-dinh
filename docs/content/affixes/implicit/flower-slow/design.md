---
id: flower-slow
ten: Hoa Chậm Tốc
category: implicit
tags: [utility, sustain]
element: wood
compatibleItemTypes: [flower]
weight: 100
---

# Hoa Chậm Tốc (`flower-slow`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực qua Hoa chậm 20%; +15% intensity khi rời Hoa |
| T2 | Linh lực qua Hoa chậm 30%; +22% intensity khi rời Hoa |
| T3 | Linh lực qua Hoa chậm 40%; +30% intensity khi rời Hoa; tạo hào quang Mộc 50px |

## Tương tác

Slow áp dụng tại lớp **velocity_factor** (§7.3) — giảm velocity_factor khi linh lực di chuyển qua zone Hoa, làm intensity tạm giảm. Bonus intensity khi rời bù lại và vượt qua: net dương nếu linh lực thoát khỏi Hoa trước khi chạm đan. Hào quang Mộc T3 là zone ảnh hưởng nhẹ (bias element, không convert cứng). Stack với chain-hop charge (+20%/hop §7.3) — mỗi linh khí sau Hoa trong chain đều nhận charge đã boost.

## Build & Synergy

Implicit của **flower** base type, element Mộc. Đặt Hoa trước linh khí Thổ để kích `heaven-rock-might` (slow ≥30% threshold). Combo tốt với `green-earth-quagmire` (slow zone bãi cát) tạo corridor slow dày. Đạo Phái Mộc dùng tương sinh Mộc→Hoả: Hoa slow giúp linh lực tích charge trước khi hit Hoả linh khí. Affix `kindred-meeting` trên cùng linh khí tăng hấp lực cho linh lực Mộc vào đúng zone slow.
