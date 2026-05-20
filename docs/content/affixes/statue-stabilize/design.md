---
id: statue-stabilize
ten: Tượng Ổn Định
category: implicit
tags: [defensive, sustain]
compatibleItemTypes: [statue]
weight: 60
---

# Tượng Ổn Định (`statue-stabilize`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh đan stability tăng tối đa +10% khi Tượng còn nguyên |
| T2 | Linh đan stability tăng tối đa +15% khi Tượng còn nguyên |
| T3 | Linh đan stability tăng tối đa +25% khi Tượng còn nguyên |

## Tương tác

Thuộc **Layer 5 (stability mechanics)**: tăng `stability_max_bonus` (§2 clamp: `clamp(..., 0, 100 + player.stability_max_bonus)`). T3 +25% → effective max stability 125 thay vì 100 (nếu không có nguồn khác). Conditional "Tượng còn nguyên" — mất nếu linh khí vỡ do Huyết Sát mod (§8: durability 0 → vỡ). Larger stability pool nghĩa là mỗi tương khắc hit trừ ít % hơn tương đối, và có buffer lớn hơn trước khi fail state (stability ≤ 0). Không ảnh hưởng heal rate hay damage reduction.

## Build & Synergy

Roll implicit trên **statue**. Phối hợp tốt nhất với `Lò.Thân` affix (§3: +15% intensity nhưng cũng có stability max bonus variant) và Cổ Vật stability bonus — tổng max stability có thể đạt 150+. Với pool 150 stability: tương khắc intensity 25 gây -10 → chỉ chiếm 6.7% pool thay vì 10% → 50% nhiều hit hơn trước khi fail. Combo với `stabilize` + `stable-base` (suffix): pool lớn + drain chậm + damage reduce = bộ 3 survival tối ưu cho T14-T16. Trong bí cảnh **Thiên Kiếp** (Thiên Kiếp wave -50 stability nếu không có Lôi Phù): pool 150 survive hit đó, pool 100 không — tượng này là gate item để farm T14-T16 an toàn.

