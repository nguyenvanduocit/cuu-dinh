---
id: hon-nguyen-dien
ten: Hồn Nguyên Điện
type: region
biome: void
element: void
acts: [act-5]
hostFactions: [heart-demon-race]
ambientMood: "Cosmic temple where Cao Tổ sealed Tâm Ma Vương — sacred, dreadful, final"
---

# Hồn Nguyên Điện (`hon-nguyen-dien`)

## Định danh

Điện thờ vũ trụ — vùng Hỗn Nguyên (void tiền-Ngũ Hành), nơi Act 5 diễn ra và campaign đạt đỉnh điểm. Kiến trúc đá cổ lơ lửng trong hư không, văn khắc phong ấn cũ nhấp nháy le lói, bóng tối nặng nề bị xé vá bởi ánh vàng tàn dư từ phong ấn của Cao Tổ. Không gian chuyển hoá từ kính cẩn sang kinh hoàng khi phong ấn vỡ — cùng một board, cùng một địa điểm, hai cảm xúc đối lập.

Đây là nơi duy nhất trong game mà player không phải là khách tham quan — player là kẻ đến phá vỡ thứ đã được bảo vệ 800 năm. Dù không cố ý.

## Vai trò Atlas

Vùng chiến dịch Act 5 — không phải vùng atlas độc lập. Hồn Nguyên Điện không có T-tier tham chiếu trong Sơn Hà Đồ vì nó là điểm kết thúc campaign, không phải điểm farming.

Tuy nhiên, sau khi clear Act 5 và mở Atlas, Hồn Nguyên Điện trở thành **điểm tham chiếu lore cho Diêm Phủ region** — nơi tâm ma từ trận Đan Kiếp lẫn từ phong ấn vỡ cùng tụ về. Đan Pháp Tâm Ma (decision #25) và Đan Pháp Hỗn Nguyên có cùng nguồn gốc năng lượng từ đây.

Boss chiến dịch: `../../bosses/primordial-corruption-king/` — Hỗn Nguyên Tâm Ma Vương (T13, multi-type, 4 phase, campaign final boss). Thắng để unlock Sơn Hà Đồ Lệnh và mở Atlas.

## Lore

800 năm trước, Cao Tổ và 7 đan sư thực hiện Cửu Chuyển Kim Đan tại Vô Cực Đỉnh — đan vỡ, năng lượng phóng thích tạo ra Hỗn Nguyên Tâm Ma Vương. Cao Tổ không tiêu diệt được thực thể đó; thay vào đó, ngài và toàn bộ linh khí còn lại dồn vào việc phong ấn nó tại Hồn Nguyên Điện. Đây không phải chiến thắng — đây là sự hy sinh tạm thời.

Phong ấn được duy trì bởi một chuỗi đệ tử liên tiếp, mỗi thế hệ tiếp nhận một phần "gánh nặng" của Cao Tổ mà không biết điều đó. Sư Phụ của player là mắt xích cuối cùng, người đã vô tình làm yếu phong ấn khi truyền Lò tổ truyền — vì trong Lò đó có một phần linh khí phong ấn.

Trận Đan Kiếp — sự kiện vỡ cân bằng Ngũ Hành vĩ đại mà mọi vùng đất trong Cửu Châu Đan Vực mang dấu tích — bắt đầu từ chính thất bại đó. Hồn Nguyên Điện là nguồn gốc, không phải hậu quả.

## Encounters & Đặc trưng

**Cấu trúc sự kiện**: Hồn Nguyên Điện không có mob thông thường. Đây là địa điểm sự kiện thuần tuý — ba giai đoạn tường thuật trước boss:
1. Sư Phụ thú nhận sự thật (lore dump qua dialogue)
2. Phong ấn vỡ — cutscene ngắn, board chuyển từ kính cẩn sang tối tăm
3. Hỗn Nguyên Tâm Ma Vương tỉnh giấc — boss fight bắt đầu

**Boss đặc trưng**: Hỗn Nguyên Tâm Ma Vương (T13, 4 phase). Mechanic nổi bật: board trống khi bắt đầu (Phase 1 — Hư Ảo Ngũ Hành), gương phản chiếu (Phase 2), boss dùng linh khí như player (Phase 3 — Cửu Chuyển Thất Bại), lựa chọn "thừa nhận hay tiêu diệt" ở 5% HP cuối (Phase 4). Dialogue floating text trên board trong suốt trận.

**Reward đặc biệt**: Hoà giải Tâm Ma Vương tại 5% HP → prefix "Hỗn Nguyên Tịch Diệt" (linh đan +50% quality stack, affix độc quyền). Lần đầu clear → Sơn Hà Đồ Lệnh + mở Atlas.

## Kết nối

- **Khu vực kề**: Vô Cực Đỉnh (trước, Act 4 climax) → Atlas / Sơn Hà Đồ (sau khi clear Act 5)
- **Lore link**: nguồn gốc của trận Đan Kiếp, điểm phong ấn 800 năm của Cao Tổ
- **Acts**: `../../acts/act-5/`
- **Boss**: `../../bosses/primordial-corruption-king/` (T13, void, campaign final)
- **NPCs**: `../../npcs/master/` (Sư Phụ, hy sinh); `../../npcs/primordial-corruption-king/` (Tâm Ma Vương, NPC aspect)
- **Factions**: `../../factions/heart-demon-race/` (Tâm Ma Vương bị phong ấn bên dưới điện)
- **Lore entities**: `../../lore-entities/cao-to-seal/` (phong ấn 800 năm)
