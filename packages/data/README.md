# packages/data — Source-of-truth game content

CSV/JSON files validated by Zod schemas in `packages/shared/src/schemas/`.

## File map

| File | Schema | Count |
|---|---|---|
| `linh-khi.csv` | `LinhKhi` | 60 (10/element × 6 elements) |
| `co-vat.csv` | `CoVat` | 30 base + 3 Mirror |
| `affix-prefix.csv` | `Affix` (category=prefix) | 80 |
| `affix-suffix.csv` | `Affix` (category=suffix) | 80 |
| `affix-implicit.csv` | `Affix` (category=implicit) | 30 |
| `dan-duoc.csv` | `DanDuoc` | 8 main + 12 Tinh Hoa = 20 |
| `nguyen-lieu.csv` | `NguyenLieu` | 30 |
| `tam-ma-mod.csv` | `TamMaMod` | 12 |
| `set-bonus.json` | `SetBonus[]` | 3 sets |
| `dao-phai.json` | `DaoPhai[]` | 5 ascendancy |
| `lo-part.csv` | `LoPart` | 40+ (8 slots × ~5 variants) |
| `passive-tree.json` | `PassiveTree` | 150 nodes |
| `phap-tran/*.json` | `PhapTran` | 10 variants |
| `lore/npc-dialogue.json` | (free-form) | 15 NPCs |
| `lore/item-flavor.json` | (free-form) | flavor for 60 + 30 + 3 sets |

## Conventions

- **Identifiers**: kebab-case ASCII slug derived from Vietnamese name without diacritics.
  Example: "Chuông Đồng" → id `chuong-dong`.
- **Display names**: Vietnamese with full diacritics, NFC-normalised.
- **No English fallback** in any field. Western placeholder names are banned.
- **CSV columns**: declared in the schema file as `*CsvColumns`. Producers must match this order.
- **Validation**: every file is round-tripped through Zod before merge. Failures block CI.

## Adding new content

1. Append rows to the relevant CSV/JSON.
2. Run `bun run content:validate` (tool TBD).
3. PR with screenshot of effect playtest.
