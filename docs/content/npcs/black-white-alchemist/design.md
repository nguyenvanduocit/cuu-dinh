---
id: black-white-alchemist
ten: Đan Sư Hắc Bạch
type: npc
role: crafting-bench
faction: dan-dao-sect
firstAppearance: act-1
location: khai-lu-tran
voiceArchetype: silent twin duo
---

# Đan Sư Hắc Bạch (`black-white-alchemist`)

## Định danh

Thủ Lĩnh Đan Lư Bàn — hai người thủ lĩnh, một hình bóng. Anh em sinh đôi, ngoại hình giống hệt nhau đến mức không thể phân biệt nếu không nhìn màu áo: một luôn đen, một luôn trắng. Cả hai điếc từ nhỏ (mất thính giác trong vụ hoả hoạn năm lên bảy) — giao tiếp hoàn toàn bằng ký hiệu tay, và bằng cách hoàn thành câu của nhau. Sư Phụ nuôi dưỡng hai người sau khi cha mẹ mất trong cùng vụ hoả hoạn đó. Sống vĩnh viễn tại Khai Lư Trấn — không bao giờ lên cao hơn Ngũ Hành Sơn. Họ không cần đi đâu: mọi thứ cần biết về luyện đan đều có thể học từ Đan Lư Bàn.

## Tính cách

- **Kỹ thuật thuần tuý**: không nói chuyện phiếm, không hỏi lịch sử. Chỉ nói về craft — phần trăm, nguyên liệu, kết quả. Cảm xúc thể hiện qua hành động: Hắc gõ tay lên bàn khi lo lắng; Bạch bày nguyên liệu cẩn thận hơn khi muốn nói "cẩn thận".
- **Cân bằng lẫn nhau**: Hắc thiên về rủi ro cao — nêu phương án mạnh trước. Bạch thiên về an toàn — đề xuất lựa chọn thay thế. Cả hai đều kết thúc bằng: *"Quyết định của con."*
- **Yêu thương không lời**: Kẻ Đeo Mặt Nạ không thể cám dỗ hai người này — họ không ham muốn gì ngoài cái Lò trước mặt. Đó là loại vô dục mạnh nhất.
- **Voice archetype**: silent twin duo. Dialogue luôn đi theo cặp — Hắc nói nửa đầu, Bạch nói nửa sau, hoặc ngược lại. Không bao giờ nói cùng lúc. Ký hiệu tay được mô tả bằng stage direction trong dialogue.

## Vai trò & Chức năng

| Act | Chức năng gameplay | System / Screen |
|-----|-------------------|-----------------|
| Act 1 | Mở Đan Lư Bàn. Dạy craft cơ bản: thêm affix, Phong Ấn cơ bản, linh đan enhance | `screen: crafting-bench` — mở lần đầu |
| Act 3 | Dạy craft nâng cao tại Hoả Sơn: Khắc Phù, Đồ Sương tổ hợp, reforge affix | `screen: crafting-bench` expanded; mở tab Khắc Phù |
| Act 5+ | Tiếp tục ở Khai Lư Trấn. Sau cái chết Sư Phụ → đảm nhận vai trò truyền thừa nơi Đan Lư Bàn | Endgame crafter; mở recipe `co-dan-lo` nếu player có Đan Pháp Cổ Đan Lò |

**Currency cross-ref**: Nhận `linh-khi-*` + `dan-duoc-*` + `kim-dan` làm phí dịch vụ. Không bán — chỉ craft theo yêu cầu player.

**Screen**: `crafting-bench` — Đan Lư Bàn hiện thị slot Lò, các affix đang gắn, xác suất thành/bại từng thao tác.

## Quan hệ với Player (arc theo Act)

- **Act 1**: Gặp lần đầu ngay khi player vào Khai Lư Trấn. Hai người đứng sau quầy Đan Lư Bàn, ký hiệu hỏi nhau rồi Hắc bước ra trước. Không bắt tay. Chỉ chỉ vào Lò player, giơ ngón trỏ lên như hỏi: *một không?* Rồi bắt đầu dạy.
- **Act 3**: Hoả Sơn Lò Cốc — hai người xuất hiện bất ngờ. Họ đi theo Sư Phụ, không nói trước. Khi Lò Thần sửa xong 8 slot, Bạch nhìn Lò mới, gật đầu — đó là lời khen cao nhất họ có.
- **Act 5**: Sau khi Sư Phụ mất, Hắc ngồi ở góc Đan Lư Bàn một lúc, tay đặt lên quầy nhưng không làm gì. Bạch đến ngồi bên. Không ký hiệu. Sau đó, họ tiếp tục làm việc. Đó là cách họ đau.

## Hook hội thoại

**1. Lần đầu dạy craft (Act 1)**
> Hắc: *(ký hiệu: "Lò con, nhìn đây")*  "Affix này — 25% bể khi Phong Ấn."
> Bạch: "Hoặc dùng Tinh Hoa Kim — an toàn hơn. Chậm hơn."
> Cả hai: *(đồng thời ký hiệu: "Quyết định của con.")*

**2. Khi player craft thất bại**
> Hắc: *(không nhìn player, nhìn Lò)* "Bể rồi."
> Bạch: *(đẩy nguyên liệu dự phòng về phía player)* "Lần này dùng cái này. Ít rủi ro hơn."
> Hắc: *(ký hiệu)* "Không có lần nào an toàn hoàn toàn."

**3. Khi player hỏi về quá khứ của họ**
> Hắc: *(dừng tay, nhìn Bạch)*
> Bạch: *(lắc đầu nhẹ — không phải từ chối, là "không biết bắt đầu từ đâu")*
> Hắc: *(gõ tay lên bàn ba cái, ký hiệu: "Sư Phụ tốt. Đủ rồi.")*

**4. Giải thích Tâm Ma mod khi player hỏi**
> Hắc: "Tâm Ma mod — mạnh thật."
> Bạch: "Nhưng Lò ghi nhớ. Mỗi lần dùng — Lò thay đổi một chút."
> Hắc: *(chỉ vào vết nứt trên Lò player)* "Con thấy không? Đây không phải vết nứt mới."

**5. Sau Act 5 — Sư Phụ đã mất**
> Hắc: *(nhìn player lâu, ký hiệu điều gì đó rất chậm)*
> Bạch: *(dịch bằng miệng, lần đầu nói không qua ký hiệu)* "Hắc nói: Sư Phụ muốn con tiếp tục. Chúng tôi cũng muốn vậy."
