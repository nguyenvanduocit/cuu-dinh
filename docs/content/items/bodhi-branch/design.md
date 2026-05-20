---
id: bodhi-branch
ten: Cành Bồ Đề
type: branch
element: wood
rarity: Common
dropPool: Common
tags: [wood, sustain, heal]
---

# Cành Bồ Đề (`bodhi-branch`)

## Lược tả

Cành gỗ Bồ Đề vẫn xanh tươi dù đã rời gốc từ lâu, lá nhỏ rung rinh khi có linh lực đi qua. Linh khí Mộc giản dị nhất — không phát ra, không chuyển hướng — chỉ heal: mỗi linh lực Mộc chạm vào cành, linh đan hấp thụ một lượng nhỏ Mộc sinh khí và phục hồi stability.

## Implicit

Mỗi khi **linh lực Mộc** chạm vào cành: **heal linh đan +2% stability**.

Cơ chế combat-math: §5 liệt kê heal sources — tương sinh hit +intensity × 0.05, đồng hành +intensity × 0.02. Cành Bồ Đề là nguồn heal thứ ba được cite trực tiếp trong §5: *"Linh khí Mộc implicit (Cành Bồ Đề etc.): +2% per Mộc hit"*. Đây là flat heal, không phụ thuộc intensity — khác biệt so với formula-based heal của combat-math.

+2%/hit so với đồng hành +intensity × 0.02: ở intensity = 1.0 (chuẩn), đồng hành heal = 0.02 = 2% — ngang nhau. Ở intensity cao (>1), đồng hành vượt trội. Ở intensity thấp (<1, early game), cành Bồ Đề ưu việt hơn. Kết luận: cành này là early-game anchor tốt nhất cho Mộc heal.

Branch là linh khí **passive target** — nằm trên board, linh lực Mộc phải đi qua mới trigger.

## Affix pool

Tag roll trên `branch`:

| Affix slug | Tags | Vai trò trên Cành Bồ Đề |
|---|---|---|
| `branch-recovery` | sustain, utility | Khi cành bị hit đủ N lần, phát burst heal lớn hơn — layer thứ hai ngoài drip +2%, tạo heal spikes |

## Build role

**Floor healer** cho Mộc early-to-mid game và board đa nguyên tố có ít nhất 1 luồng Mộc.

- **Board Mộc triple heal**: Cành Bồ Đề (+2%/hit) + `azure-dragon-bead` (+10%/5hit) + `arhat-wood-soul` (+25% sustain enhancement) = heal cực kỳ bền. Cành đóng vai drip baseline, bead đóng vai burst, Mộc Hồn khuếch đại cả hai.
- **Mọi build có Mộc lane**: Cành là Common/Common — chi phí thấp nhất, drop từ đầu game. Mỗi board Mộc nên có ít nhất 1 cành làm heal foundation.
- **Chống Tâm Ma debuff** (§5 -1 stability/giây): board Mộc nhanh (~8-10 hit Mộc/giây) → cành heal +16-20%/giây → vượt Tâm Ma drain thoải mái.
- **Đạo Phái**: **Linh Sơn** (`spirit-mountain`) — echo Mộc nhân đôi số hit Mộc → heal rate × 2 (lên ~+4%/hit tương đương).
- **Anti-synergy**: board không có linh lực Mộc — cành vô dụng. Luôn đi kèm ít nhất 1 linh khí phát ra Mộc (như `azure-dragon-statue` hoặc `earth-lantern` với convert Mộc).
