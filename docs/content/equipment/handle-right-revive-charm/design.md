---
id: handle-right-revive-charm
ten: Quai Hồi Sinh Phù (Phải)
slot: handleR
rarity: Magic
variant: Linh
isUnique: false
---

# Quai Hồi Sinh Phù (Phải) (`handle-right-revive-charm`)

## Lược tả

Phù lệnh ấm áp màu hổ phách — linh khí vừa tan vỡ chưa kịp tắt linh tính đã bị phù níu lại, kéo về với đủ sức sống để tiếp tục tham chiến. Quai phải và trái cùng khắc một phù ký hồi sinh, đối xứng như đôi cánh tay nâng đỡ.

## Implicit

**1×/ván: hồi sinh 1 linh khí vừa vỡ với 50% độ bền — không mất affix.**

Cơ chế chi tiết (Magic — Linh):
- Kích hoạt tự động ngay khi linh khí đầu tiên trong ván bị phá huỷ (HP về 0).
- Linh khí được hồi sinh tại vị trí vỡ với **50% độ bền tối đa** và giữ nguyên toàn bộ affix hiện tại.
- Linh khí hồi sinh không thể bị hồi sinh lần thứ hai trong cùng ván.
- Charge duy nhất — dùng xong không hồi.

Tham chiếu combat-math: độ bền linh khí liên quan §5 stability và §8 durability — hồi sinh tại 50% tức linh khí vào trạng thái "mid-health", đủ để tiếp tục nhận hit mà không sụp ngay.

Rarity scale:
| Rarity | Charge/ván | Độ bền hồi sinh |
|---|---|---|
| Common (Phàm) | — | — |
| Magic (Linh) | 1× | 50% |
| Rare (Bảo) | 1× | 75% |
| Legendary (Thần) | 2× | 75% |

## Slot role

**Quai (handleR)** — tay cầm phải Lò Luyện Đan. Quai L/R cặp đôi utility: không tăng sát thương trực tiếp, chuyên cứu tình huống nguy cấp trong ván. Mirror pair với `handle-left-revive-charm` — cùng hiệu ứng, đeo cả hai = 2 charge hồi sinh/ván.

## Build use

- **Board survival**: hồi sinh linh khí key (linh khí Legendary đang buff chain) tránh mất affix quý giá. Đặc biệt hiệu quả với bí cảnh mod "Huyết Sát" (combat-math §8) làm tiêu hao durability linh khí mạnh.
- **Stack đôi**: `handle-left-revive-charm` + `handle-right-revive-charm` → 2 charge/ván — bảo vệ 2 linh khí quan trọng, phù hợp build phụ thuộc ≥ 2 linh khí Legendary trên board.
- **Đạo Phái Linh Sơn**: echo system của Linh Sơn tạo ra nhiều linh khí clone — hồi sinh linh khí gốc giữ nguyên buff chain gốc.
- **Combo `lid-legendary-great-elixir`**: boss drop đảm bảo phẩm cấp Bảo+ → linh khí drop hiếm cần được bảo vệ → Quai hồi sinh ngăn mất linh khí Bảo vừa drop.
- **Anti-synergy**: build "Tử Sinh" (pháp trận Tử Sinh variant — linh khí vỡ trigger bonus) sẽ bị Quai này can thiệp phá vỡ loop.
