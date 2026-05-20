---
id: earth-lantern
ten: Đèn Đất
type: lantern
element: earth
rarity: Common
dropPool: Common
tags: [earth, split, spawn]
---

# Đèn Đất (`earth-lantern`)

## Lược tả

Đèn đất nung màu vàng nhạt, ngọn lửa bên trong không bao giờ tắt dù không có dầu. Linh khí Thổ nguyên tố với cơ chế **split**: mỗi linh lực bất kỳ đi qua đèn bị chia thành 2 linh lực Thổ, mỗi linh lực mới tiếp tục rơi về phía linh đan. Đèn Đất là cách rẻ nhất để tăng số lượng linh lực Thổ trên board.

## Implicit

Linh lực bất kỳ đi qua đèn: **tách thành 2 linh lực Thổ** (element: earth), mỗi linh lực con tiếp tục di chuyển theo quỹ đạo vật lý từ điểm tách.

Cơ chế combat-math: spawn tạo 2 linh lực Thổ mới — mỗi con kế thừa vận tốc tại điểm tách (không kế thừa `charge_count` — reset về 0, §3). Với intensity = velocity/VELOCITY_BASE × (1 + charge×0.20), reset charge nghĩa là cả hai con bắt đầu chain lại từ đầu. Đây là trade-off: ×2 số hit nhưng mỗi hit nhỏ hơn (không có charge buff từ chain trước).

Linh lực gốc biến mất — chỉ có 2 con Thổ tiếp tục. Mọi nguyên tố vào đều ra Thổ, kể cả Vô Cực.

## Affix pool

Tag roll trên `lantern`:

| Affix slug | Tags | Vai trò trên Đèn Đất |
|---|---|---|
| `lantern-element-cycle` | elemental, utility | Sau mỗi N lần tách, chu kỳ element output: lần 1 Thổ, lần 2 Kim (Thổ sinh Kim §1), lần 3 Thổ... — tạo Thổ-Kim xen kẽ |
| `lantern-convert` | elemental, utility | Cho phép chọn output element khi tách thay vì mặc định Thổ |
| `lantern-deflect` | defensive, utility | Khi tách, một trong 2 con deflect ra hướng khác — kiểm soát trajectory |

## Build role

**Thổ multiplier** và **board density builder** cho build cần nhiều linh lực Thổ.

- **Thổ→Kim sinh** (§1): Thổ sinh Kim. Đặt đèn tạo Thổ → Kim linh khí tiếp nhận → feed Kim đan. Đèn làm bridge Thổ→Kim miễn phí, không cần Thổ nguồn tự nhiên.
- **Set Ngũ Hành** (`wuxing`): trong chuỗi 5-cycle Thổ→Kim→... , đèn tạo thêm Thổ link — board dày hơn, cycle nhanh hơn.
- **Board density**: 1 linh lực vào = 2 ra → double hit density. Với build cần nhiều hit để kích crit (§4 100% crit × multi), mật độ hit cao là lợi thế.
- **Đạo Phái**: **Cửu Âm** (`nine-yin`) — Thổ intensive với chain phức tạp; hoặc **Thái Cực** (`tai-chi`) nếu dùng tách như positioning tool.
- **Combo `earth-wall-statue`**: tường Thổ chặn linh lực non-Kim, đèn tạo Thổ từ linh lực bị chặn (nếu routing qua đèn trước). Kết hợp tạo "Thổ trap zone": linh lực vào zone → tách Thổ → Thổ nuôi chain.
- **Common/Common**: dễ drop, dễ dùng. Item nền tảng Thổ cho mọi giai đoạn game.
