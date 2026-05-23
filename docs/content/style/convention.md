# CONVENTION — contract viết prompt (mọi agent tuân thủ)

> Đọc file này + 5 file `style/` còn lại trước khi viết bất kỳ entry nào.
> Engine thật: **Gemini / Imagen / gpt-image / Grok** — các model này đọc **văn xuôi mạch lạc**
> tốt hơn danh sách keyword. Prompt viết dạng **prose có cấu trúc**, không phải comma-salad MJ.

## Compose formula (prose, theo thứ tự)

```
[FUNCTIONAL IDENTITY: cái này LÀ GÌ + thuộc bộ/loại nào — lấy từ glossary]
 → [ELEMENT TREATMENT nếu subject thật sự elemental]
 → [RARITY TREATMENT]
 → [STYLE DNA — đoạn văn từ style-suffix.md]
 → [câu vệ sinh bố cục khẳng định: on a flat solid magenta key background FF00FF → chroma-key, no lettering/UI]
```

Viết liền thành 1-3 câu tự sự, không liệt kê token cách nhau bằng dấu phẩy rời rạc.

- FUNCTIONAL IDENTITY: tra glossary (`style/base-noun-dictionary.md` theo `type`, hoặc bundle README theo slot/category). Đây là phần neo ngữ nghĩa — xem section dưới.
- ELEMENT TREATMENT: chỉ tra `style/element-tokens.md` khi entity/asset có element mechanic rõ trong `design.md` hoặc subject là hiệu ứng/nhánh/địa điểm Ngũ Hành. KHÔNG dùng Ngũ Hành như watermark thẩm mỹ cho mọi asset.
- RARITY TREATMENT: tra `style/rarity-tokens.md` theo `rarity`/`variant`.
- STYLE DNA: lấy từ `style/style-suffix.md` (dán đầy đủ khi gen thật).
- Aspect: ghi dòng nhãn riêng `Aspect: <ratio>`, KHÔNG nhét `--ar` vào prose.

## Định danh chức năng & glossary nhất quán (quan trọng nhất cho chất lượng)

Engine generate **kém** khi chỉ nghe mô tả hình học ("a round object", "a circle") và **tốt** khi được neo
vào một khái niệm có chức năng ("the **sealing lid** that closes a three-legged daoist alchemy furnace").
Định danh chức năng huy động đúng "kiến thức" của model về vật đó, thay vì để nó đoán mò.

