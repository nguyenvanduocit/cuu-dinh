---
id: ice-lantern
ten: Đèn Băng
type: lantern
element: water
rarity: Common
dropPool: Common
tags: [water, counter, slow]
---

# Đèn Băng (`ice-lantern`)

## Lược tả

Pháp khí Thuỷ hệ dạng đèn — khi linh lực Thuỷ chạm qua, băng giá toả ra đóng cứng linh khí lân cận trong 1 giây. Vai trò vật lý: **bộ kiểm soát tempo**; freeze tạm dừng linh khí xung quanh → linh lực có thể đến đích mà không bị va chạm linh khí bị freeze gây phản xạ lạc hướng. Đặt giữa cụm linh khí hỗn loạn để tạo "hành lang yên tĩnh".

## Implicit

Khi linh lực Thuỷ va chạm Đèn Băng: toả trường lạnh **150px** quanh Đèn trong **1 giây** — mọi linh khí trong vùng bị **freeze** (dừng lại, không phản xạ, không kích cơ chế active). Linh lực không phải Thuỷ khi freeze va chạm linh khí bị freeze: nảy như linh khí tĩnh bình thường (freeze không xoá linh khí).

- Linh đan không bị freeze (chỉ linh khí).
- Linh lực Thuỷ va chạm linh khí đang freeze: va chạm bình thường, kích tương sinh/khắc (§2) — freeze chỉ dừng linh khí, không miễn damage.
- Cửu Âm debuff aura vẫn hoạt động trên linh khí freeze — debuff không phụ thuộc chuyển động.

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `counter` | Freeze kéo dài 1.5s / 2s |
| `slow` | Sau khi hết freeze, linh khí chậm 30% tốc độ hoạt động 2s thêm |
| `aoe` | Bán kính freeze 200px / 250px |
| `offensive` | Linh lực Thuỷ va chạm linh khí bị freeze: +15% intensity bonus |
| `sustain` | Mỗi linh khí bị freeze heal +2 stability linh đan gần nhất (tương sinh Thuỷ→Mộc §2) |

## Build role

**Element**: Thuỷ. **Archetype**: tempo control / precision routing / debuff setup.

- **Vai trò cốt lõi**: làm chủ nhịp board — freeze linh khí xung quanh để linh lực đi đến đúng mục tiêu. Đặc biệt hữu ích khi board có linh khí "nhiễu" (linh khí không mong muốn chặn đường linh lực đến linh đan).
- **Đạo Phái khớp nhất**: **Cửu Âm** (`nine-yin`) — Đèn Băng freeze linh khí trong vùng aura, linh lực Thuỷ đi qua vùng frozen + aura Nguyền = hit trong vùng debuff với linh khí bất động; `nine-yin-notable-curse-slow` (slow 20%) cộng hưởng với freeze/slow của Đèn → linh khí gần như dừng hẳn trong window. **Tử Vi** (`ziwei`) — freeze tạo "window tĩnh" dự đoán được; Tử Vi xem trước 5 drop + lock drop, kết hợp freeze 1 giây = player có thể sync hit lớn vào đúng window.
- **Combo**: Nghiên Mực Hàn Băng (`frost-ice-inkstone`) — vũng nước từ Nghiên + freeze từ Đèn → Thuỷ coverage đa lớp: buff intensity + kiểm soát linh khí. Hộp Hàn Khí (`frost-qi-box`) — linh lực vào Hộp trong khi Đèn freeze board; khi Hộp xả +3 jumps, board đã frozen = 3 hop trong môi trường kiểm soát.
- **Anti-synergy**: Linh Sơn (`spirit-mountain`) — echo spawn cần linh khí active để kích; freeze tạm dừng linh khí làm giảm số echo spawn trong window freeze.
