# Economy Flow — Cửu Đỉnh

> Currency sources/sinks, inflation guards, dead-end detection.

---

## 0. Design principles

1. **No infinite loop**: every currency must have natural sinks
2. **No dead end**: every currency must have multiple uses
3. **Gold = grease**, đan dược = chase items — different roles
4. **Inflation rate ≤ 5% per content patch** — content sinks must keep up with new sources
5. **Crafting at high tier always expensive** — preserves rare-feeling of perfect items

---

## 1. Currency taxonomy

7 currency types:

| Type | Symbol | Role | Persistence |
|---|---|---|---|
| **Kim Đan** (Gold) | 💰 | General trade, vendor purchases | Persistent |
| **Linh Đan** (Common orb) | 🔵 | Reroll 1 affix | Persistent |
| **Tử Hoàn Đan** (Rare orb) | 🟣 | Reroll all affix Bảo+ | Persistent |
| **Phong Ấn** (Corruption) | 🔴 | Gamble corruption | Persistent |
| **Cửu Chuyển Đan** (Phẩm-up) | 🟠 | Promote item phẩm cấp | Persistent |
| **Cổ Đan** (Ultra rare) | 🌈 | Reroll Cổ vật | Persistent |
| **Đan Tẩy Niêm** (Identify) | ⚪ | Identify items | Persistent |

Plus material currencies (technically items, but flow like currency):
- **Tinh Hoa Ngũ Hành** (5 types) — force specific mod
- **Nguyên Liệu** (30 types) — map modifiers (Scarab-equivalent)
- **Đan Pháp** (10 variants × tiers) — map blueprints

---

## 2. Sources chart (where currency enters game)

### Kim Đan sources

| Source | Rate (T5 map ref) |
|---|---|
| Linh đan hit (kim đan-on-hit affix) | 200-500 per map |
| Boss kill | +100-500 |
| Pháp trận clear bonus | +200 |
| Vendor sells (rare) | +100-500 per sell |
| Thiên Cơ Quẻ ứng (1 hào) | +1,000 (weekly) |
| Quest completion | +50-500 |
| Cổ vật "Thương Nhân" build | +50-100% multiplier |

### Linh Đan sources

| Source | Rate (T5 map ref) |
|---|---|
| Map drop | 2-3 per pháp trận |
| Đan dược splash bonus | varies |
| Vendor (Lão Hồ Ly) buy | 50 gold each |
| Thiên Cơ Quẻ | +5 per 1-hào ứng |
| Quest reward | +1-5 |

### Phong Ấn sources

| Source | Rate (T5 map ref) |
|---|---|
| Map drop | 0.5-1 per pháp trận (50% chance 1) |
| Boss kill | +1 (lucky drop) |
| Đan dược "Huyết Sát" tâm ma mod | +100% (doubles drop) |
| Quest reward | rare, milestone-only |

### Cửu Chuyển Đan sources

| Source | Rate (T5 map ref) |
|---|---|
| Map drop | 5% per pháp trận |
| Boss drop | 10% per boss |
| Đạo Quán Tổ Sư Bất Tử | rare in stock |

### Cổ Đan sources (extremely rare)

| Source | Rate (T16 map ref) |
|---|---|
| Map drop | 0.5% per pháp trận |
| Boss (high tier only) | 2% per boss |
| Đạo Quán Tổ Sư Bất Tử | 1 in stock once per month real time |
| Thiên Cơ Quẻ đại ứng (3 hào) | guaranteed |

### Đan Tẩy Niêm sources

| Source | Rate (T5 map ref) |
|---|---|
| Map drop | 1-2 per pháp trận |
| Vendor | 50-100 gold each |

---

## 3. Sinks chart (where currency leaves game)

### Kim Đan sinks

| Sink | Cost (T5 ref) |
|---|---|
| Đạo Quán Lão Hồ Ly purchases | 50-100 per item |
| Đạo Sĩ Vô Danh purchases | 300-500 per item |
| Tổ Sư Bất Tử unidentified Cổ | 5,000-10,000 per item |
| Bench craft (add mod) | 100-500 per mod |
| Map identify mass | 10 per item |
| Đan Lư Bàn reroll (gold-only minor reroll) | 50-200 per attempt |
| Atlas progression repair (rare event) | 1,000+ |
| Lò repair after bể (Lò Thần) | 500-2,000 |

