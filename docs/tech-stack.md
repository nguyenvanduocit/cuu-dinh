# Tech Stack — Cửu Đỉnh

> Locked 2026-05-19. **Web-first** stack. Supersedes Godot 4 decision (cùng ngày).
> Brainstorm context: `docs/superpowers/specs/2026-05-19-tech-stack-revisit.md`.

---

## TL;DR

**Vue 3 + PixiJS + Rapier 2D + Nakama** — chạy thuần web, AI co-pilot productivity tối đa, deterministic physics cho replay anti-cheat, full game backend out-of-box.

---

## Stack matrix

### Client

| Layer | Tech | Vai trò |
|---|---|---|
| Language | **TypeScript 5.6+** | Strict mode, share schemas với server |
| Build | **Vite 6** | HMR, Rolldown bundler |
| Package | **Bun 1.1+** | Workspaces monorepo |
| UI framework | **Vue 3.5 (Composition API + `<script setup>`)** | Meta UI (Forever + Map layer) |
| UI components | **shadcn-vue + Reka UI** | Headless primitives, custom tu chân/pháp trận theme |
| CSS | **Tailwind CSS v4** | Utility-first, design tokens |
| Store persistent | **Pinia 2** | Character, inventory, atlas state |
| Store game-loop | **`@vue/reactivity` standalone** | Match layer reactive store (Pixi bridge) |
| State machine | **XState v5** | Game flow (menu → match → death → ...) |
| Server cache | **@tanstack/vue-query v5** | Leaderboard, profile, server reads |
| Animation | **motion-v** | Meta UI transitions |
| Drag-drop | **vue-draggable-plus** hoặc **@atlaskit/pragmatic-drag-drop** | Inventory grid |
| Composables | **VueUse 11+** | 100+ utility composables |
| Renderer (in-game) | **PixiJS v8** | Match layer canvas, WebGL/WebGPU |
| In-game UI | **@pixi/ui** | HUD: ProgressBar, Button, ScrollBox |
| Audio | **@pixi/sound** | Match layer audio |
| Visual FX | **pixi-filters** | Glow, blur, hit effects |
| Physics | **Rapier 2D (`@dimforge/rapier2d`)** | Deterministic mode cho replay validation |
| Validation | **Zod 3** | Schemas chia sẻ client/server |
| Client SDK | **@heroiclabs/nakama-js** | Connect to Nakama |

### Server

| Layer | Tech | Vai trò |
|---|---|---|
| Game server | **Nakama 3.x** | Auth, Storage, Leaderboards, Tournaments, RPC |
| Server runtime | **Nakama TypeScript runtime (Goja)** | Custom game logic, replay validation |
| Server SDK | **@heroiclabs/nakama-runtime** | TS APIs cho RPC, hooks |
| Database | **PostgreSQL 15+** | Managed bởi Nakama, accessible qua `nk.sqlQuery()` |
| Bundle | **esbuild / rollup** | Bundle TS runtime → single .js cho Goja |

### Infrastructure

| Layer | Tech | Vai trò |
|---|---|---|
| Client hosting | **Cloudflare Pages** | Static SPA, edge CDN, free tier |
| Server hosting (dev) | **Docker Compose local** | nakama + postgres + admin console |
| Server hosting (prod) | **Heroic Cloud** ($50-200/mo SaaS) hoặc **Fly.io / Hetzner** self-host | Production deployment |
| CI/CD | **GitHub Actions** | Lint, test, build, deploy |
| Monitoring | **Sentry** (client) + **Nakama metrics** (server) | Error tracking, perf |

### Testing

| Layer | Tech |
|---|---|
| Unit | **Vitest** + **@vue/test-utils** |
| Integration | **Vitest** + **@nakama/test-helpers** custom |
| E2E | **Playwright** (web) |
| Balance simulation | Custom headless Rapier autorunner trong `tools/balance-simulator/` |

---

## Architecture principles

### 1. Hybrid DOM + Canvas boundary

| Trạng thái | Renderer | Lý do |
|---|---|---|
| Forever layer (Login, character select) | Vue + DOM + shadcn-vue | AI productivity, verifiable by code |
| Map layer (Atlas, Lò, Tree, Gambling, Inventory) | Vue + SVG + DOM | Data-driven, AI excels |
| Match layer **active** | PixiJS + Rapier + @pixi/ui | 60fps performance critical |
| Match layer **paused** (modal/death/settings) | DOM overlay trên Pixi canvas | Không cần 60fps |

