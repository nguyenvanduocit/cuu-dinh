---
description: >-
  Đầu mối (orchestrator) sinh art asset cho Cửu Đỉnh. DÙNG SKILL NÀY bất cứ khi nào
  user muốn tạo art / sprite / icon / concept / mood / chân dung NPC-boss / key art cho
  game — kể cả khi chỉ nói "vẽ / làm ảnh cho game" mà không nói rõ engine. Skill tự tìm
  & load art-direction DNA (palette, style-suffix, element/rarity tokens) từ
  docs/content/style + dữ liệu thật của entity, compose prompt PROSE chuẩn phong cách
  huyền huyễn/tu chân (engine đọc văn xuôi tốt hơn keyword), render trên nền magenta phẳng rồi
  RMBG matting (tools/chroma-key.py) thành PNG cutout. Một engine duy nhất: gọi gpt-image-2 TRỰC TIẾP
  qua script embedded generate.py (CLI image API; gen + --ref edits). Art lưu trong bundle entity:
  docs/content/<category>/<id>/art/.
allowed-tools: Bash, Read, Write
---

# /generate-game-art — Cửu Đỉnh Art Orchestrator

> **Project skill.** Canonical location: `.claude/skills/generate-game-art/SKILL.md`

Đây là **đầu mối** sinh mọi visual asset cho Cửu Đỉnh. Skill này là **não**: nó tìm,
đọc và load đúng style + định nghĩa entity cho yêu cầu, **compose prompt hoàn chỉnh
đúng art-direction**, rồi render — gọi `gpt-image-2` **trực tiếp** qua script embedded.

**MUST BE USED** khi user muốn tạo art, sprite, icon, concept, mood, chân dung, key art,
hoặc bất kỳ visual asset nào cho game.

```
user request ─▶ generate-game-art (NÃO: load DNA + dữ liệu thật → compose prompt PROSE nền magenta → ghi prompt file)
                        │
                        ├─▶ generate.py (embedded)   (gpt-image-2 TRỰC TIẾP — gen + edits/--ref; CLI image API)
                        │
                        └─▶ tools/chroma-key.py      (RMBG matting tách nền → PNG RGBA cutout vào art/)
```

**Một engine duy nhất**: skill chạy `generate.py` (code mượn từ codex-image) gọi thẳng
`gpt-image-2`. Script chỉ nhận `--prompt-file` + `--out` (+ `--ref`), gọi API, lưu ảnh;
toàn bộ chất nhận diện nghệ thuật + hậu xử lý nền do skill này nắm.

> `generate.py` trỏ **CLI image API proxy** (Tailnet, cấu hình ở
> `~/.config/codex-image/config.json` — endpoint + key sống ngoài repo). Máy phải on
> Tailscale; Tailnet down → script báo timeout/connection refused, fix kết nối rồi chạy lại.

---

## Phân công trách nhiệm

| Việc | Ai làm |
|---|---|
| Sketch production scope (UI surface, size spectrum, variant, family, sequel) | **generate-game-art** (Bước 0) |
| Hiểu yêu cầu, chọn entity, lấy `id`/`ten`/`element`/`rarity` thật | **generate-game-art** |
| Load art DNA, compose prompt cuối, chuyển token sang tham số API | **generate-game-art** |
| Chọn size/aspect | **generate-game-art** |
| Gọi gpt-image-2 (gen + edits), lưu file | **generate-game-art** (chạy `generate.py` trực tiếp) |
| Xoá nền → PNG RGBA cutout | **generate-game-art** (chạy `tools/chroma-key.py`) |
| Report gap end-of-turn (đã làm gì, thiếu gì cho production complete) | **generate-game-art** |

---

## Bước 0 — Production pipeline scope (sketch TRƯỚC khi render)

Asset gen là **game-systems thinking**, KHÔNG phải art commission. Bỏ qua bước này =
asset isolated → family break (vẽ tableau khi sibling là crest) HOẶC pipeline gap
(vẽ 1024px concept mà chưa nghĩ tới 32px sigil derive được hay không). Cost cả hai:
render uổng + round-trip với user.

**TRƯỚC** khi mở prompt, sketch 6 checkpoint sau:

1. **UI surface inventory** — Asset này show ở **mấy chỗ** trong game? Concrete list:
   roster row, detail screen, quest tag, dialogue header, atlas node, banner backdrop,
   cutscene splash, loading screen. Tham khảo `docs/content/screens/<screen>/design.md`
   nếu chưa chắc surface nào dùng asset của category này.
2. **Size + aspect spectrum** — 16px (atlas marker) ↔ 1024px (detail screen). Asset
   đang plan có **downscale-safe** không (bold central symbol, palette discipline,
   không filigree)? Có cần variant aspect (1:1 icon + 9:16 banner + 32×32 sigil) không?
