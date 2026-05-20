# Cửu Đỉnh — AI Working Instructions

> ARPG-Physics hybrid game. Đạo sĩ luyện đan huyền huyễn/tu chân gặp PoE depth gặp Ballionaire physics.

## Sứ mệnh

Xây dựng **Dream Game** chuẩn ARPG depth (PoE-grade) với UI tối giản, physics-driven gameplay, fantasy huyền huyễn/tu chân thuần khiết.

**Không thoái chí. Không cắt scope tính năng. Chỉ đơn giản hoá UI.**

Solo dev + AI co-pilot = 5x productivity của human-only. Plan đúng + decision đúng = ship được mọi scope.

---

## Locked decisions (KHÔNG revisit nếu không có evidence mạnh)

Tất cả quyết định bên dưới đã lock qua brainstorm 2026-05-19. Mọi proposal đi ngược → cần debate có evidence.

| # | Decision | Locked at |
|---|---|---|
| 1 | **Theme**: Đạo sĩ luyện đan trong bối cảnh huyền huyễn/tu chân Trung Hoa fantasy: pháp trận, tông môn, bí cảnh, ngũ hành, tâm ma, thiên kiếp | 2026-05-19 / revised 2026-05-20 |
| 2 | **Genre**: ARPG + Physics + ARPG-lite (chết = mất loot map, không mất character) | 2026-05-19 |
| 3 | **Mode**: **Atlas only** (KHÔNG có Hành Trình/roguelike mode song song) | 2026-05-19 |
| 4 | **Pain level**: A (PoE-lite) — gambling fail = mất affix, KHÔNG brick item | 2026-05-19 |
| 5 | **Architecture**: 3-layer (Forever / Map / Match) | 2026-05-19 |
| 6 | **Pháp Trận size**: 15-20 phút = 5-8 ván + 1 boss | 2026-05-19 |
| 7 | **Level**: cap 100, sau đó chuyển **Cấp Vô Cực** endless (paragon-like) | 2026-05-19 |
| 8 | **Lò Luyện Đan**: 8-slot equipment (Đỉnh, Thân, Đế, Quai L/R, Nắp, Khắc Phù, Đồ Sương L/R, Dây Phong Ấn) | 2026-05-19 |
| 9 | **Passive Tree (Tinh Điểm)**: ~150 nodes, 5 Ngũ Hành starts | 2026-05-19 |
| 10 | **Ascendancy (Đạo Phái)**: 5 subclass, unlock level 30 | 2026-05-19 |
| 11 | **Atlas (Sơn Hà Đồ)**: tier T1-T16, atlas tree, unlock level 50 | 2026-05-19 |
| 12 | **6 trụ gambling**: Đan dược, Đạo Quán, Tâm Ma Mod, Phong Ấn, Pháp Trận Tử Sinh, Thiên Cơ Quẻ | 2026-05-19 / revised 2026-05-20 |
| 13 | **Path**: Full Dream Game (5 năm OK), không Sliced MVP | 2026-05-19 |
| 14 | **Banh = Linh Lực Ngũ Hành** (không phải linh đan). Linh đan = objective đang luyện trên board. | 2026-05-19 |
| 15 | **Win = linh đan đạt phẩm cấp target. Lose = linh đan bể (quality < -50%) hoặc thiên kiếp** | 2026-05-19 |
| 16 | **Damage = Ngũ Hành tương sinh/tương khắc**. Intensity scale với velocity + charge + level | 2026-05-19 |
| 17 | **Map entry economy**: Đan Pháp (required, PoE-map analogue) + 4 Nguyên Liệu (PoE-scarab analogue) + 3 Đan Dược splash (optional) | 2026-05-19 |
| 18 | **Linh đan progression**: Single linh đan progressive — 1 viên duy nhất refined liên tục qua 5-8 ván + boss của 1 pháp trận | 2026-05-19 |
| 19 | **Lò Thọ demoted** to secondary mechanic — fail state chính là **bể linh đan**, không phải Lò chết | 2026-05-19 |
| 20 | **3 boss types**: Dị Tượng (T1-T8), Tâm Ma (T6-T13), Thiên Kiếp (T14-T16 + endgame) | 2026-05-19 |
| 21 | **Onboarding 2 phase**: Tutorial cứng 3 pháp trận (1h) + Progressive **5 Acts** (~30-40h) | 2026-05-19 |
| 22 | **Act = illustrated node map** (Slay-the-Spire style). Per-act ≤ 2 systems unlock. 10-12 nodes incl. 1-2 optional side branches | 2026-05-19 |
| 23 | **Map Device "Sơn Hà Đồ Lệnh"** — drop end Act 5, bridge campaign ↔ atlas. Compose Đan Pháp + Nguyên Liệu + Đan Dược + Tâm Ma → emergent bí cảnh | 2026-05-19 |
| 24 | **Bí Cảnh = emergent composition** (KHÔNG enum types). Player composes — 180K+ combinations possible | 2026-05-19 |
| 25 | **Đan Pháp 10 variants**: Tiêu Chuẩn / Tử Sinh / Hỗn Nguyên / Thiên Kiếp / Tâm Ma / Cổ Đan Lò / Long Cung / Cửu Tiêu / Diêm Phủ / Vô Cực | 2026-05-19 |
| 26 | **Tech stack web-first**: Vue 3 + PixiJS v8 + Rapier 2D + Nakama + Vite + Bun monorepo. Hybrid DOM (meta UI 80%) + Canvas (match layer 20%). Supersedes Godot 4 decision cùng ngày | 2026-05-19 |
| 27 | **Code-level identifiers → English**: class/enum/file names, data file names, all data ID slugs, variable/function names → English (`Item`, `mystic-bell`, `furnaceHp`). Display names (`ten`) + lore prose stay Vietnamese/Hán-Việt. Supersedes Pinyin-Việt convention. Tu chân fantasy preserved at presentation layer | 2026-05-20 |
| 28 | **Game title = "Cửu Đỉnh"** (Nine Cauldrons). Working title "Lư Đan" retired. Lore weave: 9 đỉnh thượng cổ rèn bởi Cao Tổ + 7 đan sư + Lò Thần. 8 đỉnh vỡ rải khắp atlas sau Cửu Chuyển thất bại; đỉnh thứ 9 (trung lập) sống sót = Lò player kế thừa. Game title = quest tổng thể: tái hợp đủ 9 đỉnh. Package npm scope `@cuu-dinh/*`, GitHub repo `cuu-dinh` | 2026-05-20 |
| 29 | **Concept-phase content authoring**: mỗi game entity = 1 folder `docs/content/<category>/<id>/` chứa `design.md` (YAML frontmatter machine-readable + body markdown) + optional `lore.md`/`prompt.md`/`art/`. Per-entity bundle = single source of truth của concept phase; cross-entity table view = derived. Enum vocabulary + quy ước bảng tập trung `docs/content/_enums.md`. Structured JSON + Zod schema regenerate từ `docs/content/` khi vào implementation phase. Design docs = rationale + link sang `docs/content/`. Spec: `docs/superpowers/specs/2026-05-20-per-entity-content-bundle-design.md`. Tech stack #26 không đổi | 2026-05-20 (revised lần 2 cùng ngày) |

