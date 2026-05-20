---
id: handle-left-pure-heart-charm
ten: Quai Tịnh Tâm Phù (Trái)
slot: handleL
rarity: Rare
variant: Bảo
isUnique: false
---

# Quai Tịnh Tâm Phù (Trái) (`handle-left-pure-heart-charm`)

## Lược tả

Phù lệnh khắc chữ "Tịnh" bằng mực linh thần — mỗi khi Tâm Ma xâm nhập, phù tự bùng sáng xua sạch ô nhiễm khỏi linh đan trong nháy mắt. Quai trái và phải cùng khắc một phù ký, cùng chung một lời thề thanh tịnh.

## Implicit

**1×/ván: xoá toàn bộ Tâm Ma debuff đang hiệu lực trên linh đan.**

Cơ chế chi tiết (Rare — Bảo):
- Kích hoạt thủ công hoặc tự động khi linh đan tích ≥ 3 stack Tâm Ma cùng lúc.
- Xoá sạch tất cả debuff Tâm Ma hiện tại (corruption stack, quality drain, elemental inversion) trong 1 frame — không delay.
- Sau khi xoá, linh đan được miễn nhiễm Tâm Ma thêm **4 giây** (cooldown buffer).
- Dùng xong hết charge trong ván — không hồi.

Tham chiếu combat-math: Tâm Ma debuff tác động lên `linhDanQuality` (§5 stability) — xoá debuff ngăn drain quality dưới -50% (tức ngăn lose condition bể linh đan).

Rarity scale:
| Rarity | Charge/ván | Cooldown miễn nhiễm |
|---|---|---|
| Common (Phàm) | — | — |
| Magic (Linh) | 1× | 2 giây |
| Rare (Bảo) | 1× | 4 giây |
| Legendary (Thần) | 2× | 4 giây |

## Slot role

**Quai (handleL)** — tay cầm trái Lò Luyện Đan. Cặp Quai L/R là lớp phòng thủ utility của Lò: không tăng sát thương, chuyên cung cấp hiệu ứng hoạt động (active) 1×/ván dạng cứu nguy hoặc hỗ trợ chain. Quai trái và phải là **mirror pair** — hiệu ứng giống hệt nhau, chỉ khác side lắp; trang bị cả hai tức đeo **2 charge** cùng loại hiệu ứng.

## Build use

- **Anti-Tâm Ma core**: trang bị cả `handle-left-pure-heart-charm` + `handle-right-pure-heart-charm` → 2 charge/ván xoá Tâm Ma. Thiết yếu cho bí cảnh variant **Tâm Ma** (map mod Tâm Ma tần suất cao) và tier T6-T13 nơi boss Tâm Ma xâm nhập liên tục.
- **Đạo Phái Thiên Cơ**: keystone "Thanh Tịnh" của Thiên Cơ cộng thêm +10% quality linh đan mỗi lần xoá Tâm Ma thành công — Quai này là trigger tự nhiên.
- **Combo với `ring-left-corruption-counter` / `ring-right-corruption-counter`**: giảm thời gian hiệu lực Tâm Ma (ring) + xoá hoàn toàn khi nguy cấp (Quai) = bộ đôi anti-corruption hoàn chỉnh.
- **Anti-synergy**: build Tâm Ma Mod chủ động (6 trụ gambling) đôi khi muốn giữ stack Tâm Ma để trigger bonus — Quai này xoá mất lợi thế đó.
