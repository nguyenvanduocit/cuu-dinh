---
id: sword-pierce
ten: Kiếm Xuyên Phá
category: implicit
tags: [offensive, chain]
element: metal
compatibleItemTypes: [sword]
weight: 60
---

# Kiếm Xuyên Phá (`sword-pierce`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực Kim qua Kiếm bỏ qua 1 va chạm tường kế tiếp |
| T2 | Linh lực Kim qua Kiếm bỏ qua 1 va chạm tường + +15% intensity |
| T3 | Linh lực bất kỳ qua Kiếm bỏ qua 1 va chạm tường + +20% intensity; pierce next linh khí gây 50% sát thương phụ |

## Tương tác

Tác động vào **velocity_factor** gián tiếp — bỏ qua tường giữ nguyên momentum thay vì mất vận tốc qua phản xạ. T2 cộng 15% vào `player_intensity_multiplier` sau pierce. T3 mở rộng sang mọi element; pierce damage phụ 50% là hit độc lập áp dụng đủ damage formula lên linh khí bị xuyên. Không stack nhiều pierce charge — chỉ 1 charge tồn tại mỗi lần.

## Build & Synergy

Roll trên **sword** (implicit). Hiệu quả nhất với board layout nhiều tường hẹp — pierce cho phép linh lực đi đường thẳng thay vì bật góc xấu. Kết hợp `thunder-accelerate` (velocity cao → pierce giữ momentum lớn hơn) và `twin-flying-blade` (linh lực phụ cũng hưởng pierce T3). Đạo Phái Kim — T3 element-neutral nhưng Kim path tận dụng tối đa qua `wuxing-counter-power`.
