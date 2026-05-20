# Onboarding — Lư Đan

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

### Pháp Trận #1: "Khai Đan" (5-7 phút)

**Goal**: Teach physics + linh khí placement.

- **Constraints**: 3 linh khí Mộc cho sẵn, gợi ý vị trí đặt (slot sáng nhấp nháy)
- **Linh lực**: 100% Mộc element (đồng hành — không tương khắc)
- **Linh đan**: Mộc, target Phàm→Linh (1 grade up only)
- **Stability frozen 100%** — không thể bể
- **Tooltip overlay** sequenced:
  1. "Đặt linh khí vào ô sáng" (animated arrow)
  2. "Bấm 'Luyện Đan' để linh lực rơi xuống"
  3. "Linh lực qua linh khí → vào linh đan → Quality tăng"
  4. "Đạt 100% → linh đan thăng Linh phẩm"
- **Reward**: Cổ vật **"Sư Phụ Truyền Đan"** (first unique, narrative weight: do tổ sư trao)

### Pháp Trận #2: "Tương Sinh" (7-10 phút)

**Goal**: Introduce Thuỷ + tương sinh concept.

- **Constraints**: chọn 5 linh khí từ 10 options
- **Linh lực**: 70% Mộc + 30% Thuỷ (Thuỷ sinh Mộc → buff)
- **Floating numbers**: `+30%` green pop trên collision tương sinh, `+10%` blue trên đồng hành
- **Linh đan**: Mộc, target Phàm→Linh→Bảo (2 phẩm). Stability gentle (cap 50% damage rate)
- **NPC hint mid-ván**: *"Thuỷ sinh Mộc — đan của con sẽ uống Thuỷ lực mà lớn."*
- **Reward**: 10 Linh Đan (currency starter pack)

### Pháp Trận #3: "Tương Khắc" (10-12 phút)

**Goal**: Introduce Kim + tương khắc + element routing strategy.

- **Constraints**: full 8 slot freedom, drop inventory access
- **Linh lực**: 50% Mộc + 30% Thuỷ + 20% **Kim (tương khắc Mộc)**
- **Hint**: *"Kim khắc Mộc — phải route Kim AWAY hoặc CONVERT element qua linh khí Hoả"*
- **Stability có thể giảm thực** — Kim hit thẳng đan = stability drop
- **First fail OK**: NPC hint stronger, retry with: *"Đặt linh khí Hoả TRƯỚC đan để chuyển Kim → Hoả"*
- **Reward**: unlock **base camp** + welcome tour

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
- ❌ KHÔNG auto-pop tooltip — chỉ activate trên 3s hover
- ❌ KHÔNG lock-step — player có thể experiment trong constraint
- ✅ Learn-by-doing
- ✅ Cheat sheet permanent: **Ngũ Hành wheel UI** ở bottom-right, always visible
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
- Player click node to enter (no avatar walking)
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

### 2.3 Act 1: Khởi Đan (detail)

**Map**: Sơn Mộc Cốc — valley với rừng trúc, đình am Sư Phụ ở đỉnh.

**Story arc**: 
> *Bạn là đệ tử mới của Sư Phụ. Sống ở am tu hành heo hút. Sư Phụ trao cho bạn Lò Luyện Đan gia truyền và dạy nghệ thuật luyện linh đan...*

**Nodes**:
1. 🏯 **Am Sư Phụ** (hub)
2. ● Pháp Trận #1: Khai Đan (tutorial)
3. 🧙 **Đạo Sĩ Mộc Linh** — NPC dạy về Mộc element + cho 3 Linh Đan reroll
4. ● Pháp Trận #2: Tương Sinh
5. 🌳 **Lão Tiều Phu** (side) — câu chuyện ngắn, reward 1 linh khí Mộc Phàm random
6. ● Pháp Trận #3: Tương Khắc
7. 👹 **BOSS: Tâm Ma Sơn Mộc** — small Tâm Ma, attack pattern dễ học
8. ⟶ Cổng Act 2

**Systems unlocked**:
- Linh khí placement (tutorial)
- Linh Đan reroll currency
- Base camp access

**Reward Act 1 clear**: +1 Lò Thân slot upgrade, story page unlock.

### 2.4 Act 2: Ngũ Hành Khai Mông (detail)

**Map**: Ngũ Hành Sơn — 5 peak panorama, mỗi peak 1 element.

**Story arc**: 
> *Sư Phụ giao nhiệm vụ: leo 5 ngọn núi tương ứng Ngũ Hành. Mỗi ngọn có 1 đạo sĩ tu hành dạy 1 nguyên tố. Học đủ Ngũ Hành mới hiểu được tương sinh tương khắc thực sự.*

