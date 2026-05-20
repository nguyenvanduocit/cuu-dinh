---
id: pure-heart-bead
ten: Tịnh Tâm Linh Châu
type: bead
element: void
category: sustain-defensive
dropWeight: 30
dropRateHint: atlas drop, rare
---

# Tịnh Tâm Linh Châu (`pure-heart-bead`)

## Lược tả

Cổ vật phòng thủ chuyên trị Tâm Ma: 1 lần mỗi ván, tự động dispel toàn bộ debuff Tâm Ma hiện hoạt và hồi 20 stability — nhưng intensity của mọi linh lực **ngay sau khi dispel** giảm còn ×0.3 trong 5 giây tiếp theo.

## Cơ chế

Khi ván bắt đầu hoặc khi debuff Tâm Ma đầu tiên được áp lên linh đan, **tự động trigger** (passive, không cần bấm): dispel tất cả debuff Tâm Ma đang active và hồi **+20 stability** phẳng (combat-math §5, cộng trực tiếp vào stability hiện tại, không vượt cap). Trigger này xảy ra tối đa **1 lần mỗi ván**.

Sau khi trigger: intensity của mọi linh lực giảm còn **×0.3** (nhân vào player_mult — combat-math §2) trong **5 giây** thực (không phải 5 ván — đây là debuff thời gian thực trên match canvas). Sau 5 giây, intensity trở về bình thường.

| Tier | Dispel | Stability hồi | Intensity penalty sau dispel |
|---|---|---|---|
| T1 | 1x/ván, auto | +20 stability | ×0.3 trong 5 giây |
| T2 | 1x/ván, auto | +25 stability | ×0.5 trong 4 giây |
| T3 | 1x/ván, auto | +30 stability; nếu không trigger ván đó, +5 flat quality thay thế | ×0.5 trong 3 giây |

- **+20 stability** khớp với giá trị đã reference trong combat-math §5: "Cổ vật 'Tịnh Tâm Linh Châu': dispel + restore 20% stability" — làm rõ: đây là +20 điểm (phẳng), không phải 20%.
- Debuff Tâm Ma gồm: intensity drain tick (-1/giây), debuff chồng chất của Tâm Ma modifier (+100% tâm ma intensity mod từ map — §5).
- **Nếu không có Tâm Ma nào trong ván** (map không có Tâm Ma modifier hoặc boss không dùng debuff): trigger không xảy ra → penalty không xuất hiện → ván đó chạy bình thường.
- T3: "nếu không trigger" → +5 flat quality thay thế, tránh item hoàn toàn vô nghĩa trên map không Tâm Ma.

## Đánh đổi (Downside)

- **×0.3 intensity 5 giây sau dispel**: momentum board sập hoàn toàn sau khi "được cứu" — player mất window attack ngay tại thời điểm vừa dispel. Tương sinh heals cũng ×0.3 → không heal nhiều được trong penalty window.
- **Chỉ 1x/ván**: pháp trận boss Tâm Ma thường dồn nhiều debuff wave — dispel đầu xong không còn bảo vệ cho các wave sau.
- Nếu mang item nhưng chạy map **không có Tâm Ma** (T1-T8 non-Tâm Ma Đan Pháp): item gần như trống (T1/T2). T3 có fallback +5 quality nhưng yếu hơn item khác ở slot đó.
- **Passive trigger** (không chủ động): player không kiểm soát timing — có thể trigger vào lúc không cần, tiêu 1x/ván sớm.

## Vì sao (WHY)

- **×0.3 penalty**: không phải punish "vì dispel" mà là trade "calm period after cleanse" — đúng fantasy thanh lọc (tâm tịnh hư không → nhất thời chậm lại). Mechanically: tránh "dispel + ngay lập tức bùng damage" biến item thành free cleanse + burst.
- **Flat +20 stability** (không phải %): combat-math §5 stability max là 100-150 → +20 cố định là 13-20% recovery, hợp lý với 1 ván; % sẽ quá mạnh ở end-game build stability cao.
- **T3 fallback +5 quality**: tránh dead item trên non-Tâm Ma map, đồng thời cung cấp nhẹ combo với `amitabha-statue` (cả hai drip flat quality).

## Synergy & Build

- **Archetype**: Hộ Pháp Anti-Tâm Ma — chuyên chạy Đan Pháp Tâm Ma và map T6-T13 có Tâm Ma boss. Đạo Phái **Thái Cực** (Vạn Pháp Dung Hoà: +5% tất cả — bù một phần ×0.3 penalty window) và **Tử Vi** (xem trước 3 drop → chọn đan dược stability trước ván boss Tâm Ma → cộng hưởng với +20 hồi).
- **Combo cốt lõi**: `amitabha-statue` (+flat quality ổn định, không bị ảnh hưởng penalty window) + `jade-spirit-flower` (stability cap +30% → +20 hồi có dư địa lớn hơn) → bộ ba "không bao giờ bể" reference trong exemplar amitabha-statue.
- **Anti-synergy**: build Cuồng Sát (`nine-abyss-black-elixir`, `doomed-short-life-charm`) — penalty ×0.3 vào đúng lúc cần burst nhất; Đạo Phái Linh Sơn (echo cũng ×0.3 trong penalty window → mất output đáng kể).
- **Drop**: dropWeight 30, `atlas drop, rare` — hiếm hơn amitabha nhưng vẫn accessible mid-game để counter Tâm Ma map.
