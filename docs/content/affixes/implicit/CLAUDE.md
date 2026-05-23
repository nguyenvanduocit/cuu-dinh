# Implicit Affixes — innate identity bound base type (Tier 3)

> Tier 3 cho `affixes/implicit/`. Cascade từ root → Tier 1 → `affixes/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

Implicit = **phẩm tính innate** gắn liền base type, KHÔNG reroll được. Trong tu chân lore = bản chất của pháp bảo — "kiếm này bản chất là vậy". Đan sư không khắc implicit, nó là tự nhiên của pháp khí. Implicit = identity của linh khí, không phải mod thêm.

Examples: `cauldron-store-release-cycle` (đỉnh nào cũng có cycle này), `vase-absorb-convert` (bình nào cũng absorb), `sword-split` (kiếm split projectile mặc định).

---

## Game role specific

- **Slot**: implicit slot — **gắn cố định base type**, không reroll.
- **Behavior**: VARIABLE per item-type — define base identity. Cauldron implicit = store-release cycle; vase implicit = absorb-convert; sword implicit = split.
- **Tier**: thường không scale T1-T3 (implicit = identity, không power gradient). Có thể có variant per base type tier.
- **Authoring lens**: "**What is the bare-essence of this item-type?**" — implicit phải reflect identity Tier 3 sub-type của item.

---

## Design constraints

- Implicit MUST **NOT roll-able**. Lock cố định base type.
- Implicit power MUST **balance lower than prefix/suffix** (vì luôn có, không phải gambling).
- Implicit MUST **reflect sub-type identity** — cauldron implicit MUST nói về store-release; vase implicit MUST nói về absorb-pour; talisman MUST nói về aura persistent.
- Lore body: "Bản chất của ... là ..." pattern.

---

## Lore motifs

- Implicit description = identity statement. Tránh stat-text raw.
- Reference sub-type lore motif (cauldron → đan đạo refine; sword → kiếm hồn pierce).

---

## Cross-references

- **Items Tier 3 sub-folder** (`items/<sub>/CLAUDE.md`): implicit MUST khớp sub-type identity.
- **Combat math**: implicit nằm ở layer §7.1 (base intensity), apply trước prefix/suffix.

---

## Anti-patterns

- ❌ Implicit roll-able → BAN. Implicit = identity fix.
- ❌ Implicit power-creep prefix/suffix → sai balance (implicit luôn có, KHÔNG gambling).
- ❌ Implicit không khớp sub-type identity (vd cauldron implicit nói về "pierce damage" thay vì "store-release").
- ❌ Implicit description = stat text raw (vd "+10% all damage") thay vì identity statement.
- ❌ Implicit có tier scaling T1-T3 — implicit = identity, không gambling tier.
- ❌ Implicit override sub-type's natural physics signature.