3. **Variant set** — idle/active, normal/cursed, intro/idle/defeat, day/night, healthy/
   wounded, sealed/awakened. Faction/icon = ít variant; NPC/boss/linh khí = nhiều.
4. **Family it joins** — `ls docs/content/<category>/` → mở **ít nhất 1 sibling** đã có
   `art/concept-vN.png` + đọc `prompt.md` đi kèm. **Adopt family visual language**
   (heraldic crest? narrative tableau? icon? glyph? portrait?), KHÔNG invent. Đây là
   enforcement của `convention.md` rule "family" qua exemplar concrete, không phải đọc
   rule suông. Skip step này = một sibling đã ship sẽ làm asset mới cảm giác lạc loài.
5. **Sequel asset unlock** — Asset này **lock theme/lore/palette** cho asset nào tiếp
   theo? Vd: faction emblem locks → NPC portrait theming → faction region key art →
   UI border framing. Note ra để authoring sau có context kế thừa.
6. **Production phase** — concept (placeholder/AI gen OK) / polish (Aseprite reduction
   pass cần) / final (integration tested ở UI thật). Lần này đang ở phase nào?

**Output Bước 0**: report scope ngắn cho user **TRƯỚC khi render**:

> "Để cover [entity], cần asset set: A (làm lần này), B/C (variant phase sau),
> D (sequel khi entity downstream sẵn sàng). Family: inherit từ sibling `<id>`
> (format: <heraldic crest / narrative tableau / icon / ...>). OK render A?"

Confirm scope với user → sang Bước 1.

**End-of-turn**: gap report bắt buộc — "Đã làm: X. Còn thiếu cho production complete:
Y (variant), Z (sequel), W (polish pass)."

---

## Bước 1 — Nền trong suốt = RMBG matting

**Mọi cutout đi qua một đường đồng nhất:** gpt-image-2 sinh ảnh trên **nền một màu phẳng ngoài
palette** (mặc định magenta `#FF00FF`), rồi `tools/chroma-key.py` chạy **RMBG-2.0 matting**
tách subject khỏi nền → **PNG RGBA**. Lý do không dùng alpha native: gpt-image-2 **bị API bác**
`transparent` (verify 2026-05-21) → matting là đường ra cutout. Nền magenta phẳng vẫn cần:
matting tách gọn nhất trên nền đồng màu, bước despill khử ánh magenta hắt lên mép, câu nền ép
bố cục "subject một mình, giữa khung, không UI/chữ".

> Hiếm khi cần ảnh **có nền** (key art cảnh đầy đủ) → bỏ bước tách nền, đổi câu nền prose sang
> "on a flat solid dark-ink background".

---

## Bước 2 — Load art DNA (luôn đọc từ nguồn, KHÔNG hardcode)

Đọc đủ các file style canonical ở `docs/content/style/` theo thứ tự:

1. `convention.md` — công thức compose prose + hard rules
2. `style-suffix.md` — STYLE DNA prose (chất nhận diện) + cách khẳng-định-hoá negative + aspect→cờ engine
3. `palette.md` — 6-color palette khoá
4. `element-tokens.md` — cách mô tả Ngũ Hành khi entity/asset có element mechanic hoặc subject Ngũ Hành rõ
5. `rarity-tokens.md` — xử lý theo độ hiếm (khi liên quan)
6. `base-noun-dictionary.md` — danh từ gốc đúng cho từng loại asset

Sửa file style là skill tự cập nhật theo — đừng chép cứng giá trị vào đây.

---

## Bước 3 — Mọi asset thuộc 1 entity bundle (KHÔNG có thư mục art tập trung)

