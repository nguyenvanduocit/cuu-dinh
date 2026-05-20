# `docs/art-prompts/` — Concept-art prompts chờ migrate

> Staging cho 3 category art-prompt **chưa** có content category tương ứng. Khi 3 category này lên `docs/content/`, mỗi entry tách thành `prompt.md` per-entity và thư mục này biến mất.

Mọi art-prompt của entity đã có bundle (linh khí, cổ vật, affix, lò parts, currency, passive node, set, La Hán, boss, NPC) đã thành `docs/content/<category>/<id>/prompt.md`.

## Còn lại

```
docs/art-prompts/
├── environments/   regions.md (7 biome) · boss-arenas.md (3 arena)
├── screens/        screens.md (13 concept/scene — KHÔNG phải UI layout)
└── effects/        effects.md (VFX linh lực/đan/seal/aura) · icons.md (UI icon 32×32)
```

## Cách dùng

1. Style tokens (palette, convention, suffix, element/rarity) là single source of truth tại `../content/_style/`.
2. Mở file category → mỗi entry có **Mô tả** tiếng Việt + block `/imagine` sẵn.
3. Entry đầu mỗi file có STYLE SUFFIX expanded; entry sau dùng placeholder `[STYLE SUFFIX]` → dán chuỗi từ `../content/_style/style-suffix.md`.

## Nguyên tắc

- MJ v6 = concept/mood/silhouette reference, KHÔNG phải tool sản xuất sprite final. Pipeline: MJ concept → SDXL + pixel-art LoRA sprite → Aseprite polish (`../art-direction.md §AI Asset Pipeline`).
- Không reference cấm (`../art-direction.md:234-238`): anime/manga, ukiyo-e, western fantasy, generic asian temple stock.
