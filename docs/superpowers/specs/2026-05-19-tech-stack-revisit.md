# Tech Stack Revisit — 2026-05-19

> **Status**: APPROVED 2026-05-19. Supersedes Godot 4 + GDScript decision trong CLAUDE.md (decision row "Tech Stack (locked)" cũ).
>
> **TL;DR**: Chuyển từ **Godot 4 + GDScript desktop-first** → **Web-first stack: Vue 3 + PixiJS + Rapier 2D + Nakama + Vite + Bun monorepo**.

---

## 1. Tại sao revisit

Quyết định Godot 4 lock ngày 2026-05-19 sáng được brainstorm lại cùng ngày sau khi user nêu 4 constraint thật sự (không có trong context lúc lock Godot lần đầu):

1. **Web là deployment target ưu tiên** — playtest viral qua URL, không downloads, instant share
2. **AI co-pilot productivity là multiplier cốt lõi** (solo dev 5 năm scope) — TypeScript training data >> GDScript
3. **AI làm UI canvas-based rất tệ** — không có visual feedback → blind iteration → 5-10x slower
4. **Server từ tuần 1** với scope: Account + Cloud save + Leaderboard Cấp Vô Cực

4 constraint này đủ mạnh để override decision Godot. Decision cũ không sai trong context cũ; sai vì context cũ thiếu.

---

## 2. Decision chính thức

| Layer | Tech | Phiên bản | Confidence |
|---|---|---|---|
| **Language** | TypeScript | 5.6+ | HIGH |
| **Build** | Vite | 6.x | HIGH |
| **Package manager / monorepo** | Bun workspaces | 1.1+ | HIGH |
| **Meta UI framework** | Vue 3 | 3.5+ (Composition API + `<script setup>`) | HIGH |
| **UI component library** | shadcn-vue + Reka UI | latest | HIGH |
| **CSS** | Tailwind CSS | v4 | HIGH |
| **Store (persistent)** | Pinia | 2.x | HIGH |
| **Store (game loop)** | `@vue/reactivity` standalone | (Vue 3.5) | HIGH |
| **State machine** | XState | v5 | HIGH |
| **Server state cache** | @tanstack/vue-query | v5 | HIGH |
| **Animation (meta UI)** | motion-v | latest | MEDIUM |
| **Drag-drop** | vue-draggable-plus / @atlaskit/pragmatic-drag-drop | latest | MEDIUM |
| **Composables util** | VueUse | 11+ | HIGH |
| **Renderer (in-game)** | PixiJS | v8 | HIGH |
| **In-game UI lib** | @pixi/ui | latest | HIGH |
| **Audio (in-game)** | @pixi/sound | latest | HIGH |
| **Visual FX** | pixi-filters | latest | HIGH |
| **Physics** | Rapier 2D (`@dimforge/rapier2d`) | latest | HIGH (with PoC) |
| **Schema validation** | Zod | 3.x | HIGH |
| **Game server** | Nakama | 3.x | HIGH |
| **Server runtime** | Nakama TypeScript runtime (Goja) | bundled với Nakama | MEDIUM |
| **Database** | PostgreSQL (managed bởi Nakama) | 15+ | HIGH |
| **Client SDK** | @heroiclabs/nakama-js | latest | HIGH |
| **Server runtime SDK** | @heroiclabs/nakama-runtime | latest | HIGH |
| **Client hosting** | Cloudflare Pages | — | MEDIUM |
| **Server hosting** | Heroic Cloud HOẶC Fly.io / Hetzner self-host | — | MEDIUM |
| **Testing** | Vitest + @vue/test-utils | latest | HIGH |
| **E2E** | Playwright | latest | HIGH |
| **CI** | GitHub Actions | — | HIGH |

---

## 3. Architecture — Hybrid DOM + Canvas

### 3.1 Boundary cứng

| Trạng thái game | Renderer | State source | Lý do |
|---|---|---|---|
| Forever layer (Login, character select, account) | Vue + DOM + shadcn-vue | Pinia + nakama-js | AI productivity, DOM verifiable by code |
| Map layer (Atlas Sơn Hà Đồ, Lò Luyện Đan, Passive Tree, 6 trụ Gambling, Inventory, Trade) | Vue + SVG + DOM | Pinia | Data-driven, AI excels at TSX + Tailwind |
| Match layer **active** (combat đang chạy) | PixiJS + Rapier + @pixi/ui | `@vue/reactivity` standalone reactive store | 60fps performance critical |
| Match layer **paused** (modal, death screen, settings) | DOM overlay trên Pixi canvas | Pinia + @vue/reactivity | AI productivity, không cần 60fps |

