---
id: endless
ten: Vô Cực
variant: endless
tierRange: 16-16
vanCount: 50-100
bossType: lightning
modifierSlots: 3-8
geometry: "800×1200"
---

# Vô Cực (`endless`)

Vô Cực không phải nơi — là trạng thái. Khi đan đã thành Tiên, đạo sĩ không còn quay về được nữa; mỗi lò đỏ là một vũ trụ tự sinh tự diệt. Ở đây thiên kiếp rơi không nghỉ, tâm ma sinh không dứt, nguyên khí không có hình. Đạo sĩ luyện ở Vô Cực không tu cho mình — tu cho cái đời sau đời này.

## Special Rules

Endgame endless mode (Cấp Vô Cực 100+). vanCount 50-100 chỉ là kỳ vọng baseline — RUNTIME REGENERATE anchor positions + count (8-13) + elementBias mỗi pháp trận, đan tier scale theo Vô Cực Điểm hiện tại. 13 anchor lưu trong file = 1 layout mẫu để designer review; runtime KHÔNG dùng trực tiếp layout này. Mọi thuộc tính random: spawn rate, element bias, modifier (lên đến 8 stack đồng thời = schema cap), Tâm Ma mod intensity ×Vô Cực Điểm / 100. Boss = Thiên Kiếp escalating mỗi 10 ván (Vô Cực 50/100/200 = Tâm Ma Vĩ Đại super-boss). Pháp Trận KHÔNG kết thúc bằng win — chỉ kết thúc bằng player tự bail (lock loot) hoặc bể đan. Tier lock T16 vì đây là content trên trần atlas. Drop pool fully random với weight bias theo player's Đạo Phái.

## Geometry

**Geometry** (800×1200, 13 anchor — sample layout only):
```
+--------------------+
|                    |
|  ⊙    ⊙       ⊙    |   y=200-240
|    ⊙       ⊙       |   y=420
|⊙       ⊙       ⊙   |   y=600
|    ⊙       ⊙       |   y=780
|  ⊙       ⊙    ⊙    |   y=960-1000
|                    |
|       [linh đan]   |
+--------------------+
Layout này chỉ là MẪU.
Runtime regenerate (8-13 anchor, random bias) mỗi pháp trận.
```
> ⊙ = anchor (no fixed bias — runtime random)

