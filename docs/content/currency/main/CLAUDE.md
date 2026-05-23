# Currency `main` — đan dược cơ bản hằng ngày (Tier 3)

> Tier 3 cho `currency/main/`. Cascade từ root → Tier 1 → `currency/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

`main` = **đan dược cơ bản** mọi đạo sĩ luyện được, mọi tông môn cung cấp. Đan phương phổ thông, đan sư hạng trung rang chế ra hàng loạt. PoE analog: identify scroll, alteration, chaos, jeweller — currency dùng hằng ngày.

Trong universe: đan dược main là **tài nguyên thường nhật** — không phải kiếm khó, không phải đắt. Người chơi luôn có vài viên trong người.

---

## Game role specific

- **Risk level**: **low**. Effect deterministic (identify reveal, reroll affix random pool, ...).
- **Reward**: tốc độ + utility, không build-defining single use.
- **Drop pool**: **common, T1+ map mọi tier**.
- **Trụ gambling**: trụ #1 Đan dược (low-risk lane).

---

## Design constraints

- Effect MUST **deterministic in scope** — vd "identify 1 item" luôn reveal (không fail).
- Đan dược MUST có **Hán-Việt name + lore origin** ("Đan Tẩy Niêm" / "Đan Giám Định").
- Drop rate **không scarce** — player luôn có vài viên.
- Description body MUST có **ritual context**: "Đan sư rang chế từ ... để ...".

---

## Lore motifs

- Material đan: linh thảo phổ thông, đan đất, nước suối linh, đồng đan đỉnh standard.
- Visual: viên đan màu trắng / xám / xanh nhạt (rarity common visual cue).
- Tone: utility + accessibility. KHÔNG mystical / dangerous.

---

## Cross-references

- **Items**: main đan dược dùng identify / reroll affix linh khí.
- **Affixes**: alteration analog reroll cả prefix + suffix random pool.
- **Maps**: Đan Pháp = main sub-subcategory (entry token). Đan Pháp authoring có constraint riêng (xem `maps/CLAUDE.md`).

---

## Anti-patterns

- ❌ Main đan dược risk high / brick item — sai identity (đó là corruption-mod territory).
- ❌ Drop rare / scarce — main MUST common.
- ❌ Effect random destructive (fail = lose item) — vi phạm Pain A (#4) + sai main identity.
- ❌ Lore generic "common currency" — MUST có Hán-Việt name + đan phương context.
- ❌ Effect không deterministic in scope (vd "identify với 80% success rate").
