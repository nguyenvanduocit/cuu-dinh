---
id: jade-cauldron
ten: Đỉnh Lục Bảo
type: cauldron
element: wood
rarity: Magic
dropPool: Uncommon
tags: [wood, sustain, quality]
---

# Đỉnh Lục Bảo (`jade-cauldron`)

## Lược tả

Pháp khí Mộc hệ dạng đỉnh — linh đan Mộc nhận quality bonus từ mỗi linh lực đồng hành chạm vào Đỉnh. Vai trò vật lý: **bộ tích quality thụ động**; đặt gần launcher để linh lực đi qua Đỉnh trước khi đến linh đan, mỗi lần qua đóng góp vào quality của linh đan. Không cần crit, chỉ cần nhiều hit đồng hành liên tục.

## Implicit

Mỗi lần linh lực bất kỳ va chạm Đỉnh Lục Bảo và linh đan đang luyện là **Mộc**: linh đan nhận **+0.8% quality** ("đồng hành hit"). Mỗi ván tối đa **40 lần** đồng hành hit được tính (sau 40 hit, cơ chế tắt cho ván đó). Tổng tối đa từ Đỉnh: +32% quality/ván.

- Tính độc lập với tương sinh/khắc — cả linh lực tương sinh lẫn tương khắc đều kích +0.8% quality khi chạm Đỉnh.
- Linh đan không phải Mộc: cơ chế tắt hoàn toàn (0 quality từ Đỉnh).
- +0.8% quality/hit cộng cùng với tương sinh hit chính lên linh đan (§2 quality gain từ intensity) — không thay thế.

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `quality` | +1.2% / +1.5% quality mỗi đồng hành hit |
| `sustain` | Mỗi 10 đồng hành hit: heal +5 stability linh đan Mộc (tương sinh Mộc→Hoả §2 mở rộng) |
| `offensive` | Sau 20 đồng hành hit: linh lực tiếp theo chạm linh đan Mộc nhận +25% intensity |
| `chain` | Đồng hành hit tích charge_count cho Đỉnh; mỗi 5 hit tích: phóng 1 linh lực Mộc nhỏ tự động (40% intensity) về phía linh đan |
| `counter` | Linh lực tương khắc khi chạm Đỉnh bị convert sang Mộc (giống Bình Cam Lộ Xanh — không phải linh đan) |

## Build role

**Element**: Mộc. **Archetype**: quality-grinder / sustain / slow-build.

- **Vai trò cốt lõi**: tích lũy quality thụ động — phù hợp build nhiều linh lực nhỏ liên tục (không cần mỗi hit mạnh). +32% quality từ Đỉnh/ván là nguồn quality ổn định nhất trong game mà không phụ thuộc RNG crit.
- **Đạo Phái khớp nhất**: **Linh Sơn** (`spirit-mountain`) — echo spawn liên tục kích Đỉnh; với `spirit-mountain-notable-echo-rate` 18%, 40 hit tích luỹ nhanh hơn nhiều; `spirit-mountain-notable-mass-echo` (≥4 linh lực +10% intensity) không trực tiếp hỗ trợ Đỉnh nhưng bầy đàn echo cũng đồng thời kích chính linh đan. **Thái Cực** (`tai-chi`) — Thái Cực board đa linh khí + `tai-chi-notable-stability-cap` +20 stability = sống lâu đủ để thu hoạch đủ 40 hit Đỉnh.
- **Combo**: Bùa Trường Sinh (`longevity-talisman`) — Bùa bảo vệ linh khí Mộc lân cận không bị nhiễm khí, Đỉnh thu lợi vì linh khí Mộc sống lâu hơn = nhiều hit đồng hành hơn. Bình Cam Lộ Xanh (`green-nectar-vase`) — Bình chuyển linh lực Hoả → Mộc, sau đó Mộc chạm Đỉnh kích đồng hành hit; board Hoả-heavy vẫn đóng góp quality cho linh đan Mộc qua Bình.
- **Anti-synergy**: build "Bùng Bạo" single-hit — 1 hit lớn không đủ để kích nhiều đồng hành hit từ Đỉnh (chỉ 1–2 hit/ván); Đỉnh cần board nhiều hit nhỏ liên tục.
