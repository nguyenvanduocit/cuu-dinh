# `docs/content/` — Per-entity content bundles

> Single source of truth cho tất cả game entity ở concept phase.
> Mỗi entity = 1 folder = SSOT. Cross-entity table view = derived (`catalog.md` regenerate qua `tools/derive-catalog.ts`).

## Structure

```
docs/content/
├── style/              # Shared MJ art tokens (palette, convention, element/rarity tokens)
├── enums.md            # Shared vocabulary registry (scope-marked enums + table conventions)
├── README.md            # (you are here)
│
├── items/               # 78 linh khí
├── uniques/             # 30 cổ vật
├── affixes/             # 190 prefix + suffix + implicit
├── equipment/           # 50 lò parts
├── currency/            # 62 đan dược + nguyên liệu + tâm ma mod
├── passive-tree/        # 150 tinh điểm nodes
├── ascendancies/        # 5 đạo phái
├── maps/                # 10 pháp trận blueprints
├── sets/                # 3 set bonuses
│
├── npcs/                # 14 NPC character bibles
├── bosses/              # 17 boss instances
├── factions/            # 5 tông môn
├── lore-entities/       # 16 lore artifacts + historical figures
│
├── acts/                # 5 acts (narrative-shaped, nested nodes)
│
├── regions/             # 10 locations (biome as frontmatter field)
├── arenas/              # 3 boss arena types
│
├── screens/             # 13 UI screens (wireframe + concept art unified)
│
├── tracks/              # 17 music track briefs
├── sfx/                 # ~80 SFX (TABLE — sfx/table.md, not per-entity)
│
├── effects/             # 5 particle FX (TABLE — effects/table.md, not per-entity)
└── icons/               # 17 UI icon bundles
```

> Note: 18 tượng La Hán sống trong `items/` dưới prefix `arhat-*` (không có folder `la-han/` riêng).
> Note: `sfx/` và `effects/` dùng table exception (< 10 entity) — chỉ có `table.md`, không có per-entity folder.

## Per-entity folder layout

```
docs/content/<category>/<entity-id>/
├── design.md         # REQUIRED — YAML frontmatter (machine-readable) + markdown body
├── lore.md           # OPTIONAL — Vietnamese flavor prose (chỉ tạo khi có content)
├── prompt.md         # OPTIONAL — MJ /imagine block (chỉ tạo khi có art prompt)
└── art/              # OPTIONAL — generated concept images (chỉ tạo khi có)
    └── concept-*.jpg
```

### `design.md`

- **Frontmatter** (YAML): chứa tất cả fields machine-readable — `id`, `ten`, và các field category-specific.
- **Body** (Markdown): mechanics description, tier values, special rules, geometry — content prose dài.
- `id` trong frontmatter MUST match folder name.
- `ten` = Vietnamese display name, full diacritics, NFC-normalised.
- Enum values + table conventions tham chiếu tại `enums.md` (scope-marked: cross-cutting / multi-bundle / bundle-local).

### `prompt.md`

- MJ `/imagine` block cho entity.
- Append `[STYLE SUFFIX]` từ `style/style-suffix.md`.
- Optional "Mô tả" line tiếng Việt ở đầu file.

### `lore.md`

- Vietnamese flavor prose — item-flavor, npc-dialogue.
- Chỉ tạo khi entity có lore content.

## Naming conventions

- **Entity folder name** = kebab-case ASCII slug, regex `^[a-z0-9]+(-[a-z0-9]+)*$`
- **Category folder name** = English plural noun (`items/`, `affixes/`, `maps/`)
- **Meta files**: `README.md` (human-edited), `_catalog.md` (machine-generated, underscore prefix)
- **Code identifier** = English per terminology dictionary (`docs/superpowers/specs/2026-05-20-naming-convention-pivot.md`)
- **Display name** (`ten`) = Vietnamese full diacritics

## How to add a new entity

1. Create folder `docs/content/<category>/<new-id>/`
2. Write `design.md` with YAML frontmatter matching category schema (see existing entities as reference)
3. Optionally add `lore.md`, `prompt.md`, `art/`
4. Run `bun tools/derive-catalog.ts <category>` to rebuild `_catalog.md` (when tool exists)

## Migration provenance

Bundle này sinh ra từ các bảng Markdown + art-prompt pack qua migration tooling (2026-05-20):

- **Phase 1** (item-shaped): items (incl. 18 `arhat-*`), uniques, affixes, equipment, currency, passive-tree, ascendancies, maps, sets.
- **Phase 2** (character-shaped): npcs, bosses, factions, lore-entities.
- **Phase 3** (narrative-shaped): acts (5 acts with nested nodes).
- **Phase 4** (spatial/UI/audio/effects): regions (10), arenas (3), screens (13), tracks (17), sfx (table), effects (table), icons (17). Validated by `tools/migrate-spatial-ui-audio-effects.ts`.
- **Phase C cleanup**: nguồn cũ `docs/data/` đã xoá; `docs/art-prompts/` pending cleanup after Phase 4 review.
