# Content Inventory — Cửu Đỉnh

> Catalog mọi item, affix, naming convention. **Directional examples** — không exhaustive. AI-driven content gen sẽ expand từ patterns này.

> Updates: bump version + add changelog entry below.

---

## 0. Naming conventions

**Hán-Việt tu chân first for player-facing names. Code identifiers may remain English per naming pivot.**

### Pattern

```
[Tên định danh] [Element prefix (optional)] [Tier suffix (optional)]
```

Examples:
- `Huyền Thiên Chung` (item: Huyền Chung, tier: Cổ)
- `Mộc Linh Đèn Lồng` (item: Đèn Lồng, element: Mộc, no tier)
- `Hoả Phụng Ngọc Châu` (item: Ngọc Châu, element: Hoả-Phụng combo)

### Vocabulary banks (cho AI content gen)

**Item base nouns** (object types):
- Huyền Chung, Đèn Lồng, Quạt, Phù, Trận Kỳ, Ngọc Giản, Bình, Đỉnh, Lư, Hồ Lô, Linh Châu, Phi Kiếm, Kiếm, Đao, Bảo Ấn

**Element adjectives**:
- Kim: Bạch / Vàng / Sắc / Đồng / Thiết
- Mộc: Lục / Bích / Thanh / Sinh / Cành
- Thuỷ: Hắc / Lam / Lưu / Tịnh / Hàn
- Hoả: Đỏ / Hồng / Liệt / Lửa / Hoả Linh
- Thổ: Hoàng / Nâu / Trầm / Vô / Đất
- Vô Cực: Hỗn / Vô / Cổ / Thiên / Hỗn Nguyên

**Adjective postfix** (descriptive flair):
- Linh, Thiên, Cổ, Bảo, Thần, Tử, Sinh, Hồn, Phách, Quỷ, Tiên

### Identifier rules

- Code: English canonical ID per naming pivot, e.g. `mystic-bell`
- File: `mystic-bell.tres` (kebab-case)
- Display: `Huyền Thiên Chung` (Vietnamese/Hán-Việt with diacritics)
- NEVER use Western fallback in display text: ❌ `Ancient Bell` → ✅ `Huyền Thiên Chung`

---

## 1. Item categories overview

| Category | Count for v1.0 | Live ops growth |
|---|---|---|
| Linh Khí base | 60 | +5/month |
| Cổ Vật (unique) | 30 | +2/month |
| Lò Parts | 8 slots × ~5 variants = 40 | +1 slot variant/month |
| Đan Dược | 8 types | +1/quarter |
| Tinh Hoa | 12 types | +2/quarter |
| Nguyên Liệu | 30 | +5/quarter |
| Đan Pháp variants | 10 | +1/major patch |
| Affix prefix | 80 | +10/quarter |
| Affix suffix | 80 | +10/quarter |
| Affix implicit | 30 | +5/quarter |
| Tâm Ma Modifier | 12 | +3/quarter |
| Set bonus | 3 | +1/year |

---

## 2. Linh Khí — 60 base items

10 items per element × 6 elements = 60.

### 2.1 Kim element (10 items)

| Tên | Type | Implicit | Drop pool |
|---|---|---|---|
| **Chuông Đồng** | Chuông | "Convert linh lực qua đây → Kim. Tạo sóng đẩy linh khí khác 80px" | Common |
| **Kiếm Cổ Bạch Hổ** | Kiếm | "Cut linh lực thành 2 — split path angles ±30°" | Uncommon |
| **Nghiên Mực Kim Tinh** | Nghiên Mực | "Linh lực Kim → ghi vết Kim trên board, chain damage 3s" | Common |
| **Châu Bạch Hổ** | Châu | "Hấp thụ linh lực Kim, sau 3 hit phun ra "Kim châm" piercing" | Uncommon |
| **Đao Cổ Sắc** | Đao | "Crit chance +20% trên Kim linh lực" | Common |
| **Tượng Bạch Hổ** | Tượng | "Linh khí Kim khác ±100px được +15% intensity" | Uncommon |
| **Phù Kim Tự** | Bùa | "1x/ván: tất cả linh lực biến thành Kim" | Rare |
| **Đỉnh Bạch Kim** | Đỉnh | "Chậm linh lực Mộc 50% (counter-element control)" | Uncommon |
| **Hộp Cổ Kim Khí** | Hộp | "Store linh lực 2s, release với +50% intensity" | Common |
| **Quạt Bạch Tinh** | Quạt | "Đổi hướng linh lực Kim sang trái/phải (player chọn)" | Common |

