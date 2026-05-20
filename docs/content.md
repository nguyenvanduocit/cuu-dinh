# Content Inventory — Cửu Đỉnh

> Catalog naming conventions, category philosophy, and content scaling. Entries live in `data/` — this doc holds the *why*.

> Updates: bump version + add changelog entry below.

---

## 0. Naming conventions

**Hán-Việt tu chân first for player-facing names. Code identifiers may remain English per naming pivot.**

### Pattern

```
[Tên định danh] [Element prefix (optional)] [Tier suffix (optional)]
```

Examples:
- `Huyền Thiên Chung` (item: Huyền Chung, tier: Cổ)
- `Mộc Linh Đèn Lồng` (item: Đèn Lồng, element: Mộc, no tier)
- `Hoả Phụng Ngọc Châu` (item: Ngọc Châu, element: Hoả-Phụng combo)

### Vocabulary banks (cho AI content gen)

**Item base nouns** (object types):
- Huyền Chung, Đèn Lồng, Quạt, Phù, Trận Kỳ, Ngọc Giản, Bình, Đỉnh, Lư, Hồ Lô, Linh Châu, Phi Kiếm, Kiếm, Đao, Bảo Ấn

**Element adjectives**:
- Kim: Bạch / Vàng / Sắc / Đồng / Thiết
- Mộc: Lục / Bích / Thanh / Sinh / Cành
- Thuỷ: Hắc / Lam / Lưu / Tịnh / Hàn
- Hoả: Đỏ / Hồng / Liệt / Lửa / Hoả Linh
- Thổ: Hoàng / Nâu / Trầm / Vô / Đất
- Vô Cực: Hỗn / Vô / Cổ / Thiên / Hỗn Nguyên

**Adjective postfix** (descriptive flair):
- Linh, Thiên, Cổ, Bảo, Thần, Tử, Sinh, Hồn, Phách, Quỷ, Tiên

### Identifier rules

- Code: English canonical ID per naming pivot, e.g. `mystic-bell`
- File: `mystic-bell.tres` (kebab-case)
- Display: `Huyền Thiên Chung` (Vietnamese/Hán-Việt with diacritics)
- NEVER use Western fallback in display text: ❌ `Ancient Bell` → ✅ `Huyền Thiên Chung`

---

## 1. Item categories overview

| Category | Count (v1.0) | Live ops growth |
|---|---|---|
| Linh Khí base | 78 | +5/month |
| Cổ Vật (unique) | 30 | +2/month |
| Lò Parts | 50 (8 slots × variants) | +1 slot variant/month |
| Đan Dược (reagents) | 20 | +1/quarter |
| Nguyên Liệu (catalysts) | 30 | +5/quarter |
| Đan Pháp variants | 10 | +1/major patch |
| Affix prefix | 80 | +10/quarter |
| Affix suffix | 80 | +10/quarter |
| Affix implicit | 30 | +5/quarter |
| Tâm Ma Modifier | 12 | +3/quarter |
| Set bonus | 3 | +1/year |

Counts are authoritative in `data/` — this table is a summary overview only.

---

## 2. Linh Khí — base items

10 items per element × 6 elements = 60 core linh khí, expanded to 78 with rarer Vô Cực candidates. Each element has a distinct **physics role**: Kim (crit/piercing), Mộc (sustain/regen), Thuỷ (chain/control), Hoả (AOE/ignite), Thổ (charge/defensive), Vô Cực (chaos/wildcard). Items within an element reinforce each other through implicit synergy, not just stat stacking. Implicits are element-flavoured: Huyền Chung pushes, Đèn Lồng converts, Tượng amplifies neighbours, Bùa grants one-shot effects.

Danh sách đầy đủ: [`data/items.md`](data/items.md)

---

## 3. Cổ Vật — unique items

30 Cổ Vật (uniques) grouped by archetype role: **build-defining** (alter game mechanics entirely — e.g. reverse gravity, sacrifice linh khí), **sustain/defensive** (extend run survivability), and **chaos/risk** (power at a cost). A post-launch **Mirror tier** (3 ultra-rares, drop rate 1/50,000–1/100,000) ships v1.5+ to avoid early balance distortion. Cổ Vật are the primary vector for personalized Cổ Vật drops from Tâm Ma variant and build-tied rewards.

Danh sách đầy đủ: [`data/uniques.md`](data/uniques.md)

---

## 4. Lò Parts — furnace equipment

