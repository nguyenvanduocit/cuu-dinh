---
id: saber-accelerate
ten: Đao Tăng Tốc
category: implicit
tags: [speed, offensive]
compatibleItemTypes: [saber]
weight: 60
---

# Đao Tăng Tốc (`saber-accelerate`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực rời Đao nhanh hơn 20% |
| T2 | Linh lực rời Đao nhanh hơn 35% + +10% intensity |
| T3 | Linh lực rời Đao nhanh hơn 50% + +15% intensity; 10% chance nhân đôi linh lực |

## Tương tác

Implicit affix — chỉ roll trên `saber` base type. +50% exit velocity áp vào **velocity_factor** (§7.2) tại điểm rời Đao: `intensity = velocity_factor(+50%) × charge_factor × player_mult × map_tier`. +15% intensity T3 là bonus additive vào player_mult trên đỉnh velocity. Nhân đôi linh lực (10% T3) tạo bản sao với cùng element, velocity, và intensity_base — bản sao tiếp tục tích charge_factor độc lập.

## Build & Synergy

Implicit ràng buộc `compatibleItemTypes: [saber]` — chỉ xuất hiện trên Đao (saber). Cốt lõi của mọi build Đao:
- Kết hợp `master-archer` (spawn intensity cao từ Đỉnh) — Đỉnh spawn → Đao exit với double intensity boost.
- `accelerate-box` (tăng velocity trong Hộp) + Đao exit velocity cao = velocity_factor cực lớn tới linh đan.
- T3 nhân đôi linh lực kết hợp với `piercing-step` — 2 linh lực cùng pierce chain song song. Đạo Phái Kim (crit, Đao archetype) bắt buộc item base này.