### 2.2 Mộc element (10 items)

| Tên | Type | Implicit |
|---|---|---|
| **Cành Bồ Đề** | Cành | "Sustain — linh lực Mộc qua đây heal đan +2% stability" |
| **Đèn Lá Sen** | Đèn | "Mỗi va chạm: spawn small "lá mộc" linh lực phụ" |
| **Bùa Trường Sinh** | Bùa | "Linh khí lân cận không bị nhiễm khí" |
| **Tượng Thanh Long** | Tượng | "Linh khí Mộc khác ±100px được +20% intensity" |
| **Châu Thanh Long** | Châu | "Tích luỹ Mộc lực, mỗi 5 hit: heal đan stability +10%" |
| **Hoa Sen Linh** | Hoa | "Slow linh lực 25%, +20% intensity khi rời" |
| **Bình Cam Lộ Xanh** | Bình | "Convert linh lực Hoả qua đây → Mộc (tương khắc rescue)" |
| **Cây Trầu Cổ** | Cành | "Linh khí xung quanh được Mộc nhiễm khí 5s" |
| **Đỉnh Lục Bảo** | Đỉnh | "Linh đan Mộc nhận +15% quality từ đồng hành hit" |
| **Quạt Trúc Cổ** | Quạt | "Phất tạo gió đẩy linh lực xuống board nhanh hơn" |

### 2.3 Thuỷ element (10 items)

| Tên | Type | Implicit |
|---|---|---|
| **Bình Cam Lộ Đen** | Bình | "Hấp thụ linh lực Hoả, phun lại Thuỷ" |
| **Châu Thuỷ Long** | Châu | "Chain — linh lực qua đây jump tới linh khí gần nhất" |
| **Đèn Băng** | Đèn | "Linh lực Thuỷ qua → freeze nearby linh khí 1s (counter-element)" |
| **Tượng Hắc Quy** | Tượng | "Defensive — giảm 30% tương khắc damage trong 200px" |
| **Bùa Hải Long** | Bùa | "1x/ván: tất cả linh lực biến thành Thuỷ" |
| **Nghiên Mực Hàn Băng** | Nghiên Mực | "Mỗi va chạm: tạo vũng nước, linh lực rơi vào +20% intensity" |
| **Kiếm Lưu Băng** | Kiếm | "Pierce — linh lực Thuỷ ignore 1 wall collision" |
| **Đỉnh Hắc Bích** | Đỉnh | "Heal đan +1% stability per Thuỷ tương sinh hit" |
| **Hộp Hàn Khí** | Hộp | "Store linh lực Thuỷ, release với chain +3 jumps" |
| **Quạt Hắc Phụng** | Quạt | "Slow toàn board 20% trong 3s khi chạm" |

### 2.4 Hoả element (10 items)

| Tên | Type | Implicit |
|---|---|---|
| **Đèn Lồng Đỏ** | Đèn | "Chuyển hoá tất cả linh lực qua đây → Hoả" |
| **Bùa Phượng Linh** | Bùa | "Hoả lực hit → ignite linh khí khác (chain burn 5s)" |
| **Tượng Chu Tước** | Tượng | "Linh khí Hoả khác ±100px được +25% intensity" |
| **Châu Hoả Phượng** | Châu | "Mỗi 5 hit: explode AOE Hoả damage" |
| **Kiếm Hoả Long** | Kiếm | "Cut — linh lực Hoả split thành 2 đường, mỗi đường -30% intensity" |
| **Đỉnh Đỏ Son** | Đỉnh | "Linh lực Hoả tới đan: +35% intensity (Hoả-buff)" |
| **Quạt Phong Hoả** | Quạt | "Lan toả: linh lực Hoả tạo wave 100px AOE damage" |
| **Nghiên Mực Đỏ** | Nghiên Mực | "Burn trail — linh lực để lại "dấu cháy" damage zone 3s" |
| **Hộp Hoả Tinh** | Hộp | "Store + amplify: release với ×2 intensity sau 3s" |
| **Bình Hoả Châu** | Bình | "Convert linh lực Thuỷ qua đây → Hoả (counter-rescue)" |

