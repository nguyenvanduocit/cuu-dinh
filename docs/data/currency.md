# Currency (Đan Dược / Nguyên Liệu / Tâm Ma)

## Đan Dược / Reagents (20)

> Provenance: `packages/data/reagents.csv`
> Cột: id, ten, category, effect, dropPool (DropPool), weight (num), element (Element|empty).

| id | ten | category | effect | dropPool | weight | element |
| --- | --- | --- | --- | --- | --- | --- |
| spirit-elixir | Linh Đan | main | Reroll 1 affix ngẫu nhiên trên linh khí Linh+ | Common | 100 |  |
| purple-cycle-elixir | Tử Hoàn Đan | main | Reroll toàn bộ affix trên linh khí Bảo+ | Uncommon | 50 |  |
| nine-turn-elixir | Cửu Chuyển Đan | main | Nâng 1 phẩm cấp linh khí — 50% thất bại thì hoàn nguyên phẩm cũ | Rare | 20 |  |
| seal | Phong Ấn | main | 25% Phá Niêm (strip affix) / 25% Giáng Phẩm / 25% Thăng Phẩm / 25% Khắc thêm 1 implicit cực mạnh — item không craft thêm | Uncommon | 50 |  |
| soul-elixir | Hồn Đan | main | Sao chép 1 affix từ linh khí này sang linh khí khác cùng loại | VeryRare | 5 |  |
| ancient-elixir | Cổ Đan | main | Reroll 1 Cổ Vật thành Cổ Vật ngẫu nhiên khác | ExtremelyRare | 1 |  |
| identify-elixir | Đan Tẩy Niêm | main | Giám định (identify) 1 linh khí chưa nhận diện | Common | 100 |  |
| affix-wash-elixir | Đan Tẩy Affix | main | Loại bỏ 1 affix ngẫu nhiên khỏi linh khí Linh+ | Uncommon | 50 |  |
| metal-essence | Tinh Hoa Kim | essence | Bắt buộc thêm prefix +X% intensity Kim lực vào linh khí — reroll các affix còn lại | Uncommon | 50 | metal |
| wood-essence | Tinh Hoa Mộc | essence | Bắt buộc thêm prefix +X% sustain Mộc vào linh khí — reroll các affix còn lại | Uncommon | 50 | wood |
| water-essence | Tinh Hoa Thuỷ | essence | Bắt buộc thêm prefix +X% chain Thuỷ vào linh khí — reroll các affix còn lại | Uncommon | 50 | water |
| fire-essence | Tinh Hoa Hoả | essence | Bắt buộc thêm prefix +X% burst Hoả vào linh khí — reroll các affix còn lại | Uncommon | 50 | fire |
| earth-essence | Tinh Hoa Thổ | essence | Bắt buộc thêm prefix +X% phòng thủ Thổ vào linh khí — reroll các affix còn lại | Uncommon | 50 | earth |
| speed-essence | Tinh Hoa Tốc | essence | Bắt buộc thêm suffix +X% tốc độ linh lực vào linh khí — reroll các affix còn lại | Uncommon | 50 |  |
| durability-essence | Tinh Hoa Kiên | essence | Bắt buộc thêm suffix độ bền linh khí (durability) vào linh khí — reroll các affix còn lại | Uncommon | 50 |  |
| stability-essence | Tinh Hoa Mệnh | essence | Bắt buộc thêm suffix ổn định linh đan (stability) vào linh khí — reroll các affix còn lại | Uncommon | 50 |  |
| counter-essence | Tinh Hoa Khắc | essence | Bắt buộc thêm suffix kháng tương khắc vào linh khí — reroll các affix còn lại | Uncommon | 50 |  |
| generation-essence | Tinh Hoa Sinh | essence | Bắt buộc thêm suffix tăng tương sinh vào linh khí — reroll các affix còn lại | Uncommon | 50 |  |
| crit-essence | Tinh Hoa Crit | essence | Bắt buộc thêm suffix tỉ lệ chí mạng vào linh khí — reroll các affix còn lại | Uncommon | 50 |  |
| chain-essence | Tinh Hoa Linh | essence | Bắt buộc thêm suffix kích hoạt chuỗi (chain trigger) vào linh khí — reroll các affix còn lại | Uncommon | 50 |  |

