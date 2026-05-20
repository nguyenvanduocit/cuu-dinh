---
id: amitabha-statue
ten: Tượng Phật A Di Đà
type: statue
element: void
category: sustain-defensive
dropWeight: 100
dropRateHint: atlas drop, uncommon
---

# Tượng Phật A Di Đà (`amitabha-statue`)

## Lược tả

Cổ vật sustain nền tảng cho lối Hộ Pháp: mỗi ván thắng bồi thêm phẩm chất cho linh đan — chậm mà chắc, đường dài thắng đường ngắn.

## Cơ chế

Mỗi khi hoàn tất một ván (đạt kim đan target, không bể), linh đan nhận **+5 quality phẳng** (flat, không qua multiplier) — cộng thẳng vào tiến trình phẩm cấp hiện tại (combat-math §6).

| Tier | Quality mỗi ván win |
| --- | --- |
| T1 | +5 |
| T2 | +8 |
| T3 | +12, cộng cả khi "ván hoà" (đạt ≥80% target) |

- **Flat, không scale intensity** → lớn tương đối ở phẩm thấp (Phàm cần 100%), nhỏ dần ở phẩm cao (Thánh cần 6400%) → bánh đà đầu-giữa game, không phá end-game.
- Cộng dồn qua 5-8 ván một pháp trận → +25 đến +40 quality drip mỗi pháp trận.
- **Stack** với các nguồn flat quality khác (combat-math §6).

## Đánh đổi (Downside)

- **-10% intensity tổng** khi mang Tượng Phật — linh lực "an nhiên" hơn. Đổi tốc độ active lấy drip ổn định: build aggressive/fast (Cuồng Sát, all-in) mất nhiều hơn được. Đây là lý do nó là *cổ vật build-defining cho lối chậm*, không phải free sustain.
- Drip gắn "ván win" → vô dụng trong pháp trận ngắn (1-2 ván) hoặc khi đang thua liên tục.

## Vì sao (WHY)

- **Flat thay vì %**: nếu là %, scale vô hạn end-game và trivial-hoá phẩm cao; flat tự suy giảm độ liên quan đúng lúc → không cần nerf về sau (second-order thinking).
- **+5 (không +20)**: combat-math §9 time-to-target ~115h tới lvl 100 — sustain quá cao rút ngắn loop dopamine; +5 đủ "cảm thấy thưởng" mà không bẻ cong đường cong.
- **Gắn 'ván win'**: thưởng cho ổn định (không bể), củng cố fantasy Hộ Pháp "chậm mà vững".

## Synergy & Build

- **Archetype**: Hộ Pháp (sustain-defensive). Đạo Phái **Thái Cực** (Vạn Pháp Dung Hoà +5% mọi chỉ số, ổn định đa nguyên tố) là khung tự nhiên.
- **Combo**: `jade-spirit-flower` (stability cap +30%) + `pure-heart-bead` (dispel tâm ma) → bộ ba "không bao giờ bể"; chạy pháp trận dài (Đan Pháp Marathon) tối đa số ván win.
- **Anti-synergy**: build all-in nhanh (`doomed-short-life-charm`, `primordial-black-elixir`) — rút ngắn pháp trận / hi sinh stability → mất số ván win để tích flat quality.
- **Drop**: dropWeight 100, `uncommon` — cổ vật starter sustain, dễ gặp sớm, nền cho người mới.
