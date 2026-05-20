---
id: immortal-ancestor-trial
ten: Tổ Sư Bất Tử Hồn Cảnh
type: boss
bossType: super-boss
tier: endgame
element: void
phaseCount: 5
---

# Tổ Sư Bất Tử Hồn Cảnh (`immortal-ancestor-trial`)

## Định danh

Thử thách của Tổ Sư đầu tiên — người không có thân xác nhưng có ý thức vĩnh cửu. Tổ Sư Bất Tử Hồn không tấn công vì muốn giết — Tổ Sư **thử thách vì tôn trọng**. Đây là bài kiểm tra cuối cùng trước khi player được công nhận là đã đạt đến ngưỡng cửa Bất Tử.

**Kiểm tra**: toàn bộ kỹ thuật player đã học trong game — Lôi Phù (Thiên Kiếp), counter element (Tứ Tượng), board reading (Diêm Phủ), chain speed (Bạch Hổ), burst break (Chu Tước), patience mechanic (Tâm Ma). Không có build ăn gian Tổ Sư — phải thực sự thành thạo.

Hình dạng: không có thân xác. Chỉ là **một vầng sáng trắng** lơ lửng giữa board, toả ra các hình dạng ngũ hành liên tục thay đổi. Mỗi phase, vầng sáng đổi màu theo element đang kiểm tra. Board tuyệt đẹp — nền trắng tinh, linh khí phát sáng rõ hơn bình thường.

## Bậc & Bối cảnh

- **Tier**: Endgame — Cấp Vô Cực 100 (level 100+), sau khi hoàn thành toàn bộ Atlas T16 và Tứ Tượng corner boss
- **Win-rate target**: ~30% (player phải có Lò 8 slot tối thượng, Cổ vật đầy đủ, passive tree hoàn chỉnh)
- **Khi nào gặp**: Unlock sau khi đánh bại đủ 4 Tứ Tượng Linh Tổ. Đan Pháp đặc biệt "Cửu Chuyển Bất Tử Đan" — cực rare, không mua được, chỉ drop từ endgame
- **Môi trường**: Hư Không Bất Tử — board trắng tinh, không có element buff/debuff cơ bản. Nhưng mỗi phase thêm element-specific modifier. Linh khí đẹp hơn nhưng hitbox chuẩn xác hơn (không gian "rộng hơn" giả lập — ít tolerant hơn với chain sai)

## Phase & Pattern

### Phase 1: Ngũ Hành Sơ Khảo (100% → 80% HP)

**Kiểm tra Ngũ Hành cơ bản**: Tổ Sư lần lượt bắn linh lực của **5 element khác nhau** vào board — mỗi element 30 giây. Player phải counter đúng element (khắc element Tổ Sư đang dùng) hoặc chịu stability penalty.

- Đúng element counter: damage bình thường, không penalty
- Sai element hoặc void: stability **-8** per hit (§5: -8 entry-level test, Vô Cực 100)
- Telegraph: vầng sáng đổi màu trước 3 giây, hiển thị text element tiếp theo trên board

**Stability damage (§5)**: **-8** per hit sai element — phạt nhẹ vì phase kiểm tra cơ bản.

### Phase 2: Lôi Phù Thử Đạo (80% → 60% HP)

**Thiên Lôi Tổ Sư**: Tổ Sư triệu hồi cơn sét đặc biệt — **Bất Tử Lôi** — khác Thiên Kiếp bình thường. Bất Tử Lôi không rơi theo cột mà **theo dõi linh đan** realtime (homing). Lôi Phù thông thường không đủ — cần `ancient-thunder-charm` để bắt.

- 3 đợt Bất Tử Lôi, mỗi đợt 2 sét homing
- Không bắt được: stability **-30** per sét (§5: Vô Cực 100 tier, escalated từ -50 Thiên Kiếp nhưng sét ít hơn)
- Bắt được bằng `ancient-thunder-charm`: **+20** stability per sét bắt

**Stability damage (§5)**: **-30** per Bất Tử Lôi trượt; **+20** per bắt được.

### Phase 3: Tứ Tượng Phán (60% → 40% HP)

**4 Linh Tổ Ký Ức**: Tổ Sư chiếu ký ức Tứ Tượng — 4 attack pattern của 4 Linh Tổ đã đánh xuất hiện đồng thời trong 60 giây:
- Thanh Long: Healing Decoy xuất hiện ngẫu nhiên (phải phá bằng Kim)
- Bạch Hổ: Kiếm Mưa — 3 kiếm/5 giây cắm board
- Chu Tước: Nhiệt Hoạt trên 2 linh khí ngẫu nhiên mỗi 15 giây
- Huyền Vũ (Black Tortoise): shield bubble bảo vệ Tổ Sư 30% damage reduction trong 10 giây mỗi 20 giây

Player phải quản lý cả 4 mechanic đồng thời trong khi DPS Tổ Sư.

- Stability damage: tổng hợp từ 4 nguồn — mỗi mechanic theo tier gốc nhưng giảm 40% (solo là 1 mechanic, đây là 4 cùng lúc nên giảm để tránh impossible):
  - Healing Decoy miss: **-9** (từ -15 Thanh Long)
  - Kiếm deflect: **-5** (từ -8 Bạch Hổ)
  - Nhiệt Hoạt chain: **-10** (từ -16 Chu Tước)
  - Shield không phá kịp: không damage nhưng mất 10 giây DPS window

