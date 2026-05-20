# 05 — Bosses, NPCs, Effects & Icons

> Boss visual cite trực tiếp `ART_DIRECTION.md:158-174`. NPC ID thật từ `packages/data/lore/npc-dialogue.json`. Effect/icon theo `ART_DIRECTION.md:105-127, :98-102`. Append [STYLE SUFFIX] từ `README.md`.

---

## §1. Boss types (3) — `128×128` sprite, `--ar 1:1 --stylize 200`

3 boss type theo decision #20: Dị Tượng (T1-T8), Tâm Ma (T6-T13), Thiên Kiếp (T14-T16). Mỗi loại 3 anim state (idle / attack / death) — gen idle trước làm chuẩn.

### 1.1 Dị Tượng — Anomaly

> `ART_DIRECTION.md:159-162`: asymmetric, glitchy, hỗn loạn; colors shift unpredictably; made of multiple element fragments.

```
/imagine prompt: an anomaly boss creature, an asymmetric glitching entity assembled from mismatched elemental fragments — shards of fire, water, wood, metal and earth fused together wrongly, colors shifting unpredictably, unstable distorted silhouette, menacing and chaotic, full clashing six-color palette, painterly pixel art game boss sprite, [STYLE SUFFIX] --ar 1:1 --stylize 200 --chaos 25
```

### 1.2 Tâm Ma — Heart Demon

> `ART_DIRECTION.md:164-168`: dark tím triều base, smoky aura, human-shaped silhouette with horrific mask.

```
/imagine prompt: a heart-demon boss, a tall human-shaped shadow silhouette wrapped in thick smoky aura, wearing a horrific cracked daoist opera mask, hollow glowing eyes, oppressive and sinister, deep twilight purple (#4A1942) and ink black with sickly accents, painterly pixel art game boss sprite, [STYLE SUFFIX] --ar 1:1 --stylize 200
```

### 1.3 Thiên Kiếp — Heavenly Tribulation

> `ART_DIRECTION.md:170-174`: no body — only lightning; sky near-black; golden lightning bolts.

```
/imagine prompt: a heavenly tribulation boss with no physical body, a colossal column of jagged golden (#D4AF37) lightning descending from near-black storm clouds, swirling electric vortex, divine and overwhelming, awe-inspiring threat, ink black sky with blinding imperial gold electricity, painterly pixel art game boss, [STYLE SUFFIX] --ar 1:1 --stylize 200
```

---

## §2. NPCs (14) — `--ar 1:1` portrait + `--ar 9:16` full-body

Mỗi NPC 2 asset: **portrait** (chân dung dialogue) + **full sprite** (đứng trong hub). Compose:

```
/imagine prompt: a character [portrait headshot | full-body standing sprite] of [NPC SUBJECT], daoist xianxia cultivator, expressive, painterly pixel art character art, [palette gợi ý], [STYLE SUFFIX] --ar [1:1 | 9:16] --stylize 180
```

| id | ten | SUBJECT đặc tả | palette gợi ý |
|---|---|---|---|
| `master` | Sư Phụ | `a wise elderly daoist master with long white beard and robe, calm authority` | ivory + imperial gold |
| `old-fox` | Lão Hồ Ly | `a sly fox-spirit merchant in a daoist gambler's robe, mischievous grin, fox ears` | cinnabar + gold |
| `nameless-cultivator` | Đạo Sĩ Vô Danh | `a plain hooded wandering cultivator, face half-shadowed, mysterious` | ink black + ivory |
| `immortal-ancestor` | Tổ Sư Bất Tử | `a translucent immortal ancestor spirit, ethereal glowing elder, floating` | twilight purple + gold |
| `black-white-alchemist` | Đan Sư Hắc Bạch | `a paired duo of silent masked alchemists, one in black robe one in white, mirror twins` | ink black + ivory |
| `omen-crone` | Lão Bà Thiên Cơ | `a hunched old fortune-teller crone with divination sticks, knowing smile` | cinnabar + purple |
| `furnace-spirit` | Lò Thần | `a small living furnace-spirit elemental, a sentient bronze cauldron with glowing eyes` | imperial gold + cinnabar |
| `map-sorcerer` | Pháp Sư Bản Đồ | `a cartographer-sorcerer holding a glowing landscape scroll, scholarly` | jade green + gold |
| `wuxing-ancestor-metal` | Kim Tổ Bạch Sương | `a metal-element ancestor sage, armored in pale frost-silver, sharp angular` | imperial gold + ivory |
| `wuxing-ancestor-wood` | Mộc Tổ Lục Trí | `a wood-element ancestor sage, robed in living leaves and vines` | jade green |
| `wuxing-ancestor-water` | Thuỷ Tổ Hắc Lưu | `a water-element ancestor sage, flowing dark-blue robes like a river` | deep blue + ink black |
| `wuxing-ancestor-fire` | Hoả Tổ Đỏ Liệt | `a fire-element ancestor sage, fierce, robes wreathed in cinnabar flame` | cinnabar red + gold |
| `wuxing-ancestor-earth` | Thổ Tổ Hoàng Trầm | `an earth-element ancestor sage, heavy stoic, ochre-and-stone robes` | earthen brown + gold |
| `primordial-corruption-king` | Hỗn Nguyên Tâm Ma Vương | `the primordial heart-demon king, a towering corrupted void emperor, final-boss presence` | twilight purple + ink black |

