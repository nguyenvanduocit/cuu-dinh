---
id: inkstone-mark
ten: Nghiên Mực Ghi Dấu
category: implicit
tags: [chain, elemental]
compatibleItemTypes: [inkstone]
weight: 60
---

# Nghiên Mực Ghi Dấu (`inkstone-mark`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi 3 va chạm: ghi dấu Kim trên board; chain damage 2s sau |
| T2 | Mỗi 2 va chạm: ghi dấu nguyên tố linh khí; chain damage 3s sau |
| T3 | Mỗi va chạm: ghi dấu nguyên tố; chain damage 3s + linh lực tiếp theo cùng nguyên tố +25% intensity |

## Tương tác

Implicit của **inkstone** base type. Ghi dấu là entity vô hình trên board tại vị trí va chạm — tồn tại 2-3s rồi phát chain damage. Chain damage tính theo element của dấu (T1: luôn Kim; T2-T3: element của linh khí). Chain damage áp vào linh đan như một hit độc lập với intensity bằng 40% intensity hit gốc (cơ chế chain). T3: linh lực tiếp theo cùng element +25% intensity khi đi qua vùng có dấu — buffer thêm cho hit kế.

## Build & Synergy

Implicit của **inkstone** — pair với prefix `inkstone-wound-trail` trên cùng linh khí để double chain: vệt mực tức thì + dấu delay. Hoặc dùng riêng nếu muốn delayed burst. Element dấu T2-T3 match với element linh khí inkstone → build inkstone mono-element mạnh. Combo với `great-wave-spread`: chain damage kích AOE sang linh khí xung quanh. `flying-ink-strike` prefix cùng linh khí: 2 va chạm liên tiếp → intensity spike + ghi dấu ngay. Đạo Phái Kim (inkstone flavor) hoặc bất kỳ element nào ở T3.
