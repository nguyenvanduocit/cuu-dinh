---
id: hoa-son-lo-coc
ten: Hoả Sơn Lò Cốc
type: region
biome: fire
element: fire
acts: [act-3]
hostFactions: [gambling-guild]
ambientMood: "Volcanic cultivation cavern, glowing lava veins, intense and dangerous"
---

# Hoả Sơn Lò Cốc (`hoa-son-lo-coc`)

## Định danh

Chuỗi núi lửa — vùng Hoả nguyên khí, nơi Act 3 diễn ra. Đá đỏ phát sáng và mạch dung nham chảy chậm, khói bốc và than hồng lơ lửng, nền thạch anh obsidian nứt toác, lò đúc cổ bán chìm trong tro vẫn toả nhiệt. Ánh lửa từ dưới chiếu lên — kịch tính và nguy hiểm. Bảng màu cinnabar đỏ (#C82127) và vàng đế vương (#D4AF37) trên nền mực đen.

Thợ rèn vẫn còn ở đây — những gia đình không chịu rời núi lửa vì tổ tiên họ đã rèn Lò ở đây từ ngàn năm trước. Sư Phụ dẫn player đến khi Lò tổ truyền bị vỡ nặng sau trận Ngũ Hành Sơn.

## Vai trò Atlas

Vùng chiến dịch Act 3, không phải vùng atlas độc lập. Sau khi mở Sơn Hà Đồ, Hoả Sơn Lò Cốc là **tham chiếu Hoả T7–T10** — pháp trận Hoả-themed cấp trung lấy địa hình này. Đan Pháp Cổ Đan Lò (decision #25) lấy cảm hứng từ Lò cổ bán vỡ tại đây: board concentric ba vòng Vô Cực → Hoả → Thổ mô phỏng cấu trúc lò.

Boss chiến dịch: `../../bosses/heart-demon-hoa-son/` — Tâm Ma Hoả Sơn (T8, Anomaly, Hoả, sinh ra từ tuyệt vọng của dân làng rèn khi Lò bị tâm ma xâm nhập).

Không host Tứ Tượng Linh Tổ — Hoả endgame corner (Chu Tước Linh Tổ T14–T15) nằm ở vùng atlas riêng biệt "Phương Nam Hoả Hải".

## Lore

Khi trận Đan Kiếp vỡ cân bằng Ngũ Hành, dòng linh khí Hoả không tản đi xa — nó chìm xuống địa tầng và tụ vào những điểm dung nham. Hoả Sơn Lò Cốc là một trong những điểm đó: núi lửa tại đây không phun theo chu kỳ địa chất thông thường mà phun theo nhịp linh khí, như một lò rèn khổng lồ tự kích hoạt khi cảm được nguyên khí Hoả tích tụ đủ ngưỡng.

Lò Thần — thực thể ý thức gắn liền với chiếc lò cổ nhất còn sót lại — nhận ra điều này từ lâu. Ngài chờ người thừa kế thực sự của Lò Cửu Đỉnh, người mang linh khí đủ thuần để nhận sức nóng mà không vỡ. Khi player đến, lửa trong lò cũ bùng sáng lần đầu sau 800 năm.

## Encounters & Đặc trưng

**Mob đặc trưng**: Hoả Xà Linh (rắn dung nham, bơi trong ô dung nham trên board, tạo vùng Thiêu Đốt); Nham Thạch Quỷ (ném tảng lửa từ rìa vào giữa board, chặn chain path tạm thời).

**Hazard biome**: Dung nham tràn — mỗi 15 giây mở rộng thêm 1 ô từ rìa board vào giữa; linh khí trong vùng dung nham nhận debuff Thiêu Đốt (-2 stability/3 giây tick). Chain Thuỷ vào ô dung nham đóng băng 5 giây, giải phóng tạm thời.

**Drop bias**: Hoả Tinh Thạch cấp cao, nguyên liệu Lò (Đế Lò, Thân Lò) — đặc thù vì Act 3 là arc sửa Lò. Affix prefix "Liệt Hoả" (intensity Hoả +20%) drop với tỷ lệ cao hơn vùng khác.

**NPC đặc trưng**: Đan Sư Hắc Bạch (crafting bench đầy đủ), Lão Hồ Ly (Đạo Quán mở toàn tính năng), Lò Thần (unlock Lò 8 slot), Tổ Sư Bất Tử (rare item vendor).

## Kết nối

- **Khu vực kề**: Ngũ Hành Sơn (trên, Act 2) → Bích Hải Đảo (sau, Act 4 — chuyển từ lửa sang nước)
- **Atlas path**: pháp trận Cổ Đan Lò T5–T14 lấy biome Hoả Sơn làm mẫu
- **Acts**: `../../acts/act-3/`
- **Boss**: `../../bosses/heart-demon-hoa-son/` (T8, Hoả, Anomaly)
- **NPCs**: `../../npcs/furnace-spirit/`, `../../npcs/immortal-ancestor/`, `../../npcs/black-white-alchemist/`
- **Factions**: `../../factions/gambling-guild/` (Lão Hồ Ly, Đạo Quán đầy đủ)
