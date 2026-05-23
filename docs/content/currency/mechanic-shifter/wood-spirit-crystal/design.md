---
id: wood-spirit-crystal
ten: Mộc Linh Tinh
category: mechanic-shifter
weight: 60
---

# Mộc Linh Tinh (`wood-spirit-crystal`)

## Lược tả

Nguyên Liệu đổi cơ chế stability: tăng **stability tối đa của linh đan thêm 20%** trong pháp trận này. Không heal stability — mở rộng ceiling, cho phép tích lũy buffer lớn hơn trước khi bể.

## Effect

Stability maximum của linh đan trong pháp trận này tăng **+20%** trên base cap:
- Base cap thường: 100 (§5 Base stability).
- Với Mộc Linh Tinh: cap = 100 + 20 (Mộc Linh Tinh) + Lò.Thân affix bonus + Cổ vật bonus.
- Ví dụ: Lò.Thân +30, Cổ vật +20 → cap thường = 150; với Mộc Linh Tinh = 170.

Modifier mechanic-shifter: thay đổi `player.stability_max_bonus` trong formula §2 `clamp(stability, 0, 100 + player.stability_max_bonus)`. Không ảnh hưởng intensity hay drop pool.

Heal sources (§5) vẫn có thể fill đến cap mới: tương sinh hits, linh khí Mộc implicit → buffer thực tế của Mộc Linh Tinh phát huy đầy đủ khi kết hợp với board heal.

## Khi nào dùng

- Bí cảnh high-drain: boss sinh đôi (`dragon-bone`), Thiên Kiếp (`sky-lantern`), Tâm Ma Châu kép — stability drain mạnh, cap cao hơn = thêm thời gian phản ứng.
- Marathon dài (`primordial-chaos-qi`): stability erode dần qua nhiều ván, cap +20% là buffer sinh tử.
- Build chưa đầy đủ Lò.Thân affix (stability max từ Lò thấp): Mộc Linh Tinh bù gap mà không cần craft thêm.

## Synergy

- **+ `wood-crystal` (Mộc Tinh)**: Mộc Tinh tăng mật độ linh khí Mộc implicit heal (+2%/hit §5); Mộc Linh Tinh tăng cap → heal fill đến cap cao hơn, net stability buffer cực lớn.
- **+ `corruption-bead` (Tâm Ma Châu)**: Tâm Ma boss drain stability liên tục (§5 -1/giây + attack); Mộc Linh Tinh +20% cap = 20 điểm stability thêm trước ngưỡng bể.
- **+ `dragon-bone` (Long Cốt)**: boss sinh đôi → stability drain gấp đôi từ boss attacks; Mộc Linh Tinh là Nguyên Liệu safety bắt buộc khi chạy Long Cốt T14+.
- **+ `life-death-crystal` (Sinh Tử Tinh)**: cap cao hơn giảm xác suất bể ngẫu nhiên; kết hợp Sinh Tử Tinh cho retry nếu vẫn bể → double-layer safety cho endgame extreme compose.
