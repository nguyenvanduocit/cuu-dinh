# `items/` — Linh Khí (Base Items)

> 78 linh khí. 10 items per element x 6 elements = 60 core, expanded to 78 with rarer Vo Cuc candidates.

## Design rationale

Each element has a distinct **physics role**: Kim (crit/piercing), Moc (sustain/regen), Thuy (chain/control), Hoa (AOE/ignite), Tho (charge/defensive), Vo Cuc (chaos/wildcard). Items within an element reinforce each other through implicit synergy, not just stat stacking. Implicits are element-flavoured: Huyen Chung pushes, Den Long converts, Tuong amplifies neighbours, Bua grants one-shot effects.

## Content scaling

v1.0: 78 items. Live ops: +5/month (1 per element).

## Entity layout

```
items/<id>/
├── design.md   # required — YAML frontmatter + mechanics
├── lore.md     # optional — Vietnamese flavor prose
├── prompt.md   # optional — MJ /imagine block
└── art/        # optional — generated concept images
```

## Cross-references

- Enum vocabulary: `../enums.md`
- Affix compatibility: `../affixes/`
- Naming dictionary: `../../superpowers/specs/2026-05-20-naming-convention-pivot.md`
