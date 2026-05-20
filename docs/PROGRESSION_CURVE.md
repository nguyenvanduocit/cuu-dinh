# Progression Curve — Lư Đan

> XP curves, loot density, drop rates, atlas tier scaling, time-to-X benchmarks.

---

## 0. Design pillars

1. **First 5 hours = magic** — fast level, fast unlocks, lots of dopamine
2. **5-30 hours = systems learning** — moderate pace, unlock systems Acts 2-4
3. **30-100 hours = build crafting** — slow pace, all systems open, build experimentation
4. **100+ hours = endless grind** — Cấp Vô Cực + perfect rolls + Atlas completion
5. **No content drought** — content always 1 tier ahead of player level

---

## 1. Cấp Đạo Sĩ XP curve (Level 1-100)

### Formula
```
xp_required(level) = 100 * (level ^ 1.85)
```

### Sample values

| Level | XP for next | Cumulative | Hours est. (casual) |
|---|---|---|---|
| 1 → 2 | 100 | 100 | 5 min |
| 5 → 6 | 1,800 | 5,500 | 30 min |
| 10 → 11 | 6,500 | 28,000 | 1.5 h |
| 20 → 21 | 24,000 | 130,000 | 6 h |
| 30 → 31 | 51,000 | 410,000 | 12 h |
| 50 → 51 | 140,000 | 1,920,000 | 30 h |
| 70 → 71 | 270,000 | 5,500,000 | 60 h |
| 90 → 91 | 442,000 | 13,200,000 | 95 h |
| 100 (CAP) | 540,000 | 18,700,000 | 115 h |

### Pacing curve
- Levels 1-10: snappy (5 min to 1.5 hours)
- Levels 10-30: moderate (1.5 to 12 hours)
- Levels 30-60: slow (12 to 40 hours)
- Levels 60-90: slower (40 to 95 hours)
- Levels 90-100: grind (95 to 115 hours)

→ **115 hours total** to max level — comparable to PoE league pace.

---

## 2. Cấp Vô Cực (Post-100 Endless)

### Formula
```
xp_required(vo_cuc_level) = 540000 * (1 + vo_cuc_level * 0.10)
```

Slight ramp up, but enables endless grinding.

### Sample
| Vô Cực Level | XP for next | Cumulative beyond 100 | Hours est. |
|---|---|---|---|
| +1 | 594,000 | 594K | 4 h |
| +10 | 1,080,000 | 8.1M | 50 h |
| +50 | 3,240,000 | 81M | 500 h |
| +100 | 5,940,000 | 281M | 2,000 h |
| +200 | 11,340,000 | 1.1B | 8,000 h |

→ Vô Cực level 100 = ~2,000 hours from level 100. **Leaderboard race territory.**

### Vô Cực rewards
- +1 Vô Cực Điểm per level (allocate to Vô Cực Bảng infinite-scale tree)
- Milestone unlocks every 10 levels: cosmetic, leaderboard rank, lore page
- Tâm Ma Vĩ Đại super-boss unlocks at Vô Cực 50, 100, 200

---

## 3. XP Sources

| Activity | XP | Notes |
|---|---|---|
| Linh lực hit linh khí | 1 | Per hit |
| Linh lực hit linh đan | 2 | Per hit |
| Combo 5+ hit chain | +50 | Per combo |
| Combo 10+ hit chain | +200 | |
| Combo 20+ hit chain | +1,000 | Exceptional |
| Ván clear (kim đan target met) | level × 10 | Per ván |
| Pháp Trận clear | level × 100 | Per map |
| Boss kill | +500 | Per boss |
| Linh đan phẩm thăng | +200 per cấp | Multi if multiple thăng |
| Pháp Trận T10+ clear bonus | level × 200 | Hard maps |
| Cổ vật rolled lần đầu | +1,000 (one-time) | Collection |
| Thiên Cơ Quẻ ứng (1 hào) | +5,000 | Weekly |
| Thiên Cơ Quẻ ứng (2 hào) | +20,000 | Rare |
| Thiên Cơ Quẻ ứng (3 hào) | +100,000 | Jackpot |
| Atlas region completion | level × 1,000 | Once per region |
| Đạo Phái quest complete | +50,000 | Once |
| Final boss (Hỗn Nguyên Tâm Ma Vương) | +100,000 | Once |

