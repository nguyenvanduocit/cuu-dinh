---
id: spiritless-lantern
ten: Đèn Vô Linh
type: lantern
element: void
rarity: Common
dropPool: Common
tags: [void, neutral]
---

# Đèn Vô Linh (`spiritless-lantern`)

## Lược tả

Đèn không nguyên tố — linh lực đi qua không bị convert, không bị buff hay debuff. Đặt trên đường đi để làm "đệm trung lập" tránh khắc bất ngờ, hoặc để bypass vùng nguy hiểm mà không thay đổi chain.

## Implicit

Linh lực chạm đèn: `element` giữ nguyên, `velocity` giữ nguyên, `charge_count` giữ nguyên. Đèn hoạt động như một waypoint trung lập — không thêm, không bớt bất kỳ thông số nào trong `collision_linh_luc_vs_linh_dan()` (§2).

**Đặc tính Vô Cực**: đèn mang `element = void` nhưng không áp `void` lên linh lực đi qua — đây là điểm khác biệt với `void-box` (convert sang random). Linh lực Hoả vào vẫn ra Hoả.

**Vai trò vật lý**: static body, kích thước trung bình. Dùng để định hướng đường đi mà không làm mất nguyên tố, hữu ích khi bảng cần "cầu nối" giữa hai linh khí mà không có linh khí phù hợp ở giữa.

## Affix pool

Bias AffixTag `utility` + `defensive`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `defensive` | Chặn đại khắc qua đèn | Linh lực đi qua đèn: nếu đang carry "đại khắc stack" (§1), xoá stack đó (reset về trung tính) |
| `utility` | Tăng kích thước hitbox | Hitbox +30% — dễ bố trí đường đi hơn trên board chật |
| `sustain` | Micro-heal khi pass qua | Linh lực pass qua đèn: linh đan +0.5 stability (§5 heal nhỏ) |
| `chain` | Tăng charge pass-through | Linh lực qua đèn: +5% intensity (waypoint nhẹ — nhỏ hơn flower 20%) |

Tags `void, neutral` → AffixTag chủ đạo `utility, defensive`.

## Build role

**Archetype**: board control / routing — không nằm trong build offensive, là công cụ bảo vệ chain và định hướng linh lực trong bảng phức tạp.

**Đạo Phái**: mọi Đạo Phái — đèn vô linh là utility piece không gắn archetype cụ thể; đặc biệt hữu ích với **Thái Cực** (`tai-chi`) khi cân bằng nguyên tố quan trọng và cần tránh khắc không mong muốn.

**Combo xác nhận**:
- `spiritless-lantern` + bất kỳ build element thuần: dùng đèn làm bước đệm khi bảng không có đủ linh khí cùng nguyên tố — tránh phải đặt linh khí sai nguyên tố làm bẻ chain.
- `spiritless-lantern` (affix `defensive`) + build dễ bị đại khắc (§1): xoá đại khắc stack trước khi linh lực tới đan — giảm risk -80% stability (§2 đại khắc).
- Bảng T10+: khi bố trí board, đèn lấp "lỗ hổng" routing mà không gây side-effect nguyên tố.

**Anti-synergy**: không có anti-synergy trực tiếp — nhưng lãng phí slot nếu bảng đã đủ linh khí cùng nguyên tố và không cần routing trung lập.