50 parts across 8 equipment slots (Đỉnh, Thân, Đế, Quai L/R, Nắp, Khắc Phù, Đồ Sương L/R, Dây Phong Ấn). Each slot has a distinct functional domain: Đỉnh controls ball spawn, Thân sets board dimensions and anchor count, Đế governs the catch zone, Quai L/R are active skills, Nắp controls modifier slots, Khắc Phù is a global buff amulet, Đồ Sương L/R are niche-stat rings, Dây Phong Ấn drives currency control. Rarity tiers (Phàm → Linh → Bảo → Thần → Cổ Vật slot) scale up stat magnitude and unlock special mechanics. The 8-slot system is a locked decision (#8).

Danh sách đầy đủ: [`data/equipment.md`](data/equipment.md)

---

## 5. Đan Dược & Nguyên Liệu — currency

**Đan Dược (reagents, 20 total)**: 8 main + 12 Tinh Hoa. Reagents are the crafting gambling layer — Linh Đan rerolls single affixes, Cửu Chuyển Đan upgrades item tier at 50% fail risk, Phong Ấn has a 4-way random outcome (strip / downgrade / upgrade / add implicit). Tinh Hoa reagents force element-specific or stat-specific outcomes, compressing RNG for targeted crafting. Rarity distribution (Common → Very Rare → Extremely Rare) is the primary economic throttle for crafting depth.

**Nguyên Liệu (catalysts, 30 total)**: Composed at Sơn Hà Đồ Lệnh to modify a pháp trận's properties. Three categories: drop-bias modifiers (Hoả Tinh, Long Cốt, etc.), mechanic-shifters (Tử Khí, Sinh Tử Tinh, etc.), and boss/elite modifiers (Long Phụng Châu, Đỉnh Long Tinh, etc.). Nguyên Liệu is the primary driver of emergent bí cảnh compositions (180K+ possible combinations with 4 catalyst slots).

Danh sách đầy đủ: [`data/currency.md`](data/currency.md)

---

## 6. Set bonuses

3 sets ship in v1.0. **Tứ Linh** (4 items) activates a khí trận that pulls linh lực toward the board center. **Ngũ Hành** (5 items, 1 per element) enables elemental cycling that rewards the full Kim→Thuỷ→Mộc→Hoả→Thổ→Kim cycle with ×3 intensity. **Thập Bát La Hán** (18 items, endgame) is a hard set that grants linh đan resurrection 1x/pháp trận — designed as a high-investment endgame puzzle rather than an early goal. Sets grow at 1/year to maintain set scarcity.

Danh sách đầy đủ: [`data/sets.md`](data/sets.md)

---

## 7. Affix pool

80 prefix + 80 suffix + 30 implicit = 190 total affixes. Prefixes are primarily offensive (intensity multipliers, crit, AOE, tương khắc damage). Suffixes are primarily utility (chain, slow, regen, charge stacking, Phong Ấn safety). Implicits are item-type-specific with T1/T2/T3 tiers per base type (e.g. Huyền Chung T1/T2/T3 increase push wave size). The offensive/utility split is intentional — it mirrors PoE's approach and creates meaningful affix budget trade-offs. Growth rate is 10/quarter per category to keep the pool expanding ahead of player meta-solving.

Danh sách đầy đủ: [`data/affixes.md`](data/affixes.md)

---

## 8. Đan Pháp variants

10 Đan Pháp variants (locked decision #25) serve as structural containers — each variant imposes a distinct **layout signature** that forces different build patterns from the same linh khí set. Tiêu Chuẩn is the baseline canvas. Tử Sinh (Sanctum-like 20-room) and Vô Cực (endless escalating) are the two design poles. Specialized variants (Thiên Kiếp, Long Cung, Cửu Tiêu, Diêm Phủ) have hard element/mechanic restrictions to create mandatory build constraints. Growth is 1 per major patch — variants are not content volume, they are structural gameplay archetypes.

Danh sách đầy đủ: [`data/maps.md`](data/maps.md)

---

## 9. Corruption mods — Tâm Ma

12 Tâm Ma modifiers are negative energy that spawn in boss rooms and endgame compositions. They represent the "tâm ma" spiritual threat in the tu chân lore — not mechanical debuffs from outside, but internal corruption the player must manage. Diêm Phủ pháp trận runs purely on Tâm Ma energy (Ngũ Hành DISABLED). Anti-Tâm-Ma items (Tịnh Tâm Linh Châu, Bùa Trấn Yêu) exist specifically to counter this layer.

Danh sách đầy đủ: [`data/currency.md`](data/currency.md) (corruption-mods table)

---

## 10. Content scaling strategy (live ops)

### Data-driven pipeline

Content authoring lives in `docs/data/*.md` — Markdown tables as single source of truth for concept phase. At implementation phase, structured JSON + Zod schemas regenerate from `docs/data/`. Adding 1 linh khí = edit a row in `data/items.md` + add a sprite. **1-2 hours** total per item once the regeneration tooling is in place.

### AI gen pipeline

```
1. Brainstorm: "Generate 5 Mộc-flavored linh khí, focus on chain trigger"
   → AI proposes name + lore + effect
2. Designer review: cull + tweak
3. Implement: AI writes row in docs/data/items.md
4. Asset: AI generates sprite draft via SD
5. Polish: human refines sprite + balance
```

### Quarterly content drops

Each quarter:
- +5 linh khí (1 per element)
- +2 Cổ vật
- +5 affix
- +1-2 Nguyên Liệu
- 1 themed league: special Đan Pháp variant + 1 boss + 3 unique Cổ vật

---

## 11. Decision log

- **2026-05-19**: Initial content catalog. 78 linh khí, 30 Cổ vật, 20 đan dược/tinh hoa, 30 Nguyên Liệu, 10 Đan Pháp variants, 3 sets, 190 affixes. Live ops growth plan locked.
- **2026-05-20**: Content entries migrated to `docs/data/*.md`. content.md retains rationale only.
