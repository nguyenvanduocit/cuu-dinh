---
id: ngu-hanh-son
ten: Ngũ Hành Sơn
type: region
biome: mountain
element: void
acts: [act-2]
hostFactions: [forgotten-wuxing-ancestors]
ambientMood: "Five elemental peaks, each haunted by an ancient spirit — awe and learning"
---

# Ngũ Hành Sơn (`ngu-hanh-son`)

## Định danh

Năm đỉnh núi nguyên tố — vùng tổng hợp Ngũ Hành, nơi Act 2 diễn ra. Không có biome đơn: mỗi đỉnh mang bản sắc của nguyên tố riêng — Kim Phong lạnh lẽo ánh bạc, Mộc Phong xanh ngọc um tùm, Thuỷ Phong xanh thẳm suối chảy, Hoả Phong đỏ cinnabar khói bốc, Thổ Phong nâu đất trầm mặc. Sống núi trung tâm là điểm trung hoà, thoáng thấy bầu trời hư không giữa các đỉnh.

Mỗi đỉnh ám bởi linh hồn một Ngũ Hành Tổ — những đan sư thượng cổ chưa siêu thoát, gắn chặt với nguyên tố mình đã tu luyện cả đời. Họ không tấn công player — họ dạy bằng cách thử thách.

## Vai trò Atlas

Vùng chiến dịch Act 2, không phải vùng atlas độc lập. Sau khi mở Sơn Hà Đồ, Ngũ Hành Sơn trở thành **tham chiếu trung tâm T5–T8** — nơi player lần đầu gặp pháp trận đa nguyên tố. Đan Pháp Hỗn Nguyên lấy cảm hứng từ đây (hỗn hợp Ngũ Hành trên cùng một board).

Boss chiến dịch: `../../bosses/anomaly-wuxing/` — Dị Tượng Ngũ Hành (T5, Anomaly, void element, punish build một-chiều).

Không host Tứ Tượng Linh Tổ — Ngũ Hành Sơn là cấp học, không phải cấp thử thách endgame.

## Lore

Ngũ Hành Sơn không xuất hiện ngẫu nhiên ở giữa Cửu Châu Đan Vực. Khi trận Đan Kiếp làm vỡ cân bằng Ngũ Hành, năm dòng linh khí nguyên tố phân kỳ ra năm hướng khác nhau — nhưng tại điểm giao thoa địa mạch này, chúng không tách hẳn mà vẫn giữ được liên kết yếu với nhau. Kết quả là năm đỉnh núi mang đầy đủ nguyên khí thuần loại nhưng không xung khắc nhau khi đứng gần — một phép nhiệm màu địa lý chưa ai giải thích được.

Ngũ Hành Tổ chọn nơi đây làm nơi trú ngụ linh hồn vì cùng lý do: năm nguyên tố cùng tồn tại trong hoà bình là điều kiện dạy đệ tử hiểu thực sự, không phải hiểu lý thuyết. Họ chờ đợi ở đây từ thuở Đan Kiếp, dạy bất kỳ đan sư nào đủ kiên nhẫn leo lên đủ năm đỉnh.

## Encounters & Đặc trưng

**Cấu trúc vùng**: năm đỉnh = năm khu vực riêng, mỗi khu có mob và hazard theo nguyên tố. Player phải chinh phục cả năm (theo thứ tự tự chọn) trước khi gặp Dị Tượng ở sống núi trung tâm.

**Mob đặc trưng theo đỉnh**:
- *Kim Phong*: Kiếm Linh (bắn linh lực Kim dạng đường thẳng, khó né)
- *Mộc Phong*: Cổ Thụ Tinh (rễ khóa board, tương tự Sơn Mộc nhưng diện tích lớn hơn)
- *Thuỷ Phong*: Hải Ngư Linh (làm chậm velocity linh lực 20%)
- *Hoả Phong*: Hoả Điểu (đốt hai linh khí ngẫu nhiên mỗi 15 giây — debuff Thiêu Đốt)
- *Thổ Phong*: Địa Linh Quỷ (chôn linh khí xuống đất 4 giây, không hoạt động)

**Hazard biome**: trên sống núi trung tâm, linh khí ngẫu nhiên bị "chuyển nguyên tố" mỗi 20 giây (mechanic preview của Dị Tượng Ngũ Hành — punish player bám cứng một element).

**Drop bias**: Ngũ Hành Tinh Thạch (5 loại, mỗi đỉnh drop loại tương ứng) + reagent Ngũ Hành Hỗn Linh (Đan Pháp Hỗn Nguyên). Không drop Cổ vật Unique — vùng học không phải vùng hunt.

## Kết nối

- **Khu vực kề**: Sơn Mộc Cốc (phía dưới, Act 1) → Hồn Nguyên Điện (phía trên, Act 5 — đường lên đỉnh cao nhất vũ trụ)
- **Atlas path**: pháp trận Hỗn Nguyên T5–T8 lấy biome đây làm nền
- **Acts**: `../../acts/act-2/`
- **Boss**: `../../bosses/anomaly-wuxing/` (T5, void, Anomaly)
- **Factions**: `../../factions/forgotten-wuxing-ancestors/` — Ngũ Hành Tổ (5 linh hồn cổ, NPC dạy học)
