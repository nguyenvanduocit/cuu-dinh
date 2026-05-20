---
name: cuu-dinh-master-design
description: Master design spec cho Cửu Đỉnh — ARPG-Physics hybrid với theme huyền huyễn tu chân/luyện đan. Locked decisions từ brainstorm 2026-05-19.
status: locked
version: 1.2
date: 2026-05-19
---

# Cửu Đỉnh — Master Design Spec v1.2

> **Status**: Design lock complete. Đây là **single source of truth** cho mọi decision. Mọi conflict với spec này → spec wins, code update.

> **v1.2 changes** (2026-05-19): Onboarding architecture added — 5-act campaign + illustrated node maps, **Sơn Hà Đồ Lệnh** as map device bridge. Bí Cảnh redesigned as **emergent composition** (KHÔNG enumerated types). Đan Pháp formalized to **10 variants** as structural containers. Cross-ref `docs/ONBOARDING.md`.

> **v1.1 changes** (2026-05-19): Cosmology overhaul — banh = linh lực, linh đan = objective, Ngũ Hành combat math, Đan Pháp + Nguyên Liệu economy added.

---

## 0. Decision Log

| # | Decision | Rationale |
|---|---|---|
| D1 | Theme = đạo sĩ luyện đan trong bối cảnh huyền huyễn/tu chân Trung Hoa fantasy | USP, fantasy fit |
| D2 | Genre = ARPG + Physics + ARPG-lite (death = lose map loot only) | PoE depth + Ballionaire feel |
| D3 | Mode = Atlas only (no Hành Trình sub-mode) | 1 polish target |
| D4 | Pain level = A — gambling fail = mất affix, KHÔNG brick item | Accessible PoE-feel |
| D5 | Architecture = 3-layer persistence (Forever / Map / Match) | PoE-style character economy |
| D6 | Map = Pháp Trận 15-20 phút, 5-8 ván + boss | PoE map size sweet spot |
| D7 | Level cap = 100, sau đó Cấp Vô Cực endless | Diablo 3 Paragon model |
| D8 | Lò = 8-slot equipment | PoE armor analogue |
| D9 | Passive Tree = ~150 nodes, 5 Ngũ Hành starts | Scoped from PoE 1300 |
| D10 | Ascendancy = 5 Đạo phái, unlock level 30 | PoE ascendancy model |
| D11 | Atlas = Sơn Hà Đồ T1-T16 + atlas tree, unlock level 50 | PoE atlas model |
| D12 | 6 trụ gambling | Đầy đủ PoE crafting + luyện đan nghịch thiên cải mệnh |
| D13 | Path = Full Dream Game (3-5 years) | AI co-pilot enables solo scope |
| D14 | **Banh = Linh Lực Ngũ Hành** (không phải linh đan) | Đúng lore tu chân |
| D15 | **Win = linh đan đạt phẩm cấp target. Lose = bể linh đan hoặc thiên kiếp** | Clear fail state |
| D16 | **Damage = Ngũ Hành tương sinh/tương khắc** | Cultural fit + strategic depth |
| D17 | **Map entry**: Đan Pháp (required) + 4 Nguyên Liệu (optional) + 3 Đan Dược splash (optional) | PoE map+scarab economy |
| D18 | **Single linh đan progressive** — 1 viên qua toàn pháp trận | PoE-feel, tension cao |
| D19 | **Lò Thọ demoted** — fail state chính là bể linh đan | Đơn giản hoá fail logic |
| D20 | **3 boss types**: Dị Tượng / Tâm Ma / Thiên Kiếp | Lore-driven progression |
| D21 | **Onboarding 2 phase**: Tutorial cứng 3 pháp trận (1h) + Progressive **5 Acts** (~30-40h) | Accessible learning curve |
| D22 | **Act = illustrated node map** (Slay-the-Spire style). Per-act ≤ 2 systems unlock. 10-12 nodes incl. side branches | Solo-dev-scope feasible |
| D23 | **Map Device "Sơn Hà Đồ Lệnh"** — drop end Act 5, bridge campaign ↔ atlas | Clean transition point |
| D24 | **Bí Cảnh = emergent composition** (KHÔNG enum types). Player composes via Sơn Hà Đồ Lệnh | Infinite variety, scope-friendly |
| D25 | **Đan Pháp 10 variants**: Tiêu Chuẩn / Tử Sinh / Hỗn Nguyên / Thiên Kiếp / Tâm Ma / Cổ Đan Lò / Long Cung / Cửu Tiêu / Diêm Phủ / Vô Cực | Structural variety container |

---

## 1. Vision & DNA Pillars

### 1.1 Tagline
*Linh lực rơi từ trời. Đặt linh khí hứng. Luyện linh đan qua chín lần phong ấn — đổi vận mệnh.*

### 1.2 4 Pillars

| Pillar | Diễn giải |
|---|---|
| **Physics core** | Linh lực rơi → routed qua linh khí (collision) → đến linh đan center. Cảm giác chính là **chess-like setup** + **oddly satisfying simulation**. |
| **ARPG depth** | Affix, rarity, set, unique, passive tree, ascendancy, atlas — chuẩn PoE. Build diversity là KPI #1. |
| **Gambling DNA** | Cờ bạc CHÍNH LÀ gameplay loop. Mỗi đan dược + Phong Ấn = quintessential moment. |
| **Tu chân authenticity** | Mọi term, art, music, lore phục vụ huyền huyễn/luyện đan: tông môn, pháp bảo, bí cảnh, tâm ma, thiên kiếp. Không Western fallback. |

### 1.3 Non-pillars (explicitly NOT)
- ❌ Story-driven cinematic narrative
- ❌ Multiplayer / PvP (leaderboard chỉ v2.0)
- ❌ Real-money loot box
- ❌ Action combat (physics auto-resolves, người chơi setup)
- ❌ Open world (Atlas thay thế)

---

## 2. 3-Layer Persistence Architecture

