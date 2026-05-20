---
id: corruption-bead
ten: Tâm Ma Châu
category: mechanic-shifter
weight: 60
---

# Tâm Ma Châu (`corruption-bead`)

## Lược tả

Nguyên Liệu đổi cơ chế pháp trận bằng cách thêm 1 **phòng Tâm Ma boss** vào trước ván boss cuối. Tâm Ma boss mang modifier intensity -50% → +100% §3 và drop Cổ Vật với xác suất tăng. Rủi ro stability đổi lấy Cổ Vật thêm.

## Effect

Trong pháp trận này, trước ván boss cuối, xuất hiện thêm 1 **encounter Tâm Ma boss** (loại `heart-demon` per `BossType` enum). Tâm Ma boss này:
- Áp **tâm ma intensity modifier** lên linh đan trong suốt encounter: -50% → +100% §3 (ngẫu nhiên mỗi encounter).
- Gây **stability debuff** -1/giây khi debuff active + attack -5 đến -25 mỗi đòn §5.
- **Drop Cổ Vật +30% xác suất** sau khi tiêu diệt.

Nếu dùng kết hợp với `dragon-bone` (Long Cốt, boss sinh đôi): Tâm Ma boss ở encounter thêm cũng sinh đôi → 2 Tâm Ma boss cùng lúc, drop nhân đôi.

## Khi nào dùng

- Farm Cổ Vật từ Tâm Ma boss: drop +30% per encounter là nguồn Cổ Vật ổn định nhất ngoài `spirit-flower`.
- Build có bộ Phong Ấn chống Tâm Ma (passive-tree "Tịnh Tâm" cluster): giảm tâm ma debuff → encounter trở thành free loot.
- Map T6-T13 theo `BossType` Tâm Ma (T6-T13 range §20 decision) — encounter native đúng tier.

## Synergy

- **+ `star-stone` (Tinh Tinh Thạch)**: Tinh Tinh Thạch mở thêm 1 Tâm Ma modifier slot trên Đan Pháp; Tâm Ma Châu thêm 1 encounter Tâm Ma boss → hai layer Tâm Ma cộng hưởng, drop Cổ Vật tối đa.
- **+ `dragon-bone` (Long Cốt)**: sinh đôi boss áp dụng cho cả Tâm Ma encounter → 2 Tâm Ma boss + 2 boss cuối, phần thưởng vượt trội nhưng nguy hiểm cực cao.
- **+ `pure-spirit-incense` (Tịnh Linh Hương)**: giảm 50% năng lượng tiêu cực Tâm Ma → debuff intensity giảm một nửa trong encounter, khả năng sống sót cao hơn đáng kể.
- **+ `wood-spirit-crystal` (Mộc Linh Tinh)**: +20% stability max → buffer extra 20 stability khi đối mặt Tâm Ma boss drain liên tục (§5 -1/giây + attack -5 đến -25).
