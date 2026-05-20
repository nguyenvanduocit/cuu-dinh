---
id: lao-tieu-phu
ten: Lão Tiều Phu
type: npc
role: optional-side
faction: none
firstAppearance: act-1
location: son-moc-coc
voiceArchetype: humble-villager
---

# Lão Tiều Phu (`lao-tieu-phu`)

## Định danh

Lão tiều phu bình thường chặt trúc bên đường Sơn Mộc Cốc. Không tu vi. Không biết luyện đan. Không biết mình đang ở trong câu chuyện gì. Ông lão lưng hơi còng, áo vải thô vá nhiều chỗ, rìu gỗ cán đã mòn — nhưng cánh tay vẫn khoẻ. Chặt trúc là việc ông làm mỗi ngày ba mươi năm nay, từ hồi còn khoẻ mạnh đến bây giờ. Không nghĩ gì sâu xa. Chỉ chặt trúc.

Khúc gỗ Bồ Đề ông đang chặt hôm player gặp — trong gỗ còn linh khí. Ông không biết. Ông chỉ biết khúc gỗ này chặt khó hơn những khúc khác, và ông thích những thứ chặt khó hơn. *"Khó thì mới đáng."*

## Tính cách

- **Phàm nhân hoàn toàn và tự hào**: không ao ước tu chân, không ghen tị với đạo sĩ. Cuộc sống của ông đầy đủ trong phạm vi của nó.
- **Trực tiếp theo kiểu dân quê**: không nói vòng vo. Không biết nịnh. Nếu player trông kỳ lạ — ông nói trông kỳ lạ. Không ác ý, chỉ thật thà.
- **Triết học không tự biết**: câu ông nói về chặt trúc ba mươi năm hay hơn nhiều bài giảng tu chân — vì ông không cố làm nó hay.
- **Voice archetype**: humble-villager. Câu ngắn, giản dị, không từ tu chân. Tiếng địa phương nhẹ (không cần thể hiện phương ngữ rõ, chỉ cảm giác gần gũi hơn). Hay cười khi nói chuyện không quan trọng.

## Vai trò & Chức năng

| Act | Chức năng gameplay | System / Screen |
|-----|-------------------|-|
| Act 1 | Optional side node (`acts/act-1/nodes/lao-tieu-phu/`). Player có thể dừng trò chuyện hoặc đi qua | Optional: không block đường |
| Act 1 | Reward nếu player trò chuyện đủ lâu (3 thoại trở lên): 1 `linh-khi-moc-pham` (Mộc linh khí Phàm phẩm ngẫu nhiên) + 50 kim đan | Item đến từ khúc gỗ Bồ Đề — ông không biết tại sao đưa cho player, chỉ thấy player nhìn khúc gỗ mãi |

**Currency cross-ref**: Không bán. Không nhận gì. Reward là tình huống ngẫu nhiên — ông đưa khúc gỗ cho player "nếu thích thì lấy, tôi chặt cái khác".

**Trigger**: reward chỉ xuất hiện nếu player ở lại đủ 3 câu dialogue. Nếu player đi qua không nói chuyện — không có gì. Node không hiển thị dấu chấm than (!) trên bản đồ.

## Quan hệ với Player (arc theo Act)

- **Act 1 — lần duy nhất**: Ông không nhớ player nếu player quay lại (không phải vì ông hay quên — là vì ông không để ý đặc biệt ai đi qua đây). Mỗi lần gặp lại là như lần đầu. Điều này làm ông khác biệt hoàn toàn với các NPC khác — ông là điểm neo phàm nhân của thế giới.
- **Về mặt narrative**: Lão Tiều Phu là nhắc nhở rằng thế giới Cửu Châu Đan Vực không chỉ có đạo sĩ và tâm ma. Có những người sống bình thường, không biết đến Đan Kiếp, không biết đến Cao Tổ, và điều đó cũng ổn.

## Hook hội thoại

**1. Khi player dừng lại (Act 1)**
> *(không dừng chặt, liếc nhìn player)* "Ồ, đạo sĩ à? Đi đâu vậy? Núi kia à? Cẩn thận trơn — hôm qua có mưa."

**2. Hỏi về việc chặt trúc**
> "Ba mươi năm rồi. Hỏi tôi chặt cho ai — chặt bán. Hỏi tôi thích không — thích. Không có gì khác đâu đó. Đơn giản vậy thôi."

**3. Về khúc gỗ Bồ Đề**
> "Cái khúc này khó chặt lắm. Chặt cả buổi sáng không xong. Mà tôi lại thích — khó thì mới đáng. Đạo sĩ nhìn cái này mãi — thích không? Lấy đi, tôi chặt cái khác."

**4. Khi player hỏi ông có muốn tu chân không**
> *(cười, tiếp tục chặt)* "Tu chân à? Tôi già rồi. Với lại — tôi chặt trúc cũng đủ ăn. Tu chân làm gì thêm? Đạo sĩ cũng phải ăn mà — đạo sĩ không chặt được trúc thì tôi có ích hơn không?" *(cười lớn hơn)*

**5. Câu cuối khi player đi tiếp**
> "Ừ, đi đi. Cẩn thận trên núi đó. Ông Đạo sĩ cạnh đây — ông Mộc Linh ấy — hay lên đó lắm, mà toàn về với cành gãy. Hahaha!"