```
╔═══ LỚP VĨNH VIỄN ═══════════════════════════╗
║  Lò Luyện Đan (8 slot character)            ║
║  Tinh Điểm passive tree                     ║
║  Đạo Phái (chọn 1 lần, không reset)         ║
║  Sơn Hà Đồ Atlas tree                       ║
║  Cấp Đạo Sĩ (1-100 → Vô Cực)               ║
║  Cổ Vật Tủ "Thiên Lý Phong Ấn" (≤3)         ║
║  Đan dược stash, linh khí stash, kim đan    ║
║  Đan Pháp stash, Nguyên Liệu stash          ║
╠═══ LỚP MAP (Pháp Trận) ═════════════════════╣
║  Linh khí drop trong pháp trận              ║
║  Đan dược / Đan Pháp / Nguyên Liệu drop     ║
║  Linh đan đang luyện (objective)            ║
║  Tâm Ma modifier active                     ║
║  ⚠ DEATH = mất tất loot của pháp trận này   ║
║    (Lò + Tree + Level + Stash KHÔNG mất)    ║
╠═══ LỚP MATCH (mỗi ván trong pháp trận) ════╣
║  Linh khí placed trên anchor points         ║
║  Linh lực simulation state                  ║
║  Linh đan quality progress                  ║
║  Reset position giữa các ván, KHÔNG reset    ║
║    progress của linh đan                    ║
╚══════════════════════════════════════════════╝
```

---

## 3. Lò Luyện Đan (Player Character)

Player = Lò Luyện Đan. Lò = persistent character avatar.

### 3.1 8 slot equipment

| Slot | PoE analogue | Role | Affix range |
|---|---|---|---|
| **Đỉnh** (Crown) | Helmet | Cách linh lực spawn | Spawn rate, angle, element bias, intensity |
| **Thân** (Body) | Chest | Foundation board | Slot linh khí count, board size, base stats |
| **Đế** (Foot) | Boots | Catch zone (catch linh lực overflow) | Recycle linh lực, gold-on-catch |
| **Quai Trái** | Weapon 1 | Active skill A | Skill effect, cooldown |
| **Quai Phải** | Weapon 2 | Active skill B | Skill effect, cooldown |
| **Nắp** (Lid) | (no PoE eq.) | Meta control | Modifier slot count, boss reward |
| **Khắc Phù** | Amulet | Global affix | Universal % buff |
| **Đồ Sương** L+R | 2x Ring | Small modifier | Niche stats |
| **Dây Phong Ấn** | Belt | Currency control | Đan drop, brick chance reduction |

Drop in pháp trận → persistent (Forever layer). Tier scaling như linh khí.

### 3.2 Lò Thọ (secondary HP)

- Base 100. +5 mỗi Cấp Đạo Sĩ.
- **Damage sources**:
  - Pháp trận T15+ ambient damage tick mỗi ván
  - Thiên kiếp full hit (nếu không phòng ngự)
  - Phong Ấn brick = -5% Thọ (small)
- **Heal**: tự hồi đầy giữa các pháp trận
- **Death**: Lò gãy → respawn ở base camp, mất loot pháp trận hiện tại
- ⚠ **Lò Thọ KHÔNG phải fail state chính**. Fail state chính là **bể linh đan** (xem §5). Lò Thọ chỉ relevant ở extreme content.

---

## 4. Linh Khí System (Tools placed on board)

> Đây là **active inventory** mỗi pháp trận. Pháp khí mà đạo sĩ dùng để dẫn linh lực.

### 4.1 Rarity tiers

| Tier | Tên | Affix | Drop rate base |
|---|---|---|---|
| ⬜ Phàm | 1 implicit | 60% |
| 🟦 Linh | 1 implicit + 1-2 random | 25% |
| 🟪 Bảo | 1 implicit + 2-3 random | 10% |
| 🟧 Thần | 1 implicit + 3-4 random + 1 active | 4% |
| 🟥 Cổ (Unique) | Hand-crafted, fixed mods | 1% |

### 4.2 Nguyên tố (Element) — NEW in v1.1

Mỗi linh khí có **1 trong 6 nguyên tố**:
- **Kim** (Metal) — sharp, crit, convert linh lực sang Kim
- **Mộc** (Wood) — sustain, heal đan, convert sang Mộc
- **Thuỷ** (Water) — flow, chain, convert sang Thuỷ
- **Hoả** (Fire) — burst, AoE, convert sang Hoả
- **Thổ** (Earth) — defensive, slow, convert sang Thổ
- **Vô Cực** (Neutral) — Cổ vật, special, không nguyên tố

Linh khí nguyên tố có 3 cách interact với linh lực:
1. **Convert** — linh lực qua linh khí → đổi nguyên tố thành nguyên tố linh khí
2. **Amplify** — linh khí cùng nguyên tố tăng intensity
3. **Resist** — linh khí ngược nguyên tố bị nhiễm khí 5s, đổi element tạm

### 4.3 Affix structure

```
LINH KHÍ: "Huyền Thiên Chung" (Bảo, Kim)
├─ Element: Kim
├─ Implicit: "Convert linh lực qua đây → Kim. Tạo sóng đẩy linh khí khác trong 80px."
├─ Prefix 1: "+45% intensity Kim lực"
├─ Prefix 2: "20% nhân đôi linh lực khi va chạm"
└─ Suffix 1: "Chậm linh lực 15% trong 2s sau va chạm"
```

### 4.4 Affix pool

- ~80 prefix (offensive: intensity, crit, multipliers, special)
- ~80 suffix (utility: slow, chain, redirect, attract)
- ~30 implicit (tied to item type + element)

3 tier rolls (T1-T3), scale theo map tier.

### 4.5 Item types (~30 base types)

Grouped theo motif tu chân + element:
- **Huyền Chung** (Mystic bell) — Kim wave physics
- **Tượng Long/Lân/Quy/Phụng** (Tứ Linh) — element specific per animal
- **Bùa giấy** (Paper talisman) — conditional trigger
- **Đèn lồng** (Lantern) — Hoả light manipulation
- **Quạt Phong Vân** — wind/direction (Mộc-Phong)
- **Chuông gió** (Wind chime) — sound combo
- **Nghiên mực** (Inkstone) — chain damage
- **Mặt nạ tuồng** (Opera mask) — debuff aura
- **Bình Cam Lộ** — Thuỷ flow
- **Đỉnh Đá** — Thổ density

### 4.6 Set bonuses

