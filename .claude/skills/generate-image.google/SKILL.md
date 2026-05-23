---
description: >-
  Sinh & chỉnh-sửa ảnh bằng Google Gemini / Imagen API — engine thuần, không dính
  art-direction. DÙNG SKILL NÀY khi cần tạo/biến-thể/edit ảnh qua Google/Gemini/
  Imagen/nano banana từ một PROMPT FILE (+ ảnh reference tuỳ chọn) ra một OUTPUT
  file — kể cả khi người dùng chỉ nói "vẽ/render/sinh ảnh bằng Google" hoặc đưa ảnh
  sẵn nhờ chỉnh. Skill là chuyên gia về Gemini image API + cách prompting Gemini;
  KHÔNG tự viết prompt nội dung (việc đó do skill khác/người dùng lo). Cần sinh ảnh
  bằng OpenAI thì dùng /generate-image.openai.
argument-hint: "--prompt-file <path> --out <path> [--ref <ảnh> ...] [--model ...] [--aspect ...] [--size ...]"
allowed-tools: Bash, Read
---

# /generate-image.google — Gemini/Imagen image engine

Engine sinh ảnh thuần qua **Google Gemini & Imagen API**. Skill này KHÔNG sáng tác
nội dung prompt — nó nhận **prompt từ file**, **ảnh reference (tuỳ chọn)**, gọi API
đúng cách, và **lưu ra output file**. Bạn (Claude) là chuyên gia API + prompting
Gemini: đọc kỹ doc dưới rồi **tự viết một đoạn Python ngắn và chạy nó tại thời điểm
gọi** (qua Bash) — không có script đóng gói sẵn, viết tươi mỗi lần để khớp đúng yêu
cầu.

Yêu cầu lần này:

> $ARGUMENTS

---

## Hợp đồng đầu vào / đầu ra

| Thành phần | Ý nghĩa | Bắt buộc |
|---|---|---|
| **prompt file** | File chứa prompt (text). Đây là nguồn nội dung chính. Đọc bằng Read. | ✅ |
| **output** | Đường dẫn lưu ảnh. **Đuôi sẽ khớp mimeType thật model trả về** (jpeg/png), đừng giả định luôn `.png`. | ✅ |
| **references** | 0..n đường dẫn ảnh dùng làm mẫu/để chỉnh (character consistency, style, editing). | ⬜ |

Người dùng có thể truyền dạng `--prompt-file ... --out ... --ref ... --ref ...`
hoặc mô tả tự nhiên ("dùng prompt ở file X, ảnh mẫu Y, lưu vào Z"). Tự parse $ARGUMENTS.

### Quy trình
1. **Đọc prompt file** (Read) → đây là prompt gửi model. Có thể tinh chỉnh nhẹ theo best-practice Gemini bên dưới, nhưng giữ nguyên ý đồ; KHÔNG bịa thêm nội dung sáng tạo.
2. **Đọc references nếu có** (Read để xem; ảnh sẽ được truyền vào model dạng inlineData). File text/md trong references → đọc để hiểu ngữ cảnh, KHÔNG gửi làm ảnh.
3. **Chọn model** theo bảng dưới (mặc định `gemini-3.1-flash-image-preview`).
4. **Viết một đoạn Python stdlib ngắn** thực hiện call đúng theo "Cách gọi API" và **chạy bằng Bash** (sau khi nạp key). Lưu ảnh ra output, đuôi theo mimeType thật.
5. **Verify**: in path + chạy `file <path>` xác nhận ảnh hợp lệ + đúng kích thước kỳ vọng.
6. Báo kết quả; hỏi trước khi sinh batch tiếp.

---

## Key

Đọc từ env `GEMINI_API_KEY`. Nạp trước khi chạy (shell hiện tại là fish):
```fish
export GEMINI_API_KEY=(grep -oP 'GEMINI_API_KEY=\K.*' ~/compass/secret/ai/google.env)
```
```bash
# bash/zsh
source ~/compass/secret/ai/google.env
```
Trong Python lấy bằng `os.environ["GEMINI_API_KEY"]`. Endpoint nhận header `x-goog-api-key`.

---

## Chọn model (đã verify thực nghiệm 2026-05-21 bằng key thật)

