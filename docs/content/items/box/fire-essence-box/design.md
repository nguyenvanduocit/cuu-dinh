---
id: fire-essence-box
ten: Hộp Hoả Tinh
type: box
element: fire
rarity: Rare
dropPool: Rare
tags: [fire, store, charge]
---

# Hộp Hoả Tinh (`fire-essence-box`)

## Lược tả

Pháp khí Hoả hệ dạng hộp — thu nạp linh lực Hoả rồi giải phóng bùng nổ sau 3 giây tích tụ. Vai trò vật lý: **bẫy tĩnh**; linh lực va chạm Hộp dừng lại, không nảy, nhưng khi xả ra thì intensity nhân đôi. Phù hợp đặt gần linh đan để đảm bảo hit tiếp theo là hit lớn nhất.

## Implicit

Khi linh lực Hoả va chạm Hộp Hoả Tinh, linh lực bị giữ lại (không nảy). Sau **3 giây**, Hộp xả linh lực đó với **×2 intensity** tại thời điểm xả, hướng về linh đan gần nhất. Nếu Hộp nhận thêm linh lực thứ 2 trong khi đang tích, linh lực thứ 2 nảy bình thường (không giữ).

- `charge_count` của linh lực được bảo toàn từ lúc vào đến lúc xả — chain bonus không mất (§2 chain +20%/hop vẫn tính).
- ×2 intensity là multiplicative vào `player_mult` (§3) — cộng hưởng với mọi nguồn intensity khác.
- Delay 3 giây là cứng — không bị rút ngắn bởi affix tốc độ.

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `offensive` | +15–25% intensity khi Hộp xả |
| `charge` | Bảo toàn thêm charge_count khi tích (mỗi giây tích = +1 charge tích luỹ) |
| `speed` | Giảm delay xả còn 2.5s / 2s |
| `sustain` | Hộp hồi 5% stability linh đan khi xả (tương sinh Hoả→Thổ) |
| `aoe` | Linh lực xả tạo thêm splash AOE 80px quanh điểm va chạm đầu tiên |

Affix `charge` (tích lũy charge_count trong lúc giữ) cho phép chain bonus cao bất thường — một linh lực giữ 3s ở tốc độ +3 charge/s thêm ~+60% intensity chain trước khi Hộp còn nhân ×2.

## Build role

**Element**: Hoả. **Archetype**: burst single-hit / "Bùng Bạo".

- **Vai trò cốt lõi**: bộ khuếch đại delay — đổi tốc độ hit liên tục lấy 1 hit cực lớn. Phù hợp build ít linh lực, mỗi cú phải đánh dứt điểm.
- **Đạo Phái khớp nhất**: **Tử Vi** (`ziwei`) — xem trước drop biết đúng lúc Hộp sẵn sàng xả; crit chain (`ziwei-notable-crit-chain`) bùng sau hit ×2 intensity. **Vô Cực** (`void`) — innate ×2 biên độ intensity swing cộng với ×2 Hộp = hit cao nhất game.
- **Combo**: Passive keystone **Sắc Bén** (×3 crit multi) + Hộp Hoả Tinh ×2 intensity = 1 hit ×6 crit multi hiệu quả khi crit. Kết hợp affix `crit` prefix **Hung Diệt** (Lò) để đẩy crit chance bù Sắc Bén ÷2.
- **Anti-synergy**: Linh Sơn (`spirit-mountain`) — build bầy đàn nhiều hit nhỏ không hưởng lợi từ delay 1 linh lực; Hộp làm tắc nghẽn flow echo.
- **Map**: Đan Pháp Thiên Kiếp (T14–T16) — boss wave -50 stability (§5) đòi hỏi 1 hit quyết định; Hộp tích sẵn rồi xả đúng window boss là chiến lược tối ưu.
