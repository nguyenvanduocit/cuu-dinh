---
id: fierce-wave
ten: Sóng Cuồng Nha
category: suffix
tags: [aoe, utility]
weight: 100
---

# Sóng Cuồng Nha (`fierce-wave`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Va chạm tạo sóng đẩy 40px; linh khí bị đẩy không mất durability |
| T2 | Sóng đẩy 60px |
| T3 | Sóng đẩy 80px; sóng kéo linh lực khác về phía linh đan thêm 20px |

## Tương tác
Sóng đẩy là physics impulse — không thay đổi element hay charge_factor, chỉ thay đổi vector. Linh khí bị đẩy không mất durability (explicit trong T1) — bảo vệ board khỏi Huyết Sát mod (§10, linh khí mất durability/hit). T3 pull 20px về phía linh đan: có thể kéo linh lực đang "miss" vào hit zone (~80px radius) của linh đan — tăng hit rate gián tiếp. Pull và push xảy ra cùng hit.

## Build & Synergy
Roll trên drum, bell, statue (tag `aoe, utility`). Cặp với `drum-sound-wave` (implicit drum, sóng âm đẩy) để double-wave coverage — fierce-wave push/pull targeted, drum-sound-wave push random. T3 pull về linh đan mạnh nhất khi linh đan ở bottom-center và board rộng (Cổ Vật **Bản Đồ Sơn Hà** +50% board size). Huyết Sát map mod (linh khí mất durability/hit) — fierce-wave T1 bảo vệ linh khí khỏi mất durability khi bị đẩy. Đạo Phái **Linh Sơn** (echo linh lực 10%) synergy với pull T3.
