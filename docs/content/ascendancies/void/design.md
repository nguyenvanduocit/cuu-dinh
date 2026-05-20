---
id: void
ten: Vô Cực
unlockLevel: 30
primaryElement: void
tagline: "Hỗn loạn là quy luật — nhân đôi mọi ngẫu nhiên, sống trong bất định."
---

# Vô Cực (`void`)

Vô Cực đạo sĩ không kiểm soát — họ khuếch đại. Mọi yếu tố ngẫu nhiên trong game đều được nhân đôi biên độ: loot tốt hơn gấp đôi, loot xấu hơn gấp đôi, crit mạnh hơn gấp đôi, fail đau hơn gấp đôi. Gameplay là đánh cược vào sự hỗn loạn, thiết kế board để tồn tại trong bất định và thu hoạch những đỉnh cao cực đoan.

**Innate passive — Hỗn Nguyên Khuếch Đại**: Mọi yếu tố ngẫu nhiên trong pháp trận đều nhân đôi biên độ (×2 range): drop rarity, intensity variation, crit multiplier, Phong Ấn outcomes, Tâm Ma modifier effects — cả tốt lẫn xấu đều cực đoan hơn.

## Nodes

| id | ten | type | effect | prerequisites |
| --- | --- | --- | --- | --- |
| void-notable-extreme-loot | Cực Biên Lợi | notable | Drop rarity floor nâng lên: Common drop không còn xuất hiện — pool bắt đầu từ Uncommon. Drop rarity ceiling tăng: VeryRare có thể lên ExtremelyRare với xác suất 15%. (Cộng với innate ×2 biên độ.) | |
| void-notable-crit-spike | Bạo Loạn Hư Vô | notable | Khi crit xảy ra: crit multiplier thêm +50% (cộng với base 1.5x và các nguồn khác — combat-math §4). Khi không crit: intensity hit đó -10% (downside nhỏ để tạo variance). | void-notable-extreme-loot |
| void-notable-seal-chaos | Phong Ấn Dị Biến | notable | Phong Ấn Thăng (thành công): xác suất bonus thêm 1 affix ngẫu nhiên 25%. Phong Ấn Sập (thất bại): xác suất mất thêm 1 affix ngẫu nhiên 25%. Nhân đôi stakes mỗi lần đánh Phong Ấn. | void-notable-extreme-loot |
| void-notable-disaster-survive | Thoát Tử Hồi Sinh | notable | 1 lần mỗi pháp trận: khi stability về 0 (linh đan bể), 20% cơ hội tự động hồi stability lên 25 và tiếp tục (không tính thua). Sau khi kích hoạt: intensity mọi hit tăng +30% cho 10 giây tiếp theo ("thoát chết bùng phát"). | void-notable-crit-spike |
| void-notable-intensity-swing | Hỗn Nguyên Trào Dâng | notable | Mỗi hit có 10% cơ hội "Hỗn Nguyên Cộng Hưởng": nhân intensity hit đó ×2.5. Cơ hội này độc lập với crit. (Cộng với innate ×2 crit multiplier range — không stack multiplicative, tính additive vào player_mult.) | void-notable-crit-spike |
| void-notable-tam-ma-flip | Nghịch Hành Tâm Ma | notable | Tâm Ma modifier "-50% intensity" (map modifier xấu nhất) bị đảo ngược thành "+25% intensity" cho Vô Cực đạo sĩ. Modifier "+100% intensity" (modifier tốt nhất) bị nhân thêm ×1.5, lên +150%. (Cực trị đều được khuếch đại.) | void-notable-seal-chaos |
| void-notable-chaos-floor | Sàn Hỗn Mang | notable | Intensity floor nâng từ 0.1x lên 0.2x (combat-math §3: "bad luck protection"). Khi intensity hit nào rơi vào floor, tự động kích 1 crit check thêm (ngoài crit check bình thường của hit đó). | void-notable-disaster-survive |
| void-keystone-absolute-chaos | Hỗn Nguyên Toàn Diện | keystone | **Innate ×2 biên độ nâng lên ×4** (mọi random range đều ×4 thay vì ×2 — drop rarity, intensity variation, crit multi, Phong Ấn outcomes, Tâm Ma effects). **Đánh đổi**: Mất hoàn toàn khả năng reroll Phong Ấn và mọi mechanic xem trước/chọn lọc — Tử Vi Thiên Nhãn, reroll linh khí affix, bất kỳ "xem drop kế" — nếu không có Tử Vi thì đây là sacrifice không phí; nếu có thì build mâu thuẫn cốt lõi. | void-notable-intensity-swing, void-notable-tam-ma-flip |

## Lối chơi

Vô Cực không kiểm soát — nó khuếch đại. Mọi quyết định build phải được thiết kế để "thắng trên đỉnh cao, sống sót qua vực thẳm": `Thoát Tử Hồi Sinh` là lưới an toàn, `Hỗn Nguyên Trào Dâng` là cú bùng phát ngẫu nhiên, `Cực Biên Lợi` là bánh thưởng khi sống sót. Chơi Vô Cực là chấp nhận rằng mỗi pháp trận là một canh bạc — nhưng là canh bạc có xác suất thắng được tính toán.

## Đường đi đề xuất

1. `void-notable-extreme-loot` — cải thiện loot quality ngay, nền tảng kinh tế run.
2. `void-notable-crit-spike` — thêm variance vào crit, tạo swing lớn hơn khi crit trúng.
3. `void-notable-disaster-survive` — lưới an toàn, cho phép chơi aggressive hơn mà không sợ instant-lose.
4. `void-notable-intensity-swing` — bật Hỗn Nguyên Cộng Hưởng 10%, cộng với disaster survive = vừa thoát chết vừa bùng mạnh.
5. `void-notable-seal-chaos` — dùng khi build đã ổn định để push Phong Ấn với stakes cao hơn.
6. `void-keystone-absolute-chaos` — endgame only; chỉ khi player chấp nhận mọi thứ là ×4 chaos.

## Synergy

- **Đan Pháp Thiên Kiếp (T14-T16)**: Map variant cực đoan nhất khớp hoàn hảo với Vô Cực — Thiên Kiếp wave -50 stability (combat-math §5) có thể bị chặn bởi `Thoát Tử Hồi Sinh` 20%, và nếu sống qua thì `Hỗn Nguyên Trào Dâng` 10% ×2.5 intensity bùng phát.
- **`nine-abyss-black-elixir`** (chaos-risk unique): Loại uniques có downside lớn — khớp với innate Vô Cực vì downside bị khuếch đại ×2/×4, nhưng upside cũng vậy. High-floor risk/reward combo.
- **`void-notable-tam-ma-flip` + Đan Pháp Tâm Ma**: Modifier -50% bị đảo thành +25% — biến modifier xấu nhất thành buff. Tổng modifier của Vô Cực trên map Tâm Ma tốt nhất = +150% (thay vì +100% của build thường).
- **Anti-synergy `void-keystone-absolute-chaos` + Tử Vi**: Keystone mất mọi mechanic xem trước/reroll — đây là conflict cốt lõi. Không dùng hai ascendancy này cùng nhau (game không cho phép, nhưng item Tử Vi như `ancient-dragon-soul-jade` cũng mất hiệu quả khi void keystone active).
- **Anti-synergy với `tai-chi-keystone-perfect-balance`**: Thái Cực triệt tiêu variance; Vô Cực khuếch đại variance — hai triết lý đối lập tuyệt đối.