### 2.5 Thổ element (10 items)

| Tên | Type | Implicit |
|---|---|---|
| **Đá Cổ** | Đỉnh | "Slow linh lực 50%, +50% intensity khi rời (charge mechanic)" |
| **Tượng Hoàng Lân** | Tượng | "Defensive — đan stability max +20%" |
| **Châu Hoàng Thổ** | Châu | "Stagger — linh lực dừng 1s rồi tiếp tục với +30% intensity" |
| **Bùa Trấn Yêu** | Bùa | "Linh khí lân cận không bị Phong Ấn brick" |
| **Hộp Đất Cổ** | Hộp | "Long-store: linh lực vào không ra cho đến ván kết thúc (then ×3)" |
| **Đỉnh Trầm Hương** | Đỉnh | "Linh lực Thổ tới đan: +30% intensity + heal stability +3%" |
| **Quạt Hoàng Sa** | Quạt | "Tạo "bão cát" 2s, slow linh lực 40%" |
| **Tường Thổ** | Tượng | "Wall-like — linh lực không thể qua trừ phi Kim element" |
| **Nghiên Mực Hoàng** | Nghiên Mực | "Trail bụi vàng — linh lực rơi vào +loot drop rate" |
| **Đèn Đất** | Đèn | "Tách 1 linh lực thành 2 linh lực Thổ rồi rơi tiếp" |

### 2.6 Vô Cực element (10 items, mostly Cổ vật candidates)

| Tên | Type | Implicit |
|---|---|---|
| **Bùa Vô Tự** | Bùa | "Random element mỗi 2s" |
| **Tượng Vô Diện** | Tượng | "Mọi linh lực qua bán kính 100px → mất element (neutral)" |
| **Châu Hỗn Nguyên** | Châu | "Hỗn loạn — random ±50% intensity" |
| **Hộp Vô Cực** | Hộp | "Random transform: linh lực thành element random" |
| **Đèn Vô Linh** | Đèn | "Vô element — không buff không debuff, neutral path" |
| **Kiếm Vô Cực** | Kiếm | "Ignore element math — fixed dame 50/hit" |
| **Đỉnh Hỗn Nguyên** | Đỉnh | "Linh đan có thể chuyển element 1x/ván" |
| **Nghiên Mực Bí Cảnh** | Nghiên Mực | "Trail random color, random element damage" |
| **Quạt Vô Hình** | Quạt | "Linh lực qua đây — invisible 2s (tactical confusion)" |
| **Bình Hỗn Đan** | Bình | "Hấp thụ tất cả element, phun ra Vô Cực" |

---

## 3. Cổ Vật catalog — 30 unique items

### 3.1 Build-defining Cổ vật

| # | Cổ Vật | Effect | Build hook |
|---|---|---|---|
| 1 | **Trượng Tôn Ngộ Không** | Linh lực nhân thành 3 sau hit đầu tiên | Sát Thủ multiplier |
| 2 | **Gương Bát Quái** | Linh lực rơi ngược lên trời 1x/ván | Pháp Sư reset |
| 3 | **Linh Đường Đèn Lồng** | Tắt sáng board, linh khí chỉ thấy 100px | High-risk build |
| 4 | **Lưỡi Hái Thiên Lý** | Linh lực rớt khỏi board → 1 linh khí hi sinh, intensity ×10 | Vong Linh sacrifice |
| 5 | **Bản Đồ Sơn Hà** | Board +50% size, +5 slot, tâm ma buff theo | Mass linh khí build |
| 6 | **Đan Lư Càn Khôn** | Mỗi ván sống sót: +1 affix tier permanent cho 1 linh khí | Long-run accumulator |
| 7 | **Mặt Nạ Hắc Bạch** | Player chọn nguyên tố linh đan giữa run | Element switcher |
| 8 | **Nghiên Mực Sương** | Linh lực để lại "vệt mực" → damage zone 3s | Pháp Sư AoE |
| 9 | **Bùa Tử Vi** | See next 3 đan dược drops | Tử Vi RNG control |
| 10 | **Quạt Phong Lôi** | 1x/ván: tất cả linh lực đổi hướng 90° | Tactical reset |

