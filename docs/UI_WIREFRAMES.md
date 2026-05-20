# UI Wireframes — Cửu Đỉnh

> Per-screen wireframes + state diagrams. Locked layout principles before implementation.

> **Locked decision**: tối giản UI, KHÔNG đơn giản hoá feature.

---

## 0. Design principles

1. **PoE-grade information density**: don't hide numbers
2. **No tutorial wall**: tooltip on-demand
3. **Mode-less navigation**: hub-style, không page lockstep
4. **Asian aesthetic**: ô lệch, hoa văn vàng, brush stroke titles
5. **Single-handed friendly**: keyboard-only navigable cho accessibility

---

## 1. Navigation map (state diagram)

```
                       ┌─────[Settings]
                       │
                  [Main Menu]
                       │
              ┌────────┼────────┐
        [New Game]  [Load]  [Veteran Skip]
              │        │
              └────┬───┘
                   ↓
                [BASE CAMP HUB]
                   │
       ┌───────┬───┴───┬───────┬───────┐
       │       │       │       │       │
   [Lò Editor] [Tinh Điểm Tree] [Atlas/Pháp Trận] [Stash] [Vendor]
       │       │       │       │       │
       │       │   [Sơn Hà Đồ Lệnh]    │       │
       │       │       │       │       │
       │       │   [Pháp Trận instance]│       │
       │       │       │       │       │
       └───────┴───────┴───────┴───────┘
                       │
                   [Loot Screen]
                       │
                       ↓
                   [BASE CAMP HUB]
```

Player can navigate from base camp to any sub-screen and back without lockstep.

---

## 2. Main Menu

```
╔════════════════════════════════════════════════════════╗
║                                                        ║
║                                                        ║
║                      CỬU ĐỈNH                            ║
║          (Vietnamese calligraphy logo)                 ║
║                                                        ║
║                                                        ║
║                  [Tu Hành Mới]                         ║
║                  [Tiếp Tục]                            ║
║                  [Cài Đặt]                             ║
║                  [Thoát]                               ║
║                                                        ║
║                                                        ║
║   Tu danh: Vô Danh   Cấp 0   Tu thời: 0:00:00         ║
║                                                        ║
╚════════════════════════════════════════════════════════╝

Background: Painted cosmic temple / tiên phủ scene with linh đan rising.
Music: Slow đàn bầu + ambient.
```

---

## 3. Base Camp Hub (main hub)

```
╔════════════════════════════════════════════════════════════╗
║  [Lò] [Tree] [Atlas] [Sơn Hà] [Stash] [Vendor]    [Profile]║  top nav
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║         🏯 Khai Lư Trấn (base camp village)               ║
║                                                            ║
║       🧙 Sư Phụ              🦊 Lão Hồ Ly                  ║
║         (quest hint)           (gambling)                  ║
║                                                            ║
║                                                            ║
║                  🪔 Sơn Hà Đồ Lệnh                         ║
║                  (map device altar, locked early)          ║
║                                                            ║
║                                                            ║
║       🔨 Đan Lư Bàn          🛍 Đạo Sĩ Vô Danh            ║
║         (crafting)              (mid vendor)               ║
║                                                            ║
║       💀 Lò Thần (lock)       🎟 Lão Bà Thiên Cơ (lock)  ║
║         (Lò repair)             (quẻ, Act 5+)             ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║ 💰 Kim Đan: 1,250   🔵 Linh Đan: 12   🔴 Phong Ấn: 3      ║  bottom HUD
║                                                            ║
║ Cấp Đạo Sĩ: 8/100 ▓▓▓░░░░░░░ 35%   Quest: "Đi gặp Mộc Linh"║
╚════════════════════════════════════════════════════════════╝
```

### Interactive elements
- Click NPC → dialogue
- Click 🪔 Sơn Hà Đồ Lệnh → Sơn Hà Đồ Lệnh altar screen
- Click 🔨 Đan Lư Bàn → Crafting screen
- Top nav: page navigation

### Visual style
- Background: tiên phủ courtyard / đan thất painted scene
- NPCs: pixel sprites
- HUD: text overlay with pháp trận / vân mây border decorative

---

## 4. Lò Editor

