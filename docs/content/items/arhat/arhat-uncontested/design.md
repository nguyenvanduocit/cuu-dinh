---
id: arhat-uncontested
ten: Tượng La Hán Vô Tranh
type: statue
element: void
rarity: Legendary
dropPool: VeryRare
tags: [tuong, la-han, set, phong-an-safety]
---

# Tượng La Hán Vô Tranh (`arhat-uncontested`)

## Lược tả

Tượng pháp khí đứng đầu bộ **Thập Bát La Hán** (`eighteen-arhats`). La Hán ngồi kiết già, hai tay bắt ấn Vô Uý, mắt nhắm — tượng trưng cho đạo tâm bất động không tranh chấp với Phong Ấn. Khi bộ đủ tướng, Lò Luyện Đan trở thành không gian bất khả xâm phạm: linh khí Vô Cực trong bộ không bị khoá hay phá bởi tác động Phong Ấn.

## Implicit

Linh khí Vô Cực nào trong **bộ Thập Bát La Hán** (`eighteen-arhats`) đều **miễn toàn bộ tác động brick của Phong Ấn** trong suốt pháp trận.

Cơ chế combat-math: Phong Ấn (§0 meta-layer) thông thường khoá ngẫu nhiên linh khí khi condition trigger — với `arhat-uncontested` trong bộ, immunity áp dụng trước khi Phong Ấn roll, nên không có RNG nào để roll. Đây là hiệu ứng **tuyệt đối**, không phải giảm xác suất. Chỉ áp dụng cho linh khí mang nguyên tố **Vô Cực** — linh khí năm nguyên tố còn lại vẫn bị Phong Ấn bình thường.

Vì sao giới hạn Vô Cực: Vô Cực không tương sinh/tương khắc với đan (§1 matrix row `Vô Cực → n`), nên linh khí Vô Cực thường có vai trò utility/positioning — Phong Ấn khoá chúng gây mất kiểm soát board nặng hơn mất damage. Immunity đúng chỗ, không phá balance damage.

## Affix pool

Tag roll trên `statue`:

| Affix slug | Tags | Vai trò trên Tượng La Hán Vô Tranh |
|---|---|---|
| `statue-stabilize` | defensive, sustain | Tượng hấp thụ một phần tương khắc damage quanh bán kính — tăng durability khi đứng cạnh linh đan Vô Cực mỏng manh |
| `statue-four-spirit-aura` | elemental, aoe | Emit aura nguyên tố — trên tượng Vô Cực không lợi element match, nhưng tạo field neutral hỗ trợ linh khí khác |
| `statue-beast-guard` | defensive, anti-corruption | Giảm Tâm Ma debuff tick khi linh khí trong bộ bị tấn công — khớp vai trò guardian keystone của tượng này |

## Build role

**Anchor của bộ Thập Bát La Hán** — không phải piece DPS, mà là condition enabler cho cả bộ.

- **Set anchor**: `eighteen-arhats` yêu cầu tượng này trong Lò để kích hoạt bộ. Không có `arhat-uncontested` = bộ không đủ anchor = mọi La Hán khác mất set bonus.
- **Đạo Phái khớp nhất**: **Thái Cực** (`tai-chi`) — phong cách utility/control; và **Vô** (`void`) — khai thác linh khí Vô Cực tối đa.
- **Combo board**: đặt `arhat-uncontested` làm neo board, bao quanh bằng các La Hán khác (`arhat-water-spirit`, `arhat-wood-soul`, v.v.) để tối đa set bonus. Linh khí Vô Cực (vase, statue Vô Cực) đứng gần để hưởng immunity.
- **Map khắc nghiệt**: map T14-T16 với Thiên Kiếp mod thường có Phong Ấn surge — đây là lúc immunity có giá trị cao nhất. Board kiểm soát tốt hơn hẳn khi linh khí trụ cột không bị khoá bất ngờ.
- **Anti-synergy**: build đơn nguyên tố thuần (ví dụ Hoả 100%) không cần Vô Cực nhiều — immunity ít phát huy. Tượng này dành cho board đa nguyên tố hoặc Vô Cực chuyên biệt.
