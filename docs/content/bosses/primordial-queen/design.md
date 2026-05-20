---
id: primordial-queen
ten: Hỗn Nguyên Vương Hậu
type: boss
bossType: atlas-mega
tier: T16+
element: void
phaseCount: 5
---

# Hỗn Nguyên Vương Hậu (`primordial-queen`)

## Định danh

Trung tâm Sơn Hà Đồ — boss mega của Atlas, đỉnh cao của endgame scaling. Hỗn Nguyên Vương Hậu là **tổng hợp Ngũ Hành** — không phải void trừu tượng như Thiên Đạo, mà là sinh linh sống động đã hấp thu đủ 5 element và trở nên siêu việt. Bà không muốn player thua — bà **muốn player chứng minh** Lò của họ thực sự hoàn hảo.

**Kiểm tra**: 5 phase = 4 element-specific + 1 transcendent. Mỗi phase kiểm tra 1 element mastery. Phase 5 kiểm tra tất cả cùng lúc ở cường độ max. Scale theo Cấp Vô Cực — không có "giải pháp cố định" vì boss mạnh dần mỗi Cấp.

Hình dạng: phụ nữ khổng lồ ngồi trên ngai vàng giữa board, áo bào gồm cả 5 màu Ngũ Hành xen kẽ. Mỗi phase, một màu dominant. Phase 5, tất cả 5 màu bùng cháy đồng thời. Kích thước board expand thêm 20% khi gặp bà — board rộng hơn, chain path phong phú hơn nhưng cũng nhiều hazard hơn.

## Bậc & Bối cảnh

- **Tier**: T16 minimum, scale vô hạn với Cấp Vô Cực
- **Win-rate target**: ~35% ở T16 (level 100, Lò đầy đủ); ~20% ở Cấp Vô Cực 50; giảm tuyến tính — Vương Hậu không có ceiling
- **Khi nào gặp**: Atlas center boss, accessible sau khi mở T16 central node. Đan Pháp Hỗn Nguyên (T16 common drop). Không cần Tứ Tượng đã đánh — đây là parallel progression, không sequential
- **Môi trường**: Hỗn Nguyên Vương Cung — board expand 20%, nền có 5 vùng nhỏ theo 5 màu Ngũ Hành tương ứng 5 phase (vùng sẽ active theo phase đang diễn ra, vùng inactive không buff/debuff)

## Phase & Pattern

### Phase 1: Thuỷ Ý (100% → 80% HP) — element: water

**Vương Hậu Thuỷ Thể**: bà hoá thành dạng Thuỷ — board vùng Thuỷ activate (rìa dưới board phủ nước). Linh khí Thuỷ trong vùng nước: +20% velocity. Linh khí Hoả trong vùng nước: -15% velocity (Hoả-Thuỷ khắc).

**Công kích "Triều Dâng Âm Ba"** (mỗi 10 giây): sóng nước từ rìa dưới board quét lên 3 cột theo hướng ngẫu nhiên. Linh khí bị sóng quét: bị đẩy lên 1 vị trí (đổi hàng). Linh đan bị sóng quét trực tiếp: stability **-12** (§5: T16 Thuỷ phase, -12 thấp vì phase đầu).
- Telegraph: nước sóng xuất hiện ở rìa 1.5 giây trước khi quét

**Công kích "Băng Phong Phong Ấn"** (mỗi 18 giây): bà đóng băng **2 linh khí ngẫu nhiên** trong 10 giây — linh lực không thể đi qua. Chain path bị chặn.
- Cách phá: chain linh lực Hoả vào linh khí đóng băng (Hoả tan băng — Hoả tương khắc Thuỷ)
- Nếu không phá: mất 2 linh khí trong chain 10 giây

**Stability damage (§5)**: Triều Dâng: **-12**; Băng Phong: không gây damage nhưng chặn chain.

### Phase 2: Hoả Ý (80% → 60% HP) — element: fire

**Chuyển Phase**: vùng Thuỷ tắt, vùng Hoả (rìa trên board) activate. Băng tan hết. Board nóng lên.

