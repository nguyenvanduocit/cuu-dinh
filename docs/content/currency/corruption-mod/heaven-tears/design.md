---
id: heaven-tears
ten: Thiên Lệ
riskLevel: extreme
rewardMultiplier: 3
difficultyTier: 5
category: corruption-mod
---

# Thiên Lệ (`heaven-tears`)

## Lược tả

Thiên đạo rơi lệ, linh đan mang vết thương trời — stability cap bị chặt đúng một nửa. Mỗi hit tương khắc có thể kết thúc run từ bất cứ lúc nào. Phần thưởng là Đan Pháp phẩm cao — dành cho đạo sĩ dám đánh cược sát mạng.

## Effect

**Stability cap giảm** (combat-math §5 stability mechanics):
- Stability tối đa linh đan bị **giới hạn cứng ở 50** (thay vì 100 + bonus bình thường).
- Không ảnh hưởng bất kỳ Lò.Thân affix hay Cổ Vật stability bonus nào — cap tuyệt đối là 50.
- Linh đan **bắt đầu pháp trận ở 50 stability** (= max cap); không thể heal quá 50.
- Mọi nguồn tương khắc drain vẫn áp dụng bình thường (§2): tương khắc -intensity × 0.40, đại khắc -intensity × 0.80.
- Ở stability < 25 + đại khắc: **10% instant brick** (§5) — với cap 50, bất kỳ 2 đại khắc hit vừa phải đều đưa stability vào vùng nguy hiểm.
- Heal sources vẫn hoạt động nhưng không vượt cap 50 (§5 tương sinh +intensity × 0.05 — bị truncate tại 50).
- Phần thưởng: **×3 reward multiplier + +50% Đan Pháp drop** (Đan Pháp phẩm cao dùng để vào bí cảnh tier cao hơn).

## Đánh đổi & Risk

**RiskLevel extreme** — stability cap 50 biến mọi tương khắc chain thành đe doạ tử vong. Ở T16 baseline intensity (map mult 2.5×), một tương khắc hit trung bình: -intensity × 0.40 ≈ -15 to -30 stability. Từ cap 50 về 0 = 2-3 hit tương khắc. Không có buffer để sai lầm.

Đây là mod "zero-mistake" — không có safety net từ stability buffer. Fail state không phải "từ từ tệ đi" mà là "một chain sai → brick ngay".

**Reward** ×3 + Đan Pháp drop = highest tier economic reward trong corruption-mod list. Cổ Vật "Hỗn Nguyên Hắc Đan" (skip phẩm cấp, stability -75% — §6) là **không thể dùng** với mod này vì 75% của 50 = -37.5 → brick ngay.

## Khi nào dùng + Synergy

**Dùng khi**: build **zero tương khắc** — board hoàn toàn tương sinh/đồng hành với linh đan; hoặc build crit burst (kết thúc ván nhanh trước khi nhận quá nhiều hit); endgame T14-T16 farm Đan Pháp.

**Composing pháp trận**:
- Phối hợp **Đan Pháp Cổ Đan Lò** hoặc **Hỗn Nguyên** — variant ổn định, ít random element chaos.
- Tránh **Đại Khắc** (`great-counter`) kết hợp — 50% tương khắc với cap 50 = run kết thúc trong ván đầu.
- Tránh **Tâm Ma Ngũ Hành** (`corruption-wuxing`) — element flip ngẫu nhiên có thể biến chain tốt thành tương khắc ngay ván tiếp theo → instant brick.

**Synergy**:
- **Black-tortoise-statue** (Thuỷ): heal stability +2%/Mộc hit — tối đa hoá heal để luôn giữ gần cap 50.
- **Tịnh Tâm Linh Châu** (Cổ Vật): restore 20% stability = +10 điểm (20% × 50 cap) — life-save duy nhất.
- Build **mono-element tương sinh** (toàn board Thuỷ-Mộc-Hoả chain liên tiếp với linh đan đúng element): không bao giờ nhận tương khắc hit → cap 50 không thành vấn đề.
- Đạo Phái **Linh Sơn** (không cần crit, sustained heal qua Hồi Vang): echo tương sinh = heal tích lũy chậm nhưng đều.