| Set | Items | Set bonus |
|---|---|---|
| **Tứ Linh** | 4 | Khí trận hút linh lực về center, +bonus per linh thú element |
| **Ngũ Hành** | 5 (Kim/Mộc/Thuỷ/Hoả/Thổ) | Tương Sinh chain — linh lực qua đủ 5 → ×3 intensity tới đan |
| **Thập Bát La Hán** | 18 (hard endgame) | Linh đan resurrect 1 lần nếu bể |

### 4.7 Cổ Vật (Unique) — 15+ chính

Build-defining uniques. Examples:

| Cổ Vật | Effect |
|---|---|
| **Trượng Tôn Ngộ Không** | Linh lực nhân thành 3 sau hit đầu tiên |
| **Gương Bát Quái** | Linh lực rơi ngược lên trời 1 lần/ván |
| **Lưỡi Hái Thiên Lý** | Linh lực rớt khỏi board → 1 linh khí hi sinh, intensity ×10 |
| **Bản Đồ Sơn Hà** | Board +50% size, +5 slot, tâm ma buff theo |
| **Đan Lư Càn Khôn** | Mỗi ván sống sót: +1 affix tier permanent cho 1 linh khí |
| **Mặt Nạ Hắc Bạch** | Player chọn nguyên tố linh đan đổi giữa run |
| **Nghiên Mực Sương** | Linh lực để lại "vệt mực" → damage zone 3s |
| **Bùa Tử Vi** | See next 3 đan dược drop |
| **Quạt Phong Lôi** | 1x/ván: tất cả linh lực đổi hướng 90° |
| **Tượng Phật A Di Đà** | Linh đan +5 quality mỗi ván win (sustain build) |
| **Chuông Đại Hồng** | Mỗi 7s, tất cả linh khí trigger free |
| **Áo Cà Sa Cửu Phẩm** | Lò +1 slot tạm trong pháp trận |
| **Đan Lò Thiên Lệnh** | Phong Ấn brick chance giảm 5% (stack) |
| **Tịnh Tâm Linh Châu** | Dispel tâm ma debuff 1x/ván |
| **Lôi Phù Cổ** | Hứng được thiên kiếp, convert sang +50% intensity |

---

## 5. Linh Đan — The Objective (NEW major section)

> Linh đan là **mục tiêu của mỗi pháp trận**. Không phải reward — là **center of all action**.

### 5.1 Linh Đan state

```
LINH ĐAN (đang luyện):
├─ Nguyên Tố Chính: Mộc  (do Đan Pháp quyết)
├─ Phẩm Cấp: Phàm  (start tier)
├─ Quality: ▓▓▓▓▓░░░░░ 48%  (0-100% trong phẩm cấp hiện tại)
├─ Stability: ▓▓▓▓▓▓▓░░ 73%  (chịu tương khắc damage còn)
└─ Target: Bảo  (do Đan Pháp định, end of pháp trận)
```

### 5.2 Phẩm Cấp progression

`Phàm → Linh → Bảo → Thần → Cổ → Tiên → Thánh`

- Trong 1 pháp trận: thường progress 1-3 cấp (T1 = Phàm→Linh, T16 = Phàm→Cổ)
- Quality fills 0-100% → reach 100% → thăng phẩm → reset quality 0% ở phẩm mới
- Mỗi phẩm cấp **khó hơn**: lượng linh lực positive cần ×2 phẩm sau

### 5.3 Stability — fail state

- Start 100% stability
- Mỗi tương khắc hit → giảm stability (intensity × element mismatch ratio)
- Stability < 0 → **LINH ĐAN BỂ** → pháp trận fail
- Heal stability: linh lực Thuỷ tương sinh với đan Mộc (vd) cũng heal +stability
- Đan dược "Hồi Phục" (rare) có thể heal mid-pháp-trận

### 5.4 Position & physics

- Linh đan **floating ở center board hoặc bottom center**
- Có hit zone (~80px radius)
- Linh lực chạm linh đan → apply damage formula (xem §7)
- Không di chuyển trong base mode. **Cổ vật "Linh Đan Bay"** có thể make it float around board

### 5.5 Per-ván progression

```
PHÁP TRẬN T8 — Đan Pháp "Tứ Tượng Hoả Linh Đan" (target Bảo)

Ván 1 (Phàm 0% → 35%):
  30 linh lực spawn, mix elements
  Player setup linh khí chain → route Hoả to đan
  End: quality 35%, stability 85%

Ván 2 (Phàm 35% → 78%):
  Tâm ma modifier active: "Vô Lượng" — 50% more linh lực
  End: quality 78%, stability 70% (tăng risk)

Ván 3 (Phàm 78% → 100% → Linh 12%):
  Đan THĂNG PHẨM giữa ván! Quality reset 0% ở Linh tier
  Continue refining
  End: Linh 12%, stability 65%

Ván 4-7 (Linh → Bảo):
  More waves, increasing intensity
  Tâm ma stack 2-3

Ván 8 — BOSS (Tâm Ma):
  Phải defeat boss + đẩy đan tới target
  Boss spawn tương khắc lực
  End: Bảo grade reached → WIN

Reward: Đan Pháp T8 quality Bảo + linh khí drops + đan dược
```

---

## 6. Pháp Trận flow (rewrite quanh linh đan)

### 6.1 Pháp Trận structure

```yaml
Pháp Trận: "Mộc Linh Cốc"
  Đan Pháp tier: T1
  Đan target: Linh grade (start Phàm)
  Linh đan element: Mộc
  Geometry:
    board_size: 800x1200
    walls: [...]
    funnels: [...]
  Anchor points: 12
  Linh đan position: (400, 1000)  # bottom center
  Ván sequence:
    - Ván 1-2: linh lực spawn rate base, 50% Mộc-sympathy
    - Ván 3-5: spawn rate +20%, more random elements
    - Ván 6-7: tâm ma modifier auto-active
    - Ván 8 (boss): Dị Tượng spawn, chaotic linh lực
  Modifier slots: 3
  Drop pool (post-clear):
    - Linh khí Mộc-flavored, set Tứ Linh bias
    - Đan dược: Linh Đan 70%, Phong Ấn 8%
    - Đan Pháp T1-T2 chance
    - Nguyên Liệu chance
```

