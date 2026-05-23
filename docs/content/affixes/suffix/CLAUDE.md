# Suffix Affixes — reactive / passive, defensive / proc (Tier 3)

> Tier 3 cho `affixes/suffix/`. Cascade từ root → Tier 1 → `affixes/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

Suffix = **phẩm tính phòng / thụ / phản** khắc lên pháp bảo. Trong tu chân lore = đan sư dùng **chú văn phản chiếu** + đan dược thụ để **kết khế phản ứng** lên pháp bảo. Khế chỉ kích phát khi **điều kiện kích hoạt** xuất hiện (bị tấn công, linh đan low quality, có element matching, ...).

Examples: "Phong Ấn Khế" (seal effects), "Tâm Hộ" (heart protect), defensive resist, on-X proc, conditional buff.

---

## Game role specific

- **Slot**: suffix slot trên item base.
- **Behavior**: **reactive / passive** — trigger khi condition xảy ra, hoặc passive always-on defensive.
- **Tier scaling**: T1-T3 power gradient.
- **Authoring lens**: "**What state / condition does this respond to?**" — nếu trả lời được = good suffix.

---

## Design constraints

- Suffix MUST có **trigger condition** rõ (on-hit, on-low-quality, on-element-match, on-time-cycle) HOẶC **always-on passive** (defensive resist, persistent aura).
- Proc suffix MUST có **visible feedback** — player phải nghe/thấy proc trigger (xem `sfx/` + `effects/`).
- Conditional buff MUST có condition observable (player biết khi nào active).
- Lore body explicit ritual context: "Khi ... thì phản ...".

---

## Lore motifs

- Tier name pattern tương tự prefix (Sơ / Trung / Toàn Khế).
- Ritual texture: chú văn phản chiếu, hồn pháp khí "thức tỉnh khi nguy" (reactive feel).

---

## Cross-references

- **Items**: suffix roll lên linh khí.
- **Equipment (Lò)**: suffix roll lên Lò parts.
- **Currency Phong Ấn** (trụ #4 gambling): lock suffix prevent reroll.
- **SFX / Effects**: proc trigger MUST sync với SFX + visual effect.
- **Combat math**: suffix nằm ở layer §7.2 hoặc §7.3 tùy proc type.

---

## Anti-patterns

- ❌ Suffix = active trigger không có condition → đó là prefix territory.
- ❌ Proc không có visible feedback (SFX + visual) → phá feedback rule.
- ❌ Conditional buff condition không observable → player không biết active.
- ❌ "+resist thuần" không có rationale build axis (vd resist generic vs element-specific).
- ❌ Lore body thiếu reactive context (chỉ "+20% defense").
- ❌ Power-creep tier raw.
- ❌ Stack additive defensive resist cap = BAN — phải có diminishing returns.
