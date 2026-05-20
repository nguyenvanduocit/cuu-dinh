# STYLE SUFFIX — single source of truth

> Chuỗi style chung **append vào cuối mọi prompt** trong toàn bộ `docs/art-prompts/`. Đổi ở đây = đổi cả bộ. Nguồn: `docs/ART_DIRECTION.md`.

## STYLE SUFFIX (chép nguyên văn)

```
moody pixel art game art, xianxia daoist alchemy aesthetic, talismanic cinnabar runes and bagua trigram motifs, limited six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple, hand-crafted sprite craftsmanship in the spirit of Eastward and Sea of Stars, atmospheric serious mystical tone, crisp hard pixel edges --style raw --v 6 --no anime, manga, ukiyo-e, western fantasy, generic asian temple stock photo, photorealistic, 3d render, glossy plastic, modern, text, ui, watermark, signature, blur
```

Trong các file entry, ký hiệu `[STYLE SUFFIX]` = chuỗi trên. Khi gen thật phải dán đầy đủ chuỗi (xem ví dụ expanded trong từng category).

## Tham số MJ v6

| Param | Khi nào | Giá trị |
|---|---|---|
| `--ar 16:9` | environment / screen scene | landscape |
| `--ar 1:1` | item sprite, icon, boss, portrait | vuông |
| `--ar 9:16` | full-body NPC, banner đứng | dọc |
| `--style raw` | **luôn** | tắt MJ auto-beautify |
| `--stylize` | asset `100-150`, mood board `300+`, icon `80` | bám prompt ↔ bay bổng |
| `--chaos` | explore `15-30`, đã chốt `0` | đa dạng variant |
| `--tile` | texture lặp seamless | Stash/Settings nền |

## Checklist mỗi prompt (4 thành phần bắt buộc)
1. Subject cụ thể
2. Named-color palette (không chỉ hex)
3. STYLE SUFFIX với `--style raw --v 6`
4. `--no` list

Thiếu 1 → drift về MJ generic.

## Caveat pipeline
MJ v6 = **concept/mood/reference** cho pha thiết kế. Sprite final qua **SDXL + pixel-art LoRA → Aseprite polish** (`ART_DIRECTION.md §AI Asset Pipeline`). KHÔNG export thẳng MJ làm asset game.