```
╔════════════════════════════════════════════════════════════╗
║  [Lò Editor]                          [← Back to Hub]      ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║     ┌─────────────────────────────────────────────┐        ║
║     │                                              │        ║
║     │          ⚱ LÒ LUYỆN ĐAN                    │        ║
║     │                                              │        ║
║     │    [Đỉnh Phàm] (drag to change)             │        ║
║     │       ▼                                      │        ║
║     │    ╔═══════╗                                 │        ║
║     │    ║       ║   [Khắc Phù] (amulet slot)     │        ║
║     │    ║ THÂN  ║                                 │        ║
║     │    ║       ║   [Đồ Sương L] [Đồ Sương R]    │        ║
║     │    ║       ║                                 │        ║
║     │    ╚═══╤═══╝                                 │        ║
║     │   [Quai L] [Quai R]   [Nắp]                  │        ║
║     │                                              │        ║
║     │    [Đế] (foot slot)                          │        ║
║     │                                              │        ║
║     │    [Dây Phong Ấn] (belt slot)                │        ║
║     │                                              │        ║
║     └─────────────────────────────────────────────┘        ║
║                                                            ║
║     ┌─ Selected: Đỉnh Phàm ──────────────────────┐         ║
║     │ Implicit: 1 banh/2s, random angle ±30°    │         ║
║     │ Prefix: [none]                             │         ║
║     │ Suffix: [none]                             │         ║
║     │ Cấp: Phàm                                   │         ║
║     │ [Reroll 1 Linh Đan]  [Phong Ấn ?]          │         ║
║     └────────────────────────────────────────────┘         ║
║                                                            ║
║     Lò Cấp: Phàm   Total slots used: 4/9   Power: 145      ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║ Stash: [Đỉnh thay thế: 3 sẵn]                              ║
╚════════════════════════════════════════════════════════════╝
```

### Interactive
- Click any slot → details panel below
- Right-click slot → context menu (reroll, swap, remove)
- Drag from stash → swap slot

### Notes
- 9 slot total (8 listed + 2 Đồ Sương counts as 2)
- Each part shows tier + key affix preview
- Power score = arbitrary "build strength" metric

---

## 5. Tinh Điểm (Passive Skill Tree)

```
╔════════════════════════════════════════════════════════════╗
║  [Tinh Điểm Tree]            [← Back] [Search] [Allocate] ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║              [Mộc Start]              [Hoả Start]          ║
║                 ●                        ●                 ║
║                ╱                          ╲                ║
║         ●────●─●──●                  ●──●─●────●          ║
║        ╱       │                      │       ╲           ║
║   [Thuỷ]──●   ●  ●        ●  ●   ●──[Kim]              ║
║              │  ◆ ◆      ◆ ◆ │                          ║
║              │  ╲╱  ●  ●  ╲╱ │                          ║
║              │  ╱╲ ◆ VÔ ◆ ╱╲ │                          ║
║              │ ●  ╲ CỰC╱  ● │                          ║
║              │ │   ╲ ◇ ╱   │ │                          ║
║              │ │    ╲╱    │ │                          ║
║              ◆────●──●───●─◆                            ║
║                                                            ║
║                       [Thổ Start]                          ║
║                            ●                              ║
║                                                            ║
║   ● = Travel node (unallocated)  ●= Allocated             ║
║   ◆ = Notable (cluster)  ◇ = Keystone (game-changing)     ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║  Tinh Điểm: 8/110 spent          [Path planner] [Refund]  ║
║                                                            ║
║  Hover any node for tooltip.                              ║
║  Click to allocate (if adjacent to spent node).           ║
╚════════════════════════════════════════════════════════════╝
```

### Interactive
- Pan/zoom map (mouse drag, scroll)
- Click adjacent node → allocate (1 point)
- Right-click → unallocate (with respec cost)
- Search: jump to specific node
- Path planner: click target node, auto-suggest path

### Visual style
- Map: tree-like structure, painted bí cảnh background
- Allocated nodes: bright gold glow
- Adjacent allocatable: light pulse
- Keystones: large diamond shape, color per element

---

## 6. Sơn Hà Đồ Lệnh Altar

