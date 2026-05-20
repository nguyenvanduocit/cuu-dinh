---
id: blood-slaughter
ten: Huyết Sát
riskLevel: high
rewardMultiplier: 2
difficultyTier: 4
category: corruption-mod
---

# Huyết Sát (`blood-slaughter`)

## Lược tả

Pháp trận nhuốm màu huyết lệ — mỗi va chạm ăn mòn linh khí, buộc đạo sĩ phải tối ưu số lần chạm thay vì tối đa hoá hit. Phong Ấn drop gấp đôi bù đắp rủi ro.

## Effect

**Linh khí durability** (combat-math §8):
- Kích hoạt cơ chế durability trên toàn board: mỗi linh khí có **100 durability**.
- Mỗi lần linh lực va chạm vào linh khí đó: **-10 durability**.
- Durability ≤ 0: linh khí **vỡ** — mất khỏi board đến hết pháp trận (không hồi phục).
- Cổ Vật keystone **Trọng Sơn**: miễn toàn bộ durability drain (§8).
- Build nhân bản linh lực (vd Trượng Tôn Ngộ Không tách ×3 con) tiêu durability gấp 3 mỗi cú bắn.
- Phần thưởng: **+100% Phong Ấn drop** cuối pháp trận (rewardMultiplier 2.0).

## Đánh đổi & Risk

**RiskLevel high** — linh khí then chốt (high-touch linh khí vị trí trung tâm) vỡ sớm có thể phá toàn bộ chain, khiến linh đan mất stability nhanh (§5) do chain bị đứt và mất nguồn tương sinh heal.

Rủi ro leo thang phi tuyến: linh khí đầu tiên vỡ → chain còn lại chịu tải cao hơn → vỡ nhanh hơn → cascade. Đặc biệt nguy hiểm ở ván 6-8 khi board đã mòn.

**Reward** xứng đáng: ×2 Phong Ấn drop = tăng trực tiếp ngân sách gambling Phong Ấn cho run sau. Phù hợp endgame farm Phong Ấn rare.

## Khi nào dùng + Synergy

**Dùng khi**: build ít hit per linh khí — chain dài nối ít linh khí, không spam nhiều viên linh lực cùng lúc; cần farm Phong Ấn nhanh.

**Composing pháp trận**:
- Kết hợp **Đan Pháp Tiêu Chuẩn** (không spawn extra linh lực) hoặc **Cổ Đan Lò** (linh khí durability được hỗ trợ bởi cơ chế lò cổ).
- Tránh compose với **Vô Lượng** (`boundless-swarm`) — +50% linh lực = ×1.5 tốc mòn durability.

**Synergy**:
- Keystone **Trọng Sơn** (passive tree): hoàn toàn miễn durability drain → Huyết Sát thành mod free reward mà không có downside.
- **Black-tortoise-statue** (linh khí Thuỷ): implicit heal +2% stability mỗi Thuỷ hit — giữ stability khi chain bị mỏng.
- Linh khí có **durability thấp nên đặt ngoài rìa** (ít bị hit), linh khí chất lượng cao giữ trung tâm chain.
- **Tránh**: Trượng Tôn Ngộ Không build (×3 hit per linh khí = ×3 durability drain) trừ khi đã có Trọng Sơn.
