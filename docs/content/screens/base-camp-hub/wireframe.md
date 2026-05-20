# Khai Lư Trấn Hub — Wireframe (Mobile Portrait)

> Layout: ~390×844px, portrait, safe-area aware.

```
┌────────────────────────────┐
│                            │  ← safe-area top
│ Khai Lư Trấn  💰1,250 ⚗12│  ← TOP STATUS (~7%)
│               🔖3          │    brush-stroke title trái
│                            │    tài nguyên phải (Kim Đan/Linh Đan/Phong Ấn)
├────────────────────────────┤
│                            │
│  ┌──────────────────────┐  │  ← CONTENT VÙNG (~76%)
│  │  🗺  Sơn Hà Đồ Lệnh  │  │    立軸 cuộn dọc
│  │  Bí cảnh chờ khai    │  │
│  │  [Vào Bí Cảnh ▶]    │  │  ← primary action card (nổi bật)
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │  ← NPC CARD (≥56px, full-width)
│  │ 👴 Sư Phụ            │  │    tap → bottom sheet dialogue
│  │ "Đi gặp Mộc Linh"   │  │    quest hint inline
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │
│  │ 🦊 Lão Hồ Ly         │  │  ← tap → bottom sheet: 6 trụ gambling
│  │ Đánh bạc · Phong Ấn  │  │
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │
│  │ ⚗  Đan Lư Bàn        │  │  ← tap → dan-lu-ban screen
│  │ Luyện đan · Chế tạo  │  │
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │
│  │ 🧙 Đạo Sĩ Vô Danh    │  │  ← tap → vendor screen
│  │ Trao đổi · Mua bán   │  │
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │
│  │ 🔒 Lò Thần           │  │  ← greyed, tap → "Mở khoá sau Act 3"
│  │ Sửa Lò · Khoá        │  │    bottom sheet info
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │
│  │ 🔒 Lão Bà Thiên Cơ   │  │  ← greyed, tap → "Mở khoá Act 5+"
│  │ Bói quẻ · Khoá       │  │
│  └──────────────────────┘  │
│                            │
│  ┌──────────────────────┐  │  ← LEVEL / QUEST strip (cuộn cuối)
│  │ Cấp 8/100  ▓▓▓░ 35%  │  │
│  │ Quest: Đi gặp Mộc Linh│ │
│  └──────────────────────┘  │
│                            │
├────────────────────────────┤
│ [Lò][Tree][Atlas][Stash]   │  ← BOTTOM THUMB-BAR (~17%)
│ [Vendor]         [Profile] │    tab nav, ≥44px each
│                            │  ← safe-area bottom
└────────────────────────────┘
```

### Vùng & tương tác

| Vùng | Chiều cao | Nội dung | Tương tác |
|---|---|---|---|
| Top status | ~7% | Title + Kim Đan / Linh Đan / Phong Ấn | Tap tài nguyên → sheet chi tiết |
| Content cards | ~76% | Sơn Hà Đồ Lệnh card + 6 NPC cards (cuộn dọc) | Tap card → bottom sheet hoặc navigate |
| Bottom thumb-bar | ~17% | Tab nav 5 đích + Profile | Tap tab |

### NPC card → bottom sheet pattern

Mỗi NPC card tap mở bottom sheet (vuốt lên full, vuốt xuống đóng):

```
┌────────────────────────────┐
│  ───────                   │  ← drag handle
│  👴 Sư Phụ                 │
│  ─────────────────────     │
│  "Đệ tử, ngươi cần gặp    │
│   Mộc Linh tại Đông Lâm." │
│                            │
│  Quest hiện tại:           │
│  • Đi gặp Mộc Linh         │
│                            │
│  [Nhận Nhiệm Vụ]           │
│  [Hỏi về Lò Luyện Đan]     │
│                            │
└────────────────────────────┘
```

### Bottom tab bar

```
┌──┬──┬──┬──┬──┐
│Lò│🌳│🗺│📦│🏪│
│  │  │  │  │  │
└──┴──┴──┴──┴──┘
 Lò Tree Atlas Stash Vendor
```

- Active tab: gold underline + icon tô sáng.
- Profile icon: góc phải thumb-bar (avatar nhỏ, tap → profile sheet).
- Back: góc trái top-status (← visible khi navigate sâu hơn), hoặc vuốt từ mép trái.

### Sơn Hà Đồ Lệnh card (primary CTA)

- Luôn ở trên cùng content vùng.
- Hiển thị bí cảnh đang chuẩn bị (Đan Pháp + Nguyên Liệu đã nạp) hoặc placeholder "Chưa nạp Đan Pháp".
- "Vào Bí Cảnh" button: 52px, vàng, tap → son-ha-do-altar screen.
