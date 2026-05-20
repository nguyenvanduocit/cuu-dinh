# Roadmap — Cửu Đỉnh

> Path A — Full Dream Game. Target: ship v1.0 trong **3-4 năm**, sau đó Live Ops 5+ năm.

---

## Tổng quan

```
2026                2027                2028          2029           2030+
│                    │                    │            │             │
├─ Phase 0           ├─ Phase 2           │            │             │
│  Pre-prod (2 tháng)│  Alpha             │            │             │
│                    │                    │            │             │
├─ Phase 1           ├─ Phase 3           ├─ Phase 4   │             │
│  Prototype (4 tháng)│  Beta             │  v1.0 ship │             │
│                    │                    │            │             │
                                                       ├─ Phase 5+   │
                                                       │  Live Ops 5+ years
```

---

## Phase 0: Pre-production (✅ DONE 2026-05)

**Duration**: 2 tháng (đã 90% xong, chỉ thiếu prototype kick-off)
**Outputs**:
- ✅ Master design spec v1.1 locked (20 decisions)
- ✅ Tech stack quyết (Godot 4 + GDScript)
- ✅ Art direction locked (huyền huyễn tu chân pixel art)
- ✅ Roadmap (this doc)
- ⬜ Godot project scaffolding (next step)
- ⬜ Asset pipeline test (first 10 sprites E2E)

---

## Phase 1: Prototype — "Vertical Slice" (2026-06 → 2026-09)

**Duration**: 4 tháng
**Goal**: Prove core gameplay loop feels right. KHÔNG ship-quality, KHÔNG content-complete.

### Scope

- ✅ 1 pháp trận playable (Mộc Linh Cốc T1)
- ✅ Banh physics + linh khí collision + linh đan progression
- ✅ Ngũ Hành damage math (Kim/Mộc/Thuỷ/Hoả/Thổ + Vô Cực)
- ✅ 10 linh khí (2 per element)
- ✅ 3 Cổ vật prototype
- ✅ Lò 4-slot (Thân + Đỉnh + Khắc Phù + 1 Đồ Sương)
- ✅ Basic gambling: Linh Đan reroll + Phong Ấn
- ✅ Win/lose state (linh đan reach target / bể)
- ✅ Visual: 30 sprites E2E pipeline tested
- ✅ Audio: 5 SFX + 1 background music track
- ❌ Skip: passive tree, ascendancy, atlas, full đan pháp economy

### Milestones

| Week | Goal |
|---|---|
| W1-2 | Godot project setup, physics test, banh spawn loop |
| W3-4 | Linh khí placement, collision, basic affix system |
| W5-6 | Linh đan as objective, quality progression, win/lose |
| W7-8 | Ngũ Hành damage math, element conversion via linh khí |
| W9-10 | Phong Ấn gambling, Linh Đan reroll, basic stash |
| W11-12 | Art pass: 30 sprites, 1 environment, UI polish |
| W13-14 | Audio integration, juice (particles, screen shake, sound) |
| W15-16 | Playtest internally (10 sessions), tune feel |

### Success criteria
- "Just one more pháp trận" feeling after 30 min play
- Core loop completable solo in 15-20 min
- Element strategy decisions feel meaningful
- AI co-pilot productivity validated: prove can ship at 5x human-only speed

### Decision gate at end of Phase 1
- **GO**: feel achieved, continue to Phase 2
- **NO-GO**: feel broken, rethink core mechanics (BUT KHÔNG cắt scope ARPG depth)

---

## Phase 2: Alpha — Content Build-out (2026-10 → 2027-06)

**Duration**: 9 tháng
**Goal**: All systems implemented, content thưa thớt.

### Scope

- ✅ Full physics + all 6 elements
- ✅ 60 linh khí + 15 Cổ vật + 3 sets
- ✅ 100 affix prefix/suffix (50 of each side)
- ✅ Lò full 8-slot
- ✅ 5 Đan Pháp tiers (T1-T5)
- ✅ 10 Nguyên Liệu
- ✅ 6 trụ gambling: tất cả implemented (minus Pháp Trận Tử Sinh dungeon)
- ✅ Passive tree 50 nodes (initial)
- ✅ 2 Đạo Phái (out of 5)
- ✅ 10 pháp trận maps
- ✅ 3 boss types implemented
- ✅ Full crafting bench
- ✅ Save/load, settings menu
- ✅ Steam integration (achievements, cloud save)

### Milestones

| Month | Goal |
|---|---|
| 1 | Content tooling: CSV → TRES pipeline, balance simulator MVP |
| 2-3 | Linh khí batch 1 (30 items), affix system stress test |
| 4 | Lò full 8-slot, equipment crafting |
| 5 | Passive tree topology + 30 nodes |
| 6 | 1st Đạo Phái + ascendancy quest |
| 7 | Đan Pháp + Nguyên Liệu economy |
| 8 | 5 pháp trận maps + boss type 1 (Dị Tượng) |
| 9 | Internal alpha test, 3-month playthrough by friends |

### Success criteria
- Friends play 20+ hours alpha without forced stop
- Build diversity emerges naturally (3+ distinct builds reported)
- 90% content data-driven (only physics/render code is hardcoded)

---

## Phase 3: Beta — Polish & Tune (2027-07 → 2027-12)

**Duration**: 6 tháng
**Goal**: Content complete for v1.0, deep tuning, public Beta testing.

### Scope

- ✅ All 5 Đạo Phái
- ✅ Passive tree 150 nodes
- ✅ Atlas tree 150 nodes
- ✅ 30 pháp trận maps
- ✅ All 6 boss types + Thiên Kiếp endgame
- ✅ Đan Pháp T1-T16
- ✅ 30 Nguyên Liệu
- ✅ Full audio (15 tracks + 50 SFX)
- ✅ All UI screens polished
- ✅ Tutorial + onboarding
- ✅ Localization English (alongside Vietnamese)

