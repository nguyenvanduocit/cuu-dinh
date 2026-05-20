---
id: lotus-leaf-lantern
ten: Đèn Lá Sen
type: lantern
element: wood
rarity: Common
dropPool: Common
tags: [wood, spawn]
---

# Đèn Lá Sen (`lotus-leaf-lantern`)

## Lược tả

Pháp khí Mộc hệ dạng đèn — mỗi va chạm toả ra linh lực Mộc phụ nhỏ. Vai trò vật lý: **bộ tạo nguồn linh lực thứ cấp**; không phụ thuộc launcher của player — mỗi linh lực qua Đèn tự động sinh thêm 1 linh lực con Mộc. Đặt trên đường linh lực hay qua để board tự sinh số lượng.

## Implicit

Mỗi lần linh lực bất kỳ va chạm Đèn Lá Sen: spawn **1 linh lực Mộc phụ** tại điểm va chạm, intensity = **30% intensity** của linh lực kích, `charge_count` = 0 (bắt đầu chain từ đầu). Linh lực phụ bay về hướng linh đan gần nhất. Đèn có cooldown nội bộ **0.8 giây** giữa các lần spawn (không spam mỗi frame).

- Linh lực phụ Mộc: áp dụng tương sinh Mộc→Hoả (+stability heal §2) nếu linh đan là Hoả; tương khắc Mộc khắc Thổ (-40% intensity §2) nếu linh đan là Thổ.
- Linh lực phụ có thể kích Đèn khác trên board (không kích lại cùng Đèn trong cooldown — tránh loop vô hạn).
- Intensity 30% là thiết kế cố ý: không thay thế linh lực gốc mạnh, chỉ bổ sung số lượng hit nhỏ (§3 intensity floor 0.1×, linh lực phụ nằm xa floor).

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `spawn` | Intensity linh lực phụ tăng 40% / 50% intensity gốc |
| `offensive` | Linh lực phụ nhận +1 charge_count khởi đầu (§2 +20%/hop ngay từ đầu) |
| `chain` | Linh lực phụ có thể kích Đèn Lá Sen khác (cooldown riêng cho từng Đèn) — chain spawn |
| `wood` | Linh lực phụ Mộc khi chạm linh đan Hoả: tương sinh heal +0.07×intensity (tăng từ 0.05 §2) |
| `speed` | Cooldown Đèn giảm từ 0.8s xuống 0.5s / 0.3s |

## Build role

**Element**: Mộc. **Archetype**: spawn / flood / số lượng.

- **Vai trò cốt lõi**: nguồn linh lực thụ động — player bắn ít, Đèn tạo thêm. Đặc biệt hiệu quả khi kết hợp nhiều Đèn trên board: linh lực từ Đèn A → kích Đèn B → Đèn B spawn → kích Đèn C → chuỗi tự duy trì.
- **Đạo Phái khớp nhất**: **Linh Sơn** (`spirit-mountain`) — Đèn spawn linh lực Mộc → linh lực Mộc chạm linh khí kích 10% echo spawn; với `spirit-mountain-notable-echo-chain` echo-of-echo, 1 Đèn spawn tạo ra chuỗi phản ứng. Tổng số linh lực trên board có thể bùng nổ hàm mũ khi Đèn + Linh Sơn. **Thái Cực** (`tai-chi`) — linh lực phụ Mộc bổ sung nguyên tố Mộc vào board liên tục, duy trì ≥3 nguyên tố cho `tai-chi-notable-harmony-bonus`.
- **Combo**: Đỉnh Lục Bảo (`jade-cauldron`) — linh lực phụ Mộc khi chạm Đỉnh kích đồng hành hit (+0.8% quality); với nhiều Đèn, 40 đồng hành hit của Đỉnh được tích luỹ rất nhanh. `spirit-mountain-keystone-endless-swarm` (100% echo) + Đèn = board tràn ngập linh lực; cần Bùa Trường Sinh bảo vệ durability.
- **Anti-synergy**: build "Bùng Bạo" single-hit — linh lực phụ 30% intensity không đóng góp cho chiến lược 1 cú ×2+ intensity; chỉ loãng focus.
