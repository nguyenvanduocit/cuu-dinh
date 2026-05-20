---
id: masked-echo
ten: Kẻ Đeo Mặt Nạ
type: npc
role: antagonist
faction: heart-demon-race
firstAppearance: act-1
location: roaming
voiceArchetype: serene tempter
---

# Kẻ Đeo Mặt Nạ (`masked-echo`)

## Định danh

Một tiếng vọng rò rỉ của Hỗn Nguyên Tâm Ma Vương. Phong ấn Cao Tổ giữ được cái thân, nhưng tâm ma vốn không cần thân — một mảnh ý chí của nó theo mạch Sơn Hà Đồ Lệnh chui vào Lò Luyện Đan tổ truyền, nằm đó tám trăm năm. Kẻ Đeo Mặt Nạ là mảnh ấy hiện hình: thân ảnh khoác áo xám không viền, đeo mặt nạ gốm trắng vẽ một gương mặt bình thản nhắm mắt. Mặt nạ luôn có vết nứt — soi chiếu vết nứt trên Lò player đang cầm.

Bản chất lộ ở Hồi 5: mặt nạ không che gương mặt nào cả. Nó **là** gương mặt — gương mặt player của một ngày mai mà ham muốn đã thắng. Kẻ Đeo Mặt Nạ cũng là nguồn của tiếng đếm "chuyển thứ chín" vọng trong Lò mỗi khi player ép Phong Ấn quá giới hạn.

## Tính cách

- **Bình thản tuyệt đối**: không bao giờ đe doạ, không bao giờ nổi giận — ngay cả khi player từ chối. Sự bình thản đó đáng sợ hơn bất kỳ lời doạ nào.
- **Nói sự thật, sắp xếp theo cách khiến người ta muốn làm điều sai**: *"Mạnh hơn thì cứu được nhiều người hơn"* — câu này đúng. Đó là lý do nó nguy hiểm.
- **Cám dỗ bằng quà, không bằng ép buộc**: nó hiểu ham muốn không cần bị ép — ham muốn chỉ cần được mời.
- **Voice archetype**: serene tempter. Nói đều, không nhấn, không lên xuống. Mỗi câu như một xác nhận đã biết trước, không phải câu hỏi.

## Mặt nạ = đồng hồ campaign

Mặt nạ liền dần qua từng Hồi. Hồi 1: nứt toác, gần vỡ — Kẻ Đeo Mặt Nạ còn mờ nhạt, chỉ thoáng thấy. Mỗi lần player chọn tham — reroll linh đan, ép Phong Ấn vượt ngưỡng, mở Tâm Ma mod — một đường nứt khép lại. Hồi 5: mặt nạ lành lặn = nó đã đủ rõ hình để hợp nhất với thân chính. Người chơi tự tay hàn gắn kẻ thù của mình.

## Vai trò & Chức năng

| Act | Xuất hiện | Cơ chế gameplay |
|-----|-----------|----------------|
| Hồi 1 | Thoáng thấy ở rìa đấu trường boss Dị Tượng — quay lại thì biến | Không tương tác, chỉ visual |
| Hồi 2 | Node `hermit-foreshadow` — cuộc trò chuyện đầu tiên | Tặng Tinh Hoa Ngũ Hành (cám dỗ item), trigger event ghi nhận lần tương tác đầu |
| Hồi 3 | Xuất hiện tại Đạo Quán cờ bạc bên Lão Hồ Ly | Cổ vũ player quay thêm; mỗi lần player mở Tâm Ma mod → 1 vết nứt mặt nạ khép |
| Hồi 4 | Ở sảnh 5 cánh cửa Đạo Phái — hỏi player muốn trở thành phiên bản ham muốn nào | Không block đường; chỉ đặt câu hỏi rồi biến |
| Hồi 5 | Mặt nạ nứt lần cuối → rơi → lộ mặt player. Hợp nhất vào Hỗn Nguyên Tâm Ma Vương | Trở thành cơ chế "đeo mặt" của boss phase 3 |

**Lore rule**: Không bao giờ bị đánh như boss riêng. Luôn rút lui — cho tới khi gập vào boss cuối. 4th-wall break chỉ dành cho Hỗn Nguyên Tâm Ma Vương; Kẻ Đeo Mặt Nạ là mảnh của nó nên được phép hé meta-awareness rất ngắn, rất thưa.

## Quan hệ với Player (arc theo Act)

- **Hồi 1**: Bóng mờ ở cạnh đấu trường. Player không chắc có thật không. Không tên, không thoại.
- **Hồi 2**: Lần đầu nói chuyện — giọng như người quen cũ, không giới thiệu mình là ai. Tặng quà. Đi ngay sau đó.
- **Hồi 3**: Ngồi bên Lão Hồ Ly như khách quen, không ai thấy ngoài player. Khi Lão Hồ Ly nói "may mắn" — Kẻ Đeo Mặt Nạ khẽ cười: *"Không phải may mắn. Là con đã chọn đúng."*
- **Hồi 4**: Câu hỏi lớn nhất — đặt trước cửa Đạo Phái. Không phải cám dỗ, chỉ là gương soi.
- **Hồi 5**: Mặt nạ rơi. Player nhìn thấy mặt mình — già hơn, mệt hơn, đôi mắt đã quen với việc trả giá. Kẻ Đeo Mặt Nạ không nói thêm gì. Bước tới, ép mặt lên Hỗn Nguyên Tâm Ma Vương — và từ đó, boss có thể đeo bất kỳ khuôn mặt nào.

## Hook hội thoại

**1. Lần gặp đầu (Hồi 2 — node hermit-foreshadow)**
> "Con luyện đan vì điều gì? Đừng vội trả lời. Câu trả lời nhanh thường là câu trả lời sai. Ta sẽ đợi — ta có nhiều thời gian."

**2. Tặng quà (Hồi 2)**
> "Tinh Hoa này — cầm lấy. Không phải bẫy. Ta không cần bẫy con. Ta chỉ cần con hiểu: sức mạnh không phải tội lỗi. Chối bỏ sức mạnh mới là lãng phí."

**3. Tại Đạo Quán (Hồi 3 — sau khi player mở Tâm Ma mod)**
> "Thấy chưa? Vẫn còn nguyên. Con lo lắng quá nhiều. Một lần không giết ai cả. Và lần sau — con đã biết rồi. Dễ hơn. Luôn dễ hơn."

**4. Trước cửa Đạo Phái (Hồi 4)**
> "Năm cánh cửa. Năm phiên bản của con nếu ham muốn được chọn thay con. Ta không nói phiên bản nào hay hơn. Ta chỉ hỏi: phiên bản nào con sợ nhất — và vì sao con sợ nó?"

**5. Lúc mặt nạ rơi (Hồi 5)**
> "Ta không phải kẻ thù của con. Kẻ thù thì con đánh được. Ta là điều con muốn — con đánh thế nào?"
