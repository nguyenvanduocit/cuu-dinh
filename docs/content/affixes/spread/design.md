---
id: spread
ten: Lan Truyền
category: suffix
tags: [utility, chain]
weight: 100
---

# Lan Truyền (`spread`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Lan damage 10% sang linh khí lân cận trong 60px |
| T2 | Lan damage 15% sang linh khí lân cận trong 80px |
| T3 | Lan damage 20% sang linh khí lân cận trong 100px |

## Tương tác

Thuộc **Layer 1 (per-collision)**: mỗi collision tại linh khí này phát secondary damage event đến linh khí lân cận trong bán kính — secondary event áp dụng 10/15/20% của intensity gốc (sau đầy đủ player_mult × map_mult × element_factor). Element của secondary event = element của linh lực gốc, so sánh vs element từng linh khí lân cận riêng biệt — có thể tương sinh với linh khí này, tương khắc với linh khí kia. Không tạo thêm charge cho chain. Secondary không trigger `spread` lần nữa (tránh cascade loop).

## Build & Synergy

Roll suffix, tags `utility, chain`. Tăng hiệu quả mọi hit khi board **density cao** — linh khí xếp gần nhau để spread luôn chạm ≥ 1 target. Combo với `statue-four-spirit-aura` (implicit statue: +intensity linh khí cùng nguyên tố trong 100px) — nếu linh khí lân cận cùng nguyên tố, spread event hưởng aura buff → intensity secondary cao hơn. Phối hợp với `star-shatter` (prefix: sao rơi hit linh đan trực tiếp) — spread phân phối damage ngang linh khí, star-shatter đánh thẳng linh đan → hai damage vector khác nhau. Build AOE (`savage-crit-burst` + `spread` + `star-shatter`) tối đa hoá collision events mỗi ván.
