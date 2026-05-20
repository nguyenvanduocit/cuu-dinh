---
id: ancient-earth-box
ten: Hộp Đất Cổ
type: box
element: earth
rarity: Rare
dropPool: Rare
tags: [earth, store, charge, oneshot]
---

# Hộp Đất Cổ (`ancient-earth-box`)

## Lược tả

Hộp đất nung cổ tích lũy linh lực suốt cả ván không nhả — đến khi ván kết thúc, bùng phát một lần với `×3 intensity`. Một-hit-kill nhưng chỉ một cơ hội.

## Implicit

**Long-store charge**: linh lực vào hộp không ra trong ván (hấp thụ toàn bộ). Đến cuối ván (trigger "ván kết thúc"), hộp release toàn bộ linh lực đã tích với `intensity ×3` (combat-math §2: charge +20%/hop, tích đủ 10 hop = +200%; ×3 multiplier cộng thêm trên đỉnh đó — tổng có thể ×5+ trên một búng dài). Linh lực release nhắm thẳng linh đan. Nếu linh đan đã đạt phẩm cấp target trước khi hộp mở, bonus bị lãng phí.

## Affix pool

Dựa trên tags `[earth, store, charge, oneshot]` và base type `box`:
- **Prefix** (`offensive`, `elemental`, `crit`): `release multiplier +X%`, `linh lực release gain +X% crit chance`, `+X% intensity mỗi ván qua (stack toàn pháp trận)`
- **Suffix** (`utility`, `sustain`, `seal-safety`): `% chance release sớm vào mid-ván (random trigger)`, `linh lực release +X% stability heal nếu đan element khớp Thổ`, `giảm X% chance bể linh đan khi release`

## Build role

**Archetype**: Thổ oneshot / burst cuối ván. Dành cho build muốn "dồn điểm cuối ván" — đặt hộp sớm để nó hút linh lực cả ván, boss ván cuối ăn trọn burst. Cực mạnh với map mod **Thiên Lệ** (stability cap 50%) vì cuối ván stability thấp → release một phát quality bùng. Kết hợp với **Tượng La Hán Thổ Cốc** (`arhat-earth-grain`, charge speed Thổ +25%) để linh lực tích nhiều hơn trước khi hút vào hộp. Nguy hiểm: nếu bị gián đoạn ván (thua sớm), hộp mở trống → mất toàn bộ linh lực tích. Đạo Phái: **Hộ Pháp** (Thổ arc, burst theo Thổ cycle).
