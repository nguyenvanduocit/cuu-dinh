---
id: nine-grade-kasaya
ten: Áo Cà Sa Cửu Phẩm
type: talisman
element: void
category: sustain-defensive
dropWeight: 100
dropRateHint: atlas drop, rare
---

# Áo Cà Sa Cửu Phẩm (`nine-grade-kasaya`)

## Lược tả

Cổ vật sustain-defensive cho lối Hộ Pháp mở rộng: thêm 1 slot linh khí tạm trong suốt pháp trận, nhưng slot mở rộng này chỉ nhận linh khí **nguyên tố Thổ** — và mọi linh khí Thổ trên board (kể cả slot thường) nhận -15% intensity.

## Cơ chế

Khi trang bị Áo Cà Sa Cửu Phẩm, board mở thêm **1 slot linh khí phụ** tồn tại suốt pháp trận. Slot này chỉ chấp nhận linh khí nguyên tố **Thổ** (earth). Mọi linh khí Thổ hiện diện trên board (cả slot thường lẫn slot phụ) nhận **-15% intensity** đối với va chạm chúng phát sinh — penalty áp vào player_mult trước khi tính map_mult (combat-math §2).

| Tier | Slot phụ | Penalty intensity Thổ |
|---|---|---|
| T1 | +1 slot Thổ, tạm trong pháp trận | -15% intensity mọi linh khí Thổ |
| T2 | +1 slot Thổ | -10% intensity Thổ; slot phụ miễn penalty |
| T3 | +1 slot Thổ | -10% intensity Thổ; slot phụ miễn penalty; khi slot phụ bị vỡ (map mod Huyết Sát), hồi lại tự động sau 1 ván |

- Slot phụ hoạt động như slot bình thường về mọi mặt (chain, charge_count, durability) — chỉ bị giới hạn nguyên tố.
- **Thổ là nguyên tố tương sinh Mộc** và **tương khắc Thuỷ** (combat-math §1) — slot phụ Thổ mở ra chain path mới nhưng làm yếu engine Thổ hiện có.
- Tổng board sau trang bị: 6 slot → 7 slot (hoặc nhiều hơn nếu kết hợp `landscape-map`).

## Đánh đổi (Downside)

- **-15% intensity tất cả linh khí Thổ** (T1/T2): build nặng Thổ mất đáng kể output — slot thêm không bù nổi nếu Thổ là nguyên tố chính.
- **Slot phụ chỉ nhận Thổ**: lock cứng nguyên tố, không linh hoạt như slot thường — nếu không có linh khí Thổ tốt trong inventory, slot phụ thành trống.
- **Không tháo được mid-pháp trận**: quyết định commit Thổ từ trước ván đầu.
- Kết hợp với `primordial-jade-bead` (nguyên tố random mỗi ván) → slot phụ Thổ có thể bị lãng phí khi ván đó không có Thổ trong pool.

## Vì sao (WHY)

- **Slot tạm thay vì vĩnh viễn**: CLAUDE.md locked #8 xác định Lò 8 slot là max cố định — slot phụ "tạm trong pháp trận" không phá lock đó, đây là power borrow, không phải power expand.
- **-15% penalty**: tránh "free slot" — thêm 1 linh khí Thổ mạnh mà không trả giá gì làm trivial board-building. Penalty buộc player evaluate xem Thổ chain có đáng không.
- **Giới hạn Thổ** thay vì void: tránh universal slot expand; gắn item vào archetype Thổ/Mộc chain cụ thể.

## Synergy & Build

- **Archetype**: Hộ Pháp mở rộng — board lớn hơn, chain dài hơn, nhiều tương sinh Thổ-Mộc hơn. Đạo Phái **Thái Cực** (Vạn Pháp Dung Hoà +5% mọi chỉ số, ổn định đa nguyên tố — bù phần nào -15% Thổ) là khung tự nhiên nhất.
- **Combo**: `jade-spirit-flower` (stability cap +30%) + `amitabha-statue` (+flat quality mỗi ván win) + linh khí Thổ Thần tier → bộ ba Hộ Pháp chạy nhiều ván, ổn định cao.
- **Anti-synergy**: build mono-element Thổ heavy — penalty -15% cắt sâu vào output chính. Build Cuồng Sát ngắn ván không kịp khai thác slot thêm.
- **Drop**: dropWeight 100, `atlas drop, rare` — cổ vật mid-tier, gặp tương đối thường, nền tảng cho Hộ Pháp builder.
