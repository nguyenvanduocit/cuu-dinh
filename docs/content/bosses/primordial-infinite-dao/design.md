---
id: primordial-infinite-dao
ten: Hỗn Nguyên Vô Cực Thiên Đạo
type: boss
bossType: super-boss
tier: endgame
element: void
phaseCount: 3
---

# Hỗn Nguyên Vô Cực Thiên Đạo (`primordial-infinite-dao`)

## Định danh

Vượt ra ngoài mọi tu hành — cuộc gặp gỡ trực tiếp với **Thiên Đạo** bản thân. Không phải sinh linh, không phải thực thể — là **ý chí của vũ trụ** đang nhìn xuống Lò Luyện Đan. Hỗn Nguyên Vô Cực Thiên Đạo không tấn công để chiến thắng; nó tấn công vì đó là bản chất của nó. Nó không thể hiểu player. Nó chỉ hiểu Đạo.

**Kiểm tra**: không có kỹ năng nào học được chuẩn bị đủ cho boss này. Đây là **pure execution** — phản xạ, đọc pattern, không sai một nhịp. Cấp Vô Cực 200 là ngưỡng cửa; boss này là thứ ở bên kia cửa đó.

Hình dạng: **hình học thuần túy** — không có mắt, không có cơ thể, không có khuôn mặt. Chỉ là các hình ngôi sao, tam giác, vòng tròn phát sáng xoay tròn trong không gian. Khi tấn công, hình học phân rã thành linh lực. Board hoàn toàn trắng trơn, không có texture. Âm thanh: tĩnh lặng hoàn toàn, chỉ có âm thanh linh khí.

## Bậc & Bối cảnh

- **Tier**: Endgame — Cấp Vô Cực 200 (post-level 100, paragon-like progression)
- **Win-rate target**: ~15% (Lò hoàn hảo, Cổ vật tier max, 200+ giờ chơi)
- **Khi nào gặp**: Post Tổ Sư Bất Tử Hồn Cảnh. Đan Pháp "Hỗn Nguyên Vô Cực" — không thể mua, không thể farm thông thường. Phải hoàn thành Leaderboard top 100 mùa để nhận 1 lần
- **Môi trường**: Hỗn Nguyên — board trắng tuyệt đối, không có linh khí cố định. Linh khí xuất hiện và biến mất theo rhythm của boss (không phải player control). Player phải tận dụng linh khí trong khoảng thời gian chúng exist

## Phase & Pattern

### Phase 1: Hình Học Hỗn Nguyên (100% → 50% HP)

**Linh Khí Xuất Hiện Theo Nhịp**: không có linh khí cố định trên board. Mỗi 4 giây, Thiên Đạo tạo ra **3 linh khí Ngũ Hành ngẫu nhiên** trong 8 giây rồi biến mất. Player phải chain trong cửa sổ 8 giây đó.

Nếu chain được: damage bình thường.
Nếu linh khí biến mất trước khi chain qua: cơ hội đó mất, không gây damage stability nhưng mất DPS window.

**Công kích "Đạo Văn Hình Học"** (mỗi 12 giây): boss phóng hình ngôi sao 5 cạnh — 5 tia sáng từ 5 đỉnh ngôi sao, mỗi tia nhắm 1 linh khí hiện có trên board. Linh khí bị hit: không biến mất nhưng bị "Đạo Hoá" — 10 giây tiếp theo linh lực qua đó gây stability **-15** lên linh đan (§5: Vô Cực 200 tier).
- Telegraph: ngôi sao hình học xuất hiện và xoay 2 giây trước khi phóng
- Cách counter: bắn linh lực Ngũ Hành vào linh khí Đạo Hoá để "ghi đè" debuff (bất kỳ element đủ mạnh đều clear Đạo Hoá)

**Công kích "Vô Cực Xoáy"** (mỗi 20 giây): board xoay 90° trong 3 giây — tất cả linh khí vị trí thay đổi theo chiều xoay. Linh lực đang bay bị deflect theo góc xoay. Nếu linh lực deflect hit linh đan: **-20** stability.

**Stability damage (§5)**: Đạo Văn: **-15** per chain pass qua Đạo Hoá; Vô Cực Xoáy deflect: **-20**. Vô Cực 200 range: -15 đến -25.

### Phase 2: Ngàn Đạo Phân Kỳ (50% → 20% HP)

**Linh Khí Nhân Đôi Nguy Hiểm**: từ phase 2, mỗi linh khí Thiên Đạo tạo ra tồn tại trong **5 giây** thay vì 8. Áp lực tăng mạnh — player phải chain nhanh hơn hoặc bỏ qua linh khí không kịp dùng.

**Công kích "Đạo Phân Vạn Tướng"** (mỗi 10 giây): boss tách ra thành **3 phân thân** — 3 hình học nhỏ bay đến 3 góc board và bắn tia đồng thời về phía linh đan từ 3 hướng. Mỗi tia: stability **-18**.
- 3 tia đến cùng lúc: **-54** worst case
- Counter: đặt linh khí trên đường tia để absorb (linh khí absorb 1 tia rồi biến mất — hao mòn linh khí của player)
- Telegraph: 3 hình học nhỏ dừng lại 1.5 giây ở 3 góc trước khi bắn

