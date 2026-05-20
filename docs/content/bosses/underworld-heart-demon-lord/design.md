---
id: underworld-heart-demon-lord
ten: Diêm Phủ Tâm Ma Vương
type: boss
bossType: heart-demon
tier: T13
element: void
phaseCount: 2
---

# Diêm Phủ Tâm Ma Vương (`underworld-heart-demon-lord`)

## Định danh

Chúa tể vùng Diêm Phủ — nơi Đan Pháp Diêm Phủ dẫn tới. Không phải tâm ma của riêng player mà là **tâm ma tập thể** của tất cả đan sư đã chết thất bại trong 800 năm. Nó không cần Ngũ Hành vì nó **vượt ngoài Ngũ Hành** — công kích thuần Âm, ăn mòn ý chí thay vì thể xác.

**Kiểm tra**: player có thể duy trì damage khi **HUD bị che** và toàn bộ chỉ số hiển thị bị mờ/tắt? Đây là boss duy nhất trong game che UI để force player đọc board trực tiếp.

Hình dạng: bóng đen khổng lồ hình nhân, không có khuôn mặt, chỉ có hai mắt đỏ sâu thẳm. Xung quanh nó là những bóng nhỏ hơn — hồn ma đan sư cũ — bơi lơ lửng và thỉnh thoảng lao vào linh đan. Board chìm trong màu xám tím, không có màu ngũ hành rõ ràng.

## Bậc & Bối cảnh

