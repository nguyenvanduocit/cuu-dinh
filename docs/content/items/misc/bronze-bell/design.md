---
id: bronze-bell
ten: Chuông Đồng
type: bell
element: metal
rarity: Common
dropPool: Common
tags: [metal, convert, push]
---

# Chuông Đồng (`bronze-bell`)

## Lược tả

Chuông đồng cổ điện, nung trong lò huyền thiên, gõ một tiếng vang khắp Lò. Linh khí Kim nguyên tố với hai tác dụng đồng thời: **convert element** linh lực qua chuông sang Kim, và **sóng đẩy** 80px vào các linh khí lân cận khi bị va chạm — kết hợp convert + push cùng lúc trên một linh khí.

## Implicit

Linh lực đi qua chuông: **convert → Kim nguyên tố**. Đồng thời mỗi lần bị va chạm: phát **sóng đẩy 80px** đẩy các linh khí khác trong phạm vi đó.

Cơ chế combat-math: convert element thay đổi `linh_luc.element` trong công thức (§2 Layer 4 element interaction). Linh lực Hoả qua chuông → trở thành Kim → tương tác với đan theo ngũ hành Kim (§1: Kim khắc Mộc, Kim sinh Thuỷ, Kim đồng hành Kim). Conversion xảy ra ngay khi qua chuông — chain tiếp theo đều tính theo Kim.

Sóng đẩy 80px: linh khí trong 80px bị đẩy ra. Tác dụng physics: repositioning — có thể tạo hoặc phá chain tùy positioning. Sóng đẩy không gây damage, chỉ di chuyển linh khí.

Hai hiệu ứng độc lập: convert xảy ra trên linh lực đi qua, push xảy ra trên linh khí xung quanh khi bị hit.

## Affix pool

Tag roll trên `bell`:

| Affix slug | Tags | Vai trò trên Chuông Đồng |
|---|---|---|
| `bell-convert` | elemental, utility | Tăng chance/guarantee convert Kim — T3: 100% convert, bỏ RNG |
| `bell-push-wave` | utility, aoe | Tăng range sóng đẩy (50→80→100px) + intensity bonus — cộng với implicit push để stack |
| `bell-echo` | utility, chain | Khi chuông bị hit, phát echo linh lực Kim nhỏ — tăng chain complexity và Kim hit count |

## Build role

**Element converter + board shaper** cho build Kim hoặc build cần chuyển hoá nguyên tố xấu.

- **Convert Hoả thành Kim**: khi board có Hoả linh khí không mong muốn (khắc đan Mộc chẳng hạn), đặt chuông trên đường Hoả → convert sang Kim. Kim sinh Thuỷ (§1) — có thể tiếp tục chain sinh.
- **Tương sinh Thổ→Kim** (§1): nếu có Thổ linh khí tạo Kim, chuông amplify Kim lane. Đặt chuông sau Thổ để collect và convert thêm các linh lực khác sang Kim.
- **Sóng đẩy board control**: push 80px có thể đẩy linh khí nhẹ ra khỏi chain xấu hoặc đưa linh khí vào chain tốt hơn. Cần test positioning per-board.
- **Đạo Phái**: **Cửu Âm** (`nine-yin`) — Kim intensive, chuông là backbone Kim lane. Hoặc **Thái Cực** (`tai-chi`) nếu dùng sóng đẩy như mechanic điều hướng.
- **Common/Common**: item đa năng nhất cho early-game Kim. Tiếng vang chuông mỗi pháp trận = Kim lực thức dậy từ đầu.
