---
id: recoil-force
ten: Phản Lực
category: prefix
tags: [offensive]
weight: 60
---

# Phản Lực (`recoil-force`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | 5% chance linh lực nảy ngược hướng sau va chạm; +40% intensity khi nảy ngược |
| T2 | 8% chance nảy ngược; +55% intensity |
| T3 | 10% chance nảy ngược; +70% intensity; nảy ngược pierce linh khí tiếp theo |

## Tương tác

Khi linh lực nảy ngược (10% chance T3), hướng bay đảo 180° và +70% intensity áp vào **velocity_factor** của linh lực ngược chiều đó. Linh lực ngược chiều vẫn tích `charge_factor` từ các hop tiếp theo. T3 pierce: linh lực ngược chiều xuyên qua linh khí đầu tiên nó gặp (gây intensity đầy, không bị block). Nếu linh lực ngược chiều đến linh đan, apply combat formula §7.2 bình thường với intensity cao.

## Build & Synergy

Roll trên mọi item base type. Board layout quyết định hiệu quả — linh lực ngược chiều cần đường thẳng về linh đan:
- Kết hợp `piercing-step` (pierce chain) — linh lực đã pierce forward, nảy ngược, pierce tiếp = double chain.
- `reflect-qi` (phản xạ linh lực về hướng linh đan) + `recoil-force` (nảy ngược tạo vector khác) — hai mechanic redirect độc lập, build board với nhiều góc phản xạ.
- Đạo Phái Kim (crit) tận dụng tốt nhất — linh lực ngược chiều intensity cao + `peak-crit` = spike lớn khi crit proc.
