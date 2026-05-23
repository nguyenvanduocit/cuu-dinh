---
id: armor-break
ten: Phá Niêm
category: prefix
tags: [offensive]
weight: 100
---

# Phá Niêm (`armor-break`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Giảm 5% defense linh khí khác trong 80px |
| T2 | Giảm 8% defense linh khí khác trong 80px |
| T3 | Giảm 10% defense linh khí khác trong 100px |

## Tương tác

Không tác động trực tiếp vào intensity formula (§7.2). Thay vào đó giảm "defense" của linh khí lân cận — defense ở đây là lớp giảm thiệt hại đến linh đan khi linh lực xuyên qua linh khí bị nhiễm/khóa element. Hiệu ứng AOE (80–100px) áp lên mọi linh khí trong range, không phân biệt nguyên tố. Nhiều linh khí trong range = mỗi cái đều bị -defense, stack với `armor-break-blaze` nếu linh lực là tương khắc.

## Build & Synergy

Roll trên mọi item base type. Giá trị cao nhất khi board đông linh khí (nhiều linh khí trong AOE range):
- Kết hợp `boundless-slaughter` (bonus per linh khí trên board) — cả hai scale với board density.
- `attraction` (hút linh lực về trung tâm) → nhiều linh lực đi qua vùng AOE của `armor-break` → defense reduction áp đều.
- Affix này là enabler cho mọi build muốn xuyên defense linh khí — không phân biệt Đạo Phái hay element.
