---
id: reflect-qi
ten: Phản Xạ Khí
category: suffix
tags: [utility, offensive]
weight: 60
---

# Phản Xạ Khí (`reflect-qi`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Va chạm: 10% chance phản lại linh lực về hướng linh đan với 60% intensity |
| T2 | 15% chance phản lại với 75% intensity |
| T3 | 20% chance phản lại với 90% intensity; phản xạ tự động crit nếu cùng nguyên tố đan |

## Tương tác

Phản xạ tạo linh lực mới hướng về linh đan với 90% intensity của linh lực gốc — intensity tính tại thời điểm phản xạ (sau `player_mult`, `charge_factor` đã tích). T3 auto-crit khi linh lực phản xạ cùng nguyên tố đan: áp `crit_mult` layer lên 90% intensity đó → `final = 0.90 × intensity × crit_mult`. Crit này không cần roll `crit_chance` — guaranteed khi điều kiện thoả.

## Build & Synergy

Roll trên mọi item base type. Reward board setup hướng linh lực về phía linh đan sau phản xạ:
- Kết hợp `orb-transmute` (convert linh lực sang tương sinh linh đan) — sau convert, phản xạ cùng nguyên tố đan → auto-crit guaranteed.
- `peak-crit` (crit_mult cao) + T3 auto-crit = guaranteed spike lớn mỗi lần phản xạ proc.
- Đạo Phái Kim (crit) tận dụng tốt nhất; cũng phù hợp Mộc (sustain) khi linh đan là Mộc và board toàn Mộc → auto-crit mỗi phản xạ.
