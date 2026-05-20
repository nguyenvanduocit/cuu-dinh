---
id: metal-notable-heaven-thunder
ten: Thiên Lôi Triệu Hồi
type: notable
element: metal
cluster: metal-notable
pos_x: -68.15
pos_y: -364.76
connections: [metal-notable-metal-light, metal-small-metal-anchor-2]
---

# Thiên Lôi Triệu Hồi (`metal-notable-heaven-thunder`)

## Effect

5% xác suất Kim crit hit triệu hồi sét đánh xuống linh đan: +30% intensity Kim spike 0.5s

## Cơ chế

Sau khi roll crit thành công cho hit Kim, roll thêm 5% proc Thiên Lôi. Nếu proc: áp buff +30% intensity Kim lên toàn bộ linh khí Kim trên board trong 0.5 giây (tính từ frame proc). Buff là flat additive intensity, không nhân với multiplier crit damage. Spike không stack — proc mới reset timer 0.5s.

## Synergy

Node nhánh của cluster `metal-notable`, kết nối `metal-notable-metal-light` → `metal-small-metal-anchor-2`. Thiên Lôi Triệu Hồi cộng hưởng cực mạnh với Kim Quang Trận (+25% crit chance khi 3+ Kim gần): crit chance cao → proc Thiên Lôi nhiều hơn → burst spike liên tục. Đối với build Sắc Bén (crit chance thấp sau ÷2), Thiên Lôi proc hiếm hơn nhưng spike +30% nhân vào crit damage ×3.0 tạo ra cột damage cực cao khi xảy ra. Không phù hợp với `keystone-wuwei` (−30% intensity triệt tiêu spike).
