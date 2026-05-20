---
id: seal-risk-reduce
ten: Giảm Rủi Ro Phong Ấn
category: suffix
tags: [seal-safety]
weight: 40
---

# Giảm Rủi Ro Phong Ấn (`seal-risk-reduce`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | -3% Phong Ấn brick chance global trong pháp trận khi linh khí này còn sống |
| T2 | -5% global brick chance |
| T3 | -8% global brick chance; mỗi ván win: +1% giảm thêm (max -3%) |

## Tương tác

Gambling layer, global scope — conditional trên linh khí này còn tồn tại (không bị vỡ trong pháp trận hiện tại). T3 scaling: mỗi ván win +1% giảm thêm, cap -3% bonus → tổng -11% T3 sau 3 ván thắng liên tiếp. Bonus tích lũy trong pháp trận (per-pháp-trận, reset khi bắt đầu bí cảnh mới). Không tương tác combat-math.

## Build & Synergy

Roll suffix. **Cộng hưởng với "ván win"** — cặp với `survival-growth` (suffix: tích lũy durability per ván win) để tạo build "snowball per ván": win nhiều → `seal-risk-reduce` mạnh hơn, `survival-growth` durability cao hơn → linh khí sống lâu hơn → win nhiều hơn. Combo với `seal-preserve` (flat global base) → tổng brick reduction global cao nhất trong game. Ưu tiên cao ở T14-T16 nơi brick chance Phong Ấn cao và cost item lớn. Linh khí mang affix này phải survive — đặt ở vị trí an toàn (tránh đại khắc thường xuyên) hoặc thêm `statue-beast-guard` gần đó.
