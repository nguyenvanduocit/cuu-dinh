---
id: bead-chain
ten: Châu Dây Chuyền
category: implicit
tags: [chain]
compatibleItemTypes: [bead]
weight: 100
---

# Châu Dây Chuyền (`bead-chain`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực qua Châu nhảy tới linh khí gần nhất trong 100px |
| T2 | Linh lực qua Châu nhảy tới linh khí gần nhất trong 150px + +10% intensity mỗi nhảy |
| T3 | Linh lực qua Châu nhảy tới linh khí gần nhất trong 200px + +15% intensity mỗi nhảy |

## Tương tác

Cơ chế **chain jump** sau khi linh lực qua Châu: mỗi nhảy tích `charge_factor` +20%/hop theo công thức §7.3 chuẩn, cộng thêm bonus T2/T3 (+10–15% intensity/nhảy riêng của affix này). Hai nguồn stacks additive: charge_factor chuẩn + bonus per-jump của affix → intensity leo nhanh. Linh lực giữ nguyên nguyên tố qua mỗi nhảy → tương sinh/tương khắc (§7.1) vẫn áp dụng trên từng linh khí đích. Range 100–200px tính từ vị trí Châu.

## Build & Synergy

Implicit — chỉ roll trên **bead**. Build chain-intensity chuyên:
- `bead-absorb` (phun ra +60% intensity): phun → nhảy → mỗi nhảy thêm intensity = exponential per-Châu.
- `chain-link` (suffix, bất kỳ linh khí): chain sau khi qua Châu tiếp tục nhảy từ linh khí khác → chuỗi dài hơn.
- `charge-store` (tích charge per va chạm): charge_factor cao → kết hợp bonus per-jump = intensity rất lớn ở cuối chuỗi.
- `charged-might` (+intensity khi charge >= N): chain dài đủ → trigger `charged-might` trên mọi linh khí trong chain.