### Linh Đan sinks

| Sink | Cost |
|---|---|
| Reroll 1 affix on Linh tier | 1 Linh Đan |
| Reroll 1 affix on Bảo tier | 2 Linh Đan |
| Reroll 1 affix on Thần tier | 5 Linh Đan |
| Map entry splash (1 Linh Đan = auto-reroll each ván) | 1 Linh Đan |
| Đan Tẩy Niêm purchase from Linh Đan | 5 Linh Đan = 1 Đan Tẩy |

### Phong Ấn sinks

| Sink | Cost |
|---|---|
| Corrupt item (4 outcomes 25% each) | 1 Phong Ấn |
| Corrupt Đan Pháp (special) | 1 Phong Ấn |
| Map entry splash | 1 Phong Ấn = free corrupt random linh khí |

### Tử Hoàn Đan sinks

| Sink | Cost |
|---|---|
| Reroll all affix Bảo+ | 1 Tử Hoàn |
| Reroll all affix Thần+ | 2 Tử Hoàn |
| Vendor exchange (rare): 10 Linh Đan = 1 Tử Hoàn | trade |

### Cửu Chuyển Đan sinks

| Sink | Cost |
|---|---|
| Promote linh khí phẩm cấp (50% fail revert) | 1 Cửu Chuyển |
| Promote Đan Pháp tier (rare) | 1 Cửu Chuyển + 1 Tử Hoàn |

### Cổ Đan sinks

| Sink | Cost |
|---|---|
| Reroll Cổ vật | 1 Cổ Đan |
| Vendor exchange: 100 Tử Hoàn = 1 Cổ Đan | very rare trade |

### Đan Tẩy Niêm sinks

| Sink | Cost |
|---|---|
| Identify 1 unidentified item | 1 Đan Tẩy |
| Strip 1 random affix (Annul) | 1 Đan Tẩy |
| Respec 1 Tinh Điểm (post level 50) | 1 Đan Tẩy |

---

## 4. Flow diagram

```
                  ┌──────── PLAYER ─────────┐
                  │                          │
   ┌─────[MAPS]──→│                          │
   │   loot       │                          │
   │              ├── kim đan ──→ vendor ────┴──→ items
   │              │                                 │
   │              ├── linh đan ─→ reroll ──────────→ better gear
   │              │                                 │
   │              ├── phong ấn ─→ corrupt ─────────→ broken or epic
   │              │                                 │
   │              ├── cửu chuyển → phẩm up ────────→ tier improvement
   │              │                                 │
   │              ├── cổ đan ──→ reroll cổ vật ────→ different unique
   │              │                                 │
   │              └── đan tẩy → identify / annul ──→ revealed
   │                                                │
   └────────────[NEW MAP]←──── đan pháp + nguyên liệu
```

Notice loops: vendor BUYS back items (sinks gold), reroll consumes đan dược, every craft is a sink. No infinite loops.

---

## 5. Inflation guards

### Per-content-patch budget

When adding new content (quarterly patches):
- New sources of any currency: +5% max
- New sinks (items to buy, craft costs): +10% min
- Net inflation: should drift -5% per patch (slight deflation = scarcity preserved)

### Audit checklist (run quarterly)

1. **Top 1% players gold accumulation**: should be <$10M (in-game). If higher, raise sink costs.
2. **Phong Ấn supply**: average player should have 50-100 stash, top 1% have 500-1000. If higher, raise drop barrier.
3. **Cổ Đan supply**: median 0-1 stash, max 5-10 stash. If higher, lower drop rate.
4. **Vendor pricing inflation**: bench craft costs should scale 2x per major tier (T1: 100 gold → T16: 30,000 gold).
5. **Crafting break-even**: full 6-affix perfect roll item should cost 100K+ gold worth of crafting attempts.

---

## 6. Dead-end detection

Every currency must have ≥2 sinks (multiple uses):

