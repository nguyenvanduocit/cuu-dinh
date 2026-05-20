---
id: vendor
ten: Đạo Quán
type: screen
screenKind: both
navigation: [base-camp-hub]
firstSeenIn: act-1
---

# Đạo Quán (`vendor`)

## Identity

Vendor/shop screen. Different NPCs sell different tiers. Example: Lão Hồ Ly (low-tier gambling), Đạo Sĩ Vô Danh (mid-tier), Tổ Sư Bất Tử (high-tier Cổ vật). Stock refreshes every map clear.

## Layout principles

- Portrait 3-zone: Top status (brush-stroke title + vàng hiện tại) / Content 立軸 cuộn dọc / Bottom thumb-bar
- Item list cuộn dọc, hàng ≥56px: rarity icon + tên + màu ngũ hành + giá vàng
- Tap item → bottom sheet full stats + giá + nút "MUA" ở đáy sheet
- "Làm Mới Stock" ở thumb-bar đáy → confirm bottom sheet → deduct vàng → danh sách mới
- Vàng player luôn visible top status (glanceable, không cần scroll)
- NPC dialogue hiện cuối content vùng (personality-colored, không che item list)
- Touch target ≥44px; action mua/refresh ở đáy bottom sheet (vùng ngón cái)
- Background: quirky daoist curio shop stall