Quan trọng hơn: định danh đến **từ glossary dùng chung**, không tự chế mỗi file. Nhờ đó hai entity cùng
`type`/slot/category **kế thừa cùng câu định danh** → trông như một gia đình. Ví dụ 8 slot trang bị
(`crown/body/base/handle/lid/amulet/ring/belt`) đều là **bộ phận của CÙNG một cái lò luyện đan ba chân**
(decision #8) — mọi prompt slot phải neo "part of the same three-legged daoist alchemy furnace" để ráp lại
thành một cái lò liền mạch, không phải 8 vật rời.

Nguồn glossary:
- `style/base-noun-dictionary.md` — `type` → định danh chức năng (cross-cut items/uniques/affixes).
- `../equipment/README.md` — slot → định danh bộ phận lò (8 slot, cùng một lò).
- `../affixes/README.md` — affix category → định danh glyph/rune.

Mở đầu prompt LUÔN là định danh chức năng từ glossary; phần mô tả thị giác riêng (màu, hoa văn, lore-visual)
thêm SAU đó. KHÔNG mở đầu bằng hình học trần trụi.

## Format MỖI entry (bắt buộc, đồng nhất toàn bộ)

```markdown
# <ten thật từ data> — prompt

**Mô tả**: <1-2 câu tiếng Việt: vật phẩm là gì + nét thị giác chủ đạo, nhắc lore nếu có>.

Aspect: 1:1

​```
<prompt prose đầy đủ tiếng Anh ghép theo compose formula, KẾT bằng STYLE DNA + câu vệ sinh bố cục>
​```
```

## Quy tắc cứng

1. **Định danh chức năng trước, từ glossary.** Mở đầu prompt nêu vật LÀ GÌ + thuộc bộ/loại nào, lấy từ
   glossary dùng chung (không tự chế) → đồng loại trông như một gia đình. KHÔNG mở đầu bằng hình học trần trụi.
2. **Prose, không keyword salad.** Câu tự sự mạch lạc; engine hiểu ngôn ngữ, không cần list rời.
3. **ID/`ten` khớp data thật** — copy nguyên từ `design.md`. KHÔNG bịa. Verify bằng `rg` nếu nghi ngờ.
4. **`ten` giữ tiếng Việt đủ dấu** (NFC). Mô tả tiếng Việt; prompt prose tiếng Anh.
5. **Negative khẳng-định-hoá.** KHÔNG viết `--no anime, manga, ...` (prime concept). Khẳng định mạnh
   phong cách muốn có (STYLE DNA đã làm) + 1 câu vệ sinh bố cục.
6. **Named-color, không hex.** Tên màu từ `palette.md` ("imperial gold"), không nhét `#D4AF37` vào prompt.
7. **Aspect là dòng nhãn riêng** → orchestrator đổi sang cờ engine. KHÔNG có `--ar/--stylize/--v` trong prose.
8. **Match art value với vai trò** (diễn đạt bằng prose; mức chi tiết LUÔN nằm trong idiom pixel-art — không bao giờ kéo về illustration hi-res):
   - Hero (cổ vật, unique parts, đạo phái, boss): "a large hero-scale sprite with a fuller palette range and many distinct bold pixel shapes", `Aspect: 1:1`. KHÔNG dùng "highly detailed / ornate / intricate" — các từ này kéo engine về digital painting mịn, phá STYLE DNA. Hero giàu hơn nhờ KÍCH THƯỚC sprite + số lượng hình khối + palette ramp, không nhờ rendering fidelity.
   - Linh khí / La Hán / equipment parts: "a mid-size sprite with moderate, clearly-readable pixel shapes", `Aspect: 1:1`.
   - Icon currency/material 32-64px: "compact, bold, legible at small size", `Aspect: 1:1`.
   - Affix rune / passive node: "a compact glyph icon, not a full illustration", `Aspect: 1:1`.
   - Screen / banner đứng / full-body NPC: `Aspect: 9:16`.
9. **Element context-only** → chỉ dùng element treatment khi element là gameplay/lore subject thật. Entity neutral hoặc NPC/UI/crafting surface không tự động gắn Ngũ Hành; dùng đạo giáo/đan đạo broader motifs như dấu chu sa, mép bùa giấy, patina lò cổ, hình khối pháp khí, phục sức tông môn.
10. **Per-entity layout**: mỗi entity giữ block prompt trong file riêng `docs/content/<category>/<id>/prompt.md`.
    KHÔNG batch nhiều entity vào 1 file.
11. **Bundle-specific glossary**: định danh per-slot (equipment) và rune overlay per-affix-category
    (affixes) sống ở bundle README (`../equipment/README.md`, `../affixes/README.md`) — KHÔNG nhồi vào `style/`.

## Ví dụ chuẩn (linh khí `bronze-bell`)

```markdown
# Chuông Đồng — prompt

**Mô tả**: Chuông đồng cổ luyện từ thời Hùng Vương, gõ một tiếng thì linh khí trong lò thức giấc. Hình khối góc cạnh, ánh kim lạnh.

Aspect: 1:1

​```
A centered game-item icon of a single ancient bronze ritual bell, its forged metal body a sharp angular silhouette with a cold metallic gleam and a thin imperial-gold edge of light, plain dull finish framed by a simple thin gray border, no glow. Rendered as a true low-resolution pixel-art game sprite in a moody xianxia daoist-alchemy aesthetic, built from large clearly visible square pixels on a coarse grid — hand-placed pixel by pixel like an Aseprite sprite, never a smooth high-resolution digital painting. Shaped by daoist-alchemy craft language: restrained cinnabar seal marks, hand-cut paper talisman edges, old furnace patina, ritual vessel silhouettes, and sect-made material details. Strictly limited to a six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple; any shading done only with small blocky hand-dithered pixel clusters, never smooth gradients. Very crisp hard pixel edges, a sharp readable silhouette fully bounded by a crisp dark ink contour outline, flat solid color fills with no anti-aliasing. All smoke, wisps, mist and auras are drawn as flat hard-edged pixel shapes, never soft translucent haze. Detail is kept deliberately restrained and bold so every element still reads when the sprite is shrunk small — richness comes from confident shapes and the limited palette, not from fine filigree or rendered realism. In the craftsmanship spirit of Eastward and Sea of Stars — atmospheric, serious, mystical. The bell stands alone, centered on a completely flat uniform solid pure chroma magenta background (hex FF00FF) filling the entire frame; this magenta appears nowhere on the subject itself. A clean image with no lettering and no interface elements.
​```
```

> Sau ví dụ expanded đầu tiên mỗi file, các entry tiếp theo có thể viết `... [STYLE SUFFIX].` (placeholder)
> để gọn — miễn là file có ÍT NHẤT 1 ví dụ expanded đầy đủ ở đầu để biết STYLE DNA dệt vào đâu.
