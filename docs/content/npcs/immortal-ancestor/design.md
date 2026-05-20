---
id: immortal-ancestor
ten: Tổ Sư Bất Tử
type: npc
role: vendor
faction: immortal-ancestor-line
firstAppearance: act-3
location: hoa-son-lo-coc
voiceArchetype: ancient immortal
---

# Tổ Sư Bất Tử (`immortal-ancestor`)

## Định danh

Cảnh Hữu Chân Nhân — Ngũ Hành Sơ Tổ, Người Tạo Sơn Hà Đồ Lệnh. Một trong 5 Ngũ Hành Sơ Tổ từ tám nghìn năm trước — người duy nhất không siêu thoát sau khi truyền nguyên tố cho đệ tử, vì còn một lời hứa chưa trả: hứa với Cao Tổ sẽ trao Sơn Hà Đồ Lệnh mảnh cuối khi đến đúng thời điểm. Trông như người hai mươi lăm tuổi — tóc trắng bạch dài xõa, áo thanh quang không viền, chân trần, mắt chứa tám nghìn năm thế sự nhưng ánh nhìn nhẹ như gió qua hồ. Bán Cổ vật vì tin rằng phàm nhân xứng đáng có cơ hội — mỗi thứ ông bán đều từng thuộc về người ông tôn trọng.

## Tính cách

- **Điềm nhiên cổ đại**: tám nghìn tuổi không còn bị kéo bởi bất kỳ cảm xúc nào đủ mạnh để thay đổi quyết định. Nhưng ông không vô cảm — ông chỉ xử lý thời gian theo đơn vị khác.
- **Khẽ buồn cười**: đủ tuổi để thấy mọi sự khẩn cấp của phàm nhân đều hài hước theo cách không ác ý. Nụ cười của ông mang tính quan sát, không cợt nhả.
- **Ân tình là đơn vị trao đổi duy nhất**: ông không cần kim đan. Ông bán vì tình nghĩa — với Cao Tổ, với lịch sử, với thế hệ sau. Giá Cổ vật của ông là kim đan nhưng ý nghĩa là khác.
- **Voice archetype**: ancient immortal. Nói chậm rãi. Câu dài hơn Sư Phụ, nhưng không dài như học giả. Hay dùng thì quá khứ rất xa: *"Khi đó..."*, *"Thuở ấy..."*. Không bao giờ nói "tôi" — luôn "lão phu".

## Vai trò & Chức năng

| Act | Chức năng gameplay | System / Screen |
|-----|-------------------|-----------------|
| Act 3 | Xuất hiện lần đầu ở Hoả Sơn. Bán Cổ vật tier 1 (unique item, affix hiếm) | `screen: vendor-ancient` — mở shop Cổ vật |
| Act 4 | Bích Hải Đảo — gợi ý về Cao Tổ và Cửu Chuyển; bán Cổ vật tier 2 | Narrative node + vendor |
| Act 5 | Tiết lộ danh tính đầy đủ, trao mảnh cuối Sơn Hà Đồ Lệnh | Key item event: unlock `son-ha-do-lenh-fragment-5` — kích hoạt Atlas |

**Currency cross-ref**: Bán `co-vat-*` (unique), `linh-khi-co-*` (linh khí cổ phẩm hiếm), `nguyen-lieu-co-*`. Nhận `kim-dan` — nhưng nếu player không đủ kim đan, ông có thể trao đổi bằng quest hoàn thành.

**Screen**: `vendor-ancient` — giao diện khác hoàn toàn Lão Hồ Ly: không màu sắc, không animation phù phiếm. Đơn giản như tờ giấy cũ.

## Quan hệ với Player (arc theo Act)

- **Act 3**: Gặp lần đầu, không giới thiệu bản thân. Ngồi bên cạnh Lò Thần như đã ở đó từ lâu. Khi player tiếp cận, ông hỏi: *"Con muốn mua gì?"* — đơn giản như người bán hàng bình thường. Chỉ khi player mua xong, ông nói thêm: *"Cổ vật này từng của người thầy của con. Lão phu mua lại từ ông ấy hai mươi năm trước. Giờ trả về đúng chỗ."*
- **Act 4**: Bắt đầu nói về Cao Tổ — không phải vì player hỏi, mà vì ông thấy đây là lúc. Giọng vẫn đều, nhưng nặng hơn. *"Cao Tổ không thất bại vì thiếu sức mạnh. Ông ấy thất bại vì thành công đúng lúc — và thành công quá sớm khiến người ta quên giá của nó."*
- **Act 5**: Trao mảnh cuối Sơn Hà Đồ Lệnh. Không ceremony, không âm nhạc. Chỉ đặt vào tay player, nói một câu, rồi ông tan dần vào ánh sáng — lời hứa cuối cùng đã trả xong.

## Hook hội thoại

**1. Lần đầu bán hàng (Act 3 — sau giao dịch)**
> "Cổ vật này, lão phu đã giữ 4000 năm. Bây giờ trao cho con — không phải vì con xứng đáng. Mà vì... con sẽ đối mặt với điều mà lão phu từng phải đối mặt. Cổ vật này từng là của tổ sư của tổ sư con. Lão phu nợ tổ sư ấy một ân tình. Hôm nay trả."

**2. Khi player hỏi ông bao nhiêu tuổi (Act 3)**
> "Tám nghìn năm." *(dừng)* "Con hỏi để làm gì? Tuổi không có nghĩa gì cả. Lão phu gặp những kẻ trẻ hơn con đã chết từ ngàn đời. Và gặp những kẻ như lão phu — vẫn chưa xong việc."

**3. Gợi ý về Cao Tổ (Act 4)**
> "Cao Tổ không thất bại vì thiếu sức mạnh. Ông ấy thất bại vì thành công đúng lúc — và thành công quá sớm khiến người ta quên giá của nó. Trận Đan Kiếp không phải tai nạn. Đó là kết quả tất yếu của một người muốn chứng minh quá nhiều thứ cùng một lúc."

**4. Khi player hỏi tại sao ông bán hàng (Act 4)**
> "Lão phu có thể tặng không. Nhưng thứ được tặng thì không trân trọng. Thứ phải trả giá thì nhớ lâu hơn. Giá không phải để lão phu giàu. Giá là để con nhớ."

**5. Trao mảnh cuối Sơn Hà Đồ Lệnh (Act 5)**
> *(đặt mảnh cuối vào tay player, không nhìn vào mắt — nhìn vào mảnh)*
> "Đây là thứ cuối cùng lão phu cần trao. Cao Tổ mượn Sơn Hà Đồ Lệnh để luyện Cửu Chuyển — lão phu cho mượn. Ông ấy thất bại. Giờ đến lượt con. Lão phu không biết con sẽ thành công không. Nhưng lão phu đã đợi đủ lâu rồi."
