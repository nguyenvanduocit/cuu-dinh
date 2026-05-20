---
id: ziwei
ten: Tử Vi
unlockLevel: 30
primaryElement: metal
tagline: "Nhìn thấy vận mệnh trước khi nó rơi — thao túng may rủi theo ý chí."
---

# Tử Vi (`ziwei`)

Tử Vi đạo sĩ không đánh bạc mù quáng — họ nhìn thấy những gì sắp đến và điều chỉnh trước. Khả năng xem trước 3 drop kế tiếp và reroll 1 affix miễn phí mỗi ván biến sự ngẫu nhiên thành công cụ. Gameplay là thông tin bất đối xứng — Tử Vi đạo sĩ luôn một bước trước RNG.

**Innate passive — Thiên Nhãn Tử Vi**: Xem trước 3 đan dược / linh khí drop kế tiếp của pháp trận (hiển thị trên UI). Mỗi ván được reroll miễn phí 1 affix bất kỳ trên linh khí đang đặt trên board.

## Nodes

| id | ten | type | effect | prerequisites |
| --- | --- | --- | --- | --- |
| ziwei-notable-heaven-eye | Thiên Nhãn Tinh Thông | notable | **+10% crit chance** (flat, không điều kiện — khớp combat-math §4: "Ascendancy Tử Vi: +10% free"). Innate Thiên Nhãn đã cho xem 3 drop kế; notable này chuyển thông tin thành crit thực chiến. | |
| ziwei-notable-foresight-depth | Nhìn Xa Trông Rộng | notable | Xem trước 3 drop tăng lên xem trước 5 drop kế tiếp (pháp trận). Ngoài ra: thấy trước loại boss ván cuối từ đầu pháp trận (hiển thị boss type: Dị Tượng / Tâm Ma / Thiên Kiếp — combat-math §0 boss types). | ziwei-notable-heaven-eye |
| ziwei-notable-reroll-plus | Thiên Cơ Đổi Quẻ | notable | Số lần reroll miễn phí affix linh khí trên board tăng từ 1 lên 2 mỗi ván. Reroll lần 2 không thể ra lại affix vừa bị reroll (exclude list). | ziwei-notable-foresight-depth |
| ziwei-notable-crit-chain | Liên Vận Sát Cơ | notable | Sau khi crit xảy ra: crit chance tăng +5% cho hit tiếp theo, stack tối đa 3 lần (+15% crit chance). Stack reset nếu 3 hit liên tiếp không crit. (Cộng với `ziwei-notable-heaven-eye` +10% base, tổng có thể đạt +25% crit.) | ziwei-notable-heaven-eye |
| ziwei-notable-drop-lock | Khoá Vận Mệnh | notable | 1 lần mỗi pháp trận: player có thể "lock" 1 trong 5 drop xem trước — đảm bảo drop đó xuất hiện ở ván kế tiếp (thay vì ngẫu nhiên). Dùng khi cần đúng loại linh khí hoặc đan dược cho ván boss. | ziwei-notable-foresight-depth |
| ziwei-notable-metal-amplify | Kim Khí Linh Thông | notable | Linh lực Kim khi crit: +30% crit multiplier thêm (cộng với crit multiplier base — combat-math §4). Áp dụng cả khi có `metal-keystone-sharpness` (Sắc Bén) — hai nguồn crit multi cộng dồn. | ziwei-notable-crit-chain |
| ziwei-keystone-fate-locked | Thiên Mệnh Chung Định | keystone | **Crit chance đạt 100% cố định** (mọi hit đều crit). **Đánh đổi**: Crit multiplier bị lock cứng tại 1.2x — không thể tăng qua bất kỳ nguồn nào (tree, affix, Sắc Bén, `ziwei-notable-metal-amplify`). Biết trước mọi crit sẽ xảy ra, nhưng không còn đỉnh cao nào để mơ. | ziwei-notable-crit-chain, ziwei-notable-drop-lock |

## Lối chơi

Tử Vi là ascendancy thông tin: player luôn biết trước 5 drop, biết boss type từ đầu, lock được drop quan trọng, và build crit tích luỹ theo chuỗi. Không chơi reactive như Vô Cực hay Thái Cực — mọi quyết định đặt linh khí và chọn đan dược đều dựa trên thông tin bất đối xứng. Keystone `Thiên Mệnh Chung Định` là cho build "ổn định tuyệt đối" — mọi hit crit nhưng crit nhỏ; ngược với `Sắc Bén` (ít crit, crit cực mạnh).

## Đường đi đề xuất

1. `ziwei-notable-heaven-eye` — +10% crit free, bắt buộc lấy đầu tiên (combat-math §4 đã hardcode ascendancy Tử Vi có +10% crit).
2. `ziwei-notable-foresight-depth` — mở rộng thông tin, thấy trước boss type là game-changer cho chuẩn bị ván cuối.
3. `ziwei-notable-crit-chain` — bật chuỗi crit stack, synergy với +10% base.
4. `ziwei-notable-drop-lock` — sau khi có foresight depth 5 drop, lock 1 drop quan trọng biến thông tin thành hành động.
5. `ziwei-notable-metal-amplify` — nếu build thiên Kim, tăng crit multi khi crit.
6. `ziwei-keystone-fate-locked` — chỉ dùng cho build tốc độ ổn định cao (nhiều hit nhỏ crit đều), không dùng cho "Bùng Bạo" (build crit multi cao).

## Synergy

- **`metal-keystone-sharpness` (Sắc Bén, passive tree)**: `ziwei-notable-heaven-eye` +10% crit + `ziwei-notable-crit-chain` +15% stack = tổng crit chance cao hơn nhiều, giúp Sắc Bén (÷2 crit chance) vẫn duy trì được crit rate đủ dùng. Tử Vi là ascendancy duy nhất có thể dùng Sắc Bén mà không bị thiệt quá nặng về crit chance.
- **`sun-wukong-staff` (Trượng Tôn Ngộ Không)**: T3 +50% crit multiplier cho mọi viên con — kết hợp với `ziwei-notable-metal-amplify` +30% crit multi khi crit = tổng crit multi build có thể đạt ~2.3x (base 1.5 + 50% + 30%) trước Sắc Bén. `sun-wukong-staff/design.md` đã note "Tử Vi +10% crit free" — node này là implementation chính xác của promise đó.
- **`ancient-dragon-soul-jade`** (nếu có accuracy mechanic): Tử Vi foresight 5 drop + lock drop = đảm bảo đan dược cần cho boss đúng timing — mạnh nhất khi boss type đã biết từ đầu ván.
- **`ziwei-keystone-fate-locked` + `amitabha-statue`**: 100% crit mọi hit × flat quality drip từ `amitabha-statue` = mỗi hit đều kích quality đều đặn. Lối chơi "cày cấp Phàm→Linh phẩm" tốc độ cao nhất mà không cần RNG crit.
- **Anti-synergy `ziwei-keystone-fate-locked` + Sắc Bén**: Sắc Bén yêu cầu crit chance ÷2 + non-crit hit bị -20% intensity — khi 100% crit, không hit nào non-crit, nhưng crit multi bị lock 1.2x triệt tiêu lợi thế ×3 của Sắc Bén. Hai keystone không thể dùng cùng nhau có ý nghĩa.
- **Anti-synergy với `void-keystone-absolute-chaos`**: Vô Cực xóa mọi mechanic xem trước/reroll — mất toàn bộ Thiên Nhãn + reroll, biến Tử Vi thành ascendancy rỗng trên build Vô Cực.
