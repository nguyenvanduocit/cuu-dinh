---
id: arhat-bodhi
ten: Tượng La Hán Bồ Đề
type: statue
element: void
rarity: Legendary
dropPool: VeryRare
tags: [tuong, la-han, set, sustain]
---

# Tượng La Hán Bồ Đề (`arhat-bodhi`)

## Lược tả

Tượng La Hán ngồi dưới cội Bồ Đề — giác ngộ tích lũy qua từng ván sống sót, thổi thêm intensity vĩnh viễn vào mọi linh khí trong bộ. Snowball dài hạn nhất trong hệ La Hán.

## Implicit

Mỗi ván kết thúc với linh đan còn nguyên: `+1% intensity permanent` cho **tất cả linh khí đang trong bộ** (stack toàn pháp trận, không reset giữa các ván). Tối đa 7 ván trong pháp trận (5-8 ván + boss) → `+7% intensity` tích luỹ (combat-math §2: thêm vào `player.intensity_multiplier`). Vật lý: tượng ~2×3 ô, không phản linh lực — passive aura only.

## Affix pool

Dựa trên tags `[tuong, la-han, set, sustain]` và base type `statue`:
- **Prefix** (`sustain`, `offensive`, `elemental`): `+X% intensity bonus/ván sống sót (tăng rate)`, `stack giới hạn tăng +X ván`, `linh khí mới thêm vào bộ nhận intensity stack hiện tại ngay`
- **Suffix** (`sustain`, `defensive`, `utility`): `ván đầu pháp trận nhận stack ×2`, `linh đan stability +X% mỗi ván sống sót song song`, `% chance stack không mất khi linh đan gần bể (stability <20%)`

## Build role

**Archetype**: Snowball sustain / La Hán set long-game. Bồ Đề là core của build "càng sống lâu càng mạnh" — đặt sớm ván 1, đến boss ván 7-8 toàn bộ linh khí đã +6-7% intensity free. Kết hợp với **Tượng La Hán Cửu Tiêu** (`arhat-nine-heavens`, reset durability mỗi 9 hit) để linh khí không vỡ giữa chừng, giữ nguyên stack đến cuối. **Tượng La Hán Bất Hoại** (`arhat-indestructible`) là bảo hiểm thêm. Đạo Phái khớp: mọi archetype muốn compound — đặc biệt **Mộc Linh** (sustain heal theo thời gian) và **Hộ Pháp** (Thổ thick stability).
