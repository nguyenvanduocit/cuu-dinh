---
id: statue-four-spirit-aura
ten: Tượng Tứ Linh Hào Quang
category: implicit
tags: [elemental, offensive]
compatibleItemTypes: [statue]
weight: 100
---

# Tượng Tứ Linh Hào Quang (`statue-four-spirit-aura`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +10% intensity cho linh khí cùng nguyên tố trong bán kính 100px |
| T2 | +20% intensity cho linh khí cùng nguyên tố trong bán kính 100px |
| T3 | +30% intensity cho linh khí cùng nguyên tố trong bán kính 100px |

## Tương tác

Thuộc **Layer 2 (player multipliers)**: +intensity additive vào `player_mult` cho mọi collision xảy ra tại linh khí cùng nguyên tố trong bán kính. "Cùng nguyên tố" so sánh `linh_khi.element` của statue vs `linh_khi.element` của từng linh khí trong vùng — áp dụng per-collision, không per-item (mỗi hit đều nhận buff). Implicit-only trên statue. Bán kính 100px (T1-T3 không thay đổi bán kính) — tập trung hơn `statue-beast-guard` (200px T3) → đòi hỏi positioning chính xác hơn.

## Build & Synergy

Roll implicit trên **statue**, yêu cầu board đơn nguyên tố hoặc cluster nguyên tố để maximize linh khí trong bán kính. **Elemental cluster build**: đặt statue nguyên tố X ở trung tâm cluster 3-4 linh khí cùng nguyên tố X → mọi hit trong cluster +30% intensity. Kết hợp với `seal-safety` (suffix: giảm brick chance khi áp Phong Ấn cùng nguyên tố) cho chiến lược đơn nguyên tố toàn diện. Combo với `southern-sun-tear` (prefix Hoả): statue Hoả + `southern-sun-tear` trên linh khí Hoả → +30% aura + +38% prefix = +68% total intensity Hoả additive vào `player_mult`. Set **Tứ Linh** 4-piece +30% element match và Set **Ngũ Hành** 5-cycle +200% chain cộng hưởng mạnh trong board đơn nguyên tố.
