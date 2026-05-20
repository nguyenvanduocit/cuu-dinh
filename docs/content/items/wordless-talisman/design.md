---
id: wordless-talisman
ten: Bùa Vô Tự
type: talisman
element: void
rarity: Common
dropPool: Common
tags: [void, random]
---

# Bùa Vô Tự (`wordless-talisman`)

## Lược tả

Bùa không chữ — mỗi 2 giây, tất cả linh khí trong phạm vi bùa đổi nguyên tố ngẫu nhiên đồng loạt. Không phải linh lực đổi element, mà là linh khí đổi element — làm thay đổi cách tính `element_factor` cho mọi linh lực đi qua chúng.

## Implicit

Mỗi 2 giây: bùa roll 1 nguyên tố ngẫu nhiên trong 5 nguyên tố (`metal/wood/water/fire/earth`). **Tất cả linh khí** trong bán kính ±150px tạm thời đổi `element` sang nguyên tố đó trong 2 giây tiếp theo, sau đó bùa roll lại.

Cơ chế trong §2: `element_factor` (Layer 4) được tính dựa trên nguyên tố linh khí tại thời điểm va chạm — đổi nguyên tố linh khí làm thay đổi `ELEMENT_MATRIX[linh_luc.element][linh_dan.element]` realtime. Linh lực không đổi element — chỉ linh khí đổi.

**Vai trò vật lý**: talisman static, aura radius ±150px. Không ảnh hưởng velocity hay charge.

## Affix pool

Bias AffixTag `utility` + `elemental` + `anti-corruption`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `elemental` | Bias roll về 1 nguyên tố | 40% chance roll nguyên tố được chọn (giảm variance) |
| `utility` | Kéo dài chu kỳ | 2s → 3s chu kỳ (ổn định hơn — player có thêm thời gian tận dụng element hiện tại) |
| `anti-corruption` | Loại trừ 1 nguyên tố khỏi roll | Không bao giờ roll nguyên tố được chọn là "cấm" — tránh tương khắc với đan |
| `aoe` | Tăng bán kính | ±150px → ±200px (T3) — phủ thêm linh khí |

Tags `void, random` → AffixTag chủ đạo `utility, elemental, anti-corruption`.

## Build role

**Archetype**: Chaos / Vô Cực — biến board thành thực nghiệm nguyên tố liên tục. Phù hợp player muốn gameplay bất ngờ hoặc farm ngẫu nhiên T1-T5.

**Đạo Phái**: **Hư Vô** (`void`) — Vô Cực tương tác trung tính (§1 `n`) với mọi nguyên tố; build Hư Vô không bị ảnh hưởng xấu dù linh khí đổi element; **Thái Cực** (`tai-chi`) — linh hoạt nguyên tố, khai thác tương sinh ngẫu nhiên.

**Combo xác nhận**:
- `wordless-talisman` + `void-box`: bùa đổi linh khí, hộp đổi linh lực — hai lớp random đồng thời. Chaos cực đại, nhưng xác suất tương sinh ngẫu nhiên cũng cực đại.
- `wordless-talisman` (affix anti-corruption cấm nguyên tố khắc đan) + build single-element đan: tuy board dao động nhưng loại trừ đúng nguyên tố nguy hiểm — semi-controlled chaos.
- `wordless-talisman` + set **Ngũ Hành** (`wuxing`): bùa tự động xoay nguyên tố linh khí → hỗ trợ cycle ngũ hành mà không cần player căn chỉnh thủ công — nhưng rủi ro xoay sai thứ tự cycle.

**Anti-synergy**: build Hoả thuần hoặc Kim thuần cần element lock — bùa phá lock liên tục. Dùng `red-lantern` hoặc `white-tiger-statue` thay thế cho build element cố định.
