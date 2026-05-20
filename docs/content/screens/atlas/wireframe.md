# Sơn Hà Đồ — Wireframe (Portrait Mobile)

Source: pivot spec `docs/superpowers/specs/2026-05-20-mobile-portrait-pivot-design.md`

---

## Bố cục 3 vùng dọc

```
┌────────────────────────────┐  ← ~390px
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  TOP STATUS ~7%
│ ⟨  Sơn Hà Đồ           🔍 │  (~59px)
│▓  T8 · 23/150  Tier max T8▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│                            │
│        [CONTENT]           │  CONTENT ~76%
│     Node graph / Atlas     │  (~641px)
│     cuộn / pinch zoom      │
│                            │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│ ⬅ Hub   🌳 Cây   🔍 Tìm  │  BOTTOM THUMB-BAR ~17%
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  (~143px)
└────────────────────────────┘
```

---

## Glyph Legend (dùng ở cả 2 cấp zoom)

```
  ◉  node đã hoàn thành (completed)
  ●  node đã mở khoá (unlocked)
  ⚪ node chưa mở (locked)
  ★  corner boss citadel
  ▶  node hiện tại / vừa chọn
  ──  path đã đi qua (completed)
  ┄┄  path chưa đi (locked)
  [M] mini-map inset
```

---

## ZOOM-OUT — Vùng / Region tổng quan

> Pan 1 ngón, pinch zoom. Zoom-out = 5 cụm region, mỗi cụm 1 badge.
> Tier band: Vô Cực (T1-T4 center) → góc (T13-T16).

```
╔══════════════════════════════════╗
║ ⟨                    🔍 T8·23/150║
╠══════════════════════════════════╣
║  ╔════════════════════════════╗  ║
║  ║  ░░░░  hoa văn vàng  ░░░░ ║  ║
║  ║                            ║  ║
║  ║   ★ BẮC CỰC              ║  ║
║  ║   Thiên Kiếp Citadel       ║  ║
║  ║   [T13-16 · 4/18 ◉]       ║  ║
║  ║         ┄┄┄┄┄              ║  ║
║  ║ ★ TÂY  ┄┄ ◎VÔ CỰC┄┄  ★ ĐÔNG ║
║  ║ Tâm Ma  ┄   [T1-4]  ┄  Dị Tượng║
║  ║ [T9-12  ┄  12/40 ◉  ┄  [T9-12 ║
║  ║  2/16◉] ┄            ┄   5/16◉]║
║  ║         ┄┄┄┄┄              ║  ║
║  ║   ★ NAM CỰC              ║  ║
║  ║   Cổ Đan Lò Citadel        ║  ║
║  ║   [T13-16 · 1/18 ◉]       ║  ║
║  ║                            ║  ║
║  ║  ░░░░  hoa văn vàng  ░░░░ ║  ║
║  ╚════════════════════════════╝  ║
║                            [M]◻  ║
╠══════════════════════════════════╣
║  ⬅Hub    🌳Cây    🔍Tìm        ║
╚══════════════════════════════════╝
```

Chú thích zoom-out:
- Mỗi cụm (★ + label): tap → zoom-in vào vùng đó.
- Badge `[T13-16 · 4/18 ◉]` = tier band · completed/total.
- `◎VÔ CỰC` = center hub, luôn visible, tap → zoom-in center.
- Path `┄┄` = locked route, `──` = completed (không vẽ ở zoom-out level; xem zoom-in).
- `[M]◻` = mini-map inset góc phải dưới, tap toggle expand.

---

## ZOOM-IN — Node chi tiết (ví dụ: vùng Vô Cực T1-T8)

> Sau khi tap cụm "VÔ CỰC" hoặc pinch-zoom vào. Hiện từng node + connection.
> Mini-map inset luôn bật, đánh dấu viewport hiện tại.

