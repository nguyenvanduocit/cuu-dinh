# Pháp Trận (Maps)

> Provenance: `packages/data/maps/*.json` · 10 blueprints
> ASCII geometry dời từ `PHAP_TRAN_MAPS.md §4` (bổ sung khi dedup design docs).

## Cổ Đan Lò (ancient-furnace)

| field | value |
| --- | --- |
| id | ancient-furnace |
| ten | Cổ Đan Lò |
| variant | ancient-furnace |
| tierRange | 5-14 |
| vanCount | 2-3 |
| bossType | anomaly |
| modifierSlots | 1-4 |
| geometry | 800×1200 |

### Anchors (12)

| anchor id | x | y | elementBias |
| --- | --- | --- | --- |
| anchor-1 | 400 | 600 | void |
| anchor-2 | 400 | 450 | fire |
| anchor-3 | 550 | 600 | fire |
| anchor-4 | 400 | 750 | fire |
| anchor-5 | 250 | 600 | fire |
| anchor-6 | 400 | 290 | earth |
| anchor-7 | 660 | 460 | earth |
| anchor-8 | 720 | 720 | earth |
| anchor-9 | 540 | 920 | earth |
| anchor-10 | 260 | 920 | earth |
| anchor-11 | 80 | 720 | earth |
| anchor-12 | 140 | 460 | earth |

**Special rules**: Boss-rush ngắn ~5 phút. vanCount 2-3 = 2-3 wave Dị Tượng liên tục, không có ván thường — drop linh lực ngay từ ván 1. Currency-rich: drop pool +200% Đan Dược (Linh Đan, Tinh Hoa Ngũ Hành), +50% Tinh Hoa, -50% linh khí drop. Ý đồ: dùng làm 'currency farm map' tốc độ cao thay vì rare hunt. 12 anchor xếp 3 vòng concentric mô phỏng cấu trúc Lò Luyện Đan cổ: tâm = đan đang luyện (Vô Cực), vòng trong 4 điểm Hoả (lửa lò), vòng ngoài 8 điểm Thổ (vỏ lò). Layout buộc player build chain ly tâm Vô Cực → Hoả → Thổ.

**Description**: Tương truyền ở Hoả Sơn Lò Cốc, Lò Thần để lại một chiếc lò cổ vỡ đôi từ thời Đại Đan Đạo. Bí cảnh này tái hiện ngày cuối cùng Lò ấy cháy — lửa và đất xoay quanh đan tâm như hồi ức. Đạo sĩ vào không tìm linh khí lạ; vào để vét đan dược tổ truyền còn sót lại trong tro tàn.

**Geometry** (800×1200, 12 anchor — 3 vòng concentric):
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
> ⊙ = anchor, T=earth, H=fire, V=void

## Long Cung (dragon-palace)

| field | value |
| --- | --- |
| id | dragon-palace |
| ten | Long Cung |
| variant | dragon-palace |
| tierRange | 4-14 |
| vanCount | 6-9 |
| bossType | anomaly |
| modifierSlots | 1-3 |
| geometry | 1000×900 |

### Anchors (11)

| anchor id | x | y | elementBias |
| --- | --- | --- | --- |
| anchor-1 | 100 | 700 | water |
| anchor-2 | 200 | 580 | water |
| anchor-3 | 320 | 480 | water |
| anchor-4 | 450 | 400 | water |
| anchor-5 | 500 | 300 | void |
| anchor-6 | 550 | 400 | water |
| anchor-7 | 680 | 480 | water |
| anchor-8 | 800 | 580 | water |
| anchor-9 | 900 | 700 | water |
| anchor-10 | 350 | 750 | wood |
| anchor-11 | 650 | 750 | wood |

