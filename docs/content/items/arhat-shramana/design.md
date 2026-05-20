---
id: arhat-shramana
ten: Tượng La Hán Sa Môn
type: statue
element: void
rarity: Legendary
dropPool: VeryRare
tags: [tuong, la-han, set, sustain, counter]
---

# Tượng La Hán Sa Môn (`arhat-shramana`)

## Lược tả

Tượng Sa Môn — người đã dứt bỏ mọi ràng buộc thế gian. Linh đan được bảo vệ khỏi stability loss khi linh khí trong bộ va chạm với element tương khắc — cho phép chạy ngay cả trên board hỗn loạn element mà không lo bể đan.

## Implicit

Khi **linh khí trong bộ** va chạm với linh lực tương khắc element: `linh đan stability không giảm` từ va chạm đó (combat-math: tương khắc → stability -40% bình thường; double khắc chain → -80% — Sa Môn chặn hoàn toàn cả hai). Không ngăn quality effect: linh lực tương khắc vẫn không tăng quality (tương khắc không heal quality). Vật lý: passive global — không cần tượng ở gần điểm va chạm.

## Affix pool

Dựa trên tags `[tuong, la-han, set, sustain, counter]` và base type `statue`:
- **Prefix** (`anti-corruption`, `defensive`, `sustain`): `% chance stability PHỤC HỒI +X% khi tương khắc (ngược lại hoàn toàn)`, `tương khắc hit: convert sang neutral hit (quality +5% thay vì -0%)`, `linh đan stability cap +X% khi tượng này trong bộ`
- **Suffix** (`defensive`, `seal-safety`, `utility`): `% chance tương khắc hit trigger aura healing ±150px`, `linh khí bị nhiễm khí tương khắc trong bộ: hồi phục về element gốc X% nhanh hơn`, `boss tương khắc attack bị redirect thành neutral hit X%`

## Build role

**Archetype**: Anti-khắc / chaos-board insurance. Sa Môn là lá thần bài khi chạy board phức tạp hoặc map mod **Đại Khắc** (50% linh lực flip element) — không có Sa Môn, tương khắc liên tục = stability sụt nhanh. Với Sa Môn, đan sư có thể đặt linh khí hỗn hợp element mà không sợ tự phá stability của mình. Combo tốt nhất: **Tượng La Hán Hỗn Nguyên** (`arhat-primordial-chaos`, 30% random element) + Sa Môn (chặn stability loss từ random khắc) → chaos mà không penalty. Đạo Phái: mọi archetype chạy content chaos cao (T14-T16, Đan Pháp Tử Sinh/Hỗn Nguyên).