### Milestones

| Month | Goal |
|---|---|
| 1 | Atlas tree topology + 50 first nodes |
| 2 | Remaining 3 Đạo Phái |
| 3 | All 30 maps content-complete |
| 4 | Tutorial + onboarding flow |
| 5 | Public closed beta (1000 keys) |
| 6 | Beta feedback iteration, balance pass |

### Success criteria
- 1000 beta players, NPS > 40
- 80%+ players complete tutorial
- 60%+ reach level 30
- 10%+ reach level 50
- No game-breaking bugs in last 4 weeks
- Balance simulator metrics on target

---

## Phase 4: v1.0 Ship (2028-01 → 2028-04)

**Duration**: 3-4 tháng release prep
**Goal**: Steam launch.

### Scope

- Marketing materials (trailer, store page, social)
- Press kit
- Final localization (VI + EN, possibly CN/JP if scope allows)
- Steam page setup, demo (3 maps free)
- Day 1 patch ready
- Community Discord setup
- Influencer outreach (cultivation/xianxia communities, Vietnamese YouTube, Steam curators)

### Launch criteria
- Zero P0 bugs
- 60 FPS stable on baseline hardware (M1 Mac, mid-range PC)
- All content from Beta validated
- Localization 100%
- Tutorial 95%+ completion rate

### Pricing

- **$19.99 USD premium**, 1 lần buy
- **VN regional: ₫299,000** (steep discount, captures local market)
- **Demo: free, 3 maps T1-T2**

---

## Phase 5+: Live Ops (2028-05 → 2030+)

**Duration**: 5+ năm minimum
**Cadence**: Như PoE league model.

### Quarterly content drops (90-day cadence)

Mỗi quarter:
- 1 themed league (PoE-style): adds new mechanic, runs ~3 months, eventually retired or merged to core
- +5 linh khí, +2 Cổ vật, +5 affix
- Balance patch
- 1-2 new Đan Pháp variants
- 1-2 new Nguyên Liệu

### Major content patches (every 6-12 months)

- New region (1 entire atlas region, ~30 atlas nodes, ~10 maps)
- 1-2 new Đạo Phái (post v1.0, expand from 5 to 7)
- New boss type
- New endgame challenge (e.g., "Pháp Trận Tử Sinh" Sanctum-like was deferred from v1.0, ship as v1.3)
- Cosmetic store (post-launch only — no pay-to-win)

### Sample 5-year live ops plan

| Time | Content |
|---|---|
| v1.1 (Q2 2028) | League 1: "Khí Vận Thiên Cơ" — fortune-telling mechanic, +new đan dược type |
| v1.2 (Q3 2028) | League 2: "Hồn Đan" — copy-affix mechanic added |
| v1.3 (Q4 2028) | Major: Pháp Trận Tử Sinh dungeon (Sanctum-like) |
| v1.5 (Q2 2029) | Major: 1 new atlas region "Hoả Long Sào" |
| v1.7 (Q4 2029) | Major: 2 new Đạo Phái (Đạo Phái 6 + 7) |
| v2.0 (Q2 2030) | Major: Online leaderboard + async co-op |
| v2.x (Q4 2030+) | Continued league cadence, expansion potential |

---

## Bottlenecks & Mitigations

| Bottleneck | Mitigation |
|---|---|
| Balance complexity (60+ items × affix × tree) | Build simulator week 2-3 of prototype, run nightly |
| Art pipeline volume (~600 sprites) | AI-first draft, manual polish only top picks |
| Solo dev burnout (5-year marathon) | Quarterly retros, 1 week off per quarter, support group |
| Scope creep | CLAUDE.md locked decisions = veto power. Anything new = ticket, queue, defer |
| Steam discoverability | Xianxia/cultivation fantasy hook → webnovel/manhua/donghua communities, ARPG Discords, Steam curators |
| Tech debt | Quarterly refactor sprint, 1 week of cleanup per quarter |

---

## Resource budget

### Time
- **Solo full-time** equivalent — assume 30-40 hrs/week sustainable
- Phase 1: 4 months × 40 hrs = 640 hrs
- Phase 2: 9 months × 40 hrs = 1440 hrs
- Phase 3: 6 months × 40 hrs = 960 hrs
- Phase 4: 4 months × 30 hrs = 480 hrs (prep, lighter coding)
- **Total to v1.0**: ~3,500 hrs

### Money (out-of-pocket estimate)
- Aseprite license: $20
- Suno AI / royalty-free music: $200
- Steam Direct fee: $100
- Godot engine: $0
- Domain + website: $50/year
- AI co-pilot (Claude Code etc.): subscriptions ~$50-200/month
- **Total cash to v1.0**: ~$5,000-10,000 (depending on AI subscription scaling)

### Revenue projection
- Conservative: 5K copies × $15 net = $75K (5-year LTV)
- Mid: 20K copies × $15 = $300K
- Optimistic (PoE-fans crossover): 100K copies × $15 = $1.5M

---

## Quarterly check-in template

Mỗi quarter, ask:
1. **On track**: Hit phase milestones? % deviation?
2. **Health**: Energy level? Burnout risk?
3. **Vision drift**: Still aligned với D1-D20 locked decisions?
4. **Scope additions**: Anything sneaked in? Cut if not aligned.
5. **AI productivity**: Is AI co-pilot still 5x? Or workflow drifting toward 2x?

If 2+ red flags → take 1-week pause, retro, plan.

---

## Decision log

- **2026-05-19**: Roadmap v1 locked. Phase 1 starts 2026-06.
