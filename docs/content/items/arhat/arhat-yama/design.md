---
id: arhat-yama
ten: Tượng La Hán Diêm Vương
type: statue
element: void
rarity: Rare
dropPool: Rare
tags: [tuong, la-han, set, currency]
---

# Tượng La Hán Diêm Vương (`arhat-yama`)

## Lược tả

Thành viên bộ **Thập Bát La Hán** (`eighteen-arhats`), hiện thân quyền năng Diêm Vương — vị La Hán tượng ngồi trên ngai phán xét, tay cầm sổ sinh tử, mắt nhìn thẳng không biểu cảm. Trên board, mỗi khi một linh khí bị "hi sinh" (phá huỷ trong pháp trận — do durability §8, Tâm Ma boss, hoặc Phong Ấn brick), tượng thực thi quyền phán xét: drop 1 đan dược ngẫu nhiên.

## Implicit

Mỗi khi **bất kỳ linh khí nào trong board bị phá huỷ** (hi sinh trong pháp trận): tượng **drop 1 đan dược ngẫu nhiên** vào inventory splash của pháp trận.

Cơ chế combat-math: đây là **meta-layer event** (§0 Forever/Map layer), không phải collision layer. Linh khí bị phá huỷ qua ba con đường: (1) durability về 0 dưới mod "Huyết Sát" (§8), (2) Tâm Ma boss phá board, (3) Phong Ấn force-brick. Mỗi sự kiện trigger 1 lần drop. Không giới hạn số lần/pháp trận — board nhiều linh khí, nhiều hi sinh = nhiều đan dược.

Drop pool đan dược: random trong bộ sưu tập đan dược "Hồi Phục", "Cửu Chuyển Đan", "Định Tâm", v.v. — xác suất đầu ra theo dropWeight riêng của từng đan dược. Không guaranteed drop loại cụ thể.

## Affix pool

Tag roll trên `statue`:

| Affix slug | Tags | Vai trò trên Tượng La Hán Diêm Vương |
|---|---|---|
| `statue-stabilize` | defensive, sustain | Giảm thiệt hại khi linh khí bị tấn công — giúp trì hoãn thời điểm "hi sinh", kiểm soát timing drop |
| `statue-four-spirit-aura` | elemental, aoe | Emit aura — khi linh khí trong aura bị phá, combo với implicit tạo drop ngay tại vùng aura |
| `statue-beast-guard` | defensive, anti-corruption | Giảm Tâm Ma debuff — ngăn Tâm Ma boss phá board quá sớm, giữ linh khí sống cho hi sinh có chủ đích |

## Build role

**Currency engine** cho build chấp nhận hi sinh linh khí để farm đan dược.

- **Bộ Thập Bát La Hán** (`eighteen-arhats`): trong bộ đủ, set bonus thường bù đắp mất linh khí. Tượng Diêm Vương biến mất mát của bộ thành lợi ích kinh tế — asymmetric value khi board liên tục bị tấn công.
- **Map "Huyết Sát"** (§8 T15+): mod này phá linh khí liên tục → mỗi linh khí chết = 1 đan dược. Với 10-15 linh khí trên board, một pháp trận "Huyết Sát" có thể yield 5-10 đan dược. Lợi suất cao nhất trong game cho farming đan dược.
- **Chiến lược hi sinh có chủ đích**: đặt linh khí rẻ (Common/Magic) nhiều trong Lò, để chúng chết trước; tượng Diêm Vương thu hoạch drop. Giữ linh khí quý (Rare+) sống để đảm bảo chain tiếp tục.
- **Đạo Phái**: **Thái Cực** (`tai-chi`) — Thái Cực có mechanic tái sinh linh khí; kết hợp với Diêm Vương = linh khí chết → tái sinh → chết lại → vòng loop drop vô tận. Combo định nghĩa playstyle.
- **Anti-synergy**: build cần board ổn định tuyệt đối (chain dài §3) không muốn linh khí chết. Tượng này vô dụng nếu không có hi sinh trigger.
