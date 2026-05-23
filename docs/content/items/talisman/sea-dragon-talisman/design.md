---
id: sea-dragon-talisman
ten: Bùa Hải Long
type: talisman
element: water
rarity: Rare
dropPool: Rare
tags: [water, convert, oneshot]
---

# Bùa Hải Long (`sea-dragon-talisman`)

## Lược tả

Bùa Thuỷ hiếm, dùng được đúng một lần mỗi ván — khi kích hoạt, toàn bộ linh lực trên board lập tức trở thành Thuỷ trong 5 giây. Công cụ can thiệp khẩn cấp, không phải nền tảng lưới.

## Implicit

**1×/ván**: khi player kích hoạt bùa (click/tap), mọi linh lực đang tồn tại trên board và mọi linh lực spawn mới trong 5 giây tiếp theo đều có `element = water`. Sau 5 giây, nguyên tố trở về bình thường.

Cơ chế áp dụng toàn cục — ghi đè `element_factor` (§2 Layer 4) của tất cả va chạm trong cửa sổ 5 giây. Bùa có cooldown hết ván (không thể reset).

**Vai trò vật lý**: talisman tĩnh trên board, trigger on-demand. Không ảnh hưởng `velocity` hay `charge_count` (§2 Layer 1).

## Affix pool

Bias AffixTag `utility` + `anti-corruption`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `utility` | Kéo dài cửa sổ Thuỷ | +1s thêm (từ 5s → 6s tối đa T3) |
| `anti-corruption` | Chặn tương khắc trong cửa sổ | Linh lực Hoả không bị tính khắc Thuỷ với đan Hoả trong 5s (giảm rủi ro self-sabotage) |
| `elemental` | Tăng intensity Thuỷ trong cửa sổ | Mọi hit Thuỷ trong 5s: +10% intensity thêm (§2 Layer 2) |
| `currency-control` | Rút ngắn cooldown | Cho phép dùng lại ở ván tiếp theo sớm hơn (nếu map cho phép nhiều ván) |

Tags `water, convert, oneshot` → AffixTag chủ đạo `utility, anti-corruption`.

## Build role

**Archetype**: Thuỷ burst — dùng đúng timing khi linh đan đang cần push quality lên hoặc khi stability thấp cần tương sinh Thuỷ→Mộc→Hoả chain.

**Đạo Phái**: **Thái Cực** (`tai-chi`) — cân bằng nguyên tố, khai thác cửa sổ Thuỷ để kích tương sinh nhanh; **Cửu Âm** (`nine-yin`) — build Thuỷ nặng, cửa sổ 5s nhân số hit Thuỷ tối đa.

**Combo xác nhận**:
- `sea-dragon-talisman` + `water-dragon-bead`: kích bùa → toàn Thuỷ → bead chain nhảy tới linh khí gần nhất, mỗi hop +20% charge (§2) — 5s chain Thuỷ liên tục.
- `sea-dragon-talisman` + `azure-dragon-bead`: hai linh khí Thuỷ Long kết hợp trong cửa sổ = Tứ Tượng Thuỷ tụ, intensity Thuỷ bùng cao.
- Dùng trước boss wave: convert toàn Thuỷ để tương sinh đan Mộc/kim push quality nhanh trước khi boss debuff ổn định.

**Anti-synergy**: build Vô Cực (`void`) hoặc random element (`wordless-talisman`, `void-box`) — ghi đè ngẫu nhiên làm lãng phí cửa sổ oneshot Thuỷ.
