---
id: corruption-assassin
ten: Tâm Ma Sát Thủ
category: prefix
tags: [offensive, anti-corruption]
weight: 40
---

# Tâm Ma Sát Thủ (`corruption-assassin`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +40% intensity khi đánh trúng boss Tâm Ma |
| T2 | +55% intensity khi đánh boss Tâm Ma |
| T3 | +70% intensity; 5% chance tâm thức xuyên — bypass 30% Tâm Ma resistance |

## Tương tác

Bonus +intensity áp vào **player.intensity_multiplier** (§7.3 Lò affix layer) — chỉ khi hit boss **Tâm Ma** (BossType `heart-demon`, §7.4). T3 5% chance "tâm thức xuyên": bypass 30% Tâm Ma resistance — tức là nhân intensity thêm ×1/(1−0.30) ≈ ×1.43 trên phần resistance bị bypass, độc lập với bonus intensity chính. Stack additive với `annihilation` và `blazing-corruption-bane` trong cùng player_mult layer. Weight 40 (rare).

## Build & Synergy

Roll trên mọi item base type. Chuyên phủ đầu boss **Tâm Ma** (T6–T13 và pháp trận Tâm Ma variant):
- Bộ ba anti-Tâm Ma: `corruption-assassin` (+40–70%) + `annihilation` (+30–50%) + `blazing-corruption-bane` (+20–38% Hoả + 30–60% vs Tâm Ma) → cộng additive, tổng có thể đạt +120–180% intensity vs Tâm Ma.
- T3 resistance bypass 30%: đặc biệt giá trị ở boss Tâm Ma T13+ có resistance cao — bypass đi thẳng vào damage thật.
- Đạo Phái không quan trọng — affix element-neutral, phù hợp mọi build muốn diệt Tâm Ma nhanh.
- Đổi ra intensity affix thường nếu không có pháp trận Tâm Ma trong loot pool — weight 40 = nên giữ khi roll được.
