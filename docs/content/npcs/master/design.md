---
id: master
ten: Sư Phụ
type: npc
role: mentor
faction: dan-dao-sect
firstAppearance: act-1
location: khai-lu-tran
voiceArchetype: ascetic elder
---

# Sư Phụ (`master`)

## Định danh

Tổ Đan Đạo Môn — Đệ Nhị Đại. Ông lão khoảng bảy mươi tuổi, râu bạc chải gọn, áo vải thô không thêu hoa văn (cố tình tránh lụa vàng bậc cao nhân), tay cầm gậy gỗ tự khắc hình cá chép đầu rồng. Sống tại Khai Lư Trấn am nhỏ, cùng con mèo tên Bột — con vật duy nhất chứng kiến những đêm ông ngồi trước Lò vỡ, không luyện đan, chỉ nhìn.

Đệ tử cuối cùng của Cao Tổ. Người duy nhất còn sống biết rõ Cửu Chuyển thất bại không phải vì Lò yếu — mà vì lòng người không đủ tĩnh để giữ Cửu Chuyển đến cùng. Bí mật không bao giờ tự nói: ba mươi năm trước ông từng dùng Lò gọi hồn hai con gái mất trong trận Đan Kiếp — thất bại, làm nứt thêm phong ấn Cao Tổ. Ông dạy đệ tử tiết chế vì chính ông đã biết mùi thất bại khi lòng tham thắng.

## Tính cách

- **Điềm tĩnh kiểu cổ điển**: không tranh luận, không giải thích dài. Câu nói ngắn nhất của ông mang trọng lượng nhất.
- **Dùng dụ ngôn**: mọi bài học đều đến qua hình ảnh cụ thể — cái Lò, hòn than, con mèo Bột, cành trúc gãy trong gió.
- **Che giấu đau bằng bình thản**: người xem thấy ông vô tư; thực ra ông đang chọn kỹ từng lời — mỗi câu đều cân nhắc "có cần nói không?"
- **Voice archetype**: ascetic elder. Nói tiếng Hán-Việt cổ, không dùng từ thông tục. Câu ngắn. Không bao giờ hỏi ngược lại player hai lần cùng một việc.

## Vai trò & Chức năng

| Act | Chức năng gameplay | Screen / System |
|-----|-------------------|-----------------|
| Act 1 | Trao Lò Luyện Đan 4-slot (basic), dạy luyện đan tutorial | `screen: furnace-main` — mở hệ thống Lò |
| Act 2 | Dẫn lên Ngũ Hành Sơn, giới thiệu 5 đỉnh Ngũ Hành Tổ | `screen: act-map` node mentor-escort |
| Act 3 | Đi cùng tìm Lò Thần tại Hoả Sơn Lò Cốc | Quest-giver: trigger `furnace-spirit` encounter |
| Act 4 | Tư vấn chọn Đạo Phái (không ép, không gợi ý) | `screen: ascendancy-select` — unlock act-4 |
| Act 5 | Reveal toàn bộ lore Cao Tổ + Cửu Chuyển + Đan Kiếp. Hy sinh trong boss fight cuối (Hỗn Nguyên Tâm Ma Vương phase 2 — Tâm Ma mang mặt Sư Phụ) | Narrative climax; death triggers player solo phase 3 |

**Currency cross-ref**: Nhận `linh-dan` reward từ Sư Phụ sau tutorial pháp trận đầu tiên. Không bán hàng — không phải vendor.

## Quan hệ với Player (arc theo Act)

- **Act 1**: Người trao lò — transaction đơn giản nhưng ẩn chứa trọng lượng. Ông nhìn player một hồi trước khi trao, như đang cân nhắc lần cuối. Câu đầu tiên ông nói với player không phải lời chào — là câu hỏi: *"Con có sẵn sàng mất không?"*
- **Act 2**: Đồng hành thầm lặng. Ông không dạy trên Ngũ Hành Sơn — ông quan sát. Để Ngũ Hành Tổ dạy. Sau mỗi đỉnh, ông chỉ nói một câu.
- **Act 3**: Lần đầu player thấy ông do dự. Trước cổng Lò Thần, ông dừng lại. *"Lần trước thầy vào đây — thầy mang ra thứ không nên mang."* Không giải thích thêm.
- **Act 4**: Ông trao quyền chọn Đạo Phái cho player hoàn toàn. Không góp ý. Khi player hỏi, ông nói: *"Thầy không biết con nên chọn gì. Thầy chỉ biết con là ai — và con biết điều đó hơn thầy."*
- **Act 5**: Reveal: bí mật 30 năm, hai con gái, vết nứt Lò do chính tay ông tạo ra. Câu cuối ông nói trước khi Tâm Ma Vương hút ông vào: *"Lò vẫn ở đây. Giờ là của con."* — rồi tan vào ánh sáng ngũ hành.

## Hook hội thoại

**1. Trao Lò (Act 1 — tutorial node)**
> "Lò này không mới. Lò này từng nứt. Con thấy vết nứt không? Đừng sửa. Vết nứt là ký ức của nó. Luyện đan trong Lò nứt — linh đan mới có hồn."

**2. Trước Ngũ Hành Sơn (Act 2)**
> "Năm đỉnh, năm vị Tổ. Mỗi vị dạy một thứ thầy không dạy được. Lên đi — thầy đợi dưới chân núi. Trò giỏi thì không cần thầy leo cùng."

**3. Cảnh báo ham muốn (Act 3 — sau khi player dùng Tâm Ma mod lần đầu)**
> "Con thấy mạnh hơn không? Đúng. Tâm Ma không nói dối về sức mạnh. Nó chỉ không nói về giá. Giá đến sau — và đến một lần."

**4. Khi player hỏi về Cao Tổ (Act 4)**
> "Cao Tổ là người thầy kính nhất đời. Và là người thầy không bao giờ dám hỏi thẳng: *vì sao thầy thất bại?* Con không nên mang gánh nặng đó. Nhưng nếu con muốn biết — hỏi Tổ Sư Bất Tử. Ông ấy biết nhiều hơn thầy."

**5. Lời từ biệt (Act 5 — climax)**
> "Con, ngày xưa thầy cũng giống con. Cầm Lò mà tay run. Đan chưa luyện đã bể. Nhưng Lò vẫn ở đây — bởi Lò không phải để dạy luyện đan. Lò là dạy con biết: trời cho gì, con nhận đó."
