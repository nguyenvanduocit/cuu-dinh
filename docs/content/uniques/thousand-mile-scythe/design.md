---
id: thousand-mile-scythe
ten: Lưỡi Hái Thiên Lý
type: saber
element: void
category: build-defining
dropWeight: 30
dropRateHint: atlas drop, very rare
---

# Lưỡi Hái Thiên Lý (`thousand-mile-scythe`)

## Lược tả

Cổ vật build-defining hi sinh (sacrifice) cho lối Vong Linh: mỗi viên linh lực rơi khỏi board thiêu một linh khí để giáng một đòn ×10. Biến thất thoát thành lưỡi hái.

## Cơ chế

Khi một viên linh lực **rơi khỏi mép board** (bình thường = mất trắng):
- Hi sinh **1 linh khí** (chọn linh khí *ít va chạm nhất* trong ván, bảo toàn engine chính).
- Viên linh lực thoát được thu hồi, giáng vào linh đan với **intensity ×10**.

| Tier | Hi sinh | Bù lại |
| --- | --- | --- |
| T1 | 1 linh khí mỗi lần thoát | linh lực thoát ×10 intensity |
| T2 | 1 linh khí | ×10 + linh khí hi sinh trả 25% essence |
| T3 | 1 linh khí | ×10 + 30% cơ hội linh khí hi sinh hồi sinh cuối ván |

- **Không kích hoạt** nếu board chỉ còn 1 linh khí (không tự sát engine).
- ×10 áp **sau** mọi player/map multiplier → một viên thoát cuối charge dài có thể tức thì thăng phẩm (combat-math §6).
- **Rủi ro**: hi sinh làm board co lại → ít chain → vòng xoáy nếu lạm dụng.

## Đánh đổi (Downside)

- **Hi sinh 1 linh khí mỗi lần linh lực thoát mép** → board co lại, chain ngắn dần. Lạm dụng = tự bào mòn engine (giảm bằng `white-bone-decree` hồi sinh).
- **Proc một phần ngoài kiểm soát** (linh lực thoát mép, không phải nút bấm) → variance cao, không "kích hoạt khi muốn".
- Ngược với mọi build muốn giữ trọn board (`great-bell`, `landscape-map`).

## Vì sao (WHY)

- **×10 (không ×3/×5)**: phải đủ lớn để "đáng" một linh khí (tài nguyên đắt). Combat-math §6: intensity ~20-30 ×10 = thăng-cấp-một-hit, tương xứng mất mát.
- **Hi sinh linh khí ít-touch**: tránh punish bằng cách phá engine chính người chơi → biến cơ chế từ "rủi ro mù" thành "quản lý có chủ đích".
- **Vì sao chaos-risk (dù build-defining)**: nguồn proc (linh lực thoát) một phần ngoài kiểm soát → variance cao, đúng tinh thần đánh cược.

## Synergy & Build

- **Archetype**: Vong Linh (sacrifice/resurrection). Cặp bài trùng với `white-bone-decree` (Bạch Cốt Lệnh — 30% hồi sinh linh khí hi sinh cùng affix) → hi sinh gần như miễn phí.
- **Đạo Phái Vô Cực**: nhân đôi biên độ ngẫu nhiên → số lần thoát biến động mạnh, hợp người thích cực đoan.
- **Combo**: board nhỏ + nhiều linh khí "rẻ" làm đạn hi sinh; `cosmos-furnace` (mỗi ván +1 affix tier) bù hao mòn dài hạn.
- **Anti-synergy**: `landscape-map` (+5 slot, board lớn → ít linh lực thoát mép → ít proc); engine builds (`great-bell`) muốn giữ mọi linh khí.
- **Drop**: dropWeight 30, `very rare` — power spike hiếm, xứng build-defining.
