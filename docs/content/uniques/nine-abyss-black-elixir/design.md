---
id: nine-abyss-black-elixir
ten: Cửu U Hắc Đan
type: box
element: water
category: chaos-risk
dropWeight: 60
dropRateHint: atlas drop, rare
---

# Cửu U Hắc Đan (`nine-abyss-black-elixir`)

## Lược tả

Cổ vật chaos-risk cực đoan cho lối Cuồng Sát ngắn hơi: nhân ba toàn bộ intensity trong pháp trận, nhưng mỗi ván kết thúc cướp đi 10% Lò Thọ vĩnh viễn trong phiên đó. Đan nhanh hoặc không kịp đan.

## Cơ chế

Khi trang bị Cửu U Hắc Đan, **toàn bộ intensity** của mọi va chạm trong pháp trận được nhân **×3** (áp sau Layer 2 player multiplier, trước Layer 3 map multiplier — combat-math §2). Sau mỗi ván kết thúc (thắng hoặc thua), Lò Thọ giảm **-10 điểm phẳng** (không phải phần trăm) và **không hồi phục** trong suốt pháp trận đó.

| Tier | Intensity | Lò Thọ mất mỗi ván |
|---|---|---|
| T1 | ×3 | -10 (từ 100, cạn sau 10 ván) |
| T2 | ×3 | -8; nếu ván thắng chỉ -4 |
| T3 | ×3 | -8 nếu thua; nếu thắng **hồi +2** (net -6 nếu thua liên tục, dương nếu thắng chuỗi) |

- Lò Thọ cạn về 0 → **Lò vỡ**: pháp trận fail ngay lập tức dù linh đan còn nguyên (combat-math §5: Lò Thọ = tài nguyên tồn tại độc lập với stability).
- Một pháp trận 5-8 ván: T1 cạn Lò sau 10 ván → an toàn nếu không thua nhiều; T2/T3 buộc player kết thúc nhanh hoặc giữ win-rate cao.
- **Intensity ×3** đẩy tổng stack lên ~201x lý thuyết (67x ceiling × 3) — giữ hợp lý vì duration pháp trận bị cắt ngắn tự nhiên; không thể farm đủ ván để exploit full stack.

## Đánh đổi (Downside)

- **Lò Thọ -10/ván**: pháp trận 8 ván = mất 80 Lò Thọ. Không có sustain → Lò vỡ trước khi đan xong Bảo phẩm trở lên.
- **Chỉ an toàn kết hợp với Đan Pháp Tử Sinh** (pháp trận 3-5 ván cố định) — ngoài Tử Sinh, mọi Đan Pháp dài hơn đều rủi ro Lò cạn.
- **Anti-synergy với `amitabha-statue`**: sustain drip cần nhiều ván win; ×3 intensity thừa sức thăng phẩm mà không cần drip, nhưng Lò Thọ đòi phải dừng sớm — hai cơ chế triệt tiêu nhau.
- Mang item này cùng `cosmos-furnace` gần như bất khả: cosmos-furnace khuyến khích tích lũy dài hạn qua nhiều ván, trong khi Hắc Đan phạt nặng mỗi ván thêm.

## Vì sao (WHY)

- **×3 là số đúng**: combat-math §3 liệt kê "Cổ Vật multipliers: varies, max 3x" — Hắc Đan là item chiếm trọn slot đó. Thấp hơn không đáng đánh đổi Lò Thọ; cao hơn phá trần 67x.
- **-10 phẳng thay vì -10%**: tránh phạt nặng hơn build có Lò Thọ cao (vì Lò.Thân affix có thể đẩy Lò lên 150+) — flat damage bình đẳng hơn, cho phép build "Lò Thọ cao" tận dụng item thêm 5 ván.
- **Cơ chế "Lò vỡ = fail"** tạo clock rõ ràng trên HUD — player thấy nguy hiểm, không bị surprised.

## Synergy & Build

- **Archetype**: Cuồng Sát tốc thắng — win ván trong 3-5 ván trước khi Lò cạn. Đạo Phái **Tử Vi** (Thiên Nhãn xem trước drops → chọn đúng đan dược boost → thăng phẩm nhanh) và **Thái Cực** (Vạn Pháp Dung Hoà +5% tất cả → Lò Thọ đỡ cạn hơn một chút, T2 wind đi).
- **Combo cốt lõi**: Đan Pháp **Tử Sinh** (số ván cố định ngắn) + `doomed-short-life-charm` (phá thêm speed) + Lò.Thân affix Lò Thọ max → kéo dài thêm 5 ván buffer.
- **Anti-synergy**: `amitabha-statue` (cần nhiều ván win để tích quality drip, mâu thuẫn clock Lò), `landscape-map` (+5 slot → nhiều ván luyện → Lò cạn nhanh hơn dự tính).
- **Drop**: dropWeight 60, `atlas drop, rare` — gặp T8+, reward cho người biết dùng Đan Pháp Tử Sinh.
