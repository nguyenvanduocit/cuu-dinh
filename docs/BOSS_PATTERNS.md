# Boss Patterns — Lư Đan

> 3 boss types × multiple bosses each. Attack patterns, phase transitions, rewards.

---

## 0. Boss design philosophy

**3 axes of boss differentiation**:
1. **Mechanic complexity** — simple (1 pattern) → complex (4+ pattern phases)
2. **Element interaction** — single-element to multi-element
3. **Psychological theme** — fear, greed, anger (per Tâm Ma type)

**Common boss structure**:
- 1-3 phases (more phases = harder + later in game)
- Each phase: 1-2 primary attacks + 1 special ability
- Phase transition triggered by linh đan quality milestone OR boss HP
- Reward scales with boss tier + map mods active

---

## 1. Boss type 1: Dị Tượng (Anomaly) — T1-T8

> Born from accidents, casual sin. Element-chaotic, no malicious intent. Player learns Ngũ Hành tương sinh/tương khắc through these fights.

### 1.1 "Tâm Ma Sơn Mộc" (Act 1 boss, T2)

**Role**: First boss, friendly difficulty. Teaches the "đan bể if not protect" lesson.

**Phases**: 1 (no transitions)

**Attack patterns**:
- **P1 - Mộc Charge** (4s cooldown): Spawn 5 Mộc linh lực from random angle, slight homing on linh đan. Damage if direct hit: -5 stability.
- **P1 - Tương Khắc Volley** (12s cooldown): Spawn 3 Kim linh lực (tương khắc Mộc) — clear visual telegraph, player has 3s to route them away.

**Special**: None.

**Phase transition**: None.

**Reward on defeat**: 
- 1 random Linh tier linh khí Mộc
- 200 gold
- +200 XP
- Story: Sư Phụ trao "Bùa Tổ Sư Truyền Đan" (Cổ vật prototype, weak)

### 1.2 "Dị Tượng Ngũ Hành" (Act 2 boss, T5)

**Role**: Tests if player learned all 5 elements.

**Phases**: 2

**Phase 1: Wandering Element** (boss HP 100% → 50%)
- **Element shift** (8s cycle): Boss cycles through 5 elements. While in element X, spawns linh lực of element X.
- **Volley** (5s cooldown): Spawn 4 linh lực current element.
- **Telegraph**: visual color change matches current element.

**Phase 2: Tương Khắc Spike** (boss HP 50% → 0%)
- **Khắc Attack** (4s cooldown): Boss INTENTIONALLY spawns linh lực that tương khắc with linh đan element. Player must route or convert.
- **Element shift** continues but faster (5s cycle).
- **Adds**: 2 small mini-Dị Tượng spawn, each tăng intensity của linh lực ×1.5 in their range.

**Reward**:
- 1 Bảo linh khí
- 500 gold
- 1 Tinh Hoa Ngũ Hành random
- +500 XP

### 1.3 "Tâm Ma Hoả Sơn" (Act 3 boss, T8)

**Role**: Hoả-themed challenge during Lò repair quest.

**Phases**: 2

**Phase 1: Heat Wave** (100% → 60%)
- **Burst** (3s cooldown): Spawn 6 Hoả linh lực, fast.
- **Ground burn** (passive): Bottom 100px of board has burn aura — linh khí placed there receive durability -5 per second. Forces player to place linh khí high.

**Phase 2: Crucible** (60% → 0%)
- **Tan chảy** (passive): Random linh khí mỗi 10s lose 1 tier (Bảo → Linh, etc.) — TEMPORARY for fight, recover after.
- **Fire Pillar** (8s cooldown): A column of Hoả linh lực rains down 1 column of board — devastates that column. Boss telegraphs 2s ahead.

**Reward**:
- 1 Thần linh khí
- 1,500 gold
- 1 Đan Pháp T9 Hoả
- 1 Phong Ấn
- +1,500 XP

---

## 2. Boss type 2: Tâm Ma (Heart Demon) — T6-T13

> Born from sustained negative emotion. Pierces normal defense. Requires special counter (linh khí "Tịnh Tâm" to dispel).

### 2.1 "Tâm Ma Đại Sát" (Act 4 boss, T10)

**Role**: Ascendancy quest. Test player's Đạo Phái selection.

**Phases**: 3 (one per Đạo Phái philosophy)

**Phase 1: Inner Confusion** (100% → 70%)
- **Negative Aura** (passive): 50% chance linh khí player place is "doubt-marked" — its affix display hidden for the fight. Player must remember which is which.
- **Whispers** (10s cooldown): Spawn "tâm ma whisper" mini-mob that follows linh đan. If touches linh đan: stability -10 AND linh đan element shift 1 tick toward tương khắc element.

**Phase 2: Reflection** (70% → 35%)
- **Mirror Attack**: Boss copies player's last 5 linh khí placement and spawns "shadow linh khí" that emit linh lực tương khắc to player's setup. Player must SHIFT strategy.
- **Confusion Bloom**: Random 1 linh khí "switches sides" — emits linh lực tương khắc TỚI linh đan instead of buff.

