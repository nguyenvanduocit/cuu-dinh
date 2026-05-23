---
id: phoenix-spirit-talisman
ten: Bùa Phượng Linh
type: talisman
element: fire
rarity: Magic
dropPool: Uncommon
tags: [fire, chain, aoe]
---

# Bùa Phượng Linh (`phoenix-spirit-talisman`)

## Lược tả

Pháp bảo Hoả hệ dạng bùa — khi linh lực Hoả va chạm linh khí gần đây, ngọn lửa lan sang các linh khí lân cận và thiêu đốt trong 5 giây. Vai trò vật lý: **bộ lan truyền burn**; không cần linh lực trực tiếp chạm mọi linh khí — một hit kích chain cháy diện rộng. Đặt gần cụm linh khí dày.

## Implicit

Khi linh lực Hoả va chạm Bùa Phượng Linh: tất cả linh khí trong bán kính **150px** quanh Bùa bị **ignite** — trạng thái cháy gây **0.15× intensity** (của linh lực kích) mỗi giây trong **5 giây** trực tiếp lên linh đan. Linh khí bị ignite phát ánh sáng cam đỏ; ignite không stack (refresh timer nếu kích lại).

- Damage ignite là Hoả — áp dụng tương sinh Hoả→Thổ (+stability heal) nếu linh đan là Thổ; tương khắc Hoả khắc Kim (-40% penalty §2) nếu linh đan là Kim.
- Ignite tạo 5 hit nhỏ/giây × 5 giây = 25 hit/cycle mỗi linh khí bị cháy — crit check mỗi hit.
- Linh khí không phải linh đan bị ignite nhưng không gây damage đến linh đan (linh khí không có HP — ignite chỉ visual/state).

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `offensive` | Damage ignite tăng 0.2× / 0.25× intensity |
| `aoe` | Bán kính ignite 200px / 250px |
| `chain` | Linh khí đang cháy ignite lan sang linh khí lân cận 80px (chain 1 bước) |
| `sustain` | Ignite heal 0.02× intensity/giây cho stability linh đan Hoả (tương sinh Hoả→Thổ mở rộng) |
| `crit` | Hit ignite có +10% crit chance riêng |

Affix `chain` tạo hiệu ứng "cháy lan" hữu cơ — 1 Bùa ignite → linh khí gần cháy → cháy lan sang linh khí cạnh → toàn board bùng.

## Build role

**Element**: Hoả. **Archetype**: burn DoT / chain ignite / diện rộng.

- **Vai trò cốt lõi**: nguồn damage-over-time Hoả thụ động — 1 linh lực kích 1 Bùa phủ cháy toàn board trong 5 giây. Phù hợp build linh lực ít nhưng mỗi lần đánh cần yield cao.
- **Đạo Phái khớp nhất**: **Linh Sơn** (`spirit-mountain`) — echo spawn thường xuyên kích Bùa lặp lại, refresh ignite liên tục; board hầu như luôn trong trạng thái cháy. **Cửu Âm** (`nine-yin`) — ignite 25 hit/cycle trong vùng aura Nguyền → mỗi hit hưởng -30% phòng thủ debuff → tổng damage tăng mạnh.
- **Combo**: Châu Hoả Phượng (`fire-phoenix-bead`) — ignite tích điểm Châu (5 hit/giây × 5s = 25 điểm trong 1 cycle); với Châu ngưỡng 3-hit (affix T1), Châu nổ mỗi 0.6 giây trong khi board cháy. Quạt Phong Hoả (`fire-wind-fan`) — wave Hoả kích Bùa ignite → ignite tích điểm Châu → vòng lặp tự duy trì.
- **Anti-synergy**: build "Bùng Bạo" single-hit — DoT cần thời gian; build cần kết thúc nhanh trong 1–2 hit không đủ thời gian thu hoạch 5 giây cháy.
