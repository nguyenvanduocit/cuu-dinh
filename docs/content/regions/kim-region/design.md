---
id: kim-region
ten: Kim Khoáng Sơn Động
type: region
biome: mountain
element: metal
acts: [atlas]
hostFactions: []
ambientMood: "Cold mountain cave threaded with metallic ore veins — austere and metallic"
---

# Kim Khoáng Sơn Động (`kim-region`)

## Định danh

Vùng Kim nguyên khí — atlas-only. Đỉnh núi cao lạnh lẽo, hang động quặng mỏ, đền thờ trời (Cửu Tiêu) trên độ cao gần mây. Lạnh, khắc khổ, kim loại. Mạch quặng vàng bạc lấp lánh trong đá xám, đá góc cạnh sắc bén, ánh sáng lạnh nhạt chiếu xiên từ khe núi. Bảng màu xám lạnh với ánh vàng đế vương (#D4AF37).

Không có cư dân thường trú — đây là vùng hoang vu atlas, không phải làng mạc. Chỉ có linh vật Kim và dấu vết của Bạch Hổ Linh Tổ.

## Vai trò Atlas

**Vùng atlas T10–T15 phía Tây Sơn Hà Đồ** — Kim-themed. Đây là nhánh atlas Tây, phân kỳ từ trung tâm Vô Cực Đỉnh.

**Pháp trận chủ đạo tại đây**:
- Đan Pháp Tiêu Chuẩn T10–T13 (Kim bias anchor)
- Đan Pháp Cửu Tiêu T6–T16 (board dọc 600×1800, gravity +60%, 9 anchor chín tầng trời) — lấy biome Cửu Tiêu trong kim-region làm nền
- Đan Pháp Thiên Kiếp T14–T16 (Thiên Kiếp boss rơi từ Cửu Tiêu thượng xuống)

**Boss hosted**: Bạch Hổ Linh Tổ (T14–T15, Atlas corner Tây) — Tứ Tượng Linh Tổ Kim. Đây là boss cần Đan Pháp Kim-tier cao + Bạch Hổ Nguyên Liệu (vuốt hổ, kim lưỡi tinh) để vào. Win-rate target ~45%, level 90+.

**Mở Atlas corner Tây**: cần hoàn thành T13 trung tâm trước. Bạch Hổ unlock nhánh T15–T16 Tây thêm.

## Lore

Sau trận Đan Kiếp, dòng linh khí Kim — sắc bén, cứng rắn, không chịu tản ra — tụ về những điểm địa mạch cứng nhất: đỉnh núi đá hoa cương cao nhất, lòng hang động quặng mỏ sâu nhất. Kim Khoáng Sơn Động là điểm tụ đó: linh khí Kim vỡ vụn sau trận Đan Kiếp không biến mất mà chìm vào đá và kim loại, chờ đợi.

Hàng trăm năm sau, những đan sư khai thác quặng nhận ra rằng mạch quặng tại đây không cạn theo quy luật thông thường — chúng tự tái tạo chậm rãi, như thể đất đá đang "nung" lại kim loại từ linh khí. Đó là sự thật: linh khí Kim đang chuyển hoá địa tầng, từ từ biến đá thành nguyên liệu luyện đan cấp cao.

Bạch Hổ Linh Tổ — thực thể thượng cổ của Kim thuần khiết — xuất hiện tại đây không phải ngẫu nhiên. Nó là hiện thân vật lý của lượng linh khí Kim tích tụ qua 800 năm, cô đặc đến mức có ý thức riêng. Không giết player — kiểm tra xem player có xứng đáng tiếp nhận Kim tinh hoa hay không.

## Encounters & Đặc trưng

**Mob đặc trưng**: Kiếm Linh Cổ (kiếm kim loại bay tự chủ, cắm vào anchor làm deflect linh lực 45°); Hổ Kim Vệ (hổ nhỏ Kim element, buff kiếm linh khí xung quanh +15% charge); Quặng Linh Thức (tinh linh ẩn trong mạch quặng, tạo chướng ngại vật Kim tạm thời).

**Hazard biome**: Kiếm Mưa Tự Phát — mechanic preview của Bạch Hổ. Mỗi 30 giây một kiếm ngẫu nhiên rơi xuống từ trần hang, cắm board 12 giây như chướng ngại vật Kim, deflect linh lực 45°. Không gây stability damage trực tiếp nhưng phá chain path.

**Drop bias**: Bạch Hổ Kim Lưỡi (nguyên liệu craft vũ khí Kim endgame), Kim Atlas Fragment (unlock T15–T16 vùng Tây). Tỷ lệ cao hơn: affix chain-speed Kim, cổ vật velocity Hoả (counter Kim).

**Map mod đặc thù**: "Tây Phương Kim Thần" (atlas node unlock sau khi kill Bạch Hổ) — board có ≥ 3 kiếm cắm → Kim damage +15% toàn Sơn Hà Đồ.

## Kết nối

- **Atlas path**: nhánh Tây từ trung tâm Vô Cực Đỉnh, T10 → T13 → T14–T15 (Bạch Hổ corner) → T16 Cửu Tiêu thượng
- **Boss**: `../../bosses/white-tiger-ancestor/` (T14–T15, Kim, Tứ Tượng corner Tây)
- **Maps tham chiếu biome này**: `../../maps/nine-heavens/` (Cửu Tiêu — board dọc, lấy đền trời Kim-region làm nền)
