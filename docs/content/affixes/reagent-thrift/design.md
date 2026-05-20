---
id: reagent-thrift
ten: Tiết Kiệm Đan Dược
category: suffix
tags: [currency-control]
weight: 40
---

# Tiết Kiệm Đan Dược (`reagent-thrift`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Khi dùng Linh Đan reroll: 10% chance không tốn đan dược |
| T2 | 15% chance không tốn |
| T3 | 20% chance không tốn; 5% chance roll 2 option thay vì 1 |

## Tương tác

Thuộc **currency-control** layer — tác động lên gambling economy, không phải combat math. Khi player dùng đan dược reroll (gambling trụ "Linh Đan" §12), 20% chance đan dược không bị consume. T3 "roll 2 option" (5% chance): thay vì nhận 1 kết quả reroll, nhận 2 kết quả để chọn. Hai roll (20% không tốn + 5% dual option) độc lập và có thể cùng proc một lần.

## Build & Synergy

Roll trên mọi item base type. Value tỷ lệ với tần suất player dùng đan dược reroll trong pháp trận:
- Build gambling-intensive (Đan Pháp Tâm Ma, nhiều reroll mid-ván) tận dụng tốt nhất.
- Kết hợp `reagent-choice` (thêm đan dược lựa chọn cuối ván) — có nhiều đan dược hơn để reroll + tiết kiệm hơn khi reroll.
- Dây Phong Ấn slot (§3.1) phù hợp nhất theo thiết kế; Đạo Phái Mộc (tiêu thụ nhiều đan dược) và Hoả (burst reroll) thèm affix này.
