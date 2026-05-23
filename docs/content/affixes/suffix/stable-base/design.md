---
id: stable-base
ten: Ổn Định Nền
category: suffix
tags: [defensive, sustain]
weight: 100
---

# Ổn Định Nền (`stable-base`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Giảm stability mất từ tương khắc 10% |
| T2 | Giảm 15% |
| T3 | Giảm 20%; linh đan stability tối thiểu không xuống dưới 5% trong ván này |

## Tương tác

Thuộc **Layer 5 (stability mechanics)**: giảm flat stability damage từ mỗi tương khắc hit — tương đương nhân coefficient 0.40 (§2) xuống còn 0.40 × (1 - 0.10/0.15/0.20). Khác `stabilize` (rate modifier theo intensity): `stable-base` là **flat reduction per hit**, hiệu quả nhất ở hit nhỏ-nhiều, `stabilize` hiệu quả nhất ở hit lớn-ít. T3 floor 5% stability là **failsafe cứng** — ngăn 1 hit đại khắc lớn kết liễu linh đan ngay trong ván, đặc biệt quan trọng ở §1 đại khắc instant-brick 10% chance khi stability < 25%.

## Build & Synergy

Roll suffix, defensive. **Pair tự nhiên với `stabilize`**: hai cơ chế giảm stability damage khác nhau (flat vs rate) stack multiplicative — xem `stabilize` synergy. T3 floor 5% cực giá trị trong bí cảnh đại khắc risk cao (board hỗn nguyên tố, Tử Sinh đan pháp, T14-T16): cắt instant-brick chance từ 10% xuống gần 0% vì stability không xuống dưới 5% trong ván. Combo với `survival-growth` (suffix: durability tăng per ván win) — floor 5% giữ linh đan sống để win ván, win ván tăng durability → feedback loop sống sót. Đạo phái bất kỳ — priority cao nhất cho build đang farm T14-T16 không muốn mất linh đan.
