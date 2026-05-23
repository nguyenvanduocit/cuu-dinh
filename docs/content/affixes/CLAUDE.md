# Affixes — nhuộm hồn / khắc ấn / kết khế lên pháp bảo (Tier 2)

> Tier 2 cho category `affixes`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Affixes trong universe

Affix = modifier roll lên linh khí / equipment. Trong tu chân lore, đây là quá trình **nhuộm hồn**, **khắc ấn**, **kết khế** — đan sư dùng đan dược, pháp văn, mộ kiếm để khắc lên pháp bảo một thuộc tính ẩn. Một linh khí có thể mang nhiều khế ấn; mỗi khế đều có cái giá.

**Quy mô**: 190 affix, chia 3 category mechanics-slot:

- **Prefix** (80) — phẩm tính chủ động, thường offensive / utility. Vd "Phá Niêm" (`armor-break`), "Thanh Long Nổi Giận" (`azure-dragon-wrath`), "Vũ Khí Toàn Sát" (`all-element-slaughter`).
- **Suffix** (80) — phẩm tính phòng / thụ, thường defensive / proc / conditional.
- **Implicit** (30) — phẩm tính innate, gắn liền base type, KHÔNG reroll. Định "linh khí này bản chất là gì".

---

## Design principles

- Affix MUST **nhân lên hoặc thay đổi behavior** linh khí, không chỉ stat raw. Vd "+5% damage" → chấp nhận khi gắn vào element-specific (`Thanh Long Nổi Giận` = +intensity Mộc + crit Mộc); standalone không.
- **Tier T1-T3 = power gradient**, KHÔNG power-creep. T3 ≈ 2x T1, không 10x.
- **Element-specific affix > element-neutral** về depth. Build path cần element specialization; neutral chỉ làm "filler stat".
- **Weight = rarity** (common 100, uncommon 60, rare 30, ...). Define lifecycle gambling — common roll dễ, rare roll khó.
- **Tag combination** (offensive / defensive / elemental / crit / proc) define build cluster. Affix multi-tag = versatile nhưng weight thấp hơn.
- **Compatibility constraint** (`compatibleItemTypes`) — affix elemental thường restrict (Hoả affix không lên Lantern? — quyết định case-by-case).

---

## Lore voice

- Affix description = **quá trình ritual**. "Khi đan sư khắc..." / "Tâm khế kết bằng..." / "Vong linh chủ cũ nhuộm hồn lên..." — opening line establish ritual.
- **Tier value description** nên có texture huyền huyễn, không "T1/T2/T3" raw. Sơ Khế / Trung Khế / Toàn Khế là một pattern; Sơ Văn / Trung Văn / Đại Văn là pattern khác.
- **Mechanics body** (Tier Values + Tương tác + Build & Synergy section) phải explicit:
  - Tier Values: table tier → effect with number.
  - Tương tác: affix nằm ở layer nào trong intensity formula (§7.x combat-math); tương tác với ngũ hành tương sinh/tương khắc thế nào; có stack/cap không.
  - Build & Synergy: roll trên base type nào best; pair với passive/keystone/đan dược nào.

---

## Element/rarity expression

- **Element-tagged affix** (water / fire / wood / metal / earth) chỉ áp lên linh khí cùng element HOẶC neutral linh khí.
- **Visual proc effect color** theo element token.
- **Weight** = rarity scaling: 100 = common, 60 = uncommon, 30 = rare, ≤15 = special.
- **Implicit không có weight** — gắn cố định base type.

---

## Cross-system relationship

- **Items** = nơi affix roll lên (prefix + suffix); compatibility qua `compatibleItemTypes`.
- **Equipment (Lò Luyện Đan)** parts cũng accept affix roll — Lò affix có authoring constraint riêng (layer §7.3 combat-math).
- **Currency**:
  - Đan dược main = reroll affix.
  - Essence = force-roll affix specific.
  - Phong Ấn = lock affix prevent reroll (gambling trụ #4).
  - Tâm Ma Mod = corrupt affix vĩnh viễn (gambling trụ #3).
- **Passive tree**: node ngũ hành buff affix cùng element (Mộc node tăng damage mọi affix Mộc).
- **Combat math** (`docs/content/combat-math.md`): affix define position trong intensity formula §7.2 / §7.3. MUST consult khi tune.

---

## Sub-grouping rationale (Tier 3)

3 sub-folder = 3 mechanics-slot category đã có trong frontmatter `category` field:

- **`prefix/`** (80) — thường active mod (offensive boost, AOE trigger, +intensity, element multiplier). Roll vào prefix slot của item base.
- **`suffix/`** (80) — thường passive / conditional (defensive, on-X trigger, +resist, proc). Roll vào suffix slot.
- **`implicit/`** (30) — gắn liền base type, không reroll, balance lower power vì luôn có.

Lý do split: 3 slot type có **authoring constraint khác nhau** (prefix = active, suffix = reactive/passive, implicit = base-bound balance). AI work trên 1 prefix tự biết "active design space", trên 1 suffix biết "reactive / proc design space".

---

## Anti-patterns

- ❌ Affix "+ stat" thuần, không thay đổi behavior linh khí → BAN.
- ❌ Element conflict (affix Mộc gắn Kim slot) — check `compatibleItemTypes`.
- ❌ Tier value description = "Tier 1, Tier 2, Tier 3" raw — phải có huyền huyễn texture name.
- ❌ Proc affix không có visual feedback — player không biết affix trigger → mistake.
- ❌ Stack additive vô tội vạ — phải tôn trọng intensity formula layer (`docs/content/combat-math.md` §7.3).
- ❌ Affix neutral với tag `elemental` (logical contradiction).
- ❌ Implicit roll-able. Implicit MUST gắn cố định base type.
- ❌ Lore body không trace tới ritual (đan sư nào khắc? Tâm khế hình thành ra sao?).
