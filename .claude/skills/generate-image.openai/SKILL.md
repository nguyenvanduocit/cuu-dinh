---
description: >-
  Sinh & chỉnh-sửa ảnh bằng OpenAI Images API (gpt-image-2) — engine thuần, không
  dính art-direction. DÙNG SKILL NÀY khi cần tạo/edit/biến-thể ảnh qua OpenAI/ChatGPT/
  gpt-image từ một PROMPT FILE (+ ảnh reference tuỳ chọn) ra một OUTPUT file — kể cả
  khi người dùng chỉ nói "vẽ/render/sinh ảnh bằng OpenAI/GPT" hoặc đưa ảnh sẵn nhờ
  chỉnh. Skill là chuyên gia về OpenAI image API + cách prompting gpt-image; KHÔNG tự
  viết prompt nội dung (việc đó do skill khác/người dùng lo). Cần sinh ảnh bằng
  Google/Gemini/Imagen thì dùng /generate-image.google.
argument-hint: "--prompt-file <path> --out <path> [--ref <ảnh> ...] [--size ...] [--quality ...] [--background ...] [--format ...]"
allowed-tools: Bash, Read
---

# /generate-image.openai — OpenAI gpt-image engine

Engine sinh ảnh thuần qua **OpenAI Images API**. Skill này KHÔNG sáng tác nội dung
prompt — nó nhận **prompt từ file**, **ảnh reference (tuỳ chọn)**, gọi API đúng cách,
và **lưu ra output file**. Bạn (Claude) là chuyên gia API + prompting gpt-image: đọc
kỹ doc dưới rồi **tự viết một đoạn Python ngắn và chạy nó tại thời điểm gọi** (qua
Bash) — không có script đóng gói sẵn, viết tươi mỗi lần để khớp đúng yêu cầu.

Yêu cầu lần này:

> $ARGUMENTS

---

## Hợp đồng đầu vào / đầu ra

| Thành phần | Ý nghĩa | Bắt buộc |
|---|---|---|
| **prompt file** | File chứa prompt (text). Đây là nguồn nội dung chính. Đọc bằng Read. | ✅ |
| **output** | Đường dẫn lưu ảnh. **Đuôi khớp `output_format`** (mặc định png). | ✅ |
| **references** | 0..n đường dẫn ảnh dùng làm mẫu/để chỉnh (editing, giữ nhân vật, style). Có ref → dùng endpoint edits. | ⬜ |

Người dùng có thể truyền dạng `--prompt-file ... --out ... --ref ... --ref ...`
hoặc mô tả tự nhiên ("dùng prompt ở file X, ảnh mẫu Y, lưu vào Z"). Tự parse $ARGUMENTS.

### Quy trình
1. **Đọc prompt file** (Read) → đây là prompt gửi model. Có thể tinh chỉnh nhẹ theo best-practice bên dưới, nhưng giữ nguyên ý đồ; KHÔNG bịa thêm nội dung sáng tạo.
2. **Đọc references nếu có** (Read để xem; ảnh sẽ được gửi tới endpoint edits dạng multipart). File text/md trong references → đọc để hiểu ngữ cảnh, KHÔNG gửi làm ảnh.
3. **Chọn endpoint**: không có ref → `generations` (JSON); có ref → `edits` (multipart).
4. **Viết một đoạn Python stdlib ngắn** theo "Cách gọi API" và **chạy bằng Bash** (sau khi nạp key). Lưu ảnh ra output.
5. **Verify**: in path + chạy `file <path>` xác nhận ảnh hợp lệ + đúng kích thước kỳ vọng.
6. Báo kết quả; hỏi trước khi sinh batch tiếp.

---

## Key

Đọc từ env `OPENAI_API_KEY`. Nạp trước khi chạy (shell hiện tại là fish):
```fish
set -x OPENAI_API_KEY sk-...
```
```bash
# bash/zsh
export OPENAI_API_KEY=sk-...
```
Trong Python lấy bằng `os.environ["OPENAI_API_KEY"]`. Request gửi header `Authorization: Bearer <key>`.

