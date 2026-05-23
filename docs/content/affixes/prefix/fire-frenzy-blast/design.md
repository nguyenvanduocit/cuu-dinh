---
id: fire-frenzy-blast
ten: Hoả Cuồng Khởi Nổ
category: prefix
tags: [offensive, aoe]
element: fire
weight: 40
---

# Hoả Cuồng Khởi Nổ (`fire-frenzy-blast`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | 8% chance: linh lực Hoả tạo AOE nổ 80px gây 40% intensity khi chạm đan |
| T2 | 12% chance: AOE nổ 100px gây 55% intensity |
| T3 | 15% chance: AOE nổ 120px gây 70% intensity; 5% chance double nổ |

## Tương tác
Trigger chance roll per linh lực Hoả chạm linh đan. AOE nổ gây flat X% intensity lên linh đan (Hoả element, áp §7.2 element relationship — Hoả tương khắc Thuỷ-đan = stability drain; Hoả tương sinh Thổ-đan = quality gain mạnh). Double nổ T3 là roll độc lập 5% sau blast đầu confirmed — hai AOE riêng biệt, cộng dồn. AOE 120px có thể hit linh khí lân cận nếu có mechanic damage-to-objects (cần xác nhận ở implementation phase).

## Build & Synergy
Roll trên lantern, drum (tag `offensive, aoe`, element Hoả). Phụ thuộc vào Hoả linh lực — cần Đan Pháp Hoả hoặc Nguyên Liệu Hoả Tinh (+50% linh khí Hoả drop). Cặp với `fire-harvest-impermanence` (prefix, +intensity khi đồng nguyên tố) trên cùng linh khí Hoả — harvest-impermanence tăng intensity_multiplier của hit Hoả, fire-frenzy-blast add AOE burst trên cùng trigger. **Pháp Sư** archetype (§16, Hoả, chain trigger fireworks) là home. Đạo Phái **Vô Cực** (chaos ×2) tăng blast proc rate hiệu quả.