### 3.2 Reactive bridge Vue ↔ Pixi

Vue 3 tách `@vue/reactivity` thành standalone package độc lập với DOM (~6KB). Game state dùng `reactive()`/`ref()`/`watchEffect()` trong Pixi loop **mà không cần render Vue components**.

```ts
// packages/shared/src/match-state.ts
import { reactive } from '@vue/reactivity'

export const matchState = reactive({
  linhDanQuality: 0,
  loTho: 100,
  comboCount: 0,
  ngHanhCharge: { kim: 0, moc: 0, thuy: 0, hoa: 0, tho: 0 }
})

// apps/web/src/match/hud-bridge.ts (Pixi side)
import { watchEffect } from '@vue/reactivity'
import { matchState } from '@lu-dan/shared/match-state'

const hpBar = new Graphics()
watchEffect(() => {
  hpBar.clear()
  hpBar.rect(0, 0, matchState.loTho * 2, 20).fill(0xff0000)
})

// apps/web/src/components/MetaSidebar.vue (Vue side, cùng state)
<script setup>
import { matchState } from '@lu-dan/shared/match-state'
</script>
<template>
  <div>Quality: {{ matchState.linhDanQuality }}%</div>
</template>
```

**1 store duy nhất** dùng được cả ở Pixi game loop lẫn Vue template. Đây là pattern KHÔNG khả thi với React (useState gắn với render tree, không standalone).

### 3.3 State management split

| State type | Tool | Ví dụ |
|---|---|---|
| Match-loop ephemeral (60fps reactive) | `@vue/reactivity` standalone | HP, score, combo, banh positions |
| Match flow (phase transitions) | XState v5 | tutorial → load → playing → paused → won → died |
| Cross-session persistent | Pinia | character, inventory, atlas progress, settings |
| Server cache | @tanstack/vue-query | leaderboard, profile, items from Nakama |

---

## 4. Alternatives được cân nhắc và loại

### 4.1 Engine/Framework alternatives

| Option | Lý do loại |
|---|---|
| **Godot 4 + GDScript** (previous lock) | Web export bundle 25-40MB WASM, Safari/iOS rendering glitch, AI productivity GDScript << TypeScript |
| **Godot 4 + C#** | Mono web export thậm chí lớn hơn (~40-60MB), GC pause spike |
| **Unity 6** | 5% rev royalty > $200K, 3D-bias, 2024 Runtime Fee fiasco trust issues |
| **Bevy + WASM** | Rust learning curve giết solo productivity, ECS-only opinionated |
| **Phaser 3** | Bundled Matter/Arcade physics conflict Rapier, opinionated architecture buộc fight framework, UI vẫn canvas-based |
| **Excalibur.js** | TS-first nhưng community nhỏ, ít AI training data |
| **Cocos Creator** | Visual editor proprietary, AI training data thấp |
| **Construct 3** | Visual programming → AI co-pilot không apply được |
| **LÖVE Lua** | Web export experimental, AI productivity Lua kém TS |
| **Defold** | Web export OK nhưng Lua + opinionated, ecosystem nhỏ |

### 4.2 UI framework alternatives

| Option | Lý do loại |
|---|---|
| **React 19** | AI training data lớn hơn Vue ~3-5x, NHƯNG `useState` gắn với render tree → không phù hợp game loop reactive. Vue's standalone `@vue/reactivity` thắng quyết định |
| **Solid.js** | Signals tốt nhưng ecosystem nhỏ, AI training data thua Vue |
| **Svelte 5** | Runes hay nhưng ecosystem game thấp, ít AI training |
| **Lit / Web Components** | Quá low-level cho solo dev |
| **vue3-pixi** (declarative Pixi-in-Vue) | Hấp dẫn nhưng overhead virtual scene graph → 60fps match layer rủi ro. Dùng imperative Pixi + watchEffect bridge thay vì |

### 4.3 Physics alternatives

