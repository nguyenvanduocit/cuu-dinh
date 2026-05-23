# `style/` — Art Direction Macro Index (concept-bundle scope)

> Đầu mối vĩ mô của art direction. File này + 6 token file cùng thư mục là **SSOT phong cách**.
>
> Mọi vấn đề có 2 tầng. Art direction cũng vậy:
> - **Vĩ mô** (strategic / cross-bundle) → file này + các token file `style/`
> - **Vi mô** (bundle-specific / per-slot / per-affix-category) → bundle README (ví dụ `../equipment/README.md`, `../affixes/README.md`)

## North Star (1-câu)

**Pixel art huyền huyễn tu chân + đan đạo ritual craft + Eastward/Sea of Stars craftsmanship.**

Engine thật: **Gemini / Imagen / gpt-image / Grok** — đọc prose tốt hơn keyword. Orchestrator: skill `generate-game-art`.

## Token files (vi mô shared, không bundle-specific)

| File | Vai trò | Khi nào đọc |
|---|---|---|
| [`convention.md`](convention.md) | Compose formula + format mỗi `prompt.md` + 9 quy tắc cứng | Trước khi viết bất kỳ `prompt.md` |
| [`style-suffix.md`](style-suffix.md) | STYLE DNA (prose) dệt cuối mọi prompt + aspect→cờ engine + negative khẳng-định-hoá | Mỗi lần dán prompt |
| [`palette.md`](palette.md) | 6-color locked + 7 phẩm cấp linh đan colors + UI ratio | Khi cần named-color cho prompt hoặc UI |
| [`element-tokens.md`](element-tokens.md) | Map `element` enum → English token phrase | Chỉ khi entity/asset có element mechanic hoặc subject Ngũ Hành rõ |
| [`rarity-tokens.md`](rarity-tokens.md) | Map `rarity`/`variant` → MJ treatment + border sprite | Khi entity có rarity (items, equipment, uniques) |
| [`base-noun-dictionary.md`](base-noun-dictionary.md) | Map `type` (ItemBaseType) → SUBJECT phrase | Khi entity là item/unique hoặc affix có `compatibleItemTypes` |

## Bundle-specific art rules (vi mô local)

Subject mapping per-slot, overlay treatment per-category — sống ở bundle owner README:

| Bundle | Art rule bundle-local |
|---|---|
| `../equipment/README.md` | Furnace slot → SUBJECT mapping (10 slot) |
| `../affixes/README.md` | Rune overlay per `AffixCategory` × `AffixTag` |

> Quy tắc: nếu rule chỉ 1 bundle dùng → ở bundle README; cross-cut nhiều bundle → ở `style/` shared.

## Pipeline tóm tắt

```
Engine ảnh (Gemini / gpt-image / Grok) → concept / mood / silhouette reference
  → Aseprite / Pixelorama polish (final sprite)
```

KHÔNG export thẳng ảnh engine làm sprite game — luôn polish qua Aseprite.

## How to add new art rule

1. **Rule cross-cut 2+ bundle?** → file mới hoặc append vào `style/`.
2. **Rule chỉ 1 bundle?** → bundle README owner.
3. **Strategic shift (philosophy, palette change)?** → propose ở `style-suffix.md`/`palette.md` + lock decision.

## Provenance

Token file di trú từ art-prompt pack (Phase 1 migration, 2026-05-20). Đầu mối vĩ mô (file này) tạo 2026-05-20 khi audit global-vs-bundle scope, áp dụng nguyên tắc "mọi vấn đề có 2 tầng vĩ mô + vi mô".
