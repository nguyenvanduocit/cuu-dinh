---
id: death-soul-box
ten: Tử Hồn Linh Bao
type: box
element: void
category: chaos-risk
dropWeight: 60
dropRateHint: atlas drop, uncommon
---

# Tử Hồn Linh Bao (`death-soul-box`)

## Lược tả

Cổ vật thu hồn: linh khí tan vỡ không mất trắng — Linh Bao giữ lại nửa essence. Nhưng cái giá của sự an ủi đó là linh đan mong manh hơn, stability cap thấp xuống như mặc sẵn lời nguyền.

## Cơ chế

Khi bất kỳ linh khí trên board **bị phá hủy** (durability về 0 từ map mod "Huyết Sát" §8, hoặc bị hi sinh bởi `thousand-mile-scythe`), player nhận lại **50% giá trị essence** của linh khí đó dưới dạng currency.

| Tier | Essence refund | Stability cap penalty | Refund áp dụng cho |
| --- | --- | --- | --- |
| T1 | 50% essence | -20 stability cap (80 thay vì 100) | Linh khí phá hủy bởi Huyết Sát hoặc hi sinh |
| T2 | 60% essence | -15 stability cap (85) | + Linh khí hết durability tự nhiên |
| T3 | 75% essence | -10 stability cap (90) | + 10% cơ hội refund cả affix |

- **Stability cap penalty**: combat-math §5 stability max = 100 + Lò.Thân affix bonus + Cổ vật bonus. Tử Hồn Linh Bao trừ thẳng vào cap: T1 cap = 80 (hoặc 80 + Lò bonus). Với Lò.Thân T3 (+15 cap) → 95 thay vì 115. Mọi heal source vẫn hoạt động nhưng ceiling thấp hơn.
- **50% essence refund**: essence currency (reagent) dùng để craft affix cho linh khí (enums.md: ReagentCategory = `essence`). Refund cho phép tái craft linh khí mới ngay trong pháp trận từ currency nhận lại.
- **Không áp dụng tự bể linh đan**: chỉ linh khí phá hủy được refund, không phải linh đan bể — không incentive self-destruct.

## Đánh đổi (Downside)

- **Stability cap -20 (T1) vĩnh viễn khi đang mang**: stability max 80 thay vì 100. Combat-math §5: đại khắc hit khi stability < 25 = 10% instant brick chance. Với cap 80, "< 25" chiếm 31% range (25/80) thay vì 25% (25/100) — ngưỡng nguy hiểm chiếm phần lớn hơn thanh máu. Build phải manage stability chủ động hơn bình thường.
- **Giá trị refund phụ thuộc linh khí bị phá**: nếu linh khí rẻ bị phá (base không có affix tốt), refund ít. Cổ vật chỉ thật sự "trả lại" khi linh khí đắt bị mất — không bảo đảm income ổn định.
- **Cap penalty không tắt**: dù không có Huyết Sát map, cap vẫn -20. Player mang Tử Hồn Linh Bao chấp nhận stability ceiling thấp hơn xuyên suốt, không chỉ khi map mod active.

## Vì sao (WHY)

- **50% (không 100%)**: refund full = linh khí vỡ không có hậu quả thật sự → không còn là tradeoff. 50% đủ để "an ủi" (không mất trắng) mà vẫn là mất mát thật (50% biến mất). Đúng tinh thần chaos-risk: giảm downside, không xóa.
- **Stability cap (không phải flat penalty)**: flat -20 stability mỗi lần brick = punish event. Cap -20 = passive vulnerability liên tục — eleganter: player thấy mình fragile từ đầu, không cảm thấy bị "đánh phạt" ngẫu nhiên.
- **Synergy với `thousand-mile-scythe`**: Lưỡi Hái hi sinh linh khí → Linh Bao refund 50% essence của linh khí đó → vòng lặp: hi sinh để đòn ×10, lấy lại 50% currency để craft linh khí mới, hi sinh tiếp. Không free (vẫn mất 50% + cap penalty), nhưng sustain được.

## Synergy & Build

- **Archetype**: crafting refund / linh khí sacrifice loop. Đạo Phái khớp nhất: **Vô Cực** (Hỗn Nguyên Khuếch Đại — nhân đôi variance: refund có thể cao hơn hoặc thấp hơn, rất hợp chaos-risk) và **Tử Vi** (Thiên Nhãn — xem trước drop để chuẩn bị linh khí replacement trước khi cái cũ bị phá).
- **Combo**: `thousand-mile-scythe` (hi sinh linh khí → Linh Bao refund → craft mới → hi sinh tiếp — vòng lặp Vong Linh kinh tế); map mod "Huyết Sát" (linh khí vỡ nhiều hơn = refund nhiều hơn = income tăng khi đang ở scenario nguy hiểm nhất).
- **Anti-synergy**: `jade-spirit-flower` (stability cap +30% — cap penalty của Linh Bao giảm hiệu quả của jade-spirit-flower; hai cổ vật cancel nhau một phần); build stability-maximizer cần cap 130+ để buffer boss attack.
- **Drop**: dropWeight 60, `atlas drop, uncommon` — gặp sớm, dạy player khái niệm linh khí có giá trị kinh tế, không chỉ là công cụ vật lý.
