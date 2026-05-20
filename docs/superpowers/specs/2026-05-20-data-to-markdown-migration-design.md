# Spec — Migrate `packages/data` → `docs/data` (concept-phase content authoring)

> Status: **Approved design** · Date: 2026-05-20 · Next: writing-plans → implementation plan

## 1. Bối cảnh & vấn đề

Dự án đang ở **concept phase** (pre-production). Game content hiện tồn tại ở **2 bản ghi song song**:

- `packages/data/` — 26 file CSV/JSON exhaustive, validated bởi Zod schema trong `packages/shared/src/schemas/`.
- `docs/` design docs — `CONTENT.md`, `PASSIVE_TREE_DESIGN.md`, `PHAP_TRAN_MAPS.md` liệt kê **lại** một phần cùng content đó (sample + rationale).

Hệ quả đo được:
- **2 bản ghi đã lệch nhau**: `item.ts` schema ghi 78 item, `CONTENT.md §1` ghi "60 base items", `packages/data/README.md` ghi 60. Không có nguồn đếm chính tắc.
- **Navigation aid mục**: `packages/data/README.md` vẫn mô tả convention Pinyin-Việt đã bị decision #27 khai tử (`chuong-dong`, `linh-khi.csv`) — file/slug không còn tồn tại.
- Concept phase không cần lớp structured + schema; nó thêm ma sát cho việc iterate design.

**Mục tiêu**: concept phase có **single source of truth** thuần Markdown. Toàn bộ content sống trong `docs/data/*.md` — bảng Markdown faithful, human-readable. Structured JSON + Zod schema regenerate từ `docs/data/` khi vào implementation phase.

## 2. Quyết định đã chốt

| # | Quyết định |
|---|---|
| D1 | **Faithful migration** — giữ 100% field, kể cả `weight`, pixel anchor. Không mất dữ liệu. |
| D2 | **Vị trí đích**: thư mục mới `docs/data/` mirror domain. Design docs giữ vai trò rationale. |
| D3 | **Xoá `packages/shared/src/schemas/`** — bake column spec + enum vocabulary vào header mỗi file `docs/data/*.md`. |
| D4 | **Phạm vi**: cả 26 file `packages/data/` (9 CSV + 15 JSON + README + .gitkeep). CSV là text-table → đổi sang MD pipe-table cho nhất quán. |
| D5 | **Spec gồm 2 nửa**: A (migrate data) + B (dedup design docs). Làm cả hai — chỉ làm A để content nằm 3 nơi, discoverability tệ hơn hiện trạng. |

## 3. Cấu trúc đích `docs/data/`

24 file content nguồn gộp theo domain thành **11 file** Markdown:

| `docs/data/` file | Nguồn `packages/data/` | Nội dung | Count |
|---|---|---|---|
| `README.md` | thay `README.md` (stale) | Index 11 file + enum vocabulary dùng chung + quy ước bảng | — |
| `items.md` | `items.csv` | Linh khí | 78 |
| `uniques.md` | `uniques.csv` | Cổ vật | 30 |
| `affixes.md` | `affix-prefix.csv` + `affix-suffix.csv` + `affix-implicit.csv` | 3 bảng | 80 + 80 + 30 |
| `equipment.md` | `equipment.csv` | Lò parts | 50 |
| `currency.md` | `reagents.csv` + `catalysts.csv` + `corruption-mods.csv` | 3 bảng | 20 + 30 + 12 |
| `passive-tree.md` | `passive-tree.json` | Passive node | 150 |
| `ascendancies.md` | `ascendancies.json` | Đạo phái | 5 |
| `maps.md` | `maps/*.json` | Pháp trận | 10 |
| `sets.md` | `set-bonuses.json` | Set bonus | 3 |
| `lore.md` | `lore/item-flavor.json` + `lore/npc-dialogue.json` | 2 mục prose | — |

