---
id: fire-harvest-impermanence
ten: Thu Hoả Vô Thường
category: prefix
tags: [offensive, elemental]
weight: 100
---

# Thu Hoả Vô Thường (`fire-harvest-impermanence`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% intensity; khi linh lực cùng nguyên tố linh đan: +15% bonus |
| T2 | +28% intensity; đồng nguyên tố +22% bonus |
| T3 | +38% intensity; đồng nguyên tố +30% bonus; 8% chance nhân đôi linh lực |

## Tương tác
Hai intensity layers: base +38% vào `player.intensity_multiplier` (mọi linh lực); khi linh lực đồng nguyên tố với linh đan thêm +30% (cộng thêm vào intensity_multiplier, tổng +68% nếu match). "Đồng nguyên tố" = linh lực element == linh đan element (§7.2: đồng hành +0.10 quality — nhưng affix này là bonus intensity riêng, không replace §7.2). T3 nhân đôi linh lực (8% chance) là physics spawn — tạo bản sao linh lực cùng element, velocity, charge tại vị trí hiện tại.

## Build & Synergy
Roll trên sword, saber, inkstone (tag `offensive, elemental`). Cần Đan Pháp match element linh khí để đồng nguyên tố bonus activate — ví dụ linh khí Hoả + Đan Pháp Hoả → +68% intensity T3. Cặp với `fire-frenzy-blast` (Hoả AOE) trên cùng linh khí Hoả — harvest-impermanence tăng intensity mỗi hit, frenzy-blast thêm AOE burst. Nhân đôi T3 cộng hưởng với Cổ Vật **Trượng Tôn Ngộ Không** (×3 linh lực sau hit đầu) — linh lực ×2 rồi ×3 = ×6 trong 1 chuỗi. **Pháp Sư** archetype (§16) primary; cũng mạnh trong bất kỳ mono-element build nào.
