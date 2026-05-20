# Modal Patterns — Wireframe (Mobile Portrait)

Source: `docs/superpowers/specs/2026-05-20-mobile-portrait-pivot-design.md`

> Hai chuẩn modal: **Full-Screen Sheet** + **Bottom Sheet**. Mọi modal là sheet; chọn theo quy tắc bên dưới.

---

## Pattern 1 — Full-Screen Sheet

Dùng cho: nội dung phức tạp, nhiều bước, cần đọc kỹ trước quyết định.
Ví dụ: xác nhận hành động nguy hiểm (Phong Ấn, Thiên Kiếp), kết quả pháp trận.

Xuất hiện: trượt lên từ đáy, phủ toàn màn (100%). Backdrop mờ hoàn toàn.
Đóng: nút [×] góc phải (hoặc button action). Không đóng bằng vuốt (tránh dismiss vô ý).

```
┌────────────────────────┐  ← Full screen
│                    [×] │  TOP: close nút (nếu có thể dismiss)
│                        │
│    ⚠                   │
│    ÁP PHONG ẤN         │  title lớn, brush-stroke
│                        │
│  Phong Ấn không thể    │
│  hoàn tác.             │  body text
│                        │
│  ─── 4 kết quả ───     │
│                        │
│  25%  Phá Niêm (strip) │  xác suất liệt kê dọc
│  25%  Giáng Phẩm       │  mỗi dòng ≥56px
│  25%  Thăng Phẩm       │
│  25%  Khắc Phong Ấn    │
│                        │
│  ── Lần đầu: đọc 3s ── │  timer bar nếu first-time
│  ▓▓▓▓▓▓░░░░░  2s       │
│                        │
│                        │
│                        │
├────────────────────────┤
│  [Huỷ]    [Tiếp tục →] │  BOTTOM: action pair
│                        │  [Tiếp tục] disabled → enabled sau 3s
└────────────────────────┘
```

**First-time**: [Tiếp tục] grayed + disabled, progress bar đếm 3s → enable.
**Lần sau**: [Tiếp tục] enable ngay.

---

## Pattern 2 — Bottom Sheet

Dùng cho: thông tin bổ sung, xác nhận nhẹ, chọn option, item detail.
Ví dụ: chi tiết item, selector option, confirm xoá nhẹ.

Xuất hiện: trượt lên từ đáy, phủ 40–70% chiều cao tùy content.
Đóng: vuốt xuống / tap backdrop / nút action.

```
┌────────────────────────┐
│                        │
│  [backdrop mờ nhẹ]     │  màn phía sau vẫn visible
│  [context không gian   │  giữ spatial orientation
│   phía sau preserved]  │
│                        │
├────────────────────────┤  ← sheet bắt đầu
│         ▬▬▬            │  drag handle — swipe-down to dismiss
├────────────────────────┤
│  LINH ĐAN BỂ  💔       │  title
│                        │
│  Pháp trận thất bại.   │  body
│  Toàn bộ loot bị mất.  │
│                        │
│  ✓ Lò Luyện an toàn    │  safe list — tích xanh
│  ✓ Cấp độ giữ nguyên   │
│  ✓ Kho Đồ nguyên vẹn   │
│                        │
├────────────────────────┤
│     [Quay về Camp]     │  single action, full width
└────────────────────────┘
          ↑ vuốt xuống đóng
```

---

## Quy tắc chọn Pattern

| Tiêu chí | Full-Screen Sheet | Bottom Sheet |
|---|---|---|
| Mức nguy hiểm | Cao (không undo) | Thấp-trung |
| Lượng nội dung | Nhiều (>4 dòng) | Ít (≤4 dòng) |
| Context phía sau | Không cần | Cần giữ |
| Dismiss vô ý | Nguy hiểm | OK |
| Dismiss bằng vuốt | Không cho | Cho phép |
| Ví dụ | Phong Ấn, Thiên Kiếp | Item detail, Selector |

**Nguyên tắc**: Nếu dismiss vô ý gây mất dữ liệu → Full-Screen Sheet. Còn lại → Bottom Sheet.

---

## Pattern 3 — Toast / Snackbar (không phải modal)

Dùng cho: thông báo passive, không cần action.
Xuất hiện: nổi trên bottom thumb-bar, tự mất sau 3s.

```
┌────────────────────────┐
│                        │
│                        │
├──────────────────────┐ │
│ ✓ Đã lưu cài đặt    │ │  toast nổi trên thumb-bar
└──────────────────────┘ │
├────────────────────────┤
│  [nav]  [nav]  [nav]   │  BOTTOM THUMB-BAR
└────────────────────────┘
```

---

## Áp dụng per-screen

| Tình huống | Pattern |
|---|---|
| Áp Phong Ấn | Full-Screen Sheet (dangerous, xác suất list) |
| Thiên Kiếp kích hoạt | Full-Screen Sheet (boss, không undo) |
| Linh Đan Bể | Bottom Sheet (kết quả, 1 action) |
| Xác nhận xoá item | Bottom Sheet (nhẹ, vuốt OK) |
| Item detail (stash) | Bottom Sheet |
| Chọn option (settings) | Bottom Sheet |
| Thông báo lưu OK | Toast |
| Thông báo lỗi mạng | Toast |

---

## Visual Style

**Full-Screen Sheet**: khung bản đồ cổ toàn màn, góc tứ phù ấn, đường viền vàng, nền da giấy tối.
**Bottom Sheet**: nền lacquer tối, cạnh trên bo tròn 16px, handle bar vàng nhạt, backdrop dim 40%.
**Toast**: pill bo tròn, nền đen 80%, icon trạng thái trái, chữ trắng.
