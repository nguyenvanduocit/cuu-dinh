---
id: lone-power
ten: Nhất Cuồng Vạn Binh
category: prefix
tags: [offensive, crit]
weight: 40
---

# Nhất Cuồng Vạn Binh (`lone-power`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +25% intensity khi chỉ có 1 linh khí cùng nguyên tố trên board |
| T2 | +35% intensity khi chỉ có 1 cùng nguyên tố |
| T3 | +48% intensity khi chỉ có 1 cùng nguyên tố; +5% crit |

## Tương tác

Bonus +intensity áp vào lớp **player_mult** (§7.3 additive): `player.intensity_multiplier += 0.48` khi đúng 1 linh khí cùng nguyên tố trên board. +5% crit T3 cộng additive vào `crit_chance` base — khi crit kích hoạt, `peak-crit` hoặc crit_mult layer nhân thêm intensity. Điều kiện đếm linh khí đặt trên anchor mỗi đầu ván; linh lực đang bay không tính.

## Build & Synergy

Roll trên mọi item base type. Reward setup "độc cô cầu bại" — 1 star linh khí nguyên tố chính, phần board còn lại element khác:
- Kết hợp `peak-crit` + T3 +5% crit = crit spike build mạnh nhất single-element.
- Đối nghịch `myriad-summon-honor` (reward đông linh khí cùng nguyên tố) — chọn một trong hai hướng per build.
- Đạo Phái Kim (crit) hoặc Hoả (burst) tận dụng tốt nhất; board ít linh khí → dễ giữ điều kiện "chỉ 1".
