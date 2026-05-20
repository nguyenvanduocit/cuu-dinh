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
| `body` | Thân — main rounded vessel, engraved trigrams |
| `base` | Đế — three-legged pedestal |
| `handleL`, `handleR` | Quai L/R — talisman charm dangling, tassel |
| `lid` | Nắp — sealing lid with bagua + knob |
| `amulet` | Khắc Phù — jade amulet pendant, glowing inscription |
| `ringL`, `ringR` | Đồ Sương L/R — ornate metal ring band around neck |
| `belt` | Dây Phong Ấn — binding sealing cord with talisman knots |

Frontmatter usage: `slot: amulet` (single value).

## Art prompt subject mapping

Khi viết `prompt.md` cho equipment entity, dùng bảng dưới làm SUBJECT (chèn vào compose formula `[SUBJECT] + [ELEMENT TOKEN] + [RARITY TREATMENT] + ...`). Compose formula tổng quát ở `../style/convention.md`; element/rarity token vẫn dùng từ `style/` shared.

| slot | SUBJECT chèn vào prompt |
|---|---|
| `crown` | `the ornate crown finial cap atop a daoist alchemy furnace` |
| `body` | `the main rounded body vessel of a three-legged alchemy furnace, engraved with trigrams` |
| `base` | `the footed three-legged pedestal base of an alchemy furnace` |
| `handleL`/`handleR` | `a daoist talisman charm dangling from a furnace side-handle with a tassel` |
| `lid` | `the sealing lid of an alchemy furnace with engraved bagua trigrams and a knob` |
| `amulet` | `a carved jade amulet pendant mounted on a furnace, glowing inscription` |
| `ringL`/`ringR` | `an ornate metal ring band fitted around a furnace neck` |
| `belt` | `a binding sealing cord wrapping a furnace with talisman knots` |

> Subject mapping này từng sống ở `style/base-noun-dictionary.md` (bảng 2). Move về bundle owner vì chỉ equipment dùng.
