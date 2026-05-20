# Art Prompts — Lư Đan (Midjourney v6 pack)

> Bộ prompt cho **giai đoạn thiết kế / concept art**. Mục đích: nạp vào Midjourney v6 để khám phá mood, palette, silhouette, composition trước khi vào sản xuất sprite final.

Tất cả prompt bám sát `docs/ART_DIRECTION.md` (locked 2026-05-19, pivot xianxia 2026-05-20) và data thật trong `packages/data/`.

---

## ⚠ Caveat: MJ v6 = concept, không phải sprite final

Midjourney v6 **xuất sắc cho concept/mood/background** nhưng **không phải tool sản xuất pixel sprite 64×64** (render hard-edge limited-palette sprite kém control).

Pipeline thật vẫn theo `ART_DIRECTION.md §AI Asset Pipeline`:

```
[Pha thiết kế — file này]      MJ v6 → concept board, mood, silhouette reference
        ↓
[Pha sản xuất]                 SDXL + pixel-art LoRA → sprite draft 64×64
        ↓
[Pha polish]                   Aseprite → hand-clean, fix palette, animation frames
```

Dùng output MJ v6 làm **bắc đẩu (north star) thị giác** cho artist + làm reference ảnh đưa vào SDXL (img2img / IP-adapter), KHÔNG export thẳng làm asset game.

---

## Cách dùng

Mỗi prompt theo công thức:

```
[SUBJECT cụ thể] + [ELEMENT token nếu có] + [RARITY treatment nếu có] + [STYLE SUFFIX] [--ar ...]
```

`STYLE SUFFIX` là chuỗi chung dưới đây — **append vào cuối mọi prompt**. Nó chứa palette, tone, negative list, và `--style raw --v 6` (param quan trọng nhất để tránh "MJ default look").

### STYLE SUFFIX (chép nguyên văn vào cuối mỗi prompt)

```
moody pixel art game art, xianxia daoist alchemy aesthetic, talismanic cinnabar runes and bagua trigram motifs, limited six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple, hand-crafted sprite craftsmanship in the spirit of Eastward and Sea of Stars, atmospheric serious mystical tone, crisp hard pixel edges --style raw --v 6 --no anime, manga, ukiyo-e, western fantasy, generic asian temple stock photo, photorealistic, 3d render, glossy plastic, modern, text, ui, watermark, signature, blur
```

> MJ v6 đọc **named color** tốt hơn hex. Hex chỉ để document intent cho human. Palette nguồn: `ART_DIRECTION.md:27-36`.

### Tham số MJ v6 thường dùng

| Param | Khi nào | Giá trị |
|---|---|---|
| `--ar 16:9` | Background / environment / screen scene | landscape |
| `--ar 1:1` | Item sprite, icon, boss, NPC portrait | vuông |
| `--ar 9:16` | Full-body NPC, banner đứng | dọc |
| `--style raw` | **Luôn luôn** | tắt MJ auto-beautify |
| `--stylize` | Thấp = bám prompt, cao = bay bổng | `--stylize 100`–`250` cho asset, `400+` cho mood board |
| `--chaos` | Khám phá variant đa dạng | `--chaos 15`–`30` lúc explore, `0` khi đã chốt |
| `--iw` | Khi có ảnh reference | `--iw 1`–`2` |

### Checklist mỗi prompt (verify trước khi gen)
1. **Subject cụ thể** (cái gì, dáng gì)
2. **Named-color** palette (không chỉ hex)
3. **STYLE SUFFIX** đầy đủ với `--style raw --v 6`
4. **`--no` list** chống drift

Thiếu 1 trong 4 → output sẽ trượt về MJ generic look.

---

## Index

| File | Nội dung | AR mặc định |
|---|---|---|
| [01-environments.md](01-environments.md) | 7 region biome + base camp + boss arena | `16:9` |
| [02-linh-khi-items.md](02-linh-khi-items.md) | 60 linh khí base (parametric template + batch per Ngũ Hành) + 18 La Hán set + 50 Lò parts + 5 rarity border | `1:1` |
| [03-co-vat-uniques.md](03-co-vat-uniques.md) | 30 Cổ vật hand-painted (prompt riêng từng cái) | `1:1` |
| [04-screens.md](04-screens.md) | 14 screen — concept/scene art + panel ornament (KHÔNG phải UI layout) | `16:9` |
| [05-bosses-npcs-effects.md](05-bosses-npcs-effects.md) | 3 boss type + 15 NPC + particle/effect + UI icon | `1:1` |

---

## Nguyên tắc bất di bất dịch

- **English ID, Vietnamese display**: file tham chiếu `id` thật (`bronze-bell`) + `ten` thật (`Chuông Đồng`) từ `packages/data/`. Naming pivot: `docs/superpowers/specs/2026-05-20-naming-convention-pivot.md`.
- **Không reference cấm** (`ART_DIRECTION.md:234-238`): anime/manga, ukiyo-e, western fantasy, generic asian temple stock.
- **Quality gate** (`ART_DIRECTION.md:211-213`): reject nếu có anime traits / stock temple look / palette lệch > 10%.
