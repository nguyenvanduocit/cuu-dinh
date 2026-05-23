---
id: ancient-bamboo-fan
ten: Quạt Trúc Cổ
type: fan
element: wood
rarity: Common
dropPool: Common
tags: [wood, push, speed]
---

# Quạt Trúc Cổ (`ancient-bamboo-fan`)

## Lược tả

Quạt chẻ từ tre già Ngũ Hành Sơn. Mỗi lần phất, tạo luồng gió Mộc đẩy linh lực xuống board nhanh hơn — rút ngắn thời gian một vòng, tăng tần suất hit trên linh đan.

## Implicit

Khi linh lực Mộc va chạm quạt: tốc độ di chuyển linh lực sau bounce `+40%` (tương đương giảm thời gian bay mỗi hop, tăng tần suất hit/giây). Linh lực phi-Mộc `+20%` tốc độ. Vật lý: quạt hình rẽ quạt (~3×1.5 ô), góc phản lệch `+10°` theo hướng "gió" — phải tính khi layout board. Không tăng intensity nhưng tần suất cao = tổng damage output cao hơn trên một ván.

## Affix pool

Dựa trên tags `[wood, push, speed]` và base type `fan`:
- **Prefix** (`offensive`, `speed`, `elemental`): `+X% tốc độ linh lực Mộc`, `% chance double-push (hai lần tốc độ)`, `linh lực Mộc gain +X% intensity sau push`
- **Suffix** (`utility`, `chain`): `linh lực sau bounce chuyển hướng về linh đan X%`, `push radius +Xpx ảnh hưởng linh khí lân cận`, `linh lực Mộc tiếp tục chain thêm 1 hop miễn phí`

## Build role

**Archetype**: Mộc-speed / high-frequency hit. Lý tưởng cho build muốn nhiều hit nhỏ thay vì ít hit lớn — mỗi hit Mộc tương sinh Hoả (quality +30%) nếu đan đang luyện Hoả. Kết hợp tốt với **Cây Trầu Cổ** (`ancient-betel-branch`, aura nhiễm khí Mộc 5s) để toàn board chuyển Mộc rồi dùng quạt đẩy nhanh. Đạo Phái khớp: **Mộc Linh** (sustain heal theo tần suất hit). Điểm yếu: map mod **Huyết Sát** (linh khí mất durability/hit) ăn mòn nhanh hơn vì hit rate cao — cần **Tượng La Hán Bất Hoại** (`arhat-indestructible`) chặn.
