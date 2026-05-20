---
id: purple-cycle-elixir
ten: Tử Hoàn Đan
category: main
dropPool: Uncommon
weight: 50
---

# Tử Hoàn Đan (`purple-cycle-elixir`)

## Lược tả

Crafting nuke — reroll toàn bộ affix prefix+suffix cùng lúc trên linh khí Bảo+, đổi lấy xác suất roll bộ hoàn chỉnh trong 1 lần.

## Effect

Xoá **tất cả** affix explicit (prefix và suffix) hiện có trên linh khí rarity Bảo (Rare) trở lên, sau đó roll lại toàn bộ slot theo pool hợp lệ của item type:

- Số lượng affix roll lại = số slot tối đa của rarity (Bảo: 3 prefix + 3 suffix = 6 slot đầy).
- Mỗi affix tier ngẫu nhiên T1–T3 theo trọng số pool.
- Implicit giữ nguyên (không bị ảnh hưởng).
- Linh khí vẫn craftable sau khi dùng.

Rarity Linh (Magic, 2 affix) không eligible — dùng `spirit-elixir` hiệu quả hơn cho Linh.

## Khi nào dùng

- **Khi linh khí Bảo có 2+ affix xấu**: reroll toàn bộ rẻ hơn dùng nhiều Đan Tẩy Affix + Linh Đan riêng lẻ.
- **Base hunt**: khi có base item type đúng (bell, bead, sword…) nhưng affix roll từ drop xấu → Tử Hoàn Đan là entry point crafting Bảo.
- **Drop pool Uncommon** (weight 50) → khá dồi dào, phù hợp dùng nhiều lần để "gamble" ra bộ affix tốt.
- Giai đoạn mid-game (T6–T13): core loop crafting chính. Endgame T14+: thường nhường chỗ cho workflow xác định hơn (Tinh Hoa + Đan Tẩy Affix).

## Synergy

- **`identify-elixir` + Tử Hoàn Đan**: identify trước để thấy affix hiện tại rồi quyết định có nên reroll không.
- **Tinh Hoa (essence) sau Tử Hoàn Đan**: nếu kết quả reroll ra 2–3 affix tốt nhưng còn 1 slot rác — dùng Đan Tẩy Affix tẩy slot đó, force Tinh Hoa vào → bộ gần hoàn hảo.
- **`nine-turn-elixir`**: thăng phẩm linh khí Linh → Bảo trước rồi Tử Hoàn Đan → tận dụng slot 6-affix của Bảo thay vì 2-affix của Linh.
- **Build crit (`crit-essence`)**: Tử Hoàn Đan spam để tìm bộ crit chance + crit multi tự nhiên trước khi force bằng Tinh Hoa Crit.
