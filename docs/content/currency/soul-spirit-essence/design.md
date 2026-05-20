---
id: soul-spirit-essence
ten: Tâm Linh Hồn Phách
category: mechanic-shifter
weight: 60
---

# Tâm Linh Hồn Phách (`soul-spirit-essence`)

## Lược tả

Nguyên Liệu đổi cơ chế mất linh khí: thay vì linh khí vỡ vĩnh viễn dưới map mod "Huyết Sát" (§8), **hồn phách linh khí tái sinh** thành 1 linh khí Bảo ngẫu nhiên. Biến mất mát thành cơ hội.

## Effect

Khi bất kỳ linh khí nào trên board **bị brick** (durability ≤ 0 dưới "Huyết Sát" mod §8, hoặc bất kỳ cơ chế phá hủy linh khí nào):
- Thay vì biến mất vĩnh viễn, linh khí đó **tái sinh** thành 1 linh khí **Bảo tier ngẫu nhiên** (rarity Rare theo DropPool enum) — element ngẫu nhiên, không kế thừa element gốc.
- Linh khí tái sinh spawn tại vị trí linh khí cũ trên board.
- Tái sinh xảy ra **mỗi lần** linh khí bị brick trong pháp trận — không có giới hạn số lần.

Nếu pháp trận không có cơ chế brick linh khí (không có "Huyết Sát" mod), Tâm Linh Hồn Phách không có hiệu ứng — Nguyên Liệu bị lãng phí.

## Khi nào dùng

- Bí cảnh có Tâm Ma mod "Huyết Sát" (§8): durability linh khí -10/hit, board vỡ dần — Tâm Linh Hồn Phách biến mỗi linh khí vỡ thành Bảo tier mới, board tự regenerate.
- Compose cùng `sun-wukong-staff` (Trượng Tôn Ngộ Không): tách ×3 hit ăn mòn durability gấp 3 (§8 note) — Tâm Linh Hồn Phách tái sinh liên tục, board luôn đủ linh khí.
- Map T15-T16 có "Huyết Sát" thường xuyên: Tâm Linh Hồn Phách là counter trực tiếp, biến weakness thành nguồn linh khí Bảo tier.

## Synergy

- **+ Tâm Ma mod "Huyết Sát"** (§8): cơ chế trigger của Tâm Linh Hồn Phách — phải có "Huyết Sát" để hiệu ứng kích hoạt. Không dùng nếu không có mod này.
- **+ `corruption-bead` (Tâm Ma Châu)**: thêm Tâm Ma encounter — encounter Tâm Ma có thể mang "Huyết Sát"; Tâm Linh Hồn Phách sẵn sàng trigger.
- **+ `wood-spirit-crystal` (Mộc Linh Tinh)**: linh khí tái sinh = Bảo tier ngẫu nhiên, có thể là Mộc → Mộc Linh Tinh +20% stability max cộng hưởng với heal implicit Mộc (§5). Board tái sinh nhiều Mộc = sustain stability cao.
- **Tránh dùng không có "Huyết Sát"**: nếu pháp trận không có cơ chế brick linh khí, Tâm Linh Hồn Phách = slot Nguyên Liệu trống. Kiểm tra map mod trước khi compose.
