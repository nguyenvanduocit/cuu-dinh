# Sơn Hà Đồ — Wireframe (Portrait Mobile)

Source: pivot spec `docs/superpowers/specs/2026-05-20-mobile-portrait-pivot-design.md`

> **Scope note (critical)**: All ASCII diagrams below use a small **toy cluster** (≈20 nodes, T1–T5 region) for visual clarity and to keep the document readable. The real Sơn Hà Đồ contains **150 atlas nodes** across T1–T16 tier bands (see `design.md` and master design §14). Implementation will require hierarchical LOD (3–4 zoom levels), region clustering, smart label culling, and minimum 44 px touch targets (with hit-area expansion). A dedicated layout spec is recommended before renderer work.

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

> Pan 1 ngón, pinch zoom. At the coarsest semantic level the view collapses to the 5 major clusters (Vô Cực center + 4 corner citadels). Further zoom levels (to be defined in the future layout spec) will reveal sub-region clusters before individual nodes.
> Tier band: Vô Cực (T1-T4 center) → outer citadels (T13-T16).
>
> **Illustrative only** — the diagram shows a conceptual 5-cluster overview. Real 150-node data will use additional intermediate LODs so the graph never becomes an unreadable hairball on 390 px width.

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
>
> **Illustrative toy example** — the diagram below uses a small readable cluster. The real implementation for 150 nodes will apply progressive clustering + LOD so that only the current viewport's nodes are drawn at full detail while distant areas remain as density hints or aggregated badges.

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
║  Đan Pháp (drop pool)            ║
║    • Tiêu Chuẩn (primary)        ║
║    • Tử Sinh (rare)              ║
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
- Tier, trạng thái, drop pool (Đan Pháp variants with primary/rare distinction), region mods, đặc sản.
- Breadcrumb path đã đi.
- CTA "TIẾN VÀO BÍ CẢNH" full width (≥56px high). For atlas nodes this launches the pre-composed session directly; players wanting full customisation can still go through the Sơn Hà Đồ Lệnh altar.

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

> Full-screen sheet (or future dedicated overlay) showing the **Atlas Tinh Điểm tree** — a separate progression system from the character Tinh Điểm tree.
>
> - Earned with **Atlas Tinh Điểm** (1 point per atlas node clear, distinct from character Tinh Điểm).
> - ~15 high-impact keystones focused on map economy, drop quality, region bonuses, and citadel access.
> - Re-uses the same semantic-zoom + pan + mini-map interaction language as the character tree, but with different visual theming (atlas/celestial instead of pure element starts) and different allocation currency.
>
> Full node list, layout, and balance will live in a future `docs/content/atlas-tree/` bundle or a dedicated section of the atlas-nodes authoring pipeline. The cross-reference to `tinh-diem-tree/` only indicates **interaction pattern reuse**, not shared content.

```
╔══════════════════════════════════╗
║  ───  Atlas Tree drag handle     ║
╠══════════════════════════════════╣
║  Cây Sơn Hà Đồ  [zoom-out/in▾] ║
║                                  ║
║  [atlas-specific passive nodes]  ║
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
| Tap 🌳 Cây | Mở Atlas Tinh Điểm tree sheet |

---

## Scale & Rendering Considerations (150 Nodes)

This section captures the mobile-specific challenges that the toy ASCII diagrams deliberately hide.

### Target constraints
- Viewport content area ≈ 390 × 640 px (portrait, safe-area subtracted).
- Minimum touch target 44 × 44 px (or 36 px with generous hit-area expansion for dense clusters).
- Labels must remain readable at the "node" LOD (minimum 10–11 pt effective).
- 6-color limited palette (ink black, cinnabar, imperial gold, ivory, jade, twilight purple) — high contrast required.

### Recommended LOD hierarchy (future layout spec)
1. **Level 0 (coarsest)**: 5 super-clusters (Vô Cực + 4 citadels). Badges only: tier band + completion count.
2. **Level 1**: Region clusters (8–12 per major region). Small density dots + region label.
3. **Level 2**: Sub-clusters or individual nodes when zoomed. Full glyphs + short `ten` or tier number.
4. **Level 3** (only in very small regions or when single node selected): full node card + connection lines with weight.

Implementation options to evaluate in prototype:
- Force-directed layout with manual anchor points per region (preferred for tu chân "floating islands" feel).
- Pre-authored per-region coordinate tables (easier for content authors).
- Voronoi or hexagonal clustering for LOD aggregation.
- Frustum culling + level-of-detail switching inside the Pixi or SVG layer.

### Label & affordance policy (proposal)
- Zoom-out (levels 0-1): only tier number + completion pip, no names.
- Mid zoom: tier + short Vietnamese name (truncated if needed).
- Deep zoom or selection: full `ten`, element icon, boss indicator.
- Always show current path with thick gold line regardless of zoom.

### Mini-map behaviour at scale
- At 150 nodes the mini-map itself becomes a density field. Consider two modes: "overview silhouette" and "exact node dots when zoomed in".
- 44×44 px is acceptable as a toggle; expanded state can be a 120×120 px popover or side panel.

### 立軸 ornament constraints (re-emphasis)
Gold decorative rails on left and right of the graph must never reduce the interactive graph width by more than ~12–15 px total. Rails are pure ornament — they do not receive pointer events and must be drawn behind the pan/zoom surface.

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
  - 🌳 Cây  : Atlas Tinh Điểm tree (map-specific keystones & economy)
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

Rail vàng `║░░║` (~6–8 px mỗi bên): hoa văn vàng dọc (SVG repeat), hiệu ứng lập trục 立軸.

**Hard constraint**: total decorative rails must not steal more than 12–15 px from the usable graph width on a 390 px viewport. Rails are drawn behind the interactive layer and receive zero pointer events. See also the new "Scale & Rendering Considerations" section above.
