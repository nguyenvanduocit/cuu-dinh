---
id: twin-dragon-union
ten: Song Long Hợp Bích
category: prefix
tags: [offensive, elemental, chain]
element: metal
weight: 40
---

# Song Long Hợp Bích (`twin-dragon-union`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% intensity khi có đúng 2 linh khí Kim trên board |
| T2 | +28% intensity khi có 2 linh khí Kim; 5% chain jump giữa 2 Kim |
| T3 | +38% intensity khi có 2 linh khí Kim; 8% chain jump +15% intensity bonus |

## Tương tác

Bonus intensity là điều kiện board-state: kiểm tra số linh khí Kim đang active đầu mỗi ván — nếu đúng 2, cộng 20-38% vào `player_intensity_multiplier` cho toàn bộ linh lực Kim trong ván đó. Chain jump T2-T3 giữa 2 Kim là proc riêng mỗi hit — linh lực nhảy từ Kim A sang Kim B trước khi đến đan, mang theo intensity + 15% bonus hop. Không hoạt động với 1 hay 3+ Kim.

## Build & Synergy

Roll mọi base type (prefix). Yêu cầu cứng: lò đặt đúng 2 linh khí Kim. Kết hợp `thunder-accelerate` (velocity Kim cao → chain jump giữa 2 Kim nhiều lần/ván) và `thunderclap` (proc sét từ cả 2 Kim). Nếu dùng `twin-flying-blade`, linh lực phụ Kim không tính là "linh khí trên board" nên không phá điều kiện đúng 2. Đạo Phái Kim thuần.
