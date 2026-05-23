---
id: void-box
ten: Hộp Vô Cực
type: box
element: void
rarity: Common
dropPool: Common
tags: [void, random, convert]
---

# Hộp Vô Cực (`void-box`)

## Lược tả

Hộp Vô Cực biến đổi linh lực thành nguyên tố ngẫu nhiên mỗi lần chạm — mở hộp ra là bất ngờ. Linh khí rủi ro cao-lợi nhuận cao: có thể tạo tương sinh bất ngờ hoặc đại khắc thảm hoạ.

## Implicit

Linh lực chạm vào Hộp Vô Cực: `element` bị thay thành 1 trong 5 nguyên tố (`metal`, `wood`, `water`, `fire`, `earth`) — roll đều 20% mỗi nguyên tố, không phải `void`. Roll xảy ra tại thời điểm chạm, áp dụng cho mọi va chạm sau đó trong chain.

Mỗi linh lực roll độc lập — hai linh lực cùng chạm hộp có thể ra hai nguyên tố khác nhau.

**Cơ chế trong §2**: element_factor (Layer 4) được tính dựa trên nguyên tố sau roll, không phải nguyên tố gốc. Velocity và charge_count giữ nguyên.

**Vai trò vật lý**: box static, kích thước trung bình. Đặt trước linh đan để "gamble" nguyên tố cuối — đặt sau linh khí để gamble mid-chain.

## Affix pool

Bias AffixTag `utility` + `elemental` + `currency-control`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `elemental` | Bias roll sang 1 nguyên tố | Một nguyên tố được chọn có 40% thay vì 20% (các nguyên tố còn lại chia đều 15% mỗi cái) |
| `utility` | Xem trước nguyên tố roll | HUD hiển thị nguyên tố tiếp theo sẽ roll (không đổi kết quả, chỉ show trước 0.5s) |
| `currency-control` | Drop bonus khi tương sinh | Nếu roll ngẫu nhiên ra tương sinh với đan: 10% chance drop currency |
| `aoe` | Lây nguyên tố roll | Nguyên tố roll từ hộp lan sang linh lực khác trong ±50px |

Tags `void, random, convert` → AffixTag chủ đạo `utility, elemental, currency-control`.

## Build role

**Archetype**: Chaos / gamble — dùng khi player muốn variance cao để farm drop hoặc khi bảng thiếu convert tool. Không phải build optimised — là build thú vị.

**Đạo Phái**: **Hư Vô** (`void`) — Vô Cực tương tác trung tính (§1 `n`), ít bị phạt từ roll xấu; build Hư Vô absorb variance.

**Combo xác nhận**:
- `void-box` + `wordless-talisman`: hai nguồn random chồng — hộp roll nguyên tố linh lực, bùa Vô Tự roll nguyên tố linh khí mỗi 2s = bảng hoàn toàn ngẫu nhiên. Dùng T1-T5 farm loot.
- `void-box` + `secret-realm-inkstone`: hộp convert + trail ngẫu nhiên = nhiều lớp random, nhưng cũng nhiều lớp loot bonus.
- `void-box` (affix bias roll) + `vermilion-cauldron`: bias hộp về Hoả 40% → hơn nửa hit thành Hoả → đỉnh buff → semi-reliable Hoả build với upside gamble.

**Anti-synergy**: build element thuần (`red-lantern`, `sea-dragon-talisman`) — hộp phá lock nguyên tố, không dùng chung.
