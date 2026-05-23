---
id: chain-link
ten: Xích Liên
category: suffix
tags: [chain]
weight: 100
---

# Xích Liên (`chain-link`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực nhảy tới linh khí gần nhất trong 80px sau va chạm |
| T2 | Linh lực nhảy tới linh khí gần nhất trong 120px; +8% intensity mỗi nhảy |
| T3 | Linh lực nhảy tới 2 linh khí gần nhất trong 150px; +12% intensity mỗi nhảy |

## Tương tác

Mỗi chain jump tích +20% charge_factor chuẩn (§7.3) + T2/T3 bonus (+8–12% intensity/nhảy additive trong player_mult layer). Linh lực giữ nguyên nguyên tố qua mỗi nhảy → tương sinh/tương khắc áp tại từng linh khí đích. T3 nhảy đến 2 linh khí gần nhất đồng thời → 2 chain nhánh song song, mỗi nhánh tích charge_factor riêng. Range 80–150px tính từ điểm va chạm. Suffix — có thể đặt cùng prefix intensity trên cùng item.

## Build & Synergy

Roll trên mọi item base type. Cốt lõi của build **chain**:
- `bead-chain` (implicit bead): chain từ Châu + chain từ `chain-link` → linh lực nhảy liên tục qua nhiều linh khí.
- `charged-might` (+intensity khi charge >= N hops): `chain-link` tích charge nhanh → trigger `charged-might` sớm hơn.
- `charge-store` (suffix): cộng thêm charge per va chạm → chain dài hơn = charge_factor cao hơn.
- `black-tortoise-fury` (Thuỷ chain jump chance): chain từ nhiều nguồn → linh lực Thuỷ nhảy cực nhiều.
- Keystone **Ngũ Hành chain** (nếu tồn tại): chain qua đủ 5 nguyên tố → ×3 intensity.
