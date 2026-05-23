# CLAUDE.md Cascade Hierarchy — Design Spec

> **Status**: locked 2026-05-23 (brainstorm session)
> **Adds**: Locked decision #32
> **Affects**: `CLAUDE.md` (root), `docs/content/**`, `docs/superpowers/specs/2026-05-20-per-entity-content-bundle-design.md`

---

## 1. Vấn đề + động cơ

Claude Code và mọi AI agent dựa-trên Claude tự động load mọi `CLAUDE.md` trên đường tree-walk khi xử lý 1 file. Đây là cascade context mechanism — tương đương "ambient instructions" theo folder depth.

Hiện tại project tận dụng cơ chế này ở 2 chỗ:

- `/CLAUDE.md` (root) — project-level decisions, golden rules, tech stack.
- `docs/content/maps/CLAUDE.md` (1 file) — art-generation rules inject vào mọi map prompt. Pattern proven hữu ích: khi AI compose prompt cho `dragon-palace/`, tự động biết "phải render anchor slots + linh đan position theo `design.md` geometry".

**Cơ hội**: scale pattern này lên thành **3-tier cascade hierarchy** trong `docs/content/`. Khi AI work trên 1 entity (vd `affixes/prefix/armor-break/design.md`), cascade tự động load:

```
/CLAUDE.md                              ← project + locked decisions
docs/content/CLAUDE.md                  ← content authoring philosophy
docs/content/affixes/CLAUDE.md          ← affix là gì + rules cho mọi affix
docs/content/affixes/prefix/CLAUDE.md   ← prefix là gì + rules cho prefix
```

AI có context cực kỳ focused mà không cần đọc 200 affix sibling. Author chất lượng cao hơn, nhất quán hơn, không cần repeat rules trong từng `design.md`.

---

## 2. Locked decisions (brainstorm 2026-05-23)

| # | Decision | Rationale |
|---|---|---|
| 1 | **Depth = 3 tầng**: top (Tier 1) + category (Tier 2) + sub-type (Tier 3) | Tier 3 chỉ ở category lớn cần phân nhóm. AI có context sharp đến từng sub-type. |
| 2 | **Tier 3 chỉ áp dụng cho 4 large category** (>50 entity): `items` (78), `affixes` (190), `passive-tree` (150), `currency` (62) | Threshold rule rõ ràng. Medium/small giữ flat — overhead không đáng. |
| 3 | **Axis cho mỗi large category**: `items` → item-type (suffix), `affixes` → category (prefix/suffix/implicit), `passive-tree` → element (Ngũ Hành), `currency` → category (essence/corruption-mod/...) | 3 trong 4 dùng frontmatter field đã có. Zero new metadata. |
| 4 | **Template per tier**: Tier 1/2/3 mỗi tier có required sections riêng. Root CLAUDE.md DELEGATE content-rules xuống Tier 1 (không duplicate) | Tightness principle: Tier N không lặp Tier N-1. AI cascade tự ghép full context. |
| 5 | **Migration phased 3 bước**: B1 = Tier 1 + root refactor, B2 = Tier 2 cho cả 22 category, B3 = Tier 3 + restructure 4 large category | An toàn. `README.md` ở docs/content/ giữ nguyên cho human navigation; Tier 1 CLAUDE.md = AI authoring rules. |

---

## 3. Architecture

