# Per-entity content bundle pivot

**Status**: Locked 2026-05-20 (lần 2 cùng ngày) — supersedes decision #29 (2026-05-20 lần 1).
**Context**: Brainstorm session 2026-05-20 sau khi user feedback cấu trúc `docs/data/` + `docs/art-prompts/` chia tách theo concern là **khó chịu** khi work trên 1 entity cụ thể.

## Problem

Hiện trạng (decision #29 lần 1, 2026-05-20 sáng):

- `docs/data/*.md` — 11 bảng Markdown SSOT theo concern "stats/mechanics" (78 items, 30 uniques, 190 affixes, …)
- `docs/art-prompts/<cat>/*.md` — 17 file SSOT theo concern "MJ prompt" chia theo category × element/slot
- `docs/art/generated/*.jpg` — sample generated art (untracked)
- `docs/*.md` 17 file — design rationale + narrative + UI + audio + lore (cross-cutting)

Hệ quả khi work trên 1 entity (ví dụ `bronze-bell`):

- Stats sống ở `docs/data/items.md` row 8
- MJ prompt sống ở `docs/art-prompts/linh-khi/metal.md` entry block
- Concept art sống ở `docs/art/generated/bronze-bell-grok.jpg`
- Flavor prose sống lẫn trong `docs/data/lore.md`

→ Bốn chỗ. Edit 1 entity cần touch ≥3 file ở ≥3 thư mục. AI agent dispatch per-entity bị fragmented. Git diff không local. Merge conflict cao khi batch generate.

Đồng pattern lặp lại với Acts (narrative trong `act-narrative.md`, tutorial trong `tutorial-script.md`, lore trong `lore.md`), Bosses (mechanic trong `boss-patterns.md`, art trong `art-prompts/bosses-npcs/`, dialogue lẫn lore.md), NPCs, Screens, Regions, Audio tracks.

## Decision

Pivot toàn bộ concept-phase content sang **per-entity folder bundle**:

```
docs/content/<category>/<entity-id>/
├── design.md         # YAML frontmatter (machine-readable stats) + markdown body (mechanics, WHY notes)
├── lore.md           # Vietnamese flavor prose (optional — chỉ tạo khi có content)
├── prompt.md         # MJ /imagine block + biến thể (optional)
└── art/              # generated concept image references (optional)
    └── concept-v*.jpg
```

Mỗi entity = 1 folder = SSOT của entity đó. Cross-entity table view = **derived** từ folder qua script `tools/derive-catalog.ts`, output là `_catalog.md` ở cấp category. Underscore prefix báo hiệu "đừng edit tay, regenerate".

### Nguyên tắc nền

1. **Colocation triệt để**: code/content used together → declared together. 1 entity = 1 folder.
2. **SSOT là folder, table là derived**: đảo ngược pattern cũ. Implementation phase JSON+Zod regenerate từ `design.md` frontmatter.
3. **Flatten trong category**: không nest theo element/type. Sub-grouping (metal items) lấy từ frontmatter, không từ path.
4. **Optional files**: tạo khi có content. Affix không có lore prose → không tạo `lore.md`. Đan dược không có art polish → không tạo `art/`.
5. **Cross-cutting docs stay flat**: doc về formula/flow/philosophy/decision không phải entity → giữ ở `docs/*.md`.

### Trade-off accepted

- ~568+ entity folder × multi-file = ~1700+ markdown file (vs ~30 file hiện tại). User accepted full warning.
- Mất "scroll qua 78-row table" cho balance work → bù bằng `_catalog.md` auto-generated.
- Bulk edit khó → bù bằng script tooling khi cần (sed across folder).
- Atomic entity (190 affix × ~9 dòng/affix) làm folder = overkill về cognitive nhưng AI-friendly (1 agent = 1 folder, zero merge conflict).

## Architecture

### Top-level layout

```
docs/
├── content/                              # ⭐ NEW — per-entity SSOT
│   ├── _style/                           # shared MJ tokens (moved from art-prompts/_style/)
│   │   ├── convention.md
│   │   ├── style-suffix.md
│   │   ├── palette.md
│   │   ├── element-tokens.md
│   │   ├── rarity-tokens.md
│   │   └── base-noun-dictionary.md
│   ├── _enums.md                         # enum vocabulary (moved from data/README.md)
│   ├── README.md                         # cách dùng + category index + naming convention
│   │
│   # === Item-shaped (10 categories, ~586 entity) ===
│   ├── items/             # 78  — linh khí (was data/items.md + art-prompts/linh-khi/)
│   ├── uniques/           # 30  — cổ vật (was data/uniques.md + art-prompts/co-vat/)
│   ├── affixes/           # 190 — prefix+suffix+implicit (was data/affixes.md + art-prompts/affixes/)
│   ├── equipment/         # 50  — lò parts (was data/equipment.md + art-prompts/furnace-parts/)
│   ├── currency/          # 62  — đan dược+nguyên liệu+tâm ma (was data/currency.md + art-prompts/currency/)
│   ├── passive-tree/      # 150 — tinh điểm node (was data/passive-tree.md + art-prompts/passive-tree/nodes-*.md)
│   ├── ascendancies/      # 5   — đạo phái (was data/ascendancies.md + art-prompts/passive-tree/ascendancies.md)
│   ├── maps/              # 10  — pháp trận blueprint (was data/maps.md + map-layouts.md)
│   ├── sets/              # 3   — set bonus (was data/sets.md + art-prompts/sets/)
│   ├── la-han/            # 18  — 18 La Hán (was art-prompts/la-han/)
│   │
│   # === Character-shaped (4 categories, ~40 entity) ===
│   ├── npcs/              # 14  — character bible + dialogue + portrait (was art-prompts/bosses-npcs/npcs.md + lore.md §5)
│   ├── bosses/            # ~11 — 3 boss type + 5 act boss + 3 atlas mega-boss (was art-prompts/bosses-npcs/bosses.md + boss-patterns.md §1-6)
│   ├── factions/          # ~5  — tông môn (was lore.md §4)
│   ├── lore-entities/     # ~18 — 9 đỉnh + 7 đan sư + Cao Tổ + Lò Thần (was lore.md §10)
│   │
│   # === Narrative-shaped (1 category, 5 acts + ~60 nodes) ===
│   ├── acts/              # 5 — Hồi 1-5 với nested nodes (was act-narrative.md + tutorial-script.md + onboarding.md §2)
│   │   ├── act-1/
│   │   │   ├── overview.md      # bối cảnh + spine + emotion arc + reward
│   │   │   ├── boss.md          # → ../../bosses/tam-ma-son-moc/
│   │   │   ├── nodes/           # 10-12 node-level encounter (Slay-the-Spire style)
│   │   │   │   ├── khai-dan/    # tutorial pháp trận #1
│   │   │   │   │   ├── narrative.md
│   │   │   │   │   ├── script.md
│   │   │   │   │   └── art/
│   │   │   │   ├── tuong-sinh/
│   │   │   │   └── …
│   │   │   └── art/
│   │   ├── act-2/ act-3/ act-4/ act-5/
│   │   └── README.md            # spine + emotion arc cross-Act
│   │
│   # === Spatial-shaped (2 categories, 10 entity) ===
│   ├── regions/           # 7 — biome (was art-prompts/environments/regions.md + lore.md §3)
│   ├── arenas/            # 3 — boss arena (was art-prompts/environments/boss-arenas.md)
│   │
│   # === UI/Visual-shaped (1 category, ~27 entity) ===
│   ├── screens/           # ~27 — UI wireframe + concept art unified (was ui-wireframes.md §2-14 + art-prompts/screens/screens.md)
│   │
│   # === Audio-shaped (2 categories, ~95 entity — sfx exception) ===
│   ├── tracks/            # 15+ — music brief + reference + Suno prompt (was audio-spec.md §1)
│   └── sfx/               # ~80 — TABLE EXCEPTION: chỉ 1 file table.md (per-sfx bundle quá overkill)
│
│   # === Effects-shaped (2 categories, count TBD) ===
│   ├── effects/           # particle FX (was art-prompts/effects/effects.md) — bundle nếu ≥10 entity, table nếu ít
│   └── icons/             # UI icon (was art-prompts/effects/icons.md) — bundle hoặc table tuỳ count
│
├── superpowers/specs/                    # unchanged
│
# === Cross-cutting docs (stay flat) ===
├── combat-math.md                        # formula doc
├── economy-flow.md                       # flow diagram
├── progression-curve.md                  # curve math
├── art-direction.md                      # art style philosophy
├── tech-stack.md                         # locked tech decision
├── roadmap.md                            # timeline
├── accessibility.md                      # checklist
├── onboarding.md                         # meta UX design (5-act + tutorial philosophy)
├── lore.md                               # giữ: cosmology + history timeline + tone + voice guide (per-entity đã dissolve)
├── audio-spec.md                         # giữ: philosophy + mixing + adaptive (per-track đã dissolve)
└── boss-patterns.md                      # giữ: pattern philosophy + type definition (per-boss instance đã dissolve)
```

### Per-entity file layout (locked)

```
docs/content/items/bronze-bell/
├── design.md                # required
├── lore.md                  # optional — chỉ tạo khi có Vietnamese flavor prose
├── prompt.md                # optional — chỉ tạo khi có MJ /imagine block
└── art/                     # optional — chỉ tạo khi có generated reference image
    ├── concept-v1.jpg
    └── concept-v2.jpg
```

#### `design.md` template

```markdown
---
id: bronze-bell
ten: Chuông Đồng
type: bell
element: metal
rarity: Common
dropPool: Common
tags: [metal, convert, push]
---

# Chuông Đồng (`bronze-bell`)

## Implicit
Convert linh lực qua đây → Kim. Tạo sóng đẩy linh khí khác 80px.

## Mechanics chi tiết
Chuông kích hoạt khi linh lực Mộc/Thuỷ/… đi qua. Sóng đẩy radius 80px,
intensity giảm linear theo distance.

**WHY 80px**: balance với map tile 16px = 5 tile. Thử 60px → quá yếu, 100px → chain đẩy quá xa (balance pass 2026-05-19).

## Notes
- Synergy mạnh với `white-tiger-bead` (sau 3 hit phun Kim châm pierce qua chuông push line)
- Anti-synergy với `green-nectar-vase` (Mộc convert ngược)
```

#### `lore.md` template (optional)

```markdown
# Chuông Đồng — Lore

Chuông đồng cổ luyện từ thời Hùng Vương, gõ một tiếng thì linh khí trong lò thức giấc. Theo truyền thuyết, mỗi chuông trong thời Hùng đều được khắc bằng máu chim Lạc — máu khô tạo âm cao đặc trưng. Khi đan sư chấp niệm Kim hành lâu năm, chuông tự rung dù không gõ. Đó là dấu hiệu linh đan sắp viên mãn.
```

#### `prompt.md` template (optional)

```markdown
# Chuông Đồng — MJ v6 prompt

**Format**: append `[STYLE SUFFIX]` từ `../../_style/style-suffix.md`.

```
/imagine prompt: a single ancient bronze ritual bell, forged metal with a sharp angular silhouette and cold metallic gleam, imperial gold (#D4AF37) edge light, plain dull finish, simple thin gray border frame, no glow, centered game item icon on dark ink background, [STYLE SUFFIX] --ar 1:1 --stylize 120
```

## Variants

### Aged variant (drop pool corrupt)
… (nếu có biến thể)
```

### Category-level files

Mỗi category folder có 2 file meta ở root:

```
docs/content/items/
├── README.md                # design rationale + cách dùng + naming + WHY existence
├── _catalog.md              # AUTO-GENERATED table view derive từ <id>/design.md frontmatter
├── bronze-bell/
├── white-tiger-sword/
└── …
```

- `README.md`: rationale narrative (đáng tin cậy human-edited). Gộp `docs/data/README.md` index + `docs/content.md` section + per-category README hiện tại trong `docs/art-prompts/<cat>/`.
- `_catalog.md`: auto-generated. Underscore prefix = "đừng edit tay". Script chạy `bun tools/derive-catalog.ts items` rebuild từ frontmatter.

### Dissolve map

Doc hiện tại → per-entity bundle:

| Source | Dissolves to |
|---|---|
| `docs/data/items.md` | `content/items/<id>/design.md` × 78 |
| `docs/data/uniques.md` | `content/uniques/<id>/design.md` × 30 |
| `docs/data/affixes.md` | `content/affixes/<id>/design.md` × 190 |
| `docs/data/equipment.md` | `content/equipment/<id>/design.md` × 50 |
| `docs/data/currency.md` | `content/currency/<id>/design.md` × 62 |
| `docs/data/passive-tree.md` | `content/passive-tree/<id>/design.md` × 150 |
| `docs/data/ascendancies.md` | `content/ascendancies/<id>/design.md` × 5 |
| `docs/data/maps.md` + `docs/map-layouts.md` §3 | `content/maps/<id>/design.md` + `geometry.md` × 10 |
| `docs/data/sets.md` | `content/sets/<id>/design.md` × 3 |
| `docs/data/lore.md` (item flavor) | `content/items/<id>/lore.md` |
| `docs/data/lore.md` (NPC dialogue) | `content/npcs/<id>/dialogue.md` |
| `docs/data/README.md` | `content/_enums.md` |
| `docs/art-prompts/_style/*` | `content/_style/*` |
| `docs/art-prompts/<cat>/*.md` (17 file) | `content/<cat>/<id>/prompt.md` × per entity |
| `docs/art/generated/*.jpg` | `content/<cat>/<id>/art/` per slug match |
| `docs/act-narrative.md` | `content/acts/<n>/overview.md` + `nodes/<id>/narrative.md` × 5 Act × 10-12 node |
| `docs/tutorial-script.md` §1-11 | `content/acts/act-1/nodes/{khai-dan,tuong-sinh,tuong-khac,…}/script.md` |
| `docs/tutorial-script.md` §12-13 (global rules) | `content/acts/README.md` hoặc onboarding.md (cross-cutting) |
| `docs/onboarding.md` §2.3-2.7 per-Act | `content/acts/<n>/overview.md` |
| `docs/onboarding.md` §8 per-Act narrative | merged vào `content/acts/<n>/overview.md` |
| `docs/onboarding.md` §9 act node template | `content/acts/README.md` |
| `docs/onboarding.md` còn lại (philosophy, anti-overwhelm, veteran skip, …) | stay flat |
| `docs/ui-wireframes.md` §2-14 | `content/screens/<id>/wireframe.md` × ~14 + interaction-spec |
| `docs/ui-wireframes.md` §0-1 (principles, nav map) | stay flat trong `ui-wireframes.md` (cross-cutting) |
| `docs/art-prompts/screens/screens.md` (13 concept) | merged vào `content/screens/<id>/prompt.md` nếu khớp UI screen; new entity nếu là concept-only scene |
| `docs/lore.md` §5 NPC character bibles | `content/npcs/<id>/lore.md` |
| `docs/lore.md` §10 lore artifacts | `content/lore-entities/<id>/lore.md` |
| `docs/lore.md` §4 factions | `content/factions/<id>/lore.md` |
| `docs/lore.md` §6 per-Act narrative beats | merged vào `content/acts/<n>/overview.md` |
| `docs/lore.md` §0-3, §7-9, §11-12 (cosmology/history/tone/voice/continuity/decision-log) | stay flat |
| `docs/audio-spec.md` §1 music tracks | `content/tracks/<id>/brief.md` × 15+ |
| `docs/audio-spec.md` §2 SFX library | `content/sfx/table.md` (TABLE EXCEPTION — không per-sfx) |
| `docs/audio-spec.md` §0, §3-10 (philosophy, voice, mixing, …) | stay flat |
| `docs/boss-patterns.md` §1-3 instances (Dị Tượng/Tâm Ma/Thiên Kiếp) | `content/bosses/<id>/mechanic.md` |
| `docs/boss-patterns.md` §4 act bosses | `content/bosses/act-<n>-boss/mechanic.md` |
| `docs/boss-patterns.md` §5-6 atlas mega + Tâm Ma Vĩ Đại | `content/bosses/<id>/mechanic.md` |
| `docs/boss-patterns.md` §0 §7 §8 (philosophy + principles + log) | stay flat |
| `docs/passive-tree-design.md` | `content/passive-tree/README.md` |
| `docs/content.md` (whole file) | fragments rải vào từng `content/<category>/README.md`; meta intro vào `content/README.md` |

Stay flat (cross-cutting):
- `docs/combat-math.md`, `docs/economy-flow.md`, `docs/progression-curve.md`, `docs/art-direction.md`, `docs/tech-stack.md`, `docs/roadmap.md`, `docs/accessibility.md`
- `docs/onboarding.md` (sau khi tỉa per-Act dissolve out)
- `docs/lore.md` (cosmology + history + tone + voice + continuity — sau khi character/faction/artifact dissolve out)
- `docs/audio-spec.md` (philosophy + mixing + voice — sau khi per-track dissolve out)
- `docs/boss-patterns.md` (philosophy + principles — sau khi per-boss-instance dissolve out)
- `docs/ui-wireframes.md` (design principles + nav state diagram — sau khi per-screen dissolve out)

## Naming conventions

Áp dụng nguyên decision #27 (English ID, Vietnamese display) + decision #29 (kebab-case slug ASCII):

- Folder name (entity ID) = kebab-case ASCII, regex `^[a-z0-9]+(-[a-z0-9]+)*$`. Ví dụ `bronze-bell`, `tam-ma-son-moc`, `khai-dan`.
- Folder name = `id` trong frontmatter — MUST khớp.
- Inside `design.md`: `ten` = Vietnamese full diacritics NFC, `id` = English slug.
- Category folder name = English plural noun (`items/`, `bosses/`, `acts/`, `screens/`, `tracks/`, `sfx/`).
- Sub-node folder (Act node) = English kebab-case theo nature (`khai-dan/`, `moc-linh-encounter/`).
- Meta file convention: `README.md` (human-edited rationale) vs `_catalog.md` / `_enums.md` (machine-managed, underscore prefix).

## Migration plan

~30 file → ~1700 file. Atomic Git operation. Script-based.

### `tools/migrate-to-bundle.ts`

```typescript
// Pseudo-code outline — full impl khi implementation phase
import { parse as parseMd } from '...';
import { mkdir, writeFile, copyFile } from 'node:fs/promises';

async function migrate() {
  // 1. Item-shaped: parse table-style data, write per-entity design.md
  for (const cat of ['items', 'uniques', 'affixes', 'equipment', 'currency',
                     'passive-tree', 'ascendancies', 'maps', 'sets']) {
    const rows = parseMdTable(`docs/data/${cat}.md`);
    for (const row of rows) {
      const dir = `docs/content/${cat}/${row.id}`;
      await mkdir(dir, { recursive: true });
      await writeFile(`${dir}/design.md`, renderDesign(row));
    }
  }

  // 2. Art prompts: parse per-entity `/imagine` block, write prompt.md
  for (const file of glob('docs/art-prompts/**/*.md')) {
    const entries = parsePromptEntries(file); // by `### \`<id>\`` heading
    for (const e of entries) {
      const cat = mapArtPromptDirToContentCat(dirname(file));
      const dir = `docs/content/${cat}/${e.id}`;
      await mkdir(dir, { recursive: true });
      await writeFile(`${dir}/prompt.md`, renderPrompt(e));
    }
  }

  // 3. Lore: split `docs/data/lore.md` item flavor vs NPC dialogue
  const loreEntries = parseLoreEntries('docs/data/lore.md');
  for (const e of loreEntries) {
    const target = e.kind === 'item-flavor'
      ? `docs/content/items/${e.id}/lore.md`
      : `docs/content/npcs/${e.id}/dialogue.md`;
    await writeFile(target, e.body);
  }

  // 4. Acts: parse `docs/act-narrative.md` + `docs/onboarding.md` §2.3-2.7 + §8 per-Act
  //    → 5 Act × overview.md
  //    + parse `docs/tutorial-script.md` § per pháp trận/NPC node → act-1/nodes/*/script.md
  // (chi tiết trong implementation plan)

  // 5. Style tokens: move `docs/art-prompts/_style/*` → `docs/content/_style/*`
  for (const file of glob('docs/art-prompts/_style/*.md')) {
    await copyFile(file, file.replace('art-prompts', 'content'));
  }

  // 6. Enum vocab: move `docs/data/README.md` → `docs/content/_enums.md`
  // 7. Generated art: move `docs/art/generated/<slug>-*.jpg` → `docs/content/<cat>/<slug>/art/`

  // 8. Sanity check
  for (const cat of ALL_CATEGORIES) {
    const expectedIds = readCsvProvenance(cat);
    const actualDirs = listdir(`docs/content/${cat}`);
    assertSetEqual(expectedIds, actualDirs);
  }
}
```

### Migration sequence (atomic)

1. Branch `restructure/per-entity-bundle` từ `develop`
2. Implement + test `tools/migrate-to-bundle.ts` standalone (dry-run mode)
3. Run dry-run → diff output, verify entity count = 568 expected
4. Run real → `docs/content/` populated
5. `git add docs/content/`
6. Verify sanity (manual sample: read 5 random entity, check design+lore+prompt+art all present nếu applicable)
7. `git rm -r docs/data docs/art-prompts`
8. `git rm docs/art-prompts` (whole dir)
9. Move `docs/art/generated/*.jpg` đã được script copy sang `content/<cat>/<slug>/art/` → `git rm docs/art/`
10. Update `docs/lore.md` (tỉa §4 §5 §6 §10), `docs/audio-spec.md` (tỉa §1 §2), `docs/boss-patterns.md` (tỉa §1-6 instances), `docs/ui-wireframes.md` (tỉa §2-14), `docs/onboarding.md` (tỉa §2.3-2.7 §8), `docs/act-narrative.md` (delete entirely), `docs/tutorial-script.md` (delete entirely), `docs/passive-tree-design.md` (move to `content/passive-tree/README.md` + delete), `docs/content.md` (delete entirely after distributing fragments), `docs/map-layouts.md` (tỉa §3, có thể delete sau khi geometry move)
11. Update `CLAUDE.md` (decision #29 revision + file tree section + NEVER/ALWAYS sections)
12. Single commit: "Pivot content sang per-entity bundle (decision #29 revised lần 2)"
13. PR review (self-review trong session khác hoặc agent dispatch) → merge

### Tooling needed

```
tools/
├── migrate-to-bundle.ts        # one-shot migration script
├── derive-catalog.ts           # regenerate _catalog.md per category from frontmatter
├── validate-bundle.ts          # check every <id>/design.md has valid frontmatter + matching folder name
└── stats.ts                    # entity count per category, missing lore/prompt/art flag
```

Implementation phase còn cần:

- `tools/regenerate-zod-schemas.ts`: từ `content/<cat>/<id>/design.md` frontmatter → Zod schema + TS type trong `packages/shared/src/<cat>.ts`
- `tools/regenerate-json-content.ts`: → `packages/shared/data/<cat>.json` cho client load

## CLAUDE.md updates

### Decision #29 revised (lần 2)

```diff
- | 29 | **Concept-phase content authoring**: game content (item, affix, equipment,
-      currency, passive tree, ascendancy, map, set, lore) sống trong `docs/data/*.md`
-      — bảng Markdown faithful, human-readable, single source of truth của concept
-      phase. Structured JSON + Zod schema regenerate từ `docs/data/` khi vào
-      implementation phase. Design docs = rationale + link sang `docs/data/`.
-      Nguyên tắc data-driven giữ nguyên, chỉ sắp xếp lại thứ tự (Zod quay lại ở
-      implementation). Tech stack #26 không đổi
-      | 2026-05-20 |
+ | 29 | **Concept-phase content authoring**: per-entity folder bundle trong
+      `docs/content/<category>/<entity-id>/` — mỗi entity 1 folder = SSOT
+      với `design.md` (YAML frontmatter machine-readable + markdown mechanics)
+      + `lore.md` + `prompt.md` + `art/` (optional khi có content). Cross-entity
+      table view = derived (`_catalog.md` regenerate qua `tools/derive-catalog.ts`).
+      22 category bao trùm item-shaped (items, uniques, affixes, equipment,
+      currency, passive-tree, ascendancies, maps, sets, la-han), character-shaped
+      (npcs, bosses, factions, lore-entities), narrative-shaped (acts với nested
+      nodes), spatial (regions, arenas), UI/visual (screens unified), audio
+      (tracks bundled, sfx table-exception), effects/icons. Cross-cutting docs
+      (combat-math, economy-flow, progression-curve, lore cosmology, audio
+      philosophy, boss philosophy, UI principles, …) stay flat ở `docs/*.md`.
+      Implementation phase: Zod schema + JSON regenerate từ `design.md` frontmatter.
+      | 2026-05-20 / revised 2026-05-20 (lần 2) |
```

### File structure tree section

Replace toàn bộ block `lu-dan-game/` tree trong CLAUDE.md với tree mới (đã sketch ở § Architecture trên).

### NEVER do section

```diff
- - Hardcode item/affix/map/passive data. Concept phase: content sống trong
-   `docs/data/*.md` (single source of truth). Implementation phase: regenerate
-   structured JSON + Zod schema từ `docs/data/`.
+ - Hardcode item/affix/map/passive data. Concept phase: content sống trong
+   `docs/content/<category>/<entity-id>/` per-entity bundle (SSOT). Implementation
+   phase: regenerate structured JSON + Zod schema từ `design.md` frontmatter.
+ - Edit `_catalog.md` bằng tay. File này regenerate từ folder qua
+   `tools/derive-catalog.ts`. Edit folder con thay vì file catalog.
```

### ALWAYS do section

```diff
- - Concept-phase content (items/affix/map/passive node/đan dược) sống trong
-   `docs/data/*.md` — bảng Markdown faithful, human-readable, single source of
-   truth. Column spec + enum vocabulary bake vào header mỗi file (thay vai trò
-   Zod). Structured JSON + Zod schema regenerate khi vào implementation phase.
+ - Concept-phase content sống trong `docs/content/<category>/<entity-id>/` —
+   per-entity bundle với `design.md` + `lore.md` + `prompt.md` + `art/`.
+   `design.md` frontmatter (YAML) là machine-readable contract — column spec
+   định nghĩa enum vocabulary tại `content/_enums.md`. Structured JSON + Zod
+   schema regenerate từ frontmatter khi vào implementation phase.
+ - Khi add entity mới: tạo folder `content/<cat>/<id>/`, viết `design.md` với
+   frontmatter đầy đủ, tuỳ chọn thêm `lore.md`/`prompt.md`/`art/`. Run
+   `bun tools/derive-catalog.ts <cat>` để rebuild catalog.
```

### Working modes section

```diff
- - **Content phase**: edit `docs/data/*.md` (bảng Markdown faithful). AI có
-   thể generate batch. Column spec + enum vocabulary trong header mỗi file là
-   contract; `docs/data/README.md` định nghĩa enum dùng chung. Structured JSON
-   + Zod regenerate ở implementation phase.
+ - **Content phase**: edit `docs/content/<cat>/<id>/{design,lore,prompt}.md`
+   per-entity. AI có thể dispatch parallel: 1 agent = 1 folder, zero merge
+   conflict. Frontmatter là contract; `content/_enums.md` định nghĩa enum
+   dùng chung. Run `tools/derive-catalog.ts <cat>` để regenerate catalog
+   sau khi batch edit. Structured JSON + Zod regenerate ở implementation phase.
```

### Decision date column

Decision #29 dòng date column update từ `2026-05-20` thành `2026-05-20 / revised 2026-05-20 (lần 2)`.

### Conventions section

Update file structure tree mention từ `docs/data/` → `docs/content/`.

## Open questions / risks

1. **Folder count = ~570+**: file explorer perf OK với file system hiện đại nhưng `ls` output dài. Browse cần `_catalog.md` thay vì `ls`. ACCEPTED.
2. **Bulk edit khó**: thay rune affix syntax cross 190 affix cần `sg` (ast-grep) hoặc script. Không phải pain hàng ngày. ACCEPTED.
3. **Frontmatter consistency**: nếu schema drift (1 entity thiếu field) → catalog regenerate fail. Mitigation: `tools/validate-bundle.ts` chạy trong CI.
4. **Act nodes count uncertain**: onboarding.md decision #22 nói "10-12 node per Act × 5 Act ≈ 50-60 nodes" — chính xác số sẽ chốt khi populate `acts/`. Có thể thấp hơn (skip nodes thuần spacer). **RESOLVED [Phase 3]**: 40 nodes total (6+7+8+10+9). Let-content-drive — không ép đủ 12.
5. **Effects/icons count TBD**: hiện art-prompts/effects/{effects,icons}.md có 59+43 dòng = chắc ~10-20 entity. Nếu thấp <10 → cân nhắc table exception giống sfx/. **RESOLVED [Phase 4]**: Effects = table exception (1 file `table.md`, 5 entity); Icons = 17 entity bundles.
6. **NPC counter-count**: art-prompts README claims 14 NPCs, lore.md §5 sẽ chốt số chính xác. Migration script cần verify. **RESOLVED [Phase 2 + Phase C]**: 14 NPCs migrated Phase 2, primordial-corruption-king dual-home resolved to bosses/ Phase C, 3 stub NPCs added Phase C (dao-si-moc-linh, lao-tieu-phu, linh-hoa-thuong-nhan) = 16 NPCs total.
7. **Lore-entities count uncertain**: ~18 entity (9 đỉnh + 7 đan sư + Cao Tổ + Lò Thần). Có thể có entity bổ sung (linh thú, thần khí) khi đọc kỹ lore.md §10. **RESOLVED [Phase 2]**: 16 lore-entities created (9 cauldrons + Cao To + Cao To seal + furnace-spirit-origin + mountain-river-decree + nine-turn-golden-elixir + primordial-corruption-king-lore + neutral-cauldron). Some dan su merged into cauldron entities.
8. **Generated art mapping**: hiện chỉ 4 ảnh (bronze-bell-grok, dinh-bao-thien-grok, dinh-linh-hoa-grok, tam-ma-boss-grok). Chỉ `bronze-bell-grok.jpg` match `items/bronze-bell/`. 3 ảnh còn lại cần manual map sang đúng entity (dinh-bao-thien, dinh-linh-hoa → lore-entities; tam-ma-boss → bosses/). **RESOLVED [Phase C.3]**: All 4 images mapped to content entities where slug matched; unmapped equipment art placed in `equipment/_unmapped-art/`.
9. **Existing concept-art generated subfolders**: `docs/art/furnace-parts/` và `docs/art/screens/` (mentioned in earlier ls) chưa explore. Cần kiểm tra trước migration. **RESOLVED [Phase C.3]**: `docs/art/generated/` subfolders (furnace-parts, screens, bosses-npcs, currency) all mapped to `content/<cat>/<id>/art/` where slug matched; remaining placed in `_unmapped-art/` directories.
10. **Onboarding.md residue**: sau khi tỉa per-Act content out, file còn lại có còn coherent không, hay merge phần còn lại vào `acts/README.md`? **RESOLVED [Phase C]**: onboarding.md still coherent after trim. §0 Two-phase architecture, §1 Hard Tutorial, §3-§7 (Son Ha Do Lenh, Bi Canh, Anti-overwhelm, Veteran skip, Localization), §9-§11 remain as cross-cutting design doc. Per-Act detail dissolved to `acts/<n>/overview.md` with stub redirects.
11. **Screens overlap**: `docs/ui-wireframes.md` chứa UI screen (`base-camp-hub`, `lo-editor`, …) và `docs/art-prompts/screens/screens.md` chứa 13 concept scene. Có thể có overlap (vd `lo-editor` UI screen vs `lo-editor` concept art). Migration script cần policy: nếu khớp slug → merge vào cùng `screens/<id>/` (wireframe.md + prompt.md side-by-side); nếu chỉ có concept không UI → new entity với prompt.md only. **RESOLVED [Phase 4]**: All 13 screens merged — each has wireframe.md + prompt.md side-by-side (screenKind: both).
12. **`tools/` directory chưa tồn tại**: hiện CLAUDE.md đánh dấu `tools/` là "kế hoạch". Migration cần tạo `tools/` workspace member trong root `package.json` workspaces array; `tools/migrate-to-bundle.ts` là file đầu tiên trong đó. Implementation plan sẽ confirm. **OPEN**: tools/ still "ke hoach". Migration done manually without script. `derive-catalog.ts` and `validate-bundle.ts` deferred to implementation phase.
13. **`docs/art/generated/furnace-parts/` và `docs/art/generated/screens/` subdirs**: untracked subfolders nested trong `docs/art/generated/`. Cần list nội dung trước migration để biết có asset cần map sang `content/equipment/<id>/art/` hoặc `content/screens/<id>/art/` không. **RESOLVED [Phase C.3]**: Explored and mapped. `docs/art/` directory deleted from git.

## Implementation order (sketch — chi tiết để writing-plans skill xử)

```
Phase 0: tooling foundation
  - Implement tools/migrate-to-bundle.ts (dry-run mode trước)
  - Implement tools/derive-catalog.ts
  - Implement tools/validate-bundle.ts

Phase 1: item-shaped migration (10 categories, ~586 entity)
  - Migrate items → verify
  - Migrate uniques, affixes, equipment, currency, passive-tree, ascendancies,
    maps, sets, la-han → verify each

Phase 2: character-shaped migration (4 categories, ~40 entity)
  - Migrate npcs, bosses, factions, lore-entities
  - Split docs/lore.md residue

Phase 3: narrative-shaped migration (1 category, 5 acts + ~60 nodes)
  - Migrate acts/<n>/overview.md
  - Migrate acts/act-1/nodes/* từ tutorial-script
  - Migrate acts/act-{2..5}/nodes/* từ act-narrative + onboarding §8

Phase 4: spatial + UI + audio + effects
  - regions, arenas, screens, tracks, sfx (table), effects, icons

Phase 5: cleanup
  - Remove docs/data/, docs/art-prompts/, docs/art/
  - Tỉa docs/lore.md, audio-spec.md, boss-patterns.md, ui-wireframes.md, onboarding.md
  - Delete docs/act-narrative.md, tutorial-script.md, passive-tree-design.md, content.md, map-layouts.md

Phase 6: CLAUDE.md update
  - Decision #29 revision
  - File structure tree
  - NEVER/ALWAYS sections
  - Conventions

Phase 7: validate
  - Run tools/validate-bundle.ts
  - Sample 20 random entity, manual check
  - CI gate
```

## Out of scope

- Implementation phase scaffolding (`apps/web/`, `packages/shared/`, …) — separate spec.
- Per-entity asset format beyond `.md` + `.jpg`/`.png`/`.mp3` (video/3D/etc.) — defer.
- Localization of `lore.md` / `design.md` body content (chỉ giữ Vietnamese ở concept phase) — defer to localization spec.
- Versioning entity (history of balance tweaks per entity) — có thể later add `iteration-history.md` per entity, defer.
