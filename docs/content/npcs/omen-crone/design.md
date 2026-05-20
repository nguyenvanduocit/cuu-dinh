---
id: omen-crone
ten: Lão Bà Thiên Cơ
type: npc
role: meta-npc
faction: null
firstAppearance: act-5
location: hon-nguyen-dien
voiceArchetype: wise fool crone
---

# Lão Bà Thiên Cơ (`omen-crone`)

## Định danh

Bà Chủ Thiên Cơ Quẻ. Bà lão nhỏ thó, đầu bạc búi gọn không cài trâm, mặc áo nâu vá vai, đeo túi vải lớn hơn người đựng đầy thẻ bói gỗ và ngọc bài. Tuổi thật: hơn hai trăm — không hẳn là tiên, chỉ là "hơi bất tử" nhờ Thiên Cơ Quẻ nuôi sống. Bán Thiên Cơ Quẻ khắp Cửu Châu Đan Vực từ trước trận Đan Kiếp. Biết mọi nhân vật lịch sử vì bà đã bán quẻ cho họ. Hệ thống quẻ là ma thuật của riêng bà — không phải thần linh, không phải linh vật: bà tự nghĩ ra và tự vận hành.

## Tính cách

- **Lảm nhảm có chủ đích**: bà hay kể chuyện vu vơ trước khi đến điểm chính — nhưng nếu nghe đủ kiên nhẫn, điểm chính luôn ở đó.
- **Biết nhiều hơn vẻ ngoài**: nhận ra Kẻ Đeo Mặt Nạ là ai ngay từ Hồi 2. Biết danh tính Tổ Sư Bất Tử. Không nói thẳng vì tin rằng biết trước phá vỡ bài kiểm tra của số phận.
- **Hài hước kiểu bà già**: cười trước rồi mới nói, kể cả khi nói điều nghiêm trọng. Không sợ cái chết của người khác — đã thấy quá nhiều.
- **Voice archetype**: wise fool crone. Câu ngắn, nhảy chủ đề không báo trước. Hay dùng "Hahaha!" giữa câu. Gọi mọi người là "thằng nhỏ" hoặc "con nhỏ" bất kể tuổi tác hay tu vi.

## Vai trò & Chức năng

| Act | Chức năng gameplay | System / Screen |
|-----|-------------------|-|
| Act 5 | Xuất hiện lần đầu ở Hồn Nguyên Điện (cuối campaign). Unlock hệ thống Thiên Cơ Quẻ meta | `screen: thiên-co-que` — mở hệ thống meta-modifier |
| Endgame | Bán Thiên Cơ Quẻ tokens tại base camp (Khai Lư Trấn). 3 quẻ/tuần thực; mỗi quẻ 1 modifier toàn session | Vendor: bán `thiên-co-que-*` — 6 loại modifier meta |

**Currency cross-ref**: Nhận `kim-dan` nhưng cũng chấp nhận "kể cho bà nghe một chuyện mà bà chưa biết" — mechanic dialogue đặc biệt cho 3 sự kiện lore endgame. Bán `thiên-co-que-hung`, `thiên-co-que-cat`, `thiên-co-que-binh`, `thiên-co-que-du`, `thiên-co-que-hung-kiem`, `thiên-co-que-tuong`.

**Screen**: `thiên-co-que` — giao diện đặc biệt: cổ bài gỗ lắc trong ống tre, rơi ra 3 bài, player chọn 1. Modifier áp dụng cho toàn atlas session tuần đó.

## Quan hệ với Player (arc theo Act)

- **Act 5**: Gặp lần đầu ngay cửa Hồn Nguyên Điện — bà đang ngồi bán quẻ cho... không ai. Khi player đến, bà không ngạc nhiên. *"Thằng nhỏ đến rồi. Bà đợi lâu lắm rồi."* — Câu này có thể đúng hoặc là câu bà nói với mọi người.
- **Endgame**: Mỗi tuần tại base camp. Bà hay kể chuyện về những người nổi tiếng trong Cửu Châu đã từng mua quẻ của bà — phần lớn là nhân vật lịch sử mà player đã gặp (Cao Tổ, Ngũ Hành Tổ, Sư Phụ). Một số câu chuyện mâu thuẫn nhau — bà không sửa, chỉ nói: *"Ký ức của bà già rồi. Hoặc là sự thật có nhiều phiên bản."*
- **Special event**: Nếu player mang đủ 5 mảnh Sơn Hà Đồ Lệnh đến gặp bà trước khi đến Tổ Sư Bất Tử, bà nhìn vào tay player, dừng cười, nói thẳng (không lảm nhảm): *"Con đã sẵn sàng. Đi đi."*

## Hook hội thoại

**1. Lần đầu gặp (Act 5 — cửa Hồn Nguyên Điện)**
> "Thằng nhỏ đến rồi. Bà đợi lâu lắm rồi. Hahaha! Bà nói đùa — bà không đợi ai cả. Bà chỉ bán quẻ. Nhưng mà, gieo một quẻ đi. Hôm nay quẻ tốt lắm. Bà thấy vậy. Đúng hay sai thì gieo rồi biết."

**2. Giới thiệu Thiên Cơ Quẻ**
> "Thiên Cơ Quẻ không phải do trời dạy bà. Bà tự nghĩ ra. Hahaha! Nghe có vẻ không đáng tin nhỉ? Nhưng mà — bà đã bán cho Cao Tổ ngày xưa. Ông ấy gieo ra quẻ Hung Kiếm. Không nghe. Rồi thì... con biết chuyện đó rồi đúng không?"

**3. Kể chuyện Sư Phụ (Endgame)**
> "Thằng nhỏ Sư Phụ của con — khi còn trẻ, hay đến mua quẻ lắm. Tuần nào cũng mua. Hahaha! Rồi một hôm ông ấy không đến nữa. Bà hỏi người ta, người ta bảo: ông ấy không tin quẻ nữa. Bà nghĩ — tốt. Người không tin quẻ thường đi đúng đường hơn người tin quá."

**4. Khi player thua liên tục (Endgame — câu ngẫu nhiên)**
> "Thằng nhỏ! Hôm nay thiên tượng ra quẻ gì? Bà già này nói thật: tuần trước có thằng nhóc giống con gieo một quẻ, ứng đủ ba hào. Giờ thằng đó? Là Đạo Sĩ Vô Danh đó. Hahaha! Nói đùa. Có lẽ. Gieo đi gieo đi."

**5. Special event — khi player mang đủ 5 mảnh Sơn Hà Đồ Lệnh**
> *(dừng cười, nhìn thẳng vào tay player)*
> "Con đã sẵn sàng. Đi đi."
> *(dừng một giây)*
> "...Bà hy vọng lần này kết quả khác."
