---
id: heavenly-tribulation-first
ten: Thiên Kiếp Sơ Cảnh
type: boss
bossType: heavenly-tribulation
tier: T14
element: void
phaseCount: 7
---

# Thiên Kiếp Sơ Cảnh (`heavenly-tribulation-first`)

## Định danh

Lần đầu tiên Thiên Đạo phán xét Lò Luyện Đan. Không phải kẻ thù — là **ý chí của trời**, thử xem linh đan trong lò có xứng tồn tại không. Thiên Kiếp Sơ Cảnh không tấn công theo cảm xúc; nó vận hành như định luật: đúng quy tắc thì sống, sai thì diệt.

**Kiểm tra**: player hiểu cơ chế **Lôi Phù** chưa? Biết đặt Lôi Phù đúng cột đúng thời điểm không? Đây là bài học bắt buộc trước Thiên Kiếp Đại Cảnh.

Hình dạng: bầu trời đen kịt phủ toàn board, mây xoáy tím-trắng. Không có thân xác — chỉ là các tia sét từ trên rơi xuống theo pattern đếm ngược. Mỗi cột board có thanh đếm ngược 5 giây nhỏ khi bị chọn làm mục tiêu sét.

## Bậc & Bối cảnh

- **Tier**: T14 — Endgame Atlas, lần đầu chạm Thiên Kiếp tier
- **Win-rate target**: ~50% (level 80+, Lò 7-8 slot, cần ít nhất 2 Lôi Phù trang bị)
- **Khi nào gặp**: Sau khi mở T14 Atlas. Player cần Đan Pháp Thiên Kiếp (drop từ T13 hoặc mua từ Tổ Quán). Không có element Nguyên Liệu yêu cầu — Thiên Kiếp không phân biệt ngũ hành
- **Môi trường**: Bầu Trời Kiếp Vân — board bình thường nhưng nền trời chuyển tối dần từ wave 1 đến wave 7. Linh khí trên board không bị debuff nhưng **Lôi Phù** được buff: hiệu quả tăng 20% khi trên board trong Thiên Kiếp zone

## Phase & Pattern

Thiên Kiếp hoạt động theo **7 đợt sóng** (7 kiếp), không theo HP bar. Mỗi wave hoàn tất sau khi sét đánh xong. Giữa wave có 8 giây nghỉ để player ổn định board.

### Wave 1–3: Sơ Kiếp (Lôi Phù tuỳ chọn)

**Cơ chế Sét Đơn**: mỗi wave, 1 cột ngẫu nhiên được đánh dấu mục tiêu — thanh đếm ngược 5 giây xuất hiện phía trên cột đó. Sau 5 giây, sét đánh xuống toàn bộ cột.

- Nếu cột **có Lôi Phù**: sét bị hấp thụ, Lôi Phù phát nổ thành **+15 stability** (§5: Lôi Phù catch cơ bản)
- Nếu cột **không có Lôi Phù**: stability **-10** per sét trượt (§5: -10 nếu có Lôi Phù bảo vệ ít nhất 1 cột lân cận, -50 nếu không có bảo vệ nào — nhưng wave 1-3 chỉ 1 sét nên tổng -10)

**Stability damage (§5)**: Wave 1-3: **-10** per sét trượt. Có Lôi Phù: **+15** heal ngược.

### Wave 4–5: Trung Kiếp (Lôi Phù bắt buộc)

**Cơ chế Song Sét**: 2 cột bị đánh dấu đồng thời. Đếm ngược 5 giây như cũ. Cả 2 sét đánh cùng lúc.

- 2 sét trượt hết: stability **-20** tổng (2 × -10)
- 1 Lôi Phù bắt 1: **-10** từ sét kia, **+15** từ Lôi Phù bắt được
- 2 Lôi Phù bắt hết: **+30** stability tổng

**Stability damage (§5)**: **-20** worst case wave 4-5; **+30** best case.

### Wave 6: Tam Sét Phán Xét