### 3.2 Sustain/defensive Cổ vật

| # | Cổ Vật | Effect | Build hook |
|---|---|---|---|
| 11 | **Tượng Phật A Di Đà** | Linh đan +5 quality mỗi ván win (sustain) | Hộ Pháp |
| 12 | **Chuông Đại Hồng** | Mỗi 7s, tất cả linh khí trigger free | Pháp Sư engine |
| 13 | **Áo Cà Sa Cửu Phẩm** | Lò +1 slot tạm trong pháp trận | Build expander |
| 14 | **Đan Lò Thiên Lệnh** | Phong Ấn brick chance -5% (stack được) | Crafting safety |
| 15 | **Tịnh Tâm Linh Châu** | Dispel tâm ma debuff 1x/ván | Anti-Tâm-Ma |
| 16 | **Lôi Phù Cổ** | Hứng được thiên kiếp, convert +50% intensity | Thiên kiếp build |
| 17 | **Linh Hoa Bích Bảo** | Linh đan stability cap +30% | Tank build |
| 18 | **Huyền Thiên Cổ Chung** | Mỗi va chạm: sóng âm; 5 sóng cộng dồn = boom AOE | AOE detonate |
| 19 | **Vòng Cổ Tổ Phụ** | Cấp Đạo Sĩ +5 trong pháp trận này | Power spike |
| 20 | **Đèn Tinh Thiên Hà** | See next 5 linh lực drops + element | RNG predict |

### 3.3 Chaos/risk Cổ vật

| # | Cổ Vật | Effect | Build hook |
|---|---|---|---|
| 21 | **Mạt Niên Đoản Mệnh** | Linh đan progress +100%, nhưng stability max -50% | All-in glass cannon |
| 22 | **Hỗn Nguyên Ngọc Châu** | All linh khí elements random mỗi ván | Vô Cực chaos |
| 23 | **Bạch Cốt Lệnh** | Linh khí hi sinh có 30% revive cùng affix | Vong Linh resurrection |
| 24 | **Tử Hồn Linh Bao** | Linh khí brick recover 50% essence currency | Crafting refund |
| 25 | **Cửu U Hắc Đan** | Damage ×3 nhưng Lò Thọ -10%/ván | Hardcore intensity |
| 26 | **Bùa Hắc Bạch Vô Thường** | Random buff/debuff mỗi 5s (50/50) | RNG gambler |
| 27 | **Cổ Long Hồn Ngọc** | Linh lực có hồn — track linh đan như homing missile | Accuracy build |
| 28 | **Đỉnh Phượng Linh Vĩ** | Boss damage ×5, normal mob damage ÷2 | Boss specialist |
| 29 | **Tâm Ma Mặt Nạ** | Player chịu debuff Tâm Ma, nhưng +200% loot | Risk reward |
| 30 | **Hỗn Nguyên Hắc Đan** | Đan promote 1 cấp instant per pháp trận, nhưng stability -75% | Speed runner |

### 3.4 Mirror tier (post-launch, ultra-rare)

| # | Cổ Vật | Effect | Drop rate |
|---|---|---|---|
| M1 | **Sơn Hà Đồ Hỗn Nguyên** | Sơn Hà Đồ Lệnh có thể tái sử dụng 1x (Đan Pháp not consumed) | 1/100,000 |
| M2 | **Cửu Chuyển Kim Đan** | Skip 3 cấp đan progression | 1/50,000 |
| M3 | **Vô Tận Cửu Đỉnh** | Lò +3 slot vĩnh viễn | 1/100,000 |

→ Mirror tier ship post-launch v1.5+, NOT in v1.0 to avoid balance issues early.

---

## 4. Lò Parts examples

### 4.1 Đỉnh (Crown) — controls ball spawn

