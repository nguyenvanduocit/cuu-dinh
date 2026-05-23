---
id: charged-might
ten: Vũ Lực Cuồng
category: prefix
tags: [offensive, crit]
weight: 100
---

# Vũ Lực Cuồng (`charged-might`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +22% intensity khi linh lực có charge >= 3 hops |
| T2 | +32% intensity khi linh lực có charge >= 2 hops |
| T3 | +42% intensity khi linh lực có charge >= 2 hops; crit chance +8% |

## Tương tác

Bonus +intensity áp vào **player.intensity_multiplier** (§7.3 Lò affix layer) khi `charge_count >= ngưỡng`. T1 ngưỡng 3 hops, T2–T3 ngưỡng 2 hops — đạt nhanh hơn trong chain ngắn. T3 crit chance +8% cộng additive với `ferocious` (Hung Hãn) và crit-chance affix khác. Bonus +intensity là flat multiplicative so với base — không tương tác với nguyên tố (không phân biệt tương sinh/tương khắc). Prefix — chiếm slot prefix nhưng không có element ràng buộc.

## Build & Synergy

Roll trên mọi item base type. Cốt lõi của mọi build chain dùng intensity cao:
- `charge-store` (suffix): tăng tốc tích charge → đạt ngưỡng 2–3 hops sớm hơn → `charged-might` trigger ngay từ đầu chain.
- `chain-link` / `bead-chain` / `black-tortoise-fury`: cung cấp nhiều hop → charge_factor cao → `charged-might` luôn active.
- T3 crit +8% kết hợp keystone **Sắc Bén** (×3 crit multi, crit chance ÷2): bù phần crit chance bị cắt, crit damage khổng lồ trên nền intensity cao từ `charged-might`.
- `sun-wukong-staff` (tách ×3): mỗi con kế thừa charge_count → cả 3 con đều trigger `charged-might` nếu chain đủ dài.
