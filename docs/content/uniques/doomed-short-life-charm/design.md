---
id: doomed-short-life-charm
ten: Mạt Niên Đoản Mệnh
type: talisman
element: void
category: chaos-risk
dropWeight: 60
dropRateHint: atlas drop, rare
---

# Mạt Niên Đoản Mệnh (`doomed-short-life-charm`)

## Lược tả

Cổ vật chaos-risk cực đoan cho lối All-in: đẩy progress linh đan lên gấp đôi nhưng cắt phân nửa sức chịu đựng. Người cầm bùa này không có chỗ cho sai lầm — hoặc thắng nhanh, hoặc bể sớm.

## Cơ chế

Mang `doomed-short-life-charm` thay đổi căn bản hai thông số:

| Tier | Quality gain | Stability max | Ghi chú |
| --- | --- | --- | --- |
| T1 | ×2.0 mọi quality gain | −50% stability max (50 thay vì 100) | Stability heal cũng ÷2 |
| T2 | ×2.0 quality gain | −40% stability max (60) + stability heal ÷2 | Stability heal ÷2 |
| T3 | ×2.5 quality gain | −30% stability max (70) + stability heal ÷1.5 | Giảm nhẹ penalty, tăng power |

- **×2.0 quality gain** áp lên mọi nguồn: tương sinh (+30% → +60%), đồng hành (+10% → +20%), flat quality (Tượng Phật +5 → +10), crit multiplier (combat-math §2, §4) — tất cả nhân 2x.
- **Stability max −50% (T1)**: cap = 50. Mọi tương khắc hit (−intensity×0.40, combat-math §5) nguy hiểm gấp đôi vì buffer hẹp hơn. Đại khắc kích brick chance 10% từ stability < 25 — nghĩa là chỉ cần 1-2 đòn đại khắc.
- **Stability heal ÷2**: tương sinh heal (+intensity×0.05, §5) giảm xuống +intensity×0.025 → không thể "farm heal" bù buffer thiếu.

## Đánh đổi (Downside)

Stability max −50% là downside cốt lõi — không phải flat penalty tùy tiện mà là cơ chế đối trọng trực tiếp:
- Với cap 50, chỉ cần 2 tương khắc hit intensity ≥ 60 là bể (combat-math §5: −intensity×0.40 × 2 = −48, còn 2 stability).
- Đại khắc chain (combo §1): một chain dài xuyên qua 2 tầng khắc có thể instant bể ngay ván đầu.
- Đan Pháp **Tử Sinh** (flip-flop nguyên tố) cực kỳ nguy hiểm — board không ổn định nguyên tố → tương khắc liên tục.

## Vì sao (WHY)

- **×2.0 quality, không ×3.0**: combat-math §6 quality curve nhân đôi mỗi phẩm — ×2.0 tương đương "bỏ qua khoảng 40-50 hit trung bình" ở mỗi phẩm; ×3.0 sẽ trivial-hoá đường cong Thần/Cổ, phá win-rate T16 (§9).
- **Stability heal ÷2**: nếu chỉ cắt max stability nhưng giữ heal tốc độ, player có thể "heal up" bằng cách xây tương sinh chain → loại bỏ rủi ro thực. Cắt heal đóng lỗ hổng này.
- **chaos-risk (không phải build-defining)**: proc quality là guaranteed nhưng "sống đủ lâu để hưởng" là không chắc → đúng entropy chaos-risk.

## Synergy & Build

- **Archetype**: All-in glass cannon. Đạo Phái **Vô Cực** (Hỗn Nguyên Khuếch Đại — mọi random ×2 biên độ): khi chạy Mạt Niên, quality spike cực đại VÀ stability collapse cũng cực đại — phần thưởng và rủi ro đều cực đoan, đúng tính cách Vô Cực.
- **Combo**: `pure-heart-bead` (dispel tâm ma debuff — mỗi debuff tick −1 stability/s, §5, cực kỳ chí mạng với cap 50) + Đan Pháp **Tiêu Chuẩn** (ít biến số nguyên tố nhất, giảm tương khắc random).
- **Anti-synergy**: `jade-spirit-flower` (stability cap +30%) — hai cổ vật tác động ngược nhau lên stability max, không đồng thời có ý nghĩa; build sustain chậm (`amitabha-statue`) — flat quality drip theo ván win bị lấn át bởi ×2.0 multiplier, nhưng không sống đủ ván để tích.
- **Drop**: dropWeight 60, `atlas drop, rare` — hiếm hơn uniques thường vì power spike cực đoan.
