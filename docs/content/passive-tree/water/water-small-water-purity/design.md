---
id: water-small-water-purity
ten: Thuần Thuỷ
type: small
element: water
cluster: water-small
pos_x: 327.13
pos_y: -51.86
connections: [water-notable-junction-water, water-small-water-charge-2, water-small-water-spread-1]
---

# Thuần Thuỷ (`water-small-water-purity`)

## Effect

+1 max chain hop nếu toàn bộ linh khí trong 150px là Thuỷ

## Cơ chế

Chain layer (conditional count): +1 max hop Thuỷ chỉ khi không có linh khí phi-Thuỷ trong bán kính 150px. Check per-launch, không real-time.

## Synergy

Conditional node — hiệu quả nhất trong build mono-Thuỷ. Nối sang `water-notable-junction-water` và `water-small-water-charge-2`; nếu board thuần Thuỷ, +1 hop miễn phí cộng thêm vào chuỗi Tăng Bậc và `water-notable-water-high-tide`.
