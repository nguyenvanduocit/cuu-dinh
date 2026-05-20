# `affixes/` — Prefix + Suffix + Implicit

> Bundle vĩ mô: 190 affix (80 prefix + 80 suffix + 30 implicit). Roll lên linh khí qua đan dược crafting (decision #4, #12).
>
> Cross-cut enums (Element, ItemBaseType qua `compatibleItemTypes`) → `../enums.md` section A + B.
> Bundle-local enums + rule → file này.

## Bundle-local enums

### `AffixCategory`

3 loại affix:

| Value | Vai trò |
|---|---|
| `prefix` | Modifier đứng đầu name (max 3 trên item rare). Thường offensive/damage. |
| `suffix` | Modifier đứng cuối name (max 3 trên item rare). Thường defensive/utility. |
| `implicit` | Mod cố định base-type, không roll qua đan dược. |

### `AffixTier`

3 tier (cột `t1`/`t2`/`t3` trong design.md): T1 = đáy, T3 = đỉnh. Drop weight giảm theo tier; đan dược upgrade từ T1 → T2 → T3.

### `AffixTag`

12 tag cho filter + theme rolling:

| Tag | Ý nghĩa |
|---|---|
| `offensive` | Damage / phá huỷ |
| `defensive` | Sustain Lò Thọ / linh đan |
| `utility` | QoL, không phải combat trực tiếp |
| `sustain` | Healing, regen, leech |
| `chain` | Chain reaction / Ngũ Hành combo |
| `crit` | Critical hit / overcharge |
| `elemental` | Buff theo Element |
| `currency-control` | Tăng drop đan dược/nguyên liệu |
| `anti-corruption` | Giảm Tâm Ma stack |
| `seal-safety` | Tăng Phong Ấn success rate |
| `speed` | Tốc độ trận, velocity, charge time |
| `aoe` | Splash / area damage |

Frontmatter: `tags: [offensive, crit]` (multi-value, comma-sep render).

## Art prompt rune overlay

Khi viết `prompt.md` cho affix entity, KHÔNG vẽ hero illustration — chỉ COMPACT rune glyph icon overlay (decision per `style/convention.md` quy tắc 5).

| Loại affix | Overlay treatment |
|---|---|
| prefix `offensive` | `small red rune glyph overlay, aggressive` |
| suffix `utility` | `small blue rune glyph overlay, calm` |
| implicit | `small gold sigil at center` |
| Phong Ấn implicit (`anti-corruption`/`seal-safety`) | `big red corruption seal overlay` |

`--stylize 80-90` cho affix icon (legible-at-small-size).

> Rule này từng sống ở `style/rarity-tokens.md`. Move về bundle owner vì chỉ affixes dùng.

## `compatibleItemTypes` constraint

Mỗi affix có thể giới hạn base type chấp nhận qua field `compatibleItemTypes` (ItemBaseType enum, multi-value). Ví dụ `bell-convert` chỉ roll lên `bell`. Bỏ trống = roll mọi base type.
