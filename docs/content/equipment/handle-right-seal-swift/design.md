---
id: handle-right-seal-swift
ten: Quai Phong Ấn Tốc (Phải)
slot: handleR
rarity: Common
variant: Phàm
isUnique: false
---

# Quai Phong Ấn Tốc (Phải) (`handle-right-seal-swift`)

## Lược tả

Quai đồng thô giản, khắc rãnh chữ "Tốc" — đủ để dẫn linh lực kích hoạt một Phong Ấn miễn phí mỗi ván. Không có gì hào nhoáng, chỉ có hiệu quả thực dụng của người luyện đan tính toán tiết kiệm từng đồng đan dược. Quai phải trái đối xứng, cùng rãnh khắc, cùng công năng.

## Implicit

**1×/ván: Phong Ấn miễn phí lên 1 linh khí ngẫu nhiên — không tốn đan dược.**

Cơ chế chi tiết (Common — Phàm):
- Kích hoạt thủ công bất kỳ lúc nào trong ván (không giới hạn timing).
- Chọn ngẫu nhiên 1 linh khí trên board hiện tại chưa có Phong Ấn — áp Phong Ấn tier thấp nhất hiện có.
- Phong Ấn miễn phí tính như Phong Ấn bình thường — thành công/thất bại theo tỉ lệ chuẩn (combat-math §5 seal mechanics), nhưng không tiêu đan dược khi thất bại.
- Dùng xong hết charge — không hồi.

Tham chiếu combat-math §5: Phong Ấn là lớp bảo vệ quan trọng cho linh khí, mỗi Phong Ấn giảm xác suất mất affix khi linh khí bị hit mạnh. Miễn phí 1 lần/ván = tiết kiệm trung bình 1 stack đan dược Phong Ấn.

Rarity scale:
| Rarity | Charge/ván | Ghi chú |
|---|---|---|
| Common (Phàm) | 1× | Random target |
| Magic (Linh) | 1× | Player chọn target |
| Rare (Bảo) | 2× | Player chọn target, +1 tier seal |
| Legendary (Thần) | 2× | Player chọn target, guaranteed success |

## Slot role

**Quai (handleR)** — tay cầm phải Lò Luyện Đan. Quai utility tier thấp nhất: hiệu ứng Phong Ấn nhanh phù hợp giai đoạn đầu game khi đan dược khan hiếm. Mirror pair với `handle-left-seal-swift` — đeo cả hai = 2 lần Phong Ấn miễn phí/ván.

## Build use

- **Early game economy**: Common rarity dễ farm — trang bị sớm để tiết kiệm đan dược Phong Ấn trong Acts 1-3 khi tài nguyên hạn chế.
- **Stack đôi**: `handle-left-seal-swift` + `handle-right-seal-swift` → 2 Phong Ấn miễn phí/ván — đủ bảo vệ 2 linh khí quan trọng mà không tốn gì.
- **Combo `ring-left-seal-safety` / `ring-right-seal-safety`**: giảm brick chance (ring) + miễn phí Phong Ấn (Quai) = bộ seal economy hoàn chỉnh cho build không đầu tư vào đan dược Phong Ấn.
- **Thay thế khi nâng cấp**: Common sẽ được thay bằng `handle-right-thunderbolt-charm` (Legendary) hoặc `handle-right-wuxing-array` (Unique) khi vào atlas.
