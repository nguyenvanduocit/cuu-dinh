---
id: primordial-shift
ten: Hỗn Nguyên Biến
riskLevel: medium
rewardMultiplier: 1.5
difficultyTier: 3
category: corruption-mod
---

# Hỗn Nguyên Biến (`primordial-shift`)

## Lược tả

Hỗn nguyên khuấy đảo — linh khí xáo trộn vị trí đầu mỗi ván, không cấu hình nào được giữ nguyên. Đòi hỏi khả năng đọc board nhanh và adapt chain ngay lập tức.

## Effect

**Board shuffle mỗi ván** (board layout — tác động đến chain routing):
- Khi mỗi ván mới bắt đầu, **toàn bộ linh khí hoán đổi vị trí ngẫu nhiên** trên board — element và thuộc tính giữ nguyên, chỉ vị trí thay đổi.
- Chain geometry bị phá hoàn toàn: chain tối ưu ván trước không còn hiệu lực.
- Player phải **đọc layout mới và thiết kế chain mới** trong vài giây đầu ván trước khi linh lực bắt đầu bay.
- Không ảnh hưởng trực tiếp đến intensity, stability, hay element (§2, §5) — tác động gián tiếp qua chain quality bị giảm khi board xa lạ.
- **Tâm Ma intensity modifier** §3 không đổi — mod này là spatial modifier, không phải intensity modifier.
- Phần thưởng: **×1.5 reward multiplier** (rewardMultiplier 1.5).

## Đánh đổi & Risk

**RiskLevel medium** — không có damage trực tiếp nhưng overhead nhận thức rất cao. Ván đầu tiên sau shuffle, player thường mất 3-5 giây "đọc board" → linh lực đã bay trước khi chain được tối ưu → hit ngẫu nhiên → stability có thể bị tổn thất sớm.

Nguy hiểm chính: ván cuối (boss) với board lạ = thực hiện kém hơn đúng lúc cần tốt nhất.

Build phụ thuộc **chain geometry cứng** (pinball-lane cố định) bị counters nặng. Build linh hoạt (nhiều linh khí đa nguyên tố, redirect nhanh) chịu tốt hơn.

**Reward** ×1.5 vừa phải — phù hợp mid-game player muốn luyện khả năng đọc board nhanh.

## Khi nào dùng + Synergy

**Dùng khi**: player thành thạo ngũ hành ma trận (§1) — đọc board mới trong 2-3 giây; build đa nguyên tố linh khí không phụ thuộc vị trí cố định; luyện tập nâng cao.

**Composing pháp trận**:
- Phối hợp **Đan Pháp Hỗn Nguyên** (neutral element bias) — giảm penalty khi chain geometry bị phá.
- Tránh **Lạnh Băng** (`frozen-ice`) — freeze cycle theo hit count không thể predict sau shuffle.
- Tránh **Phong Hoả** (`sealed-slot`) cùng lúc — ít linh khí + shuffle = board cực khó tối ưu.

**Synergy**:
- **Ngũ Hành 5-cycle set**: board đủ 5 element → dù shuffle thế nào vẫn có thể tìm chain 5-cycle.
- **Build flexible chain** (linh khí element đa dạng, không lock vào 1-2 element): shuffle không phá được strategy vì strategy là "tìm chain tốt nhất từ layout hiện tại".
- **Passive tree nodes "đọc nhanh"** (nếu tồn tại — board reveal speed): giảm thời gian orientate sau shuffle.
