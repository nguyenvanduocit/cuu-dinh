---
id: dragon-charge-fist
ten: Cuồng Long Khí Quyền
category: prefix
tags: [offensive, chain]
weight: 60
---

# Cuồng Long Khí Quyền (`dragon-charge-fist`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +25% intensity; charge_factor bonus +10% per hop |
| T2 | +35% intensity; charge_factor +15% per hop |
| T3 | +45% intensity; charge_factor +20% per hop; max hops tăng thêm 2 |

## Tương tác
Hai layer: (1) +45% intensity vào `player.intensity_multiplier`; (2) charge_factor bonus per hop — base là +20%/hop cap +200% (10 hops, §7.3). T3 nâng per-hop thêm +20% → effective +40%/hop, và +2 hops nâng cap từ 10 lên 12 hops → max charge_factor có thể đạt +480% thay vì +200%. Multiplicative với velocity_factor và intensity_multiplier — chain dài = damage mũ.

## Build & Synergy
Roll trên bead, inkstone (tag `chain`). Là affix mạnh nhất để maximize `charge_factor` trong slice này — kết hợp với `dragon-spirit-qi` (intensity bonus khi >= 3 hop) trên linh khí khác để double-dip chain reward. Keystone **Thuỷ Triều** (Thuỷ, linh lực càng chạm càng nhanh) tăng velocity_factor song song. Cổ Vật **Trượng Tôn Ngộ Không** (nhân linh lực ×3 sau hit đầu) bùng nổ cực mạnh với chain dài. Ngũ Hành set (§4.6, 5 elements) + dragon-charge-fist = tương sinh chain ×3 intensity tổng.
