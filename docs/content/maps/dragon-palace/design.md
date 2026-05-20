---
id: dragon-palace
ten: Long Cung
variant: dragon-palace
tierRange: 4-14
vanCount: 6-9
bossType: anomaly
modifierSlots: 1-3
geometry: "1000×900"
---

# Long Cung (`dragon-palace`)

Long Cung nằm sâu dưới Bích Hải Đảo, nơi Long Vương ngàn năm trước phong ấn một mạch linh lực Thuỷ tinh khiết. Trong đây không có gió, không có lửa — chỉ có dòng chảy. Đạo sĩ luyện đan ở Long Cung phải học cách 'để đan tự thành', không thúc, không ép. Người vội vàng sẽ tay không trở về.

## Special Rules

Pháp trận Thuỷ exclusive — Đan Pháp Long Cung chỉ chấp nhận đan element Thuỷ hoặc Mộc; element khác lock entry. Physics override: gravity -40%, friction +200%, linh lực rơi chậm như trong nước, va chạm dampened (elastic 0.4 thay vì 0.9 default). Spawn pool: 80% Thuỷ + 15% Mộc + 5% Vô Cực; KHÔNG có Hoả/Kim/Thổ. Board nằm ngang (1000×900) mô phỏng đáy biển. 11 anchor xếp cong theo xương sống rồng từ trái sang phải, đỉnh đầu rồng (anchor-5) là Vô Cực — biased Long Vương. Drop pool: Bình Cam Lộ + Châu Thuỷ Long, Cổ Vật Long Cốt +30%. Tier 4-14 (không endgame T15+ vì physics quá lành).

## Geometry

**Geometry** (1000×900, 11 anchor — xương sống rồng):
```
+--------------------------+
|                          |
|              ⊙(V)         |  đỉnh đầu rồng
|         ⊙(T)   ⊙(T)       |
|     ⊙(T)         ⊙(T)     |
|  ⊙(T)               ⊙(T)  |
|⊙(T)                   ⊙(T)|
|       ⊙(M)    ⊙(M)        |  hai chân Mộc
|                          |
|         [linh đan]        |
+--------------------------+
curve = xương sống rồng từ trái sang phải
```
> ⊙ = anchor, T=water, M=wood, V=void

