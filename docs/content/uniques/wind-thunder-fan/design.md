---
id: wind-thunder-fan
ten: Quạt Phong Lôi
type: fan
element: void
category: build-defining
dropWeight: 30
dropRateHint: atlas drop, very rare
---

# Quạt Phong Lôi (`wind-thunder-fan`)

## Lược tả

Cổ vật chiến thuật: 1 lần mỗi ván, xoay toàn bộ linh lực đang bay trên board 90° theo chiều kim đồng hồ — thoát chain tương khắc tức thời, nhưng đánh đổi bằng việc xoá sạch toàn bộ charge_count tích lũy.

## Cơ chế

**1 lần mỗi ván**, player kích hoạt thủ công (button trên HUD): tất cả linh lực **hiện đang di chuyển trên board** đồng loạt xoay hướng **+90° theo chiều kim đồng hồ** (clockwise). Velocity magnitude giữ nguyên; chỉ direction thay đổi. Đồng thời, **charge_count của mọi linh lực** về 0 ngay khi kích hoạt (combat-math §2: charge_count reset từ bất kỳ giá trị về 0).

| Tier | Xoay | Charge reset | Cooldown |
|---|---|---|---|
| T1 | +90° clockwise, 1x/ván | Reset charge_count tất cả linh lực về 0 | 1x/ván, không cooldown nội ván |
| T2 | +90° clockwise, 1x/ván | Reset charge về 0; linh lực mới spawn sau reset **bắt đầu với charge_count +1** | 1x/ván |
| T3 | +90° clockwise, 1x/ván; hoặc -90° (player chọn chiều) | Reset charge về 0; mọi linh lực bắt đầu với charge_count +1 | 1x/ván |

- **Charge_count reset**: một linh lực 7 hop (+140% intensity từ charge, combat-math §2) về 0 = mất toàn bộ chuỗi tích lũy. Đây là cost thực sự — không phải narrative.
- **Khi nào đáng dùng**: khi chain hiện tại đang đổ vào đại khắc không thoát được, sacrifice charge để thoát stability damage. Calculus: 7 hop × +20% = +140% intensity đang chạy, đổi lấy thoát 1 đại khắc (stability -intensity × 0.80 — §2).
- **Không ảnh hưởng linh khí**: chỉ linh lực di chuyển bị xoay; vị trí linh khí trên board không đổi.
- Nếu không có linh lực trên board khi kích hoạt: lãng phí charge 1x/ván.

## Đánh đổi (Downside)

- **Charge_count về 0 tất cả linh lực**: mất toàn bộ momentum tích lũy. Cần 7+ hop để build lại +140% charge — trong pháp trận ngắn (Tử Sinh), mất charge = mất 1 ván hiệu quả.
- **1x/ván**: không dùng lại được — nếu dùng sai timing (panic-dùng khi chain không thực sự nguy hiểm), mất công cụ thoát hiểm cho phần còn lại của ván.
- **Xoay 90° cố định** (T1/T2): không phải direction player muốn — có thể xoay chain vào khắc khác hoặc ra mép board (trigger `thousand-mile-scythe` sacrifice).
- Anti-synergy cực mạnh với build chain-dài: build Ngũ Hành 5-cycle phụ thuộc charge accumulation dài (+200% intensity sau 10 hop) — reset = mất spike lớn nhất.

## Vì sao (WHY)

- **Charge reset thay vì stability cost**: stability là HP của linh đan — fan đã là "thoát khỏi nguy hiểm stability", không thể đồng thời consume stability. Charge là thứ đáng mất vì nó là resource tích lũy bởi play, không phải safety buffer.
- **+90° clockwise cố định** (T1/T2): không hoàn hảo → tạo decision depth. Biết trước sẽ xoay clockwise → player phải model "90° từ đây ra đâu" trước khi bấm. Tactical, không phải magic-undo.
- **T3 chọn chiều**: reward mastery — biết board đủ tốt để chọn -90° hay +90° đúng lúc.

## Synergy & Build

- **Archetype**: Tactical Control — board reader, bảo toàn stability trong ván khó. Đạo Phái **Tử Vi** (Thiên Nhãn xem trước drop → plan ván trước khi linh lực spawn → ít cần panic-fan hơn, dùng fan proactively thay vì reactively) và **Thái Cực** (đa nguyên tố → hướng nào sau xoay cũng có chain thuận).
- **Combo cốt lõi**: `primordial-jade-bead` (nguyên tố random mỗi ván → fan là escape khi ván bad-roll; charge cũng thấp hơn vì không thể plan chain → reset charge ít tốn kém hơn); `primordial-black-elixir` (stability cap 25 → fan là life-line thoát đại khắc, charge trade xứng đáng với survival).
- **Anti-synergy**: `sun-wukong-staff` (Tách 3 con, mỗi con charge riêng → reset charge tất cả = mất nhiều charge hơn ×3); build Ngũ Hành 5-cycle (phụ thuộc charge dài → fan là worst-in-slot).
- **Drop**: dropWeight 30, `atlas drop, very rare` — build-defining tool, hiếm xứng tầm power level.
