# Statue (Tượng) — aura persistent + ritual focus (Tier 3)

> Tier 3 cho `items/statue/`. Cascade từ root → Tier 1 → `items/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

Statue = **tượng pháp** — tượng thần / phật / dị tượng dùng làm pháp khí trung tâm cho ritual. KHÔNG decor — tượng có hồn (thần hồn nhập tượng), phát aura buff khắp pháp trận.

Lore thường gắn miếu, đạo quán, cấm địa cổ. Một số tượng là vong linh hoá thân — interact với tượng = interact với một entity gần như sống.

---

## Game role specific

- **Physics**: **stationary, large** — không mobile. Phát **aura persistent** radius lớn.
- **Anchor placement**: corner / fixed-position. Buff zone cố định.
- **Element bias**: thường Thổ + Kim (đá tạc, đồng đúc, ngọc khắc).

---

## Design constraints

- Statue MUST **stationary** — không có behavior mobile / projectile.
- Effect MUST là **aura persistent** zone, KHÔNG burst.
- Silhouette art phải **nổi bật + lớn** — statue dominate art frame.
- Aura visual visible (glow/mist surround silhouette).

---

## Lore motifs

- Material: đá granite, đồng đúc, đá ngọc, đất nung, gỗ cổ chạm khắc.
- Form: thần phật ngồi thiền / dị tượng đứng / tượng đầu hoặc nửa thân (truncated relics).
- Color: rêu phong, đồng tanh, ngọc xanh, đá ám.

---

## Cross-references

- **Arenas** — statue có thể spawn ở arena geometry cho boss room.
- **Lore-entities** — statue cụ thể có thể là vong linh / historical figure hoá thân (cross-ref `lore-entities/`).
- **Affixes implicit** — `statue-aura-buff-radius` identity implicit.

---

## Anti-patterns

- ❌ Statue mobile / projectile → sai stationary identity.
- ❌ Effect burst → sai aura persistent.
- ❌ Silhouette nhỏ trong art frame → sai dominate feel.
- ❌ Không có aura visual → player không biết zone đâu.
- ❌ Modern statue (glossy marble, abstract sci-fi) → phá tu chân craftsmanship.
- ❌ Tượng không có lore (vong linh ai? Miếu nào? Đạo quán nào?).
