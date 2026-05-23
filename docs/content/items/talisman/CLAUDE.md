# Talisman (Phù / Ngọc Bội) — hộ thân + aura subtle (Tier 3)

> Tier 3 cho `items/talisman/`. Cascade từ root → Tier 1 → `items/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

Talisman = **phù** hoặc **ngọc bội** — deo thân, hộ mệnh, dẫn phúc. Trong tu chân lore = pháp khí nhỏ nhưng identity mạnh — phù do đạo sĩ tự khắc chú văn, ngọc bội do gia tộc truyền đời.

Khác với `items/statue/`: statue = stationary lớn, aura mạnh fixed-zone; talisman = nhỏ, **aura subtle persistent xung quanh**, dễ di chuyển trên board.

---

## Game role specific

- **Physics**: **nhỏ, light**. Aura buff radius nhỏ-vừa, persistent.
- **Anchor placement**: linh hoạt (any anchor slot phù hợp).
- **Element bias**: rộng — phù có thể element bất kỳ; ngọc bội thường Mộc/Thuỷ/Kim (ngọc).

---

## Design constraints

- Talisman MUST có **dây/cord** + **chữ/khắc** visible.
- Effect MUST **subtle persistent** (aura, buff, ward), KHÔNG burst damage.
- Silhouette nhỏ — không dominate frame như statue.
- Color glow visible aura subtle (không loud như fire burst).

---

## Lore motifs

- **Phù**: giấy / lụa + mực chú văn Hán-tự + dây treo + ấn triện.
- **Ngọc bội**: ngọc xanh / trắng / đỏ + dây kim/bạc + tua treo + hoa văn rồng/phượng.
- Color: ngọc tone + ink black + đỏ đan sa accent.

---

## Cross-references

- **Affixes suffix** — talisman thường roll suffix defensive / ward (cross-ref `affixes/suffix/`).
- **Sets** — bộ ngọc bội cộng hưởng có thể là set member.
- **Affixes implicit** — `talisman-aura-persistent` identity implicit.

---

## Anti-patterns

- ❌ Talisman burst damage → sai subtle persistent identity.
- ❌ Không có dây / cord → sai "deo thân" identity.
- ❌ Không có chữ / khắc → mất ritual feel.
- ❌ Silhouette dominate frame → sai "nhỏ" identity (đó là statue territory).
- ❌ Modern jewelry aesthetic (gemstone setting, metal claws) → phá tu chân.
- ❌ Aura loud / burst visual → sai subtle.
