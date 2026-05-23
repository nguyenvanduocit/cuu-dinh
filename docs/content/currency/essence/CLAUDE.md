# Currency `essence` — đan tinh chế force-roll (Tier 3)

> Tier 3 cho `currency/essence/`. Cascade từ root → Tier 1 → `currency/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

`essence` = **đan tinh chế cao cấp** — đan dược kết tinh từ tâm tinh / hồn tinh / nguyên khí tu sĩ thượng cấp. PoE analog: essence (force-roll specific affix). Trong universe: đan sư tinh luyện được khi đã đạt cảnh giới đột phá hoặc thu thập đủ nguyên liệu hiếm.

Mỗi essence variant tinh chế từ **một nguồn cụ thể** (Mộc Essence từ linh thảo cổ, Hoả Essence từ nguyên hồn hoả linh, Kim Essence từ tinh thiết, ...).

---

## Game role specific

- **Risk level**: **mid**. Force-roll specific affix → reward deterministic trong scope (đảm bảo affix type), random trong tier.
- **Reward**: build-enabling — guarantee 1 affix nhất định trên item.
- **Drop pool**: **T6+ map** (mid-game gating).
- **Trụ gambling**: trụ #1 Đan dược (mid-risk lane).

---

## Design constraints

- Essence MUST **force-roll affix specific** (vd `wood-essence` force roll 1 affix Mộc prefix), KHÔNG random pool.
- Element-tagged essence (Mộc / Hoả / Thổ / Kim / Thuỷ essence) + neutral essence (crit-essence, ...).
- Description MUST state **affix nào** sẽ be forced + tier random range.
- Lore body explicit ritual: "Đan sư tinh luyện từ ... để khắc ...".

---

## Lore motifs

- Material: linh thảo cổ thượng cấp, hồn tinh dị thú, nguyên khí khoáng thạch, tâm tinh tu sĩ.
- Visual: viên đan đẹp + element color glow + crystalline texture.
- Tone: cao cấp + specialized + reverence.

---

## Cross-references

- **Items**: essence áp lên linh khí compatible.
- **Affixes**: essence force-roll specific prefix (xem `affixes/prefix/`).
- **Passive tree**: element essence synergy với element node tree.

---

## Anti-patterns

- ❌ Essence random affix pool — sai force-roll identity (đó là main territory).
- ❌ Drop common T1 — sai gating (essence MUST T6+).
- ❌ Element-tagged essence force-roll affix khác element (Mộc essence force Hoả affix) — sai element identity.
- ❌ Description không state affix nào sẽ forced.
- ❌ Reward random brick item — sai (essence = mid risk, không brick).
- ❌ Lore generic — MUST có nguồn tinh luyện cụ thể.