```
/CLAUDE.md                                       ← Root (refactored: delegate content-rules)
└── docs/content/CLAUDE.md                       ← Tier 1: authoring philosophy
    ├── items/CLAUDE.md                          ← Tier 2
    │   ├── cauldron/CLAUDE.md                   ← Tier 3
    │   │   ├── agarwood-cauldron/design.md      ← Entity
    │   │   └── … (6 more)
    │   ├── talisman/CLAUDE.md
    │   ├── fan/CLAUDE.md
    │   ├── bead/CLAUDE.md
    │   ├── lantern/CLAUDE.md
    │   ├── inkstone/CLAUDE.md
    │   ├── box/CLAUDE.md
    │   ├── vase/CLAUDE.md
    │   ├── sword/CLAUDE.md
    │   ├── statue/CLAUDE.md
    │   └── arhat/CLAUDE.md (18 entity, prefix-grouped)
    │
    ├── affixes/CLAUDE.md
    │   ├── prefix/CLAUDE.md   (80 entity)
    │   ├── suffix/CLAUDE.md   (80 entity)
    │   └── implicit/CLAUDE.md (30 entity)
    │
    ├── passive-tree/CLAUDE.md
    │   ├── water/CLAUDE.md  + entity
    │   ├── fire/CLAUDE.md
    │   ├── wood/CLAUDE.md
    │   ├── metal/CLAUDE.md
    │   └── earth/CLAUDE.md
    │
    ├── currency/CLAUDE.md
    │   ├── essence/CLAUDE.md          (12)
    │   ├── corruption-mod/CLAUDE.md   (12)
    │   ├── mechanic-shifter/CLAUDE.md (10)
    │   ├── drop-bias/CLAUDE.md        (10)
    │   ├── boss-modifier/CLAUDE.md    (10)
    │   └── main/CLAUDE.md             (8)
    │
    ├── maps/CLAUDE.md                  (existing — refactor to fit Tier 2 template)
    ├── uniques/CLAUDE.md
    ├── equipment/CLAUDE.md
    ├── ascendancies/CLAUDE.md
    ├── sets/CLAUDE.md
    ├── npcs/CLAUDE.md
    ├── bosses/CLAUDE.md
    ├── factions/CLAUDE.md
    ├── lore-entities/CLAUDE.md
    ├── acts/CLAUDE.md
    ├── regions/CLAUDE.md
    ├── arenas/CLAUDE.md
    ├── screens/CLAUDE.md
    ├── tracks/CLAUDE.md
    ├── sfx/CLAUDE.md
    ├── effects/CLAUDE.md
    └── icons/CLAUDE.md
```

**Tổng**: 1 (Tier 1) + 22 (Tier 2) + 11+3+5+6 = **48 CLAUDE.md file**.

**Frontmatter `id` không đổi** — chỉ folder path đổi cho 4 large category. Cross-references trong design.md body bằng `id` slug → không impact.

---

## 4. Tier templates

> **Framing**: CLAUDE.md = **system-prompt extension by folder depth**. KHÔNG phải file-format doc. KHÔNG chứa frontmatter schema / folder convention / file naming. Đó là `README.md` + per-entity bundle spec territory.
> Mỗi tier inject **domain knowledge + design lens + lore voice** phù hợp với depth. AI cascade tự ghép full context khi work trên 1 entity file.

### Tier 1 — `docs/content/CLAUDE.md` (universe-wide context)

Suggested sections (đủ cho mọi entity ở mọi category):

- **World setting** — Đan Kiếp universe, Cửu Châu Đan Vực, backstory Cửu Chuyển Kim Đan, đan kiếp như stakes xuyên game.
- **Vocabulary cốt lõi** — Hán-Việt → game meaning. Linh khí, linh đan, linh lực ngũ hành, pháp trận, Lò Luyện Đan, tâm ma, thiên kiếp, tông môn, bí cảnh, đan kiếp. Bảng anti-confusion ("đừng nhầm với …").
- **Ngũ Hành cosmology** — tương sinh / tương khắc, damage formula context, element identity ảnh hưởng lore + art + mechanic.
- **Design philosophy** — PoE depth + tu chân theme. Depth-first, gambling tradeoff, single-linh-đan progression, emergent composition, atlas-only endgame, mobile portrait constraint.
- **Lore voice** — huyền huyễn texture rules. Western-fallback BAN table (Mage→Đạo sĩ, Dungeon→Bí cảnh, Boss→Thí luyện…).
- **3-layer architecture context** — Forever/Map/Match — entity sit ở layer nào → audience reads khi nào → tone/density.
- **6-trụ gambling surface** — Đan dược / Đạo Quán / Tâm Ma Mod / Phong Ấn / Pháp Trận Tử Sinh / Thiên Cơ Quẻ. Mọi gambling-related entity phải state trụ + risk + fail.
- **Authoring intent** — AI là design partner, không phải transcription engine.
- **Anti-patterns (thinking pattern)** — western-fantasy mindset, isolated authoring, generic lore, scope-cutting, off-locked-decision feature.
- **Reference (format-only)** — pointers tới README.md / per-entity bundle spec / enums.md / style/ / naming-convention spec / root CLAUDE.md.

