---
id: furnace-spirit
ten: Lò Thần
type: npc
role: repair-npc
faction: null
firstAppearance: act-3
location: hoa-son-lo-coc
voiceArchetype: gruff craftsman
---

# Lò Thần (`furnace-spirit`)

## Định danh

Linh Hồn Lò Luyện Đan Cổ. Người thợ rèn chết khi đúc Lò tổ truyền bốn nghìn năm trước — hồn fuse vào kim loại, không siêu thoát, không nuối tiếc. Xuất hiện khi Lò cần sửa chữa lớn hoặc nâng cấp mà phàm nhân không thể làm. Hình dạng: lão thợ to lớn trần thân phủ bụi than đen, một mắt (mắt kia mất trong tai nạn đúc Lò năm đó — vết thương không chữa lành vì hồn không có thể xác để lành), tay cầm búa thần cỡ bằng cánh tay người thường. Không tên riêng — chỉ là "Lò Thần", chính ông cũng không còn nhớ tên cũ.

## Tính cách

- **Cục cằn nhưng công bằng**: không nịnh, không đuổi khéo. Nói thẳng, kể cả khi sự thật khó nghe. Nếu Lò tệ — ông nói tệ. Nếu player craft giỏi — ông gật đầu, không nói gì. Gật đầu của ông giá hơn lời khen của mọi người.
- **Tôn trọng effort, không tôn trọng địa vị**: Tổ Sư Bất Tử đến sửa Lò — ông cũng không nể. Tiểu đồng tử mang Lò vỡ toét — ông sửa cẩn thận như nhau.
- **Hiểu Lò hơn người tạo ra nó**: bốn nghìn năm trong kim loại cho ông một loại tri thức không thể học — ông cảm nhận được affix nào đang "căng thẳng", linh khí nào đang "xung đột" chỉ qua tiếng gõ.
- **Voice archetype**: gruff craftsman. Câu ngắn. Không thừa từ. Ít dùng tính từ. Hay xen tiếng gõ búa vào giữa câu như dấu chấm sống.

## Vai trò & Chức năng

| Act | Chức năng gameplay | System / Screen |
|-----|-------------------|-----------------|
| Act 3 | Sửa Lò bị vỡ (từ 4-slot cũ nứt → 6-slot). Mở rộng lên 8 slot sau quest phụ "tìm nguyên liệu Lửa Cổ" | `screen: furnace-main` — unlock 8 slot, trigger tutorial slot mới |
| Endgame | Nâng cấp Lò đặc biệt: khắc Cổ Văn lên Đỉnh/Thân/Nắp, cho phép affix tier cao nhất | `screen: furnace-upgrade` — nâng Lò lên cấp Huyền, Địa, Thiên |

**Currency cross-ref**: Nhận `linh-khi-hoa-*` (linh khí Hoả phẩm cao), `nguyen-lieu-lua-co` (Nguyên Liệu Lửa Cổ từ boss Hoả Sơn) làm nguyên liệu sửa chữa. Không nhận kim đan — ông không cần tiền.

**Screen**: `furnace-repair` → merge vào `furnace-main` sau khi Lò hoàn chỉnh.

## Quan hệ với Player (arc theo Act)

- **Act 3 — lần đầu gặp**: Lò Thần không xuất hiện cho đến khi player và Sư Phụ đến đúng địa điểm Hoả Sơn Lò Cốc và player tự gõ vào Lò cũ ba lần (mechanic nhỏ: player phải "gọi"). Ông xuất hiện từ trong Lò — nghĩa là ông ở trong đó ngay từ đầu, chờ đợi. Nhìn Lò player một lúc không nói. Rồi: *"Bốn slot. Hỏng hai. Sửa được."*
- **Quest phụ Act 3**: Trước khi mở 8 slot, player phải lấy nguyên liệu từ Dị Tượng boss Hoả Sơn. Lò Thần không giải thích tại sao cần nguyên liệu đó — chỉ nói: *"Lấy về đây."* Khi player lấy được, ông nhìn nguyên liệu, gật đầu. Bắt đầu gõ.
- **Endgame**: Ông vẫn ở Hoả Sơn Lò Cốc. Không di chuyển. Không bao giờ di chuyển. Nâng cấp Lò endgame là việc cả hai đều biết không thể làm nhanh — từng affix khắc vào Lò mất vài ngày game-time. Không có cutscene — chỉ có tiếng búa.

## Hook hội thoại

**1. Lần đầu gặp (Act 3)**
> *(gõ búa vào lò player một cái — không xin phép)*
> "Bốn slot. Hai cái hỏng. Một cái nứt sắp hỏng. Sửa được. Nguyên liệu đâu?"

**2. Khi player hỏi ông có tên không**
> "Tên?" *(gõ búa)* "Quên rồi. Bốn nghìn năm không ai gọi. Giờ gọi Lò Thần cũng được. Lò Thần đúng hơn."

**3. Khi Sư Phụ xuất hiện cùng (Act 3)**
> *(nhìn Sư Phụ một giây)*  "Ông vẫn còn sống."
> *(nhìn lại Lò)*  "Tốt. Giữ cậu nhóc này sống thêm một thời gian nữa."

**4. Sau khi sửa xong 8 slot**
> *(đặt búa xuống, nhìn Lò)*  "Xong. Đừng cảm ơn. Làm việc đi."
> *(quay lưng)*  "Lò này — 4000 năm rồi. Nó biết cách sống. Con thì chưa. Học từ nó."

**5. Endgame — khi player mang Lò lên nâng cấp tier Thiên**
> "Tier Thiên." *(dừng)* "Không ai từng yêu cầu tier này từ lão."
> *(gõ búa nhẹ vào lòng bàn tay mình)*  "Không phải không thể làm. Chỉ là — con có chắc chưa? Lò tier Thiên không dung nạp sai lầm. Lò hay người — một trong hai sẽ bể."
