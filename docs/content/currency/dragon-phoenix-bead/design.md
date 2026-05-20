---
id: dragon-phoenix-bead
ten: Long Phụng Châu
category: boss-modifier
weight: 40
---

# Long Phụng Châu (`long-phoenix-bead`)

## Lược tả

Long và phụng — hai sinh linh, hai bản chất, một trận đánh. Boss trải qua phép hóa thân khi HP về 50%: đổi element, đổi tốc độ, đổi áp lực. Player phải adapt giữa trận chiến.

## Effect

**2-phase boss encounter** (boss encounter structure):
- **Phase 1** (HP 100%→50%): Boss hoạt động bình thường theo element và attack pattern gốc của tier map.
- **Phase 2** (HP 50%→0%, kích hoạt khi HP boss về 50%): Boss **đổi element tấn công** sang element tương phản (ví dụ: Hoả → Thuỷ; Kim → Mộc theo ma trận §1), tốc độ tấn công tăng **+30%**, stability drain per attack tăng **+50%** (§5 range -5 đến -25 → -7.5 đến -37.5).
- Transition phase 2: flash visual + âm thanh báo hiệu 1 giây → player có window nhỏ để chuẩn bị.
- Drop boss: **+1 Nguyên Liệu đảm bảo** phẩm tương ứng map tier (dùng để compose bí cảnh).

## Đánh đổi & Risk

**Boss khó hơn rõ rệt ở phase 2** — element đổi là thay đổi lớn nhất. Nếu player đã tối ưu chain để sinh element tương sinh phase 1, phase 2 element mới có thể trở thành **tương khắc** với linh đan → stability crash ngay lúc boss đang tấn công mạnh hơn. Double pressure.

Nếu không diệt boss nhanh trong phase 2, tốc độ tấn công +30% = nhiều drain hơn / đơn vị thời gian. Encounter kéo dài ở phase 2 là nguy hiểm nhất.

Chiến thuật quan trọng: **ưu tiên DPS cao ngay khi phase 2 bắt đầu** — không cho boss tấn công nhiều ở trạng thái mạnh nhất.

**Reward** Nguyên Liệu đảm bảo: tăng trực tiếp ngân sách compose bí cảnh.

## Khi nào dùng + Synergy

**Dùng khi**: build DPS cao có thể xử lý boss nhanh ở cả 2 phase; hiểu ma trận §1 để không bị tương khắc bất ngờ khi element đổi; T8-T14.

**Composing pháp trận**:
- Phối hợp **Thiên Long Cốt** (`heaven-dragon-bone` — element shift mỗi 10 giây): cả 2 modifier đều đòi hỏi adapt element liên tục → synergy về skill nhưng cực khó.
- Tránh **Tâm Ma Ngũ Hành** (`corruption-wuxing`) kết hợp: linh đan đổi element + boss đổi element phase 2 = quá nhiều biến số.
- An toàn với **Cổ Long Đan** (`ancient-dragon-elixir`): loot modifier không ảnh hưởng combat.

**Synergy**:
- **Ngũ Hành set**: board đủ 5 element → luôn có chain phù hợp bất kể boss phase nào.
- **Tịnh Tâm Linh Châu**: restore 20% stability tại điểm transition phase 2 = giảm áp lực đột ngột.
- **Passive tree "Thích Nghi"** (nếu tồn tại — reduce element mis-match penalty): giảm thiệt hại nếu chain chưa kịp adapt khi phase 2 bắt đầu.