**Phase 3: Acceptance** (35% → 0%)
- **Đạo Phái challenge**: Boss adopts attack pattern OPPOSITE of player's chosen Đạo Phái:
  - If Tử Vi → boss uses chaos
  - If Vô Cực → boss uses precision
  - If Linh Sơn → boss removes summons
  - If Cửu Âm → boss dispels curses
  - If Thái Cực → boss randomly buffs/debuffs (off-balance)
- Forces player to compete against opposite philosophy.

**Special**: Phase 2 and 3 enabled by completing Đạo Phái selection mid-fight.

**Reward**:
- Đạo Phái permanent unlock
- 1 mini-Cổ vật from Đạo Phái pool
- 5,000 gold
- +5,000 XP

### 2.2 "Tâm Ma Bí Cảnh" (Đan Pháp Tâm Ma special, T11+)

**Role**: Boss = player's own Lò mirror (build-aware).

**Phases**: 1 (player Lò mirrored)

**Attack patterns**: Whatever player's Lò does, boss does the REVERSE:
- If player Lò has Kim element bias → boss spawns Mộc lực
- If player has crit build → boss adds tương khắc lực 30%
- If player Đạo Phái Tử Vi → boss has anti-RNG control

**Unique**: AI reads player save data and counters. Different every player.

**Reward**:
- Personalized Cổ vật (matched to player's primary stat focus)
- 5,000 gold
- Story page (about facing yourself)

### 2.3 "Diêm Phủ Tâm Ma Vương" (Diêm Phủ region boss, T13)

**Role**: Dark zone boss, no Ngũ Hành — only tâm ma debuff.

**Phases**: 2

**Phase 1: Silent Curse** (100% → 50%)
- **Silent** (passive): UI muted (no SFX). Heightens tension.
- **Negative Energy Stream**: Continuous spawn pure tâm ma orbs (no element). Only linh khí "Tịnh Tâm" can dispel.
- Stability -10 per untreated tâm ma touch.

**Phase 2: Loud Curse** (50% → 0%)
- **Silent breaks**: SFX returns LOUDER than normal — boss screams + low rumble.
- **Aurora Tâm Ma** (12s cooldown): Wave of multi-color tâm ma orbs, mix of types.
- **Final Strike**: At 5% HP, boss spawns 30 tâm ma simultaneously — player must dispel all in 10s OR linh đan instantly bể.

**Reward**:
- 2 Cổ vật chance
- 10,000 gold
- 1 Tịnh Linh Hương Nguyên Liệu

---

## 3. Boss type 3: Thiên Kiếp (Heavenly Tribulation) — T14-T16+

> Divine judgment. Sét waves only. Requires Lôi Phù linh khí to absorb.

### 3.1 "Thiên Kiếp Sơ Cảnh" (T14)

**Role**: First thiên kiếp encounter. Teaches Lôi Phù mechanic.

**Phases**: 7 (7 waves, each a "kiếp")

Each wave: 1 lightning strike at random board column. 5-second warning before strike.

**Wave 1-3**: 1 lightning strike per wave. Lôi Phù optional but recommended.
**Wave 4-5**: 2 simultaneous strikes. Lôi Phù mandatory.
**Wave 6**: 3 strikes (one center, two edges).
**Wave 7 (Final)**: 5 simultaneous strikes. ALL columns lit. Player must have Lôi Phù in EVERY column or full thiên kiếp = -50 stability all at once.

**Damage if missed**: -10 stability per missed strike (full hit = -50).

**Reward**:
- Linh đan Tiên grade promotion (if pass)
- 1 Cổ vật Lôi Phù tier upgrade
- 20,000 gold
- +10,000 XP

### 3.2 "Thiên Kiếp Đại Cảnh" (T16, endgame)

**Role**: True endgame trial. Linh đan Thánh grade chase.

**Phases**: 9 (cửu thiên kiếp)

**Wave 1-3**: 2 strikes each.
**Wave 4-6**: 3 strikes each, faster intervals.
**Wave 7-8**: 5 strikes each + element strikes (Hoả lightning, Kim lightning, etc.)
**Wave 9**: 9 simultaneous strikes — entire board lit at once. Player needs Lôi Phù + Cổ vật "Lôi Phù Cổ" to survive.

**Special**: Each wave duration shorter — physics speed increases.

**Reward**:
- Linh đan Thánh grade promotion
- 2-3 Cổ vật chance
- 50,000 gold

---

## 4. Act bosses (campaign 5 acts)

| Act | Boss | Type | Tier | Notes |
|---|---|---|---|---|
| 1 | Tâm Ma Sơn Mộc | Dị Tượng | T2 | Tutorial-friendly, 1 phase |
| 2 | Dị Tượng Ngũ Hành | Dị Tượng | T5 | Tests all 5 elements |
| 3 | Tâm Ma Hoả Sơn | Dị Tượng | T8 | Hoả challenge |
| 4 | Tâm Ma Đại Sát | Tâm Ma | T10 | Ascendancy quest, 3 phases |
| 5 | Hỗn Nguyên Tâm Ma Vương | Multi-type | T13 (campaign final) | Final campaign boss, 4 phases |

### 4.6 Hỗn Nguyên Tâm Ma Vương (campaign final, Act 5)

**Role**: Campaign climax. Reveals lore. Drops Sơn Hà Đồ Lệnh.

**Phases**: 4

**Phase 1: Awakening** (100% → 80%)
- Form: shadowy giant, no specific element
- **Multi-element Volley** (5s cooldown): 4 lực of different elements, random.
- **Aura**: Tâm ma orbs spawn passively, 1 per 3s.
- **Music**: low cello, ominous.

**Phase 2: Manipulation** (80% → 50%)
- Form: shifts into Sư Phụ's appearance (visual cruelty)
- **Mirror Sư Phụ dialogue**: "Con, ngừng lại đi. Đan Đạo đã hết thời." — text appears on screen, ignore (illusion).
- **Tâm Ma Spawn**: 1 mini-Tâm Ma per 10s. Each must be dispelled.
- **Linh Đan Shift Threat**: Boss attempts to FORCE linh đan element to shift to neutral (kill build identity). Player must use Cổ vật or specific affix to resist.

**Phase 3: True Form** (50% → 20%)
- Form: 4-faced demon, each face an element. 1 face inactive (tâm ma neutral)
- **Element Symphony**: Attacks rotate through 4 faces. Each face = element burst. Player must time linh khí placement carefully.
- **Sư Phụ joins**: NPC Sư Phụ appears, joins fight. Adds +30% intensity. (Story moment.)

**Phase 4: Sacrifice** (20% → 0%)
- **Sư Phụ sacrifices himself**: dies on-screen, his energy fuses into player's Lò temporarily (+200% intensity, +50 stability for last phase).
- **Final Stand**: Boss goes berserk, all attacks max intensity.
- **Linh Đan to Tiên**: Player must push linh đan to Tiên grade DURING the fight.

**Reward**:
- Sơn Hà Đồ Lệnh (map device — unlocks Atlas)
- 1 guaranteed Cổ vật + 1 Cổ vật chance
- 100,000 gold
- +100,000 XP
- Story unlocks: Endgame era begins.

---

## 5. Atlas Mega-Bosses (post-Act 5)

5 atlas-corner mega bosses + 1 center mega.

### 5.1 4 Corner bosses

Each atlas corner = 1 element-specific boss.

- **Bạch Hổ Linh Tổ** (West, Kim) — sword storm, Kim lực rain, tower defense feel
- **Thanh Long Linh Tổ** (East, Mộc) — vine surge, healing decoy linh khí spawn
- **Hắc Quy Linh Tổ** (North, Thuỷ) — slow physics, water field traps
- **Chu Tước Linh Tổ** (South, Hoả) — explosive, AoE pressure

Each: 3 phases, T14-T15. Drop element-specific Cổ vật + Tinh Hoa.

### 5.2 Center mega: "Hỗn Nguyên Vương Hậu" (post-100 endgame)

- **Tier**: T16 minimum, scales with Cấp Vô Cực
- **Phases**: 5
- **Special**: Each phase = 1 element-specific phase (4) + final transcendent phase
- **Defeat reward**: Linh Đan Thánh grade + Cổ vật Hỗn Nguyên series (M1-M3 mirror tier chance)

---

## 6. Tâm Ma Vĩ Đại (Cấp Vô Cực super-bosses)

3 ultra-bosses unlock at Vô Cực 50, 100, 200:

### 6.1 "Cao Tổ Phong Ấn Tâm Ma" (Vô Cực 50)
- Lore: Spirit of the original sealing.
- Form: Translucent giant figure, multi-elemental.
- Defeat: Cao Tổ memorial.

### 6.2 "Tổ Sư Bất Tử Hồn Cảnh" (Vô Cực 100)
- Lore: Test of the Immortal Ancestor.
- Form: Beautiful ageless figure, no body.
- Defeat: Mirror-tier Cổ vật guaranteed.

### 6.3 "Hỗn Nguyên Vô Cực Thiên Đạo" (Vô Cực 200)
- Lore: Beyond cultivation. Direct Heaven encounter.
- Form: Pure abstract geometry.
- Defeat: Leaderboard recognition, exclusive cosmetic.

---

## 7. Pattern design principles

1. **Telegraphs always visible** — never instant damage. Min 1s warning.
2. **Phase transitions are story moments** — visual + audio cue, don't sneak.
3. **Each phase teaches a new concept** — Phase 1 baseline, Phase 2 adds twist, Phase 3 combines.
4. **Build-aware (where possible)** — bosses adapt to player Đạo Phái when relevant.
5. **Reward proportional to risk** — harder boss = better drops, but RARE rare drops protect early game economy.

---

## 8. Decision log

- **2026-05-19**: Initial boss patterns locked. 3 types (Dị Tượng / Tâm Ma / Thiên Kiếp), 5 act bosses, 4 atlas corner + 1 center, 3 Vô Cực super-bosses.
