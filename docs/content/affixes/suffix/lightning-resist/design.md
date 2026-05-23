---
id: lightning-resist
ten: Kháng Thiên Kiếp
category: suffix
tags: [defensive]
weight: 40
---

# Kháng Thiên Kiếp (`lightning-resist`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Giảm 20% damage nhận từ Thiên Kiếp linh lực |
| T2 | Giảm 30% damage Thiên Kiếp |
| T3 | Giảm 45% damage Thiên Kiếp; Thiên Kiếp hit heal +2% Lò Thọ |

## Tương tác

Thiên Kiếp linh lực là dạng **đại_khắc** (§7.2) — gây `stability -= intensity * 0.80` và instant bể nếu stability thấp. Affix này nhân vào lớp **damage reduction** trước khi áp công thức: `effective_intensity = intensity * (1 - 0.45)` ở T3. T3 heal +2% Lò Thọ mỗi Thiên Kiếp hit — heal thuộc secondary HP, không ảnh hưởng stability linh đan. Không có cap riêng; stack additive với `pure-heart-resist` (giảm Tâm Ma, khác loại).

## Build & Synergy

Roll trên mọi item base type (không ràng buộc `compatibleItemTypes`). Bắt buộc với build T14-T16 (Thiên Kiếp tier band) và Đan Pháp **Thiên Kiếp**:
- Kết hợp `pure-heart-resist` — cover cả hai negative energy type (Thiên Kiếp + Tâm Ma).
- `Lôi Phù Cổ` (unique) convert Thiên Kiếp hit → +50% intensity; dùng song song để vừa kháng vừa khai thác.
- Đạo Phái Kim/Thổ (defensive archetype) thèm nhất — Thổ slow giảm velocity → giảm intensity Thiên Kiếp thêm một lớp nữa.
