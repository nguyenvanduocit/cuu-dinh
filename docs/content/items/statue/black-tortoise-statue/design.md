---
id: black-tortoise-statue
ten: Tượng Hắc Quy
type: statue
element: water
rarity: Magic
dropPool: Uncommon
tags: [water, counter, aura]
---

# Tượng Hắc Quy (`black-tortoise-statue`)

## Lược tả

Tượng Huyền Vũ — rùa đen vồng mai lên, rắn quấn quanh — trấn giữ Bắc phương Thuỷ thần trong Tứ Tượng. Trên board, tượng phát ra **Thuỷ protective aura**: mọi linh khí trong bán kính ±200px nhận giảm 30% damage tương khắc, tạo vùng an toàn rộng nhất trong game.

## Implicit

Mọi linh khí trong bán kính ±200px: **giảm 30% damage tương khắc** từ mọi nguồn linh lực khắc element.

Cơ chế combat-math: tương khắc hit thông thường -intensity × 0.40 stability (§2). Với giảm 30%: effective = -intensity × 0.40 × 0.70 = -intensity × 0.28. Đại khắc (§1 double-khắc chain) thông thường -intensity × 0.80; với giảm 30%: -intensity × 0.56. Vẫn nặng nhưng không tức chết nếu đan gần 0 stability.

Range ±200px là lớn nhất trong các statue aura — thực tế bao phủ gần một nửa board standard. Positioning linh flexible: có thể đặt ở trung tâm hoặc cạnh linh đan để bảo vệ đan trực tiếp.

## Affix pool

Tag roll trên `statue`:

| Affix slug | Tags | Vai trò trên Tượng Hắc Quy |
|---|---|---|
| `statue-stabilize` | defensive, sustain | Thêm lớp giảm thiệt hại khi linh khí bị va chạm — stacks với aura 30% để tạo bức tường phòng thủ dày |
| `statue-four-spirit-aura` | elemental, aoe | Emit Thuỷ aura — tăng cường Mộc→Thuỷ sinh trong vùng, kết hợp phòng thủ + sinh |
| `statue-beast-guard` | defensive, anti-corruption | Giảm Tâm Ma debuff tick trong aura — Huyền Vũ chuyên phòng thủ, beast guard amplifies điều đó |

## Build role

**Defensive anchor** cho mọi build cần chịu đòn, đặc biệt T14-T16 Thiên Kiếp.

- **Tứ Linh set** (`four-spirits`): cặp với thành viên Thuỷ — cùng `black-phoenix-fan` hoặc `dark-nectar-vase` để hình thành mảnh Thuỷ trong bộ. Set bonus +30% intensity element match khi đủ 4 thành viên.
- **Map Thiên Kiếp** (T14-T16, §5): Thiên Kiếp wave -50 stability nếu unprotected. Với giảm 30% tương khắc, các hit phụ trước Thiên Kiếp wave nhẹ hơn — giữ stability đủ cao để chịu được wave chính.
- **Đối phó đại khắc** (§1): khi board có chain dẫn đến đại khắc, aura giảm -80% thành -56% → brick chance giảm theo (§2: chance at stability < 25% kích hoạt, aura giúp stability ít khi xuống dưới 25%).
- **Đạo Phái**: **Thái Cực** (`tai-chi`) — phong cách phòng thủ, Thái Cực có thể tái sinh linh khí và chuyển đổi damage, kết hợp với aura Hắc Quy tạo wall mạnh nhất game.
- **Combo board**: `black-tortoise-statue` + `demon-ward-talisman` + `arhat-uncontested` = triple defensive layer. Giảm tương khắc + Phong Ấn immunity + La Hán set bonus — board gần như bất khả xâm phạm.
