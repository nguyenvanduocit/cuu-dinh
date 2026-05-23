# `docs/content/` — Đan Kiếp universe & design lens (Tier 1)

> **System-prompt extension cho AI co-pilot** khi author bất kỳ entity nào trong `docs/content/`.
> File này KHÔNG nói về folder structure / file format / frontmatter schema (đó là `README.md` + `docs/superpowers/specs/2026-05-20-per-entity-content-bundle-design.md`).
> File này là **domain knowledge + design lens + lore voice** — bộ "kính" AI đeo vào trước khi đụng vào 1 design.md/lore.md/prompt.md.

---

## Đan Kiếp — thế giới

Đan Kiếp (丹劫 — "kiếp nạn của đan đạo") là thế giới huyền huyễn/tu chân Trung Hoa fantasy. Lục địa là **Cửu Châu Đan Vực** — chín châu của đan đạo. Người chơi đóng vai **đạo sĩ luyện đan** kế thừa **Lò Luyện Đan tổ truyền**, hành tẩu giang hồ vì đan đạo, gặp tông môn, vào bí cảnh, đối diện tâm ma, vượt thiên kiếp.

Backstory cốt lõi: thất bại của **Cửu Chuyển Kim Đan** thượng cổ — đan kiếp lớn nhất lịch sử — sinh ra **Hỗn Nguyên Tâm Ma Vương**. Tiếng đếm "chuyển thứ chín" vọng từ thời ấy đến giờ; nhiều bí ẩn của Lò player gắn vào đó.

Mỗi linh đan player luyện đều mang rủi ro đan kiếp riêng (bể đan, thiên kiếp giáng). Game = chuỗi đan kiếp player phải vượt; mỗi pháp trận = một thử thách đan đạo có chết người.

> **Authoring implication**: mọi entity phải sống được trong universe này. Tên, lore, art, hành vi cơ học — tất cả phải nhuốm vị tu chân/đan đạo. Western fantasy framing (mage, dungeon, boss) bị từ chối ở presentation layer.

---

## Vocabulary cốt lõi — AI phải nội hoá

| Hán-Việt | Nghĩa game | Đừng nhầm với |
|---|---|---|
| **Linh khí** | Pháp bảo gắn vào pháp trận; va đập với linh lực sinh hiệu ứng. Item analogue. | "Item" generic — linh khí có hồn, có lai lịch, có chủ cũ. |
| **Linh đan** | Viên đan đang refine trên board — objective trung tâm 1 pháp trận. Quality scale ngũ hành. | "Bóng/banh" — linh đan = mục tiêu, không phải đạn. |
| **Linh lực ngũ hành** | Bóng nguyên tố rơi/bắn trong pháp trận. 5 màu = 5 hành. | KHÔNG phải linh đan. Đan #14 lock điều này. |
| **Pháp trận** | Board chiến đấu — không gian thuật pháp luyện đan. 5-8 ván + 1 boss = 15-20 phút. | "Level" / "stage" — pháp trận là không gian linh thiêng, không phải map flat. |
| **Lò Luyện Đan** | Equipment của player — 8 slot (Đỉnh, Thân, Đế, Quai L/R, Nắp, Khắc Phù, Đồ Sương L/R, Dây Phong Ấn). | "Inventory" — Lò là tổ truyền, tự thân có hồn. |
| **Tâm ma** | Thử thách nội tại — boss/affix gây vọng tưởng, phản đòn người tu. | "Mental debuff" — tâm ma có ý chí riêng, có thể đối thoại. |
| **Thiên kiếp** | Calamity bên ngoài — sét, lửa, ngũ hành nghịch phong. Boss tier T14-T16. | "Boss fight" — thiên kiếp là trừng phạt của trời cho người luyện đan vượt phận. |
| **Tông môn** | Phái tu luyện (Thái Cực Đan Môn, Nhật Nguyệt Hợp Bích…). 5 faction. | "Guild" / "clan" — tông môn có đạo thống, có truyền thừa, có cấm địa. |
| **Bí cảnh** | Không gian phụ — di tích thượng cổ, long huyệt, tâm ma chi địa. Emergent composition. | "Dungeon" — bí cảnh có biệt vực không-thời-gian riêng. |
| **Đan kiếp** | Kiếp nạn của đan đạo — bể đan, tẩu hoả, ngũ hành nghịch loạn. | "Game over" — đan kiếp là test thiên cơ, không chỉ là lose-state. |

