---
id: sword-split
ten: Kiếm Phân Đôi
category: implicit
tags: [offensive, crit]
compatibleItemTypes: [sword]
weight: 100
---

# Kiếm Phân Đôi (`sword-split`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Cắt linh lực thành 2 đường; mỗi đường -20% intensity; góc ±20° |
| T2 | Cắt linh lực thành 2 đường; mỗi đường -15% intensity; góc ±30° |
| T3 | Cắt linh lực thành 2 đường; mỗi đường -10% intensity; góc ±35°; crit chance +10% |

## Tương tác

Chia 1 linh lực thành 2 hit độc lập — mỗi đường áp damage formula riêng với `velocity_factor` của chính nó (momentum bảo toàn theo hướng mới). Penalty intensity là hệ số nhân vào `player_intensity_multiplier` (-20% T1, -10% T3). Hai đường có thể kích hoạt tương sinh/tương khắc riêng lẻ, chain jump độc lập, crit roll độc lập. Tổng damage thực tế = 2 × (1 - penalty) × base, tương đương ~160-180% base damage T3.

## Build & Synergy

Roll trên **sword** (implicit). Giá trị tăng mạnh khi board nhiều linh khí — 2 đường nhân đôi xác suất chain và pierce trigger. Kết hợp `twin-hit-chain` (mỗi đường 25% chain jump T3 → xác suất ít nhất 1 chain ≈44%) và `sword-pierce` (pierce T3 mọi element, 2 đường pierce 2 linh khí khác nhau). Đạo Phái Kim — crit T3 synergy với passive crit multiplier Kim path.
