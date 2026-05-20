---
id: keystone-wuwei
ten: Vô Vi
type: keystone
cluster: hub-void-keystone
pos_x: 0
pos_y: -80
connections: [hub-void-3, hub-void-4]
---

# Vô Vi (`keystone-wuwei`)

## Effect

KEYSTONE: Banh tự rơi (no player intervention), +50% loot drop chance. Trade-off: -30% intensity tất cả.

## Cơ chế

Khi Vô Vi active, input điều hướng banh bị vô hiệu hoàn toàn — banh rơi theo physics thuần (gravity + collision). Drop weight của mọi item trong loot table nhân ×1.50. Intensity của mọi hit (mọi element, mọi nguồn) nhân 0.70 trước khi áp công thức damage. −30% intensity là multiplier cuối cùng sau tất cả buff/debuff khác.

## Synergy

Archetype **Vô Vi Farmer**: hy sinh control và damage để loot nhiều hơn — phù hợp với run cày nguyên liệu thay vì clear speed. Hội tụ tại `hub-void-keystone` trên trục `hub-void-3` và `hub-void-4`. −30% intensity khiến mọi crit/charge scaling gần như vô nghĩa — không kết hợp với bất kỳ node Kim crit/intensity nào trong cluster `metal-notable`. Unique `dao-quan-void` (Đạo Quán Vô Vi — +20% drop weight mỗi Đạo Quán upgrade) stack cộng gộp với +50% cho tổng lên đến +70%+.
