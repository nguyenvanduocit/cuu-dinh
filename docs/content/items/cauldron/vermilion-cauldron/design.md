---
id: vermilion-cauldron
ten: Đỉnh Đỏ Son
type: cauldron
element: fire
rarity: Magic
dropPool: Uncommon
tags: [fire, aura]
---

# Đỉnh Đỏ Son (`vermilion-cauldron`)

## Lược tả

Đỉnh Hoả tăng intensity cho linh lực Hoả đang trên đường tới linh đan — buff áp tại điểm va chạm với đan, không phải trên board. Linh khí tối ưu hoá output cuối cùng, đặt gần đan để tận dụng tối đa.

## Implicit

Linh lực `fire` chạm vào Đỉnh Đỏ Son: nhận +35% intensity flat vào `player_mult` (§2 Layer 2). Bonus áp ngay trên linh lực, giữ nguyên cho va chạm tiếp theo (thường là va chạm với linh đan).

**Khác với `vermilion-bird-statue`**: tượng buff linh *khí* gần đó; đỉnh buff trực tiếp linh *lực* Hoả khi chạm vào đỉnh. Đỉnh đặt trên đường đi của linh lực; tượng đặt gần cluster linh khí Hoả.

**Vai trò vật lý**: cauldron static, kích thước trung bình-lớn. Vị trí tối ưu: trên đường linh lực đi từ linh khí cuối cùng trong chain tới linh đan — "last boost" trước khi hit.

## Affix pool

Bias AffixTag `elemental` + `offensive` + `sustain`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `elemental` | Tăng intensity bonus Hoả | +35% → +45% (T3) |
| `offensive` | Convert sang Hoả khi chạm | Linh lực không phải Hoả chạm vào đỉnh cũng bị convert → Hoả (như `red-lantern` nhưng chỉ dành cho linh lực đang tới đỉnh) |
| `sustain` | Slow burst | Linh lực Hoả chạm đỉnh: slow 10% velocity nhưng +5% intensity thêm (đánh đổi tốc độ lấy power) |
| `aoe` | Splash Hoả nhỏ | Sau khi linh lực Hoả pass qua đỉnh, toả sóng nhỏ +5% intensity cho linh lực Hoả khác trong ±50px |

Tags `fire, aura` → AffixTag chủ đạo `elemental, offensive`.

## Build role

**Archetype**: Hoả precision — tối ưu hoá hit cuối cùng vào linh đan, không phải scatter hit trên board. Đặt gần đan để mỗi linh lực Hoả tới đan đều qua đỉnh.

**Đạo Phái**: **Linh Sơn** (`spirit-mountain`) — echo Hoả cũng hưởng +35% nếu echo đi qua đỉnh trước khi chạm đan; **Cửu Âm** (`nine-yin`) — intensity Hoả cao + đỉnh buff = damage spike mỗi hit.

**Combo xác nhận**:
- `vermilion-cauldron` + `vermilion-bird-statue`: đỉnh buff linh lực, tượng buff linh khí gần — stack không chồng chéo (khác source trong Layer 2), cộng tuyến tính.
- `vermilion-cauldron` + `red-lantern`: đèn convert về Hoả, đỉnh khuếch đại Hoả — pipeline rõ ràng: convert → buff → hit đan.
- `vermilion-cauldron` + set **Tứ Linh** (`four-spirits`): +30% set bonus + 35% đỉnh = Layer 2 rất cao, phối hợp T14+ endgame Hoả.

**Anti-synergy**: build Ngũ Hành (`wuxing`) multi-element — đỉnh chỉ buff Hoả, các linh lực nguyên tố khác trong cycle không được hưởng, lãng phí slot.