**Stability damage (§5)**: tổng hợp multi-source, mỗi nguồn ≤ -10 riêng lẻ nhưng concurrent có thể -24/đợt nếu quản lý kém.

### Phase 4: Hư Vô Đối Thoại (40% → 10% HP)

**Tâm Ma Thử Thách Cuối**: Tổ Sư tạo ra ảo ảnh Hỗn Nguyên Tâm Ma Vương (boss T13). Không phải boss thật — nhưng mechanic giống hệt: Gương Phản Chiếu + Ký Ức Đan Sư + Tâm Ma Ô Nhiễm.

**Twist**: lần này player đã biết tất cả mechanic này. Tổ Sư muốn kiểm tra xem player **vẫn nhớ** không khi áp lực cao:
- Gương Phản Chiếu: linh lực reflect, stability **-15** nếu hit lại linh đan
- Ký Ức: không hit = +5% quality; hit = **-20** stability
- Ô Nhiễm: 1 linh khí ô nhiễm mỗi 10 giây

Đồng thời, Tổ Sư bản thân vẫn tấn công nhẹ: mỗi 15 giây bắn 3 viên Ngũ Hành hỗn hợp (element ngẫu nhiên, không theo pattern): stability **-12** per viên trượt.

**Stability damage (§5)**: Gương: **-15**; Ký Ức hit: **-20**; Tổ Sư viên: **-12**; Ô Nhiễm: **-8** per chain.

### Phase 5: Bất Tử Phong Ấn (10% → 0% HP)

**Cơ chế "Ngàn Năm Đốt Lò"**: Tổ Sư không còn tấn công. Thay vào đó, board đóng băng 5 giây — mọi thứ dừng lại. Sau đó, **linh đan player tự bốc sáng**: phải đạt quality mục tiêu (được set khi bắt đầu pháp trận) trong **30 giây cuối** mà không có thêm vật cản nào từ boss.

Đây là cơ hội — nhưng cũng là thử thách: nếu quality chưa đủ (do bị drain suốt 4 phase), 30 giây là quá ít. Nếu player duy trì tốt, 30 giây là luxury để finalize.

Tổ Sư xuất hiện lần cuối: **Chứng Kiến Thành Bất Tử**.
> *"Ngươi đã đủ. Lò Cửu Đỉnh thứ chín công nhận ngươi."*

**Stability damage (§5)**: Phase 5 không có stability damage — đây là reward phase. Nhưng quality phải đạt target trước khi 30 giây kết thúc.

## Cơ chế đặc trưng

**Tích Hợp Toàn Bộ Kỹ Năng**: mỗi phase kiểm tra 1 kỹ năng riêng biệt đã học từ boss trước — không có mechanic mới, chỉ có sự kết hợp và áp lực. Đây là "boss tổng kết" theo nghĩa thiết kế học thuật.

**Phase 5 Reward Window**: không một boss nào khác trong game kết thúc bằng "boss ngừng tấn công và cho player tự hoàn thành". Đây là tuyên bố: Tổ Sư đã xác nhận player xứng đáng trước khi phase kết thúc.

**Không Có Lore Giải Thích**: Tổ Sư không có dialogue dài dòng — chỉ vài dòng tối giản. Tất cả lore nằm trong chính hành động của boss, không trong text.

## Counter-play

**Cổ vật bắt buộc**:
- `ancient-thunder-charm` ("Thần Lôi Cổ Phù"): bắt buộc phase 2 Bất Tử Lôi homing. Không có → phase 2 không thể survive
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): dùng sau phase 3 concurrent mechanic burst. Dispel Ô Nhiễm phase 4
- `sun-wukong-staff` ("Trượng Tôn Ngộ Không"): phá Healing Decoy nhanh (phase 3 Thanh Long ký ức), phá Shield Huyền Vũ

**Build optimal**: hybrid — không thể mono-element ở boss này. Cần ít nhất 2 element chính để counter phase 1 Ngũ Hành. Build "universal chain" với velocity cao nhất, kết hợp cả 3 Cổ vật trên.

**Chiến thuật**: phase 1 — chuyển element theo màu vầng sáng, đừng lag. Phase 2 — đặt `ancient-thunder-charm` sẵn, không dùng cho công kích khác. Phase 3 — ưu tiên thứ tự: phá Healing Decoy (thời gian có giới hạn) > clear kiếm cắm (tích điện nguy hiểm) > Nhiệt Hoạt (chịu được 1 tick) > Shield (bỏ qua nếu DPS đủ nhanh). Phase 4 — dùng pure-heart-bead sau Ký Ức Đan Sư nếu lỡ hit. Phase 5 — burst DPS tất cả linh khí remaining, không tiết kiệm.

## Phần thưởng

Drop guaranteed: **Mirror-tier Cổ vật** (cổ vật unique rarity cao nhất, 1 item guaranteed per clear). Drop theme: Bất Tử Tinh Thạch cấp Vô Cực + affix "Tổ Sư Ấn Chứng" (prefix unique chỉ từ boss này — linh đan được công nhận bởi Tổ Sư, +30% mọi thứ cho pháp trận tiếp theo). Lần đầu clear: **Danh Hiệu "Bất Tử Đan Sư"** + leaderboard entry permanent.
