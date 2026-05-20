---
id: tinh-diem-tree
ten: Tinh Điểm
type: screen
screenKind: both
navigation: [base-camp-hub]
firstSeenIn: act-1
---

# Tinh Điểm (`tinh-diem-tree`)

## Identity

Passive skill tree. ~150 nodes, 5 Ngũ Hành starts. Pan/zoom SVG map. Allocated nodes glow gold, adjacent allocatable pulse. Keystones are large diamond shapes, color per element.

## Layout principles (Portrait)

- 3-vùng dọc: Top status (~7%) / Content graph (~76%) / Bottom thumb-bar (~17%)
- Full-screen SVG tree map — pan 1-ngón kéo trượt, pinch-to-zoom, double-tap recenter
- Semantic zoom: zoom-out hiện 5 badge cụm ngũ hành (alloc/total); zoom-in hiện node chi tiết
- 5 element start positions tại 5 điểm la bàn (Mộc, Hoả, Thuỷ, Kim, Thổ) + Vô Cực center
- Mini-map indicator góc trên-trái khi zoom-in: hình thumbnail toàn cây, hình vuông = viewport hiện tại
- Node types: Travel (●), Notable (◆ cluster), Keystone (★ game-changing)
- Node states: allocated (màu ngũ hành) / available (vàng nhạt) / locked (xám)
- Tap node → bottom sheet hiện full stat + nút [Phân Bổ] hoặc [Hoàn Trả]
- Bottom thumb-bar 2 hàng: counter "Tinh Điểm: X/110" + [Search] [Jump] [Alloc] [Refund]
- Search: bottom sheet fullscreen, gõ tên node → tap ↗ pan+zoom đến node
- Background: deep cosmic star-chart (node tree rendered by SVG code on top)
