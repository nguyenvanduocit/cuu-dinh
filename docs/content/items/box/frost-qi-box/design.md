---
id: frost-qi-box
ten: Hộp Hàn Khí
type: box
element: water
rarity: Magic
dropPool: Uncommon
tags: [water, store, chain]
---

# Hộp Hàn Khí (`frost-qi-box`)

## Lược tả

Pháp khí Thuỷ hệ dạng hộp — thu nạp linh lực Thuỷ rồi giải phóng với chuỗi nhảy kéo dài. Vai trò vật lý: **bộ tăng độ phủ chain**; linh lực vào Hộp dừng lại, khi ra thêm +3 jumps — từ linh lực đơn thành chuỗi dao động phủ nhiều linh khí. Đặt ở vị trí linh lực dễ vào (góc tường, gần launcher) để Hộp thường xuyên được nạp.

## Implicit

Khi linh lực Thuỷ va chạm Hộp Hàn Khí: linh lực bị giữ lại (không nảy) và được **nạp vào Hộp**. Khi Hộp xả (ngay lập tức sau khi nạp — không có delay), linh lực được phóng ra với **+3 jumps bổ sung**: linh lực tiếp tục chain thêm 3 va chạm linh khí trước khi tắt, thay vì dừng theo chain limit bình thường. Intensity không thay đổi khi vào/ra Hộp.

- +3 jumps nghĩa là +3 lần chain hit × +20%/hop (§2) = tổng thêm ~+60% intensity nếu mỗi hop tương sinh.
- Hộp chỉ giữ 1 linh lực tại một thời điểm; linh lực thứ 2 đến khi Hộp đang xử lý → nảy bình thường.
- Linh lực không phải Thuỷ: không được nạp, Hộp hoạt động như linh khí thông thường.

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `chain` | +4 / +5 jumps bổ sung thay vì +3 |
| `offensive` | +15% intensity khi Hộp xả |
| `sustain` | Mỗi jump thêm từ Hộp heal +1 stability linh đan (tổng +3 stability/cycle) |
| `speed` | Tốc độ linh lực sau khi Hộp xả tăng ×1.3 |
| `elemental` | Linh lực xả được giữ nguyên element và nhận thêm buff tương sinh Thuỷ→Mộc +0.05×intensity §2 nếu linh đan là Mộc |

## Build role

**Element**: Thuỷ. **Archetype**: chain-extender / coverage / deep-dive.

- **Vai trò cốt lõi**: mở rộng tầm với của linh lực Thuỷ — 1 linh lực từ launcher có thể chain 3 hop thêm sau Hộp, phủ toàn bộ board. Đặc biệt mạnh khi board có nhiều linh khí tương sinh (Thuỷ→Mộc), mỗi hop thêm = thêm stability heal (§2 +0.05×intensity).
- **Đạo Phái khớp nhất**: **Cửu Âm** (`nine-yin`) — +3 jump = 3 hit thêm trong vùng aura Nguyền → `nine-yin-notable-deep-curse` tích thêm 3 stack nhanh hơn; `nine-yin-notable-debuff-burst` kích đủ 3 stack dễ hơn nhiều. **Thái Cực** (`tai-chi`) — linh lực Thuỷ chain dài phủ toàn board, chạm nhiều nguyên tố khác nhau → hỗ trợ điều kiện ≥5 nguyên tố `tai-chi-notable-cycle-amplify` Đại Tuần Hoàn.
- **Combo**: Nghiên Mực Hàn Băng (`frost-ice-inkstone`) — đặt Nghiên trên đường chain 3 hop bổ sung; mỗi hop qua vũng +20% intensity. Kiếm Lưu Băng (`flowing-ice-sword`) — chain 3 hop của Hộp xuyên tường với Pierce → phủ cả vùng bên kia tường.
- **Anti-synergy**: build "Bùng Bạo" single-hit — +3 jump loãng intensity (không thêm intensity mỗi hop, chỉ thêm số hit nhỏ hơn).
