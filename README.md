# Cửu Đỉnh

> *Linh lực rơi từ trời. Đặt linh khí hứng. Luyện linh đan qua chín lần phong ấn — đổi vận mệnh.*

**Cửu Đỉnh** là **ARPG-Physics hybrid** mang depth của *Path of Exile* vào core loop physics của *Ballionaire*, dệt trên thế giới tu tiên/luyện đan kể bằng tiếng Việt — không phải skin xianxia generic, mà là một huyền sử Hán-Việt thuần khiết về **9 đỉnh thượng cổ** đã vỡ 800 năm trước.

---

## At a glance

| | |
|---|---|
| **Genre** | ARPG-Physics hybrid (single-player + async leaderboard) |
| **Setting** | Huyền huyễn tu chân / Đạo sĩ luyện đan, Hán-Việt voice |
| **Platform** | Steam (PC, Mac) primary · Web demo (browser-playable) |
| **Engine** | Vue 3 + PixiJS v8 + Rapier 2D (deterministic) + Nakama backend |
| **Team** | Solo developer + AI co-pilot (Claude Opus 4.7 + Codex) |
| **Status** | Pre-production. Design lock complete (28 quyết định). Prototype kick-off Q3 2026 |
| **Timeline** | v1.0 ship 2028 Q2. Live ops cadence post-launch (PoE league model) |
| **Languages** | Tiếng Việt native · English localization for v1.0 · CN/JP scoping post-launch |
| **Pricing** | $19.99 USD premium · ₫299,000 VN regional · Demo miễn phí (3 maps T1-T2) |
| **Funding stage** | Đang tìm indie grant / publisher để fund **4-month vertical slice** (Q3-Q4 2026) |

---

## Pitch trong 30 giây

> Path of Exile dạy ta rằng *crafting = gambling*. Ballionaire chứng minh *physics drop = oddly satisfying gameplay*. Tu chân Á Đông từ lâu đã biết: **"Cửu chuyển kim đan" = cược chín lần để nghịch thiên cải mệnh**.
>
> **Cửu Đỉnh hợp ba thứ đó lại lần đầu tiên** — và kể câu chuyện đó bằng tiếng Việt Hán-Việt thuần, không phải bản dịch xianxia Trung-Hàn-Nhật.

---

## Cơ hội thị trường

### 1. Blue ocean: ARPG depth × Physics novelty

| Game | ARPG depth | Physics core | Đan/cultivation theme |
|---|---|---|---|
| Path of Exile | ✓✓✓ | — | — |
| Last Epoch | ✓✓ | — | — |
| Ballionaire | — | ✓✓✓ | — |
| Peggle / Suika | — | ✓✓ | — |
| Cultivation gacha mobile | ✓ | — | ✓ (skin only) |
| **Cửu Đỉnh** | ✓✓✓ | ✓✓✓ | ✓✓✓ (native) |

Chưa từng có game nào kết hôn ARPG **affix × passive tree × atlas progression** với **physics-driven core loop**. Cửu Đỉnh là vùng nước biển xanh.

### 2. Tu tiên/luyện đan chưa được game premium hoá

Xianxia/tu chân webnovel + manhua + donghua đã có **fanbase hàng chục triệu quốc tế** (Webnovel, WuxiaWorld, Tap Read, ReadNovelFull). Premium game tu chân chất lượng cao gần như không tồn tại — toàn mobile gacha P2W hoặc visual novel.

Vietnamese-language premium cultivation game = **niche chưa ai đứng**.

### 3. Solo + AI economy validated 2025-2026

- **Vampire Survivors** (Poncle, solo): $50M+ doanh thu
- **Manor Lords** (Slavic Magic, gần solo): 2M+ copies trong 3 tuần
- **Balatro** (LocalThunk, solo): 5M+ copies, GotY nominee
- **Stardew Valley** (ConcernedApe, solo): $50M+ lifetime

Solo dev premium indie = **proven model**. AI co-pilot (Opus 4.7, Sonnet 4.6) trong 2026 = 5x productivity multiplier so với solo era Stardew (2016).

