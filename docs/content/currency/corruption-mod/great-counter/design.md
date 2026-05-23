---
id: great-counter
ten: Đại Khắc
riskLevel: high
rewardMultiplier: 2
difficultyTier: 4
category: corruption-mod
---

# Đại Khắc (`great-counter`)

## Lược tả

Thiên địa nghịch hành — nửa linh lực bị tà khí nhuộm thành nguyên tố tương khắc. Stability linh đan bị tấn công liên tục; chỉ build chịu đòn hoặc redirect cực nhanh mới sống sót.

## Effect

**Element corruption** (combat-math §1 ma trận + §5 stability):
- Mỗi viên linh lực khi spawn có **50% xác suất ngẫu nhiên đổi thành nguyên tố tương khắc** với linh đan hiện tại.
- Xác định theo bảng §1: nếu linh đan là Hoả → tương khắc = Kim → 50% linh lực biến thành Kim.
- Linh lực tương khắc hit linh đan: **stability -intensity × 0.40** (§2 tương khắc formula).
- Nếu chain tích đủ điều kiện đại khắc (§1 — 2 levels khắc qua chain): **stability -intensity × 0.80 + 10% instant brick** khi stability < 25 (§5).
- **Tâm Ma modifier** §3 intensity range: mod này hoạt động trên intensity hiện tại, không reduce/boost intensity — chỉ thay element.
- Phần thưởng: **×2 reward multiplier** (rewardMultiplier 2.0).

## Đánh đổi & Risk

**RiskLevel high** — với 50% linh lực tương khắc, stability drain là **liên tục và không tránh được hoàn toàn** chỉ bằng redirect. Mỗi ván ~50% hit là bất lợi; stability cần heal đủ để bù. Nếu stability xuống < 25 với đại khắc chain → 10% instant brick mỗi hit (§5) = run-ender.

Không phải mod "chơi thủ công tốt là được" — cần build có healing hoặc stability buffer dày.

**Reward** ×2 xứng đáng: đây là high-risk có fail state cứng (brick linh đan).

## Khi nào dùng + Synergy

**Dùng khi**: build stability buffer cao (Lò.Thân affix stacked, Cổ Vật heal) + tương sinh heal rate đủ bù drain; hoặc build redirect/control cực nhanh; endgame farm T12-T16 với reward ×2.

**Composing pháp trận**:
- Phối hợp **Đan Pháp Tử Sinh** nếu intensity high đủ để tương sinh heal bù tương khắc drain.
- Tránh compose với **Hồn Cuồng** (`frenzied-soul`) — velocity cao + 50% tương khắc = stability crash cực nhanh.
- Tránh **Vô Lượng** (`boundless-swarm`) — nhiều viên × 50% tương khắc = volume tương khắc hit tăng gấp 1.5.

**Synergy**:
- **Black-tortoise-statue** (linh khí Thuỷ) + **Cành Bồ Đề** (linh khí Mộc): heal +2% stability mỗi Mộc hit (§5) — counter tương khắc drain.
- **Tịnh Tâm Linh Châu** (Cổ Vật): dispel + restore 20% stability — life-save khi stability sắp về 0.
- **Lò.Thân affix stability max bonus**: mở rộng stability cap → nhiều buffer chịu đòn hơn.
- Keystone **Trọng Sơn**: không trực tiếp chống Đại Khắc nhưng giúp giữ linh khí Mộc heal source sống lâu (nếu đang chạy Huyết Sát combo).
