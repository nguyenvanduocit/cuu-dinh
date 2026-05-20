---
id: tai-chi
ten: Thái Cực
unlockLevel: 30
primaryElement: earth
tagline: "Cân bằng vạn pháp — không nguyên tố nào vượt trội, mọi nguyên tố đều phụng sự."
---

# Thái Cực (`tai-chi`)

Thái Cực đạo sĩ không chọn một nguyên tố — họ làm chủ sự cân bằng giữa tất cả. Mọi linh lực đều được tối ưu hoá dù là Kim, Mộc, Thuỷ, Hoả hay Thổ. Gameplay xoay quanh việc duy trì đa nguyên tố trên board đồng thời, tận dụng mọi tương sinh mà không bị tổn thất vì tương khắc.

**Innate passive — Vạn Pháp Dung Hoà**: +5% toàn bộ chỉ số (intensity, stability, crit, chain, loot) — không phụ thuộc nguyên tố. Linh khí đa nguyên tố trong bán kính 200px cộng hưởng thêm +2% intensity mỗi nguyên tố khác nhau hiện diện (tối đa +10%).

## Nodes

| id | ten | type | effect | prerequisites |
| --- | --- | --- | --- | --- |
| tai-chi-notable-harmony-bonus | Ngũ Hành Cộng Hưởng | notable | Khi ≥3 nguyên tố khác nhau hiện diện trong bán kính 200px: +8% intensity cho tất cả linh lực trong vùng (cộng thêm vào +10% innate của Vạn Pháp Dung Hoà, tổng +18%). | |
| tai-chi-notable-anti-khac | Trung Hoà Phản Lực | notable | Tương khắc hit trên linh đan giảm penalty 50% (stability drain từ -40% intensity xuống -20% intensity — combat-math §2). Yêu cầu ≥2 nguyên tố khác nhau trên board. | tai-chi-notable-harmony-bonus |
| tai-chi-notable-cycle-amplify | Ngũ Hành Tuần Hoàn | notable | Khi tất cả 5 nguyên tố (Kim-Mộc-Thuỷ-Hoả-Thổ) đã va chạm linh đan trong cùng 1 ván: kích hoạt "Đại Tuần Hoàn" — +15% intensity cho mọi hit còn lại trong ván đó. Reset mỗi ván. | tai-chi-notable-harmony-bonus |
| tai-chi-notable-stability-cap | Căn Nguyên Vạn Tượng | notable | Stability tối đa tăng thêm +20 (từ base 100 lên 120 trước các affix khác — combat-math §5). Mỗi lần tương sinh hit khi stability ≥ cap: +3% quality bonus thay vì stability heal dư. | tai-chi-notable-anti-khac |
| tai-chi-notable-element-convert | Hoá Giải Thuần Nguyên | notable | 1 lần mỗi ván, player có thể chuyển đổi nguyên tố 1 linh khí đang trên board sang nguyên tố bất kỳ (chọn từ menu) — giữ nguyên vị trí và affix. Cooldown: mỗi ván 1 lần. | tai-chi-notable-cycle-amplify |
| tai-chi-notable-all-sinh | Vạn Vật Tương Sinh | notable | Tương khắc hit giữa linh lực và linh khí (không phải linh đan) không còn gây hại — linh lực tiếp tục với intensity giữ nguyên thay vì bị phản xạ tổn thất. (Chỉ áp dụng linh lực–linh khí, không áp dụng linh lực–linh đan.) | tai-chi-notable-anti-khac |
| tai-chi-keystone-perfect-balance | Cực Trung Vô Cực | keystone | **Tương khắc hit lên linh đan không còn gây stability damage** (biến tương khắc = trung tính). **Đánh đổi**: Tương sinh hit lên linh đan bị cap +15% quality (không nhận được quality bonus cao hơn 15% per hit dù intensity cao — combat-math §2 quality gain bị hard-cap). Mọi đỉnh cao đều bị triệt tiêu, mọi vực thẳm cũng vậy. | tai-chi-notable-stability-cap, tai-chi-notable-cycle-amplify |

## Lối chơi

Thái Cực là ascendancy của sự trường tồn: không có hit nào thực sự nguy hiểm, nhưng cũng không có hit nào cực kỳ mạnh (khi dùng keystone). Chiến lược là duy trì đa nguyên tố đồng thời — board lý tưởng có ≥3-5 nguyên tố hiện diện để `Ngũ Hành Cộng Hưởng` + `Ngũ Hành Tuần Hoàn` luôn active. Không kén chọn nguyên tố đơn, không cần chase crit — chỉ cần sự cân bằng liên tục.

## Đường đi đề xuất

1. `tai-chi-notable-harmony-bonus` — mở sức mạnh đa nguyên tố ngay, nền tảng mọi nhánh.
2. `tai-chi-notable-anti-khac` — giảm đau từ tương khắc, cho phép mix nguyên tố tự do hơn.
3. `tai-chi-notable-stability-cap` — tăng sức chịu đựng, bù cap stability cho lối chơi dài hạn.
4. `tai-chi-notable-cycle-amplify` — bonus Đại Tuần Hoàn, target đạt được khi board đủ đa dạng.
5. `tai-chi-notable-element-convert` — chốt chiến thuật cuối: điều chỉnh board linh hoạt để đảm bảo đủ 5 nguyên tố hoặc tránh khắc xấu.
6. `tai-chi-keystone-perfect-balance` — chỉ dùng khi build muốn tuyệt đối an toàn và chấp nhận trade-off không burst crit.

## Synergy

- **`pure-heart-bead` (Tịnh Tâm Linh Châu)**: Thái Cực +5% tất cả (innate) bù một phần penalty ×0.3 sau khi dispel Tâm Ma — khớp trực tiếp với ghi chú trong `pure-heart-bead/design.md`. Combo tốt cho map Tâm Ma T6-T13.
- **`tai-chi-keystone-perfect-balance` + `amitabha-statue`**: Không còn stability damage từ tương khắc + flat quality drip từ `amitabha-statue` = lối chơi "không bao giờ bể, chậm nhưng chắc". Phù hợp T1-T10 grind ổn định cao.
- **Đan Pháp Tiêu Chuẩn**: Board ổn định, nguyên tố dễ control, tối ưu để duy trì ≥3 nguyên tố đồng thời. Thái Cực là ascendancy tốt nhất cho Đan Pháp này.
- **Anti-synergy `tai-chi-keystone-perfect-balance` + crit build (Sắc Bén `metal-keystone-sharpness`)**: Quality cap +15%/hit triệt tiêu lý do dùng Sắc Bén (×3 crit multi = 1 hit lớn). Hai keystone mâu thuẫn cơ bản — không bao giờ kết hợp.
- **Anti-synergy với `nine-abyss-black-elixir`** (chaos-risk): Thái Cực chơi an toàn dài hạn; các uniques chaos-risk cần stability thấp để kích mechanic — đi ngược innate Vạn Pháp Dung Hoà.
