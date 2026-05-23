# Wood (Mộc) — sinh trưởng, hồi sinh, dây leo, regen (Tier 3)

> Tier 3 cho `passive-tree/wood/`. Cascade từ root → Tier 1 → `passive-tree/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

Mộc (木) = **sinh trưởng, hồi sinh, dây leo, regen, life**. Một trong 5 Ngũ Hành. Đạo lý Mộc: "Cây cỏ vươn lên không ngừng, gốc rễ ăn sâu, mất rồi sinh lại." Đạo sĩ tu Mộc ngộ đạo về **growth + persistence + life-affinity**.

**Tương sinh**: Thuỷ → Mộc (thuỷ nuôi mộc). **Tương khắc**: Mộc → Thổ (mộc khắc thổ — rễ ăn đất).

---

## Game role specific

- **Build cluster**: `wood-small`, `wood-notable`, `wood-keystone`.
- **Stat domain**: regen (linh đan stability hồi), life-affinity (linh khí Mộc buff), dây leo (chain root), sinh trưởng (scale với time/charge).
- **Pivot path late**: Mộc → Hoả (tương sinh, mộc sinh hoả) là natural pivot.

---

## Design constraints

- Mọi wood node MUST có **element identity Mộc** trong cluster name + effect.
- Cluster pattern `wood-<type>-<descriptor>`: `wood-small-wood-regen-2`, `wood-notable-longevity`, `wood-keystone-X`.
- Notable + keystone MUST có named effect huyền huyễn (vd "Trường Sinh Mạch", "Hồi Xuân Khế").
- Visual node icon: lục mộc glow.

---

## Lore motifs

- Đạo lý: sinh, trưởng, bền, hồi.
- Texture: cây cổ thụ, dây leo, lá xanh, suối nguồn, rừng nguyên.
- Voice: nurturing, patient, persistent.

---

## Cross-references

- **Items**: wood node buff linh khí Mộc.
- **Affixes**: wood node tăng damage mọi affix Mộc.
- **Equipment (Lò)**: wood node buff Lò parts Mộc.
- **Ascendancies**: Mộc Đạo Phái (nếu có) attach vào wood keystone cluster.

---

## Anti-patterns

- ❌ Cluster name sai pattern.
- ❌ Aggressive burst primary — đó là Hoả territory.
- ❌ Generic "+5% wood damage" không huyền huyễn texture name.
- ❌ Notable không có named effect.
- ❌ Keystone "bigger number" không rewrite rule.
- ❌ Element drift (fire node trong wood cluster).
- ❌ Mộc effect "instant heal" — sai (Mộc = continuous regen / growth, không instant).
