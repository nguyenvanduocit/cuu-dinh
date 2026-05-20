---
id: primordial-jade-bead
ten: Hỗn Nguyên Ngọc Châu
type: bead
element: void
category: chaos-risk
dropWeight: 60
dropRateHint: atlas drop, rare
---

# Hỗn Nguyên Ngọc Châu (`primordial-jade-bead`)

## Lược tả

Cổ vật Vô Cực hỗn loạn: đầu mỗi ván, tất cả linh khí trên board đổi nguyên tố ngẫu nhiên — mang theo toàn bộ affix cũ nhưng mặc áo mới. Intensity của mọi va chạm tăng +20%, nhưng không có ván nào giống ván nào.

## Cơ chế

Khi bắt đầu mỗi ván (trừ ván đầu tiên của pháp trận), **tất cả linh khí** trên board đổi sang nguyên tố mới **ngẫu nhiên** (uniform random trong 5 nguyên tố: Kim/Mộc/Thuỷ/Hoả/Thổ — không bao giờ ra Vô Cực). Affix, vị trí, durability của linh khí giữ nguyên; chỉ element thay đổi. Đồng thời, **toàn bộ intensity** trong pháp trận tăng **+20%** phẳng vào player_mult (combat-math §2).

| Tier | Element randomize | Intensity bonus |
|---|---|---|
| T1 | Random mỗi ván (trừ ván 1) | +20% intensity tổng |
| T2 | Random mỗi ván; **1 linh khí** được giữ nguyên tố (player chọn trước ván) | +20% intensity |
| T3 | Random mỗi ván; **2 linh khí** được giữ nguyên tố (player chọn) | +25% intensity |

- **Không roll Vô Cực**: linh khí luôn có nguyên tố thực — tương tác ma trận ngũ hành đầy đủ (combat-math §1).
- **Ván 1 không randomize**: player bắt đầu với board đã biết → có 1 ván để đánh giá trước khi hỗn loạn bắt đầu.
- Đạo Phái **Vô Cực** (Hỗn Nguyên Khuếch Đại ×2 biên độ random): kết hợp với item → phân phối nguyên tố lệch cực đoan hơn (không thay đổi uniform random của item, nhưng các random effect khác trong pháp trận bị khuếch đại ×2).

## Đánh đổi (Downside)

- **Không kiểm soát nguyên tố board** từ ván 2 trở đi: chain có thể đột ngột tạo ra đại khắc mà không thể tránh — một ván Hoả-Kim-Thuỷ-Mộc ngẫu nhiên sai hướng = đại khắc chain (combat-math §1).
- **Không kết hợp được với build mono-element**: build Cuồng Sát phụ thuộc nguyên tố cố định để tính crit-element, build Ngũ Hành 5-cycle cần thứ tự xác định — cả hai đều bị phá.
- **+20% intensity tăng cả damage lẫn stability drain**: khi đại khắc ngẫu nhiên xảy ra, damage lớn hơn 20% so với không mang item.
- T1: không có anchor — mỗi ván là gamble thuần; player không thể adapt nhanh kịp.

## Vì sao (WHY)

- **+20% intensity**: đủ để "trả thưởng" cho rủi ro nguyên tố; nếu 0% thì item chỉ là pure downside với không compensation.
- **Ván 1 không randomize**: cho player biết điểm xuất phát, tránh pháp trận start với đại khắc không có cách nào phòng — chaos có cấu trúc.
- **T2/T3 anchor 1-2 linh khí**: reward mastery — player giỏi chọn "anchor engine chính, random phần còn lại" → build chiến lược thay vì gamble mù hoàn toàn.

## Synergy & Build

- **Archetype**: Hỗn Nguyên Chaos — chấp nhận ngẫu nhiên nguyên tố, bù bằng board linh hoạt đa nguyên tố. Đạo Phái **Vô Cực** (khuếch đại ×2 biên độ — khi random thuận thì rất thuận, khi ngược thì rất ngược) và **Thái Cực** (Vạn Pháp Dung Hoà +5% mọi chỉ số + cộng hưởng đa nguyên tố +2%/element → item này đảm bảo luôn có nhiều nguyên tố hiện diện).
- **Combo cốt lõi**: Đan Pháp **Hỗn Nguyên** (chaos element void — không bị tương khắc từ nguyên tố ngẫu nhiên → giảm rủi ro) + `wind-thunder-fan` (reset 90° nếu ván bắt đầu với chain khắc xấu → thoát hiểm) + linh khí có affix chuyển đổi nguyên tố ("convert element" tag).
- **Anti-synergy**: `primordial-black-elixir` (stability cap 25 + đại khắc ngẫu nhiên từ Ngọc Châu = bể gần chắc); build crit phụ thuộc element khớp (crit multi chỉ tối đa khi element consistent).
- **Drop**: dropWeight 60, `atlas drop, rare` — hướng tới player có kinh nghiệm muốn thử chaos playstyle.
