---
id: fire-small-fire-ignite-dur
ten: Hoả Dư
type: small
element: fire
cluster: fire-small
pos_x: -170.77
pos_y: 225.41
connections: [fire-small-fire-anchor-1, fire-small-fire-ignite-2, fire-small-fire-mult-1, fire-small-blaze-3]
---

# Hoả Dư (`fire-small-fire-ignite-dur`)

## Effect

+1s duration cháy

## Cơ chế

Lớp **ignite-duration**: kéo dài mọi instance cháy thêm 1s (base 3s → 4s; kèm `fire-notable-blaze-heart` → 5s). Không thay đổi tick rate hay damage mỗi tick.

## Synergy

Multiplier hiệu quả cho toàn ignite-build: 1s thêm = thêm 1 lần tick 5% intensity/s (×1.5 nếu đã có blaze-heart). Đứng giữa `fire-small-fire-anchor-1`, `fire-small-fire-ignite-2`, `fire-small-fire-mult-1`, `fire-small-blaze-3` — vị trí trung tâm, nên lấy sớm.
