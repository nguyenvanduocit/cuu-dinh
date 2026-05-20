---
id: peak-dragon-crystal
ten: Đỉnh Long Tinh
category: boss-modifier
weight: 40
---

# Đỉnh Long Tinh (`peak-dragon-crystal`)

## Lược tả

Chín đỉnh long tinh thức giấc — boss hóa thân chín lần không ngừng nghỉ, mỗi lần mạnh hơn lần trước. Trận đánh marathon đòi hỏi tài nguyên và ý chí cao nhất.

## Effect

**9-phase marathon boss** (boss encounter structure):
- Boss encounter có **9 giai đoạn liên tiếp** thay vì 1.
- Mỗi phase: boss có HP riêng, phải đánh về 0 để chuyển phase tiếp.
- Mỗi phase tiếp theo: boss **tăng +10% attack speed và +5 stability drain** so với phase trước (phase 1 baseline → phase 9: +80% attack speed, +40 drain/attack so với baseline).
- **Stability linh đan không hồi phục** giữa các phase — stability tích lũy drain liên tục qua toàn bộ 9 phase.
- Phase 9 = boss mạnh nhất — nếu stability linh đan còn ít, phase cuối là thách thức tử thần.
- Drop: sau mỗi phase boss bị đánh bại, drop **1 phần loot tương ứng** (tổng 9 lần loot nhỏ thay vì 1 lần loot lớn) + **drop đặc biệt phase 9**: 1 Cổ Vật guaranteed + 1 Đan Pháp phẩm cao nhất tier map.

## Đánh đổi & Risk

**Encounter khó nhất trong nhóm boss-modifier** — 9 phase liên tục với escalating pressure là thách thức design cực đoan. Stability drain tích lũy qua toàn bộ encounter: nếu mỗi phase trung bình drain 15 stability, 9 phase = -135 stability tổng → chỉ build có heal mạnh hoặc stability cap cao mới survive đến phase 9.

Phase 9 (+80% attack speed) = attack mỗi ~1.7 giây thay vì 3 giây baseline → drain liên tục, gần như không có window nghỉ.

**Fail state**: nếu stability về 0 ở phase 5/6 — toàn bộ loot từ phase 1-5 vẫn giữ được, nhưng drop đặc biệt phase 9 mất.

**Reward** xứng đáng nhất trong nhóm: 9× loot nhỏ + phase 9 guaranteed = total loot vượt trội mọi modifier khác nếu complete.

## Khi nào dùng + Synergy

**Dùng khi**: build endgame hoàn chỉnh (level 80+, full Lò Thần, tree optimized); stability buffer cực cao; có healing Cổ Vật; map T12-T16 nơi drop pool đủ giá trị để bù effort.

**Composing pháp trận**:
- Tránh mọi corruption-mod rủi ro cao kết hợp — encounter đã đủ khó, không cần thêm Thiên Lệ hay Đại Khắc.
- An toàn với **Vô Lượng** (`boundless-swarm`, low risk): nhiều linh lực = nhiều heal tương sinh hit giữa phases boss.
- Tránh **Thiên Long Cốt** (`heaven-dragon-bone`): element rotation boss kết hợp với 9 phase = quá khó adapt.

**Synergy**:
- **Tịnh Tâm Linh Châu** (restore 20% stability): sử dụng chiến lược giữa phase 4-5 khi stability thấp nhất để buffer vào phase 6-9.
- **Lò.Thân stability max affix** stacked: stability cap cao hơn = chịu được nhiều phase hơn trước khi crash.
- **Đan dược "Hồi Phục"** (splash +30% stability trước ván boss): bắt đầu với stability tối đa → buffer thêm ~2 phase.
- **Healing chain tối ưu** (board nhiều tương sinh hit): passive heal giữa boss attacks là core survival mechanic cho encounter này.