Full context: `docs/superpowers/specs/2026-05-19-cuu-dinh-master-design.md` + `docs/onboarding.md` + `docs/superpowers/specs/2026-05-19-tech-stack-revisit.md` + `docs/superpowers/specs/2026-05-20-naming-convention-pivot.md`.

---

## ❌ NEVER do

- Cắt scope tính năng để "dễ làm hơn". Đây là Dream Game.
- Đề xuất "đơn giản hoá feature X". Chỉ đơn giản hoá UI, không đơn giản hoá tính năng.
- Workaround thay vì root fix. Tech debt giết game-design dài hạn.
- Skip playtest. AI viết code nhanh nhưng game feel phải human-tested.
- Làm loãng fantasy tu chân **ở presentation layer**. Display name (`ten`), lore prose, NPC dialogue, art, audio, UI copy → Hán-Việt/huyền huyễn nhất quán. Western fallback ở player-facing text ("Mage" thay vì "Đạo sĩ") → BAN.
- Hardcode item/affix/map/passive data. Concept phase: content sống trong per-entity bundle `docs/content/<category>/<id>/design.md` (single source of truth). Implementation phase: regenerate structured JSON + Zod schema từ `docs/content/`.
- Tight coupling giữa systems. Mỗi system isolated, communicate qua `@vue/reactivity` stores hoặc Pinia actions.
- Dùng tiếng Việt cho **code-level identifier** (class/enum/file/variable/ID slug). Code identifier → English (`Item`, `bronze-bell`, `furnaceHp`). Pinyin-Việt slug ("chuong-dong") → BAN trong identifier mới.
- Thêm feature ngoài locked decision list mà không qua brainstorm.

