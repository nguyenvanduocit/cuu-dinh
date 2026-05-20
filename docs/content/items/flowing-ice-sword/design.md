---
id: flowing-ice-sword
ten: Kiếm Lưu Băng
type: sword
element: water
rarity: Common
dropPool: Common
tags: [water, pierce]
---

# Kiếm Lưu Băng (`flowing-ice-sword`)

## Lược tả

Pháp khí Thuỷ hệ dạng kiếm — linh lực Thuỷ xuyên qua một va chạm tường mà không nảy, tiếp tục hành trình. Vai trò vật lý: **xuyên phá địa hình**; cho phép linh lực đi theo đường thẳng dài hơn, không bị tường bẻ hướng. Giá trị cao nhất khi board có tường phân cắt vùng linh đan.

## Implicit

Linh lực Thuỷ va chạm Kiếm Lưu Băng nhận trạng thái **Pierce**: va chạm tường tiếp theo bị bỏ qua (linh lực đi xuyên qua, không nảy). Pierce tiêu tốt sau 1 va chạm tường hoặc sau 3 giây nếu không gặp tường. `charge_count` và intensity không thay đổi khi xuyên.

- Chỉ xuyên **tường** (wall) — linh khí và linh đan vẫn gây va chạm bình thường.
- Nếu board không có tường ngăn đường, Pierce không có tác dụng (linh lực đi thẳng vẫn đi thẳng).
- Pierce không tích từ nhiều Kiếm — 2 Kiếm trên board không cho phép xuyên 2 tường cùng lúc (chỉ 1 pierce active/linh lực).

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `offensive` | +15–25% intensity sau khi xuyên tường (momentum Thuỷ) |
| `pierce` | Pierce 2 va chạm tường thay vì 1 (T1); xuyên linh khí 1 lần thay vì nảy (T2) |
| `chain` | Sau khi xuyên, `charge_count` +2 (chain bonus tăng — §2 +20%/hop) |
| `speed` | Vận tốc linh lực tăng 20% sau xuyên |
| `elemental` | Đổi element sang Thuỷ sau xuyên nếu linh lực không phải Thuỷ (khai thác Quạt Vô Hình trên cùng board) |

## Build role

**Element**: Thuỷ. **Archetype**: precision routing / chain-builder / linear path.

- **Vai trò cốt lõi**: kiểm soát đường đi linh lực — đặt Kiếm để linh lực xuyên tường, đi đến linh đan theo đường thẳng ngắn nhất. Phù hợp board có nhiều tường chia ngăn, nơi hướng bounce bình thường sẽ đưa linh lực đi lạc.
- **Đạo Phái khớp nhất**: **Cửu Âm** (`nine-yin`) — linh lực Thuỷ xuyên tường = vào vùng aura Nguyền trực tiếp mà không mất momentum qua bounce; `nine-yin-notable-water-amplify` +20% intensity Thuỷ trong aura cộng hưởng sau xuyên. **Tử Vi** (`ziwei`) — Pierce + drop lock (`ziwei-notable-drop-lock`) = kiểm soát routing tuyệt đối; biết trước 5 drop + tối ưu đường linh lực = DPS tối đa.
- **Combo**: Hộp Hàn Khí (`frost-qi-box`) — Kiếm Pierce giúp linh lực Thuỷ đến Hộp dễ hơn qua tường; Hộp store rồi release +3 jumps = chain dài trong vùng bên kia tường. Nghiên Mực Hàn Băng (`frost-ice-inkstone`) — linh lực xuyên tường, gặp Nghiên trước khi đến linh đan, kích vũng nước +20% intensity.
- **Anti-synergy**: board open không có tường — Pierce vô dụng, item chỉ là linh khí thông thường không cơ chế.
