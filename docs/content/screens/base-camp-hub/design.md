---
id: base-camp-hub
ten: Khai Lư Trấn Hub
type: screen
screenKind: both
navigation: [main-menu]
firstSeenIn: act-1
---

# Khai Lư Trấn Hub (`base-camp-hub`)

## Identity

Main hub screen. Mode-less navigation — player can reach any sub-screen from here. Shows base camp village with NPCs, top nav bar, bottom HUD with resources.

## Layout principles (mobile portrait)

- Portrait skeleton 3 vùng: top status (~7%) / content cards cuộn dọc (~76%) / bottom thumb-bar tab nav (~17%).
- Top status: brush-stroke title "Khai Lư Trấn" trái + Kim Đan / Linh Đan / Phong Ấn phải. Tap tài nguyên → bottom sheet chi tiết. Vùng ít chạm — không đặt action quan trọng.
- Content: danh sách card dọc (≥56px/card, full-width): Sơn Hà Đồ Lệnh card (primary CTA, luôn trên cùng) + 6 NPC card (Sư Phụ, Lão Hồ Ly, Đan Lư Bàn, Đạo Sĩ Vô Danh, Lò Thần, Lão Bà Thiên Cơ). Card khoá hiển thị greyed + hint mở khoá.
- Tap NPC card → bottom sheet dialogue + action buttons (≥48px).
- Bottom thumb-bar: 5 tab (Lò / Tree / Atlas / Stash / Vendor) + Profile icon góc phải. Touch target ≥44px. Active tab: gold underline.
- Back: góc trái top-status khi navigate sâu, hoặc vuốt mép phải.
- Cấp Đạo Sĩ + quest hint: card riêng cuối danh sách content (cuộn tới).
- Background: tiên phủ courtyard / đan thất 立軸 dọc (Khai Lư Trấn region art).
- Touch target ≥44px mọi element tương tác.
