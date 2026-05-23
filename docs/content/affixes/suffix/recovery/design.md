---
id: recovery
ten: Hồi Phục
category: suffix
tags: [sustain]
weight: 100
---

# Hồi Phục (`recovery`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi va chạm: heal stability linh đan +0.8% |
| T2 | Mỗi va chạm: heal stability +1.2% |
| T3 | Mỗi va chạm: heal stability +1.8%; tương sinh hit heal +3% |

## Tương tác

Heal **stability linh đan** (§5.3) flat +1.8% mỗi hit bất kỳ vào linh khí mang affix này — cộng ngoài combat formula §7.2 (tương sinh base heal `stability += intensity * 0.05` không tính vào đây). T3 tương sinh hit heal +3%: nếu linh lực là tương sinh hit, heal tổng = +1.8% (base) + +3% (tương sinh bonus) + `intensity * 0.05` (formula) = ~4.8% + formula. Heal tính mỗi hit, không có cap per hit.

## Build & Synergy

Roll trên mọi item base type. Sustain affix phổ biến nhất — giá trị tỷ lệ với hit frequency:
- Kết hợp `longevity-inner-qi` (tăng max stability) + `nectar-recovery` (tương sinh heal thêm) = triple sustain stack.
- `orb-transmute` (convert linh lực thành tương sinh) tăng tần suất tương sinh hit → proc T3 bonus thường xuyên hơn.
- Đạo Phái Mộc (sustain archetype) bắt buộc affix này — passive tree heal rate nhân thêm flat heal từ affix này.
