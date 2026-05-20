# Đan Lư Bàn — Wireframe (Mobile Portrait)

> Layout: ~390×844px, portrait. Khung 立軸 dọc.

```
┌────────────────────────────┐  ← safe-area top
│ ◁  Đan Lư Bàn          金47│  TOP STATUS (~7%)
│     brush-stroke title      │  back góc trái | vàng phải
├────────────────────────────┤
│                            │
│  ╔══════════════════════╗  │  CONTENT (~76%)
│  ║ ── Item đang chọn ── ║  │  cuộn dọc 立軸
│  ║  ┌──────────────────┐║  │
│  ║  │ Huyền Chung      │║  │  tap → bottom sheet
│  ║  │ [Bảo · Kim]      │║  │  full affix detail
│  ║  │ Implicit:        │║  │
│  ║  │  sóng đẩy 80px   │║  │
│  ║  │ Prefix: +35% Kim │║  │
│  ║  │ Prefix: 15% nhân │║  │
│  ║  │ Suffix: hút 60px │║  │
│  ║  └──────────────────┘║  │
│  ║                       ║  │
│  ║  ── Chọn hành động ──║  │
│  ║                       ║  │
│  ║  ┌──────────────────┐║  │  hàng ≥56px
│  ║  │ 🔄 Linh Đan Reroll║  │  tap → expand detail
│  ║  │    Chi phí: 1 Linh│║  │  + confirm ở đáy sheet
│  ║  │    Đan           │║  │
│  ║  └──────────────────┘║  │
│  ║  ┌──────────────────┐║  │
│  ║  │ ✨ Tinh Hoa Refine║  │
│  ║  │    Chi phí: 1 Tinh│║  │
│  ║  │    Hoa           │║  │
│  ║  └──────────────────┘║  │
│  ║  ┌──────────────────┐║  │
│  ║  │ 🔨 Bench Craft    ║  │
│  ║  │    Chi phí: 100金 │║  │
│  ║  └──────────────────┘║  │
│  ║  ┌──────────────────┐║  │
│  ║  │ 🧹 Tẩy Đan Cleanse║  │
│  ║  │    Chi phí: 1 Đan │║  │
│  ║  │    Tẩy           │║  │
│  ║  └──────────────────┘║  │
│  ║                       ║  │
│  ║  Kho: 12 Linh Đan    ║  │
│  ║  Đan Sư Hắc Bạch     ║  │
│  ║  lặng lẽ nhìn...     ║  │
│  ╚══════════════════════╝  │
│                            │
├────────────────────────────┤
│  [  Chọn từ Kho  ]        │  BOTTOM THUMB-BAR (~17%)
│  ── Lò / Tree / Atlas / ──│  safe-area bottom
│     Stash  /  Vendor       │
└────────────────────────────┘
```

### Bottom sheet — action detail (tap hành động)

```
┌────────────────────────────┐
│  ▽  Linh Đan Reroll         │  ← vuốt xuống đóng
├────────────────────────────┤
│  Reroll toàn bộ 3 affix    │
│  · Implicit: giữ nguyên    │
│  · 30% cơ hội tốt hơn      │
│  · 70% cơ hội kém hơn      │
│                            │
│  Chi phí: 1 Linh Đan       │
│  Kho hiện có: 12           │
├────────────────────────────┤
│  [  Xác Nhận Reroll  ]     │  ≥44px, ngón cái với tới
└────────────────────────────┘
```

### Bottom sheet — item detail (tap item slot)

```
┌────────────────────────────┐
│  ▽  Huyền Chung [Bảo · Kim]│
├────────────────────────────┤
│  Implicit: sóng đẩy 80px   │
│  ─────────────────────     │
│  Prefix 1: +35% intensity  │
│            Kim             │
│  Prefix 2: 15% nhân đôi    │
│            banh            │
│  Suffix 1: Hút linh lực    │
│            60px            │
├────────────────────────────┤
│  [Đóng]                    │
└────────────────────────────┘
```

### Bottom sheet — chọn item từ kho

```
┌────────────────────────────┐
│  ▽  Chọn Item để Craft      │
├────────────────────────────┤
│  🔍 Tìm kiếm...            │
├────────────────────────────┤
│  Huyền Chung [Bảo · Kim]  │  hàng ≥56px
│  Prefix: +35% Kim          │
├────────────────────────────┤
│  Linh Chuông [Linh · Mộc] │
│  Implicit: xuyên tường 40px│
├────────────────────────────┤
│  …cuộn dọc…                │
└────────────────────────────┘
```

### Interactive

- Tap "Chọn từ Kho" (thumb-bar) → bottom sheet danh sách item cuộn dọc
- Tap item slot hiện tại → bottom sheet full affix detail
- Tap hành động (Linh Đan / Tinh Hoa / Bench / Tẩy Đan) → expand bottom sheet detail + confirm button
- "Xác Nhận" trong sheet → thực thi action, sheet đóng, item cập nhật
- Back góc trái hoặc vuốt mép trái → base-camp-hub
- Tất cả touch target ≥44px; action confirm ở đáy sheet (vùng ngón cái)
