---
id: marathon
ten: Hỗn Nguyên
variant: marathon
tierRange: 10-16
vanCount: 10-30
bossType: mirror
modifierSlots: 2-5
geometry: "800×1200"
---

# Hỗn Nguyên (`marathon`)

Hỗn Nguyên là cảnh giới trước khi vạn vật phân Ngũ Hành — không trật tự, không quy luật, chỉ có nguyên khí cuồn cuộn. Đạo sĩ bước vào đây là tự nguyện chìm vào trong cơn lốc thời gian: càng ở lâu, đan càng tinh, nhưng linh hồn càng mòn. Có người luyện được Tiên đan; có người không bao giờ trở ra.

## Special Rules

Marathon 30-50 phút. Ván cứ 3 phút lại spawn wave mới; intensity +5% mỗi wave, escalating không trần. vanCount min/max là số ván trung bình player kỳ vọng (10-30 tuỳ tốc độ); runtime override khi player chọn bail-out tại phút 15/30/45 (lock-in current loot). Boss base = Tâm Ma; nếu Đan Pháp tier ≥ T14 thì boss promote thành Thiên Kiếp (specialRules layer kiểm tra). 14 anchor scattered chaos để dạy player rằng không có 'optimal layout' — phải rebuild build mỗi 3 ván khi wave intensity nhảy bậc. Anchor bias đủ 5 nguyên tố để Ngũ Hành chain luôn khả thi nhưng phải tự route.

## Geometry

**Geometry** (800×1200, 14 anchor — scattered chaos):
```
+--------------------+
|  ⊙(h)        ⊙(k)  |
|         ⊙(v)       |
|    ⊙(m)    ⊙(t)    |
|                    |
|  ⊙(t)      ⊙(k)    |
|         ⊙(v)       |
|                    |
|   ⊙(h)    ⊙(m)     |
|         ⊙(t)       |
|         ⊙(t)       |
|  ⊙(v)      ⊙(h)    |
|       [linh đan]   |
+--------------------+
```
> ⊙ = anchor, h=fire, k=metal, m=wood, t=earth/water, v=void

