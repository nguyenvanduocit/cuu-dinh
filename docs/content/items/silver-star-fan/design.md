---
id: silver-star-fan
ten: Quạt Bạch Tinh
type: fan
element: metal
rarity: Common
dropPool: Common
tags: [metal, redirect]
---

# Quạt Bạch Tinh (`silver-star-fan`)

## Lược tả

Quạt Kim hướng dẫn đường đi — player chọn trái hoặc tay phải trước ván, quạt phất linh lực Kim sang hướng đó khi chạm. Linh khí điều hướng chính xác nhất trong bộ Kim, cho phép "ngắm" linh đan chủ động.

## Implicit

Khi linh lực `metal` chạm vào quạt, vector velocity bị phản chiếu sang **trái hoặc phải** (player đặt trước ván, không đổi mid-game). Magnitude `velocity` giữ nguyên — chỉ đổi hướng, không mất tốc độ (§2 Layer 1 velocity factor không thay đổi).

Linh lực không phải Kim: đi xuyên qua không bị redirect (quạt chỉ nhận Kim).

**Vai trò vật lý**: static deflector body. Player cần đặt quạt ở góc tối ưu để dẫn Kim lực vào chain linh khí hoặc thẳng tới linh đan.

## Affix pool

Bias AffixTag `utility` + `speed` + `offensive`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `utility` | Chọn hướng mid-ván | Cho phép đổi hướng redirect một lần trong pháp trận |
| `speed` | Tăng tốc sau redirect | Linh lực Kim sau khi đổi hướng: +10% velocity (§2 Layer 1 tăng nhẹ) |
| `offensive` | Redirect kèm charge | Linh lực Kim sau redirect: +1 `charge_count` (§2: +20% intensity/hop) |
| `elemental` | Nhận thêm linh lực Thổ | Quạt nhận cả Kim và Thổ redirect (Thổ sinh Kim — §1 tương sinh) |

Tags `metal, redirect` → AffixTag chủ đạo `utility, speed`.

## Build role

**Archetype**: Kim precision — điều hướng chính xác linh lực Kim tới linh đan qua đường ngắn nhất, tối ưu chain charge.

**Đạo Phái**: **Cửu Âm** (`nine-yin`) hoặc **Thái Cực** (`tai-chi`) — build Kim cần độ chính xác; Cửu Âm boost intensity Kim; Thái Cực khai thác Kim→Thuỷ sinh.

**Combo xác nhận**:
- `silver-star-fan` + `white-tiger-sword` (`white-tiger-sword` split ±30°): redirect từ quạt → split kiếm tạo 2 đường Kim khác nhau → hai chain song song tới đan.
- `silver-star-fan` + `white-tiger-statue` (aura +15% intensity Kim ±100px): quạt redirect Kim vào vùng aura statue để nhận buff trước khi chạm đan.
- `silver-star-fan` + `white-tiger-bead`: redirect Kim vào bead tích 3 hit → phun piercing — quạt đảm bảo Kim đi đúng vào bead.

**Anti-synergy**: build Vô Cực (`void-sword`, `spiritless-lantern`) — quạt chỉ nhận Kim, linh lực Vô Cực đi xuyên qua không có ích.