---

## Model: `gpt-image-2` (đọc tài liệu chính thức 2026-05-21)

`gpt-image-2` là GPT Image model mới nhất, mạnh nhất. Snapshot pin để reproducible:
`gpt-image-2-2026-04-21`. Cần verify tổ chức (API Organization Verification) trước khi dùng.

| Năng lực | Chi tiết |
|---|---|
| **size** | **Độ phân giải tuỳ ý** dạng `WIDTHxHEIGHT`, cả 2 chiều chia hết 16, tỉ lệ trong khoảng 1:3 → 3:1, tối đa `3840x2160` (>`2560x1440` là experimental). Hoặc `auto`. Square nhanh nhất. Các size chuẩn: `1024x1024` `1536x1024` `1024x1536`. |
| **quality** | `low` `medium` `high` `auto` |
| **background** | gpt-image-2 chỉ `opaque` `auto`. **`transparent` KHÔNG hỗ trợ** (API bác 2026-05-21: *"Transparent background is not supported for this model"*). Cutout RGBA làm bằng **chroma-key** (render nền magenta phẳng → `tools/chroma-key.py`), do `generate-game-art` điều phối — không qua engine này |
| **output_format** | `png` (mặc định) `jpeg` `webp` |
| **output_compression** | 0-100, chỉ khi format `jpeg`/`webp` |
| **moderation** | `low` (nới filter) `auto` |
| **n** | 1-10 ảnh/lần |
| **editing/reference** | endpoint edits nhận **tối đa 16 ảnh** (`png/webp/jpg`, <50MB). gpt-image-2 **luôn xử lý ảnh input ở high-fidelity tự động** → KHÔNG gửi `input_fidelity` (API không cho chỉnh). |
| **response** | **Luôn trả base64** (`data[].b64_json`). Không cần và không nhận `response_format`. |

- Ảnh thường → `background: opaque`/`auto`. **Cần cutout nền trong suốt → render nền magenta phẳng rồi chroma-key** (`tools/chroma-key.py`); gpt-image-2 output PNG lossless nên mép key sạch nhất. gpt-image-2 không có transparent native.
- Cần ≥2 phương án trong một lần → `n: 2..10`.
- Cần chỉnh ảnh sẵn / giữ nhân vật → truyền references vào endpoint edits.

---

## Cách gọi API (field đã verify — KHÔNG dùng tên đoán)

Base URL: `https://api.openai.com/v1/images`. Header: `Authorization: Bearer <key>`.

### A. Generations — text→image (`POST /v1/images/generations`, JSON)
- Content-Type: `application/json`.
- Body: `{"model","prompt","n","size","quality","background","output_format","output_compression","moderation"}` — chỉ thêm field nào thực sự cần.
- Ảnh trả về: `data[].b64_json` (base64). Có thể kèm `usage` (token).

### B. Edits — reference/chỉnh ảnh (`POST /v1/images/edits`, multipart/form-data)
- Mỗi ảnh input là một part `image[]` (filename + Content-Type). Mask (tuỳ chọn) là part `mask` — vùng **alpha=0** của mask là vùng được vẽ lại; mask phải PNG cùng kích thước ảnh.
- Các field text (`model`, `prompt`, `size`, `quality`, `background`, `output_format`, ...) là part thường (không filename/Content-Type).
- KHÔNG gửi `input_fidelity` cho gpt-image-2.
- Ảnh trả về: `data[].b64_json` (giống generations).

