---
id: corruption-wuxing
ten: Tâm Ma Ngũ Hành
riskLevel: extreme
rewardMultiplier: 3
difficultyTier: 5
category: corruption-mod
---

# Tâm Ma Ngũ Hành (`corruption-wuxing`)

## Lược tả

Tâm ma xâm thực đến tận ngũ hành cốt lõi — linh đan biến sắc mỗi ván, toàn bộ chain phải tái cấu trúc từ đầu. Mod đòi hỏi kiến thức ngũ hành sâu nhất, thưởng hậu hĩnh nhất.

## Effect

**Element shift mỗi ván** (combat-math §1 — Ngũ Hành Relationship Matrix):
- Khi ván mới bắt đầu, linh đan **ngẫu nhiên đổi nguyên tố chính** sang một trong 5 nguyên tố (Kim/Mộc/Thuỷ/Hoả/Thổ) — không thể dự đoán trước.
- Element mới xác định toàn bộ ma trận tương sinh/tương khắc cho ván đó (§1): tương sinh cũ có thể thành tương khắc mới.
- **Tâm Ma modifier** §3: intensity mod không đổi (+100% max range), nhưng element flip tạo rủi ro stability crash (§5) ngay ván đầu nếu chain cũ giờ trở thành tương khắc.
- Linh đan không thay đổi phẩm cấp hay quality đã tích — chỉ element tương tác thay đổi.
- Phần thưởng: **×3 reward multiplier** — cao nhất nhóm extreme (cùng với `heaven-tears`).

## Đánh đổi & Risk

**RiskLevel extreme** — đây là mod kiểm tra khả năng adapt nguyên tố theo thời gian thực. Nếu ván 3 linh đan là Hoả và ván 4 đột ngột thành Kim, mọi chain Mộc-sinh-Hoả trước đó giờ là Hoả-khắc-Kim: stability -intensity × 0.40 mỗi hit (§2). Một ván sai element đủ crash stability từ 80 xuống 0 nếu chain dày.

Yêu cầu **board đa nguyên tố** hoặc **cơ chế redirect nhanh** — không thể lock board một element duy nhất. Không phù hợp build mono-element.

**Reward** ×3 là cao nhất nhóm corruption-mod — bù đắp overhead tư duy và rủi ro mất run ở ván element bất lợi.

## Khi nào dùng + Synergy

**Dùng khi**: endgame player hiểu rõ ma trận §1; build đa nguyên tố linh khí đủ 5 element trên board; muốn tối đa hoá reward multiplier.

**Composing pháp trận**:
- Phối hợp **Đan Pháp Hỗn Nguyên** (neutral element bias) — giảm penalty khi linh đan flip element.
- Tránh **Đan Pháp Tử Sinh** (intensity bias cực cao) — khi element sai, crash stability cực nhanh.

**Synergy**:
- **Ngũ Hành set 5-cycle**: board đã cần đủ 5 element → sẵn sàng serve bất kỳ element linh đan nào sau flip.
- **Tịnh Tâm Linh Châu** (Cổ Vật): dispel + restore 20% stability (§5) — safety net sau flip element bất lợi.
- **Passive keystone Huyền Thông**: nếu tồn tại (reduce element mis-match penalty) là core pick cho mod này.
- Tránh build **mono-element chuyên sâu** — mod này trực tiếp counters strategy lock một nguyên tố.
