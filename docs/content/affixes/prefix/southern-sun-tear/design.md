---
id: southern-sun-tear
ten: Mặt Trời Lệ Nam
category: prefix
tags: [offensive, elemental, crit]
element: fire
weight: 40
---

# Mặt Trời Lệ Nam (`southern-sun-tear`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% intensity Hoả; crit chance +8% khi board có >= 2 Hoả linh khí |
| T2 | +28% intensity Hoả; crit chance +12% |
| T3 | +38% intensity Hoả; crit chance +18%; 10% chance AOE Hoả 80px khi crit |

## Tương tác

Thuộc **Layer 2 (player multipliers)** + **Layer 4 (element)**: +intensity Hoả chỉ apply khi `linh_luc.element == fire` — additive vào `player_mult`. Crit chance bonus conditional: chỉ kích hoạt khi board có ≥ 2 linh khí Hoả đang active (per-pháp-trận check). T3 AOE Hoả 80px khi crit là secondary collision event, áp dụng element Hoả vs linh đan — nếu đan Thổ: Hoả tương sinh Thổ → +30% quality, +5% stability heal (§2); nếu đan Kim: Hoả khắc Kim → -40% stability. AOE intensity = crit_intensity × 0.10 tỷ lệ, không nhân crit multiplier lần nữa.

## Build & Synergy

Roll prefix với element `fire`. **Hoả crit build** — yêu cầu board ≥ 2 Hoả linh khí để unlock crit bonus. Combo mạnh với `savage-crit-burst` (prefix, không stack cùng item nhưng stack trên 2 item khác nhau): `southern-sun-tear` cho crit chance + Hoả intensity, `savage-crit-burst` cho AOE khi crit → double AOE source khi board Hoả active. Đạo phái **Ly Hoả** (element Hoả ascendancy) cộng ascendancy_bonus(fire) vào player_mult. Set **Tứ Linh** 4-piece +30% intensity khi element match → Hoả board +30% trên đỉnh +38% affix. Tránh đan Kim target (Hoả khắc Kim) nếu không xây build tương khắc.
