---
id: longevity-talisman
ten: Bùa Trường Sinh
type: talisman
element: wood
rarity: Magic
dropPool: Uncommon
tags: [wood, sustain, aura]
---

# Bùa Trường Sinh (`longevity-talisman`)

## Lược tả

Pháp bảo Mộc hệ dạng bùa — toả trường bảo hộ xung quanh, linh khí lân cận không bị nhiễm khí tà. Vai trò vật lý: **bộ bảo vệ linh khí**; đặt ở trung tâm cụm linh khí quan trọng để bảo toàn chúng khỏi các hiệu ứng corruption/nhiễm khí từ map mod hay linh lực tà. Không gây damage, nhưng bảo đảm board không bị suy yếu.

## Implicit

Bùa Trường Sinh toả **trường bảo hộ bán kính 180px**. Linh khí trong vùng **miễn nhiễm "nhiễm khí" (corruption)**: không nhận các hiệu ứng xấu từ map mod ảnh hưởng linh khí (suy giảm durability, đổi nguyên tố ngẫu nhiên, giảm hiệu ứng, v.v.). Bản thân Bùa không miễn nhiễm — chỉ bảo vệ linh khí khác trong vùng.

- "Nhiễm khí" định nghĩa: mọi hiệu ứng ngoài game-loop bình thường làm suy giảm trạng thái linh khí (không phải damage từ linh lực — đó là cơ chế vật lý bình thường).
- Durability drain từ hit linh lực (§8 Huyết Sát map mod) vẫn áp dụng — Bùa chỉ chặn corruption, không chặn damage vật lý.
- Nhiều Bùa: vùng bảo hộ cộng dồn diện tích (không stack intensity — chỉ phủ vùng rộng hơn).

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `sustain` | Linh khí trong vùng hồi +1 durability/5 giây (chống drain từ §8) |
| `aura` | Bán kính bảo hộ 230px / 280px |
| `defensive` | Linh khí trong vùng nhận -20% intensity penalty từ tương khắc thay vì -40% (§2 giảm nửa) |
| `wood` | Linh lực Mộc trong vùng +10% intensity (Mộc khí thuần khiết) |
| `anti-corruption` | Linh đan cũng nhận bảo hộ khi trong vùng: immunity 1 lần với hiệu ứng "bể linh đan từ nhiễm khí" (không phải stability 0) |

Affix `sustain` (+1 durability/5s) quan trọng nhất khi chơi map Huyết Sát (§8) — bù lại durability drain liên tục để linh khí không vỡ.

## Build role

**Element**: Mộc. **Archetype**: defensive / sustain / board-preservation.

- **Vai trò cốt lõi**: board insurance — đặt Bùa để linh khí không bị hỏng bởi map mod. Đặc biệt thiết yếu ở T10+ khi map mod corruption xuất hiện thường xuyên; Bùa giảm chi phí thay linh khí giữa ván.
- **Đạo Phái khớp nhất**: **Linh Sơn** (`spirit-mountain`) — keystone `Vô Số Linh Ảnh` (100% echo spawn, -5 durability/echo §8) đòi hỏi bảo vệ durability; Bùa affix `sustain` hồi +1 durability/5s + đặt nhiều Bùa = bù lại drain từ echo flood. **Thái Cực** (`tai-chi`) — board đa nguyên tố cần nhiều linh khí loại khác nhau; mỗi linh khí bị corruption là mất 1 mảnh puzzle nguyên tố; Bùa bảo toàn board đa dạng.
- **Combo**: Đỉnh Lục Bảo (`jade-cauldron`) — Bùa bảo vệ linh khí Mộc lân cận (bao gồm cả Đỉnh); Đỉnh cần sống lâu để tích đủ 40 đồng hành hit → Bùa là hậu thuẫn lý tưởng. Bình Cam Lộ Xanh (`green-nectar-vase`) — Bình trong vùng Bùa không bị corruption đổi nguyên tố ngẫu nhiên → convert Hoả→Mộc hoạt động đáng tin cậy.
- **Anti-synergy**: Vô Cực (`void`) — Vô Cực khuếch đại variance ×2/×4; Bùa giảm variance bằng cách loại corruption → hai triết lý đối lập (Vô Cực muốn hỗn loạn, Bùa muốn ổn định).
