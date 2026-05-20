---
id: green-nectar-vase
ten: Bình Cam Lộ Xanh
type: vase
element: wood
rarity: Magic
dropPool: Uncommon
tags: [wood, convert, counter]
---

# Bình Cam Lộ Xanh (`green-nectar-vase`)

## Lược tả

Pháp bảo Mộc hệ dạng bình — chuyển hoá linh lực Hoả nguy hiểm thành Mộc an toàn khi đi qua. Vai trò vật lý: **bộ chuyển đổi nguyên tố**; đặt trên đường linh lực Hoả đang hướng vào linh đan Mộc (tương khắc Hoả khắc Kim, nhưng Hoả→Mộc tương sinh nếu chuyển đúng). Cứu board khỏi hit tương khắc mà không cần thay linh khí.

## Implicit

Khi linh lực **Hoả** va chạm Bình Cam Lộ Xanh: linh lực chuyển nguyên tố thành **Mộc**, giữ nguyên intensity và `charge_count`. Linh lực Mộc tiếp tục hành trình từ điểm va chạm. Linh lực nguyên tố khác (không phải Hoả) khi va chạm: nảy bình thường, không bị convert.

- Convert xảy ra trước khi tính tương sinh/khắc với linh khí va chạm — linh lực đã là Mộc khi rời Bình.
- Mộc→Hoả tương sinh (§2): linh lực Mộc sau convert đến linh đan Hoả gây +stability heal (+0.05×intensity). Mộc khắc Thổ: -40% intensity penalty (§2).
- 1 linh lực chỉ bị convert 1 lần/Bình (không loop).

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `convert` | Convert thêm nguyên tố Kim→Mộc hoặc Thổ→Mộc (T2: convert tất cả non-Mộc) |
| `offensive` | Linh lực sau convert nhận +20% intensity "cam lộ tẩy trần" |
| `sustain` | Convert kích heal +5 stability linh đan Mộc gần nhất (tương sinh Mộc→Hoả §2 — Bình làm trung gian) |
| `counter` | Linh lực convert xong có +10% crit chance cho hit đầu tiên sau Bình |
| `chain` | Linh lực convert nhận +1 charge_count bổ sung (§2 chain +20%/hop) |

## Build role

**Element**: Mộc. **Archetype**: element-correction / sustain-enabler / anti-counter.

- **Vai trò cốt lõi**: giải quyết vấn đề tương khắc mà không cần thay linh khí — đặt 1 Bình trước linh đan để biến mọi linh lực Hoả đang bay đến thành Mộc. Đặc biệt giá trị khi dùng bộ linh khí đa nguyên tố nhưng linh đan là Mộc.
- **Đạo Phái khớp nhất**: **Thái Cực** (`tai-chi`) — board đa nguyên tố của Thái Cực dễ sinh ra tương khắc; Bình Cam Lộ Xanh là "bộ lọc" tự động chuyển Hoả→Mộc mà không cần `tai-chi-notable-element-convert` tốn cooldown. **Linh Sơn** (`spirit-mountain`) — echo Hoả spawn từ linh khí Hoả (10% chance, §spirit-mountain); nếu echo Hoả đang hướng đến linh đan Mộc, Bình convert echo → Mộc tương sinh.
- **Combo**: Jade Cauldron (`jade-cauldron`) + Bình Cam Lộ Xanh — Bình đảm bảo linh lực đến Đỉnh Lục Bảo là Mộc (tương sinh đồng hành); Đỉnh tặng +15% quality từ đồng hành hit. Bùa Trường Sinh (`longevity-talisman`) — Bình chuyển linh lực nguy hiểm thành Mộc an toàn, Bùa bảo vệ linh khí Mộc lân cận không bị nhiễm khí.
- **Anti-synergy**: board thuần Mộc — không có linh lực Hoả để convert, Bình không có tác dụng (chỉ là linh khí thông thường).
