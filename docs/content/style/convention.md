# CONVENTION — contract viết prompt (mọi agent tuân thủ)

> Đọc file này + 5 file `style/` còn lại trước khi viết bất kỳ `prompt.md` nào.
>
> **Format hiện hành = prose tự nhiên + nền chroma magenta** (chốt 2026-05-22). Cú pháp cũ `/imagine prompt: ... --ar --stylize --no` của Midjourney đã nghỉ — mọi `prompt.md` nay viết bằng một đoạn văn xuôi tiếng Anh, generator-agnostic.

## Vì sao prose + magenta

- **Prose** đọc tốt trên mọi generator hiện đại (MJ v6/v7, SDXL, Flux) — không khoá vào cú pháp comma-token + `--param` của riêng Midjourney.
- **Nền chroma magenta `#FF00FF`** = key-out một bước → sprite nền trong suốt cho pipeline Aseprite. Magenta không nằm trong 6-color palette nên không đụng màu subject.
- **Scene môi trường** (arena, screen, map, region) KHÔNG dùng magenta — fill toàn khung.

## Cấu trúc đoạn prompt (4 khối, đúng thứ tự)

```
[1 SUBJECT cụ thể] → [2 ELEMENT + RARITY dệt thành câu] → [3 STYLE BLOCK] → [4 BACKGROUND BLOCK]
```

1. **SUBJECT**: tra `style/base-noun-dictionary.md` theo `type`, hoặc `../equipment/README.md` theo `slot`. Câu mở đầu mô tả cụ thể vật thể/nhân vật/cảnh.
2. **ELEMENT + RARITY**: element token (`style/element-tokens.md`) + rarity treatment (`style/rarity-tokens.md`) — **dệt thành câu văn xuôi**, KHÔNG dán nguyên chuỗi comma-token. `element` rỗng → bỏ token, dùng `neutral ivory-and-gold` hoặc theo ngữ cảnh hiệu ứng.
3. **STYLE BLOCK**: chép nguyên văn từ `style/style-suffix.md` (bản thường, hoặc bản `painterly` cho nhân vật/boss).
4. **BACKGROUND BLOCK**: bản **magenta** (asset tách nền: item, icon, emblem, nhân vật, boss) HOẶC bản **fill-frame** (scene môi trường). Lấy từ `style/style-suffix.md`.

## Format MỖI `prompt.md` (bắt buộc, đồng nhất toàn bộ)

```markdown
# <ten thật từ data> — prompt

**Mô tả**: <1-2 câu tiếng Việt: vật phẩm là gì + nét thị giác chủ đạo, nhắc lore nếu có>.

Aspect: <1:1 | 9:16>

​```
<đoạn prompt prose tiếng Anh, 4 khối ghép liền thành văn xuôi>
​```
```

- Entity nhiều view (NPC, boss 2 dạng) → nhiều section `## <View> — Aspect: <ratio>`, mỗi section một code block.
- KHÔNG còn `/imagine prompt:` prefix. KHÔNG `--ar/--stylize/--style raw/--chaos/--no`. Tỉ lệ khung ghi bằng dòng text `Aspect:`. Nội dung `--no` cũ (anti-anime, anti-3d…) đã gói vào STYLE BLOCK dưới dạng câu khẳng định.

## 4 template prose (copy khung, điền phần `<...>`)

### A — Item / icon / emblem (square, magenta)

Dùng cho: `items`, `uniques`, `equipment`, `currency`, `sets` (emblem), `ascendancies` (banner emblem).

```
A single <SUBJECT>, <ELEMENT treatment dệt vào câu>, <RARITY treatment dệt vào câu>. <1 câu nét đặc trưng riêng của entity>. <STYLE BLOCK thường>. <BACKGROUND magenta>.
```

Currency / icon nhỏ 32–64px → thêm `drawn as a small inventory icon that stays clearly legible at tiny size` ngay sau SUBJECT.

