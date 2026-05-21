# Combat Math — Đan Kiếp

> Full damage formulas, intensity scaling, crit math, stability mechanics. Source of truth cho balance simulator.

---

## 0. Overview philosophy

**3 layers of math** (compose từ inside out):

```
[Player Build]  ←─ slowly-changing (level, tree, Lò, ascendancy)
       ↓
[Map Modifier]  ←─ per-pháp-trận (tâm ma, nguyên liệu, đan pháp)
       ↓
[Per-collision]  ←─ physics velocity, element, charge
       ↓
   = OUTPUT: linh đan quality delta + stability delta
```

Mỗi layer multiplicative — không additive.

---

## 1. Ngũ Hành Relationship Matrix

```
        TỚI ĐAN: │ Kim   Mộc   Thuỷ  Hoả   Thổ   Vô
TỪ LINH LỰC:    │
────────────────┼─────────────────────────────────────
Kim             │ ≡     KHẮC  SINH  -     -     n
Mộc             │ -     ≡     -     SINH  KHẮC  n
Thuỷ            │ -     SINH  ≡     KHẮC  -     n
Hoả             │ KHẮC  -     -     ≡     SINH  n
Thổ             │ SINH  -     KHẮC  -     ≡     n
Vô Cực          │ n     n     n     n     n     ≡

≡ = Đồng hành (same element, slight buff)
SINH = Tương sinh (generative, buff)
KHẮC = Tương khắc (destructive, damage)
- = Trung tính (neutral, very slight)
n = Vô Cực neutral (no element interaction)
```

### Special: Đại Khắc (double khắc through chain)

Khi linh lực qua chain linh khí, có thể accumulate đại khắc nếu **2 levels** of khắc trong chain:
- Vd: Linh lực Hoả qua linh khí Kim (Hoả khắc Kim → fail conversion) → linh khí Thuỷ (Kim sinh Thuỷ nhưng linh lực vẫn pha tạp) → đan Mộc → kết hợp gây "đại khắc"
- Đại khắc = damage ×2 normal khắc + chance instant bể nếu stability < 25%

---

## 2. Core Damage Formula

```python
def collision_linh_luc_vs_linh_dan(linh_luc, linh_dan, player, map_state):
    # Layer 1: base intensity
    base = (
        linh_luc.velocity / VELOCITY_BASE  # 0.5x → 2.0x
        * (1 + linh_luc.charge_count * 0.20)  # +20% per chain hop, cap 200%
    )
    
    # Layer 2: player multipliers
    player_mult = (
        1.0
        + (player.level * 0.01)                    # +1% per level
        + player.tree_intensity_bonus              # tree nodes
        + player.lò_intensity_affix                # Lò.Khắc_Phù affix
        + player.ascendancy_bonus(linh_luc.element) # Đạo phái
        + player.set_bonus_multiplier              # Tứ Linh / Ngũ Hành
    )
    
    # Layer 3: map factors
    map_mult = (
        MAP_TIER_FACTOR[map_state.tier]            # T1: 1.0 ... T16: 2.5
        * map_state.tam_ma_intensity_mod           # -50% to +100%
        * map_state.dan_phap_intensity_bias        # depends on variant
    )
    
    # Layer 4: element interaction
    element_factor = ELEMENT_MATRIX[linh_luc.element][linh_dan.element]
    # đồng hành: +10% quality
    # tương sinh: +30% quality, +5% stability heal
    # tương khắc: -10% quality, -40% stability
    # đại khắc: -10% quality, -80% stability + chance bể
    # trung tính: +5% quality
    
    # Final intensity
    intensity = base * player_mult * map_mult
    
    # Apply
    if element_factor.type == "tương_sinh":
        linh_dan.quality += intensity * 0.30
        linh_dan.stability += intensity * 0.05  # small heal
    elif element_factor.type == "đồng_hành":
        linh_dan.quality += intensity * 0.10
    elif element_factor.type == "trung_tính":
        linh_dan.quality += intensity * 0.05
    elif element_factor.type == "tương_khắc":
        linh_dan.stability -= intensity * 0.40
        linh_dan.quality -= intensity * 0.10
    elif element_factor.type == "đại_khắc":
        linh_dan.stability -= intensity * 0.80
        if linh_dan.stability < 25:
            linh_dan.brick_chance += 0.10  # 10% chance instant bể
    
    # Crit check
    if random() < player.crit_chance:
        linh_dan.quality *= player.crit_multiplier  # default 1.5x, builds can stack to 3-5x
    
    # Clamp
    linh_dan.quality = clamp(linh_dan.quality, -50, 100)
    linh_dan.stability = clamp(linh_dan.stability, 0, 100 + player.stability_max_bonus)
```

---

## 3. Intensity scaling sources (full)

