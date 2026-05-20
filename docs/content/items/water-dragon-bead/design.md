---
id: water-dragon-bead
ten: Châu Thuỷ Long
type: bead
element: water
rarity: Magic
dropPool: Uncommon
tags: [water, chain]
---

# Châu Thuỷ Long (`water-dragon-bead`)

## Lược tả

Châu Thuỷ của Thanh Long — linh lực chạm vào không bounce mà nhảy ngay tới linh khí gần nhất trên board. Mỗi nhảy tính một chain hop, cộng dồn charge. Tối ưu hoá chain dài mà không cần căn góc.

## Implicit

Khi linh lực chạm vào Châu Thuỷ Long: thay vì bounce vật lý, nó **teleport** tới linh khí gần nhất (Euclidean distance) có `element` tương thích (ưu tiên Thuỷ hoặc Mộc — tương sinh §1; nếu không có thì gần nhất bất kỳ). Teleport tính là 1 chain hop → `charge_count += 1` → +20% intensity (§2 Layer 1).

Velocity tại điểm đến: kế thừa magnitude của linh lực trước khi nhảy, hướng = vector từ bead tới linh khí đích.

**Vai trò vật lý**: bead static. Hiệu quả nhất khi đặt giữa board — từ bead, linh lực tự tìm đường đến linh khí nào đó, không cần player căn thẳng.

## Affix pool

Bias AffixTag `chain` + `elemental` + `speed`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `chain` | Tăng charge bonus khi nhảy | Mỗi chain hop qua bead: +30% thay vì +20% intensity (§2 Layer 1 bonus) |
| `elemental` | Ưu tiên nhảy về Thuỷ | Bead chỉ nhảy tới linh khí Thuỷ/Mộc — không nhảy linh tinh khi không có đích tương sinh |
| `speed` | Tăng velocity sau nhảy | Linh lực đến đích: velocity +15% so với velocity trước nhảy |
| `crit` | Chain crit bonus | Sau 3 hop liên tiếp qua bead: hit tiếp theo có +10% crit chance thêm (§4) |

Tags `water, chain` → AffixTag chủ đạo `chain, elemental`.

## Build role

**Archetype**: chain maximiser / Thuỷ Long — xây chain dài tự động, tích charge mà không cần board layout chính xác. Phối hợp với build charge-heavy để intensity spike cuối chain.

**Đạo Phái**: **Cửu Âm** (`nine-yin`) — Thuỷ nặng, chain hop Thuỷ sinh Mộc (§1) kích intensity; **Linh Sơn** (`spirit-mountain`) — echo theo chain hop, nhân số lần nhảy.

**Combo xác nhận**:
- `water-dragon-bead` + `spirit-lotus-flower`: bead nhảy tới hoa → hoa slow +20% intensity → bead nhảy tiếp → intensity tích dần qua từng hop.
- `water-dragon-bead` + `azure-dragon-bead` (nếu có): hai bead Thanh Long — linh lực nhảy giữa hai bead, tích charge × 2 hop/vòng, intensity leo nhanh.
- `water-dragon-bead` + `sea-dragon-talisman`: kích bùa Thuỷ → toàn board Thuỷ → bead chain chỉ nhảy Thuỷ-sang-Thuỷ → chuỗi đồng hành +10% quality liên tục (§2).
- Set **Ngũ Hành** (`wuxing`) 5-cycle: bead nhảy giúp linh lực tự tìm đúng nguyên tố tiếp theo trong cycle — chain setup trở nên tự động hơn nhiều.

**Anti-synergy**: build precision cần kiểm soát đường đi chính xác — bead tự chọn đích gần nhất, có thể nhảy sai mục tiêu; dùng `silver-star-fan` redirect thay thế.