| Model ID | Khi nào | size | aspect | reference/edit? | tốc độ | endpoint |
|---|---|---|---|---|---|---|
| `gemini-3.1-flash-image-preview` | **MẶC ĐỊNH** — nhanh + cân bằng (nano banana 2) | 512/1K/2K/4K | đầy đủ¹ | ✅ | ~25s | `:generateContent` |
| `gemini-3-pro-image-preview` | **Hero / chi tiết cao / render chữ trong ảnh** (nano banana pro) | 1K/2K/4K | đầy đủ¹ | ✅ | ~40s | `:generateContent` |
| `gemini-2.5-flash-image` | iterate/edit rẻ, nhanh (nano banana) | 1K | đầy đủ¹ | ✅ | ~8s | `:generateContent` |
| `imagen-4.0-ultra-generate-001` | **nhiều phương án 1 lần**, output luôn PNG, không edit | 1K/2K | ² | ❌ | ~17s | `:predict` |
| `imagen-4.0-generate-001` | batch cân bằng | 1K/2K | ² | ❌ | ~10s | `:predict` |
| `imagen-4.0-fast-generate-001` | batch nháp (không chỉnh size) | 1K | ² | ❌ | ~5s | `:predict` |

¹ aspect Gemini: `1:1 2:3 3:2 3:4 4:3 4:5 5:4 9:16 16:9 21:9 1:4 4:1 1:8 8:1`
² aspect Imagen: chỉ `1:1 3:4 4:3 9:16 16:9`

- Có ảnh reference / cần edit / giữ nhân vật nhất quán → bắt buộc model `gemini-*-image`.
- Cần ≥2 phương án trong một lần → `imagen-4.0-ultra-generate-001` với `sampleCount`.
- Cần in chữ rõ trong ảnh hoặc độ chi tiết hero → `gemini-3-pro-image-preview`.

---

## Cách gọi API (field đã verify — KHÔNG dùng tên đoán)

### A. Gemini `:generateContent` (text→image, edit, reference)
- URL: `https://generativelanguage.googleapis.com/v1beta/models/<model>:generateContent`
- Body:
  - `contents[0].parts[]`: phần `{"text": <prompt>}` + mỗi ảnh reference là `{"inlineData": {"mimeType": <mime>, "data": <base64>}}`.
  - `generationConfig.responseModalities`: `["IMAGE"]`.
  - `generationConfig.imageConfig`: `{"aspectRatio": "...", "imageSize": "1K|2K|4K"}` — **tên field là `imageConfig`** (không phải `responseFormat`).
- Ảnh trả về: `candidates[0].content.parts[].inlineData.{mimeType,data(base64)}`. `mimeType` quyết định đuôi (text2img thường JPEG, edit thường PNG). Có thể kèm part `text`.
- Reference: tối đa ~14 ảnh; character consistency tốt với ≤4-5 ảnh, object fidelity ≤6-10.

### B. Imagen `:predict` (text→image, batch)
- URL: `.../models/<model>:predict`
- Body: `{"instances":[{"prompt": <prompt>}], "parameters": {...}}`. parameters:
  - `sampleCount` (1-4), `aspectRatio` (5 giá trị), `sampleImageSize` (`1K|2K` — **model `*-fast` KHÔNG nhận field này**), `negativePrompt`, `personGeneration` (`dont_allow|allow_adult|allow_all`).
- Ảnh trả về: `predictions[].{bytesBase64Encoded, mimeType}` (luôn PNG).

