---
id: azure-dragon-bead
ten: Châu Thanh Long
type: bead
element: wood
rarity: Magic
dropPool: Uncommon
tags: [wood, sustain, charge]
---

# Châu Thanh Long (`azure-dragon-bead`)

## Lược tả

Hạt châu màu lục ngọc, bên trong ánh lên vân gỗ cổ thụ ngàn năm. Linh khí thụ động mang nguyên tố Mộc — Thanh Long trong tứ tượng (Đông phương Mộc thần). Trên board, châu tích luỹ Mộc lực theo số lần bị hit, và mỗi 5 hit xả một lần heal stability cho linh đan.

## Implicit

Bead tích luỹ **Mộc lực** passively. Mỗi khi linh lực Mộc chạm vào bead đủ **5 lần**: bead xả, **heal linh đan +10% stability**.

Cơ chế combat-math: đây là **counter-based heal** khác với drip heal của `bodhi-branch`. Mỗi hit Mộc vào bead cộng 1 charge; charge 5 → xả +10% stability. So sánh §5: tương sinh hit heal +5%/hit (tổng 5 hit sinh = +25% stability, nhưng phụ thuộc element matching). Bead này heal 10% chỉ từ đếm — không cần element linh đan match Mộc.

Bead là **linh khí thụ động** (không chuyển hướng, không phát ra) — nằm trên board như điểm đếm. Vì vậy cần linh lực Mộc khác trên board bắn qua bead để kích hoạt. Positioning bead giữa luồng Mộc quan trọng.

## Affix pool

Tag roll trên `bead`:

| Affix slug | Tags | Vai trò trên Châu Thanh Long |
|---|---|---|
| `bead-chain` | chain, utility | Khi bị hit, redirect linh lực sang linh khí kế tiếp — biến bead thành trạm relay, tăng chain length (§2 charge_count) |
| `bead-absorb` | elemental, defensive | Hấp thụ một phần intensity của hit vào bead — giảm spillover, giữ board ổn định |
| `bead-energy-burst` | offensive, elemental | Khi xả (đủ charge), phát một burst Mộc nhỏ ra xung quanh — cộng hưởng với lần heal để có thêm hit Mộc bổ sung |

## Build role

**Sustain node** cho build Mộc hoặc board đa nguyên tố cần floor stability.

- **Tứ Linh set** (`four-spirits`): Châu Thanh Long là thành viên Mộc của bộ Tứ Linh. Khi đủ 4 thành viên (Thanh Long Mộc, Bạch Hổ Kim, Chu Tước Hoả, Huyền Vũ Thuỷ), set bonus +30% intensity element match (§3). Thanh Long đặc biệt đóng góp heal cho bộ.
- **Kết hợp `azure-dragon-statue`**: Tượng Thanh Long cho Mộc linh khí +20% intensity → linh lực Mộc mạnh hơn → hit bead Thanh Long nhiều hơn → heal nhanh hơn. Hai piece synergy tự nhiên.
- **Đạo Phái**: **Linh Sơn** (`spirit-mountain`) — echo Mộc nhân đôi số hit Mộc vào bead → charge 5 đạt nhanh hơn, heal rate × 2.
- **Board Mộc sustain**: ghép với `bodhi-branch` + `arhat-wood-soul` để heal drip + heal burst. Bodhi drip +2%/hit, Mộc Hồn +6.25%/hit sinh (enhanced), Châu burst +10%/5 hit — ba lớp sustain.
- **Map Tâm Ma**: heal +10% mỗi 5 hit Mộc bù đắp cho Tâm Ma debuff tick -1/giây (§5). Trên board Mộc nhanh (~10 hit/giây), 2 lần xả/giây = +20% stability/giây — vượt Tâm Ma drain.