### XP from typical 20-min pháp trận

Mid-level T5 map:
- ~500 collisions × 1 = 500
- ~50 đan hits × 2 = 100
- ~10 combos × 50 = 500
- 8 ván × (30 × 10) = 2,400
- 1 boss = 500
- 1 pháp trận clear = (30 × 100) = 3,000
- Possibly 1 Cổ vật first-time = +1,000

**Total ~ 8,000 XP per 20-min pháp trận** at level 30. That's level 30→31 in ~6 pháp trận = 2 hours. Matches "Level 30 in ~12 hours" target.

---

## 4. Level Rewards (per level)

| Reward | Frequency |
|---|---|
| +1 Tinh Điểm (passive tree point) | Every level |
| +5 Linh Khí Thọ (Lò Thọ max) | Every level |
| +1 affix slot on 1 Lò part | Every 10 levels (10/20/30/.../100) |
| Unlock major feature | At specific levels (D11 gates) |

### Major unlock gates

| Level | Unlock |
|---|---|
| 1 | Tutorial start |
| 5 | Act 1 end, base camp full access |
| 12 | All Ngũ Hành elements available |
| 15 | Act 2 end, Tâm Ma mod 1 slot |
| 18 | Lò 4-slot full |
| 25 | Act 3 end, Lò 8-slot, Đạo Quán full |
| 30 | **Đạo Phái** (Ascendancy) chọn |
| 40 | Đan Pháp craft, Nguyên Liệu, Đan Dược splash |
| 50 | **Atlas tree** + Sơn Hà Đồ Lệnh + Thiên Cơ Quẻ |
| 70 | Cổ vật consecrate (Thiên Lý Phong Ấn) — 3 slots |
| 90 | Pháp Trận Tử Sinh entrance |
| 100 | **Cấp Vô Cực** endless mode |

---

## 5. Drop Rate Tables

### Linh Khí rarity per map tier

Base rates (T1 baseline, scale with tier):

| Rarity | T1 | T5 | T10 | T16 |
|---|---|---|---|---|
| Phàm (gray) | 60% | 50% | 35% | 20% |
| Linh (blue) | 25% | 30% | 35% | 35% |
| Bảo (purple) | 10% | 12% | 18% | 25% |
| Thần (orange) | 4% | 6% | 9% | 15% |
| Cổ (rainbow Unique) | 1% | 2% | 3% | 5% |

### Đan Dược rarity per map tier

| Đan Dược | T1 | T8 | T16 |
|---|---|---|---|
| Linh Đan (basic reroll) | 60% | 50% | 40% |
| Đan Tẩy Niêm (identify) | 30% | 20% | 10% |
| Tử Hoàn Đan (reroll all) | 8% | 15% | 20% |
| Phong Ấn (corrupt) | 8% | 12% | 18% |
| Tinh Hoa Ngũ Hành (5 types) | 5% | 12% | 18% |
| Cửu Chuyển Đan (rare) | 1% | 3% | 5% |
| Hồn Đan (very rare) | 0% (locked) | 0.5% | 2% |
| Cổ Đan (ultra rare) | 0% | 0% | 0.5% |

(Percentages sum > 100% because multiple đan dược can drop per map; these are PER-DROP percentages.)

### Cổ Vật drop rate

| Source | Probability |
|---|---|
| Standard pháp trận T1-T5 | 0.5% per clear |
| Standard pháp trận T6-T10 | 1.5% per clear |
| Standard pháp trận T11-T16 | 3-5% per clear |
| Pháp Trận Tử Sinh pass | 100% (guaranteed) |
| Boss (any tier) | +2% beyond map drop |
| Đạo Quán Tổ Sư Bất Tử (unidentified Cổ buy) | always available |

### Đan Pháp drop rate

| Source | Đan Pháp tier range |
|---|---|
| Map clear (tier T) | T-2 to T+2 |
| Boss drop | T+1 to T+3 |
| Atlas region completion | T+5 special |

Average Đan Pháp drop: ~1-3 per pháp trận clear.

### Nguyên Liệu drop rate

- ~0.5-1.5 per pháp trận clear
- Specific Nguyên Liệu tied to region:
  - Hoả Tinh: drops in Hoả region 3x more
  - Tâm Ma Châu: drops only from Tâm Ma bosses
  - Đèn Trời: drops only from thiên kiếp wave clears
  - Vô Cực Thạch: drops from Vô Cực region only

