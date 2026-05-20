# `docs/content/` — Per-entity content bundles

> Single source of truth cho tất cả game entity ở concept phase.
> Mỗi entity = 1 folder = SSOT. Cross-entity table view = derived (`_catalog.md` regenerate qua `tools/derive-catalog.ts`).

## Structure

```
docs/content/
├── _style/              # Shared MJ art tokens (palette, convention, element/rarity tokens)
├── _enums.md            # Shared vocabulary registry (scope-marked enums + table conventions)
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
└── sets/                # 3 set bonuses
```

> Note: 18 tượng La Hán sống trong `items/` dưới prefix `arhat-*` (không có folder `la-han/` riêng).

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
- Enum values + table conventions tham chiếu tại `_enums.md` (scope-marked: cross-cutting / multi-bundle / bundle-local).

### `prompt.md`

- MJ `/imagine` block copy nguyên văn từ art-prompts source.
- Append `[STYLE SUFFIX]` từ `_style/style-suffix.md`.
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
- **Phase C cleanup** (2026-05-20): nguồn cũ `docs/data/` đã xoá; `docs/art-prompts/` migrated subdir đã xoá; ảnh `docs/art/generated/` chuyển vào `<category>/<id>/art/`.

Còn pending: acts (đang dựng), và regions, arenas, screens, effects, icons — concept-art prompt vẫn ở `docs/art-prompts/{environments,screens,effects}/` chờ migrate Phase 3.
