---
id: seal-anti-break
ten: Phong Ấn Kháng Phá
category: suffix
tags: [seal-safety]
weight: 40
---

# Phong Ấn Kháng Phá (`seal-anti-break`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | -5% chance Phong Ấn giáng affix khi áp lên linh khí này |
| T2 | -8% chance giáng |
| T3 | -12% chance giáng; giáng xảy ra thì chỉ giáng 1 tier thay vì xoá hoàn toàn |

## Tương tác

Hoạt động ở **gambling layer (Phong Ấn trụ)**, không can thiệp vào combat-math. Giảm xác suất giáng affix trực tiếp trên linh khí mang affix này — scope là per-item (linh khí này), không global. T3 adds soft-brick protection: tier giáng 1 bậc (T3→T2, T2→T1) thay vì xoá affix hoàn toàn → preserve item value khi Phong Ấn fail. Không tương tác với charge/velocity/element trong pháp trận.

## Build & Synergy

Roll suffix — ghép với prefix offensive hoặc defensive tự do. Thiết yếu cho **Phong Ấn build** bảo vệ affix tier cao trên linh khí quan trọng (prefix T3 như `sea-crest-surge` hay `savage-crit-burst`). Combo toàn seal-safety: `seal-anti-break` (per-item) + `seal-preserve` (global -brick) + `seal-risk-reduce` (global, tăng theo ván win) → bộ 3 suffix tối ưu bảo vệ Phong Ấn. Đạo phái bất kỳ — giá trị cao nhất ở endgame khi linh khí T16 có affix hiếm không muốn mất.
