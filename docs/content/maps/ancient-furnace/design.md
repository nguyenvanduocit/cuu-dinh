---
id: ancient-furnace
ten: Cổ Đan Lò
variant: ancient-furnace
tierRange: 5-14
vanCount: 2-3
bossType: anomaly
modifierSlots: 1-4
geometry: "800×1200"
---

# Cổ Đan Lò (`ancient-furnace`)

Tương truyền ở Hoả Sơn Lò Cốc, Lò Thần để lại một chiếc lò cổ vỡ đôi từ thời Đại Đan Đạo. Bí cảnh này tái hiện ngày cuối cùng Lò ấy cháy — lửa và đất xoay quanh đan tâm như hồi ức. Đạo sĩ vào không tìm linh khí lạ; vào để vét đan dược tổ truyền còn sót lại trong tro tàn.

## Special Rules

Boss-rush ngắn ~5 phút. vanCount 2-3 = 2-3 wave Dị Tượng liên tục, không có ván thường — drop linh lực ngay từ ván 1. Currency-rich: drop pool +200% Đan Dược (Linh Đan, Tinh Hoa Ngũ Hành), +50% Tinh Hoa, -50% linh khí drop. Ý đồ: dùng làm 'currency farm map' tốc độ cao thay vì rare hunt. 12 anchor xếp 3 vòng concentric mô phỏng cấu trúc Lò Luyện Đan cổ: tâm = đan đang luyện (Vô Cực), vòng trong 4 điểm Hoả (lửa lò), vòng ngoài 8 điểm Thổ (vỏ lò). Layout buộc player build chain ly tâm Vô Cực → Hoả → Thổ.

## Geometry

**Geometry** (800×1200, 12 anchor — 3 vòng concentric):
```
+--------------------+
|                    |
|         ⊙(T)       |   ring 3 top
|                    |
|     ⊙(T)  ⊙(T)     |
|       ⊙(H)         |   ring 2 (Hoả)
|   ⊙(T) ⊙(V) ⊙(T)   |   center = Vô Cực
|       ⊙(H)         |
|     ⊙(T)  ⊙(T)     |
|                    |
|     ⊙(T)   ⊙(T)    |   ring 3 bottom
|                    |
|       [linh đan]   |
+--------------------+
Vô Cực ⊙ tâm, Hoả ⊙ vòng trong, Thổ ⊙ vòng ngoài
```
> ⊙ = anchor, T=earth, H=fire, V=void

