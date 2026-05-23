# Currency `corruption-mod` — tâm ma mutate vĩnh viễn (Tier 3)

> Tier 3 cho `currency/corruption-mod/`. Cascade từ root → Tier 1 → `currency/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

`corruption-mod` = **tâm ma chú văn / hỗn nguyên đan** — currency mạnh nhất, nguy hiểm nhất. Trong tu chân lore = đan dược kết tinh từ **tâm ma năng lượng** / chú văn tà phái — mutate pháp bảo vĩnh viễn. Sau khi áp → không thể undo. Player gambling: high-reward, high-risk asymmetric.

PoE analog: vaal orb, fracturing, eldritch currency. Trong universe: **Tâm Ma Vương** + tà phái + Hỗn Nguyên hồn → nguồn corruption-mod.

---

## Game role specific

- **Risk level**: **HIGH** — high-reward asymmetric MUST.
- **Mutate vĩnh viễn**: locked #4 Pain A NGOẠI LỆ — corruption-mod có thể brick aspect (vd specific affix), nhưng KHÔNG brick item full.
- **Drop pool**: **T10+ map** (late-game gating).
- **Trụ gambling**: trụ #3 Tâm Ma Mod (high-risk lane).

---

## Design constraints

- Corruption-mod MUST có **risk/reward asymmetric explicit** trong frontmatter (`riskLevel: high`, `rewardMultiplier: N`).
- Effect MUST có **fail state đau** rõ (vd "có thể seal affix trail forever", "ngẫu nhiên đảo prefix thành suffix").
- KHÔNG brick item full (vẫn equip được, chỉ aspect bị mutate / mất / corrupted).
- Lore body explicit **tâm ma context**: "Tà phái kết chú từ tâm ma năng lượng để ép pháp bảo ngộ tà đạo".

---

## Lore motifs

- Material: tâm ma hồn năng lượng, chú văn tà phái, hỗn nguyên đan tinh, ác linh tinh dịch.
- Visual: viên đan màu **dark purple / blood crimson / ám tím / vô tướng**. Aura nguy hiểm.
- Tone: ominous + powerful + tempting. Player **biết mình đang gambling lớn**.

---

## Cross-references

- **Items / Affixes**: corruption-mod áp lên item / affix → mutate.
- **Bosses Tâm Ma type** (T6-T13): corruption-mod drop từ Tâm Ma boss (cross-ref `bosses/`).
- **Factions tà phái**: corruption-mod tạo bởi tà phái historical context.
- **Currency Phong Ấn** (trụ #4): có thể seal corruption-mod outcome (prevent further mutate).

---

## Anti-patterns

- ❌ Corruption-mod chỉ buff không debuff — vi phạm risk asymmetric (sai identity).
- ❌ Mutate reversible cheap — vi phạm vĩnh viễn.
- ❌ Brick item full (item không thể equip) — vi phạm Pain A scope (chỉ brick aspect, không item).
- ❌ Drop common / T1-T5 — sai gating (corruption MUST T10+).
- ❌ Risk asymmetric không explicit trong frontmatter — sai contract.
- ❌ Lore generic "powerful currency" — MUST có tâm ma / tà phái context.
- ❌ Visual không ominous — phá cảnh báo player gambling lớn.