| Option | Lý do loại |
|---|---|
| **Matter.js** | Verlet integrator non-deterministic → **break replay validation cho leaderboard**. KHÔNG dùng được khi có server-side anti-cheat |
| **Planck.js** | Deterministic (Box2D port), pure JS ~150KB. **Backup tốt** nếu Rapier deterministic mode khó tune |
| **Box2D-wasm** | Original Box2D compiled WASM. OK nhưng Rapier API hiện đại hơn, CCD tốt hơn |
| **p2.js** | Maintenance giảm, không deterministic by default |
| **Cannon.js** | 3D-first, overkill |

### 4.4 Server alternatives

| Option | Lý do loại |
|---|---|
| **Supabase** | BaaS tổng quát, KHÔNG có leaderboard/tournament/matchmaking built-in. Phải tự build từng feature → 6-12 tháng extra work khi compare với Nakama |
| **PlayFab (Microsoft)** | Hosted-only, lock-in mạnh, cost scale aggressive |
| **Hathora** | Realtime-focused, không có persistent storage/leaderboard mạnh |
| **PartyKit (Cloudflare Durable Objects)** | Realtime tốt nhưng thiếu game-specific features (leaderboard, IAP validation) |
| **Custom Bun + Hono + Drizzle + Postgres** | Linh hoạt 100% nhưng phải build từ scratch: auth, leaderboard, tournament, friends, wallet → 1+ năm. Reinvent wheel |
| **Firebase** | Google lock-in, NoSQL Firestore không fit relational character data tốt |
| **Convex** | Reactive backend hay nhưng ecosystem nhỏ, ít support game patterns |

---

## 5. Risk analysis & mitigation

### 5.1 Risk: Rapier 2D deterministic mode đủ rigid cho replay validation?

**Severity**: HIGH (toàn bộ anti-cheat leaderboard phụ thuộc)

**Description**: Rapier hỗ trợ deterministic mode nhưng yêu cầu:
- Fixed timestep (không variable dt)
- Single-threaded (no parallel solver)
- Careful về float NaN handling
- Cross-platform float consistency (x86 vs ARM)

**Mitigation — PoC bắt buộc trước khi commit toàn stack**:
1. Build Rapier 2D scene đơn giản (10 ball + walls)
2. Record initial state + 1000 inputs
3. Replay 100 lần trên Mac M-series, kiểm tra final state identical
4. Replay trên server (Linux x86) — kiểm tra match Mac
5. Nếu fail → fallback Planck.js (Box2D pure JS, deterministic by default)

**Timeline PoC**: tuần 1 của implementation phase (trước khi viết bất kỳ gameplay code nào).

### 5.2 Risk: Nakama TypeScript runtime (Goja) khác Node

**Severity**: MEDIUM (chỉ ảnh hưởng server logic, không client)

**Description**: Nakama TS runtime chạy trong Goja (JS interpreter Go-native), không phải V8/Bun.

**Implications**:
- ✅ Pure TS/JS libs work: Zod, date-fns logic, custom code
- ❌ Không work: native modules, Node `fs`/`crypto`, top-level await, một số ESM features
- ❌ Performance: ~5-10x chậm hơn V8 (acceptable cho game backend logic, không CPU-bound)
- ✅ Có access Nakama built-in APIs: `nk.storageRead()`, `nk.sqlQuery()`, `nk.httpRequest()`, `nk.logger`, etc.

**Mitigation**:
- Schema validation: dùng Zod (pure TS) — work tốt trong Goja
- Bundle pipeline: esbuild bundle apps/nakama-runtime → single `.js` file
- Heavy compute (vd: replay physics re-run) nên offload sang Go module nếu performance critical (sau PoC)
- Test runtime locally bằng Nakama Docker Compose

### 5.3 Risk: Storage Engine JSON-only, khó relational query

**Severity**: LOW (có workaround sạch)

**Description**: Nakama Storage Engine = key-value JSON documents per user. Cross-user query khó (vd: "tất cả player có item X").

**Mitigation**:
- Per-user data: dùng Storage Engine (character, inventory, atlas) — clean và fast
- Cross-user analytics: tạo custom Postgres tables song song, access qua `nk.sqlQuery()` trong server runtime
- Leaderboard: Nakama Leaderboards (built-in, không cần custom Postgres)

### 5.4 Risk: Vue ecosystem nhỏ hơn React

**Severity**: LOW

