# Đạo Quán — Wireframe (Mobile Portrait)

> Layout: ~390×844px, portrait. Khung 立軸 dọc.

```
┌────────────────────────────┐  ← safe-area top
│ ◁  Đạo Quán: Lão Hồ Ly 金1,245│  TOP STATUS (~7%)
│     brush-stroke title      │  back góc trái | vàng phải
├────────────────────────────┤
│                            │
│  ╔══════════════════════╗  │  CONTENT (~76%)
│  ║  Stock mới mỗi map   ║  │  cuộn dọc 立軸
│  ╠══════════════════════╣  │
│  ║  Cành Bồ Đề   45金   ║  │  hàng ≥56px
│  ║  [Linh · Mộc]        ║  │  tap → bottom sheet
│  ╠══════════════════════╣  │  buy detail
│  ║  Đèn Lá Sen   60金   ║  │
│  ║  [Linh · Thuỷ]       ║  │
│  ╠══════════════════════╣  │
│  ║  Huyền Chung  280金  ║  │
│  ║  [Bảo · Kim]   ★★★  ║  │
│  ╠══════════════════════╣  │
│  ║  Linh Đan ×5  150金  ║  │
│  ║  [Currency]          ║  │
│  ╠══════════════════════╣  │
│  ║  Phong Ấn ×1   80金  ║  │
│  ║  [Currency]          ║  │
│  ╠══════════════════════╣  │
│  ║  Đan Tẩy ×3    60金  ║  │
│  ║  [Currency]          ║  │
│  ╠══════════════════════╣  │
│  ║  ??? Unidentified    ║  │
│  ║  [Bảo · ?]   500金  ║  │
│  ╠══════════════════════╣  │
│  ║                       ║  │
│  ║  "Aiya, đệ tử! Hôm   ║  │  NPC dialogue
│  ║   nay có hàng mới —  ║  │  personality-colored
│  ║   may mắn lắm. Mua   ║  │
│  ║   đi mua đi..."      ║  │
│  ╚══════════════════════╝  │
│                            │
├────────────────────────────┤
│ [Làm Mới Stock — 50金]    │  BOTTOM THUMB-BAR (~17%)
│  ── Lò / Tree / Atlas / ──│  safe-area bottom
│     Stash  /  Vendor       │
└────────────────────────────┘
```

### Bottom sheet — item detail (tap bất kỳ item)

```
┌────────────────────────────┐
│  ▽  Huyền Chung             │  ← vuốt xuống đóng
├────────────────────────────┤
│  Loại: Bảo · Kim   ★★★    │
│  ─────────────────────     │
│  Implicit: sóng đẩy 80px   │
│  Prefix 1: +35% intensity  │
│            Kim             │
│  Prefix 2: 15% nhân đôi    │
│            banh            │
│  Suffix 1: Hút linh lực    │
│            60px            │
│  ─────────────────────     │
│  Giá: 280 Vàng             │
│  Kho vàng: 1,245           │
├────────────────────────────┤
│  [  MUA  ]   [  Đóng  ]   │  ≥44px, ngón cái với tới
└────────────────────────────┘
```

### Bottom sheet — confirm Làm Mới Stock

```
┌────────────────────────────┐
│  ▽  Làm Mới Stock?          │
├────────────────────────────┤
│  Chi phí: 50 Vàng          │
│  Stock hiện tại sẽ biến mất│
│  Kho vàng: 1,245 → 1,195  │
├────────────────────────────┤
│  [  Xác Nhận  ] [  Huỷ  ] │
└────────────────────────────┘
```

### Interactive

- Tap item bất kỳ → bottom sheet full stats + giá + nút "MUA"
- "MUA" trong sheet → deduct vàng, item vào stash, sheet đóng
- "Làm Mới Stock" (thumb-bar) → confirm sheet → refresh danh sách
- Danh sách item cuộn dọc, hàng ≥56px, rarity icon + màu ngũ hành
- Vàng hiện tại luôn visible ở top status (glanceable, không cần scroll)
- Back góc trái hoặc vuốt mép trái → base-camp-hub
- Tất cả touch target ≥44px; action chính ở thumb-bar + đáy bottom sheet
