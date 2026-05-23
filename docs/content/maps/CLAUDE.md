# Maps (Pháp Trận) — không gian thuật pháp luyện đan (Tier 2)

> Tier 2 cho category `maps`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1). KHÔNG nói file-format / folder convention — đó là `docs/content/README.md`.

---

## Maps trong universe

Map = **pháp trận** — không gian thuật pháp player triển khai để luyện đan. KHÔNG phải "level" / "stage" / "dungeon" generic. Pháp trận là không gian linh thiêng có địa khí, phong thuỷ, ngũ hành bias riêng. Player đặt pháp trận = mở 1 trận luyện đan có rủi ro thực sự (đan kiếp).

**Quy mô**: 5-8 ván + 1 boss = 15-20 phút (locked #6). Single linh đan progressive — 1 viên duy nhất refined liên tục qua toàn pháp trận (locked #18).

**10 Đan Pháp variant** (locked #25): Tiêu Chuẩn, Tử Sinh, Hỗn Nguyên, Thiên Kiếp, Tâm Ma, Cổ Đan Lò, Long Cung, Cửu Tiêu, Diêm Phủ, Vô Cực. Mỗi variant = một cosmology lens khác nhau (long cung = đáy bể rồng, thiên kiếp = trời sấm sét, diêm phủ = âm phủ u minh).

---

## Design principles

- Mỗi pháp trận MUST có **theme cosmology rõ**. Không "generic dungeon". Theme drive lore + art + element bias + boss type.
- **Geometry = playable + narrative**. ASCII geometry trong design.md = anchor positions + linh đan position; KHÔNG phải decor. Geometry phải tự thân kể câu chuyện (xương sống rồng → 11 anchor cong; cửu tiêu → 9 anchor tầng dọc).
- **Element bias drives mood + mechanic**: long cung = thuỷ/mộc, thiên kiếp = kim/lôi, diêm phủ = thổ/u minh, cửu tiêu = kim/khí. Element bias xác định drop pool + boss element + ambient.
- **Tier T1-T16** = difficulty + reward gradient, KHÔNG theme. Cùng 1 Đan Pháp variant có thể spawn ở mọi tier.
- **Boss tier alignment**: T1-T8 dị tượng, T6-T13 tâm ma, T14-T16 thiên kiếp + endgame (locked #20). Map design phải support boss type tier-appropriate.

---

## Lore voice

Map description = **sense of place + danger + history**. Aim: player đọc xong muốn vào (curiosity + caution).

Lai lịch cần có: ai khai mở pháp trận này lần đầu? Tông môn / đạo sĩ / tà phái nào? Sự kiện gì xảy ra? Có vong linh / di vật / cấm chế nào còn vương? Tránh "an ancient place forgotten by time" generic.

Tone: huyền huyễn + danger-laced. "Khí lạnh từ đáy bể dâng lên — long huyệt này đã bế quan ba ngàn năm, chỉ kẻ mang Long Châu mới mở được" tốt hơn "An ancient sealed dungeon".

---

## Element/rarity expression

- **Anchor slot color** = element-bias-derived named-color glow (xem `style/element-tokens.md`). Long cung anchor xanh thuỷ; cửu tiêu anchor vàng kim; diêm phủ anchor u tím.
- **Ambient lighting**: cosmology-matched. Long cung = bể sâu xanh; thiên kiếp = trời mây sấm; diêm phủ = u tối + nến.
- **Tier rarity** = density anchor + boss complexity + drop bias intensity. Hi-tier không nhân anchor mãi mà thêm depth (corruption layer, secret anchor).

---

## Cross-system relationship

- **Đan Pháp** (currency main) = entry token. Mỗi map variant tương ứng ≥1 Đan Pháp.
- **Nguyên Liệu** (currency drop-bias) inject vào map gây bias drop pool.
- **Đan Dược splash** (currency mechanic-shifter) modify mechanics in-map.
- **Tâm Ma Mod** (currency corruption-mod) corrupt map vĩnh viễn — đổi mood, đổi geometry, đổi boss.
- **Linh khí (items)** gắn lên anchor → geometry pháp trận define chỗ slot.
- **Linh đan (objective)** đặt ở ASCII center → mọi mechanic xoay quanh refine viên đan này.
- **Atlas (Sơn Hà Đồ)** (sau level 50) layout tile map ở các region; mỗi tile có Đan Pháp + tier riêng.
- **Map Device "Sơn Hà Đồ Lệnh"** (drop end Act 5) bridge campaign ↔ atlas. Compose Đan Pháp + Nguyên Liệu + Đan Dược + Tâm Ma → emergent bí cảnh (180K+ combination, locked #23 #24).

---

## Sub-grouping (Tier 3) — N/A

10 entity. KHÔNG đủ ngưỡng >50 cho Tier 3. Stay flat.

---

## DESIGN CONSTRAINT — Map art MUST show 2 gameplay components

Map art ở `docs/content/maps/<id>/art/` dùng làm **playfield thực tế** của pháp trận (không chỉ background). Vì vậy art bắt buộc render 2 thành phần gameplay:

### 1. Anchor slots (chỗ lắp linh khí)

- Mỗi anchor trong `design.md` (`vanCount` + ASCII geometry) phải render rõ trên board như **slot trống/sáng** — nơi player gắn linh khí.
- Đếm anchor MUST khớp `design.md` (vd `dragon-palace` = 11 anchor cong theo xương sống rồng).
- Element bias của anchor → **named-color glow** của slot đó theo `style/element-tokens.md`.
- Visual treatment: ring / glyph / runed pedestal / floating platform — đủ silhouette để player nhận ra "đây là slot có thể tương tác", không phải decor.

### 2. Linh đan position (vị trí linh đan)

- Linh đan = viên đan đang refine — **objective trung tâm** của pháp trận.
- Vị trí lấy từ `design.md` ASCII geometry (thường center hoặc bottom-center).
- Visual: viên đan tròn phát sáng, **có border/altar/khung** rõ ràng — điểm hội tụ của linh lực rơi từ anchor xuống.
- Phẩm cấp render mặc định: **Linh / Bảo tier** (soft glow, chưa fully refined).

### Compose pattern cho prompt.md

Sau SUBJECT của arena, prompt MUST có 2 phrase:

```
... eleven glowing anchor slots arranged [theo geometry của map], each slot a runed pedestal with [element color] inner light, ...
... a single central elixir orb (linh đan) suspended above an altar at [vị trí từ geometry], soft pale-blue inner glow (Linh tier), ...
```

---

## Anti-patterns

- ❌ Background scene đẹp nhưng KHÔNG có anchor slot visible → không dùng làm playfield.
- ❌ Số lượng anchor render sai so với `vanCount` trong design.md.
- ❌ Linh đan ở sai vị trí so với ASCII geometry.
- ❌ Anchor slot bị nhầm với decor (treasure chest, statue, lantern) → phải có silhouette ring/glyph/pedestal đặc trưng.
- ❌ Element bias không thể hiện qua color (vd `dragon-palace` render anchor màu cam/hoả thay vì xanh thuỷ).
- ❌ Generic dungeon theme — pháp trận MUST có cosmology rõ (long cung / thiên kiếp / diêm phủ / cửu tiêu / ...).
- ❌ Treat map như "decor + spawn point". Map là cosmology + geometry + gameplay surface có hồn.
- ❌ Boss type sai tier (vd thiên kiếp boss ở T2 map).
