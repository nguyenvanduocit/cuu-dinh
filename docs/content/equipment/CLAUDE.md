# Equipment (Lò Luyện Đan Parts) — pháp khí bản thân player (Tier 2)

> Tier 2 cho category `equipment`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Equipment trong universe

Equipment = **Lò Luyện Đan parts**. KHÔNG phải gear chiến đấu generic. Lò là **pháp khí bản thân player kế thừa** (tổ truyền) — gắn vào **Forever layer** (account-persistent, không reroll trong 1 map).

**8 slot Lò** (locked #8):

| Slot | Vai trò | Identity |
|---|---|---|
| **Đỉnh** (top finial) | Tích linh khí nhô lên đỉnh Lò | Define ngũ hành affinity primary |
| **Thân** (body) | Main body cauldron | Define capacity + structural stat |
| **Đế** (base) | Foundation | Define stability + resist |
| **Quai L** (handle left) | Tay trái | Hand control mod |
| **Quai R** (handle right) | Tay phải | Hand control mod |
| **Nắp** (lid) | Lid, seal/contain | Define seal mechanism |
| **Khắc Phù** (engraved talisman) | Talisman gắn thân Lò | **Drive element bias toàn Lò** |
| **Đồ Sương L/R** (frost ornament) | Ornament đặt sương trái phải | Aesthetic + minor bonus |
| **Dây Phong Ấn** (seal cord) | Cord gắn Phong Ấn | Slot cho currency trụ #4 Phong Ấn |

(9 slot total với L/R count separate; locked #8 nói "8-slot equipment" — đếm L/R as 1.)

49 equipment parts total across slots.

---

## Design principles

- Lò = **persistent identity player**. Decisions on Lò = identity choice, không "best in slot" cycle.
- Mỗi part có **tier T1-T16** + **affix slot** (prefix + suffix).
- **Đồ Sương = aesthetic + minor bonus**. Không pure cosmetic — MUST có minor mechanical effect.
- **Khắc Phù = element specialize**. Mộc / Hoả / Thổ / Kim / Thuỷ / Vô Cực Khắc Phù → drive element bias toàn Lò.
- **Dây Phong Ấn** = slot duy nhất nhận Phong Ấn currency (locked #12 trụ #4).

---

## Lore voice

- Lò là pháp khí **có hồn, có truyền thừa**. Mỗi part có lai lịch riêng — tổ tiên player rèn / mua / cướp về.
- Tu chân voice: "Đỉnh Trầm Hương", "Thân Cửu Long Khắc", "Đế Tử Tiêu Thiết", "Khắc Phù Thanh Long Ấn", "Nắp Phượng Hoàng Triện".
- Avoid "armor stat" voice; embrace "pháp khí lineage" voice.

---

## Element/rarity expression

- Khắc Phù slot driver element identity toàn Lò.
- Other slot có thể element-tagged hoặc neutral.
- Tier rarity: Linh < Bảo < Tiên < Thần (như items).
- Visual: high-tier parts có khắc văn + glow theo element identity.

---

## Cross-system relationship

- **Affixes**: roll lên Lò parts. Lò affix có **layer riêng** trong combat-math (§7.3) — KHÔNG cùng layer với linh khí affix.
- **Currency Phong Ấn** → Dây Phong Ấn slot (slot duy nhất).
- **Items (linh khí)** = KHÔNG slot Lò. Linh khí gắn anchor pháp trận, Lò là equipment của player.
- **Passive tree**: element node buff Lò parts cùng element.
- **Forever layer**: Lò state persistent account; survive death (#2 ARPG-lite).

---

## Sub-grouping (Tier 3) — N/A

49 entity. Dưới ngưỡng >50. Stay flat (slot field trong frontmatter định danh).

---

## Anti-patterns

- ❌ Lò treat như "armor / weapon" generic. Lò = identity persistent.
- ❌ Best-in-slot cycle. Lò decisions cumulative — wear cùng Lò xuyên 100h gameplay.
- ❌ Khắc Phù không drive element identity Lò — sai identity slot.
- ❌ Đồ Sương = pure aesthetic, no bonus. MUST có minor mechanical.
- ❌ Lore part generic, không có lai lịch (tổ truyền / di vật / chiến lợi phẩm).
- ❌ Affix Lò xếp cùng layer với affix linh khí trong combat-math — sai §7.3.
