---
id: branch-recovery
ten: Cành Hồi Phục
category: implicit
tags: [sustain, elemental]
element: wood
compatibleItemTypes: [branch]
weight: 100
---

# Cành Hồi Phục (`branch-recovery`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực Mộc qua Cành heal stability linh đan +1.5% |
| T2 | Linh lực Mộc qua Cành heal stability linh đan +2.5% |
| T3 | Linh lực Mộc qua Cành heal stability linh đan +3.5%; linh lực Thuỷ heal thêm +2% |

## Tương tác

Heal stability áp **sau** khi damage formula (§7.2) tính xong — không giảm damage, chỉ phục hồi stability. Mộc tương sinh với Hoả (Mộc→Hoả §7.1) → Cành thường được đặt trong path Mộc→Hoả-đan. T1–T2 chỉ heal khi linh lực **Mộc** qua; T3 mở thêm Thuỷ (Thuỷ tương sinh Mộc) +2% — tổng T3 heal khi Mộc qua +3.5%, khi Thuỷ qua +2%. Heal scale theo số linh lực qua Cành, không scale theo intensity.

## Build & Synergy

Implicit — chỉ roll trên **branch**. Build sustain Mộc/Thuỷ:
- `azure-thunder-frost` T3 (heal stability khi Thuỷ tương sinh hit): stack heal từ hai nguồn — Cành heal Thuỷ +2% + affix heal +3% = +5%/hit Thuỷ khi đủ điều kiện.
- `azure-dragon-wrath` (Mộc intensity): linh lực Mộc đi qua Cành → heal + đánh mạnh hơn trên đan Hoả.
- `attraction` (hút linh lực về linh khí): tăng tần suất linh lực Mộc/Thuỷ qua Cành → heal dày hơn.
- Đạo Phái **Mộc** hoặc build tương sinh chain: home build cho sustain qua Cành.
