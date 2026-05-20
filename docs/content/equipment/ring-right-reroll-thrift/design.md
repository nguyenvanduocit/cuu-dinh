---
id: ring-right-reroll-thrift
ten: Đồ Sương Reroll Tiết Kiệm (Phải)
slot: ringR
rarity: Common
variant: Phàm
isUnique: false
---

# Đồ Sương Reroll Tiết Kiệm (Phải) (`ring-right-reroll-thrift`)

## Lược tả

Nhẫn sương bạch ngọc đơn giản — không rực rỡ nhưng hữu dụng. Linh lực trong nhẫn tự động làm nhẹ gánh chi phí mỗi lần đạo sĩ thử lại affix, dần tích lũy thành khoản tiết kiệm đáng kể qua nhiều pháp trận. Nhẫn phải trái cùng khắc rãnh tiết kiệm đối xứng.

## Implicit

**+10% intensity mỗi Đồ Sương — -10% chi phí đan dược khi reroll affix.**

Cơ chế chi tiết (Common — Phàm):

**Intensity bonus (§3 combat-math):**
- Mỗi Đồ Sương (ringL hoặc ringR) đang trang bị đóng góp **+10% intensity** cho toàn bộ linh lực bắn ra trong ván.
- Đây là implicit cố định của slot Đồ Sương — áp dụng cho mọi variant và rarity.
- Trang bị cả 2 Đồ Sương (L+R) = **+20% intensity tổng**.

**Reroll economy (implicit riêng của variant reroll-thrift):**
- Mỗi lần reroll affix trên linh khí (qua đan dược gambling trụ) tốn ít hơn **10% đan dược so với chi phí gốc**.
- Giảm áp dụng trước khi tính các modifier khác (additive base reduction).
- Trang bị cả `ring-left-reroll-thrift` + `ring-right-reroll-thrift` = **-20% tổng chi phí reroll**.

Rarity scale (reroll economy):
| Rarity | Intensity | Reroll discount |
|---|---|---|
| Common (Phàm) | +10% | -10% |
| Magic (Linh) | +10% | -15% |
| Rare (Bảo) | +10% | -20% |
| Legendary (Thần) | +10% | -30% + 1 reroll miễn phí/pháp trận |

## Slot role

**Đồ Sương (ringR)** — nhẫn sương phải trong Lò Luyện Đan. Đồ Sương là slot **intensity + crit** (combat-math §3-4): mỗi Đồ Sương trang bị +10% intensity; variant cụ thể quyết định utility phụ. Mirror pair với `ring-left-reroll-thrift` — đeo cả hai = +20% intensity + -20% reroll cost.

## Build use

- **Affix hunter build**: build mục tiêu lăn affix cụ thể trên linh khí Rare/Legendary — -20% reroll cost khi đeo cả 2 nhẫn = tiết kiệm đáng kể qua 50-100 lần reroll.
- **Early-mid game**: Common dễ farm, tiết kiệm đan dược trong giai đoạn Acts 3-5 khi affix reroll là khoản chi lớn nhất.
- **Combo `lid-magic-frenzy`**: +1 đan dược/ván (Nắp) + -20% reroll cost (cặp nhẫn) = vòng lặp economy dương — thêm nguyên liệu vào + giảm chi phí ra.
- **Thay thế**: khi build đã đủ tài nguyên và chuyển sang cần crit/intensity cao hơn, thay bằng `ring-right-seal-safety` (Legendary) hoặc `ring-right-spirit-record` (Unique).
