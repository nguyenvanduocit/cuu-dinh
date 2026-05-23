---
id: reagent-stash-retain
ten: Lưu Giữ Đan Dược Rơi
category: suffix
tags: [currency-control]
weight: 40
---

# Lưu Giữ Đan Dược Rơi (`reagent-stash-retain`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Đan dược drop từ linh khí này không biến mất khi pháp trận kết thúc (lưu vào stash) |
| T2 | Drop tự động vào stash + +10% drop rate |
| T3 | Drop vào stash + +20% drop rate; 5% chance drop thêm 1 Tinh Hoa |

## Tương tác

Thuộc **currency-control** layer. Base mechanic: đan dược drop từ linh khí này trong ván đi thẳng vào stash (Forever layer — §2), không bị mất dù pháp trận LOSE (§6.3: lose = mất loot map). Đây là exception quan trọng với default drop behavior. +20% drop rate (T3) là flat additive vào base drop_chance. Tinh Hoa (5% T3) là separate roll per drop event.

## Build & Synergy

Roll trên mọi item base type. Cốt lõi cho build chơi risk-reward cao (map tier cao, risk thất bại cao):
- T14-T16 với `reckless` (linh khí dễ vỡ) hoặc Đan Pháp Tâm Ma (stability risk) — affix này đảm bảo đan dược không mất khi fail.
- Kết hợp `random-reagent-drop` + `reagent-select` — tăng cả tần suất và chất lượng drop; `reagent-stash-retain` bảo hiểm toàn bộ stack currency.
- Dây Phong Ấn slot (§3.1) là slot tự nhiên nhất; giá trị tỷ lệ nghịch với win rate — người chơi fail nhiều hơn = affix này value cao hơn.
