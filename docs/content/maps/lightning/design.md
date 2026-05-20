---
id: lightning
ten: Thiên Kiếp
variant: lightning
tierRange: 14-16
vanCount: 7-7
bossType: lightning
modifierSlots: 0-2
geometry: "800×1200"
---

# Thiên Kiếp (`lightning`)

Khi đan đã đến phẩm Cổ, trời không cho phép nữa. Sét đánh xuống bảy lần — bảy lần thử lòng đạo sĩ. Không có nguyên khí Ngũ Hành; chỉ có Kim thuần và phán quyết của trời. Người sống qua bảy lần này, đan thành Tiên. Người không, tro bụi cũng không còn.

## Special Rules

7 ván = 7 lần thiên kiếp. KHÔNG có linh lực thường — chỉ có sét waves rơi dọc trục giữa board. Linh khí Lôi Phù (Kim) BẮT BUỘC đặt ≥ 1 viên; thiếu = ván fail tự động. Damage formula đảo ngược: linh lực Kim tương sinh đan = +5% intensity (tốt); mọi element khác hit đan = damage thẳng stability. Ván 7 = thiên kiếp boss đánh full screen, phải hứng + convert qua Lôi Phù Cổ (Cổ Vật). Pass = đan promote lên Tiên/Thánh phẩm. Anchor xếp dọc trục đứng = 'kênh sét' — mọi sét rơi trúng anchor, player buộc design chain dọc thay vì ngang.

## Geometry

**Geometry** (800×1200, 7 anchor — kênh sét dọc):
```
+--------------------+
|         ⊙(K)       |   y=200
|         ⊙(K)       |   y=350
|         ⊙(K)       |   y=500
|         ⊙(V)       |   y=650
|         ⊙(K)       |   y=800
|         ⊙(K)       |   y=950
|         ⊙(K)       |   y=1080
|                    |
|       [linh đan]   |
+--------------------+
trục giữa = lightning channel. Lôi Phù mandatory.
```
> ⊙ = anchor, K=metal, V=void