Example variants:
- **Đỉnh Phàm**: base — 1 banh / 2s, random angle ±30°
- **Đỉnh Linh Hoả**: +1 banh per ván, Hoả-biased spawn
- **Đỉnh Bảo Thiên**: 2 banh / 2s, can choose spawn position (player click)
- **Đỉnh Thần Vô Cực**: 3 banh / 2s, random element, free reroll spawn pattern
- **Cổ vật Đỉnh "Thiên Long Quan"**: Banh đầu tiên mỗi ván là "long lực" — ×5 intensity

### 4.2 Thân (Body) — board foundation

- **Thân Phàm**: board 800×1200, 8 anchor
- **Thân Linh Mộc**: board 850×1250, 9 anchor, Mộc-bias drop
- **Thân Bảo Đan Lư**: board 900×1300, 11 anchor, +5% loot
- **Thân Thần Cửu Chuyển**: board 1000×1400, 13 anchor, +10% loot, +1 modifier slot
- **Cổ vật Thân "Càn Khôn Đỉnh Lư"**: board layout dynamically shifts mid-ván

### 4.3 Đế (Foot) — catch zone

- **Đế Phàm**: linh lực rớt đáy → -10 gold penalty
- **Đế Linh Cứu**: linh lực rớt đáy → 50% recycle quay lại top
- **Đế Bảo Hồi Tâm**: rớt đáy → +20% gold thay vì penalty
- **Đế Thần Thiên Lý**: rớt đáy → 30% nảy ngược lên + intensity charged ×2

### 4.4 Quai Trái + Phải — Active skills

- **Quai "Lôi Đình Phù"**: 1x/ván, sét chém center board, dame all linh khí xung quanh
- **Quai "Hồi Sinh Phù"**: revive 1 vỡ linh khí với 50% durability
- **Quai "Tịnh Tâm Phù"**: dispel all tâm ma debuff trên đan
- **Quai "Phong Ấn Tốc"**: free Phong Ấn 1x trên 1 linh khí random
- **Quai "Ngũ Hành Trận"**: spawn 1 linh khí Ngũ Hành element random tại center board (free, lasts ván)

### 4.5 Nắp (Lid) — meta control

- **Nắp Phàm**: 1 modifier slot
- **Nắp Linh Cuồng**: 2 modifier slots, +1 đan dược drop
- **Nắp Bảo Thiên Cơ**: 3 modifier slots, see boss reward preview
- **Nắp Thần Đại Đan Bí**: 3 mod slot, boss drop guaranteed Bảo+

### 4.6 Khắc Phù (Amulet) — global buff

- **Khắc Phù Phàm**: +5% intensity global
- **Khắc Phù Linh Tinh**: +10% intensity, +5% crit
- **Khắc Phù Bảo Đại**: +15% intensity, +10% crit, +5% multiplier
- **Cổ vật "Khắc Phù Tổ Sư"**: +25% intensity, but only first ván of pháp trận

### 4.7 Đồ Sương L+R (Rings) — niche stats

Lots of variety. Examples:
- **Đồ Sương "Reroll Tiết Kiệm"**: -10% đan dược cost
- **Đồ Sương "Loại Đan Hiếm"**: drop rate Bảo+ +1 tier
- **Đồ Sương "Tâm Ma Khắc"**: -20% Tâm Ma debuff duration
- **Đồ Sương "Phong Ấn An Toàn"**: brick chance -3%

### 4.8 Dây Phong Ấn (Belt) — currency control

- **Dây Phong Ấn Phàm**: base
- **Dây Phong Ấn Linh Đan Lưu**: Linh Đan drop +30%
- **Dây Phong Ấn Bảo Tinh Hoa**: Tinh Hoa drop +1 tier
- **Dây Phong Ấn Thần Cửu Chuyển**: Cửu Chuyển Đan drop chance +50%

---

## 5. Đan Dược types

8 main + 12 Tinh Hoa = 20 currency total.

### 5.1 Main đan dược (8)

