---
id: jade-spirit-flower
ten: Linh Hoa Bích Bảo
type: flower
element: wood
category: sustain-defensive
dropWeight: 100
dropRateHint: atlas drop, uncommon
---

# Linh Hoa Bích Bảo (`jade-spirit-flower`)

## Lược tả

Cổ vật sinh khí cho lối Thiết Bích: nâng trần stability lên cao — nhưng mọi tương sinh heal trở nên ít hơn, như cây lớn mà rễ không sâu. Buffer rộng hơn song khó hồi phục hơn.

## Cơ chế

Mang `jade-spirit-flower` thay đổi hai thông số stability:

| Tier | Stability max bonus | Tương sinh heal modifier |
| --- | --- | --- |
| T1 | +30% stability max (+30, tổng cap 130) | Tương sinh heal ×0.5 (combat-math §5: +intensity×0.025 thay vì ×0.05) |
| T2 | +40% stability max (cap 140) | Tương sinh heal ×0.6; đồng hành heal ×0.75 |
| T3 | +50% stability max (cap 150) + heal mỗi ván win +5 stability | Tương sinh heal ×0.7; đồng hành heal ×0.8 |

- **Buffer lớn hơn**: +30-50 stability max tạo ra nhiều "room" trước khi bể — đặc biệt hiệu quả chống Tâm Ma debuff tick (−1/s, combat-math §5) và boss attack (−5 đến −25).
- **Tương sinh heal giảm**: linh lực Thuỷ → linh đan Mộc (tương sinh) vẫn cho +30% quality nhưng stability heal từ +intensity×0.05 xuống ×0.025-0.035 — heal thực tế giảm 30-50%.
- **T3 heal ván win +5**: nguồn stability tự nhiên theo ván win (không qua element interaction) bù một phần heal bị mất.

## Đánh đổi (Downside)

- **Tương sinh heal giảm 30-50%**: build thiên Mộc-Thuỷ (tương sinh heal chính) bị mất nguồn tự heal chủ động. Buffer rộng hơn nhưng khó recovery sau khi bị hit nặng — "sức chịu đựng cao, tự lành thấp".
- **Buffer không vô hạn**: +30 stability max hữu ích hơn ở T1-T8 (intensity trung bình); T14-T16 một đòn đại khắc intensity 80 vẫn hạ −64 stability (×0.80, §5) dù cap 130.
- **Không tương thích với build heal-stacking**: player dùng linh khí Mộc implicit (+2% Mộc hit, §5) để heal liên tục sẽ thấy heal bị giảm thêm bởi ×0.5 modifier — two layers of reduction.

## Vì sao (WHY)

- **Heal ×0.5 (không cắt hoàn toàn)**: cắt hoàn toàn heal biến flower thành pure flat buffer với không có tradeoff thú vị; ×0.5 tạo ra quyết định "dùng tương sinh để heal hay để gain quality?" trực tiếp cùng element.
- **+30% max (không +50% T1)**: T1 combat-math stability base 100, cap +30 = 130 — vừa đủ để thấy khác biệt ở pháp trận dài. +50% T1 sẽ áp đảo Thiên Kiếp damage (-50 if unprotected, §5) về mặt toán học, phá cơ chế Thiên Kiếp.
- **Buffer axis vs heal axis**: stability có hai chiều — chiều "chịu đựng" (max) và chiều "tự lành" (heal rate). Flower tăng chiều 1 bằng cách hi sinh chiều 2 → mechanically honest tradeoff, không phải stat tax tùy tiện.

## Synergy & Build

- **Archetype**: Thiết Bích / Tank. Đạo Phái **Thái Cực** (Vạn Pháp Dung Hoà — +5% stability; nhiều nguyên tố cùng board → +10% intensity tổng): Thái Cực không phụ thuộc tương sinh từ 1 nguyên tố → không phụ thuộc heal bị giảm; dùng quality từ nhiều nguồn thay vì heal từ Mộc-Thuỷ.
- **Combo**: `amitabha-statue` (flat quality mỗi ván win — bù heal chậm bằng tiến trình ổn định) + `pure-heart-bead` (dispel tâm ma — xoá nguồn drain stability lớn nhất) + Đan Pháp **Marathon** (nhiều ván = nhiều lần T3 heal ván win).
- **Anti-synergy**: `doomed-short-life-charm` (−50% stability max) — hai cổ vật tác động ngược lên stability max, loại trừ nhau; build heal-over-time Mộc nặng (linh khí Mộc dày + tương sinh heal) bị giảm hiệu quả trực tiếp.
- **Drop**: dropWeight 100, `atlas drop, uncommon` — accessible sớm, nền tảng cho mọi build muốn survive lâu.
