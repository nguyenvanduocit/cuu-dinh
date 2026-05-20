# Ngũ Hành Wheel — Wireframe (Mobile Portrait)

Source: `docs/superpowers/specs/2026-05-20-mobile-portrait-pivot-design.md`

> Cheat sheet ngũ hành 3 mode: widget thu nhỏ trong thumb-bar (glanceable), bottom sheet mở rộng on-demand, inline mini wheel trong card setup.

## Mode A — Widget Thu Nhỏ (Always Visible)

Hiển thị trong gameplay (pháp trận + setup). Góc phải bottom thumb-bar — không chiếm content.

```
┌────────────────────────┐
│                        │
│   [vùng content]       │
│                        │
├────────────────────────┤
│ [Lò][Tree][⊙]  [☰][…] │  BOTTOM THUMB-BAR
└────────────────────────┘
         ↑
    [⊙] = nút Ngũ Hành
    tap → bottom sheet mở
```

Widget [⊙] hiển thị màu ngũ hành hiện tại (Hoả=đỏ, Thuỷ=xanh, v.v.) — glanceable 1 mắt, không cần đọc.

## Mode B — Bottom Sheet Chi Tiết (tap [⊙])

Vuốt lên từ đáy, chiếm ~55% chiều cao. Vuốt xuống đóng.

```
┌────────────────────────┐
│         ▬▬▬            │  drag handle
├────────────────────────┤
│     NGŨ HÀNH WHEEL     │
│   (Tương sinh · Tương  │
│        khắc)           │
├────────────────────────┤
│                        │
│         Kim            │
│        /    \          │
│       ↑      ↓         │
│   Thuỷ        Hoả      │
│       ↑      ↓         │
│        \    /          │
│    Mộc ── Thổ          │
│                        │
│  ● = linh đan hiện tại │
│                        │
├────────────────────────┤
│  Đan hiện tại: Hoả 🔴  │
│  Tương sinh ←: Mộc 🟢  │
│  Tương khắc ×: Thuỷ 🔵 │
├────────────────────────┤
│  Tương sinh: ×1.5 dmg  │
│  Tương khắc: ×0.5 dmg  │
│  Cùng hành:  ×1.0 dmg  │
└────────────────────────┘
          ↑ vuốt xuống đóng
```

## Mode C — Inline Reference (màn Setup)

Trên màn setup (son-ha-do-altar, dan-lu-ban), vùng content đủ rộng hơn combat. Hiển thị wheel mini inline trong card linh đan — không cần sheet riêng.

```
┌────────────────────────┐
│  Linh Đan: Hoả         │
│  ┌──────────────────┐  │
│  │   Kim            │  │  mini wheel inline
│  │  /    \          │  │  trong card, 80px
│  │Thuỷ  [Hoả]       │  │  [Hoả] = highlighted
│  │  \    /          │  │
│  │  Mộc─Thổ         │  │
│  └──────────────────┘  │
│  Sinh: Mộc  Khắc: Thuỷ │
└────────────────────────┘
```

## Quy tắc hiển thị

| Màn | Mode |
|-----|------|
| phap-tran-combat | Widget [⊙] → Sheet |
| son-ha-do-altar | Inline card + Sheet backup |
| dan-lu-ban | Inline card + Sheet backup |
| lo-editor | Sheet on-demand |
| atlas / tinh-diem-tree | Widget [⊙] → Sheet |
| Màn meta (stash, settings…) | Ẩn hoàn toàn |

## Tương tác portrait

- **Tap [⊙]** → bottom sheet mở, backdrop mờ nhẹ, content phía sau vẫn visible
- **Vuốt xuống sheet** → đóng, về gameplay
- Màu [⊙] = màu ngũ hành đang active → glanceable không cần mở sheet
