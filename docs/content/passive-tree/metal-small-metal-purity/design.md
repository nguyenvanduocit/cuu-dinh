---
id: metal-small-metal-purity
ten: Thuần Kim
type: small
element: metal
cluster: metal-small
pos_x: 51.76
pos_y: -327.15
connections: [metal-notable-junction-metal, metal-small-metal-affix-1, metal-small-metal-anchor-1]
---

# Thuần Kim (`metal-small-metal-purity`)

## Effect

+12% intensity nếu toàn bộ linh khí trong 150px là Kim

## Cơ chế

Điều kiện kiểm tra real-time: nếu trong bán kính 150px từ center board không có linh khí nào non-Kim, áp +12% intensity additive lên mọi hit Kim. Một linh khí non-Kim duy nhất trong range là đủ để mất bonus — điều kiện nghiêm ngặt.

## Synergy

Terminal node nhánh đông, kết nối `metal-notable-junction-metal` → `metal-small-metal-affix-1` → `metal-small-metal-anchor-1`. Archetype mono-Kim bắt buộc lấy node này — +12% intensity lớn nhất trong cluster small Kim. Kết hợp `metal-small-metal-anchor-1` (+5% proximity) và `metal-small-metal-anchor-2` (+5% proximity) cho tổng +22% intensity proximity bonus khi board thuần Kim. Khó maintain khi lấy keystone cross-element — chọn một trong hai.
