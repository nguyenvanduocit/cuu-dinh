---
id: boundless-swarm
ten: Vô Lượng
riskLevel: low
rewardMultiplier: 1.1
difficultyTier: 2
category: corruption-mod
---

# Vô Lượng (`boundless-swarm`)

## Lược tả

Trời đất biến loạn, linh lực tuôn như thác — board dày đặc viên bay nhưng vàng kim rơi nhiều hơn. Mod nhập môn Tâm Ma, rủi ro thấp nhất trong nhóm.

## Effect

**Linh lực density tăng** (combat-math §2 — velocity & charge):
- Số linh lực mỗi ván tăng **+50%** (ví dụ ván baseline 20 viên → 30 viên).
- Không thay đổi velocity hay charge base — mỗi viên vẫn scale bình thường theo chain hop.
- Board hỗn loạn hơn: nhiều viên đồng thời trên board → khó dự đoán hướng, dễ cross-collision.
- **Tâm Ma modifier** trong combat-math §3 range: mod này ở biên thấp (intensity mod không đổi, chỉ density tăng).
- Phần thưởng: **+30% vàng kim** thu được (rewardMultiplier 1.1 — nhỏ nhất nhóm).

## Đánh đổi & Risk

**RiskLevel low** — density cao chủ yếu là rủi ro quản lý, không phải fail state cứng. Stability (§5) không bị tấn công trực tiếp; nguy cơ đến từ tương khắc ngẫu nhiên khi nhiều viên khác element va chạm linh đan cùng lúc.

Khi board dày, viên linh lực element sai có thể va vào linh đan trước khi player kịp redirect → stability drain không mong muốn. Ở difficultyTier 2, đây là áp lực nhẹ, không crash run.

**Reward** khiêm tốn nhưng an toàn: vàng kim thêm 30% phù hợp farm kinh tế sớm game.

## Khi nào dùng + Synergy

**Dùng khi**: muốn tăng volume hit để nhanh thăng phẩm linh đan (nhiều viên = nhiều tương sinh hit nếu chain đúng element); farm vàng kim; chưa đủ build chịu mod cao hơn.

**Composing pháp trận**:
- Phối hợp tốt với **Đan Pháp Tử Sinh** (intensity bias cao) — nhiều viên × intensity cao = thăng phẩm nhanh.
- Tránh compose với **Đại Khắc** (`great-counter`) — nhiều viên + 50% element sai = cascade stability damage.

**Synergy**:
- **Set Ngũ Hành 5-cycle**: nhiều viên → nhiều cơ hội chain 5 element liên tiếp → +200% intensity spike (§3).
- **Linh Sơn ascendancy** (Hồi Vang echo): density cao = echo liên tục = sát thương bùng nổ.
- Build **tốc độ quản lý board** (fast redirect) tận dụng tốt hơn build passive "đặt và chờ".
