---
id: saber-lightning
ten: Đao Chớp Giật
category: implicit
tags: [offensive, crit]
element: metal
compatibleItemTypes: [saber]
weight: 100
---

# Đao Chớp Giật (`saber-lightning`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Va chạm Đao: 10% chance Kim sét đánh ngẫu nhiên 1 linh khí trong 150px |
| T2 | Va chạm Đao: 15% chance Kim sét đánh ngẫu nhiên 1 linh khí trong 200px |
| T3 | Va chạm Đao: 20% chance Kim sét đánh 2 linh khí ngẫu nhiên trong 200px |

## Tương tác

Thuộc **Layer 1 (per-collision)**: mỗi lần va chạm Đao kích hoạt sét, sét tạo thêm 1 collision event mới lên linh khí mục tiêu — áp dụng đầy đủ intensity formula (velocity × charge × player_mult × map_mult) riêng biệt, sau đó tính element interaction Kim vs nguyên tố linh đan (đồng hành +10% quality, tương sinh +30% quality, tương khắc -40% stability). Sét không tích charge — mỗi sét = 1 fresh hop, không thêm vào charge_count chain hiện tại. Ở T3, 2 sét cùng lúc → 2 collision event độc lập, có thể gây đại khắc nếu chain element đủ điều kiện (§1 đại khắc). Implicit-only: không stack với prefix offensive khác trên cùng item.

## Build & Synergy

Roll trên **saber** — cặp tự nhiên với build Kim crit. Combo mạnh với prefix `savage-crit-burst`: crit hit kích hoạt AOE, sét kích hoạt thêm collision độc lập → double AOE source. Cặp với `swift-speed` (velocity cao → intensity sét cao hơn) và keystone **Sắc Bén** (crit×3 áp lên cả collision sét). Đạo phái **Tử Vi** (+10% crit chance base) tận dụng tag `crit`. Trong Set **Tứ Linh** Kim 4-piece: +30% intensity lên mọi Kim collision kể cả sét. Tránh board Thuỷ-heavy — Thuỷ tương sinh Kim nhưng Kim sét đánh linh khí Mộc sẽ gây tương khắc Mộc (Kim khắc Mộc), xử lý cẩn thận routing.
