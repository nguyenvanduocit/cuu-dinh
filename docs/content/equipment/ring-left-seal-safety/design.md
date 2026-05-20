---
id: ring-left-seal-safety
ten: Đồ Sương Phong Ấn An Toàn (Trái)
slot: ringL
rarity: Legendary
variant: Thần
isUnique: false
---

# Đồ Sương Phong Ấn An Toàn (Trái) (`ring-left-seal-safety`)

## Lược tả

Nhẫn sương thiên thanh khắc ký hiệu Phong Ấn cổ đại — linh lực trong nhẫn thẩm thấu vào từng Phong Ấn đặt trên linh khí, gia cố từ bên trong, giảm xác suất brick thất thủ. Nhẫn trái phải cùng khắc ký hiệu Phong Ấn đối xứng — mỗi nhẫn một nửa câu chú bảo hộ.

## Implicit

**+10% intensity mỗi Đồ Sương — -3% Phong Ấn brick chance, cộng dồn với tất cả nguồn giảm brick khác.**

Cơ chế chi tiết (Legendary — Thần):

**Intensity bonus (§3 combat-math):**
- Mỗi Đồ Sương trang bị: **+10% intensity** toàn bộ linh lực trong ván.
- Trang bị cả 2 Đồ Sương (L+R) = **+20% intensity tổng**.

**Phong Ấn brick safety (implicit riêng của variant seal-safety):**
- Mọi lần thực hiện Phong Ấn trên linh khí: **xác suất brick (mất affix vĩnh viễn) giảm 3%** tuyệt đối (không phải %).
- "Cộng dồn với tất cả nguồn giảm brick khác" — additive: passive tree node "Vạn Cổ Bất Phá" (-5%) + 2 nhẫn này (-6%) + affix "Ấn Kiên" (-2%) = tổng -13% brick chance.
- Trang bị cả `ring-left-seal-safety` + `ring-right-seal-safety` = **-6% tổng brick chance**.
- Tham chiếu: Phong Ấn là 1 trong 6 trụ gambling — brick = mất affix vĩnh viễn (pain level A theo decision #4), nhẫn này bảo vệ khỏi kết quả tệ nhất của gambling.

Rarity scale (seal safety):
| Rarity | Intensity | Brick chance giảm |
|---|---|---|
| Common (Phàm) | +10% | Không có |
| Magic (Linh) | +10% | -1% |
| Rare (Bảo) | +10% | -2% |
| Legendary (Thần) | +10% | -3% |

## Slot role

**Đồ Sương (ringL)** — nhẫn sương trái trong Lò Luyện Đan. Đồ Sương +10% intensity base cố định (§3); Phong Ấn An Toàn hướng utility phụ vào **seal risk mitigation** — giảm downside của Phong Ấn gambling mà không ảnh hưởng upside. Tier Legendary: brick safety tuyệt đối quan trọng hơn ở atlas T10+ khi linh khí được Phong Ấn là Legendary có value cao. Mirror pair với `ring-right-seal-safety`.

## Build use

- **Phong Ấn heavy build**: build đầu tư nhiều vào Phong Ấn linh khí Legendary (nhiều lần seal/pháp trận) — -6% brick chance cộng dồn các nguồn khác đủ để đưa brick risk về dưới 10%.
- **Combo `handle-left-seal-swift` / `handle-right-seal-swift`**: free Phong Ấn/ván (Quai Common) + giảm brick risk (nhẫn Legendary) = volume seal cao với risk thấp.
- **Combo passive "Vạn Cổ Bất Phá"**: -5% (node) + -6% (2 nhẫn) = -11% brick tuyệt đối — Phong Ấn trở thành low-risk operation.
- **Atlas T10-T16**: linh khí Legendary đạt đến điểm value cao → từng brick là mất mát lớn → nhẫn này là bảo hiểm thiết yếu.
- **Anti-synergy**: build không đầu tư vào Phong Ấn (ít seal/pháp trận) không khai thác được implicit — slot tốt hơn dùng cho `ring-left-corruption-counter` hoặc `ring-left-spirit-record`.
