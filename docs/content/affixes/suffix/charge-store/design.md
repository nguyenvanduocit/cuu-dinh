---
id: charge-store
ten: Tăng Trữ
category: suffix
tags: [utility, chain]
weight: 100
---

# Tăng Trữ (`charge-store`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Tích charge 15% mỗi va chạm; charge_factor cộng dồn |
| T2 | Tích charge 20% mỗi va chạm |
| T3 | Tích charge 25% mỗi va chạm; max charge cap tăng thêm 2 hops |

## Tương tác

Tăng tốc độ tích **charge_factor** — chuẩn §7.3 là +20%/hop; `charge-store` không thay đổi mức +20%/hop mà tăng **số "charge" tích được mỗi va chạm**, tức linh lực tích charge nhanh hơn trong cùng số hop. T3 tăng max charge cap thêm 2 hops → charge_factor có thể đạt cao hơn trần mặc định (max +200% từ 10 hops → max +240% từ 12 hops). Suffix — kết hợp với prefix intensity bất kỳ.

## Build & Synergy

Roll trên mọi item base type. Nền tảng cho mọi build chain-intensity:
- `charged-might` (+intensity khi charge >= 2–3 hops): `charge-store` giúp đạt ngưỡng charge nhanh hơn, ngay từ hop đầu.
- `chain-link` / `bead-chain`: chain nhiều hop → charge_factor tích dồn → phần trăm bonus đạt cap sớm hơn.
- `box-store-energy` / `cauldron-slow-burst`: tích charge trước khi vào delay → phun ra với charge đã đầy.
- `consecutive-speed` (T3: 3 hit liên tiếp → auto crit): chain nhanh đạt 3 hit liên tiếp dễ hơn khi tốc độ tích charge cao.
- Đạo Phái bất kỳ — affix element-neutral, nền tảng cho mọi build dùng chain.
