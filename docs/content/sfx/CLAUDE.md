# SFX — sound effect library (Tier 2)

> Tier 2 cho category `sfx`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).
> **Table exception**: SFX dùng `sfx/table.md` (single-file), KHÔNG per-entity folder. Reasoning: ~80 SFX, mỗi entity chỉ ngắn 1-2 dòng metadata, per-entity bundle overhead không đáng.

---

## SFX trong universe

SFX = **sound effect** cho action / impact / ambient / UI feedback / ritual. Library quy mô ~80 SFX. Mood: tu chân acoustic — **kim loại + ngọc + sấm + gió + cổ cầm strike**, không western combat / sci-fi.

---

## SFX categories

| Category | Vai trò | Examples (concept) |
|---|---|---|
| **Impact** | Linh lực va anchor / linh đan / linh khí | Chuông đồng vang, ngọc va, sấm nhỏ, đá va đá |
| **Proc** | Affix trigger visible feedback | Phách trầm vọng, văn khắc loé, khế ấn rung |
| **Ambient** | Pháp trận background loop | Gió cổ thành, mưa rơi mái ngói, sương vọng cổ cầm xa |
| **UI feedback** | Tap, scroll, confirm, swipe | Giấy lật, mực chấm, chuông nhẹ, mộc ngư khẽ |
| **Ritual** | Lò mở/đóng, đan dược thành, ngộ đạo | Hơi đan bốc, chuông lớn vang, nắp Lò mở khẽ |

---

## Design principles

- **Tu chân acoustic feel** — kim loại Á Đông + ngọc + sấm + gió + cổ cầm + chuông + mộc ngư. Avoid modern combat SFX (gun, sword-clash steel-on-steel western, explosion film).
- **Length appropriate**:
  - Impact < 0.5s (sharp punch).
  - UI feedback < 0.2s (subtle).
  - Ritual 1-3s (deliberate, weighty).
  - Ambient loop seamless.
- **Volume design layering**: action SFX > ambient; UI feedback subtle (không overpowering).
- **Visible feedback rule** — affix proc MUST có SFX. Player không nghe = player không biết affix trigger.

---

## Lore voice (brief format)

Per-SFX row trong `table.md`: id, name, category, scene, acoustic-feel, length, volume target.

---

## Cross-system relationship

- **Combat (Match layer)**: impact SFX khi linh lực va anchor / linh đan.
- **Affixes**: proc SFX khi affix trigger (visible feedback rule, cross-ref `affixes/CLAUDE.md`).
- **UI screens**: feedback SFX cho tap / scroll / swipe.
- **Bosses / Pháp trận / Arenas**: ritual + ambient SFX.
- **Tracks**: SFX + track layer hài hoà (track có quiet zone cho SFX punch through).
- **Effects**: SFX + particle effect sync (proc SFX cùng moment particle burst).

---

## Sub-grouping (Tier 3) — N/A

Table-only. KHÔNG per-entity folder.

---

## Anti-patterns

- ❌ SFX western (gun, sword-clash modern steel-on-steel film, explosion) — phá tu chân acoustic.
- ❌ Volume layering sai (UI feedback overpowering action SFX).
- ❌ Affix proc không có SFX — phá visible feedback rule.
- ❌ Tạo per-entity folder cho 1 SFX — dùng `table.md` row.
- ❌ Length quá dài (UI feedback 1s) — UI cần snappy.
- ❌ Ambient loop có hard cut — phải seamless.
- ❌ SFX không trace được category (không nằm trong impact/proc/ambient/ui-feedback/ritual).