| Currency | Sinks count | Pass/Fail |
|---|---|---|
| Kim Đan | 7+ | ✅ |
| Linh Đan | 4+ | ✅ |
| Phong Ấn | 3 | ✅ |
| Tử Hoàn Đan | 3 | ✅ |
| Cửu Chuyển Đan | 2 | ✅ |
| Cổ Đan | 2 | ⚠ minimum, consider adding 3rd |
| Đan Tẩy Niêm | 3 | ✅ |

**Recommendation**: Add 3rd sink to Cổ Đan in live ops (e.g., "Cổ Đan Forge" — special crafting that reshapes Cổ vật mid-roll).

---

## 7. Player economy snapshots (target metrics)

### Level 10 player

```
Kim Đan: 1,000-3,000
Linh Đan: 5-15
Phong Ấn: 0-2
Tử Hoàn: 0-1
Cửu Chuyển: 0
Cổ Đan: 0
Đan Tẩy Niêm: 3-8
```

Strategy: Save Linh Đan for first Bảo reroll attempt.

### Level 30 player

```
Kim Đan: 5,000-15,000
Linh Đan: 30-80
Phong Ấn: 5-15
Tử Hoàn: 2-8
Cửu Chuyển: 0-2
Cổ Đan: 0
Đan Tẩy Niêm: 15-30
```

Strategy: Phong Ấn experimentation begins.

### Level 50 player

```
Kim Đan: 20,000-50,000
Linh Đan: 100-300
Phong Ấn: 30-80
Tử Hoàn: 15-40
Cửu Chuyển: 5-15
Cổ Đan: 0-2
Đan Tẩy Niêm: 50-150
```

Strategy: Mass crafting Bảo gear, Đạo Phái mini-tree completion.

### Level 90 player (endgame)

```
Kim Đan: 100,000-500,000
Linh Đan: 500-2,000
Phong Ấn: 200-800
Tử Hoàn: 100-400
Cửu Chuyển: 30-100
Cổ Đan: 5-30
Đan Tẩy Niêm: 300-1,500
```

Strategy: Perfect roll chasing, Cổ vật collection.

### Cấp Vô Cực 50+ player

```
Kim Đan: 1,000,000-5,000,000
Linh Đan: 5,000+
Phong Ấn: 2,000+
Tử Hoàn: 1,000+
Cửu Chuyển: 500+
Cổ Đan: 100+
Đan Tẩy Niêm: 5,000+
Plus collected: 50+ Cổ vật, 100+ Đan Pháp variants
```

Strategy: Mirror tier chasing, atlas full completion.

---

## 8. Stash management

### Stash tabs

Free tabs:
1. Đan Dược (currency)
2. Linh Khí (items)
3. Đan Pháp (maps)
4. Nguyên Liệu (modifiers)
5. Cổ Vật (uniques)
6. Lò Parts (equipment)

Premium tabs (cosmetic store, post-launch):
- Vault tab (extra storage)
- Special category tabs (set items only, theme tabs, etc.)

### Stash size

| Tab | Slots | Notes |
|---|---|---|
| Đan Dược | 200 | Stackable up to 99 per stack |
| Linh Khí | 1,000 | Non-stackable (each unique due to affix) |
| Đan Pháp | 500 | Slight stackable |
| Nguyên Liệu | 100 | Stackable up to 50 |
| Cổ Vật | 100 | Non-stackable |
| Lò Parts | 200 | Non-stackable |

→ Adequate for first 50 hours. Premium tabs available for hoarders.

---

## 9. Trading (post-launch v2.0)

Trading deferred to v2.0 because:
- Solo dev can't moderate trade
- Trade creates "min/max" pressure (PoE problem)
- Auction house complexity
- Cheaters

If implemented in v2.0:
- Asynchronous trade (no live auction)
- Currency-only (no real money)
- Fee on trade (Kim Đan sink)
- Listings expire 7 days

---

## 10. Anti-RMT (anti real-money-trading) strategy

If trading enables:
- No direct Steam trading API integration (control)
- Account binding (no name change)
- Transaction limits per day
- Server-side validation
- Anti-bot measures (Captcha, rate limits)

---

## 11. Decision log

- **2026-05-19**: Initial economy flow locked. 7 currency types, 4 source-types each min 2 sinks. Inflation guards quarterly audit.