| Source | Min | Max | Notes |
|---|---|---|---|
| Velocity factor | 0.5x | 2.0x | physics-driven |
| Charge per chain hop | +20% | +200% (10 hops) | encourages chain optimization |
| Level scaling | +1% | +100% (level 100) | linear |
| Vô Cực Điểm (post-100) | +0% | infinite | endless scaling source |
| Tree intensity nodes | 0% | +200% | full intensity build |
| Tree Notable bonuses | 0% | +50% | clustered |
| Tree Keystone (Sắc Bén / Liệt Hoả etc.) | varies | varies | rule-changing |
| Lò.Khắc_Phù affix | 0% | +25% | global |
| Lò.Thân affix | 0% | +15% | foundation |
| Lò.Đỉnh element bias | varies | +50% | per element |
| Đồ Sương rings | 0% | +10% each | 2 slots |
| Ascendancy bonus | varies | varies | per Đạo Phái |
| Set Tứ Linh element match | 0% | +30% | 4-piece |
| Set Ngũ Hành chain | 0% | +200% (5-cycle) | huge spike |
| Map tier scaling | 1.0x | 2.5x | T1-T16 |
| Tâm Ma modifier | -50% | +100% | risk/reward |
| Đan Pháp variant bias | -20% | +30% | variant-specific |
| Nguyên Liệu modifiers | -50% | +200% | per Nguyên Liệu |
| Cổ Vật multipliers | varies | varies | unique items |

### Multiplicative stack ceiling

Top-tier endgame run, all multipliers active:
- Base × 1.5 (mid charge)
- × 2.0 (level 90 + tree)
- × 1.5 (Lò all slots good)
- × 2.0 (Set Ngũ Hành 5-cycle)
- × 2.5 (T16 map)
- × 2.0 (3 tâm ma stack)
- × 3.0 (relevant Cổ vật combo)
- × 1.5 (crit)

→ Total: ~67x base intensity. Spectacular damage numbers expected.

### Floor (bad luck protection)

Minimum intensity = 0.1x base (never reduce below 10%). Prevents complete useless hits.

---

## 4. Crit Math

### Base crit chance
- Default: 5%
- Tree max: +30% (full crit build)
- Ascendancy Tử Vi: +10% free
- Affix prefix "Hung Hãn": +5% to +30%
- Lò.Đồ_Sương "Tinh Hoa Crit": +5% to +20%
- Cap: 100% (some builds reach 100% crit)

### Crit multiplier
- Default: 1.5x
- Tree Sắc Bén Keystone: ×3 (but crit chance ÷2)
- Hung Diệt prefix: +20% to +100% crit multi
- Cổ Vật "Trượng Tôn Ngộ Không" tier 3: +50% crit multi
- Cap: 10x (theoretical, very hard to reach)

### Compound builds
- "Cuồng Sát" build: 100% crit chance × 5x multi = every hit massive
- "Bùng Bạo" build: low crit chance (10%) × very high multi (8x) = occasional explosions

---

## 5. Stability Mechanics

### Base stability
- Start each pháp trận: **100**
- Maximum cap: 100 + Lò.Thân affix bonus + Cổ vật bonus (typical 100-150)

### Damage sources
- Tương khắc hit: -intensity × 0.40
- Đại khắc hit: -intensity × 0.80 + chance bể
- Tâm Ma debuff tick: -1 per second of debuff
- Tâm Ma boss attack: -5 to -25 per attack
- Thiên Kiếp wave: -50 if unprotected, -10 if Lôi Phù catch

### Heal sources
- Tương sinh hit: +intensity × 0.05
- Đồng hành hit: +intensity × 0.02
- Linh khí Mộc implicit (Cành Bồ Đề etc.): +2% per Mộc hit
- Cổ Vật "Tịnh Tâm Linh Châu": dispel + restore 20% stability
- Đan dược "Hồi Phục" (rare, splash-only): +30% stability
- Ván win (kim đan target met): +10 stability

### Fail state
- Stability ≤ 0: **LINH ĐAN BỂ** → pháp trận fail
- Stability ≤ 25 + đại khắc hit: 10% instant brick chance

### Stability vs Quality
- Stability = HP of linh đan (depletes from bad hits)
- Quality = phẩm cấp progress (0-100% per phẩm)
- INDEPENDENT — you can have 100% quality but 5% stability (about to brick), or 50% quality + 100% stability (slow but safe)

---

## 6. Linh Đan Quality Progression

### Per-phẩm-cấp quality curve

| Phẩm | Quality needed to thăng | XP gained on thăng |
|---|---|---|
| Phàm | 100% | 200 |
| Linh | 200% (relative scale) | 400 |
| Bảo | 400% | 800 |
| Thần | 800% | 1600 |
| Cổ | 1600% | 3200 |
| Tiên | 3200% | 6400 |
| Thánh | 6400% | 12800 |

