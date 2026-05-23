---
id: fire-dragon-sword
ten: Kiếm Hoả Long
type: sword
element: fire
rarity: Common
dropPool: Common
tags: [fire, split]
---

# Kiếm Hoả Long (`fire-dragon-sword`)

## Lược tả

Kiếm lửa hình đầu rồng — lưỡi cháy đỏ rực, khi cắt không để lại vết thẳng mà để lại hai vệt lửa toả ra hai hướng. Linh khí Hoả với cơ chế **split**: linh lực Hoả đi qua kiếm bị cắt đôi thành 2 đường Hoả, mỗi đường mang -30% intensity so với gốc nhưng phủ rộng hơn.

## Implicit

Linh lực Hoả đi qua kiếm: **split thành 2 đường Hoả**, mỗi đường có **-30% intensity** so với linh lực gốc. Linh lực nguyên tố khác không bị ảnh hưởng.

Cơ chế combat-math: 2 con × 70% intensity gốc = tổng 140% intensity phân phối trên 2 hit. So với 1 hit 100%: tăng 40% tổng damage nhưng phân tán. Mỗi con tích `charge_count` riêng từ điểm split (reset về 0). Hai con đi theo quỹ đạo vật lý toả ra từ điểm split — góc toả phụ thuộc vào velocity và góc vào của linh lực gốc.

+40% tổng Hoả hit output với -30% mỗi con. Đối với đan Thổ (Hoả sinh Thổ §1): 2 × sinh hit = 2 × (+30% quality + 5% stability heal). Double sinh là cực kỳ hiệu quả.

## Affix pool

Tag roll trên `sword`:

| Affix slug | Tags | Vai trò trên Kiếm Hoả Long |
|---|---|---|
| `sword-split` | utility, offensive | Cải thiện split — giảm intensity penalty (-30% → -20%), tăng số con split (2→3), hoặc điều chỉnh góc toả |
| `sword-pierce` | offensive, elemental | Linh lực Hoả sau split pierce qua linh khí thay vì dừng lại — mỗi con hit nhiều linh khí hơn trong quỹ đạo |

## Build role

**Hoả AoE spreader** và **sinh double** cho build Hoả-Thổ hoặc build cần phủ rộng board.

- **Tương sinh Hoả→Thổ** (§1): Hoả sinh Thổ. 2 Hoả con hit 2 vị trí Thổ khác nhau = double sinh output. Mỗi sinh hit +30% quality +5% stability. Với 2 con × 70% intensity, tổng: 2 × 0.70 × 0.30 = 42% quality (vs 1 × 1.0 × 0.30 = 30%). Tăng 40% sinh output.
- **Board coverage**: 2 con toả ra phủ diện tích rộng hơn 1 linh lực đơn. Giúp reach linh khí ở rìa board hoặc trigger nhiều linh khí cùng lúc.
- **Combo `fire-bead-vase`**: vase convert Thuỷ → Hoả → kiếm split Hoả → 2 con Hoả. Một Thuỷ input = 2 Hoả output — pipeline nhân bản hiệu quả.
- **Set Ngũ Hành** (`wuxing`): trong chuỗi 5-cycle, Hoả→Thổ là mắt xích. Kiếm nhân đôi Hoả hit → Thổ nhận double sinh → Thổ sinh Kim mạnh hơn. Chuỗi 5-cycle được khuếch đại tại node Hoả.
- **Đạo Phái**: **Cửu Âm** (`nine-yin`) — Hoả intensive chain; hoặc **Linh Sơn** (`spirit-mountain`) echo Hoả sau split nhân thêm lần nữa.
- **Common/Common**: rẻ và hiệu quả. Item foundation cho bất kỳ build Hoả nào muốn phủ rộng thay vì single-target damage.
