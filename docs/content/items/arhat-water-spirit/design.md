---
id: arhat-water-spirit
ten: Tượng La Hán Thuỷ Linh
type: statue
element: void
rarity: Rare
dropPool: Rare
tags: [tuong, la-han, set, water, chain]
---

# Tượng La Hán Thuỷ Linh (`arhat-water-spirit`)

## Lược tả

Thành viên bộ **Thập Bát La Hán** (`eighteen-arhats`), chuyên về Thuỷ linh — vị La Hán ngồi giữa đài sen, nước rỉ từ bàn tay xuống chân tượng không ngừng nghỉ. Trên board, tượng này tạo ra **trường Thuỷ** ảnh hưởng linh khí trong vòng ±150px: kéo dài chain và phân giải Tâm Ma debuff tích luỹ.

## Implicit

Linh khí Thuỷ trong bán kính ±150px được **+25% chain length** — mỗi hop chain của linh lực Thuỷ qua linh khí đó cộng thêm 25% khoảng di chuyển so với bình thường.

Sau mỗi **7 hit** của linh lực Thuỷ vào bất kỳ linh khí nào trong board: **dispel 1 stack Tâm Ma debuff** trên linh đan.

Cơ chế combat-math: chain length kéo dài → linh lực có thêm thời gian tích luỹ `charge_count` (§2: +20%/hop). Giả sử baseline 4 hop → thêm 25% = ~5 hop, mỗi hop thêm +20% intensity → tổng intensity hit cuối tăng ~20% so với không có tượng. Điều này không phải multiplier trực tiếp nhưng cộng hưởng với build chain dài.

Dispel Tâm Ma: §5 nêu Tâm Ma debuff tick -1 stability/giây — 1 stack dispel mỗi 7 hit Thuỷ tương đương ~1 giây bảo vệ stability liên tục trên board Thuỷ nhanh. Không phải heal, chỉ ngăn drain.

## Affix pool

Tag roll trên `statue`:

| Affix slug | Tags | Vai trò trên Tượng La Hán Thuỷ Linh |
|---|---|---|
| `statue-stabilize` | defensive, sustain | Giảm tương khắc damage trong aura — Thuỷ bị khắc bởi Thổ, tượng này ở gần giảm thiệt hại khi gặp board Thổ |
| `statue-four-spirit-aura` | elemental, aoe | Emit Thuỷ aura — tăng cường tương sinh Mộc→Thuỷ nếu có linh khí Mộc gần đó |
| `statue-beast-guard` | defensive, anti-corruption | Giảm Tâm Ma debuff tick — cộng thêm vào dispel 7-hit, giảm damage Tâm Ma doubly |

## Build role

**Chain sustain + Tâm Ma counter** cho build Thuỷ mid-game.

- **Bộ Thập Bát La Hán** (`eighteen-arhats`): ghép với `arhat-uncontested` (anchor) và các La Hán khác để đủ bộ. Set bonus tăng khi có nhiều thành viên hơn.
- **Tương sinh Mộc→Thuỷ**: Thuỷ chain dài → mỗi hop cộng +20% intensity (§2) → hit cuối lên Thuỷ-đan: +30% quality + +5% stability (§2 sinh formula). Với chain 5+ hop, một run Thuỷ tốt có thể thăng Linh phẩm trong 1 combo.
- **Đạo Phái**: **Linh Sơn** (`spirit-mountain`) — Hồi Vang echo nhân Thuỷ hit × 2, kéo dài chain thêm; hoặc **Tử Vi** (`ziwei`) nếu ghép với crit Thuỷ-Mộc.
- **Combo board**: Đặt `azure-dragon-statue` (`Tượng Thanh Long`) gần để Mộc linh khí khác được +20% intensity, rồi Mộc sinh Thuỷ feed đan — kép sinh.
- **Map Tâm Ma**: T6-T13 Tâm Ma mod thường debuff liên tục — dispel 7-hit giúp board Thuỷ vừa chain vừa tự clean. Thiếu dispel, stability về 0 trước khi đan đủ quality.