---

## 6. Loot density per map tier

Average loot from 1 pháp trận clear (excluding gold):

| Tier | Linh khí | Đan dược | Đan Pháp | Nguyên Liệu | Cổ vật chance |
|---|---|---|---|---|---|
| T1 | 3-5 | 1-2 | 1-2 | 0-1 | 0.5% |
| T5 | 5-8 | 2-4 | 1-3 | 0-2 | 2% |
| T10 | 8-12 | 4-6 | 2-4 | 1-3 | 3% |
| T15 | 12-18 | 6-10 | 3-5 | 2-4 | 5% |
| T16 + max mod stack | 20-30 | 10-15 | 4-6 | 3-5 | 8% |

Map tier player level required:
- T1-T3: any level (early game)
- T4-T8: level 15+ recommended
- T9-T12: level 35+
- T13-T15: level 60+
- T16: level 85+
- T17+ (Cấp Vô Cực only): level 100+

---

## 7. Time-to-X benchmarks

| Goal | Hours |
|---|---|
| Tutorial complete | 1 |
| Act 1 complete | 3 |
| Act 2 complete | 7 |
| Act 3 complete | 14 |
| Act 4 complete (Đạo Phái chosen) | 22 |
| Act 5 complete (Atlas opens) | 32 |
| First Cổ vật | 5 |
| Build Lò all 8 slots Bảo+ | 40 |
| Full Tinh Điểm tree (all 110 nodes spent) | 100 |
| First Mirror-tier Cổ vật roll | ~500 |
| Atlas full completion (all 150 nodes) | 200 |
| First Tâm Ma Vĩ Đại defeat | 300 |
| Cấp Vô Cực 50 | 1,000 |
| Cấp Vô Cực 100 | 2,000 |
| Cấp Vô Cực 200 (leaderboard tier) | 8,000+ |

**Casual sweet spot**: 100-200 hours = "good ARPG run". Hardcore: 1000+ hours.

---

## 8. Currency economy targets

### Per-pháp-trận average drops (T5 ref)

- Kim đan (gold): 200-500
- Linh Đan: 2-3
- Phong Ấn: 0.5-1 (50% chance 1)
- Cổ Đan: 0 (extremely rare)

### Sinks

- Linh Đan reroll cost: 1 Linh Đan
- Tử Hoàn Đan reroll: 1 Tử Hoàn (rarer)
- Đạo Quán mua linh khí Linh: 50-100 gold
- Đạo Quán mua linh khí Bảo: 500-1000 gold
- Tổ Sư Bất Tử Cổ vật unidentified: 5,000-10,000 gold
- Bench craft: 100-500 gold per add
- Identify (Đan Tẩy Niêm): consume 1 Đan Tẩy

### Inflation check

Gold sources should slightly exceed gold sinks at normal play pace, but craft costs scale up so high-tier players still feel "pinched". See `ECONOMY_FLOW.md` for full sink/source diagram.

---

## 9. Pacing principles

### "Power spikes" architecture
Player power should feel exponential, not linear:
- Level 10: first Bảo linh khí — small but noticeable jump
- Level 30: Đạo Phái — big jump
- Level 50: Atlas + tree maturity — huge jump
- Level 70: Cổ vật consecrate — quality of life jump
- Level 100: Vô Cực — endless ceiling lifted

### "No content drought" rule
Player should always have:
- Next pháp trận tier 1-2 above current comfort
- 1-2 craft goals (specific Lò part, specific affix)
- 1+ Cổ vật target (chase item)
- 1+ Đạo Phái milestone
- 1+ Atlas keystone target

If any of above is "complete and no next", that's a pacing failure.

---

## 10. Simulator metrics to track

Balance simulator tracks (nightly):
- Player level vs hours played (curve shape)
- Drop rate observed vs target (per tier)
- Hours to clear each Act
- Hours to first Cổ vật / Bảo / Thần
- Mirror-tier rare drop sim (1M run baseline)
- Cấp Vô Cực progression curve

Output: dashboard showing all metrics within ±15% of target.

---

## 11. Decision log

- **2026-05-19**: Initial progression curve locked. 115h to level 100, exponential XP, Cấp Vô Cực endless.
