---
id: primordial-corruption-king
ten: Hỗn Nguyên Tâm Ma Vương
type: boss
bossType: multi-type
tier: T13
element: void
phaseCount: 4
roleAsNPC: lore-character — dialogue + 4th-wall manipulation during boss phases
---

# Hỗn Nguyên Tâm Ma Vương (`primordial-corruption-king`)

## Định danh

Climax của campaign Act 5 — thực thể được sinh ra từ Cửu Chuyển Kim Đan thất bại 800 năm trước khi Cao Tổ và 7 đan sư luyện đan tối thượng. Mang trong mình tiếng nói của tất cả những ai đã bỏ mình vào Lò rồi thất bại. Không phải ác nhân — là **phần ước nguyện không được thừa nhận**, bị nhốt trong Lò và trở nên cay đắng.

**Kiểm tra kép**: (1) player vượt được 4 phase cơ học khó nhất campaign, (2) player hiểu được rằng đánh bại Tâm Ma không phải tiêu diệt nó mà là **thừa nhận nó như một phần của bản thân**.

Hình dạng thay đổi theo phase: Phase 1 — hình bóng mờ nhiều mặt; Phase 2 — gương phản chiếu hình player (mirror mechanic); Phase 3 — dạng Cao Tổ trẻ tuổi; Phase 4 — hình thức nguyên thuỷ không xác định, vừa đẹp vừa khủng khiếp. Dialogue hiện trực tiếp lên board như text floating, không qua HUD.

## Bậc & Bối cảnh

- **Tier**: T13 — Act 5 campaign final boss, trước khi mở Atlas
- **Win-rate target**: ~45% (level 60-70, Lò 7-8 slot, sau khi hoàn thành Act 5)
- **Khi nào gặp**: Cuối Act 5, bắt buộc để unlock Sơn Hà Đồ (Atlas). Không cần Đan Pháp đặc biệt — Lò Truyền Kỳ tự kích hoạt pháp trận
- **Môi trường**: Hỗn Nguyên Hư Không — board trống hoàn toàn khi bắt đầu, linh khí xuất hiện dần theo phase. Không có element buff/debuff — Hỗn Nguyên là trước Ngũ Hành. Board có màu đen-trắng thay đổi theo dialogue

## Phase & Pattern

### Phase 1: Ta Là Phần Ngươi Bỏ Lại (100% → 75% HP)

**Dialogue mở màn** (floating text trên board):
> *"Ngươi đến đây để làm gì? Luyện đan? Hay để quên đi rằng mình đã từng muốn nhiều hơn?"*

**Cơ chế "Hư Ảo Ngũ Hành"**: board trống — không có linh khí. Boss bắn linh lực từ 4 góc board vào giữa. Linh lực của boss là **Hỗn Nguyên** (void) — không thuộc Ngũ Hành, không thể bị counter bằng element. Player phải **bắn linh lực chặn** linh lực boss trước khi chúng đến linh đan.

- Mỗi 8 giây: boss bắn 3 viên Hỗn Nguyên từ 3 góc khác nhau
- Viên bị chặn: không có stability damage
- Viên đến linh đan: stability **-10** per viên (§5: Tâm Ma -5 đến -25, phase 1 thấp)
- Telegraph: vệt đường đi của viên hiện trước 2 giây (boss nói trước khi tấn công)

**Stability damage (§5)**: **-10** per viên không bị chặn.

### Phase 2: Ngươi Và Ta Không Khác Nhau (75% → 50% HP)

**Dialogue chuyển phase**:
> *"Ngươi thấy ta là gì? Nhìn kỹ đi. Ta là cái ngươi không dám thừa nhận."*

**Cơ chế "Gương Phản Chiếu"**: boss biến thành gương lớn chiếm 1/3 board. Mọi linh lực player bắn ra đều bị phản chiếu lại (mirror) — linh lực của player trở thành vũ khí của boss.

