---
id: reagent-select
ten: Cự Tuyển Đan Dược
category: suffix
tags: [currency-control]
weight: 40
---

# Cự Tuyển Đan Dược (`reagent-select`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +15% chance đan dược drop là Tử Hoàn Đan hoặc cao hơn |
| T2 | +22% chance drop cao |
| T3 | +30% chance drop cao; 3% chance drop Cửu Chuyển Đan |

## Tương tác

Thuộc **currency-control** layer. +30% chance nghĩa là khi drop xác định là đan dược, 30% xác suất nó là Tử Hoàn Đan trở lên (thay vì roll toàn bộ drop pool). T3 Cửu Chuyển Đan (3%) là roll riêng độc lập — DropPool `ExtremelyRare` — không override roll chính. Không ảnh hưởng tần suất drop, chỉ ảnh hưởng chất lượng.

## Build & Synergy

Roll trên mọi item base type. Pair tốt nhất với affix tăng drop frequency để tận dụng cả số lượng lẫn chất lượng:
- Kết hợp `random-reagent-drop` (+40% drop rate) — nhiều drop hơn, mỗi drop quality cao hơn.
- `reagent-stash-retain` đảm bảo đan dược quality cao không mất khi fail pháp trận.
- Dây Phong Ấn slot (§3.1) bắt buộc cho build focus currency farming; Đạo Phái Mộc (sustain, tiêu thụ nhiều đan dược) tận dụng tốt nhất.
