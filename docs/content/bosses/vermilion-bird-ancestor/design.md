---
id: vermilion-bird-ancestor
ten: Chu Tước Linh Tổ
type: boss
bossType: atlas-mega
tier: T14-T15
element: fire
phaseCount: 3
---

# Chu Tước Linh Tổ (`vermilion-bird-ancestor`)

## Định danh

Một trong Tứ Tượng Linh Tổ — góc Nam của Sơn Hà Đồ. Chu Tước Linh Tổ là thực thể Hoả thuần khiết nhất trong thế giới Cửu Đỉnh — không phải lửa thiêu đốt, mà là **lửa tái sinh**. Nó không giết linh đan; nó **nung lại từ đầu**, xem linh đan có đủ phẩm cấp để vượt qua nhiệt độ tuyệt đỉnh không.

**Kiểm tra**: player có thể duy trì quality trong khi board liên tục bùng cháy và reset? Build nào thực sự bền nhiệt? Chu Tước punish build phụ thuộc board tĩnh, reward build burst + recovery.

Hình dạng: chim phượng khổng lồ màu đỏ-vàng-cam, sải cánh phủ nửa board. Lông vũ rơi xuống board thành linh khí Hoả tạm thời. Khi phase chuyển, Chu Tước bốc cháy rồi tái sinh từ tro — HP bar reset về phase mới không phải từ 0 mà từ điểm phase bắt đầu.

## Bậc & Bối cảnh

- **Tier**: T14-T15 — Atlas corner Nam, mở sau khi hoàn thành Atlas tier trung tâm T13
- **Win-rate target**: ~45% (level 90+, Lò 8 slot Thần tier đầy đủ, có item Hoả-counter hoặc Thuỷ chain)
- **Khi nào gặp**: Endgame Atlas — cần Đan Pháp Hoả-tier cao + Chu Tước Nguyên Liệu (lông phượng, đá nhiệt huyết). Chu Tước counter đặc biệt build Thuỷ mono
- **Môi trường**: Phương Nam Hoả Hải — board nền phát nhiệt đỏ. Linh khí Hoả tự buff +20% intensity. Linh khí Kim bị debuff -15% (Kim nóng chảy ở nhiệt độ Chu Tước). Linh khí Thuỷ hoạt động bình thường — Thuỷ dập Hoả nhưng Hoả đủ mạnh để kháng cự

## Phase & Pattern

### Phase 1: Phương Nam Hoả Hải (100% → 60% HP)

**Lông Vũ Hoả Trận**: mỗi 10 giây, Chu Tước rũ cánh — 4 lông vũ rơi xuống 4 vị trí ngẫu nhiên trên board. Lông vũ tồn tại 20 giây như linh khí Hoả tạm thời. Khi linh lực đi qua lông vũ: +30% intensity Hoả.

- Linh đan Kim bị ăn chain Hoả qua lông vũ: stability **-14** per hit (tương khắc Kim, intensity cao)
- Linh đan Hoả được buff quality nếu linh lực Hoả chain qua lông vũ: +5% quality per chain pass

**Công kích "Liệt Dương Phún"** (mỗi 9 giây): Chu Tước phun tia lửa rộng quét 3 cột liên tiếp. Mỗi linh khí trên cột bị quét: nhận debuff "Nhiệt Hoạt" — 8 giây tiếp theo linh lực qua đó bị convert 50% sang Hoả.
- Stability damage nếu linh đan Kim bị Nhiệt Hoạt chain: **-16** per hit (§5: -5 đến -25 range Tâm Ma / §5 atlas-tier: 10-25)
- Telegraph: Chu Tước giang cánh 2 giây, cột sắp bị quét phát sáng vàng nhạt

**Stability damage (§5)**: Liệt Dương Phún: **-16** per chain hit qua Nhiệt Hoạt; Lông Vũ chain Kim: **-14**.

### Phase 2: Phượng Hoàng Tái Sinh (60% → 25% HP)

**Tái Sinh Trigger**: khi HP xuống 60%, Chu Tước bốc cháy toàn thân 3 giây — trong thời gian này invulnerable và board bị phủ lửa toàn bộ (linh khí không thể move). Sau 3 giây, Chu Tước tái sinh: **toàn bộ lông vũ phase 1 biến thành Hoả Cầu** nổ tung đồng thời.

- Hoả Cầu nổ: stability **-10** per cầu hit linh đan (4 lông vũ = tối đa -40 nếu tất cả trúng)
- Sau nổ, board bị "tro tàn" phủ 3 ô ngẫu nhiên — linh khí trong tro mất 50% hiệu quả trong 15 giây

