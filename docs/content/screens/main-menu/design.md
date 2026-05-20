---
id: main-menu
ten: Trình Đơn Chính
type: screen
screenKind: both
navigation: []
firstSeenIn: intro
---

# Trình Đơn Chính (`main-menu`)

## Identity

Title screen. First screen player sees. Vietnamese calligraphy logo "ĐAN KIẾP" center. Background: painted cosmic temple / tiên phủ scene with linh đan rising. Music: slow đàn bầu + ambient.

## Layout principles (mobile portrait)

- Portrait skeleton 3 vùng: top ornament + logo (~28%) / button stack (~45%) / bottom status (~7%) / safe-area (~8% tổng).
- 4 buttons dọc (full-width, ≥56px/nút): Tu Hành Mới, Tiếp Tục, Cài Đặt, Thoát. Thumb-zone reachable — buttons nằm giữa-dưới màn.
- Bottom status bar: Tu danh, Cấp, Tu thời. Tap → bottom sheet chi tiết.
- Background: painted cosmic temple / tiên phủ theo bố cục 立軸 dọc (linh đan rising từ đáy), đủ khoảng tối trung tâm cho logo.
- Thẩm mỹ: brush-stroke title, hoa văn vàng viền dọc trên/dưới.
- "Tu Hành Mới" tap → modal full-screen: nhập tu danh + chọn Ngũ Hành start.
- "Thoát" tap → confirm bottom sheet (không dialog trung tâm).
- Touch target ≥44px mọi element tương tác.