```
╔════════════════════════════════════════════════════════════╗
║  [Sơn Hà Đồ Lệnh]                        [← Back to Hub]  ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║          ┌─────── Sơn Hà Đồ Lệnh Altar ──────┐            ║
║          │                                     │            ║
║          │   [Đan Pháp Slot]                  │            ║
║          │   ┌──────────────────────────┐    │            ║
║          │   │  ◄── drag từ stash       │    │            ║
║          │   │     "Tử Sinh Mộc T8"     │    │            ║
║          │   └──────────────────────────┘    │            ║
║          │                                     │            ║
║          │   [Nguyên Liệu × 4]               │            ║
║          │   ┌────┐ ┌────┐ ┌────┐ ┌────┐    │            ║
║          │   │HoảT│ │Long│ │ —  │ │ —  │    │            ║
║          │   └────┘ └────┘ └────┘ └────┘    │            ║
║          │                                     │            ║
║          │   [Đan Dược Splash × 3]            │            ║
║          │   ┌────┐ ┌────┐ ┌────┐             │            ║
║          │   │P.A.│ │CổĐ │ │ —  │             │            ║
║          │   └────┘ └────┘ └────┘             │            ║
║          │                                     │            ║
║          │   [Tâm Ma Mod Offering × 3]        │            ║
║          │   ┌────┐ ┌────┐ ┌────┐             │            ║
║          │   │Cuồn│ │Đại │ │ —  │             │            ║
║          │   └────┘ └────┘ └────┘             │            ║
║          │                                     │            ║
║          │   Preview:                          │            ║
║          │   "20-room Mộc dungeon với Hoả     │            ║
║          │    drop bias, Phong Ấn ngẫu nhiên, │            ║
║          │    +Cổ vật drop, tâm ma intensify"  │            ║
║          │                                     │            ║
║          │       [KHAI BÍ CẢNH]                │            ║
║          │                                     │            ║
║          └─────────────────────────────────────┘            ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║ Linh Khí Stash: 47 items / 1000  Hover for details         ║
╚════════════════════════════════════════════════════════════╝
```

### Interactive
- Drag-drop từ stash vào slots
- Hover Đan Pháp → show full stats
- AI preview auto-update when composition changes
- "Khai Bí Cảnh" → confirm modal → enter pháp trận

---

## 7. Pháp Trận (Combat Screen) — 3 phases

### 7.1 Setup phase

```
╔════════════════════════════════════════════════════════════╗
║ Pháp Trận: Tử Sinh Mộc T8  Ván 1/8  [Skip Setup] [Pause]  ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║                                                            ║
║                                                            ║
║          [Linh khí pool]    [Anchor points]                ║
║          (left panel)        (right board)                 ║
║                                                            ║
║       ┌──── stash ────┐    ┌──── board ────┐              ║
║       │ Cành Bồ Đề    │    │       ★        │              ║
║       │ Huyền Chung   │    │  ★         ★  │              ║
║       │ Bình Cam Lộ   │    │       ★        │              ║
║       │ Đèn Lá Sen    │    │  ★         ★  │              ║
║       │ ... (more)    │    │   ┌──────┐   │              ║
║       └───────────────┘    │   │ LINH │   │              ║
║                            │   │ ĐAN  │   │              ║
║                            │   │ Mộc 0│   │              ║
║                            │   └──────┘   │              ║
║                            └───────────────┘              ║
║                                                            ║
║                                                            ║
║                       [Bắt Đầu Luyện]                      ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║ Time: ∞ (until start)  Tâm Ma Mod: Hồn Cuồng + Đại Khắc   ║
║                                                            ║
║ ⓘ Ngũ Hành wheel: [Kim→Thuỷ→Mộc→Hoả→Thổ] cheat sheet      ║
╚════════════════════════════════════════════════════════════╝
```

### 7.2 Simulate phase

```
╔════════════════════════════════════════════════════════════╗
║ Pháp Trận: Tử Sinh Mộc T8  Ván 1/8  Quality 47%  Stab 73%║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║      ╲ ╲  ●  ╲  ●                                          ║
║       ╲  ●     ●                                           ║
║        ●   ╲ ●                                             ║
║                                                            ║
║          ★       ★    ←  linh khí placed                  ║
║       ★              ★                                     ║
║          ★                                                 ║
║              ★      ★                                      ║
║                                                            ║
║              ┌──────┐                                      ║
║              │ LINH │  ←  linh đan glowing                ║
║              │ ĐAN  │                                      ║
║              │ Mộc 47%                                     ║
║              └──────┘                                      ║
║                                                            ║
║                                                            ║
║      +12% quality (Mộc tương sinh)                         ║
║      -5 stability (Kim tương khắc)                         ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║ Time: 87s / 90s  Combo chain: 3   [Pause] [Quit Pháp Trận]║
╚════════════════════════════════════════════════════════════╝
```

### 7.3 Loot phase (between ván)

