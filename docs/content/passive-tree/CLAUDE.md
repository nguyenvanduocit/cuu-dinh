# Passive Tree (Tinh Điểm) — đạo hành xuyên ngũ hành (Tier 2)

> Tier 2 cho category `passive-tree`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Tree trong universe

Tinh Điểm = passive tree progression — **đạo hành của đạo sĩ**. Mỗi node = 1 cảnh giới nhỏ player ngộ ra trên đường tu. KHÔNG phải "talent tree" generic — node là cảnh giới đã chứng đắc, có ghi vào kinh sách đạo môn.

**Quy mô**: 150 node total, 5 Ngũ Hành starts (Mộc / Hoả / Thổ / Kim / Thuỷ — locked #9). Cap level 100, sau đó **Cấp Vô Cực** endless paragon-like (locked #7).

3 node type:

- **small** — base node, 1 stat bump nhẹ. Travel + minor boost.
- **notable** — mid node, named effect. Định build path cluster.
- **keystone** — game-changing rule rewrite. Vd "Vô Lượng Mộc" — mọi linh lực treat as Mộc on board (giả thuyết, để minh hoạ); "Hoả Vọng Bản" — không thể crit nhưng +200% intensity Hoả.

---

## Design principles

- Mỗi node MUST có **identity ngũ hành** (trừ rare neutral connector). Element = mood + mechanics + visual.
- **Path từ start element → cross-element pivot late** (sau notable). Encourage multi-element build trong endgame, không chỉ pure-element loop.
- **Notable + keystone = build-defining**; small = travel + minor boost. Tỉ lệ ≈ 100 small : 35 notable : 15 keystone.
- **Cluster** (`<element>-<type>` pattern, vd `water-small`, `wood-notable`, `fire-keystone`) = group node theme. Cluster name MUST match pattern.
- **Connections (graph edges)** form path; node phải reachable từ start element qua chain hợp lý. Orphan node = bug.
- **Keystone rewrite rule**, không "bigger number". Keystone phải force build pivot, có tradeoff.

---

## Lore voice

- Node name = **cảnh giới tu chân**. Vd `water-small-flow-2` = "Lưu Thuỷ II"; `wood-notable-longevity` = "Trường Sinh Mạch"; `fire-small-fire-charge-1` = "Tích Hoả I".
- Notable = câu chuyện ngộ ra một cảnh giới. Keystone = đột phá lớn, ghi vào kinh điển đạo môn.
- Tone: **contemplative, đạo gia**, không "skill" / "talent" / "perk" generic.
- Lore body (nếu có) = đoạn ngắn miêu tả cảnh giới đó. "Như nước chảy đá mòn, thuận thì sống, nghịch thì tan" tốt hơn "+5% water damage".

---

## Element/rarity expression

- **Color glow node** theo element token (`style/element-tokens.md`). Water = xanh thuỷ, Fire = đỏ hoả, Wood = lục mộc, Metal = vàng kim, Earth = nâu thổ.
- **Keystone visually distinct** — lớn hơn, glow mạnh hơn, có aura ring.
- **Cluster gần nhau** trên graph layout (`pos_x`, `pos_y` frontmatter) — cùng element cluster ngồi gần nhau, tạo visual region.
- **Rarity**: small common (mua nhiều), notable mid-cost, keystone limit 1-2 per element + cost cao.

---

## Cross-system relationship

- **Affixes**: node ngũ hành buff affix cùng element (Mộc node tăng damage mọi affix Mộc trên equipped linh khí).
- **Items (linh khí)**: node buff linh khí element matching.
- **Equipment (Lò)**: node buff Lò parts cùng element (vd Khắc Phù Hoả → buff bởi Hoả node).
- **Ascendancies (Đạo Phái)**: unlock level 30, ascendancy node gắn vào main tree, expand build axis (locked #10).
- **Pháp trận**: keystone có thể affect playfield rule (vd "Vô Lượng Mộc" = mọi linh lực treat as Mộc on board).
- **Atlas (Sơn Hà Đồ)**: atlas tree RIÊNG (sau level 50, locked #11), separate file `atlas-tree/` (chưa có). KHÔNG nhầm với Tinh Điểm tree này.

---

## Sub-grouping rationale (Tier 3)

5 sub-folder = **5 Ngũ Hành element**, khớp 5 starts (locked #9):

| Sub-folder | ~Count | Identity |
|---|---|---|
| `water/` | ~30 | Thuỷ — dòng chảy, băng, thanh tẩy, slow, sink. |
| `fire/` | ~30 | Hoả — cháy, nung, burst, ignite, charge. |
| `wood/` | ~30 | Mộc — sinh trưởng, hồi sinh, dây leo, life-regen. |
| `metal/` | ~30 | Kim — sắc bén, cứng rắn, pierce, armor. |
| `earth/` | ~30 | Thổ — vững chãi, đá, defensive, root, slow. |

Node neutral (connector pure) — nếu có — sống ở `neutral/` hoặc gắn vào element gần nhất khi tự nhiên align.

Lý do split by element (không by node-type small/notable/keystone): build path tu chân là **element-first**. Player chọn Mộc build trước, rồi mới quyết travel/notable/keystone trong Mộc. AI authoring 1 Mộc node tự biết toàn bộ Mộc context (sibling node, cluster name pattern, element mood).

---

## Anti-patterns

- ❌ Node generic "+5% damage" không huyền huyễn texture name.
- ❌ Element drift (node fire trong cluster water) — break visual cohesion + lore identity.
- ❌ Notable không có named-effect — chỉ stat bump bigger → identity của notable mất.
- ❌ Keystone power-creep (chỉ "bigger number", không rewrite rule). Keystone MUST force build pivot có tradeoff.
- ❌ Connection graph tạo isolated node không reachable từ start. Orphan = bug.
- ❌ Cluster name không khớp pattern `<element>-<type>` (vd "wood-utility-X" thay vì `wood-small-X`).
- ❌ Atlas tree (level 50+) nhầm với Tinh Điểm tree (level 1-100). Hai tree riêng.
- ❌ Node Vô Cực (neutral) tạo build pure-Vô-Cực bypassing ngũ hành identity. Vô Cực = exception structural, không build path.
