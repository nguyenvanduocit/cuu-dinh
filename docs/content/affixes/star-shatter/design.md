---
id: star-shatter
ten: Thiên Phá Vạn Tinh
category: prefix
tags: [offensive, aoe]
weight: 100
---

# Thiên Phá Vạn Tinh (`star-shatter`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +22% intensity; 8% chance tạo sao rơi — linh lực phụ nhỏ gây 20% intensity tới linh đan |
| T2 | +30% intensity; 12% chance sao rơi 28% intensity |
| T3 | +40% intensity; 15% chance sao rơi 38% intensity; sao rơi có 5% chance chain jump |

## Tương tác

Thuộc **Layer 2 (player multipliers)** + secondary collision: +intensity additive vào `player_mult`. Sao rơi là projectile phụ bay thẳng đến linh đan, áp dụng intensity = collision_intensity × 0.20/0.28/0.38 (tỷ lệ của hit gốc sau đầy đủ layers) × element_factor linh lực vs linh đan. Sao rơi không kế thừa crit từ hit gốc — crit check riêng theo `player.crit_chance`. T3 chain jump: 5% chance sao rơi sau khi chạm linh đan bật sang linh khí gần nhất (+1 hop, +20% charge), sau đó chạm linh đan lần nữa nếu trajectory cho phép.

## Build & Synergy

Roll prefix, tags `offensive, aoe`. AOE theo hướng linh đan — khác với `savage-crit-burst` (AOE quanh linh khí hit). Combo `star-shatter` + `savage-crit-burst`: hit gốc crit → AOE burst quanh linh khí, sao rơi bay đến linh đan → second hit linh đan có thể crit → AOE burst lần 2. Với keystone **Sắc Bén** (crit ×3, chance ÷2), sao rơi crit triple intensity → damage spike lớn. T3 chain jump 5% rare nhưng có thể double-hit linh đan cùng ván. `sea-crest-surge` (prefix khác item) tăng intensity hit gốc → sao rơi tỷ lệ theo đó. Build AOE tốt nhất kết hợp `star-shatter` + `spread` + `savage-crit-burst` trên 3 linh khí khác nhau.
