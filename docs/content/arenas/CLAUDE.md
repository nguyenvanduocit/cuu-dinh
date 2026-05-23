# Arenas — boss room geometry (Tier 2)

> Tier 2 cho category `arenas`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Arenas trong universe

Arena = **không gian dành riêng cho boss encounter** trong pháp trận. KHÔNG phải "battle arena" generic. Arena = **sub-space của pháp trận**, có geometry riêng, cosmology riêng (long huyệt, cấm địa, thiên kiếp đàn).

**Quy mô**: 3 arena type. Mỗi type có:

- **Geometry** (ASCII trong design.md) — anchor slot + boss spawn point.
- **Environmental hazard / rule** — terrain damage, periodic event, restricted zone.
- **Boss type alignment** — Dị Tượng / Tâm Ma / Thiên Kiếp arena khác nhau.

---

## Design principles

- Arena MUST có **theme cosmology rõ** — không phải "empty boss room".
- **Geometry support boss mechanic**:
  - Dị Tượng arena = open-ish ground, room cho boss roam + player kite.
  - Tâm Ma arena = mirror / fractured zones reflect player; có thể có dialogue trigger point.
  - Thiên Kiếp arena = vertical zone cho lightning waves; cycle nghịch ngũ hành.
- **Environmental hazard align boss type** — Thiên Kiếp arena có lightning periodic; Tâm Ma arena có psychic pulse.
- Anchor slot trong arena tuân rule như map (xem `maps/CLAUDE.md` DESIGN CONSTRAINT).

---

## Lore voice

- **Sense of sacred + danger**. Lai lịch: lần đầu ai khai mở? Có ai sống sót? Có cấm chế nào?
- Voice: weight-of-history + active threat.

---

## Cross-system relationship

- **Maps**: arena spawn ở boss room của pháp trận tier-appropriate (cross-ref `maps/` boss room geometry).
- **Bosses**: arena alignment boss type (Dị Tượng → cấm địa cảnh; Tâm Ma → mirror cảnh; Thiên Kiếp → thiên đàn).
- **Effects**: arena environmental effect (cross-ref `effects/`).
- **Tracks**: per-arena ambient track.

---

## Sub-grouping (Tier 3) — N/A

3 entity. Stay flat.

---

## Anti-patterns

- ❌ Arena = "boss room flat" no theme.
- ❌ Geometry không support boss mechanic (vertical Thiên Kiếp arena nhưng boss attack horizontal).
- ❌ Boss type mismatch arena (Thiên Kiếp boss spawn ở open ground Dị Tượng arena).
- ❌ Anchor slot trong arena không tuân rule visible (xem maps/CLAUDE.md).
- ❌ Environmental hazard không khớp cosmology (lửa hazard trong long huyệt thuỷ arena).
