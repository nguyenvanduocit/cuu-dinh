---
id: anchored
ten: Cố Định
category: suffix
tags: [defensive]
weight: 100
---

# Cố Định (`anchored`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh khí không bị nhiễm khí 3s sau khi bị va chạm |
| T2 | Linh khí không bị nhiễm khí 4s sau va chạm |
| T3 | Linh khí không bị nhiễm khí 5s; 20% chance reset timer khi bị hit lại |

## Tương tác

Cơ chế thuần phòng thủ — không can thiệp vào intensity formula (§7.2). Ngăn linh khí bị "nhiễm khí" (§7.4: bị hit nhiều bởi nguyên tố khác → đổi element tạm), giữ element gốc ổn định. T3 +20% chance reset timer khi bị hit lại giúp duy trì bảo vệ trên board nhiều linh lực. Không stack với múltiple `anchored` trên cùng linh khí — lấy tier cao nhất.

## Build & Synergy

Roll trên mọi item base type. Cần nhất khi:
- Board có nhiều linh lực đa nguyên tố (vd pháp trận `Hỗn Nguyên`) — nhiễm khí sẽ phá chain tương sinh.
- Build tương sinh strict (vd Thuỷ→Mộc chain): mất element = mất toàn bộ bonus tương sinh (§7.2). `anchored` là bảo hiểm.
- Kết hợp `charm-seal-ward` (phong ấn area-wide) + `anchored` (per-linh-khí persistent) = lớp phòng thủ kép.
- Ít giá trị hơn trên board Void/elementless vì nhiễm khí không ảnh hưởng build không phụ thuộc element.