### 6.2 Vào pháp trận (UI checklist)

```
╔═══ Khai Lư — Vào Pháp Trận ═══════════════╗
║                                            ║
║ [Đan Pháp Slot]                            ║
║   ◄ drag Đan Pháp ───────                 ║
║   "Tứ Tượng Hoả Linh Đan Pháp" T8         ║
║                                            ║
║ [Nguyên Liệu Slots × 4]                    ║
║   [Hoả Tinh] [Long Cốt] [—] [—]           ║
║                                            ║
║ [Đan Dược Splash × 3]                      ║
║   [Linh Đan] [—] [—]                       ║
║                                            ║
║ [Tâm Ma Mod Offering — chọn 0-3]           ║
║   [Hồn Cuồng] [Phong Hoả] [U Minh]        ║
║                                            ║
║          [Khai Lư — Bắt đầu]               ║
╚════════════════════════════════════════════╝
```

### 6.3 Trong pháp trận flow

```
[Pháp Trận start]
├─ Linh đan spawn (Phàm, 0%, stability 100%, element X)
├─ Tâm ma mod activate
│
├─ VÁN 1:
│   ├─ Setup phase: drag linh khí từ stash lên anchor points (60s)
│   ├─ Simulate phase: linh lực rơi → physics → impact linh đan (90s)
│   ├─ End: check linh đan quality + stability
│   └─ Loot phase: drops accumulate (linh khí + đan dược + currency)
│
├─ VÁN 2: ... (linh khí giữ position từ ván 1, có thể re-arrange)
├─ ...
│
├─ VÁN BOSS (Dị Tượng / Tâm Ma / Thiên Kiếp tuỳ tier):
│   ├─ Special spawn pattern
│   ├─ Boss reward = chest with guaranteed Bảo+, Đan Pháp T+1 chance
│   └─ Linh đan phải đạt target phẩm cấp
│
├─ END:
│   ├─ Linh đan reach target → WIN → take all loot + finished linh đan
│   ├─ Linh đan bể (stability < 0) → LOSE → lose all map loot
│   └─ Hết ván chưa đạt target → SOFT LOSS → lose half loot, no linh đan reward
│
└─ Return base camp
```

---

## 7. Ngũ Hành Combat Math (NEW)

### 7.1 Tương Sinh / Tương Khắc cycle

```
Tương Sinh (generative):
  Kim → Thuỷ → Mộc → Hoả → Thổ → Kim

Tương Khắc (destructive):
  Kim → Mộc → Thổ → Thuỷ → Hoả → Kim
```

### 7.2 Damage formula

```python
def apply_linh_luc_to_dan(linh_luc, linh_dan):
    intensity = (
        linh_luc.velocity_factor       # physics speed
        * linh_luc.charge_factor       # accumulated via linh khí chain
        * player.intensity_multiplier  # Cấp + tree + Lò
        * map_tier_factor              # T1=1.0 ... T16=2.5
    )
    
    if linh_luc.element == linh_dan.element:
        # Đồng hành — slight buff
        linh_dan.quality += intensity * 0.10
    elif tương_sinh(linh_luc.element, linh_dan.element):
        # E.g. Thuỷ hit Mộc-dan
        linh_dan.quality += intensity * 0.30
        linh_dan.stability += intensity * 0.05  # small heal
    elif tương_khắc(linh_luc.element, linh_dan.element):
        # E.g. Kim hit Mộc-dan
        linh_dan.stability -= intensity * 0.40
        linh_dan.quality -= intensity * 0.10  # quality slight regress
    elif đại_khắc(linh_luc.element, linh_dan.element):
        # Double khắc through chain — rare
        linh_dan.stability -= intensity * 0.80
        # chance bể instantly if stability already low
    else:
        # Trung tính (qua tương sinh chain neutral)
        linh_dan.quality += intensity * 0.05
```

### 7.3 Intensity scaling sources

| Source | Multiplier |
|---|---|
| Velocity (base) | 0.5x (slow) → 2.0x (fast) |
| Charge per linh khí chain hop | +20% per hop, max +200% (10 hops) |
| Cấp Đạo Sĩ | +1% per level |
| Passive tree | 0% → +200% (full intensity build) |
| Lò Khắc Phù affix | varies |
| Map tier | T1: 1.0x → T16: 2.5x |
| Tâm ma mod | -50% → +100% |

→ Top-tier endgame run: intensity = base × 30x (multiplicative stacks) → spectacular numbers.

### 7.4 Counter-mechanics

- **Linh khí nhiễm khí**: bị hit nhiều bởi nguyên tố khác → 5s đổi element tạm → có thể intentional (Cổ vật build)
- **Linh khí vỡ**: T15+ map có "Huyết Sát" mod → linh khí mất durability per hit → vỡ
- **Chain optimization**: route linh lực qua Ngũ Hành chain để max charge + reach element tương sinh
- **Tâm ma negative energy**: không phải Ngũ Hành — đánh xuyên defense — chỉ dispel được bằng linh khí "Tịnh Tâm"

---

## 8. Physics Rules

### 8.1 Linh Lực (banh) behavior

- Spawn: top board, random x (controlled by Lò.Đỉnh affix + tâm ma)
- Element: random per spawn (biased theo Đan Pháp + Nguyên Liệu)
- Gravity: standard 2D physics
- Collision: elastic với linh khí, walls, funnels
- Friction: low
- Lifespan: rớt khỏi board → recycle (Đế có thể catch refund) hoặc despawn
- Velocity cap: prevent physics exploit

### 8.2 Linh Khí behavior

- Static body trên anchor (immovable)
- Collision shape: circle/polygon per type
- Each collision triggers:
  - Element transform (convert linh lực)
  - Affix effects (prefix/suffix proc)
  - Charge accumulation
  - XP gain
  - Loot drop chance

### 8.3 Linh Đan behavior

- Static body, center-bottom default
- Hit zone ~80px radius
- Receive damage formula on collision
- Visual: glow pulse on phẩm cấp up, crack effect on stability low
- Cổ vật can override position/behavior

### 8.4 Determinism

