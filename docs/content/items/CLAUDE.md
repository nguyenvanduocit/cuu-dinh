# Items (Linh Khí) — pháp bảo gắn pháp trận (Tier 2)

> Tier 2 cho category `items`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1). KHÔNG nói file-format / folder convention.

---

## Items trong universe

"Item" trong Đan Kiếp = **linh khí** (pháp bảo). KHÔNG phải gear stat-bonus generic. Linh khí gắn lên **anchor slot** của pháp trận, va đập với linh lực ngũ hành → sinh effect → refine linh đan.

Mỗi linh khí có 4 lớp identity:

1. **Hồn** — chủ cũ, tông môn, sự kiện rèn ra nó.
2. **Element identity** — water / fire / wood / metal / earth / Vô Cực.
3. **Physics behavior** — bell phát wave, cauldron sink-and-release, talisman aura persistent, fan khuấy linh lực, ...
4. **Affix slots** — prefix / suffix có thể roll lên (uniques có implicit cố định).

**Quy mô**: 78 linh khí thường (≥10 cluster sub-type) + 18 La Hán `arhat-*` (cố vật tu Phật, special series) + ~30 uniques (cổ vật, file riêng `uniques/`).

---

## Design principles

- Linh khí MUST có **physics interaction rõ**, không chỉ stat bonus. Effect chỉ là "+10% damage" → không pass test.
- **Element identity quyết định visual + mechanic**. Linh khí Mộc gắn cây cỏ, hồi sinh, sinh trưởng; Kim gắn vũ khí, sắc bén, cứng rắn; Thuỷ gắn dòng chảy, băng, thanh tẩy; Hoả gắn cháy, nung, bùng nổ; Thổ gắn đá, đất, vững chãi.
- **Physics behavior khớp item-type** (sub-type identity): bell = wave xung kích radial; cauldron = sink linh lực vào rồi release multi-step; talisman = aura persistent radius; fan = stir/khuấy trajectory; bead = chain/relay giữa bead khác; lantern = lighting AOE element-tagged; inkstone = ink trail mark element; box = store + release timed; vase = pour cascade; sword = pierce projectile.
- **Rarity tier = depth, không power-creep**. Hi tier = nhiều affix slot + utility tinh tế, KHÔNG nhân raw stats.
- **Thiết kế cảm giác specific**: player chạm vào, bắn lên anchor, nghe âm thanh, thấy effect → recognizable. 78 linh khí MUST distinguishable, không generic.

---

## Lore voice

- Lore = **lai lịch + chủ cũ + truyền kỳ**. Tránh "an ancient artifact wielded by a forgotten master" generic.
- Mỗi linh khí phải đặt được câu hỏi:
  - Ai rèn? (Đan sư nào / tông môn nào / năm nào)
  - Cho ai? (Tặng người nào, vì lý do gì)
  - Vì sao mất? (Cướp? Cấm chế? Vong linh?)
  - Ai tìm lại được? (Player kế thừa qua duyên gì)
- Tone: pháp bảo **có hồn, có ý chí**, có thể thân hoặc khắc với người mang. "Tâm khế" / "Khế hợp" / "Nhận chủ" là concept thật, không metaphor.

---

## Element/rarity expression

- **Color palette** mỗi linh khí align element token (`style/element-tokens.md`).
- **Material reflect element**: Mộc = gỗ / lá / dây leo / trúc; Kim = đồng / sắt / bạc / vàng; Thuỷ = ngọc / băng / giọt nước / san hô; Hoả = lửa / than / đồng nung đỏ / lưu hoàng; Thổ = đá / đất nung / gốm / ngọc đất.
- **Rarity tier (tu chân analog)**: Linh (common, white) < Bảo (magic, blue) < Tiên (rare, yellow) < Thần (epic/unique, purple-gold). Uniques (cổ vật) ở `uniques/` riêng.

---

## Cross-system relationship

- **Anchor slot (maps/)** = chỗ gắn linh khí. Geometry pháp trận define chỗ.
- **Affixes** roll lên linh khí (prefix + suffix). Compatibility qua `compatibleItemTypes`.
- **Equipment (Lò Luyện Đan)** parts riêng — KHÔNG dùng slot linh khí. Lò = 8 slot Đỉnh/Thân/Đế/Quai L/R/Nắp/Khắc Phù/Đồ Sương L/R/Dây Phong Ấn (locked #8).
- **Currency**: Đan dược reroll/upgrade linh khí (essence/main), Tâm Ma Mod corrupt vĩnh viễn.
- **Passive tree (Tinh Điểm)**: node ngũ hành buff linh khí cùng element.
- **Sets** (`sets/` — 3 set hiện có): specific linh khí combo unlock set bonus.

---

## Sub-grouping rationale (Tier 3)

Items có **~11 sub-type tự nhiên** qua slug suffix. Lý do split:

1. **Physics behavior signature riêng** mỗi sub-type (bell wave, cauldron sink, fan stir) → design constraint khác nhau.
2. **Lore motif riêng** (cauldron = đan đạo, talisman = hộ thân, sword = vũ đạo).
3. **Art convention riêng** (cauldron có nắp + khói; talisman có dây + chữ; bell có khắc rồng/phượng).

Sub-folders:

| Sub-folder | ~Count | Identity ngắn |
|---|---|---|
| `cauldron/` | 7 | Đỉnh chứa luyện đan; nắp + quai + khói. Sink linh lực rồi release multi-step. |
| `statue/` | 7 | Tượng pháp; aura persistent + ritual focus. Thường thổ/kim lean. |
| `talisman/` | 6 | Phù / ngọc bội; hộ thân + aura subtle persistent. Có dây/chữ. |
| `fan/` | 6 | Quạt pháp; stir / khuấy linh lực trajectory. Thường mộc/khí lean. |
| `bead/` | 6 | Chuỗi hạt; chain/relay giữa bead khác. Multi-bead synergy. |
| `lantern/` | 5 | Đèn pháp; lighting AOE element-tagged. Thường hoả/u-minh lean. |
| `inkstone/` | 5 | Nghiên mực; ink trail mark element. Thường thổ/văn lean. |
| `box/` | 5 | Hộp pháp; store + release timed. Định thời/định lượng. |
| `vase/` | 4 | Bình pháp; pour cascade linh lực. Thường thuỷ lean. |
| `sword/` | 4 | Pháp kiếm; pierce projectile + sharp damage. Thường kim lean. |
| `arhat/` | 18 | La Hán cố vật (tu Phật series); special prefix lineage, mixed sub-type. |
| `misc/` | ~5 | Singletons (yama, uncontested, thunderbolt, grain, branch). |

---

## Anti-patterns

- ❌ Linh khí thuần stat-bonus, không có physics interaction → BAN.
- ❌ Element neutral mà không có lý do (Vô Cực / structural exception) → BAN.
- ❌ Lore generic "ancient master / forgotten realm" — MUST có tên riêng (chủ cũ là ai?) + sự kiện cụ thể.
- ❌ Visual mismatch element (linh khí Hoả mà palette xanh).
- ❌ Sub-type identity drift: cauldron không có nắp/khói; bell không có chuông visible; talisman không có dây/chữ; sword không có lưỡi rõ.
- ❌ Power-creep raw stats theo rarity. Rarity = depth (utility, conditional, build-defining), không "bigger number".
- ❌ Tạo linh khí mới mà không trace được tới một lai lịch / tông môn / sự kiện cụ thể.
