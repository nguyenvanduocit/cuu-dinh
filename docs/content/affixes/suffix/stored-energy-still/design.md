---
id: stored-energy-still
ten: Tích Năng Bất Động
category: suffix
tags: [utility, aoe]
weight: 60
---

# Tích Năng Bất Động (`stored-energy-still`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh khí tích charge nhưng không phóng ra; mỗi ván kết thúc: phóng toàn bộ charge → AOE |
| T2 | Charge AOE lớn hơn 20% |
| T3 | Charge AOE mạnh hơn 30%; AOE prioritize linh đan nếu trong tầm |

## Tương tác

Thuộc **Layer 1 (per-collision)** + end-of-ván trigger: linh khí tích charge bình thường (§2 +20%/hop, cap 200%) nhưng **không phóng linh lực** — hoạt động như sink trong chain. Cuối mỗi ván, xả toàn bộ charge tích lũy thành 1 AOE burst: AOE intensity = charge_count × base_charge_rate × player_mult × map_mult. T3 +30% mạnh hơn: multiplier thêm vào AOE final. T3 prioritize linh đan: AOE hướng ưu tiên đến linh đan trước các linh khí khác trong tầm — tăng xác suất hit direct vào linh đan, áp element_factor linh lực vs linh đan. AOE element = element linh khí (nếu có) hoặc void nếu none.

## Build & Synergy

Roll suffix, tags `utility, aoe`. **Combo cực mạnh với `sea-crest-surge`** (prefix): chain dài nhiều hop → charge tích nhanh → AOE burst cuối ván lớn. `slow-step` (suffix khác) giữ linh lực trong vùng linh khí này lâu hơn → nhiều hop → charge nhiều hơn. `swift-junction` (suffix: intensity bonus khi charge ≥ 2) cũng áp dụng khi linh khí đang tích charge. Không hợp với build dựa vào continuous damage mỗi ván — build này đặt cược vào AOE spike 1 lần cuối ván. Tốt nhất ở ván dài (pháp trận 5-8 ván, boss ván cuối): tích 5-7 ván, xả ở ván boss. Đạo phái có bonus cuối ván (nếu tồn tại) cộng hưởng.
