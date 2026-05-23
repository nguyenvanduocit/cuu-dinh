# Screens — UI screen wireframe + concept art (Tier 2)

> Tier 2 cho category `screens`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Screens trong universe

Screen = **UI surface player tương tác**. KHÔNG phải "menu" / "page" web generic. Screen là **giao diện vào pháp khí / pháp trận / đan đạo** — phải gợi thẩm mỹ 立軸 (hanging scroll), không grid table modern.

**Form-factor locked #31**: mobile-only portrait dọc, viewport ~390×844, PWA-ready.

**Quy mô**: 13 screen.

---

## UI khung 3 vùng (locked #31)

| Zone | Vị trí | Vai trò |
|---|---|---|
| **Top status** | Top ~80px | Meta info (HP Lò, currency, level, paused indicator) |
| **立軸 content** | Mid ~600-700px | Main canvas — hanging scroll aesthetic, vertical scroll |
| **Bottom thumb-bar** | Bottom ~120px | Primary actions, touch target ≥ 44px |

**Bottom-sheet detail** cho secondary info (tap item → bottom sheet slide up).

---

## Design principles

- **Số liệu ≤ 1 tap** từ root screen — player không phải dig nhiều tầng cho info quan trọng.
- **Thumb-zone primary** — actions ở bottom 1/3 màn hình. Top zone chỉ status.
- **立軸 aesthetic** = hanging scroll vertical scroll feel. Avoid grid table dense.
- **Touch target ≥ 44px** (Apple HIG / Material Design rule).
- **One-hand operable** — toàn screen có thể vận hành 1 tay.
- **Aesthetic huyền huyễn** — texture giấy, mực, kim ngân khắc, gỗ cổ. Avoid neon / glass / glossy modern.

---

## Lore voice (UI copy)

- **Hán-Việt natural** — UI copy nhuốm chất tu chân (xem Tier 1 western fallback BAN table).
- Examples:
  - "Vào Pháp Trận" (KHÔNG "Start Match").
  - "Luyện Đan" (KHÔNG "Craft").
  - "Tu Hành" (KHÔNG "Progress").
  - "Phong Ấn Khế" (KHÔNG "Lock Affix").

---

## Cross-system relationship

- **Tracks**: per-screen ambient music brief (Lò screen = thiền nhạc; Pháp Trận select = trận pháp xôn xao).
- **Icons**: per-screen icon set.
- **Forever / Map / Match layer** (locked #5): screen sit ở layer nào.
  - Lò screen = Forever (persistent).
  - Pháp Trận select = Map (per-map state).
  - In-game HUD = Match (in-game ephemeral).
- **All content categories** route qua screens — items hiển thị trong inventory screen, currency trong stash screen, passive tree trong tree screen, ...

---

## Sub-grouping (Tier 3) — N/A

13 entity. Stay flat (per-screen folder define wireframe + concept art unified).

---

## Anti-patterns

- ❌ Landscape layout — vi phạm mobile portrait locked #31.
- ❌ Grid table dense — phá 立軸 aesthetic.
- ❌ Số liệu cần > 1 tap từ root — phá rule.
- ❌ Touch target < 44px.
- ❌ UI copy western ("Mage", "Boss", "Inventory", "Settings") — vi phạm voice.
- ❌ Top-zone primary actions — vi phạm one-hand thumb-zone.
- ❌ Modern UI aesthetic (neon, glass-morphism, gradient flat) — phá tu chân texture.
- ❌ Modal dialog phá scroll — dùng bottom-sheet thay.