```
╔════════════════════════════════════════════════════════════╗
║ Ván 1 Hoàn Thành — Quality 78%  Stability 65%             ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║                   LOOT DROP                                ║
║                                                            ║
║     [linh khí ×2]   [linh đan ×3]   [phong ấn ×1]         ║
║      🟦 Linh        🔵 Linh Đan     🔴 Phong Ấn           ║
║      Bùa Tử Vi                                              ║
║                                                            ║
║     +320 XP   +200 gold                                    ║
║                                                            ║
║     [Tiếp tục Ván 2 →]                                     ║
║                                                            ║
║     ⚠ Stability 65% — đan ổn định nhưng cần chú ý.         ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║ Cấp Đạo Sĩ: 8 → 8 (35% → 42%)                              ║
╚════════════════════════════════════════════════════════════╝
```

---

## 8. Đan Lư Bàn (Crafting)

```
╔════════════════════════════════════════════════════════════╗
║  [Đan Lư Bàn — Crafting]                  [← Back to Hub] ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║      [Selected item slot]                                  ║
║      ┌────────────────────────────────────┐                ║
║      │ 🟦 Huyền Chung (Bảo, Kim)           │                ║
║      │ Implicit: sóng đẩy 80px              │                ║
║      │ Prefix: +35% intensity Kim          │                ║
║      │ Prefix: 15% nhân đôi banh           │                ║
║      │ Suffix: Hút linh lực 60px            │                ║
║      └────────────────────────────────────┘                ║
║                                                            ║
║                                                            ║
║      [Linh Đan reroll]    [Tinh Hoa]    [Bench]   [Tẩy Đan]║
║       1 Linh Đan          1 Tinh Hoa    100 gold  1 Đan Tẩy║
║                                                            ║
║      ┌─[Linh Đan reroll]─────────────────────┐             ║
║      │ Roll random:                          │             ║
║      │ - All 3 affixes will be re-rolled    │             ║
║      │ - Implicit untouched                  │             ║
║      │ - 30% chance better, 70% chance worse│             ║
║      │                                       │             ║
║      │       [Confirm Reroll]                │             ║
║      └───────────────────────────────────────┘             ║
║                                                            ║
║      Inventory: 12 Linh Đan available                      ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║ Đan Sư Hắc Bạch are silent and watching. (NPCs in BG)     ║
╚════════════════════════════════════════════════════════════╝
```

---

## 9. Vendor Screen (Lão Hồ Ly example)

```
╔════════════════════════════════════════════════════════════╗
║ Đạo Quán: Lão Hồ Ly  Stock refreshes every map clear      ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║     1. 🟦 Linh khí Linh "Cành Bồ Đề"   45 gold            ║
║     2. 🟦 Linh khí Linh "Đèn Lá Sen"   60 gold            ║
║     3. 🟪 Linh khí Bảo "Huyền Chung"   280 gold           ║
║     4. 🔵 Linh Đan × 5                  150 gold            ║
║     5. 🔴 Phong Ấn × 1                  80 gold             ║
║     6. ⚪ Đan Tẩy Niêm × 3              60 gold            ║
║     7. 🟪 Bảo unidentified              500 gold           ║
║                                                            ║
║                                                            ║
║     [Refresh stock — 50 gold]                              ║
║                                                            ║
║     LÃO HỒ LY: "Aiya, đệ tử! Hôm nay có hàng mới —        ║
║      may mắn lắm. Mua đi mua đi..."                        ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║ Player gold: 1,245                                         ║
╚════════════════════════════════════════════════════════════╝
```

---

## 10. Atlas Screen

```
╔════════════════════════════════════════════════════════════╗
║  [Sơn Hà Đồ — Atlas]                      [← Hub]  [Tree] ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║                    🏛 BOSS NORTH                           ║
║                       ⬆                                    ║
║              ●━━━━━━●━━━━━━━●                              ║
║              │      │       │                              ║
║         🏛   ●─●────VÔ─●────●  🏛                           ║
║         BOSS WEST  CỰC      BOSS EAST                      ║
║              │      │       │                              ║
║              ●━━━━━━●━━━━━━━●                              ║
║                       ⬇                                    ║
║                    🏛 BOSS SOUTH                           ║
║                                                            ║
║                                                            ║
║   ● = unlocked pháp trận    ⚪ = locked    🏛 = corner boss ║
║                                                            ║
║   Hover any node to see Đan Pháp drop pool + difficulty.  ║
║   Click to fast-travel.                                    ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║ Player level: 47  Atlas progress: 23/150  Tier max: T8    ║
╚════════════════════════════════════════════════════════════╝
```

---

## 11. Stash Screen

