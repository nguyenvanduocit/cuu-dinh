---
id: yellow-sand-fan
ten: Quạt Hoàng Sa
type: fan
element: earth
rarity: Common
dropPool: Common
tags: [earth, slow, aoe]
---

# Quạt Hoàng Sa (`yellow-sand-fan`)

## Lược tả

Quạt Thổ tạo bão cát trong 2 giây — vùng bão cát slow tất cả linh lực đi qua 40%. Không phải slow 1 linh lực như hoa sen — mà là slow cả vùng, ảnh hưởng mọi linh lực trong AoE. Linh khí AoE control duy nhất trong bộ Thổ.

## Implicit

Khi linh lực chạm vào quạt: tạo **vùng bão cát** hình tròn bán kính 80px tại vị trí quạt, kéo dài **2 giây**. Mọi linh lực đi qua vùng bão cát: `velocity` giảm 40% (§2 Layer 1 velocity / VELOCITY_BASE — floor 0.1× vẫn giữ, §3). Bão cát tan sau 2s, quạt reset và có thể kích lại khi linh lực tiếp theo chạm vào.

**Cơ chế**: slow 40% mạnh hơn slow 25% của `spirit-lotus-flower`, nhưng không có exit intensity bonus. Đổi lấy AoE — nhiều linh lực bị slow cùng lúc trong 2s.

**Vai trò vật lý**: fan static deflector, tạo vùng slow temporary khi bị kích. Dùng để kiểm soát tốc độ toàn board, không phải boost intensity đơn.

## Affix pool

Bias AffixTag `aoe` + `speed` + `utility`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `aoe` | Tăng bán kính bão cát | 80px → 110px (T3) |
| `speed` | Tăng thời gian bão | 2s → 3s (T3) |
| `utility` | Bão cát convert | Linh lực bị slow trong bão nhận `element = earth` (Thổ hoá khi bị đất giữ) |
| `offensive` | Slow + intensity | Linh lực rời vùng bão: +15% intensity (nhỏ hơn hoa sen +20% nhưng áp AoE) |

Tags `earth, slow, aoe` → AffixTag chủ đạo `aoe, speed, utility`.

## Build role

**Archetype**: Thổ AoE control — kiểm soát tốc độ board, tạo thời gian để chain được setup hoàn chỉnh. Phù hợp build cần linh lực đi chậm để chain phức tạp không bị miss.

**Đạo Phái**: **Thái Cực** (`tai-chi`) — cân bằng, dùng quạt để làm chậm board trong khi setup chain tối ưu; **Linh Sơn** (`spirit-mountain`) — echo Thổ kích trong vùng slow → echo cũng slow, board kiểm soát tốt hơn.

**Combo xác nhận**:
- `yellow-sand-fan` + `yellow-earth-bead`: quạt slow linh lực 40% → linh lực đi chậm vào bead dừng 1s + 30% intensity — phối hợp tự nhiên Thổ AoE control + charge.
- `yellow-sand-fan` + `spirit-lotus-flower`: hai slow chồng nhau — quạt AoE slow 40%, hoa slow 25% thêm trên linh lực đang chậm (§3 floor bảo vệ); intensity tích dồn cực cao từ hai exit bonus.
- `yellow-sand-fan` (affix convert) + `yellow-qilin-statue`: linh lực bị convert sang Thổ trong bão → đồng hành Thổ→Thổ (§1 +10% quality) khi chạm đan Thổ; tượng tăng stability buffer.
- `yellow-sand-fan` + `water-dragon-bead`: bão slow toàn board → linh lực đi chậm vào bead → bead chain jump tới linh khí gần nhất; slow giúp player kiểm soát thứ tự chain tốt hơn.

**Anti-synergy**: build velocity-based intensity (cần `velocity / VELOCITY_BASE` × 2.0 để scale, §2 Layer 1) — slow 40% giảm velocity factor đáng kể, triệt tiêu velocity multiplier. Tránh kết hợp với build cần linh lực đi nhanh.
