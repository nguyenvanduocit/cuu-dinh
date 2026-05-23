---
id: metal-rune-talisman
ten: Phù Kim Tự
type: talisman
element: metal
rarity: Rare
dropPool: Rare
tags: [metal, convert, oneshot]
---

# Phù Kim Tự (`metal-rune-talisman`)

## Lược tả

Pháp bảo Kim hệ dạng bùa — kích hoạt một lần mỗi ván, toàn bộ linh lực trên board chuyển sang Kim trong window ngắn. Vai trò vật lý: **công cụ đồng bộ nguyên tố**; trong window Kim tuyệt đối, mọi linh lực đều hưởng tương sinh/khắc theo Kim — một cú "reset nguyên tố" chiến thuật. Sử dụng đúng lúc (trước hit boss, hoặc khi linh đan là Kim cần sustain) là chìa khoá.

## Implicit

**1 lần mỗi ván**: Phù Kim Tự kích hoạt khi linh lực bất kỳ va chạm lần đầu — toàn bộ linh lực đang bay trên board và **3 linh lực tiếp theo được bắn ra** bị chuyển nguyên tố thành **Kim**. Intensity và `charge_count` giữ nguyên. Sau 3 linh lực kể từ kích hoạt, cơ chế tắt cho phần còn lại của ván.

- Kim→Thuỷ tương sinh: nếu linh đan là Thuỷ, tất cả linh lực Kim đó heal stability +0.05×intensity (§2) — đồng loạt.
- Kim khắc Mộc: nếu linh đan là Mộc, tất cả linh lực Kim gây penalty -40% intensity (§2) — dùng sai thời điểm = nguy hiểm.
- Convert không ảnh hưởng linh khí trên board (chỉ linh lực đang bay).

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `convert` | Mở rộng window lên 5 / 7 linh lực tiếp theo (thay vì 3) |
| `offensive` | Linh lực được convert nhận +20% intensity "Kim khí thuần nguyên" |
| `oneshot` | 1 lần/ván tăng lên 2 lần/ván (T1); 3 lần/ván (T2) |
| `crit` | Linh lực Kim được convert có +15% crit chance trong window |
| `chain` | Linh lực Kim convert nhận +1 charge_count khởi đầu (§2 +20%/hop) |

Affix `oneshot` T2 (3 lần/ván) biến Phù từ công cụ chiến thuật thành nguồn convert thường xuyên — khác biệt về chiến lược build.

## Build role

**Element**: Kim. **Archetype**: burst-window / elemental-sync / boss-kill.

- **Vai trò cốt lõi**: tạo window Kim tuyệt đối cho khoảnh khắc quyết định — kích hoạt trước hit boss, toàn bộ linh lực trong window đó đều Kim. Nếu linh đan là Thuỷ (tương sinh Kim→Thuỷ), window heal stability đồng loạt = bộ phục hồi chiến thuật. Nếu linh đan là Kim (tương sinh Kim→Thuỷ không áp dụng), dùng để stack crit Kim với Tử Vi.
- **Đạo Phái khớp nhất**: **Tử Vi** (`ziwei`) — drop lock (`ziwei-notable-drop-lock`) đảm bảo Phù xuất hiện đúng ván boss; crit chain Kim sau convert + `ziwei-notable-metal-amplify` +30% crit multi = window burst crit Kim tổng lực. **Vô Cực** (`void`) — innate ×2 biên độ intensity; linh lực Kim convert trong window Vô Cực = intensity swing ×2 × convert bonus = peak damage cao nhất.
- **Combo**: Nghiên Mực Kim Tinh (`metal-essence-inkstone`) — trong window 3 linh lực Kim, mỗi linh lực qua Nghiên để lại vết Kim; sau window vết vẫn tồn tại 3 giây → passive DoT Kim tiếp tục sau window. Đỉnh Bạch Kim (`platinum-cauldron`) — slow Mộc 50% trong window Kim: linh lực Mộc bị convert thành Kim, rồi bị Đỉnh slow (Đỉnh slow Mộc, không phải Kim — nhưng convert xảy ra trước khi Đỉnh slow nên Kim không bị slow).
- **Anti-synergy**: linh đan Mộc trong window Kim = tương khắc hàng loạt (-40% intensity tất cả linh lực) — Phù tự nổ vào mặt nếu dùng sai nguyên tố linh đan. Bắt buộc xác nhận element linh đan trước khi kích.