**Công kích "Bão Lửa Cuồng Phong"** (mỗi 7 giây): Chu Tước bay vòng quanh board 1.5 giây, để lại vệt lửa theo đường bay. Vệt lửa tồn tại 10 giây — linh lực qua vệt lửa: convert 100% sang Hoả nếu không phải Hoả/Thuỷ.
- Linh đan Kim bị full Hoả convert chain: stability **-20** per chain pass qua vệt lửa

**Stability damage (§5)**: Hoả Cầu nổ: **-10** per cầu; Bão Lửa chain Kim: **-20**. Phase 2 worst case: **-60** (4 cầu + 2 chain pass).

### Phase 3: Cửu Thiên Phượng Hoàng (25% → 0% HP)

**Nhiệt Độ Tuyệt Đỉnh**: board nền chuyển hoàn toàn trắng-đỏ. Mọi linh khí trên board đều mang buff "Hoả Hoá" — linh lực qua bất kỳ linh khí nào đều bị convert 25% sang Hoả, bất kể element. Không thể tắt mechanic này.

**Công kích "Cửu Dương Thần Lửa"** (mỗi 12 giây): Chu Tước phóng 9 viên Hoả cầu cực lớn theo hình vòng tròn bao quanh linh đan. Các viên thu hẹp dần về tâm trong 4 giây. Player phải **chain linh lực xuyên qua vòng vây** để break ít nhất 3 viên trước khi chúng đến tâm.
- Mỗi viên không bị break khi đến tâm: stability **-22** (§5: -22 T14-15 range)
- Tất cả 9 viên đến tâm: **-198** — impossible survive, phải break ít nhất 6/9
- Breaking 6+ viên: kích hoạt "Phượng Phá Vòng" — player nhận stability +30

**Stability damage (§5)**: Cửu Dương: **-22** per viên không bị break; cần break ≥ 6/9 để survive.

## Cơ chế đặc trưng

**Lông Vũ Dual-Use**: mechanic độc quyền Chu Tước — lông vũ vừa là hazard (Hoả chain với intensity cao) vừa là buff cho build Hoả (quality +5%). Player Hoả build cố tình route linh lực qua lông vũ để tăng quality; player Thuỷ build phải tránh hoặc dập tắt lông vũ bằng Thuỷ.

**Tái Sinh Trigger**: Chu Tước là boss duy nhất có invulnerable window trong transition. Player biết trước điều này (3 giây) — dùng để reposition Lôi Phù, setup chain, không phải tấn công. Punish player spam attack bừa bãi vào invulnerable boss.

**Cửu Dương Vòng Vây**: mechanic phá vòng vây bằng chain burst — reward build burst chain (nhiều linh lực trong 4 giây) hơn là sustained DPS.

## Counter-play

**Element**: **Thuỷ** (khắc Hoả) — dập Bão Lửa vệt, giảm Nhiệt Hoạt duration, giảm damage Hoả Cầu 30%. Tuy nhiên Thuỷ không có advantage đặc biệt phase 3 vì Hoả Hoá vẫn convert 25%.

**Cổ vật hữu ích**:
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): phục hồi 20% stability sau Tái Sinh nổ (-40) hoặc Cửu Dương miss nhiều. Dispel Nhiệt Hoạt debuff trên linh khí (§5)
- `sun-wukong-staff` ("Trượng Tôn Ngộ Không"): ×3 linh lực sau hit đầu — optimal để break Cửu Dương vòng vây (3 viên cùng lúc từ 1 chain burst)
- Cổ vật buff Thuỷ velocity: dập vệt Bão Lửa nhanh hơn, giảm damage từ convert chain

**Chiến thuật**: phase 1 — nếu build Hoả, lấy lông vũ +quality; nếu build Thuỷ/Kim, dập lông vũ ngay. Phase 2 — đếm lông vũ còn lại (tối đa 4) trước Tái Sinh để chuẩn bị hứng Hoả Cầu; dùng pure-heart-bead sau nổ. Phase 3 — setup chain burst dài (≥6 linh lực active đồng thời) trước Cửu Dương, dùng sun-wukong-staff để nhân lên.

## Phần thưởng

Drop theme: **Chu Tước Vũ Linh** (lông vũ huyền thoại — nguyên liệu craft item Hoả endgame) + Hoả Atlas Fragment (mảnh unlock T15-T16 vùng Nam). Drop Cổ vật: ưu tiên Hoả-element hoặc burst-chain. Xác suất nhỏ: Atlas node unlock "Nam Phương Hoả Vương" — passive tree Atlas node buff Hoả toàn Sơn Hà Đồ + giảm 10% Nhiệt Hoạt duration từ các boss Hoả khác.