**Critical rule**: 80% thời gian player ở meta UI (lò, tree, atlas, gambling) → BẮT BUỘC DOM-based. Canvas chỉ cho 20% in-game phase.

### 2. Reactive game state pattern

Vue's `@vue/reactivity` là **standalone package độc lập với DOM** (~6KB). Game state dùng được cả Pixi loop lẫn Vue templates:

```ts
// packages/shared/src/match-state.ts
import { reactive } from '@vue/reactivity'

export const matchState = reactive({
  linhDanQuality: 0,
  loTho: 100,
  comboCount: 0,
  ngHanhCharge: { kim: 0, moc: 0, thuy: 0, hoa: 0, tho: 0 }
})
```

```ts
// apps/web/src/match/hud-bridge.ts (Pixi side, in game loop)
import { watchEffect } from '@vue/reactivity'
import { matchState } from '@cuu-dinh/shared/match-state'

const hpBar = new Graphics()
watchEffect(() => {
  hpBar.clear()
  hpBar.rect(0, 0, matchState.loTho * 2, 20).fill(0xff0000)
})
```

```vue
<!-- apps/web/src/components/MetaSidebar.vue (Vue side, cùng state) -->
<script setup lang="ts">
import { matchState } from '@cuu-dinh/shared/match-state'
</script>
<template>
  <div>Linh đan quality: {{ matchState.linhDanQuality }}%</div>
</template>
```

**Một store dùng được cả hai phía.** Pattern này KHÔNG khả thi với React.

### 3. State management split

| State type | Tool | Ví dụ |
|---|---|---|
| Match-loop ephemeral (60fps) | `@vue/reactivity` standalone | HP, score, combo, banh positions, charge levels |
| Match flow (phase transitions) | XState v5 | tutorial → load → playing → paused → won → died |
| Cross-session persistent | Pinia | character, inventory, atlas progress, settings |
| Server-side cached reads | @tanstack/vue-query | leaderboard, profile, items |

### 4. Data-driven content

Items, affix, map, passive node, đan dược → **data-driven, KHÔNG hardcode**.

**Concept phase** (hiện tại): content sống trong per-entity bundle `docs/content/<category>/<id>/` — mỗi entity = 1 folder = SSOT. `design.md` chứa YAML frontmatter machine-readable + body markdown. Enum vocabulary + quy ước bảng tập trung `docs/content/enums.md`.

```
docs/content/
├── enums.md            # Shared vocabulary registry (enum + quy ước bảng)
├── style/              # Shared MJ art tokens
├── README.md            # Cấu trúc bundle + cách thêm entity
└── <category>/<id>/      # items, uniques, affixes, equipment, currency, passive-tree,
                          #   ascendancies, maps, sets, npcs, bosses, factions,
                          #   lore-entities, acts — mỗi <id>/ = design.md
                          #   + optional lore.md / prompt.md / art/
```

**Build pipeline** (implementation phase): regenerate structured JSON + Zod schema từ `docs/content/` → `packages/data/` + `packages/shared/` → loaded at app boot bằng Vite raw imports → validated bởi Zod → cached vào Pinia store.

### 5. Module boundary (apps/web)

```
apps/web/src/
├── main.ts
├── App.vue
├── router/
├── stores/           # Pinia stores (persistent state)
├── machines/         # XState machines (flow control)
├── composables/      # Vue composables
├── components/       # Meta UI (DOM/SVG)
│   ├── forever/      # Login, char select
│   ├── lo/           # Lò Luyện Đan
│   ├── tree/         # Passive Tree (SVG)
│   ├── atlas/        # Sơn Hà Đồ (SVG)
│   ├── gambling/     # 6 trụ
│   ├── inventory/
│   └── ui/           # shadcn-vue primitives
├── match/            # Match layer (Pixi)
│   ├── pixi-app.ts
│   ├── physics/      # Rapier integration
│   ├── entities/     # Banh, linh đan, linh khí
│   ├── hud/          # @pixi/ui HUD
│   ├── effects/      # Particles, screen shake
│   └── bridge.ts     # @vue/reactivity ↔ Pixi sync
├── nakama/           # nakama-js client wrapper
└── styles/           # Tailwind + global CSS
```

Cross-module reference rules:
- Components KHÔNG import trực tiếp từ `match/` (canvas isolated)
- `match/` chỉ đọc/ghi state qua `@vue/reactivity` stores trong `packages/shared/`
- Pinia stores có thể import bởi cả components và composables
- XState machines coordinate global flow

