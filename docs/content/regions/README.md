# `regions/` — Atlas Biome Regions

> 7 biome regions across Cuu Chau Dan Vuc.

## Design rationale

Each atlas region = 1 element biome. Regions provide the environmental backdrop for atlas maps and define element-specific drop pools, ambient audio, and visual themes.

## Entity layout

```
regions/<id>/
├── design.md   # required — biome description, element, notable locations
├── prompt.md   # optional — environment concept art MJ prompt
└── art/        # optional — generated concept images
```