- Physics deterministic với same seed → replay system
- Replay = killer feature (TikTok/Twitter share)

---

## 9. Đan Pháp & Nguyên Liệu Economy (NEW)

### 9.1 Đan Pháp (Map blueprint)

= "Map item" PoE. Required to enter pháp trận. Consumed on entry.

```
ĐAN PHÁP: "Cửu Chuyển Hoả Linh Đan Pháp" (T8, Cổ-rare)
├─ Tier: 8
├─ Đan element: Hoả
├─ Start phẩm: Phàm
├─ Target phẩm: Bảo (3 cấp progression)
├─ Geometry hash: HOA_LINH_COC_v2
├─ Anchor: 14 points
├─ Modifier slot: 3
├─ Special: "Cửu Chuyển" — boss có 9 wave instead of 1
├─ Drop pool bias: Hoả linh khí +50%
└─ Cổ vật chance: +20%
```

#### Properties
- **Tier T1-T16**
- **Element**: Kim/Mộc/Thuỷ/Hoả/Thổ/Vô Cực
- **Phẩm target**: Linh / Bảo / Thần / Cổ / Tiên (Tiên+ chỉ T15+)
- **Modifier**: 0-3 implicit modifiers (e.g., "+30% linh lực spawn rate", "+1 anchor")
- **Corrupted variant**: Phong Ấn lên Đan Pháp → unlock "Cổ Pháp" with major bonus + risk

#### Drop sources
- Map clear: 1-3 Đan Pháp drop per clear (tier ±2 from current)
- Boss drop: guaranteed Đan Pháp tier+1
- Vendor: Tổ Sư Bất Tử bán Đan Pháp rare
- Crafted: dùng Linh Đan + Phong Ấn để reroll Đan Pháp

### 9.2 Nguyên Liệu Luyện Đan (Scarab equivalent)

= "Scarab" PoE. Optional add-in (0-4 slots) when entering. Consumed.

| Nguyên Liệu | Effect |
|---|---|
| **Hoả Tinh** | +50% drop linh khí Hoả |
| **Long Cốt** | Boss sinh đôi, drop ×2 |
| **Linh Hoa** | +1 Cổ vật guaranteed drop |
| **Tinh Tinh Thạch** | +1 modifier slot |
| **Tử Khí** | Convert tất cả linh lực random → Thuỷ |
| **Mưa Linh** | Linh lực rơi ×1.5 tốc độ, +30% loot |
| **Vô Cực Thạch** | Random range ×2 (chaos amp) |
| **Đèn Trời** | Thiên kiếp ván cuối → reward ×3 (insane risk) |
| **Mộc Linh Tinh** | Linh đan +20% stability max |
| **Tịnh Linh Hương** | Tâm Ma negative energy giảm 50% |
| **Tâm Ma Châu** | Spawn extra tâm ma boss room, drop Cổ vật +30% |
| **Cửu Chuyển Linh Hoa** | Đan Pháp consume xong → 30% chance reroll thay vì destroy |

→ ~30 Nguyên Liệu types final. Stack 4 → fully customize run.

### 9.3 Đan Dược splash (optional, 0-3 slots)

Optional currency injection trước vào map:

| Đan Dược | Splash effect |
|---|---|
| **Linh Đan** | Linh khí player đặt auto-reroll 1x sau mỗi ván |
| **Tử Hoàn Đan** | Linh khí drop xác suất Bảo+ ×2 |
| **Phong Ấn** | Random 1 linh khí player đặt → Phong Ấn miễn phí lúc start |
| **Cửu Chuyển Đan** | Linh đan start ở quality 25% phẩm Linh (skip phần đầu) |
| **Cổ Đan** | 1 Cổ vật drop guaranteed in map (rare splash) |

### 9.4 Sourcing & Stash

- Drops in map (proportional to tier)
- Vendor refresh
- Thiên Cơ Quẻ rewards
- Stash: separate tab per category (Đan Pháp / Nguyên Liệu / Đan Dược / Linh Khí)

### 9.5 Đan Pháp 10 Variants — Structural containers

Đan Pháp KHÔNG chỉ định nghĩa map identity — nó định nghĩa **STRUCTURE** của pháp trận.

| Đan Pháp | Structure | Drop tier | Element bias |
|---|---|---|---|
| **Tiêu Chuẩn** (Standard) | 5-8 ván + 1 boss | Common (all levels) | Any |
| **Tử Sinh** (Sanctum-like) | 20 phòng nối tiếp, chọn cửa risk/reward | Rare, level 70+ | Any |
| **Hỗn Nguyên** (Marathon) | 30-50 phút escalating intensity | Very rare, level 80+ | Any |
| **Thiên Kiếp** (Lightning trial) | Only sét waves, không linh lực thường | Very rare, level 90+ | Vô Cực |
| **Tâm Ma** (Boss-mirror) | Boss = phiên bản tà của player Lò (build-mirrored) | Rare, atlas keystone | Any |
| **Cổ Đan Lò** (Boss rush) | Boss-only fast run (5 phút) | Random | Any |
| **Long Cung** (Underwater) | Thuỷ exclusive, slow physics | Random, Thuỷ region | Thuỷ |
| **Cửu Tiêu** (Sky) | Kim exclusive, fast physics | Random, Kim region | Kim |
| **Diêm Phủ** (Underworld) | Dark theme, Tâm Ma exclusive, no Ngũ Hành | Rare, level 80+ | Tâm Ma |
| **Vô Cực** (Endless) | Endless waves until player quits | Endgame only | Random |

### 9.6 Bí Cảnh = Emergent Composition (NOT enumerated types)

**Triết lý**: *"Ta đang tu — vận mệnh là do ta chọn pháp tu."*

Game KHÔNG pre-define bí cảnh types. Bí cảnh **emerge** từ composition tại Sơn Hà Đồ Lệnh:

```
Bí cảnh = Đan Pháp + (Nguyên Liệu × 4) + (Đan Dược splash × 3) + (Tâm Ma mod × 3)
        = 10 × 30 × 6 × 10 = 180,000+ unique compositions
```

