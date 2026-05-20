---
id: handle-left-thunderbolt-charm
ten: Quai Lôi Đình Phù (Trái)
slot: handleL
rarity: Legendary
variant: Thần
isUnique: false
---

# Quai Lôi Đình Phù (Trái) (`handle-left-thunderbolt-charm`)

## Lược tả

Phù lệnh cổ đại mang sấm sét của Thiên Kiếp — một lần mỗi ván, đạo sĩ có thể gọi xuống một tia sét thần uy, xé ngang trung tâm board, phá vỡ sự cân bằng tích lũy của linh khí địch. Quai trái phải cùng mang sấm âm dương, đối xứng như hai cực của thiên lôi.

## Implicit

**1×/ván: sét chém trung tâm board — gây damage toàn bộ linh khí trong bán kính 300px.**

Cơ chế chi tiết (Legendary — Thần):
- Kích hoạt thủ công — người chơi chọn thời điểm.
- Tia sét xuất phát từ tâm board, toả tức thì bán kính 300px.
- Mỗi linh khí trong vùng nhận **damage Lôi (nguyên tố void/lightning)** tương đương 3 lần hit thường từ linh lực nguyên tố Thủy (combat-math §2 charge: damage base × charge_multiplier tại charge_count hiện tại của ván).
- Damage tính theo tương sinh/tương khắc Ngũ Hành (combat-math §2): Lôi khắc Kim, tương sinh Hỏa — linh khí Kim chịu thêm 50%, linh khí Thổ/Mộc kháng 25%.
- Gây **screen shake** + hiệu ứng particle Lôi — visual cue rõ ràng.
- Charge duy nhất — không hồi.

Tham chiếu combat-math §2 (charge), §4 (crit Lôi): nếu ván đang có charge_count cao (nhiều hop liên tiếp), sét kế thừa multiplier hiện tại → bùng nổ damage khi kích ở đỉnh chain.

Rarity scale:
| Rarity | Charge/ván | Bán kính | Damage |
|---|---|---|---|
| Magic (Linh) | 1× | 150px | 1× hit |
| Rare (Bảo) | 1× | 225px | 2× hit |
| Legendary (Thần) | 1× | 300px | 3× hit + Ngũ Hành tương khắc bonus |

## Slot role

**Quai (handleL)** — tay cầm trái Lò Luyện Đan. Quai tier Legendary: chuyển từ utility phòng thủ sang tấn công chủ động. Lôi Đình Phù là Quai offensive duy nhất — tạo spike damage point-in-time thay vì hiệu ứng passive liên tục. Mirror pair với `handle-right-thunderbolt-charm` — đeo cả hai = 2 tia sét/ván.

## Build use

- **Thiên Kiếp build**: bí cảnh variant **Thiên Kiếp** (T14-T16) có linh khí địch mật độ cao và durability cao — sét AoE 300px xử lý nhóm linh khí ngoan cố mà chain đơn khó tiếp cận.
- **Đạo Phái Lôi Phong**: keystone Lôi Phong tăng damage Lôi +30% và mở rộng bán kính thêm 50px → sét mở rộng lên 350px, gần như phủ toàn board.
- **Stack đôi**: `handle-left-thunderbolt-charm` + `handle-right-thunderbolt-charm` → 2 sét/ván — trigger đầu ván xử lý linh khí yếu, trigger cuối ván boss phase khi linh khí boss mạnh nhất.
- **Combo `ring-left-spirit-record`**: lưu affix Lôi từ linh khí Legendary → map sau guaranteed spawn linh khí Lôi Legendary → sét kế thừa charge từ chain Lôi dài → cộng hưởng.
- **Anti-synergy**: bí cảnh variant **Long Cung** có linh khí đồng minh (dragon spawn) — sét AoE không phân biệt địch/đồng minh, có thể vô tình phá linh khí của mình.
