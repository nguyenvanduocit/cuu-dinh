---
id: demon-ward-talisman
ten: Bùa Trấn Yêu
type: talisman
element: earth
rarity: Magic
dropPool: Uncommon
tags: [earth, sustain, aura]
---

# Bùa Trấn Yêu (`demon-ward-talisman`)

## Lược tả

Bùa vàng khắc bát quái, treo lơ lửng trên board phát ra Thổ khí ổn định. Linh khí Thổ với vai trò phòng thủ đặc biệt: mọi linh khí nằm trong phạm vi bùa đều **miễn Phong Ấn brick** — không phải giảm xác suất, mà là immunity tuyệt đối. Đây là phiên bản "localised" của `arhat-uncontested`, nhưng không cần bộ và áp dụng cho mọi nguyên tố trong range.

## Implicit

Mọi **linh khí lân cận** (trong bán kính tác dụng) đều **không bị Phong Ấn brick**.

Cơ chế combat-math: Phong Ấn (§0 meta-layer) thông thường có thể khoá hoặc phá linh khí dựa trên trigger condition. Bùa Trấn Yêu áp immunity trước khi Phong Ấn roll — zero chance brick cho linh khí trong range. Khác với `arhat-uncontested` (chỉ Vô Cực trong bộ), bùa này áp dụng cho **tất cả nguyên tố** nhưng chỉ trong **phạm vi không gian** xung quanh.

"Lân cận" = khoảng cách physics nhất định (thiết kế implementation: ~150px). Linh khí ngoài range vẫn bị Phong Ấn bình thường.

## Affix pool

Tag roll trên `talisman`:

| Affix slug | Tags | Vai trò trên Bùa Trấn Yêu |
|---|---|---|
| `talisman-charge` | utility, chain | Bùa tích charge khi linh lực đi qua — sau N charge phát burst Thổ nhỏ, tăng thêm layer Thổ sustain |
| `talisman-expand` | utility, aoe | Mở rộng bán kính tác dụng — nhiều linh khí hơn được immunity Phong Ấn |
| `talisman-once` | utility, defensive | Bùa kích hoạt một lần mạnh hơn thay vì liên tục — có thể block một Phong Ấn wave lớn |

## Build role

**Phong Ấn immunity node** cho board cần bảo vệ linh khí cốt lõi mà không cần bộ La Hán.

- **Bảo vệ chain anchor**: đặt bùa gần linh khí quan trọng nhất (bell convert, statue aura, bead healer) — linh khí đó sẽ không bao giờ bị Phong Ấn khoá. Board mất linh khí anchor là mất toàn bộ engine.
- **Không cần bộ**: `arhat-uncontested` yêu cầu bộ Thập Bát La Hán. Bùa Trấn Yêu hoạt động độc lập — mọi build đều có thể dùng nếu cần Phong Ấn immunity ở một vùng cụ thể.
- **Map Thiên Kiếp** (T14-T16): Thiên Kiếp thường đi kèm Phong Ấn surge. Bùa là bảo hiểm mandatory cho board T14+.
- **Đạo Phái**: **Thái Cực** (`tai-chi`) — kiểm soát meta-layer; hoặc **Cửu Âm** (`nine-yin`) nếu board Kim cần bảo vệ bell convert.
- **Combo `black-tortoise-statue`**: bùa immunity Phong Ấn + tượng giảm tương khắc = double defensive layer. Thêm `arhat-uncontested` nếu dùng bộ La Hán = triple protection.
- **Thổ nguyên tố**: bùa cũng là linh khí Thổ — kết hợp với Thổ lane (sinh Kim, khắc Thuỷ §1) nếu cần đa dạng board element.
