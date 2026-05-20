---
id: spirit-mountain
ten: Linh Sơn
unlockLevel: 30
primaryElement: wood
tagline: "Va chạm sinh sôi — mỗi linh lực kéo theo bóng ma của chính nó."
---

# Linh Sơn (`spirit-mountain`)

Linh Sơn đạo sĩ triệu hồi linh hồn từ mỗi va chạm — 10% cơ hội mỗi lần linh lực chạm linh khí sẽ tạo ra 1 linh lực echo bóng ma cùng nguyên tố, tiếp tục hành trình độc lập. Gameplay là bầy đàn linh lực ngày càng đông, xây dựng board để chuỗi echo tạo ra chuỗi echo tiếp theo.

**Innate passive — Hồi Vang Linh Sơn**: Mỗi lần linh lực va chạm bất kỳ linh khí trên board: 10% cơ hội spawn 1 linh lực echo cùng nguyên tố, 60% intensity gốc, tiếp tục từ điểm va chạm.

## Nodes

| id | ten | type | effect | prerequisites |
| --- | --- | --- | --- | --- |
| spirit-mountain-notable-echo-rate | Linh Hồi Mật Độ | notable | Xác suất spawn linh lực echo tăng từ 10% lên 18% mỗi va chạm linh khí. | |
| spirit-mountain-notable-echo-inherit | Thừa Kế Linh Ký | notable | Linh lực echo kế thừa toàn bộ charge_count của linh lực gốc tại thời điểm va chạm (thay vì bắt đầu từ charge=0 — combat-math §2). | spirit-mountain-notable-echo-rate |
| spirit-mountain-notable-echo-chain | Vòng Hồi Vô Tận | notable | Echo có thể spawn echo tiếp (echo-of-echo): mỗi echo có 6% cơ hội tạo ra 1 echo thế hệ thứ 2 ở 50% intensity gốc. Tổng chuỗi tối đa 3 thế hệ. | spirit-mountain-notable-echo-inherit |
| spirit-mountain-notable-wood-amplify | Mộc Khí Phồn Thịnh | notable | Linh lực echo nguyên tố Mộc nhận +15% intensity và tương sinh Mộc→Hoả của echo áp dụng +3% stability heal thay vì +0.05×intensity gốc (combat-math §2). | spirit-mountain-notable-echo-rate |
| spirit-mountain-notable-echo-crit | Ảo Ảnh Sắc Nét | notable | Linh lực echo có crit chance riêng +8% (cộng với crit chance base của player). Echo crit không kích hoạt Tích Nguyền Bùng Phát của Cửu Âm — isolated mechanic. | spirit-mountain-notable-echo-inherit |
| spirit-mountain-notable-mass-echo | Bầy Linh Đàn | notable | Khi ≥4 linh lực (gốc + echo) đồng thời trên board: mọi echo nhận thêm +10% intensity. Passive kiểm tra mỗi frame — threshold bật/tắt linh hoạt. | spirit-mountain-notable-echo-chain |
| spirit-mountain-keystone-endless-swarm | Vô Số Linh Ảnh | keystone | **Mọi va chạm linh khí đều spawn echo (100%)** — không còn xác suất. **Đánh đổi**: linh lực echo chỉ còn 30% intensity gốc (giảm từ 60%) và linh khí bị kích echo mất 5 durability mỗi lần (áp dụng cả khi không có map mod "Huyết Sát" — combat-math §8). | spirit-mountain-notable-echo-chain, spirit-mountain-notable-mass-echo |

## Lối chơi

Linh Sơn chơi theo kiểu tuyết lở: ít linh lực đầu tiên nhưng board tự nhân bản thành bầy đàn dày đặc. Ưu tiên board có nhiều linh khí để mỗi echo có nhiều target va chạm tiếp — khi `Vòng Hồi Vô Tận` + `Bầy Linh Đàn` đồng thời hoạt động, board trở thành chuỗi phản ứng tự duy trì. Quản lý durability linh khí là micro-skill cốt lõi khi dùng keystone `Vô Số Linh Ảnh`.

## Đường đi đề xuất

1. `spirit-mountain-notable-echo-rate` — tăng xác suất base, nền tảng mọi lối chơi.
2. `spirit-mountain-notable-echo-inherit` — bật charge kế thừa, biến echo từ yếu thành ngang ngửa hit gốc.
3. `spirit-mountain-notable-echo-chain` — echo sinh echo, bắt đầu chuỗi phản ứng.
4. `spirit-mountain-notable-mass-echo` — threshold +10% intensity khi board đủ đông, khoá lợi thế số lượng.
5. `spirit-mountain-keystone-endless-swarm` — chỉ dùng khi có `earth-keystone-heavy-mountain` (Trọng Sơn) hoặc linh khí có affix chống durability drain để bù 5 durability/echo.

## Synergy

- **`sun-wukong-staff` (Trượng Tôn Ngộ Không)**: Linh lực gốc tách ×3 sau va chạm đầu — mỗi con trong 3 có 18% (`spirit-mountain-notable-echo-rate`) spawn echo riêng. Với `spirit-mountain-notable-echo-chain`, một búng tốt có thể sinh 3 viên con × 3 echo-of-echo = 12+ linh lực đồng thời. Combo cao nhất trong game về số lượng hit.
- **`great-bell` (Chuông Đại Hồng)**: Tiếng chuông kích toàn board → mỗi linh lực chuông có 18% echo → board bầy đàn mà không cần player bắn thêm. Bù nhược điểm charge_count=0 của chuông bằng số lượng hit từ echo.
- **`landscape-map`** (nếu tồn tại): Board rộng hơn = nhiều linh khí hơn = nhiều va chạm hơn = nhiều echo hơn. Đây là engine scale tuyến tính với board size.
- **Đan Pháp Hỗn Nguyên**: Tâm ma modifier -50% intensity giảm impact vì Linh Sơn thắng bằng số lượng hit thay vì intensity mỗi hit — ít bị tổn thương hơn các ascendancy khác trước intensity penalty.
- **Anti-synergy `spirit-mountain-keystone-endless-swarm` + map mod "Huyết Sát"** (combat-math §8): 100% echo spawn × 5 durability drain = linh khí vỡ rất nhanh. Bắt buộc kèm `earth-keystone-heavy-mountain` (Trọng Sơn, linh khí Thổ bất tử) hoặc chọn linh khí phi Thổ có affix durability cao.
