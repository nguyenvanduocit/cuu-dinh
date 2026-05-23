---
id: faceless-statue
ten: Tượng Vô Diện
type: statue
element: void
rarity: Magic
dropPool: Uncommon
tags: [void, convert, aoe]
---

# Tượng Vô Diện (`faceless-statue`)

## Lược tả

Tượng nhẵn bóng không có bất kỳ đặc điểm nào trên mặt — không mắt, không mũi, không miệng. Linh khí Vô Cực với cơ chế **element strip**: mọi linh lực đi qua bán kính 100px đều bị xoá sạch nguyên tố, trở thành "neutral" — không có element, không tương sinh không tương khắc. Đây là công cụ mạnh nhất để neutralise board khi mọi thứ đang không kiểm soát được.

## Implicit

Mọi linh lực đi qua **bán kính 100px** xung quanh tượng: **mất element** (trở thành neutral — không thuộc Kim/Mộc/Thuỷ/Hoả/Thổ/Vô).

Cơ chế combat-math: neutral element tương tác với đan theo §2 trung tính: +intensity × 0.05 quality — không sinh, không khắc, không đồng hành. Đây là mức thấp nhất nhưng cũng an toàn nhất. Một hit neutral không bao giờ gây stability damage.

Khác với `chaos-elixir-vase` (convert sang Vô Cực — vẫn là element), tượng Vô Diện strip về "không element" — neutral thuần. Vô Cực theo §1 vẫn có ≡ với Vô Cực-đan; neutral không có ≡ với bất kỳ đan nào.

Range 100px là AoE — tất cả linh lực đi qua vùng đó đều bị ảnh hưởng, không chỉ linh lực chạm tượng.

## Affix pool

Tag roll trên `statue`:

| Affix slug | Tags | Vai trò trên Tượng Vô Diện |
|---|---|---|
| `statue-stabilize` | defensive, sustain | Giảm tương khắc trong aura — cộng hưởng: tượng xoá element để neutralise, affix giảm damage nếu có linh lực khắc lọt qua trước khi bị strip |
| `statue-four-spirit-aura` | elemental, aoe | Emit aura nguyên tố — ironic: tượng vô diện nhưng aura có element. Có thể convert neutral linh lực ra vừa bị strip thành element mới |
| `statue-beast-guard` | defensive, anti-corruption | Giảm Tâm Ma debuff — phòng thủ kép trong vùng neutral |

## Build role

**Emergency neutraliser** và **chain purity keeper** cho build cần board sạch element.

- **Ngăn đại khắc** (§1): đại khắc xảy ra khi chain tích lũy 2 lớp khắc. Đặt tượng Vô Diện trên chain — linh lực bị strip element trước khi gây đại khắc. Không element = không khắc = không đại khắc.
- **Board Vô Cực kết hợp**: xoá element → feed vào `chaos-elixir-vase` → convert sang Vô Cực. Hai linh khí cộng thêm = pipeline neutral→Vô Cực hoàn chỉnh mà không cần linh lực Vô Cực nguồn.
- **"Clean room" zone**: đặt tượng gần linh đan, strip mọi linh lực trước khi chúng hit đan. Linh đan nhận toàn neutral hits = +5%/hit quality, không bao giờ mất stability từ va chạm. Trade-off: cũng mất tương sinh (+30%).
- **Đạo Phái**: **Vô** (`void`) — Vô Cực chuyên biệt, đồng bộ với philosophy neutral/void. Hoặc **Thái Cực** (`tai-chi`) nếu dùng như emergency control.
- **Anti-synergy**: build dựa hoàn toàn vào tương sinh (+30% quality) — tượng xoá mọi tương sinh. Không dùng cho board sinh thuần.
