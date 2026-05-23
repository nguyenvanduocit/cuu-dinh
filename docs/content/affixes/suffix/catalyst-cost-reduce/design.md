---
id: catalyst-cost-reduce
ten: Giảm Nguyên Liệu Phí
category: suffix
tags: [currency-control]
weight: 40
---

# Giảm Nguyên Liệu Phí (`catalyst-cost-reduce`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Nguyên Liệu dùng vào pháp trận: 1 slot cost giảm 10% (loot bias) |
| T2 | Nguyên Liệu cost -15% |
| T3 | Nguyên Liệu cost -20%; 5% chance Nguyên Liệu không consume khi dùng |

## Tương tác

Cơ chế **economy layer** — không tác động vào intensity formula (§7.2). Giảm loot bias cost của Nguyên Liệu slot (1 trong 4 slot Nguyên Liệu khi compose pháp trận qua Sơn Hà Đồ Lệnh). T3 5% chance Nguyên Liệu không consume → tiết kiệm nguyên liệu qua nhiều pháp trận. Không stack với nhiều `catalyst-cost-reduce` trên cùng lần compose — lấy giá trị cao nhất (không additive). Weight 40 (rare).

## Build & Synergy

Roll trên mọi item base type. Affix meta-economy, giá trị ngoài combat:
- Phù hợp build **atlas-farming** — chạy nhiều pháp trận liên tục, tiết kiệm Nguyên Liệu để maintain loot bias cao hơn.
- `reagent-thrift` / `reagent-stash-retain` (nếu trong pool): kết hợp nhiều affix tiết kiệm nguyên liệu → giảm cost tổng thể của việc compose pháp trận.
- Giá trị thấp trong run casual ít pháp trận; tăng dần theo số map chạy mỗi session.
- Không tương tác với combat affixes — slot prefix/suffix này tốt hơn thay bằng intensity affix trong content T14+ nếu không farm atlas liên tục.