**Nodes** (~12):
1. 🏯 Chân núi (hub)
2-6. 🧙×5 **5 đạo sĩ tu hành**: Kim Tổ, Mộc Tổ, Thuỷ Tổ, Hoả Tổ, Thổ Tổ (mỗi NPC dạy 1 element + cho 1 linh khí element đó)
7-10. ●×4 Pháp Trận element specific (1 cho mỗi element trừ Mộc đã quen)
11. 🌳 Optional: ẩn sĩ thân thiện ở giữa núi (cho Tinh Hoa Ngũ Hành sample)
12. 👹 **BOSS: Dị Tượng Ngũ Hành** — boss random switch element mỗi 5s, force adapt
13. ⟶ Cổng Act 3

**Systems unlocked**:
- All 5 elements + Vô Cực
- Tinh Hoa Ngũ Hành craft (Đan Lư Bàn)
- Phong Ấn intro (first time use = 3s confirmation modal explaining 4 outcomes)
- Tâm Ma mod 1 slot (pre-pháp-trận chọn 1 modifier)

### 2.5 Act 3: Đan Lư Tu Luyện (detail)

**Map**: Hoả Sơn Lò Cốc — volcanic, lò luyện đan cổ xưa.

**Story arc**: 
> *Lò gia truyền bị nứt sau Boss Ngũ Hành. Player phải tìm Lò Thần — bậc đại sư xưa kia luyện ra Lò — sửa Lò. Trên đường đến Lò Thần, học cách affix linh khí, craft bench, mở các vendor cấp cao.*

**Nodes**:
1. 🏯 Hub: lò bị nứt
2. 🧙 **Đan Sư Hắc Bạch** — dạy bench craft
3. ● Pháp Trận #1: rare drop Lò part (intro affix)
4. 🧙 **Lão Hồ Ly** (Đạo Quán bây giờ mở full)
5. ● Pháp Trận #2: gather affix material
6. 🧙 **Tổ Sư Bất Tử** — first appearance, sell Cổ vật (đắt cắt cổ)
7. 🌳 Optional: cave với hidden Linh Đan stash
8. ● Pháp Trận #3: boss-level Tâm Ma scout
9. 🧙 **Lò Thần** — repair lò, unlock 8 slot
10. 👹 **BOSS: Tâm Ma Hoả Sơn** — high intensity boss, test affix knowledge
11. ⟶ Cổng Act 4

**Systems unlocked**:
- Lò 4 → 8 slot
- Full affix system (prefix/suffix/implicit)
- Bench craft + Tẩy Đan (Annul)
- Đạo Quán full (3 vendors)
- Tâm Ma mod 2 slots

### 2.6 Act 4: Đan Pháp + Đạo Phái (detail)

**Map**: Bích Hải Đảo (island) → Vô Cực Đỉnh (cosmic peak). 2-stage map.

**Story arc**: 
> *Trên Bích Hải Đảo, player gặp Pháp Sư Bản Đồ — dạy tạo Đan Pháp riêng. Học cách compose Nguyên Liệu + Đan Dược splash. Sau khi tự luyện được Đan Pháp đầu tiên, đến Vô Cực Đỉnh đối mặt "Tâm Ma Đại Sát" — chọn đường tu hành.*

**Nodes** (~14, longer act):
1. 🏯 Bích Hải port
2. 🧙 **Pháp Sư Bản Đồ** — dạy Đan Pháp
3. ● Pháp Trận #1: drop first Đan Pháp tự design
4. 🧙 **Linh Hoa Thương Nhân** — bán Nguyên Liệu basic
5. ● Pháp Trận #2: dùng Đan Pháp craft + Nguyên Liệu
6. 🌳 Optional: thuyền câu cá → mini-game, reward Nguyên Liệu rare
7. ● Pháp Trận #3: test composition skill
8. 🧙 **Cao Tổ** — final mentor before Đạo Phái
9. ● Pháp Trận #4: pre-Đạo-Phái challenge
10. ⟶ Transition: Vô Cực Đỉnh
11. 🧙 **Sư Phụ** appears at peak — speech about choosing path
12. 👹 **BOSS: "Tâm Ma Đại Sát"** — boss thay đổi attack pattern theo Đạo Phái player sẽ chọn
13. ⟡ **Đạo Phái chọn lựa**: 5 paths (Thái Cực / Cửu Âm / Linh Sơn / Tử Vi / Vô Cực) — không đổi
14. ⟶ Cổng Act 5

