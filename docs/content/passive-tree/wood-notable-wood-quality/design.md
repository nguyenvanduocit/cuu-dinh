---
id: wood-notable-wood-quality
ten: Mộc Tinh Hoá
type: notable
element: wood
cluster: wood-notable
pos_x: 192.84
pos_y: 324.83
connections: [wood-keystone-proliferate, wood-notable-junction-wood, wood-notable-azure-dragon, wood-small-wood-charge-2]
---

# Mộc Tinh Hoá (`wood-notable-wood-quality`)

## Effect

+25% quality gain trên linh đan Mộc khi stability ≥ 80%

## Cơ chế

Conditional multiplier: nếu `linh_dan.stability ≥ 80%` tại thời điểm linh lực chạm linh đan Mộc, quality gain của hit đó nhân thêm 25% (§7.2: `linh_dan.quality += intensity * coeff * 1.25`). Mất hiệu lực ngay khi stability tụt xuống dưới 80%.

## Synergy

Định nghĩa build "Mộc quality-rush" — giữ stability luôn trên 80% để liên tục hưởng bonus. Cặp bắt buộc với `wood-notable-longevity` (tăng cap và regen để duy trì threshold), `wood-small-wood-purity` (bonus stability max khi mono-Mộc), `wood-small-wood-heal-1/2/3` (heal per tương sinh hit để ổn định stability). Kết nối trực tiếp tới keystone `wood-keystone-proliferate` — build Sinh Sôi có thể dùng node này để thăng phẩm nhanh hơn khi hai viên đồng thời hit linh đan Mộc.