---

## ✅ ALWAYS do

- Lock decision trước khi code. Decision không lock = không code.
- Concept-phase content (items/affix/map/passive node/đan dược) sống trong per-entity bundle `docs/content/<category>/<id>/` — `design.md` (YAML frontmatter + body markdown) + optional `lore.md`/`prompt.md`/`art/`. Enum vocabulary + quy ước bảng tập trung `docs/content/_enums.md` (thay vai trò Zod). Structured JSON + Zod schema regenerate khi vào implementation phase.
- Tu chân authenticity ở presentation layer: display name (`ten`), lore, dialogue đúng chất pháp bảo/tông môn/bí cảnh/ngũ hành/tâm ma/thiên kiếp. Code identifier dùng English equivalent theo dictionary trong `docs/superpowers/specs/2026-05-20-naming-convention-pivot.md`.
- AI-friendly architecture: rõ ràng, modular, decoupled. Mỗi file < 300 dòng. Mỗi class 1 responsibility.
- Comment "WHY" cho decision phi đối xứng (vì sao Phong Ấn 25% mà không 30%).
- Simulation tooling cho balancing: write autorunner 1000-run trước khi tune.
- Test mỗi feature isolation trước khi tích hợp.
- Update locked-decisions table khi có quyết định mới.

---

## Tech Stack (locked)

**Web-first** — chạy thuần trình duyệt, không native binary. Brainstorm context: `docs/superpowers/specs/2026-05-19-tech-stack-revisit.md`.

**Client**
- **Language**: TypeScript 5.6+ strict
- **Build**: Vite 6 + Bun 1.1+ (workspaces monorepo)
- **Meta UI** (Forever + Map layer, 80% gameplay time): **Vue 3.5 Composition API** + Tailwind v4 + shadcn-vue + Reka UI
- **State**: Pinia (persistent) + `@vue/reactivity` standalone (game-loop reactive store) + XState v5 (flow machine) + @tanstack/vue-query (server cache)
- **Match layer canvas** (in-game 20%): **PixiJS v8** + @pixi/ui + @pixi/sound + pixi-filters
- **Physics**: **Rapier 2D** (`@dimforge/rapier2d`) — deterministic mode cho replay validation
- **Validation**: Zod (shared client/server schemas trong `packages/shared/`)

**Server**
- **Game backend**: **Nakama 3.x** — Auth + Storage Engine + Leaderboards + Tournaments + RPC + Realtime (future). Self-host Docker dev → Heroic Cloud/Fly.io prod
- **Custom logic**: Nakama TypeScript runtime (Goja) — replay validation, leaderboard logic, telemetry
- **Database**: PostgreSQL 15+ (managed bởi Nakama, accessible qua `nk.sqlQuery()`)

**Infra**
- **Client hosting**: Cloudflare Pages
- **Server hosting**: Docker Compose (dev) → Heroic Cloud HOẶC Fly.io self-host (prod)
- **CI**: GitHub Actions (lint, vitest, playwright, balance sim, build, deploy)

**Asset pipeline**
- **Art**: AI draft (Stable Diffusion / Midjourney) → Aseprite/Pixelorama polish
- **Audio**: Suno AI / royalty-free tu chân/ritual fantasy → Audacity polish

Chi tiết: `docs/tech-stack.md`.

### Reactive bridge Vue ↔ Pixi (critical pattern)

Vue 3 tách `@vue/reactivity` thành standalone package độc lập DOM (~6KB). Một store dùng được cả Pixi loop lẫn Vue templates:

```ts
// packages/shared/src/match-state.ts
import { reactive } from '@vue/reactivity'
export const matchState = reactive({ loTho: 100, linhDanQuality: 0 })

// apps/web/src/match/hud-bridge.ts (Pixi side)
import { watchEffect } from '@vue/reactivity'
import { matchState } from '@cuu-dinh/shared/match-state'
watchEffect(() => { hpBar.clear().rect(0, 0, matchState.loTho * 2, 20).fill(0xff0000) })

// apps/web/src/components/MetaSidebar.vue (Vue side, cùng state)
<template><div>HP: {{ matchState.loTho }}</div></template>
```

KHÔNG dùng React vì `useState` gắn render tree, không standalone được.

---

## File structure

