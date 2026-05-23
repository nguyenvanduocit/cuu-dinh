---
id: yellow-qilin-statue
ten: Tượng Hoàng Lân
type: statue
element: earth
rarity: Magic
dropPool: Uncommon
tags: [earth, sustain, aura]
---

# Tượng Hoàng Lân (`yellow-qilin-statue`)

## Lược tả

Tượng Thổ phòng thủ — aura passive tăng stability max của linh đan lên +20%. Không buff damage, không đổi element — chỉ làm cho linh đan bền hơn. Linh khí core của build sinh tồn và endurance trước boss.

## Implicit

Aura passive constant: khi tượng đang ở trên board, `linh_dan.stability_max` tăng **+20** điểm (§5 §2 công thức: `clamp(stability, 0, 100 + player.stability_max_bonus)` — tượng đóng góp vào `player.stability_max_bonus`).

Với stability max = 120 thay vì 100: player có thêm 20 điểm buffer trước khi linh đan bể. Ở đầu ván khi stability = 100, player có thể nhận thêm 20 hit tương khắc nhỏ trước khi đến ngưỡng nguy hiểm.

**Tứ Tượng Thổ**: Hoàng Lân là linh thú thứ 5 hoặc biến thể Trung Ương — không thuộc Tứ Tượng chuẩn (Thanh Long/Bạch Hổ/Chu Tước/Huyền Vũ), nhưng là linh thú Thổ trung lập đặc biệt. Không kích set `four-spirits`.

**Vai trò vật lý**: statue static, aura constant. Không cần đặt gần linh khí cụ thể — aura là global khi trên board.

## Affix pool

Bias AffixTag `defensive` + `sustain` + `elemental`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `defensive` | Tăng stability max bonus | +20 → +30 (T3) stability max |
| `sustain` | Passive heal tick | Mỗi 5 giây tượng active: +1 stability linh đan (§5 heal) |
| `elemental` | Giảm khắc Mộc vào đan Thổ | Tương khắc Mộc→Thổ: stability damage -10% (§2 -40% → -36%) |
| `aoe` | Tăng aura stability max | Áp thêm +5 stability max cho mọi linh khí Thổ trong ±100px (họ có thêm durability khi map mod "Huyết Sát" §8) |

Tags `earth, sustain, aura` → AffixTag chủ đạo `defensive, sustain`.

## Build role

**Archetype**: Thổ sinh tồn / endurance — kéo dài thời gian sống của linh đan trong pháp trận khó, đặc biệt T10+ khi boss gây stability damage cao (§5 boss attack -5 đến -25).

**Đạo Phái**: **Thái Cực** (`tai-chi`) — cân bằng phòng thủ và tấn công, Hoàng Lân là trụ phòng thủ Thổ; **Hư Vô** (`void`) — build Vô Cực cần ổn định để tránh brick, tượng là buffer quan trọng.

**Combo xác nhận**:
- `yellow-qilin-statue` + `yellow-earth-bead` + `yellow-inkstone` + `yellow-sand-fan`: bộ tứ Thổ — tượng phòng thủ, bead intensity spike, nghiên loot, quạt slow; Thổ full cluster.
- `yellow-qilin-statue` + boss fight T14+: Thiên Kiếp wave -50 stability nếu unprotected (§5) — với tượng +20 stability max = có thêm 20 điểm chịu đựng, +Lôi Phù = chỉ mất -10; tượng là pre-requisite cho T14+ không brick.
- `yellow-qilin-statue` + `spiritless-lantern` (affix heal): hai nguồn stability passive — tượng +20 max + đèn +0.5/hit heal = build farm ổn định cực cao.
- Set **Ngũ Hành** (`wuxing`): Thổ là 1 leg — tượng bảo vệ stability trong khi cycle dài đang tích.

**Anti-synergy**: build offensive speed (push quality nhanh nhất có thể) — stability max không giúp push quality; dùng intensity booster thay thế. Tượng là defensive piece, không offensive.
