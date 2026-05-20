---
id: elementless
ten: Vô Nguyên Tố Hoá
category: suffix
tags: [utility]
weight: 60
---

# Vô Nguyên Tố Hoá (`elementless`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực qua linh khí này mất nguyên tố 2s (trở thành Vô Cực tạm) |
| T2 | Linh lực mất nguyên tố 3s |
| T3 | Linh lực mất nguyên tố 4s; Vô Cực lực có 10% chance gây tương sinh với đan bất kỳ |

## Tương tác
Convert linh lực sang Vô Cực tạm — trong window 2-4s, linh lực không thuộc Ngũ Hành nên không trigger tương sinh (quality +0.30) hoặc tương khắc (stability -0.40); chỉ áp đồng hành neutral (quality +0.10, §7.2). T3 10% chance "tương sinh bất kỳ" là override: roll xem Vô Cực lực có hưởng tương sinh bonus (×0.30 quality) như thể match element đan không. Hữu ích để chặn tương khắc khi chưa route được đúng element.

## Build & Synergy
Roll trên statue, fan, lantern (tag `utility`). Dùng khi board có nhiều linh lực ngẫu nhiên và cần "neutralize" element xấu trước khi hit đan. Cặp với `fan-redirect` (implicit fan, redirect trajectory) để kiểm soát cả element lẫn hướng. Đối lập với `element-lock` (lock giữ element, elementless xóa element) — dùng elementless cho linh lực đến, element-lock cho linh khí của mình. Đạo Phái **Vô Cực** (chaos ×2) tăng trigger rate T3 một cách ngẫu nhiên.
