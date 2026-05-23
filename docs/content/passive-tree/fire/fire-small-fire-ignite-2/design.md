---
id: fire-small-fire-ignite-2
ten: Cháy II
type: small
element: fire
cluster: fire-small
pos_x: -161.61
pos_y: 232.07
connections: [fire-small-fire-ignite-1, fire-small-fire-ignite-dur, fire-small-fire-vel-2, fire-small-blaze-2]
---

# Cháy II (`fire-small-fire-ignite-2`)

## Effect

+10% xác suất gây cháy 3s (tick 5% intensity/s)

## Cơ chế

Lớp **ignite-chance** +10%, additive với ignite-1. Nối `fire-small-fire-ignite-dur` — tự nhiên đứng sau khi lấy duration.

## Synergy

Nút thứ hai chuỗi ignite; kết nối `fire-small-fire-ignite-dur`, `fire-small-fire-vel-2`, `fire-small-blaze-2`. Sau khi lấy đủ ignite-1 + ignite-2 + ignite-dur, build có 20% chance + 4s duration base — đủ ổn định trước khi vào `fire-notable-blaze-heart`.