**Công kích "Thiên Đạo Vô Tình"** (mỗi 25 giây): Thiên Đạo không phân biệt player và linh đan — bắn linh lực **Ngũ Hành thuần túy** theo đúng quy luật tương sinh tương khắc nhưng nhắm ngẫu nhiên. Nếu hit linh đan (ngẫu nhiên): element tương khắc = **-25** stability (§5 max range); tương sinh = +5% quality.

**Stability damage (§5)**: Đạo Phân: **-18** per tia (3 tia = **-54**); Thiên Đạo Vô Tình: **-25** max (hoặc +quality nếu may mắn).

### Phase 3: Hỗn Nguyên Quy Nhất (20% → 0% HP)

**Board Tan Rã**: tất cả linh khí biến mất. Board trắng tuyệt đối — chỉ có linh đan và boss. Thiên Đạo co lại thành 1 điểm sáng duy nhất nhỏ xíu ở giữa board.

**Cơ chế "Vô Cực Đan Thiên"**: điểm sáng nhỏ bắt đầu expand — mỗi 3 giây nó lớn hơn. Khi nó phủ toàn board (khoảng 30 giây): **linh đan bị hấp thu vào Hỗn Nguyên**, game over ngay lập tức bất kể stability.

Player phải DPS điểm sáng trực tiếp bằng cách **bắn linh lực thẳng** (không cần linh khí — phase 3 không có linh khí). Mỗi viên linh lực hit điểm sáng: giảm expand speed 2%. Nếu DPS đủ: maintain size nhỏ đến khi depleted.

**Công kích "Đạo Lý Tối Thượng"** (mỗi 8 giây): điểm sáng phóng ra 1 tia duy nhất tuyệt đối thẳng vào linh đan. Không cần telegraph — đây là Thiên Đạo, không cần báo trước. Stability **-25** nếu hit (§5: -25 max Vô Cực 200).
- Cách dodge: bắn linh lực vào chính xác đường tia trước khi nó đến (chặn bằng linh lực — yêu cầu timing dưới 0.5 giây phản xạ)

**Stability damage (§5)**: Đạo Lý Tối Thượng: **-25** per tia (1 tia/8 giây, không thể bỏ qua).

## Cơ chế đặc trưng

**Linh Khí Theo Nhịp Boss (không phải player)**: lần đầu tiên trong game, player **không control board** hoàn toàn. Linh khí tồn tại theo rhythm của Thiên Đạo, không phải theo setup của player. Đây là triết lý thiết kế: Thiên Đạo không chiều theo ý muốn.

**Phase 3 Race**: không có HP bar rõ ràng cho phase 3 — chỉ có "điểm sáng đang lớn dần". Tension thuần túy từ visual, không từ số liệu. Leaderboard đo "thời gian còn lại khi điểm sáng bị depleted" — đây là speedrun metric.

**Thiên Đạo Vô Tình**: attack ngẫu nhiên gây damage hoặc buff — không phải game muốn RNG mà là triết lý: vũ trụ không quan tâm đến ý định, chỉ có kết quả.

## Counter-play

**Không có element tối ưu**: Thiên Đạo không có element weakness. Build nào DPS cao nhất và reaction time tốt nhất thắng.

**Cổ vật hữu ích**:
- `ancient-thunder-charm`: absorb Đạo Lý Tối Thượng tia phase 3 (nếu có Lôi Phù active — stretch mechanic, không phải intended nhưng hoạt động)
- `pure-heart-bead`: dùng sau Đạo Phân Vạn Tướng 3 tia (-54). Bắt buộc có
- `sun-wukong-staff`: ×3 linh lực — DPS điểm sáng phase 3 nhanh hơn 3×

**Chiến thuật**: phase 1 — ưu tiên clear Đạo Hoá debuff ngay lập tức; đọc Vô Cực Xoáy timing để không có linh lực đang bay khi board xoay. Phase 2 — absorb Đạo Phân bằng linh khí (sacrifice linh khí để chặn), dùng pure-heart-bead ngay sau. Phase 3 — bắn liên tục vào điểm sáng, giữ DPS rate đủ để maintain size; phản xạ chặn Đạo Lý Tối Thượng tia; sun-wukong-staff dùng ngay phase 3 bắt đầu.

## Phần thưởng

Drop: **Leaderboard recognition permanent** — tên player được khắc vào "Thiên Đạo Bảng" in-game visible cho mọi người. **Hỗn Nguyên Tinh Hoa Vô Cực** (nguyên liệu craft tier max duy nhất). Affix đặc biệt: prefix "Thiên Đạo Ấn" (linh đan có thể skip 1 pháp trận mà vẫn giữ tiến trình — tức là có thể "bỏ qua 1 ván thua" trong pháp trận tiếp theo, cơ chế độc nhất). Lần đầu clear: cutscene ngắn — vũ trụ ghi nhận, Lò Cửu Đỉnh thứ chín phát sáng trên Atlas map.
