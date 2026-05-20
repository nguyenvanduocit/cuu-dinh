---
id: frozen-ice
ten: Lạnh Băng
riskLevel: low
rewardMultiplier: 1.1
difficultyTier: 2
category: corruption-mod
---

# Lạnh Băng (`frozen-ice`)

## Lược tả

Băng hàn phủ pháp trận — linh khí định kỳ đóng cứng, nhịp điệu bị đứt quãng. Ai biết tận dụng khoảng lặng sẽ tích được intensity cao hơn.

## Effect

**Freeze cycle** (combat-math §2 — charge & velocity):
- Sau mỗi **3 lần va chạm** vào một linh khí cụ thể, linh khí đó **đóng băng 2 giây** — không nhận hit, không kích hoạt hiệu ứng trong thời gian băng.
- Trong 2 giây băng, linh lực bật qua linh khí đó không tính hit (vật lý vẫn xảy ra nhưng không trigger effect).
- **Intensity tích lũy** (cơ chế ngầm): linh khí thoát băng nhận **+20% intensity bonus** cho 3 hit tiếp theo (tương đương 1 charge hop thêm — §2 +20%/hop).
- Không ảnh hưởng stability trực tiếp; rủi ro gián tiếp khi chain bị đứt do linh khí then chốt đang đóng băng.
- Phần thưởng: **+10% reward bonus** (rewardMultiplier 1.1).

## Đánh đổi & Risk

**RiskLevel low** — đóng băng định kỳ làm đứt chain và mất tempo, nhưng không gây damage trực tiếp cho linh đan. Nguy hiểm chủ yếu là **mất nguồn tương sinh heal** trong 2 giây băng: nếu stability thấp và linh khí Mộc/Thuỷ (heal source) đang đóng băng, không có heal → dễ brick nếu cùng lúc bị tương khắc hit.

Chiến thuật: phân bổ chain sao cho linh khí quan trọng không đồng loạt băng cùng lúc.

**Reward thực**: intensity bonus +20% sau băng là reward thật nếu player biết "nhường" 3 hit → 2 giây nghỉ → 3 hit mạnh hơn.

## Khi nào dùng + Synergy

**Dùng khi**: build kiên nhẫn, không cần hit liên tục; muốn intensity burst ngắn thay vì sustained; farm nhẹ T1-T8.

**Composing pháp trận**:
- Phối hợp **Đan Pháp Tiêu Chuẩn** — nhịp điệu đều, dễ predict freeze cycle.
- Tránh **Hồn Cuồng** (`frenzied-soul`) — velocity cao rút ngắn interval giữa 3 hit → băng liên tục → chain gần như vô hiệu.

**Synergy**:
- **Board nhiều linh khí song song**: khi linh khí A băng, linh lực chuyển sang linh khí B/C → chain không bị đứt hoàn toàn.
- **Charge stacking**: sau mỗi lần thoát băng, 3 hit bonus intensity × charge hiện tại = spike lớn.
- **Linh khí Thuỷ** (tương sinh Mộc, heal stability): bố trí ít nhất 2 linh khí Thuỷ để không bao giờ cả 2 băng cùng lúc.