Example compositions:
- Tiêu Chuẩn + Hoả Tinh + Đại Khắc mod → "Hoả-biased standard map, high tương khắc damage"
- Tử Sinh + Cổ Đan splash + Đèn Trời mod → "20-room dungeon, +Cổ vật drop, thiên kiếp final"
- Thiên Kiếp + Tịnh Linh Hương + Vô Lượng mod → "Lightning trial, less Tâm Ma, 50% more linh lực"
- Hỗn Nguyên + Đèn Trời + Bí Cảnh + Cổ Đan splash → "30-min marathon, thiên kiếp ×3 reward"

Each composition = unique session. Replayability infinite.

### 9.7 Sơn Hà Đồ Lệnh (Map Device)

Drop end of Act 5 (campaign). Located at base camp center altar.

UI:
```
╔═══ SƠN HÀ ĐỒ LỆNH ═══════════════════════════╗
║                                                ║
║  [Đan Pháp slot] ◄─ required                  ║
║  [Nguyên Liệu × 4 slots] ◄─ optional          ║
║  [Đan Dược splash × 3 slots] ◄─ optional      ║
║  [Tâm Ma Mod × 3 slots] ◄─ chọn từ offering    ║
║                                                ║
║  Preview: AI-generated description of bí cảnh  ║
║                                                ║
║              [KHAI BÍ CẢNH]                    ║
╚════════════════════════════════════════════════╝
```

- Click Khai Bí Cảnh → portal opens → enter pháp trận
- Consume Đan Pháp + Nguyên Liệu + Đan Dược splash on entry
- Death in pháp trận → portal closes, materials consumed (Đan Dược splash refund TBD)

Lore: *"Sơn Hà Đồ Lệnh là pháp khí cổ truyền của tổ sư — có khả năng mở khoá các không gian tu luyện đã từng tồn tại trong vạn niên."*

Chi tiết onboarding flow + per-act design: xem `docs/ONBOARDING.md`.

---

## 10. Gambling — 6 Trụ

### Trụ 1: Đan dược (Currency orbs)

| Đan | Effect | Rarity |
|---|---|---|
| **Linh Đan** | Re-roll 1 random affix | Common |
| **Tử Hoàn Đan** | Re-roll all affix của Bảo+ | Uncommon |
| **Cửu Chuyển Đan** | Nâng phẩm cấp, 50% fail (revert) | Rare |
| **Phong Ấn** | 25% strip / 25% giáng / 25% thăng / 25% khắc implicit | Uncommon |
| **Hồn Đan** | Copy 1 affix (post-launch v1.2) | Very rare |
| **Cổ Đan** | Reroll Cổ Vật → random Cổ Vật | Extremely rare |
| **Đan Tẩy Niêm** | Identify unidentified | Common |
| **Tinh Hoa Ngũ Hành** (5 types) | Force 1 specific element prefix | Uncommon |

### Trụ 2: Đạo Quán (Gambling vendor)

3 NPCs base camp:
- **Lão Hồ Ly** — Linh/Bảo, rẻ
- **Đạo Sĩ Vô Danh** — Bảo/Thần, vừa
- **Tổ Sư Bất Tử** — Cổ vật unidentified, Đan Pháp rare, đắt

### Trụ 3: Tâm Ma Modifier (Map mods)

Pre-pháp-trận, chọn 0-3 từ 5 random:

| Tâm Ma | Effect | Reward |
|---|---|---|
| **Hồn Cuồng** | +30% linh lực speed | +50% loot |
| **Phong Hoả** | -1 slot linh khí | Guaranteed Bảo+ |
| **U Minh** | Tắt sáng board | +1 đan dược |
| **Huyết Sát** | Linh khí mất durability/hit | +100% Phong Ấn |
| **Vô Lượng** | +50% linh lực count | +30% gold |
| **Tà Đạo** | Boss sinh đôi | +200% boss reward |
| **Cuồng Phong** | Linh lực 90° random mỗi 5s | +1 Bảo guaranteed |
| **Lạnh Băng** | Linh khí freeze 2s | +1 Thần guaranteed |
| **Đại Khắc** | Linh lực 50% chuyển sang tương khắc element | +1 Cổ vật chance |
| **Thiên Lệ** | Linh đan stability cap 50% | +50% Đan Pháp drop |

### Trụ 4: Phong Ấn (Corruption)

Apply lên linh khí Bảo+:
- 🔴 **25%** Phá Niêm — strip ALL affix (item về Phàm, KHÔNG destroy — pain level A)
- 🟡 **25%** Giáng Phẩm — rarity -1
- 🟢 **25%** Thăng Phẩm — rarity +1
- 🌈 **25%** Khắc Phong Ấn — thêm 1 implicit mod cực mạnh, item KHÔNG craft thêm

Có thể apply lên Đan Pháp → "Cổ Pháp" variant (special run).

### Trụ 5: Pháp Trận Tử Sinh

Sanctum-like sub-dungeon, drop rare:
- 20 rooms, 3 doors each (risk/neutral/heal)
- Chết = lose dungeon loot, NOT map loot
- Pass room 20 = guaranteed Cổ vật + Đan Pháp Cổ tier

### Trụ 6: Thiên Cơ Quẻ

Per map clear: 1 quẻ thiên cơ 3 hào. Weekly thiên tượng realtime:
- 1 số trúng → +1 Cổ vật vào pool vĩnh viễn
- 2 số → starter kit upgrade
- 3 số → +1 board slot vĩnh viễn

---

## 11. Crafting — Đan Lư Bàn

4 methods at base camp + portable bench:

| Method | Effect | Cost | Risk |
|---|---|---|---|
| **Linh Đan reroll** | Random toàn bộ affix | 1 Linh Đan | Possibly worse |
| **Tinh Hoa craft** | Force 1 mod, reroll rest | 1 Tinh Hoa Ngũ Hành | Other affix reroll |
| **Bench craft** | Add 1 mod from menu | Gold | None (deterministic) |
| **Tẩy Đan (Annul)** | Strip 1 random affix | 1 Đan Tẩy | May lose best affix |

Tinh Hoa Ngũ Hành types (5 + 7 utility = 12 total):
- 5 element-specific (Tinh Hoa Kim/Mộc/Thuỷ/Hoả/Thổ)
- 7 utility (Tinh Hoa Tốc, Tinh Hoa Kiên, Tinh Hoa Mệnh, ...)

