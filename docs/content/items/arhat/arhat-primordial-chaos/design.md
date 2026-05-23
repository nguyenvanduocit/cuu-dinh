---
id: arhat-primordial-chaos
ten: Tượng La Hán Hỗn Nguyên
type: statue
element: void
rarity: Rare
dropPool: Rare
tags: [tuong, la-han, set, void, chaos]
---

# Tượng La Hán Hỗn Nguyên (`arhat-primordial-chaos`)

## Lược tả

Tượng La Hán từ thuở hồng hoang — trước khi Ngũ Hành phân chia. Linh lực qua tượng có 30% xác suất đổi element ngẫu nhiên, tạo ra chuỗi tương sinh/tương khắc không thể đoán trước — cả nguy hiểm lẫn cơ hội.

## Implicit

Mỗi linh lực **đi qua vùng tượng** (tượng không phản lực — linh lực xuyên qua vật lý): `30% chance đổi element ngẫu nhiên` sang 1 trong 5 Ngũ Hành (roll đều, không ưu tiên). Linh lực sau đổi element hoạt động theo element mới với linh khí phía sau (tương sinh/tương khắc tính theo element mới). 70% giữ nguyên. Vật lý: tượng ~2×3 ô, linh lực xuyên qua không bị phản — chỉ bị "nhuộm" element.

## Affix pool

Dựa trên tags `[tuong, la-han, set, void, chaos]` và base type `statue`:
- **Prefix** (`utility`, `offensive`, `elemental`): `+X% trigger chance`, `trigger: linh lực đổi về element tương sinh với đan đang luyện X% (bias)`, `đổi element: intensity +X% bonus`
- **Suffix** (`chain`, `utility`, `offensive`): `linh lực sau đổi element: chain +1 hop bonus miễn phí`, `% chance đổi về Vô Cực (neutral — không tương sinh không khắc, chỉ quality +5%)`, `đổi element: linh khí tiếp theo trong chain nhận +X% intensity`

## Build role

**Archetype**: Chaos-convert / Hỗn Nguyên Đan Pháp synergy. Hỗn Nguyên phù hợp nhất với Đan Pháp **Hỗn Nguyên** (marathon map) hoặc **Tử Sinh** (high-risk) — nơi element instability là norm. Dùng trong build chấp nhận variance để đổi lấy ceiling: khi 30% trigger cho tương sinh chain (quality +30%), một ván có thể bùng mạnh hơn build thuần. Kết hợp **Tượng La Hán Vạn Pháp** (`arhat-myriad-laws`) để convert ngẫu nhiên rồi trigger affix theo element mới ngẫu nhiên — chaos tối đa. Đạo Phái: **Hỗn Nguyên** (void archetype). Nguy hiểm: 30% trigger sang tương khắc element đan → stability -40% — luôn cần **Tượng La Hán Sa Môn** làm backup.
