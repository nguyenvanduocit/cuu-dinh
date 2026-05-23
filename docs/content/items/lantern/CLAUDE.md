# Lantern (Đèn) — lighting AOE element-tagged (Tier 3)

> Tier 3 cho `items/lantern/`. Cascade từ root → Tier 1 → `items/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

Lantern = **đèn pháp** — đèn hộ pháp, đèn dẫn hồn, đèn cấm chế. Trong tu chân lore = nguồn sáng nhân tạo có hồn pháp khí — chiếu đến đâu, hồn ma tà khí tan đến đó. Một số đèn cổ dùng dầu đặc biệt (huyết, vong linh tinh dầu, ...) → identity dark.

---

## Game role specific

- **Physics**: **lighting AOE** — glow radius reveal + buff zone element-tagged.
- **Anchor placement**: thường mid-board hoặc anchor cố định cho zone control.
- **Element bias**: thường Hoả (đèn lửa) hoặc Vô Cực (đèn linh quang). Variant U-Minh (đèn dẫn hồn) — Thổ/đen tone.

---

## Design constraints

- Lantern MUST có **glow visible** trong art prompt (chiếu sáng aura nhìn thấy).
- Effect MUST là **zone control AOE buff**, KHÔNG mass burst damage.
- Glow color khớp element identity (Hoả = đỏ cam; Vô Cực = trắng pale; U-Minh = tím lục).
- **Treo bằng dây** hoặc **đặt trên giá** — visualize lantern không bay tự do.

---

## Lore motifs

- Material: lồng giấy / lụa căng khung trúc / gỗ; lửa trong hoặc tinh quang.
- Form: lồng đèn vuông / tròn / sáu cạnh, treo dây hoặc đặt giá.
- Motif: chữ Hán-tự, hoa văn, ấn triện cấm chế nếu là đèn dẫn hồn.

---

## Cross-references

- **Effects** — lantern signature glow effect cross-ref `effects/`.
- **Arenas** — lantern có thể là ambient prop trong arena pháp trận tối.
- **Affixes implicit** — `lantern-zone-buff` identity.

---

## Anti-patterns

- ❌ Lantern không glow visible → sai identity sources of light.
- ❌ Effect mass burst damage → sai zone buff identity.
- ❌ Glow color drift (Hoả lantern xanh) → sai element identity.
- ❌ Lantern bay tự do trong art không có dây / giá → sai stationary placement.
- ❌ Modern lantern (electric lamp, LED, lampshade) → phá tu chân.
- ❌ Đèn không có khung trúc/gỗ → sai default material.
