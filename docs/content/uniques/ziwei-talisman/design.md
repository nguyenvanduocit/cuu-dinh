---
id: ziwei-talisman
ten: Bùa Tử Vi
type: talisman
element: void
category: build-defining
dropWeight: 100
dropRateHint: atlas drop, uncommon
---

# Bùa Tử Vi (`ziwei-talisman`)

## Lược tả

Cổ vật foresight cho mọi Đạo Phái: tiết lộ **3 Tâm Ma mod** của ván tiếp theo trước khi ván bắt đầu — thông tin mà không build nào khác có được. Khi trang bị cùng Đạo Phái Tử Vi, thay vì stack hai nguồn foresight, **reroll miễn phí của Tử Vi innate bị khoá** trong suốt pháp trận.

## Cơ chế

Cuối mỗi ván (sau khi kim đan target check, trước khi ván tiếp theo bắt đầu), UI hiển thị **3 Tâm Ma mod** sẽ active trong ván tiếp theo (nếu ván đó có Tâm Ma). Thông tin này là chính xác, không phải dự đoán. Player có thể điều chỉnh strategy, đặt lại linh khí, hoặc chọn dùng Quạt Phong Lôi ngay từ đầu ván.

**Nếu trang bị cùng Đạo Phái Tử Vi**: Thiên Nhãn innate (xem trước 3 đan dược/linh khí drop) vẫn hoạt động, nhưng **reroll 1 affix miễn phí mỗi ván bị vô hiệu** (fate manipulation budget — không thể vừa thấy vận mệnh vừa thay đổi nó hai lần).

| Tier | Foresight | Thông tin tiết lộ |
|---|---|---|
| T1 | 3 Tâm Ma mod của ván tiếp theo | Tên mod + intensity level (low/mid/high) |
| T2 | 3 Tâm Ma mod của ván tiếp theo | Tên mod + giá trị cụ thể (vd: "-30% intensity" thay vì "mid") |
| T3 | 3 Tâm Ma mod của **2 ván tiếp theo** | Tên mod + giá trị cụ thể; 1x/pháp trận: **bỏ qua** 1 Tâm Ma mod (không apply vào ván) |

- Nếu ván tiếp theo **không có Tâm Ma** (map không có mod, hoặc ván thường không trigger Tâm Ma): UI hiển thị "Ván sau: không có Tâm Ma" — thông tin vẫn có giá trị (planning stability-aggressive).
- **Tâm Ma mod** (combat-math §5): debuff tick -1/giây, Tâm Ma boss attack -5 đến -25 stability, intensity modifier -50% đến +100%. Biết trước tất cả → plan phòng thủ hoặc tấn công.
- Reroll lock với Tử Vi (nếu dùng cả): reroll affix miễn phí của Thiên Nhãn bị khoá ngay từ đầu pháp trận — player phải quyết định trước khi equip.

## Đánh đổi (Downside)

- **Chỉ foresight — không thay đổi outcome**: item không giảm Tâm Ma damage, không dispel debuff, không tăng bất kỳ stat. Player vẫn phải đối mặt với mod đã biết. Nếu không có cách counter mod đó → foresight vô nghĩa.
- **Khoá reroll Tử Vi innate**: Đạo Phái Tử Vi mất 1 trong 2 abilities quan trọng nhất khi dùng item này — trade 1 reroll/ván để có Tâm Ma foresight. Non-Tử Vi build không bị phạt.
- **Slot item talisman**: chiếm slot equipment; không mang item utility khác ở slot đó (vd: `amitabha-statue` là statue không cạnh tranh, nhưng talisman khác sẽ cạnh tranh).
- Trên map **không có Tâm Ma** (T1-T5, Đan Pháp Tiêu Chuẩn không trigger Tâm Ma): item về cơ bản trống ngoài thông tin "ván sau không có Tâm Ma".

## Vì sao (WHY)

- **Tâm Ma mod thay vì drop foresight**: Tử Vi innate đã xem drop — item cùng thông tin = dead weight trên Tử Vi build. Tâm Ma mod là **loại thông tin khác** → Bùa Tử Vi hữu ích cho mọi Đạo Phái, đặc biệt non-Tử-Vi không có foresight nào.
- **Reroll lock trên Tử Vi**: tránh "Tử Vi + Bùa Tử Vi = 2x foresight + 1 reroll" quá mạnh. Lock reroll tạo tradeoff thực: muốn Tâm Ma insight → từ bỏ affix manipulation. Cả hai ability vẫn tồn tại, chỉ không stack miễn phí.
- **T3 bỏ qua 1 mod**: power endgame cho item, không phải nerf nullify — player chọn mod nào nguy hiểm nhất để bỏ qua.

## Synergy & Build

- **Archetype (non-Tử-Vi)**: Tâm Ma Counter — lối chơi chủ động counter map Tâm Ma mà không cần Đạo Phái Tử Vi. Đạo Phái **Thái Cực** (không phụ thuộc một nguyên tố → adapt dễ hơn khi biết mod trước) và **Cửu Âm** (Nguyền Linh Lực aura — biết trước Tâm Ma intensity modifier → tính được khi nào aura overlap đủ bù đắp debuff).
- **Archetype (Tử Vi)**: Tử Vi Thông Thiên — xem drop + xem Tâm Ma mod, nhưng mất reroll. Build tập trung vào information superiority mà không cần affix manipulation; phù hợp khi Lò affix đã đủ tốt không cần reroll.
- **Combo cốt lõi (non-Tử Vi)**: `pure-heart-bead` (dispel Tâm Ma debuff 1x/ván) + Bùa Tử Vi (biết mod trước → dùng dispel đúng timing vào mod nguy hiểm nhất thay vì panic-dispel) → bộ đôi Tâm Ma counter chính xác.
- **Anti-synergy**: map không có Tâm Ma (Đan Pháp Tiêu Chuẩn T1-T5) — foresight vô dụng; build đơn thuần stat không cần information (Cuồng Sát, Vong Linh) — slot talisman tốt hơn dùng item stat trực tiếp.
- **Drop**: dropWeight 100, `atlas drop, uncommon` — accessible sớm, hướng player mới nhận thức về Tâm Ma mechanic trước khi gặp T6+.
