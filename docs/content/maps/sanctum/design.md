---
id: sanctum
ten: Tử Sinh
variant: sanctum
tierRange: 8-16
vanCount: 20-20
bossType: mirror
modifierSlots: 1-3
geometry: "800×1200"
---

# Tử Sinh (`sanctum`)

Trong sâu Hồn Nguyên Điện có hai mươi cánh cửa phong ấn — sau mỗi cánh là một sinh tử quan. Đạo sĩ vào, không quay đầu được; mỗi phòng phải chọn một con đường, mỗi đường có cái giá. Tổ Sư Bất Tử nói: 'Hai mươi cửa là hai mươi lần tự vấn. Linh đan qua được, không phải vì giỏi — vì biết chọn.'

## Special Rules

Đây là 1 phòng mẫu (room template) — RUNTIME GENERATE 20 phòng nối tiếp từ template này, mỗi phòng xoay/lật/scale khác nhau để giữ tươi. Mỗi phòng player chọn 1 trong 3 cửa: Cửa A (risk loot, modifier +1 phòng sau), Cửa B (neutral), Cửa C (heal +stability cho linh đan). Bể linh đan ở bất kỳ phòng nào = mất tất cả Sanctum loot, không mất loot Forever. Pass phòng 20 = boss Tâm Ma siêu khó + guaranteed Cổ Vật + Đan Pháp Cổ tier. Drop rate Đan Pháp Tử Sinh rất hiếm, gate level 70+. Anchor template 8 điểm để buộc player chọn linh khí tối ưu trong không gian hẹp.

## Geometry

**Geometry** (800×1200, 8 anchor — room template):
```
+--------------------+
|                    |
|         ⊙          |   centered top
|                    |
|     ⊙   ⊙   ⊙      |   triad row
|                    |
|                    |
|       ⊙     ⊙      |
|                    |
|                    |
|         ⊙  ⊙       |
|                    |
|       [linh đan]   |
+--------------------+
runtime: 20 rooms từ template này, xoay/lật/scale
```
> ⊙ = anchor (all elementBias=null — no element lock)

