---
id: savage-crit-burst
ten: Hùng Mạnh Bá Phá
category: prefix
tags: [crit, aoe]
weight: 100
---

# Hùng Mạnh Bá Phá (`savage-crit-burst`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +12% crit chance; crit strike AOE 40px gây 30% crit intensity |
| T2 | +17% crit chance; AOE 55px gây 40% intensity |
| T3 | +22% crit chance; AOE 70px gây 50% intensity |

## Tương tác

Thuộc **Layer 2 (player multipliers)**: `+crit chance` cộng thẳng vào `player.crit_chance` (base 5%, cap 100%). AOE khi crit là **secondary collision event** với intensity = crit_intensity × player_mult × map_mult × element_factor — tức là vẫn chịu đầy đủ layer 3 map và layer 4 element. AOE intensity tính riêng, không nhân thêm crit multiplier lần nữa (tránh double-dip). Ở T3 AOE 70px đủ lớn để chạm nhiều linh khí đồng thời — mỗi linh khí nhận damage độc lập. Stack crit chance additive với các nguồn khác (Hung Hãn affix, Tử Vi ascendancy, Lò.Đồ_Sương Tinh Hoa Crit) → tổng cap 100%.

## Build & Synergy

Roll trên bất kỳ item base nào (không giới hạn `compatibleItemTypes`). Core của **"Cuồng Sát" build** (§4 combat-math): 100% crit chance × 5x multi → mọi hit đều kích hoạt AOE, biến 1 collision thành multi-hit spray. Combo với `savage-frenzy` (cùng prefix → chỉ roll 1 trong 2, chọn theo build): `savage-frenzy` scale intensity trước khi crit nhân, nên crit burst lớn hơn. Combo với `star-shatter`: sao rơi từ `star-shatter` có thể crit → cả chain sao rơi + AOE burst. Đạo phái **Tử Vi** (+10% crit base, §4) đẩy build lên 100% crit dễ hơn. Lò.Khắc_Phù affix +25% intensity → AOE mạnh hơn kể cả khi chỉ 50% crit intensity.
