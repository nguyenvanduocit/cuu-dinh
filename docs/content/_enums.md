# Shared Vocabulary Registry (scope-marked)

> Central registry cho **enum values + table conventions** dùng trong `design.md` frontmatter của `docs/content/`.
>
> **Đây KHÔNG phải "global rules apply everywhere".** Mỗi enum có **scope-of-use** annotation ở cột `Dùng ở` — đọc trước khi assume một enum áp dụng cho bundle bạn đang sửa. Khi một enum leak sang bundle mới (ví dụ `BossType` từ `maps` → `maps, bosses`), update annotation ở đây thay vì move file.
>
> Lịch sử: nguồn gốc `docs/data/README.md`. Khi `docs/data/` cleanup (Phase C), file đó sẽ biến mất; registry này thay thế.

## Table conventions (true-global, apply mọi `design.md`)

- **Slug ID** (cột `id`): kebab-case ASCII English, regex `^[a-z0-9]+(-[a-z0-9]+)*$`. Ví dụ `bronze-bell`.
- **Display name** (cột `ten`): tiếng Việt full diacritics, NFC-normalised — player-facing. Ví dụ `Chuông Đồng` (không bao giờ `Chuong Dong`).
- **Multi-value field** (`tags`, `compatibleItemTypes`, `connections`, `prerequisites`, `memberItemIds`): render comma-separated (`metal, convert, push`). Đây là một *danh sách* — nguồn CSV cũ serialize bằng `|`.
- **Pipe `|` trong text**: escape `\|` để không vỡ bảng Markdown.
- **Field prose nhiều câu** (description, specialRules, dialogue): render thành block văn dưới heading entity, không nhồi vào cell.
- **Giá trị số** (pixel `pos_x`/`pos_y`, `weight`, `dropWeight`): giữ nguyên float/int.

---

## A. Cross-cutting enums (4+ bundle)

> Enum xuất hiện ở nhiều bundle — change ở đây ảnh hưởng lan rộng. Cẩn thận khi thêm/bớt value.

| Enum | Giá trị hợp lệ | Dùng ở |
|---|---|---|
| **Element** | `metal`, `wood`, `water`, `fire`, `earth`, `void` | items, uniques, affixes, passive-tree, reagents (currency), bosses |

## B. Multi-bundle enums (2-3 bundle)

> Enum chia sẻ giữa vài bundle — cross-bundle dependency tồn tại. Khi update value, check mọi consumer.

| Enum | Giá trị hợp lệ | Dùng ở |
|---|---|---|
| **Rarity** | `Common`, `Magic`, `Rare`, `Legendary`, `Unique`, `Mirror` | items, equipment |
| **DropPool** | `Common`, `Uncommon`, `Rare`, `VeryRare`, `ExtremelyRare` | items, reagents (currency) |
| **ItemBaseType** | `bell`, `sword`, `saber`, `inkstone`, `bead`, `statue`, `talisman`, `cauldron`, `box`, `fan`, `branch`, `lantern`, `flower`, `vase`, `drum`, `charm` | items (`type`), uniques (`type`), affixes (`compatibleItemTypes`) |
| **BossType** | `anomaly`, `mirror`, `lightning` | maps (`bossType`), bosses (`bossType`) |

## C. Bundle-local enums (1 bundle)

> Enum chỉ một bundle dùng. Owner = bundle đó. Liệt kê ở đây để có 1 chỗ Cmd-F duy nhất, nhưng change scope-of-effect chỉ trong bundle owner.

| Enum | Giá trị hợp lệ | Owner bundle |
|---|---|---|
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
| **UniqueCategory** | `build-defining`, `sustain-defensive`, `chaos-risk`, `mirror` | uniques |

---

## Maintenance protocol

- **Enum leak (bundle-local → multi-bundle)**: khi một bundle mới start dùng enum cũ, **move row từ section C → B** và update `Dùng ở`. KHÔNG split file.
- **Thêm enum mới**: classify ngay vào A/B/C theo scope-of-use hiện tại. Nếu chưa rõ → đặt vào C, promote sau khi leak.
- **Thay value list**: nếu trong A/B, audit cross-bundle trước. Nếu trong C, owner bundle tự quyết.
- **Verify scope**: spot-check bằng `rg "^<field>: " docs/content/` định kỳ — `_enums.md` không tự đồng bộ.