**Description**: shadcn-vue, motion-v, vue-draggable-plus là port của tương ứng React, có delay 3-6 tháng so với React originals.

**Mitigation**:
- Tất cả deps chính (Vue, Pinia, VueUse, TanStack Query, Tailwind) đều mature
- Component library shadcn-vue maintained tốt (~95% parity shadcn/ui)
- Có miss feature → wrap Reka UI primitive thủ công (~30 LoC mỗi component)

### 5.5 Risk: Web client distribution không có native feel

**Severity**: LOW (post-launch concern)

**Description**: Web game có thể bị perception "không serious" so với native binary.

**Mitigation**:
- v1: web-only đủ cho prove gameplay + community
- v2: wrap bằng Tauri 2 (~10MB binary) cho Steam/itch.io distribution nếu cần
- v3: PWA install prompt cho mobile/tablet

---

## 6. File structure mới

```
lu-dan-game/
├── CLAUDE.md                       # AI working instructions
├── README.md
├── VISION.md
├── package.json                    # Bun workspaces root
├── docs/
│   ├── superpowers/specs/
│   │   ├── 2026-05-19-lu-dan-master-design.md
│   │   └── 2026-05-19-tech-stack-revisit.md   # YOU ARE HERE
│   ├── TECH_STACK.md
│   ├── ART_DIRECTION.md
│   ├── ROADMAP.md
│   ├── ONBOARDING.md
│   ├── CONTENT.md
│   └── LORE.md
├── apps/
│   ├── web/                        # Vue + Pixi client
│   │   ├── package.json
│   │   ├── vite.config.ts
│   │   ├── tsconfig.json
│   │   ├── index.html
│   │   └── src/
│   │       ├── main.ts
│   │       ├── App.vue
│   │       ├── router/
│   │       ├── stores/             # Pinia stores
│   │       ├── machines/           # XState machines
│   │       ├── composables/        # Vue composables
│   │       ├── components/         # Vue components (Forever + Map layer UI)
│   │       │   ├── forever/
│   │       │   ├── lo/             # Lò Luyện Đan UI
│   │       │   ├── tree/           # Passive Tree (SVG)
│   │       │   ├── atlas/          # Sơn Hà Đồ (SVG)
│   │       │   ├── gambling/       # 6 trụ UI
│   │       │   ├── inventory/
│   │       │   └── ui/             # shadcn-vue primitives
│   │       ├── match/              # Match layer (Pixi)
│   │       │   ├── pixi-app.ts     # Pixi Application setup
│   │       │   ├── physics/        # Rapier integration
│   │       │   ├── entities/       # Banh, linh đan, linh khí
│   │       │   ├── hud/            # @pixi/ui HUD components
│   │       │   ├── effects/        # particles, screen shake
│   │       │   └── bridge.ts       # @vue/reactivity ↔ Pixi sync
│   │       ├── nakama/             # nakama-js client wrapper
│   │       └── styles/             # Tailwind config + global CSS
│   │
│   └── nakama-runtime/             # Server-side TS (compile xuống Goja)
│       ├── package.json
│       ├── rollup.config.ts
│       ├── tsconfig.json
│       └── src/
│           ├── main.ts             # Entry — register RPCs, hooks
│           ├── rpc/                # RPC functions
│           │   ├── submit-replay.ts
│           │   ├── claim-reward.ts
│           │   └── ...
│           ├── hooks/              # Before/after hooks
│           └── storage/            # Storage Engine helpers
│
├── packages/
│   ├── shared/                     # Cả client + server import
│   │   ├── package.json
│   │   └── src/
│   │       ├── schemas/            # Zod schemas
│   │       │   ├── character.ts
│   │       │   ├── inventory.ts
│   │       │   ├── replay.ts
│   │       │   └── ...
│   │       ├── constants/          # Game constants
│   │       └── types/              # TS types
│   │
│   └── data/                       # Source-of-truth content
│       ├── linh-khi.csv            # 60+ item definitions
│       ├── affix-prefix.csv
│       ├── affix-suffix.csv
│       ├── affix-implicit.csv
│       ├── co-vat.csv              # 15+ unique items
│       ├── set-bonus.csv
│       ├── passive-tree.json       # 150 nodes
│       ├── dao-phai.json           # 5 ascendancy
│       ├── dan-duoc.csv            # currency types
│       ├── tam-ma-mod.csv          # Map modifiers
│       ├── phap-tran.json          # Map definitions
│       └── lore/
│
├── tools/                          # Dev tooling
│   ├── balance-simulator/          # Headless Rapier autorunner 1000-run
│   ├── content-validator/          # Schema check CSV/JSON
│   ├── content-generator/          # AI-assisted content draft
│   └── replay-debugger/            # Replay viewer/scrubber
│
├── infra/                          # Deployment configs
│   ├── docker-compose.yml          # Local Nakama + Postgres
│   ├── nakama-config.yml
│   └── fly.toml                    # Production hosting
│
└── .github/workflows/              # CI
```

