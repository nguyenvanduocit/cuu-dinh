# Regions — địa danh Cửu Châu Đan Vực (Tier 2)

> Tier 2 cho category `regions`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Regions trong universe

Region = **location trong lục địa Cửu Châu Đan Vực**. KHÔNG phải "biome" sinh học generic — region là **vùng có địa khí, phong thuỷ, ngũ hành bias, faction control, NPC base, di tích lịch sử**.

**Quy mô**: 10 region. Biome (rừng, núi, đảo, hoang mạc, đầm lầy, hồ, cao nguyên, ...) = frontmatter field, không phải category axis.

---

## Design principles

- Region MUST có **geographical identity** (tên, vị trí trên lục địa, biome) + **lore identity** (faction control, sự kiện lịch sử, di vật còn sót).
- **Ngũ hành bias geographical** — rừng thường Mộc, hoang mạc thường Thổ/Kim, hồ Thuỷ, núi lửa Hoả, đầm lầy Thuỷ/Thổ. Bias drive đan dược drop pool + linh khí spawn theme.
- **Faction control**: region có thể thuộc 1 tông môn (toàn lãnh thổ), contested (2-3 faction tranh chấp), hoặc lone (wild / cấm địa).
- **NPCs base** ở region (cross-ref `npcs/`).
- **Pháp trận** (maps) spawn ở region tương thích element bias.

---

## Lore voice

- **Sense of place** — tên gọi tu chân (vd "Vạn Hoa Cốc", "Long Phách Hồ", "Cửu Khúc Hoang Nguyên"), mood, đặc trưng physical, di vật còn sót.
- Voice: travelogue + history weight. "Khu vực này từ thời X, sau sự kiện Y, hiện do Z kiểm soát."

---

## Cross-system relationship

- **Acts**: traverse regions act-by-act (Act 1 starting region → Act 5 final region).
- **NPCs**: base location.
- **Factions**: control / cấm địa.
- **Maps (pháp trận)**: pháp trận spawn ở region cụ thể (thường cùng element bias). Long cung pháp trận ở region có hồ / biển; thiên kiếp pháp trận ở region núi cao.
- **Lore-entities**: sự kiện lịch sử diễn ra ở region cụ thể.
- **Items / Currency**: region-specific drop bias (cross-ref `currency/drop-bias/`).

---

## Sub-grouping (Tier 3) — N/A

10 entity. Stay flat.

---

## Anti-patterns

- ❌ Region generic biome ("forest", "desert") — MUST có tên Hán-Việt + lore.
- ❌ Floating region không link tới act / faction / lore-entity / map.
- ❌ Element bias generic ("nature" thay vì "Mộc + Thuỷ ưu thế").
- ❌ Faction control mơ hồ (vùng nào của ai? Có ai cấm vào? Vì sao?).
- ❌ Biome unrealistic juxtapose (núi lửa cạnh đầm lầy băng giá không lý do).
