---
id: black-tortoise-fury
ten: Hắc Quy Nổi Giận
category: prefix
tags: [offensive, elemental, chain]
element: water
weight: 60
---

# Hắc Quy Nổi Giận (`black-tortoise-fury`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +15% intensity Thuỷ; 10% chance chain jump tới linh khí gần nhất |
| T2 | +22% intensity Thuỷ; 12% chance chain jump |
| T3 | +30% intensity Thuỷ; 15% chance chain jump; chain +15% intensity |

## Tương tác

Bonus +intensity Thuỷ áp vào **player.intensity_multiplier** (§7.3 Lò affix layer). Chain jump 10–15% chance là **proc độc lập** — khi trigger, linh lực nhảy sang linh khí gần nhất (không giới hạn range riêng, dùng range mặc định). Mỗi chain hop tích +20% charge_factor chuẩn (§7.3) + T3 thêm +15% intensity per chain hop (additive trong player_mult layer). Thuỷ tương sinh với Mộc (Thuỷ→Mộc §7.1) — chain hit linh khí khác nhau có thể kích hoạt nhiều tương sinh/tương khắc khác nhau.

## Build & Synergy

Roll trên mọi item base type; element `water` → Tinh Hoa Thuỷ để force. Build **Thuỷ chain**:
- `azure-thunder-frost` (Thuỷ tương sinh intensity): cả hai trong player_mult layer → stack additive khi linh lực Thuỷ hit Mộc đan.
- `bead-chain` / `chain-link`: chain từ nhiều nguồn → linh lực Thuỷ nhảy nhiều hơn → charge_factor cao + black-tortoise-fury chain bonus.
- `charged-might` (intensity khi charge >= N hops): Thuỷ chain dài → charge cao → trigger `charged-might`.
- Đạo Phái **Thuỷ**: home build chain-Thuỷ, kết hợp passive tree node tăng chain proc rate.
