---
id: frost-ice-inkstone
ten: Nghiên Mực Hàn Băng
type: inkstone
element: water
rarity: Common
dropPool: Common
tags: [water, trail, charge]
---

# Nghiên Mực Hàn Băng (`frost-ice-inkstone`)

## Lược tả

Pháp khí Thuỷ hệ dạng nghiên — mỗi va chạm để lại vũng nước lạnh, linh lực rơi vào vũng nhận boost intensity. Vai trò vật lý: **bộ khuếch đại định điểm**; đặt trên đường linh lực hay qua, vũng nước tạo "trạm tăng tốc" cho lần đi sau. Đặt chuỗi Nghiên trên đường linh lực → mỗi hop được buff → chain tự cộng dồn.

## Implicit

Mỗi lần linh lực va chạm Nghiên Mực Hàn Băng: tạo **vũng nước lạnh** bán kính **70px** quanh điểm va chạm, tồn tại **4 giây**. Linh lực bất kỳ rơi vào vũng nhận **+20% intensity** cho hit tiếp theo (áp dụng như `player_mult` multiplicative — §3). Vũng tan khi hết thời gian; nhiều vũng trong vùng overlap: chỉ lấy cao nhất (không stack).

- Linh lực Thuỷ nhận buff ngay; linh lực nguyên tố khác cũng nhận buff (không phân biệt element).
- +20% intensity từ vũng là nguồn `player_mult` — cộng với chain bonus (§2 +20%/hop) và crit multi (§4) theo toán học nhân.
- Tạo vũng mỗi va chạm — 1 Nghiên tạo nhiều vũng theo thời gian nếu linh lực qua đi qua lại.

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `offensive` | Intensity buff vũng tăng +30% / +40% |
| `trail` | Thời gian tồn tại vũng 6s / 8s |
| `charge` | Linh lực lấy buff vũng nhận +1 charge_count thêm (§2 chain +20%/hop) |
| `aoe` | Bán kính vũng 100px / 130px |
| `sustain` | Vũng Thuỷ khi tắt heal +3 stability linh đan gần nhất (tương sinh Thuỷ→Mộc kéo sang §2) |

Affix `charge` kết hợp với +20% intensity = mỗi hop qua vũng tương đương +20% intensity + thêm +20% chain bonus §2 → tổng +40% intensity hiệu quả.

## Build role

**Element**: Thuỷ. **Archetype**: chain-builder / hop-amplifier / trail setup.

- **Vai trò cốt lõi**: nhân hóa mỗi hop thêm +20% intensity — đặt nhiều Nghiên trên đường linh lực, linh lực đi qua chuỗi Nghiên tự khuếch đại mà không cần người chơi làm gì thêm sau khi bắn.
- **Đạo Phái khớp nhất**: **Cửu Âm** (`nine-yin`) — linh lực Thuỷ đi qua vũng +20% intensity → vào vùng aura Nguyền với intensity đã cao → `nine-yin-notable-water-amplify` thêm +20% = tổng ~+40% trước khi hit linh đan. **Tử Vi** (`ziwei`) — crit chain (`ziwei-notable-crit-chain`) tích sau mỗi crit; Nghiên đảm bảo intensity đủ lớn để crit có giá trị; `ziwei-notable-metal-amplify` không áp dụng (Kim, không phải Thuỷ) nhưng base +10% crit + chain stack vẫn ổn.
- **Combo**: Kiếm Lưu Băng (`flowing-ice-sword`) + Nghiên Mực Hàn Băng — Kiếm cho phép linh lực đi xuyên tường, Nghiên đặt trên đường xuyên tặng +20% intensity mỗi vòng. Hộp Hàn Khí (`frost-qi-box`) — linh lực vào Hộp đã được buff bởi vũng, khi Hộp release với +3 jumps thì mỗi jump cũng hưởng chain bonus cao hơn.
- **Anti-synergy**: board không có đường linh lực lặp lại qua cùng vùng — vũng chỉ hữu ích khi linh lực đi qua vũng nhiều lần.