```
╔══════════════════════════════════╗
║ ⟨ Vô Cực                T1-T8  ║
╠══════════════════════════════════╣
║  ╔════════════════════════════╗  ║
║  ║  ░░░░  hoa văn vàng  ░░░░ ║  ║
║  ║                            ║  ║
║  ║   ⚪T2──┄┄──⚪T2──┄┄─⚪T3  ║  ║
║  ║    ┄                   ┄   ║  ║
║  ║   ⚪T1──────◉T1──────●T2  ║  ║
║  ║    │        │          │   ║  ║
║  ║   ◉T1──────▶T2──────●T2  ║  ║  ← node hiện tại ▶
║  ║    │        │          │   ║  ║
║  ║   ●T3──────●T3──────●T4  ║  ║
║  ║    ┄                   ┄   ║  ║
║  ║   ⚪T4──┄┄──⚪T4──┄┄─⚪T5  ║  ║
║  ║                            ║  ║
║  ║  ░░░░  hoa văn vàng  ░░░░ ║  ║
║  ╚════════════════════════════╝  ║
║                         [M]◼◻   ║
╠══════════════════════════════════╣
║  ⬅    🌳Cây    🔍Tìm           ║
╚══════════════════════════════════╝
```

Chú thích zoom-in:
- `──` path đã mở / đã đi qua; `┄┄` path còn khoá.
- `▶` = node hiện tại được chọn (chưa enter).
- `[M]◼◻` = mini-map inset; ◼ = viewport position trong full atlas.
- Tap node → bottom sheet hiện (xem dưới).
- Pan 1 ngón để trượt. Pinch-zoom chuyển về zoom-out.

---

## BOTTOM SHEET — Node detail (tap bất kỳ node)

> Vuốt lên từ đáy, dimmed backdrop giữ graph context. Vuốt xuống đóng.

```
╔══════════════════════════════════╗
║  ░░░░░░░░ [graph mờ phía sau] ░░ ║
║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║
║  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░ ║
╠═══════╤══════════════════════════╣
║  ───  │  Sheet drag handle       ║
╠═══════╧══════════════════════════╣
║  ● T4 · Bí Cảnh Diêm Tuyền      ║
║──────────────────────────────────║
║  Tier          T4                ║
║  Trạng thái    Chưa hoàn thành   ║
║  Đan Pháp      Tiêu Chuẩn / Tử Sinh ║
║  Mod bí cảnh   +20% quái HP      ║
║                Linh Lực +1       ║
║  Đặc sản       Đan dược Lửa x2   ║
║──────────────────────────────────║
║  Đường tới đây:                  ║
║  VÔ CỰC → T2 ◉ → T3 ◉ → T4 ▶   ║
║──────────────────────────────────║
║  ┌──────────────────────────────┐║
║  │      TIẾN VÀO BÍ CẢNH       │║  ← CTA chính, full width
║  └──────────────────────────────┘║
╚══════════════════════════════════╝
   ↑ vuốt xuống để đóng
```

Nội dung sheet:
- **Drag handle** trên cùng (≥44px tap zone).
- Tier, trạng thái, drop pool Đan Pháp, mod bí cảnh, đặc sản.
- Breadcrumb path đã đi.
- CTA "TIẾN VÀO BÍ CẢNH" full width (≥56px high).

---

## SEARCH / Jump-to (tap 🔍 ở Top bar hoặc Thumb-bar)

> Full-screen overlay, keyboard pop lên, graph ẩn.

```
╔══════════════════════════════════╗
║ ✕  ┌──────────────────────────┐ ║
║    │ 🔍 Tìm bí cảnh...        │ ║
║    └──────────────────────────┘ ║
╠══════════════════════════════════╣
║  Gợi ý:                         ║
║  ──────────────────────────      ║
║  ▶ Bí Cảnh Diêm Tuyền   T4 ●   ║
║  ──────────────────────────      ║
║  ◉ Long Cung Bí Cảnh    T7 ◉   ║
║  ──────────────────────────      ║
║  ⚪ Thiên Kiếp Trường    T14 ⚪  ║
║  ──────────────────────────      ║
║  [lọc: Tier▾] [Trạng thái▾]    ║
╠══════════════════════════════════╣
║ (keyboard)                       ║
╚══════════════════════════════════╝
```

