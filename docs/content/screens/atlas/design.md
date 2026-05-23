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

**Sơn Hà Đồ** — the persistent world atlas of Cửu Châu Đan Vực.

150 atlas nodes (T1–T16 tier bands) arranged across 5 Ngũ Hành regions around the central Vô Cực hub, anchored by 4 corner boss citadels (Bắc Thiên Kiếp, Nam Cổ Đan Lò, Đông/Tây Tâm Ma & Dị Tượng).

Unlocked at player level 50. Each node tracks permanent completion, offers a curated **Đan Pháp drop pool** + region-biased rewards and modifiers, and grants **Atlas Tinh Điểm** (separate currency and keystone tree from the character Tinh Điểm).

This screen is the **PoE-style atlas** (fixed nodes, progress, boss citadels). It is deliberately distinct from:
- **Sơn Hà Đồ Lệnh Altar** (`son-ha-do-altar`): the creative map-device composer for emergent, one-off bí cảnh (custom Đan Pháp + Nguyên Liệu + Đan Dược).
- **Tinh Điểm (character tree)**: accessed via Base Camp Hub bottom tabs. The "🌳 Cây" action inside this screen opens the **Atlas Tinh Điểm tree** (map-specific keystones paid with Atlas points earned from clears).

First seen: end of Act 5 (after the map device is obtained).

## Layout Principles (Portrait Mobile)

- Graph rendered as SVG or Pixi layer with **1-finger pan**, **pinch-to-zoom**, and **hierarchical semantic zoom** (super-region → region clusters → sub-clusters → individual nodes). The 5 top-level clusters (Vô Cực + 4 citadels) are the coarsest view.
- Node glyphs (used at all zoom levels): completed (◉), unlocked (●), locked (⚪), corner citadel (★), current/selected (▶). Paths: solid (unlocked/completed) vs dashed (locked).
- Vô Cực center hub remains visually prominent at every scale.
- **Top status bar** (~7 %, glanceable only): current tier max + atlas completion (e.g. "T8 · 47/150"). Minimal tap targets.
- **Bottom thumb-bar** (~17 %, primary actions, safe-area aware): ⟨ Hub | 🌳 Cây (Atlas Tree) | 🔍 Search. All buttons ≥44 px, thumb-reachable.
- **Mini-map inset** (visible when zoomed past region level): full cross with viewport rect. Tap to toggle expanded or recenter.
- Background: deep celestial star-field with floating biome regions, subtle 立軸 gold rails on the sides of the content zone (decorative, must not steal >12–15 px total width from the interactive graph).

**Critical scale note**: 150 nodes on a ~390 px portrait viewport requires aggressive LOD, clustering, and label culling. The ASCII wireframes below use a toy 20-node cluster for readability. Real implementation will need a dedicated layout specification (see wireframe "Scale & Rendering Considerations").

## Data Contract (Content Pipeline)

Atlas nodes follow the project's per-entity content bundle pattern (see `docs/superpowers/specs/2026-05-20-per-entity-content-bundle-design.md`).

Authoring location (to be created): `docs/content/atlas-nodes/<node-id>/design.md + lore.md + prompt.md`.

Each node record supplies (minimum):
- `id` (kebab English), `ten` (player-facing Vietnamese), `tier`, `region` (biome slug from `regions/`), layout seed or explicit coordinates
- `dropPool`: list of Đan Pháp variant slugs (from `maps/`) with optional weights, special mods, or "specialty" flags
- `bossType` (only for citadel nodes), `atlasKeystones` (rewards), prereq adjacency rules
- Completion criteria and any one-time atlas-wide effects

The compiled catalog + player save (completion map, current path, Atlas points) drives the renderer and the bottom-sheet detail.

Until the `atlas-nodes/` category and schema exist, any prototype may use a small hardcoded illustrative graph (20–30 nodes) that matches the wireframe examples.

## Interaction (Touch-First)

- **Tap node** (any zoom level) → bottom sheet (detail-on-demand):
  - Tier, completion status, full drop pool (Đan Pháp variants offered + region specials)
  - Breadcrumb path from Vô Cực
  - Primary CTA: **TIẾN VÀO BÍ CẢNH** (full-width, ≥56 px)
  - Swipe down or tap backdrop to dismiss.
  - For atlas nodes the CTA launches a **pre-composed session** using the node's resolved drop pool. Players who want to customize further can still route through the altar.

- **Tap region cluster** (zoom-out view) or pinch inward → drill into that region at the appropriate LOD.
- **Pinch outward** → coarsen to the next semantic level (eventually the 5-cluster overview).
- **🔍 (top bar or thumb-bar)** → full-screen search overlay with filters (Tier / Region / Completion / Has Boss). Selecting a result pans + highlights + opens its sheet.
- **🌳 Cây (thumb-bar)** → opens the Atlas Tinh Điểm tree as a full-screen sheet (or future dedicated overlay). This tree uses Atlas points and a distinct keystone set focused on map economy, drop quality, and region bonuses.
- **Swipe left edge / tap ⟨** → return to Base Camp Hub.
- Mini-map tap → toggle expanded state or recenter viewport on the main graph.

All interactive targets respect ≥44 px minimum. Primary CTAs live in the bottom third of the screen or in the thumb-bar.

## Open Risks & Recommended Next Steps

- **Mobile graph density** at true 150-node scale is the highest-risk item for this screen (already called out in the mobile portrait pivot spec). Requires early playtest with a realistic clustered layout.
- Content authoring burden is large (150 nodes). Strong recommendation: first define the `atlas-nodes/` schema + author one complete region (e.g. Vô Cực + 25–30 nodes) before any renderer implementation.
- Exact hand-off between "TIẾN VÀO BÍ CẢNH" (pre-composed) and the altar (custom) needs a clear match-entry flow diagram.
- A dedicated short spec `docs/superpowers/specs/2026-05-XX-atlas-graph-layout.md` (LOD levels, clustering strategy, label policy, coordinate authoring) should be written before the visual implementation phase.

This design is intentionally ambitious and locked to the full PoE-grade atlas depth. No scope cuts.
