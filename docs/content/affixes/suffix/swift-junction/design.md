---
id: swift-junction
ten: Phi Tốc Giao Điểm
category: suffix
tags: [speed, chain]
weight: 60
---

# Phi Tốc Giao Điểm (`swift-junction`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +18% velocity; nếu linh lực đang có charge >= 2: +10% intensity bonus |
| T2 | +26% velocity; charge >= 2: +15% intensity |
| T3 | +35% velocity; charge >= 2: +22% intensity; chain jump miễn phí 1 lần sau va chạm |

## Tương tác

Thuộc **Layer 1 + Layer 2**: velocity boost áp dụng tức thì sau collision (Layer 1, tăng velocity factor hit kế). Intensity conditional khi `linh_luc.charge_count >= 2` (đã qua ≥ 2 hop): additive vào `player_mult` cho collision tại linh khí này. T3 chain jump miễn phí: linh lực sau va chạm tự động jump sang linh khí tiếp theo gần nhất mà không cần trajectory thực — tạo thêm 1 hop (+20% charge, §2), không phụ thuộc layout board. Chain jump tính vào charge_count → kích hoạt `sea-crest-surge` nếu có.

## Build & Synergy

Roll suffix, tags `speed, chain`. Affix này là **junction** giữa velocity build và chain build — hưởng lợi từ cả hai. Trong velocity build: +35% velocity boost hit kế, cộng với `swift-speed` (prefix) và `speed-retain` (suffix khác). Trong chain build: charge ≥ 2 conditional dễ đạt (hop 2 trở đi), +22% intensity stack với `sea-crest-surge`. T3 chain jump là power spike lớn — đặt linh khí này ở vị trí xa linh đan để chain jump tạo hop extra, tích charge thêm trước khi hit linh đan. Combo `swift-junction` + `sea-crest-surge` + `speed-retain` trên 1 board là bộ 3 chain core mạnh nhất cho build velocity-chain hybrid.