## Nguyên Liệu / Catalysts (30)

> Provenance: `packages/data/catalysts.csv`
> Cột: id, ten, category, effect, weight (num).

| id | ten | category | effect | weight |
| --- | --- | --- | --- | --- |
| fire-crystal | Hoả Tinh | drop-bias | +50% drop linh khí Hoả trong pháp trận này | 100 |
| wood-crystal | Mộc Tinh | drop-bias | +50% drop linh khí Mộc trong pháp trận này | 100 |
| water-crystal | Thuỷ Tinh | drop-bias | +50% drop linh khí Thuỷ trong pháp trận này | 100 |
| metal-crystal | Kim Tinh | drop-bias | +50% drop linh khí Kim trong pháp trận này | 100 |
| earth-crystal | Thổ Tinh | drop-bias | +50% drop linh khí Thổ trong pháp trận này | 100 |
| void-stone | Vô Cực Thạch | drop-bias | Nhân đôi biên độ ngẫu nhiên của mọi drop — loot hỗn loạn nhưng cơ hội hiếm tăng ×2 | 100 |
| dragon-bone | Long Cốt | drop-bias | Boss sinh đôi — 2 boss spawn cùng lúc; drop ×2 so với boss thường | 100 |
| spirit-flower | Linh Hoa | drop-bias | Đảm bảo thêm 1 Cổ Vật drop sau khi hoàn thành pháp trận | 100 |
| star-stone | Tinh Tinh Thạch | drop-bias | +1 modifier slot trên Đan Pháp đang dùng trong pháp trận này | 100 |
| spirit-rain | Mưa Linh | drop-bias | Linh lực rơi nhanh ×1.5; +30% loot toàn bộ pháp trận | 100 |
| death-qi | Tử Khí | mechanic-shifter | Toàn bộ linh lực ngẫu nhiên trong pháp trận chuyển thành Thuỷ | 60 |
| pure-spirit-incense | Tịnh Linh Hương | mechanic-shifter | Năng lượng tiêu cực Tâm Ma giảm 50% trong suốt pháp trận | 60 |
| sky-lantern | Đèn Trời | mechanic-shifter | Ván thiên kiếp cuối pháp trận cho phần thưởng ×3 | 60 |
| corruption-bead | Tâm Ma Châu | mechanic-shifter | Spawn thêm 1 phòng Tâm Ma boss; drop Cổ Vật +30% xác suất | 60 |
| wood-spirit-crystal | Mộc Linh Tinh | mechanic-shifter | Linh đan +20% stability tối đa trong pháp trận này | 60 |
| nine-turn-spirit-flower | Cửu Chuyển Linh Hoa | mechanic-shifter | Khi Đan Pháp bị tiêu thụ — 30% cơ hội reroll thay vì huỷ hoàn toàn | 60 |
| secret-realm-soul | Bí Cảnh Hỗn | mechanic-shifter | Ẩn số ván còn lại của pháp trận — bí ẩn hoá toàn bộ timeline | 60 |
| life-death-crystal | Sinh Tử Tinh | mechanic-shifter | Nếu linh đan bể — được phép thử lại 1 lần với 50% quality hoàn trả | 60 |
| soul-spirit-essence | Tâm Linh Hồn Phách | mechanic-shifter | Linh khí bị brick → hồn phách tái sinh thành 1 linh khí Bảo ngẫu nhiên | 60 |
| primordial-chaos-qi | Hỗn Nguyên Khí | mechanic-shifter | Pháp trận chuyển cấu trúc sang Hỗn Nguyên marathon — số ván vô hạn cho đến khi thoát | 60 |
| dragon-phoenix-bead | Long Phụng Châu | boss-modifier | Boss có 2 giai đoạn — phase 2 mạnh hơn và thay đổi element tấn công | 40 |
| corruption-ancient-soul | Tâm Ma Hồn Cổ | boss-modifier | Boss triệu hồi thêm các đợt Tâm Ma phụ trợ liên tục trong trận | 40 |
| nine-dragon-metal-bone | Cửu Long Kim Cốt | boss-modifier | Phần thưởng boss ×3 — linh khí và đan dược drop phẩm cao hơn | 40 |
| heaven-dragon-bone | Thiên Long Cốt | boss-modifier | Boss chuyển nguyên tố tấn công mỗi 10 giây — yêu cầu thích nghi liên tục | 40 |
| black-dragon-meteorite | Hắc Long Vẫn Thạch | boss-modifier | Damage boss ÷2 — đổi lại drop Cổ Vật phẩm cao hơn đảm bảo | 40 |
| peak-dragon-crystal | Đỉnh Long Tinh | boss-modifier | Boss có 9 giai đoạn liên tiếp — siêu boss marathon | 40 |
| wind-rain-soul | Phong Vũ Hồn | boss-modifier | Đợt trước boss là thiên kiếp đầy đủ — phải vượt qua để vào boss chính | 40 |
| ancient-dragon-elixir | Cổ Long Đan | boss-modifier | Boss đảm bảo drop 1 Cổ Vật + Đan Pháp phẩm Cổ | 40 |
| void-dragon-soul | Vô Cực Long Hồn | boss-modifier | Boss ngẫu nhiên sở hữu năng lực của 1 Đạo Phái — thay đổi mỗi pháp trận | 40 |
| primordial-corruption-soul | Hỗn Nguyên Tâm Ma Hồn | boss-modifier | Boss là bản phản chiếu Tâm Ma của chính Lò người chơi — tấn công theo build của player | 40 |

