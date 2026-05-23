---
id: shock-absorb
ten: Giảm Sốc
category: suffix
tags: [defensive]
weight: 100
---

# Giảm Sốc (`shock-absorb`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh khí có 8% chance không bị stagger khi bị hit mạnh |
| T2 | 12% chance không stagger |
| T3 | 18% chance không stagger; không stagger → phản đòn +5% intensity |

## Tương tác

Thuộc **Layer 1 (per-collision)**: stagger là state vật lý làm linh khí bị lệch vị trí tạm thời, ảnh hưởng chain trajectory. Không stagger giữ linh khí ở vị trí, bảo toàn geometry board. T3 phản đòn +5% intensity: khi không stagger, hit tiếp theo từ linh khí này +5% intensity additive vào `player_mult` cho 1 collision đó — không tích lũy qua nhiều hit. Không tương tác trực tiếp stability hay quality.

## Build & Synergy

Roll suffix. Phù hợp linh khí **vị trí chiến lược cố định** — linh khí bị stagger nhiều làm hỏng chain routing. Combo với `statue-beast-guard` (implicit statue giảm tương khắc damage trong bán kính): beast-guard giảm force of hit, shock-absorb chống dịch chuyển → bảo vệ kép vị trí linh khí. T3 phản đòn +5% nhỏ nhưng consistent — cộng hưởng tốt trong build nhiều hit/ván (`savage-frenzy`). Đạo phái phòng thủ (Địa Long) có thêm stagger resist base sẽ đẩy effective không-stagger rate cao hơn 18%.