`ascendancies.md` tách riêng (không gộp `passive-tree.md`) vì cấu trúc lồng sâu + là decision riêng (#10). Mỗi file mirror 1 domain.

## 4. Quy tắc format & faithful

**3 dạng dữ liệu nguồn → 3 cách render:**

### 4.1 CSV phẳng (items, uniques, affixes, equipment, currency)

1 bảng Markdown, 1 row/entity, **mọi cột giữ nguyên**. Ví dụ `items.md`:

```
| id | ten | type | element | rarity | implicit | dropPool | tags |
|----|-----|------|---------|--------|----------|----------|------|
| bronze-bell | Chuông Đồng | bell | metal | Common | Convert linh lực qua đây → Kim. Tạo sóng đẩy linh khí khác 80px | Common | metal, convert, push |
```

**Multi-value field** (`tags`, `compatibleItemTypes`): nguồn CSV serialize bằng `metal|convert|push`. Dấu `|` chỉ là cách CSV ngăn cách — *dữ liệu* là một danh sách. MD render comma-separated (`metal, convert, push`) → faithful với **dữ liệu**, tránh đụng dấu `|` của bảng MD.

### 4.2 JSON lồng (passive-tree, ascendancies, maps)

Object con flatten thành cột, array thành cell comma-separated. Ví dụ `passive-tree.md` (node có `connections[]` + `position{x,y}`):

```
| id | ten | type | element | cluster | pos_x | pos_y | effect | connections |
|----|-----|------|---------|---------|-------|-------|--------|-------------|
| fire-keystone-raging-fire | Liệt Hoả | keystone | fire | fire-keystone | -252.74 | 347.87 | KEYSTONE: Va chạm Hoả đánh dấu "cháy" 5s, tick damage 8% intensity/s. Trade-off: Hoả base hit -25% intensity. | fire-notable-nine-heavens-thunder, fire-notable-fire-counter-metal, fire-notable-blaze-heart |
```

`position{x,y}` → 2 cột `pos_x`, `pos_y`. `connections[]` → cell comma.

### 4.3 JSON có field prose dài (maps `specialRules`/`description`, ascendancies `description`, sets)

**Section-per-entity** (`## Tiêu Chuẩn`) gồm: bảng meta key-value + bảng con (vd anchor coords) + block prose. Không nhồi đoạn văn vào cell bảng.

- `maps.md`: mỗi map 1 section — bảng meta (`id`, `ten`, `variant`, `tierRange`, `vanCount`, `bossType`, `modifierSlots`) + bảng con anchor (`anchor id`, `x`, `y`, `elementBias`) + block `specialRules` + `description` + ASCII geometry (dời từ `PHAP_TRAN_MAPS.md §4`).
- `ascendancies.md`: mỗi đạo phái 1 section — bảng meta + innate passive + bảng con node (`prerequisites` cell comma).
- `sets.md`: mỗi set 1 section — `memberItemIds` list + bảng con bonus (`requiredCount`, `effect`).

### 4.4 Quy tắc faithful (chung)

- Field độ dài ≤ 1 câu → cell bảng. Field prose nhiều câu → block văn dưới heading entity.
- Không field nào bị bỏ. Giá trị số (kể cả pixel `position`, `weight`) giữ nguyên.
- **Header mỗi file** (thay vai trò Zod schema — "bake vào docs"):
  - Dòng provenance (file nguồn cũ).
  - **Column spec**: mỗi cột → tên, kiểu, enum hợp lệ. Đây là contract thay schema.
  - Enum dùng chung định nghĩa **1 lần** trong `docs/data/README.md` (`Element` = metal/wood/water/fire/earth/void, `Rarity`, `ItemBaseType`, `DropPool`, affix `category`…), các file khác trỏ tới.

## 5. Nửa B — dedup design docs

Sau migration, `docs/data/` là nguồn liệt kê đầy đủ. Design docs **giữ rationale, bỏ liệt kê entry**:

| Doc | Giữ (rationale) | Trim → link `docs/data/` |
|---|---|---|
| `CONTENT.md` | §0 naming conventions, §1 categories overview, §10 content scaling, §11 decision log | §2–9 (liệt kê item / cổ vật / lò parts / đan dược / nguyên liệu / set / affix / đan pháp) → đoạn rationale ngắn + link |
| `PASSIVE_TREE_DESIGN.md` | §0–2 topology, §4–6 bridges/hub/archetype, §8–11 acquisition/rules/TODO/changelog | §3 cluster details, §7 keystone full text → rationale cluster-level + link `passive-tree.md` |
| `PHAP_TRAN_MAPS.md` | §1–2 overview/design language, §5–8 reward/recipes/TODO/log | §3 variant details → rationale + link; §4 ASCII geometry → dời vào `maps.md` |

Nguyên tắc: design doc giữ phần *"vì sao"* (triết lý, vocabulary bank, archetype route, element-bias); `docs/data/` giữ phần *"cái gì"* (entry). Số lượng mâu thuẫn (60 vs 78) biến mất vì chỉ còn 1 nguồn đếm. Đường trim section cụ thể chốt khi thực thi.

## 6. Deletions & knock-on

**Xoá:**
- `packages/data/` — toàn bộ 26 file.
- `packages/shared/` — **cả package**. `src/index.ts` chỉ `export * as schemas`; xoá schemas → package rỗng. Xoá luôn `package.json`, `tsconfig.json`, `src/`.
- `packages/` rỗng → bỏ thư mục.
- `tools/passive-tree-gen/` — `generate.ts` sinh `passive-tree.json`, mồ côi sau migration. Xoá (codegen = implementation phase; `passive-tree.md` thành hand-authored; logic topology đã có trong `PASSIVE_TREE_DESIGN.md §1`). Regen tooling rebuild ở implementation.

**Config:**
- `package.json` workspaces `["apps/*","packages/*","tools/*"]` → bỏ `packages/*` → `["apps/*","tools/*"]`.
- `bun.lock` regenerate (`packages/shared` có dep `zod`).
- `tsconfig.base.json` giữ (apps/ tương lai dùng).

## 7. Cập nhật reference

- **34 file art-prompt** trỏ `packages/data/` (33 file entry + `art-prompts/README.md`): dòng `> Nguồn: packages/data/X.csv` → `docs/data/X.md` (theo bảng mapping §3). `art-prompts/README.md` các chỗ `packages/data/` → `docs/data/`.
- **CLAUDE.md**: file-structure tree (`packages/` block → `docs/data/`), dòng data-driven trong ❌ NEVER + ✅ ALWAYS, Conventions, Working modes "Content phase". Viết lại **affirmative** (mô tả trạng thái mới "content sống trong `docs/data/` Markdown" — không nhắc đường cũ, theo Positive Framing rule).

## 8. Locked Decision #29

Thêm vào bảng locked-decisions CLAUDE.md:

> **#29 — Concept-phase content authoring**: Game content (item, affix, equipment, currency, passive tree, ascendancy, map, set, lore) sống trong `docs/data/*.md` — bảng Markdown faithful, human-readable, single source of truth của concept phase. Structured JSON + Zod schema regenerate từ `docs/data/` khi vào implementation phase. Design docs = rationale + link sang `docs/data/`. Locked 2026-05-20.

Không thu hồi nguyên tắc data-driven — chỉ **sắp xếp lại thứ tự**: data-driven + Zod quay lại ở implementation. Tech stack (#26) không đổi. Mục locked #27/#28 nhắc `packages/data` là lịch sử → giữ nguyên (audit); chỉ section file-structure cập nhật theo hiện tại.

## 9. Thứ tự thực thi

1. Tạo `docs/data/` + 11 file Markdown (migrate A — faithful từ 24 file content).
2. Re-point 34 file art-prompt + `art-prompts/README.md`.
3. Dedup design docs (nửa B — `CONTENT.md`, `PASSIVE_TREE_DESIGN.md`, `PHAP_TRAN_MAPS.md`).
4. Xoá `packages/data/`, `packages/shared/`, `tools/passive-tree-gen/`.
5. Cập nhật `CLAUDE.md` (file-structure, NEVER/ALWAYS, conventions, working modes) + thêm Decision #29.
6. Cập nhật `package.json` workspaces + regenerate `bun.lock`.

Migrate (1) phải xong trước khi xoá (4).

## 10. Non-goals

- Không rebuild Zod schema / structured JSON ở concept phase — đó là implementation phase.
- Không xây content-lookup tool / cross-file validator (đề xuất ở thảo luận turn 1) — spec riêng nếu cần.
- Không đụng `apps/` (chưa tồn tại).
- Không đổi nội dung game design — chỉ đổi nơi lưu và format.

## 11. Rủi ro

- **Mất dữ liệu khi migrate**: phải verify count khớp (78/30/80/80/30/50/20/30/12/150/5/10/3) + 0 ID bịa, 0 field rớt. Đối chiếu từng file nguồn ↔ đích.
- **Pipe `|` trong text field**: `implicit`, `effect` có thể chứa `|` — escape `\|` trong cell MD.
- **Art-prompt orphan**: nếu re-point sai tên file → link gãy. Dùng bảng mapping §3 làm chuẩn.
