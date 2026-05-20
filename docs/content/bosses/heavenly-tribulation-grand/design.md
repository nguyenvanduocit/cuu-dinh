---
id: heavenly-tribulation-grand
ten: Thiên Kiếp Đại Cảnh
type: boss
bossType: heavenly-tribulation
tier: T16
element: void
phaseCount: 9
---

# Thiên Kiếp Đại Cảnh (`heavenly-tribulation-grand`)

## Định danh

Cửu Thiên Kiếp — 9 đợt sét, đỉnh cao thử thách của Thiên Đạo. Không phải boss — là **Thánh Phẩm gating mechanism**. Chỉ linh đan vượt đủ 9 kiếp mới được Thánh Phẩm thăng cấp. Thiên Kiếp Đại Cảnh không thể bị "đánh bại" theo nghĩa thông thường — player thắng bằng cách **sinh tồn** đủ 9 wave trong khi duy trì linh đan quality cao.

**Kiểm tra**: toàn bộ bộ kỹ năng Lôi Phù đã học từ Sơ Cảnh + khả năng duy trì damage trong khi quản lý board giữa các wave. Đây là endgame chase content — win-rate dưới 40% là thiết kế đúng.

Hình dạng: bầu trời hoàn toàn trắng xoá giữa board, 9 cột mây đen xoáy riêng biệt tương ứng 9 kiếp đang chờ. Mỗi kiếp hoàn thành, 1 cột mây tan đi — 8, 7, 6... đếm ngược. Board nền phát điện liên tục, linh khí rung nhẹ.

## Bậc & Bối cảnh

- **Tier**: T16 — đỉnh Atlas, content chase Thánh Phẩm
- **Win-rate target**: ~35% (level 95+, Lò 8 slot đầy đủ Thần tier, Atlas tree Thiên Kiếp đầu tư đủ)
- **Khi nào gặp**: Post T16 unlock, cần Đan Pháp Thiên Kiếp Đại (rare drop từ T15-16 hoặc crafted từ 3 Đan Pháp Thiên Kiếp Sơ + Cửu Kiếp Thạch)
- **Môi trường**: Cửu Thiên Phán Xét — board phủ khí điện nhẹ toàn thời gian. Linh khí Thuỷ bị debuff nhẹ (-10% velocity vì điện ẩm), linh khí Kim được buff (+10% charge tích điện). Lôi Phù recharge rút xuống còn 6 giây (từ 8 giây của Sơ Cảnh)

## Phase & Pattern

9 wave cấu trúc theo 3 nhóm, mỗi nhóm tăng dần độ phức tạp. Đếm ngược giữa wave rút từ 8 giây (wave 1-3) xuống còn 5 giây (wave 7-9) — áp lực thực sự.

### Wave 1–3: Sơ Kiếp Luyện (Nền tảng)

**Cấu trúc**: 1 → 2 → 3 sét đồng thời. Đếm ngược 5 giây. Giống Sơ Cảnh nhưng nhanh hơn (recharge Lôi Phù 6 giây, vừa đủ giữa wave 1-2-3 nếu có 3+ Lôi Phù trang bị).

**Stability damage (§5)**: **-10** per sét trượt; **+15** per Lôi Phù bắt được. Wave 3 (3 sét): worst case **-30**.

### Wave 4–6: Trung Kiếp Biến (Pattern phức tạp)

**Wave 4 — Sét Xoay**: 3 sét nhưng vị trí cột thay đổi sau mỗi 1.5 giây trong 5 giây đếm ngược (xoay sang cột lân cận). Lôi Phù đặt sai cột sẽ miss khi sét đánh — player phải đặt Lôi Phù tại cột *đích cuối* sau 3 lần xoay.
- Telegraph: cột xoay có vệt điện di chuyển, dừng lại ở cột đích 1 giây trước khi sét đánh

**Wave 5 — Sét Dội**: 2 sét đánh cột, mỗi sét dội lại sang cột bên cạnh sau 0.5 giây. Tổng có thể lên tới 4 hit nếu không có Lôi Phù ở 4 cột liên quan.
- **-10** per hit, tối đa **-40** nếu dội đủ 4 hit

**Wave 6 — Sét Liên Hoàn**: 4 sét, đánh lần lượt cách nhau 0.7 giây (không đồng thời). Lôi Phù chỉ có 6 giây recharge — nếu cùng cột bị đánh 2 lần, Lôi Phù đầu bắt được nhưng lần 2 miss vì chưa recharge.
- **-10** per sét trượt; worst case **-40** nếu không quản lý recharge

**Stability damage (§5)**: Wave 4-6: trung bình **-10 đến -40** tùy cột pattern và Lôi Phù coverage.

### Wave 7–8: Cao Kiếp Cực (Đòi hỏi build đặc thù)

