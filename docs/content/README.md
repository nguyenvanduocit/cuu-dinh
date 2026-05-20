# `docs/content/` — Per-entity content bundles

> Single source of truth cho tất cả game entity ở concept phase.
> Mỗi entity = 1 folder = SSOT. Cross-entity table view = derived (`_catalog.md` regenerate qua `tools/derive-catalog.ts`).

## Structure

```
docs/content/
├── _style/              # Shared MJ art tokens (palette, convention, element/rarity tokens)
├── _enums.md            # Enum vocabulary (contract cho design.md frontmatter)
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
└── la-han/              # 18 tượng La Hán (also in items/ as arhat-*)
```

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
- Enum vocabulary tham chiếu tại `_enums.md`.

### `prompt.md`

- MJ `/imagine` block copy nguyên văn từ art-prompts source.
- Append `[STYLE SUFFIX]` từ `_style/style-suffix.md`.
- Optional "Mô tả" line tiếng Việt ở đầu file.

### `lore.md`

- Vietnamese flavor prose — extracted từ `docs/data/lore.md` item-flavor section.
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

This structure was generated from `docs/data/*.md` + `docs/art-prompts/` by `tools/migrate-item-shaped.ts` (Phase 1, 2026-05-20). Source files are read-only during migration; Phase C cleanup will delete them.

Categories migrated (Phase 1, item-shaped): items, uniques, affixes, equipment, currency, passive-tree, ascendancies, maps, sets, la-han.

Remaining categories (Phase 2-4): npcs, bosses, factions, lore-entities, acts, regions, arenas, screens, tracks, sfx, effects, icons.
