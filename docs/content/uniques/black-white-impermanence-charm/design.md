---
id: black-white-impermanence-charm
ten: Bùa Hắc Bạch Vô Thường
type: talisman
element: void
category: chaos-risk
dropWeight: 60
dropRateHint: atlas drop, uncommon
---

# Bùa Hắc Bạch Vô Thường (`black-white-impermanence-charm`)

## Lược tả

Cổ vật vô thường: cứ 5 giây, Hắc hoặc Bạch Vô Thường ghé thăm — may hay rủi đều ép phải đón nhận. Khi linh đan yếu nhất, Hắc Vô Thường luôn chọn đúng lúc đó để đến.

## Cơ chế

Mỗi **5 giây** trong pháp trận, kích hoạt một trong hai hiệu ứng (50/50 ngẫu nhiên):

**Bạch Vô Thường (Buff)**:
- +30% intensity tất cả linh lực trong 5 giây tiếp theo.

**Hắc Vô Thường (Debuff)**:
- -30% intensity tất cả linh lực trong 5 giây tiếp theo.

| Tier | Buff/Debuff magnitude | Stability ≤ 30: Hắc xác suất | Debuff duration |
| --- | --- | --- | --- |
| T1 | ±30% intensity | 100% Hắc (luôn Hắc khi stability thấp) | 5 giây |
| T2 | ±40% intensity | 80% Hắc khi stability ≤ 30 | 5 giây |
| T3 | ±50% intensity + Bạch cũng heal +5 stability | 60% Hắc khi stability ≤ 30 | 5 giây |

- **Xác suất Hắc khi stability thấp**: khi linh đan stability ≤ 30 (combat-math §5, vùng nguy hiểm đại khắc), Bùa cảm nhận "điểm yếu" — T1 luôn gọi Hắc (100%), T2 80%, T3 60%. Kẻ bên bờ vực dễ bị đẩy xuống hơn.
- **±30/40/50% intensity**: combat-math §2 player_mult nhân thêm yếu tố này — +30% xếp ngang với Lò.Khắc_Phù T3 (+25%), debuff -30% phá hoại tương đương.
- Ngẫu nhiên được seed độc lập mỗi 5 giây — không thể predict (không xem trước được dù có Tử Vi ascendancy).

## Đánh đổi (Downside)

- **Stability ≤ 30 → Hắc thiên vị nặng**: đúng lúc cần stability nhất (tránh đại khắc instant brick §5), bùa lại kéo intensity xuống -30%. Linh lực yếu đi khi đang cần quality tích lũy gấp để thoát nguy hiểm — vòng xoáy tử thần cho build careless.
- **Variance 60 giây/pháp trận**: pháp trận 15-20 phút = ~180 proc, kỳ vọng 50/50 nhưng deviation cao — chuỗi 5-6 Hắc liên tiếp xảy ra có thể tại bất kỳ thời điểm nào, không có floor protection.
- Không tương thích với `ancestral-necklace` (tăng tham số theo level, ổn định — Bùa Vô Thường phá vỡ tính toán ổn định đó mỗi 5 giây).

## Vì sao (WHY)

- **Stability-biased Hắc (không full random)**: pure 50/50 không có cảm giác "vô thường đúng nghĩa"; thiên vị Hắc khi yếu tạo tension thật sự — player cảm thấy bùa phản lại họ đúng lúc tồi nhất. Mechanically: đây là cách bù cho việc +30% buff là rất mạnh (ngang Lò tier 3) — downside phải có räng.
- **±30% (không ±10%)**: magnitude phải đủ để buff/debuff cảm nhận được rõ ràng. +10% không làm cho Bạch Vô Thường thú vị; -30% không đủ đau. 30% ngang với affix mạnh nhất → mỗi proc thật sự quan trọng.
- **5 giây interval**: đủ nhanh để ảnh hưởng chiến thuật trong ván (không thể bỏ qua), không quá nhanh để micro-manage.

## Synergy & Build

- **Archetype**: RNG gambler / chaos tolerance. Đạo Phái khớp nhất: **Vô Cực** (Hỗn Nguyên Khuếch Đại nhân đôi biên độ — ±30% thành ±60%, Bạch = cực mạnh, Hắc = thảm họa) và **Tử Vi** (Thiên Nhãn xem drop trước — không xem được Bùa proc, nhưng thông tin drop bù lại phần nào variance).
- **Combo**: `phoenix-tail-cauldron` (stability regen) giữ stability > 30 để tránh Hắc bias; `galaxy-lantern` (tăng proc rate loot) tận dụng Bạch window để farm; build nhanh (ít ván, intensity cao) rút ngắn exposure tổng.
- **Anti-synergy**: build sustain dài hạn cần stability ổn định (`amitabha-statue`, `jade-spirit-flower`) — variance mỗi 5 giây phá vỡ kế hoạch ổn định; `ancestral-necklace` (tính toán level multiplier ổn định bị phá mỗi 5 giây).
- **Drop**: dropWeight 60, `atlas drop, uncommon` — chaos-risk entry level, gặp sớm để dạy player về variance.
