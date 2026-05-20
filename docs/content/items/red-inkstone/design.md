---
id: red-inkstone
ten: Nghiên Mực Đỏ
type: inkstone
element: fire
rarity: Common
dropPool: Common
tags: [fire, trail, aoe]
---

# Nghiên Mực Đỏ (`red-inkstone`)

## Lược tả

Pháp khí Hoả hệ dạng nghiên — linh lực Hoả lướt qua để lại dấu cháy đỏ trên đường đi. Vai trò vật lý: **bẫy địa hình**; dấu cháy tồn tại 3 giây, mọi linh khí chạm vào nhận damage Hoả. Đặt tại vị trí linh lực hay đi qua (hành lang, trục bounce) để tận dụng trail dài nhất.

## Implicit

Khi linh lực Hoả va chạm Nghiên Mực Đỏ hoặc đi qua vùng **60px** quanh Nghiên: để lại **trail cháy** trên đường đi, rộng 30px, tồn tại **3 giây**. Mọi linh khí chạm trail nhận **0.4× intensity** (của linh lực tạo trail) Hoả damage mỗi giây tiếp xúc. Linh đan chạm trail trực tiếp nhận damage Hoả.

- Trail chồng lớp: nếu 2 linh lực tạo trail trên cùng vùng, damage cộng dồn (mỗi trail tính riêng).
- `charge_count` của linh lực gốc không truyền vào trail — trail là nguồn damage cố định, không hưởng lợi chain bonus (§2).
- Trail tắt sau 3 giây hoặc khi Nghiên bị phá (durability về 0, §8).

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `offensive` | Trail damage tăng 0.55× / 0.7× intensity |
| `trail` | Thời gian tồn tại trail tăng 4s / 5s |
| `aoe` | Độ rộng trail 50px / 70px |
| `chain` | Trail khi tắt gây burst AOE 60px damage = 0.3× intensity |
| `sustain` | Trail Hoả trên nền Thổ heal +0.02× intensity stability/giây (tương sinh Hoả→Thổ §2) |

## Build role

**Element**: Hoả. **Archetype**: area control / passive damage / board pressure.

- **Vai trò cốt lõi**: phủ board bằng vùng damage thụ động — linh lực một lần qua nhưng trail hoạt động 3 giây. Phù hợp build muốn control vùng thay vì bắn liên tục, đặc biệt khi dùng Hộp Hoả Tinh (delay 3 giây = trail sẵn trên board khi linh lực xả ra).
- **Đạo Phái khớp nhất**: **Cửu Âm** (`nine-yin`) — trail Hoả đi qua vùng aura Nguyền kích debuff; linh đan ngập trong aura + trail = phòng thủ 0 + damage/giây kép. **Thái Cực** (`tai-chi`) — trail Hoả duy trì nguyên tố Hoả trên board suốt 3 giây, hỗ trợ điều kiện ≥3 nguyên tố của `tai-chi-notable-harmony-bonus`.
- **Combo**: Quạt Phong Hoả (`fire-wind-fan`) — wave AOE Hoả từ Quạt kích trail trên diện rộng; trail từ Nghiên + wave từ Quạt = double-source Hoả damage trên cùng vùng. Hộp Hoả Tinh (`fire-essence-box`) — tích 3 giây, trong đó trail đã phủ đường đến linh đan; khi Hộp xả ×2 intensity, linh lực đi qua trail sẵn có thêm AOE hit dọc đường.
- **Anti-synergy**: board ít linh khí, linh lực đi thẳng không qua Nghiên nhiều lần — trail ngắn, hiệu quả thấp.
