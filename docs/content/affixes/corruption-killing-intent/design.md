---
id: corruption-killing-intent
ten: Sát Khí Tâm Ma
category: prefix
tags: [offensive, anti-corruption]
weight: 40
---

# Sát Khí Tâm Ma (`corruption-killing-intent`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +35% intensity khi linh khí bị Tâm Ma nhiễm (ngược nguyên tố tạm) |
| T2 | +50% intensity khi bị Tâm Ma nhiễm |
| T3 | +65% intensity khi bị Tâm Ma nhiễm; heal stability +2% mỗi hit khi nhiễm |

## Tương tác
+X% intensity cộng vào `player.intensity_multiplier`, chỉ active khi linh khí đang ở trạng thái nhiễm Tâm Ma (element bị override tạm). T3 heal +2%/hit vào `linh_dan.stability` — cùng slot với tương sinh heal (§7.2: tương sinh = +intensity × 0.05 stability). Hai nguồn cộng dồn. Trạng thái nhiễm cần Tâm Ma boss hoặc modifier active — nếu bị dispel bởi `corruption-disperse`, buff mất theo ngay lập tức.

## Build & Synergy
Roll trên saber, sword, inkstone (tag `offensive, anti-corruption`). Chiến lược: chủ động để linh khí bị nhiễm bằng cách chọn Tâm Ma mod cao (Vô Lượng, Tà Đạo). Cặp tốt với `corruption-essence-bane` (suffix, +intensity vs boss) trên cùng linh khí — hai condition khác nhau, stack multiplicative. Đạo Phái **Vô Cực** (chaos ×2) khuếch đại thêm khi nhiều linh khí nhiễm cùng lúc. Tránh dùng `corruption-suppress` trong cùng build — suppress tắt nguồn nhiễm của killing-intent.
