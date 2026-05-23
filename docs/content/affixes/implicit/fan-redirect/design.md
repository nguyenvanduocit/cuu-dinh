---
id: fan-redirect
ten: Quạt Đổi Hướng
category: implicit
tags: [utility, speed]
compatibleItemTypes: [fan]
weight: 100
---

# Quạt Đổi Hướng (`fan-redirect`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Đổi hướng linh lực Kim ±30° (player chọn trái/phải) |
| T2 | Đổi hướng linh lực bất kỳ ±30° (player chọn); +10% intensity |
| T3 | Đổi hướng linh lực bất kỳ ±45° (player chọn); +15% intensity; tạo gió phụ 40px |

## Tương tác
Implicit fan-only. Redirect là physics impulse — thay đổi vector linh lực, không thay đổi element hay charge_factor. +15% intensity T2-T3 cộng vào `player.intensity_multiplier` tại thời điểm redirect (không phải tại thời điểm hit đan — intensity tích lũy theo chain). Gió phụ 40px T3 là area impulse nhỏ — có thể redirect linh lực khác gần đó vô tình. T1 chỉ Kim; T2-T3 bất kỳ element — fan T2+ là routing tool universal.

## Build & Synergy
Implicit cho fan — luôn có trên mọi fan base type. Vai trò: **routing controller** — đặt fan ở vị trí chiến lược để guide linh lực vào chain tương sinh chuẩn. Cặp với Ngũ Hành set (§4.6, 5 elements, ×3 intensity khi qua đủ 5) — fan redirect giúp linh lực không "miss" linh khí trong chain. Cặp với `elementless` (suffix, xóa element tạm) để neutralize linh lực xấu trước khi route sang chain tốt. Đạo Phái **Tử Vi** (see next 3 drops) và Cổ Vật **Quạt Phong Lôi** (all linh lực 90° mỗi ván) synergy thematic.
