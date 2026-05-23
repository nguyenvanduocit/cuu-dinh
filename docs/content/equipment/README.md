# `equipment/` — Lò Luyện Đan parts

> Bundle vĩ mô: 50 lò parts chia theo 10 slot. Tham chiếu locked decision #8.
>
> Cross-cut enums (Rarity) → `../enums.md` section B.
> Bundle-local enums + rule → file này.

## Bundle-local enums

### `EquipmentSlot`

10 slot trên Lò Luyện Đan (decision #8):

| Slot id | Vai trò |
|---|---|
| `crown` | Đỉnh — ornate finial cap |
| `body` | Thân — main rounded vessel, engraved furnace seal marks |
| `base` | Đế — three-legged pedestal |
| `handleL`, `handleR` | Quai L/R — talisman charm dangling, tassel |
| `lid` | Nắp — sealing lid with alchemical seal pattern + knob |
| `amulet` | Khắc Phù — jade amulet pendant, glowing inscription |
| `ringL`, `ringR` | Đồ Sương L/R — ornate metal ring band around neck |
| `belt` | Dây Phong Ấn — binding sealing cord with talisman knots |

Frontmatter usage: `slot: amulet` (single value).

## Art prompt subject mapping (glossary — định danh chức năng)

Khi viết `prompt.md` cho equipment entity, **mở đầu prompt** bằng định danh dưới đây (không tự chế hình học).
Compose formula tổng quát ở `../style/convention.md`; element/rarity treatment vẫn dùng từ `style/` shared.

> **Family consistency — quan trọng**: cả 8 slot là **bộ phận của CÙNG một cái lò luyện đan ba chân**
> (decision #8). Mọi prompt slot phải neo "part of the same three-legged daoist alchemy furnace" để các slot
> ráp lại thành một cái lò liền mạch, không phải 8 vật rời. Đây là lý do định danh đến từ glossary chung,
> không viết lại tự do mỗi file.

| slot | SUBJECT chèn vào prompt |
|---|---|
| `crown` | `the ornate crown finial cap atop a daoist alchemy furnace` |
| `body` | `the main rounded body vessel of a three-legged alchemy furnace, engraved with furnace seal marks` |
| `base` | `the footed three-legged pedestal base of an alchemy furnace` |
| `handleL`/`handleR` | `a daoist talisman charm dangling from a furnace side-handle with a tassel` |
| `lid` | `the sealing lid of an alchemy furnace with an engraved alchemical seal pattern and a knob` |
| `amulet` | `a carved jade amulet pendant mounted on a furnace, glowing inscription` |
| `ringL`/`ringR` | `an ornate metal ring band fitted around a furnace neck` |
| `belt` | `a binding sealing cord wrapping a furnace with talisman knots` |

> Subject mapping này từng sống ở `style/base-noun-dictionary.md` (bảng 2). Move về bundle owner vì chỉ equipment dùng.
