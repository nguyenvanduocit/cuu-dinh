---
id: atlas
ten: Sơn Hà Đồ
type: screen
screenKind: both
navigation: [base-camp-hub]
firstSeenIn: act-5
---

# Sơn Hà Đồ (`atlas`)

## Identity

Atlas world map screen. T1-T16 pháp trận nodes arranged around Vô Cực center. 4 corner boss citadels. Tap node → bottom sheet hiện Đan Pháp drop pool + difficulty + breadcrumb path + CTA "Tiến Vào Bí Cảnh". 1-finger pan, pinch zoom, semantic zoom (cluster region ↔ node).

## Layout principles

- SVG node map (1-finger pan, pinch zoom, semantic zoom: region clusters ↔ individual nodes)
- Nodes: completed (◉), unlocked (●), locked (⚪), corner boss citadel (★), current (▶)
- Vô Cực center hub
- Top status bar: tier max + atlas progress (T8 · 23/150). Glanceable, no primary actions.
- Bottom thumb-bar: Back to Hub / Atlas Tree / Search. All primary actions thumb-reachable.
- Mini-map inset: always visible in zoom-in view, shows full cross + viewport position.
- Background: celestial map of floating regions with deep space between nodes

## Interaction (touch)

- Tap node → bottom sheet (detail on demand): tier, Đan Pháp drop pool, mods, completion status, breadcrumb path, "TIẾN VÀO BÍ CẢNH" CTA. Swipe down to dismiss.
- Tap region cluster (zoom-out) → zoom-in to that region.
- Pinch zoom out → return to region cluster view.
- Tap 🔍 → search overlay with filter by tier / completion, select result → zoom-in + highlight + open sheet.
- Tap 🌳 Cây → Atlas Tree sheet (full-screen, swipe up/down).
- Swipe left edge / tap ⟨ → back to Hub.