**Systems unlocked**:
- Đan Pháp craft (basic 5 variants intro: Tiêu Chuẩn, Tử Sinh, Cổ Đan Lò, Long Cung, Vô Cực)
- Nguyên Liệu 4 slot
- Đan Dược splash 3 slot
- Tâm Ma mod 3 slot
- **Đạo Phái** (Ascendancy) chọn lựa

### 2.7 Act 5: Khai Sơn Hà (detail)

**Map**: Hồn Nguyên Điện — cosmic temple, floating in void.

**Story arc**: 
> *Sau khi chọn Đạo Phái, Sư Phụ tiết lộ bí mật: Lò luyện đan thật ra là một mảnh của **Sơn Hà Đồ Lệnh** cổ truyền. Bằng cách defeat Hỗn Nguyên Tâm Ma Vương — boss cuối campaign — player thu được Sơn Hà Đồ Lệnh hoàn chỉnh, mở khoá toàn bộ universe of bí cảnh.*

**Nodes** (~12):
1. 🏯 Hồn Nguyên Điện entrance
2. 🧙 **Sư Phụ final speech** — lore reveal
3. ● Pháp Trận #1: meet Tâm Ma boss types (Dị Tượng + Tâm Ma + Thiên Kiếp wave)
4. 🧙 **Tổ Sư Bất Tử** — reveals true identity (the original creator of Sơn Hà Đồ Lệnh)
5. ● Pháp Trận #2: high-intensity challenge
6. 🌳 Optional: secret library (lore pages + 1 Cổ vật roll)
7. ● Pháp Trận #3: Đạo Phái synergy test (uses new ascendancy)
8. 🧙 **Lão Bà Thiên Cơ** — first appearance, intro Thiên Cơ Quẻ meta
9. 🧙 **Pháp Sư Bản Đồ** — gives Đan Pháp variants 5 còn lại (Hỗn Nguyên, Thiên Kiếp, Tâm Ma, Cửu Tiêu, Diêm Phủ)
10. ● Pháp Trận #4: pre-final
11. 👹 **BOSS: Hỗn Nguyên Tâm Ma Vương** — multi-phase boss, climax of campaign
12. 🎁 **REWARD: Sơn Hà Đồ Lệnh** → Atlas opens

**Systems unlocked**:
- Sơn Hà Đồ Lệnh (Map Device)
- Atlas tree access (Sơn Hà Đồ)
- Thiên Cơ Quẻ meta
- All 10 Đan Pháp variants
- Cổ vật consecrate slot (3 max, unlock level 70 later)

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
║   │  ◄ drag từ stash               │            ║
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

- Hover < 1s: nothing
- Hover 1-3s: brief description
- Hover 3s+: full details + "Nhấn ? để học thêm" → opens portal to doc
- First-time tooltip: extended explanation, dismiss after first read

### 5.3 Smart defaults

- First Đan Pháp draft = auto-filled if player has none
- First Phong Ấn click = 3-sec confirmation modal explaining 4 outcomes (subsequent: skip)
- First Cổ vật drop = mini-tutorial on rarity tiers
- First boss attack = slow-mo first 2s with hint overlay

### 5.4 NPC mentor (Sư Phụ)

- Always available at base camp
- Click any time → "Sư Phụ ơi, con phải làm gì tiếp?" → hint hiển thị next quest
- Sư Phụ KHÔNG nhắc cùng câu 2 lần (avoid annoyance)

### 5.5 Cheat sheet UI

Always visible bottom-right:
- **Ngũ Hành wheel** (Kim/Mộc/Thuỷ/Hoả/Thổ) with current linh đan element highlighted
- Tương sinh arrow (green) + Tương khắc arrow (red) from current element
- Mini chart at any moment

### 5.6 Quest tracker

Top-left HUD:
- Current quest objective (one line)
- "Next: [act 1 boss]" or "Talk to Sư Phụ"
- Click → expand to full quest log

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

Hover Vietnamese term → show:
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

Story arc tied to player's tu hành journey:

| Act | Theme | Emotional beat |
|---|---|---|
| **1** | "Tôi là đệ tử mới" | Discovery, awe |
| **2** | "Tôi học hiểu Ngũ Hành" | Mastery, understanding |
| **3** | "Lò vỡ — tôi phải sửa" | Struggle, repair |
| **4** | "Tôi chọn đường tu hành riêng" | Identity, commitment |
| **5** | "Sư Phụ truyền lại bí mật tối cao" | Revelation, ascension |

→ Player **CARE** về tutorial vì có story arc, không phải dry training.

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
