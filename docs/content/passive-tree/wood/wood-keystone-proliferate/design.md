---
id: wood-keystone-proliferate
ten: Sinh Sôi
type: keystone
element: wood
cluster: wood-keystone
pos_x: 252.74
pos_y: 347.87
connections: [keystone-soul-spirit, wood-notable-wood-quality, wood-notable-life-engine, wood-notable-azure-dragon]
---

# Sinh Sôi (`wood-keystone-proliferate`)

## Effect

KEYSTONE: Mỗi 10s, linh lực Mộc đầu tiên spawn ra "thai" tách thành 2 viên. Trade-off: -15% intensity Mộc base.

## Cơ chế

Timer reset mỗi 10s tính từ đầu ván. Linh lực Mộc đầu tiên sau mỗi tick spawn thêm 1 bản sao cùng vị trí, cùng velocity vector, cùng element — hai viên độc lập trong physics simulation. Penalty -15% áp vào `player.intensity_multiplier` riêng cho Mộc, nhân trước mọi multiplier khác (§7.3). Quantity tăng gấp đôi bù cho intensity thấp hơn — build phải route cả hai viên đến linh đan để hoà vốn, hoặc dùng charge hop để lấy lại intensity.

## Synergy

Keystone định nghĩa archetype **Sinh Sôi** — tối ưu board rộng (`Bản Đồ Sơn Hà` unique, Thân +slot), linh khí chain dài để tích charge bù penalty. Kết hợp với `wood-notable-azure-dragon` (share +15% intensity trong 200px) để bù -15% base khi hai viên cùng đi qua cluster. `wood-notable-life-engine` giúp absorb stability damage khi routing hai viên không hoàn hảo. Pathway: `wood-notable-wood-quality` → `wood-notable-azure-dragon` → `wood-notable-life-engine` → keystone này tạo sub-build sustain Mộc hoàn chỉnh. Tránh ghép với Kim/Hoả crit (intensity thấp làm crit kém hiệu quả).