| Đan Dược | Effect | Rarity |
|---|---|---|
| **Linh Đan** | Reroll 1 affix | Common 60% |
| **Tử Hoàn Đan** | Reroll all affix Bảo+ | Uncommon 20% |
| **Cửu Chuyển Đan** | +1 phẩm cấp linh khí, 50% fail revert | Rare 10% |
| **Phong Ấn** | 25% strip / 25% giáng / 25% thăng / 25% khắc implicit | Uncommon 15% |
| **Hồn Đan** | Copy 1 affix sang linh khí khác | Very rare 2% |
| **Cổ Đan** | Reroll Cổ Vật → random Cổ Vật | Extremely rare 0.5% |
| **Đan Tẩy Niêm** | Identify unidentified items | Common 30% |
| **Tinh Hoa Ngũ Hành (5)** | Force 1 element-specific prefix | Uncommon 10% |

### 5.2 Tinh Hoa (12 types)

5 element + 7 utility:

| Tinh Hoa | Effect |
|---|---|
| **Tinh Hoa Kim** | Force +X% Kim intensity prefix |
| **Tinh Hoa Mộc** | Force +X% Mộc sustain prefix |
| **Tinh Hoa Thuỷ** | Force +X% Thuỷ chain prefix |
| **Tinh Hoa Hoả** | Force +X% Hoả burst prefix |
| **Tinh Hoa Thổ** | Force +X% Thổ defense prefix |
| **Tinh Hoa Tốc** | Force +X% velocity suffix |
| **Tinh Hoa Kiên** | Force durability suffix |
| **Tinh Hoa Mệnh** | Force HP/stability suffix |
| **Tinh Hoa Khắc** | Force tương khắc resistance suffix |
| **Tinh Hoa Sinh** | Force tương sinh boost suffix |
| **Tinh Hoa Crit** | Force crit chance suffix |
| **Tinh Hoa Linh** | Force chain trigger suffix |

---

## 6. Nguyên Liệu — 30 modifiers

### 6.1 Drop biases (10)
| Nguyên Liệu | Effect |
|---|---|
| **Hoả Tinh** | +50% drop linh khí Hoả |
| **Mộc Tinh** | +50% drop linh khí Mộc |
| **Thuỷ Tinh** | +50% drop linh khí Thuỷ |
| **Kim Tinh** | +50% drop linh khí Kim |
| **Thổ Tinh** | +50% drop linh khí Thổ |
| **Vô Cực Thạch** | All random ×2 (chaos amp) |
| **Long Cốt** | Boss sinh đôi, drop ×2 |
| **Linh Hoa** | +1 Cổ vật guaranteed drop |
| **Tinh Tinh Thạch** | +1 modifier slot |
| **Mưa Linh** | Linh lực ×1.5 speed, +30% loot |

### 6.2 Mechanic shifters (10)
| Nguyên Liệu | Effect |
|---|---|
| **Tử Khí** | All linh lực random → Thuỷ |
| **Tịnh Linh Hương** | Tâm Ma negative energy -50% |
| **Đèn Trời** | Thiên kiếp ván cuối → reward ×3 |
| **Tâm Ma Châu** | Spawn extra tâm ma boss room, Cổ vật drop +30% |
| **Mộc Linh Tinh** | Linh đan +20% stability max |
| **Cửu Chuyển Linh Hoa** | Đan Pháp consume → 30% reroll vs destroy |
| **Bí Cảnh Hỗn** | Pháp trận hidden — không thấy số ván còn lại |
| **Sinh Tử Tinh** | Linh đan bể = retry 1x với 50% quality refund |
| **Tâm Linh Hồn Phách** | Linh khí bị brick → soul respawn 1 linh khí Bảo random |
| **Hỗn Nguyên Khí** | Pháp trận chuyển sang Hỗn Nguyên marathon structure |

### 6.3 Boss/elite modifiers (10)
| Nguyên Liệu | Effect |
|---|---|
| **Long Phụng Châu** | Boss có 2 phase |
| **Tâm Ma Hồn Cổ** | Boss spawn Tâm Ma helper waves |
| **Cửu Long Kim Cốt** | Boss reward ×3 |
| **Thiên Long Cốt** | Boss element switch every 10s |
| **Hắc Long Vẫn Thạch** | Boss damage ÷2, drop better Cổ vật |
| **Đỉnh Long Tinh** | Boss có 9 phase (mega boss) |
| **Phong Vũ Hồn** | Pre-boss wave là full thiên kiếp |
| **Cổ Long Đan** | Boss drop guaranteed Cổ vật + Đan Pháp Cổ tier |
| **Vô Cực Long Hồn** | Boss has random ascendancy Đạo phái powers |
| **Hỗn Nguyên Tâm Ma Hồn** | Boss = Tâm Ma mirror của player Lò (build-aware) |