### Tier 2 — `docs/content/<category>/CLAUDE.md` (category as game concept)

Suggested sections:

- **Category trong universe** — category này IS gì trong Đan Kiếp lore + game role (vd "linh khí = pháp bảo gắn vào pháp trận, va đập với linh lực sinh effect"; "affix = roll trên item base, tu chân lore = nhuộm hồn / kết khế / khắc ấn lên pháp bảo").
- **Design principles cho category** — mechanics rule of thumb, balance philosophy, "good vs bad" entity test. Vd: linh khí "good" = có physics interaction rõ + element identity + lore arc; "bad" = chỉ stat bonus.
- **Lore voice nuance** — voice riêng category (vd lore items = lai lịch pháp bảo + chủ cũ + truyền kỳ; lore affix = quá trình nhập hồn / kết khế / chú văn; lore boss = lý do hoá kiếp).
- **Element/rarity expression** — category này expression ngũ hành + rarity ra sao về mặt design (vd: bell sub-type item = mộc/water lean; statue = thổ/kim lean).
- **Cross-system relationship** — category này tương tác với category nào (vd affixes áp lên items + equipment; passive nodes ngũ hành mirror affixes ngũ hành; currency boss-modifier ảnh hưởng pháp trận boss tier).
- **Sub-grouping rationale** — (4 large cat only) tại sao chia sub-type cách này, mỗi sub-type bao trùm design space gì.
- **Anti-patterns cho category** — design-anti-pattern (vd item: "linh khí thuần stat-bonus không có physics → BAN"; affix: "affix proc không có visual feedback → BAN").

### Tier 3 — `docs/content/<cat>/<sub>/CLAUDE.md` (sub-type lore + constraint)

Suggested sections:

- **Sub-type trong tu chân lore** — sub-type này nghĩa gì văn hoá / tu chân (vd amulet = "phù / ngọc bội đeo người, hộ thân, dẫn phúc"; cauldron = "đỉnh chứa luyện đan, có nắp có quai, biểu tượng đan đạo"; bell = "chuông pháp, vang âm phá tà, đánh thức").
- **Game role specific** — sub-type sit ở slot/board position nào, làm gì trên pháp trận, có physics behavior gì đặc trưng (vd bell = phát wave xung kích; cauldron = sink linh lực rồi release; talisman = aura persistent).
- **Design constraints** — sub-type-specific rule (vd amulet effect SHOULD subtle + persistent, không burst; cauldron effect SHOULD multi-step refine arc; bell effect SHOULD impact + radius).
- **Lore motifs** — material + visual + tone (vd amulet = ngọc/xương/răng-mãnh-thú; cauldron = đồng cổ/thiết tinh; bell = đồng/bạc, có rồng/phượng khắc).
- **Anti-patterns sub-type** — vd amulet: "amulet với burst damage → BAN, sai identity"; cauldron: "cauldron không có nắp/khói → fail visual identity".

**Tightness principle**: Tier N không lặp Tier N-1. AI cascade tự ghép. Khi write CLAUDE.md mới, hỏi: "Rule này belong tier nào? Đây là domain/design/lore knowledge hay file-format spec?" Nếu là file-format → KHÔNG vào CLAUDE.md, đẩy về README/spec.

---

## 5. Sub-grouping detail cho 4 large category

### items (78 entity) — axis = item-type suffix

Sub-folders (derived từ slug suffix):

