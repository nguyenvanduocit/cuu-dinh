# `uniques/` — Co Vat (Unique Items)

> 30 Co Vat grouped by archetype role.

## Design rationale

Three archetype roles: **build-defining** (alter game mechanics entirely — e.g. reverse gravity, sacrifice linh khi), **sustain/defensive** (extend run survivability), and **chaos/risk** (power at a cost). A post-launch **Mirror tier** (3 ultra-rares, drop rate 1/50,000-1/100,000) ships v1.5+ to avoid early balance distortion. Co Vat are the primary vector for personalized drops from Tam Ma variant and build-tied rewards.

## Content scaling

v1.0: 30 uniques. Live ops: +2/month.

## Entity layout

```
uniques/<id>/
├── design.md   # required
├── lore.md     # optional
├── prompt.md   # optional
└── art/        # optional
```