### Mẫu Python để ADAPT (viết tươi, chạy qua Bash; chỉ stdlib)
```python
import os, json, base64, uuid, mimetypes, urllib.request, urllib.error

MODEL  = "gpt-image-2"
PROMPT = open("PROMPT_FILE").read()      # thay đường dẫn thật
REFS   = []                              # ["base.png", ...] → nếu có thì dùng edits
MASK   = None                            # "mask.png" hoặc None
OUT    = "OUTPUT_PATH"                    # đuôi sẽ khớp output_format
KEY    = os.environ["OPENAI_API_KEY"]

# Tham số dùng chung — chỉ thêm cái cần
# cutout: render nền magenta phẳng (background auto) rồi chroma-key bằng tools/chroma-key.py
params = {"model": MODEL, "prompt": PROMPT, "n": 1,
          "size": "1024x1024", "quality": "high",
          "background": "auto", "output_format": "png"}

def call(url, data, ctype):
    req = urllib.request.Request(url, data=data,
        headers={"Authorization": f"Bearer {KEY}", "Content-Type": ctype}, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=300) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:               # 4xx → đọc error.message, ĐỪNG nuốt lỗi
        raise SystemExit(f"HTTP {e.code}: {e.read().decode(errors='replace')}")

if REFS:
    boundary = "----oai" + uuid.uuid4().hex
    body = bytearray()
    def field(name, value):
        body.extend(f"--{boundary}\r\nContent-Disposition: form-data; name=\"{name}\"\r\n\r\n{value}\r\n".encode())
    def filepart(name, path):
        mime = mimetypes.guess_type(path)[0] or "image/png"
        body.extend(f"--{boundary}\r\nContent-Disposition: form-data; name=\"{name}\"; filename=\"{os.path.basename(path)}\"\r\nContent-Type: {mime}\r\n\r\n".encode())
        body.extend(open(path, "rb").read()); body.extend(b"\r\n")
    for k, v in params.items():
        field(k, v)
    for p in REFS:
        filepart("image[]", p)
    if MASK:
        filepart("mask", MASK)
    body.extend(f"--{boundary}--\r\n".encode())
    d = call("https://api.openai.com/v1/images/edits", bytes(body), f"multipart/form-data; boundary={boundary}")
else:
    d = call("https://api.openai.com/v1/images/generations", json.dumps(params).encode(), "application/json")

EXT = {"png": ".png", "jpeg": ".jpg", "webp": ".webp"}[params.get("output_format", "png")]
imgs = [it["b64_json"] for it in d["data"]]
base = os.path.splitext(OUT)[0]
for i, b64 in enumerate(imgs):
    path = f"{base}{EXT}" if len(imgs) == 1 else f"{base}-{i+1}{EXT}"
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    open(path, "wb").write(base64.b64decode(b64))
    print("saved", os.path.abspath(path))
if d.get("usage"): print("usage", d["usage"])
```
Lỗi HTTP 4xx → đọc body JSON `error.message` để biết field sai (vd size không chia hết 16, hay background không hợp lệ với format đang dùng). Đừng nuốt lỗi im lặng.

---

## Tính năng nâng cao (reference — đọc docs 2026-05-21; phần Responses API chưa chạy thực nghiệm)

OpenAI có **2 API ảnh**, chọn theo nhu cầu:

| API | Endpoint | Khi nào |
|---|---|---|
| **Images API** | `/v1/images/generations`, `/v1/images/edits` | Một ảnh từ một prompt (one-shot). **Skill này dùng cái này.** |
| **Responses API** | `/v1/responses` + `tools:[{"type":"image_generation"}]` | Hội thoại sửa ảnh **nhiều lượt**, giữ ngữ cảnh ảnh trước |

### 1. Edit / reference (Images API — đã có ở CLI `--ref`)
- `/v1/images/edits`, gửi 1–16 ảnh qua `image[]`. Sửa toàn phần hoặc kèm mask để sửa cục bộ.
- gpt-image-2 **luôn** xử lý ảnh input ở high-fidelity → giữ nhân vật/đối tượng tốt, nhưng tốn nhiều input token hơn. KHÔNG gửi `input_fidelity` (gpt-image-1/1.5 mới chỉnh được `high|low`).

### 2. Inpaint bằng mask ("paint" — đã có ở CLI `--mask`)
- Mask chỉ vùng cần vẽ lại. **Yêu cầu mask (quan trọng)**: cùng format + size với ảnh gốc, <50MB, và **PHẢI có alpha channel** — vùng **alpha=0** (trong suốt) là vùng được repaint.
- Masking với GPT Image là **prompt-based guidance**: model dùng mask làm gợi ý, **không bám chính xác hình mask** tuyệt đối. Nhiều ảnh input → mask áp lên ảnh **đầu tiên**.
- Mask đen-trắng → thêm alpha trước khi dùng:
  ```python
  from PIL import Image
  m = Image.open("mask_bw.png").convert("L")     # grayscale
  rgba = m.convert("RGBA"); rgba.putalpha(m)      # dùng chính nó làm alpha
  rgba.save("mask_alpha.png")
  ```

