# Onboarding — Đan Kiếp

> Locked design 2026-05-19. 5 acts + hard tutorial + Sơn Hà Đồ Lệnh map device.

> **Triết lý**: *"Ta đang tu — vận mệnh là do ta chọn pháp tu."* Onboarding KHÔNG dạy bằng text wall, mà bằng **chính journey tu hành của đạo sĩ**.

---

## 0. Two-phase architecture

| Phase | Length | Goal | Format |
|---|---|---|---|
| **1. Hard Tutorial** | ~1 giờ | Teach core loop + Ngũ Hành | 3 guided pháp trận, cannot lose |
| **2. Progressive Campaign** | ~30-40 giờ | Unlock all systems gradually | 5 Acts × illustrated node map |

After Act 5 → atlas opens, infinite endgame begins.

---

## 1. Phase 1: Hard Tutorial (1 hour)

Format: **3 guided pháp trận + base camp tour**. Cannot lose. Cannot quit half-way.

### 3 guided pháp trận (high-level)

> Per-node detail dissolved 2026-05-20 sang `docs/content/acts/act-1/nodes/`. Dưới đây chỉ giữ summary.

- **#1 "Khai Đan"** (5-7 phút): Teach physics + linh khí placement. Stability frozen. Reward: Cổ vật "Sư Phụ Truyền Đan". Detail: `acts/act-1/nodes/khai-dan/`
- **#2 "Tương Sinh"** (7-10 phút): Introduce Thuỷ + tương sinh. Reward: 10 Linh Đan. Detail: `acts/act-1/nodes/tuong-sinh/`
- **#3 "Tương Khắc"** (10-12 phút): Introduce Kim + tương khắc + routing. First real fail possible. Reward: unlock base camp. Detail: `acts/act-1/nodes/tuong-khac/`

### Base camp welcome tour (~5 phút)

NPC introductions (each 30s dialogue):
1. **Sư Phụ** (Master) — quest hub, hint giver
2. **Lão Hồ Ly** (gambling vendor) — *"Giàu sang ở đây này..."*
3. **Đan Sư Hắc Bạch** (crafting bench)
4. **Đạo Sĩ Vô Danh** (mid vendor)
5. **Lão Bà Thiên Cơ** (Thiên Cơ Quẻ meta — note: chỉ unlock sau Act 5)

Sau tour → free play. Quest tracker hiện "Trở lại Sư Phụ để tu tiếp".

### Tutorial principles (HARD RULES)

- ❌ KHÔNG text wall (>20 chữ/screen)
- ❌ KHÔNG auto-pop tooltip — chỉ activate khi player chủ động tap
- ❌ KHÔNG lock-step — player có thể experiment trong constraint
- ✅ Learn-by-doing
- ✅ **Ngũ Hành Wheel** luôn có trong thumb-bar dưới dạng widget icon màu ngũ hành active — glanceable mọi lúc, tap để mở bottom sheet đầy đủ
- ✅ NPC "Sư Phụ" cho replay tutorial bất cứ lúc nào (re-do mode "Hồi Tưởng")

---

## 2. Phase 2: Progressive 5-Act Campaign

### 2.1 Overview table

| Act | Tên | Map biome | Level | Systems unlocked | Boss |
|---|---|---|---|---|---|
| **1** | Khởi Đan | Sơn Mộc Cốc (bamboo valley) | 1-7 | Tutorial + Mộc + Linh Đan reroll | Tâm Ma Sơn Mộc (small) |
| **2** | Ngũ Hành Khai Mông | Ngũ Hành Sơn (5 peaks) | 7-15 | All 5 elements + Tinh Hoa + Phong Ấn intro + Tâm Ma mod (1 slot) | Dị Tượng Ngũ Hành |
| **3** | Đan Lư Tu Luyện | Hoả Sơn Lò Cốc (volcanic) | 15-25 | Lò 4→8 slot + affix + Bench craft + Đạo Quán full | Tâm Ma Hoả Sơn |
| **4** | Đan Pháp + Đạo Phái | Bích Hải Đảo → Vô Cực Đỉnh | 25-40 | Đan Pháp + Nguyên Liệu + Đan Dược splash + **Đạo Phái quest** (lvl 30) | Đạo Phái-specific |
| **5** | Khai Sơn Hà | Hồn Nguyên Điện (cosmic temple) | 40-50 | Atlas open + Thiên Cơ Quẻ | Hỗn Nguyên Tâm Ma Vương → drop **Sơn Hà Đồ Lệnh** |

