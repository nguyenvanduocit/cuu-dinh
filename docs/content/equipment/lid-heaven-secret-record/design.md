---
id: lid-heaven-secret-record
ten: Thiên Cơ Bí Lục
slot: lid
rarity: Unique
variant: Cổ vật
isUnique: true
---

# Thiên Cơ Bí Lục (`lid-heaven-secret-record`)

## Lược tả

Cổ vật Nắp duy nhất được biết đến — không phải đồng hay ngọc mà là một cuốn sách bí mật bọc bằng da linh thú, đặt úp lên miệng Lò thay nắp thường. Mỗi boss bị hạ xuống, sách tự ghi thêm một chương — và chương đó nâng cấp một phần Lò lên một bậc. Pháp trận càng dài, Lò càng mạnh.

## Implicit

**4 modifier slots — mỗi ván boss sống sót: 1 modifier slot tự nâng tier — tích lũy cả pháp trận.**

Cơ chế chi tiết (Unique — Cổ vật):
- Mở 4 modifier slot cho Lò (nhiều nhất trong tất cả Nắp).
- Sau mỗi ván có boss encounter mà player sống sót (linh đan không bể): **1 modifier slot ngẫu nhiên trong 4 slot tự nâng tier** (T1 → T2 → T3, không nâng quá T3).
- Tier nâng **tích lũy suốt cả pháp trận** (5-8 ván + boss) — không reset giữa các ván.
- Nếu tất cả 4 slot đã T3: "overcharge" xảy ra — thay vì nâng tier, mỗi boss kill sau đó tạo ra 1 affix bonus ephemeral (tồn tại trong ván đó, mất sau ván).
- Reset về T1 khi bắt đầu pháp trận mới.

Tham chiếu progression (decision #5 3-layer architecture): tier nâng qua pháp trận là cơ chế Map-layer accumulation — không phải Forever-layer permanent, reset theo pháp trận.

## Slot role

**Nắp (lid)** — nắp đậy Lò Luyện Đan. Thiên Cơ Bí Lục là Nắp Unique build-defining duy nhất: thay đổi hoàn toàn dynamic Nắp từ passive loot utility sang progressive power scaling. Lò trở nên mạnh hơn theo thời gian trong 1 pháp trận — tạo incentive hoàn thành đủ 5-8 ván thay vì thoát sớm.

## Build use

- **Long-run pháp trận build**: build mục tiêu giữ pháp trận đủ lâu (5-8 ván, không thoát sớm) để tích lũy tối đa tier nâng — 5 boss kills với 4 slot = khả năng cao 4/4 slot T3 cuối pháp trận.
- **Đạo Phái Thiên Mệnh**: keystone "Thiên Mệnh Lưu Giữ" — mỗi tier nâng có thêm 15% chance giữ lại tier khi bắt đầu pháp trận mới (biến Map-layer accumulation thành Forever-layer partial persistence).
- **Combo `handle-left-thunderbolt-charm` / `handle-right-thunderbolt-charm`**: boss kill nhanh hơn (sét AoE) = nhiều tier nâng hơn/pháp trận trong cùng thời gian.
- **Combo `handle-left-revive-charm` / `handle-right-revive-charm`**: tier nâng chỉ khi sống sót boss — hồi sinh linh khí ngăn bể linh đan trong boss phase → bảo vệ điều kiện trigger tier nâng.
- **Anti-synergy**: build thoát pháp trận sớm (skip ván) sẽ không khai thác được tier nâng tích lũy — Nắp này cần commitment đủ 5-8 ván.
- **Đánh đổi**: 4 modifier slot (nhiều nhất) nhưng không có loot guaranteed hay information advantage như các Nắp khác — trade loot-bias lấy power-scaling in-run.