**Công kích "Phượng Ý Thiêu Tâm"** (mỗi 8 giây): tia lửa từ phía trên quét xuống 2 cột liên tiếp. Linh khí bị quét nhận Nhiệt Hoạt (giống Chu Tước phase 1 nhưng nhẹ hơn — 20% convert thay vì 50%).
- Linh đan Kim bị chain Nhiệt Hoạt: stability **-14** per chain pass (§5: -14 T16 Hoả phase 2)
- Telegraph: cột phát sáng đỏ 1.5 giây

**Công kích "Hoả Liên Nổ"** (mỗi 15 giây): bà triệu hồi 3 cầu lửa nổ chậm — sau 5 giây tự nổ. Player phải chain linh lực Thuỷ vào từng cầu để dập tắt trước khi nổ.
- Cầu nổ (không dập): stability **-18** per cầu; 3 cầu = **-54** worst
- Dập đủ: không damage; mỗi cầu dập được → +3% quality

**Stability damage (§5)**: Phượng Ý: **-14**; Hoả Liên Nổ: **-18** per cầu.

### Phase 3: Kim Ý (60% → 40% HP) — element: metal

**Chuyển Phase**: vùng Hoả tắt, vùng Kim (rìa trái board) activate. Kiếm nhỏ bắt đầu rơi xuống vùng Kim (4 kiếm/10 giây) — nhẹ hơn Bạch Hổ nhưng phủ góc trái board.

**Công kích "Hổ Phách Kim Trận"** (mỗi 12 giây): 5 kiếm lớn bắn theo hình quạt từ góc trái. Giống Bạch Hổ Liên Trảo nhưng fan rộng hơn (phủ 4/5 cột).
- Hit linh đan Mộc/Hoả (Kim khắc): stability **-16** per kiếm (§5: -16 T16 Kim phase 3)
- Hit linh đan Kim: **-5** (đồng chất giảm mạnh)
- Counter: chain linh lực Hoả để dập kiếm bay

**Công kích "Kiếm Khí Áp Trường"** (passive, suốt phase 3): khu vực Kim activate bị "kiếm khí" — linh lực bay qua vùng Kim bị deflect nhẹ (-10° góc). Ảnh hưởng chain accuracy.

**Stability damage (§5)**: Hổ Phách Kim Trận: **-16** per kiếm trượt.

### Phase 4: Mộc Ý (40% → 15% HP) — element: wood

**Chuyển Phase**: vùng Kim tắt, vùng Mộc (rìa phải board) activate. Cây leo bắt đầu mọc từ rìa phải — giống Thanh Long phase 1 nhưng nhẹ hơn (15% Mộc Hoá thay vì 30%).

**Công kích "Vạn Mộc Bủa Vây"** (mỗi 15 giây): bà triệu hồi 2 Healing Decoy Mộc — giống Thanh Long. Phải phá bằng Kim. Nếu không phá: bà hồi 6% HP mỗi Decoy.

**Công kích "Căn Đế Thiên Địa"** (mỗi 10 giây): rễ cây mọc từ board khóa **1 linh khí** tại chỗ (không bị đẩy bởi sóng hay xoay). Linh khí bị khóa: tiếp tục hoạt động bình thường nhưng **linh lực đi qua tăng 40% velocity** (rễ cây dẫn năng lượng). Có thể dùng linh khí bị khóa như hub chain.

**Công kích "Thiên Mộc Chưởng"** (mỗi 12 giây): cây khổng lồ từ vùng Mộc vươn cành quét ngang board. Linh đan Kim bị quét: stability **-18** (§5: -18 T16 Mộc phase 4). Linh đan Hoả (Mộc sinh Hoả): quality +4% nếu bị quét trúng.

**Stability damage (§5)**: Thiên Mộc Chưởng: **-18** nếu linh đan Kim; Healing Decoy miss: không damage trực tiếp nhưng boss hồi HP.

### Phase 5: Hỗn Nguyên Siêu Việt (15% → 0% HP)

**Tất Cả Vùng Active Đồng Thời**: 4 vùng element (Thuỷ/Hoả/Kim/Mộc) cùng activate — board chia thành 4 góc element + trung tâm Hỗn Nguyên (vùng bà ngồi, void zone).