### 2.2 Act = Illustrated Node Map (UI)

Format: **Slay-the-Spire style node map**, KHÔNG Diablo character walk-around.

```
╔═══════════════════════════════════════════════════╗
║ ACT 1: SƠN MỘC CỐC (Valley of First Cultivation) ║
║ ┌────────────────────────────────────────────┐   ║
║ │   🏯 Am Sư Phụ                              │   ║
║ │     ╲                                       │   ║
║ │      ●━━━ Pháp Trận #1: Khai Đan            │   ║
║ │       ╲                                     │   ║
║ │        🧙 Đạo Sĩ Mộc Linh ◀ NPC quest      │   ║
║ │         ╲                                   │   ║
║ │          ●━━━ Pháp Trận #2: Tương Sinh      │   ║
║ │           ╲                  ╲              │   ║
║ │            🌳 Lão Tiều Phu    │ optional   │   ║
║ │           ╱  (side, free linh khí)          │   ║
║ │          ●━━━ Pháp Trận #3: Tương Khắc      │   ║
║ │           ╲                                 │   ║
║ │            👹 BOSS: Tâm Ma Sơn Mộc           │   ║
║ │             ╲                               │   ║
║ │              ⟶ Cổng Act 2 (level 6+)        │   ║
║ └────────────────────────────────────────────┘   ║
╚═══════════════════════════════════════════════════╝
```

**Properties**:
- Background = painted tiên phủ/bí cảnh illustration của khu vực
- Player tap node to enter (no avatar walking)
- Linear flow + 1-2 optional side branches
- Music = peaceful instrumental per act biome

**Node types** (4 types):

| Type | Icon | Content |
|---|---|---|
| 🏯 **Hub** | Pavilion | Sư Phụ, save point, return to base camp shortcut |
| ● **Pháp Trận** | Filled circle | Standard fight |
| 🧙 **NPC** | Person | Dialogue + small reward + lore page |
| 🌳 **Side** | Tree/optional | Optional reward node (linh khí, đan, etc.) |
| 👹 **Boss** | Demon | Act climax |
| ⟶ **Portal** | Arrow | Next act gate |

Per-act: **10-12 nodes total** (3-5 pháp trận + 2-4 NPC + 1-2 side + 1 boss).

### 2.3-2.7 Per-Act detail

> Sections §2.3-§2.7 dissolved 2026-05-20 sang per-entity bundle. Xem `docs/content/acts/<n>/overview.md` cho per-Act node maps, story arcs, systems unlocked, và boss encounters.

---

## 3. Sơn Hà Đồ Lệnh (Map Device)

End of Act 5 reward, located at **base camp center altar**.

### 3.1 UI mockup

```
╔══════════════════════════════════════════════════╗
║          SƠN HÀ ĐỒ LỆNH                          ║
║      (Altar for opening bí cảnh)                 ║
║                                                  ║
║   ┌─[Đan Pháp slot]────────────────┐            ║
║   │  ◄ thả từ stash (tap-select)    │            ║
║   │  "Tử Sinh Mộc Đan Pháp" T8     │            ║
║   └──────────────────────────────────┘            ║
║                                                  ║
║   ┌─[Nguyên Liệu × 4]──────────────┐            ║
║   │ [Hoả Tinh] [Long Cốt] [—] [—] │            ║
║   └──────────────────────────────────┘            ║
║                                                  ║
║   ┌─[Đan Dược splash × 3]──────────┐            ║
║   │ [Phong Ấn] [Cổ Đan] [—]       │            ║
║   └──────────────────────────────────┘            ║
║                                                  ║
║   ┌─[Tâm Ma Mod × 3]────────────────┐            ║
║   │ [Hồn Cuồng] [Đại Khắc] [—]    │            ║
║   └──────────────────────────────────┘            ║
║                                                  ║
║   Preview: "Bí cảnh sẽ là Mộc Tử Sinh đa-tier   ║
║   với Hoả/Long modifier, Phong Ấn risk..."      ║
║                                                  ║
║              [KHAI BÍ CẢNH]                      ║
╚══════════════════════════════════════════════════╝
```

### 3.2 Mechanics

- **Đan Pháp** = required input (consumed)
- **Nguyên Liệu** 0-4 = optional, modify drops/mechanics (consumed)
- **Đan Dược splash** 0-3 = optional, run modifier (consumed)
- **Tâm Ma Mod** 0-3 = chọn từ pre-pháp-trận offering (consumed)
- **Preview text** = AI-generated description of composed bí cảnh
- **Khai Bí Cảnh** → portal opens → enter pháp trận
- **Death in pháp trận** = portal closes, consume Đan Pháp + Nguyên Liệu (Đan Dược splash refundable? TBD — design decision)