### 6. Save format

- JSON via Nakama Storage Engine
- Per-user, per-collection (character, inventory, atlas, settings)
- Versioned (`{"version": 1, ...}`) cho migration
- Auto-save sau mỗi pháp trận clear + manual save anytime
- Cloud sync miễn phí với Nakama (built-in)

### 7. Server-side replay validation (anti-cheat)

```
Client                                Server (Nakama TS runtime)
------                                --------------------------
[match clear]                         
  → record inputs + RNG seed          
  → submit via RPC                    [rpc_submit_replay]
                                        → Zod validate payload
                                        → re-run physics (Rapier headless)
                                        → check final state matches
                                        → if match: write to Leaderboard
                                        → if mismatch: log + reject
```

**Yêu cầu**: Rapier 2D phải deterministic cross-platform (Mac client + Linux server). PoC bắt buộc trước khi commit.

---

## Performance targets

| Metric | Target |
|---|---|
| FPS minimum (M1 Mac Chrome) | 60 stable |
| FPS target (M3 Mac Chrome) | 120 |
| RAM | < 500 MB |
| Initial bundle size (gzip) | < 800 KB |
| WASM (Rapier) | ~500 KB |
| Cold start (cached) | < 2s |
| Cold start (first visit) | < 5s |
| Pháp Trận load time | < 1s |
| Save/load (Nakama) | < 300ms p95 |

---

## Tooling

### Required

| Tool | Setup |
|---|---|
| **Bun 1.1+** | `curl -fsSL https://bun.sh/install \| bash` |
| **Node 20+** (fallback, một số tools) | nvm/asdf |
| **Docker Desktop** | Nakama local + Postgres |
| **VSCode + Volar** | Vue 3 LSP |
| **Git** | VCS |
| **Aseprite** ($20 one-time) hoặc **Pixelorama** (free) | Pixel art |
| **Audacity** | Audio editing |

### AI co-pilot

| Tool | Use case |
|---|---|
| Claude Code (Opus) | Primary AI co-pilot |
| Codex | Alternative |
| Gemini | Research/long-context |

### Custom tooling cần build (trong `tools/`)

1. **content-validator** — Zod-based CSV/JSON validation
2. **balance-simulator** — Headless Rapier autorunner 1000-run cho balance tuning
3. **replay-debugger** — Replay viewer/scrubber với scrub bar
4. **content-generator** — AI-assisted draft new items/affix
5. **atlas-visualizer** — SVG export atlas tree cho design review

---

## Platform plan

| Phase | Platform |
|---|---|
| Prototype | Web (Chrome dev) |
| Alpha | Web (Chrome, Safari, Firefox desktop) |
| Beta | Web + PWA install (tablet) |
| v1.0 | Web public + Steam (Tauri wrap) |
| v1.1+ | iOS/Android (PWA → native shell) |

---

## Build & CI

```yaml
# .github/workflows/ci.yml (target)
on: [push, pull_request]
jobs:
  lint:
    - bun run lint            # eslint + tsc --noEmit
  test:
    - bun test                # vitest
    - bun run content:validate
  e2e:
    - bunx playwright test
  balance:
    - bun run tools/balance-simulator --runs 100 --headless
  build:
    - bun run build           # apps/web → dist/
    - bun run build:nakama    # apps/nakama-runtime → bundle.js
  deploy-staging (on PR):
    - cloudflare pages deploy
    - nakama runtime hot-reload (staging)
```

---

## Versioning

- Semver: `MAJOR.MINOR.PATCH-PHASE`
- Phase: `alpha`, `beta`, `rc`, `stable`
- Example: `0.1.0-alpha` (vertical prototype), `1.0.0-stable` (public launch)

---

## Decision log

| Date | Decision | Rationale |
|---|---|---|
| 2026-05-19 (sáng) | ~~Godot 4 + GDScript desktop-first~~ | Superseded |
| 2026-05-19 (chiều) | **Vue 3 + PixiJS + Rapier + Nakama web-first** | 4 constraint: web deployment, AI productivity, AI canvas weakness, server from day-1 |

Future revisit triggers:
- Rapier determinism PoC fail → switch Planck.js (within stack, không re-architect)
- Vue ecosystem hit limit → re-evaluate Solid.js (low probability)
- Nakama Goja runtime hit performance ceiling → offload heavy logic sang custom Go module (within Nakama)
