---
id: verdant-transform
ten: Thanh Lam Biến Hoá
category: prefix
tags: [offensive, elemental]
element: wood
weight: 60
---

# Thanh Lam Biến Hoá (`verdant-transform`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +18% intensity Mộc; 10% chance hit gây mọc rễ — linh lực dừng 0.3s rồi tiếp với +30% |
| T2 | +25% intensity Mộc; 15% chance mọc rễ +40% |
| T3 | +33% intensity Mộc; 20% chance mọc rễ +50% |

## Tương tác

Mọc rễ là hiệu ứng vật lý — linh lực dừng 0.3s (velocity = 0), sau đó tiếp tục với velocity gốc + bonus intensity nhân vào `player_intensity_multiplier`. Trong 0.3s dừng, `charge_factor` tiếp tục tích nếu linh khí có charge buff active. Bonus intensity +30-50% áp dụng khi linh lực resume di chuyển, không tính lúc dừng. Intensity Mộc +18-33% là flat multiplier áp ngay từ đầu.

## Build & Synergy

Roll mọi base type (prefix). Đặc biệt mạnh với build high-charge: 0.3s dừng = thêm thời gian charge nếu có linh khí charge-buff gần. Kết hợp `wood-spirit-wave` (+40% intensity Mộc T3 — stacks với +33% thành chuỗi Mộc) và `wood-spawn-aid` (Mộc phụ sinh ra trong lúc rễ dừng có thể hit đan). Đạo Phái Mộc.