---

## Cảm giác game thực sự là gì

```
╔═════════════════════════════════════════════════════════════╗
║                  Bàn pháp trận của đạo sĩ                   ║
╠═════════════════════════════════════════════════════════════╣
║                                                             ║
║       linh lực Mộc           linh lực Hoả                   ║
║              ●                     ●                        ║
║               ╲                   ╱                         ║
║                ╲                 ╱                          ║
║         ┌──[Huyền Chung Kim]──┐                             ║
║         │  (convert → Kim)    │                             ║
║         └─────────┬───────────┘                             ║
║                   ▼                                         ║
║         ┌──[Bùa Tử Vi]─────┐  ◄─ player đặt linh khí       ║
║         │ (chain +20%/hop) │      trên anchor points        ║
║         └─────────┬────────┘                                ║
║                   ▼                                         ║
║                  ★  ◄─ LINH ĐAN (objective)                ║
║                       Phẩm: Phàm → Linh → Bảo               ║
║                       Quality: ▓▓▓▓▓░░░ 48%                 ║
║                       Stability: ▓▓▓▓▓▓▓ 73%                ║
║                                                             ║
╚═════════════════════════════════════════════════════════════╝
```

**Core loop** (15-20 phút mỗi pháp trận):
1. Player **đặt linh khí** (pháp bảo, ~30 types × 5 ngũ hành × affix-rich) lên bàn pháp trận
2. **Linh lực Ngũ Hành** rơi từ trời theo physics (Rapier 2D deterministic)
3. Linh lực đi qua linh khí → **convert nguyên tố + tích charge** → đập vào **linh đan** trung tâm
4. **Damage formula = Ngũ Hành tương sinh/tương khắc** (Kim→Mộc, Thuỷ→Hoả, etc.)
5. Linh đan đạt phẩm cấp target = **WIN** · Stability < 0 = **bể linh đan = LOSE**
6. Loot drop linh khí mới, đan dược, Đan Pháp (PoE-map analogue), Cổ Vật (unique)
7. Quay lại base camp → **gamble Phong Ấn** (corruption) lên linh khí → enter pháp trận tiếp theo

**Bên ngoài pháp trận** (80% gameplay time, PoE-grade meta):
- **Lò Luyện Đan tổ truyền** (8-slot equipment character) — đỉnh thứ 9 của Cửu Đỉnh, kế thừa từ Sư Phụ
- **Tinh Điểm passive tree** (~150 nodes, 5 Ngũ Hành starts)
- **Đạo Phái** (5 ascendancy subclass, unlock lv 30)
- **Sơn Hà Đồ** (atlas of worlds, T1-T16, unlock lv 50)
- **6 trụ gambling**: Đan dược, Đạo Quán, Tâm Ma Mod, Phong Ấn, Pháp Trận Tử Sinh (Sanctum), Thiên Cơ Quẻ
- **Cấp Vô Cực** endless (paragon-like, post lv 100)
- **Endgame quest** = thu hồi đủ 8 đỉnh thượng cổ còn lại để Cửu Đỉnh đoàn viên

---

## Tại sao chuyện này có thể đi xa

### USP triangulation

```
              PHYSICS NOVELTY
              (Ballionaire feel)
                     ▲
                     │
                     │
     ◄───────────────●───────────────►
   VOICE                            ARPG
   (Vietnamese                      DEPTH
   Hán-Việt                         (PoE-grade)
   cultivation
   native)
                     │
                     │
                     ▼
              GAMBLING DNA
              (luyện đan ≡ cờ bạc lore-true)
```

Mỗi cạnh tam giác đều đã được market-test một cách độc lập:

- **Bên Physics**: Ballionaire 500K+, Peggle 50M+ lifetime, Suika viral 2023
- **Bên ARPG**: PoE 50M+ accounts, Last Epoch 1M+, Diablo 4 10M+
- **Bên Gambling-as-gameplay**: PoE crafting giải mã được tâm lý player · Balatro 5M+ copies chứng minh ngẫu nhiên + build diversity = obsession
- **Voice**: Vietnamese-native premium game gần như không có competitor; cultivation theme có sẵn tens of millions tu chân fanbase quốc tế chỉ chờ premium release

