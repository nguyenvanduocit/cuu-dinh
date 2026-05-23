---
id: secret-realm-inkstone
ten: Nghiên Mực Bí Cảnh
type: inkstone
element: void
rarity: Common
dropPool: Common
tags: [void, trail, random]
---

# Nghiên Mực Bí Cảnh (`secret-realm-inkstone`)

## Lược tả

Nghiên mực Vô Cực để lại vệt ngũ sắc ngẫu nhiên trên đường đi của linh lực — mỗi đoạn trail mang một nguyên tố khác nhau, biến bảng thành mê trận màu sắc không thể đoán. Linh khí hỗn loạn với upside lớn cho build chấp nhận rủi ro.

## Implicit

Linh lực đi qua nghiên để lại **trail ngẫu nhiên** kéo dài 3 giây. Mỗi linh lực *khác* chạm vào trail nhận `element` của đoạn trail đó (roll 1 trong 5 nguyên tố `metal/wood/water/fire/earth`, không phải `void`) — tức là trail override element của linh lực chạm vào, sau đó `element_factor` tính bình thường (§2 Layer 4).

**Cơ chế**: element của trail = random tại thời điểm nghiên vẽ trail, không đổi trong 3 giây. Nhiều linh lực vẽ trail → nhiều vệt màu chồng chéo → xác suất overlap cao, bảng trở nên cực kỳ khó kiểm soát.

**Vai trò vật lý**: static body, không đổi `velocity`; trail là hitbox dạng line tồn tại 3s (§2 Layer 4 effect on subsequent collisions).

## Affix pool

Bias AffixTag `utility` + `elemental` + `currency-control`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `elemental` | Bias trail sang 1 nguyên tố | Roll lệch 40% về nguyên tố được chọn (giảm chaos, tăng kiểm soát) |
| `utility` | Tăng thời gian trail | 3s → 4s — linh lực có thêm cơ hội chạm trail |
| `currency-control` | Trail tạo loot spark | Linh lực chạm trail có 5% chance drop 1 currency nhỏ |
| `aoe` | Trail rộng hơn | Bề rộng trail +4px → dễ chạm hơn |

Tags `void, trail, random` → AffixTag chủ đạo `utility, elemental, currency-control`.

## Build role

**Archetype**: Chaos / loot-farm — chấp nhận nguyên tố không kiểm soát để đổi lấy loot bonus và intensity bùng ngẫu nhiên. Không phải build tối ưu quality, là build farm currency.

**Đạo Phái**: **Hư Vô** (`void`) — Vô Cực tương tác trung tính (§1 matrix `n`), không bị phạt từ trail ngẫu nhiên; build Hư Vô dùng nghiên để inject variety mà không sợ đại khắc trực tiếp vào Vô Cực.

**Combo xác nhận**:
- `secret-realm-inkstone` + `wordless-talisman`: hai nguồn ngẫu nhiên xếp chồng — trail màu + element 2s random = cực đại hỗn loạn, nhưng cũng cực đại xác suất tương sinh ngẫu nhiên.
- `secret-realm-inkstone` + `yellow-inkstone` (`yellow-inkstone` trail +loot drop rate): hai trail chồng → linh lực chạm trail ngẫu nhiên + loot spark.
- Farm build T1-T5: nghiên để lại trail nhiều, linh lực chạm trail roll may mắn tương sinh ngẫu nhiên → push quality bất ngờ + loot.

**Anti-synergy**: build Hoả thuần hoặc Thuỷ thuần — trail random phá element lock, dùng `red-lantern` hoặc `sea-dragon-talisman` thay thế.
