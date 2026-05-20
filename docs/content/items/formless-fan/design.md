---
id: formless-fan
ten: Quạt Vô Hình
type: fan
element: void
rarity: Magic
dropPool: Uncommon
tags: [void, stealth]
---

# Quạt Vô Hình (`formless-fan`)

## Lược tả

Pháp bảo Hư Vô hệ dạng quạt — linh lực đi qua trở nên vô hình trong 2 giây. Vai trò vật lý: **bộ ngụy trang linh lực**; linh lực vô hình không kích các cơ chế phản ứng của linh khí tương khắc trong window stealth, nhưng vẫn gây damage khi chạm linh đan. Công cụ bypass tương khắc chiến thuật hoặc routing ẩn danh qua board nguy hiểm.

## Implicit

Khi linh lực bất kỳ va chạm Quạt Vô Hình: nhận trạng thái **vô hình (stealth)** trong **2 giây**. Trong 2 giây đó: linh lực **không kích va chạm vật lý** với linh khí (đi xuyên qua), chỉ kích damage khi chạm **linh đan trực tiếp**. Sau 2 giây hoặc sau khi chạm linh đan, stealth kết thúc — linh lực trở về bình thường.

- Vô hình bypass tương khắc từ linh khí: linh lực Hoả đi qua vùng linh khí Kim (Hoả khắc Kim) mà không nhận penalty -40% intensity (§2) vì không va chạm linh khí đó.
- Linh lực vô hình vẫn gây damage Hoả/Thuỷ/Kim/Mộc/Thổ lên linh đan khi chạm — tương sinh/khắc với linh đan vẫn tính (§2).
- Vô hình cũng bypass kích hoạt linh khí active (Đèn Băng, Châu Hoả Phượng, Nghiên Mực, v.v.) — linh lực đi qua mà không trigger.

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `stealth` | Thời gian vô hình 3s / 4s thay vì 2s |
| `offensive` | Linh lực vô hình khi chạm linh đan: +20% intensity "đòn bí ẩn" |
| `void` | Sau khi kết thúc stealth, linh lực tiếp tục với intensity tăng +15% "giải phóng" |
| `speed` | Vận tốc linh lực tăng 30% trong khi vô hình |
| `crit` | Linh lực vô hình khi chạm linh đan có +20% crit chance (đòn bất ngờ) |

Affix `crit` +20% là mạnh nhất trong hoàn cảnh build Tử Vi hoặc Sắc Bén — hit vô hình = đòn crit tiềm năng cao nhất trên board.

## Build role

**Element**: Hư Vô (void). **Archetype**: precision delivery / bypass / tactical routing.

- **Vai trò cốt lõi**: giao linh lực đến linh đan qua "đường thẳng tắt" bỏ qua mọi linh khí chặn đường. Đặc biệt mạnh khi board có nhiều linh khí tương khắc chặn đường hoặc khi cần 1 hit linh đan mà không muốn trigger các linh khí làm nhiễu (Châu Hoả Phượng, Nghiên Mực đang tích điểm sẽ bị bỏ qua trong window vô hình).
- **Đạo Phái khớp nhất**: **Tử Vi** (`ziwei`) — foresight 5 drop + lock drop cho phép xác định đúng timing dùng Quạt; affix `crit` +20% vô hình + `ziwei-notable-crit-chain` = cú crit tích luỹ stack nhanh. **Vô Cực** (`void`) — innate ×2 biên độ; affix `offensive` +20% intensity vô hình × biên độ Vô Cực = swing cao nhất. Cả hai Đạo Phái đều cộng hưởng với "1 hit quyết định".
- **Combo**: Hộp Hoả Tinh (`fire-essence-box`) — linh lực được giữ trong Hộp 3 giây, khi xả ×2 intensity; đặt Quạt Vô Hình sau Hộp → linh lực ×2 intensity đi vô hình thẳng đến linh đan không bị cản. Nghiên Mực Hàn Băng (`frost-ice-inkstone`) — vũng nước +20% intensity từ Nghiên vẫn buff linh lực vô hình (buff áp dụng khi vào vũng, không cần va chạm); linh lực vô hình nhặt buff mà không trigger Nghiên.
- **Anti-synergy**: Linh Sơn (`spirit-mountain`) — echo spawn từ va chạm linh khí; linh lực vô hình không va chạm linh khí → không spawn echo trong window stealth. Build Linh Sơn mất nguồn echo trong 2 giây vô hình.
