---
id: all-element-slaughter
ten: Vũ Khí Toàn Sát
category: prefix
tags: [offensive]
weight: 100
---

# Vũ Khí Toàn Sát (`all-element-slaughter`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +18% intensity cho tất cả linh lực bất kể nguyên tố |
| T2 | +26% intensity tất cả linh lực |
| T3 | +35% intensity tất cả linh lực |

## Tương tác

Bonus +intensity áp vào **player.intensity_multiplier** (§7.3, Lò affix layer) — cộng additive với các prefix intensity khác cùng layer (T1 +18%, T2 +26%, T3 +35%). Không phân biệt nguyên tố → áp dụng cho tương sinh, tương khắc, trung tính như nhau. Không nhân chéo với element-specific affix (vd `azure-dragon-wrath`); stack additive trong cùng bucket. Không có cap riêng — tổng `player_mult` bị trần chung toàn game.

## Build & Synergy

Roll trên mọi item base type (không có `compatibleItemTypes` ràng buộc). Affix element-neutral → phù hợp nhất với:
- Build **Void** (elementless) hoặc build không có element cố định.
- Build **đa nguyên tố** (`wuxing-chain`, `wuxing-convert-power`) muốn tất cả hit đều mạnh đều.
- Tránh dùng khi đã có nhiều element-specific prefix: slot prefix có hạn, `azure-dragon-wrath` hay `blazing-corruption-bane` mang thêm utility ngoài intensity.
- Combo tốt với `boundless-slaughter` (cộng thêm scaling theo board size) và keystone **Sắc Bén** (×3 crit multi — intensity nền cao = crit càng đau).
