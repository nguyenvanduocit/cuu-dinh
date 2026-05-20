---
id: black-tortoise-ancestor
ten: Hắc Quy Linh Tổ
type: boss
bossType: atlas-mega
tier: T14-T15
element: water
phaseCount: 3
---

# Hắc Quy Linh Tổ (`black-tortoise-ancestor`)

## Định danh

Một trong Tứ Tượng Linh Tổ — góc Bắc của Sơn Hà Đồ. Hắc Quy là **thực thể cổ đại của sự bất động** — mai rùa chứa đựng vũ trụ nước đóng băng, thủy triều ngàn năm. Không tấn công bằng tốc độ; tấn công bằng **khối lượng và trọng lực nước** cho đến khi mọi thứ bị nhấn chìm.

**Kiểm tra**: player có thể **duy trì chain hiệu quả khi physics board thay đổi** không? Thuỷ làm chậm linh lực, trap bằng vũng nước, đảo ngược velocity. Build phụ thuộc vào tốc độ và chain dài bị punish nặng.

Hình dạng: rùa khổng lồ đen như huyền thạch, mai có văn triện cổ phát sáng xanh. Cổ vươn dài như rắn. Board ngập trong nước nông — mặt nước gợn khi linh lực va chạm.

## Bậc & Bối cảnh

- **Tier**: T14-T15 — Atlas corner Bắc, mở song song với Thanh Long (không cần thắng Thanh Long trước)
- **Win-rate target**: ~45% (level 90+, full Lò 8 slot Thần tier, cần affix giảm slowdown hoặc Thổ element)
- **Khi nào gặp**: Endgame Atlas — cần Đan Pháp Thuỷ-tier cao + Thuỷ Nguyên Liệu. Counter đặc biệt build Thổ (Thổ khắc Thuỷ)
- **Môi trường**: Huyền Minh Trạch — nền board là nước nông. Linh lực di chuyển chậm hơn 15% (velocity giảm do ma sát nước). Linh khí chìm nửa xuống nước — vẫn hoạt động nhưng bounce angle bị lệch 5-10° ngẫu nhiên

## Phase & Pattern

### Phase 1: Trọng Thuỷ Tích Tụ (100% → 65% HP)

**Nước Dâng Từ Từ** (mỗi 20 giây): mực nước tăng một bậc — velocity penalty tăng thêm 5% (stacking: bắt đầu -15%, sau 3 lần = -30%). Linh lực chậm hơn → intensity giảm → damage giảm. Player phải compensate bằng charge count hoặc build velocity cao.

**Công kích "Huyền Lãng"** (mỗi 12 giây): boss vươn cổ, phóng 1 sóng Thuỷ lớn dọc board theo chiều ngang. Linh lực trên đường sóng bị "cuốn" — đổi hướng 90° theo chiều sóng thay vì hướng ban đầu. Stability damage nếu sóng cuốn linh lực vào linh đan theo góc khắc: **-15**.

**Vũng Đóng Băng** (random trigger, 25% mỗi lần Huyền Lãng): 1 vũng nước đóng băng xuất hiện — linh lực chạm vào bị "đóng băng" 2 giây (dừng di chuyển, mất chain). Vỡ băng: linh lực Hoả chạm vào vũng đóng băng giải phóng. Stability damage khi linh đan bị linh lực đóng băng release: **-5** (nhỏ nhưng surprise).

**Stability damage (§5)**: Huyền Lãng gián tiếp: **-15**; Vũng Đóng Băng: **-5** — T14 range, phía thấp nhưng môi trường velocity penalty là penalty liên tục.

### Phase 2: Mai Quy Phong Ấn (65% → 30% HP)

**Mai Quy Đóng** trigger: boss co cổ vào mai — trở nên **immune hoàn toàn với linh lực** trong 8 giây. Trong 8 giây đó, boss tự động phóng ra **vòng Thuỷ lực** từ mai mỗi 2 giây — 4 cú, mỗi cú stability **-10** nếu linh đan bị hit. Cách break mai: bắn linh lực Thổ vào mai trong 8 giây đó (Thổ khắc Thuỷ) — 5 hit Thổ = break sớm, boss phase transition ngay.

