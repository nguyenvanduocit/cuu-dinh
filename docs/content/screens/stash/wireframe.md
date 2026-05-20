# Kho Đồ — Wireframe (Mobile Portrait)

Source: `docs/superpowers/specs/2026-05-20-mobile-portrait-pivot-design.md`

```
┌────────────────────────┐  ← 390px
│ 立軸 KHO ĐỒ       47/200│  TOP STATUS ~7%
│ ←                      │  (back, count glanceable)
├────────────────────────┤
│ [ĐĐ][LK][ĐP][NL][CV][LP]│  TAB BAR — cuộn ngang
│ ▔▔▔▔▔▔ (active: Đan Dược)│  tab ≥44px touch target
├────────────────────────┤
│                        │
│  GRID CUỘN DỌC         │  CONTENT ~76%
│                        │
│  ┌──────┐  ┌──────┐    │
│  │  🔴  │  │  🟡  │    │  row 1
│  │ [12] │  │ [ 5] │    │  icon + count
│  │ Linh │  │ Tâm  │    │  ≥56px/row
│  │ Đan  │  │ Hoả  │    │
│  └──────┘  └──────┘    │
│  ┌──────┐  ┌──────┐    │
│  │  🔵  │  │  🟤  │    │  row 2
│  │ [ 3] │  │ [ 1] │    │
│  │ Phá  │  │ Cổ   │    │
│  │ Án   │  │ Chân │    │
│  └──────┘  └──────┘    │
│  ┌──────┐  ┌──────┐    │
│  │  ⚪  │  │  🟢  │    │  row 3
│  │ [ 0] │  │ [25] │    │
│  │ Cát  │  │ Đại  │    │
│  │ Đan  │  │ Thành│    │
│  └──────┘  └──────┘    │
│       (cuộn dọc...)    │
│                        │
│  ⬇ tap item            │
│    → bottom sheet      │
│                        │
├────────────────────────┤
│  [Dùng]  [Trang Bị] [×]│  BOTTOM THUMB-BAR ~17%
│  ○ Lò   ○ Tree  ○ Atlas│  (mặc định: nav tabs)
└────────────────────────┘
```

## Bottom Sheet — Item Detail (tap bất kỳ item)

Vuốt lên từ đáy màn, phủ ~70% chiều cao.
Vuốt xuống đóng.

```
┌────────────────────────┐
│         ▬▬▬            │  drag handle
├────────────────────────┤
│  🔴  LINH ĐAN          │
│      Phẩm: ✦✦✦✦☆       │
├────────────────────────┤
│  Ngũ Hành: Hoả         │
│  Tăng tốc độ banh: +18%│
│  Sinh lực hồi phục: +5 │
│  Hiệu quả: 3 lần/ván   │
├────────────────────────┤
│  Lore:                 │
│  "Luyện từ hoa Xích    │
│   Hoa cốc 7 năm..."    │
├────────────────────────┤
│  Số lượng: 12          │
├────────────────────────┤
│ [Dùng ngay] [Trang bị] │  ≥44px button
└────────────────────────┘
```

## Tab Layout

| Tab | Ký hiệu | Nội dung |
|-----|---------|---------|
| ĐĐ | Đan Dược | Tiêu thụ theo lần/ván |
| LK | Linh Khí | Vũ khí/phòng thủ |
| ĐP | Đan Pháp | Blueprint pháp trận |
| NL | Nguyên Liệu | Scarab analogue |
| CV | Cổ Vật | Rare collectibles |
| LP | Lò Parts | Slot equipment |

## Tương tác portrait

- **Tap item** → bottom sheet detail (toàn bộ số liệu)
- **Vuốt xuống sheet** → đóng, về grid
- **Cuộn grid** → dọc, không giới hạn
- **Cuộn tab** → ngang (tab bar overflow scroll)
- **Back** → góc trái top / vuốt mép trái
