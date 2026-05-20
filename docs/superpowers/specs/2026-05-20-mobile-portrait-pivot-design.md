# Mobile Portrait — UI Design Spec

> Đan Kiếp form-factor: **mobile-only, portrait (dọc)**. Chạy mobile browser, PWA-ready cho app store.

## Động cơ

1. **Chơi 1 tay / lúc rảnh** — nằm, đi tàu, chờ đợi. Portrait + thumb-zone cho phép cầm 1 tay điều khiển trọn. Driver chính.
2. **Thẩm mỹ 立軸 (hanging scroll)** — hội hoạ sơn thuỷ dọc, núi non xếp tầng từ chân lên đỉnh. Màn dọc = lập trục, hợp chất tu chân.

## Nền tảng

- **Game**: full ARPG depth (decision #1–#25) — theme tu chân, 6 trụ gambling, Atlas T1-T16, cây Tinh Điểm ~150 node, Lò 8-slot, Đạo Phái, progression.
- **Stack** (#26): Vue 3 + PixiJS v8 + Rapier 2D + Nakama + Vite + Bun — chạy mobile browser.
- **Viewport**: portrait baseline ~390×844, safe-area aware.
- **Input**: touch primary. Số liệu với tới ≤1 tap qua bottom sheet.
- **Distribution**: web (Cloudflare Pages) + PWA cho app store.

## Khung portrait dùng chung (content screens follow — Consistency)

> Ngoại lệ không theo skeleton 3 vùng (đúng bản chất): **main-menu** (splash/menu), **cheat-sheet** (overlay widget 3 mode), **modal-patterns** (catalog pattern, không phải screen).

### Skeleton 3 vùng dọc
- **Top status** (~7%, glanceable): brush-stroke title trái + tài nguyên chính phải. Vùng ít chạm.
- **Content** (~76%, 立軸 cuộn dọc): việc chính của màn.
- **Bottom thumb-bar** (~17%, safe-area): action chính + nav. Vùng ngón cái → mọi tương tác chủ lực.

### Pattern lõi
- **Detail-on-demand = bottom sheet** (vuốt lên hiện full số, vuốt xuống đóng). Giữ context phía sau. Reka UI / vaul-style.
- **List/grid**: cuộn dọc, hàng ≥56px.
- **Modal**: full-screen sheet (hành động không undo) hoặc bottom sheet (vuốt-tắt). Quy tắc tại `screens/modal-patterns/`.
- **Nav**:
  - **Tab-level** (thanh tab 5 đích Lò / Tree / Atlas / Stash / Vendor): base-camp-hub, lo-editor, stash, vendor, dan-lu-ban.
  - **Focus-level** (action bar ngữ cảnh + back, dành trọn thumb-zone cho task): tinh-diem-tree, atlas, son-ha-do-altar, phap-tran-combat, modal-patterns.
- **Touch target ≥44px**, action chính ở 1/3 dưới.

### Màn graph lớn (tinh-diem-tree, atlas)
Semantic zoom: zoom-out = cụm ngũ hành / region (badge); zoom-in = node chi tiết. Search + jump-to. Highlight đường đã allocate. Pan 1 ngón, pinch zoom, mini-map inset.

### Combat (phap-tran-combat) — Thác Tầng Dọc
Sân physics khai thác chiều cao: linh lực búng từ đáy lên, linh khí xếp 3–4 tầng dọc (thác nước / 立軸), linh đan ở tầng giữa. Banh bounce qua các tầng + re-entry chain tạo kịch tính quỹ đạo. Control búng trọn vùng ngón cái đáy. Chi tiết: `screens/phap-tran-combat/wireframe.md`.

### Thẩm mỹ
立軸 cuộn dọc, hoa văn vàng viền dọc, brush-stroke title, ngũ hành color coding. Concept art draft thẳng trên canvas dọc (`art-direction.md`).

## UI principles (`ui-wireframes.md` §0)
- **#1** PoE-grade depth, progressive disclosure: số liệu ≤1 tap (bottom sheet on-demand).
- **#5** Thumb-zone reachable: action chính 1/3 dưới, touch target ≥44px, cầm 1 tay điều khiển trọn.

## Màn (13)
main-menu, base-camp-hub, lo-editor, tinh-diem-tree, son-ha-do-altar, phap-tran-combat, dan-lu-ban, vendor, atlas, stash, cheat-sheet, settings, modal-patterns — mỗi màn ở `docs/content/screens/<id>/wireframe.md` + `design.md`.

## Rủi ro cần playtest sớm
1. **Graph nav** (tree 150-node + atlas): semantic zoom trên màn dọc — verify cảm giác pan/zoom ≤ tuần 2 prototype.
2. **Combat feel**: tham số "Thác Tầng Dọc" cần playtest sớm để tinh chỉnh density tầng + lực búng + re-entry chain.

## Lưu ý
`screenKind: both` trong frontmatter = bundle có cả wireframe.md + prompt.md (per `2026-05-20-per-entity-content-bundle-design.md`), không phải field platform. Platform là global — không đặt vào `screenKind`.
