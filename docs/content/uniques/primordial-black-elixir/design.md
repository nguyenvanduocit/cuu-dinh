---
id: primordial-black-elixir
ten: Hỗn Nguyên Hắc Đan
type: box
element: void
category: chaos-risk
dropWeight: 60
dropRateHint: atlas drop, rare
---

# Hỗn Nguyên Hắc Đan (`primordial-black-elixir`)

## Lược tả

Cổ vật speedrun cực đoan: mỗi pháp trận, linh đan nhảy ngay lên phẩm cấp kế tiếp khi bắt đầu ván đầu tiên — nhưng stability bị khoá ở 25% suốt pháp trận đó. Đạt đỉnh trong một chớp mắt, hay bể ngay ở điểm xuất phát.

## Cơ chế

Khi bắt đầu **ván đầu tiên** của mỗi pháp trận, linh đan được instant **+1 phẩm cấp** (skip toàn bộ quality cần tích lũy cho phẩm đó, bắt đầu phẩm mới ở quality 0% — combat-math §6). Đồng thời, **stability cap** trong suốt pháp trận bị khoá tối đa **25** (thay vì 100+). Không có cách nào heal stability vượt 25 khi mang item này.

| Tier | Phẩm cấp tăng | Stability cap |
|---|---|---|
| T1 | +1 phẩm ngay ván 1 | Max 25 stability (không heal vượt 25) |
| T2 | +1 phẩm ngay ván 1 | Max 30 stability; heal vẫn hoạt động tới cap |
| T3 | +1 phẩm ngay ván 1; nếu pháp trận thắng, +5 flat quality bonus | Max 35 stability; heal tới cap |

- **+1 phẩm** tương đương skip 100%-6400% quality tùy phẩm đang ở (combat-math §6, Phàm → Linh skip 100%, Thần → Cổ skip 800%, v.v.) — value tăng mạnh ở phẩm cao.
- **Stability cap 25**: đại khắc gây -80% intensity × stability delta → một cú đại khắc mid-intensity đủ instant bể (combat-math §5: stability ≤ 25 + đại khắc = 10% instant brick, nhưng với cap = 25 thì **bất kỳ lúc nào** đại khắc xảy ra đều ở threshold nguy hiểm).
- Tương sinh heal +intensity × 0.05 vẫn hoạt động, nhưng chạm cap 25 ngay — không thể tích stability.
- Đại khắc (§1) với stability cố định ≤ 25: brick_chance +10% **mỗi cú** đại khắc → bể rất nhanh nếu chain không kiểm soát.

## Đánh đổi (Downside)

- **Stability cap 25**: đây là downside cơ học thực sự — player phải tuyệt đối tránh tương khắc và đại khắc suốt pháp trận. Một cú đại khắc = roulette bể ngay.
- **Board phải mono-element hoặc chain thuận**: không thể chấp nhận pha tạp nguyên tố — tương khắc dù nhẹ cũng phá cap.
- **Không combo được với nguồn stability**: `jade-spirit-flower` (stability cap +30% → vẫn bị override về 25), `pure-heart-bead` (dispel debuff nhưng cap vẫn 25), `amitabha-statue` không giúp gì cho stability.
- Bằng chứng số: ván thường T5, 1 cú tương khắc intensity 4.13 → stability -1.65. Chỉ cần 15 cú tương khắc nhỏ để bể từ 25 về 0.

## Vì sao (WHY)

- **+1 phẩm ngay**: phù hợp "speedrun" fantasy, nhưng gated sau stability cliff — không thể khai thác trừ khi biết board hoàn toàn sạch khắc.
- **Cap 25 thay vì -75% flat**: cách biểu diễn "75% mất" ban đầu (stub) đơn giản hơn nhưng mơ hồ khi heal; "cap 25" là contract rõ ràng và tương tác với công thức instant-bể hiện có (§5) — không cần thêm rule mới.
- **Không override tương sinh heal**: tương sinh vẫn hoạt động (dù bị cap) — giữ nguyên chiến lược mono-element thuận, không làm healing hoàn toàn vô nghĩa.

## Synergy & Build

- **Archetype**: Speedrun phẩm cao — skip phẩm Thần/Cổ/Tiên bằng item, chạy pháp trận ngắn với board sạch tương khắc. Đạo Phái **Cửu Âm** (Nguyền Linh Lực: aura giảm phòng thủ linh khí → tăng intensity sinh → quality tăng nhanh, giảm số ván cần thiết) và **Linh Sơn** (echo tự thêm Mộc hit thuận — nếu đan Mộc hoặc Thuỷ).
- **Combo cốt lõi**: Đan Pháp **Hỗn Nguyên** (bonus chaos element void — neutral với mọi nguyên tố → ít khắc nhất) + linh khí full mono-element matching đan + `wind-thunder-fan` (reset hướng nếu phát hiện chain đang đổ vào khắc).
- **Anti-synergy**: `primordial-jade-bead` (nguyên tố random mỗi ván → có khắc random → instant bể); `nine-abyss-black-elixir` (×3 intensity → tương khắc gây stability damage ×3 → bể còn nhanh hơn từ cap 25).
- **Drop**: dropWeight 60, `atlas drop, rare` — reward endgame player hiểu board control tuyệt đối.
