---
id: arhat-wood-soul
ten: Tượng La Hán Mộc Hồn
type: statue
element: void
rarity: Rare
dropPool: Rare
tags: [tuong, la-han, set, wood, sustain]
---

# Tượng La Hán Mộc Hồn (`arhat-wood-soul`)

## Lược tả

Thành viên bộ **Thập Bát La Hán** (`eighteen-arhats`), hiện thân của Mộc hồn — vị La Hán tượng ngồi dưới gốc cổ thụ ngàn năm, rễ cây bện quanh toà sen, lá xanh rợp bóng. Trên board, tượng tạo trường Mộc linh: linh khí Mộc trong vòng ±150px được tăng sustain, và mỗi 10 hit Mộc vào bất kỳ linh khí, linh đan phục hồi 5% stability.

## Implicit

Linh khí Mộc trong bán kính ±150px được **+25% sustain** — tăng cường lượng stability heal mỗi khi linh lực Mộc kích hoạt heal trên chúng.

Sau mỗi **10 hit** của linh lực Mộc vào bất kỳ linh khí nào trong board: **heal linh đan +5% stability**.

Cơ chế combat-math: tương sinh Mộc→Thuỷ hoặc tương đồng Mộc→Mộc-đan đều kích hoạt stability heal (§2: sinh +5% stability/hit, đồng +2%/hit). Với +25% sustain, heal tương sinh thành +6.25% stability/hit và đồng hành thành +2.5%/hit. Ngoài ra, cứ 10 hit flat +5% stability = tương đương tương đồng thêm 1 hit Mộc miễn phí mỗi 10 hit — drip sustain ổn định.

Trong pháp trận 80-100 hit trung bình (§7 Example A), board Mộc với tượng này heal thêm ~8-10 lần × 5% = +40-50% stability extra. Đủ để chịu vài hit tương khắc Hoả→Mộc mà không bể.

## Affix pool

Tag roll trên `statue`:

| Affix slug | Tags | Vai trò trên Tượng La Hán Mộc Hồn |
|---|---|---|
| `statue-stabilize` | defensive, sustain | Giảm tương khắc vào linh khí Mộc gần — Mộc bị khắc bởi Kim, tượng này tạo lớp bảo vệ kép |
| `statue-four-spirit-aura` | elemental, aoe | Emit aura Mộc → tăng intensity linh khí Mộc lân cận, cộng hưởng với tương sinh Mộc→Thuỷ |
| `statue-beast-guard` | defensive, anti-corruption | Giảm Tâm Ma debuff tick — Mộc sustain build cần stability tịnh tiến, không bị interrupt liên tục |

## Build role

**Sustain backbone** cho build Mộc hoặc Mộc-Thuỷ tương sinh mid-to-late game.

- **Bộ Thập Bát La Hán** (`eighteen-arhats`): kết hợp với `arhat-water-spirit` để double sustain — Thuỷ dispel Tâm Ma, Mộc heal stability. Hai tượng cộng nhau biến Lò thành pháo đài.
- **Tương sinh Mộc→Thuỷ** (§1): linh khí Mộc sinh Thuỷ hit đan Thuỷ = +30% quality +5% stability/hit. Với +25% sustain trên Mộc, mỗi hit sinh còn heal thêm — vừa thăng quality vừa phục hồi stability.
- **Set Ngũ Hành** (`wuxing`): nếu dùng board đủ năm nguyên tố, Mộc là mắt xích Mộc→Hoả. Tượng này tăng sustain mắt xích Mộc trong chuỗi 5-cycle (+200% intensity §3).
- **Đạo Phái**: **Linh Sơn** (`spirit-mountain`) — echo Mộc nhân đôi số hit Mộc → heal double. Hoặc **Thái Cực** (`tai-chi`) nếu dùng Mộc làm trụ phòng thủ.
- **Combo**: `bodhi-branch` (`Cành Bồ Đề`) + `azure-dragon-statue` (`Tượng Thanh Long`) + `arhat-wood-soul` = triple Mộc sustain field. Mỗi hit Mộc qua Cành Bồ Đề +2%, qua Tượng Thanh Long +20% intensity, quanh Mộc Hồn +25% sustain — board cực bền.
