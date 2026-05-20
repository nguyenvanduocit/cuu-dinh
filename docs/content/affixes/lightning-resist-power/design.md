---
id: lightning-resist-power
ten: Thiên Kiếp Kháng
category: prefix
tags: [offensive]
weight: 40
---

# Thiên Kiếp Kháng (`lightning-resist-power`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +25% intensity khi bị đánh bởi Thiên Kiếp linh lực |
| T2 | +38% intensity khi bị đánh bởi Thiên Kiếp linh lực |
| T3 | +50% intensity khi bị đánh bởi Thiên Kiếp; linh lực Thiên Kiếp chuyển hoá 20% sang tương sinh |

## Tương tác

Khi linh lực Thiên Kiếp hit linh khí mang affix này, bonus +intensity áp vào lớp **player_mult** (§7.3 — additive với tree + Lò): `player.intensity_multiplier += 0.50`. T3 convert 20% Thiên Kiếp linh lực → tương sinh element của linh đan, biến đại_khắc thành tương sinh hit (`quality += intensity * 0.30`, `stability += intensity * 0.05`). Convert tính sau khi bonus intensity đã áp — không double-dip.

## Build & Synergy

Roll trên mọi item base type. Ngược hướng `lightning-resist` — thay vì né Thiên Kiếp, khai thác nó làm nguồn intensity:
- Đan Pháp **Thiên Kiếp** (T14-T16) sinh nhiều Thiên Kiếp linh lực → mỗi hit đều proc bonus.
- Kết hợp `peak-crit` — intensity cao từ Thiên Kiếp × crit_mult = spike lớn.
- `Lôi Phù Cổ` (unique) + affix này: Lôi Phù catch Thiên Kiếp → +50% intensity riêng; affix này +50% thêm = stack polyphonic. Đạo Phái Kim (crit) hoặc Hoả (burst) tận dụng tốt nhất.