Art Cửu Đỉnh sống trong bundle per-entity (decision #29). Mỗi entity
`docs/content/<category>/<id>/` gồm:

- `design.md` — `id`, `ten`, `element`, `rarity` **thật** (KHÔNG bịa).
- `prompt.md` — **prompt nguồn**: mô tả + dòng `Aspect: 1:1` + khối prose tiếng Anh kết bằng `[STYLE SUFFIX]`.
- `art/` — ảnh output, versioned `concept-vN.<ext>` (`concept-v1.png`, `concept-v2.png`, …).

1. Xác định entity của yêu cầu (`<category>/<id>`, vd `currency/fire-essence`).
   Yêu cầu không gắn entity nào → **hỏi entity đích hoặc tạo bundle mới trước**; KHÔNG output ra ngoài bundle.
2. Đọc `design.md` lấy dữ liệu thật. `ten` giữ tiếng Việt đủ dấu (NFC); prompt gửi API viết tiếng Anh.
3. Đọc `prompt.md`:
   - Có sẵn → đó là prompt nguồn để render (expand `[STYLE SUFFIX]` ở Bước 4; đọc dòng `Aspect:` để chọn cờ).
   - Chưa có / entity mới → **tự viết `prompt.md`** (mô tả + `Aspect:` + khối prose kết bằng `[STYLE SUFFIX]`) rồi mới render.

---

## Bước 4 — Compose prompt cuối (PROSE tiếng Anh)

gpt-image-2 là **language model**, không phải Midjourney: **văn xuôi mạch lạc thắng keyword salad,
khẳng định thắng phủ định**. Đó là khác biệt cốt lõi quyết định chất lượng — prompt comma-list kiểu
MJ làm model drift về generic.

### Nguyên tắc prompting engine-native (BẮT BUỘC)

1. **Prose, không keyword salad.** Viết 1-3 câu tự sự mô tả cảnh, không phải chuỗi token cách dấu phẩy.
   Thứ tự: **chủ thể → bố cục → element/rarity treatment → phong cách (STYLE DNA) → vệ sinh nền**.
2. **Khẳng định, không liệt kê cấm.** Engine **prime concept khi nghe "no X"** ("no anime" vẫn gợi anime —
   ironic process). KHÔNG dùng `--no anime, manga, ukiyo-e, ...`. Thay bằng khẳng định mạnh phong cách muốn
   có ("hand-crafted pixel art, flat solid color fills") + câu nền magenta key của `style-suffix.md`
   ("on a completely flat uniform solid pure chroma magenta background, hex FF00FF, ... no lettering").
3. **Named-color, không hex** (ngoại lệ: `FF00FF` của nền magenta — nền render cần một hex đồng nhất cho matting/despill). "imperial gold", không `#D4AF37`.
4. **Aspect là cờ engine, không nằm trong prose.** Đọc dòng `Aspect:` của `prompt.md` → đổi sang cờ
   (bảng dưới). KHÔNG còn `--ar/--stylize/--v/--chaos` trong prompt (chúng không tồn tại ở engine API).
5. **Mức stylize diễn đạt bằng prose**: bám sát → "rendered exactly as described, tight composition";
   phóng khoáng → "loose painterly interpretation".

### Quy trình compose

- **Entity đã có `prompt.md` (prose)**: lấy khối prose, **thay `[STYLE SUFFIX]`** bằng STYLE DNA thật từ
  `style/style-suffix.md`, đọc `Aspect:` → cờ engine. Đó là prompt engine-ready.
- **`prompt.md` còn format MJ cũ** (`/imagine prompt: … --stylize N --no …`): coi là legacy chưa migrate.
  Chuyển sang prose tại chỗ — gỡ `--stylize/--style raw/--v/--chaos`, biến danh sách `--no` thành khẳng
  định, ghép thành câu tự sự — rồi render. (Migration hàng loạt: rewrite `prompt.md` theo `convention.md`.)
- **Entity chưa có prompt**: compose mới theo formula prose trong `style/convention.md`.

### Quy đổi Aspect → cờ `generate.py --size`

| `Aspect:` | `--size` |
|---|---|
| `1:1` — item / icon / linh khí / la hán / boss / portrait vuông | `1024x1024` |
| `9:16` — screen / banner đứng / full-body NPC (mobile portrait #31) | `1024x1536` |
| `16:9` — key art rộng / panorama | `1536x1024` |

Không nhét token pixel kiểu `128px` vào prompt — kích thước in-game cuối là bước Aseprite về sau.
Chỉ dùng *style* token pixel-art trong prose (`crisp hard pixel edges`, `limited palette`).

---

## Bước 5 — Render nền magenta → RMBG matting → cutout vào `art/`

1. **Xác định version**: tìm `concept-vN.*` lớn nhất trong `docs/content/<cat>/<id>/art/`;
   lần mới = N+1 (entity chưa có ảnh = `v1`). Giữ bản cũ để so sánh.
2. **Ghi engine-ready prompt** (đã expand `[STYLE SUFFIX]`, đã bỏ MJ `--params`, **câu nền =
   magenta phẳng**) ra file **tạm** `/tmp/cuu-dinh-<id>-vN.txt` — KHÔNG ghi vào bundle. `prompt.md`
   vẫn là nguồn duy nhất được commit. Câu vệ sinh nền cho cutout:
   > *"The subject stands alone, centered on a completely flat uniform solid pure chroma magenta
   > background (hex FF00FF) filling the entire frame; this magenta appears nowhere on the subject
   > itself. A clean image with no lettering and no interface elements."*
3. **Render** ra file **thô tạm** (chưa cutout), vd `/tmp/cuu-dinh-<id>-vN-raw` — chạy
   `generate.py` qua Bash:
   ```bash
   python3 .claude/skills/generate-game-art/generate.py \
     --prompt-file /tmp/cuu-dinh-<id>-vN.txt \
     -o /tmp/cuu-dinh-<id>-vN-raw.png \
     --size 1024x1024
   ```
   `--size` theo `Aspect:` (1:1→`1024x1024`, 9:16→`1024x1536`, 16:9→`1536x1024`).
   Script tự in `saved: <path>`. Chỉnh ảnh sẵn / giữ nhân vật → thêm
   `--ref docs/content/<cat>/<id>/art/concept-v<N-1>.png` (lặp được, tối đa 16 → đi
   `/v1/images/edits`).
4. **Tách nền → cutout** vào bundle (chỉ file cuối đi vào `art/`):
   ```
   python3 tools/chroma-key.py /tmp/cuu-dinh-<id>-vN-raw.<ext> docs/content/<cat>/<id>/art/concept-vN.png
   ```
   Tool dùng **RMBG-2.0 matting** (alpha matte mềm bám sát silhouette) + despill + erode 1px —
   cố định, không tham số. Lần chạy đầu cần đăng nhập HuggingFace (`hf auth login`) vì RMBG-2.0
   là gated repo; license CC BY-NC 4.0 (phi thương mại — phù hợp dự án này).

> Output cuối luôn **PNG RGBA** `concept-vN.png`. File thô `/tmp` bỏ đi sau khi key xong.

---

## Bước 6 — Verify & feedback

- `generate.py` in `saved: <path>`; chạy `file <path>` xác nhận ảnh tồn tại, đúng định dạng
  & kích thước kỳ vọng.
- Báo kết quả; **hỏi feedback trước khi sinh batch tiếp**. Một lần render = một asset.

---

## Quy ước output & version

- Ảnh sống **trong bundle**: `docs/content/<category>/<id>/art/concept-vN.<ext>`. KHÔNG dùng thư mục art tập trung.
- Mỗi lần sinh = **tăng version** (`concept-v1` → `concept-v2` → …); giữ bản cũ để so sánh.
- Prompt nguồn ở `prompt.md` của entity; bản expand chỉ là file tạm `/tmp`, không commit vào bundle.
- Code-level id giữ English (kebab-case); display name `ten` giữ tiếng Việt đủ dấu.

---

## Aesthetic rules (bất biến)

- Moody pixel art game art, phong cách xianxia / daoist alchemy.
- Daoist-alchemy craft language: restrained cinnabar seal marks, hand-cut paper talisman edges, old furnace patina, ritual vessel silhouettes, sect-made material details.
- Limited 6-color palette (ink black, cinnabar red, imperial gold, ivory white, jade green, twilight purple).
- Hand-crafted sprite craftsmanship (tinh thần Eastward + Sea of Stars).
- Very crisp hard pixel edges, sharp silhouette, flat solid color fills.
- Khẳng định mạnh phong cách muốn có (hand-crafted pixel art huyền huyễn) để lấn át drift — KHÔNG liệt kê
  danh sách cấm trong prompt (engine prime concept khi nghe "no X"). Nền render mặc định = **nền magenta phẳng**
  ("on a completely flat uniform solid pure chroma magenta background, hex FF00FF, appearing nowhere on the
  subject") → `tools/chroma-key.py` (RMBG matting) biến thành PNG RGBA cutout. Cutout cuối, không nền.

---

## Usage

```
/generate-game-art currency/fire-essence                    # gpt-image-2 nền magenta → RMBG matting → art/concept-vN.png
/generate-game-art bosses/anomaly-wuxing                     # → docs/content/bosses/anomaly-wuxing/art/concept-vN.png
/generate-game-art equipment/crown-rare-heaven v2 giữ dáng  # --ref concept-v1.png → edits giữ nhân vật
/generate-game-art npcs/old-alchemist chân dung, có nền cảnh # ảnh có nền → bỏ bước tách nền, nền dark-ink
```

---

## Lưu ý

- Có yêu cầu art **toàn cục mới** (đổi palette, style, danh từ gốc...) →
  cập nhật file trong `docs/content/style/` (skill tự nạp lại), KHÔNG sửa cứng vào SKILL.md này.
- Một engine duy nhất = gpt-image-2 qua `generate.py`. Logic gọi API (gen + edits, config Tailnet,
  model) nằm trong `generate.py` cạnh SKILL.md này — đây là orchestration logic, không phải art DNA.
- Player-facing Hán-Việt (`ten`, lore, dialogue) giữ tiếng Việt đủ dấu; prompt gửi API viết tiếng Anh.
