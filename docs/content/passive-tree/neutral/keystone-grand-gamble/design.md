---
id: keystone-grand-gamble
ten: Cờ Bạc Tổ
type: keystone
cluster: hub-void-keystone
pos_x: 80
pos_y: 0
connections: [hub-void-1, hub-void-2]
---

# Cờ Bạc Tổ (`keystone-grand-gamble`)

## Effect

KEYSTONE: Phong Ấn brick chance -10%. Trade-off: Phong Ấn "Thăng" upgrade chance -10%.

## Cơ chế

Phong Ấn có 4 outcome mỗi 25%: Thăng Phẩm, Khắc Phong Ấn, Phá Niêm, Giáng Phẩm. Cờ Bạc Tổ dịch chuyển xác suất: Phá Niêm + Giáng Phẩm (brick) tổng giảm 10pp, Thăng Phẩm giảm 10pp — phần dôi cộng vào Khắc Phong Ấn. Kết quả: brick-safe hơn nhưng ít windfall Thăng hơn. Không stack cộng gộp với `earth-keystone-heavy-mountain` brick-immunity (là cơ chế khác nhau, áp dụng độc lập).

## Synergy

Keystone trung tâm của cluster `hub-void-keystone` — nằm gần trục Void, mở cho mọi Đạo Phái. Phù hợp với build cần nhiều Phong Ấn liên tục (Phong Ấn spammer: Lò nhiều slot, affix `seal-safety`). Kết hợp `metal-small-metal-affix-1` (+1 tier affix Kim trên Lò) để tối đa giá trị mỗi Phong Ấn thành công. Đối nghịch kinh tế với build gambler (chấp nhận brick để câu Thăng) — player phải chọn một trong hai archetype.
