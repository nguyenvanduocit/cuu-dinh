# Effects — particle / shader visual FX library (Tier 2)

> Tier 2 cho category `effects`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).
> **Table exception**: Effects dùng `effects/table.md` (single-file), KHÔNG per-entity folder. Reasoning: ~5 effect entity, mỗi entity chỉ ngắn 1-2 dòng metadata.

---

## Effects trong universe

Effect = **particle / shader visual FX**. Mood: tu chân visual — **ink-bleed, qi flow, talisman burn, jade shimmer**. Avoid western VFX (laser, plasma, sci-fi glow, hollywood explosion).

---

## Effect categories

| Category | Vai trò | Examples (concept) |
|---|---|---|
| **Element-tagged glow** | Linh lực + linh đan + linh khí element identity | Water flow ribbon, fire burst petal, wood vine grow, metal sparkle dust, earth dust pulse |
| **Proc burst** | Affix trigger visible feedback | Văn khắc loé sáng, khế ấn xoay, phách trầm vọng glow |
| **Ambient** | Pháp trận aura, region atmosphere | Long cung blue qi mist, thiên đàn lightning thread, diêm phủ ash drift |
| **Ritual** | Lò open, đan thành, ngộ đạo | Lò flame burst, đan glow ascent, cảnh giới halo |
| **Boss-tier signature** | Per-boss signature visual | Dị Tượng claw trail, Tâm Ma mirror crack, Thiên Kiếp nghịch-ngũ-hành cyclone |

---

## Design principles

- **Tu chân visual feel** — ink-bleed (mực loang), qi flow (linh khí vận chuyển dạng ribbon), talisman burn (chú văn cháy), jade shimmer (ngọc lung linh). Avoid laser / plasma / sci-fi glow.
- **Element color align** `style/element-tokens.md`. Hoả không cyan, Thuỷ không đỏ.
- **Performance budget** mobile: **≤ 50 particles per simultaneous effect** (mobile portrait). Stack nhiều effect simultaneous nhân lên total budget — cap.
- **Duration**: proc burst < 0.5s; ritual 1-3s; ambient loop seamless.
- **Sync với SFX** — proc burst + proc SFX same frame trigger.

---

## Lore voice (brief format)

Per-effect row trong `table.md`: id, name, category, scene, visual feel, color, duration, particle budget.

---

## Cross-system relationship

- **Combat (Match layer)**: element burst khi linh lực va.
- **Affixes**: proc burst visible feedback (cross-ref `affixes/`).
- **UI screens**: subtle ambient (Lò flame breathing, atlas star shimmer).
- **Bosses**: boss-tier signature effect.
- **Arenas**: arena environmental effect (cross-ref `arenas/`).
- **SFX**: sync với proc + ritual SFX.

---

## Sub-grouping (Tier 3) — N/A

Table-only. KHÔNG per-entity folder.

---

## Anti-patterns

- ❌ Effect western VFX (laser, plasma, sci-fi neon glow, hollywood explosion). MUST tu chân ink/qi/glow.
- ❌ Element color drift (Hoả effect cyan, Thuỷ effect đỏ).
- ❌ Budget overflow mobile (> 50 particles per effect, hoặc stack nhiều effect breakthrough cap).
- ❌ Tạo per-entity folder cho 1 effect — dùng `table.md` row.
- ❌ Proc effect không sync SFX — phá visible feedback timing.
- ❌ Ritual effect duration < 1s — phá "weighty" feel của ritual.