### 3.3 Lore

> *"Sơn Hà Đồ Lệnh là pháp khí cổ truyền của tổ sư — có khả năng mở khoá các không gian tu luyện đã từng tồn tại trong vạn niên. Mỗi Đan Pháp = một bản đồ. Mỗi nguyên liệu = một biến số. Mỗi thiền sư đều có pháp tu riêng."*

---

## 4. Bí Cảnh = Emergent Composition (KHÔNG enum types)

### 4.1 Triết lý

**"Ta đang tu — vận mệnh là do ta chọn pháp tu."**

Game KHÔNG pre-define 8 loại bí cảnh. Bí cảnh **emerge** từ composition của player.

### 4.2 Math

- 10 Đan Pháp variants × 30 Nguyên Liệu × 6 Đan Dược × 10 Tâm Ma = **180,000+ unique compositions**
- Solo dev không phải build 8 dungeon types riêng → build modular component system
- Player infinite experimentation

### 4.3 Đan Pháp 10 variants — Structural container

Đan Pháp định nghĩa **pháp trận structure**. Nguyên Liệu/Đan Dược/Tâm Ma modify CONTENT.

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

### 4.4 Composition examples

| Composition | Emergent experience |
|---|---|
| Tiêu Chuẩn + Hoả Tinh + Đại Khắc mod | "Hoả-biased standard map with high tương khắc damage" |
| Tử Sinh + Cổ Đan splash + Đèn Trời mod | "20-room dungeon, +Cổ vật drop, +thiên kiếp final" |
| Thiên Kiếp + Tịnh Linh Hương + Vô Lượng mod | "Lightning trial with reduced Tâm Ma + 50% more linh lực" |
| Hỗn Nguyên + Đèn Trời + Bí Cảnh + Cổ Đan splash | "30-min marathon, thiên kiếp final ×3 reward, +Cổ vật" |

Each composition = unique session. **Replayability infinite.**

---

## 5. Anti-overwhelm UX rules

### 5.1 Locked UI

- **Tab "Atlas"** KHÔNG xuất hiện trên top nav cho đến **Act 5 clear**
- **Tab "Sơn Hà Đồ Lệnh"** KHÔNG xuất hiện cho đến Act 5 clear
- **Inventory tab "Đan Pháp"** KHÔNG xuất hiện cho đến Act 4
- **Tab "Thiên Cơ"** KHÔNG xuất hiện cho đến Act 5
- → **Zero clutter** trong early game

### 5.2 Tooltip layers

- Tap 1× item: brief description (bottom sheet nhỏ)
- Tap lần 2 / tap "?" icon: full details + "Tap ? để học thêm" → opens portal to doc
- First-time tooltip: extended explanation, dismiss sau lần đọc đầu

### 5.3 Smart defaults

- First Đan Pháp draft = auto-filled if player has none
- First Phong Ấn tap = 3-sec confirmation modal explaining 4 outcomes (subsequent: skip)
- First Cổ vật drop = mini-tutorial on rarity tiers
- First boss attack = slow-mo first 2s with hint overlay

### 5.4 NPC mentor (Sư Phụ)

- Always available at base camp
- Tap any time → "Sư Phụ ơi, con phải làm gì tiếp?" → hint hiển thị next quest
- Sư Phụ KHÔNG nhắc cùng câu 2 lần (avoid annoyance)

### 5.5 Cheat sheet UI

3 mode tùy ngữ cảnh (theo `docs/content/screens/cheat-sheet/design.md`):
- **Widget [⊙]** trong bottom thumb-bar — icon màu ngũ hành active, glanceable mọi lúc trong combat và atlas
- **Bottom Sheet** (tap widget): wheel đầy đủ (Kim/Mộc/Thuỷ/Hoả/Thổ) với current linh đan highlighted, tương sinh arrow (green) + tương khắc arrow (red), damage multiplier; vuốt xuống để đóng
- **Inline mini wheel** trong setup screens (card linh đan) — không cần mở sheet riêng

### 5.6 Quest tracker

Top-left HUD:
- Current quest objective (one line)
- "Next: [act 1 boss]" or "Talk to Sư Phụ"
- Tap → expand to full quest log

### 5.7 Inventory color coding