**Thuỷ Áp Tăng Cao**: velocity penalty tăng thêm 10% flat (cộng với Nước Dâng phase 1). Linh lực chậm đến mức chain 7+ hop gần như bất khả thi trừ khi có affix velocity.

**Vũng Đóng Băng tăng**: từ 25% → 50% chance per Huyền Lãng. Board dần đầy vũng băng nhỏ.

**Stability damage (§5)**: Mai Quy vòng Thuỷ lực: **-10** per cú × 4 cú = **-40** nếu không né — tuy nhiên player có thể né bằng cách route linh lực tránh đường vòng. Damage thực tế trung bình **-15 đến -20**.

### Phase 3: Huyền Minh Đại Triều (30% → 0% HP)

**Triều Dâng Huyền Bí**: mực nước đạt cực điểm — velocity penalty tổng cộng -50%. Tất cả linh lực đi chậm như trong mật ong. Nhưng: linh lực Thổ **không bị penalty** (Thổ chặn nước — cơ học nguyên tố thuần). Moment rõ ràng nhất trong ván để switch Thổ.

**Cú Kết "Hắc Thuỷ Hồng Triều"** (mỗi 20 giây): boss nổi lên hoàn toàn, phun cột Thuỷ lực thẳng đứng phủ 1/3 board. Tất cả linh khí trong vùng bị "cuốn trôi" 3 giây (không hoạt động). Stability damage nếu linh đan nằm trong vùng phun: **-22** flat. Telegraph: nước bắt đầu xoáy trên board 3 giây trước khi phun — routing kịp thì tránh được.

**Stability damage tổng kết (§5)**:
- Phase 1: **-15** Huyền Lãng, **-5** Băng release
- Phase 2: **-10** per vòng Mai Quy (×4, có thể tránh)
- Phase 3: **-22** Hồng Triều (T14-15 range, sát trần 25 §5)

## Cơ chế đặc trưng

**Velocity Penalty Stack**: cơ chế áp lực từ từ — không có cú "oneshot" mà là tích luỹ penalty đến điểm tất cả chain build trở nên vô dụng. Player phải build velocity compensation từ đầu hoặc chuyển sang "hit trực tiếp" build không cần chain dài.

**Mai Quy Đóng (Immune Window)**: lần đầu trong game có boss immune window dài — 8 giây không thể damage bằng linh lực thường. Cách phá = element counter Thổ. Dạy player: không phải cứ bắn là được, đôi khi phải chờ hoặc dùng đúng element.

## Counter-play

**Element**: **Thổ** (khắc Thuỷ) — duy nhất không bị velocity penalty phase 3, và là element phá Mai Quy phase 2. Build Thổ mono là optimal cho boss này; build Hoả (sinh Thổ chain) hỗ trợ tốt.

**Cổ vật hữu ích**:
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): 20% stability + dispel debuff sau Hồng Triều phase 3 (§5)
- Affix "Khinh Linh" (velocity +15% flat): bù velocity penalty — essential nếu không dùng Thổ
- Cổ vật Hoả implicit (dùng Hoả để vỡ Vũng Đóng Băng nhanh): giữ board sạch, chain không bị ngắt
- Keystone reduce-cooldown item: break Mai Quy nhanh hơn = ít bị vòng Thuỷ lực hơn

**Chiến thuật**: phase 1 — chuẩn bị chain Thổ sẵn song song chain chính. Phase 2 — khi Mai Quy đóng: spam Thổ ngay lập tức, không lãng phí 8 giây. Phase 3 — switch hoàn toàn Thổ, không cố chain Thuỷ/Kim vì velocity penalty quá cao.

## Phần thưởng

Drop theme: **Thuỷ Atlas Fragment** (unlock T15-T16 vùng Bắc) + Thuỷ Tinh Thạch cấp Cổ + Hắc Mai Phiến (crafting material Lò slot). Drop Cổ vật: ưu tiên Thổ-element hoặc velocity buff. Xác suất nhỏ: Atlas node unlock "Bắc Phương Huyền Vũ" — passive tree Atlas buff Thuỷ pháp trận toàn Sơn Hà Đồ.
