---
id: shock-resist-heal
ten: Giảm Sốc Kháng
category: suffix
tags: [anti-corruption, sustain]
weight: 40
---

# Giảm Sốc Kháng (`shock-resist-heal`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Khi linh đan bị Tâm Ma debuff: linh khí này phát +15% heal stability/hit trong 3s |
| T2 | +22% heal khi debuff |
| T3 | +30% heal khi debuff; 10% chance clear 1 stack Tâm Ma debuff mỗi hit |

## Tương tác

Thuộc **Layer 5 (stability mechanics)**: khi linh đan đang bị Tâm Ma debuff (tick -1 stability/s từ §5), linh khí này phát heal mỗi hit trong 3s. Heal amount = base stability heal từ tương sinh (intensity × 0.05) × (1 + 0.15/0.22/0.30) — nhân với heal bonus này. Tương sinh Thuỷ hit cho Mộc đan: base heal = intensity × 0.05, với T2 affix: intensity × 0.05 × 1.22. T3 clear stack: 10%/hit xoá 1 stack Tâm Ma debuff — mỗi stack xoá giảm tick rate debuff, giảm drain stability/s.

## Build & Synergy

Roll suffix với tags `anti-corruption, sustain`. **Bí cảnh Tâm Ma T6-T13**: Tâm Ma boss attack -5 đến -25 stability/attack (§5) + tick debuff liên tục → affix này là lớp sustain sống còn. Phối hợp với `stabilize` (suffix giảm tốc mất stability) và `stable-base` (suffix giảm damage tương khắc) → bộ 3 phòng thủ stability. T3 clear stack cộng hưởng với `seal-corruption-bane` (đã khắc implicit trước bí cảnh) — double layer chống Tâm Ma. Đạo phái Huyền Minh hay build Thuỷ-Mộc board (tương sinh tự nhiên → nhiều heal event) tận dụng tốt nhất.