**Wave 7 — Ngũ Sét Song Hành**: 5 sét đánh *tất cả cột cùng lúc* — giống wave 7 của Sơ Cảnh. Nhưng đếm ngược chỉ **3 giây**. Không đủ thời gian đặt Lôi Phù tại wave này nếu chưa chuẩn bị trước. Phải đặt Lôi Phù trong 5 giây nghỉ wave 6→7.
- Không có Lôi Phù: **-50** stability tức thì (§5: Thiên Kiếp wave unprotected = -50)
- Đủ Lôi Phù: **+75** stability

**Wave 8 — Kiếp Lửa Trời**: Thiên Kiếp chuyển màu từ trắng sang đỏ cam — sét lần này là **Thiên Lôi Hoả Phối**. Damage không chỉ stability mà còn **đốt linh khí**: 2 linh khí ngẫu nhiên trên board bị "cháy" — mất 1 ván hoạt động (tắt trong 10 giây). Stability damage: **-15** per sét trượt (tăng từ -10 vì Hoả phối).
- `ancient-thunder-charm` bắt được Thiên Lôi Hoả Phối: ngoài +15 stability, còn **neutralise cháy linh khí** trên cột đó

**Stability damage (§5)**: Wave 7: **-50** unprotected / **+75** protected. Wave 8: **-15** per sét + linh khí cháy.

### Wave 9: Cửu Thiên Phán Xét (Final)

**Toàn Board Kiếp**: 9 "tia sáng" phủ toàn board trong 2 giây — không rơi theo cột mà **quét ngang** liên tục 3 lần. Mỗi lần quét hit toàn board.

Cơ chế bắt: Lôi Phù tạo "lá chắn điện" bảo vệ cột trong 2 giây — nếu quét qua cột có lá chắn, bị hấp thu. Cần **5 Lôi Phù active đồng thời** để bảo vệ toàn board 3 lần quét.

- Không có Lôi Phù nào: **-50** × 3 lần quét = nếu không có immunity, linh đan bể ngay. (Thực tế: mỗi sweep là 1 event, stability cap fall-to-zero ngay sweep 1 nếu stability < 50)
- Đủ bảo vệ: linh đan nhận **Thánh Phẩm Điện Ký** buff — Thánh grade promotion guaranteed

**Stability damage (§5)**: Wave 9: **-50** per sweep unprotected (3 sweep), hoặc full protect = Thánh Phẩm unlock.

## Cơ chế đặc trưng

**Lôi Phù Recharge Race**: thách thức thiết kế chính — 9 wave với đếm ngược thu hẹp dần, trong khi Lôi Phù cần 6 giây recharge. Player phải **quản lý Lôi Phù rotation**: không bắn liên tục, phải giữ lại Lôi Phù đã recharge cho wave tiếp theo thay vì dùng hết ngay.

**Thánh Phẩm Gating**: đây là mechanic duy nhất trong game unlock **Thánh grade** cho linh đan. Không có Thánh Phẩm → không có endgame equipment tối thượng. Thiên Kiếp Đại Cảnh là "boss" quan trọng nhất không phải vì lore mà vì progression gate.

**Wave 8 Thiên Lôi Hoả Phối**: cross-element mechanic duy nhất trong Thiên Kiếp tier — punish build mono-Thuỷ (element tương phản sét), reward build Kim (tích điện) hoặc build có `ancient-thunder-charm`.

## Counter-play

**Cổ vật bắt buộc**:
- `ancient-thunder-charm` ("Thần Lôi Cổ Phù"): bán kính 1.5 cột, bắt Thiên Lôi Hoả Phối, neutralise linh khí cháy — core item cho Thiên Kiếp Đại. Cần tối thiểu 3, optimal 5 cái trang bị slot Khắc Phù
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): dùng sau wave 7 hoặc 9 nếu bị trượt — **bắt buộc** có trong inventory

**Build optimal**: Kim element + chain charge build — tận dụng board buff +10% charge, Lôi Phù recharge 6 giây fit đúng wave gap. Không dùng Thuỷ (debuff -10% velocity). Mộc cũng ổn nhưng không tận dụng buff.

**Chiến thuật**: nghỉ wave 3→4 đặt Lôi Phù cố định 3 cột; wave 6→7 đặt thêm Lôi Phù vào 2 cột còn lại; wave 8 ưu tiên dùng Thần Lôi Cổ Phù bắt Hoả Phối; wave 9 cần 5 Lôi Phù đang active — dùng `pure-heart-bead` ngay sau sweep 1 nếu bị trượt để không mất linh đan trước sweep 2.

## Phần thưởng

Drop theme: **Cửu Kiếp Thạch** (nguyên liệu craft Đan Pháp Thiên Kiếp Đại) + Lôi Phù tier max upgrade. Linh đan nếu vượt đủ 9 wave: **Thánh Phẩm thăng cấp** (grade mới, affix tier cao nhất mở khoá). Xác suất nhỏ: drop `ancient-thunder-charm` tier max + 1 Atlas node unlock "Thiên Lôi Ấn Vân" (buff toàn Atlas khi gặp Thiên Kiếp).
