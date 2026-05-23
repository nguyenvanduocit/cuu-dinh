---
id: seal-effort
ten: Phong Ấn Nỗ Lực
category: suffix
tags: [seal-safety]
weight: 40
---

# Phong Ấn Nỗ Lực (`seal-effort`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Khi Phong Ấn fail (strip/giáng): 20% chance hoàn trả đan dược đã dùng |
| T2 | Khi fail: 30% hoàn trả |
| T3 | Khi fail: 40% hoàn trả; 10% chance Phong Ấn tự động retry 1 lần |

## Tương tác

Gambling layer thuần. "Fail" = bất kỳ kết quả tiêu cực của Phong Ấn (strip affix, giáng tier, brick linh khí). Hoàn trả đan dược đã dùng là currency refund — không ảnh hưởng combat-math. T3 retry: 10% chance Phong Ấn tự chạy lại 1 lần với same inputs — nếu retry cũng fail, không retry thêm. Retry có thể kích hoạt `seal-ascend` hoặc `seal-safety` bonus bình thường (vì là application mới).

## Build & Synergy

Roll suffix. **Economy build** cho player dùng nhiều Phong Ấn lặp lại để craft linh khí — giảm net cost đáng kể ở tier cao nơi fail rate còn 40-60%. Combo tốt với `seal-risk-reduce` (suffix khác, giảm brick global) — cặp đôi này giảm cả tần suất fail lẫn cost mỗi lần fail. T3 retry 10% quan trọng khi roll linh khí endgame: một retry thành công trên T16 item trị giá nhiều Phong Ấn tiết kiệm được. Không ưu tiên nếu đã có `seal-ascend` vì hai suffix này phục vụ chiến lược khác nhau (cost recovery vs tier upgrade).
