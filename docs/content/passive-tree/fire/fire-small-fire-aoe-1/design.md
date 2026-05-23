---
id: fire-small-fire-aoe-1
ten: Tản Hoả I
type: small
element: fire
cluster: fire-small
pos_x: -154.62
pos_y: 202.16
connections: [fire-small-fire-aoe-2, fire-small-fire-mult-1, fire-small-blaze-3, fire-start]
---

# Tản Hoả I (`fire-small-fire-aoe-1`)

## Effect

+10% AOE radius Hoả va chạm

## Cơ chế

Lớp **aoe-radius** +10%, additive với aoe-2. Áp cho mọi va chạm Hoả có AOE component.

## Synergy

Bước đầu nhánh AOE, kết nối `fire-small-blaze-3` và `fire-small-fire-mult-1`. Lấy kèm aoe-2 (+10% nữa) trước khi lên `fire-notable-phoenix` (+30%) để tổng AOE radius +50% thuần từ small nodes.
