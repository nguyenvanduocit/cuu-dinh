# Lore Entities — di vật + nhân vật lịch sử (Tier 2)

> Tier 2 cho category `lore-entities`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Lore-entities trong universe

Lore-entity = **artifact lịch sử / historical figure / sự kiện thượng cổ** — cung cấp **chiều sâu lore** cho universe. KHÔNG phải playable / equipable / drop. Sống ở **quá khứ** (NPC `npcs/` sống ở đương đại; lore-entity sống ở lịch sử / huyền sử).

**Examples** (sau cleanup locked #30):

- **Cao Tổ** — sáng tổ Cửu Châu Đan Vực (giả thuyết, cần verify).
- **7 đan sư thượng cổ** — những nhân vật rèn pháp bảo / sáng tổ tông môn.
- **Lò Thần** — pháp khí thượng cổ.
- **Cửu Chuyển Kim Đan** — sự kiện thất bại sinh **Hỗn Nguyên Tâm Ma Vương** (locked #30 backstory cốt lõi).
- **Tổ truyền Lò Luyện Đan** của player — lai lịch Lò player kế thừa.

**Quy mô**: ~7 entity (cleanup pending — locked #30 đã retire "9 đỉnh" content, cần dọn / viết lại).

---

## Design principles

- Lore-entity MUST **extend universe** — link tới timeline + người + sự kiện thật trong Cửu Châu Đan Vực.
- Tránh "encyclopedia entry" dry. Lore phải có **texture + insight** — đọc xong cảm thấy universe lớn hơn.
- **Cross-ref với NPCs / factions / regions / acts** — lore-entity không sống isolated.

---

## Lore voice

- **History-feel + reverence**. Tone của sử quan kể lại sự kiện thượng cổ.
- Pattern: "Năm thứ N của X kỷ, [nhân vật] một mình [hành động], từ đó [hệ quả]." Time markers + named action + lasting consequence.
- Tránh "long ago in a forgotten era" generic.

---

## Cross-system relationship

- **Acts**: lore-entity reference làm **context** cho campaign event (Act 5 climax reference Cửu Chuyển Kim Đan).
- **Factions**: sáng tổ tông môn ở đây.
- **Items / Uniques**: di vật cụ thể có thể là playable unique (cross-ref bi-directional `uniques/<id>` ↔ `lore-entities/<chủ-cũ>`).
- **Regions**: sự kiện diễn ra tại region cụ thể.
- **NPCs**: NPC đương đại có thể là hậu duệ / kế thừa của lore-entity historical figure.

---

## Sub-grouping (Tier 3) — N/A

~7 entity. Stay flat.

---

## Anti-patterns

- ❌ Lore-entity playable / equipable / drop — sai category. Move sang `items/` hoặc `uniques/`.
- ❌ Encyclopedia dry list — MUST narrative texture (insight, character, sự kiện).
- ❌ Floating timeline — MUST link timeline + region + người. Lore không không gian = lore mồ côi.
- ❌ Giữ legacy "9 đỉnh thượng cổ" content (locked #30 đã retire). Dọn 9 file cauldron + `neutral-cauldron` cũ → viết lại theo Đan Kiếp narrative.
- ❌ Nhầm với NPCs đương đại — lore-entity = quá khứ; NPC = đương đại.
- ❌ Tense modern — tu chân historical voice dùng past tense + classical syntax.
