# Currency `mechanic-shifter` — splash modify in-pháp-trận (Tier 3)

> Tier 3 cho `currency/mechanic-shifter/`. Cascade từ root → Tier 1 → `currency/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

`mechanic-shifter` = **đan dược splash** — đan dược thả vào pháp trận khi bắt đầu, modify mechanics in-map. Effect **CHỈ trong 1 pháp trận**, không persist post-map. Trong universe: đạo sĩ trộn đan dược vào nồi pháp trận trước khi triển — đan dược thay đổi cách "luyện" diễn ra trong trận đó.

PoE analog: not exact — closest là map fragment / scarab affect mechanic rules in-map only.

---

## Game role specific

- **Risk level**: **variable** (depending on shifter type).
- **Reward**: emergent — shifter mở play pattern mới trong 1 map.
- **Scope**: **1 pháp trận only**. KHÔNG persist post-map. Player phải decide pre-map mỗi lần.
- **Drop pool**: thường T1+ với higher tier có rare variant.
- **Trụ gambling**: trụ #5 Pháp Trận Tử Sinh (variable risk lane).

---

## Design constraints

- Mechanic-shifter MUST có scope **explicit in-map only**. Frontmatter có thể có field `scope: in-map`.
- Effect MUST **shift mechanics qualitative** (vd: "linh khí Mộc trong map này hành xử như linh khí Vô Cực"; "anchor slot count +2"; "linh đan quality decay tăng 50%, drop pool nhân 1.5x") — không pure stat bonus.
- Effect áp vào **mechanics** không affect drop directly (đó là drop-bias territory) và không boss-specific (đó là boss-modifier territory).
- Lore body: "Đạo sĩ thả ... vào nồi pháp trận để ..." pattern.

---

## Lore motifs

- Material: đan dược kỳ lạ + thiên đạo nghịch + hỗn nguyên qi.
- Visual: viên đan màu hỗn loạn (đa sắc, swirl, indistinct identity).
- Tone: experimental + risky + emergent feel.

---

## Cross-references

- **Maps**: shifter áp lên pháp trận khi triển → modify mechanics trong trận đó.
- **Items**: shifter có thể change cách linh khí hành xử in-map.
- **Currency drop-bias**: KHÔNG cùng concept — drop-bias = quantitative drop rate; shifter = qualitative mechanic rule.
- **Currency boss-modifier**: KHÔNG cùng — boss-modifier = boss room only; shifter = whole map.

---

## Anti-patterns

- ❌ Shifter effect persist post-map — vi phạm scope identity.
- ❌ Shifter chỉ pure stat bonus — sai qualitative shift.
- ❌ Shifter affect drop pool primarily — đó là drop-bias territory.
- ❌ Shifter affect boss only — đó là boss-modifier territory.
- ❌ Lore generic — MUST có "trộn vào pháp trận" context.
- ❌ Effect áp universal (mọi pháp trận) → sai "1 pháp trận" identity.
