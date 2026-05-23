---
id: vermilion-bird-statue
ten: Tượng Chu Tước
type: statue
element: fire
rarity: Magic
dropPool: Uncommon
tags: [fire, aura]
---

# Tượng Chu Tước (`vermilion-bird-statue`)

## Lược tả

Tứ Tượng Hoả phương Nam — tượng toả aura Hoả trong bán kính ±100px, nâng intensity mọi linh khí Hoả lân cận lên +25%. Trụ cốt của board Hoả thuần; ghép với Bạch Hổ Kim thành Tứ Tượng đối nghịch.

## Implicit

Aura passive: mọi **linh khí** mang `element = fire` trong bán kính ±100px nhận +25% intensity. Bonus này áp vào `player_mult` (§2 Layer 2) — cộng vào `player.lò_intensity_affix` hoặc tương đương trên board. Stack với các nguồn `player_mult` khác (cộng tuyến tính trong layer).

**Lưu ý**: aura buff linh *khí* (các static objects trên board), không buff trực tiếp linh *lực* (balls). Hiệu quả: linh lực đi qua linh khí được buff → intensity của hit đó tăng.

**Tứ Tượng Hoả**: một trong bộ Tứ Tượng — Chu Tước (Hoả), Bạch Hổ (Kim), Thanh Long (Mộc), Huyền Vũ (Thuỷ/Thổ). Set `four-spirits` kích hoạt khi đủ 4 tượng Tứ Tượng trên board.

**Vai trò vật lý**: static statue, kích thước lớn hơn bead/fan. Aura là constant AoE passive.

## Affix pool

Bias AffixTag `elemental` + `aoe` + `defensive`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `elemental` | Tăng aura intensity bonus | +25% → +35% (T3) cho linh khí Hoả trong bán kính |
| `aoe` | Mở rộng bán kính aura | ±100px → ±130px (T3) — phủ nhiều linh khí Hoả hơn |
| `defensive` | Giảm khắc Thuỷ vào đan | Khi aura active, linh lực Thuỷ chạm đan Hoả: stability damage giảm 10% (§2 tương khắc -40% → -36%) |
| `sustain` | Aura heal stability | Mỗi giây tượng active: +0.5 stability linh đan (passive tick) |

Tags `fire, aura` → AffixTag chủ đạo `elemental, aoe`.

## Build role

**Archetype**: Tứ Tượng Hoả / Hoả thuần aura — đặt làm trung tâm cluster Hoả để khuếch đại toàn bộ linh khí Hoả xung quanh.

**Đạo Phái**: **Linh Sơn** (`spirit-mountain`) — echo Hoả được buff bởi aura khi xuất hiện trong bán kính; **Hư Vô** (`void`) — Vô Cực không bị ảnh hưởng aura nhưng cũng không cản.

**Combo xác nhận**:
- `vermilion-bird-statue` + `red-lantern` + `vermilion-cauldron`: tam giác Hoả — tượng aura +25% cho cả đèn và đỉnh, đỉnh +35% intensity Hoả cho linh lực tới đan → stack mạnh trong Layer 2.
- `vermilion-bird-statue` + `fire-phoenix-bead` + `fire-dragon-sword`: cluster Hoả dày — aura tượng phủ nhiều linh khí Hoả, chuỗi hit Hoả liên tục với intensity cao.
- Set **Tứ Linh** (`four-spirits`) 4-piece: Chu Tước là 1 trong 4 tượng cần thiết — khi đủ bộ, +30% intensity element match toàn board (§3 set bonus).

**Anti-synergy**: board ít linh khí Hoả — aura vô dụng nếu không có linh khí Hoả trong ±100px; phải đảm bảo bố trí board Hoả trước khi đặt tượng.
