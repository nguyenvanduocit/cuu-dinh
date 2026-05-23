# Prefix Affixes — active mod, build-defining (Tier 3)

> Tier 3 cho `affixes/prefix/`. Cascade từ root → Tier 1 → `affixes/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

Prefix = **phẩm tính chủ động** khắc lên pháp bảo. Trong tu chân lore = đan sư dùng đan dược chủ + chú văn để **kích phát một thuộc tính active** lên pháp bảo. Khế hợp xảy ra khi pháp bảo "đáp lời" — kích phát thành công.

Examples: "Phá Niêm" (`armor-break`), "Thanh Long Nổi Giận" (`azure-dragon-wrath`), "Vũ Khí Toàn Sát" (`all-element-slaughter`).

---

## Game role specific

- **Slot**: prefix slot trên item base (linh khí / Lò parts).
- **Behavior**: **active mod** — kích phát khi player action trigger. Offensive boost, AOE trigger, intensity multiplier, element-specific damage.
- **Tier scaling**: T1-T3 power gradient.
- **Authoring lens**: "**What action does this trigger?**" — nếu trả lời được = good prefix.

---

## Design constraints

- Prefix MUST có **active trigger** rõ — không phải passive proc (đó là suffix).
- "+stat thuần" CHỈ chấp nhận khi **element-specific** + có rationale build axis (vd Thanh Long Nổi Giận = +intensity Mộc + crit Mộc element-locked).
- Hi-tier prefix = **build-defining** — nếu T3 chỉ +30% vs T1 +15% = power gradient OK; nếu T3 mở play pattern mới = excellent.
- Lore body explicit ritual context: "Đan sư khắc / kích / nhuộm hồn ...".

---

## Lore motifs

- Tier name pattern: "Sơ Khế / Trung Khế / Toàn Khế" hoặc "Sơ Văn / Trung Văn / Đại Văn" hoặc tu chân variants. Tránh "T1 / T2 / T3" raw.
- Ritual texture: chú văn, đan dược chủ, hồn pháp khí "đáp lời".

---

## Cross-references

- **Items**: prefix roll lên linh khí compatible (cross-ref `compatibleItemTypes`).
- **Equipment (Lò)**: prefix roll lên Lò parts.
- **Currency essence**: force-roll specific prefix.
- **Combat math** `docs/content/combat-math.md`: prefix nằm ở layer §7.2 (item-level intensity).

---

## Anti-patterns

- ❌ Prefix = passive proc / reactive → đó là suffix territory.
- ❌ "+stat thuần" element-neutral không có rationale build axis → BAN.
- ❌ Element conflict (prefix Mộc roll vào sword Kim không compatible).
- ❌ Lore body thiếu ritual context (chỉ "+30% damage to ...").
- ❌ Tier name raw "T1 / T2 / T3" không huyền huyễn texture.
- ❌ Power-creep raw stats theo tier (T3 = 10x T1).
- ❌ Stack additive vô tội vạ không tôn trọng combat-math layer.
