---
id: annihilation
ten: Huỷ Diệt
category: prefix
tags: [offensive, anti-corruption]
weight: 60
---

# Huỷ Diệt (`annihilation`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +30% intensity chống Tâm Ma |
| T2 | +40% intensity chống Tâm Ma |
| T3 | +50% intensity chống Tâm Ma |

## Tương tác

Bonus +intensity áp vào **player.intensity_multiplier** (§7.3 Lò affix layer), chỉ khi mục tiêu là boss **Tâm Ma** (BossType `heart-demon`). Tâm ma dùng "negative energy" không thuộc Ngũ Hành (§7.4) — affix này override phần element mismatch, tập trung thuần vào intensity multiplier. T3 +50% không tương tác với tương sinh/tương khắc của linh đan element — chỉ áp khi đánh boss, không áp hit vào linh đan thường. Stack additive với `corruption-assassin` trong cùng layer.

## Build & Synergy

Roll trên mọi item base type. Chuyên dụng cho **Tâm Ma boss fight** (T6–T13, §7.4):
- Combo mạnh nhất: `annihilation` + `corruption-assassin` + `blazing-corruption-bane` (nếu build Hoả) — stack additive trong player_mult layer, tổng có thể +120–180% vs Tâm Ma.
- Pháp trận variant **Tâm Ma** (BossType `heart-demon`): weight 40 (uncommon) → ưu tiên roll trên item đến khi có trước khi vào T6+.
- Ít giá trị ở pháp trận không có Tâm Ma (T1–T5, pháp trận Tiêu Chuẩn thuần). Đổi ra prefix intensity thường nếu không farm Tâm Ma.