Hiện trạng `2026-05-20`. Block `apps/`, `packages/`, `infra/`, `.github/` là **kế hoạch** (tạo khi vào implement phase) — phần còn lại đã tồn tại.

```
lu-dan-game/
├── CLAUDE.md                       # YOU ARE HERE
├── README.md                       # Project intro
├── VISION.md                       # Manifesto, không thoái chí spirit
├── package.json                    # Bun workspaces root (apps/* tools/*)
├── tsconfig.base.json              # Shared TS compiler options (mọi tsconfig extends)
├── bun.lock                        # Lockfile — committed cho reproducible install
├── .gitignore
├── docs/
│   ├── superpowers/specs/
│   │   ├── 2026-05-19-cuu-dinh-master-design.md    # ⭐ Master spec
│   │   ├── 2026-05-19-tech-stack-revisit.md        # ⭐ Web stack decision
│   │   └── 2026-05-20-naming-convention-pivot.md   # ⭐ English-ID dictionary
│   ├── content/                    # ⭐ Per-entity content bundle — SSOT concept phase
│   │   ├── _enums.md                # Shared vocabulary registry (enum + quy ước bảng)
│   │   ├── _style/                 # Shared MJ art tokens (convention, palette, element/rarity)
│   │   ├── README.md               # Cấu trúc bundle + cách thêm entity
│   │   └── <category>/<id>/         # items, uniques, affixes, equipment, currency, passive-tree,
│   │                               #   ascendancies, maps, sets, npcs, bosses, factions,
│   │                               #   lore-entities, acts — mỗi <id>/ = design.md
│   │                               #   + optional lore.md / prompt.md / art/
│   ├── art-prompts/                # MJ v6 concept-art prompt — 3 category chờ migrate
│   │   └── <category>/             # environments, screens, effects
│   ├── art/generated/screens/      # Ảnh đã gen chờ category screens
│   └── *.md                        # Design docs (rationale + link → content/): tech-stack, art-direction, roadmap,
│                                   #   onboarding, content, lore, combat-math, economy-flow,
│                                   #   passive-tree-design, map-layouts, boss-patterns,
│                                   #   progression-curve, act-narrative, tutorial-script,
│                                   #   ui-wireframes, audio-spec, accessibility
├── apps/                           # (kế hoạch)
│   ├── web/                        # Vue + Pixi client
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   ├── index.html
│   │   └── src/
│   │       ├── main.ts
│   │       ├── App.vue
│   │       ├── router/
│   │       ├── stores/             # Pinia (persistent state)
│   │       ├── machines/           # XState (flow control)
│   │       ├── composables/        # Vue composables
│   │       ├── components/         # Meta UI (DOM + SVG)
│   │       │   ├── forever/        # Login, char select
│   │       │   ├── lo/             # Lò Luyện Đan
│   │       │   ├── tree/           # Passive Tree (SVG)
│   │       │   ├── atlas/          # Sơn Hà Đồ (SVG)
│   │       │   ├── gambling/       # 6 trụ
│   │       │   ├── inventory/
│   │       │   └── ui/             # shadcn-vue primitives
│   │       ├── match/              # Match layer (Pixi + Rapier)
│   │       │   ├── pixi-app.ts
│   │       │   ├── physics/        # Rapier integration
│   │       │   ├── entities/       # Banh, linh đan, linh khí
│   │       │   ├── hud/            # @pixi/ui HUD
│   │       │   ├── effects/        # Particles, screen shake
│   │       │   └── bridge.ts       # @vue/reactivity ↔ Pixi sync
│   │       ├── nakama/             # nakama-js client wrapper
│   │       └── styles/             # Tailwind + global CSS
│   │
│   └── nakama-runtime/             # Server-side TS (bundle xuống Goja)
│       ├── package.json
│       ├── rollup.config.ts
│       └── src/
│           ├── main.ts             # Entry — register RPCs, hooks
│           ├── rpc/                # RPC functions
│           ├── hooks/              # Before/after hooks
│           └── storage/            # Storage Engine helpers
│
├── packages/                       # (kế hoạch) Recreate ở implementation phase
│   └── shared/                     # Client + server cùng import — Zod schemas regenerate
│       └── src/                    #   từ docs/content/, + match-state (@vue/reactivity), constants, types
│
├── tools/                          # (kế hoạch) Dev tooling — mỗi tool là 1 workspace member
│   ├── balance-simulator/          # Headless Rapier autorunner 1000-run
│   ├── content-generator/          # AI-assisted content draft
│   └── replay-debugger/            # Replay viewer/scrubber
│
├── infra/                          # (kế hoạch) Deployment configs
│   ├── docker-compose.yml          # Local Nakama + Postgres
│   ├── nakama-config.yml
│   └── fly.toml                    # Production hosting
│
└── .github/workflows/              # (kế hoạch) CI
```