---

## 7. Set bonuses

### 7.1 Tứ Linh (4 items)

| Item | Element | Implicit |
|---|---|---|
| Tượng Thanh Long (Mộc) | Mộc | "Linh khí Mộc ±100px +20% intensity" |
| Tượng Hắc Quy (Thuỷ) | Thuỷ | "Defensive — 30% reduce tương khắc damage ±200px" |
| Tượng Bạch Hổ (Kim) | Kim | "Linh khí Kim ±100px +15% intensity" |
| Tượng Chu Tước (Hoả) | Hoả | "Linh khí Hoả ±100px +25% intensity" |

**Set bonus (4 trang bị)**: Khí trận xuất hiện ở center board, hút linh lực về trung tâm với +50% intensity.

### 7.2 Ngũ Hành (5 items, 1 per element)

| Item | Element |
|---|---|
| **Bùa Kim Tự** | Kim |
| **Bùa Mộc Trường Sinh** | Mộc |
| **Bùa Thuỷ Hải Long** | Thuỷ |
| **Bùa Hoả Phượng Linh** | Hoả |
| **Bùa Thổ Trấn Yêu** | Thổ |

**Set bonus (5 trang bị)**: Linh đan đổi nguyên tố theo từng va chạm liên tục. Combo full Ngũ Hành cycle (Kim→Thuỷ→Mộc→Hoả→Thổ→Kim) trong 5 hits = ×3 intensity tới đan. Mở mass tương sinh build.

### 7.3 Thập Bát La Hán (18 items — endgame hard set)

18 small tượng, mỗi cái 1 La Hán phật:
1. La Hán Mộc Hồn  
2. La Hán Hoả Vĩ  
3. La Hán Thuỷ Linh  
4. La Hán Kim Cương  
5. La Hán Thổ Cốc  
6-18. (12 more, named after La Hán / hộ pháp / cổ tu sĩ archetypes)

**Set bonus (18 trang bị)**: Linh đan bị bể → respawn ngay với 50% quality recovered. Effect 1x/pháp trận.

---

## 8. Affix pool (sample examples)

### 8.1 Prefix offensive (sample 20 out of 80)

| Prefix | Effect (T3 max roll) |
|---|---|
| **Cuồng Bạo** | +45% intensity Kim lực |
| **Liệt Hoả** | +40% intensity Hoả lực |
| **Hung Hãn** | +30% crit chance |
| **Tam Sinh** | 20% nhân đôi linh lực khi va chạm |
| **Huỷ Diệt** | +50% intensity vs tâm ma |
| **Khắc Tinh** | +40% damage tương khắc lực |
| **Sấm Sét** | 15% chance: lightning strike random linh khí (Kim-flavor) |
| **Phá Niêm** | -10% defense linh khí khác |
| **Tử Vong** | Linh khí có aura -10% defense ±50px |
| **Cổ Long** | First linh khí mỗi ván: +100% intensity |
| ... (70 more) ... | |

### 8.2 Suffix utility (sample 20 out of 80)

| Suffix | Effect (T3 max roll) |
|---|---|
| **Hấp Lực** | Hút linh lực bán kính 50px |
| **Chậm Bộ** | Chậm linh lực 25% trong 2s |
| **Lan Truyền** | Lan dame sang linh khí lân cận |
| **Xích Liên** | Chain — linh lực jump tới linh khí gần |
| **Cố Định** | Linh khí không bị nhiễm khí 5s sau hit |
| **Tăng Trữ** | Charge accumulate 20% mỗi hit |
| **Hồi Phục** | Linh khí heal stability đan +1% / hit |
| **Đan Lư** | Mỗi 3 hit: +5% intensity stack permanent |
| **Vô Hiệu** | 10% chance: hit không tốn durability |
| **Phong Ấn Bảo** | -3% brick chance khi áp Phong Ấn |
| ... (70 more) ... | |