| Sub-folder | Count | Entity examples |
|---|---|---|
| `statue/` | 7 | (TBD — confirm slugs during B3) |
| `cauldron/` | 7 | `agarwood-cauldron`, `ancient-stone-cauldron`, … |
| `talisman/` | 6 | … |
| `fan/` | 6 | `ancient-bamboo-fan`, … |
| `bead/` | 6 | … |
| `lantern/` | 5 | … |
| `inkstone/` | 5 | … |
| `box/` | 5 | `ancient-earth-box`, `ancient-metal-box`, `accelerate-box`, … |
| `vase/` | 4 | … |
| `sword/` | 4 | `ancient-keen-saber`, … |
| `arhat/` | 18 | `arhat-agarwood`, `arhat-bodhi`, `arhat-diamond`, … (special prefix series) |
| **leftover** | ~5 | `yama`, `uncontested`, `thunderbolt`, `grain`, `branch` (singletons) — group dưới `misc/` hoặc xử lý case-by-case ở B3 |

### affixes (190) — axis = category (frontmatter `category`)

| Sub-folder | Count |
|---|---|
| `prefix/` | 80 |
| `suffix/` | 80 |
| `implicit/` | 30 |

Frontmatter `category` field đã có 100% coverage. Migration = `mv affixes/<id>/ affixes/<category-value>/<id>/`.

### passive-tree (150) — axis = element (frontmatter `element`)

| Sub-folder | Count (TBD verify ở B3) |
|---|---|
| `water/` | ~30 |
| `fire/` | ~30 |
| `wood/` | ~30 |
| `metal/` | ~30 |
| `earth/` | ~30 |

