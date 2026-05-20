---
id: arhat-wind-rain
ten: Tượng La Hán Phong Vũ
type: statue
element: void
rarity: Rare
dropPool: Rare
tags: [tuong, la-han, set, speed, chaos]
---

# Tượng La Hán Phong Vũ (`arhat-wind-rain`)

## Lược tả

Thành viên bộ **Thập Bát La Hán** (`eighteen-arhats`), hiện thân của gió mưa hỗn loạn — vị La Hán tượng đứng thẳng, áo bay phấp phới, một tay chỉ trời một tay chỉ đất. Trên board, tượng này biến tốc độ linh lực thành biến số hỗn loạn: cứ mỗi 5 giây, tất cả linh lực qua phạm vi của tượng thay đổi tốc độ ngẫu nhiên ±30%.

## Implicit

Mọi linh lực đi qua bán kính ±100px của tượng: **tốc độ thay đổi ngẫu nhiên ±30%** so với vận tốc hiện tại, chu kỳ **mỗi 5 giây**.

Cơ chế combat-math: velocity factor (§2) dao động 0.5×–2.0×. Tốc độ linh lực ảnh hưởng trực tiếp `velocity / VELOCITY_BASE` trong công thức intensity. Biến động +30% = velocity × 1.3 → intensity tăng ~30%; -30% = velocity × 0.7 → intensity giảm ~30%. Với chu kỳ 5 giây, trong một pháp trận 300 giây có 60 lần xáo trộn — board không bao giờ ổn định.

Đây là **chaos modifier**, không phải buff thuần. Người chơi cần tận dụng hoặc chấp nhận variance.

## Affix pool

Tag roll trên `statue`:

| Affix slug | Tags | Vai trò trên Tượng La Hán Phong Vũ |
|---|---|---|
| `statue-stabilize` | defensive, sustain | Giảm thiệt hại khi linh khí bị va chạm bất ngờ do tốc độ tăng đột biến — bảo vệ durability (§8) |
| `statue-four-spirit-aura` | elemental, aoe | Tạo field nguyên tố xung quanh — cộng hưởng khi velocity tăng để cấp hit cao hơn |
| `statue-beast-guard` | defensive, anti-corruption | Giảm Tâm Ma debuff — có ích vì chaos speed tăng số hit/giây, tăng cả Tâm Ma trigger rate |

## Build role

**High-variance speed amplifier** cho build chấp nhận RNG để đổi lấy ceiling cao hơn.

- **Bộ Thập Bát La Hán** (`eighteen-arhats`): ghép đủ La Hán để nhận set bonus bù đắp variance. Set bonus thường bao gồm floor damage/stability, tránh tình huống -30% tốc độ crash board.
- **Archetype Cuồng Sát** (§4): 100% crit chance × multi cao → biến động velocity không quan trọng (mọi hit đều crit). Tượng Phong Vũ tạo ra nhiều hit hơn khi +30% tốc độ → tổng DPS tăng.
- **Đạo Phái**: **Cửu Âm** (`nine-yin`) — khai thác chaos và linh lực nhanh để trigger chain phức tạp; hoặc **Linh Sơn** (`spirit-mountain`) nếu echo xuất hiện nhiều hơn khi board hỗn loạn.
- **Combo board**: đặt tượng này xa linh đan (góc board) để linh lực bị ảnh hưởng speed trước khi hit đan — nếu may mắn +30% tốc độ, intensity spike đáng kể. Tránh đặt cạnh linh khí fragile (durability thấp §8) vì va chạm cao tốc ăn mòn nhanh.
- **Anti-synergy**: build "Bùng Bạo" (§4, low crit × high multi) cần control chính xác timing — Phong Vũ làm loạn mọi timing kế hoạch. Tránh kết hợp.
