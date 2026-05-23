---
id: endless-stack
ten: Thiên Trường
category: prefix
tags: [offensive]
weight: 100
---

# Thiên Trường (`endless-stack`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +18% intensity cho mỗi va chạm sau va chạm đầu trong cùng ván (max 3 stack) |
| T2 | +25% intensity mỗi va chạm tiếp theo (max 4 stack) |
| T3 | +32% intensity mỗi va chạm tiếp theo (max 5 stack) |

## Tương tác
+X% intensity/stack cộng vào `player.intensity_multiplier`, tích lũy từ va chạm thứ 2 trong ván. T3: tối đa 5 stacks × 32% = +160% intensity_multiplier từ affix này tại stack cap. Stack reset mỗi ván (không phải mỗi hit). Va chạm đầu tiên = 0 stack → va chạm thứ 2 = 1 stack → v.v. Multiplicative với velocity_factor và charge_factor — hit thứ 6+ trong ván (stack cap) sẽ nhân tổng thêm ×2.6 từ affix này.

## Build & Synergy
Roll trên sword, saber, inkstone (tag `offensive`). Mạnh nhất trên linh khí trung tâm được linh lực qua nhiều lần/ván. Cặp với `dragon-spirit-qi` (bonus khi >= 3 hop) — cả hai scale với số lần linh lực qua nhiều linh khí, tuy nhiên endless-stack đếm hit tổng trên linh khí này còn dragon-spirit-qi đếm linh khí unique đã qua. Cổ Vật **Chuông Đại Hồng** (trigger free mỗi 7s) giữ stack không hết trong khoảng vắng. Keystone **Thuỷ Triều** (Thuỷ, velocity tăng theo chạm) stack cộng hưởng với endless-stack.
