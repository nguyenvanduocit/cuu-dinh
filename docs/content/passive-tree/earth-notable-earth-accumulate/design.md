---
id: earth-notable-earth-accumulate
ten: Tích Thổ Bộc Phá
type: notable
element: earth
cluster: earth-notable
pos_x: -346.94
pos_y: -149.44
connections: [earth-keystone-heavy-mountain, earth-notable-junction-earth, earth-notable-earth-tortoise, earth-small-earth-affix-1]
---

# Tích Thổ Bộc Phá (`earth-notable-earth-accumulate`)

## Effect

Mỗi 10 hit lên linh khí Thổ → next hit +100% charge spike

## Cơ chế

Counter riêng đếm tích lũy hit lên bất kỳ linh khí Thổ nào. Hit thứ 10 → linh lực kế tiếp nhận +100% charge bonus (cộng vào charge_factor §7.3, trên nền base +20%/hop và bonus từ Tích Thổ I/II). Spike này có thể đẩy charge_factor vượt cap +200% nếu tích đủ hop — cần kiểm tra cap logic khi implement.

## Synergy

Notable chủ lực của earth-charge build. Dẫn thẳng tới keystone `earth-keystone-heavy-mountain`. Pair với `earth-small-earth-charge-1/2` (+40%/hop Thổ) để spike còn lớn hơn. Cộng hưởng Đạo Phái Vô Cực (chaos amp ×2) — random spike có thể one-shot phẩm cấp linh đan.
