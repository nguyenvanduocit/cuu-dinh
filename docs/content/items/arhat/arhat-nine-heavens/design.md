---
id: arhat-nine-heavens
ten: Tượng La Hán Cửu Tiêu
type: statue
element: void
rarity: Rare
dropPool: Rare
tags: [tuong, la-han, set, sustain]
---

# Tượng La Hán Cửu Tiêu (`arhat-nine-heavens`)

## Lược tả

Tượng La Hán liên kết chín tầng trời — mỗi 9 hit, toàn bộ linh khí trong bộ được phục hồi durability về đầy. Counters map mod Huyết Sát triệt để hơn bất kỳ linh khí nào khác.

## Implicit

Mỗi **9 hit** (đếm tích luỹ từ mọi linh lực va chạm với linh khí bất kỳ trong bộ): `toàn bộ linh khí trong bộ reset durability về 100%` (combat-math §8: durability loss/hit — tượng này hồi hoàn toàn, không giảm dần). Đếm hit theo thứ tự toàn bộ bộ, không riêng từng linh khí. Không giới hạn số lần trigger/ván.

## Affix pool

Dựa trên tags `[tuong, la-han, set, sustain]` và base type `statue`:
- **Prefix** (`sustain`, `defensive`, `utility`): `trigger mỗi X hit (giảm threshold)`, `reset durability lên +X% trên 100% (overheal buffer)`, `trigger đồng thời heal đan stability +X%`
- **Suffix** (`defensive`, `sustain`, `anti-corruption`): `trigger lần đầu ván: toàn bộ linh khí được +X% intensity 5s`, `% chance trigger kép (2 reset liên tiếp)`, `linh khí durability không giảm trong 2s sau mỗi reset`

## Build role

**Archetype**: Durability-loop sustain / map-mod counter. Cửu Tiêu là item chuyên trị **Huyết Sát** (durability/hit) — với 60-80 hit/ván trung bình, tượng trigger ~6-8 lần, gần như duy trì durability đầy liên tục. Đặc biệt mạnh khi kết hợp với **Tượng La Hán Bất Hoại** (`arhat-indestructible`, crit không mất durability) — Bất Hoại chặn crit, Cửu Tiêu hồi non-crit. Kết hợp **Tượng La Hán Bồ Đề** (`arhat-bodhi`) để mỗi ván sống sót (dễ hơn nhờ durability đầy) → thêm +1% intensity. Đạo Phái: mọi archetype chạy map Huyết Sát.
