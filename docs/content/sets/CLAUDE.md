# Sets — bộ pháp bảo cộng hưởng (Tier 2)

> Tier 2 cho category `sets`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Sets trong universe

Set = combo specific linh khí (items) / uniques cộng hưởng cho bonus effect. KHÔNG phải "armor set" 4-piece generic.

Trong lore = **pháp bảo cùng tông môn / cùng đan sư rèn / cùng cảnh giới đột phá**. Khi tụ đủ piece, các pháp bảo nhận biết nhau (khế hợp) → cộng hưởng linh khí.

**Quy mô**: 3 set hiện có. Mỗi set có 2-5 piece. Set bonus tier scale theo số piece equipped.

---

## Design principles

- Set MUST có **lai lịch cộng hưởng** — cùng đan sư? Cùng cảnh giới? Cùng cấm địa? Cùng tông môn?
- **Bonus tier 2-piece < 3-piece < full-set**, không tuyến tính — full-set MUST có spike (≫ partial).
- **Piece có thể là unique hoặc generic linh khí** — set không bắt buộc all-unique.
- Equip-detection logic: piece đặt ở anchor pháp trận, không cần slot Lò.

---

## Lore voice

- Lai lịch cộng hưởng: ai rèn? Tụ thành lần đầu khi nào? Bị tan vì sao? Ai tìm lại được trọn bộ?
- Voice: legendary + sleeping potential — "bộ này từng vang danh, nay tản lạc bốn phương".

---

## Cross-system relationship

- **Items + Uniques**: piece của set. Cross-ref qua frontmatter `setMembership`.
- **Bosses / Acts**: set piece có thể drop quest-locked.
- **Lore-entities**: sáng tổ rèn ra set có thể ở `lore-entities/`.

---

## Sub-grouping (Tier 3) — N/A

3 entity. Stay flat.

---

## Anti-patterns

- ❌ Set không có lai lịch cộng hưởng — chỉ "wear X for bonus" → BAN.
- ❌ Bonus tuyến tính theo piece count — phải có spike (full-set ≫ 2-piece).
- ❌ Piece random từ category — MUST specific định danh (named item).
- ❌ Set bonus power-creep solo build — set = alternative path, không replace solo.