- **Tier**: T13 — Diêm Phủ region boss, đòi hỏi Đan Pháp Diêm Phủ để vào (decision #25)
- **Win-rate target**: ~40% (level 75+, cần build có stability sustain cao vì không thấy rõ chỉ số)
- **Khi nào gặp**: Mid-endgame Atlas, sau khi unlock Diêm Phủ region. Cần Đan Pháp Diêm Phủ + ít nhất 2 Nguyên Liệu Âm Khí
- **Môi trường**: Diêm Phủ Địa Ngục — board phủ màu xám, **Phase 1 toàn bộ HUD bị mờ** (stability bar, quality bar, timer ẩn). Chỉ board thực tế còn hiển thị rõ. Không có Ngũ Hành buff/debuff — Diêm Phủ là void zone

## Phase & Pattern

### Phase 1: Màn Đêm Che Phủ (100% → 50% HP)

**HUD Blackout**: ngay khi bắt đầu phase 1, toàn bộ HUD phía trên board bị phủ màn sương tối. Player **không thấy**: stability %, quality %, timer còn lại, Lò HP. Chỉ thấy board và linh khí.

Cách đọc thông tin gián tiếp: linh đan sáng dần = quality tăng; linh đan rung nhẹ khi stability < 30%; màu viền board từ trắng → vàng → đỏ tương ứng stability 100-50-0%.

**Công kích "Bóng Ma Tràn Vào"** (mỗi 8 giây): 3 bóng nhỏ (hồn ma đan sư) lao vào 3 linh khí ngẫu nhiên. Linh khí bị ám: **chuyển màu xám**, công kích tiếp theo qua linh khí đó bị reflect — linh lực đổi hướng ngẫu nhiên thay vì đi theo chain.
- Stability damage nếu linh lực reflect hit linh đan trực tiếp: **-8** (§5: Tâm Ma tier thấp -5 đến -25)
- Telegraph: bóng ma hiện hình 2 giây trước khi đáp vào linh khí — có thể bắn linh lực vào bóng ma để tiêu diệt trước

**Công kích "Hút Hồn"** (mỗi 15 giây): boss mở miệng (2 mắt đỏ mở rộng) — hút 1 linh khí ngẫu nhiên khỏi board hoàn toàn trong 12 giây. Chain path bị gián đoạn.
- Stability damage: **-5** khi linh khí bị hút (áp lực chain break, không phải direct hit)

**Stability damage (§5)**: Bóng Ma reflect: **-8** per hit; Hút Hồn: **-5** break chain.

### Phase 2: Diêm Vương Hiển Thân (50% → 0% HP)

**HUD Restore nhưng Giả Mạo**: màn sương tan — HUD hiện lại. Nhưng stability và quality bar **hiển thị sai lệch ±15%** (ngẫu nhiên cao hơn hoặc thấp hơn thực tế). Player biết HUD đang nói dối nhưng không biết lệch bao nhiêu.

**Công kích "Tâm Ma Ảo Ảnh"** (mỗi 6 giây): boss tạo ra 1 linh đan giả trên board — trông hệt linh đan thật nhưng màu hơi xám. Linh lực đánh vào linh đan giả: **-12** stability (§5: -12 Tâm Ma mid-tier). Linh đan thật không bị ảnh hưởng.
- Cách phân biệt: linh đan thật có viền sáng pulse theo nhịp; linh đan giả pulse ngẫu nhiên không đều

**Công kích "Triệu Hồi Bóng Tối"** (mỗi 10 giây): boss triệu hồi 5 bóng ma nhỏ đồng thời (tăng từ 3 phase 1). Mỗi bóng ma không chỉ ám linh khí mà còn **sinh ra linh lực Âm** bắn về phía linh đan nếu không bị tiêu diệt trong 3 giây.
- Linh lực Âm hit linh đan: **-18** stability (§5: -18 Tâm Ma tier này)
- 5 bóng ma đều bắn: **-90** tổng — không thể hứng hết, phải tiêu diệt ít nhất 3/5

**Stability damage (§5)**:
- Tâm Ma Ảo Ảnh: **-12** per hit
- Triệu Hồi Bóng Tối hit: **-18** per bóng ma sống sót (worst case -90, thực tế -36 nếu tiêu 3/5)

## Cơ chế đặc trưng

**HUD Blackout — Đọc Board Trực Tiếp**: mechanic độc nhất trong toàn game. Phase 1 buộc player phát triển khả năng đọc game state từ board trực tiếp (viền board đổi màu, linh đan độ sáng) thay vì HUD số. Kỹ năng này không tái xuất ở boss khác nhưng làm player hiểu game sâu hơn.

**HUD Giả Mạo**: phase 2 còn tàn bạo hơn — HUD có nhưng nói dối. Player phải tin vào đọc board phase 1 đã học, không tin vào con số phase 2. Đây là **Tâm Ma thực sự**: thứ nói dối không phải enemy mà là chính thông tin player quen dựa vào.

**Linh Đan Giả**: mechanic duy nhất trong game tạo ra false target. Reward player có khả năng quan sát tinh tế (viền pulse), punish player bắn bừa.

## Counter-play

**Cổ vật hữu ích**:
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): **cực kỳ quan trọng** ở Diêm Phủ — 20% stability restore khi bị Tâm Ma hit mạnh (§5). Dispel debuff "ám" trên linh khí (xóa màu xám reflect). Nên dùng ngay sau đợt Triệu Hồi Bóng Tối
- Build stability regeneration (passive tree **Tịnh Tâm** branch): tự hồi stability mỗi 10 giây — quan trọng vì không thấy số nên không biết khi nào cần dùng item

**Chiến thuật**: phase 1 — học đọc viền board (trắng/vàng/đỏ = mốc stability). Ưu tiên tiêu diệt bóng ma trước khi chúng ám linh khí. Phase 2 — bỏ qua HUD số, tiếp tục đọc viền board; bắn cẩn thận nhắm linh đan thật (pulse đều), tiêu diệt ít nhất 3/5 bóng ma mỗi đợt Triệu Hồi.

**Build không phù hợp**: build "glass cannon" stability thấp hoặc build phụ thuộc HUD timer để tính chain sẽ bị mất phương hướng. Build stability sustain + burst ngắn optimal.

## Phần thưởng

Drop theme: **Âm Hồn Tinh Thạch** (nguyên liệu craft item Âm-type) + 1 random Tâm Ma mod xoá (có thể xoá 1 Tâm Ma affix tiêu cực khỏi linh đan không tốn currency). Drop Cổ vật: ưu tiên `pure-heart-bead` upgrade hoặc stability sustain item. Xác suất nhỏ: **Diêm Phủ Atlas node unlock** "Địa Phủ Chi Mắt" — passive tăng ability đọc board (viền màu rõ hơn 20% toàn game sau đó).