---

## 12. Tinh Điểm — Passive Tree

~150 nodes, 5 Ngũ Hành starts.

### 12.1 Topology (simplified)

```
       [Mộc]    [Hoả]
         \      /
   [Thuỷ]-[VÔ CỰC]-[Kim]
         /      \
       [Thổ]   [...]
       
       Đạo Phái selector at center
```

### 12.2 Node types

- Travel (~100): +1 small stat
- Notable (~40): mid effect
- Keystone (~10): game-changing

### 12.3 Keystones (selected)

| Keystone | Effect |
|---|---|
| **Sinh Sôi** (Mộc) | Mỗi 10s, linh lực đầu spawn "thai" thành 2 |
| **Liệt Hoả** (Hoả) | Va chạm đánh dấu "cháy" 5s, dame tick |
| **Trọng Sơn** (Thổ) | Linh khí bất tử vs Phong Ấn brick, -50% effect |
| **Sắc Bén** (Kim) | Crit dame ×3, crit chance ÷2 |
| **Thuỷ Triều** (Thuỷ) | Linh lực quán tính, càng chạm càng nhanh |
| **Thiên Mệnh** | See next 5 drops trong run |
| **Cờ Bạc Tổ** | Phong Ấn brick -10%, but Thăng -10% |
| **Hồn Linh** | Linh khí hi sinh (Lưỡi Hái) → respawn 1x |
| **Vô Vi** | Banh tự rơi, +50% loot |
| **Bất Bại** | Lò Thọ damage -50% |

### 12.4 Acquisition
- 1 point per level (100 total)
- +5 from Đạo Phái quest
- +5 from Atlas keystone
- Total 110 / 150 nodes → forced choice

### 12.5 Respec
- Free đến level 50
- Sau: 1 Đan Tẩy per point

---

## 13. Đạo Phái — Ascendancy

Unlock level 30, quest "Tâm Ma Đại Sát".

| Đạo Phái | Theme | Signature |
|---|---|---|
| **Thái Cực** | Balance | +5% all stats |
| **Cửu Âm** | Curse | Linh lực aura giảm linh khí defense 30% |
| **Linh Sơn** | Summon | Collision 10% spawn echo linh lực |
| **Tử Vi** | RNG manip | See next 3 drops, free reroll 1 affix/ván |
| **Vô Cực** | Chaos amp | All random ×2 |

Mỗi Đạo Phái có mini-tree 8 nodes (1 keystone + 7 notable).

---

## 14. Sơn Hà Đồ — Atlas

Unlock level 50.

### 14.1 Topology

```
              [Boss N]
                ↑
     [Boss W]─[VÔ CỰC]─[Boss E]
                ↓
              [Boss S]
```

- 150 atlas nodes (mirror passive tree)
- 5 Ngũ Hành biome regions
- 4 corner bosses + 1 center mega boss "Hỗn Nguyên Tâm Ma Vương"

### 14.2 Progression

1. Complete map → unlock adjacent 2-3
2. Map tier scale theo level + region depth
3. Atlas-specific Tinh Điểm (atlas tree): 1/map clear, ~150 total
4. Atlas keystones (~15):
   - "T10+ map drop guaranteed Cổ Vật"
   - "Linh Đan ×2 drop trong region Hoả"
   - "Map T15+ free 3 modifier"
   - "Đan Pháp drop +1 tier"

### 14.3 Region drops

Each region biases specific drops:
- Mộc region: Huyền Chung, Tứ Linh set, Mộc Đan Pháp
- Hoả region: Đèn lồng, Hoả linh khí, Hoả Đan Pháp
- (Similar for Thuỷ/Kim/Thổ)

---

## 15. Level & XP

### 15.1 XP sources

| Hành động | XP |
|---|---|
| Linh lực hit linh khí | 1 |
| Linh lực hit linh đan | 2 |
| Combo 5+ chain | +50 |
| Ván clear | level × 10 |
| Pháp Trận clear | level × 100 |
| Boss kill | +500 |
| Linh đan phẩm thăng | +200 / cấp |
| Cổ vật first roll | +1000 (one-time) |
| Thiên Cơ Quẻ ứng | +5000 |

### 15.2 Curve & gates

- 1-30: ~5h
- 30: unlock Đạo Phái
- 30-60: ~20h
- 50: unlock Atlas tree
- 60-90: ~40h
- 70: unlock Cổ vật consecrate
- 90: unlock Pháp Trận Tử Sinh
- 90-100: ~50h grind
- 100: unlock Cấp Vô Cực
- Total ~115h to 100

### 15.3 Cấp Vô Cực

- +1 Vô Cực Điểm / level
- Allocate vào Vô Cực Bảng (infinite-scale stats)
- Atlas T17+ uncapped
- Milestones every 10: cosmetic, leaderboard
- Tâm Ma Vĩ Đại super-bosses at Vô Cực 50/100/200

---

## 16. Build Archetypes

5 emergent (loot-driven, not class-locked):

| Archetype | Tree | Ascendancy | Element bias | Cảm giác |
|---|---|---|---|---|
| **Sát Thủ** | Kim → Hoả | Tử Vi / Thái Cực | Kim/Hoả | Crit huỷ diệt, 1-shot dame |
| **Pháp Sư** | Hoả → Thuỷ | Cửu Âm / Vô Cực | Hoả | Chain trigger, fireworks |
| **Hộ Pháp** | Thổ → Mộc | Thái Cực | Thổ/Mộc | Sustain, slow build, dầy stability |
| **Thương Nhân** | Mộc → Kim | Tử Vi | Mộc/Kim | Gold/loot econ |
| **Vong Linh** | Thuỷ → Mộc | Linh Sơn | Thuỷ | Echo balls, swarm |

Hybrid builds emerge from clever item/tree combos. ~10+ viable top-tier builds.

---

## 17. Bosses

3 types theo lore tu chân:

