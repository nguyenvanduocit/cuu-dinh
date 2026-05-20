# `docs/data/` — Concept-phase content (single source of truth)

> Toàn bộ game content sống ở đây dưới dạng **bảng Markdown faithful, human-readable**. Đây là nguồn đếm chính tắc duy nhất của concept phase. Structured JSON + Zod schema regenerate từ thư mục này khi vào implementation phase (decision #29). Design docs (`../content.md`, `../passive-tree-design.md`, `../map-layouts.md`) giữ phần *rationale* và link về đây.

## Index

| File | Domain | Count |
|---|---|---|
| [items.md](items.md) | Linh Khí | 78 |
| [uniques.md](uniques.md) | Cổ Vật | 30 |
| [affixes.md](affixes.md) | Affix (prefix 80 + suffix 80 + implicit 30) | 190 |
| [equipment.md](equipment.md) | Lò Parts | 50 |
| [currency.md](currency.md) | Đan Dược 20 + Nguyên Liệu 30 + Tâm Ma 12 | 62 |
| [passive-tree.md](passive-tree.md) | Tinh Điểm (passive nodes) | 150 |
| [ascendancies.md](ascendancies.md) | Đạo Phái | 5 |
| [maps.md](maps.md) | Pháp Trận (blueprints) | 10 |
| [sets.md](sets.md) | Set Bonuses | 3 |
| [lore.md](lore.md) | Item Flavor 60 + NPC Dialogue 14 | — |

## Quy ước bảng (table conventions)

- **Slug ID** (cột `id`): kebab-case ASCII English, regex `^[a-z0-9]+(-[a-z0-9]+)*$`. Ví dụ `bronze-bell`.
- **Display name** (cột `ten`): tiếng Việt full diacritics, NFC-normalised — player-facing. Ví dụ `Chuông Đồng` (không bao giờ `Chuong Dong`).
- **Multi-value field** (`tags`, `compatibleItemTypes`, `connections`, `prerequisites`, `memberItemIds`): render comma-separated (`metal, convert, push`). Đây là một *danh sách* — nguồn CSV cũ serialize bằng `|`.
- **Pipe `|` trong text**: escape `\|` để không vỡ bảng Markdown.
- **Field prose nhiều câu** (description, specialRules, dialogue): render thành block văn dưới heading entity, không nhồi vào cell.
- **Giá trị số** (pixel `pos_x`/`pos_y`, `weight`, `dropWeight`): giữ nguyên float/int.

## Enum vocabulary (contract — thay vai trò Zod schema)

Mỗi file `docs/data/*.md` trỏ về định nghĩa enum tại đây.

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
