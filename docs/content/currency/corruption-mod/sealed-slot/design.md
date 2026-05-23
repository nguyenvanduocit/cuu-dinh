---
id: sealed-slot
ten: Phong Hoả
riskLevel: medium
rewardMultiplier: 1.5
difficultyTier: 3
category: corruption-mod
---

# Phong Hoả (`sealed-slot`)

## Lược tả

Lửa phong ấn một vị trí trên board — pháp khí bị giảm, chain phải compact hơn. Thử thách hiệu suất tối ưu với ít tài nguyên hơn.

## Effect

**Board slot reduction** (board layout — số linh khí có thể đặt):
- **-1 slot linh khí** trên board (ví dụ board 12-slot → còn 11-slot).
- Slot bị phong ấn ngẫu nhiên chọn ở đầu pháp trận và cố định suốt toàn bộ pháp trận.
- Player vẫn có đủ linh khí trong inventory nhưng không thể đặt lên slot bị phong ấn.
- Chain geometry bị ảnh hưởng: một điểm relay tiềm năng bị mất → chain phải route khác.
- Không ảnh hưởng trực tiếp intensity hay element (§2, §1) — tác động gián tiếp qua chain length và chain quality giảm.
- **Tâm Ma modifier** §3 intensity range không đổi.
- Phần thưởng: **×1.5 reward multiplier** (rewardMultiplier 1.5).

## Đánh đổi & Risk

**RiskLevel medium** — mất 1 slot là constraint lâu dài (toàn pháp trận), không phải spike nguy hiểm. Tác động phụ thuộc vào slot nào bị phong: slot trung tâm (hub của nhiều chain) bị phong = impact cao; slot rìa board = impact thấp.

Nguy hiểm tiềm ẩn: không đủ linh khí đa nguyên tố để cover mọi element → chain element gap → phải dựa vào element trung tính nhiều hơn → thăng phẩm chậm hơn.

Build **compact/efficient** (ít linh khí nhưng mỗi linh khí làm nhiều việc) phù hợp hơn build spread (nhiều linh khí chuyên dụng).

**Reward** ×1.5 — bù đắp constraint vừa phải.

## Khi nào dùng + Synergy

**Dùng khi**: build đã tối ưu hoá từng linh khí (không phụ thuộc số lượng nhiều); muốn thử challenge thiết kế chain compact; mid-game T6-T10.

**Composing pháp trận**:
- An toàn compose với hầu hết mod — constraint là layout, không phải combat danger.
- Tránh **Hỗn Nguyên Biến** (`primordial-shift`) kết hợp — shuffle + 1 slot missing = board càng khó đọc.

**Synergy**:
- **Linh khí đa năng** (linh khí có 2-3 effect kép): tối đa hoá mỗi slot còn lại.
- **Build chain ngắn** (ít hop, intensity bù bằng velocity/crit thay vì charge count): không cần nhiều relay linh khí.
- **Cổ Vật "Địa Trục"** (nếu tồn tại — reduce slot penalty): counter trực tiếp mod này.
