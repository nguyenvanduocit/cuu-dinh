# STYLE BLOCK + BACKGROUND BLOCK — single source of truth

> Hai khối cuối **chép nguyên văn vào mọi `prompt.md`** trong `docs/content/`. Đổi ở đây = đổi cả bộ. Nguồn: `docs/art-direction.md`.
>
> Format prose hiện hành (chốt 2026-05-22) — xem `convention.md`. Cú pháp cũ `/imagine ... --param` đã nghỉ.

## STYLE BLOCK — bản thường (item, icon, emblem, scene)

> Chép nguyên văn, đặt ngay sau câu SUBJECT + ELEMENT/RARITY.

```
Rendered as moody, hand-crafted pixel art in a xianxia daoist-alchemy aesthetic, woven with talismanic cinnabar runes and bagua trigram motifs. Strictly limited to a six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple. Very crisp hard pixel edges, a sharp readable silhouette fully bounded by a crisp dark ink contour outline, flat solid color fills with no soft gradients and no anti-aliasing, in the craftsmanship spirit of Eastward and Sea of Stars — atmospheric, serious, mystical.
```

## STYLE BLOCK — bản painterly (nhân vật, boss)

> Giống bản thường, chỉ thay `hand-crafted pixel art` → `hand-crafted painterly pixel art`.

```
Rendered as moody, hand-crafted painterly pixel art in a xianxia daoist-alchemy aesthetic, woven with talismanic cinnabar runes and bagua trigram motifs. Strictly limited to a six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple. Very crisp hard pixel edges, a sharp readable silhouette fully bounded by a crisp dark ink contour outline, flat solid color fills with no soft gradients and no anti-aliasing, in the craftsmanship spirit of Eastward and Sea of Stars — atmospheric, serious, mystical.
```

## BACKGROUND BLOCK — magenta (asset tách nền)

> Dùng cho item, icon, emblem, nhân vật, boss — mọi asset cần key-out nền.

```
The subject stands alone, centered on a completely flat uniform solid pure chroma magenta background (hex FF00FF) filling the entire frame; this magenta appears nowhere on the subject itself. A clean image with no lettering and no interface elements.
```

## BACKGROUND BLOCK — fill-frame (scene môi trường)

> Dùng cho arena, screen backdrop, map, region — cảnh phủ kín khung, không tách nền.

```
The scene fills the entire frame, no lettering and no interface chrome.
```

## Aspect (ghi bằng dòng text `Aspect:`, KHÔNG `--ar`)

| Aspect | Khi nào |
|---|---|
| `1:1` | item sprite, icon, emblem, boss sprite, portrait headshot |
| `9:16` | environment scene, UI screen backdrop, full-body nhân vật/banner đứng |

## Checklist mỗi prompt (4 khối bắt buộc)

1. SUBJECT cụ thể
2. ELEMENT + RARITY dệt vào câu (named-color, không chỉ hex)
3. STYLE BLOCK (thường hoặc painterly) — chép nguyên văn
4. BACKGROUND BLOCK (magenta hoặc fill-frame) — chép nguyên văn

Thiếu một khối → prompt drift về generic.

## Caveat pipeline

Prompt prose = **concept/mood/reference** cho pha thiết kế, generator-agnostic. Sprite final qua **SDXL + pixel-art LoRA → Aseprite polish** (`art-direction.md §AI Asset Pipeline`). Nền magenta giúp key-out sạch ở bước Aseprite.
