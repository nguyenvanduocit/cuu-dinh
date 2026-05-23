---
id: platinum-cauldron
ten: Đỉnh Bạch Kim
type: cauldron
element: metal
rarity: Magic
dropPool: Uncommon
tags: [metal, counter, slow]
---

# Đỉnh Bạch Kim (`platinum-cauldron`)

## Lược tả

Pháp khí Kim hệ dạng đỉnh — làm chậm linh lực Mộc 50% khi đi qua, tận dụng tương khắc Kim khắc Mộc để kiểm soát nguyên tố đối lập. Vai trò vật lý: **bộ kiểm soát tempo Mộc**; đặt trên đường linh lực Mộc để kéo dài thời gian linh lực Mộc trong vùng board — nhiều thời gian hơn = nhiều va chạm tiềm năng hơn với linh khí, nhưng cũng dễ kiểm soát đường đi hơn.

## Implicit

Khi linh lực **Mộc** va chạm Đỉnh Bạch Kim: vận tốc linh lực giảm **50%** trong **2 giây** sau khi rời Đỉnh. Intensity và `charge_count` không thay đổi. Sau 2 giây, vận tốc hồi phục về bình thường. Linh lực nguyên tố khác (không phải Mộc): nảy bình thường, không bị slow.

- Slow 50% kéo dài thời gian linh lực Mộc trong board → tăng xác suất chạm thêm linh khí trong 2 giây; mỗi va chạm thêm = +20% chain bonus nếu tương sinh (§2).
- Đỉnh không gây damage Mộc — chỉ kiểm soát tốc độ; linh lực Mộc sau slow vẫn mang nguyên intensity.
- Cửu Âm (`nine-yin`) debuff aura: linh lực Mộc chậm trong aura = tiếp xúc lâu hơn = nhiều debuff stack hơn trong window slow.

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `counter` | Slow 60% / 70% thay vì 50% |
| `slow` | Thời gian slow 3s / 4s thay vì 2s |
| `offensive` | Linh lực Mộc bị slow nhận +15% intensity penalty ngược (slow "nén" intensity — thiết kế đánh đổi: chậm hơn nhưng mạnh hơn khi chạm) |
| `elemental` | Slow cũng áp dụng cho linh lực Thổ 30% (Đỉnh mở rộng sang Thổ — Kim→Thổ tương sinh) |
| `sustain` | Linh khí Kim trong 100px quanh Đỉnh nhận +1 durability/3s (Kim tự cường §8 bù drain) |

## Build role

**Element**: Kim. **Archetype**: tempo-control / counter-element / setup.

- **Vai trò cốt lõi**: kiểm soát linh lực Mộc của đối phương (hoặc của chính build khi dùng board đa nguyên tố) — slow cho phép player tính toán đường đi chính xác hơn, và tận dụng thời gian linh lực Mộc ở trong vùng board để kích các cơ chế khác.
- **Đạo Phái khớp nhất**: **Cửu Âm** (`nine-yin`) — slow 50% từ Đỉnh + slow 20% từ `nine-yin-notable-curse-slow` = linh lực Mộc di chuyển ở 30% tốc độ gốc trong vùng aura; thời gian tiếp xúc tăng gấp 3 = debuff stack tốc ký. **Tử Vi** (`ziwei`) — slow tạo "window tĩnh" dự đoán được như Đèn Băng nhưng cho nguyên tố Mộc; Tử Vi foresight 5 drop + slow Mộc = chuẩn bị hit Kim chính xác vào window slow.
- **Combo**: Phù Kim Tự (`metal-rune-talisman`) — trong window 3 linh lực Kim của Phù, linh lực Mộc đã convert thành Kim → không còn bị Đỉnh slow (Đỉnh chỉ slow Mộc, không slow Kim). Sau window, Mộc trở lại bị slow bình thường → kết hợp để tạo window "Kim nhanh" xen kẽ "Mộc chậm". Nghiên Mực Kim Tinh (`metal-essence-inkstone`) — linh lực Kim qua Nghiên để lại vết, linh lực Mộc bị slow phía sau = dành nhiều thời gian hơn trong vùng vết → chịu nhiều damage vết Kim hơn nếu linh đan ở vùng đó.
- **Anti-synergy**: board thuần Kim (không có linh lực Mộc) — Đỉnh không có tác dụng; chỉ là linh khí thông thường.
