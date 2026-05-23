---
id: underworld-dark
ten: U Minh
riskLevel: medium
rewardMultiplier: 1.5
difficultyTier: 3
category: corruption-mod
---

# U Minh (`underworld-dark`)

## Lược tả

U minh bao phủ pháp trận — bóng tối nuốt chửng board, chỉ vùng gần linh đan còn sáng. Đạo sĩ phải nhớ layout trong đầu hoặc học đọc âm thanh linh khí để điều hướng.

## Effect

**Visibility restriction** (visual layer — không ảnh hưởng physics hay combat math):
- Toàn bộ board tối đen; **chỉ bán kính 120px quanh linh đan** được chiếu sáng.
- Linh lực vẫn di chuyển và va chạm bình thường theo vật lý — visibility không ảnh hưởng §2, §5.
- Player không thấy linh khí ngoài vùng sáng → không biết chính xác linh lực đang ở đâu ngoài radius 120px → khó anticipate hit và redirect kịp thời.
- Linh khí vẫn phát âm thanh trigger và visual cue nhỏ (particle) khi hoạt động — cơ chế audio/haptic vẫn hoạt động.
- Intensity, stability, element interaction: **không thay đổi** (§2, §3, §5 áp dụng bình thường).
- Phần thưởng: **+1 đan dược drop** cuối pháp trận + rewardMultiplier 1.5.

## Đánh đổi & Risk

**RiskLevel medium** — hoàn toàn là challenge nhận thức (spatial memory), không phải combat danger trực tiếp. Player biết layout board (đã đặt linh khí trước khi ván bắt đầu) nhưng không thể track linh lực realtime bên ngoài vùng sáng.

Nguy hiểm chính: linh lực tương khắc bay từ ngoài vùng tối vào linh đan → stability drain không kịp phòng thủ. Đặc biệt nguy hiểm ở board lớn hoặc nhiều linh lực (Vô Lượng combo).

Build **chain deterministic** (linh lực đi theo đường cố định, không cần track bằng mắt) chịu tốt hơn build reactive.

**Reward** đan dược thêm = giá trị thực tế cho farm đan dược bổ sung.

## Khi nào dùng + Synergy

**Dùng khi**: player đã thuộc layout board; build chain cố định (pinball lane) không cần track từng viên linh lực; farm đan dược; T6-T10.

**Composing pháp trận**:
- An toàn compose với **Lạnh Băng** (`frozen-ice`) — nhịp đều, dễ predict dù tối.
- Tránh **Vô Lượng** (`boundless-swarm`) — nhiều linh lực + tối = quá nhiều viên bay trong bóng tối, mất track hoàn toàn.
- Tránh **Hỗn Nguyên Biến** (`primordial-shift`) — shuffle layout + tối = không thể nhớ board mới đủ nhanh.

**Synergy**:
- **Audio cues**: linh khí phát âm thanh khi kích hoạt → chơi với headphone để "nghe" chain thay vì nhìn.
- **Build chain cứng** (linh lực luôn đi theo 1 path định sẵn): không cần nhìn để biết linh lực đang ở đâu.
- **Linh khí ít, tập trung**: board compact → vùng sáng 120px phủ được phần lớn chain trọng yếu.
