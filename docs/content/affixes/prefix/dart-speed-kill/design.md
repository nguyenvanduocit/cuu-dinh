---
id: dart-speed-kill
ten: Phi Tiêu Tốc Sát
category: prefix
tags: [offensive, speed, crit]
weight: 100
---

# Phi Tiêu Tốc Sát (`dart-speed-kill`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +15% intensity; velocity linh lực +20%; velocity bonus → crit chance +5% |
| T2 | +22% intensity; velocity +28%; crit chance +8% |
| T3 | +30% intensity; velocity +38%; crit chance +12%; crit tốc sát gây thêm 20% intensity |

## Tương tác
Ba lớp cùng lúc: (1) +X% intensity vào `player.intensity_multiplier`; (2) velocity +X% tăng `velocity_factor` (0.5x–2.0x range) — cao velocity → cao `velocity_factor` → cao intensity nền; (3) crit chance là layer post-intensity — khi crit xảy ra, T3 thêm 20% intensity nữa vào kết quả cuối. Tổng T3: intensity_multiplier +30% × velocity_factor tăng 38% × crit ×1.20 — multiplicative full chain. Crit áp dụng lên linh đan (quality/stability) sau formula §7.2 đã tính xong.

## Build & Synergy
Roll trên sword, saber (tag `crit, speed`). Affix này là core của **Sát Thủ** archetype (Kim→Hoả, §16) — velocity + crit stack tự nhiên với nhau. Cặp với `fierce-god-slaughter` (crit damage) và `ferocious` (crit chance) để đẩy crit ceiling. Keystone **Sắc Bén** (Kim, crit ×3 damage / chance ÷2) bổ sung mạnh: dart-speed-kill bù lại crit chance bị giảm. Đạo Phái **Tử Vi** (free reroll 1 affix/ván) không synergy trực tiếp nhưng tăng consistency loot.
