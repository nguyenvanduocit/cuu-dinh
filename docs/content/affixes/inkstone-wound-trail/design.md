---
id: inkstone-wound-trail
ten: Nghiên Mực Vết Thương
category: implicit
tags: [chain, offensive]
compatibleItemTypes: [inkstone]
weight: 100
---

# Nghiên Mực Vết Thương (`inkstone-wound-trail`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Va chạm để lại vệt mực 2s; linh lực rơi vào vệt +15% intensity |
| T2 | Va chạm để lại vệt mực 3s; linh lực rơi vào vệt +22% intensity |
| T3 | Va chạm để lại vệt mực 4s; linh lực rơi vào vệt +30% intensity; vệt gây chain damage |

## Tương tác

Implicit của **inkstone** base type. Vệt mực là zone vật lý tức thì (khác với dấu delay của `inkstone-mark`). Linh lực đi qua vệt nhận +15/22/30% intensity — áp vào velocity_factor×charge_factor trước khi tiếp tục travel. T3 vệt gây chain damage: mỗi linh lực đi qua vệt trigger một chain damage hit nhỏ (30% intensity gốc) vào linh đan. Chain damage có element của linh lực tạo vệt.

## Build & Synergy

Implicit của **inkstone** — pair với `inkstone-mark` để có cả tức thì lẫn delay: linh lực qua vệt mực (+intensity) → va chạm tạo dấu → dấu nổ sau 2-3s. Vệt tồn tại 2-4s → nếu nhiều linh lực qua trong thời gian đó, mỗi cái đều nhận intensity bonus và trigger chain riêng. Board dày linh khí gần inkstone = nhiều linh lực đi qua vệt mỗi ván. Đạo Phái bất kỳ chain-oriented. `hundred-thunder-split` T3: mỗi split path đi qua vệt → 3 chain damage + 3×intensity bonus.
