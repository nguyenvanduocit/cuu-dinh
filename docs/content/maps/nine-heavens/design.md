---
id: nine-heavens
ten: Cửu Tiêu
variant: nine-heavens
tierRange: 6-16
vanCount: 6-9
bossType: lightning
modifierSlots: 1-3
geometry: "600×1800"
---

# Cửu Tiêu (`nine-heavens`)

Cửu Tiêu là chín tầng trời, nơi Ngũ Hành Sơ Tổ ngày xưa ngắm thiên hà mà ngộ đạo. Linh lực ở đây không trôi — nó rơi như mưa sao, mỗi giọt là một niệm trời ban. Đạo sĩ luyện đan ở Cửu Tiêu phải biết đón sấm, biết tiếp gió, biết đứng yên giữa cơn rơi của muôn vì sao.

## Special Rules

Board chiều dọc 600×1800 (gấp 1.5 chiều cao Tiêu Chuẩn) mô phỏng chín tầng trời. Physics override: gravity +60%, friction -30% — linh lực rơi nhanh như sét rơi từ Cửu Tiêu xuống Nhân Giới, intensity tích luỹ velocity rất mạnh nhưng player có ít thời gian routing. 9 anchor đúng 9 ô = 3 tầng × 3 cột: tầng trời Hoả (Cửu Tiêu thượng), tầng Vô Cực (Trung Thiên), tầng Thổ (Hạ Giới — nơi đan ở). Chain Hoả→Vô Cực→Thổ là 'thiên đạo flow' = +50% intensity bonus đến đan. Linh khí ở 3 cột buộc player chọn lane thay vì spam toàn board. Boss = Thiên Kiếp wave từ tầng trời cao nhất rơi xuống.

## Geometry

**Geometry** (600×1800, 9 anchor — chín tầng trời):
```
+-------------+
|             |
|  ⊙(H) ⊙(H) ⊙(H)  |   tầng Hoả (Cửu Tiêu thượng)  y=280
|             |
|             |
|             |
|             |
|  ⊙(V) ⊙(V) ⊙(V)  |   tầng Vô Cực (Trung Thiên)   y=900
|             |
|             |
|             |
|             |
|  ⊙(T) ⊙(T) ⊙(T)  |   tầng Thổ (Hạ Giới)          y=1520
|             |
|  [linh đan] |
+-------------+
3 cột × 3 tầng. Chain Hoả→Vô Cực→Thổ = thiên đạo flow.
```
> ⊙ = anchor, H=fire, V=void, T=earth

