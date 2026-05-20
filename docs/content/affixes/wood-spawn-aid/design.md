---
id: wood-spawn-aid
ten: Tự Sinh Phú
category: suffix
tags: [sustain, elemental]
element: wood
weight: 60
---

# Tự Sinh Phú (`wood-spawn-aid`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi 4 va chạm: spawn 1 linh lực Mộc phụ với 25% intensity (tự sinh) |
| T2 | Mỗi 3 va chạm: spawn Mộc phụ 35% |
| T3 | Mỗi 2 va chạm: spawn Mộc phụ 45%; Mộc phụ heal đan +0.5% nếu chạm |

## Tương tác

Mộc phụ là linh lực độc lập — spawn tại vị trí linh khí với velocity ngẫu nhiên, mang 25-45% `player_intensity_multiplier` × velocity_factor riêng. Nếu hit đan, áp damage formula Mộc (tương sinh Hoả → +quality ×0.30). T3 heal +0.5% stability khi Mộc phụ chạm đan là bonus trên damage — heal và damage xảy ra cùng lúc. Không có `charge_factor` (sinh mới).

## Build & Synergy

Roll trên **branch**, **vase**, hoặc base type Mộc-friendly (suffix). Kết hợp `verdant-transform` (+33% intensity Mộc — Mộc phụ cũng hưởng nếu linh khí có affix này) và `wood-spirit-wave` (heal khi hit Mộc — double heal: spirit-wave heal + spawn-aid heal T3). Đạo Phái Mộc — spawn phụ nhiều hơn khi hit count tăng, board nhiều va chạm.
