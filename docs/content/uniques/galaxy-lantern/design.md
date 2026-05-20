---
id: galaxy-lantern
ten: Đèn Tinh Thiên Hà
type: lantern
element: void
category: sustain-defensive
dropWeight: 100
dropRateHint: atlas drop, uncommon
---

# Đèn Tinh Thiên Hà (`galaxy-lantern`)

## Lược tả

Cổ vật thông tin cho lối Thiên Nhãn: tiết lộ 5 linh lực kế tiếp — nguyên tố và thứ tự rơi — trước khi chúng xuất hiện. Sức mạnh là thông tin bất đối xứng; cái giá là thứ tự đó không đổi được.

## Cơ chế

Khi mang `galaxy-lantern`, UI hiển thị **hàng đợi 5 linh lực kế tiếp** (element + thứ tự), cập nhật sau mỗi linh lực rơi.

| Tier | Số linh lực xem trước | Thông tin |
| --- | --- | --- |
| T1 | 5 | element của từng viên |
| T2 | 7 | element + ước tính velocity range (thấp/trung/cao) |
| T3 | 7 | element + velocity range + highlight nếu linh lực sẽ gây đại khắc với linh đan hiện tại |

- **Xem trước** cho phép player điều chỉnh board (reposition linh khí còn trong tay, chọn dùng đan dược đúng lúc) trước khi linh lực rơi thật.
- **Downside cứng**: hàng đợi 5/7 linh lực này **cố định** — không thể reroll, bỏ qua, hoặc thay đổi thứ tự. Những gì Đèn Tinh cho thấy là những gì sẽ đến, dù tốt hay xấu.

## Đánh đổi (Downside)

- **Hàng đợi cố định, không reroll**: thấy trước 5 linh lực Hoả liên tiếp vào linh đan Mộc (tương khắc) nhưng **không làm gì được** để thay đổi thứ tự — chỉ có thể chuẩn bị, không thoát. Thông tin không phải quyền kiểm soát.
- **Độ trễ UI**: hiển thị hàng đợi chiếm không gian HUD → map phức tạp (nhiều tâm ma, nhiều modifier hiển thị) trở nên rối thông tin hơn; chỉ rõ ràng khi board gọn.
- **Phản tác dụng với Vô Cực** (Hỗn Nguyên Khuếch Đại nhân đôi biên độ random): hàng đợi cố định trong khi biên độ intensity mỗi viên cực đoan hơn → biết element nhưng không biết intensity → thông tin thiếu trọn vẹn, ra quyết định sai.
- **Không thay thế được reroll**: khác `ziwei` (Thiên Nhãn Tử Vi, reroll 1 affix miễn phí/ván) — galaxy-lantern chỉ xem, không can thiệp.

## Vì sao (WHY)

- **Hàng đợi cố định (không reroll)**: nếu xem trước + reroll được, trở thành near-perfect information → trivial-hoá RNG của game, phá variance thiết yếu của chaos-risk builds. Tách *biết* khỏi *thay đổi* là ranh giới balance cốt lõi.
- **T3 highlight đại khắc**: warning sớm đủ để player dùng đan dược Hồi Phục (stability +30%, §5) hoặc kích Phong Ấn an toàn — giảm bất ngờ "đột tử" mà không cắt rủi ro chiến lược.
- **sustain-defensive (không phải build-defining)**: không tăng số, chỉ tăng chất lượng quyết định → đúng profile defensive utility.

## Synergy & Build

- **Archetype**: Thông tin / phòng bị. Đạo Phái **Tử Vi** (Thiên Nhãn — xem trước 3 drop + reroll 1 affix/ván): cộng hưởng thông tin — Tử Vi xem drop, Đèn Tinh xem linh lực → full-preview gameplay. Tuy nhiên cũng gần như "thừa" nhau ở lớp utility nếu không có build synergy rõ hơn.
- **Combo**: `amitabha-statue` (flat quality mỗi ván win) + Đan Pháp **Marathon** (pháp trận dài, nhiều ván) — preview linh lực giúp duy trì stability ổn định qua nhiều ván, tối đa drip chất lượng.
- **Anti-synergy**: Đạo Phái **Vô Cực** (biên độ random ×2, xem element nhưng intensity quá unpredictable để plan); `lantern-spirit-path` (darkness board) — xem trước 7 viên nhưng không thấy board → thông tin mâu thuẫn, hai lantern loại trừ nhau về triết lý.
- **Drop**: dropWeight 100, `atlas drop, uncommon` — gặp sớm, tốt cho người muốn học board management.
