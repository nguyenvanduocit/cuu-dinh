---
id: lo-editor
ten: Lò Luyện Đan
type: screen
screenKind: both
navigation: [base-camp-hub]
firstSeenIn: act-1
---

# Lò Luyện Đan (`lo-editor`)

## Identity

Equipment editor for the player's Lò. 8 slot types: Đỉnh, Thân, Đế, Quai L/R, Nắp, Khắc Phù, Đồ Sương L/R, Dây Phong Ấn. Tap slot có item → bottom sheet detail (affix + Reroll/Phong Ấn/Đổi); tap slot trống → stash picker sheet. Furnace ornament làm header.

## Layout principles (mobile portrait)

- Portrait skeleton 3 vùng: top status (~7%) / slot list cuộn dọc (~76%) / bottom thumb-bar (~17%).
- Top status: Back trái + "Lò Luyện Đan" + Power score phải + Cấp / slots dùng (4/9) dòng phụ.
- Slot list dọc (thứ tự cố định từ trên xuống): Đỉnh → Thân → Đế → [Quai L | Quai R] → Nắp → Khắc Phù → [Đồ Sương L | Đồ Sương R] → Dây Phong Ấn. Mỗi slot ≥56px. Quai và Đồ Sương ghép 2 cột ngang (equal width, gap 8px).
- Tap slot có item → bottom sheet detail: Implicit / Prefix / Suffix / Cấp + action Reroll, Phong Ấn, Đổi vật phẩm. Sheet chiếm ~65% chiều cao.
- Tap slot trống → stash picker sheet trực tiếp (full-screen), lọc sẵn theo loại slot.
- "Đổi vật phẩm" trong sheet detail → stash picker sheet (full-screen, danh sách dọc ≥56px/item).
- Lò visualization (ornate furnace) làm header của content vùng.
- Đổi vật phẩm: tap slot → "Đổi vật phẩm" → stash picker.
- Reroll / Phong Ấn / Đổi nằm trong bottom sheet detail (tap slot mở).
- Mọi số liệu hiện trong bottom sheet (detail-on-demand ≤1 tap).
- Bottom thumb-bar: 5 tab (Lò / Tree / Atlas / Stash / Vendor). Tab Lò active khi ở màn này.
- Background: dim alchemist's workshop interior, 立軸 dọc, Lò trên bệ đá.
- Touch target ≥44px mọi element tương tác.
