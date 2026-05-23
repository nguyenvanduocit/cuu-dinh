# Acts — campaign narrative arc (Tier 2)

> Tier 2 cho category `acts`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Acts trong universe

Act = **chương trình campaign**. 5 acts total (locked #21 #22). Pacing: tutorial cứng 3 pháp trận (1h) + Progressive 5 Acts (~30-40h).

Act format: **illustrated node map** Slay-the-Spire style. Per-act 10-12 nodes incl. 1-2 optional side branch.

Per-act constraint:

- **≤ 2 system unlock per act** (no overload).
- **Boss climax cuối act**.
- **Sơn Hà Đồ Lệnh** (Map Device — currency main) drop **end Act 5** → bridge campaign ↔ atlas (locked #23).

---

## Design principles

- Act = **narrative arc + system gating + node-map progression**. Cả 3 đồng bộ; narrative beat align system unlock + node pacing.
- **Node types**: combat (pháp trận), shop (đạo quán), event (lore choice, không combat), elite (mini-boss), boss (climax), treasure (loot guaranteed).
- **Side branch tradeoff**: reward higher, risk higher, optional path.
- **System unlock pacing example** (giả thuyết, verify):
  - Act 1: basic Lò + 1 Đạo Phái preview.
  - Act 2: passive tree (Tinh Điểm) full access.
  - Act 3: Đạo Phái choice + 2 trụ gambling unlock.
  - Act 4: full 6 trụ gambling + Tâm Ma Mod intro.
  - Act 5: atlas unlock + Sơn Hà Đồ Lệnh drop.
- **Boss climax** mỗi act align tier curve (Act 1 boss = T2-T3 Dị Tượng; Act 3 = T7-T8 Dị Tượng / early Tâm Ma; Act 5 = Tâm Ma Vương or proto-Thiên Kiếp).

---

## Lore voice

- Narrative arc rõ — **protagonist (player)** đi qua thử thách + nhận đạo lý + đối diện kẻ thù.
- Tu chân tone: cảnh giới đột phá, ngộ đạo, độ kiếp, kết khế.
- Avoid "save the world" generic. MUST tu chân-specific stakes (vượt đan kiếp, ngộ đạo, đối Tâm Ma Vương, dựng Lò mới).

---

## Cross-system relationship

- **NPCs**: act assigned NPC (mentor act 1, trader recurring, antagonist act 4-5).
- **Regions**: act traverse regions (cross-ref `regions/`).
- **Bosses**: act climax = boss instance (cross-ref `bosses/`).
- **Map Device "Sơn Hà Đồ Lệnh"** end Act 5 → atlas unlock.
- **Factions**: faction conflict drive arc.
- **Lore-entities**: act event reference historical figure / sự kiện thượng cổ (Cửu Chuyển Kim Đan = act 5 climax context).

---

## Sub-grouping (Tier 3) — N/A

5 entity. Stay flat. (Acts nested nodes ở trong từng act folder — phần internal layout là design choice trong từng `acts/<id>/design.md`.)

---

## Anti-patterns

- ❌ Act > 2 system unlock — break pacing rule.
- ❌ Node map flat (no side branch) — break Slay-the-Spire style.
- ❌ Boss climax thiếu — act phải có resolution.
- ❌ Narrative generic "save the world". MUST tu chân-specific (vượt đan kiếp, ngộ đạo, đối Tâm Ma Vương, kế thừa Lò).
- ❌ System unlock cuối act 1 = full 6 trụ gambling — overload onboarding.
- ❌ Boss tier mismatch arc (Act 1 climax = T14 Thiên Kiếp = wrong).
