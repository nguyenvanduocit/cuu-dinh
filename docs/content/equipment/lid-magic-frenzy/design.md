---
id: lid-magic-frenzy
ten: Nắp Linh Cuồng
slot: lid
rarity: Magic
variant: Linh
isUnique: false
---

# Nắp Linh Cuồng (`lid-magic-frenzy`)

## Lược tả

Nắp linh ngọc màu bích lục khắc hoa văn cuồng lưu — hơi linh lực bên trong Lò cuộn chảy không ngừng, cộng hưởng với từng ván luyện, tự động kết tinh thêm một viên đan dược cuối ván như phần thưởng cho sự cuồng nhiệt. Tên "Cuồng" không phải nguy hiểm mà là sung mãn.

## Implicit

**2 modifier slots — +1 đan dược drop cuối ván.**

Cơ chế chi tiết (Magic — Linh):
- Mở 2 modifier slot cho Lò (tăng từ 1 của Phàm).
- Cuối mỗi ván (sau khi boss die hoặc ván kết thúc bình thường): tự động thêm 1 đan dược vào loot pool trước khi phân phối.
- Đan dược thêm vào có weight drop bình thường (không guaranteed rare) — xác suất theo DropPool thông thường của ván đó.
- Cộng dồn với `ring-left-rare-drop`/`ring-right-rare-drop`: nếu drop tier đã được nâng bởi ring, đan dược bonus này cũng hưởng tier nâng đó.

Tham chiếu: đan dược là nguyên liệu cốt lõi của 6 trụ gambling (Đan dược trụ) — mỗi đan dược bonus/ván cộng dồn đáng kể qua 5-8 ván 1 pháp trận.

Rarity scale (modifier slots + implicit):
| Rarity | Modifier slots | Implicit |
|---|---|---|
| Common (Phàm) | 1 | Không có |
| Magic (Linh) | 2 | +1 đan dược/ván |
| Rare (Bảo) | 3 | Xem trước reward boss |
| Legendary (Thần) | 3 | Boss drop đảm bảo Bảo+ |
| Unique (Cổ vật) | 4 | Tier tự nâng sau mỗi boss |

## Slot role

**Nắp (lid)** — nắp đậy Lò Luyện Đan. Nắp tác động lên meta-layer loot/reward. Nắp Linh Cuồng là Nắp economy tier Magic: không ảnh hưởng gameplay trong ván, chỉ tăng tổng tài nguyên tích lũy sau pháp trận.

## Build use

- **Economy build**: tổng cộng 5-8 ván × 1 đan dược bonus = 5-8 đan dược/pháp trận free — đủ tài trợ 1-2 lượt gambling thêm ở trụ Đan Dược hoặc Phong Ấn.
- **Combo `ring-left-rare-drop` + `ring-right-rare-drop`**: nâng tier drop toàn bộ (ring) + thêm 1 đan dược/ván (Nắp) → xác suất cao đan dược bonus là Bảo+.
- **Đạo Phái Đan Tông**: keystone "Linh Đan Sung Mãn" của Đan Tông tăng hiệu quả đan dược tiêu thụ — Nắp Linh Cuồng tạo thêm nguyên liệu để Đan Tông khai thác.
- **Thay thế khi nâng cấp**: Magic là tier trung gian — upgrade lên `lid-rare-heaven-secret` (thêm 1 modifier slot + thông tin boss) khi vào T6+ để giảm thiểu rủi ro boss phục kích.
