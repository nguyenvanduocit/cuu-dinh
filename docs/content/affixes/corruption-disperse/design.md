---
id: corruption-disperse
ten: Tán Tâm Ma
category: suffix
tags: [anti-corruption]
weight: 40
---

# Tán Tâm Ma (`corruption-disperse`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | 5% chance khi bị Tâm Ma hit: dispel Tâm Ma modifier hoàn toàn |
| T2 | 8% chance dispel Tâm Ma |
| T3 | 10% chance dispel; dispel → +30% intensity next hit |

## Tương tác
Trigger layer nằm ngoài formula §7.2 — khi Tâm Ma hit bị dispel, modifier tắt sớm, linh đan không nhận negative-energy damage (pierce defense, không thuộc Ngũ Hành). T3 bonus +30% intensity cộng vào `player.intensity_multiplier` cho đúng 1 hit tiếp theo. Stack được với `corruption-suppress` (rút ngắn duration) — hai suffix cùng lúc: suppress giảm window bị hit, disperse xác suất cut hoàn toàn. Không tác động stability heal; chỉ chặn stability drain từ Tâm Ma.

## Build & Synergy
Roll trên talisman, charm, statue (tag `anti-corruption`, vật phòng thủ). Cần thiết ở tier T6-T13 (Tâm Ma boss band). Cặp `corruption-disperse` + `corruption-suppress` trên hai linh khí riêng = coverage kép: suppress giảm uptime, disperse cắt đứt khi cần. Cổ Vật **Tịnh Tâm Linh Châu** (dispel 1x/ván guaranteed) thay thế nếu cần slot affix cho offensive. Đạo Phái **Thái Cực** (+5% all stats) không amplify trực tiếp nhưng bền hơn khi chạy map T10+ có Tâm Ma mod.
