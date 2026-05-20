---
id: metal-essence-inkstone
ten: Nghiên Mực Kim Tinh
type: inkstone
element: metal
rarity: Common
dropPool: Common
tags: [metal, chain]
---

# Nghiên Mực Kim Tinh (`metal-essence-inkstone`)

## Lược tả

Pháp khí Kim hệ dạng nghiên — linh lực Kim khắc vết Kim loại trên board, vết này tiếp tục gây damage chain trong 3 giây. Vai trò vật lý: **bộ để lại dấu vết sát thương Kim**; vết Kim tồn tại như nguồn damage thứ cấp sau khi linh lực gốc rời đi. Đặt trên đường linh lực hay qua — mỗi lần qua để lại vết mới, vết chồng lên nhau.

## Implicit

Mỗi lần linh lực **Kim** va chạm Nghiên Mực Kim Tinh: khắc **vết Kim** trên board dài theo hướng linh lực, rộng 20px, dài 120px. Vết tồn tại **3 giây**, gây **0.3× intensity** (của linh lực tạo vết) mỗi giây Kim damage lên linh đan nếu linh đan nằm trong vùng 80px quanh vết. Nhiều vết chồng: damage cộng dồn (tối đa 3 lớp vết cùng tính).

- Vết Kim áp dụng tương sinh/khắc: Kim→Thuỷ tương sinh (+0.05×intensity stability heal §2); Kim khắc Mộc (-40% intensity penalty §2).
- Linh lực không phải Kim: không tạo vết, Nghiên hoạt động như linh khí thông thường.
- Crit check: mỗi hit/giây từ vết có crit check riêng độc lập với linh lực gốc.

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `chain` | Vết tồn tại 4s / 5s thay vì 3s |
| `offensive` | Damage vết tăng 0.4× / 0.5× intensity |
| `crit` | Vết Kim có +12% crit chance riêng |
| `elemental` | Vết Kim kích hoạt aura -10% phòng thủ linh đan trong vùng 80px (synergy Cửu Âm) |
| `aoe` | Vùng ảnh hưởng vết mở rộng 110px / 140px quanh vết |

## Build role

**Element**: Kim. **Archetype**: DoT / chain-damage / board-pressure.

- **Vai trò cốt lõi**: nguồn damage-over-time Kim thụ động — linh lực qua 1 lần để lại vết 3 giây, trong thời gian đó mỗi giây 1 hit Kim lên linh đan. 3 vết chồng = 0.9× intensity/giây passive damage.
- **Đạo Phái khớp nhất**: **Tử Vi** (`ziwei`) — vết Kim tạo nhiều hit/giây → `ziwei-notable-crit-chain` tích crit chain stack (crit → +5% crit chance stack ×3) rất nhanh từ hit vết định kỳ; `ziwei-notable-metal-amplify` +30% crit multi khi crit Kim trực tiếp áp dụng cho cả hit vết. **Cửu Âm** (`nine-yin`) — vết Kim trong vùng aura Nguyền: mỗi hit vết hưởng -30% phòng thủ debuff; với affix `elemental` (vết tạo thêm -10% phòng thủ), tổng debuff trong window có thể đạt -40%.
- **Combo**: Phù Kim Tự (`metal-rune-talisman`) — 1x/ván tất cả linh lực biến thành Kim → linh lực Hoả/Thuỷ/Mộc/Thổ cũng tạo vết Kim khi qua Nghiên sau khi Phù chuyển đổi; toàn board phủ vết. Đỉnh Bạch Kim (`platinum-cauldron`) — làm chậm linh lực Mộc 50%, linh lực Mộc chậm lại = dành nhiều thời gian trong vùng vết Kim → hứng nhiều hit vết hơn (nếu linh đan trong vùng, cơ chế cross-element).
- **Anti-synergy**: board không có linh lực Kim (build Mộc/Thuỷ thuần) — Nghiên chỉ là linh khí thông thường.