Each cấp doubles. So total quality across all phẩm = 100+200+400+800+1600+3200+6400 = 12,700%.

### Quality decay

If linh đan takes prolonged tương khắc:
- Quality regresses (loses progress)
- Cannot regress below 0% of current phẩm cấp
- BUT can regress phẩm cấp DOWN if stability drops critically (rare event)

### Bonus quality sources
- Cổ vật "Tượng Phật A Di Đà": +5 quality flat per ván win
- Cổ vật "Hỗn Nguyên Hắc Đan": +1 phẩm cấp instant (but stability -75%)
- Đan dược "Cửu Chuyển Đan" splash: start at quality 25% of Linh phẩm (skip Phàm)

---

## 7. Worked examples

### Example A: Mid-game baseline run

Setup:
- Player level 30, tree 30 points, Lò 6/8 slots Linh tier
- Map T5, Tiêu Chuẩn Đan Pháp Mộc target Linh phẩm
- Đan đan element: Mộc

Collision: linh lực Thuỷ hit đan (tương sinh)
- Base velocity 1.2x
- Charge 2 hops: +40%
- Player mult: 1.30 (level 30) × 1.20 (tree) × 1.05 (Lò) = 1.638
- Map mult: 1.5 (T5) × 1.0 (no mod)
- Element: tương sinh = +30% quality

```
intensity = 1.2 × 1.40 × 1.638 × 1.5 = 4.13
quality_gain = 4.13 × 0.30 = +1.24%
stability_heal = 4.13 × 0.05 = +0.21
```

→ Tiny gain per hit. 80-100 hits needed to thăng Linh.

### Example B: Late-game crit build

Setup:
- Player level 90, full tree, all Lò Thần, Sắc Bén keystone, Tử Vi ascendancy, Tứ Linh set
- Map T15, Vô Lượng + Đại Khắc + Hồn Cuồng modifiers
- Đan Hoả target Thần phẩm

Collision: linh lực Mộc hit đan (tương sinh)
- Velocity 2.0x (fast)
- Charge 7 hops: +140%
- Player mult: 1.90 × 2.5 × 1.25 × 1.50 (Tứ Linh) = 8.91
- Map mult: 2.3 × 2.0 (3 modifiers) = 4.6
- Element: tương sinh +30%
- CRIT: ×3 (Sắc Bén)

```
intensity = 2.0 × 2.40 × 8.91 × 4.6 = 196.7
quality_gain = 196.7 × 0.30 × 3.0 (crit) = +177%
```

→ Single crit hit thăng cấp luôn. End-game spectacle.

### Example C: Đại khắc disaster

Setup:
- Player level 50, mid-build
- Map T8, no special mod
- Đan Kim target Bảo

Collision: linh lực Hoả qua chain → Thuỷ → Mộc → đan Kim (đại khắc Kim)
- Intensity 25 (moderate)
- Đại khắc: stability -25 × 0.80 = -20

```
stability: 100 → 80 (one hit!)
quality: -25 × 0.10 = -2.5
```

→ A few more đại khắc hits → bể. Player must reroute chain immediately.

---

## 8. Linh Khí durability (T15+ map mod "Huyết Sát")

When "Huyết Sát" Tâm Ma mod active:
- Linh khí có durability 100
- Mỗi hit: -10 durability
- Durability < 0 → linh khí VỠ (lose for rest of pháp trận)
- Cổ vật "Trọng Sơn" keystone immune

Strategy: balance high-touch linh khí (frequent hits) vs low-touch (preserve).

---

## 9. Balance targets (for simulator validation)

| Metric | Target | Notes |
|---|---|---|
| Average pháp trận T1 win rate (new player) | 70% | Forgiving baseline |
| Average pháp trận T5 win rate (level 25, mid build) | 65% | Moderate challenge |
| Average pháp trận T10 win rate (level 70, optimized) | 55% | Hard, build-dependent |
| Average pháp trận T16 win rate (level 100, top build) | 45% | Brutal |
| Average pháp trận T16 win rate (level 90, sub-optimal) | 15% | Discourage cheese |
| Top 5% builds vs bottom 5% builds win rate spread | ≤ 30% | Avoid 1 dominant build |
| Time to first level 100 (casual play) | ~115 hours | PoE-like |
| Time to first Cổ vật (level 5-20 player) | ~3 hours | Loot dopamine reward |
| Mirror tier Cổ vật roll | < 1/100,000 attempts | Aspirational chase |

---

## 10. Simulator integration

Balance simulator (`tools/balance-simulator/`) must:
- Read all formulas from this doc as code constants
- Simulate 1000 runs at each level/build combo
- Output: win rate, time-to-target, build viability heatmap
- Run nightly via CI
- Alert if any metric > 15% off target

---

## 11. Decision log

- **2026-05-19**: Initial combat math locked. Formula structure + element matrix + 11 worked examples.
