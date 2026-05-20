---
id: master-archer
ten: Xạ Thủ Toàn Năng
category: prefix
tags: [offensive]
weight: 100
---

# Xạ Thủ Toàn Năng (`master-archer`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực spawn từ Đỉnh có +12% intensity bonus |
| T2 | Linh lực spawn từ Đỉnh có +18% intensity bonus |
| T3 | Linh lực spawn từ Đỉnh có +25% intensity bonus; 5% chance spawn thêm 1 linh lực miễn phí |

## Tương tác

Áp bonus intensity tại **spawn point** (Đỉnh — §3.1), trước khi linh lực vào chain. Bonus này là **velocity_factor pre-buff** — linh lực spawn với intensity cao hơn ngay từ đầu, sau đó tiếp tục nhân thêm `charge_factor` (chain hops), `player_mult`, `map_tier_factor` theo §7.2. T3 bonus 5% spawn thêm 1 linh lực miễn phí — linh lực cloned kế thừa element và tốc độ spawn gốc, không kế thừa spawn bonus thêm lần nữa.

## Build & Synergy

Roll trên mọi item base type; đặc biệt phù hợp với Đỉnh slot (§3.1 — Đỉnh control spawn rate + angle). Tốt với mọi build cần throughput linh lực cao:
- Kết hợp `accelerate-box` (tăng velocity trong chain) — intensity pre-buff × velocity mid-chain = polyphonic.
- `potential-force` (bonus intensity khi linh lực dừng trong linh khí) + spawn intensity cao → spike lớn hơn.
- T3 spawn thêm 1 linh lực kết hợp với `piercing-step` để tạo chain parallel. Đạo Phái nào cũng dùng được — affix element-neutral.