### 3. Iterative refine — "continue" nhiều lượt (Responses API)
- Sinh ảnh → "giờ làm realistic hơn" → "thêm X", **giữ ngữ cảnh** qua `previous_response_id` (hoặc đưa image-id của lượt trước vào context).
- Tham số `action` của tool: `"auto"` (model tự quyết tạo mới hay sửa — mặc định), `"generate"` (luôn tạo mới), `"edit"` (ép sửa ảnh đang có context; ép edit mà không có ảnh trong context → lỗi).
- `revised_prompt`: prompt model tự viết lại, đọc ở field `revised_prompt` của `image_generation_call`.
- Lệch contract "prompt-file → 1 output" của engine thuần này → nếu cần, thêm nhánh riêng `--continue <previous_response_id>` (chưa wire).

### 4. Streaming partial images (cả 2 API)
- `partial_images` (0–3): nhận ảnh hiện dần. Event `response.image_generation_call.partial_image` → `partial_image_index`, `partial_image_b64`. Mỗi partial +100 image output token.

---

## Prompting gpt-image (chuyên môn — áp khi tinh chỉnh prompt từ file)

- **Bám sát chỉ thị (instruction following) là thế mạnh của gpt-image.** Viết câu lệnh rõ ràng, cụ thể; model tuân thủ tốt hơn khi prompt có cấu trúc rõ (chủ thể → bố cục → phong cách → chi tiết).
- **Render chữ trong ảnh tốt** → nêu nguyên văn nội dung chữ trong ngoặc kép + mô tả font/placement.
- **Ảnh thật** → ngôn ngữ nhiếp ảnh: góc máy, ống kính (`85mm portrait lens`), ánh sáng (`soft golden-hour light`), bokeh.
- **Minh hoạ stylized** → nêu rõ kỹ thuật (`flat vector`, `cel-shading`, `bold outlines`) + xử lý nền.
- **Negative ngữ nghĩa**: mô tả khẳng định cái muốn thấy ("an empty deserted street") thay vì liệt kê cái không muốn.
- **Reference & consistency (endpoint edits)**: gửi ảnh mẫu để giữ nhân vật/đối tượng; nêu rõ phần cần giữ nguyên ("khuôn mặt giữ nguyên, đổi trang phục thành áo giáp"). gpt-image-2 tự bám ảnh input ở high fidelity.
- **Inpainting có mask**: vùng trong suốt (alpha=0) của mask là vùng model được vẽ lại; phần còn lại giữ nguyên.
- **Đa ngôn ngữ**: model hiểu vi-VN, nhưng style/photographic token tiếng Anh ổn định hơn.

---

## Lưu ý

- **Đuôi file theo `output_format`**: mặc định PNG; đặt `jpeg`/`webp` thì đổi đuôi tương ứng. Mẫu trên tự khớp.
- **Nền trong suốt (cutout RGBA)**: gpt-image-2 **không** có transparent native (API bác, verify 2026-05-21). Làm cutout bằng **chroma-key**: render nền magenta phẳng → `tools/chroma-key.py`. PNG lossless của gpt-image-2 cho mép key sạch nhất.
- **Luôn base64**: gpt-image-2 trả `data[].b64_json`; không truyền `response_format`.
- **Reference** chỉ đi qua endpoint edits (multipart `image[]`, tối đa 16 ảnh); generations không nhận ảnh input.
- **Verify tổ chức**: nếu HTTP 403/verification error → cần hoàn tất API Organization Verification trong developer console.
- Đây là engine thuần: nếu prompt file trống hoặc thiếu, **hỏi lại** thay vì tự bịa nội dung.
