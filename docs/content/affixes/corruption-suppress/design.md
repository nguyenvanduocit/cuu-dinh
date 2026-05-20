---
id: corruption-suppress
ten: Khắc Tâm Ma Chí
category: suffix
tags: [anti-corruption]
weight: 40
---

# Khắc Tâm Ma Chí (`corruption-suppress`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Giảm 20% thời gian active của Tâm Ma modifier |
| T2 | Giảm 30% thời gian Tâm Ma |
| T3 | Giảm 45% thời gian; Tâm Ma modifier tắt sớm → linh khí nhận +10% intensity 3s |

## Tương tác
Duration reduction hoạt động ở layer timer — không ảnh hưởng formula §7.2 trực tiếp, chỉ rút ngắn window mà Tâm Ma modifier active. T3 bonus +10% intensity (3s) cộng vào `player.intensity_multiplier` ngay khi modifier tắt — window timing: linh lực đến trong 3s đó hưởng bonus. Stack được với `corruption-disperse` trên linh khí khác: suppress rút ngắn duration, disperse có thể cut sớm hơn nữa trong window còn lại.

## Build & Synergy
Roll trên statue, talisman, charm (tag `anti-corruption`). Pair `corruption-suppress` + `corruption-disperse` trên hai linh khí riêng = coverage kép, phù hợp map T8-T13 Tâm Ma. T3 bonus timing tốt nhất khi build có `endless-stack` — stack intensity ngay sau modifier tắt. Không dùng cùng `corruption-killing-intent` (killing-intent cần modifier active, suppress tắt modifier — mâu thuẫn chiến lược).
