---
id: mirror
ten: Tâm Ma
variant: mirror
tierRange: 6-13
vanCount: 5-5
bossType: mirror
modifierSlots: 1-3
geometry: "800×1200"
---

# Tâm Ma (`mirror`)

Tâm ma là chính mình. Khi đan đã thành hình, đạo sĩ phải đối diện với phiên bản ngược của bản thân — kẻ đã chọn ham muốn thay vì thanh tịnh. Lò trong gương đập đúng cách lò của mình đang luyện. Thắng trận này không phải hơn ai khác — là chịu được nhìn vào mình.

## Special Rules

Boss = phiên bản tà của chính Lò player (build-aware mirror). Runtime đọc 8-slot equipment + Đạo Phái + top 5 keystone của player, generate boss spawn pattern dùng REVERSED damage flow — nếu player build Hoả-Sát Thủ thì boss xài Thuỷ-Sustain để hard-counter. 5 ván fixed: ván 1-4 spawn 'sát thủ ảnh' yếu hơn để player đọc pattern, ván 5 boss thật. Anchor mirror-symmetric (trục dọc giữa) để visualise phản chiếu — player buộc build symmetric hoặc cố tình asymmetric để break mirror. Drop = Cổ Vật personalized (tied to player's primary build archetype: Sát Thủ/Pháp Sư/Hộ Pháp/Thương Nhân/Vong Linh).

## Geometry

**Geometry** (800×1200, 10 anchor — mirror-symmetric):
```
+--------------------+
|                    |
|   ⊙(V) | ⊙(V)      |   y=280  (mirror biên)
|        |           |
|     ⊙  | ⊙         |   y=460  (mid)
|        |           |
|  ⊙     |     ⊙     |   y=640  (wide)
|        |           |
|     ⊙  | ⊙         |   y=820
|        |           |
|      ⊙(V)|⊙(V)     |   y=980  (close)
|       [linh đan]   |
+--------------------+
trục đối xứng x=400. Boss mirrors player build.
```
> ⊙ = anchor, V=void (mirror boundary), unmarked=null

