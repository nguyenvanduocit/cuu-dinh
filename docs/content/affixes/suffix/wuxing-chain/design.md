---
id: wuxing-chain
ten: Ngũ Hành Liên Hoàn
category: suffix
tags: [chain, elemental]
weight: 60
---

# Ngũ Hành Liên Hoàn (`wuxing-chain`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Chain qua đây tăng intensity thêm +8% mỗi hop |
| T2 | Chain tăng +12% mỗi hop |
| T3 | Chain tăng +16% mỗi hop; khi chain đủ 5 hop trong 1 lần: +50% bonus intensity tới đan |

## Tương tác

Mỗi chain hop qua linh khí có affix này cộng +8-16% vào `player_intensity_multiplier` của linh lực đang chain — tích lũy multiplicative qua mỗi hop. Ví dụ T3: 5 hop = intensity × (1.16)^5 ≈ ×2.1 trước khi hit đan. Bonus +50% T3 là flat add thêm vào `player_intensity_multiplier` khi chain đủ 5 hop trong 1 lần (cùng linh lực, không reset giữa ván).

## Build & Synergy

Roll mọi base type (suffix). Thiết yếu trong build chain-routing — đặt nhiều linh khí có affix này trên đường chain để nhân intensity tối đa. Kết hợp `twin-hit-chain` (25% chain jump tại mỗi linh khí → xác suất đủ 5 hop khả thi trong ván) và `chain-link` (tăng range → nhiều linh khí trong tầm → dễ 5-hop). Đạo Phái bất kỳ build routing.
