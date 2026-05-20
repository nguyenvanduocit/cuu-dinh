# Sơn Hà Đồ Lệnh Altar — Wireframe (Mobile Portrait)

> Layout: ~390×844px, portrait. Khung 立軸 dọc.

```
┌────────────────────────────┐  ← safe-area top
│ ◁  Sơn Hà Đồ Lệnh     金47│  TOP STATUS (~7%)
│     brush-stroke title      │  back góc trái | tài nguyên phải
├────────────────────────────┤
│                            │
│  ╔══════════════════════╗  │
│  ║  ── Đan Pháp ──      ║  │  CONTENT (~76%)
│  ║  ┌──────────────────┐║  │  cuộn dọc 立軸
│  ║  │  Tử Sinh Mộc T8  │║  │  ← tap slot → bottom sheet
│  ║  │  [Mộc·T8·Tử Sinh]│║  │    chọn Đan Pháp từ stash
│  ║  └──────────────────┘║  │
│  ║                       ║  │
│  ║  ── Nguyên Liệu ×4 ──║  │  tap slot trống → sheet
│  ║  ┌────┐┌────┐         ║  │  chọn nguyên liệu
│  ║  │🔥Hoả││🐉Long│        ║  │
│  ║  └────┘└────┘         ║  │
│  ║  ┌────┐┌────┐         ║  │
│  ║  │ —  ││ —  │         ║  │
│  ║  └────┘└────┘         ║  │
│  ║                       ║  │
│  ║  ── Đan Dược ×3 ──   ║  │  tap slot → sheet
│  ║  ┌────┐┌────┐┌────┐  ║  │  chọn Đan Dược Splash
│  ║  │P.Ấn││CổĐ ││ —  │  ║  │
│  ║  └────┘└────┘└────┘  ║  │
│  ║                       ║  │
│  ║  ── Tâm Ma ×3 ──     ║  │  tap slot → sheet
│  ║  ┌────┐┌────┐┌────┐  ║  │  chọn Tâm Ma Offering
│  ║  │Cuồn││Đại ││ —  │  ║  │
│  ║  └────┘└────┘└────┘  ║  │
│  ║                       ║  │
│  ║  ┄ Preview bí cảnh ┄ ║  │  auto-update khi compose
│  ║  20-phòng Mộc dungeon ║  │  thay đổi
│  ║  Hoả drop bias        ║  │
│  ║  Phong Ấn ngẫu nhiên  ║  │
│  ║  Tâm ma intensified   ║  │
│  ╚══════════════════════╝  │
│                            │
├────────────────────────────┤
│  [    KHAI BÍ CẢNH    ]   │  BOTTOM THUMB-BAR (~17%)
│  ── Lò / Tree / Atlas / ──│  safe-area bottom
│     Stash  /  Vendor       │
└────────────────────────────┘
```

### Bottom sheet — chọn slot (tap bất kỳ slot)

```
┌────────────────────────────┐
│  ▽  Chọn Đan Pháp          │  ← vuốt xuống đóng
├────────────────────────────┤
│  🔍 Tìm kiếm...            │
├────────────────────────────┤
│  Tiêu Chuẩn Mộc T8   ★★☆ │  hàng ≥56px
│  Implicit: +20% Mộc drop  │
├────────────────────────────┤
│  Tử Sinh Mộc T8      ★★★ │
│  +Tử Sinh modifier         │
├────────────────────────────┤
│  Hỗn Nguyên T12      ★★★ │
│  Kết hợp Ngũ Hành ngẫu nhiên│
├────────────────────────────┤
│  …cuộn dọc…                │
└────────────────────────────┘
```

### Bottom sheet — item detail (tap item đã đặt)

```
┌────────────────────────────┐
│  ▽  Tử Sinh Mộc T8         │
├────────────────────────────┤
│  Loại: Đan Pháp             │
│  Tier: T8 · Ngũ Hành: Mộc  │
│  Modifier: Tử Sinh          │
│  +rooms: 20 · boss: Dị Tượng│
│  Drop bias: +30% Mộc loot   │
├────────────────────────────┤
│  [Tháo ra]    [Đóng]       │
└────────────────────────────┘
```

### Interactive

- Tap slot trống → bottom sheet cuộn dọc chọn nguyên liệu từ stash
- Tap slot đã đặt → bottom sheet hiện full stats + nút "Tháo ra"
- Preview bí cảnh auto-update khi bất kỳ slot thay đổi
- "KHAI BÍ CẢNH" → confirm modal full-screen → vào pháp trận
- Back góc trái hoặc vuốt mép trái → base-camp-hub
- Tất cả touch target ≥44px; action chính ở thumb-bar đáy
