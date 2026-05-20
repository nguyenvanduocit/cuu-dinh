---
id: black-white-mask
ten: Mặt Nạ Hắc Bạch
type: statue
element: void
category: build-defining
dropWeight: 100
dropRateHint: atlas drop, rare
---

# Mặt Nạ Hắc Bạch (`black-white-mask`)

## Lược tả

Cổ vật nhị nguyên: cho phép đổi nguyên tố linh đan một lần giữa pháp trận — nhưng mọi quality tích lũy chỉ chuyển sang được một nửa, phần còn lại tan vào hư không như lớp mặt nạ bị bóc.

## Cơ chế

Một lần mỗi pháp trận (không phải mỗi ván), player có thể **đổi nguyên tố linh đan** sang một trong 5 nguyên tố chính (Kim/Mộc/Thuỷ/Hoả/Thổ). Không thể đổi sang Vô Cực.

| Tier | Quality preserve khi đổi | Stability khi đổi | Điều kiện dùng |
| --- | --- | --- | --- |
| T1 | 50% quality hiện tại giữ lại | -25 stability | Chỉ đổi được ở đầu ván (trước khi linh lực đầu tiên tung) |
| T2 | 65% quality hiữ lại | -15 stability | Đổi bất cứ lúc nào trong ván |
| T3 | 80% quality giữ lại | -10 stability | Đổi bất cứ lúc nào + board linh khí nguyên tố cũ không reset |

- **Quality conversion**: combat-math §6 quality là tiến trình phẩm cấp. T1 đổi khi đang ở 80% Linh phẩm → rơi về 40% Linh phẩm. Đổi ở phẩm cao càng đau (Bảo 80% → 40% Bảo = mất 320% quality tương đương).
- **Stability cost**: -25 stability T1 = ~1 đòn tương khắc intensity 60 (§5). Không thể đổi nếu stability ≤ 25.
- **Mục đích sử dụng thật**: phát hiện giữa pháp trận rằng board linh khí không match nguyên tố linh đan hiện tại → đổi nguyên tố linh đan về match board thay vì rebuild board. Hoặc: đổi để khai thác map mod element bias (Đan Pháp Liệt Hoả bonus cho Hoả đan).

## Đánh đổi (Downside)

- **50/65/80% quality loss**: đổi nguyên tố không miễn phí — mất 20-50% tất cả quality đã tích lũy. Ở phẩm cao (Bảo+), mất 20% Bảo = mất 80% quality tương đương Linh phẩm → tổn thất thực sự lớn.
- **Chỉ 1 lần/pháp trận**: không thể "thử và đổi lại" — quyết định không đảo ngược, phải tính trước khi dùng.
- **T1 chỉ đầu ván**: window cực hẹp — đổi khi chưa có thông tin về ván đó, tăng rủi ro quyết định sai.

## Vì sao (WHY)

- **50% quality loss (không phải ít hơn)**: nếu 80-90%, đổi nguyên tố gần như miễn phí → không còn là quyết định khó. 50% ở T1 đủ đau để player do dự; 80% ở T3 là "premium" xứng với tier cao. Combat-math §6 phẩm cấp doubles → mất % ở phẩm cao = mất nhiều tuyệt đối hơn, tự scale theo tiến độ.
- **Stability cost thêm vào quality loss**: hai-penalty cùng lúc đảm bảo đây không bao giờ là lựa chọn "miễn phí" ngay cả T3. Build cần cả hai resources để swap mà không chết.
- **Element switch hợp lý về mặt fantasy**: Mặt Nạ Hắc Bạch = nhị nguyên, nhưng không vô hạn. Một lần/pháp trận = một lần dám bỏ đi lớp mặt nạ cũ.

## Synergy & Build

- **Archetype**: element switcher / mid-run pivot. Đạo Phái khớp nhất: **Thái Cực** (board đa nguyên tố — sau khi đổi nguyên tố linh đan, Vạn Pháp Dung Hoà vẫn đủ nguyên tố để bonus) và **Tử Vi** (Thiên Nhãn xem trước drop — thông tin tốt để quyết định có nên đổi không và đổi sang gì).
- **Combo**: Đan Pháp variant có element bias (Liệt Hoả, Cửu Tiêu) — khi biết map mod trước khi vào, Mặt Nạ cho phép align nguyên tố linh đan với bias ngay giữa chừng nếu ban đầu chọn sai; `mystic-heaven-bell` (nguyên tố conversion linh khí) rebuild board nhanh sau khi đổi nguyên tố linh đan.
- **Anti-synergy**: build mono-element đã cam kết từ đầu (Lò.Đỉnh element bias T3, set `Tứ Linh` 4-piece) — đổi nguyên tố phá vỡ alignment của cả build, thiệt hơn được; `ancient-dragon-soul-jade` (homing theo nguyên tố cố định — đổi nguyên tố linh đan không đổi homing behavior).
- **Drop**: dropWeight 100, `atlas drop, rare` — accessible early, nhưng value lớn nhất ở mid-game khi player học cách đọc map mod và board composition.
