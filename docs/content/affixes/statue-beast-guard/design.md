---
id: statue-beast-guard
ten: Tượng Thần Thú Bảo Vệ
category: implicit
tags: [defensive]
compatibleItemTypes: [statue]
weight: 100
---

# Tượng Thần Thú Bảo Vệ (`statue-beast-guard`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Giảm 20% tương khắc damage trong bán kính 150px |
| T2 | Giảm 30% tương khắc damage trong bán kính 150px |
| T3 | Giảm 40% tương khắc damage trong bán kính 200px |

## Tương tác

Thuộc **Layer 4 (element interaction)**: giảm stability damage từ tương khắc (base -intensity × 0.40) áp dụng cho mọi linh khí trong bán kính — hiệu quả là multiplier trên hệ số 0.40: T1 giảm còn 0.40 × 0.80 = 0.32, T3 giảm còn 0.40 × 0.60 = 0.24. Bán kính T3 200px đủ bao phủ vùng trung tâm board. Đại khắc (hệ số 0.80) cũng được giảm tương tự — T3: 0.80 × 0.60 = 0.48 thay vì 0.80. Implicit-only: không stack với affix defensive khác trên cùng statue item.

## Build & Synergy

Roll implicit trên **statue** item base. Đặt statue ở **trung tâm board** để bán kính 200px bao phủ tối đa linh khí xung quanh. Combo với `statue-four-spirit-aura` (implicit khác trên statue khác — mỗi statue 1 implicit): beast-guard giảm damage, four-spirit-aura tăng intensity linh khí cùng nguyên tố → 2 statue chuyên biệt phòng thủ + offense. Combo với `stabilize` + `stable-base` (suffix trên linh khí trong bán kính): stacking stability protection từ nhiều nguồn. Thiết yếu cho board hỗn nguyên tố nơi tương khắc xảy ra thường xuyên. Trong T14-T16: giảm đại khắc từ 0.80 xuống 0.48 cắt đáng kể risk instant brick khi stability < 25%.
