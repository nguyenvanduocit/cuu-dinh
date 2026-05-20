---
id: handle-left-wuxing-array
ten: Ngũ Hành Trận (Trái)
slot: handleL
rarity: Unique
variant: Cổ vật
isUnique: true
---

# Ngũ Hành Trận (Trái) (`handle-left-wuxing-array`)

## Lược tả

Cổ vật Quai hiếm nhất — không phải phù lệnh đơn thuần mà là một pháp trận thu nhỏ khắc trên thân quai. Mỗi ván kích hoạt triệu hồi nguyên thần của một trong Ngũ Hành, hiện hình thành linh khí trên board. Quai trái phải cùng mang pháp trận đối xứng — một cặp triệu hồi Kim Mộc Thủy Hỏa Thổ.

## Implicit

**1×/ván: triệu hồi 1 linh khí Ngũ Hành nguyên tố ngẫu nhiên tại tâm board — tồn tại suốt ván.**

Cơ chế chi tiết (Unique — Cổ vật):
- Kích hoạt thủ công, có thể dùng bất kỳ lúc nào trong ván.
- Nguyên tố ngẫu nhiên trong 5 nguyên tố: `metal`, `wood`, `water`, `fire`, `earth` (không gồm `void`).
- Linh khí triệu hồi xuất hiện tại tọa độ tâm board (vị trí cố định), rarity **Magic** mặc định, không có affix — blank slate.
- Linh khí triệu hồi **tồn tại suốt ván** (không bị xoá sau mỗi wave), nhưng có thể bị phá huỷ nếu bị damage quá mức (durability bình thường).
- Không thể triệu hồi nguyên tố trùng với linh đan đang luyện trong cùng ván (tránh overload tương sinh chain quá sớm).

Tham chiếu combat-math §2 (Ngũ Hành tương sinh): linh khí triệu hồi đúng nguyên tố chain → mỗi hop +20% intensity. Nếu ngẫu nhiên ra nguyên tố tương sinh với linh đan target → lợi thế cực lớn.

Rarity scale: Unique — không có tier thấp hơn. Hiệu ứng cố định.

## Slot role

**Quai (handleL)** — tay cầm trái Lò Luyện Đan. Quai Unique duy nhất: không phải cứu nguy hay economy, mà là **board manipulation** — chủ động tạo ra linh khí mới thay vì chỉ phản ứng với board hiện tại. Mirror pair với `handle-right-wuxing-array` — đeo cả hai = 2 linh khí triệu hồi/ván (2 nguyên tố khác nhau, ngẫu nhiên).

## Build use

- **Ngũ Hành 5-cycle build**: bộ set **Ngũ Hành 5-cycle** cần đủ 5 nguyên tố trên board → Ngũ Hành Trận tạo nguyên tố còn thiếu, không cần farm linh khí đúng nguyên tố từ drop.
- **Đạo Phái Thiên Mệnh**: Thiên Mệnh có keystone "Nguyên Thần Cộng Hưởng" — mỗi linh khí triệu hồi từ pháp trận nhận +15% intensity cộng thêm trong 5 giây đầu tồn tại.
- **Stack đôi**: `handle-left-wuxing-array` + `handle-right-wuxing-array` → 2 linh khí triệu hồi/ván, xác suất cao có được ít nhất 1 nguyên tố tương sinh với linh đan đang luyện.
- **Combo `ring-left-spirit-record`**: lưu affix của linh khí triệu hồi (nếu có affix được gắn thêm trong ván) → map sau guaranteed spawn linh khí nguyên tố đó.
- **Combo `sun-wukong-staff`**: linh khí triệu hồi là target chain → sau hit đầu tách ×3 con — nhân 3 nguồn chain từ 1 linh khí triệu hồi là cộng hưởng mạnh.
- **Đánh đổi**: nguyên tố ngẫu nhiên không kiểm soát được — có thể ra nguyên tố tương khắc với linh đan đang luyện, tạo ra trở lực thay vì hỗ trợ.
