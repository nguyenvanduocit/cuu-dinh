---
id: accelerate-box
ten: Tăng Tốc Hợp
category: suffix
tags: [speed]
weight: 100
---

# Tăng Tốc Hợp (`accelerate-box`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực qua đây: +20% velocity trong 1s |
| T2 | +28% velocity trong 1.5s |
| T3 | +38% velocity trong 2s; velocity bonus stacks với charge_factor |

## Tương tác

Kích hoạt tại lớp **velocity_factor** (§7.2 intensity formula) — bonus +velocity trực tiếp nhân vào công thức intensity. T3 note "stacks với charge_factor" là additive trong cùng tick: `intensity = velocity_factor(+38%) × charge_factor × player_mult`. Không có nguyên tố → neutral với mọi element. Hiệu lực tính theo thời gian thực (1–2s) kể từ khi linh lực rời Hộp; nếu linh lực va chạm linh đan trong window này, velocity bonus tính đủ. Không cap riêng ngoài velocity max vật lý của Rapier.

## Build & Synergy

Roll trên **box** (implicit ràng buộc theo `compatibleItemTypes: box`). Phù hợp mọi build cần velocity cao để tăng intensity — đặc biệt tốt với:
- Build speed: kết hợp `swift-speed`, `dart-speed-kill` để cộng dồn velocity_factor.
- Build charge: T3 bonus stacks với `charge-store` — linh lực tích charge dài + velocity cao = intensity polyphonic.
- Đạo Phái nào cũng dùng được — affix element-neutral. Ưu tiên khi board cần "bung lực" từ một điểm trung tâm.