---

## Conventions

- File names: kebab-case English (`item.ts`, `furnace.vue`, `corruption-mod.ts`)
- Class names / Vue components: PascalCase English (`Item`, `MapBlueprint`, `Ascendancy`). Note: pháp trận schema class = `MapBlueprint` (avoids JS `Map` collision)
- Variables / functions / composables: camelCase English (`furnaceHp`, `applySeal()`, `useFurnace()`)
- Constants: UPPER_SNAKE_CASE English (`MAX_ELIXIR_QUALITY`, `SEAL_FAIL_RATE`)
- Data ID slugs: kebab-case English per dictionary (`bronze-bell`, `white-tiger-sword`, `standard`)
- Display name field (`ten`): Vietnamese full diacritics, NFC-normalised — player-facing
- TypeScript: strict mode, `noUncheckedIndexedAccess`, no `any` (use `unknown` + Zod parse)
- Vue: Composition API + `<script setup lang="ts">` only. KHÔNG dùng Options API.
- CSS: Tailwind utility-first. Custom CSS chỉ khi cần custom tu chân/pháp trận animation/pattern.
- Vietnamese/Hán-Việt text in game (display name, lore, dialogue, UI copy): **full diacritics**, không ASCII fallback
- Commit message: imperative, tiếng Việt OK ("Thêm hệ thống Seal")
- Comments: WHY > WHAT. Tiếng Việt OK cho domain logic.
- Code/identifier: **English** theo terminology dictionary (`docs/superpowers/specs/2026-05-20-naming-convention-pivot.md`). Player-facing text → Vietnamese.

---

## Working modes

- **Design phase**: edit `docs/`. Lock decision vào table trên.
- **Content phase**: edit per-entity bundle `docs/content/<category>/<id>/` — `design.md` (YAML frontmatter + body), optional `lore.md`/`prompt.md`/`art/`. AI có thể generate batch. Enum vocabulary + quy ước bảng ở `docs/content/_enums.md` là contract. Structured JSON + Zod regenerate ở implementation phase.
- **Implement phase**: code TS trong `apps/web/` (client) hoặc `apps/nakama-runtime/` (server). Mỗi feature 1 PR.
- **Polish phase**: playtest + tune. Balance simulator (headless Rapier autorunner trong `tools/`) chạy auto trước khi tune manual.

---

## AI co-pilot rules

Khi AI làm việc trên codebase này:

1. **Read CLAUDE.md + master spec đầu mỗi session.** Decision không lock ≠ free hand.
2. **Propose trước, code sau.** Feature lớn → diff proposal → user OK → code.
3. **Data-driven mọi thứ.** Nếu cần hardcode → flag là tech debt, mở TODO.
4. **Player-facing Hán-Việt names**. Không tự ý dịch sang English.
5. **Test isolated.** Mỗi system isolated, test trước khi tích hợp.
6. **Update CLAUDE.md.** Có decision mới → cập nhật locked table.
7. **Reference master spec.** Bất kỳ chỗ nào ambiguous → check master spec trước khi hỏi user.

---

## Current phase

**Pre-production** (2026-05). Design lock đã hoàn tất 29 decisions (game design + tech stack web-first + concept-phase content authoring).

Next milestone: **Vertical prototype** (4-6 tuần) — 1 pháp trận, 10 linh khí, basic gambling (Linh Đan + Phong Ấn), Lò 4-slot, login + cloud save + leaderboard submission. Mục tiêu: prove physics feel + item synergy + Nakama integration.

**Pre-prototype PoC bắt buộc** (week 1-2):
1. **Rapier 2D determinism** cross-platform (Mac client + Linux server) — gate cho replay validation. Fail → fallback Planck.js.
2. **Vue + Pixi + `@vue/reactivity` bridge** — verify reactive sync work, không leak listeners.
3. **Nakama TS runtime (Goja)** — verify Zod validation + RPC pattern work.

Sau prototype OK → expand theo `docs/roadmap.md`.