**Bao trùm cả ba cạnh = không ai làm được cùng lúc. Đó là moat.**

### Lore weave là moat dài hạn

Tên game **Cửu Đỉnh** không phải tag dán vào — nó là backbone narrative:

- 9 pháp đỉnh do Cao Tổ + 7 đan sư + Lò Thần rèn 1000 năm trước
- Cửu Chuyển Kim Đan thất bại 800 năm trước → 8 đỉnh vỡ rải khắp Cửu Châu
- Player kế thừa đỉnh thứ 9 (Lò Luyện Đan tổ truyền, đỉnh trung lập)
- Campaign 5-act = phục hồi đỉnh thứ 9 + đối mặt Hỗn Nguyên Tâm Ma Vương
- Endgame Atlas = tìm + thu phục 8 đỉnh còn lại, mỗi đỉnh trấn giữ bởi 1 super-boss

→ Title = quest tổng thể. Đan đạo philosophy (*"luyện đan là biến ham muốn thành sức mạnh — vậy tu hành là tiêu diệt ham muốn hay học cách không bị nó điều khiển?"*) là central dramatic question — không phải decoration.

---

## Comp & differentiation

| Game | What they nail | What we add |
|---|---|---|
| **Path of Exile** | ARPG depth, league cadence, gambling DNA | Physics-driven combat, cultivation voice, friendlier scope |
| **Ballionaire** | Physics roguelike, oddly satisfying | ARPG depth, affix system, passive tree, atlas |
| **Hades** | Solo→small team, narrative + roguelike | Physics core, PoE-grade build diversity |
| **Slay the Spire** | Build expression, replayability | Physics layer, scale (150-node tree vs 75-card deck) |
| **Balatro** | Gambling + build + indie polish | Physics, narrative, cultivation aesthetic |

**Closest mental model**: *"Path of Exile gặp Ballionaire, kể bằng giọng tu chân Hán-Việt."*

---

## Production status

### Completed (Phase 0, May 2026)

- ✓ Master design spec v1.2 locked — **28 quyết định** chốt cứng
- ✓ Tech stack chốt: web-first (Vue 3 + PixiJS v8 + Rapier 2D + Nakama) — playable in browser
- ✓ Art direction locked: huyền huyễn tu chân pixel + AI-assisted pipeline
- ✓ Lore bible: 15 NPC character sheets, cosmology, 800-year history timeline, voice & tone guide
- ✓ Content data scaffolding: 78 items, 30 Cổ Vật uniques, 80 prefix + 80 suffix + 30 implicit affixes, 10 Đan Pháp maps, 150-node passive tree, 5 ascendancy classes (all data-driven CSV/JSON validated bởi Zod schemas)
- ✓ 5-Act campaign narrative spec
- ✓ Roadmap 2026-2030 với quarterly check-in template

### Next (Phase 1, Q3-Q4 2026 — **the vertical slice this funding unlocks**)

4-month prototype proving the **3 critical hypotheses**:

1. **Rapier 2D determinism cross-platform** (Mac client + Linux server) — gates replay validation / leaderboard / anti-cheat
2. **Vue + Pixi + `@vue/reactivity` bridge** — verify hybrid DOM (meta UI 80%) + Canvas (match layer 20%) work seamlessly
3. **Physics feel** — does linh lực + linh khí + linh đan composition feel "just one more pháp trận" addictive trong 30-min playtest?

Deliverable end of Phase 1:
- 1 pháp trận playable (Mộc Linh Cốc T1, ~15 phút)
- 10 linh khí types, 3 Cổ Vật uniques
- Ngũ Hành damage math + 6 elements (Kim/Mộc/Thuỷ/Hoả/Thổ/Vô Cực)
- Lò 4-slot prototype (Thân + Đỉnh + Khắc Phù + 1 Đồ Sương)
- Basic gambling (Linh Đan reroll + Phong Ấn)
- Nakama integration: login + cloud save + leaderboard submission
- 30 sprites E2E pipeline tested
- 5 SFX + 1 background music track

