---
id: lantern-spirit-path
ten: Linh Đường Đèn Lồng
type: lantern
element: void
category: build-defining
dropWeight: 100
dropRateHint: atlas drop, rare
---

# Linh Đường Đèn Lồng (`lantern-spirit-path`)

## Lược tả

Cổ vật build-defining cho lối Mù Quáng Sấm Sét: tắt sáng toàn bộ board, chỉ để lại vùng nhìn 100px quanh từng linh khí — nhưng linh lực di chuyển ngoài tầm nhìn nhận thêm +80% intensity khi cuối cùng chạm linh đan. Bóng tối là vũ khí, không phải hình phạt.

## Cơ chế

Khi mang `lantern-spirit-path`, board chuyển sang trạng thái tối:
- Player chỉ thấy **vùng tròn r=100px** quanh mỗi linh khí trên board; phần còn lại tối hoàn toàn.
- Linh lực di chuyển ra ngoài tất cả vùng sáng (100px từ mọi linh khí) được tính là **"trong bóng tối"**.

| Tier | Visibility | Intensity bonus khi chạm linh đan sau đoạn tối |
| --- | --- | --- |
| T1 | r=100px quanh mỗi linh khí | +80% intensity cho mọi viên đã đi qua ≥1s bóng tối |
| T2 | r=100px; đoạn tối ≥0.5s đã đủ | +80% intensity; linh lực trong tối không kích durability loss (Huyết Sát §8) |
| T3 | r=120px (nhẹ hơn) | +100% intensity; linh lực trong tối ≥1s cộng thêm 1 charge_count khi ra sáng |

- **"Đi qua ≥1s bóng tối"** (T1/T3): linh lực phải bay trong vùng tối tối thiểu 1 giây mới nhận bonus — không phải mọi viên đều kích được.
- **+80-100% intensity flat multiplier**: nhân *sau* player_mult và map_mult (combat-math §2) → top-end intensity run có thể cực kỳ mạnh.
- **T3 +1 charge_count khi ra sáng**: bù một phần charge bị mất do không thể chain trong tối.

## Đánh đổi (Downside)

- **Không thấy board trong tối**: linh lực đang bay trong bóng tối vô hình — không thấy trajectory, không biết nó đang đi đâu cho đến khi chạm linh khí hoặc linh đan. Chain planning trực quan không còn; chỉ xây board *trước* khi bắt đầu ván.
- **Chain trong tối không kiểm soát được**: linh lực bounce trong bóng tối vẫn chain, nhưng player không thấy chain đó đang xảy ra → không react. Đại khắc trong tối (combat-math §5) có thể phá stability trước khi player nhận ra.
- **Phản tác dụng với `galaxy-lantern`**: Đèn Tinh Thiên Hà cho biết trước 5-7 linh lực kế tiếp, nhưng trong bóng tối không thể dùng thông tin đó để plan hướng vì không thấy board. Hai lantern triết lý đối lập, không cùng trang bị có ý nghĩa.
- **Board đặt sai trước ván = thảm hoạ**: Linh Đường Đèn Lồng yêu cầu thiết kế board hoàn chỉnh *trước* khi bắt đầu pháp trận (vì không thể react trong tối). Sai một linh khí → toàn bộ ván chạy trong trajectory xấu không sửa được.

## Vì sao (WHY)

- **+80% flat (không ×2.0 multiplier)**: ×2.0 nhân toàn bộ chain sẽ đẩy intensity vượt stack ceiling ~67x (§3) trong end-game run; +80% flat nhân sau player/map mult = safe ceiling khi kết hợp với full build.
- **≥1s threshold (không instant)**: nếu mọi linh lực đều nhận +80% ngay khi rời vùng sáng, board nhỏ gần linh đan cũng được bonus → exploit bằng cách đặt linh đan sát mép tối. Threshold 1s ép player đặt linh đan xa, tạo đường bay dài thật sự.
- **T2 Huyết Sát immune trong tối**: đổi lại visibility, cổ vật này làm cho linh lực "vô hình" ngay cả với map mod; thù lù trong bóng tối không bị đếm. Tưởng thưởng logic: không nhìn thấy được thì không tính durability.

## Synergy & Build

- **Archetype**: Blind Big Hit. Đạo Phái **Vô Cực** (Hỗn Nguyên Khuếch Đại — biên độ random ×2): bonus +80% kết hợp intensity variation cực đoan → cú hit thành công cực kỳ mạnh, cú hit fail cũng cực kỳ thất thường. Vô Cực không cần nhìn để tin vào kết quả.
- **Đạo Phái Tử Vi** (Thiên Nhãn — xem trước 3 drop): biết trước linh lực kế tiếp để *trước ván* chuẩn bị đúng linh khí cho hướng tối — bù một phần thông tin bị mất.
- **Combo**: keystone **Sắc Bén** (crit ×3, chance ÷2) — một cú crit trong bóng tối = đòn kết thúc pháp trận; build ít linh khí nhưng đúng vị trí (chất lượng không số lượng, vì không quan sát được nhiều).
- **Anti-synergy**: `galaxy-lantern` (xem trước linh lực — thông tin vô dụng trong tối, hai lantern loại trừ nhau về triết lý); `landscape-map` (board rộng + tối = không thấy gì rộng hơn, càng hỗn loạn); `great-bell` (free trigger — nhiều viên bay tứ phía trong tối không kiểm soát được).
- **Drop**: dropWeight 100, `atlas drop, rare` — build-defining nhưng không quá hiếm, khuyến khích thử nghiệm lối chơi rủi ro.
