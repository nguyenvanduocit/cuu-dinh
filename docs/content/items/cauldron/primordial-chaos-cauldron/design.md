---
id: primordial-chaos-cauldron
ten: Đỉnh Hỗn Nguyên
type: cauldron
element: void
rarity: Rare
dropPool: Rare
tags: [void, convert, oneshot]
---

# Đỉnh Hỗn Nguyên (`primordial-chaos-cauldron`)

## Lược tả

Pháp khí Hư Vô hệ dạng đỉnh — cho phép linh đan đang luyện chuyển nguyên tố một lần mỗi ván. Vai trò vật lý: **bộ pivot linh đan**; thay đổi nguyên tố linh đan thay đổi hoàn toàn bộ tương sinh/khắc của board — biến bất lợi thành lợi thế, hoặc tối ưu hoá board đang hoạt động tốt để đẩy lên đỉnh. Quyết định dùng Đỉnh là quyết định chiến lược cao nhất trong ván.

## Implicit

**1 lần mỗi ván**: khi linh lực bất kỳ va chạm Đỉnh Hỗn Nguyên, player được chọn **nguyên tố mới** cho linh đan đang luyện (menu popup: Kim / Mộc / Thuỷ / Hoả / Thổ). Linh đan ngay lập tức đổi nguyên tố — mọi tương sinh/khắc sau đó tính theo nguyên tố mới. Quality tích luỹ và stability hiện tại không thay đổi.

- Đổi nguyên tố không reset quality hay stability — chỉ đổi loại tương sinh/khắc nhận từ đây về sau.
- Sau khi dùng, Đỉnh trở thành linh khí thông thường cho phần còn lại của ván (không active thêm).
- Timing quan trọng: dùng quá sớm (linh đan chưa tích nhiều quality) = ít lợi; dùng đúng lúc (khi cần chuyển sang nguyên tố có tương sinh mạnh với board hiện tại) = đột phá.

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `convert` | 1 lần/ván → 2 lần/ván (T1); 3 lần/ván với mỗi lần cooldown 2 ván tiếp theo (T2) |
| `void` | Sau khi đổi, linh đan nhận +10% quality bonus ngay lập tức ("Hỗn Nguyên khai ngộ") |
| `oneshot` | Khi đổi sang nguyên tố tương sinh với linh lực đang bay: tự động kích 1 hit tương sinh ngay lập tức (+0.05×intensity stability heal §2) |
| `offensive` | Board nhận +15% intensity trong 5 giây sau khi đổi nguyên tố ("Hỗn Nguyên bùng phát") |
| `sustain` | Khi đổi nguyên tố: stability linh đan +10 ngay lập tức (bù tổn thất từ ván trước) |

## Build role

**Element**: Hư Vô (void). **Archetype**: pivot / meta-adaptation / strategic flex.

- **Vai trò cốt lõi**: công cụ thích nghi chiến lược — khi board đang tương khắc liên tục hoặc khi nhận drop linh khí tốt nhưng sai nguyên tố, Đỉnh cho phép "xoay linh đan" thay vì "xây lại board". Không build quanh Đỉnh mà build "nhờ Đỉnh mà không bị khoá".
- **Đạo Phái khớp nhất**: **Tử Vi** (`ziwei`) — foresight 5 drop + `ziwei-notable-drop-lock` biết trước board sẽ có nguyên tố gì tiếp theo; Đỉnh cho phép đổi linh đan sang nguyên tố tối ưu trước khi board đó đến. Thông tin bất đối xứng Tử Vi + Đỉnh = "chuẩn bị trước 2 lượt". **Thái Cực** (`tai-chi`) — `tai-chi-notable-element-convert` đổi linh khí board; Đỉnh đổi linh đan; hai công cụ cộng hưởng để Thái Cực duy trì ≥5 nguyên tố đồng thời mà không cần đổi thủ công nhiều.
- **Combo**: Bình Cam Lộ Xanh (`green-nectar-vase`) — Bình convert linh lực Hoả → Mộc; sau khi Đỉnh đổi linh đan sang Mộc, Bình đảm bảo nguồn Hoả dồi dào trên board đều trở thành tương sinh Mộ→Hoả nguồn từ Bình → Mộc đến linh đan Mộc. Châu Hỗn Nguyên (`primordial-chaos-bead`) — cùng chủ đề Hỗn Nguyên; Châu variance ±50% kết hợp Đỉnh pivot = build "toàn hỗn loạn": Đỉnh đổi linh đan sang nguyên tố có nhiều tương sinh nhất với board hiện tại, Châu khuếch đại lên/xuống từ baseline cao đó.
- **Anti-synergy**: build nguyên tố thuần khiết ổn định (ví dụ thuần Kim với Tử Vi Kim) — Đỉnh không có giá trị khi nguyên tố linh đan đã tối ưu từ đầu và không cần pivot. Lãng phí slot Rare.