→ Playable web demo, internal alpha testers 10 người, decision gate to Phase 2 (Alpha content build).

---

## Roadmap to v1.0

```
2026 Q2  ── Phase 0  Pre-production (DONE)
2026 Q3  ╮
2026 Q4  ┤ Phase 1   Vertical slice prototype (4 months) ◄── funding gates this
                     ├─ 3 critical PoCs (determinism, reactive bridge, feel)
                     └─ Playable web demo + internal alpha
2027 Q1  ╮
   ...   ┤ Phase 2   Alpha — content build-out (9 months)
2027 Q3  ╯           ├─ Full 6 elements, 60 linh khí, 15 Cổ vật, 100 affixes
                     ├─ Lò 8-slot, Đan Pháp economy, 2/5 Đạo Phái
                     └─ 10 pháp trận maps, 3 boss types implemented
2027 Q4  ╮
2028 Q1  ┤ Phase 3   Beta — polish + content complete (6 months)
                     ├─ All 5 Đạo Phái, 150-node passive tree + atlas tree
                     ├─ 30 maps, all 6 boss types + Thiên Kiếp endgame
                     ├─ Public closed beta (1,000 keys), localization EN
                     └─ Balance simulator 1M-run validation
2028 Q2  ── Phase 4   v1.0 Ship — Steam launch
2028 Q3+ ── Phase 5+  Live ops (PoE league cadence, 5+ years)
```

---

## The ask

Cần fund cho **Phase 1 vertical slice (4 tháng)**. Total ask range: **$25,000 - $40,000 USD** (negotiable theo grant size hoặc publisher term sheet).

### Use of funds breakdown

| Bucket | Amount | Detail |
|---|---|---|
| **AI co-pilot tooling** | $4,800 | Claude Opus 4.7 + Sonnet 4.6 subscription · Codex CLI · 4 months × ~$1,200/mo (heavy use for content generation + balance simulation) |
| **Art commissions** | $8,000 | Polished hero sprites + environment art + UI icons (AI draft → human polish by Vietnamese illustrator) |
| **Audio direction** | $4,000 | 5 SFX library + 1 original background track (cultivation ritual orchestral + lo-fi) · sáo trúc/cổ cầm/đàn tranh instrumentation |
| **Cross-platform testing** | $1,500 | Mac + Linux + browser matrix · Rapier 2D determinism stress test on 5 hardware tiers |
| **Tooling subscriptions** | $1,200 | Nakama Heroic Cloud · Aseprite · Cloudflare Pages · domain · monitoring |
| **Solo dev stipend** | $5,500 - $20,500 | Living cost partial offset (4 months × $1,400-$5,200/mo depending on grant size) — solo dev đang dùng savings, stipend extends runway và reduces pressure to compromise scope |
| **Total** | **$25,000 - $40,000** | |

### What this funding unlocks

- **Vertical slice playable in browser** by end of Q4 2026 — demoable to publishers, streamers, Steam wishlist drivers
- **3 critical tech hypotheses validated** (determinism, reactive bridge, physics feel) → de-risks the remaining 3 years
- **Public devlog cadence** (monthly YouTube + weekly Twitter/X) — community building starts during Phase 1
- **Decision gate evidence** for Phase 2 commit: if vertical slice fails, we save publisher 3 years of risk; if it succeeds, publisher has first-look on Alpha + Beta terms

### What this funding does NOT need to cover

- **Engine licensing**: 100% open-source stack (Vue, PixiJS, Rapier, Nakama — all MIT/Apache)
- **Office / overhead**: solo dev, remote, zero overhead
- **Marketing pre-launch**: handled organically via devlog + cultivation community outreach
- **Steam fee**: $100 self-funded at Phase 4

---

## Team

**Solo developer** — Vietnamese game designer + full-stack engineer

