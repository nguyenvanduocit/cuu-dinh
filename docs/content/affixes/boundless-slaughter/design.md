---
id: boundless-slaughter
ten: Vô Lượng Cuồng Sát
category: prefix
tags: [offensive]
weight: 100
---

# Vô Lượng Cuồng Sát (`boundless-slaughter`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% intensity; +2% mỗi linh khí trên board (max 8 linh khí × 2% = +16% bonus) |
| T2 | +28% intensity; +3% mỗi linh khí (max +24%) |
| T3 | +38% intensity; +4% mỗi linh khí (max +32%) |

## Tương tác

Bonus intensity áp vào **player.intensity_multiplier** (§7.3 Lò affix layer). Tổng: base T1 +20% + scaling +2% × N linh khí (max 8 linh khí → +16% bonus) = tối đa +36% ở T1, +52% ở T2, +70% ở T3 khi board full 8 linh khí. Tính linh khí hiện diện trên board tại thời điểm linh lực va chạm linh đan — không tính linh khí đã vỡ. Không phân biệt nguyên tố.

## Build & Synergy

Roll trên mọi item base type. Scale với **board density** → mạnh nhất khi giữ nhiều linh khí:
- `armor-break` (AOE defense reduce per linh khí lân cận): cả hai scale với số lượng linh khí → đặt linh khí nhiều = `boundless-slaughter` mạnh hơn + `armor-break` coverage rộng hơn.
- `bell-push-wave` / `attraction`: quản lý vị trí linh khí — giữ nhiều linh khí sống trên board.
- **Chú ý**: map mod "Huyết Sát" (T15+, §7.4) làm vỡ linh khí per hit → giảm board density → giảm scaling. Cần keystone phòng durability linh khí khi dùng `boundless-slaughter` ở T15+.
- Đạo Phái **Thổ** (bền, nhiều linh khí sinh tồn): home build cho board-density affix.
