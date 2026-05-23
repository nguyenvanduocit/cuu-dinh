---
description: >-
  Sinh ảnh bằng Grok CLI (tool image_gen của xAI, qua subscription đã đăng nhập) —
  engine thuần, không dính art-direction. DÙNG SKILL NÀY khi cần tạo ảnh qua Grok/xAI
  từ một PROMPT FILE ra một OUTPUT file, tận dụng gói Grok (Heavy/SuperGrok) thay vì
  trả tiền API — kể cả khi người dùng chỉ nói "vẽ/sinh ảnh bằng Grok/xAI". Skill là
  chuyên gia điều khiển Grok CLI headless để gọi image_gen; KHÔNG tự viết prompt nội
  dung (việc đó do skill khác/người dùng lo). Cần chỉnh-sửa ảnh / giữ nhân vật thì dùng
  /generate-image.openai; cần Gemini/Imagen thì /generate-image.google. Nền trong suốt: render
  nền màu phẳng rồi chroma-key (tools/chroma-key.py) — do generate-game-art điều phối.
argument-hint: "--prompt-file <path> --out <path> [--aspect <vd 16:9>]"
allowed-tools: Bash, Read
---

# /generate-image.grok — Grok CLI image engine

Engine sinh ảnh thuần qua **Grok CLI** (`grok`), điều khiển headless để gọi built-in
tool **`image_gen`**. Ưu điểm: dùng **tài khoản Grok đã đăng nhập (subscription)** —
không cần API key, không tính tiền per-image qua api.x.ai. Skill này KHÔNG sáng tác
nội dung prompt — nó nhận **prompt từ file**, lái Grok sinh ảnh, và **lưu ra output file**.

Yêu cầu lần này:

> $ARGUMENTS

---

## Hợp đồng đầu vào / đầu ra

| Thành phần | Ý nghĩa | Bắt buộc |
|---|---|---|
| **prompt file** | File chứa prompt (text) — nguồn nội dung chính. Đọc bằng Read. | ✅ |
| **output** | Đường dẫn lưu ảnh. **Đuôi khớp định dạng thật** (image_gen hay trả JPEG), đừng giả định `.png`. | ✅ |
| **aspect** | Tỉ lệ khung mong muốn (vd `1:1`, `16:9`, `9:16`). Diễn đạt trong prompt cho Grok. | ⬜ |

Người dùng có thể truyền `--prompt-file ... --out ... --aspect ...` hoặc mô tả tự nhiên. Tự parse $ARGUMENTS.

### Quy trình
1. **Tiền đề**: Grok CLI đã đăng nhập. Verify nhanh: `grok models` phải in `You are logged in with grok.com`. Nếu chưa → bảo người dùng chạy `grok login` (KHÔNG tự chạy login, nó mở trình duyệt).
2. **Đọc prompt file** (Read) → nội dung ảnh. KHÔNG bịa thêm nội dung sáng tạo.
3. **Gọi Grok headless** (xem dưới): lái nó dùng `image_gen` sinh ảnh đúng nội dung prompt file, copy file kết quả ra `--out`, và in dòng `SAVED=<path>`.
4. **Parse `SAVED=`** từ stdout để lấy đường dẫn thật.
5. **Sửa đuôi theo định dạng thật**: chạy `file --mime-type -b <path>`; nếu mime là `image/jpeg` mà đuôi đang `.png` → đổi tên cho khớp (jpeg→.jpg, webp→.webp).
6. **Verify**: `file <path>` xác nhận ảnh hợp lệ + đúng kích thước kỳ vọng.
7. Báo kết quả; hỏi trước khi sinh batch tiếp.

---

## Cách gọi (đã verify thực nghiệm 2026-05-21)

`image_gen` lưu ảnh vào thư mục session nội bộ; vì vậy ta yêu cầu Grok **copy ra path
mình chỉ định** rồi in `SAVED=`. Grok làm được vì có sẵn `run_terminal_command`.

```bash
grok -p "Dùng tool image_gen sinh một ảnh theo mô tả sau (giữ đúng ý, đừng thêm bớt):
<<<
$(cat PROMPT_FILE)
>>>
Tỉ lệ khung: ASPECT_OR_1to1.
Sau khi sinh xong, dùng run_terminal_command copy file ảnh kết quả ra đúng đường dẫn
tuyệt đối OUT_PATH. Cuối cùng in ra DUY NHẤT một dòng: SAVED=<đường dẫn tuyệt đối thật của file ảnh>." \
  --always-approve --disable-web-search 2>&1 | tail -5
```

- `-p/--single`: chạy headless một lượt, in stdout rồi thoát (không mở TUI).
- `--always-approve`: cần thiết để Grok tự chạy `image_gen` + `run_terminal_command` mà không chờ duyệt tay (headless không duyệt tương tác được).
- `--disable-web-search`: tắt web tool cho gọn, tránh Grok đi lạc.
- Mô hình mặc định `grok-build` đã có `image_gen` — KHÔNG cần `--model`.
- Lấy đường dẫn: `grep` dòng `^SAVED=` trong stdout. Nếu không thấy `SAVED=`, đọc toàn bộ stdout để xem Grok báo lỗi gì (chưa login? safety block?).

### Sau khi có file — chuẩn hoá đuôi
```bash
real=$(file --mime-type -b "OUT_PATH")   # vd image/jpeg
# nếu image/jpeg nhưng OUT_PATH kết thúc .png → mv sang .jpg cho đúng
```

---

## Prompting Grok image_gen (chuyên môn)

- **Mô tả tự sự, cụ thể**: chủ thể → bố cục → phong cách → ánh sáng/chi tiết. image_gen (xAI Imagine) bám mô tả ngôn ngữ tự nhiên tốt.
- **Tỉ lệ khung**: nêu rõ trong prompt ("tỉ lệ 16:9", "khung dọc 9:16") để Grok set `aspect_ratio`.
- **Negative ngữ nghĩa**: mô tả khẳng định cái muốn thấy thay vì liệt kê cái không muốn.
- **Đa ngôn ngữ**: hiểu vi-VN, nhưng style/photographic token tiếng Anh ổn định hơn.

---

## Lưu ý

- **Định dạng thật thường là JPEG** (image_gen trả JPEG), không alpha. Luôn `file` kiểm mime và sửa đuôi; đừng tin đuôi `--out`.
- **Nền trong suốt**: image_gen không có alpha → render trên **nền màu phẳng ngoài palette** (magenta) rồi `tools/chroma-key.py`. Vì JPEG có viền nén, dùng `--erode 3`. Engine PNG (gpt-image-2) key sạch hơn.
- **Năng lực hẹp hơn API trực tiếp**: chỉ text→image + aspect. KHÔNG có editing/reference/nền-trong-suốt. Cần các thứ đó → `/generate-image.openai` (gpt-image-2) hoặc `/generate-image.google`.
- **Tốn quota subscription Grok**, không tốn credit api.x.ai. Đây là CLI chính chủ xAI dùng login của bạn — hợp lệ.
- **Lái qua agent nên kém tất định**: Grok có thể diễn giải lệnh khác đi. Giữ meta-prompt rõ ràng, luôn verify file ở cuối; nếu sai, chạy lại.
- Đây là engine thuần: prompt file trống/thiếu → **hỏi lại**, đừng tự bịa nội dung.
