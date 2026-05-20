---
id: frost-water-control
ten: Thuỷ Cuồng Hàn Ngự
category: prefix
tags: [offensive, elemental, aoe]
element: water
weight: 40
---

# Thuỷ Cuồng Hàn Ngự (`frost-water-control`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +22% intensity Thuỷ; 8% chance đóng băng linh khí 0.8s giải phóng +20% AOE |
| T2 | +30% intensity Thuỷ; 12% chance đóng băng; +28% AOE khi giải phóng |
| T3 | +40% intensity Thuỷ; 15% chance đóng băng; +38% AOE; đóng băng lan sang linh khí lân cận 60px |

## Tương tác

Đóng băng linh khí (không phải linh lực): linh khí bị frozen không trigger affix và không convert element trong 0.8s. Khi giải phóng, linh khí phát AOE intensity xung quanh — nhân vào **velocity_factor** hiện tại của mọi linh lực trong vùng. T3 lan sang linh khí lân cận 60px: chain freeze — linh khí A freeze → giải phóng → AOE chạm linh khí B → B cũng freeze → giải phóng sau 0.8s. Cần spacing ≤60px để chain hoạt động.

## Build & Synergy

Roll trên **bead** hoặc **vase** (Thuỷ). Combo cực mạnh với `frenzy-frost-ice` (freeze linh lực → velocity spike khi tan → kích AOE giải phóng của frost-water-control). Đặt 2 linh khí Thuỷ cách nhau <60px để chain freeze T3. Affix `great-wave-spread` trên linh khí thứ 3 khuếch đại AOE wave sau freeze release. Cẩn thận: linh khí bị frozen 0.8s không convert — nếu linh đan cần continuous Thuỷ convert thì avoid freeze chính linh khí convert. Đạo Phái Thuỷ AOE build.
