# Trình Đơn Chính — Wireframe (Mobile Portrait)

> Layout: ~390×844px, portrait, safe-area aware.

```
┌────────────────────────────┐
│                            │  ← safe-area top
│                            │
│                            │
│                            │
│   ╔══════════════════╗     │
│   ║  ║║  ║║  ║║  ║║  ║     │  ← brush-stroke ornament (hoa văn vàng)
│   ╚══════════════════╝     │
│                            │
│      ╔════════════╗        │
│      ║            ║        │
│      ║  ĐAN KIẾP  ║        │  ← Vietnamese calligraphy logo
│      ║  丹  劫    ║        │     (brush-stroke, gold on dark)
│      ║            ║        │
│      ╚════════════╝        │
│                            │
│   ┌──────────────────────┐ │
│   │  🔥  Tu Hành Mới     │ │  ← primary CTA (≥56px tall)
│   └──────────────────────┘ │
│                            │
│   ┌──────────────────────┐ │
│   │      Tiếp Tục        │ │  ← visible only if save exists
│   └──────────────────────┘ │
│                            │
│   ┌──────────────────────┐ │
│   │      Cài Đặt         │ │
│   └──────────────────────┘ │
│                            │
│                            │
│   ┌──────────────────────┐ │
│   │      Thoát           │ │
│   └──────────────────────┘ │
│                            │
│   ╔══════════════════════╗ │
│   ║ ║║  ║║  ║║  ║║  ║║  ║ ║  ← hoa văn vàng viền dưới
│   ╚══════════════════════╝ │
│                            │
│  ┌────────────────────────┐│
│  │Vô Danh  Cấp 0  0:00:00 ││  ← bottom status (Tu danh / Cấp / Tu thời)
│  └────────────────────────┘│
│                            │  ← safe-area bottom
└────────────────────────────┘

BG: painted cosmic temple / tiên phủ (dọc, 立軸 composition)
    linh đan rising từ đáy lên, mù sương, ánh kim
Music: đàn bầu chậm + ambient tiên phủ
```

### Vùng & tương tác

| Vùng | Chiều cao | Nội dung | Tương tác |
|---|---|---|---|
| Top ornament | ~6% | Hoa văn vàng + logo | – |
| Logo + title | ~22% | ĐAN KIẾP calligraphy | – |
| Button stack | ~45% | 4 nút (56px/nút, gap 12px) | Tap |
| Bottom ornament | ~4% | Hoa văn vàng | – |
| Status bar | ~7% | Tu danh / Cấp / Tu thời | – |
| safe-area | ~8% tổng | iOS/Android padding | – |

### Detail-on-demand

- "Tu Hành Mới" → modal full-screen: nhập tu danh + chọn Ngũ Hành start (5 options).
- "Tiếp Tục" → load trực tiếp, không confirm.
- "Cài Đặt" → full-screen sheet (settings screen).
- "Thoát" → confirm bottom sheet nhỏ vuốt lên: "Thoát?" [Xác Nhận] [Huỷ].
- Status bar tap → bottom sheet: tu danh, thời gian chơi, phiên bản.
