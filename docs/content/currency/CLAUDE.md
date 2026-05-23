# Currency — đan dược + nguyên liệu + tâm ma mod (Tier 2)

> Tier 2 cho category `currency`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Currency trong universe

Currency = **fuel cho 6 trụ gambling** (locked #12) + economy chính. KHÔNG phải "gold" / "coin" generic. Mỗi currency là một loại **đan dược** (đan sư rang chế), một mẩu **nguyên liệu** (thiên thạch, vong linh, tinh chất bí cảnh), một cuốn **tâm ma mod** (chú văn corrupt), một quẻ **thiên cơ** (bói toán).

**Quy mô**: 62 currency, chia 6 category functional (frontmatter `category` field 100% coverage):

- **`main`** (8) — đan dược cơ bản (analog `identify`, `alteration`, `chaos` của PoE). Vd `identify-elixir` = Đan Tẩy Niêm.
- **`essence`** (12) — đan tinh chế cao cấp, force-roll affix tier rare.
- **`corruption-mod`** (12) — tâm ma corruption, mutate vĩnh viễn (high-risk, high-reward). Vd `great-counter` = Đại Khắc.
- **`mechanic-shifter`** (10) — đan dược splash modify mechanics in-pháp-trận. Effect chỉ trong 1 map.
- **`drop-bias`** (10) — nguyên liệu thêm vào pháp trận, lệch drop pool.
- **`boss-modifier`** (10) — boss mod khi pháp trận → boss. Vd `wind-rain-soul` = Phong Vũ Hồn.

---

## Design principles

- Mỗi currency MUST state: **trụ gambling nào**, **risk level**, **fail state**, **reward arc**. Field-level: `riskLevel`, `rewardMultiplier`, `difficultyTier`.
- **Pain level A** (locked #4): fail = mất affix, KHÔNG brick item. Corruption-mod ngoại lệ explicit — high-risk MUST có high-reward asymmetric.
- **Drop rate** phải feel earnable + scarce. Main = common (gặp mọi map T1+), essence = mid-rare (T6+), corruption-mod = rare (T10+).
- **Stack visual + naming consistent**: đan dược dạng viên, nguyên liệu dạng mảnh/giọt, mod dạng cuốn/ấn, quẻ dạng thẻ tre.
- **Effect MUST có ritual context**, không "tăng/giảm X". "Đan sư rang chế trong tam khắc dưới chân thiên kiếp" tốt hơn "+30% essence chance".

---

## Lore voice

- Mỗi currency có **nguồn gốc**:
  - Đan dược: ai luyện ra? Tông môn đan sư nào? Đan phương từ đâu?
  - Nguyên liệu: đến từ địa danh nào? Thiên thạch rơi năm nào? Vong linh ai?
  - Tâm Ma Mod: chú văn khắc bởi ai? Tà phái / cấm địa?
  - Boss-modifier: hồn / vật phẩm boss nào tinh luyện ra?
- Tone: **alchemy + mystic**. "Đan tinh chế" / "Mảnh thiên thạch" / "Cuốn tâm ma văn" / "Quẻ Thiên Cơ".
- Mô tả ngắn + effect text MUST có Hán-Việt texture.

---

## Element/rarity expression

- **Visual color** đan dược theo element identity (nếu có): Thuỷ = xanh, Hoả = đỏ, Mộc = lục, Kim = vàng kim, Thổ = nâu. Neutral đan dược = trắng/xám.
- **Rarity tier**: common (white), uncommon (blue), rare (yellow), epic (purple/dark). Corruption-mod thường epic.
- **Drop pool tier** — currency category tương ứng map tier: main = T1+, essence = T6+, corruption-mod = T10+.

---

## Cross-system relationship

- **Items**: đan dược modify linh khí (reroll affix, change implicit, upgrade tier).
- **Affixes**: essence force-roll affix specific; main đan dược reroll random.
- **Maps (pháp trận)**:
  - **Đan Pháp** (main subcategory) = entry token mở pháp trận.
  - **Nguyên Liệu** (drop-bias) inject vào map lệch drop.
  - **Đan Dược splash** (mechanic-shifter) modify in-map mechanics.
- **Equipment (Lò Luyện Đan)**: đan dược modify Lò parts.
- **Boss**: boss-modifier change boss behavior pháp trận.
- **Tâm ma**: corruption-mod link với Tâm Ma boss type (T6-T13).
- **Combat math**: drop bias scale với map tier + Nguyên Liệu density (xem `docs/content/economy-flow.md`).
- **6 trụ gambling**:
  - Trụ #1 Đan dược — main + essence + mechanic-shifter ở đây.
  - Trụ #3 Tâm Ma Mod — corruption-mod.
  - Trụ #4 Phong Ấn — currency unique cho lock affix.
  - Trụ #5 Pháp Trận Tử Sinh — boss-modifier feed vào.
  - Trụ #6 Thiên Cơ Quẻ — divination currency.

---

## Sub-grouping rationale (Tier 3)

6 sub-folder = 6 category đã có trong frontmatter `category` field (100% coverage, balanced 8-12 mỗi sub):

| Sub-folder | Count | Identity / authoring constraint |
|---|---|---|
| `main/` | 8 | Đan dược cơ bản, mọi player dùng. Risk low, effect deterministic. |
| `essence/` | 12 | Đan tinh chế cao cấp, force-roll affix specific. Risk mid. |
| `corruption-mod/` | 12 | Tâm ma corruption, mutate vĩnh viễn. Risk high — MUST có risk/reward asymmetric explicit. |
| `mechanic-shifter/` | 10 | Splash in-map only. Effect chỉ trong 1 pháp trận, không persist post-map. |
| `drop-bias/` | 10 | Nguyên liệu lệch drop pool. Quantitative bias, không qualitative shift. |
| `boss-modifier/` | 10 | Boss mod khi pháp trận → boss. Effect chỉ apply trong boss room. |

Lý do split by `category`: 6 sub có **authoring constraint khác hẳn nhau** (corruption-mod = high-risk gambling design; mechanic-shifter = in-map scope rule; boss-modifier = boss room scope). AI authoring 1 corruption-mod tự biết "đây là high-risk, MUST asymmetric risk/reward".

---

## Anti-patterns

- ❌ Currency thuần "tăng X stat" không tu chân lore ritual → BAN.
- ❌ Pain brick item (vd reroll fail = item destroyed). Vi phạm locked #4 Pain A → BAN.
- ❌ Corruption-mod KHÔNG có risk asymmetric (chỉ buff không debuff) — sai identity.
- ❌ Mechanic-shifter effect persist sau map — vi phạm in-map scope.
- ❌ Boss-modifier effect ngoài boss room — vi phạm scope.
- ❌ Drop rate generic, không gắn map tier / nguyên liệu density.
- ❌ Naming generic ("Currency A", "Token X") — MUST có Hán-Việt name + lore origin.
- ❌ Effect description chỉ "tăng/giảm" — MUST có ritual context.
- ❌ Sub-folder split sai `category` value trong frontmatter — sub-folder name MUST khớp `category` value bit-by-bit.
