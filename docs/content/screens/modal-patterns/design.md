---
id: modal-patterns
ten: Modal Cảnh Báo
type: screen
screenKind: both
navigation: []
firstSeenIn: act-1
---

# Modal Cảnh Báo (`modal-patterns`)

## Identity

Standardized modal dialog patterns used across all screens. Two types: confirmation modal (dangerous actions like Phong Ấn) and error/failure modal (Linh Đan Bể). Not a standalone screen — overlay pattern.

## Layout principles

Hai pattern chuẩn cho mọi modal:

### Full-Screen Sheet (hành động nguy hiểm, không undo)
- Trượt lên từ đáy, phủ 100% màn. Backdrop mờ hoàn toàn.
- Đóng: nút [×] góc phải hoặc button action — KHÔNG đóng bằng vuốt (tránh dismiss vô ý)
- Cấu trúc: warning icon + title lớn / explanation / xác suất liệt kê dọc / timer bar first-time
- Bottom thumb-bar: [Huỷ] + [Tiếp tục] (disabled → enabled sau 3s nếu lần đầu)
- Dùng cho: Phong Ấn, Thiên Kiếp, mọi action không undo

### Bottom Sheet (kết quả, info, confirm nhẹ)
- Trượt lên từ đáy, phủ 40–70% chiều cao. Backdrop mờ nhẹ, context phía sau visible.
- Đóng: vuốt xuống / tap backdrop / button action
- Drag handle hiển thị trên cùng sheet
- Dùng cho: Linh Đan Bể, item detail, selector option, confirm xoá nhẹ

### Toast / Snackbar (thông báo passive)
- Nổi trên bottom thumb-bar, tự mất sau 3s. Không cần action.
- Dùng cho: lưu OK, lỗi mạng, thông báo nhẹ

### Quy tắc chọn
- Dismiss vô ý gây mất dữ liệu → Full-Screen Sheet
- Cần giữ spatial context phía sau → Bottom Sheet
- Không cần action → Toast

### Visual style
- Full-Screen Sheet: khung bản đồ cổ toàn màn, góc tứ phù ấn, đường viền vàng, nền da giấy tối
- Bottom Sheet: nền lacquer tối, cạnh trên bo 16px, handle vàng nhạt, backdrop dim 40%
- Failure variant (Linh Đan Bể): cracked frame texture, dark mournful red accent
- Toast: pill bo tròn, nền đen 80%, icon trạng thái trái