### B — Boss creature sprite (square, magenta, painterly)

Dùng cho: `bosses`.

```
A full-body boss creature sprite of <SUBJECT mô tả hình thái + phase>, <ELEMENT treatment>, menacing and imposing. <STYLE BLOCK painterly>. <BACKGROUND magenta>.
```

### C — Environment scene (portrait, fill-frame)

Dùng cho: `arenas`, `screens` (scene/backdrop), `maps`, `regions`.

```
A full-frame environment scene of <SUBJECT cảnh + mood + bố cục>, <ELEMENT/palette dẫn dắt>. <STYLE BLOCK thường>. <BACKGROUND fill-frame>.
```

UI screen có node-map/markers vẽ đè bằng code → ghi thêm `kept dark and uncluttered for overlaid interface markers`.

### D — Character (portrait + full-body, magenta, painterly)

Dùng cho: `npcs`. Hai section: `## Portrait (dialogue) — Aspect: 1:1` và `## Full-body (hub sprite) — Aspect: 9:16`.

```
A character portrait headshot of <SUBJECT> / A full-body standing character sprite of <SUBJECT>, <nét nhận dạng + palette nghiêng>. <STYLE BLOCK painterly>. <BACKGROUND magenta>.
```

## Quy tắc cứng

1. **ID + `ten` khớp data thật** — copy nguyên từ `design.md` frontmatter. KHÔNG bịa. Verify bằng grep nếu nghi ngờ.
2. **`ten` giữ nguyên tiếng Việt đủ dấu** (NFC). `**Mô tả**` tiếng Việt; đoạn prompt tiếng Anh.
3. **4 khối** đúng thứ tự: subject → element/rarity → STYLE BLOCK → BACKGROUND BLOCK.
4. **STYLE BLOCK + BACKGROUND BLOCK chép nguyên văn** từ `style/style-suffix.md` — không paraphrase, để cả bộ đồng nhất.
5. **Match độ chi tiết với vai trò**: hero (cổ vật/đạo phái/boss) tả giàu chi tiết; linh khí/trang bị mức vừa; icon currency/affix compact, "legible at tiny size".
6. **Nền**: asset tách rời (item, icon, emblem, nhân vật, boss) → magenta `#FF00FF`. Scene môi trường → fill-frame. KHÔNG trộn.
7. **Per-entity layout**: mỗi entity một file `docs/content/<category>/<id>/prompt.md`. KHÔNG batch nhiều entity vào một file.
8. **Bundle-specific art rule**: subject mapping per-slot (`../equipment/README.md`) và rune overlay per-affix-category (`../affixes/README.md`) sống ở bundle README — KHÔNG nhồi vào `style/` shared.

## Ví dụ chuẩn (linh khí `bronze-bell`)

```markdown
# Chuông Đồng — prompt

**Mô tả**: Chuông đồng cổ luyện từ thời Hùng Vương, gõ một tiếng thì linh khí trong lò thức giấc; hình khối góc cạnh, ánh kim lạnh.

Aspect: 1:1

​```
A single ancient bronze ritual bell with a sharp angular silhouette, forged metal catching a cold metallic gleam and a thin imperial-gold edge light. It bears a plain dull finish inside a simple thin gray border frame, with no glow. Rendered as moody, hand-crafted pixel art in a xianxia daoist-alchemy aesthetic, woven with talismanic cinnabar runes and bagua trigram motifs. Strictly limited to a six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple. Very crisp hard pixel edges, a sharp readable silhouette fully bounded by a crisp dark ink contour outline, flat solid color fills with no soft gradients and no anti-aliasing, in the craftsmanship spirit of Eastward and Sea of Stars — atmospheric, serious, mystical. The subject stands alone, centered on a completely flat uniform solid pure chroma magenta background (hex FF00FF) filling the entire frame; this magenta appears nowhere on the subject itself. A clean image with no lettering and no interface elements.
​```
```
