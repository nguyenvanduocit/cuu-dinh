---
id: great-attraction
ten: Hấp Lực Lớn
category: suffix
tags: [utility]
weight: 100
---

# Hấp Lực Lớn (`great-attraction`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Hút linh lực bán kính 50px với lực 15% lớn hơn thường |
| T2 | Hút 60px; lực 22% |
| T3 | Hút 70px; lực 30%; 5% chance hút linh lực đã qua linh khí khác quay lại |

## Tương tác

Hấp lực hoạt động ở lớp **physics** (§8.1) — override gravity cục bộ trong bán kính, kéo linh lực về phía linh khí này. Lực 15/22/30% mạnh hơn gravity chuẩn: linh lực đang travel gần sẽ bị lệch trajectory về phía linh khí. T3 5% chance hút linh lực đã qua linh khí khác quay lại: double-hit cùng linh khí — trigger affix lần 2, tích thêm charge hop.

## Build & Synergy

Roll trên **bead** hoặc **statue** (round shape tạo hấp lực tự nhiên về geometry). Dùng để "funnel" linh lực vào chain đã setup: đặt linh khí này ở chỗ linh lực hay miss. Combo với `kindred-meeting` (hấp lực cùng nguyên tố tăng thêm): stack hai affix trên cùng linh khí = pull rất mạnh với linh lực cùng element. T3 double-hit với `furnace-stack` cho thêm 2 hit count mỗi lần recall. Không stack với nhiều great-attraction (hút nhau gây chaos trajectory — đặt max 1 trên board).
