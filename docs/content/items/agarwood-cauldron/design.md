---
id: agarwood-cauldron
ten: Đỉnh Trầm Hương
type: cauldron
element: earth
rarity: Magic
dropPool: Uncommon
tags: [earth, aura, heal]
---

# Đỉnh Trầm Hương (`agarwood-cauldron`)

## Lược tả

Đỉnh đúc từ gỗ trầm hoá thạch nghìn năm, hương khí thấm vào đan phòng như lớp mật bảo vệ. Mỗi linh lực Thổ chạm vào đây thêm một lớp ổn định trực tiếp vào linh đan đang luyện.

## Implicit

Linh lực Thổ va chạm đỉnh: `intensity +30%` (Thổ amplify tương sinh — khớp combat-math §4.2 amplify same-element) + `đan stability heal +3%` mỗi hit (cộng dồn lên stability baseline +5% của tương sinh Thổ). Linh lực phi-Thổ phản bình thường, không nhận bonus. Vật lý: đỉnh ~2×2 ô, linh lực nảy góc phản xạ gương, không hấp thụ.

## Affix pool

Dựa trên tags `[earth, aura, heal]` và base type `cauldron`:
- **Prefix** (`offensive`, `elemental`, `sustain`): `+X% intensity Thổ lực`, `% chance nhân đôi stability heal`, `đan stability cap +X%`
- **Suffix** (`defensive`, `sustain`, `aoe`): `slow linh lực X% sau va chạm với đỉnh`, `aura heal ±100px linh khí lân cận +1% stability/s`, `giảm stability loss khi bị Mộc tương khắc X%`

## Build role

**Archetype**: Thổ-sustain / stability-stacking. Phù hợp nhất với board route linh lực Thổ qua đỉnh nhiều lần trước khi đến linh đan — mỗi bounce tích lũy stability heal. Kết hợp với **Tượng La Hán Thổ Cốc** (`arhat-earth-grain`, charge speed Thổ +25% + stability cap +15%) để tối đa hóa cả hai mặt. Đạo Phái khớp: **Hộ Pháp** (Thổ→Mộc branch, thick stability). Điểm yếu: map mod **Đại Khắc** (50% linh lực flip sang tương khắc) làm loãng Thổ → mất heal, cần kèm **Tượng La Hán Sa Môn** (`arhat-shramana`) để chặn stability loss.
