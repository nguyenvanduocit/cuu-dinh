---
id: linh-hoa-thuong-nhan
ten: Linh Hoa Thương Nhân
type: npc
role: vendor
faction: none
firstAppearance: act-4
location: bich-hai-dao
voiceArchetype: merchant
---

# Linh Hoa Thương Nhân (`linh-hoa-thuong-nhan`)

## Định danh

Thương nhân nguyên liệu tại Bích Hải Đảo — người đầu tiên player gặp khi đặt chân lên đảo. Phụ nữ trung niên, quần áo thương lữ màu xanh biển có thêu hoa sen nhỏ (thương hiệu của bà — "Linh Hoa" từ đó mà ra), đội nón rộng vành che nắng biển, đeo nhiều túi nhỏ đựng mẫu hàng. Giọng nói có trọng âm của người quen buôn bán xa: rõ ràng, không thừa từ khi đang đàm phán, nhưng có thể nói chuyện rất nhiều khi muốn tạo thiện cảm.

Không phải đạo sĩ, không phải thương nhân phàm thường — bà hiểu Nguyên Liệu đủ để mô tả tác dụng của từng loại, nhưng không đủ để tự dùng. Thị trường ngách: chuyên Nguyên Liệu cho Sơn Hà Đồ Lệnh — thứ các đạo sĩ cần nhưng không ai chuyên bán, vì đòi hỏi hiểu biết cả về luyện đan lẫn buôn bán.

## Tính cách

- **Thương nhân chuyên nghiệp**: biết cân bằng giữa upsell và giữ chân khách. Không bán thứ player không cần — vì tạo khách hàng trung thành quan trọng hơn một lần bán hàng tốt.
- **Thẳng thắn về sản phẩm**: không phóng đại tác dụng. Nếu Nguyên Liệu này phù hợp hơn cho build Hoả — bà nói thẳng dù player đang chạy build Kim.
- **Tò mò về người mua**: hỏi player đang làm bí cảnh gì, Đan Pháp variant nào — không phải để tám chuyện mà để tư vấn đúng. Đây là điều player không expect từ vendor.
- **Voice archetype**: merchant. Câu rõ ràng. Hay dùng cụm "nói thật với ngài" trước khi đưa tư vấn thật sự. Không dùng từ tu chân phức tạp — bà giải thích theo ngôn ngữ buôn bán.

## Vai trò & Chức năng

| Act | Chức năng gameplay | System / Screen |
|-----|-------------------|-|
| Act 4 | Vendor đầu tiên bán Nguyên Liệu tại Bích Hải Đảo. Giới thiệu khái niệm 4 Nguyên Liệu cho Sơn Hà Đồ Lệnh entry. Bán `nguyen-lieu-*` tier 1-2 | `screen: vendor-materials` — mở tab Nguyên Liệu lần đầu; tutorial compose Sơn Hà Đồ Lệnh |
| Endgame | Tiếp tục tại Bích Hải Đảo. Bán `nguyen-lieu-*` tier 3 khi player đạt atlas T8+ | Vendor mở rộng; rotate stock theo atlas tier player |

**Currency cross-ref**: Nhận `kim-dan`. Có thể đổi chéo: bà chấp nhận `dan-duoc-*` thừa để đổi lấy `nguyen-lieu-*` theo tỷ lệ bà tự định — mechanic barter nhỏ độc đáo của bà.

**Stock rotation**: stock của bà rotate mỗi 3 ngày game-time — có Nguyên Liệu hiếm theo mùa. Bà thông báo khi stock sắp hết để tạo urgency thật (không phải fake scarcity).

**Screen**: `vendor-materials` — hiển thị 4 Nguyên Liệu đang cầm của player và preview tác dụng combine khi hover. Bà giải thích cơ chế compose tại đây.

## Quan hệ với Player (arc theo Act)

- **Act 4 — lần đầu gặp**: Player vừa đặt chân lên cầu cảng Bích Hải Đảo, bà đã ở đó — không phải đợi player, bà đang bán cho người khác. Khi thấy player mang Lò Luyện Đan, bà kết thúc giao dịch trước và chủ động đến: *"Ngài mang Lò mà chưa có Nguyên Liệu — đảo này đúng chỗ rồi. Tôi có thứ ngài cần."*
- **Act 4 — sau khi player mua lần đầu**: Bà giải thích compose Sơn Hà Đồ Lệnh theo ngôn ngữ thương nhân: *"4 Nguyên Liệu vào = bí cảnh modifier ra. Mỗi loại modifier ảnh hưởng cái gì — tôi giải thích từng loại. Ngài nghe để mua đúng."* Đây là tutorial Nguyên Liệu chính thức của game.
- **Endgame**: Bà nhận ra player quen mặt. Bắt đầu để dành stock tốt cho player khi có. Không thông báo — chỉ im lặng đặt Nguyên Liệu tier cao ra trước khi player hỏi.

## Hook hội thoại

**1. Lần đầu tiếp cận (Act 4 — cầu cảng Bích Hải Đảo)**
> "Ngài mang Lò mà chưa có Nguyên Liệu — đảo này đúng chỗ rồi. Tôi là Linh Hoa. Bán Nguyên Liệu cho Sơn Hà Đồ Lệnh. Nói thật với ngài: đây là thứ ngài cần nếu muốn vào bí cảnh đúng cách."

**2. Giải thích cơ chế Nguyên Liệu**
> "4 slot Nguyên Liệu trong Sơn Hà Đồ Lệnh. Mỗi slot một loại modifier — loại boss, loại loot, loại nguyên tố môi trường, loại đặc biệt. Ngài muốn bí cảnh Hoả nhiều Tâm Ma drop? Tôi chỉ ngài mua cái gì. Muốn safe một chút? Tôi chỉ cái khác."

**3. Tư vấn thật khi player hỏi cái đắt nhất**
> "Nói thật với ngài — cái đắt nhất không phải lúc nào cũng tốt nhất cho ngài. Ngài đang chạy build gì? Thuỷ-Mộc à? Vậy cái này..." *(đẩy một loại sang)* "...tốt hơn cái kia hai lần giá. Không phải vì rẻ hơn — là vì phù hợp hơn."

**4. Về stock rotation**
> "Tuần sau tôi có lô Nguyên Liệu từ Cửu Tiêu — hiếm lắm, không phải lúc nào cũng có. Nếu ngài cần, ghé lại trước cuối tuần. Không giữ lại được lâu."

**5. Endgame — khi player đạt atlas T12+**
> *(không nói gì, chỉ đặt một Nguyên Liệu tier 3 lên quầy trước khi player hỏi)*
> "Biết ngài cần cái này. Để dành từ tuần trước rồi. Giá thường thôi — ngài khách quen."
