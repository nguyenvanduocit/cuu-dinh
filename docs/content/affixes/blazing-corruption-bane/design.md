---
id: blazing-corruption-bane
ten: Tất Diệu Bùng Cháy
category: prefix
tags: [offensive, elemental, anti-corruption]
element: fire
weight: 40
---

# Tất Diệu Bùng Cháy (`blazing-corruption-bane`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% intensity Hoả; hit boss Tâm Ma +30% bonus intensity |
| T2 | +28% intensity Hoả; boss Tâm Ma +45% bonus |
| T3 | +38% intensity Hoả; boss Tâm Ma +60% bonus; 5% chance thiêu cháy boss -10% defense |

## Tương tác

Hai bonus tách biệt: (1) +intensity Hoả áp vào **player.intensity_multiplier** (§7.3) — luôn hoạt động khi linh lực Hoả. (2) Bonus vs Tâm Ma boss: cộng thêm vào cùng layer, chỉ khi mục tiêu là boss `heart-demon` (§7.4). T3: 5% chance thiêu cháy giảm -10% defense boss — áp vào lớp defense reduction tương tự `armor-break-blaze`. Hoả tương khắc Kim (Hoả→Kim §7.1) → phá linh khí Kim, hại linh đan Kim. Weight 40 (rare).

## Build & Synergy

Roll trên mọi item base type; element `fire` → Tinh Hoa Hoả. Build **Hoả anti-Tâm Ma**:
- `annihilation` + `corruption-assassin` + `blazing-corruption-bane`: ba prefix anti-Tâm Ma cộng additive trong player_mult layer → total +120–180% vs Tâm Ma. Bộ ba này là meta cho pháp trận `Tâm Ma`.
- `raging-fire` / `hundred-fire-phoenix` (nếu trong pool): cộng thêm Hoả intensity thuần.
- Tinh Hoa Hoả force roll affix Hoả → đảm bảo Hoả element prefix cho build.
- Yếu vs Dị Tượng / Thiên Kiếp boss (không phải Tâm Ma) — chỉ giữ bonus Hoả thuần.
