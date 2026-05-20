# `currency/` — Dan Duoc, Nguyen Lieu & Tam Ma Mod

> 62 total: 20 dan duoc (reagents) + 30 nguyen lieu (catalysts) + 12 tam ma mod.

## Design rationale

**Dan Duoc (reagents, 20 total)**: 8 main + 12 Tinh Hoa. Reagents are the crafting gambling layer — Linh Dan rerolls single affixes, Cuu Chuyen Dan upgrades item tier at 50% fail risk, Phong An has a 4-way random outcome (strip / downgrade / upgrade / add implicit). Tinh Hoa reagents force element-specific or stat-specific outcomes, compressing RNG for targeted crafting. Rarity distribution (Common -> Very Rare -> Extremely Rare) is the primary economic throttle for crafting depth.

**Nguyen Lieu (catalysts, 30 total)**: Composed at Son Ha Do Lenh to modify a phap tran's properties. Three categories: drop-bias modifiers, mechanic-shifters, and boss/elite modifiers. Nguyen Lieu is the primary driver of emergent bi canh compositions (180K+ possible combinations with 4 catalyst slots).

**Tam Ma Mod (12 total)**: Negative energy modifiers that spawn in boss rooms and endgame compositions. Represent the "tam ma" spiritual threat — internal corruption the player must manage. Diem Phu phap tran runs purely on Tam Ma energy (Ngu Hanh DISABLED).

## Content scaling

v1.0: 62 currency entities. Live ops: +1 dan duoc/quarter, +5 nguyen lieu/quarter, +3 tam ma mod/quarter.

## Entity layout

```
currency/<id>/
├── design.md   # required
├── lore.md     # optional
└── prompt.md   # optional
```
