---
id: nectar-recovery
ten: Cam Lộ Hồi Phục
category: suffix
tags: [sustain]
weight: 100
---

# Cam Lộ Hồi Phục (`nectar-recovery`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực tương sinh hit đan: thêm +1% heal stability ngoài công thức |
| T2 | Tương sinh hit: +1.5% heal |
| T3 | Tương sinh hit: +2% heal; mỗi tương sinh liên tiếp trong ván: thêm +0.5% (max +3%) |

## Tương tác

Khi linh lực tương sinh hit linh đan (§7.2: `stability += intensity * 0.05` base), affix này thêm flat +2% heal stability ngoài công thức — cộng trực tiếp sau khi formula resolve. T3 combo heal tăng dần: hit tương sinh đầu = +2%, thứ hai liên tiếp = +2.5%, ..., tối đa +5% (base +2% + +3% stacking). "Liên tiếp" tính trong cùng ván — reset mỗi ván mới. Không ảnh hưởng quality hay intensity.

## Build & Synergy

Roll trên mọi item base type. Phụ thuộc vào linh lực tương sinh hit đan — cần biết element linh đan để setup board đúng:
- Kết hợp `longevity-inner-qi` (tăng max stability) + `recovery` (heal mỗi hit bất kỳ) = triple sustain layer.
- `orb-transmute` (convert linh lực sang tương sinh linh đan) tăng tần suất tương sinh hit → nhiều proc hơn mỗi ván.
- Đạo Phái Mộc (sustain archetype) tận dụng tốt nhất — passive tree heal rate + affix này = linh đan gần như bất tử.
