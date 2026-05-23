# STYLE DNA — single source of truth

> Đoạn văn phong cách chung **dệt vào cuối phần mô tả của mọi `prompt.md`** trong `docs/content/`.
> Đổi ở đây = đổi cả bộ. Engine thật: **Gemini / Imagen / gpt-image / Grok** — không phải Midjourney.
> Các engine này hiểu **văn xuôi mạch lạc** tốt hơn danh sách keyword rời rạc, nên DNA viết dạng prose.

## STYLE DNA (chép nguyên văn vào cuối prompt)

```
Rendered as a true low-resolution pixel-art game sprite in a moody xianxia daoist-alchemy aesthetic, built from large clearly visible square pixels on a coarse grid — hand-placed pixel by pixel like an Aseprite sprite, never a smooth high-resolution digital painting. Shaped by daoist-alchemy craft language: restrained cinnabar seal marks, hand-cut paper talisman edges, old furnace patina, ritual vessel silhouettes, and sect-made material details. Strictly limited to a six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple; any shading done only with small blocky hand-dithered pixel clusters, never smooth gradients. Very crisp hard pixel edges, a sharp readable silhouette fully bounded by a crisp dark ink contour outline, flat solid color fills with no anti-aliasing. All smoke, wisps, mist and auras are drawn as flat hard-edged pixel shapes, never soft translucent haze. Detail is kept deliberately restrained and bold so every element still reads when the sprite is shrunk small — richness comes from confident shapes and the limited palette, not from fine filigree or rendered realism. In the craftsmanship spirit of Eastward and Sea of Stars — atmospheric, serious, mystical.
```

Trong các file entry, ký hiệu `[STYLE SUFFIX]` = đoạn DNA trên. Khi gen thật phải dán đầy đủ
(xem ví dụ expanded trong `convention.md`).

## Khẳng định thay cho danh sách cấm

Engine Gemini/gpt-image **prime concept khi nghe "no X"** (nói "no anime" vẫn gợi anime). Vì vậy
**không liệt kê `--no anime, manga, ukiyo-e, ...`**. Thay vào đó **khẳng định mạnh phong cách muốn có**
(đã làm trong DNA trên: "hand-crafted pixel art", "flat solid color fills") để lấn át drift.

Chỉ giữ tối thiểu phần vệ sinh bố cục, viết khẳng định. **Mặc định nền magenta key** — engine render
trên nền magenta phẳng, rồi `tools/chroma-key.py` xoá thành PNG RGBA cutout (áp cho cả gpt-image/Gemini/Grok
vì không engine nào xuất alpha tin cậy; verify 2026-05-21):

```
The subject stands alone, centered on a completely flat uniform solid pure chroma magenta background (hex FF00FF) filling the entire frame; this magenta appears nowhere on the subject itself. A clean image with no lettering and no interface elements.
```

- Cần render chữ Hán/Việt trong ảnh → bỏ cụm "no lettering".
- Scene asset có chủ đích (key-art panorama, region, screen) → KHÔNG dùng câu magenta; mô tả nền/cảnh
  cụ thể lấp đầy khung (bỏ chroma-key bước sau).

> **Vì sao DNA bắt buộc "dark ink contour outline":** `tools/chroma-key.py` bào mòn (erode) mask để
> khử dải viền magenta lẫn ở mép. Erosion ăn vài px vào *ngoài cùng* của subject. Đường viền mực huyền
> ôm trọn silhouette = lớp đệm hi sinh — erosion cắn vào viền chứ không cắn vào phần màu bên trong.
> Đây cũng đúng phong cách (Eastward / Sea of Stars dùng contour đậm), nên viền là art thật, không phải hack.

## Aspect & kích thước → cờ engine, KHÔNG nhét vào prompt

Tỉ lệ khung là **cờ engine** (`--aspect` cho google, `--size` cho openai), không viết `--ar` trong prompt body.
Mỗi `prompt.md` ghi một dòng nhãn `Aspect: <ratio>` để orchestrator đọc. Quy đổi bố cục → ratio:

| Ý đồ | Aspect | google `--aspect` | openai `--size` |
|---|---|---|---|
| Item / icon / linh khí / la hán / boss / portrait vuông | `1:1` | `1:1` | `1024x1024` |
| Screen / banner đứng / full-body NPC (mobile portrait #31) | `9:16` | `9:16` | `1024x1536` |
| Key art rộng / panorama | `16:9` | `16:9` | `1536x1024` |

Token MJ cũ (`--style raw`, `--v 6`, `--stylize`, `--chaos`, `--tile`) **không tồn tại ở engine API** → đã bỏ.
Mức độ "bám prompt ↔ bay bổng" trước đây chỉnh bằng `--stylize` nay diễn đạt **bằng prose**: muốn bám sát thì
viết "rendered exactly as described, tight composition"; muốn phóng khoáng thì "loose painterly interpretation".

## Checklist mỗi prompt
1. **Subject cụ thể** mở đầu (chủ thể là gì, đặt giữa khung).
2. **Named-color** từ palette (tên màu, không hex — engine không cần hex).
3. **STYLE DNA** đoạn văn ở trên dệt vào cuối.
4. **Câu vệ sinh bố cục khẳng định** (flat magenta key background FF00FF → chroma-key, no lettering/UI).
5. **Dòng `Aspect:`** ngoài prose.

Thiếu khẳng định phong cách → drift về generic 3D/photoreal.

## Caveat pipeline
Ảnh engine (Gemini/gpt-image/Grok) = **concept / mood / silhouette reference** cho pha thiết kế.
Sprite in-game cuối qua **Aseprite/Pixelorama polish** (`docs/content/style/README.md §Pipeline`).
KHÔNG export thẳng ảnh engine làm asset game.
