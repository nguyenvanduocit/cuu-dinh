---
id: primordial-chaos-bead
ten: Châu Hỗn Nguyên
type: bead
element: void
rarity: Common
dropPool: Common
tags: [void, random]
---

# Châu Hỗn Nguyên (`primordial-chaos-bead`)

## Lược tả

Pháp bảo Hư Vô hệ dạng châu — mỗi lần va chạm xáo trộn intensity ngẫu nhiên ±50%. Vai trò vật lý: **bộ khuếch đại hỗn loạn**; có thể biến linh lực yếu thành đòn mạnh hoặc ngược lại — nguồn variance thuần khiết nhất trong game. Giá trị tăng gấp đôi khi chơi với Vô Cực (biên độ ×2 → ±100%) hoặc Thiên Cơ Quẻ (đánh cược vào kết quả).

## Implicit

Mỗi lần linh lực va chạm Châu Hỗn Nguyên: intensity bị điều chỉnh ngẫu nhiên **±50%** (uniform distribution: có thể +50%, có thể -50%, hoặc bất kỳ giá trị nào giữa). Điều chỉnh áp dụng multiplicative vào `player_mult` (§3). `charge_count` không thay đổi.

- Trung bình kỳ vọng (expected value) sau nhiều lần qua Châu: bằng 0 (±50% đối xứng). Châu không lợi hay hại về mặt toán học dài hạn — giá trị nằm ở cực trị.
- Intensity sau điều chỉnh bị giới hạn bởi intensity floor 0.1× (§3) — không thể về 0.
- Linh lực qua nhiều Châu Hỗn Nguyên: mỗi lần điều chỉnh riêng biệt, không cộng dồn penalty.

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `random` | Biên độ mở rộng ±70% / ±100% (rủi ro/lợi ích lớn hơn) |
| `offensive` | Kết quả ngẫu nhiên có floor +10% (tối thiểu không âm hơn bình thường) |
| `void` | Khi kết quả ≥ +30%: kích thêm 1 crit check bonus (ngoài crit check bình thường) |
| `sustain` | Khi kết quả ≤ -30%: heal +5 stability linh đan (Hỗn Nguyên cân bằng — nhận penalty đổi lấy sustain) |
| `chain` | Khi kết quả ≥ +20%: linh lực nhận +1 charge_count (§2 — may mắn kép) |

## Build role

**Element**: Hư Vô (void). **Archetype**: variance-gambler / chaos-amplifier / floor-player.

- **Vai trò cốt lõi**: công cụ của build chấp nhận hỗn loạn — không phù hợp build ổn định, nhưng là nền tảng cho chiến lược "đánh cược vào đỉnh cao". Giá trị nhất khi các affix (hoặc Đạo Phái) có khả năng khai thác kết quả cực cao và sống sót qua kết quả cực thấp.
- **Đạo Phái khớp nhất**: **Vô Cực** (`void`) — innate ×2 biên độ intensity variation; Châu ±50% × Vô Cực ×2 = effective ±100% biên độ. `void-notable-intensity-swing` 10% cơ hội ×2.5 intensity thêm vào = một lần may mắn đúng thời điểm = đòn đáng kinh ngạc. `void-notable-disaster-survive` là lưới an toàn khi Châu cho kết quả -50% liên tiếp (20% hồi 25 stability). **Tử Vi** (`ziwei`) ít hợp — Tử Vi muốn kiểm soát; Châu là nguồn entropy, mâu thuẫn với triết lý foresight.
- **Combo**: Hộp Hoả Tinh (`fire-essence-box`) — nếu Châu cho +50%, linh lực vào Hộp mang intensity cao; khi Hộp xả ×2 = tổng ×2 × 1.5 intensity = đòn lớn nhất từ 1 linh lực. Nếu Châu cho -50%, linh lực vào Hộp vẫn được ×2 khi xả — Hộp giảm thiểu tổn thất từ roll âm. `void-keystone-absolute-chaos` (×4 biên độ) + Châu ±50% = ±200% intensity swing lý thuyết — cực đoan nhất trong game.
- **Anti-synergy**: **Thái Cực** (`tai-chi`) — keystone `Cực Trung Vô Cực` cap quality +15%/hit, triệt tiêu đỉnh cao của Châu. Thái Cực muốn bình ổn, Châu muốn hỗn loạn. **Tử Vi** keystone `Thiên Mệnh Chung Định` (100% crit, crit multi lock 1.2×) cũng triệt tiêu lợi thế — Châu cần đỉnh cao crit multi, không cần crit rate.