Cách xử lý: bắn linh lực vào **rìa gương** (không phải mặt gương) → linh lực bounce vòng lại hit boss từ phía sau. Hoặc dùng linh khí đặc biệt (nếu có) để "vỡ gương" tạm thời.

- Linh lực player bị reflect hit linh đan: stability **-15** per hit (punishment dùng chính sức của mình)
- Boss tấn công từ rìa gương (mỗi 10 giây): 2 Hỗn Nguyên viên từ 2 rìa gương → linh đan: **-18** per viên

**Cơ chế "Ký Ức Đan Sư"**: mỗi 20 giây, một bóng ma đan sư từ quá khứ xuất hiện trên board — họ đứng im và cầu xin được thoát ra. Nếu player bắn linh lực vào họ: stability **-20** (penalty cho việc làm hại ký ức). Nếu player bắn linh khí **vòng qua** họ (không hit): +5% quality (reward cho việc tôn trọng).

**Stability damage (§5)**: Reflect: **-15**; Rìa Gương: **-18**; Ký Ức Đan Sư: **-20** nếu hit.

### Phase 3: Ta Là Cao Tổ Ngươi Không Biết (50% → 20% HP)

**Dialogue chuyển phase**:
> *"Ngươi nghĩ Cao Tổ là anh hùng? Ngươi đang luyện lại điều đã giết ta. Gọi đó là tu hành hay gọi đúng tên: tham vọng."*

**Hình dạng Cao Tổ**: boss biến thành hình ảnh Cao Tổ trẻ tuổi — người sáng lập Lò Cửu Đỉnh. Board bắt đầu có linh khí thật (Ngũ Hành bình thường) xuất hiện. Nhưng boss sử dụng chúng.

**Cơ chế "Cửu Chuyển Thất Bại"**: boss dùng linh khí trên board y hệt player — chain linh lực theo pattern đúng kỹ thuật. Boss có thể chain dài hơn player (AI không miss). Mỗi chain boss hoàn thành → stability **-12** per linh khí trong chain (§5: -12 mid-tier Tâm Ma campaign final).

**Cơ chế "Tâm Ma Lây Nhiễm"**: boss chạm vào 1 linh khí trên board → linh khí đó "ô nhiễm" Hỗn Nguyên — chuyển màu tối, linh lực qua đó gây stability **-8** lên linh đan của player thay vì gây damage boss.

- Mỗi 12 giây boss ô nhiễm 1 linh khí mới (tích luỹ — không tự reset)
- Player phải "thanh tẩy" linh khí bằng cách bắn linh lực Hoả/Kim/Mộc/Thuỷ vào đó (bất kỳ element)

**Stability damage (§5)**: Cửu Chuyển chain: **-12** per linh khí chain; Ô Nhiễm: **-8** per linh khí bị nhiễm trên đường chain.

### Phase 4: Ngươi Đã Hiểu Chưa (20% → 0% HP)

**Dialogue chuyển phase**:
> *"Nếu ngươi thực sự hiểu, ngươi sẽ không đánh ta. Ngươi sẽ thừa nhận ta."*
> *"Nhưng ngươi không thể làm vậy. Vì đó là cái Lò ngươi đang dùng để luyện đan cho CHÚNG TA thấy."*

**Hình thức Nguyên Thuỷ**: boss trở về dạng Hỗn Nguyên — đẹp và trống rỗng đồng thời. Board đầy đủ linh khí Ngũ Hành.

**Cơ chế "Hỗn Nguyên Hấp Thu"**: boss không còn tấn công player — thay vào đó, nó **hút dần linh đan**. Chất lượng linh đan giảm -1% mỗi 3 giây (tương đương -20% quality trong 1 phút nếu không phản ứng). Player phải DPS boss nhanh hơn tốc độ hút.

