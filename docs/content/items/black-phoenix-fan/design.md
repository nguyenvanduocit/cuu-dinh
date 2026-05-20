---
id: black-phoenix-fan
ten: Quạt Hắc Phụng
type: fan
element: water
rarity: Common
dropPool: Common
tags: [water, slow, aoe]
---

# Quạt Hắc Phụng (`black-phoenix-fan`)

## Lược tả

Quạt lông phụng đen bóng, mỗi lông như giọt mực nhỏ xuống mặt ao đêm. Linh khí Thuỷ nguyên tố — khi bị linh lực chạm vào, quạt xoè ra phát sóng Thuỷ khí bao phủ toàn board: mọi linh lực đang chuyển động đều bị **slow 20%** trong **3 giây**. Hiệu ứng board-wide và ngắn gọn — kiểm soát nhịp thay vì block hoàn toàn.

## Implicit

Khi linh lực chạm vào quạt: **slow toàn board 20%** trong **3 giây** — mọi linh lực đang di chuyển trên board giảm velocity xuống còn 80% vận tốc hiện tại.

Cơ chế combat-math: velocity factor (§2) dao động 0.5×–2.0×. Slow 20% nghĩa là velocity × 0.8 — tại vận tốc chuẩn (1.0×), slow đưa xuống 0.8× → intensity base giảm 20%. Tại vận tốc cao (2.0×), slow xuống 1.6× — vẫn cao hơn chuẩn, intensity vẫn tốt. Tại vận tốc thấp (0.5×), slow xuống 0.4× → chạm sàn, intensity về minimum. Người chơi cần quản lý: không kích hoạt quạt khi board đang ở vận tốc thấp sẵn.

Slow 3 giây = ~3-5 hit trên board nhanh. Đủ để reposition, đủ để recover một tình huống nguy hiểm.

## Affix pool

Tag roll trên `fan`:

| Affix slug | Tags | Vai trò trên Quạt Hắc Phụng |
|---|---|---|
| `fan-redirect` | utility, aoe | Khi quạt bị hit, redirect một số linh lực sang hướng khác — kết hợp với slow để điều hướng luồng sau khi làm chậm |

## Build role

**Tempo control tool** — dùng để mua thời gian hoặc setup combo timing.

- **Defensive reset**: khi board hỗn loạn (linh lực đang đi về hướng xấu, stability thấp), trigger quạt slow 3 giây = 3 giây để reposition khác. Linh khí Thuỷ hỗ trợ tốt vì Thuỷ khắc Hoả (§1) — nếu board đang có Hoả khắc đan, slow ngăn Hoả hit thêm.
- **Combo setup**: slow toàn board cho phép chain dài hơn được thiết lập trước khi linh lực nhanh tới đan. Kết hợp với `bead-chain` affix để extend chain trong 3 giây slow.
- **Set Tứ Linh** (`four-spirits`): quạt là piece Thuỷ thứ hai (sau `black-tortoise-statue`). Ở đây đóng vai trò utility trong bộ, tương phản với tượng phòng thủ.
- **Đạo Phái**: **Thái Cực** (`tai-chi`) — tempo và control là lợi thế của Thái Cực; slow thêm một layer kiểm soát hoàn hảo.
- **Anti-synergy**: build "Cuồng Sát" (§4) dựa vào nhiều hit nhanh để tích charge — slow giảm tốc độ hit, giảm DPS tổng. Tránh dùng quạt ở board cần hit density cao.
- **Common/Common**: item rẻ nhất trong bộ 20 — drop sớm, dùng từ T1, thay bằng item chuyên hơn khi vào T8+.
