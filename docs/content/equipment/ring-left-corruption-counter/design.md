---
id: ring-left-corruption-counter
ten: Đồ Sương Tâm Ma Khắc (Trái)
slot: ringL
rarity: Rare
variant: Bảo
isUnique: false
---

# Đồ Sương Tâm Ma Khắc (Trái) (`ring-left-corruption-counter`)

## Lược tả

Nhẫn sương hắc ngọc khắc phù ấn trừ tà — linh lực trong nhẫn không ngừng tạo ra rào chắn tâm linh, làm chậm tốc độ xâm nhiễm của Tâm Ma vào linh đan. Không xoá hoàn toàn như Quai Tịnh Tâm, nhưng kéo dài thời gian phản ứng cho đạo sĩ. Nhẫn trái phải cùng khắc phù ấn đối xứng.

## Implicit

**+10% intensity mỗi Đồ Sương — -20% thời gian hiệu lực Tâm Ma debuff trên linh đan.**

Cơ chế chi tiết (Rare — Bảo):

**Intensity bonus (§3 combat-math):**
- Mỗi Đồ Sương trang bị: **+10% intensity** toàn bộ linh lực trong ván.
- Trang bị cả 2 Đồ Sương (L+R) = **+20% intensity tổng**.

**Tâm Ma duration giảm (implicit riêng của variant corruption-counter):**
- Mọi Tâm Ma debuff áp lên linh đan: **thời gian hiệu lực giảm 20%** (ví dụ debuff 10 giây → còn 8 giây).
- Áp dụng cho tất cả loại Tâm Ma: quality drain, elemental inversion, linh lực block.
- Trang bị cả `ring-left-corruption-counter` + `ring-right-corruption-counter` = **-40% tổng duration** Tâm Ma.
- Cộng dồn additive với các nguồn giảm duration khác (passive tree, affix).

Rarity scale (Tâm Ma duration):
| Rarity | Intensity | Tâm Ma duration giảm |
|---|---|---|
| Common (Phàm) | +10% | Không có |
| Magic (Linh) | +10% | -10% |
| Rare (Bảo) | +10% | -20% |
| Legendary (Thần) | +10% | -35% + Tâm Ma không stack quá 2 lần |

## Slot role

**Đồ Sương (ringL)** — nhẫn sương trái trong Lò Luyện Đan. Đồ Sương +10% intensity là base cố định (§3); Tâm Ma Khắc hướng utility phụ vào **anti-corruption defense** — giảm thời gian bị debuff mà không cần tiêu charge như Quai. Passive liên tục, không 1×/ván như Quai. Mirror pair với `ring-right-corruption-counter`.

## Build use

- **Anti-Tâm Ma bộ đôi với Quai**: `ring-left-corruption-counter` + `ring-right-corruption-counter` (passive -40% duration) + `handle-left-pure-heart-charm` + `handle-right-pure-heart-charm` (xoá khi nguy cấp) = hệ thống chống Tâm Ma 2 lớp.
- **Bí cảnh Tâm Ma variant (T6-T13)**: mod Tâm Ma tần suất cao — -40% duration = debuff còn tác động 6 giây thay vì 10 giây, giảm damage output của Tâm Ma đáng kể.
- **Combo passive tree "Tịnh Tâm"**: node "Tịnh Tâm" trong passive tree giảm thêm -10% Tâm Ma duration → tổng -50% khi đeo cả 2 nhẫn + node.
- **Anti-synergy**: build chủ động khai thác Tâm Ma stack để trigger bonus (gambling trụ Tâm Ma Mod) sẽ bị nhẫn này cản — duration ngắn = ít window để trigger.
