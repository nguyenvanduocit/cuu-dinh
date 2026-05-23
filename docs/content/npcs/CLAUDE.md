# NPCs — character bibles (Tier 2)

> Tier 2 cho category `npcs`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## NPCs trong universe

NPC = **nhân vật cụ thể** trong Cửu Châu Đan Vực: đạo sĩ, đan sư, tông chủ, lão già tửu quán, ẩn sĩ, vong linh, kiếm tu lữ hành, ... Mỗi NPC = **character bible**: lai lịch, tu vi, đạo phái, vai trò campaign, voice.

**Quy mô**: ~14-17 NPC.

---

## Design principles

- NPC MUST có **lai lịch cụ thể** tu chân: sinh ra ở đâu? Sư phụ ai? Cảnh giới gì? Sự kiện định hình?
- **Role trong campaign (Acts)** — quest giver, trader, antagonist, mentor, oracle.
- **Dialogue voice consistent per-NPC** — Đạo Cô khác Lão Tửu Quán khác Tông Chủ. Mỗi NPC có verbal signature.
- **Faction-affiliated hoặc lone wanderer**. Faction NPC có hierarchy (tông chủ / trưởng lão / đệ tử).
- **Live beyond quest**: NPC không chỉ là quest-trigger — phải có life beyond (background hobby, philosophical stance, relationships).

---

## Lore voice

- **Hán-Việt natural dialogue**. Tone phù hợp tu vi + đạo phái + age.
- Tu chân vocabulary tùy NPC: tông chủ formal cổ ngữ; lão tửu quán colloquial Hán-Việt; đan sư technical đan đạo terminology.
- Tránh "common NPC" generic. Mỗi NPC phải có **hook lore** (đoạn intro 1-2 câu khiến player nhớ).

---

## Cross-system relationship

- **Acts**: NPC role per-act (mentor act 1, trader act 2, antagonist act 5, ...).
- **Factions**: NPC member của faction nào (hierarchy).
- **Regions**: NPC base location.
- **Lore-entities**: historical NPC (Cao Tổ, 7 đan sư) ở `lore-entities/` — sống ở quá khứ. NPC `npcs/` = đương đại.
- **Quests / Items**: NPC trade unique / quest item.

---

## Sub-grouping (Tier 3) — N/A

~14-17 entity. Stay flat.

---

## Anti-patterns

- ❌ Generic "merchant", "guard", "elder" NPC. MUST có tên + lai lịch.
- ❌ Voice modern Vietnamese / western. MUST tu chân Hán-Việt natural.
- ❌ NPC chỉ là quest-trigger — phải có life beyond quest (hobby, view, relationship).
- ❌ Faction hierarchy phẳng — tu chân tông môn = hierarchy strict (đệ tử → trưởng lão → tông chủ → thái thượng).
- ❌ NPC đương đại (npcs/) lẫn với historical figure (lore-entities/) — phân biệt clearly.