**Special rules**: Pháp trận Thuỷ exclusive — Đan Pháp Long Cung chỉ chấp nhận đan element Thuỷ hoặc Mộc; element khác lock entry. Physics override: gravity -40%, friction +200%, linh lực rơi chậm như trong nước, va chạm dampened (elastic 0.4 thay vì 0.9 default). Spawn pool: 80% Thuỷ + 15% Mộc + 5% Vô Cực; KHÔNG có Hoả/Kim/Thổ. Board nằm ngang (1000×900) mô phỏng đáy biển. 11 anchor xếp cong theo xương sống rồng từ trái sang phải, đỉnh đầu rồng (anchor-5) là Vô Cực — biased Long Vương. Drop pool: Bình Cam Lộ + Châu Thuỷ Long, Cổ Vật Long Cốt +30%. Tier 4-14 (không endgame T15+ vì physics quá lành).

**Description**: Long Cung nằm sâu dưới Bích Hải Đảo, nơi Long Vương ngàn năm trước phong ấn một mạch linh lực Thuỷ tinh khiết. Trong đây không có gió, không có lửa — chỉ có dòng chảy. Đạo sĩ luyện đan ở Long Cung phải học cách 'để đan tự thành', không thúc, không ép. Người vội vàng sẽ tay không trở về.

