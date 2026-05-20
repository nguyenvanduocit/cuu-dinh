---
id: bagua-mirror
ten: Gương Bát Quái
type: statue
element: void
category: build-defining
dropWeight: 30
dropRateHint: atlas drop, very rare
---

# Gương Bát Quái (`bagua-mirror`)

## Lược tả

Cổ vật Pháp Sư reset: một lần mỗi ván, đảo ngược trọng lực toàn board trong 3 giây — linh lực rơi ngược lên trời, chain hoàn toàn mới. Nhưng mỗi lần gương sáng, linh đan run rẩy mất ổn định.

## Cơ chế

Một lần mỗi ván, player kích hoạt Gương Bát Quái (manual trigger hoặc tự động khi linh lực còn lại < 2 trên board): **trọng lực đảo ngược** trong 3 giây, mọi linh lực đang di chuyển bắt đầu rơi ngược lên phía trên board. Sau 3 giây, trọng lực trở về bình thường.

| Tier | Thời gian đảo trọng lực | Stability cost khi kích hoạt | Charge preserve |
| --- | --- | --- | --- |
| T1 | 3 giây | -20 stability | Chain reset (charge về 0) |
| T2 | 4 giây | -15 stability | Chain giữ **50%** charge |
| T3 | 5 giây | -10 stability | Chain giữ **75%** charge + 10% cơ hội kích hoạt lần 2 mỗi ván |

- **Đảo trọng lực**: linh lực đang di chuyển xuống bỗng bị kéo lên — va chạm vào linh khí phía trên mà bình thường không thể chạm. Mở ra chain hoàn toàn mới, đặc biệt board có linh khí "treo cao" nhàn rỗi.
- **Stability cost**: combat-math §5 stability start = 100. Kích hoạt T1 = -20 ngay lập tức, tương đương 1 đòn tương khắc intensity 50. Không thể kích hoạt nếu stability ≤ 20 (bảo vệ khỏi self-brick).
- **Charge reset**: T1 mọi chain hop tích lũy mất hết khi đảo lực (phương hướng và va chạm hoàn toàn khác). T2/T3 preserve một phần để không punish quá nặng.

## Đánh đổi (Downside)

- **-20/-15/-10 stability mỗi lần kích hoạt**: trả một phần HP linh đan để reset board. Pháp trận 5-8 ván, stability không hồi đủ giữa các ván → kích hoạt Gương nhiều lần tích lũy nguy cơ bể. Tương đương hi sinh sustain để đổi lấy chain opportunity.
- **Chain reset (T1) / partial reset (T2/T3)**: intensity từ charge tích lũy bị xóa — linh lực rơi ngược với charge 0 hoặc thấp. Đòn đầu sau đảo trọng lực yếu hơn đáng kể.
- Gương chỉ hiệu quả khi board có linh khí phân bố tốt ở cả hai chiều dọc — board phẳng một hàng không có linh khí "trên cao" = đảo lực bỏ qua.

## Vì sao (WHY)

- **-20 stability (không phải flat quality)**: stability là resource limited (§5 cap 100-150); mất 20 = mất khả năng chịu 1-2 đòn tương khắc tương lai. Phù hợp "Pháp Sư reset" — nhận rủi ro tức thì để mở cơ hội.
- **Manual trigger**: không phải passive — player quyết định khi nào đủ tốt để đánh đổi. Tránh cơ chế "bấm rồi quên" vô nghĩa; mỗi lần kích hoạt là một quyết định có stakes.
- **1 lần/ván**: nếu mỗi lần thoải mái, downside trivial. 1 lần/ván đủ ảnh hưởng game plan (thiết kế board xoay quanh "khi nào dùng Gương") mà không spam.

## Synergy & Build

- **Archetype**: Pháp Sư reset / board manipulation. Đạo Phái khớp nhất: **Vô Cực** (Hỗn Nguyên Khuếch Đại — nhân đôi biên độ ngẫu nhiên, đảo trọng lực trong môi trường chaos = cực đoan hơn, tốt hơn hoặc xấu hơn) và **Linh Sơn** (Hồi Vang — echo spawn thêm linh lực trước khi đảo, khuếch đại chain mới sau reset).
- **Combo**: board design nhiều tầng (linh khí cả trên lẫn dưới) để tận dụng tối đa đảo trọng lực; `jade-spirit-flower` (stability cap +30%) bù -20 stability cost; `phoenix-tail-cauldron` (stability regen) recover sau kích hoạt.
- **Anti-synergy**: `landscape-map` (+5 linh khí slot, board lớn) — board lớn phân tán chain, đảo trọng lực khó predict hơn; build stability-tight (thấp sẵn) — không thể chịu thêm -20.
- **Drop**: dropWeight 30, `atlas drop, very rare` — build-defining, xứng hiếm.
