# Naming Convention Pivot — 2026-05-20

> **Status**: APPROVED 2026-05-20. Supersedes the Pinyin-Việt code-identifier convention locked 2026-05-19.
>
> **TL;DR**: Code-level identifiers (class names, schema file names, data file names, data ID slugs, cross-references) move from Vietnamese/Pinyin-Việt to **English**. **Display names (`ten` field) and all lore prose stay Vietnamese/Hán-Việt.** The game remains tu chân/huyền huyễn to the player; only the codebase internals become English.

---

## 1. What changed and why

The 2026-05-19 convention required Pinyin-Việt identifiers (`luyenDan`, `phongAn`, `chuong-dong`) and explicitly banned English equivalents. After working with the generated content, the decision was reversed for these reasons:

- **AI/tooling ergonomics**: English identifiers are far better supported by AI co-pilots, linters, and search. Pinyin-Việt slugs without diacritics are ambiguous (`hoa` = Hoả/Hoa/Hỏa) and error-prone.
- **Collaboration**: English code is accessible to any future contributor regardless of Vietnamese fluency.
- **Separation of concerns**: fantasy identity belongs in the *player-facing layer* (display text, lore, art, audio), not in internal identifiers. A `mystic-bell` ID with `ten: "Huyền Thiên Chung"` keeps the game tu chân to the player while keeping the code legible.

This does NOT weaken the tu chân-authenticity pillar (revised decision #1). The theme, motifs, lore, and all player-visible text remain huyền huyễn/luyện đan focused.

---

## 2. Scope

### Changes to English

| Layer | Before | After |
|---|---|---|
| Schema class names | `LinhKhi`, `PhapTran`, `DaoPhai` | `Item`, `MapBlueprint`, `Ascendancy` |
| Schema enums | `NgHanh`, `LoSlot`, `ItemType` | `Element`, `EquipmentSlot`, `ItemBaseType` |
| Schema file names | `linh-khi.ts`, `phap-tran.ts` | `item.ts`, `map.ts` |
| Data file names | `linh-khi.csv`, `phap-tran/tieu-chuan.json` | `items.csv`, `maps/standard.json` |
| Data ID slugs (578) | `chuong-dong`, `kiem-co-bach-ho` | `bronze-bell`, `white-tiger-sword` |
| Cross-references | set-bonus members, item-flavor keys, passive connections | follow new IDs |
| Variable/function names (future code) | `linhKhiTho`, `applyPhongAn()` | `furnaceHp`, `applySeal()` |

### Stays Vietnamese/Hán-Việt

| Layer | Example |
|---|---|
| Display name (`ten` field) | `"Chuông Đồng"`, `"Tượng La Hán Bồ Đề"` |
| Lore prose (item-flavor values) | `"Đồng nung trong cổ điện Huyền Thiên..."` |
| NPC dialogue text | `"Đệ tử. Lò Luyện Đan Tổ Truyền chờ con đã ba mươi năm."` |
| Design-doc narrative | LORE.md, ACT_NARRATIVE.md prose |
| Art / audio / UI copy | all player-facing |

---

## 3. Terminology dictionary (canonical)

### Concepts
| Vietnamese | English |
|---|---|
| Lò Luyện Đan (player char) | Furnace |
| Pháp Trận (map) | Map (schema class `MapBlueprint` to avoid JS `Map` collision) |
| Linh Khí (placed tool) | Item |
| Linh Lực (orb/ball) | Orb |
| Linh Đan (objective elixir) | Elixir |
| Đan Dược (gambling currency) | Reagent |
| Tinh Hoa (element essence) | Essence |
| Nguyên Liệu (scarab analogue) | Catalyst |
| Phong Ấn (corruption seal) | Seal |
| Tâm Ma (map corruption) | Corruption |
| Cổ Vật (unique) | Unique |
| Tinh Điểm (passive tree) | Passive |
| Đạo Phái (ascendancy) | Ascendancy |
| Sơn Hà Đồ (atlas) | Atlas |

### Elements (Ngũ Hành + Vô Cực)
Kim→metal, Mộc→wood, Thuỷ→water, Hoả→fire, Thổ→earth, Vô Cực→void

### Rarity
Phàm→common, Linh→magic, Bảo→rare, Thần→legendary, Cổ→unique, Mirror→mirror

### Furnace slots
Đỉnh→crown, Thân→body, Đế→base, Quai→handle (L/R), Nắp→lid, Khắc Phù→amulet, Đồ Sương→ring (L/R), Dây Phong Ấn→belt

### Map variants
Tiêu Chuẩn→standard, Tử Sinh→sanctum, Hỗn Nguyên→marathon, Thiên Kiếp→lightning, Tâm Ma→mirror, Cổ Đan Lò→ancient-furnace, Long Cung→dragon-palace, Cửu Tiêu→nine-heavens, Diêm Phủ→underworld, Vô Cực→endless

### Boss types
Dị Tượng→anomaly, Tâm Ma→mirror, Thiên Kiếp→lightning

### Item base types
Chuông→bell, Kiếm→sword, Đao→saber, Nghiên Mực→inkstone, Châu→bead, Tượng→statue, Bùa→talisman, Đỉnh→cauldron, Hộp→box, Quạt→fan, Cành→branch, Đèn→lantern, Hoa→flower, Bình→vase, Trống→drum, Phù→charm

### Mythic/proper nouns
Bạch Hổ→white-tiger, Thanh Long→azure-dragon, Chu Tước→vermilion-bird, Hắc Quy→black-tortoise, Tôn Ngộ Không→sun-wukong, Bát Quái→bagua, A Di Đà→amitabha, La Hán→arhat, Bồ Đề→bodhi, Diêm Vương→yama, Long Vương→dragon-king, Phượng→phoenix, Huyền Thiên Chung→mystic-heaven-bell

---

## 4. Execution

1. **Master ID map** (`tools/content-rename/id-map.json`): single source of truth, vi-ID → en-ID for all 578, generated first.
2. **Schema rename**: class/enum/file names → English.
3. **Data rename**: apply the map across 22 files, rename files, rewrite ID columns + cross-refs.
4. **Validator update**: new file paths + schema imports.
5. **Re-validate**: confirm clean.

The id-map.json is retained in the repo as the canonical vi↔en cross-reference for anyone reading old design docs that still use Vietnamese term references.

---

## 5. Decisions ledger

- **2026-05-19**: Locked Pinyin-Việt code identifiers; banned English equivalents.
- **2026-05-20**: **Reversed.** Code-level identifiers → English. Player-facing layer (display names, lore, art, audio) stays Vietnamese/Hán-Việt. Tu chân-authenticity pillar (decision #1 revised) preserved at the presentation layer.
