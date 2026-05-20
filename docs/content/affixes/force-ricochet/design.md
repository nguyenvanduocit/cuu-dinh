---
id: force-ricochet
ten: Nguyên Lực Phản Xạ
category: prefix
tags: [offensive]
weight: 100
---

# Nguyên Lực Phản Xạ (`force-ricochet`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Ricochet: sau va chạm tường; +15% intensity; tối đa 2 lần/linh lực |
| T2 | Ricochet +22% intensity; tối đa 3 lần |
| T3 | Ricochet +30% intensity; tối đa 4 lần; 10% chance ricochet nhân đôi linh lực |

## Tương tác

Ricochet = va chạm với tường board (không phải linh khí). Mỗi lần bounce tường: nhân thêm vào **velocity_factor** (§7.3) — velocity không giảm mà tăng, intensify trajectory. Tối đa 2/3/4 lần/linh lực rồi cap — counter reset mỗi linh lực mới. T3 10% chance nhân đôi linh lực: tạo bản sao cùng velocity, element, charge — cả hai tiếp tục travel độc lập.

## Build & Synergy

Roll trên **bell** hoặc **drum** (wave physics bounce nhiều). Board rộng với wall geometry phức tạp = nhiều ricochet opportunity. Combo với `flying-ink-strike` (ricochet tường đếm vào 2-hit window). Affix `great-wave-spread` trên linh khí khác khuếch đại AOE từ linh lực nhân đôi T3. Build velocity cao (passive tree speed nodes) tối đa ricochet intensity. Đạo Phái Kim dùng tốt — intensity Kim tương sinh với Thuỷ sau bounce chain.
