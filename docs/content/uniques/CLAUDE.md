# Uniques (Cổ Vật) — pháp bảo có thân thế cụ thể (Tier 2)

> Tier 2 cho category `uniques`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Uniques trong universe

Uniques = **cổ vật pháp bảo có lai lịch định danh** + **implicit cố định không reroll**. Khác linh khí thường (`items/`) ở: thân thế bất biến — mỗi unique 1 câu chuyện cụ thể, 1 chủ cũ định danh, 1 cảnh giới fix.

**Quy mô**: 30 unique. Mỗi unique = di vật / pháp bảo / tâm khí từ thời tu chân thượng cổ — drop từ boss định danh, quest cụ thể, hoặc bí cảnh.

---

## Design principles

- Unique MUST có **lore arc cá nhân**: ai mang? Vì sao mất? Ai tìm lại? Sự kiện gì gắn liền?
- **Implicit fixed**, không reroll. Affix prefix/suffix bình thường vẫn roll.
- **Build-defining > stat-stacking**. Unique tạo play pattern mới, không nhân raw stats. "Khi gắn unique X, build path Y mở ra" tốt hơn "+50% damage".
- **Drop source định danh** — unique từ boss A thì luôn từ boss A (không random pool). Tạo "săn unique" như goal.
- **Element identity locked** theo lai lịch (chủ cũ tu Mộc → unique Mộc identity).

---

## Lore voice

- Lai lịch full: tên chủ cũ, năm, tông môn, sự kiện. Tránh "an artifact of legend wielded by a forgotten master" generic.
- Mỗi unique có 1 đoạn lore-prose dài, "định danh" feel — như đọc một trang sử.
- Voice: reverence + danger awareness. Pháp bảo cổ thường có cấm chế / khế ấn / vong linh bám.

---

## Element/rarity expression

- Visual gold/purple aura (tier Thần unique).
- Material reflect chủ cũ era + element.
- Implicit text được khắc rõ trên item card (visible identity marker).

---

## Cross-system relationship

- **Items**: unique = special variant của 1 base type (vd `white-tiger-sword` = unique của `sword` base sub-type).
- **Bosses**: unique drop định danh từ boss cụ thể (cross-ref boss frontmatter `dropsUnique`).
- **Sets**: unique có thể là member của set (cross-ref `sets/`).
- **Acts / Regions**: unique drop có thể quest-locked / region-locked.
- **Lore-entities**: chủ cũ unique có thể là historical figure ở `lore-entities/`.

---

## Sub-grouping (Tier 3) — N/A

30 entity. Dưới ngưỡng >50. Stay flat.

---

## Anti-patterns

- ❌ Implicit roll-able → BAN. Implicit = identity fix.
- ❌ Power-creep raw stats (chỉ "bigger linh khí thường"). Build-defining > stat-stacking.
- ❌ Drop random pool — unique MUST có drop source định danh.
- ❌ Lore generic "ancient master / forgotten realm" — MUST có chủ cũ + tông môn + sự kiện cụ thể.
- ❌ Identity drift element (unique Mộc base với implicit Kim).
- ❌ Tạo unique mà không trace tới boss / quest / bí cảnh nào để drop.
