---
id: void-stone
ten: Vô Cực Thạch
category: drop-bias
weight: 100
---

# Vô Cực Thạch (`void-stone`)

## Lược tả

Nguyên Liệu cực đoan nhất trong drop-bias: không thay đổi pool gì cả, mà **nhân đôi toàn bộ biên độ ngẫu nhiên** của mọi drop. Phổ roll mở rộng gấp đôi — cả hai chiều. Loot có thể tệ hơn bình thường hoặc tốt hơn hẳn bình thường.

## Effect

Mọi drop roll trong pháp trận này sử dụng biên độ ngẫu nhiên ×2:
- Xác suất roll tier hiếm (Rare, VeryRare, ExtremelyRare theo `DropPool` enum) tăng ×2.
- Xác suất roll tier thấp (Common, Uncommon) cũng tăng ×2 về phía thấp — có thể nhận ít loot hơn bình thường.

Modifier Nguyên Liệu layer (-50% → +200% §3): Vô Cực Thạch đẩy biên độ ngẫu nhiên ra toàn dải, không chặn ở điểm cụ thể nào. Expected value trung bình không đổi, nhưng variance tăng gấp đôi.

Áp dụng cho: linh khí, currency, Cổ Vật, Đan Pháp drops. Không áp dụng cho guaranteed drops (ví dụ `spirit-flower`).

## Khi nào dùng

- Player chấp nhận high-variance để chase Cổ Vật ExtremelyRare: Vô Cực Thạch là cách duy nhất tăng cơ hội tier cao mà không cần fixed-bias.
- Kết hợp với nhiều Nguyên Liệu khác để bổ trợ: Vô Cực Thạch không lock pool, nên không xung đột với crystal nguyên tố.
- Farm Atlas endgame khi đã chấp nhận một số run "trắng tay" để đổi lấy cơ hội jackpot.

## Synergy

- **+ `spirit-flower` (Linh Hoa)**: Linh Hoa guaranteed 1 Cổ Vật (không bị ảnh hưởng variance); Vô Cực Thạch tăng variance phần còn lại → floor an toàn + ceiling cao hơn.
- **+ `dragon-bone` (Long Cốt)**: Long Cốt nhân đôi drop boss; Vô Cực Thạch nhân đôi biên độ ngẫu nhiên của những drop đó → boss drop có thể là jackpot tier tối cao.
- **+ `void-stone` (không stack được với chính nó)**: chỉ 1 Vô Cực Thạch per pháp trận — dùng thêm không cộng dồn.
- **Tránh dùng khi cần ổn định**: mọi crystal nguyên tố (`fire-crystal`, `water-crystal`…) giảm variance theo hướng cụ thể; Vô Cực Thạch đi ngược lại — hai triết lý không tương thích trong cùng 1 compose nếu mục tiêu là farm nhất quán.