## Tâm Ma / Corruption Mods (12)

> Provenance: `packages/data/corruption-mods.csv`
> Cột: id, ten, effect, riskLevel, rewardMultiplier (num), difficultyTier (num).

| id | ten | effect | riskLevel | rewardMultiplier | difficultyTier |
| --- | --- | --- | --- | --- | --- |
| frenzied-soul | Hồn Cuồng | Tốc độ linh lực +30% — các linh khí kích hoạt nhanh hơn nhưng khó điều hướng hơn | low | 1.10 | 2 |
| sealed-slot | Phong Hoả | -1 slot linh khí có thể đặt trên board — buộc phải tối ưu với ít pháp khí hơn | medium | 1.50 | 3 |
| underworld-dark | U Minh | Tắt sáng toàn board — chỉ thấy bán kính 120px quanh linh đan; +1 đan dược drop | medium | 1.50 | 3 |
| blood-slaughter | Huyết Sát | Linh khí mất durability mỗi lần linh lực va chạm — có thể vỡ giữa ván; +100% Phong Ấn drop | high | 2.00 | 4 |
| boundless-swarm | Vô Lượng | +50% số lượng linh lực mỗi ván — board hỗn loạn hơn; +30% vàng kim thu được | low | 1.10 | 2 |
| heretic-path | Tà Đạo | Boss sinh đôi — 2 boss xuất hiện cùng lúc ở ván cuối; +200% phần thưởng boss | high | 2.00 | 4 |
| violent-wind | Cuồng Phong | Mỗi 5 giây toàn bộ linh lực ngẫu nhiên đổi hướng 90° — phá vỡ mọi chain đã tính trước | medium | 1.50 | 3 |
| frozen-ice | Lạnh Băng | Linh khí đóng băng 2 giây sau mỗi 3 lần va chạm — mất tempo nhưng tích intensity cao hơn | low | 1.10 | 2 |
| great-counter | Đại Khắc | 50% linh lực ngẫu nhiên chuyển thành nguyên tố tương khắc với linh đan — stability nguy hiểm liên tục | high | 2.00 | 4 |
| heaven-tears | Thiên Lệ | Stability tối đa linh đan bị giới hạn ở 50% — cực kỳ nguy hiểm; +50% Đan Pháp drop | extreme | 3.00 | 5 |
| corruption-wuxing | Tâm Ma Ngũ Hành | Mỗi ván linh đan ngẫu nhiên đổi nguyên tố chính — phải liên tục điều chỉnh chain element để tránh tương khắc | extreme | 3.00 | 5 |
| primordial-shift | Hỗn Nguyên Biến | Toàn bộ linh khí ngẫu nhiên hoán đổi vị trí trên board khi bắt đầu mỗi ván — không thể lưu lại cấu hình | medium | 1.50 | 3 |
