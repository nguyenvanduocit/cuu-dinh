---
id: potential-force
ten: Bổ Lực Thế Năng
category: prefix
tags: [offensive]
weight: 100
---

# Bổ Lực Thế Năng (`potential-force`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực dừng > 0.5s trong linh khí (Hộp/Đỉnh): +35% intensity khi rời |
| T2 | Linh lực dừng > 0.3s: +50% intensity khi rời |
| T3 | Linh lực dừng bất kỳ: +60% intensity khi rời; thêm chain hop miễn phí |

## Tương tác

Bonus +intensity khi rời áp vào **velocity_factor** (§7.2) tại thời điểm exit — tăng velocity_factor của linh lực khi rời linh khí. T3 "dừng bất kỳ" xoá điều kiện thời gian tối thiểu: mọi pass-through qua Hộp/Đỉnh đều trigger. Chain hop miễn phí tích thêm `charge_factor` (+20%/hop) không cần va chạm thật. Kết quả: `intensity = velocity_factor(+60%) × charge_factor(thêm 1 hop) × player_mult × map_tier`.

## Build & Synergy

Roll trên linh khí type `box` hoặc `cauldron` (Hộp/Đỉnh theo §3.1 context). Tốt nhất trong board có Hộp là waystation trung gian:
- Kết hợp `accelerate-box` — Hộp tăng velocity × Hộp tăng intensity khi rời = double buff từ cùng 1 linh khí.
- `master-archer` (spawn intensity cao) + `potential-force` (exit intensity cao) = intensity double-dip đầu và cuối chain.
- Đạo Phái nào cũng dùng được; đặc biệt tốt với Hoả (burst) và Kim (crit) khi cần spike intensity 1 lần lớn.
