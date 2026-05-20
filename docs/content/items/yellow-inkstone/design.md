---
id: yellow-inkstone
ten: Nghiên Mực Hoàng
type: inkstone
element: earth
rarity: Common
dropPool: Common
tags: [earth, trail, loot]
---

# Nghiên Mực Hoàng (`yellow-inkstone`)

## Lược tả

Nghiên Thổ để lại trail bụi vàng — linh lực đi vào vùng trail nhận bonus loot drop rate. Không buff intensity, không đổi element — chỉ làm giàu. Linh khí farm-oriented thuần tuý.

## Implicit

Linh lực đi qua nghiên để lại **trail bụi vàng Thổ** kéo dài 4 giây. Mọi linh lực khác đi vào trail: nhận flag `loot_boosted = true` cho hit tiếp theo. Khi linh lực `loot_boosted` chạm linh đan hoặc linh khí loot-source: +20% drop rate cho loot drop tại thời điểm đó.

Trail không thay đổi `element`, `velocity`, hay `charge_count` của linh lực đi qua — chỉ gắn flag loot.

**Vai trò vật lý**: inkstone static, trail là hitbox line tồn tại 4s. Hiệu quả nhất khi đặt trên đường đi chính của linh lực — mọi linh lực đều pass qua trail.

## Affix pool

Bias AffixTag `currency-control` + `utility` + `sustain`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `currency-control` | Tăng loot drop rate | +20% → +35% (T3) drop rate khi `loot_boosted` |
| `utility` | Tăng thời gian trail | 4s → 6s (T3) — linh lực có nhiều cơ hội đi vào trail |
| `sustain` | Trail heal stability | Linh lực đi vào trail Thổ: +0.3 stability/hit (§5 heal nhỏ) |
| `elemental` | Convert linh lực sang Thổ | Linh lực đi vào trail nhận `element = earth` — kết hợp loot + convert |

Tags `earth, trail, loot` → AffixTag chủ đạo `currency-control, utility`.

## Build role

**Archetype**: Loot-farm / Thổ utility — đặt để tối đa hoá drop rate trong run, không tối ưu quality push. Dùng T1-T8 khi cần farm currency để gambling.

**Đạo Phái**: mọi Đạo Phái — nghiên không gắn archetype offensive; đặc biệt hữu ích với **Thái Cực** (`tai-chi`) hoặc **Cửu Âm** (`nine-yin`) khi những build này cần currency để Lò gambling.

**Combo xác nhận**:
- `yellow-inkstone` + `secret-realm-inkstone`: trail bụi vàng + trail ngũ sắc random — linh lực qua cả hai trail nhận loot boost + element random bonus.
- `yellow-inkstone` + `yellow-earth-bead`: trail Thổ + bead Thổ stagger — linh lực qua trail Thổ rồi dừng ở bead +30% intensity = loot-boosted hit mạnh.
- `yellow-inkstone` + `yellow-qilin-statue`: tượng Lân +20% stability max — phòng thủ khi farm, không phải push quality; chịu được nhiều ván hơn.
- Farm build T3-T6: đặt nghiên trên đường đi chính, để mọi linh lực tự nhiên đi qua trail → mỗi hit vào đan đều có loot boost.

**Anti-synergy**: build push quality nhanh (T14+ speedrun) — loot bonus không giúp ích cho quality race; dùng intensity booster thay thế.
