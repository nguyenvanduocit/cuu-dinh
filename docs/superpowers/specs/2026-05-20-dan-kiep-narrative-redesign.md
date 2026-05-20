# Đan Kiếp — Narrative Redesign (gỡ concept "9 đỉnh thượng cổ")

> Thực thi decision #30. Game title "Cửu Đỉnh" → **"Đan Kiếp" (丹劫)**. Concept "9 đỉnh thượng cổ / tái hợp 9 đỉnh" gỡ bỏ; backbone narrative viết lại quanh **Cửu Chuyển Kim Đan + trận Đan Kiếp**.

## Narrative mới (SSOT)

**Đan Kiếp (丹劫 — kiếp nạn của đan đạo).** ~800 năm trước, Cao Tổ + 7 đan sư + Lò Thần luyện **Cửu Chuyển Kim Đan** — viên đan thanh lọc toàn bộ thiên địa linh khí. Tới **chuyển thứ chín** thất bại thảm khốc → trận **Đan Kiếp** lớn nhất lịch sử: sinh ra **Hỗn Nguyên Tâm Ma Vương**, linh khí Cửu Châu Đan Vực vỡ vụn rải khắp (= bí cảnh atlas).

**Lò player = Lò Luyện Đan tổ truyền độc lập** — sống sót qua Đan Kiếp, kế thừa từ Sư Phụ. KHÔNG phải "đỉnh thứ 9". Bí ẩn của Lò dồn vào Cửu Chuyển + tiếng đếm "chuyển thứ chín" vọng lại mỗi lần luyện.

**Mỗi linh đan player luyện mang rủi ro đan kiếp riêng** — bể đan, thiên kiếp giáng (khớp #15/#19/#20).

## Endgame quest mới (thay "tái hợp 8 đỉnh")

Hoàn tất điều Cao Tổ thất bại: luyện Cửu Chuyển Kim Đan qua đủ **9 chuyển** mà không bị tâm ma / thiên kiếp nuốt. Endgame = **chuyển thứ chín** (Vô Cực endless #7 + Đan Pháp Vô Cực/Cửu Tiêu #25) + đối đầu **Hỗn Nguyên Tâm Ma Vương** (Thiên Kiếp endgame boss #20). Tái dùng mechanic đã lock, không thêm hệ thống mới.

## World name
NPC dialogue dùng "Cửu Đỉnh" làm tên thế giới → **"Cửu Châu Đan Vực"** (lục địa). "[Cửu Đỉnh] có 5 nguyên tố" → "Cửu Châu Đan Vực có 5 nguyên tố".

## Fate của lore-entities

**XOÁ (9 cauldron — narrative anchor cho concept đã gỡ, 0 mechanical ref):**
`wood-cauldron`, `fire-cauldron`, `earth-cauldron`, `metal-cauldron`, `water-cauldron`, `void-cauldron`, `heart-demon-cauldron`, `heavenly-tribulation-cauldron`, `neutral-cauldron`.

**GIỮ + reframe (bỏ ref "đỉnh thứ 9 / 9 đỉnh"):**
- `cao-to`, `cao-to-seal` — Cao Tổ + Phong Ấn (người luyện Cửu Chuyển).
- `nine-turn-golden-elixir` — Cửu Chuyển Kim Đan (trung tâm narrative mới).
- `ancestral-furnace` — Lò tổ truyền (độc lập, không phải đỉnh thứ 9).
- `furnace-spirit-origin` — Lò Thần (xoá dòng "Rèn ra Đỉnh Trung Lập — đỉnh thứ 9").
- `mountain-river-decree` — Sơn Hà Đồ Lệnh (map device #23).
- `primordial-corruption-king-lore` — Hỗn Nguyên Tâm Ma Vương (sinh ra từ Đan Kiếp).

Cập nhật `lore-entities/README.md`: "16 entities: 9 dinh + 7 dan su..." → đếm + mô tả mới (bỏ "9 dinh", bỏ "endgame quest objective").

## Rename rules (toàn repo)

| Surface | Rule |
|---|---|
| Game title "Cửu Đỉnh" / "CỬU ĐỈNH" / 九鼎 | → "Đan Kiếp" / "ĐAN KIẾP" / 丹劫 |
| NPC dialogue "Cửu Đỉnh" = tên thế giới | → "Cửu Châu Đan Vực" |
| npm `@cuu-dinh/*`, repo `cuu-dinh`, slug, path | **GIỮ NGUYÊN** |
| Spec filename chứa `cuu-dinh` (05-19 master) | **GIỮ** (đổi phá link) |
| Decision-log #28 (CLAUDE.md), CHANGELOG entry cũ | **GIỮ** (audit/history) |
| Dated history spec 05-19 (snapshot) | **GIỮ** (snapshot ngày đó) |

## Doc cần rewrite (không phải replace)
- `VISION.md` §"tại sao tên này" → rationale Đan Kiếp/Cửu Chuyển.
- `README.md` premise + endgame quest.
- `docs/lore.md` (timeline, dissolved-section pointer).
- 9 cauldron lore-entities → xoá; 6 entity giữ → reframe.
