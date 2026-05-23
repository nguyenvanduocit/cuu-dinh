# Water (Thuỷ) — dòng chảy, băng, thanh tẩy (Tier 3)

> Tier 3 cho `passive-tree/water/`. Cascade từ root → Tier 1 → `passive-tree/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

Thuỷ (水) = **dòng chảy, băng, thanh tẩy, sink**. Một trong 5 Ngũ Hành. Đạo lý Thuỷ: "Như nước chảy đá mòn, thuận thì sống, nghịch thì tan." Đạo sĩ tu Thuỷ ngộ đạo về **adaptability + persistence + cleansing**.

**Tương sinh**: Kim → Thuỷ (kim sinh thuỷ). **Tương khắc**: Thuỷ → Hoả (thuỷ khắc hoả).

---

## Game role specific

- **Build cluster**: `water-small`, `water-notable`, `water-keystone`.
- **Stat domain**: slow (chậm linh lực), sink (kéo về center), thanh tẩy (xoá debuff/corruption), regen (dòng chảy hồi phục), băng (freeze brief).
- **Pivot path late**: Thuỷ → Mộc (tương sinh, water nuôi wood) là natural pivot.

---

## Design constraints

- Mọi water node MUST có **element identity Thuỷ** trong cluster name + effect.
- Cluster pattern `water-<type>-<descriptor>`: `water-small-flow-1`, `water-notable-pure-heart-full`, `water-keystone-X`.
- Notable + keystone MUST có named effect huyền huyễn (vd "Lưu Thuỷ Bản Mạch", "Trừng Tâm Khế").
- Visual node icon: xanh thuỷ glow per `style/element-tokens.md`.

---

## Lore motifs

- Đạo lý: thuận, mềm, đoạn, sạch.
- Texture: dòng sông, hồ tĩnh, băng nguyên, thuỷ triều, mưa rơi.
- Voice: contemplative, calm-but-relentless.

---

## Cross-references

- **Items**: water node buff linh khí Thuỷ (cross-ref `items/` Thuỷ element).
- **Affixes**: water node tăng damage mọi affix Thuỷ.
- **Equipment (Lò)**: water node buff Lò parts Thuỷ (đặc biệt Khắc Phù Thuỷ).
- **Passive tree neutral (`../neutral/`)**: bridge nodes water-X-bridge cho cross-element pivot.
- **Ascendancies**: Thuỷ Đạo Phái (nếu có) attach vào water keystone cluster.

---

## Anti-patterns

- ❌ Cluster name sai pattern (`water-utility-X` thay vì `water-small-X`).
- ❌ Node effect tăng Hoả damage (sai Thuỷ identity).
- ❌ Burst aggressive primary — đó là Hoả territory.
- ❌ Generic "+5% water damage" không huyền huyễn texture name.
- ❌ Notable không có named effect (chỉ stat bump).
- ❌ Keystone "bigger number" không rewrite rule.
- ❌ Element drift trong cluster (fire node trong water cluster).
