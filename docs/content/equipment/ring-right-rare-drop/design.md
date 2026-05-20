---
id: ring-right-rare-drop
ten: Đồ Sương Loại Đan Hiếm (Phải)
slot: ringR
rarity: Magic
variant: Linh
isUnique: false
---

# Đồ Sương Loại Đan Hiếm (Phải) (`ring-right-rare-drop`)

## Lược tả

Nhẫn sương hổ phách vàng tươi — linh lực bên trong cộng hưởng với trường năng lượng của Lò, kéo những linh khí chất lượng cao hơn từ cõi hư không vào loot pool. Nhẫn phải trái cùng rung tần số thu hút, đối xứng như hai cực nam châm linh.

## Implicit

**+10% intensity mỗi Đồ Sương — tỉ lệ drop Bảo+ tăng 1 tier, ảnh hưởng tất cả linh khí trong ván.**

Cơ chế chi tiết (Magic — Linh):

**Intensity bonus (§3 combat-math):**
- Mỗi Đồ Sương trang bị: **+10% intensity** toàn bộ linh lực trong ván.
- Trang bị cả 2 Đồ Sương (L+R) = **+20% intensity tổng**.

**Drop tier nâng (implicit riêng của variant rare-drop):**
- Toàn bộ linh khí drop trong ván: **xác suất rarity dịch lên 1 bậc** theo DropPool (`Common → Uncommon → Rare → VeryRare → ExtremelyRare`).
- Tác động vào weight của DropPool, không override guaranteed floor.
- Trang bị cả `ring-left-rare-drop` + `ring-right-rare-drop` = tăng **2 bậc DropPool** — xác suất VeryRare/ExtremelyRare tăng đáng kể.
- Cộng dồn với `lid-legendary-great-elixir` (guaranteed Bảo floor): floor Bảo + drop tier nâng = xác suất cao item guaranteed Bảo leo lên Legendary.

Rarity scale (drop tier):
| Rarity | Intensity | Drop tier nâng |
|---|---|---|
| Common (Phàm) | +10% | Không có |
| Magic (Linh) | +10% | +1 bậc DropPool |
| Rare (Bảo) | +10% | +1 bậc + guaranteed 1 linh khí Bảo/ván |
| Legendary (Thần) | +10% | +2 bậc DropPool toàn ván |

## Slot role

**Đồ Sương (ringR)** — nhẫn sương phải trong Lò Luyện Đan. Đồ Sương +10% intensity là base của mọi Đồ Sương (§3); Loại Đan Hiếm hướng utility phụ vào **loot quality bias**. Mirror pair với `ring-left-rare-drop` — đeo cả hai = +20% intensity + +2 bậc DropPool.

## Build use

- **Loot farm build**: mục tiêu tích lũy linh khí Rare/Legendary để vào trụ gambling — cặp nhẫn này là core item.
- **Combo `lid-legendary-great-elixir`**: boss drop guaranteed Bảo+ (Nắp) + drop tier nâng (nhẫn) = xác suất cao boss item leo Legendary.
- **Combo `ring-right-spirit-record` không stack được** (cùng slot ringR) — chọn một: loot bias (rare-drop) vs affix memory (spirit-record) tùy build phase.
- **Đạo Phái Thiên Phú**: keystone "Linh Nguyên Sung" tăng hiệu quả DropPool shift thêm 0.5 bậc khi đeo cả 2 nhẫn cùng variant.
- **Atlas T14-T16**: +2 bậc DropPool có tác động lớn nhất ở tier map cao, ExtremelyRare trở nên khả thi.
