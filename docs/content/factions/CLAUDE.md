# Factions (Tông Môn) — đạo thống truyền thừa (Tier 2)

> Tier 2 cho category `factions`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Factions trong universe

Faction = **tông môn** — tổ chức tu luyện có **đạo thống, truyền thừa, cấm địa, kinh điển**. KHÔNG phải "guild" / "clan" / "house" RPG generic.

Trong tu chân lore, tông môn = nơi đệ tử tu luyện theo đạo lý sáng tổ, được hộ trợ bởi tài nguyên (đan dược, kinh điển, pháp bảo) đổi lại lòng trung thành + đạo nghĩa.

**Quy mô**: 5 tông môn. Mỗi tông có:

- **Sáng tổ + năm thành lập** (cross-ref `lore-entities/`).
- **Đạo lý cốt lõi** (Mộc đạo / Hoả đạo / hỗn nguyên / vô vi / tà phái / ...).
- **Cấm địa + di tích** (cross-ref `regions/`).
- **NPC member với hierarchy** (tông chủ → thái thượng trưởng lão → trưởng lão → đệ tử chân truyền → đệ tử thường → tạp dịch).
- **Inter-faction relations** (ally / rival / blood feud).

---

## Design principles

- Faction MUST có **đạo thống lịch sử** + **đạo lý rõ**. "Đạo Phái X tin Y vì Z" pattern.
- **Inter-faction relations** = ally / rival / blood feud — emergent storyline driver.
- **Member NPC** khớp đạo lý + faction hierarchy.
- **Cấm địa** có thể là pháp trận / bí cảnh / unique drop source.
- Mỗi faction có **playstyle implicit** — player liên kết faction X → access linh khí + ascendancy + quest line đặc trưng.

---

## Lore voice

- **Lineage-respect + đạo lý solid + history weight**. Tông môn cảm giác cổ kính, có trọng lực.
- Tránh "warrior guild" / "mage academy" generic.

---

## Cross-system relationship

- **NPCs**: faction member (với hierarchy explicit).
- **Regions**: faction base / cấm địa location.
- **Acts**: faction conflict drive campaign arc.
- **Items / Uniques**: faction-specific gear (đệ tử Mộc Tông dùng linh khí Mộc; tà phái dùng tâm ma corrupted item).
- **Ascendancies**: **NOT cùng concept**. Đạo Phái cá nhân ≠ Tông Môn tổ chức. Player có thể thuộc Faction X mà follow Đạo Phái Y (cross-pollination).
- **Bosses**: faction có thể là tà phái spawn boss (cross-ref `bosses/`).
- **Lore-entities**: sáng tổ tông môn ở `lore-entities/` (historical figure).

---

## Sub-grouping (Tier 3) — N/A

5 entity. Stay flat.

---

## Anti-patterns

- ❌ Faction generic "warrior guild" / "mage academy" / "shadow brotherhood". MUST tu chân tông môn voice.
- ❌ Đạo lý mơ hồ — MUST cốt lõi rõ (đạo gì? Vì sao chọn?).
- ❌ Hierarchy phẳng — tu chân tông môn = hierarchy strict.
- ❌ Nhầm faction với Đạo Phái (ascendancy). Faction = tổ chức, Đạo Phái = path cá nhân.
- ❌ Faction không có inter-relation map (ally / rival / feud) — phá emergent storyline.
- ❌ Member NPC sai hierarchy (tông chủ act như đệ tử thường).
