---
id: vase-absorb-convert
ten: Bình Hấp Chuyển
category: implicit
tags: [elemental, chain]
compatibleItemTypes: [vase]
weight: 100
---

# Bình Hấp Chuyển (`vase-absorb-convert`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Hấp thụ linh lực nguyên tố X; phun lại nguyên tố tương sinh của X |
| T2 | Hấp thụ linh lực nguyên tố X; phun lại nguyên tố tương sinh của X + +20% intensity |
| T3 | Hấp thụ linh lực nguyên tố X; phun lại nguyên tố tương sinh của X + +35% intensity; 10% chance chain jump |

## Tương tác

Convert element là thay đổi trực tiếp `element` của linh lực — sau khi qua Bình, linh lực mang element tương sinh của nguồn. Theo damage formula: tương sinh với đan → +quality ×0.30, +stability ×0.05; nếu nguồn là tương khắc đan → convert sang element trung tính hoặc tương sinh → đảo chiều từ damage sang heal. Intensity bonus +20-35% nhân vào `player_intensity_multiplier` sau convert. Chain jump T3 kích hoạt sau khi linh lực được phun ra.

## Build & Synergy

Roll trên **vase** (implicit). Chiến lược cốt lõi: đặt Bình trên đường linh lực tương khắc đan — convert sang tương sinh → mọi linh lực nguy hiểm trở thành heal. Kết hợp `wuxing-convert-power` (+30% intensity sau convert T3 — stacks với Bình +35% thành chuỗi nhân) và `void-fusion` (Vô Cực convert tại Bình → chủ động chọn element output). Đạo Phái Mộc hoặc Thuỷ — tương sinh vòng ngũ hành dài nhất.
