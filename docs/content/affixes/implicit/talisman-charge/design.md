---
id: talisman-charge
ten: Bùa Tích Luỹ
category: implicit
tags: [chain, utility]
compatibleItemTypes: [talisman]
weight: 60
---

# Bùa Tích Luỹ (`talisman-charge`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi lần linh lực chạm Bùa tích 1 charge; 5 charge → kích hoạt hiệu ứng |
| T2 | Mỗi lần linh lực chạm Bùa tích 1 charge; 4 charge → kích hoạt hiệu ứng |
| T3 | Mỗi lần linh lực chạm Bùa tích 1 charge; 3 charge → kích hoạt hiệu ứng mạnh hơn 50% |

## Tương tác

Charge là counter ngoài damage formula — tích lũy qua va chạm, khi đạt ngưỡng kích hoạt hiệu ứng của Bùa (tùy affix khác trên item). T3 giảm ngưỡng xuống 3 và nhân 1.5× vào hiệu ứng kích hoạt. Tương tác với `charge_factor` gián tiếp: bùa charge nhanh hơn → linh lực tích charge qua chain nhiều linh khí → `charge_factor` tăng trước khi đến đan. Không cap — có thể tích charge nhiều lần trong 1 ván.

## Build & Synergy

Roll trên **talisman** (implicit). Kết hợp với `talisman-expand` (tầm kích hoạt lớn hơn → nhiều linh lực kích hoạt) và `talisman-once` (1-2 lần kích hoạt mạnh/ván bổ sung). Build chain-heavy tối đa giá trị: định tuyến linh lực qua Bùa nhiều lần trước khi đến đan. Không phụ thuộc element — dùng được mọi Đạo Phái.