- Chọn kết quả → đóng search → zoom-in + highlight node đó + auto-open bottom sheet.
- Filter chip "Tier" và "Trạng thái" thu hẹp danh sách.

---

## ATLAS TREE — Lối vào (tap 🌳 Cây ở Thumb-bar)

> Full-screen sheet trượt lên, cùng pattern semantic zoom như node graph.
> Thiết kế chi tiết tách tại `docs/content/screens/tinh-diem-tree/wireframe.md` (atlas tree subset).

```
╔══════════════════════════════════╗
║  ───  Atlas Tree drag handle     ║
╠══════════════════════════════════╣
║  Cây Sơn Hà Đồ  [zoom-out/in▾] ║
║                                  ║
║  [atlas passive tree content]    ║
║                                  ╠
║  ... semantic zoom tương tự ...  ║
╠══════════════════════════════════╣
║  ✕ Đóng              Xác Nhận   ║
╚══════════════════════════════════╝
```

---

## MINI-MAP inset (luôn hiển thị trong zoom-in)

```
  ┌──────────┐
  │  ★    ★  │  ← full atlas thu nhỏ
  │    ◎    │  ← Vô Cực center
  │  ★    ★  │  ← 4 corner boss
  │   [■]   │  ← viewport hiện tại (highlight box)
  └──────────┘
  44×44px tap: toggle show/hide
```

---

## Gesture Map

| Cử chỉ | Hành động |
|---|---|
| Tap node | Mở bottom sheet chi tiết |
| Pan 1 ngón | Trượt viewport trong node graph |
| Pinch zoom out | Chuyển về zoom-out (region view) |
| Pinch zoom in | Chuyển sang zoom-in (node view) |
| Tap cụm region (zoom-out) | Zoom-in vào vùng đó |
| Vuốt lên từ đáy (node tapped) | Kéo sheet lên full |
| Vuốt xuống sheet | Đóng sheet, trở về graph |
| Tap mini-map | Toggle show/hide |
| Vuốt mép trái | Back → Hub |
| Tap ⟨ (Top bar) | Back → Hub |
| Tap 🔍 | Mở search overlay |
| Tap 🌳 Cây | Mở Atlas Tree sheet |

---

## Top Status Bar chi tiết

```
┌────────────────────────────────────┐
│ ⟨                    🔍  T8·23/150 │
└────────────────────────────────────┘
  ~59px cao. Glanceable. Không action quan trọng (khó với 1 tay).
  - ⟨ : back về Hub (~44×44px tap)
  - Brush-stroke title ẩn (space dành tài nguyên)
  - 🔍 : search shortcut
  - T8 : tier max hiện tại
  - 23/150 : atlas progress (nodes completed/total)
```

---

## Bottom Thumb-bar chi tiết

```
┌────────────────────────────────────┐
│  ⬅ Hub    🌳 Cây    🔍 Tìm        │
└────────────────────────────────────┘
  ~143px cao (với safe-area padding). Vùng ngón cái với tới.
  - ⬅ Hub   : nav về Base Camp Hub
  - 🌳 Cây  : Atlas Tree (passive nodes atlas)
  - 🔍 Tìm  : Search + jump-to node
  (TIẾN VÀO nằm trong bottom sheet sau khi tap node — không ở thumb-bar)
```

---

## 立軸 Ornament

```
╔══╦══════════════════════════╦══╗
║░░║  brush-stroke title      ║░░║  ← gold rail trái & phải
║░░║                          ║░░║     toàn chiều cao content
║░░║    [node graph content]  ║░░║
║░░║                          ║░░║
╚══╩══════════════════════════╩══╝
```

Rail vàng `║░░║` (~8px mỗi bên): hoa văn vàng dọc (SVG repeat),
hiệu ứng lập trục 立軸. Không che touch target graph.
