# Currency `boss-modifier` — boss mod khi pháp trận → boss (Tier 3)

> Tier 3 cho `currency/boss-modifier/`. Cascade từ root → Tier 1 → `currency/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

`boss-modifier` = **hồn tinh / vật phẩm boss** (Phong Vũ Hồn, Long Hồn, Tâm Ma Hồn) — đạo sĩ inject vào pháp trận để **change boss behavior** ở boss room. PoE analog: not exact — closest là invitation / boss-summon modifier. Trong universe: hồn boss + chú văn → khi boss spawn, hấp thụ hồn → boss biến tướng / strengthen / phase mới.

Mỗi boss-modifier có **boss type alignment** — Phong Vũ Hồn cho thiên kiếp boss, Long Hồn cho long boss, Tâm Ma Hồn cho tâm ma boss.

---

## Game role specific

- **Risk level**: **variable** — boss-mod scale boss difficulty + reward.
- **Reward**: scaled boss loot — high-tier mod = better drop + chance unique boss-specific.
- **Scope**: **boss room only** (effect kích phát khi pháp trận → boss room).
- **Drop pool**: thường T6+ (mid-late game gating).
- **Trụ gambling**: trụ #5 Pháp Trận Tử Sinh (variable risk).

---

## Design constraints

- Boss-modifier MUST có **boss type alignment** (Dị Tượng / Tâm Ma / Thiên Kiếp). Frontmatter `bossType: <type>` hoặc inferred.
- Effect MUST **change boss behavior** (extra phase, modify attack pattern, summon add, environmental hazard layer) — không pure stat bonus +HP/+damage.
- Scope **boss room only**. Effect không apply pre-boss ván thường.
- Lore body: "Đạo sĩ khắc hồn ... vào pháp trận → boss khi xuất hiện sẽ hấp thụ ... → phát động ..." pattern.

---

## Lore motifs

- Material: hồn tinh boss, vật phẩm boss historical, chú văn long / phụng / tâm ma.
- Visual: hồn dạng ribbon swirl + boss type icon embedded.
- Tone: invocation + summon + danger-amplifying.

---

## Cross-references

- **Bosses**: boss-modifier alignment boss type (xem `bosses/CLAUDE.md`).
- **Arenas**: boss-modifier có thể change arena environmental hazard.
- **Maps**: boss-modifier áp lên pháp trận khi triển → kích phát ở boss room.
- **Uniques**: high-tier boss-modifier scale chance unique drop.

---

## Anti-patterns

- ❌ Boss-modifier áp non-boss ván — vi phạm scope.
- ❌ Pure stat bonus +HP/+damage — sai (boss-mod MUST change behavior qualitatively).
- ❌ Boss type mismatch (Thiên Kiếp hồn dùng cho Dị Tượng boss) — sai alignment.
- ❌ Brick item drop — sai (boss-mod chỉ scale boss + drop, không brick player gear).
- ❌ Lore generic "boss buff" — MUST có hồn boss / chú văn context.
- ❌ Effect persist post-boss-room (ván tiếp theo vẫn buff) — vi phạm scope.
