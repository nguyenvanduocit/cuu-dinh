# Misc Items — singleton catch-all (Tier 3)

> Tier 3 cho `items/misc/`. Cascade từ root → Tier 1 → `items/CLAUDE.md` (Tier 2).
> **Note**: Catch-all cho singleton items không khớp sub-type khác (bronze-bell, spirit-lotus-flower, ancient-betel-branch, ...).

---

## Sub-type trong tu chân lore

Misc = **không phải 1 family**, mà tập hợp linh khí singleton có identity riêng nhưng chưa đủ số entity để tạo sub-type riêng. Mỗi misc item là **outlier** — physics / motif / lore riêng biệt.

Examples current:
- **bronze-bell** (chuông đồng) — phát wave xung kích radial. Future: nếu thêm bell-type → tạo sub `bell/`.
- **spirit-lotus-flower** (hoa sen linh) — nguồn linh khí Mộc, có thể aura subtle.
- **ancient-betel-branch** (cành cau cổ) — pháp khí Mộc lai lịch cụ thể.

---

## Game role specific

- **Physics**: VARIABLE per item — vì là catch-all, mỗi item có signature riêng.
- **Anchor placement**: tùy theo physics.
- **Element bias**: VARIABLE.

---

## Design constraints

- Mỗi misc item MUST vẫn pass **toàn bộ items/CLAUDE.md design test** (physics interaction rõ, element identity, lore lai lịch, sub-type identity nếu future-grouping).
- Mỗi misc MUST có **"future sub-type" hint** — nếu thêm 2+ items cùng signature → tách sub mới (vd thêm 2 bells → tạo `bell/`).
- Misc KHÔNG là dump-ground cho lazy design — singleton-status không miễn trừ depth requirement.

---

## Lore motifs

- Per-item — không uniform.

---

## Cross-references

- **items/CLAUDE.md (Tier 2)** — design test áp dụng đầy đủ.
- Cross-ref boss / faction / region per-item lore.

---

## Anti-patterns

- ❌ Misc = lazy design dump ground. Singleton-status KHÔNG miễn trừ design test.
- ❌ Misc item thiếu element identity / physics signature / lore lai lịch.
- ❌ Khi thêm 2+ items cùng physics → tiếp tục dump vào misc thay vì tạo sub mới.
- ❌ Naming generic ("misc-item-1", "special-thing"). MUST tu chân Hán-Việt name.
- ❌ Trộn arhat-* items vào misc (arhat phải vào `arhat/` per restructure rule).
