---
id: savage-frenzy
ten: Hùng Mạnh Cuồng Bạo
category: prefix
tags: [offensive]
weight: 60
---

# Hùng Mạnh Cuồng Bạo (`savage-frenzy`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +18% intensity; mỗi 10 hit liên tiếp trong ván: thêm +10% intensity cộng dồn (max 30%) |
| T2 | +25% intensity; +12% cộng dồn mỗi 8 hit (max 48%) |
| T3 | +33% intensity; +15% cộng dồn mỗi 6 hit (max 60%) |

## Tương tác

Thuộc **Layer 2 (player multipliers)**: base +18/25/33% intensity thêm vào `player_mult` stack additive với các nguồn player khác (tree, Lò, ascendancy). Bonus cộng dồn per-hit cũng additive vào `player_mult`, cap tại +30/48/60% tương ứng — reset về 0 khi ván kết thúc. Hit counter đếm mọi collision event trong ván (kể cả AOE secondary collision từ affix khác). T3 ở ván 7-8 liên tiếp trở đi: total intensity multiplier từ affix này = 33% + 60% = +93% player_mult — xấp xỉ double một nguồn Lò tốt. Không tương tác trực tiếp charge hay velocity, nhưng intensity cao hơn khuếch đại lợi ích của velocity/charge theo công thức nhân.

## Build & Synergy

Roll prefix — không ghép chung với `savage-crit-burst` (cùng prefix slot). Phù hợp build **chain dài, nhiều hit/ván** hơn là build crit burst. Combo mạnh với `sea-crest-surge` (suffix → ghép được): `sea-crest-surge` tăng intensity per chain hop trong Layer 2, `savage-frenzy` tăng intensity per hit count — hai nguồn độc lập multiplicative với nhau thông qua `player_mult`. Đạo phái nào maximize số hit/ván (board layout nhiều linh khí, chain bounce cao) tận dụng tốt nhất. Tránh board ít linh khí hay pháp trận Tử Sinh (reset trạng thái giữa chừng).
