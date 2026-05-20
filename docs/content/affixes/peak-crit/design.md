---
id: peak-crit
ten: Đỉnh Điểm Crit
category: prefix
tags: [crit, offensive]
weight: 100
---

# Đỉnh Điểm Crit (`peak-crit`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Crit strikes gây thêm 30% intensity |
| T2 | Crit strikes gây thêm 45% intensity |
| T3 | Crit strikes gây thêm 60% intensity; 5% chance instant double crit |

## Tương tác

Khi crit kích hoạt, bonus +60% intensity áp vào lớp **crit_mult** (multiplicative với player_mult trong §7.2 — nhân sau player_mult đã tính): `final_intensity = intensity × player_mult × 1.60`. T3 "double crit" (5% chance) áp crit_mult thêm lần hai trong cùng hit: hiệu quả `× 1.60 × 1.60 = × 2.56` so với base. Cap: không có cap riêng ngoài velocity max.

## Build & Synergy

Roll trên mọi item base type. Cốt lõi của mọi crit build — bắt buộc khi passive tree đầu tư crit_chance nodes:
- Kết hợp `lone-power` T3 (+5% crit_chance) + passive tree Kim crit nodes = crit proc thường xuyên.
- `reckless` (+intensity flat) + `peak-crit` (×1.60 khi crit) = spike damage tối đa, đổi lấy durability drain.
- Đạo Phái Kim (crit archetype) bắt buộc affix này trong endgame build. Tinh Hoa drop từ `lucky-fate` T3 thường chứa `peak-crit` + `Sắc Bén` keystone passive.
