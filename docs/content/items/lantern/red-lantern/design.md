---
id: red-lantern
ten: Đèn Lồng Đỏ
type: lantern
element: fire
rarity: Common
dropPool: Common
tags: [fire, convert]
---

# Đèn Lồng Đỏ (`red-lantern`)

## Lược tả

Đèn lồng Hoả tĩnh treo trên board — mọi linh lực đi qua đều bị chuyển thành Hoả tức thì. Linh khí convert nguyên tố đơn giản và rẻ nhất, nền tảng của mọi build Hoả thuần.

## Implicit

Khi linh lực chạm vào đèn, thuộc tính `element` bị ghi đè thành `fire` trước khi tính `element_factor` trong `collision_linh_luc_vs_linh_dan()` (§2). Linh lực rời đèn mang `element = fire` cho mọi va chạm tiếp theo trong chain.

**Vai trò vật lý**: static body, không thay đổi `velocity` (§2 Layer 1) hay `charge_count` — chỉ ghi đè element. Linh lực Vô Cực (`void`) vẫn bị convert; Vô Cực neutral (§1) bị thay bằng Hoả.

## Affix pool

Bias AffixTag `elemental` + `utility`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `elemental` | Tăng hiệu ứng convert Hoả | Khi linh lực đã là Hoả đi qua, +5% intensity thêm (đồng hành §2: +10% → stack) |
| `utility` | Mở rộng vùng convert | Bán kính cảm ứng +20px → linh lực đi gần cũng bị kéo về Hoả |
| `aoe` | Xung Hoả khi convert | Sau convert, toả sóng nhiệt nhỏ ±40px +2% intensity các linh lực lân cận |
| `sustain` | Hồi stability vi mô | Linh lực Hoả rời đây: +0.01 stability/hit (tích luỹ qua nhiều hit) |

Tags `fire, convert` → AffixTag chủ đạo `elemental, utility`.

## Build role

**Archetype**: Hoả thuần — convert toàn board về `fire`, khai thác tương sinh Mộc→Hoả và đồng hành Hoả→Hoả liên tục (§1).

**Đạo Phái**: **Linh Sơn** (`spirit-mountain`) — echo hồi vang kế thừa nguyên tố sau convert, nhân số lần hit Hoả mà không cần thêm linh khí.

**Combo xác nhận**:
- `red-lantern` + `vermilion-cauldron`: linh lực sau convert đi vào Đỉnh Đỏ Son nhận +35% intensity Hoả (§2 Layer 2 `player_mult`), sau đó chạm đan = đồng hành +10% quality.
- `red-lantern` + `vermilion-bird-statue`: aura +25% intensity cho linh khí Hoả ±100px — đèn cấp nguồn Hoả, tượng khuếch đại các linh khí Hoả xung quanh.
- Set **Tứ Linh** (`four-spirits`) 4-piece +30% intensity element match — đèn đảm bảo mọi linh lực là Hoả để kích set bonus.

**Anti-synergy**: set **Ngũ Hành** (`wuxing`) yêu cầu đa nguyên tố xoay vòng trong chain — convert về Hoả thuần phá cycle, tránh dùng chung.
