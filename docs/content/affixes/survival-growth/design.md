---
id: survival-growth
ten: Sống Sót Tăng Trưởng
category: suffix
tags: [defensive, sustain]
weight: 60
---

# Sống Sót Tăng Trưởng (`survival-growth`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi ván sống sót: +1% durability max linh khí này tích lũy pháp trận này |
| T2 | Mỗi ván: +2% durability max |
| T3 | Mỗi ván: +3% durability max; sau 5 ván liên tiếp: +10% intensity permanent pháp trận |

## Tương tác

Hai lớp scaling per-pháp-trận: (1) **Durability**: mỗi ván sống sót +1/2/3% durability max tích lũy — sau 5 ván T3: base 100 + 15% = 115 max, sau 8 ván: 124 max. Cộng với §8 Huyết Sát: durability pool tăng dần → ít risk vỡ hơn về cuối pháp trận. (2) **Intensity T3**: sau 5 ván liên tiếp không vỡ, +10% additive vào `player_mult` **permanent cho phần còn lại pháp trận** — reset khi bắt đầu bí cảnh mới. "Liên tiếp" reset nếu linh khí vỡ giữa chừng trong ván.

## Build & Synergy

Roll suffix, tags `defensive, sustain`. **Snowball build per-pháp-trận** — hiệu quả tăng dần theo thời gian trong cùng 1 bí cảnh. Combo tự nhiên với `seal-risk-reduce` (suffix: global brick reduce tăng per ván win) — cả hai scale cùng "ván win" event, tạo build reward consistency. `sturdy-guard` tăng base durability max → linh khí sống dễ hơn → `survival-growth` tích lũy tốt hơn. T3 +10% intensity permanent sau 5 ván quan trọng nhất ở ván 6-8 (boss ván cuối pháp trận) — intensity peak đúng lúc cần nhất. Đạo phái phòng thủ hay build tập trung sống sót cao (không gambling rủi ro) tận dụng tốt nhất.