**Geometry** (1000×900, 11 anchor — xương sống rồng):
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
```
> ⊙ = anchor, T=water, M=wood, V=void

## Vô Cực (endless)

| field | value |
| --- | --- |
| id | endless |
| ten | Vô Cực |
| variant | endless |
| tierRange | 16-16 |
| vanCount | 50-100 |
| bossType | lightning |
| modifierSlots | 3-8 |
| geometry | 800×1200 |

### Anchors (13)

| anchor id | x | y | elementBias |
| --- | --- | --- | --- |
| anchor-1 | 150 | 240 | — |
| anchor-2 | 400 | 200 | — |
| anchor-3 | 650 | 240 | — |
| anchor-4 | 220 | 420 | — |
| anchor-5 | 580 | 420 | — |
| anchor-6 | 100 | 600 | — |
| anchor-7 | 400 | 600 | — |
| anchor-8 | 700 | 600 | — |
| anchor-9 | 220 | 780 | — |
| anchor-10 | 580 | 780 | — |
| anchor-11 | 150 | 960 | — |
| anchor-12 | 400 | 1000 | — |
| anchor-13 | 650 | 960 | — |

**Special rules**: Endgame endless mode (Cấp Vô Cực 100+). vanCount 50-100 chỉ là kỳ vọng baseline — RUNTIME REGENERATE anchor positions + count (8-13) + elementBias mỗi pháp trận, đan tier scale theo Vô Cực Điểm hiện tại. 13 anchor lưu trong file = 1 layout mẫu để designer review; runtime KHÔNG dùng trực tiếp layout này. Mọi thuộc tính random: spawn rate, element bias, modifier (lên đến 8 stack đồng thời = schema cap), Tâm Ma mod intensity ×Vô Cực Điểm / 100. Boss = Thiên Kiếp escalating mỗi 10 ván (Vô Cực 50/100/200 = Tâm Ma Vĩ Đại super-boss). Pháp Trận KHÔNG kết thúc bằng win — chỉ kết thúc bằng player tự bail (lock loot) hoặc bể đan. Tier lock T16 vì đây là content trên trần atlas. Drop pool fully random với weight bias theo player's Đạo Phái.

**Description**: Vô Cực không phải nơi — là trạng thái. Khi đan đã thành Tiên, đạo sĩ không còn quay về được nữa; mỗi lò đỏ là một vũ trụ tự sinh tự diệt. Ở đây thiên kiếp rơi không nghỉ, tâm ma sinh không dứt, nguyên khí không có hình. Đạo sĩ luyện ở Vô Cực không tu cho mình — tu cho cái đời sau đời này.

**Geometry** (800×1200, 13 anchor — sample layout only):
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
> ⊙ = anchor (no fixed bias — runtime random)

## Thiên Kiếp (lightning)

| field | value |
| --- | --- |
| id | lightning |
| ten | Thiên Kiếp |
| variant | lightning |
| tierRange | 14-16 |
| vanCount | 7-7 |
| bossType | lightning |
| modifierSlots | 0-2 |
| geometry | 800×1200 |

### Anchors (7)

| anchor id | x | y | elementBias |
| --- | --- | --- | --- |
| anchor-1 | 400 | 200 | metal |
| anchor-2 | 400 | 350 | metal |
| anchor-3 | 400 | 500 | metal |
| anchor-4 | 400 | 650 | void |
| anchor-5 | 400 | 800 | metal |
| anchor-6 | 400 | 950 | metal |
| anchor-7 | 400 | 1080 | metal |

**Special rules**: 7 ván = 7 lần thiên kiếp. KHÔNG có linh lực thường — chỉ có sét waves rơi dọc trục giữa board. Linh khí Lôi Phù (Kim) BẮT BUỘC đặt ≥ 1 viên; thiếu = ván fail tự động. Damage formula đảo ngược: linh lực Kim tương sinh đan = +5% intensity (tốt); mọi element khác hit đan = damage thẳng stability. Ván 7 = thiên kiếp boss đánh full screen, phải hứng + convert qua Lôi Phù Cổ (Cổ Vật). Pass = đan promote lên Tiên/Thánh phẩm. Anchor xếp dọc trục đứng = 'kênh sét' — mọi sét rơi trúng anchor, player buộc design chain dọc thay vì ngang.

**Description**: Khi đan đã đến phẩm Cổ, trời không cho phép nữa. Sét đánh xuống bảy lần — bảy lần thử lòng đạo sĩ. Không có nguyên khí Ngũ Hành; chỉ có Kim thuần và phán quyết của trời. Người sống qua bảy lần này, đan thành Tiên. Người không, tro bụi cũng không còn.

**Geometry** (800×1200, 7 anchor — kênh sét dọc):
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
> ⊙ = anchor, K=metal, V=void

## Hỗn Nguyên (marathon)

| field | value |
| --- | --- |
| id | marathon |
| ten | Hỗn Nguyên |
| variant | marathon |
| tierRange | 10-16 |
| vanCount | 10-30 |
| bossType | mirror |
| modifierSlots | 2-5 |
| geometry | 800×1200 |

### Anchors (14)

| anchor id | x | y | elementBias |
| --- | --- | --- | --- |
| anchor-1 | 140 | 220 | fire |
| anchor-2 | 660 | 200 | metal |
| anchor-3 | 400 | 320 | void |
| anchor-4 | 240 | 440 | wood |
| anchor-5 | 560 | 460 | water |
| anchor-6 | 120 | 600 | earth |
| anchor-7 | 680 | 620 | metal |
| anchor-8 | 380 | 640 | void |
| anchor-9 | 220 | 800 | fire |
| anchor-10 | 580 | 820 | wood |
| anchor-11 | 360 | 900 | water |
| anchor-12 | 460 | 1000 | earth |
| anchor-13 | 180 | 1060 | void |
| anchor-14 | 620 | 1060 | fire |

**Special rules**: Marathon 30-50 phút. Ván cứ 3 phút lại spawn wave mới; intensity +5% mỗi wave, escalating không trần. vanCount min/max là số ván trung bình player kỳ vọng (10-30 tuỳ tốc độ); runtime override khi player chọn bail-out tại phút 15/30/45 (lock-in current loot). Boss base = Tâm Ma; nếu Đan Pháp tier ≥ T14 thì boss promote thành Thiên Kiếp (specialRules layer kiểm tra). 14 anchor scattered chaos để dạy player rằng không có 'optimal layout' — phải rebuild build mỗi 3 ván khi wave intensity nhảy bậc. Anchor bias đủ 5 nguyên tố để Ngũ Hành chain luôn khả thi nhưng phải tự route.

**Description**: Hỗn Nguyên là cảnh giới trước khi vạn vật phân Ngũ Hành — không trật tự, không quy luật, chỉ có nguyên khí cuồn cuộn. Đạo sĩ bước vào đây là tự nguyện chìm vào trong cơn lốc thời gian: càng ở lâu, đan càng tinh, nhưng linh hồn càng mòn. Có người luyện được Tiên đan; có người không bao giờ trở ra.

**Geometry** (800×1200, 14 anchor — scattered chaos):
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
```
> ⊙ = anchor, h=fire, k=metal, m=wood, t=earth/water, v=void

