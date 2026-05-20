---
id: map-sorcerer
ten: Pháp Sư Bản Đồ
type: npc
role: atlas-guide
faction: null
firstAppearance: act-4
location: bich-hai-dao
voiceArchetype: enthusiastic scholar
---

# Pháp Sư Bản Đồ (`map-sorcerer`)

## Định danh

Học Giả Atlas — Nhà Soạn Đan Pháp. Người phụ nữ trung niên, áo học giả nâu sẫm, ngón tay ố mực xanh đen không bao giờ hết, luôn mang theo bộ bút và ba cuộn giấy dắt sau lưng. Mũi nhọn, mắt to, cái cách bà nhìn vào không gian trống như đọc chữ không ai thấy. Bà không phải đạo sĩ — không có tu vi. Nhưng bà hiểu cấu trúc Sơn Hà Đồ Lệnh và hệ Đan Pháp sâu hơn bất kỳ đạo sĩ nào, đơn giản vì bà đã đo đạc, phân loại và lập công thức toán học cho chúng suốt ba mươi năm. Bạn lâu năm của Sư Phụ — họ không đồng ý về nhiều thứ, nhưng tôn trọng nhau tuyệt đối.

## Tính cách

- **Học thuật đến mức buồn cười**: bà giải thích Đan Pháp bằng công thức trước khi giải thích bằng lời. Khi nhận ra người nghe không theo được, bà thở dài và bắt đầu lại từ đầu — kiên nhẫn vô hạn nhưng cũng có vẻ hơi bực.
- **Chính xác đến mức đáng tin**: bà không nói "khoảng 70%". Bà nói "68.3%, sai số ±2% tùy vào độ tinh khiết linh khí". Điều này đôi khi khiến người ta tin bà hơn mức cần thiết.
- **Hài hước nhẹ — tự biết mình buồn cười**: khi nói một câu quá học thuật và thấy player nhìn mình như nhìn người lạ, bà tự cười trước.
- **Voice archetype**: enthusiastic scholar. Câu dài hơn các NPC khác. Hay mở đầu bằng "thực ra..." hoặc "về mặt kỹ thuật...". Không dùng Hán-Việt phức tạp — bà là người bình thường, không phải đạo sĩ.

## Vai trò & Chức năng

| Act | Chức năng gameplay | System / Screen |
|-----|-------------------|-|
| Act 4 | Dạy Đan Pháp craft lần đầu tại Bích Hải Đảo. Giải thích 10 variants, cách kết hợp với Nguyên Liệu | `screen: dan-phap-craft` — mở hệ thống Đan Pháp |
| Act 5 | Trao 5 Đan Pháp nâng cao (Tử Sinh, Hỗn Nguyên, Thiên Kiếp, Tâm Ma, Cổ Đan Lò) khi player đạt level 40+ | Quest reward: unlock 5 Đan Pháp tier 2 |
| Endgame | Giải đáp atlas — giải thích mechanics Sơn Hà Đồ T1-T16, atlas tree, composition endgame | `screen: atlas` — NPC giải thích node; xuất hiện khi player unlock atlas tree |

**Currency cross-ref**: Không bán hàng. Nhận reward quest bằng `dan-phap-*` mà player craft theo hướng dẫn bà — bà giữ lại để "nghiên cứu tiếp".

**Screen**: `dan-phap-craft` — giao diện soạn Đan Pháp: chọn variant base, gắn Nguyên Liệu 4 slot, preview modifier stack, xác nhận. Bà đứng bên cạnh giải thích từng bước.

## Quan hệ với Player (arc theo Act)

- **Act 4**: Gặp lần đầu ở bến cảng Bích Hải Đảo — bà đang vẽ bản đồ trên một tờ giấy lớn trải ra mặt cầu cảng. Không ngẩng đầu chào khi player đến. Chỉ hỏi, không nhìn: *"Con biết Sơn Hà Đồ Lệnh được vẽ theo nguyên lý ngũ hành tương sinh chưa? Không? Tốt. Ngồi xuống."* — rồi bắt đầu dạy.
- **Act 5**: Sau khi biết về kế hoạch đối đầu Hỗn Nguyên Tâm Ma Vương — bà im lặng lâu hơn thường. Rồi lấy ra 5 cuộn Đan Pháp đã chuẩn bị sẵn. *"Tôi đã tính trước trường hợp này."* Không giải thích bà tính từ bao giờ.
- **Endgame**: Bà là người duy nhất giải thích atlas tree bằng ngôn ngữ toán học và lịch sử cùng lúc. Mỗi lần player unlock node atlas mới — bà có thể gặp ngẫu nhiên và cho thêm context về node đó: ai lập ra nó, khi nào, vì sao.

## Hook hội thoại

**1. Lần đầu gặp (Act 4 — bến cảng Bích Hải Đảo)**
> *(không ngẩng đầu, tiếp tục vẽ)* "Con biết Đan Pháp Tiêu Chuẩn và Đan Pháp Tử Sinh khác nhau ở điểm nào cơ bản nhất không? Không? Tốt. Ngồi xuống. Tôi giải thích một lần — chỉ một lần."

**2. Giải thích Đan Pháp Hỗn Nguyên (Act 4)**
> "Hỗn Nguyên tức là không phân biệt nguyên tố. Về mặt kỹ thuật — 43% combo linh khí bất kỳ hoạt động tốt hơn trong môi trường Hỗn Nguyên, vì không có penalty tương khắc. Nghe có vẻ ổn. Nhưng cũng không có bonus tương sinh. Nên thực ra..." *(dừng, nhìn player)* "Con đang theo không? Thở đi. Tôi nói lại chậm hơn."

**3. Khi player hỏi tại sao bà không có tu vi**
> "Tôi thử tu luyện. Không hợp. Nguyên tố đẩy tôi ra." *(gõ đầu bút vào bản đồ)* "Nhưng tôi có thể đọc được cách chúng hoạt động. Đôi khi người không thể bơi thì giỏi vẽ bản đồ đại dương hơn người bơi được."

**4. Trao 5 Đan Pháp nâng cao (Act 5)**
> *(đặt 5 cuộn lên bàn không giải thích)* "Tử Sinh, Hỗn Nguyên, Thiên Kiếp, Tâm Ma, Cổ Đan Lò. Tôi đã tính trước trường hợp con cần những cái này. Lấy đi. Đừng cảm ơn — nghiên cứu thêm và báo lại kết quả cho tôi sau."

**5. Giải thích atlas endgame (Endgame)**
> "Node này — Diêm Phủ Môn — được lập bởi một trong 5 Ngũ Hành Sơ Tổ, không rõ là ai. Theo tính toán của tôi dựa trên mật độ linh lực và cấu trúc phong ấn: 71% là Kim Tổ. Nhưng đây chỉ là suy luận. Bằng chứng: chưa đủ. Con cứ vào — và kể lại cho tôi nghe."
