---
id: metal-pierce-might
ten: Hưởng Thịnh Kim Cương
category: prefix
tags: [offensive, elemental]
element: metal
weight: 60
---

# Hưởng Thịnh Kim Cương (`metal-pierce-might`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% intensity Kim; 5% chance Kim lực xuyên — ignore 1 linh khí tương khắc |
| T2 | +28% intensity Kim; 8% chance Kim xuyên |
| T3 | +38% intensity Kim; 12% chance Kim xuyên; xuyên gây 50% bonus intensity tới linh đan |

## Tương tác

+38% intensity Kim áp vào **player_mult** (§7.3 additive), chỉ khi linh lực element = `metal`. Pierce mechanic: linh lực Kim xuyên qua linh khí tương khắc (Mộc) thay vì bị block/convert — vẫn gây tương khắc damage nhưng tiếp tục bay đến linh đan. T3 xuyên gây +50% bonus intensity tới linh đan, áp **sau** player_mult đã tính. Pierce không bypass charge_factor — charge vẫn tích trước khi xuyên.

## Build & Synergy

Roll trên linh khí `element: metal`; tag `elemental` xác nhận restrict element. Cốt lõi cho build Kim mono-element:
- Kết hợp `lone-power` — 1 bell Kim độc nhất + pierce xuyên board Mộc = tương khắc chain liên tục.
- `nemesis` (+damage tương khắc) stack với pierce bonus — Kim khắc Mộc đan: `stability -= intensity * 0.40` × hai lớp buff.
- Đạo Phái Kim (crit + pierce archetype) tận dụng tốt nhất; `peak-crit` thêm crit_mult trên đỉnh xuyên.
