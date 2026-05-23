# Currency `drop-bias` — nguyên liệu inject lệch drop pool (Tier 3)

> Tier 3 cho `currency/drop-bias/`. Cascade từ root → Tier 1 → `currency/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

`drop-bias` = **nguyên liệu** (mảnh thiên thạch, tinh chất bí cảnh, vong khí, khoáng tinh) — đạo sĩ inject vào pháp trận để **lệch drop pool quantitative**. Hiện diện của nguyên liệu thu hút hoặc đẩy lùi loại drop cụ thể. PoE analog: scarab (modify drop pool quantitatively).

Trong universe: nguyên liệu hấp thụ một loại linh khí / đan dược nhất định — khi đặt vào pháp trận, "kéo" drop pool về phía mình. Player tích lũy nguyên liệu để bias drop session.

---

## Game role specific

- **Risk level**: **low-mid**. Bias quantitative không brick.
- **Reward**: scale drop rate / quantity cụ thể (vd nhân drop linh khí Hoả 1.5x; thêm 2 currency main drop).
- **Scope**: drop **in-map only** (effect xảy ra trên drop event trong map đó).
- **Drop pool**: bias variant theo element / category (Hoả Crystal, Star Stone, ...).
- **Trụ gambling**: phần của trụ #1 Đan dược + economy gating.

---

## Design constraints

- Drop-bias effect MUST **quantitative** (nhân drop rate / +absolute drop count), KHÔNG qualitative shift drop type new (đó là mechanic-shifter territory).
- Effect scope **drop event in-map only**. Frontmatter `scope: drop` hoặc inferred từ category.
- Stack rule: multiple drop-bias trong 1 map → multiplicative hoặc additive? MUST state rõ (suggest additive cap, multiplicative late-game).
- Lore body: "Đạo sĩ đặt ... vào pháp trận → linh khí ... bị thu hút / đẩy lùi" pattern.

---

## Lore motifs

- Material: mảnh thiên thạch, tinh chất bí cảnh, vong khí tinh, khoáng tinh nguyên, đan tinh.
- Visual: tinh thạch nhỏ, crystal cluster, mảnh + glow theo element bias.
- Tone: alchemic + investing.

---

## Cross-references

- **Maps**: drop-bias áp khi pháp trận triển → modify drop event in-map.
- **Items**: drop-bias scale drop rate linh khí cụ thể.
- **Affixes**: drop-bias có thể scale rare affix roll rate (essence pseudo).
- **Currency mechanic-shifter**: KHÔNG cùng — shifter = mechanic rule; drop-bias = drop rate.

---

## Anti-patterns

- ❌ Drop-bias qualitative shift (đổi drop type new) — sai (đó là mechanic-shifter).
- ❌ Effect persist post-map — vi phạm in-map scope.
- ❌ Affect mechanic rules không drop — sai identity.
- ❌ Stack rule không state explicit — bug nguy hiểm.
- ❌ Lore generic "drop modifier" — MUST có nguồn nguyên liệu context.
- ❌ Element bias không khớp visual color (Hoả crystal màu xanh).