> 5 Wuxing ancestor (`wuxing-ancestor-*`) là **bộ đồng phong cách** elder sage, chỉ khác element costume — gen 1 batch giữ seed.
> `primordial-corruption-king` là cuối-game boss-NPC: gen ở `--ar 9:16 --stylize 250`, scale lớn, áp lực thị giác cao nhất.

---

## §3. Effects & particles — `--ar 1:1 --stylize 100`, nền tối/trong

### 3.1 Linh Lực ball (banh) — `ART_DIRECTION.md:105-116`

16-24px, element-coded, 8-frame motion trail.

```
/imagine prompt: a small glowing spirit-energy orb projectile with a comet motion-blur trail, [ELEMENT TOKEN từ 02 §1], bright core, on transparent dark background, painterly pixel art game effect, [STYLE SUFFIX] --ar 1:1 --stylize 100
```
Gen 6 bản (1 mỗi element). Trail dài/sáng hơn = velocity cao.

### 3.2 Linh Đan orb (objective) — `ART_DIRECTION.md:118-127`

80px, ring fill như loading bar, crack khi stability thấp.

```
/imagine prompt: a luminous alchemical elixir orb glowing at the center of a furnace board, a circular quality-fill ring around it, suspended and precious, [element-colored glow], on dark background, painterly pixel art game object, [STYLE SUFFIX] --ar 1:1 --stylize 120
```
Biến thể: **bể (destroyed)** → `the elixir orb shattering into pieces with a red flash`. **Phẩm thăng** → `the elixir orb erupting in a particle burst, shifting to a higher-tier color`.

### 3.3 Collision burst

```
/imagine prompt: a small impact particle burst, [element-colored] sparks radiating from a collision point, sharp pixel particles, on transparent dark, painterly pixel art game effect, [STYLE SUFFIX] --ar 1:1 --stylize 90
```

### 3.4 Phong Ấn seal — `ART_DIRECTION.md:103`

Big red corruption seal khắc lên item.

```
/imagine prompt: a large ominous cinnabar-red corruption seal stamp, a circular daoist talisman sigil with jagged runes, glowing dangerously, on transparent dark, painterly pixel art game effect, [STYLE SUFFIX] --ar 1:1 --stylize 110
```

### 3.5 Linh đan grade aura (7 phẩm cấp) — `ART_DIRECTION.md:49-60`

Halo aura tách riêng cho từng phẩm, overlay lên orb:

| Phẩm | aura prompt |
|---|---|
| Phàm | `dull gray stone aura, no glow` |
| Linh | `soft pale-blue glow` |
| Bảo | `purple crystal sheen aura` |
| Thần | `bright orange radiant aura` |
| Cổ | `shifting rainbow multi-color glow` |
| Tiên | `blinding pure-white aura with golden particles` |
| Thánh | `imperial-gold sun-like radiance` |

---

## §4. UI icons — `32×32`, `--ar 1:1 --stylize 80`, clear & legible

### 4.1 Đan Dược (8 main) — `CONTENT.md:294`

```
/imagine prompt: a small clear game inventory icon of [SUBJECT], readable at tiny size, single object on dark, painterly pixel art icon, [STYLE SUFFIX] --ar 1:1 --stylize 80
```

| SUBJECT | dùng cho |
|---|---|
| `a blue alchemy pill / elixir pellet` | Linh Đan (reroll) |
| `a purple-ringed refined pill` | Tử Hoàn Đan |
| `a golden nine-swirl pill` | Cửu Chuyển Đan |
| `a red talisman seal token` | Phong Ấn |
| `a soul-wisp vial` | Hồn Đan |
| `a rainbow ancient pill` | Cổ Đan |
| `a plain identify scroll` | Đan Tẩy Niêm |
| `a five-element essence shard` | Tinh Hoa Ngũ Hành |

### 4.2 Nguyên Liệu / Tinh Hoa (element-coded shards)

5 element shard + utility — dùng element token màu, hình `a faceted crystal essence shard`.

### 4.3 Affix rune overlay — `ART_DIRECTION.md:98-102`

Overlay nhỏ góc item icon báo loại affix:

| Overlay | prompt |
|---|---|
| Prefix offensive | `a small red rune glyph overlay, aggressive` |
| Suffix utility | `a small blue rune glyph overlay, calm` |
| Implicit | `a small gold sigil at center` |
| Phong Ấn implicit | `a big red corruption seal overlay` |

---

## Lưu ý

- Boss/NPC cần **3 anim state** — gen idle làm canonical rồi dùng làm reference (img2img/IP-adapter) cho attack/death để giữ consistency.
- Effect/particle: ưu tiên nền tối tương phản; alpha/transparent xử lý ở Aseprite sau.
- Icon 32×32: test legibility ở size thật — chi tiết thừa sẽ thành noise. Càng đơn giản càng tốt.
