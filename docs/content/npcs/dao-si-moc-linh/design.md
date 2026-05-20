---
id: dao-si-moc-linh
ten: Đạo Sĩ Mộc Linh
type: npc
role: tutorial-guide
faction: none
firstAppearance: act-1
location: son-moc-coc
voiceArchetype: gentle-elder
---

# Đạo Sĩ Mộc Linh (`dao-si-moc-linh`)

## Định danh

Ẩn sĩ tu Mộc tại am tranh cạnh am của Sư Phụ trong Sơn Mộc Cốc. Ông lão trên bảy mươi, mắt sáng, giọng nhẹ như gió qua vườn trúc ông tự trồng. Không phải đệ tử Đan Đạo Môn — tu hành độc lập theo dòng Mộc Hành, không thuộc tông môn nào. Sư Phụ và ông quen biết nhau ba mươi năm, gặp mỗi sáng uống trà, không nói chuyện luyện đan — chỉ nói về trúc, về mưa, về con chim mới đến vườn. Đó là loại tình bạn không cần giải thích.

Bài học ông dạy player không phải về linh khí hay affix — là về lý do tu hành. Câu chuyện ông trồng trúc suốt đời là bài học đầu tiên và sâu nhất của campaign về tu hành vị tha: ông trồng trúc không vì mình — vì người đi đường sau cần bóng mát.

## Tính cách

- **Nhẹ nhàng cổ điển**: không dạy bằng lý thuyết — dạy bằng câu chuyện. Mỗi câu chuyện kết thúc mà không giải thích ý nghĩa, để player tự hiểu.
- **Không phán xét tu vi**: không hỏi player cấp mấy, Lò mạnh không. Chỉ hỏi: *"Con có khoẻ không?"*
- **Vui vẻ thật sự**: không phải diễn. Ông thực sự hài lòng với cuộc sống — am tranh, vườn trúc, hàng xóm Sư Phụ. Đó là tu hành của ông.
- **Voice archetype**: gentle-elder. Câu vừa phải, ấm. Hay kể chuyện hơn là giảng lý thuyết. Không dùng thuật ngữ tu chân phức tạp dù bản thân tu chân.

## Vai trò & Chức năng

| Act | Chức năng gameplay | System / Screen |
|-----|-------------------|-|
| Act 1 | NPC encounter node (`acts/act-1/nodes/moc-linh-encounter/`). Dạy player về nguyên tố Mộc cơ bản và khái niệm tương sinh Mộc-Thuỷ trước khi lên Ngũ Hành Sơn | Tutorial phụ: context cho Mộc element trước Act 2 |
| Act 1 | Tặng 3 `dan-duoc-reroll-nho` (Linh Đan reroll nhỏ) sau khi nghe xong câu chuyện trúc | Reward: 3x reroll item; không tốn kim đan |

**Currency cross-ref**: Không bán. Chỉ tặng — và chỉ tặng một lần. Nếu player quay lại, ông mời trà nhưng không tặng thêm.

**Node type**: optional side node — player có thể đi qua không dừng lại, bỏ lỡ reward và lore.

## Quan hệ với Player (arc theo Act)

- **Act 1 — node gặp**: Ông đang ngồi trước am tranh tỉa cành trúc khi player đi qua. Gọi player vào uống trà — không ép. Nếu player dừng lại, ông kể câu chuyện trồng trúc. Không giải thích ý nghĩa. Sau đó tặng 3 linh đan nhỏ: *"Trẻ con thì hay bể. Đây, bể thêm vài cái không sao."*
- **Nếu player quay lại**: Ông nhớ player. Mời trà. Hỏi về hành trình. Nghe nhiều hơn nói. Không có gì thêm để bán hay dạy — nhưng đây là NPC duy nhất trong Act 1 chỉ muốn nghe player kể chuyện.

## Hook hội thoại

**1. Mời vào uống trà (Act 1 — node gặp)**
> *(không nhìn lên, tiếp tục tỉa trúc)* "Con đi đâu vội vậy? Dừng lại uống chén trà. Trà Mộc Linh bùi lắm. Sư Phụ nhà con cũng hay ghé — nhưng ông ấy không bao giờ ngồi đủ lâu."

**2. Câu chuyện trồng trúc**
> "Ông già này trồng trúc suốt đời — bắt đầu từ năm hai mươi tuổi. Bây giờ vườn rộng thế này." *(chỉ ra vườn)* "Con hỏi: trồng cho ai? Ông trả lời: cho người đi đường cần bóng mát. Con hỏi: ông có thấy họ không? Ông trả lời: không. Nhưng trúc thấy."

**3. Giải thích Mộc-Thuỷ tương sinh**
> "Mộc cần Thuỷ. Không có nước — trúc héo. Nhưng con trồng Mộc trong Lò — phải nhớ: Mộc hút Thuỷ. Đặt linh khí Thuỷ gần linh khí Mộc — chúng giúp nhau. Lúc nào cũng vậy, từ vườn này tới pháp bảo cao cấp nhất."

**4. Khi tặng linh đan (Act 1)**
> "Đây. Ba cái. Nhỏ thôi — nhưng bể thì reroll lại được. Trẻ con hay bể — không phải vì dở, là vì chưa biết tay mình nặng nhẹ thế nào. Cứ bể đi. Rồi biết."

**5. Khi player quay lại sau Act 2+**
> *(rót trà, không hỏi về tu vi hay hành trình ngay)* "Ngồi xuống. Trà còn nóng. Kể bác nghe — lên núi thấy gì? Mấy ông Tổ đó có còn khó tính không?"
