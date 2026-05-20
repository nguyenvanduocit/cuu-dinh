---
id: essence-ring
ten: Tinh Hoa Vòng
category: suffix
tags: [currency-control]
weight: 60
---

# Tinh Hoa Vòng (`essence-ring`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Drop rate Tinh Hoa Ngũ Hành +30% |
| T2 | Drop rate Tinh Hoa +45% |
| T3 | Drop rate Tinh Hoa +60%; Tinh Hoa drop luôn thuộc nguyên tố linh khí |

## Tương tác
Drop rate multiplier hoạt động ở loot layer — additive với base Tinh Hoa drop rate của pháp trận. Không floor guarantee (khác `essence-guarantee`). T3 element lock theo linh khí — consistent với `essence-hoard` T3. Stack được với `essence-hoard` (hoard là per-hit trigger, ring là rate multiplier trên tổng drop pool) — hai mechanism khác nhau, cộng hưởng không redundant. Không stack với `essence-exchange` (exchange là spawn event, ring là rate modifier trên natural drops).

## Build & Synergy
Roll trên talisman, charm, vase (tag `currency-control`). Affix "always-on" nhất trong cluster Tinh Hoa — không cần condition, chỉ cần pháp trận kết thúc. Cặp tốt nhất: `essence-hoard` (per-hit source) + `essence-ring` (rate multiplier) = maximum Tinh Hoa farming. Nếu cần specific element: lock linh khí sang đúng element → T3 element lock sẽ theo. **Thương Nhân** archetype, Đạo Phái **Tử Vi** (see next drops), và Thiên Cơ Quẻ (§10 Trụ 6) phối hợp tốt với Tinh Hoa economy.