- 10+ năm full-stack engineering (TypeScript, Go, Python, distributed systems)
- Deep player of Path of Exile (3,000+ hours), Diablo, Slay the Spire, Hades, Ballionaire
- Native Vietnamese speaker; lifelong tu tiên/xianxia reader (Kim Dung, Cổ Long, modern webnovel)
- Pre-production portfolio: 28 locked design decisions + 18,000-line design corpus authored solo in 30 days (with AI co-pilot) — *evidence the AI-augmented solo model works at design density*

**AI co-pilot** — Claude Opus 4.7 (Anthropic) primary · Claude Sonnet 4.6 for parallel tasks · Codex CLI for batch code generation

- Productivity multiplier validated on this project: design lock (normally 6 months solo) compressed to 30 days
- Balance simulation tooling: 1,000-run autorunner before each tune pass
- Content generation: AI-drafted CSVs (78 items, 80 prefix, 80 suffix) human-validated against Zod schemas

**Why this team configuration works for this project**:

- ARPG-Physics hybrid needs **one vision-holder** to keep depth coherent (committee design kills PoE-grade depth)
- Physics feel needs **fast iteration** (solo = zero sync overhead)
- Cultivation voice needs **native speaker** (translation always loses Hán-Việt nuance)
- AI handles execution volume (content draft, schema validation, balance sim) → human focuses on decisions

---

## Risk & mitigation

