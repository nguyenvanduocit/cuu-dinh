---
id: white-tiger-statue
ten: Tượng Bạch Hổ
type: statue
element: metal
rarity: Magic
dropPool: Uncommon
tags: [metal, aura]
---

# Tượng Bạch Hổ (`white-tiger-statue`)

## Lược tả

Tứ Tượng Kim phương Tây — tượng toả aura Kim trong bán kính ±100px, nâng intensity mọi linh khí Kim lân cận lên +15%. Trụ cốt của board Bạch Hổ Kim; ghép với Chu Tước Hoả thành bộ Tứ Tượng đối nghịch.

## Implicit

Aura passive: mọi **linh khí** mang `element = metal` trong bán kính ±100px nhận +15% intensity. Bonus áp vào `player_mult` (§2 Layer 2) — cộng tuyến tính với các nguồn khác trong layer.

**Lưu ý**: +15% thấp hơn `vermilion-bird-statue` (+25%) — cân bằng vì Kim có piercing và charge mechanic mạnh hơn Hoả base; tổng output Kim build không thấp hơn.

**Tứ Tượng Kim**: Bạch Hổ (Kim), Chu Tước (Hoả), Thanh Long (Mộc/Thuỷ), Huyền Vũ (Thổ/Thuỷ). Set `four-spirits` kích hoạt khi đủ 4 tượng Tứ Tượng trên board.

**Vai trò vật lý**: static statue, kích thước lớn. Aura constant passive AoE.

## Affix pool

Bias AffixTag `elemental` + `aoe` + `offensive`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `elemental` | Tăng aura intensity bonus | +15% → +22% (T3) cho linh khí Kim trong bán kính |
| `aoe` | Mở rộng bán kính aura | ±100px → ±130px (T3) |
| `offensive` | Aura thêm pierce chance | Linh khí Kim trong range: linh lực Kim qua đó có +10% chance pierce (không bị deflect) |
| `defensive` | Giảm Hoả khắc vào đan Kim | Khi aura active, tương khắc Hoả→Kim lên đan giảm stability damage 10% (§2 tương khắc -40% → -36%) |

Tags `metal, aura` → AffixTag chủ đạo `elemental, aoe`.

## Build role

**Archetype**: Tứ Tượng Kim / Bạch Hổ cluster — đặt làm trung tâm cluster Kim, khuếch đại tất cả linh khí Kim trong bán kính.

**Đạo Phái**: **Cửu Âm** (`nine-yin`) — Kim nặng, aura + Đạo Phái bonus stack mạnh; **Thái Cực** (`tai-chi`) — Kim sinh Thuỷ (§1), dùng aura build intensity Kim rồi chain sang Thuỷ.

**Combo Bạch Hổ xác nhận**:
- `white-tiger-statue` + `white-tiger-bead` + `white-tiger-sword`: bộ ba Bạch Hổ — tượng aura buff cả bead lẫn kiếm; kiếm split Kim → bead charge 2× nhanh → phun piercing intensity cao.
- `white-tiger-statue` + `silver-star-fan`: tượng buff fan (nếu fan có element Kim trong range), fan redirect Kim vào bead chính xác.
- `white-tiger-statue` + `metal-essence-inkstone` (nếu có): inkstone trail Kim + aura = cluster Kim dày, nhiều linh khí Kim trong range.
- Set **Tứ Linh** (`four-spirits`) 4-piece: Bạch Hổ là 1 trong 4 tượng — đặt `vermilion-bird-statue` + `azure-dragon-statue` + `black-tortoise-statue` đủ bộ.

**Anti-synergy**: board không có linh khí Kim trong ±100px — aura vô dụng; phải đặt tượng gần cluster Kim, không đặt ở góc trống.
