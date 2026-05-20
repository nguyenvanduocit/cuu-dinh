---
id: old-fox
ten: Lão Hồ Ly
type: npc
role: vendor
faction: gambling-guild
firstAppearance: act-1
location: khai-lu-tran
voiceArchetype: sly merchant
---

# Lão Hồ Ly (`old-fox`)

## Định danh

Chưởng môn Đạo Quán Cờ Bạc Hội. Tên thật: Hồ Văn Phú — cựu quan lại địa phương mất sạch vì cờ bạc năm mươi năm trước, rồi phát hiện ra bài học đời: người bán cờ bạc không bao giờ thua. Người gầy, dáng cáo: mắt ti hí luôn sáng, nụ cười chưa hết câu đã toét răng vàng, tay luôn phe phẩy cái quạt lụa đỏ dù không nóng, áo tơ đỏ thêu hạc — thứ xa xỉ duy nhất ông không chịu bỏ. Phàm nhân. Không một chút tu vi. Sợ Tâm Ma thật sự — nỗi sợ duy nhất ông không che được bằng nụ cười.

## Tính cách

- **Trơn như dầu, ngọt như mía**: luôn gọi player là "huynh đệ", "đạo hữu", "cao nhân" — không phân biệt cấp tu vi. Tâng bốc trước, upsell sau.
- **Biết cân bằng rủi ro thật sự**: phàm nhân sống 50 năm trong nghề cờ bạc tu chân không phải may mắn. Ông hiểu xác suất, hiểu tâm lý con người hơn hầu hết đạo sĩ.
- **Lớp dưới cùng**: sợ hãi thật sự — bất cứ thứ gì có mùi Tâm Ma đều khiến ông mất đi cái vẻ bề ngoài hoạt ngôn. Đây là kẽ hở player có thể khai thác trong dialogue.
- **Voice archetype**: sly merchant. Câu nào cũng có vẻ tự nguyện, thực ra là dẫn dắt. Không dùng từ tu chân cao siêu — nói bình dân nhất có thể.

## Vai trò & Chức năng

| Act | Chức năng gameplay | System / Screen |
|-----|-------------------|-----------------|
| Act 1 | Giới thiệu 6 trụ gambling. Bán Đan Dược basic (linh đan reroll, Phong Ấn cơ bản) | `screen: gambling-hall` — mở Đạo Quán lần đầu |
| Act 3 | Mở Đạo Quán đầy đủ tại Hoả Sơn, bán thêm Tâm Ma mod (rủi ro cao) và Thiên Kiếp token | `screen: gambling-hall` expanded; thêm tab Tâm Ma |
| Act 5+ | Tiếp tục tại Khai Lư Trấn endgame. Bán Pháp Trận Tử Sinh và combo scarab hiếm | Endgame vendor; bán `dan-phap-tu-sinh`, `nguyen-lieu-*` |

**Currency cross-ref**: Nhận `kim-dan` và `dan-duoc-*`. Không nhận Nguyên Liệu trực tiếp — đổi chéo qua Đạo Quán Cờ Bạc Hội.

**6 trụ gambling** ông quản: Đan Dược, Đạo Quán (reroll chính), Tâm Ma Mod, Phong Ấn, Pháp Trận Tử Sinh, Thiên Cơ Quẻ (giới thiệu trước Lão Bà Thiên Cơ unlock).

## Quan hệ với Player (arc theo Act)

- **Act 1**: Vồn vã từ giây đầu. Ông chạy ra đón player ở cổng Khai Lư Trấn như đã đợi sẵn. Câu đầu tiên: *"Huynh đệ! Đến đúng lúc rồi đó!"* Không hỏi player từ đâu tới hay cần gì — chỉ bắt đầu chào hàng. Tutorial gambling được đóng gói thành "giới thiệu miễn phí" với một lần spin không tốn tiền.
- **Act 3**: Đã quen nhau. Ông bắt đầu tiết lộ mặt hàng nguy hiểm hơn — Tâm Ma mod. Nhưng lần đầu ông nhắc tới Tâm Ma, giọng hạ xuống, quạt dừng lại một giây. *"Cái này... huynh đệ cân nhắc kỹ. Lão phu bán, nhưng lão phu không chịu trách nhiệm."*
- **Act 4**: Khi Kẻ Đeo Mặt Nạ xuất hiện tại Đạo Quán — Lão Hồ Ly nhìn thấu nhưng giả vờ không thấy. Câu thoại sau đó run hơn thường. Player tinh ý nhận ra.
- **Act 5+**: Sau cái chết của Sư Phụ, Lão Hồ Ly vẫn ở đó. Vẫn cười. Nhưng lần đầu tiên ông hỏi player một câu không liên quan đến bán hàng: *"Đạo hữu... ổn không?"*

## Hook hội thoại

**1. Lần đầu gặp (Act 1 — Khai Lư Trấn)**
> "Huynh đệ! Đến đúng lúc rồi đó! Vừa tới một viên Linh Đan mới — chỉ 50 kim đan thôi, mà huynh đệ biết thế nào — có thể là Bảo, có thể là rác. Đời mà, không thử sao biết được? Nào, mở hộp đi, may mắn về với huynh đệ thôi..."

**2. Giải thích Tâm Ma mod (Act 3)**
> "Cái này thì... nghe thật kỹ nhé. Tâm Ma mod không phải xấu. Nó chỉ là — thêm gia vị. Gia vị nhiều quá thì cháy lưỡi. Nhưng huynh đệ là cao nhân, biết dừng đúng lúc. Lão phu tin huynh đệ. Đúng không?"

**3. Khi player thua liên tục**
> "Ái chà, hôm nay vận số hơi... thất thường. Bình thường thôi! Lão phu đã từng thua sạch túi ba ngày liên tiếp. Rồi ngày thứ tư — đổi đời. Một lần nữa thôi, huynh đệ ơi. Một lần nữa."

**4. Khi Kẻ Đeo Mặt Nạ đến Đạo Quán (Act 3 — whisper sau khi khách đi)**
> *(giọng thấp, quạt dừng)*  "Huynh đệ... đừng để ý cái bóng xám đó. Lão phu không biết nó là ai. Lão phu cũng không muốn biết. Mua gì thì mua, rồi đi nhanh lên."

**5. Sau Act 5 — câu đầu tiên không phải chào hàng**
> "Sư Phụ của huynh đệ... là người tốt. Lão phu biết ông ấy — ông ấy chưa bao giờ ghét lão phu dù lão phu bán đủ thứ cho đệ tử ông ấy. Huynh đệ... ổn không?"
