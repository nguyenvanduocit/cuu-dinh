---
id: heart-demon-dai-sat
ten: Tâm Ma Đại Sát
type: boss
bossType: heart-demon
tier: T10
element: void
phaseCount: 3
---

# Tâm Ma Đại Sát (`heart-demon-dai-sat`)

## Định danh

Tâm Ma Đại Sát là bóng tối của chính người tu luyện — hiện thân mọi con đường **họ đã không chọn**. Khi player chọn Đạo Phái ở level 30, Đại Sát nhận diện lựa chọn đó và **tấn công bằng triết học đối lập**:

- Chọn Linh Sơn (âm, hồi vang) → Đại Sát tấn công bằng Dương Kiếm thẳng, áp lực trực tiếp
- Chọn Tử Vi (crit, bùng nổ) → Đại Sát tấn công bằng phòng thủ bền, không crit được
- Chọn Địa Tạng (stability, sinh tồn) → Đại Sát tấn công bằng burst damage liên tục
- Chọn Thiên Quan (chain, amplify) → Đại Sát chặt chain, cắt đứt linh lực giữa đường
- Chọn Kim Cương (brute force, mono) → Đại Sát immunize element player đang dùng

Boss **không có pattern cố định** — mỗi Đạo Phái gặp một Đại Sát khác nhau về behaviour. Cùng một entity, khác nhau về biểu hiện.

## Bậc & Bối cảnh

- **Tier**: T10 — Act 4, cửa ải Đăng Tiên Đài trước khi nhận Ascendancy chính thức
- **Win-rate target**: ~55% (level 60-70, Ascendancy đã chọn nhưng chưa tối ưu, Lò 7-8 slot cơ bản)
- **Khi nào gặp**: Đây là boss Ascendancy Quest — phải thắng mới nhận node Đạo Phái đầu tiên
- **Môi trường**: Đăng Tiên Đài — board "gương": layout board đối xứng, linh khí player ở nửa trái, "bóng tối" linh khí ở nửa phải phản chiếu và counters

## Phase & Pattern

> Phase 1-3 tương ứng 3 giai đoạn "thử thách" — mỗi phase boss cường độ thêm một lớp phản công.

### Phase 1: Thẩm Vấn Căn Cơ (100% → 65% HP)

Boss đứng yên, **đọc linh lực player** 10 giây đầu (không tấn công). Sau đó bắt đầu phase chính.

**Phản Ánh Đạo Phái** (mỗi 10 giây): dùng cơ chế đối lập với Đạo Phái player (xem §Định danh). Stability damage mỗi hit: **-10**. Telegraph chung cho mọi variant: boss phát sáng theo màu Đạo Phái player đã chọn — nhắc nhở "ta biết ngươi là ai".

**Thí dụ Linh Sơn variant**: boss bắn 3 viên linh lực thẳng, không bounce, tốc độ cao — không có "hồi vang" để player tận dụng, chỉ là áp lực thẳng. Stability **-10** mỗi viên khắc element.

### Phase 2: Bóng Tối Hiện Hình (65% → 30% HP)

Boss **sao chép layout Lò của player** — biết player đang dùng linh khí gì và đặt linh khí đối lập ở nửa phải board. Linh lực boss phóng từ linh khí "bóng tối" đó, tạo ra chain ngược chiều về phía linh đan.

**Cưỡng Chế Phản Nguyên**: mỗi 12 giây boss kích hoạt tất cả linh khí bóng tối cùng lúc — bắn một làn sóng linh lực hỗn tạp. Nếu player chưa "phá vỡ" được một linh khí bóng tối (bằng cách bắn linh lực khắc element vào nó), làn sóng đó gây stability **-15** cho mỗi linh khí bóng tối còn sống. Cách phá: bắn linh lực khắc element linh khí bóng đó trước 12 giây.

**Stability damage (§5)**: -15 per linh khí bóng tối không bị phá — có thể lên đến -15×4 = -60 nếu không xử lý, nhưng trung bình player phá được 2-3/4 → **-15 đến -30** thực tế.

### Phase 3: Đại Sát Giải Phóng (30% → 0% HP)

Boss bỏ cơ chế đối lập, trở về **5 nguyên tố cùng lúc** — không còn "đọc Đạo Phái", thay vào đó dùng brute force Ngũ Hành như Dị Tượng Ngũ Hành nhưng nhanh hơn và damage cao hơn.

**Cú Sát Cuối** (khi HP < 10%): boss kết hợp element tất cả linh khí bóng tối còn lại thành 1 cú duy nhất phóng thẳng — stability **-25** nếu không chặn được. Chặn bằng cách bắn linh lực Vô Cực vào đường bay (triệt tiêu) hoặc dùng cổ vật phản.

**Stability damage tổng kết (§5)**:
- Phase 1: **-10** per hit
- Phase 2 Cưỡng Chế Phản Nguyên: **-15** per linh khí bóng sống
- Phase 3 Sát Cuối: **-25** (nằm trong range 5-25 §5)

## Cơ chế đặc trưng

**Sao Chép Lò (Mirror Build)**: lần đầu tiên trong game player thấy "boss biết build của mình". Không có fixed counter — player phải hiểu **điểm yếu của chính mình** và phá vỡ nó trước khi boss khai thác. Boss này không có FAQ universal; mỗi build path có guide riêng.

Đây là thiết kế ý định: Ascendancy Quest không phải "học pattern boss" mà là "hiểu chính mình".

## Counter-play

**Không có element counter cố định** — phụ thuộc Đạo Phái. Nguyên tắc chung:

- Phá linh khí bóng tối ưu tiên nhất: cái gây element khắc linh đan của mình
- Phase 2: luôn có chain Vô Cực sẵn để "xả an toàn" khi không chắc element nào phản lại

**Cổ vật hữu ích**:
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): 20% stability restore — dùng sau Cưỡng Chế Phản Nguyên nếu bị -15×2 (§5)
- Cổ vật buff void/Vô Cực: an toàn nhất cho phase chuyển tiếp khi không chắc element boss sắp dùng
- Affix "Kiên Cố" (stability max +20): giảm rủi ro Cú Sát Cuối phase 3

**Chiến thuật**: phase 1 — chơi như bình thường, đọc variant Đạo Phái mình để biết cơ chế phase 2 sẽ là gì. Phase 2 — ưu tiên phá linh khí bóng tối, không cố damage boss. Phase 3 — bỏ chain phức tạp, hit đơn giản an toàn về đích.

## Phần thưởng

Drop theme: **Đan Pháp Thăng Cấp** (mở khóa biến thể Đan Pháp thứ 3 theo Đạo Phái đã chọn) + nguyên liệu nâng Lò slot 8. Xác suất cao hơn bình thường drop Cổ vật phù hợp Đạo Phái — narrative reward. Drop đặc biệt: **Lệnh Bài Đăng Tiên** (quest item mở Ascendancy node đầu tiên).