| Type | Tier | Cơ chế |
|---|---|---|
| **Dị Tượng** | T1-T8 | Spawn linh lực hỗn loạn random element, buộc adapt |
| **Tâm Ma** | T6-T13 | Spawn negative energy không phải Ngũ Hành — pierce defense, chỉ dispel bằng linh khí Tịnh Tâm |
| **Thiên Kiếp** | T14-T16 + endgame | Sét đánh wave — phải đặt Lôi Phù để hứng, hỏng = instant fail |

Thiên kiếp ở endgame: linh đan **CẦN trải qua thiên kiếp** để thăng Tiên/Thánh phẩm cấp. Risk = reward.

---

## 18. Endgame Chase

1. **Mirror tier Linh Khí** — perfect roll Cổ vật (1/100000)
2. **Cấp Vô Cực leaderboard** — top 100 global
3. **Atlas completion** — all 150 nodes + 5 boss
4. **Full collection** — 1 of 60+ linh khí, 30+ Cổ vật
5. **Build experimentation** — 100h+ tinker
6. **Speed run** — fastest T16 / level 100
7. **Tâm Ma Vĩ Đại** — 5 super-bosses (uber-tier)

---

## 19. UI Principles

> **Tối giản UI, KHÔNG đơn giản hoá feature.** (Locked decision per user.)

### 19.1 Pillars
- PoE-grade information density
- No tutorial wall — tooltip on-demand
- Asian aesthetic
- Mode-less navigation

### 19.2 Layout

```
┌──────────────────────────────────────────────┐
│ [Lò] [Tree] [Atlas] [Stash] [Vendor]         │  ← top nav
├──────────────────────────────────────────────┤
│                                              │
│         [Main content zone]                  │
│                                              │
├──────────────────────────────────────────────┤
│ [Đan dược] [Linh khí] [Đan Pháp] [Kim đan]  │  ← persistent bottom
└──────────────────────────────────────────────┘
```

### 19.3 Theme

- BG: 60% mực huyền/đá tiên phủ, 30% đỏ chu sa, 10% vàng linh quang
- Highlights: vàng kim glow, đỏ son cho danger
- Font: Hán-Việt readable serif headline, sans body
- Animation: slow ink bleed transition, snap on click

---

## 20. Balancing

### 20.1 Tool-first
Build balance simulator week 2-3. Run 1000 autorun trước mỗi tune.

### 20.2 Targets

| Metric | Target |
|---|---|
| Pháp trận length | 15-20 min |
| 1st level 100 | ~115h |
| Viable top builds | ≥10 |
| Top affix winrate | ≤ avg+15% |
| Cổ vật usage | each in ≥5% top builds |
| Linh đan win rate (player at-level) | 60-75% |

### 20.3 Live ops

- v1.0: 60 linh khí, 30 maps, 30 Đan Pháp variants
- +1 month: +5 linh khí, balance
- +3 month: +1 Đạo Phái or atlas region
- +6 month: major league (themed content 2-week event)

---

## 21. Sound & Music

### Music
- Style: cultivation ritual orchestral + lo-fi
- Instruments: sáo trúc, cổ cầm, đàn tranh, chuông khánh, trống nghi lễ
- Mode: pháp trận subtle / base camp peaceful / boss intense

### SFX
- Linh lực collision: bell-like per element (5 distinct tones)
- Combo: ascending arpeggio
- Phong Ấn: 4 distinct stings
- Linh đan phẩm up: gong + choir
- Linh đan bể: glass shatter + low rumble

---

## 22. Lore & World

### 22.1 Setting
Một đại lục tu chân cổ xưa. Luyện đan thuật từng cực thịnh, các tông môn dùng pháp trận dẫn thiên địa linh khí để luyện linh đan từ khí trời.

Player kế thừa **Lò Luyện Đan của tổ sư** — artifact ngàn năm, mạnh nhất nhưng hư hao. Nhiệm vụ: phục hồi Lò + luyện linh đan cứu nhân thế.

**Tâm Ma** = quái vật sinh ra từ ham muốn con người, kẻ thù chính.

### 22.2 NPC base camp

- **Lão Hồ Ly** — gambling vendor (Linh/Bảo)
- **Đạo Sĩ Vô Danh** — mid vendor (Bảo/Thần)
- **Tổ Sư Bất Tử** — high vendor + Cổ vật + Đan Pháp rare
- **Đan Sư Hắc Bạch** — crafting bench
- **Lão Bà Thiên Cơ** — Thiên Cơ Quẻ meta
- **Sư Phụ** — Đạo Phái selection
- **Lò Thần** — Lò repair & upgrade
- **Pháp Sư Bản Đồ** — Atlas guide

### 22.3 Story arc

- Pha 1 (1-30): học luyện đan
- Pha 2 (30-50): chọn Đạo Phái, mở Atlas
- Pha 3 (50-90): khám phá Atlas, defeat 5 boss
- Pha 4 (90-100): defeat "Hỗn Nguyên Tâm Ma Vương"
- Endgame: Cấp Vô Cực, Tâm Ma Vĩ Đại

---

## 23. Open Questions

1. Monetization: $15-25 premium 1 lần? DLC? Cosmetic?
2. Platform: Steam first → mobile?
3. Modding: Atlas/tree open cho community?
4. Online: leaderboard yes, trade? Co-op?
5. Localization: VI native + EN? VI-first?
6. Demo/EA strategy
7. Final Tinh Hoa list (12 essence)
8. Exact Nguyên Liệu list (30+)
9. Boss attack patterns (per type)
10. Thiên kiếp timing & visuals

---

## 24. Document update protocol

Khi update spec:
1. Bump version
2. Add changelog entry
3. Update CLAUDE.md locked decisions
4. Commit: `spec: master v1.x — {summary}`

### Changelog

- **v1.0** (2026-05-19): Initial lock từ brainstorm. 13 decisions.
- **v1.1** (2026-05-19): Cosmology overhaul. Banh = linh lực Ngũ Hành. Linh đan = objective. Đan Pháp + Nguyên Liệu economy. 20 decisions (D14-D20 added).
- **v1.2** (2026-05-19): Onboarding architecture. 5-act campaign + illustrated node maps. Sơn Hà Đồ Lệnh map device. Bí Cảnh = emergent composition (KHÔNG enum). Đan Pháp 10 variants formalized. 25 decisions total (D21-D25 added). Cross-ref `docs/ONBOARDING.md`.
