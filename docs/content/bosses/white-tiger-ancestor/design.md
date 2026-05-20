---
id: white-tiger-ancestor
ten: Bạch Hổ Linh Tổ
type: boss
bossType: atlas-mega
tier: T14-T15
element: metal
phaseCount: 3
---

# Bạch Hổ Linh Tổ (`white-tiger-ancestor`)

## Định danh

Một trong Tứ Tượng Linh Tổ — góc Tây của Sơn Hà Đồ. Bạch Hổ Linh Tổ là thể hiện của **Kim thuần khiết — sắc bén, lạnh lùng, không nhân nhượng**. Nó không tấn công bằng nhiệt hay ma lực; nó tấn công bằng **hàng ngàn lưỡi kiếm kim loại** rơi xuống như mưa, mỗi lưỡi nhắm chính xác, không bỏ sót.

**Kiểm tra**: player có thể sống sót trong môi trường "tower defense" — kiếm rơi liên tục theo pattern dự đoán được nhưng số lượng áp đảo? Build nào có enough chain speed để xử lý đòn liên tục?

Hình dạng: hổ trắng khổng lồ, lông là kim loại sáng, móng vuốt là thanh kiếm. Khi đi lại trên board, để lại vệt kim loại sáng. Trên lưng nó là hàng trăm thanh kiếm nhỏ dựng đứng — khi tấn công, kiếm bắn ra theo pattern.

## Bậc & Bối cảnh

- **Tier**: T14-T15 — Atlas corner Tây, mở sau khi hoàn thành Atlas tier trung tâm T13
- **Win-rate target**: ~45% (level 90+, cần build có chain speed cao hoặc Hoả burst để xử lý Kim lực liên tục)
- **Khi nào gặp**: Endgame Atlas — cần Đan Pháp Kim-tier cao + Bạch Hổ Nguyên Liệu (vuốt hổ, kim lưỡi tinh). Bạch Hổ counter đặc biệt build Kim mono (tương khắc Hoả — chính boss là Kim nên player Kim bị reduced damage)
- **Môi trường**: Phương Tây Kim Ngục — board nền phủ ánh bạc. Linh khí Kim tự buff +15% charge. Linh khí Hoả bị debuff -10% velocity (Kim khắc Hoả — lửa bị dập bởi lưỡi thép lạnh). Linh khí Mộc hoạt động bình thường — Mộc chặt Kim

## Phase & Pattern

### Phase 1: Trận Kiếm Vũ (100% → 60% HP)

**Kiếm Mưa Thường Xuyên**: nền mechanic của Bạch Hổ — mỗi 5 giây, 3 kiếm nhỏ rơi xuống board ở 3 vị trí ngẫu nhiên (không nhắm linh đan). Kiếm cắm xuống board tồn tại 12 giây như **chướng ngại vật Kim** — linh lực đụng kiếm bị deflect 45°.

Không gây stability damage trực tiếp — chỉ phá chain path. Nhưng nếu chain bị deflect hit linh đan khi không phải element phù hợp: **-8** stability.

**Công kích "Bạch Hổ Liên Trảo"** (mỗi 10 giây): boss vươn 3 móng vuốt — 3 tia kiếm bắn thẳng hướng linh đan từ 3 góc khác nhau. Tốc độ vừa phải, có thể thấy hướng.
- Hit linh đan Hoả (Kim khắc Hoả): stability **-18** per tia
- Hit linh đan Mộc (Kim khắc Mộc): stability **-18** per tia
- Hit linh đan Kim (đồng chất): stability **-6** per tia (giảm mạnh)
- Telegraph: móng vuốt phát sáng 1.5 giây, hướng tia nhìn thấy rõ

**Stability damage (§5)**: Liên Trảo: **-18** (tương khắc) / **-6** (Kim-on-Kim); Kiếm Vũ deflect: **-8** per unintended hit.

### Phase 2: Ngàn Kiếm Triều (60% → 25% HP)

**Kiếm Mưa Tăng Tốc**: từ 3 kiếm/5 giây tăng lên **5 kiếm/3 giây**. Board nhanh chóng bị chướng ngại vật phủ kín. Chain path ngắn dần — build cần chain dài bị nghẹt.

**Công kích "Kiếm Trận Toàn Khai"** (mỗi 8 giây): boss triệu hồi 8 kiếm lớn (gấp đôi kiếm nhỏ) xếp thành hàng ngang — sau 3 giây cùng lao về phía linh đan đồng thời.
- Player có 3 giây để chain linh lực Kim vào kiếm để "khoá" chúng (Kim tương sinh Kim — chain Kim hit kiếm = kiếm tự huỷ)
- Kiếm không bị khoá khi đến tâm: stability **-15** per kiếm (§5: -15 T14-15 range)
- 8 kiếm đến hết: **-120** — bắt buộc phải block ít nhất 5/8

