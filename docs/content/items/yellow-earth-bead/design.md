---
id: yellow-earth-bead
ten: Châu Hoàng Thổ
type: bead
element: earth
rarity: Magic
dropPool: Uncommon
tags: [earth, slow, charge]
---

# Châu Hoàng Thổ (`yellow-earth-bead`)

## Lược tả

Châu Thổ stagger — linh lực chạm vào dừng hẳn 1 giây rồi tiếp tục với +30% intensity. Không phải slow tiệm tiến như `spirit-lotus-flower` — mà là dừng hẳn, rồi bùng. Cơ chế high-risk cho build muốn spike intensity đơn.

## Implicit

Linh lực chạm vào Châu Hoàng Thổ: **dừng hoàn toàn** (velocity = 0) trong 1 giây, sau đó tiếp tục với hướng ban đầu và `velocity` gốc × 1.0 (không thay đổi velocity) nhưng nhận +30% intensity flat vào `base` (§2 Layer 1, additive với velocity factor và charge_count).

Trong 1 giây dừng: linh lực vẫn tồn tại trên board (không biến mất), không tương tác với bất kỳ linh khí nào. Sau đó tiếp tục chain bình thường.

**Khác với `spirit-lotus-flower`**: hoa slow 25% + 20% exit bonus (gradual); bead dừng hẳn + 30% exit bonus (binary). Bead mạnh hơn nhưng player mất kiểm soát 1s.

**Vai trò vật lý**: bead static. Linh lực "đóng băng" tại vị trí bead 1s — visual feedback rõ (linh lực treo lơ lửng).

## Affix pool

Bias AffixTag `chain` + `offensive` + `sustain`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `offensive` | Tăng intensity bonus | +30% → +40% (T3) flat khi rời bead |
| `chain` | Giảm thời gian dừng | 1s → 0.6s (T3) — ít mất kiểm soát hơn |
| `sustain` | Heal trong thời gian dừng | Trong 1s đóng băng: linh đan +1 stability (§5 passive tick) |
| `elemental` | Convert sang Thổ khi dừng | Trong 1s dừng, linh lực bị convert sang `earth` (đất giữ lại và đổi màu) |

Tags `earth, slow, charge` → AffixTag chủ đạo `chain, offensive`.

## Build role

**Archetype**: Thổ spike / stagger build — xây board để linh lực đi qua nhiều bead Thổ, mỗi bead cho +30% intensity riêng. Thổ sinh Kim (§1) → tương sinh mạnh nếu đan Kim.

**Đạo Phái**: **Thái Cực** (`tai-chi`) — Thổ sinh Kim, dùng bead Thổ để build intensity rồi chain sang Kim đan; **Linh Sơn** (`spirit-mountain`) — echo chờ linh lực ra khỏi dừng rồi follow, nhân số hit sau stagger.

**Combo xác nhận**:
- `yellow-earth-bead` × 2+ trên board: linh lực đi qua nhiều bead Thổ — mỗi bead +30%, nhiều bead = tích đủ trước khi tới đan.
- `yellow-earth-bead` + `yellow-sand-fan`: bão cát slow 40% linh lực khác vào đúng vị trí bead — tăng xác suất linh lực chạm bead.
- `yellow-earth-bead` + `yellow-qilin-statue`: bead tích intensity Thổ, tượng +20% stability max → đủ buffer để chịu hit khắc trong khi tích charge.
- Set **Ngũ Hành** (`wuxing`): Thổ là 1 trong 5 — bead đóng vai trò intensity booster cho Thổ leg của cycle.

**Anti-synergy**: build velocity-speed (cần linh lực luôn di chuyển để tích charge liên tục) — dừng hẳn 1s phá chain, tổng charge_count không tăng trong thời gian đóng băng.
