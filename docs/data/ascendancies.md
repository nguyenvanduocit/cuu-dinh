# Đạo Phái (Ascendancies)

> Provenance: `packages/data/ascendancies.json` · 5 ascendancies
> Tách riêng khỏi passive-tree.md vì cấu trúc lồng + decision riêng (#10). Enum → `README.md`.

## Thái Cực (tai-chi)

| field | value |
| --- | --- |
| id | tai-chi |
| ten | Thái Cực |
| unlockLevel | 30 |
| primaryElement | earth |
| tagline | Cân bằng vạn pháp — không nguyên tố nào vượt trội, mọi nguyên tố đều phụng sự. |

Thái Cực đạo sĩ không chọn một nguyên tố — họ làm chủ sự cân bằng giữa tất cả. Mọi linh lực đều được tối ưu hoá dù là Kim, Mộc, Thuỷ, Hoả hay Thổ. Gameplay xoay quanh việc duy trì đa nguyên tố trên board đồng thời, tận dụng mọi tương sinh mà không bị tổn thất vì tương khắc.

**Innate passive — Vạn Pháp Dung Hoà**: +5% toàn bộ chỉ số (intensity, stability, crit, chain, loot) — không phụ thuộc nguyên tố. Linh khí đa nguyên tố trong bán kính 200px cộng hưởng thêm +2% intensity mỗi nguyên tố khác nhau hiện diện (tối đa +10%).

### Nodes (6)

| id | ten | type | effect | prerequisites |
| --- | --- | --- | --- | --- |
| tai-chi-balance | Cân Bằng Ngũ Hành | notable | Khi trên board có ít nhất 3 nguyên tố khác nhau: tất cả linh lực nhận +15% intensity. |  |
| tai-chi-harmony | Hoà Khí | notable | Tương khắc damage giảm 20% — linh đan chịu đựng tốt hơn khi bị các nguyên tố xung khắc tấn công. | tai-chi-balance |
| tai-chi-heavenly-stems | Thiên Can Địa Chi | notable | Mỗi khi hoàn thành 1 vòng tương sinh đầy đủ trong ván: +1 đan dược drop ngẫu nhiên. | tai-chi-balance |
| tai-chi-moderation | Trung Dung Chi Đạo | notable | Linh khí đa nguyên tố (nhiễm khí) duy trì hiệu ứng gốc thay vì bị overwrite — tạo ra linh khí lai nguyên tố. | tai-chi-harmony |
| tai-chi-yin-yang | Âm Dương Song Hành | keystone | KEYSTONE: Mỗi linh lực khi chạm linh đan kích hoạt thêm 1 linh lực phản chiếu nguyên tố ngược tương sinh — tạo thêm 50% quality. Nhưng nếu board chỉ còn 1 nguyên tố, hiệu ứng keystone bị vô hiệu. | tai-chi-moderation, tai-chi-heavenly-stems |
| tai-chi-natural-wuwei | Vô Vi Tự Nhiên | keystone | KEYSTONE: Khi stability linh đan trên 80%, toàn bộ linh lực trên board tự động tìm đường ngắn nhất đến linh đan — không cần chain linh khí. Nhưng các linh khí không nhận được charge từ linh lực đi thẳng này. | tai-chi-yin-yang |

## Cửu Âm (nine-yin)

| field | value |
| --- | --- |
| id | nine-yin |
| ten | Cửu Âm |
| unlockLevel | 30 |
| primaryElement | water |
| tagline | Linh lực chứa nguyền — mọi va chạm đều làm yếu kẻ cản đường. |

Cửu Âm đạo sĩ không chỉ dẫn linh lực — họ đổ nguyền vào mỗi làn khí. Linh lực aura toả ra từ linh khí làm suy yếu phòng thủ của mọi thứ xung quanh, khiến linh đan nhận được nhiều quality hơn từ mỗi hit. Gameplay xoay quanh việc xây dựng aura overlap dày đặc và chuỗi debuff chồng chất.

**Innate passive — Nguyền Linh Lực**: Linh lực aura toả ra trong bán kính 150px quanh mọi linh khí — giảm phòng thủ linh khí trong vùng đó 30%, khiến intensity damage tới linh đan tăng tương ứng.

### Nodes (6)

| id | ten | type | effect | prerequisites |
| --- | --- | --- | --- | --- |
| nine-yin-suppress | Ức Chế Linh Khí | notable | Aura nguyền lan rộng thêm 50px — bán kính tổng 200px. Linh khí trong vùng aura bị debuff phòng thủ 35% thay vì 30%. |  |
| nine-yin-curse-chain | Chuỗi Nguyền | notable | Mỗi lần linh lực va chạm linh khí trong vùng aura: stack thêm 1 lớp debuff (tối đa 5 lớp, mỗi lớp -5% phòng thủ thêm). | nine-yin-suppress |
| nine-yin-corruption-mastery | Tâm Ma Tinh Thông | notable | Tâm Ma modifier trong pháp trận cho phần thưởng thêm +20% — Cửu Âm đạo sĩ hoà thuận hơn với năng lượng Tâm Ma. | nine-yin-suppress |
| nine-yin-yin-spirit | Âm Linh Hộ Đạo | notable | Khi linh khí mang debuff nguyền bị va chạm: 15% cơ hội phát ra 1 linh lực phụ Tâm Ma tự động hướng về linh đan. | nine-yin-curse-chain |
| nine-yin-abyss | Vực Thẳm Cửu Âm | keystone | KEYSTONE: Linh đan hấp thụ debuff từ aura nguyền — mỗi lớp debuff trên board tăng quality gain +3% (tối đa +25%). Nhưng stability max của linh đan giảm 1% cho mỗi lớp debuff đang hoạt động. | nine-yin-yin-spirit, nine-yin-corruption-mastery |
| nine-yin-boundless-curse | Nguyền Lực Vô Biên | keystone | KEYSTONE: Aura nguyền không còn giới hạn bán kính — bao phủ toàn board. Nhưng aura cũng ảnh hưởng ngược lại linh đan, khiến stability giảm thêm 10% mỗi ván khi keystone này hoạt động. | nine-yin-abyss |

## Linh Sơn (spirit-mountain)

| field | value |
| --- | --- |
| id | spirit-mountain |
| ten | Linh Sơn |
| unlockLevel | 30 |
| primaryElement | wood |
| tagline | Va chạm sinh sôi — mỗi linh lực kéo theo bóng ma của chính nó. |

Linh Sơn đạo sĩ triệu hồi linh hồn từ mỗi va chạm — 10% cơ hội mỗi lần linh lực chạm linh khí sẽ tạo ra 1 linh lực echo bóng ma cùng nguyên tố, tiếp tục hành trình độc lập. Gameplay là bầy đàn linh lực ngày càng đông, xây dựng board để chuỗi echo tạo ra chuỗi echo tiếp theo.

**Innate passive — Hồi Vang Linh Sơn**: Mỗi lần linh lực va chạm bất kỳ linh khí trên board: 10% cơ hội spawn 1 linh lực echo cùng nguyên tố, 60% intensity gốc, tiếp tục từ điểm va chạm.

### Nodes (6)

| id | ten | type | effect | prerequisites |
| --- | --- | --- | --- | --- |
| spirit-mountain-multiply | Bồi Nhân Linh Hồn | notable | Tỉ lệ spawn echo tăng từ 10% lên 15%. Echo linh lực nhận 70% intensity thay vì 60%. |  |
| spirit-mountain-full-vigor | Đầy Bầu Sinh Khí | notable | Echo linh lực cũng có thể spawn echo của chính chúng — tỉ lệ 5% (không stack vô hạn, tối đa 3 thế hệ echo). | spirit-mountain-multiply |
| spirit-mountain-wood-spirit | Mộc Linh Tụ Khí | notable | Linh khí Mộc trên board tăng tỉ lệ spawn echo lên gấp đôi (20% thay vì 10%) — khuyến khích build Mộc thuần. | spirit-mountain-multiply |
| spirit-mountain-wave-ring | Vòng Sóng Linh Khí | notable | Khi 5 echo linh lực cùng chạm linh đan trong 2 giây: kích hoạt 'Sóng Linh Sơn' — AOE quality +10% ngay lập tức. | spirit-mountain-full-vigor |
| spirit-mountain-myriad-convergence | Vạn Linh Hội Tụ | keystone | KEYSTONE: Mỗi echo linh lực chạm linh đan tạo ra chất lượng đan bằng 50% linh lực thường. Nhưng nếu số echo trên board vượt quá 20 cùng lúc — stability linh đan giảm 1%/giây do quá tải linh khí. | spirit-mountain-wave-ring, spirit-mountain-wood-spirit |
| spirit-mountain-phantom-form | Bóng Ma Hoá Thân | keystone | KEYSTONE: Khi linh khí bị brick (vỡ): linh hồn của nó tồn tại thêm 10 giây — tiếp tục spawn echo như khi còn sống, intensity 40%. Sau đó tan biến hoàn toàn. | spirit-mountain-myriad-convergence |

## Tử Vi (ziwei)

| field | value |
| --- | --- |
| id | ziwei |
| ten | Tử Vi |
| unlockLevel | 30 |
| primaryElement | metal |
| tagline | Nhìn thấy vận mệnh trước khi nó rơi — thao túng may rủi theo ý chí. |

Tử Vi đạo sĩ không đánh bạc mù quáng — họ nhìn thấy những gì sắp đến và điều chỉnh trước. Khả năng xem trước 3 drop kế tiếp và reroll 1 affix miễn phí mỗi ván biến sự ngẫu nhiên thành công cụ. Gameplay là thông tin bất đối xứng — Tử Vi đạo sĩ luôn một bước trước RNG.

**Innate passive — Thiên Nhãn Tử Vi**: Xem trước 3 đan dược / linh khí drop kế tiếp của pháp trận (hiển thị trên UI). Mỗi ván được reroll miễn phí 1 affix bất kỳ trên linh khí đang đặt trên board.

### Nodes (6)

| id | ten | type | effect | prerequisites |
| --- | --- | --- | --- | --- |
| ziwei-heaven-eye | Thiên Nhãn Mở Rộng | notable | Xem trước tăng từ 3 lên 5 drop kế tiếp. Thêm hiển thị nguyên tố của linh lực sẽ spawn trong 10 giây tới. |  |
| ziwei-destiny | Vận Mệnh Trong Tay | notable | Số lần reroll miễn phí mỗi ván tăng từ 1 lên 2. Reroll có thể áp dụng lên Đan Pháp (reroll 1 modifier) thay vì linh khí affix. | ziwei-heaven-eye |
| ziwei-gambling-mastery | Cờ Bạc Tinh Thông | notable | Phong Ấn áp lên linh khí: 'Thăng Phẩm' và 'Khắc Implicit' tăng xác suất từ 25% lên 35% mỗi loại — bù trừ từ 'Phá Niêm' và 'Giáng Phẩm' còn 15% mỗi loại. | ziwei-heaven-eye |
| ziwei-ritual | Nghi Lễ Tử Vi | notable | Khi drop đúng với loại đã xem trước qua Thiên Nhãn: +20% quality linh đan ngay lập tức — thưởng cho việc đọc và chuẩn bị đúng. | ziwei-destiny |
| ziwei-fate-fixed | Định Mệnh Bất Di | keystone | KEYSTONE: Một lần mỗi pháp trận, có thể 'khoá' 1 drop vào vị trí cố định trong queue — đảm bảo drop đó xuất hiện ở đúng ván mong muốn. Nhưng khi sử dụng, Thiên Nhãn bị mù trong 2 ván tiếp theo. | ziwei-ritual, ziwei-gambling-mastery |
| ziwei-time-reversal | Ngược Dòng Thời Gian | keystone | KEYSTONE: Một lần mỗi pháp trận, có thể hoàn tác toàn bộ trạng thái ván vừa xong — linh đan quality và stability trở về đầu ván đó, loot ván đó bị huỷ. Dùng để thoát khỏi ván thảm hoạ. | ziwei-fate-fixed |

## Vô Cực (void)

| field | value |
| --- | --- |
| id | void |
| ten | Vô Cực |
| unlockLevel | 30 |
| primaryElement | void |
| tagline | Hỗn loạn là quy luật — nhân đôi mọi ngẫu nhiên, sống trong bất định. |

Vô Cực đạo sĩ không kiểm soát — họ khuếch đại. Mọi yếu tố ngẫu nhiên trong game đều được nhân đôi biên độ: loot tốt hơn gấp đôi, loot xấu hơn gấp đôi, crit mạnh hơn gấp đôi, fail đau hơn gấp đôi. Gameplay là đánh cược vào sự hỗn loạn, thiết kế board để tồn tại trong bất định và thu hoạch những đỉnh cao cực đoan.

**Innate passive — Hỗn Nguyên Khuếch Đại**: Mọi yếu tố ngẫu nhiên trong pháp trận đều nhân đôi biên độ (×2 range): drop rarity, intensity variation, crit multiplier, Phong Ấn outcomes, Tâm Ma modifier effects — cả tốt lẫn xấu đều cực đoan hơn.

### Nodes (6)

| id | ten | type | effect | prerequisites |
| --- | --- | --- | --- | --- |
| void-fluctuation | Biến Động Vô Cực | notable | Intensity của mỗi linh lực dao động ±50% ngẫu nhiên mỗi va chạm — nhưng crit chance tăng thêm 15% để bù trừ. |  |
| void-radiance | Rạn Rỡ Hỗn Nguyên | notable | Khi linh lực ngẫu nhiên đổi nguyên tố (qua linh khí Vô Cực hoặc Tâm Ma mod): 25% cơ hội biến thành nguyên tố tương sinh tốt nhất cho linh đan hiện tại thay vì hoàn toàn ngẫu nhiên. | void-fluctuation |
| void-twin-fortune | May Rủi Song Sinh | notable | Mỗi ván: 50% cơ hội nhận thêm 1 đan dược bonus ngẫu nhiên, 50% cơ hội mất 1 đan dược từ stash ngẫu nhiên. Không thể tắt. | void-fluctuation |
| void-ordered-chaos | Hỗn Loạn Có Trật Tự | notable | Khi trên board có ≥3 linh khí Vô Cực element: mọi ngẫu nhiên trong bán kính 300px bị 'neo' — chỉ có thể ra kết quả tốt (crit, tương sinh, drop cao). Khi board <3 linh khí Vô Cực: không neo, ngẫu nhiên tự do. | void-radiance |
| void-wrath | Thịnh Nộ Hỗn Nguyên | keystone | KEYSTONE: Mỗi lần stability linh đan giảm xuống dưới một ngưỡng 25%: intensity của toàn bộ linh lực trên board tăng +100% trong 5 giây — nguy hiểm kích hoạt sức mạnh. Ngưỡng reset sau khi stability phục hồi lên 50%. | void-ordered-chaos, void-twin-fortune |
| void-infinite-change | Biến Hoá Vô Cùng | keystone | KEYSTONE: Mỗi ván bắt đầu, toàn bộ linh khí trên board ngẫu nhiên hoán đổi vị trí với nhau — player phải thích nghi layout mới. Đổi lại, mỗi ván được tặng thêm 1 linh khí Bảo+ ngẫu nhiên từ pool hiện tại. | void-wrath |
