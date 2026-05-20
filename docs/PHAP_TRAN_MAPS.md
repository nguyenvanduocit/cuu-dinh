# Pháp Trận Maps — 10 Đan Pháp Variants

> Blueprint catalog cho 10 Đan Pháp variants (locked decision #25). Mỗi variant = một **structural container** cho bí cảnh — composition tại Sơn Hà Đồ Lệnh sẽ emerge thành unique session.

> **Single source of truth**: `packages/data/phap-tran/<slug>.json` (PhapTran Zod schema). Doc này = design rationale + ASCII layout cho review.

---

## 1. Overview

| # | Variant | Slug | Tier | Ván | Boss | Modifier | Reward profile |
|---|---|---|---|---|---|---|---|
| 1 | Tiêu Chuẩn | `tieu-chuan` | T1–T16 | 5–8 | Dị Tượng | 0–3 | Baseline, all-purpose |
| 2 | Tử Sinh | `tu-sinh` | T8–T16 | 20 | Tâm Ma | 1–3 | Cổ Vật + Đan Pháp Cổ tier (Sanctum reward) |
| 3 | Hỗn Nguyên | `hon-nguyen` | T10–T16 | 10–30 | Tâm Ma | 2–5 | Time-scaling marathon loot |
| 4 | Thiên Kiếp | `thien-kiep` | T14–T16 | 7 | Thiên Kiếp | 0–2 | Tiên/Thánh đan promotion |
| 5 | Tâm Ma | `tam-ma` | T6–T13 | 5 | Tâm Ma | 1–3 | Personalized Cổ Vật (build-tied) |
| 6 | Cổ Đan Lò | `co-dan-lo` | T5–T14 | 2–3 | Dị Tượng | 1–4 | Currency-rich (đan dược farm) |
| 7 | Long Cung | `long-cung` | T4–T14 | 6–9 | Dị Tượng | 1–3 | Thuỷ linh khí + Long Cốt Cổ Vật |
| 8 | Cửu Tiêu | `cuu-tieu` | T6–T16 | 6–9 | Thiên Kiếp | 1–3 | Kim/Hoả intensity loot, thiên đạo build |
| 9 | Diêm Phủ | `diem-phu` | T8–T16 | 5–7 | Tâm Ma | 2–4 | Tâm Ma Mặt Nạ Cổ Vật, Tịnh Tâm đan dược |
| 10 | Vô Cực | `vo-cuc` | T16 | 50–100 | Thiên Kiếp | 3–8 | Endless escalating, Tâm Ma Vĩ Đại drops |

---

## 2. Design language

Mỗi variant có 1 **anchor layout signature** thể hiện identity gameplay của nó. Layout không chỉ trang trí — nó **buộc player chọn build pattern khác nhau** cho cùng một set linh khí.

| Variant | Layout pattern | Forces player to... |
|---|---|---|
| Tiêu Chuẩn | Lưới đối xứng 3-3-2-2 | Học đọc board cơ bản, không có pattern lock-in |
| Tử Sinh | 8-điểm packed dense | Tối ưu spot per phòng, vì sẽ regenerate 20 phòng |
| Hỗn Nguyên | 14 anchor scattered chaos | Rebuild build mỗi 3 ván khi intensity nhảy bậc |
| Thiên Kiếp | 7 anchor dọc trục đứng (kênh sét) | Chain dọc thay vì ngang, force Lôi Phù |
| Tâm Ma | 10 anchor mirror-symmetric | Build symmetric (an toàn) hoặc asymmetric (break mirror) |
| Cổ Đan Lò | 12 anchor 3 vòng concentric | Build chain ly tâm Vô Cực → Hoả → Thổ |
| Long Cung | 11 anchor curved (xương sống rồng) | Route theo đường cong, không grid |
| Cửu Tiêu | 9 anchor 3 tầng × 3 cột | Chọn lane (3 cột), build Hoả→Vô Cực→Thổ vertical |
| Diêm Phủ | 10 anchor clustered nửa dưới | Build defensive — đan ở khu vực bóp nghẹt |
| Vô Cực | 13 anchor random sample | Không có pattern — runtime regenerate mỗi run |

### Element bias philosophy

- **Tiêu Chuẩn / Vô Cực**: tất cả `null` — không bias, để player + Nguyên Liệu quyết.
- **Tử Sinh**: `null` — variant identity là sinh tử quan, không phải nguyên tố.
- **Specialized variants** (Long Cung / Cửu Tiêu / Thiên Kiếp / Cổ Đan Lò): bias đậm theo identity.
- **Diêm Phủ**: tất cả `voCuc` — schema không có `tam-ma` element; `voCuc` là proxy "không thuộc Ngũ Hành".
- **Hỗn Nguyên**: bias đủ 5 nguyên tố scattered — Ngũ Hành chain luôn khả thi nhưng phải tự route trong chaos.
- **Tâm Ma**: 4 anchor biên `voCuc` (đại diện gương phản chiếu), 6 anchor trung tâm `null` (để player build chiếm).

---

## 3. Variant details

### 3.1 Tiêu Chuẩn — `tieu-chuan`

- **Identity**: Baseline đo tất cả variants khác. PoE-map cơ bản.
- **Anchor layout rationale**: Lưới đối xứng 3-3-2-2 (10 anchor) dạy người chơi đọc hình học board trước khi gặp variant phức tạp.
- **Special rules**: Không có cơ chế đặc biệt. 0-3 modifier slot tuỳ atlas keystone. Drop pool theo region atlas.
- **Lore hook**: *"Đất bằng, trời quang, linh lực rơi đều — không có cơ chế nào ám hại."* Pháp trận sơ khai của Khai Lư Trấn.
- **Nguyên Liệu pairings**: Bất kỳ — đây là canvas trắng. Phổ biến: Hoả Tinh / Mộc Tinh để bias element theo build hiện tại.

### 3.2 Tử Sinh — `tu-sinh`

- **Identity**: Sanctum-like 20-room dungeon. Gate level 70+, hiếm drop.
- **Anchor layout rationale**: 8-điểm packed dense (1 phòng mẫu). Runtime generate 20 phòng từ template (xoay/lật/scale). Anchor ít = buộc player chọn linh khí tối ưu trong không gian hẹp.
- **Special rules**: 3 cửa mỗi phòng (risk loot / neutral / heal stability). Bể linh đan ở phòng nào = mất tất cả Sanctum loot. Pass phòng 20 = boss Tâm Ma + guaranteed Cổ Vật + Đan Pháp Cổ tier.
- **Lore hook**: *"Hai mươi cánh cửa phong ấn trong Hồn Nguyên Điện — mỗi cánh là một sinh tử quan."* (cite Cao Tổ's lineage)
- **Nguyên Liệu pairings**: Cổ Đan splash (guarantee Cổ Vật), Linh Hoa (+1 Cổ Vật), Đèn Trời (final thiên kiếp ×3 reward).

### 3.3 Hỗn Nguyên — `hon-nguyen`

- **Identity**: Marathon 30-50 phút, intensity escalating.
- **Anchor layout rationale**: 14 anchor scattered chaos, bias đủ 5 nguyên tố. Không có "optimal layout" — buộc player rebuild build mỗi 3 ván khi wave intensity nhảy bậc.
- **Special rules**: Wave mỗi 3 phút, +5% intensity / wave. Bail-out tại phút 15/30/45 (lock-in loot). Boss = Tâm Ma; nếu Đan Pháp T14+ thì promote thành Thiên Kiếp.
- **Lore hook**: *"Hỗn Nguyên — cảnh giới trước khi vạn vật phân Ngũ Hành."* Không trật tự, chỉ có nguyên khí cuồn cuộn.
- **Nguyên Liệu pairings**: Mộc Linh Tinh (+stability max), Đèn Trời (final reward ×3), Cửu Chuyển Linh Hoa (reroll Đan Pháp).

### 3.4 Thiên Kiếp — `thien-kiep`

- **Identity**: Lightning trial, 7 ván = 7 lần thiên kiếp. Endgame T14+.
- **Anchor layout rationale**: 7 anchor dọc trục đứng (x=400, y=200→1080) tạo "kênh sét". Mọi sét rơi trúng anchor, player buộc design chain dọc thay vì ngang.
- **Special rules**: KHÔNG có linh lực thường — chỉ sét waves. Linh khí Lôi Phù BẮT BUỘC ≥ 1 viên. Mọi element khác Kim hit đan = damage. Pass = đan promote Tiên/Thánh.
- **Lore hook**: *"Khi đan đã đến phẩm Cổ, trời không cho phép nữa. Sét đánh xuống bảy lần — bảy lần thử lòng đạo sĩ."*
- **Nguyên Liệu pairings**: Đèn Trời (final reward ×3), Phong Vũ Hồn (pre-boss thiên kiếp full wave), Lôi Phù Cổ (Cổ Vật hứng sét — quasi-required).

### 3.5 Tâm Ma — `tam-ma`

- **Identity**: Boss = build-aware mirror của player Lò. 5 ván fixed.
- **Anchor layout rationale**: 10 anchor mirror-symmetric (trục dọc x=400). 4 biên elementBias=voCuc đại diện gương; 6 trung tâm null cho player chiếm. Visualises Tâm Ma reflection.
- **Special rules**: Runtime đọc 8-slot equipment + Đạo Phái + top 5 keystone của player, generate boss spawn pattern reversed. Ván 1-4 spawn 'sát thủ ảnh' yếu để player đọc pattern, ván 5 boss thật. Drop = Cổ Vật personalized tied to build archetype.
- **Lore hook**: *"Tâm ma là chính mình. Phiên bản ngược của bản thân — kẻ đã chọn ham muốn thay vì thanh tịnh."*
- **Nguyên Liệu pairings**: Tịnh Linh Hương (-50% Tâm Ma debuff), Tâm Ma Châu (+Cổ Vật drop), Hỗn Nguyên Tâm Ma Hồn (boss = build-aware mirror — double mirror).

### 3.6 Cổ Đan Lò — `co-dan-lo`

- **Identity**: Boss-rush ngắn ~5 phút, currency-rich farm map.
- **Anchor layout rationale**: 12 anchor 3 vòng concentric mô phỏng cấu trúc Lò Luyện Đan cổ — tâm = đan (Vô Cực), vòng trong 4 điểm Hoả (lửa lò), vòng ngoài 8 điểm Thổ (vỏ lò). Layout buộc player build chain ly tâm.
- **Special rules**: 2-3 ván Dị Tượng liên tục, không có ván thường. Drop pool +200% Đan Dược, +50% Tinh Hoa, -50% linh khí. Ý đồ: currency farm tốc độ cao.
- **Lore hook**: *"Hoả Sơn Lò Cốc — chiếc lò cổ vỡ đôi từ thời Đại Đan Đạo. Bí cảnh tái hiện ngày cuối Lò ấy cháy."*
- **Nguyên Liệu pairings**: Hoả Tinh (bias build), Tinh Tinh Thạch (+1 modifier), Linh Hoa (+1 Cổ Vật guaranteed — biến boss-rush thành Cổ Vật farm).

### 3.7 Long Cung — `long-cung`

- **Identity**: Thuỷ exclusive, fluid physics. Board wide 1000×900.
- **Anchor layout rationale**: 11 anchor xếp cong theo xương sống rồng từ trái → phải. Đỉnh đầu rồng (anchor-5) là Vô Cực — biased Long Vương. Force player route theo curve, không grid.
- **Special rules**: Physics override (gravity -40%, friction +200%, elastic 0.4). Spawn pool 80% Thuỷ / 15% Mộc / 5% Vô Cực; KHÔNG có Hoả/Kim/Thổ. Đan Pháp chỉ chấp nhận đan Thuỷ/Mộc.
- **Lore hook**: *"Sâu dưới Bích Hải Đảo, nơi Long Vương phong ấn mạch linh lực Thuỷ tinh khiết. Đạo sĩ phải học 'để đan tự thành'."*
- **Nguyên Liệu pairings**: Thuỷ Tinh (+50% Thuỷ drop), Long Cốt (boss sinh đôi), Mộc Linh Tinh (+stability — exploit Thuỷ→Mộc tương sinh).

### 3.8 Cửu Tiêu — `cuu-tieu`

- **Identity**: Vertical map 600×1800, chín tầng trời. Kim/Hoả-flavored.
- **Anchor layout rationale**: 9 anchor đúng 9 ô = 3 tầng × 3 cột. Tầng trời Hoả (top), Vô Cực (middle), Thổ (bottom — nơi đan). Chain Hoả→Vô Cực→Thổ dọc 3 cột = "thiên đạo flow" +50% intensity bonus.
- **Special rules**: Physics override (gravity +60%, friction -30%) — sét rơi nhanh, velocity intensity cao nhưng ít thời gian routing. Linh khí 3 cột buộc player chọn lane.
- **Lore hook**: *"Chín tầng trời, nơi Ngũ Hành Sơ Tổ ngắm thiên hà mà ngộ đạo. Linh lực rơi như mưa sao, mỗi giọt là một niệm trời ban."*
- **Nguyên Liệu pairings**: Kim Tinh / Hoả Tinh (bias top tier), Mưa Linh (+30% loot, exploit gravity), Đèn Trời (synergy với Thiên Kiếp boss).

### 3.9 Diêm Phủ — `diem-phu`

- **Identity**: Tâm Ma exclusive, no Ngũ Hành. Death-mechanic special.
- **Anchor layout rationale**: 10 anchor clustered nửa dưới board (y ≥ 700). Nửa trên trống = không gian đan rơi xuống tay tử thần. Tất cả elementBias=voCuc (proxy "không thuộc Ngũ Hành").
- **Special rules**: Linh lực 100% Tâm Ma negative energy. Damage formula Ngũ Hành DISABLED; chỉ linh khí flag 'Tịnh Tâm' (Bùa, Tượng Phật, Tịnh Tâm Linh Châu) convert được. Bể đan → 'U Hồn' 1 ván retry (-50% intensity).
- **Lore hook**: *"Diêm Phủ — nơi mọi đan dở dang bị Diêm Vương giữ lại. Đạo sĩ vào không phải để đan đẹp — để đem chút thanh tịnh xuống cho người chết."*
- **Nguyên Liệu pairings**: Tịnh Linh Hương (-50% Tâm Ma debuff), Tâm Ma Châu (+Cổ Vật), Mộc Linh Tinh (+stability max).

### 3.10 Vô Cực — `vo-cuc`

- **Identity**: Endgame endless mode (Cấp Vô Cực 100+). All-random.
- **Anchor layout rationale**: 13 anchor là 1 layout mẫu (designer review). Runtime KHÔNG dùng trực tiếp — regenerate anchor positions + count (8-13) + bias mỗi pháp trận.
- **Special rules**: Mọi thuộc tính random. Modifier lên đến 8 stack (schema cap). Boss = Thiên Kiếp escalating mỗi 10 ván; Vô Cực 50/100/200 = Tâm Ma Vĩ Đại super-boss. KHÔNG kết thúc bằng win — chỉ bằng player bail (lock loot) hoặc bể đan.
- **Lore hook**: *"Vô Cực không phải nơi — là trạng thái. Đạo sĩ luyện ở Vô Cực không tu cho mình — tu cho cái đời sau đời này."*
- **Nguyên Liệu pairings**: Vô Cực Thạch (random ×2), Tinh Tinh Thạch (+1 modifier — push tới cap 8), Vô Cực Long Hồn (boss random Đạo Phái powers).

---

## 4. Geometry visualisations (ASCII)

> Toạ độ scaled xuống grid 20×30 (W×H) cho dễ đọc. ⊙ = anchor, · = empty.

### 4.1 Tiêu Chuẩn (800×1200, 10 anchor)
```
+--------------------+
|                    |
|     ⊙    ⊙    ⊙    |   y≈280  (top tier)
|                    |
|                    |
|   ⊙      ⊙      ⊙  |   y≈500  (mid tier)
|                    |
|                    |
|     ⊙        ⊙     |   y≈720  (lower)
|                    |
|       ⊙  ⊙         |   y≈900  (catch zone)
|                    |
|       [linh đan]   |   y≈1000
+--------------------+
```

### 4.2 Tử Sinh (800×1200, 8 anchor — room template)
```
+--------------------+
|                    |
|         ⊙          |   centered top
|                    |
|     ⊙   ⊙   ⊙      |   triad row
|                    |
|                    |
|       ⊙     ⊙      |
|                    |
|                    |
|         ⊙  ⊙       |
|                    |
|       [linh đan]   |
+--------------------+
runtime: 20 rooms từ template này, xoay/lật/scale
```

### 4.3 Hỗn Nguyên (800×1200, 14 anchor scattered chaos)
```
+--------------------+
|  ⊙(h)        ⊙(k)  |
|         ⊙(v)       |
|    ⊙(m)    ⊙(t)    |
|                    |
|  ⊙(t)      ⊙(k)    |
|         ⊙(v)       |
|                    |
|   ⊙(h)    ⊙(m)     |
|         ⊙(t)       |
|         ⊙(t)       |
|  ⊙(v)      ⊙(h)    |
|       [linh đan]   |
+--------------------+
(h=hoa k=kim m=moc t=tho/thuy v=voCuc)
```

### 4.4 Thiên Kiếp (800×1200, 7 anchor — kênh sét dọc)
```
+--------------------+
|         ⊙(K)       |   y=200
|         ⊙(K)       |   y=350
|         ⊙(K)       |   y=500
|         ⊙(V)       |   y=650
|         ⊙(K)       |   y=800
|         ⊙(K)       |   y=950
|         ⊙(K)       |   y=1080
|                    |
|       [linh đan]   |
+--------------------+
trục giữa = lightning channel. Lôi Phù mandatory.
```

### 4.5 Tâm Ma (800×1200, 10 anchor mirror-symmetric)
```
+--------------------+
|                    |
|   ⊙(V) | ⊙(V)      |   y=280  (mirror biên)
|        |           |
|     ⊙  | ⊙         |   y=460  (mid)
|        |           |
|  ⊙     |     ⊙     |   y=640  (wide)
|        |           |
|     ⊙  | ⊙         |   y=820
|        |           |
|      ⊙(V)|⊙(V)     |   y=980  (close)
|       [linh đan]   |
+--------------------+
trục đối xứng x=400. Boss mirrors player build.
```

### 4.6 Cổ Đan Lò (800×1200, 12 anchor 3 vòng concentric)
```
+--------------------+
|                    |
|         ⊙(T)       |   ring 3 top
|                    |
|     ⊙(T)  ⊙(T)     |
|       ⊙(H)         |   ring 2 (Hoả)
|   ⊙(T) ⊙(V) ⊙(T)   |   center = Vô Cực
|       ⊙(H)         |
|     ⊙(T)  ⊙(T)     |
|                    |
|     ⊙(T)   ⊙(T)    |   ring 3 bottom
|                    |
|       [linh đan]   |
+--------------------+
Vô Cực ⊙ tâm, Hoả ⊙ vòng trong, Thổ ⊙ vòng ngoài
```

### 4.7 Long Cung (1000×900, 11 anchor — xương sống rồng)
```
+--------------------------+
|                          |
|              ⊙(V)         |  đỉnh đầu rồng
|         ⊙(T)   ⊙(T)       |
|     ⊙(T)         ⊙(T)     |
|  ⊙(T)               ⊙(T)  |
|⊙(T)                   ⊙(T)|
|       ⊙(M)    ⊙(M)        |  hai chân Mộc
|                          |
|         [linh đan]        |
+--------------------------+
curve = xương sống rồng từ trái sang phải
(T=thuy M=moc V=voCuc)
```

### 4.8 Cửu Tiêu (600×1800, 9 anchor — chín tầng trời)
```
+-------------+
|             |
|  ⊙(H) ⊙(H) ⊙(H)  |   tầng Hoả (Cửu Tiêu thượng)  y=280
|             |
|             |
|             |
|             |
|  ⊙(V) ⊙(V) ⊙(V)  |   tầng Vô Cực (Trung Thiên)   y=900
|             |
|             |
|             |
|             |
|  ⊙(T) ⊙(T) ⊙(T)  |   tầng Thổ (Hạ Giới)          y=1520
|             |
|  [linh đan] |
+-------------+
3 cột × 3 tầng. Chain Hoả→Vô Cực→Thổ = thiên đạo flow.
```

### 4.9 Diêm Phủ (800×1200, 10 anchor clustered nửa dưới)
```
+--------------------+
|                    |
|                    |
|                    |
|                    |   nửa trên TRỐNG
|                    |   (linh hồn rơi)
|                    |
|                    |
|  ⊙(V) ⊙(V) ⊙(V)    |   y=700
|⊙(V)  ⊙(V) ⊙(V)  ⊙(V) |   y=880-900
|     ⊙(V)  ⊙(V)     |   y=1060
|         ⊙(V)       |   y=1140
|       [linh đan]   |
+--------------------+
All elementBias=voCuc (proxy "không Ngũ Hành").
```

### 4.10 Vô Cực (800×1200, 13 anchor — sample only)
```
+--------------------+
|                    |
|  ⊙    ⊙       ⊙    |   y=200-240
|    ⊙       ⊙       |   y=420
|⊙       ⊙       ⊙   |   y=600
|    ⊙       ⊙       |   y=780
|  ⊙       ⊙    ⊙    |   y=960-1000
|                    |
|       [linh đan]   |
+--------------------+
Layout này chỉ là MẪU.
Runtime regenerate (8-13 anchor, random bias) mỗi pháp trận.
```

---

## 5. Reward profile

> Bảng loot bias matrix — variant nào reward gì.

| Variant | Linh Khí drop | Đan Dược | Cổ Vật chance | Đan Pháp drop | Special |
|---|---|---|---|---|---|
| Tiêu Chuẩn | baseline 100% | baseline | baseline | baseline | — |
| Tử Sinh | -30% | -50% | **+200% guaranteed Cổ tier** | **+1 Đan Pháp Cổ tier** | Boss chest only after room 20 |
| Hỗn Nguyên | +scaling/wave | +scaling | +50% at 15min+ | +scaling/wave | Bail-out lock-in |
| Thiên Kiếp | -50% (no normal drops) | -50% | +30% Lôi Phù Cổ | +30% Thiên Kiếp Đan Pháp | **Tiên/Thánh đan promotion** |
| Tâm Ma | baseline | baseline | **+100% personalized Cổ Vật** | +20% | Build-tied unique |
| Cổ Đan Lò | **-50%** | **+200% đan dược** | -30% | -50% | Currency farm tốc độ cao |
| Long Cung | +50% Thuỷ linh khí | baseline | +30% Long Cốt | +20% Thuỷ Đan Pháp | Thuỷ build supplier |
| Cửu Tiêu | +30% Kim+Hoả | baseline | +20% Lôi Phù | +20% Kim Đan Pháp | Intensity build supplier |
| Diêm Phủ | -50% (no normal drops) | +50% Tịnh Tâm | **+50% Tâm Ma Mặt Nạ** | +30% Diêm Phủ Đan Pháp | Anti-Tâm-Ma items |
| Vô Cực | scaling endless | scaling | escalating | escalating | Tâm Ma Vĩ Đại drops at milestones |

---

## 6. Composition recipes (recommended)

Sample compositions ở Sơn Hà Đồ Lệnh (xem master spec §9.6):

| Goal | Đan Pháp | Nguyên Liệu | Đan Dược splash |
|---|---|---|---|
| Cổ Vật farm | Tử Sinh | Cổ Đan splash + Linh Hoa + Tâm Ma Châu | Cổ Đan |
| Đan dược farm tốc độ | Cổ Đan Lò T8 | Hoả Tinh + Tinh Tinh Thạch + Linh Hoa | Linh Đan |
| Promote đan lên Tiên | Thiên Kiếp T16 | Đèn Trời + Phong Vũ Hồn + Lôi Phù Cổ | Cửu Chuyển Đan |
| Speed farm tier-up Đan Pháp | Tiêu Chuẩn T8 | Cửu Chuyển Linh Hoa + Mưa Linh | Tử Hoàn Đan |
| Thuỷ build supply run | Long Cung T10 | Thuỷ Tinh + Long Cốt + Mộc Linh Tinh | Linh Đan |
| Self-test build | Tâm Ma T10 | Tịnh Linh Hương + Hỗn Nguyên Tâm Ma Hồn | Tử Hoàn Đan |
| Endgame leaderboard push | Vô Cực T16 | Vô Cực Thạch + Tinh Tinh Thạch ×3 + Đèn Trời | Cổ Đan |

---

## 7. Open questions

1. **Tử Sinh room generation algorithm**: 20 rooms từ 1 template — design seed mỗi phòng theo hash(player, run-id, room-idx) hay pre-defined sequence per Đan Pháp instance? Decision needed before alpha.
2. **Vô Cực anchor regeneration constraint**: 8-13 anchor random — có cần đảm bảo "always solvable" check (linh đan reachable từ spawn)? Probably yes — add runtime constraint solver.
3. **Diêm Phủ Tâm Ma channel**: schema NgHanh không có `'tam-ma'` enum value. Hiện đang dùng `voCuc` làm proxy. Cần extend enum hoặc keep proxy?
4. **Hỗn Nguyên boss promotion**: T14+ promote boss từ `tam-ma` → `thien-kiep`. Schema chỉ chấp nhận 1 bossType — runtime override OK nhưng cần document chỗ override.
5. **Long Cung physics override**: gravity/friction override per-Đan-Pháp cần engine support — Godot PhysicsServer2D set_area_param feasible? Verify trong prototype.
6. **Cửu Tiêu vertical board**: 600×1800 viewport — cần camera scrolling hay zoom-out fit screen? UX research.
7. **Tâm Ma boss generation**: runtime đọc 8-slot + Đạo Phái + top 5 keystone — define exact mirror algorithm (reverse element? reverse intensity? reverse trigger?). Spec needed.
8. **Cổ Đan Lò 3-vòng concentric placement**: hiện hard-coded 12 anchor. Consider parameterising radius cho variant tier scaling (T5 radius 200, T14 radius 280)?
9. **Vô Cực modifier cap 8**: schema hard limit. Endgame escalating beyond 8 cần plan — soft-stack effects thay vì thêm slot?
10. **Đan Pháp instance metadata**: PhapTran schema = blueprint. Cần thêm `PhapTranInstance` schema cho per-run state (rolled modifier, seed, player choices) — separate concern, defer to instance schema sprint.

---

## 8. Decision log

- **2026-05-19**: Initial 10-variant blueprint locked. Tier ranges, anchor counts, bossType, modifierSlots, geometry per variant. Layout pattern signature documented. Reward profile matrix established.
