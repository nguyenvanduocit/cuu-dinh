---
id: ancestral-necklace
ten: Vòng Cổ Tổ Phụ
type: talisman
element: void
category: sustain-defensive
dropWeight: 100
dropRateHint: atlas drop, rare
---

# Vòng Cổ Tổ Phụ (`ancestral-necklace`)

## Lược tả

Cổ vật huyết mạch tổ tộc: truyền kinh nghiệm bao đời vào đan sư, nâng cấp độ hiệu quả trong pháp trận — nhưng bộ máy Lò nặng nề hơn, mòn từng chút theo từng ván.

## Cơ chế

Trong suốt pháp trận đang diễn ra, mọi công thức liên quan đến **cấp độ nhân vật** (combat-math §2 `player.level * 0.01`) tính như player đang ở **cấp +5 so với cấp thật**. Tất cả multiplier phụ thuộc level đều hưởng lợi.

| Tier | Level giả lập tăng thêm | Lò affix tier bị giảm |
| --- | --- | --- |
| T1 | +5 cấp (tức +5% intensity) | Tất cả affix trên Lò đọc như thấp hơn **2 tier** |
| T2 | +8 cấp (+8% intensity) | Tất cả affix trên Lò đọc như thấp hơn **1 tier** |
| T3 | +12 cấp (+12% intensity) | Tất cả affix trên Lò đọc như thấp hơn **1 tier**, nhưng `Lò.Đỉnh` element bias **không bị giảm** |

- **Level giả lập**: áp vào `player.level * 0.01` trong công thức player_mult — ở cấp 50, T1 tương đương cấp 55 (thêm 5% vào player_mult).
- **Lò affix tier penalty**: `Lò.Khắc_Phù` T3 đọc như T1 (mất tới +10% intensity global), `Lò.Thân` T2 đọc như base — gear cứng mà Lò hóa rỗng.
- Penalty không cộng dồn với map mod hay ascendancy — chỉ ảnh hưởng đọc affix tier trong `player_mult`.

## Đánh đổi (Downside)

- **Lò affix tier bị giảm 2 bậc (T1), 1 bậc (T2/T3)**: mặc dù Lò vật lý có affix T3, game đọc chúng như T1/T2. `Lò.Khắc_Phù` T3 thông thường cho +25% intensity global; khi bị đọc là T1 → chỉ còn ~+10%. Thực tế mất 15% intensity global từ Lò — nhiều hơn mức +5% được từ level buff ở cấp thấp.
- Build muốn tối đa Lò affix (đặc biệt `Lò.Khắc_Phù` T3) bị thiệt nặng hơn được.
- Không tương thích với `heaven-decree-furnace` (đổi phần thưởng theo affix tier thật) — hai cổ vật đọc cùng affix tier theo hai cách mâu thuẫn.

## Vì sao (WHY)

- **+5 cấp không phải free**: combat-math §9 targets T16 win rate 45% ở cấp 100. Level +5 tương đương 5% intensity — đủ có nghĩa ở mid-game (cấp 30-60), gần vô nghĩa end-game (cấp 95+). Tự suy giảm khi không cần.
- **Lò penalty counter-weights**: player_mult từ Lò affix (combat-math §2, §3) đóng góp 0-25% intensity global. Giảm 15% từ penalty Lò > 5% gain từ level ở cấp thấp → buộc trang bị đúng giai đoạn (mid-game progression build, không phải end-game gear-locked build).
- **Fantasy power fantasy nhưng mechanically bounded**: Tổ Phụ truyền kinh nghiệm, nhưng Lò thô sơ hơn — bộ máy già cũ, không phải huyền thuật vô hạn.

## Synergy & Build

- **Archetype**: mid-game leveling accelerator, bù cấp cho player mới hoặc build thiếu tree points. Đạo Phái khớp nhất: **Thái Cực** (Vạn Pháp Dung Hoà +5% mọi chỉ số — level bonus cộng hưởng toàn diện) và **Cửu Âm** (aura bonus nhân level không phụ thuộc Lò affix).
- **Combo**: Lò slots tập trung vào `Lò.Đỉnh` element bias (T3 bias không bị giảm ở T3) + passive tree intensity nodes thay thế mất mát Lò affix. Dùng `jade-spirit-flower` (stability cap +30%) bù thiếu sustain affix từ Lò.
- **Anti-synergy**: build end-game gear-locked với `Lò.Khắc_Phù` T3 đã farm được — mang Vòng Cổ hóa Lò thành phế; `heaven-decree-furnace` đọc affix tier thật (mâu thuẫn trực tiếp).
- **Drop**: dropWeight 100, `atlas drop, rare` — cổ vật mid-game hợp lý, nên gặp trong giai đoạn leveling.
