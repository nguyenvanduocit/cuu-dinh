---
id: great-bell
ten: Chuông Đại Hồng
type: bell
element: metal
category: sustain-defensive
dropWeight: 100
dropRateHint: atlas drop, rare
---

# Chuông Đại Hồng (`great-bell`)

## Lược tả

Cổ vật engine cho lối Đại Hồng: cứ 7 giây tiếng chuông vang lên, kích hoạt toàn bộ linh khí trên board một lần miễn phí — nhưng linh lực sinh ra từ tiếng chuông không tích charge, biến thành dòng chảy rộng mà nông.

## Cơ chế

Cứ **7 giây**, tất cả linh khí trên board đồng loạt trigger một lần, sinh ra linh lực theo nguyên tố của từng linh khí, đi theo hướng mặc định (hướng về phía linh đan gần nhất).

| Tier | Cooldown | Intensity linh lực chuông |
| --- | --- | --- |
| T1 | 7s | 60% intensity bình thường (không charge) |
| T2 | 6s | 70% intensity; linh lực chuông có thể va chạm linh khí khác (không xuyên thẳng) |
| T3 | 5s | 80% intensity; linh lực chuông kế thừa element bias của linh khí (nếu linh khí có elemental affix) |

- **Không tích charge**: linh lực sinh ra từ tiếng chuông luôn `charge_count = 0` — không nhận +20%/hop (combat-math §2). Board nhiều linh khí → nhiều linh lực đồng thời nhưng mỗi viên yếu hơn build chain tự nhiên.
- **Không phụ thuộc linh lực rơi**: Chuông Đại Hồng tạo nhịp riêng song song với linh lực player nhận — engine luôn chạy dù drop xấu.

## Đánh đổi (Downside)

- **Linh lực chuông charge_count = 0 cứng**: không thể bù bằng affix hay ascendancy. Với build chain tốt (7+ hop, +140% intensity, combat-math §2), linh lực chuông tạo ra chỉ bằng 60-80% hit thông thường không chain — anti-synergy nặng với build chain dài.
- **Cooldown cố định không scale**: không rút ngắn qua tree hay affix (ngoại trừ tier upgrade). Board tối ưu cho "giữa hai tiếng chuông" bị lock cứng vào 5-7s rhythm; nếu pháp trận variant thay đổi physics board (Đan Pháp **Hỗn Nguyên**), nhịp chuông bất tiện.
- **Trigger đồng loạt gây va chạm linh lực–linh lực**: T2+ linh lực chuông va chạm nhau và va chạm linh khí khác → tăng chaos, khó kiểm soát hướng; board dày linh khí dễ tự block nhau.

## Vì sao (WHY)

- **Không tích charge (charge_count = 0 cứng)**: nếu linh lực chuông tích charge bình thường, board 10 linh khí × 7s = 10 hit chain-capable đồng thời → stack ceiling ~67x (§3) mỗi 7s là broken. Khoá charge là van an toàn duy nhất.
- **60-80% intensity** thay vì 100%: linh lực chuông không đến từ physics launch của player (không có velocity launch đặc biệt) → velocity factor bình thường 0.5-2.0x nhân 60-80% = hợp lý, không free-scale.
- **Tách biệt với `mystic-heaven-bell`**: Chuông Đại Hồng = passive rhythm engine (tick đều, nhiều viên, không charge); Huyền Thiên Cổ Chung = accumulation→detonate (build sóng âm, chủ động timing). Hai kim loại, hai triết lý.

## Synergy & Build

- **Archetype**: Engine tick liên tục. Đạo Phái **Linh Sơn** (Hồi Vang — 10% echo spawn mỗi va chạm): tiếng chuông 7s kích board → mỗi linh lực chuông có 10% spawn echo → echo tiếp tục chain, bù lại charge_count = 0 bằng số lượng.
- **Combo**: `landscape-map` (+5 slot board rộng → nhiều linh khí → nhiều viên mỗi tiếng chuông) + Đan Pháp **Tiêu Chuẩn** (nhịp ổn định, ít biến số). Affix **Lò.Khắc_Phù** +25% intensity (§3) nâng 60% lên 75% hiệu quả.
- **Anti-synergy**: build chain dài (Sắc Bén keystone + charge stack) — linh lực chuông không chain được, lãng phí engine chain đã đầu tư; `thousand-mile-scythe` (hi sinh linh khí) — mất linh khí làm nhỏ board, giảm số viên mỗi tiếng chuông.
- **Drop**: dropWeight 100, `atlas drop, rare` — engine item build được sớm mid-game.