---

## 7. Migration steps (Godot → Web)

> Hiện tại codebase chưa có Godot project files (chỉ có `docs/`, `CLAUDE.md`, `VISION.md`, `README.md`, `.gitignore`). Migration cost = 0 trên code, chỉ doc updates.

1. **Documentation** (week 1):
   - ✅ Viết brainstorm doc này
   - Update CLAUDE.md (decision #26, Tech Stack section, File structure section, Conventions section)
   - Rewrite docs/TECH_STACK.md
   - Update docs/ROADMAP.md (week-by-week target cho tech stack mới)

2. **Scaffold monorepo** (week 1):
   - `bun init` root + workspaces
   - Create `apps/web` (Vue + Vite + Tailwind v4 + shadcn-vue init)
   - Create `apps/nakama-runtime` (TS + rollup)
   - Create `packages/shared` (Zod schemas)
   - Create `infra/docker-compose.yml` (Nakama + Postgres local)

3. **PoC — Rapier determinism** (week 1-2, CRITICAL):
   - Setup Rapier 2D scene, fixed-timestep
   - Cross-platform replay test (Mac M + Linux x86)
   - Decision gate: fail → switch Planck.js

4. **PoC — Vue + Pixi + @vue/reactivity bridge** (week 2):
   - 1 simple scene: ball bounce trong Pixi, HP bar trong Pixi, sidebar HP trong Vue
   - Verify reactive sync work, không leak listeners

5. **PoC — Nakama TS runtime** (week 2):
   - Register 1 RPC accept replay, validate, write to leaderboard
   - Verify Zod schema validation work trong Goja

6. **Vertical slice** (week 3-6): theo ROADMAP cũ, port sang tech stack mới
   - 1 pháp trận
   - 10 linh khí
   - basic gambling (Linh Đan + Phong Ấn)
   - Lò 4-slot
   - Login + cloud save
   - Leaderboard submission

---

## 8. Confidence summary

| Claim | Confidence | Evidence |
|---|---|---|
| Vue 3 + Pixi + Rapier là combo viable cho ARPG web | HIGH | Vue `@vue/reactivity` standalone documented, Pixi v8 battle-tested, Rapier mature |
| @vue/reactivity dùng được trong Pixi loop | HIGH | Vue 3 docs section "Reactivity Outside Components" |
| Rapier deterministic mode work cho replay | MEDIUM (cần PoC) | Dimforge docs claim deterministic, nhưng cross-platform float chưa verify |
| Nakama đủ feature cho ARPG meta progression | HIGH | Feature matrix mapping 1:1 với PoE patterns |
| Nakama Goja runtime đủ cho server logic Lư Đan | MEDIUM | Zod work confirmed, nhưng performance ceiling chưa stress test |
| AI productivity Vue ≥ Godot GDScript | HIGH | TypeScript training data >>> GDScript |
| Migration cost low (chưa có Godot code) | HIGH | Filesystem check confirmed: only docs + CLAUDE.md exist |

---

## 9. Decisions ledger

- **2026-05-19** (sáng): Lock Godot 4 + GDScript desktop-first.
- **2026-05-19** (chiều): **Revisit và unlock**. Lý do: 4 constraint mới (web-first deployment, AI productivity, AI canvas weakness, server from day-1) đủ mạnh để override. Lock stack mới như section 2.
- **Future revisit triggers**: 
  - Rapier determinism PoC fail → switch Planck.js (within stack)
  - Vue ecosystem hit limit cho game UI → re-evaluate Solid.js (low probability)
  - Nakama Goja runtime hit performance ceiling → offload sang custom Go module (within Nakama ecosystem)