## Tâm Ma (mirror)

| field | value |
| --- | --- |
| id | mirror |
| ten | Tâm Ma |
| variant | mirror |
| tierRange | 6-13 |
| vanCount | 5-5 |
| bossType | mirror |
| modifierSlots | 1-3 |
| geometry | 800×1200 |

### Anchors (10)

| anchor id | x | y | elementBias |
| --- | --- | --- | --- |
| anchor-1 | 200 | 280 | void |
| anchor-2 | 600 | 280 | void |
| anchor-3 | 280 | 460 | — |
| anchor-4 | 520 | 460 | — |
| anchor-5 | 180 | 640 | — |
| anchor-6 | 620 | 640 | — |
| anchor-7 | 280 | 820 | — |
| anchor-8 | 520 | 820 | — |
| anchor-9 | 340 | 980 | void |
| anchor-10 | 460 | 980 | void |

**Special rules**: Boss = phiên bản tà của chính Lò player (build-aware mirror). Runtime đọc 8-slot equipment + Đạo Phái + top 5 keystone của player, generate boss spawn pattern dùng REVERSED damage flow — nếu player build Hoả-Sát Thủ thì boss xài Thuỷ-Sustain để hard-counter. 5 ván fixed: ván 1-4 spawn 'sát thủ ảnh' yếu hơn để player đọc pattern, ván 5 boss thật. Anchor mirror-symmetric (trục dọc giữa) để visualise phản chiếu — player buộc build symmetric hoặc cố tình asymmetric để break mirror. Drop = Cổ Vật personalized (tied to player's primary build archetype: Sát Thủ/Pháp Sư/Hộ Pháp/Thương Nhân/Vong Linh).

**Description**: Tâm ma là chính mình. Khi đan đã thành hình, đạo sĩ phải đối diện với phiên bản ngược của bản thân — kẻ đã chọn ham muốn thay vì thanh tịnh. Lò trong gương đập đúng cách lò của mình đang luyện. Thắng trận này không phải hơn ai khác — là chịu được nhìn vào mình.

**Geometry** (800×1200, 10 anchor — mirror-symmetric):
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
> ⊙ = anchor, V=void (mirror boundary), unmarked=null

## Cửu Tiêu (nine-heavens)

| field | value |
| --- | --- |
| id | nine-heavens |
| ten | Cửu Tiêu |
| variant | nine-heavens |
| tierRange | 6-16 |
| vanCount | 6-9 |
| bossType | lightning |
| modifierSlots | 1-3 |
| geometry | 600×1800 |

### Anchors (9)

| anchor id | x | y | elementBias |
| --- | --- | --- | --- |
| anchor-1 | 150 | 280 | fire |
| anchor-2 | 300 | 280 | fire |
| anchor-3 | 450 | 280 | fire |
| anchor-4 | 150 | 900 | void |
| anchor-5 | 300 | 900 | void |
| anchor-6 | 450 | 900 | void |
| anchor-7 | 150 | 1520 | earth |
| anchor-8 | 300 | 1520 | earth |
| anchor-9 | 450 | 1520 | earth |

**Special rules**: Board chiều dọc 600×1800 (gấp 1.5 chiều cao Tiêu Chuẩn) mô phỏng chín tầng trời. Physics override: gravity +60%, friction -30% — linh lực rơi nhanh như sét rơi từ Cửu Tiêu xuống Nhân Giới, intensity tích luỹ velocity rất mạnh nhưng player có ít thời gian routing. 9 anchor đúng 9 ô = 3 tầng × 3 cột: tầng trời Hoả (Cửu Tiêu thượng), tầng Vô Cực (Trung Thiên), tầng Thổ (Hạ Giới — nơi đan ở). Chain Hoả→Vô Cực→Thổ là 'thiên đạo flow' = +50% intensity bonus đến đan. Linh khí ở 3 cột buộc player chọn lane thay vì spam toàn board. Boss = Thiên Kiếp wave từ tầng trời cao nhất rơi xuống.

**Description**: Cửu Tiêu là chín tầng trời, nơi Ngũ Hành Sơ Tổ ngày xưa ngắm thiên hà mà ngộ đạo. Linh lực ở đây không trôi — nó rơi như mưa sao, mỗi giọt là một niệm trời ban. Đạo sĩ luyện đan ở Cửu Tiêu phải biết đón sấm, biết tiếp gió, biết đứng yên giữa cơn rơi của muôn vì sao.

**Geometry** (600×1800, 9 anchor — chín tầng trời):
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
> ⊙ = anchor, H=fire, V=void, T=earth

## Tử Sinh (sanctum)

| field | value |
| --- | --- |
| id | sanctum |
| ten | Tử Sinh |
| variant | sanctum |
| tierRange | 8-16 |
| vanCount | 20-20 |
| bossType | mirror |
| modifierSlots | 1-3 |
| geometry | 800×1200 |

### Anchors (8)

| anchor id | x | y | elementBias |
| --- | --- | --- | --- |
| anchor-1 | 400 | 240 | — |
| anchor-2 | 220 | 420 | — |
| anchor-3 | 400 | 420 | — |
| anchor-4 | 580 | 420 | — |
| anchor-5 | 260 | 660 | — |
| anchor-6 | 540 | 660 | — |
| anchor-7 | 320 | 880 | — |
| anchor-8 | 480 | 880 | — |

**Special rules**: Đây là 1 phòng mẫu (room template) — RUNTIME GENERATE 20 phòng nối tiếp từ template này, mỗi phòng xoay/lật/scale khác nhau để giữ tươi. Mỗi phòng player chọn 1 trong 3 cửa: Cửa A (risk loot, modifier +1 phòng sau), Cửa B (neutral), Cửa C (heal +stability cho linh đan). Bể linh đan ở bất kỳ phòng nào = mất tất cả Sanctum loot, không mất loot Forever. Pass phòng 20 = boss Tâm Ma siêu khó + guaranteed Cổ Vật + Đan Pháp Cổ tier. Drop rate Đan Pháp Tử Sinh rất hiếm, gate level 70+. Anchor template 8 điểm để buộc player chọn linh khí tối ưu trong không gian hẹp.

**Description**: Trong sâu Hồn Nguyên Điện có hai mươi cánh cửa phong ấn — sau mỗi cánh là một sinh tử quan. Đạo sĩ vào, không quay đầu được; mỗi phòng phải chọn một con đường, mỗi đường có cái giá. Tổ Sư Bất Tử nói: 'Hai mươi cửa là hai mươi lần tự vấn. Linh đan qua được, không phải vì giỏi — vì biết chọn.'

**Geometry** (800×1200, 8 anchor — room template):
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
> ⊙ = anchor (all elementBias=null — no element lock)

## Tiêu Chuẩn (standard)

| field | value |
| --- | --- |
| id | standard |
| ten | Tiêu Chuẩn |
| variant | standard |
| tierRange | 1-16 |
| vanCount | 5-8 |
| bossType | anomaly |
| modifierSlots | 0-3 |
| geometry | 800×1200 |

### Anchors (10)

| anchor id | x | y | elementBias |
| --- | --- | --- | --- |
| anchor-1 | 200 | 280 | — |
| anchor-2 | 400 | 280 | — |
| anchor-3 | 600 | 280 | — |
| anchor-4 | 160 | 500 | — |
| anchor-5 | 400 | 500 | — |
| anchor-6 | 640 | 500 | — |
| anchor-7 | 240 | 720 | — |
| anchor-8 | 560 | 720 | — |
| anchor-9 | 320 | 900 | — |
| anchor-10 | 480 | 900 | — |

**Special rules**: Pháp Trận trung tính, không có cơ chế đặc biệt. Cấu trúc PoE-map cơ bản: 5-8 ván + 1 boss Dị Tượng cuối. 0-3 modifier slot tuỳ atlas keystone. Drop pool theo region atlas. Đây là baseline để đo cảm giác mọi pháp trận khác — bất kỳ variant nào lệch khỏi đây phải có lý do design rõ ràng. Anchor đặt theo lưới đối xứng 3-3-2-2: dạy người chơi đọc hình học board trước khi gặp variant phức tạp.

**Description**: Pháp trận sơ khai mà đạo sĩ luyện đan nào cũng phải qua. Đất bằng, trời quang, linh lực rơi đều — không có cơ chế nào ám hại. Đây là nơi tu chân học cách đặt linh khí, đọc dòng chảy ngũ hành, và làm quen với hơi thở của lò. Khi đan thành ở Tiêu Chuẩn, đạo sĩ mới đủ tâm cảnh để bước vào những bí cảnh hiểm hơn.

**Geometry** (800×1200, 10 anchor — lưới đối xứng 3-3-2-2):
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
> ⊙ = anchor (all elementBias=null — no element lock)

## Diêm Phủ (underworld)

| field | value |
| --- | --- |
| id | underworld |
| ten | Diêm Phủ |
| variant | underworld |
| tierRange | 8-16 |
| vanCount | 5-7 |
| bossType | mirror |
| modifierSlots | 2-4 |
| geometry | 800×1200 |

### Anchors (10)

| anchor id | x | y | elementBias |
| --- | --- | --- | --- |
| anchor-1 | 200 | 700 | void |
| anchor-2 | 400 | 720 | void |
| anchor-3 | 600 | 700 | void |
| anchor-4 | 150 | 880 | void |
| anchor-5 | 320 | 900 | void |
| anchor-6 | 480 | 900 | void |
| anchor-7 | 650 | 880 | void |
| anchor-8 | 280 | 1060 | void |
| anchor-9 | 520 | 1060 | void |
| anchor-10 | 400 | 1140 | void |

**Special rules**: Tâm Ma exclusive — KHÔNG có Ngũ Hành. Linh lực spawn 100% là Tâm Ma negative energy (không nằm trong enum NgHanh — runtime treat as separate 'tam-ma' channel). Damage formula Ngũ Hành DISABLED; thay bằng formula thuần stability damage trừ khi linh khí có flag 'Tịnh Tâm' (Bùa, Tượng Phật A Di Đà, Tịnh Tâm Linh Châu) — chỉ những linh khí này mới convert được Tâm Ma → quality positive. Death-mechanic: nếu linh đan bể trong Diêm Phủ, player vào trạng thái 'U Hồn' 1 ván — Lò mất 50% intensity nhưng được +1 ván retry. 10 anchor clustered ở nửa dưới board (y ≥ 700) = mô phỏng địa ngục bóp nghẹt; nửa trên trống = không gian đan rơi xuống tay tử thần. elementBias = voCuc vì Tâm Ma không có element slot trong schema, đại diện 'không thuộc ngũ hành'. Drop pool: Cổ Vật Tâm Ma Mặt Nạ +50%, Mộc Linh Tinh +30%, Đan Dược Tịnh Tâm guaranteed 1.

**Description**: Diêm Phủ là nơi mọi đan dở dang bị Diêm Vương giữ lại. Ở đây không có Ngũ Hành — chỉ có tâm ma và những linh hồn đã quên mình là ai. Đạo sĩ vào Diêm Phủ luyện đan, không phải để đan đẹp — để đem theo chút thanh tịnh xuống cho người chết. Lò ở đây luôn lạnh, dù có cháy đến đâu.

**Geometry** (800×1200, 10 anchor — clustered nửa dưới):
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
> ⊙ = anchor, V=void
