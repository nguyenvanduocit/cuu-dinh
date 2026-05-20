---
id: dark-nectar-vase
ten: Bình Cam Lộ Đen
type: vase
element: water
rarity: Magic
dropPool: Uncommon
tags: [water, convert, counter]
---

# Bình Cam Lộ Đen (`dark-nectar-vase`)

## Lược tả

Bình đá tối màu, bên trong chứa cam lộ đen — chất lỏng của Bắc Hải tâm thần. Linh khí Thuỷ chuyên biệt: chỉ hấp thụ linh lực **Hoả** và phun ra **Thuỷ**. Đây là converter nguyên tố đơn hướng — Hoả→Thuỷ — thực hiện tương khắc Thuỷ khắc Hoả ngay tại nguồn, trước khi Hoả kịp làm hại đan.

## Implicit

Bình **hấp thụ linh lực Hoả** và **phun ra Thuỷ**. Linh lực nguyên tố khác đi qua bình không bị ảnh hưởng.

Cơ chế combat-math: Hoả vào → Thuỷ ra. Theo §1: Thuỷ khắc Hoả (tương khắc). Nhưng với bình này, thay vì Hoả→khắc đan, Hoả bị convert trước → output Thuỷ. Thuỷ sau đó tương tác với đan theo ngũ hành Thuỷ: tương sinh với Mộc-đan (+30% quality), khắc Hoả-đan (-40% stability), trung tính với Kim/Thổ-đan.

Quan trọng: bình chỉ convert Hoả, không convert nguyên tố khác. Đây là **surgical counter**, không phải universal converter như `chaos-elixir-vase`.

## Affix pool

Tag roll trên `vase`:

| Affix slug | Tags | Vai trò trên Bình Cam Lộ Đen |
|---|---|---|
| `vase-absorb-convert` | elemental, utility | Tăng cường convert — có thể mở rộng sang absorb thêm nguyên tố (Thổ?) hoặc tăng output Thuỷ intensity |

## Build role

**Hoả counter** và **Thuỷ amplifier** cho board cần chặn Hoả lane cụ thể.

- **Đan Mộc bảo vệ khỏi Hoả**: Mộc bị khắc Hoả (§1). Đặt bình trên đường Hoả trước khi Hoả tới đan Mộc → convert Thuỷ → Thuỷ sinh Mộc thay vì Hoả khắc Mộc. Đảo ngược tương tác: từ -40% stability thành +30% quality.
- **Thuỷ lane builder**: bình tự động tạo thêm linh lực Thuỷ từ Hoả. Board có Hoả nguồn tự nhiên (linh khí Hoả) + bình = board Thuỷ phụ miễn phí.
- **Counter map mod Hoả**: một số map mod (Đan Pháp Hoả, Tâm Ma Hoả) áp linh lực Hoả áp đảo. Bình là công cụ meta-counter cho các map đó.
- **Đạo Phái**: **Thái Cực** (`tai-chi`) — kiểm soát element flow; hoặc **Linh Sơn** (`spirit-mountain`) nếu Thuỷ output được echo nhân đôi.
- **Combo `black-tortoise-statue`**: bình convert Hoả → Thuỷ, tượng giảm tương khắc trong ±200px. Hai piece cùng nhau biến Hoả threat thành Thuỷ asset — hoàn toàn đảo ngược nguy cơ.
- **Anti-synergy**: board không có linh lực Hoả — bình không làm gì. Kiểm tra meta trước khi dùng.
