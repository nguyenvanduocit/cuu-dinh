# Maps — art generation rules (inject vào mọi map prompt)

> Đọc file này TRƯỚC khi compose prompt cho bất kỳ map nào trong `docs/content/maps/<id>/`.

## Map art = playable pháp trận board (không chỉ background)

Mọi map art được generate ở đây sẽ dùng làm **playfield thực tế** của pháp trận. Vì vậy art **bắt buộc** phải show 2 thành phần gameplay:

### 1. Anchor slots (slot lắp affixes/linh khí)

- Mỗi anchor trong `design.md` (`vanCount` + ASCII geometry) phải được **render rõ ràng** trên board như một slot trống/sáng — nơi player gắn linh khí.
- Đếm anchor phải khớp `design.md` (ví dụ dragon-palace = 11 anchor cong theo xương sống rồng).
- Element bias của anchor (T = Thuỷ, M = Mộc, V = Vô Cực, ...) → thể hiện qua **named-color glow** của slot đó theo `style/element-tokens.md`.
- Visual treatment: ring/glyph/runed pedestal/floating platform — đủ silhouette để player nhận ra "đây là slot có thể tương tác", không phải decor.

### 2. Linh đan position (vị trí linh đan)

- Linh đan = viên đan đang được refine — **objective trung tâm của pháp trận**.
- Vị trí lấy từ `design.md` ASCII geometry (thường ở center hoặc bottom-center của board).
- Visual: viên đan tròn phát sáng, **có border/altar/khung** rõ ràng — đây là điểm hội tụ của linh lực rơi từ anchor xuống.
- Phẩm cấp render mặc định: **Linh / Bảo tier** (soft glow, chưa fully refined).

## Compose rule

Khi compose `/imagine prompt` cho map, sau SUBJECT của arena phải có 2 phrase:

```
... eleven glowing anchor slots arranged [theo geometry của map], each slot a runed pedestal with [element color] inner light, ...
... a single central elixir orb (linh đan) suspended above an altar at [vị trí từ geometry], soft pale-blue inner glow (Linh tier), ...
```

## Anti-pattern (BAN)

- ❌ Background scene đẹp nhưng KHÔNG có anchor slot visible → không dùng làm playfield được.
- ❌ Số lượng anchor render sai so với `vanCount` trong design.md.
- ❌ Linh đan ở sai vị trí so với ASCII geometry.
- ❌ Anchor slot bị nhầm với decor (treasure chest, statue, lantern) → phải có silhouette ring/glyph/pedestal đặc trưng.
- ❌ Element bias không thể hiện qua color (ví dụ dragon-palace render anchor màu cam/hoả).

## Format prompt.md

`docs/content/maps/<id>/prompt.md` phải explicit liệt kê 2 thành phần này trong scene description trước khi nối STYLE SUFFIX.
