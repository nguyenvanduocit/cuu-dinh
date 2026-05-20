---
id: fire-small-fire-purity
ten: Thuần Hoả
type: small
element: fire
cluster: fire-small
pos_x: -234.17000000000002
pos_y: 234.23999999999998
connections: [fire-notable-junction-fire, fire-small-fire-affix-1, fire-small-fire-charge-1]
---

# Thuần Hoả (`fire-small-fire-purity`)

## Effect

+15% AOE radius nếu toàn bộ linh khí trong 150px là Hoả

## Cơ chế

Lớp **conditional-aoe**: kiểm tra runtime — nếu không có linh khí phi-Hoả trong bán kính 150px xung quanh linh đan, +15% AOE radius kích hoạt. Điều kiện mất ngay khi board hỗn hợp.

## Synergy

Reward cho cấu hình mono-Hoả. Nối `fire-notable-junction-fire`, `fire-small-fire-affix-1`, `fire-small-fire-charge-1` — nằm trên hành lang junction. Kết hợp `fire-notable-phoenix` (+30%) và aoe-1/aoe-2 (+20%) để tổng AOE radius +65% trong điều kiện thuần Hoả.
