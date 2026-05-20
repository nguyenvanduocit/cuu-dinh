---
id: earth-wall-statue
ten: Tường Thổ
type: statue
element: earth
rarity: Common
dropPool: Common
tags: [earth, counter, wall]
---

# Tường Thổ (`earth-wall-statue`)

## Lược tả

Khối đá Thổ đứng thẳng như vách núi — không phải tượng thờ, là vật cản. Linh khí Thổ với cơ chế **wall**: linh lực không thể đi xuyên qua trừ phi mang nguyên tố Kim. Kim xuyên qua vì Kim khắc Thổ (§1 Kim khắc Mộc, nhưng trong context wall: Kim là yếu tố xuyên phá vật chất Thổ theo lý thuyết ngũ hành — Kim cứng, Thổ mềm hơn Kim). Mọi nguyên tố khác bị tường chặn lại.

## Implicit

**Wall-like**: linh lực đi qua vị trí tường bị chặn lại trừ phi mang nguyên tố **Kim** — Kim đi xuyên qua bình thường, mọi nguyên tố khác bị reflect hoặc dừng.

Cơ chế combat-math: tường là **routing mechanic**, không phải damage mechanic. Linh lực non-Kim chạm tường: không gây damage cho tường (tường không có HP), bị reflect/bounce theo physics. Linh lực Kim: ignore tường, tiếp tục quỹ đạo.

Dùng tường để shape board: chặn luồng Hoả đang nhắm đan, redirect Mộc sang đường dài hơn để tích charge, tạo corridor chỉ cho Kim đi qua.

## Affix pool

Tag roll trên `statue`:

| Affix slug | Tags | Vai trò trên Tường Thổ |
|---|---|---|
| `statue-stabilize` | defensive, sustain | Tường hấp thụ một phần impact khi bị linh lực phản xạ — giảm bounced linh lực intensity |
| `statue-four-spirit-aura` | elemental, aoe | Emit Thổ aura — linh khí Thổ gần tường được buff, tạo Thổ zone xung quanh vách |
| `statue-beast-guard` | defensive, anti-corruption | Giảm Tâm Ma debuff khi tường đứng cạnh linh khí bị tấn công — bảo vệ board xung quanh |

## Build role

**Board shaper** và **Kim highway creator** cho build Kim hoặc build cần routing control.

- **Kim highway**: đặt hai tường song song → tạo corridor chỉ Kim đi qua. Linh lực non-Kim bị đẩy ra ngoài corridor. Kim chạy thẳng từ nguồn đến đan → chain clean, không bị loại nguyên tố khác interrupt.
- **Chặn Hoả**: Hoả bị tường Thổ chặn (Thổ không cho Hoả qua, Hoả bị reflect). Đặt tường giữa nguồn Hoả và đan Mộc — ngăn khắc element.
- **Redirect tích charge**: linh lực Mộc bị chặn → bounce → đi vòng dài hơn → tích thêm charge (§2 +20%/hop) → khi cuối cùng tới đan, intensity cao hơn.
- **Combo `earth-lantern`**: tường chặn, đèn tách. Linh lực bị tường chặn bounce → đi qua đèn → tách Thổ. Tạo loop: 1 linh lực chặn = 2 Thổ launch.
- **Đạo Phái**: **Thái Cực** (`tai-chi`) — routing và kiểm soát board là phong cách Thái Cực. Tường là công cụ cơ bản nhất của playstyle này.
- **Common/Common**: free board control. Cơ bản nhưng không thể thiếu cho bất kỳ ai muốn chủ động shape board thay vì để mặc vật lý quyết định.
