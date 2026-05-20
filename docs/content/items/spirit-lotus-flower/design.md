---
id: spirit-lotus-flower
ten: Hoa Sen Linh
type: flower
element: wood
rarity: Common
dropPool: Common
tags: [wood, slow, charge]
---

# Hoa Sen Linh (`spirit-lotus-flower`)

## Lược tả

Hoa Mộc làm chậm linh lực khi đi qua, nhưng khi linh lực rời hoa, nó mang thêm intensity như đã được "nạp" trong khoảnh khắc chậm đó. Linh khí charge-on-slow, khuyến khích build ít linh lực nhưng mỗi cái nặng.

## Implicit

Linh lực chạm hoa: `velocity` giảm 25% (§2 Layer 1 `velocity / VELOCITY_BASE` giảm — nhưng floor 0.1× vẫn giữ, §3). Khi linh lực *rời* hoa (va chạm kết thúc), nhận +20% intensity flat cộng vào `base` (§2 Layer 1, additive với velocity factor hiện tại).

+20% intensity này là flat bonus trên base, **cộng thêm** vào `charge_count` accumulation (§2 `+20%/hop`) — không thay thế. Một linh lực đã có 3 hop (charge +60%) qua hoa = base × (1 + 60% + 20%) = +80% tổng.

**Vai trò vật lý**: static body dạng flower; linh lực giảm tốc khi tiếp xúc, tăng intensity khi thoát. Slow giúp player "ngắm" đường đi sau khi rời hoa dễ hơn.

## Affix pool

Bias AffixTag `sustain` + `elemental` + `chain`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `sustain` | Hồi stability khi slow | Mỗi linh lực Mộc slow qua hoa: +0.5 stability linh đan (§5 tương sinh heal) |
| `elemental` | Convert linh lực sang Mộc | Linh lực qua hoa nhận element = wood (tương tự `red-lantern` nhưng Mộc) |
| `chain` | Tăng charge bonus khi rời | +20% → +30% intensity khi rời hoa (T3) |
| `speed` | Giảm slow penalty | Velocity chỉ giảm 15% thay vì 25% — ít đánh đổi tốc độ hơn |

Tags `wood, slow, charge` → AffixTag chủ đạo `sustain, chain`.

## Build role

**Archetype**: Mộc charge — tích intensity qua slow, tối ưu cho build mid-chain (linh lực đi qua nhiều linh khí trước khi tới đan để tích charge).

**Đạo Phái**: **Linh Sơn** (`spirit-mountain`) — echo kế thừa intensity bonus sau khi rời hoa, nhân hiệu quả slow-charge; **Thái Cực** (`tai-chi`) — Mộc sinh Hoả (§1), dùng hoa để build intensity Mộc trước khi convert sang Hoả.

**Combo xác nhận**:
- `spirit-lotus-flower` + `water-dragon-bead`: Thuỷ sinh Mộc (§1) — linh lực Thuỷ qua hoa nhận +20% intensity Mộc-flavored, bead chain tiếp sang linh khí Mộc = double sinh.
- `spirit-lotus-flower` + `bodhi-branch` (nếu có trên board): hai Mộc linh khí — hoa slow + nhánh bồ đề heal → defensive Mộc combo.
- Chain build: đặt hoa ở giữa chain dài — linh lực tích charge trước hoa, slow qua hoa nhận +20%, sau đó tiếp tục chain = intensity đỉnh khi tới đan.

**Anti-synergy**: build velocity-spike (cần linh lực đi nhanh để velocity factor × 2.0, §2 Layer 1) — hoa slow giảm velocity factor, đánh đổi không có lợi.
