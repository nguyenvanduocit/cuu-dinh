---
id: speed-essence
ten: Tinh Hoa Tốc
category: essence
dropPool: Uncommon
weight: 50
---

# Tinh Hoa Tốc (`speed-essence`)

## Lược tả

Tinh Hoa tốc độ — force suffix tăng vận tốc linh lực T1 lên linh khí, rút ngắn thời gian per-ván và tối ưu số hit trong window thời gian cố định.

## Effect

Dùng lên linh khí Linh+ (đã identify). **Bắt buộc thêm suffix** `+X% tốc độ linh lực` T1 vào linh khí. Tất cả affix còn lại reroll ngẫu nhiên. Implicit giữ nguyên.

- Nếu đầy suffix (3/3): thay thế ngẫu nhiên 1 suffix hiện có.
- Suffix tốc độ T1: `+30–35% ball velocity` khi linh lực rời linh khí này (áp dụng cho linh lực được emit hoặc reflected từ linh khí đó). Vận tốc cao hơn → ít thời gian travel → nhiều hit hơn trong cùng time window → nhiều chain triggers.
- Velocity cao cũng ảnh hưởng **impact force** trong Rapier 2D physics (combat-math §3 intensity sources: velocity là 1 trong 3 nguồn intensity). Tốc độ T1 +35% velocity ≈ +35% intensity contribution từ velocity component.

## Khi nào dùng

- **Build chain tốc độ cao**: board với nhiều linh khí gần nhau → velocity cao = linh lực bounce liên tục nhanh hơn → tổng hit per ván tăng. Kết hợp tốt với `chain-essence`.
- **Time-limited encounters**: boss phases có timer (Thiên Kiếp endgame) → cần maximize hit trong window ngắn → velocity T1 là DPS tăng thực tế.
- **Intensity optimization**: velocity là 1/3 nguồn intensity theo §3 (velocity + charge + level). Tối ưu velocity T1 = tối ưu 1 trong 3 axes của intensity mà không ảnh hưởng 2 axes còn lại.
- **Drop pool Uncommon** → farm được; ưu tiên craft cho linh khí "launch pad" — linh khí player kích hoạt đầu tiên trong ván.

## Synergy

- **`chain-essence` (Tinh Hoa Linh)**: velocity cao hơn + chain trigger thêm bounce = tổng hit cao nhất có thể trong time window. Bộ đôi suffix này trên cùng linh khí là "machine gun" setup.
- **`crit-essence` (Tinh Hoa Crit)**: velocity ×intensity contribution → damage per hit cao hơn; crit chance T1 → mỗi hit có cơ hội crit. Tốc độ × crit = DPS ceiling.
- **Affix `bead-absorb` (implicit bead)**: bead có khả năng hấp thu và phóng lại linh lực — velocity T1 trên bead phóng lại với speed cao hơn, tạo chain reaction nhanh hơn.
- **Build "Cuồng Sát" archetype**: archetype speed-DPS theo combat-math §4 crit section — Tinh Hoa Tốc là suffix T1 mandatory cho archetype này, thay thế crit chance nếu đã đủ crit từ passive tree.
