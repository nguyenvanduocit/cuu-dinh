# Sword (Kiếm + Saber merged) — pierce projectile sharp damage (Tier 3)

> Tier 3 cho `items/sword/`. Cascade từ root → Tier 1 → `items/CLAUDE.md` (Tier 2).
> **Note**: `saber` (1 entity) merged here vì cùng family (sharp blade weapon).

---

## Sub-type trong tu chân lore

Sword = **pháp kiếm** — vũ khí chính của kiếm tu (sword cultivator). Trong tu chân lore = pháp khí có hồn kiếm linh — kiếm có thể bay (御剑), có thể tự sense kẻ thù, có khế ngộ với chủ. Một số kiếm có chủ cũ vong linh ngụ — interact = interact với kiếm hồn.

Saber = sabre, đao cong, cùng family sharp blade.

---

## Game role specific

- **Physics**: **linear pierce projectile** — kiếm bay thẳng, xuyên qua object, KHÔNG bounce. Damage trên path.
- **Anchor placement**: thường ở rim hoặc launch position, projectile sweep across board.
- **Element bias**: thường **Kim** (sharp metal) + Hoả (lửa kiếm) + Vô Cực (kiếm linh). Variant Thuỷ (băng kiếm) cũng có.

---

## Design constraints

- Sword MUST có **lưỡi rõ visible** + sharp silhouette.
- Effect MUST là **pierce linear**, KHÔNG bounce / parabolic arc.
- Visual art: kiếm + glow theo element identity + sharpness emphasis.
- Cán kiếm có **dây quấn** + **bao kiếm** optional (sheath flavor).

---

## Lore motifs

- Material: kim loại tinh chế (sắt, thép, đồng), ngọc cán, ngà tay cầm.
- Motif khắc trên lưỡi: chữ Hán-tự, hoa văn rồng / phượng, ấn triện chủ cũ.
- Form: kiếm thẳng (jian) standard; saber (dao cong) variant.

---

## Cross-references

- **Ascendancies** — Kiếm Tu (Sword Cultivator) Đạo Phái nếu có → sword unique drop locked.
- **Lore-entities** — kiếm thượng cổ thuộc kiếm tu lịch sử ở `lore-entities/`.
- **Affixes prefix** — sword-specific prefix về pierce range / damage scaling.

---

## Anti-patterns

- ❌ Sword bounce / parabolic → sai pierce identity.
- ❌ Không có lưỡi rõ visible → sai sharp identity.
- ❌ Sword shoot multi-projectile spray → sai single linear.
- ❌ Cán không có dây / ngọc identity → mất tu chân craftsmanship.
- ❌ Modern sword aesthetic (steel sci-fi, energy blade) → phá identity.
- ❌ Saber với straight blade silhouette → sai saber identity (saber MUST cong).
