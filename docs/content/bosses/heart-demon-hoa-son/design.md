---
id: heart-demon-hoa-son
ten: Tâm Ma Hoả Sơn
type: boss
bossType: anomaly
tier: T8
element: fire
phaseCount: 2
---

# Tâm Ma Hoả Sơn (`heart-demon-hoa-son`)

## Định danh

Tâm ma sinh ra từ Lò Luyện Đan bị vỡ — nhiệt độ cực hạn tích tụ thành ý thức cuồng nộ. Tâm Ma Hoả Sơn không tấn công theo lý trí; nó **đốt liên tục, không thương tiếc**, rồi mỗi ván mang một lời hứa: nếu stability về 0 trước khi linh đan chín, Lò sẽ không còn gì để luyện nữa.

**Kiểm tra**: player biết **bảo vệ stability dưới áp lực liên tục** không? Hoả công kích liên tục — không phải đột biến khó đọc mà là áp lực bào mòn.

Hình dạng: nhân vật lửa khổng lồ, tóc là lửa, chân bước để lại vết than. Ngồi trên núi lửa phun thấp, board có dung nham tràn từ rìa vào giữa chậm chậm.

## Bậc & Bối cảnh

- **Tier**: T8 — Act 3, quest sửa Lò sau khi Lò bị vỡ một phần do Tâm Ma xâm nhập
- **Win-rate target**: ~55% (player level 40-50, Lò 6-7 slot, cần stability management chủ động)
- **Khi nào gặp**: Sau khi mở Đan Pháp thứ 2 (Tử Sinh hoặc Hỗn Nguyên). Player đã quen chain nhưng chưa bị "bào mòn liên tục"
- **Môi trường**: Núi lửa — board nền phát nhiệt, linh khí loại Kim/Thuỷ bị giảm hiệu quả 20% (Kim nóng chảy, Thuỷ bay hơi). Linh khí Hoả trên board được buff +15% intensity

## Phase & Pattern

### Phase 1: Nham Thạch Triều Dâng (100% → 55% HP)

**Nền Dung Nham**: mỗi 15 giây, dung nham tràn thêm 1 ô từ rìa board vào giữa. Linh khí nằm trong vùng dung nham nhận debuff "Thiêu Đốt": mỗi 3 giây tick stability **-2**. Không gây damage lớn một phát nhưng tích luỹ nhanh nếu không xử lý.

**Công kích "Liệt Hoả"** (mỗi 10 giây):
- Phun **4 viên linh lực Hoả** theo hình quạt hướng về linh đan
- Linh đan Kim (Hoả khắc Kim): stability **-12** per hit
- Linh đan Mộc (Hoả sinh Mộc): quality +nhỏ, boss tự phục hồi 3% HP (punish Mộc target khi boss còn đủ khoẻ)
- Telegraph: boss hít hơi — animation phình bụng 1.5 giây trước khi phun

**Stability damage (§5)**: Liệt Hoả hit tương khắc Kim: **-12**; Nền Dung Nham tick: -2/3 giây (tức -10/15 giây chu kỳ dung nham).

### Phase 2: Thiêu Sơn Đại폭Phát (55% → 0% HP)

**Sụp Lò** trigger: dung nham tăng tốc — mỗi 8 giây tràn thêm 1 ô (từ 15 giây → 8 giây). Board thu nhỏ hiệu dụng.

**Công kích "Hồi Lửa"** (mỗi 7 giây): boss hút lại tất cả linh lực Hoả đang trên board (kể cả linh lực player bắn ra) → nạp thành 1 cú bắn lớn duy nhất về phía linh đan. Nếu hút được ≥ 3 viên: stability **-20** (cộng dồn, 1 cú). Nếu < 3 viên: chỉ **-12**.

Telegraph: boss phát sáng đỏ rực 2 giây khi đang hút — đây là thời điểm player phải "bắn hết Hoả ra khỏi board" hoặc chuyển sang chain Thuỷ/Kim.

**Stability damage tổng kết (§5)**:
- Liệt Hoả: **-12** per hit (T8 range đúng: 5-25)
- Hồi Lửa lớn: **-20** cộng dồn (nằm trong range)
- Dung Nham tick: nhỏ nhưng liên tục — áp lực thực

## Cơ chế đặc trưng

**Hút-Bắn (Hồi Lửa)**: cơ chế duy nhất trong campaign làm player phải **chủ động xả linh lực khỏi board** thay vì tích trữ chain. Khi thấy boss đang hút, bắn linh lực Hoả vào linh khí Thuỷ để "tiêu huỷ" chúng trước khi boss hút được. Cơ chế này tái xuất ở boss T14+ với quy mô lớn hơn.

**Board Thu Hẹp**: dung nham làm chain path ngắn dần — build cần chain dài (cần nhiều linh khí hop) bị áp lực nghiêm trọng hơn build "hit trực tiếp".

## Counter-play

**Element**: Linh lực **Thuỷ** (khắc Hoả) vừa damage boss vừa "dập" dung nham làm chậm tốc độ tràn (mechanic nhỏ: Thuỷ hit vào ô dung nham → đóng băng 5 giây). Linh lực **Thổ** (tương sinh Hoả) — tránh nếu linh đan không phải Thổ.

**Cổ vật hữu ích**:
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): 20% stability restore khi Hồi Lửa lớn hit — cần dùng chủ động sau cú -20 (§5)
- Cổ vật buff linh khí Thuỷ implicit heal (§5: Mộc implicit +2%/hit, Thuỷ tương tự) — duy trì stability giữa các đợt dung nham
- Keystone **Trọng Sơn** (board mod immunity): không liên quan durability ở T8, nhưng nếu player có cổ vật giảm tick damage — tốt

**Chiến thuật**: phase 1 — kiểm soát vùng dung nham bằng chain Thuỷ. Phase 2 — đọc animation boss phình sáng đỏ, xả hết Hoả trên board ngay lập tức, sau đó spam Thuỷ.

## Phần thưởng

Drop theme: **Hoả Tinh Thạch cấp cao**, nguyên liệu Lò (Đế Lò, Thân Lò repair components). Xác suất thấp: affix prefix "Liệt Hoả" (intensity Hoả +20%). Drop Cổ vật: ưu tiên item Thuỷ hoặc stability sustain — narrative reward cho việc vượt áp lực.