Khớp 5 Ngũ Hành starts (locked decision #9). Verify count + neutral cluster nếu có ở B3.

### currency (62) — axis = category (frontmatter `category`)

| Sub-folder | Count |
|---|---|
| `essence/` | 12 |
| `corruption-mod/` | 12 |
| `mechanic-shifter/` | 10 |
| `drop-bias/` | 10 |
| `boss-modifier/` | 10 |
| `main/` | 8 |

---

## 6. Relationship matrix

> **Phân ranh strict**: CLAUDE.md các tier = **system-prompt extension** (domain/design/lore knowledge AI cần BIẾT). README + per-entity bundle spec = **file format / folder convention / workflow** (HOW to lay out files).
> Hai loại tài liệu KHÔNG được lặp content. Nếu rule thuộc loại "khi gõ file thì gõ thế nào" → README/spec. Nếu rule thuộc loại "khi nghĩ về entity thì nghĩ thế nào" → CLAUDE.md.

| File | Audience | Content | Editable by |
|---|---|---|---|
| `/CLAUDE.md` (root) | AI co-pilot + human dev | Project decisions, locked decisions table, golden rules, tech stack | Human (manual lock); AI updates locked table với confirmation |
| `docs/content/README.md` | Human dev (+ AI for orientation) | Folder structure overview, "how to add entity" workflow, format pointer | Human (manual) |
| `docs/content/CLAUDE.md` (NEW, Tier 1) | AI co-pilot | **Đan Kiếp universe, vocabulary cốt lõi, ngũ hành cosmology, design philosophy, lore voice, 3-layer + 6-trụ gambling context, thinking anti-patterns** | Human (manual); AI proposes changes via PR |
| `docs/content/enums.md` | AI + tooling | Shared vocabulary registry (enum values cho frontmatter, table conventions) | Human (manual); AI references but doesn't edit autonomously |
| `docs/content/<cat>/CLAUDE.md` (NEW, Tier 2) | AI co-pilot | **Category là gì trong universe + design principles cho category + lore voice nuance + cross-system relationship + sub-grouping rationale (4 large cat) + design anti-patterns** | Human; AI proposes |
| `docs/content/<cat>/<sub>/CLAUDE.md` (NEW, Tier 3, 4 cat only) | AI co-pilot | **Sub-type trong tu chân lore + game role specific + design constraint + lore motifs + sub-type anti-patterns** | Human; AI proposes |
| Per-entity bundle spec (`docs/superpowers/specs/2026-05-20-per-entity-content-bundle-design.md`) | AI + tooling + human | File contract (design.md/lore.md/prompt.md/art/), frontmatter schema universal, migration provenance | Human (manual); spec evolves with PR |

**Decision**: `README.md` stays (human nav, file workflow). Tier 1 CLAUDE.md không overlap với README — README nói "cái gì ở đâu", CLAUDE.md nói "khi nghĩ thì nghĩ ra sao". Cross-ref ở đầu mỗi file để reader navigate.

---

## 7. Migration phases

### B1 — Tier 1 + root refactor (this PR)

1. Create `docs/content/CLAUDE.md` với 8 required sections.
2. Refactor `/CLAUDE.md`:
   - Add locked decision #32 (this design).
   - Move content-authoring specifics ("ALWAYS do" content rules, "NEVER do" content rules) xuống `docs/content/CLAUDE.md`.
   - Keep root pointer: "Content authoring rules ở `docs/content/CLAUDE.md`".
   - Update `## File structure` mention 3-tier cascade.
3. Update `docs/superpowers/specs/2026-05-20-per-entity-content-bundle-design.md` — add cascade mention.
4. Update `docs/content/README.md` line đầu trỏ "AI authoring rules at CLAUDE.md".

### B2 — Tier 2 cho cả 22 category

1. Refactor `docs/content/maps/CLAUDE.md` to fit Tier 2 template (existing content keeps as Authoring conventions section).
2. Create 21 new `docs/content/<cat>/CLAUDE.md` files.
3. Each authored manually based on existing data + locked decisions ở root + master spec.
4. Cross-refs validated.

### B3 — Tier 3 + restructure 4 large category

1. Create restructure script `tools/restructure-large-categories.ts` — mv folders, no data edit.
2. Run for `items` first (POC) — verify derive-catalog.ts works (when exists), verify no broken cross-ref.
3. Run for `affixes`, `passive-tree`, `currency`.
4. Create Tier 3 CLAUDE.md cho mỗi sub-folder (25 total: 11+3+5+6).
5. Update locked decision #29 + master spec for new paths.

---

## 8. Update locked decisions table (root CLAUDE.md)

Add **decision #32**:

> **#32: CLAUDE.md cascade hierarchy in `docs/content/`** — 3-tier: Tier 1 (`docs/content/CLAUDE.md` universal authoring rules) + Tier 2 (`docs/content/<cat>/CLAUDE.md` category rules cho cả 22 category) + Tier 3 (`docs/content/<cat>/<sub>/CLAUDE.md` chỉ 4 large category >50 entity: items by item-type, affixes by category, passive-tree by element, currency by category). Templated per tier (tightness: Tier N không lặp Tier N-1). Root CLAUDE.md delegate content-authoring details xuống Tier 1, giữ project-level decisions. `README.md` ở docs/content/ stay cho human navigation. Migration phased B1 (Tier 1 + root refactor) → B2 (Tier 2 all 22) → B3 (Tier 3 + folder restructure for 4 large). Spec: `docs/superpowers/specs/2026-05-23-claude-md-cascade-hierarchy-design.md`. | 2026-05-23 |

---

## 9. Risks + mitigations

| Risk | Mitigation |
|---|---|
| Folder restructure phá art bundle paths trong tooling | B3 includes verification: grep `docs/content/<large-cat>/` references trong code/tooling trước khi mv |
| 48 CLAUDE.md file = maintenance burden | Templated sections + tight scope mỗi file → drift dễ spot. Anti-pattern section warns against duplication |
| `_catalog.md`/`catalog.md` regeneration script chưa exist | Documented in TODO; restructure script handles directory layout only, không touch derive logic |
| AI vẫn duplicate rules across tiers vì không enforce tightness | Tier 1 anti-pattern section explicit: "don't put category-specifics here". Add reminder ở mỗi Tier 2 template header |
| README.md ở docs/content/ drift khỏi CLAUDE.md | Both human-edited; cross-ref ở đầu mỗi file ("see X for Y") |
| Frontmatter `category` value của affix/currency thay đổi sau migration | Migration script validates frontmatter value matches new sub-folder; mismatch = abort |

---

## 10. Out of scope

- Implementing `derive-catalog.ts` tooling (separate spec).
- Auto-generation của Tier 2/3 CLAUDE.md từ frontmatter (manual authoring at concept phase; tooling later if needed).
- Migration sang `_catalog.md` index format (current `README.md` covers).
- Restructure folders cho category < 50 entity (locked: not in scope).