```
╔════════════════════════════════════════════════════════════╗
║  [Stash]                                  [← Back to Hub] ║
╠════════════════════════════════════════════════════════════╣
║  TABS: [Đan Dược][Linh Khí][Đan Pháp][Nguyên Liệu]        ║
║        [Cổ Vật][Lò Parts]                                  ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  Đan Dược tab active:                                      ║
║                                                            ║
║  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐                ║
║  │🔵12│ │🟣 5│ │🔴 3│ │🟠 1│ │🌈 0│ │⚪25│                ║
║  │LĐ  │ │TH  │ │PA  │ │CC  │ │CĐ  │ │ĐT  │                ║
║  └────┘ └────┘ └────┘ └────┘ └────┘ └────┘                ║
║                                                            ║
║  ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐                       ║
║  │ 2  │ │ 1  │ │ 3  │ │ 0  │ │ 5  │                       ║
║  │TH-K│ │TH-M│ │TH-T│ │TH-H│ │TH-Th│                      ║
║  └────┘ └────┘ └────┘ └────┘ └────┘                       ║
║                                                            ║
║  Hover: Show effect tooltip                                ║
║  Click: Drag to use slot                                   ║
║                                                            ║
╠════════════════════════════════════════════════════════════╣
║ Total slots used: 47/200                                   ║
╚════════════════════════════════════════════════════════════╝
```

---

## 12. Cheat sheet UI (always visible)

Bottom-right corner of all gameplay screens:

```
╔═══════════════════╗
║  NGŨ HÀNH          ║
║                    ║
║       Kim          ║
║      / | \         ║
║     /  |  \        ║
║   Thuỷ-+-Hoả       ║
║     \  |  /        ║
║      \ | /         ║
║       Thổ          ║
║                    ║
║  Mộc đan: 🟩       ║
║  Tương sinh: Thuỷ  ║
║  Tương khắc: Kim   ║
╚═══════════════════╝
```

Always shows:
- Ngũ Hành wheel
- Current linh đan element (highlighted)
- Tương sinh element (green arrow)
- Tương khắc element (red arrow)

---

## 13. Settings Screen

```
╔════════════════════════════════════════════════════════════╗
║  [Cài Đặt]                                [← Back to Hub] ║
╠════════════════════════════════════════════════════════════╣
║                                                            ║
║  Đồ Hoạ:                                                   ║
║   Resolution: 1920x1080 ▼                                  ║
║   Fullscreen: ☑                                            ║
║   VSync: ☑     FPS Cap: 60 / 120 / Unlimited              ║
║                                                            ║
║  Âm Thanh:                                                  ║
║   Master: ▓▓▓▓▓▓▓▓░░ 80%                                  ║
║   Music:  ▓▓▓▓▓▓░░░░ 60%                                  ║
║   SFX:    ▓▓▓▓▓▓▓▓░░ 80%                                  ║
║                                                            ║
║  Ngôn Ngữ: Tiếng Việt ▼ (English / 中文 / 日本語)          ║
║                                                            ║
║  Tu Chân:                                                   ║
║   Veteran Mode: ☑ (skip Act 1 tutorial)                   ║
║   Difficulty: Standard ▼ (Easy / Standard / Hard)         ║
║                                                            ║
║  Accessibility:                                             ║
║   Colorblind Mode: Off ▼                                   ║
║   Font Scale: 100% ▼                                        ║
║   Visual SFX Cues: ☐                                       ║
║   Key Remap...                                              ║
║                                                            ║
║  [Save] [Cancel]                                            ║
║                                                            ║
╚════════════════════════════════════════════════════════════╝
```

---

## 14. Modal patterns

### Confirmation modal (for dangerous actions)

```
╔════════════════════════════════╗
║  ⚠ Áp Phong Ấn                 ║
║                                ║
║  Phong Ấn không thể undo.     ║
║                                ║
║  4 kết quả ngẫu nhiên:        ║
║  - 25% Phá Niêm (strip)       ║
║  - 25% Giáng Phẩm             ║
║  - 25% Thăng Phẩm             ║
║  - 25% Khắc Phong Ấn          ║
║                                ║
║  [Tiếp tục]  [Huỷ]              ║
╚════════════════════════════════╝
```

First-time: 3-second delay before [Tiếp tục] enabled. Subsequent: immediate.

### Error / failure modal

```
╔════════════════════════════════╗
║  LINH ĐAN BỂ                   ║
║                                ║
║  Pháp trận thất bại.          ║
║  Loot bị mất.                  ║
║                                ║
║  Lò + Cấp + Stash an toàn.    ║
║                                ║
║  [Quay về camp]                ║
╚════════════════════════════════╝
```

---

## 15. Decision log

- **2026-05-19**: Initial UI wireframe locked. 14 screens defined. Cheat sheet always-on. Modal patterns standardized.
