---
id: nectar-burst
ten: Cam Lộ Bùng Nổ
category: prefix
tags: [offensive, elemental]
element: water
weight: 60
---

# Cam Lộ Bùng Nổ (`nectar-burst`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% intensity Thuỷ; khi linh lực Thuỷ chạm đan Hoả: +15% bonus |
| T2 | +28% intensity Thuỷ; chạm đan Hoả +22% bonus |
| T3 | +38% intensity Thuỷ; chạm đan Hoả +30% bonus |

## Tương tác

+38% intensity Thuỷ áp vào **player_mult** (§7.3 additive), chỉ khi linh lực element = `water`. Khi linh lực Thuỷ chạm đan Hoả: element là tương khắc (Thuỷ khắc Hoả theo §7.1) → công thức gây `stability -= intensity * 0.40`. Bonus +30% từ affix áp thêm vào intensity trước khi tính damage: thực ra là cú double-punch tương khắc mạnh. Áp dụng cho linh lực Thuỷ từ bất kỳ linh khí nào trên board, không chỉ linh khí mang affix này.

## Build & Synergy

Roll trên linh khí `element: water`. Cốt lõi cho build counter-Hoả đan hoặc khai thác Hoả đan của opponent (boss Dị Tượng Hoả):
- Kết hợp `nemesis` (+damage tương khắc chung) — stack trên tương khắc Thuỷ→Hoả.
- `nectar-recovery` (tương sinh heal) + affix này: tạo board vừa destroy Hoả đan vừa heal Mộc đan cùng lúc.
- Đạo Phái Thuỷ (chain + flow) tận dụng tốt nhất — passive tree có node tăng tương khắc ratio.
