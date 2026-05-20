# Lò Luyện Đan — Wireframe (Mobile Portrait)

> Layout: ~390×844px, portrait, safe-area aware.
> 8 slot thiết bị: Đỉnh, Thân, Đế, Quai L/R, Nắp, Khắc Phù, Đồ Sương L/R, Dây Phong Ấn.

```
┌────────────────────────────┐
│                            │  ← safe-area top
│ ←  Lò Luyện Đan    ⚡145  │  ← TOP STATUS (~7%)
│    Cấp: Phàm   4/9 slot   │    Back trái | Power score phải
├────────────────────────────┤
│                            │
│  ╔══════════════════════╗  │  ← CONTENT VÙNG (~76%)
│  ║  ⚱  LÒ LUYỆN ĐAN    ║  │    立軸 dọc, cuộn nếu cần
│  ╚══════════════════════╝  │
│                            │
│  ┌──────────────────────┐  │  ← SLOT ROW (≥56px/slot)
│  │  [Đỉnh]  Đỉnh Phàm  │  │    icon + tên vật phẩm + cấp rarity badge
│  │          ★ Phàm      │  │    tap → bottom sheet detail
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │
│  │  [Thân]  (trống)     │  │  ← slot trống: dashed border, tap → stash picker
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │
│  │  [Đế]    (trống)     │  │
│  └──────────────────────┘  │
│                            │
│  ┌─────────┐ ┌────────── ┐ │  ← Quai L / Quai R: 2 cột ngang (equal width)
│  │[Quai L] │ │[Quai R]   │ │    tap từng ô → sheet riêng
│  │(trống)  │ │(trống)    │ │
│  └─────────┘ └───────────┘ │
│                            │
│  ┌──────────────────────┐  │
│  │  [Nắp]   (trống)     │  │
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │
│  │  [Khắc Phù]  (trống) │  │  ← amulet slot
│  └──────────────────────┘  │
│                            │
│  ┌─────────┐ ┌───────────┐ │  ← Đồ Sương L / Đồ Sương R: 2 cột ngang
│  │[Đồ Sương│ │[Đồ Sương  │ │
│  │   L]    │ │   R]      │ │
│  │(trống)  │ │(trống)    │ │
│  └─────────┘ └───────────┘ │
│                            │
│  ┌──────────────────────┐  │
│  │ [Dây Phong Ấn](trống)│  │  ← belt slot, cuối danh sách
│  └──────────────────────┘  │
│                            │
├────────────────────────────┤
│ [Lò][Tree][Atlas][Stash]   │  ← BOTTOM THUMB-BAR (~17%)
│ [Vendor]                   │    tab nav
│                            │  ← safe-area bottom
└────────────────────────────┘
```

### Slot detail — bottom sheet (tap bất kỳ slot)

Vuốt lên → sheet chiếm ~65% chiều cao. Vuốt xuống đóng.

```
┌────────────────────────────┐
│  ──────                    │  ← drag handle
│  [Đỉnh]  Đỉnh Phàm  ★Phàm │  ← slot name + item name + rarity
│  ────────────────────────  │
│  Implicit                  │
│  • 1 banh/2s               │
│  • Góc ngẫu nhiên ±30°     │
│  ────────────────────────  │
│  Prefix:    (chưa có)      │
│  Suffix:    (chưa có)      │
│  ────────────────────────  │
│  Cấp Đỉnh: Phàm            │
│  ────────────────────────  │
│  ┌────────────┐ ┌────────┐ │
│  │Reroll 1 💎 │ │Phong Ấn│ │  ← action buttons ≥48px
│  └────────────┘ └────────┘ │
│  ┌────────────────────────┐│
│  │  Đổi vật phẩm (Stash)  ││  ← opens stash picker sheet
│  └────────────────────────┘│
│                            │
└────────────────────────────┘
```

### Stash picker sheet (tap "Đổi vật phẩm")

Sheet full-screen. Danh sách item từ stash phù hợp slot hiện tại.

```
┌────────────────────────────┐
│  ←  Chọn Đỉnh              │  ← header + back
│  ────────────────────────  │
│  ┌──────────────────────┐  │
│  │ Đỉnh Huyền  ★Thường │  │  ← item row ≥56px
│  │ 1 banh/1.5s  ±20°    │  │
│  └──────────────────────┘  │
│  ┌──────────────────────┐  │
│  │ Đỉnh Phàm (đang dùng)│  │  ← current item, greyed
│  └──────────────────────┘  │
│  ┌──────────────────────┐  │
│  │ Đỉnh Phàm thứ 2      │  │
│  └──────────────────────┘  │
│  (cuộn dọc thêm...)        │
└────────────────────────────┘
```

### Vùng & tương tác

| Vùng | Nội dung | Tương tác |
|---|---|---|
| Top status | Back + tên màn + Power score + Cấp / slots dùng | Tap Back → hub |
| Slot list (cuộn dọc) | 8 slot theo thứ tự dọc; Quai L/R và Đồ Sương L/R ghép 2 cột | Tap slot → sheet detail |
| Slot detail sheet | Implicit / Prefix / Suffix / Cấp + actions Reroll, Phong Ấn, Đổi | Tap action |
| Stash picker sheet | Danh sách item từ stash cho slot đó | Tap item → equip |
| Bottom thumb-bar | Tab nav 5 mục | Tap tab |

### Thứ tự slot dọc (từ trên xuống)

```
1. Đỉnh         (full-width)
2. Thân         (full-width)
3. Đế           (full-width)
4. Quai L | Quai R          (2 cột)
5. Nắp          (full-width)
6. Khắc Phù     (full-width)
7. Đồ Sương L | Đồ Sương R  (2 cột)
8. Dây Phong Ấn (full-width)
```

### Màu rarity badge (ngũ hành color coding giữ nguyên)

- Phàm: xám
- Thường: trắng
- Hiếm: vàng
- Sử Thi: cam
- Huyền: tím
- Thần: đỏ kim

### Lưu ý thiết kế

- Mọi số liệu hiện qua bottom sheet (tap slot mở, ≤1 tap).
- Đổi vật phẩm: tap slot → sheet → "Đổi vật phẩm" → stash picker.
- Reroll / Phong Ấn nằm trong bottom sheet detail.
- Slot trống: dashed gold border, tap ngay mở stash picker (không qua sheet trung gian).
- 2-cột pair (Quai, Đồ Sương): mỗi ô ≥44px wide, gap 8px.
