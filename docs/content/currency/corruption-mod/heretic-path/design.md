---
id: heretic-path
ten: Tà Đạo
riskLevel: high
rewardMultiplier: 2
difficultyTier: 4
category: corruption-mod
---

# Tà Đạo (`heretic-path`)

## Lược tả

Con đường tà đạo mở ra hai kẻ thù — boss sinh đôi đồng thời ở ván cuối, mỗi kẻ tấn công độc lập. Vượt qua được thì phần thưởng boss gấp ba.

## Effect

**Boss twin encounter** (boss encounter structure — ván cuối pháp trận):
- Ván boss (ván 6-8 của pháp trận): **2 boss xuất hiện đồng thời** thay vì 1.
- Mỗi boss hoạt động độc lập: tấn công riêng, cooldown riêng, attack pattern riêng.
- Mỗi boss boss attack gây stability drain: **-5 đến -25 stability** mỗi đòn (§5 tâm ma boss attack range).
- Cả 2 boss phải bị đánh bại để kết thúc ván boss; nếu 1 boss còn sống, ván tiếp tục.
- **Tâm Ma modifier** §3 intensity range không đổi — boss twin là encounter modifier, không phải intensity modifier.
- Stability linh đan phải chịu đồng thời 2 boss tấn công: áp lực gấp đôi so với single boss.
- Phần thưởng: **+200% phần thưởng boss** (tổng drop từ 2 boss) + rewardMultiplier 2.0.

## Đánh đổi & Risk

**RiskLevel high** — ván boss là điểm căng thẳng nhất pháp trận; với 2 boss đồng thời, stability bị tấn công từ 2 nguồn song song. Nếu stability đã thấp sau 5-7 ván trước đó (vd do tương khắc chain), ván boss trở thành near-impossible.

Chiến thuật: vào ván boss với stability cao nhất có thể (heal tối đa ở ván 5-6); ưu tiên tiêu diệt boss tấn công nhanh hơn trước để giảm áp lực.

Boss type vẫn theo tier map (§20 design: Dị Tượng T1-T8, Tâm Ma T6-T13, Thiên Kiếp T14+) — twin của Thiên Kiếp ở T14-T16 là nguy hiểm nhất.

**Reward** ×3 drop từ 2 boss = cao nhất về loot quantity trong một ván boss.

## Khi nào dùng + Synergy

**Dùng khi**: build damage cao (tiêu diệt boss nhanh để giảm thời gian chịu tấn công đồng thời); stability buffer dày; hoặc map T1-T8 boss (Dị Tượng — yếu hơn) để twin encounter dễ hơn.

**Composing pháp trận**:
- Phối hợp **Đan Pháp Tiêu Chuẩn hoặc Tử Sinh** — giữ intensity cao để damage boss nhanh.
- Tránh **Thiên Lệ** (`heaven-tears`) kết hợp — stability cap 50 + 2 boss tấn công đồng thời = fail state cực nhanh.

**Synergy**:
- **Cổ Long Đan** (`ancient-dragon-elixir` — boss-modifier): nếu stacking boss modifiers, twin boss đã có Cổ Long Đan buff drop → loot khổng lồ.
- **Tịnh Tâm Linh Châu**: restore 20% stability trong ván boss là life-save quan trọng nhất.
- **Đan dược "Hồi Phục"** (rare splash): +30% stability trước ván boss = buffer đủ chịu 2 boss song song.
- Build **burst damage**: diệt 1 boss trong 15-20 giây đầu ván → còn lại 1 boss = về bình thường.
