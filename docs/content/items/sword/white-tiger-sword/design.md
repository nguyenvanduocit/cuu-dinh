---
id: white-tiger-sword
ten: Kiếm Cổ Bạch Hổ
type: sword
element: metal
rarity: Magic
dropPool: Uncommon
tags: [metal, split]
---

# Kiếm Cổ Bạch Hổ (`white-tiger-sword`)

## Lược tả

Kiếm Kim cổ đại của Bạch Hổ — cắt đôi linh lực Kim thành 2 đường, mỗi đường tỏa ±30°. Không phải nhân đôi sức mạnh — là nhân đôi coverage, phủ diện rộng hơn trên board Kim.

## Implicit

Linh lực `metal` chạm vào kiếm: tách thành **2 linh lực Kim con** toả góc ±30° từ hướng đang đi. Mỗi con:
- Kế thừa `element = metal`
- `velocity` = 80% velocity gốc (năng lượng chia đôi, giữ floor §3)
- `charge_count` = charge_count gốc (không reset — con kế thừa charge đã tích)

Linh lực không phải Kim: đi xuyên qua kiếm, không bị split.

**Vai trò vật lý**: sword static deflector, tạo fork điểm phân nhánh trong chain. Hai con đi theo 2 đường độc lập, mỗi con có thể tiếp tục tích charge riêng.

## Affix pool

Bias AffixTag `offensive` + `chain` + `aoe`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `offensive` | Tăng velocity con | 80% → 90% velocity mỗi con (T3) — ít hao velocity hơn khi split |
| `chain` | Con kế thừa +1 hop bonus | Mỗi con sau split nhận +1 `charge_count` thêm (tặng thêm 1 hop charge) |
| `aoe` | Tăng góc split | ±30° → ±45° (T3) — phủ rộng hơn, nhưng khó "ngắm" hơn |
| `elemental` | Convert con thứ 2 | Con thứ 2 convert sang Thổ (Kim sinh Thuỷ chain trong board nếu cần element khác) |

Tags `metal, split` → AffixTag chủ đạo `offensive, chain, aoe`.

## Build role

**Archetype**: Kim spread / Bạch Hổ tổ hợp — tăng số lượng linh lực Kim trên board mà không cần thêm spawn; phối hợp tốt nhất với `white-tiger-bead` để nạp 2 nhánh cùng lúc.

**Đạo Phái**: **Linh Sơn** (`spirit-mountain`) — echo kết hợp split = cấp số nhân số linh lực; **Cửu Âm** (`nine-yin`) — Kim intensity cao, mỗi con đều mạnh.

**Combo Bạch Hổ xác nhận**:
- `white-tiger-sword` + `white-tiger-bead`: split → 2 con Kim → cả hai nạp vào bead — charge speed × 2, phun piercing nhanh hơn.
- `white-tiger-sword` + `white-tiger-statue` (aura ±100px): aura buff kiếm (nếu kiếm là linh khí Kim trong range); hai con Kim rời kiếm đã có intensity cao hơn.
- `white-tiger-sword` + `silver-star-fan`: fan redirect 1 con Kim sang hướng khác sau split — tạo 2 đường Kim hoàn toàn tách biệt tới 2 đích khác nhau.
- `white-tiger-sword` + set **Tứ Linh** (`four-spirits`): kiếm là satellite Kim trong bộ Bạch Hổ — đặt cùng tượng và bead.

**Anti-synergy**: build single-big-hit (cần 1 linh lực intensity cực cao) — split làm loãng velocity con xuống 80%, khác với build tập trung 1 viên; tham khảo `void-sword` flat +50 thay thế.
