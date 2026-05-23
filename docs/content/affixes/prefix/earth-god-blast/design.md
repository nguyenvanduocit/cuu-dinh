---
id: earth-god-blast
ten: Thổ Thần Bùng Nổ
category: prefix
tags: [offensive, elemental, aoe]
element: earth
weight: 40
---

# Thổ Thần Bùng Nổ (`earth-god-blast`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% intensity Thổ; mỗi 5 hit Thổ: tạo AOE đất nổ 80px gây 40% intensity |
| T2 | +28% intensity Thổ; mỗi 4 hit: AOE 100px gây 55% |
| T3 | +38% intensity Thổ; mỗi 3 hit: AOE 120px gây 70% |

## Tương tác
Hai layer: (1) +X% intensity Thổ vào `player.intensity_multiplier` cho linh lực Thổ; (2) AOE blast là event độc lập — mỗi N hit Thổ tích lũy trigger, blast gây flat X% intensity (Thổ element) lên linh đan theo §7.2 element relationship. Blast không được buff bởi `player.intensity_multiplier` của affix này — chỉ base intensity × map_tier_factor × velocity tại thời điểm trigger. Tâm Ma mod **Vô Lượng** (+50% linh lực) tăng tần suất Thổ hit → blast nhanh hơn.

## Build & Synergy
Roll trên statue, cauldron, box (tag `elemental, aoe`, element Thổ). Cần Đan Pháp Thổ hoặc Nguyên Liệu bias Thổ để đảm bảo đủ linh lực Thổ. Cặp với `earth-storm` (prefix khác, +30% intensity Thổ flat) trên linh khí Thổ cùng board — earth-storm tăng intensity_multiplier, earth-god-blast trigger AOE: cả hai scale với Thổ volume. Keystone **Trọng Sơn** (Thổ) bền vững board Thổ. **Hộ Pháp** archetype (§16, Thổ→Mộc) là home build.
