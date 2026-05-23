---
id: metal-keystone-sharpness
ten: Sắc Bén
type: keystone
element: metal
cluster: metal-keystone
pos_x: 0
pos_y: -430
connections: [metal-notable-metal-light, metal-notable-metal-pierce, metal-notable-death-kill]
---

# Sắc Bén (`metal-keystone-sharpness`)

## Effect

KEYSTONE: Crit damage ×3. Crit chance ÷2. Mỗi hit Kim không crit bị giảm -20% intensity.

## Cơ chế

Crit damage multiplier đổi thành ×3.0 (thay vì base ×2.0). Crit chance Kim nhân 0.50 sau tất cả additive crit-chance nodes (áp dụng cuối, trước roll). Mỗi hit Kim không crit áp penalty −20% intensity cho hit đó (không phải debuff tích luỹ — reset mỗi hit). Penalty không áp lên non-Kim element hit. Ba điều kiện xử lý độc lập theo thứ tự: tính crit chance → roll crit → nếu miss: áp −20% intensity hit đó.

## Synergy

Keystone cốt lõi của archetype **Sắc Bén** — all-in crit damage, chấp nhận crit chance thấp và penalty non-crit. Bắt buộc stack crit chance từ small nodes (`metal-small-metal-jade` +4%, `metal-small-metal-jade-2` +4%, `metal-small-metal-jade-3` +6%, tổng +14% trước khi ÷2 = ~7% net) để bù halve. Notable `metal-notable-death-kill` (+60% crit damage) và `metal-notable-metal-light` (+25% crit chance khi 3+ Kim ≤120px) là hai node bắt buộc đi kèm. Build yêu cầu density Kim cao và velocity ổn định — không phù hợp multi-element.
