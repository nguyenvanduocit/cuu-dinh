---
id: heaven-decree-furnace
ten: Đan Lò Thiên Lệnh
type: cauldron
element: void
category: sustain-defensive
dropWeight: 100
dropRateHint: atlas drop, uncommon
---

# Đan Lò Thiên Lệnh (`heaven-decree-furnace`)

## Lược tả

Cổ vật an toàn cho lối Thủ Thành: Phong Ấn hầu như không bao giờ brick — nhưng thành công của Phong Ấn bị giới hạn ở T2, không bao giờ vươn tới tier hoàn hảo. Thiên Lệnh bảo đảm sống sót, không bảo đảm hoàn hảo.

## Cơ chế

Mang `heaven-decree-furnace` thay đổi kết quả Phong Ấn:

| Tier | Brick chance giảm | Giới hạn kết quả Phong Ấn |
| --- | --- | --- |
| T1 | −5% mỗi Phong Ấn (stack, không cap) | Kết quả tối đa T2 affix (không ra T3) |
| T2 | −7% mỗi Phong Ấn (stack) | Kết quả tối đa T2; khi thành công T2: 20% bonus roll thêm 1 suffix thấp |
| T3 | −10% mỗi Phong Ấn (stack); brick → thay bằng "mất 1 affix hiện có" | Kết quả tối đa T2; T3 brick → mất affix thay vì mất item |

- **Stack "mỗi Phong Ấn"**: mỗi lần dùng Phong Ấn thành công giảm thêm −5% brick chance cho lần sau → pháp trận nhiều ván = ngày càng an toàn hơn (per-pháp-trận reset).
- **T3 brick → "mất 1 affix"**: thay thế "brick item" bằng "mất 1 affix ngẫu nhiên" — nhẹ hơn nhiều nhưng vẫn có giá. Không xoá hoàn toàn rủi ro.
- **Giới hạn T2 max**: kết quả roll Phong Ấn không bao giờ cho T3 affix (tier cao nhất) — trần an toàn đổi lấy trần sức mạnh.

## Đánh đổi (Downside)

- **Kết quả Phong Ấn tối đa T2**: affix T3 mạnh nhất game (ví dụ Khắc_Phù T3: +25% intensity, §3) hoàn toàn không thể có khi mang Thiên Lệnh. Build muốn T3 Khắc_Phù phải bỏ Thiên Lệnh — chọn an toàn nghĩa là chọn trần thấp hơn.
- **Không stack với `cosmos-furnace`**: nếu `cosmos-furnace` (mỗi ván +1 affix tier) đưa affix từ T1 → T2 → T3, Thiên Lệnh cap T2 cản `cosmos-furnace` vươn T3 → hai lò mâu thuẫn thiết kế, không dùng đồng thời có ý nghĩa.
- **Stack brick reduction chỉ trong pháp trận**: reset mỗi pháp trận → pháp trận mới bắt đầu lại từ mức risk gốc. Không lũy kế qua session.

## Vì sao (WHY)

- **−5% stack (không flat −5% mọi lúc)**: flat reduction quá nhàm, không tạo ra quyết định. Stack "ngày càng an toàn hơn trong pháp trận" thưởng cho người dùng Phong Ấn sớm và nhiều — thiết kế hành vi, không chỉ stat.
- **Trần T2 (không T1)**: T1 cap quá nặng, không ai mang; T2 cap cho phép item mạnh nhưng không hoàn hảo — đúng fantasy "bảo hiểm rủi ro tốt, không đảm bảo đỉnh cao".
- **T3 brick → mất affix**: hoàn toàn xoá brick là quá tốt cho sustain-defensive; mất affix = tổn thất thật nhưng không mất item = downside chịu đựng được. Hành vi giống bảo hiểm thực tế.

## Synergy & Build

- **Archetype**: Thủ Thành / Phong Ấn-heavy. Đạo Phái **Thái Cực** (Vạn Pháp Dung Hoà — +5% mọi chỉ số; không phụ thuộc nguyên tố): ổn định đa tầng, không cần T3 affix để đạt hiệu quả vì Thái Cực buff đều tay — bù đắp trần T2.
- **Combo**: Đan Pháp **Marathon** (pháp trận dài = nhiều ván = nhiều lần Phong Ấn = stack brick reduction sâu hơn) + `amitabha-statue` (flat quality mỗi ván win — cùng triết lý chậm mà chắc).
- **Anti-synergy**: `cosmos-furnace` (tier escalation — bị chặn bởi cap T2); build thiên về T3 affix farming (`ziwei` reroll để nhắm T3).
- **Drop**: dropWeight 100, `atlas drop, uncommon` — starter safety item, tốt cho người mới bước vào Phong Ấn loop.