Khi viết display name / lore / prompt, **dùng từ Hán-Việt trên thay vì English equivalent**. Code identifier vẫn English (xem locked decision #27).

---

## Ngũ Hành — combat/cosmology layer, không phải watermark thẩm mỹ

Ngũ Hành là grammar của **combat math, linh lực, passive tree, affix synergy, pháp trận bias** — không phải dấu hiệu bắt buộc để một asset "trông tu đạo".

```
Mộc (wood)  → Hoả (fire)  → Thổ (earth) → Kim (metal) → Thuỷ (water) → Mộc …    [tương sinh]
Mộc → Thổ, Thổ → Thuỷ, Thuỷ → Hoả, Hoả → Kim, Kim → Mộc                          [tương khắc]
```

**Damage formula** = ngũ hành tương sinh/tương khắc + intensity (velocity × charge × level). Locked decision #16.

**Authoring implication theo context**:

- Entity có mechanic/lore thật sự elemental (linh lực, passive node, affix elemental, currency elemental, Ngũ Hành Tổ, region/pháp trận element-biased) → dùng element identity, đọc `style/element-tokens.md`.
- Entity không có element role rõ (NPC thường, crafting surface, neutral item, UI panel, lore scene, vendor, mentor) → thể hiện tu đạo bằng đan đạo, tông môn, pháp khí, phục sức, dấu chu sa, bùa giấy, lò cổ, khói hương, chất liệu và câu chuyện.
- Art prompt chỉ đưa element visual khi `design.md`/category context chứng minh element là subject thật; không dùng element như texture trang trí chung.
- Build path vẫn xoay quanh ngũ hành cluster (tu Mộc đi với affix Mộc, passive Mộc start, pháp trận có element Mộc bias), nhưng visual language của toàn game rộng hơn Ngũ Hành.

KHÔNG có element thứ 6. Nếu cần "ngoài ngũ hành" → dùng **Vô Cực** (neutral/chaos) — locked decision #25 (Đan Pháp 10 variants include Vô Cực).

---

## Design philosophy — PoE depth + tu chân theme

| Pillar | Nghĩa khi authoring |
|---|---|
| **Depth-first, không cắt scope** | Mỗi entity phải đứng riêng với mechanics đủ sâu cho theory-crafting. Không "đơn giản hoá để dễ làm". |
| **Gambling tradeoff** | Mọi entity có cơ hội gamble → fail state thực sự đau (mất affix), nhưng KHÔNG brick item (locked #4 Pain A). |
| **Single-linh-đan progression** | 1 viên duy nhất refined liên tục qua 5-8 ván + boss (locked #18). Mọi entity phải support arc này — fail = bể linh đan, không phải Lò chết (locked #19). |
| **Emergent composition** | Đan Pháp + Nguyên Liệu + Đan Dược + Tâm Ma → bí cảnh tự sinh (locked #23, #24). 180K+ combination. Đừng enum bí cảnh. |
| **Atlas-only endgame** | KHÔNG roguelike song song (locked #3). Atlas tree T1-T16 + Cấp Vô Cực endless (#11, #7). |
| **Mobile portrait one-hand** | Touch primary, viewport ~390×844. UI khung 3 vùng (locked #31). Mọi entity art + interaction phải readable ở format này. |

> **Authoring stance**: AI là **design partner**, không phải transcription engine. Đề xuất mechanic, gọi out balance risk, propose synergy. Đừng chỉ điền field.

---

## Lore voice — huyền huyễn texture

Quy tắc:

- **Hán-Việt naturally** — không lạm dụng tới mức khó hiểu, không western-flat tới mức mất chất.
- **Image-rich** — lore = visual + sensory. "Đỉnh trầm hương rỉ khói tím, mỗi giọt đan dược nhỏ xuống vang tiếng chuông xa" > "Trầm hương đỉnh tăng 5% quality".
- **Concrete, not abstract** — lore phải có nhân vật, có địa danh, có sự kiện cụ thể. Tránh "Long Long Trước Đây" generic.
- **Có lai lịch** — pháp bảo có chủ cũ; linh đan có nguồn gốc; tông môn có đạo thống. Mỗi entity là kết quả của một câu chuyện cũ.
- **Tu chân terminology**: pháp bảo, tu sĩ, tông môn, đạo thống, đan đạo, đan phương, đan thất, bế quan, kết đan, ngộ đạo, độ kiếp, tẩu hoả nhập ma, phi thăng.

**Western fallback BAN**:

| KHÔNG (BAN) | DÙNG |
|---|---|
| Mage | Đạo sĩ / Tu sĩ |
| Dungeon | Bí cảnh / Di tích / Long huyệt |
| Boss | Thí luyện / Tâm Ma Vương / Thiên Kiếp |
| Quest | Sự kiện / Cơ duyên / Đạo trình |
| Spell | Pháp thuật / Đạo pháp / Thần thông |
| Inventory | Hành nang / Càn Khôn Đại |
| Stats | Thuộc tính / Tu vi / Đạo hành |
| Item | Linh khí / Pháp bảo / Đan dược |
| Level up | Tinh tiến / Đột phá / Tu vi tăng |

---

## 3-layer architecture (Forever / Map / Match) — entity sit ở đâu?

| Layer | Persistence | Entity ở layer này | Authoring focus |
|---|---|---|---|
| **Forever** | Account-persistent | Character, Lò Luyện Đan equipped, passive tree allocation, atlas progress, ascendancy | Lore arc người chơi, identity-shaping decisions |
| **Map** | Pháp-trận-persistent | Đan Pháp đã chọn, Nguyên Liệu/Đan Dược splash, Tâm Ma mod, atlas T1-T16 entry | Tradeoff entry economy, gambling surface, build expression |
| **Match** | In-game-only | Linh khí, linh đan đang refine, linh lực ngũ hành, affix proc, currency drop | Moment-to-moment feel, physics interaction, visual feedback |

Khi author 1 entity, **biết nó sit ở layer nào** → biết audience reads nó khi nào → biết tone + density phù hợp.

---

## 6 trụ gambling — surface mọi entity đụng vào

Locked decision #12. Mỗi entity nên hiểu vai trò trong gambling system:

1. **Đan dược** — currency consumable, modify linh khí/Lò. Risk: low-mid.
2. **Đạo Quán** — vendor random offer. Risk: low (chỉ tốn currency).
3. **Tâm Ma Mod** — corruption mod, mutate entity vĩnh viễn. Risk: high (cứng tay).
4. **Phong Ấn** — lock affix, prevent reroll. Risk: mid (mất chỗ affix khác).
5. **Pháp Trận Tử Sinh** — pháp trận biến thể chết-sống. Risk: variable, reward variable.
6. **Thiên Cơ Quẻ** — divination, peek future drop. Risk: low (chỉ info), reward variable.

Authoring → mỗi gambling entity phải state: trụ nào, risk level, fail state, reward arc.

---

## Authoring intent

Khi AI author 1 entity (design.md / lore.md / prompt.md):

1. **Đọc cascade context trước** — Tier 1 (file này) → Tier 2 (category là gì) → Tier 3 (sub-type là gì) → tham khảo 3-5 entity sibling hiện có.
2. **Position trong universe** — entity này thuộc layer nào (Forever/Map/Match)? Element nào? Tông môn/region nào (nếu có)? Trụ gambling nào (nếu có)?
3. **Design lens trước, format sau** — quyết định mechanic + lore + visual feel trước; điền frontmatter sau. Format spec ở README + per-entity bundle spec.
4. **Cross-system synergy** — entity mới có thể synergy/anti-synergy với entity hiện có nào? Build path nào emerge?
5. **Tu chân voice** — display name + lore + prompt phải pass "đọc lên có như Tu Tiên World không?" test.

---

## Anti-patterns — về **thinking pattern**, không phải file format

- ❌ Author bằng western-fantasy mindset (D&D, WoW). Mỗi đụng vào entity phải reset não về tu chân first.
- ❌ Author entity isolated. Không check sibling, không check synergy, không check element axis → entity mồ côi.
- ❌ Generic lore ("an ancient artifact wielded by a forgotten master"). Lore phải có **tên riêng** (chủ cũ ai? Tông môn nào? Năm nào? Sự kiện gì?).
- ❌ Cắt scope mechanic vì "phức tạp khó implement". Đây là Dream Game. Mechanic phức tạp = depth = good.
- ❌ Đề xuất feature ngoài 32 locked decision. Lock decision ở `/CLAUDE.md` là contract.
- ❌ Western terminology trong display name / lore / prompt ("Mage", "Boss", "Dungeon").
- ❌ Gắn hoặc bỏ element sai context. Entity thật sự elemental phải thể hiện mechanic/lore Ngũ Hành rõ; entity neutral dùng identity đan đạo/tông môn/pháp khí riêng.
- ❌ Đặt **file-format rule / folder rule** vào CLAUDE.md (tier nào cũng vậy). Đó là README + per-entity bundle spec territory.

---

## Reference (format, not lens)

| Cần biết | File |
|---|---|
| Folder structure, file naming, "how to add entity" workflow | `README.md` cùng cấp |
| Frontmatter schema, design.md/lore.md/prompt.md file format | `docs/superpowers/specs/2026-05-20-per-entity-content-bundle-design.md` |
| Enum vocabulary (water/fire/…, prefix/suffix/implicit, etc.) | `enums.md` cùng cấp |
| Art DNA tokens, style suffix, palette | `style/` cùng cấp |
| English-ID dictionary cho slug | `docs/superpowers/specs/2026-05-20-naming-convention-pivot.md` |
| Cascade hierarchy design + tier templates | `docs/superpowers/specs/2026-05-23-claude-md-cascade-hierarchy-design.md` |
| Project-level locked decisions + golden rules | `/CLAUDE.md` |
