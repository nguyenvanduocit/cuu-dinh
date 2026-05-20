# Art Prompts — Cửu Đỉnh (Midjourney v6 pack)

> Bộ prompt cho **giai đoạn thiết kế / concept art**. Nạp vào Midjourney v6 để khám phá mood, palette, silhouette, composition trước khi sản xuất sprite final. Bám sát `docs/ART_DIRECTION.md` + data thật trong `packages/data/`.

**Phủ 100% data**: 568 item ID đều có prompt + mô tả tiếng Việt (verified — 0 ID bịa, 0 data bỏ sót). Tổng ~603 prompt block.

---

## ⚠ Caveat: MJ v6 = concept, không phải sprite final

Midjourney v6 mạnh cho concept/mood/background nhưng **không phải tool sản xuất pixel sprite 64×64**. Pipeline thật (`ART_DIRECTION.md §AI Asset Pipeline`):

```
[Thiết kế — bộ này]   MJ v6 → concept board, mood, silhouette reference
        ↓
[Sản xuất]            SDXL + pixel-art LoRA → sprite draft 64×64
        ↓
[Polish]              Aseprite → hand-clean, fix palette, animation
```

Dùng output MJ làm north-star thị giác + reference cho SDXL (img2img/IP-adapter). KHÔNG export thẳng làm asset game.

---

## Cách dùng

1. Đọc `_style/CONVENTION.md` (format + quy tắc) + `_style/style-suffix.md` (STYLE SUFFIX dán nguyên văn).
2. Mở file category cần gen → mỗi entry có **Mô tả** (tiếng Việt) + block `/imagine` sẵn.
3. Entry đầu mỗi file có STYLE SUFFIX expanded đầy đủ; entry sau dùng `[STYLE SUFFIX]` placeholder → dán chuỗi từ `_style/style-suffix.md` vào.

Mọi style/palette/token là **single source of truth** trong `_style/` — sửa 1 chỗ, áp cả bộ.

---

## Cấu trúc

```
docs/art-prompts/
├── README.md                  # bạn đang ở đây
├── _style/                    # ⭐ single source of truth
│   ├── CONVENTION.md          # format mỗi entry + quy tắc + ví dụ chuẩn
│   ├── style-suffix.md        # STYLE SUFFIX + tham số MJ v6
│   ├── palette.md             # 6-color + 7 grade colors
│   ├── element-tokens.md      # 6 token Ngũ Hành
│   ├── rarity-tokens.md       # 5 rarity treatment + border + affix overlay
│   └── base-noun-dictionary.md# type/slot → subject
├── environments/  regions.md (7 biome) · boss-arenas.md (3)
├── linh-khi/      metal·wood·water·fire·earth·void.md (60)
├── la-han/        eighteen-arhats.md (18 set)
├── co-vat/        build-defining·sustain-defensive·chaos-risk.md (30 hero)
├── furnace-parts/ crown·body·base·handles·lid·amulet·rings·belt.md (50)
├── currency/      reagents (20) · catalysts (30) · corruption-mods (12)
├── affixes/       prefix (80) · suffix (80) · implicit (30) rune glyph
├── passive-tree/  nodes-{element}.md (150) · ascendancies.md (5)
├── sets/          set-bonuses.md (3 khí trận)
├── screens/       screens.md (13 concept/scene, KHÔNG phải UI layout)
├── bosses-npcs/   bosses.md (3) · npcs.md (14)
└── effects/       effects.md (linh lực/đan/seal/aura) · icons.md (UI)
```

## Index theo số lượng

| Nhóm | Item | File |
|---|---|---|
| Linh khí base | 60 | `linh-khi/{metal,wood,water,fire,earth,void}.md` |
| La Hán set | 18 | `la-han/eighteen-arhats.md` |
| Cổ vật (hero) | 30 | `co-vat/{build-defining,sustain-defensive,chaos-risk}.md` |
| Lò parts | 50 | `furnace-parts/{crown,body,base,handles,lid,amulet,rings,belt}.md` |
| Đan dược + nguyên liệu + tâm ma | 62 | `currency/{reagents,catalysts,corruption-mods}.md` |
| Affix rune | 190 | `affixes/{prefix,suffix,implicit}.md` |
| Passive node + đạo phái | 155 | `passive-tree/nodes-*.md` + `ascendancies.md` |
| Set khí trận | 3 | `sets/set-bonuses.md` |
| Environment | 10 | `environments/{regions,boss-arenas}.md` |
| Boss + NPC | 17 | `bosses-npcs/{bosses,npcs}.md` |
| Effect + icon | — | `effects/{effects,icons}.md` |

---

## Nguyên tắc

- **English ID, Vietnamese display**: entry tham chiếu `id` thật + `ten` thật từ `packages/data/`. Naming pivot: `docs/superpowers/specs/2026-05-20-naming-convention-pivot.md`.
- **Không reference cấm** (`ART_DIRECTION.md:234-238`): anime/manga, ukiyo-e, western fantasy, generic asian temple stock.
- **Quality gate** (`ART_DIRECTION.md:211-213`): reject nếu có anime traits / stock temple look / palette lệch > 10%.
- **Match art value với vai trò**: cổ vật/đạo phái = hero detail; linh khí/parts = sprite chuẩn; currency/affix/node = icon compact legible-at-small-size.