**Cơ chế "Ngũ Hành Vô Cực Luân"**: bà tấn công bằng **tất cả 4 element xen kẽ** mỗi 5 giây theo cycle Thuỷ→Hoả→Kim→Mộc→Thuỷ... Player phải counter đúng element theo cycle. Sai element: stability **-20** per miss (§5: -20 T16+ phase 5).
- Cycle tốc độ tăng dần: bắt đầu 5 giây/element, sau 30 giây giảm xuống 3 giây/element (scale với Cấp Vô Cực: Vô Cực 50 = 2 giây/element)

**Công kích "Hỗn Nguyên Tổng Lực"** (mỗi 20 giây): bà bắn 1 viên Hỗn Nguyên khổng lồ — không thuộc Ngũ Hành, không thể counter bằng element. Phải **deflect bằng linh lực vật lý** (bắn linh lực cùng hướng viên bay → collision deflect viên sang hướng khác).
- Viên hit linh đan: stability **-40** (§5: Hỗn Nguyên transcendent, ngoài range Ngũ Hành bình thường)
- Deflect thành công: viên quay lại hit boss → boss mất 5% HP tức thì

**Stability damage (§5)**:
- Ngũ Hành Vô Cực Luân miss: **-20** per cycle miss
- Hỗn Nguyên Tổng Lực hit: **-40**
- Phase 5 worst case / 20 giây: **-100+** nếu miss 3 cycle + 1 Hỗn Nguyên

## Cơ chế đặc trưng

**Infinite Scaling**: Hỗn Nguyên Vương Hậu là boss duy nhất scale vô hạn với Cấp Vô Cực — HP, attack speed, damage multiplier tăng. Cho phép game có "endgame boss" thực sự không có "solved state". Mỗi kỳ mùa có thể set Vô Cực 50 tournament, etc.

**Vùng 4 Element Đồng Thời Phase 5**: lần đầu trong game, player phải quản lý 4 micro-environment cùng một lúc. Chain path phải route qua vùng element phù hợp với attack cycle hiện tại.

**Deflect Mechanic Phase 5**: Hỗn Nguyên Tổng Lực là viên đầu tiên trong game không thể counter bằng element mà phải deflect vật lý. Dạy player "không phải mọi thứ đều counter được bằng element" — chuẩn bị mindset cho Thiên Đạo boss.

## Counter-play

**Cổ vật bắt buộc**:
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): dùng sau Hỗn Nguyên Tổng Lực (-40) hoặc sau mỗi đợt miss cycle phase 5. Dispel Băng Phong phase 1 nếu không kịp phá bằng Hoả
- `sun-wukong-staff` ("Trượng Tôn Ngộ Không"): phá Healing Decoy nhanh (phase 4), deflect Hỗn Nguyên Tổng Lực (×3 viên = tăng xác suất collision deflect)
- `ancient-thunder-charm`: hữu ích ở phase nào có random lightning (map mod Thiên Kiếp overlap với T16+ Vương Hậu possible)

**Build optimal**: hybrid multi-element — không thể mono-element, cần switch element theo cycle phase 5. Lý tưởng nhất: Lò 8 slot với 4 slot Khắc Phù mix element, chain speed cao nhất.

**Chiến thuật**: phase 1-4 — học pattern mỗi phase trong isolation (các phase này giống mini-boss). Phase 5 — học cycle trước, đặt linh khí route qua vùng element phù hợp trước khi phase bắt đầu; giữ sun-wukong-staff để deflect Hỗn Nguyên Tổng Lực; pure-heart-bead sau mỗi Hỗn Nguyên viên.

## Phần thưởng

Drop theme: **Hỗn Nguyên Phách** (endgame currency tối thượng — exchange cho mọi item) + **Vương Hậu Atlas Fragment** (mảnh unlock Atlas tree trung tâm, passive buff toàn Sơn Hà Đồ). Drop Cổ vật: guaranteed 1 Cổ vật tier cao từ bảng Vương Hậu (all-element, không giới hạn element cụ thể). Xác suất nhỏ theo Cấp Vô Cực: "Vương Hậu Niêm" — title + cosmetic Lò skin hiếm nhất game.
