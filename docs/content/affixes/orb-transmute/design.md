---
id: orb-transmute
ten: Biến Thể Linh Lực
category: suffix
tags: [elemental, utility]
weight: 60
---

# Biến Thể Linh Lực (`orb-transmute`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực qua đây: nguyên tố đổi thành tương sinh của linh đan (tối ưu hoá) |
| T2 | Đổi nguyên tố + +12% intensity |
| T3 | Đổi nguyên tố + +20% intensity; 10% chance nhân đôi linh lực sau convert |

## Tương tác

Convert element linh lực → tương sinh của linh đan (§4.2 convert mechanic). Sau convert, linh lực trở thành tương sinh hit: `quality += intensity * 0.30`, `stability += intensity * 0.05` (§7.2). +20% intensity ở T2/T3 áp vào **velocity_factor** tại điểm convert — cộng trước khi linh lực tiếp tục bay. T3 nhân đôi linh lực (10% chance) tạo 2 linh lực cùng element sau convert — cả hai đều hưởng bonus intensity.

## Build & Synergy

Roll trên mọi item base type. Enabler cho build "chơi bất kỳ element nào, về đến linh khí này đều thành tương sinh":
- Kết hợp `nectar-recovery` — mọi linh lực qua `orb-transmute` đều trở thành tương sinh hit, proc heal mỗi lần.
- `myriad-summon-honor` kết hợp khi board có nhiều linh khí cùng element → convert chúng thành tương sinh chain.
- Đạo Phái Mộc (sustain) tận dụng tốt nhất — biến board đa nguyên tố thành nguồn tương sinh liên tục.
