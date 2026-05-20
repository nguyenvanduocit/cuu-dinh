---
id: ancient-metal-box
ten: Hộp Cổ Kim Khí
type: box
element: metal
rarity: Common
dropPool: Common
tags: [metal, store, charge]
---

# Hộp Cổ Kim Khí (`ancient-metal-box`)

## Lược tả

Hộp kim khí rèn từ thép cổ — giữ linh lực 2 giây rồi nhả ra mạnh hơn. Điểm charge ngắn, dễ tích hợp vào chain, không khoá cả ván như Hộp Đất Cổ.

## Implicit

**Short-store charge**: linh lực vào hộp bị giữ `2 giây`, release với `intensity +50%` (combat-math §2: charge cộng thêm 50% flat trên intensity tại thời điểm vào — khác với hop-chain +20%/hop, đây là burst cố định). Hộp có thể nhận nhiều linh lực chồng nhau (queue); release lần lượt theo thứ tự vào. Vật lý: ~1.5×1.5 ô, linh lực ra nhắm theo góc thẳng xuống hoặc theo hướng đã vào (cùng góc phản).

## Affix pool

Dựa trên tags `[metal, store, charge]` và base type `box`:
- **Prefix** (`offensive`, `elemental`, `crit`): `+X% intensity khi release`, `release Kim: +X% crit chance`, `store time giảm X% (release nhanh hơn)`
- **Suffix** (`utility`, `chain`, `speed`): `linh lực release +X% tốc độ`, `% chance chain release sang linh khí lân cận`, `store đồng thời tối đa +X viên (default 1)`

## Build role

**Archetype**: Kim-charge / mid-chain amplifier. Khác với Hộp Đất Cổ (oneshot cuối ván), hộp Kim là node khuếch đại trong chain giữa board — đặt trên đường bay của linh lực Kim để +50% trước khi tiếp tục chain. Kết hợp với **Đao Cổ Sắc** (`ancient-keen-saber`) để linh lực Kim đã charge thêm 50% vào crit burst. Đạo Phái: bất kỳ Kim-crit archetype. Common drop → đặt 2-3 hộp trên board tạo chuỗi charge tích luỹ trước khi hit đan.