### 8.3 Implicit (sample, by item type)

Mỗi item type có ~3 implicit variants (T1/T2/T3).

| Item type | Implicit variants |
|---|---|
| Huyền Chung | T1: sóng đẩy 50px / T2: sóng đẩy 80px / T3: sóng đẩy 100px + +5% intensity |
| Đèn Lồng | T1: chuyển hoá 80% linh lực → Hoả / T2: 100% / T3: 100% + AOE light effect |
| Tượng Tứ Linh | T1: +10% intensity ±100px / T2: +20% / T3: +30% |
| Bùa | T1: 1x/ván trigger / T2: 1x/ván + bigger range / T3: 2x/ván |

---

## 9. Đan Pháp variants detail

Xem master spec §9.5 cho 10 variants. Đây là detail layer mỗi variant.

### 9.1 Tiêu Chuẩn (default 80% atlas drop)

```
Ván count: 5-8
Boss: 1 (matches tier)
Anchor: 8-14
Modifier slot: 0-3
Special: none — neutral baseline
```

### 9.2 Tử Sinh (Sanctum-like)

```
Ván count: 20 (each ván = 1 "phòng")
Boss: optional super-boss room 20
Anchor: 4-8 per phòng
Choice each phòng: cửa A (risk loot) / cửa B (neutral) / cửa C (heal +stability)
Death: lose pháp trận progress, return base camp
Reward: pass phòng 20 = guaranteed Cổ vật + Đan Pháp Cổ tier
Drop rate: very rare, Level 70+
```

### 9.3 Hỗn Nguyên (Marathon)

```
Time: 30-50 minutes
Ván count: infinite (every 3 min spawns wave)
Difficulty: escalates 5% intensity per wave
Reward: scales with time survived
Special: optional bail-out at minute 15/30/45 (lock in current loot)
Drop rate: very rare, Level 80+
```

### 9.4 Thiên Kiếp (Lightning trial)

```
Ván count: 7 (representing 7 thiên kiếp)
Boss: thiên kiếp lightning final wave
Linh lực: only sét waves (no normal linh lực)
Linh đan: only thiên kiếp tương sinh = +5% intensity, others = damage
Special: Lôi Phù linh khí MUST be placed
Reward: Tiên/Thánh phẩm cấp đan promotion
Drop rate: very rare, Level 90+
```

### 9.5 Tâm Ma (Boss-mirror)

```
Ván count: 5
Boss: Tâm Ma mirror — phiên bản tà của player Lò (build aware)
Special: boss uses player's build pattern reversed
Reward: personalized Cổ vật (tied to player's primary build)
Drop rate: rare, atlas keystone unlock
```

### 9.6 - 9.10 (other variants)

Similar detail level for: Cổ Đan Lò, Long Cung, Cửu Tiêu, Diêm Phủ, Vô Cực.

---

## 10. Content scaling strategy (live ops)

### Data-driven pipeline

```
content/*.csv (source of truth)
    ↓ Python script
godot/resources/*.tres (Godot Resource files)
    ↓ Godot ResourceLoader
runtime
```

→ Adding 1 linh khí = edit CSV row + sprite. **1-2 hours** total per item.

### AI gen pipeline

```
1. Brainstorm: "Generate 5 Mộc-flavored linh khí, focus on chain trigger"
   → AI proposes name + lore + effect
2. Designer review: cull + tweak
3. Implement: AI writes CSV row
4. Asset: AI generates sprite draft via SD
5. Polish: human refines sprite + balance
```

### Quarterly content drops

Each quarter:
- +5 linh khí (1 per element)
- +2 Cổ vật
- +5 affix
- +1-2 Nguyên Liệu
- 1 themed league: special Đan Pháp variant + 1 boss + 3 unique Cổ vật

---

## 11. Decision log

- **2026-05-19**: Initial content catalog. 60 linh khí, 30 Cổ vật, 8 đan dược, 12 Tinh Hoa, 30 Nguyên Liệu, 10 Đan Pháp variants, 3 sets. Live ops growth plan locked.