**Công kích "Cửu Đỉnh Hồi Ký"** (mỗi 15 giây): boss triệu hồi hình ảnh 8 Đỉnh vỡ — 8 hình bóng bắn tia Hỗn Nguyên đồng thời vào linh đan. Không thể chặn hết (quá nhiều góc). Player chỉ có thể giảm thiệt hại bằng cách dùng linh khí làm "盾" — đặt linh khí trên đường tia để absorb.
- Tia không bị absorb: stability **-25** per tia (§5: -25 max T13 range)
- 8 tia đến hết: **-200** — bắt buộc absorb ít nhất 5/8

**Cơ chế "Thừa Nhận Tâm Ma"**: khi boss HP xuống 5%, xuất hiện lựa chọn đặc biệt. Board pause 3 giây. Hai hành động khả dụng:
1. **Tiếp tục đánh**: boss chết, linh đan nhận buff combat thông thường
2. **Dừng bắn 3 giây** (không làm gì): boss "hoà giải" — tan ra, linh đan nhận buff đặc biệt **"Hỗn Nguyên Tịch Diệt"** (quality +50%, affix prefix rất hiếm chỉ có từ mechanic này)

**Stability damage (§5)**: Hỗn Nguyên Hấp Thu: -1% quality/3 giây (không phải stability trực tiếp — quality drain); Cửu Đỉnh Hồi Ký: **-25** per tia không bị absorb; max per đợt **-200** (phải absorb ≥ 5/8).

## Cơ chế đặc trưng

**Dialogue-Driven Boss**: toàn bộ boss fight được kể bằng floating text trực tiếp trên board — không ngắt game, không cutscene. Player đọc lore trong khi đánh. Dialogue thay đổi nếu player đang dùng element cụ thể (Hoả: *"Ngươi dùng lửa? Đó chính là lửa đã thiêu Cao Tổ."*)

**4th-Wall Mechanic** (phase 4): boss biết player đang "chơi game" — dialogue nhắc đến Lò như công cụ, không phải ước nguyện. Không phá vỡ immersion mà tăng depth lore.

**Thừa Nhận Tâm Ma**: mechanic độc nhất — player tự chọn kết cục. "Hoà giải" reward tốt hơn "tiêu diệt" nhưng đòi hỏi bản lĩnh (không bắn trong 3 giây khi boss còn 5% HP và đang drain quality).

## Counter-play

**Element**: không có element tối ưu — Hỗn Nguyên là void, không thuộc Ngũ Hành. Build bất kỳ hoạt động như nhau miễn là stability sustain đủ cao. Build Tâm Ma counter (passive tree Tịnh Tâm) giúp kháng drain phase 4.

**Cổ vật hữu ích**:
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): **bắt buộc** — dispel Tâm Ma Ô Nhiễm trên linh khí (phase 3), phục hồi 20% stability sau Cửu Đỉnh Hồi Ký (phase 4). Core item cho mọi Tâm Ma boss (§5)
- Cổ vật quality sustain (phụ kiện giảm quality drain rate): counter mechanic Hỗn Nguyên Hấp Thu phase 4

**Chiến thuật**: phase 1 — học rhythm chặn viên Hỗn Nguyên. Phase 2 — bắn vào rìa gương không phải mặt gương; không hit Ký Ức Đan Sư. Phase 3 — ưu tiên thanh tẩy linh khí ô nhiễm mỗi 12 giây; không để tích quá 3 linh khí nhiễm. Phase 4 — DPS nhanh, absorb Cửu Đỉnh (dùng pure-heart-bead sau mỗi đợt), nếu muốn Hỗn Nguyên Tịch Diệt buff thì dừng bắn khi boss xuống 5%.

## Phần thưởng

Drop theme: **Hỗn Nguyên Tinh Hoa** (nguyên liệu tối thượng craft Sơn Hà Đồ Lệnh — Map Device) + unlock **Sơn Hà Đồ** (Atlas). Affix đặc biệt nếu hoà giải: prefix "Hỗn Nguyên Tịch Diệt" (linh đan +50% quality stack, affix độc quyền chỉ từ mechanic này). Lần đầu clear: cutscene ngắn Cao Tổ thừa nhận thất bại 800 năm, trao Sơn Hà Đồ Lệnh cho player.
