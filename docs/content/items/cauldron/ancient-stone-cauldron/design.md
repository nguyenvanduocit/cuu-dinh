---
id: ancient-stone-cauldron
ten: Đá Cổ
type: cauldron
element: earth
rarity: Common
dropPool: Common
tags: [earth, slow, charge]
---

# Đá Cổ (`ancient-stone-cauldron`)

## Lược tả

Đỉnh đá từ Thổ Sơn, nặng như lời thề. Làm chậm linh lực 50% khi chạm — nhưng khi linh lực rời đi, nó đã tích đủ Thổ khí và bùng ra với +50% intensity. Cổng charge đơn giản nhất Thổ hệ.

## Implicit

Va chạm: linh lực giảm tốc `50%` ngay khi chạm đỉnh đá (combat-math §2 slow = tăng thời gian "ngấm" charge). Khi rời: `intensity +50%` trên mọi element (không chỉ Thổ — đá hấp thụ và nhả bất phân biệt). Vật lý: đỉnh tròn ~2.5×2.5 ô, nảy bình thường nhưng tốc độ ra thấp hơn tốc độ vào; tác dụng "phanh rồi bắn".

## Affix pool

Dựa trên tags `[earth, slow, charge]` và base type `cauldron`:
- **Prefix** (`offensive`, `elemental`, `sustain`): `+X% intensity khi rời đỉnh`, `Thổ linh lực: slow thêm Xs → +X% intensity bổ sung`, `% chance double-charge (×2 intensity release)`
- **Suffix** (`defensive`, `utility`, `chain`): `slow linh lực phi-Thổ X% thêm`, `linh lực rời đỉnh +X% stability heal nếu đan Thổ`, `linh lực rời chain thẳng về hướng linh đan`

## Build role

**Archetype**: Thổ-charge / universal charge node. Đá Cổ là nền tảng rẻ nhất để xây charge chain — Common drop, ai cũng tìm được. Đặt nhiều đá trên đường bay tạo chuỗi slow→charge→slow→charge, tích luỹ lên đến tối đa 10 hop = +200% charge (combat-math §2 cap). Kết hợp với **Hộp Đất Cổ** (`ancient-earth-box`) để linh lực đã charge cao mới vào hộp → release cuối ván cực mạnh. Đạo Phái: không phân biệt — universal tool. Điểm yếu: không có phòng thủ durability, map mod **Huyết Sát** ăn mòn đỉnh nhanh cần kèm `arhat-indestructible`.
