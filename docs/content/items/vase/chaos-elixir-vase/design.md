---
id: chaos-elixir-vase
ten: Bình Hỗn Đan
type: vase
element: void
rarity: Magic
dropPool: Uncommon
tags: [void, convert, absorb]
---

# Bình Hỗn Đan (`chaos-elixir-vase`)

## Lược tả

Bình gốm không màu — nhìn vào không thấy gì, nhưng đặt bên cạnh thì mọi linh lực đều bị hút vào. Linh khí Vô Cực hấp thụ không phân biệt: Kim, Mộc, Thuỷ, Hoả, Thổ — tất cả vào bình đều ra Vô Cực. Đây là bộ chuyển đổi toàn nguyên tố duy nhất trong game.

## Implicit

Bình **hấp thụ bất kỳ linh lực nào** (mọi nguyên tố) đi qua và **phun ra Vô Cực** (element: void).

Cơ chế combat-math: sau convert, linh lực mang element `void`. Theo §1 matrix: Vô Cực tương tác với đan theo hàng `Vô Cực: n n n n n ≡` — không tương sinh, không tương khắc với mọi element đan. Chỉ `≡` (đồng hành) nếu đan là Vô Cực. Đối với đan năm nguyên tố: Vô Cực → trung tính, +intensity × 0.05 quality (§2 neutral).

Ứng dụng: chặn tương khắc. Linh lực Hoả đang nhắm đan Mộc (khắc) → qua bình → trở thành Vô Cực → trung tính thay vì khắc. Mất damage (không còn sinh) nhưng tránh stability damage -intensity × 0.40.

## Affix pool

Tag roll trên `vase`:

| Affix slug | Tags | Vai trò trên Bình Hỗn Đan |
|---|---|---|
| `vase-absorb-convert` | elemental, utility | Tăng tốc độ hấp thụ hoặc mở rộng element phun ra — có thể cho phép chọn output element thay vì chỉ Vô Cực |

## Build role

**Anti-khắc converter** và **Vô Cực enabler** cho board đa nguyên tố hỗn loạn.

- **Chặn đại khắc** (§1): đại khắc = -intensity × 0.80 stability + 10% brick chance. Bình đặt trên chain dẫn đến đại khắc → convert Vô Cực → neutral +5% quality thay vì thảm họa. Giá trị cứu nguy cực cao ở T12+ khi đại khắc chain dày.
- **Board Vô Cực build**: nếu đan là Vô Cực (§1: Vô Cực≡Vô Cực = đồng hành), bình convert tất cả linh lực thành Vô Cực → tất cả hit đều đồng hành → +intensity × 0.10 quality nhất quán. Không còn sinh/khắc RNG.
- **Đạo Phái**: **Vô** (`void`) — chuyên Vô Cực nguyên tố, khai thác đồng hành Vô Cực max. Hoặc **Thái Cực** (`tai-chi`) nếu dùng bình như control tool.
- **Combo `arhat-uncontested`**: bình tạo ra nhiều linh lực Vô Cực → Vô Cực linh khí trong bộ La Hán được immunity Phong Ấn → board Vô Cực cực an toàn.
- **Đánh đổi**: chuyển đổi sang Vô Cực mất hoàn toàn tương sinh bonus (+30% quality). Board Vô Cực ổn định nhưng không có spike damage cao như board sinh thuần.