**3 sét đồng thời**: 1 cột giữa + 2 cột rìa trái/phải. Pattern cố định, không ngẫu nhiên — player có thể học thuộc. Đây là telegraph báo hiệu wave 7.

- Trượt hết 3: **-30** stability (3 × -10)
- Có Lôi Phù bắt 2/3: **-10** + **+30** = **+20** tổng

**Stability damage (§5)**: **-30** worst case; optimal play net positive.

### Wave 7: Cửu Trụ Thiên Lôi (Final — Lôi Phù bắt buộc mọi cột)

**5 sét đồng thời** phủ toàn board (5 cột của board Cửu Đỉnh standard). Đếm ngược rút ngắn còn **3 giây** thay vì 5. Không có pattern — tất cả cột cùng bị chọn.

- **Nếu không có Lôi Phù nào**: stability **-50** tức thì (§5: Thiên Kiếp wave không bảo vệ = -50 toàn bộ)
- **Mỗi Lôi Phù bắt được 1 sét**: -10 giảm xuống, +15 heal. Có 3 Lôi Phù = -20 + 45 = **+25** tổng
- **Đủ 5 Lôi Phù** (bắt hết): **+75** stability tổng — linh đan áp quality cực mạnh lần cuối

**Stability damage (§5)**: **-50** unprotected (đúng quy tắc §5 Thiên Kiếp); đủ Lôi Phù → net **+75**.

## Cơ chế đặc trưng

**Lôi Phù Hấp Thu**: cơ chế trung tâm của mọi Thiên Kiếp tier. Lôi Phù là item trang bị vào slot Khắc Phù của Lò — khi sét đánh trúng cột có Lôi Phù, thay vì damage, sét được **hấp thu thành năng lượng** buff stability. Mỗi Lôi Phù chỉ bắt được 1 sét per wave rồi cần 8 giây recharge (đúng khoảng nghỉ giữa wave).

**Đếm Ngược Hiển Thị**: thanh đếm ngược nằm ngay trên board, không phải HUD — đây là mechanic dạy player **đọc board trực tiếp** thay vì nhìn vào HUD. Kỹ năng này tái dùng ở Thiên Kiếp Đại Cảnh với đếm ngược ngắn hơn.

## Counter-play

**Cổ vật bắt buộc**:
- `ancient-thunder-charm` ("Thần Lôi Cổ Phù"): Lôi Phù tier cao nhất — bắt sét trong **bán kính 1.5 cột** thay vì 1 cột chính xác. Wave 7 không cần đủ 5 Lôi Phù — 3 Thần Lôi Cổ Phù có thể phủ 5 cột nhờ overlap (§5 cross-ref)
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): dùng sau wave 7 nếu bị trượt — phục hồi 20% stability để kịp chạy boss HP bar tiếp theo

**Chiến thuật**: wave 1-3 không cần Lôi Phù nếu stability cao; wave 4-5 đặt 2 Lôi Phù vào 2 cột trung tâm (xác suất bị chọn cao nhất); wave 6 biết cột giữa + rìa là cố định — đặt Lôi Phù trước; wave 7 dùng Thần Lôi Cổ Phù overlap + pure-heart-bead sẵn.

**Build không phù hợp**: build dựa vào **chain dài liên tục** bị gián đoạn bởi mỗi wave nghỉ 8 giây. Build "burst per wave" (chain ngắn, damage nhanh trong 5 giây trước sét) hiệu quả hơn.

## Phần thưởng

Drop theme: **Lôi Tinh Thạch** (nguyên liệu Khắc Phù tier cao) + Lôi Phù upgrade scroll. Linh đan trong lò nếu pass đủ 7 wave: nhận buff **Tiên Phẩm Điện Quang** — affix prefix Thiên Kiếp loại Lôi (+25% intensity sét-base item trong 1 pháp trận tiếp theo). Xác suất nhỏ: drop `ancient-thunder-charm` tier 1 (guaranteed nếu lần đầu clear T14 Thiên Kiếp).
