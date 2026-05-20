---
id: black-jade-cauldron
ten: Đỉnh Hắc Bích
type: cauldron
element: water
rarity: Magic
dropPool: Uncommon
tags: [water, sustain, heal]
---

# Đỉnh Hắc Bích (`black-jade-cauldron`)

## Lược tả

Đỉnh ngọc đen bóng, thành dày như tường cổ tháp, bên trong lúc nào cũng ẩm hơi nước. Cauldron Thuỷ nguyên tố — đứng giữa board như một giếng sâu hút linh lực. Mỗi khi linh lực Thuỷ tương sinh chạm vào, đỉnh hấp thụ một phần năng lượng và truyền trực tiếp vào stability của linh đan: heal nhỏ nhưng liên tục, như đất ngậm mưa đầu mùa.

## Implicit

Mỗi lần linh lực Thuỷ **tương sinh** (Mộc→Thuỷ hoặc Thuỷ đồng hành Thuỷ-đan) chạm vào đỉnh: **heal linh đan +1% stability**.

Cơ chế combat-math: tương sinh hit thông thường heal đan +intensity × 0.05 (§2). Đỉnh Hắc Bích cộng thêm +1% stability **flat** — không phụ thuộc intensity, không phụ thuộc velocity. Đây là heal floor: ngay cả hit yếu nhất (velocity 0.5x, intensity thấp) vẫn cho +1%. So với đồng hành heal +intensity × 0.02 (§2), flat +1% thường lớn hơn ở early game và đảm bảo heal không về 0.

Cauldron là linh khí **có thể bị hit** (active target). Positioning đỉnh trên luồng Thuỷ quan trọng — linh lực phải đi qua đỉnh để trigger, không chỉ gần.

## Affix pool

Tag roll trên `cauldron`:

| Affix slug | Tags | Vai trò trên Đỉnh Hắc Bích |
|---|---|---|
| `cauldron-element-slow` | utility, elemental | Linh lực Thuỷ qua đỉnh bị slow nhẹ — tăng thời gian trong đỉnh, kích hoạt heal nhiều hơn trong một lần qua |
| `cauldron-slow-burst` | utility, aoe | Sau N hit, phát burst slow toàn board — phối hợp với heal drip để kéo dài thời gian an toàn |

## Build role

**Heal drip node** cho board Thuỷ, đặc biệt hữu ích khi stability thấp mãn tính.

- **Board Thuỷ sustain**: kết hợp với `arhat-water-spirit` (dispel 7-hit) + `black-jade-cauldron` (heal 1%/hit) = double layer Thuỷ survival. Dispel tắt Tâm Ma, đỉnh bù stability back.
- **Tương sinh Mộc→Thuỷ** (§1): linh lực Mộc sinh Thuỷ → hit đỉnh → +1% flat. Với chain Mộc liên tục, đỉnh heal trung bình 2-5%/giây trên board nhanh.
- **Set Tứ Linh** (`four-spirits`): `black-jade-cauldron` + `black-tortoise-statue` hình thành cặp Thuỷ phòng thủ. Đỉnh heal, tượng giảm damage — Thuỷ lane cực bền.
- **Đạo Phái**: **Thái Cực** (`tai-chi`) — utility/sustain focus; hoặc **Linh Sơn** (`spirit-mountain`) nếu echo Thuỷ nhân đôi số hit vào đỉnh.
- **Map T1-T8**: đỉnh này có giá trị nhất early-to-mid game khi intensity thấp và flat heal chiếm tỷ lệ cao. Late game khi intensity cao, tương sinh heal intensity × 0.05 vượt flat +1% — đỉnh trở thành secondary.