**Cơ chế "Kiếm Cắm Tích Điện"**: kiếm nhỏ cắm board sau 8 giây tích đủ Kim charge → tự phát nổ, bắn 4 mảnh Kim ra 4 hướng. Mảnh Kim hit linh đan: **-10** stability. Nếu board có 5+ kiếm cùng phát nổ: **-50** burst.

**Stability damage (§5)**: Kiếm Trận: **-15** per kiếm đến tâm; Tích Điện phát nổ: **-10** per mảnh. T14-15 range đúng.

### Phase 3: Bạch Hổ Hóa Kiếm (25% → 0% HP)

**Boss Biến Thành Kiếm**: Bạch Hổ tan ra thành **1 thanh đại kiếm khổng lồ** nằm giữa board, rotating chậm. Mọi kiếm nhỏ phase 1-2 còn trên board được hút về và hợp nhất vào đại kiếm — đại kiếm lớn dần theo số kiếm hấp thu (tối đa 300% size).

**Không còn HP bar thông thường**: đại kiếm có "Độ Bền Kiếm" = 100. Player phải giảm Độ Bền về 0 bằng cách chain linh lực **Hoả** vào kiếm (Hoả nung Kim). Linh lực Mộc cũng gây damage nhưng 50% hiệu quả.

**Công kích "Đại Kiếm Xoay"** (liên tục): đại kiếm rotating sweep 360° mỗi 6 giây. Linh khí trên đường quét bị đẩy sang cột khác. Linh đan bị quét: stability **-25** (§5: -25 max range T14-15).

**Công kích "Ngàn Kiếm Quy Tụ"** (mỗi 15 giây): tất cả kiếm nhỏ đang cắm trên board đồng loạt bay về đại kiếm — trong quá trình bay, chúng quét ngang qua linh đan. Stability **-12** per kiếm bay qua (nếu 6 kiếm đang cắm board: **-72** potential).

**Stability damage (§5)**:
- Đại Kiếm Xoay sweep: **-25**
- Ngàn Kiếm Quy Tụ: **-12** per kiếm (nhiều nguồn, từng nguồn ≤ 25)
- Phase 3 worst case theo chu kỳ: **-97** per 15 giây nếu không tránh

## Cơ chế đặc trưng

**Tower Defense Kim**: Bạch Hổ là boss duy nhất biến board thành tower defense — kiếm cắm là "tower" chặn path, phát nổ nếu không xử lý kịp. Player phải vừa chain damage boss vừa quản lý "clear kiếm" trước khi tích đủ charge.

**Boss Biến Thành Môi Trường**: phase 3 Bạch Hổ không còn là "enemy" mà trở thành **board object** — mechanic độc nhất trong Tứ Tượng tier. Damage nguồn (boss HP) chuyển thành Độ Bền Kiếm object. Player phải switch tư duy từ "đánh boss" sang "nung chảy kiếm".

**Kim-Khoá Kiếm Trận**: mechanic chain Kim để khoá kiếm bay — punish build không có Kim trong inventory bất kể element chính, reward build hybrid Kim + element khác.

## Counter-play

**Element**: **Hoả** (khắc Kim) — damage boss bình thường phase 1-2 và là element duy nhất hiệu quả phase 3 nung đại kiếm. Build Hoả burst optimal.

**Cổ vật hữu ích**:
- `sun-wukong-staff` ("Trượng Tôn Ngộ Không"): ×3 linh lực per hit — phá kiếm nhỏ cắm board nhanh hơn, khoá Kiếm Trận phase 2 hiệu quả (3 viên Kim lan ra từ 1 hit), nung đại kiếm phase 3 (3 viên Hoả burst)
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): dùng sau Ngàn Kiếm Quy Tụ (-72 potential). Dispel debuff deflect trên linh khí bị kiếm nhỏ cắm qua
- Cổ vật tăng chain speed Hoả (velocity + charge rate): rút ngắn thời gian nung đại kiếm phase 3

**Chiến thuật**: phase 1 — clear kiếm nhỏ định kỳ (mỗi 6-7 giây chain qua board xóa kiếm tích điện). Phase 2 — ưu tiên khoá Kiếm Trận (chain Kim vào 5/8 kiếm bay) trước, sau đó tiếp tục damage boss. Phase 3 — switch sang Hoả chain ngay khi boss biến thành kiếm, không dùng Mộc (50% hiệu quả), sun-wukong-staff × 3 Hoả burst rút ngắn phase 3 đáng kể.

## Phần thưởng

Drop theme: **Bạch Hổ Kim Lưỡi** (kim loại huyền thoại — nguyên liệu craft vũ khí Kim endgame) + Kim Atlas Fragment (mảnh unlock T15-T16 vùng Tây). Drop Cổ vật: ưu tiên Kim-element hoặc chain speed. Xác suất nhỏ: Atlas node unlock "Tây Phương Kim Thần" — passive tree Atlas node buff Kim toàn Sơn Hà Đồ + khi board có ≥ 3 kiếm cắm (map mod), Kim damage +15%.
