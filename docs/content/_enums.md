# Enum Vocabulary (contract)

> Nguồn gốc: `docs/data/README.md`. Đây là định nghĩa enum chính tắc cho tất cả `design.md` frontmatter trong `docs/content/`.

## Quy ước bảng (table conventions)

- **Slug ID** (cột `id`): kebab-case ASCII English, regex `^[a-z0-9]+(-[a-z0-9]+)*$`. Ví dụ `bronze-bell`.
- **Display name** (cột `ten`): tiếng Việt full diacritics, NFC-normalised — player-facing. Ví dụ `Chuông Đồng` (không bao giờ `Chuong Dong`).
- **Multi-value field** (`tags`, `compatibleItemTypes`, `connections`, `prerequisites`, `memberItemIds`): render comma-separated (`metal, convert, push`). Đây là một *danh sách* — nguồn CSV cũ serialize bằng `|`.
- **Pipe `|` trong text**: escape `\|` để không vỡ bảng Markdown.
- **Field prose nhiều câu** (description, specialRules, dialogue): render thành block văn dưới heading entity, không nhồi vào cell.
- **Giá trị số** (pixel `pos_x`/`pos_y`, `weight`, `dropWeight`): giữ nguyên float/int.

## Enum vocabulary

Mỗi file `docs/content/<category>/<id>/design.md` trỏ về định nghĩa enum tại đây.

| Enum | Giá trị hợp lệ | Dùng ở |
|---|---|---|
| **Element** | `metal`, `wood`, `water`, `fire`, `earth`, `void` | items, uniques, affixes, passive-tree, reagents |
| **Rarity** | `Common`, `Magic`, `Rare`, `Legendary`, `Unique`, `Mirror` | items, equipment |
| **DropPool** | `Common`, `Uncommon`, `Rare`, `VeryRare`, `ExtremelyRare` | items, reagents |
| **ItemBaseType** | `bell`, `sword`, `saber`, `inkstone`, `bead`, `statue`, `talisman`, `cauldron`, `box`, `fan`, `branch`, `lantern`, `flower`, `vase`, `drum`, `charm` | items, uniques, affixes (compatibleItemTypes) |
| **EquipmentSlot** | `crown`, `body`, `base`, `handleL`, `handleR`, `lid`, `amulet`, `ringL`, `ringR`, `belt` | equipment |
| **AffixCategory** | `prefix`, `suffix`, `implicit` | affixes |
| **AffixTier** | `T1`, `T2`, `T3` (cột `t1`/`t2`/`t3`) | affixes |
| **AffixTag** | `offensive`, `defensive`, `utility`, `sustain`, `chain`, `crit`, `elemental`, `currency-control`, `anti-corruption`, `seal-safety`, `speed`, `aoe` | affixes |
| **PassiveNodeType** | `starting`, `small`, `notable`, `keystone` | passive-tree |
| **AscendancyNodeType** | `notable`, `keystone` | ascendancies |
| **ReagentCategory** | `main`, `essence` | currency (reagents) |
| **CatalystCategory** | `drop-bias`, `mechanic-shifter`, `boss-modifier` | currency (catalysts) |
| **RiskLevel** | `low`, `medium`, `high`, `extreme` | currency (corruption-mods) |
| **MapVariant** | `standard`, `sanctum`, `marathon`, `lightning`, `mirror`, `ancient-furnace`, `dragon-palace`, `nine-heavens`, `underworld`, `endless` | maps |
| **BossType** | `anomaly`, `mirror`, `lightning` | maps |
| **UniqueCategory** | `build-defining`, `sustain-defensive`, `chaos-risk`, `mirror` | uniques |
