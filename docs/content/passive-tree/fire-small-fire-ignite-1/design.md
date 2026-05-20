---
id: fire-small-fire-ignite-1
ten: Cháy I
type: small
element: fire
cluster: fire-small
pos_x: -151.4
pos_y: 236.98
connections: [fire-small-fire-ignite-2, fire-small-fire-vel-1, fire-small-blaze-1]
---

# Cháy I (`fire-small-fire-ignite-1`)

## Effect

+10% xác suất gây cháy 3s (tick 5% intensity/s)

## Cơ chế

Lớp **ignite-chance**: mỗi Hoả hit roll thêm 10% xác suất trigger cháy 3s, tick 5% intensity/s. Additive với ignite-2. Độc lập với cháy đảm bảo của `fire-keystone-raging-fire`.

## Synergy

Bước đầu ignite-build, nối `fire-small-blaze-1` và `fire-small-fire-vel-1`. Lấy kèm ignite-2 (+10%) để đạt 20% base chance trước khi `fire-notable-blaze-heart` nhân tick ×1.5 và kéo dài +1s.
