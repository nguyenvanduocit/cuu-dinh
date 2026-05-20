---
id: drum-sound-wave
ten: Trống Sóng Âm
category: implicit
tags: [aoe, chain]
compatibleItemTypes: [drum]
weight: 100
---

# Trống Sóng Âm (`drum-sound-wave`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi 3 va chạm: sóng âm đẩy linh lực ngẫu nhiên 100px |
| T2 | Mỗi 2 va chạm: sóng âm đẩy linh lực ngẫu nhiên 130px + +8% intensity |
| T3 | Mỗi va chạm: sóng âm đẩy linh lực 150px; tích 5 sóng → bùng nổ AOE 200px |

## Tương tác
Implicit drum-only. Sóng âm là physics impulse — không thêm intensity trực tiếp mà thay đổi trajectory linh lực, ảnh hưởng gián tiếp `velocity_factor` khi linh lực đến đích với vận tốc khác. T2 +8% intensity cộng vào `player.intensity_multiplier`. T3 AOE 200px khi tích 5 sóng là burst độc lập — apply intensity tính theo formula §7.2 tại thời điểm nổ với element của drum. Mỗi va chạm reset bộ đếm không — tích lũy trong ván.

## Build & Synergy
Implicit cho drum — không cần chọn, luôn có. Cặp tốt với `fierce-wave` (suffix, sóng đẩy 80px) trên cùng drum hoặc linh khí lân cận — sóng âm + sóng đẩy redirect linh lực theo ý muốn. Cổ Vật **Trượng Tôn Ngộ Không** (×3 linh lực) bùng nổ AOE T3 rất mạnh. Cổ Vật **Chuông Đại Hồng** (trigger free mỗi 7s) + drum = sóng không ngừng. Đạo Phái **Linh Sơn** (echo linh lực) tăng tần suất va chạm để tích sóng nhanh hơn.
