---
id: wuxing-counter-power
ten: Ngũ Hành Tương Khắc Cường
category: prefix
tags: [offensive, elemental, crit]
weight: 100
---

# Ngũ Hành Tương Khắc Cường (`wuxing-counter-power`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +15% intensity khi gây tương khắc; +5% crit chance |
| T2 | +22% intensity khi gây tương khắc; +8% crit chance |
| T3 | +30% intensity khi gây tương khắc; +12% crit chance |

## Tương tác

Trigger khi linh lực gây tương khắc với đan (không phải với linh khí) — ví dụ linh lực Kim hit đan Mộc. Khi đó: damage formula áp -stability ×0.40 - quality ×0.10 (tương khắc), nhưng bonus +15-30% nhân vào `player_intensity_multiplier` trước khi tính. Tương khắc với bonus này tổng net: vẫn giảm stability nhưng giảm nhiều hơn (intensity cao hơn × 0.40). Đây là risk-reward: tương khắc gây damage ngắn hạn lên stability để đổi damage cao hơn.

## Build & Synergy

Roll mọi base type (prefix). Chiến lược: cố tình dùng linh lực tương khắc đan để gây damage stability mạnh, nhưng bù bằng heal từ `vitality-restore` hoặc `yield-stability`. Kết hợp `yield-stability` (absorb tương khắc → heal stability — counter mất mát) và `wuxing-chain` (tương khắc hit đan với intensity nhân qua 5-hop chain = đỉnh damage). Đạo Phái: chuyên damage-over-stability, thường Thiên Kiếp endgame.
