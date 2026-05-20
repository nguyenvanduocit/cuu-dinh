---
id: seal-safety
ten: Phong Ấn An Toàn
category: suffix
tags: [seal-safety]
weight: 40
---

# Phong Ấn An Toàn (`seal-safety`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Brick chance giảm thêm 3% khi Phong Ấn áp lên linh khí nguyên tố cùng loại |
| T2 | Brick chance giảm 5% khi áp cùng nguyên tố |
| T3 | Brick chance giảm 7%; Phong Ấn khắc implicit 40% cao hơn thường |

## Tương tác

Gambling layer, per-item conditional: hiệu lực chỉ khi Phong Ấn áp lên linh khí **cùng nguyên tố** với linh khí mang affix này. Brick chance giảm áp dụng lên application đó. T3 "khắc implicit 40% cao hơn": khi Phong Ấn có khả năng khắc implicit, xác suất thành công nhân ×1.40 — cộng hưởng mạnh với `seal-corruption-bane` (tăng chance khắc Tâm Ma implicit riêng). Không tương tác combat-math trực tiếp.

## Build & Synergy

Roll suffix. **Elemental-specialized build**: player xây board đơn nguyên tố (all-Kim, all-Thuỷ...) để maximize số linh khí trigger `seal-safety`. Trong board đơn nguyên tố, mọi Phong Ấn cross-item đều hưởng lợi nếu linh khí nguồn có affix này. Combo với `seal-ascend` (suffix khác trên linh khí khác): `seal-ascend` nâng tier, `seal-safety` giảm brick risk khi nâng — phân chia 2 suffix slot giữa 2 linh khí. T3 khắc implicit 40% khiến affix này double duty với `seal-corruption-bane` — có thể thay thế `seal-corruption-bane` nếu slot hạn chế và board đơn nguyên tố.