- Đan Dược: gold tab
- Linh Khí: blue tab
- Đan Pháp: purple tab (unlock Act 4)
- Nguyên Liệu: green tab (unlock Act 4)
- Cổ Vật: rainbow tab
- Lò Parts: red tab

Color-coded everywhere = visual scanning fast.

---

## 6. Veteran skip path

Settings → **Veteran Mode**:
- Skip Hard Tutorial (3 pháp trận)
- Skip Act 1
- Start at Act 2 level 5 with starter kit (5 random linh khí Phàm, 5 Linh Đan, basic Lò 4-slot)

**Steam achievement**: clear Act 5 once → unlock Veteran Mode for all future characters.

---

## 7. Localization onboarding strategy

> Vietnamese-native game, EN translated. Both equally polished.

### Term tooltip

Tap Vietnamese term → show:
- VI: "Phong Ấn"
- EN: "Seal (Corruption)"
- Etymology: "Phong (封) = seal, Ấn (印) = imprint. PoE Vaal Orb equivalent."

Build glossary in-game accessible anytime.

### NPC dialogue

- VI: poetic, full diacritics, lore-rich
- EN: literary translation, NOT machine translation. Hire translator for v1.0.

### Numbers/UI

- Numbers Latin (60% damage)
- Date/time: localize per platform
- Decimal separator: per region

### Cultural footnote

Optional setting "Show cultivation footnote": pop-up explains Ngũ Hành, đạo sĩ, pháp trận, tâm ma, thiên kiếp concepts for new players. Default OFF, ON-able from settings.

---

## 8. Per-Act narrative arc

> Section dissolved 2026-05-20 sang per-entity bundle. Xem `docs/content/acts/<n>/overview.md` cho per-Act emotional arc và theme.

---

## 9. Act node template (cho design)

### 9.1 Pháp Trận node

```yaml
node_type: phap_tran
id: act1_pt1
name: "Khai Đan"
position: [x, y]  # on act map illustration
unlock_condition: previous_node_clear
content:
  dan_phap_overlay: "tutorial_moc_linh_phap_pham_target"
  linh_luc_spawn_bias: "100% Moc"
  stability_lock: true  # tutorial mode
  enemy: null  # no boss
  reward:
    - currency: 1 linh_dan
    - unlock: linh_khi_drop_pool_act1
tutorial_overlays:
  - on_start: "Đặt linh khí..."
  - on_first_collision: "+10% — Đồng hành!"
  - on_complete: "Phẩm cấp Linh đạt được!"
```

### 9.2 NPC node

```yaml
node_type: npc
id: act1_npc1
name: "Đạo Sĩ Mộc Linh"
portrait: "moc_linh_portrait.png"
dialogue_tree: "act1_moc_linh.yaml"
reward:
  - currency: 3 linh_dan
  - lore_page: "moc_element_intro"
quest:
  type: tutorial
  content: "Explain Mộc element fundamentals"
```

### 9.3 Side node (optional)

```yaml
node_type: side
id: act1_side1
name: "Lão Tiều Phu"
position: [x, y]
optional: true
content: short story snippet
reward:
  - linh_khi: random_moc_phàm
lore_page: "act1_villager_culture"
```

### 9.4 Boss node

```yaml
node_type: boss
id: act1_boss
name: "Tâm Ma Sơn Mộc"
boss_type: "tâm_ma_small"
attack_pattern_file: "tam_ma_son_moc.yaml"
on_clear:
  - unlock: act2_portal
  - reward: lò_thân_slot_upgrade
  - lore_page: "tam_ma_concept_intro"
```

---

## 10. Content estimate

| Component | Count for v1.0 |
|---|---|
| Acts | 5 |
| Nodes per act | ~12 |
| Total nodes | ~55 |
| Act background paintings | 5 |
| NPC portraits (campaign) | 15 |
| NPC dialogue (avg lines/NPC) | 30 |
| Boss attack patterns | 5 + 3 endgame types |
| Lore pages | ~50 |
| Tutorial overlay screens | ~30 |
| Cutscene moments (intro + each act outro) | 6 |

**Estimated solo + AI throughput**: ~3 months full-time for campaign content (within Phase 2 Alpha).

---

## 11. Decision log

- **2026-05-19**: Onboarding architecture locked. 5 acts, illustrated node maps, Sơn Hà Đồ Lệnh map device, emergent bí cảnh composition. D21-D25 added to master spec.

Update protocol: changes to onboarding flow → update this doc + bump master spec version.
