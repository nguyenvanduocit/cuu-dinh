---
id: white-tiger-bead
ten: Châu Bạch Hổ
type: bead
element: metal
rarity: Magic
dropPool: Uncommon
tags: [metal, charge, pierce]
---

# Châu Bạch Hổ (`white-tiger-bead`)

## Lược tả

Châu Kim của Bạch Hổ — hấp thụ 3 linh lực Kim liên tiếp, sau đó phun ra một luồng Kim châm xuyên thẳng piercing. Linh khí charge-and-release: tích năng rồi bung một phát mạnh.

## Implicit

Bead có 3 charge slot. Mỗi linh lực `metal` chạm vào: bị hấp thụ (biến mất), bead tích `charge_count` của linh lực đó. Khi đủ 3 lần hấp thụ: bead tự động phun ra **1 linh lực Kim piercing** với:
- `velocity` = trung bình velocity của 3 linh lực đã hấp thụ × 1.3
- `charge_count` = tổng charge_count của 3 linh lực + 1 hop bonus
- `element = metal`
- **Piercing**: linh lực xuyên qua tất cả linh khí trên đường đi (không bounce), ghi nhận va chạm với mỗi linh khí nó xuyên qua (tính hit + charge)

Linh lực không phải Kim: đi xuyên qua bead, không bị hấp thụ.

**Vai trò vật lý**: bead dynamic — có trạng thái (0/3, 1/3, 2/3, 3/3 filled). Visual indicator hiển thị charge level.

## Affix pool

Bias AffixTag `chain` + `offensive` + `crit`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `offensive` | Tăng velocity multiplier | Velocity phun: ×1.3 → ×1.5 (T3) |
| `crit` | Phun piercing có crit bonus | Linh lực Kim piercing: +20% crit chance thêm (§4) |
| `chain` | Giảm charge threshold | Cần 2 lần hấp thụ thay vì 3 (T3 affix — phun nhanh hơn) |
| `elemental` | Chuyển element sau phun | Linh lực Kim piercing sau khi xuyên qua 2+ linh khí: convert element sang Thổ (Kim sinh Thuỷ nhưng đây là Thổ sinh Kim nghịch — mechanic đặc biệt) |

Tags `metal, charge, pierce` → AffixTag chủ đạo `offensive, crit, chain`.

## Build role

**Archetype**: Kim burst / Bạch Hổ tổ hợp — tích năng rồi bung một phát Kim piercing cực mạnh. Phối hợp tốt nhất với `white-tiger-sword` và `white-tiger-statue` thành bộ Bạch Hổ Kim.

**Đạo Phái**: **Cửu Âm** (`nine-yin`) — intensity Kim cao + piercing xuyên nhiều linh khí = mỗi hit đều được §2 tính đầy đủ; **Hư Vô** (`void`) — build Vô Cực dùng bead để inject burst Kim vào chain Vô Cực.

**Combo Bạch Hổ xác nhận**:
- `white-tiger-bead` + `white-tiger-statue` (aura +15% intensity Kim ±100px): aura buff các linh khí Kim trong range — linh lực Kim nạp vào bead đã có intensity cao hơn, piercing phun ra thừa hưởng.
- `white-tiger-bead` + `white-tiger-sword` (split ±30°): split từ kiếm → 2 luồng Kim → cả hai nạp vào bead — tốc độ charge gấp đôi (2 linh lực Kim/pha thay vì 1).
- `white-tiger-bead` + `silver-star-fan`: fan redirect Kim vào đúng bead, đảm bảo 3 hit nạp đủ không bị lệch.
- Set **Tứ Linh** (`four-spirits`): Bạch Hổ là 1 tượng của bộ — `white-tiger-statue` làm trụ cột, bead + kiếm là satellite Kim.

**Anti-synergy**: build multi-element — bead chỉ hấp thụ Kim; board thiếu linh lực Kim thường xuyên → bead không nạp được, phí slot.
