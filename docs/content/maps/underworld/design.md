---
id: underworld
ten: Diêm Phủ
variant: underworld
tierRange: 8-16
vanCount: 5-7
bossType: mirror
modifierSlots: 2-4
geometry: "800×1200"
---

# Diêm Phủ (`underworld`)

Diêm Phủ là nơi mọi đan dở dang bị Diêm Vương giữ lại. Ở đây không có Ngũ Hành — chỉ có tâm ma và những linh hồn đã quên mình là ai. Đạo sĩ vào Diêm Phủ luyện đan, không phải để đan đẹp — để đem theo chút thanh tịnh xuống cho người chết. Lò ở đây luôn lạnh, dù có cháy đến đâu.

## Special Rules

Tâm Ma exclusive — KHÔNG có Ngũ Hành. Linh lực spawn 100% là Tâm Ma negative energy (không nằm trong enum NgHanh — runtime treat as separate 'tam-ma' channel). Damage formula Ngũ Hành DISABLED; thay bằng formula thuần stability damage trừ khi linh khí có flag 'Tịnh Tâm' (Bùa, Tượng Phật A Di Đà, Tịnh Tâm Linh Châu) — chỉ những linh khí này mới convert được Tâm Ma → quality positive. Death-mechanic: nếu linh đan bể trong Diêm Phủ, player vào trạng thái 'U Hồn' 1 ván — Lò mất 50% intensity nhưng được +1 ván retry. 10 anchor clustered ở nửa dưới board (y ≥ 700) = mô phỏng địa ngục bóp nghẹt; nửa trên trống = không gian đan rơi xuống tay tử thần. elementBias = voCuc vì Tâm Ma không có element slot trong schema, đại diện 'không thuộc ngũ hành'. Drop pool: Cổ Vật Tâm Ma Mặt Nạ +50%, Mộc Linh Tinh +30%, Đan Dược Tịnh Tâm guaranteed 1.

## Geometry

**Geometry** (800×1200, 10 anchor — clustered nửa dưới):
```
+--------------------+
|                    |
|                    |
|                    |
|                    |   nửa trên TRỐNG
|                    |   (linh hồn rơi)
|                    |
|                    |
|  ⊙(V) ⊙(V) ⊙(V)    |   y=700
|⊙(V)  ⊙(V) ⊙(V)  ⊙(V) |   y=880-900
|     ⊙(V)  ⊙(V)     |   y=1060
|         ⊙(V)       |   y=1140
|       [linh đan]   |
+--------------------+
All elementBias=voCuc (proxy "không Ngũ Hành").
```
> ⊙ = anchor, V=void

