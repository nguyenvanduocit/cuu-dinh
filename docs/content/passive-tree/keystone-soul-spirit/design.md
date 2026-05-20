---
id: keystone-soul-spirit
ten: Hồn Linh
type: keystone
cluster: water-wood-bridge
pos_x: 228.25
pos_y: 74.16
connections: [wood-keystone-proliferate, water-keystone-tide, water-wood-bridge-1]
---

# Hồn Linh (`keystone-soul-spirit`)

## Effect

KEYSTONE: Linh khí Mộc/Thuỷ hi sinh (vỡ) khi 1 linh lực rớt khỏi board → spawn 1 linh lực "Hồn" tương sinh respawn lên top. Trade-off: linh khí Mộc/Thuỷ durability -50%.

## Cơ chế

Khi 1 linh lực thoát khỏi đáy board (lost ball), hệ thống kiểm tra có linh khí Mộc/Thuỷ nào còn durability > 0 không. Nếu có: linh khí đó bị vỡ (destroy), spawn 1 banh "Hồn" (element tương sinh với linh khí bị hi sinh: Mộc → Hoả, Thuỷ → Mộc) tại vị trí top-center với velocity ngẫu nhiên. Durability linh khí Mộc/Thuỷ giảm 50% — vỡ nhanh gấp đôi dưới điều kiện bình thường lẫn hi sinh.

## Synergy

Keystone cầu nối `water-wood-bridge` — bridge giữa `wood-keystone-proliferate` và `water-keystone-tide`. Archetype **Hồn Sinh** tận dụng banh Hồn làm nguồn banh thứ cấp miễn phí, không cần Đan Dược respawn. Synergy cao với build nhiều linh khí Mộc/Thuỷ (chấp nhận durability mỏng đổi lấy ball economy). Đối nghịch với build mono-Kim (không có Mộc/Thuỷ để hi sinh → keystone dead). Kết hợp unique `soul-lantern` (Linh Đăng — restore 1 linh khí Mộc mỗi boss kill) để bù durability.
