---
id: corruption-mask
ten: Tâm Ma Mặt Nạ
type: statue
element: void
category: chaos-risk
dropWeight: 60
dropRateHint: atlas drop, rare
---

# Tâm Ma Mặt Nạ (`corruption-mask`)

## Lược tả

Cổ vật tham vọng: đội mặt nạ Tâm Ma vào — loot tràn ngập nhưng linh đan không ngừng rỉ máu. Giàu lên nhanh, hoặc bể trước khi kịp nhặt.

## Cơ chế

Khi trang bị Tâm Ma Mặt Nạ, **Tâm Ma debuff luôn kích hoạt** trong suốt pháp trận, không cần map mod Tâm Ma:

- **Stability drain**: -1 stability/giây liên tục (combat-math §5: "Tâm Ma debuff tick: -1 per second of debuff") — không tắt, không hồi trong ván trừ nguồn heal chủ động.
- **Loot drop rate**: tất cả item drop trong pháp trận ×loot multiplier.

| Tier | Loot multiplier | Stability drain | Bonus nếu win pháp trận với stability ≤ 20 |
| --- | --- | --- | --- |
| T1 | ×2.0 loot | -1/giây | Không có bonus |
| T2 | ×2.5 loot | -1/giây | +1 guaranteed Rare item |
| T3 | ×3.0 loot | -1/giây (nhưng drain tạm dừng 3 giây sau mỗi ván win) | +1 guaranteed Rare + 20% cơ hội Unique item |

- **-1/giây thực tế**: pháp trận 15-20 phút = 900-1200 giây. -1/giây = -900 đến -1200 stability tổng cộng nếu không hồi. Stability heal sources (tương sinh hit §5: +intensity×0.05, ván win +10, linh khí Mộc +2%/hit) phải liên tục bù đắp.
- **Tâm Ma luôn active**: kể cả map không có Tâm Ma modifier — không thể tắt bằng cách chọn map sạch. Tâm Ma boss attack (-5 đến -25/attack §5) cộng thêm vào drain sẵn.
- **Không stack với map Tâm Ma**: nếu map đã có Tâm Ma modifier, drain không nhân đôi — chỉ áp drain của mask (tránh instant-brick ở T14+ Tâm Ma maps).

## Đánh đổi (Downside)

- **-1 stability/giây không tắt**: sau 100 giây (khoảng 1-2 ván), stability về 0 nếu không tích cực hồi — bể. Build phải xây hoàn toàn xung quanh stability recovery: linh khí Mộc (§5 +2%/hit), tương sinh chain liên tục, đan dược hồi phục splash.
- **Tâm Ma boss attack cộng thêm**: ở map có Tâm Ma boss (T6-T13, §20 locked decision), -5 đến -25/attack chồng lên -1/giây baseline. Cuộc chiến boss với Mặt Nạ = race against time.
- **Loot ×2-3 vô dụng nếu bể**: nếu linh đan bể, pháp trận fail, loot không được nhận. Loot multiplier chỉ có giá trị khi sống sót — áp lực cực lớn.

## Vì sao (WHY)

- **-1/giây (không hơn)**: §5 stability start 100, cap thông thường 100-150. -1/giây = 100 giây để về 0 không hồi. Đủ nguy hiểm mà không instant-kill — player có 100 giây để setup recovery system. Nhanh hơn (-2/giây) = không playable; chậm hơn (-0.5/giây) = không cảm thấy.
- **×2-3 loot**: phải đủ lớn để "đáng" risk. Combat-math §9: "Time to first Cổ vật ~3h" → ×3 loot có thể rút xuống ~1h. Đây là lever đủ hấp dẫn để player chấp nhận risk thật sự.
- **T3 pause drain sau ván win**: không giảm drain, chỉ tạm nghỉ 3 giây — vừa đủ để tạo rhythm "thở" sau mỗi ván thắng, không làm downside trivial.

## Synergy & Build

- **Archetype**: risk-reward / loot build. Đạo Phái khớp nhất: **Linh Sơn** (Hồi Vang — echo linh lực Mộc tương sinh liên tục heal stability) và **Vô Cực** (Hỗn Nguyên Khuếch Đại — nhân đôi cả loot range lẫn variance drain, gambler's paradise).
- **Combo**: board linh khí Mộc dày đặc để tương sinh heal bù drain; `pure-heart-bead` (dispel Tâm Ma + restore 20% stability — với Mặt Nạ, cooldown phải ngắn để dùng nhiều lần); Đan Pháp Marathon (nhiều ván = nhiều ván win +10 stability = nhiều recovery window).
- **Anti-synergy**: `ancient-thunder-charm` (tương khắc vulnerability ×1.5 — với drain liên tục, tương khắc hit càng đau); `black-white-impermanence-charm` (Hắc Vô Thường khi stability thấp = double punishment); build thiếu recovery source.
- **Drop**: dropWeight 60, `atlas drop, rare` — phù hợp giai đoạn mid-game khi player đã có recovery tool nhưng muốn thách thức loot.