### Mẫu Python để ADAPT (viết tươi, chạy qua Bash; chỉ stdlib)
```python
import os, json, base64, mimetypes, urllib.request

MODEL = "gemini-3.1-flash-image-preview"
PROMPT = open("PROMPT_FILE").read()          # bạn thay đường dẫn thật
REFS   = []                                   # ["base.png", ...] nếu có
OUT    = "OUTPUT_PATH"                         # đuôi sẽ được chỉnh theo mime thật
KEY    = os.environ["GEMINI_API_KEY"]

def img_part(p):
    mime = mimetypes.guess_type(p)[0] or "image/png"
    return {"inlineData": {"mimeType": mime, "data": base64.b64encode(open(p,"rb").read()).decode()}}

if MODEL.startswith("imagen"):
    body = {"instances":[{"prompt":PROMPT}], "parameters":{"sampleCount":1,"aspectRatio":"1:1"}}
    verb = "predict"
else:
    parts = [{"text":PROMPT}] + [img_part(p) for p in REFS]
    body = {"contents":[{"parts":parts}],
            "generationConfig":{"responseModalities":["IMAGE"],
                                "imageConfig":{"aspectRatio":"1:1","imageSize":"1K"}}}
    verb = "generateContent"

req = urllib.request.Request(
    f"https://generativelanguage.googleapis.com/v1beta/models/{MODEL}:{verb}",
    data=json.dumps(body).encode(),
    headers={"x-goog-api-key":KEY,"Content-Type":"application/json"}, method="POST")
d = json.load(urllib.request.urlopen(req, timeout=300))

EXT = {"image/png":".png","image/jpeg":".jpg","image/webp":".webp"}
imgs = ([(p["bytesBase64Encoded"], p.get("mimeType","image/png")) for p in d["predictions"]]
        if verb=="predict" else
        [(p["inlineData"]["data"], p["inlineData"]["mimeType"])
         for p in d["candidates"][0]["content"]["parts"] if "inlineData" in p])
base = os.path.splitext(OUT)[0]
for i,(b64,mime) in enumerate(imgs):
    path = f"{base}{EXT.get(mime,'.png')}" if len(imgs)==1 else f"{base}-{i+1}{EXT.get(mime,'.png')}"
    os.makedirs(os.path.dirname(os.path.abspath(path)), exist_ok=True)
    open(path,"wb").write(base64.b64decode(b64))
    print("saved", os.path.abspath(path), mime)
```
Lỗi HTTP 4xx → đọc body JSON `error.message` để biết field sai (vd `sampleImageSize is not adjustable` với model fast). Đừng nuốt lỗi im lặng.

---

## Prompting Gemini (chuyên môn — áp khi tinh chỉnh prompt từ file)

- **Mô tả tự sự, không liệt kê keyword.** Sức mạnh của model là hiểu ngôn ngữ — một đoạn văn mô tả mạch lạc cho kết quả tốt hơn list từ rời rạc.
- **Ảnh thật** → ngôn ngữ nhiếp ảnh: góc máy, ống kính (`85mm portrait lens`), ánh sáng (`soft golden-hour light`), bokeh, setup softbox 3 điểm.
- **Minh hoạ stylized** → nêu rõ kỹ thuật (`cel-shading`, `bold outlines`) + nền (vd nền trắng cho sticker).
- **Chữ trong ảnh** → nói rõ nội dung chữ + mô tả font + tổng thể thiết kế; ưu tiên `gemini-3-pro-image-preview`.
- **Negative ngữ nghĩa**: thay vì "no cars" → mô tả khẳng định "an empty deserted street with no traffic". (Imagen còn có field `negativePrompt`; Gemini thì viết vào prompt.)
- **Bố cục/máy quay**: `wide-angle shot`, `macro shot`, `low-angle perspective` để kiểm soát khung hình.
- **Reference & consistency**: gửi ảnh trước đó để giữ nhân vật/đối tượng; nêu rõ phần cần giữ nguyên (vd "khuôn mặt giữ nguyên, logo in tự nhiên lên vải").
- **Đa ngôn ngữ**: model hiểu vi-VN, nhưng style/photographic token tiếng Anh ổn định hơn.

---

## Lưu ý

- **Đuôi file theo mimeType thật**: Gemini text2img hay trả JPEG; edit & Imagen trả PNG. Đặt tên `--out` không kèm đuôi cố định, hoặc chấp nhận script đổi đuôi.
- **Không có alpha RGBA tin cậy** ở Gemini/Imagen. Cần cutout → render nền màu phẳng ngoài palette (magenta) rồi `tools/chroma-key.py` (do `/generate-game-art` điều phối). Output JPEG → dùng `--erode 3`.
- **SynthID watermark vô hình** gắn vào mọi ảnh Google, không tắt được.
- **4K** chỉ ở `gemini-3.1-flash` và `gemini-3-pro`; Imagen tối đa 2K, `imagen-*-fast` không chỉnh size.
- Đây là engine thuần: nếu prompt file trống hoặc thiếu, **hỏi lại** thay vì tự bịa nội dung.
