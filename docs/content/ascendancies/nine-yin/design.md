---
id: nine-yin
ten: Cửu Âm
unlockLevel: 30
primaryElement: water
tagline: "Linh lực chứa nguyền — mọi va chạm đều làm yếu kẻ cản đường."
---

# Cửu Âm (`nine-yin`)

Cửu Âm đạo sĩ không chỉ dẫn linh lực — họ đổ nguyền vào mỗi làn khí. Linh lực aura toả ra từ linh khí làm suy yếu phòng thủ của mọi thứ xung quanh, khiến linh đan nhận được nhiều quality hơn từ mỗi hit. Gameplay xoay quanh việc xây dựng aura overlap dày đặc và chuỗi debuff chồng chất.

**Innate passive — Nguyền Linh Lực**: Linh lực aura toả ra trong bán kính 150px quanh mọi linh khí — giảm phòng thủ linh khí trong vùng đó 30%, khiến intensity damage tới linh đan tăng tương ứng.

## Nodes

| id | ten | type | effect | prerequisites |
| --- | --- | --- | --- | --- |
| nine-yin-notable-wider-aura | Bành Trướng Linh Trường | notable | Bán kính aura Nguyền tăng từ 150px lên 220px. Aura overlap (≥2 aura chồng) cộng thêm -15% phòng thủ linh khí trong vùng giao. | |
| nine-yin-notable-deep-curse | Nguyền Thâm Cốt Tủy | notable | Mỗi linh lực va chạm linh đan trong vùng aura: debuff giảm phòng thủ kéo dài thêm 2 giây sau khi rời vùng. Stack tối đa 3 lớp (+30% intensity/lớp). | nine-yin-notable-wider-aura |
| nine-yin-notable-curse-slow | Trệ Khí Nguyền Ấn | notable | Linh lực bay qua vùng aura chậm lại 20% vận tốc trong vùng, tăng thời gian tiếp xúc; va chạm trong vùng aura +12% intensity. | nine-yin-notable-wider-aura |
| nine-yin-notable-water-amplify | Hàn Âm Triều Dâng | notable | Linh lực Thuỷ sinh ra trong vùng aura nhận +20% intensity và +5% crit chance. (Khớp combat-math §3: Ascendancy bonus per element.) | nine-yin-notable-deep-curse |
| nine-yin-notable-debuff-burst | Tích Nguyền Bùng Phát | notable | Khi stack debuff đạt 3 lớp trên linh đan: tự động kích hoạt một lần burst giảm stability linh đan thêm -15. Sau burst, stack về 0. | nine-yin-notable-deep-curse |
| nine-yin-notable-aura-leech | Hút Linh Nguyền Khí | notable | Linh đan hấp thụ 8% intensity đến từ tương sinh hit trong vùng aura để hồi stability (+intensity×0.08 thay vì ×0.05 gốc — combat-math §5). | nine-yin-notable-curse-slow |
| nine-yin-keystone-twin-curse | Song Nguyền Huyết Thệ | keystone | **Aura toả đôi**: cường độ debuff ×2 (giảm phòng thủ 60% thay vì 30%). **Đánh đổi**: linh khí trong vùng aura của chính mình cũng nhận -20% intensity đầu ra — board dày aura tự làm yếu linh lực mình bắn ra. | nine-yin-notable-deep-curse, nine-yin-notable-debuff-burst |

## Lối chơi

Cửu Âm là ascendancy chậm và có chiều sâu không gian: chiến thắng phụ thuộc vào việc phủ aura chồng lên linh đan và tích stack debuff đủ nhanh trước khi stability cạn. Player đặt linh khí Thuỷ dày đặc quanh linh đan để overlap aura, dùng Trệ Khí Nguyền Ấn (slow) để linh lực tiếp xúc lâu hơn trong vùng debuff, rồi kích Tích Nguyền Bùng Phát khi đủ 3 lớp. Aura rộng = weapon mạnh nhưng cũng là rủi ro khi dùng Song Nguyền Huyết Thệ.

## Đường đi đề xuất

1. `nine-yin-notable-wider-aura` — mở rộng nền tảng aura ngay khi unlock.
2. `nine-yin-notable-deep-curse` — bật cơ chế stack, đây là trục chính của build.
3. `nine-yin-notable-debuff-burst` — đổi stack thành stability drain, tạo kill condition rõ ràng.
4. `nine-yin-notable-water-amplify` — boost damage Thuỷ trong vùng, tối ưu khi board thiên Thuỷ.
5. `nine-yin-keystone-twin-curse` — chỉ dùng khi board được thiết kế để linh khí không bị kẹt trong aura của chính mình (đặt linh khí ngoài rìa, linh đan ở trung tâm aura).

## Synergy

- **`great-bell` (Chuông Đại Hồng)**: Mỗi tiếng chuông 7 giây kích toàn bộ linh khí — linh lực sinh ra bay vào vùng aura rộng, tích debuff stack nhanh hơn mà không cần player bắn liên tục. Combo mạnh nhất để đạt 3-stack ổn định.
- **Đan Pháp Tâm Ma**: Modifier Tâm Ma +100% intensity (combat-math §5) nhân hưởng lợi với aura debuff -60% phòng thủ khi dùng `nine-yin-keystone-twin-curse` — intensity hiệu quả cực cao trong window boss.
- **Passive tree `water-keystone-tide`**: Linh lực Thuỷ thêm wave sau va chạm — mỗi wave cũng bay qua vùng aura, tích thêm debuff. Cộng hưởng với `nine-yin-notable-water-amplify`.
- **Anti-synergy `nine-yin-keystone-twin-curse` + board linh khí dày trung tâm**: Nếu đặt linh khí Thuỷ trong vùng aura overlap lớn, chúng tự bị -20% intensity đầu ra — phải thiết kế board hình vành khăn (linh khí ở ngoài rìa, linh đan ở giữa) thay vì cluster trung tâm.
