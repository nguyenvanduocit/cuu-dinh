---
id: revive-force
ten: Hồi Sinh Ngoại Lực
category: suffix
tags: [sustain]
weight: 60
---

# Hồi Sinh Ngoại Lực (`revive-force`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Khi stability < 20%: heal +2% mỗi ván tự động |
| T2 | Khi stability < 25%: heal +3% mỗi ván |
| T3 | Khi stability < 30%: heal +5% mỗi ván; 5% chance crit heal +10% |

## Tương tác

Heal **stability linh đan** (§5.3) flat +5% mỗi ván start khi stability < 30% threshold — không phụ thuộc hit, không phụ thuộc combat formula §7.2. T3 "crit heal" (5% chance): heal lên +10% thay vì +5% — roll độc lập mỗi ván. Threshold check tại đầu mỗi ván (không continuous trong ván). Heal này cộng dồn với `recovery` (per-hit heal) và `nectar-recovery` (tương sinh heal).

## Build & Synergy

Roll trên mọi item base type. Safety net affix — giá trị cao nhất khi stability thường xuyên dips thấp:
- Kết hợp `longevity-inner-qi` (tăng max stability) để tránh chạm threshold; nhưng khi vẫn chạm, `revive-force` cover.
- Build chủ động tương khắc cao (dùng `nemesis`, `reckless`) làm damage cao nhưng stability drop nhanh → cần affix này làm safety valve.
- `Thập Bát La Hán` set bonus (linh đan resurrect 1 lần) + `revive-force` = double fail-state protection cho endgame T16.