| Risk | Likelihood | Mitigation |
|---|---|---|
| Solo dev burnout (5-year marathon) | Medium | Quarterly retros, 1 week off per quarter, support group, public devlog accountability |
| Rapier 2D determinism fails cross-platform | Low-Med | Phase 1 PoC week 1-2 specifically gates this. Fallback Planck.js if fails. Decision before content investment |
| Physics feel doesn't click | Medium | 30-min playtest gate at end of Phase 1 with 10 testers. NO-GO option built into roadmap — rethink mechanics, not cut scope |
| Balance complexity (60+ items × affix × tree) | Medium-High | Balance simulator week 2-3, run 1,000 autoruns before each tune. Lessons from PoE 10-year balance history baked into spec |
| Cultivation theme alienates Western audience | Low | Voice authentic but mechanics universal (PoE/Ballionaire fans don't need to read webnovels) · EN localization Phase 3 · already proven by Sifu, Black Myth Wukong |
| Steam discoverability | Med | Cultivation webnovel/manhua/donghua communities + ARPG Discords + Vietnamese YouTube + Steam curators outreach starts Phase 1 devlog |
| Scope creep | Med-High | CLAUDE.md locked decisions = veto power. 28 decisions locked. Anything new = ticket → queue → defer. No feature added without brainstorm |
| AI co-pilot productivity drift | Low | Already validated on Phase 0. Quarterly check-in on AI productivity ratio. Fallback plan: extended timeline, not feature cut |

---

## Why now (window 2026-2028)

| Trend | 2026 state | Why it matters |
|---|---|---|
| **Physics roguelike validated** | Ballionaire shipped 2024, Suika 2023 viral, Balatro 2024 GotY-nominated | Audience educated, store algorithms friendly |
| **ARPG hunger** | PoE 2 EA 2024, Last Epoch 1.0 2024, Diablo 4 expansions | ARPG depth players actively scanning for next obsession |
| **Premium indie thrives** | Manor Lords, Balatro, Hades 2 — $10-25 premium dominating top sellers | Niche premium ($19.99) economically viable, không cần F2P/gacha |
| **AI co-pilot mature** | Opus 4.7 + Sonnet 4.6 + Codex CLI in 2026 | Solo + AI = team of 5 (productivity validated empirically) |
| **Cultivation crossover** | Black Myth Wukong 2024 ($1B+), Genshin/Honkai mainstream Asian fantasy | Western mainstream open to Asian mythology premium games |
| **Vietnamese game industry** | Dấu hiệu trưởng thành: VNGames Vietnam, indie scene Hà Nội/Sài Gòn | First-mover advantage cho Vietnamese-native premium |

**Window**: 2026-2028 — sau đó late-mover competitor sẽ xuất hiện. Cần ship v1.0 trong window này.

---

## Documentation map

Toàn bộ pre-production design công khai trong repo:

| Doc | Nội dung |
|---|---|
| [VISION.md](./VISION.md) | Manifesto, "không thoái chí" spirit, why Cửu Đỉnh title |
| [docs/superpowers/specs/2026-05-19-cuu-dinh-master-design.md](./docs/superpowers/specs/2026-05-19-cuu-dinh-master-design.md) | **Master design spec v1.2** — single source of truth (29 quyết định locked) |
| [docs/LORE.md](./docs/LORE.md) | Worldbuilding, 800-year history, 15 NPC bibles, voice & tone, Cửu Đỉnh 9-cauldron canonical lore |
| [docs/ONBOARDING.md](./docs/ONBOARDING.md) | Tutorial + 5-Act campaign design |
| [docs/CONTENT.md](./docs/CONTENT.md) | Catalog: linh khí, Cổ vật, đan dược, affix pools |
| [docs/COMBAT_MATH.md](./docs/COMBAT_MATH.md) | Ngũ Hành damage formulas, intensity scaling |
| [docs/PROGRESSION_CURVE.md](./docs/PROGRESSION_CURVE.md) | XP curve, drop rates, time-to-X benchmarks |
| [docs/BOSS_PATTERNS.md](./docs/BOSS_PATTERNS.md) | Attack patterns, phase design (3 boss types) |
| [docs/ECONOMY_FLOW.md](./docs/ECONOMY_FLOW.md) | Currency sources/sinks, inflation guards |
| [docs/UI_WIREFRAMES.md](./docs/UI_WIREFRAMES.md) | Per-screen wireframes + state diagrams |
| [docs/AUDIO_SPEC.md](./docs/AUDIO_SPEC.md) | Music tracks, SFX library, instrumentation |
| [docs/ART_DIRECTION.md](./docs/ART_DIRECTION.md) | Pixel art palette, environment moodboard |
| [docs/TECH_STACK.md](./docs/TECH_STACK.md) | Vue + PixiJS + Rapier + Nakama architecture |
| [docs/ROADMAP.md](./docs/ROADMAP.md) | 5-year build plan with quarterly milestones |
| [docs/ACCESSIBILITY.md](./docs/ACCESSIBILITY.md) | Colorblind, motor, cognitive accessibility |

Plus content data — single source of truth concept phase, bảng Markdown faithful trong `docs/data/`:

```
docs/data/
├── README.md              Index + enum vocabulary + quy ước bảng
├── items.md               78 linh khí definitions
├── uniques.md             30 Cổ Vật uniques
├── affixes.md             80 prefix + 80 suffix + 30 implicit
├── equipment.md           50 Lò parts
├── currency.md            20 đan dược + 30 nguyên liệu + 12 Tâm Ma modifiers
├── passive-tree.md        150 nodes, 5 Ngũ Hành starts
├── ascendancies.md        5 Đạo Phái
├── maps.md                10 pháp trận blueprints (+ ASCII geometry)
├── sets.md                3 set bonuses
└── lore.md                item-flavor + npc-dialogue (Vietnamese prose)
```

---

## Phương châm

> **Không thoái chí. Không cắt scope tính năng. Chỉ đơn giản hoá UI.**

Solo + AI co-pilot. Plan đúng + decision đúng + tooling đúng = ship được Dream Game.

---

## Contact

Đang nhận inquiries từ:

- **Indie grants**: Kowloon Nights, GameMaker fund, indie-friendly grants Southeast Asia
- **Publishers**: signature programs với deep-RPG portfolio (PoE-adjacent, cultivation-friendly)
- **Angel investors**: solo+AI thesis believers, Vietnamese game industry stakeholders
- **Devlog audience**: monthly YouTube + weekly Twitter/X cadence starts Phase 1

→ **Email**: nguyenvanduocit@gmail.com
→ **Repo**: https://github.com/nguyenvanduocit/cuu-dinh (private, access on request for due diligence)
