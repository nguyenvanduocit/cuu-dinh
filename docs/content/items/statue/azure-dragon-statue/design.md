---
id: azure-dragon-statue
ten: Tượng Thanh Long
type: statue
element: wood
rarity: Magic
dropPool: Uncommon
tags: [wood, aura]
---

# Tượng Thanh Long (`azure-dragon-statue`)

## Lược tả

Tượng Thanh Long đứng trên toà đài mây xanh, thân rồng uốn lên — Đông phương Mộc thần trong Tứ Tượng. Trên board, tượng phát ra **Mộc aura**: mọi linh khí Mộc trong vòng ±100px nhận +20% intensity, biến đây thành trạm khuếch đại cho toàn bộ linh khí Mộc lân cận.

## Implicit

Mọi **linh khí Mộc** trong bán kính ±100px nhận **+20% intensity** cho tất cả linh lực Mộc đi qua chúng.

Cơ chế combat-math: +20% intensity là additive vào `player_mult` (§2), tương đương với ~1 node tree intensity nhỏ (§3: tree nodes 0-200%). Nhưng nó áp dụng cho *tất cả* linh khí Mộc trong range — nếu có 3 linh khí Mộc trong ±100px, tất cả đều được buff. Tổng hiệu quả = 3 × 20% = 60% intensity extra được phân phối qua chain Mộc.

Aura là **passive, permanent** trong pháp trận — không có cooldown, không tắt. Positioning tượng ở trung tâm cluster Mộc quan trọng để maximize số linh khí trong range.

## Affix pool

Tag roll trên `statue`:

| Affix slug | Tags | Vai trò trên Tượng Thanh Long |
|---|---|---|
| `statue-stabilize` | defensive, sustain | Giảm tương khắc damage quanh aura — Mộc bị khắc Kim, nếu có Kim trên board thì đây là lớp bảo vệ |
| `statue-four-spirit-aura` | elemental, aoe | Mở rộng hoặc tăng cường aura nguyên tố — kết hợp với Mộc aura sẵn có để tạo field Mộc mạnh hơn |
| `statue-beast-guard` | defensive, anti-corruption | Giảm Tâm Ma debuff trong aura — bảo vệ linh khí Mộc khỏi bị debuff làm yếu intensity |

## Build role

**Intensity amplifier trung tâm** cho mọi build có ít nhất 2-3 linh khí Mộc trên board.

- **Tứ Linh set** (`four-spirits`): cùng với `azure-dragon-bead`, đây là đôi Mộc của bộ Tứ Linh. Tượng tăng intensity cho bead → bead hit Mộc mạnh hơn → heal nhiều hơn.
- **Set Ngũ Hành** (`wuxing`): trong chuỗi 5-cycle, Mộc là mắt xích Mộc→Hoả. Tượng Thanh Long tăng intensity mắt xích Mộc → toàn chuỗi 5-cycle (+200% §3) hiệu quả hơn.
- **Combo `arhat-wood-soul`**: Mộc Hồn +25% sustain × Tượng Thanh Long +20% intensity → Mộc linh khí vừa mạnh vừa bền. Hai tượng complement nhau hoàn toàn — một tăng output, một tăng durability.
- **Đạo Phái**: **Linh Sơn** (`spirit-mountain`) — echo Mộc nhân intensity × 2 trên top của +20% aura = echo hit tới 1.2 × 2 = 2.4× base. Cuồng lực.
- **Anti-synergy**: board đơn nguyên tố không-Mộc — aura vô dụng. Nhưng ở build đa nguyên tố, chỉ cần 2 linh khí Mộc là có lợi rõ ràng.
