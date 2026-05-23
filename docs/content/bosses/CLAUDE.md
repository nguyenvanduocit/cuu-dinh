# Bosses — thí luyện đan kiếp (Tier 2)

> Tier 2 cho category `bosses`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Bosses trong universe

Boss = **thí luyện player phải vượt** trong pháp trận. KHÔNG phải "boss monster" generic. Mỗi boss = **một đan kiếp player đối diện** — dị tượng giáng sinh, tâm ma từ chính tâm player, hoặc thiên kiếp từ trời.

**3 boss type** (locked #20):

| Type | Tier range | Identity | Mechanic signature |
|---|---|---|---|
| **Dị Tượng** | T1-T8 | Beast cấp thấp, dị thú, yêu ma, di vật cấm chế (có thân thể) | Physical body + AOE attack pattern |
| **Tâm Ma** | T6-T13 | Thử thách nội tại, boss có ý chí, có thể đối thoại với player | Mental phase + multi-form + dialogue trigger |
| **Thiên Kiếp** | T14-T16 + endgame | Calamity trời giáng, không có "thân thể", form ngũ hành nghịch | Environmental hazard + nghịch-ngũ-hành waves |

**Quy mô**: 17 boss instance phân theo tier.

---

## Design principles

- Boss MUST có **lore arc** — vì sao xuất hiện ở pháp trận này? Từ đâu? Có khế gì với player?
- **Mechanic boss khác type**:
  - Dị Tượng = HP bar visible + physical body + element-tagged attack.
  - Tâm Ma = mental phase (không HP truyền thống) + multi-form + dialogue có thể trigger event.
  - Thiên Kiếp = environmental hazard pure + cycle nghịch ngũ hành.
- **Boss tier alignment map tier** — boss T14 không spawn ở map T5; boss T2 không ở map T14. Verify per spec.
- Mỗi boss có **unique drop định danh** (cross-ref `uniques/`).
- **Arena alignment**: boss spawn ở `arenas/` geometry phù hợp type.

---

## Lore voice

- **Dị Tượng**: bestiary feel + nguồn gốc cụ thể (di vật ai phá cấm chế? Yêu ma từ cấm địa nào? Tu sĩ tẩu hoả biến thành?).
- **Tâm Ma**: psychological + có thể nói chuyện. Voice phản chiếu player — fear, doubt, ambition, regret. "Mi tu đan đạo vì cái gì?" cứng hơn raw stats.
- **Thiên Kiếp**: cosmic + impersonal. Không có "ai" — chỉ "kiếp" hành. Voice = miêu tả hiện tượng, không dialogue.

---

## Element/rarity expression

- Boss element identity drive attack pattern color + arena ambient.
- High-tier boss có signature effect (cross-ref `effects/`).
- Boss visual: scale tier (T8 boss visible LỚN hơn T2; T16 thiên kiếp = environmental, không scale theo size).

---

## Cross-system relationship

- **Maps**: boss attach pháp trận tier-appropriate. Cross-ref qua frontmatter `bossInstance`.
- **Arenas**: boss spawn ở arena geometry riêng (boss type → arena type).
- **Currency boss-modifier**: change boss behavior in-pháp-trận (cross-ref `currency/boss-modifier/`).
- **Uniques**: boss drop định danh.
- **Acts**: boss campaign chính ở Acts (Đan Kiếp Vương climax Act 5 giả thuyết, verify).
- **Factions**: boss có thể là tà phái member / cấm địa guardian / historical antagonist.
- **Tracks**: per-boss-type theme track (Dị Tượng combat, Tâm Ma dissonance, Thiên Kiếp cosmic).

---

## Sub-grouping (Tier 3) — N/A

17 entity. Dưới ngưỡng. Stay flat (boss type field trong frontmatter định danh).

---

## Anti-patterns

- ❌ Boss generic "big monster". MUST có lore arc + type identity.
- ❌ Tier mismatch (Tâm Ma boss ở T2 map, Thiên Kiếp ở T5).
- ❌ Mechanic không khớp type — Thiên Kiếp có "HP bar" như Dị Tượng = sai.
- ❌ Drop random — boss MUST có unique drop định danh.
- ❌ Tâm Ma không có voice / dialogue trigger — sai identity (Tâm Ma = đối thoại được).
- ❌ Boss attack pattern element-neutral — element identity drive attack visual + damage type.
