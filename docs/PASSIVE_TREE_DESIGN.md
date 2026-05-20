# Tinh Điểm — Passive Tree Design

> 150-node Tinh Điểm passive tree cho Cửu Đỉnh. Topology 5-petal hoa sen + Vô Cực hub. Hỗ trợ ≥ 5 build archetype + 10 keystone reshape paradigm.

Danh sách đầy đủ: [`data/passive-tree.md`](data/passive-tree.md).

---

## 0. Locked decisions

| # | Decision | Rationale |
|---|---|---|
| T1 | **5 clusters arranged tương sinh cycle** (Kim → Thuỷ → Mộc → Hoả → Thổ → Kim) | Adjacent cluster = sinh pair → bridge biểu trưng cho mạch sinh khí. Cluster đối diện = khắc (Kim ↔ Mộc, Thuỷ ↔ Hoả) → buộc qua hub nếu muốn cross. |
| T2 | **Ascendancy junction = 1 notable per cluster** (slug `junction-<el>`) | Junction sống trong tree này, không tốn slot riêng. `dao-phai.json` reference vào id `<el>-notable-junction-<el>`. |
| T3 | **Hồn Linh keystone trên Thuỷ-Mộc bridge** (không phải hub) | Hồn Linh = echo swarm — natural fit với Vong Linh archetype (Thuỷ + Mộc bias §16). |
| T4 | **Connections lưu undirected**, generator enforce bidirectional + no orphan trước khi ghi | Schema không enforce — phải tự verify. |
| T5 | **Position dùng polar layout, output cartesian** | Renderer free choice (canvas/SVG). |

---

## 1. Topology overview

```
                       [keystone-thien-menh]
                              |
                  [kim-keystone-sac-ben]
                       (top, 12h)
                            |
   [tho-...]           [kim cluster]           [thuy cluster]
   (top-left)            (top)                  (top-right)
         \                  |                     /
          [keystone-bat-bai]   [keystone-co-bac-to]
                       \  HUB VÔ CỰC  /
                        (5 small + 4 keystone)
                       /                \
          [keystone-vo-vi]
                            |
   [hoa cluster]                       [moc cluster]
   (bottom-left)                       (bottom-right)
```

5 clusters đặt cách đều 72° quanh Vô Cực hub. Tương sinh cycle (Kim → Thuỷ → Mộc → Hoả → Thổ → Kim) đảm bảo cluster kề nhau thuộc cặp tương sinh; cluster đối diện thuộc cặp tương khắc, buộc player muốn cross-element phải qua hub trung tâm.

### Radial layout (polar → cartesian)

| Ring | r | Hosts |
|---|---|---|
| Centre | 0-40 | 5 hub-vo-cuc smalls (1 per cluster direction), 4 hub keystones |
| Starting ring | 100 | 5 starting nodes (1 per element) |
| Bridge ring | 200-240 | 5 bridge smalls + Hồn Linh keystone |
| Cluster body | 220 ± 120 | 20 smalls × 5 cluster (4 rings × 5 slots) |
| Cluster outer | 220 + 160 | 5 notables × 5 cluster |
| Cluster apex | 220 + 210 | 1 element keystone × 5 cluster |

### Cluster anchor positions

Anchor = cluster centre at `r = 220`, angles below (radians, math convention: 0 = right, -π/2 = top).

| Cluster | Angle | (x, y) approx |
|---|---|---|
| Kim   | -π/2                  | (0, -220)       |
| Thuỷ  | -π/2 + 2π/5 (-π/10)   | (210, -68)      |
| Mộc   | -π/2 + 4π/5 (3π/10)   | (130, 178)      |
| Hoả   | -π/2 + 6π/5 (7π/10)   | (-130, 178)     |
| Thổ   | -π/2 + 8π/5 (11π/10)  | (-210, -68)     |

Bridges at midpoint angles (mid-Kim-Thuỷ, mid-Thuỷ-Mộc, ...).

---

## 2. Node breakdown

| Type | Count | Distribution |
|---|---|---|
| starting | 5 | 1 per element |
| small | 110 | 20 × 5 cluster + 5 hub + 5 bridge = 110 |
| notable | 25 | 5 × 5 cluster (4 thematic + 1 ascendancy junction per cluster) |
| keystone | 10 | 5 element-aligned + 4 hub + 1 bridge (Hồn Linh) |
| **TOTAL** | **150** | |

### Element histogram

| Element | Count | Notes |
|---|---|---|
| kim | 27 | 1 start + 20 small + 5 notable + 1 keystone |
| moc | 27 | same |
| thuy | 27 | same |
| hoa | 27 | same |
| tho | 27 | same |
| null (hub + bridge) | 15 | 5 hub small + 4 hub keystone + 5 bridge small + 1 bridge keystone |

---

## 3. Cluster details

Mỗi cluster có **personality nguyên tố** riêng biệt — Kim thiên về spike/crit, Mộc về sustain/regen, Thuỷ về chain/control, Hoả về AOE/ignite, Thổ về defensive/charge. Personality này thể hiện qua 4 thematic notables + 1 ascendancy junction notable + 1 element keystone. Bridge nodes tại mid-angle giữa 2 cluster kề nhau mã hoá mạch tương sinh: Kim→Thuỷ, Thuỷ→Mộc, Mộc→Hoả, Hoả→Thổ, Thổ→Kim — cross-element chỉ khả thi sau khi player đã đầu tư vào junction notable. Thiết kế này tạo ra trade-off có ý nghĩa: chuyên sâu 1 cluster để push keystone, hay mua junction sớm để cross-element combo.

Danh sách đầy đủ notable/keystone/bridge: [`data/passive-tree.md`](data/passive-tree.md).

## 4. Hybrid bridges (5)

Mỗi bridge = 1 small node tại mid-angle của 2 cluster kề. Bridge biểu trưng mạch sinh khí giữa 2 nguyên tố:

| Bridge | Slug | Effect |
|---|---|---|
| Kim → Thuỷ | `kim-thuy-bridge-1` | +8% intensity tương sinh Kim → Thuỷ chain hop |
| Thuỷ → Mộc | `thuy-moc-bridge-1` | +8% stability heal Thuỷ tương sinh Mộc đan |
| Mộc → Hoả | `moc-hoa-bridge-1` | +8% AOE radius khi Hoả linh lực được nuôi bởi Mộc charge |
| Hoả → Thổ | `hoa-tho-bridge-1` | +8% charge accumulation khi Hoả convert sang Thổ |
| Thổ → Kim | `tho-kim-bridge-1` | +8% crit chance Kim sau khi linh lực qua linh khí Thổ |

Bridge small node connects 2 ascendancy junction notables (cluster outskirts), nên muốn cross-element phải mua xong junction trước → forced choice giữa lên ascendancy hay đi vòng qua bridge.

---

## 5. Vô Cực hub (centre)

Hub = 5 small + 4 keystone, đặt sát origin (`r ≤ 40` cho small, `r = 80` cho keystone). Mỗi hub small kết nối với starting node của 1 element → entry point qua starting:

| Hub small | Effect | Connects to |
|---|---|---|
| `hub-vo-cuc-1` | +3% intensity all Ngũ Hành | kim-start |
| `hub-vo-cuc-2` | +3% stability max linh đan | thuy-start |
| `hub-vo-cuc-3` | +3% quality gain linh đan | moc-start |
| `hub-vo-cuc-4` | +3% charge gain all linh khí | hoa-start |
| `hub-vo-cuc-5` | +5 Lò Thọ | tho-start |

Hub smalls form a ring connected to each other → cross-cluster movement qua hub.

Hub keystones (4): Thiên Mệnh, Cờ Bạc Tổ, Vô Vi, Bất Bại — paradigm-shift không gắn nguyên tố cụ thể.

---

## 6. Build archetype routes

Mỗi archetype dưới đây có path khả thi qua tree với 3+ notable + 1 keystone primary.

### 6.1 Sát Thủ (Kim → Hoả, Tử Vi/Thái Cực)
Path: `kim-start` → kim smalls → `kim-notable-tu-sat` + `kim-notable-thien-loi` + `kim-notable-kim-quang` → `kim-keystone-sac-ben` → (junction-kim) → bridge `tho-kim-bridge-1` reverse (or hub) → hoa notables `hoa-notable-phung-hoang` + `hoa-notable-cuu-tieu-loi`.
- **Primary keystone**: Sắc Bén
- **Secondary**: Liệt Hoả (Hoả crit cháy combo)
- **Hub flex**: Thiên Mệnh (Cờ Bạc Tổ nếu chạy nhiều Phong Ấn)

### 6.2 Pháp Sư (Hoả → Thuỷ, Cửu Âm/Vô Cực)
Path: `hoa-start` → hoa smalls → `hoa-notable-phung-hoang` + `hoa-notable-liet-tam` + `hoa-notable-cuu-tieu-loi` → `hoa-keystone-liet-hoa` → hub → `thuy-start` → `thuy-notable-thuy-trieu-trieu` + `thuy-notable-thuy-tinh` → `thuy-keystone-thuy-trieu`.
- **Primary keystone**: Liệt Hoả
- **Secondary**: Thuỷ Triều, Vô Vi (auto-pilot fireworks build)

### 6.3 Hộ Pháp (Thổ → Mộc, Thái Cực)
Path: `tho-start` → tho smalls → `tho-notable-tho-truong-son` + `tho-notable-tho-kim-cuong` + `tho-notable-tho-bach-quy` → `tho-keystone-trong-son` → bridge tho/kim avoid → hub → `moc-start` → `moc-notable-truong-sinh` + `moc-notable-sinh-co` → optional `moc-keystone-sinh-soi`.
- **Primary keystone**: Trọng Sơn
- **Secondary**: Bất Bại (Lò Thọ tank build cho T15+)

### 6.4 Thương Nhân (Mộc → Kim, Tử Vi)
Path: `moc-start` → moc smalls → `moc-notable-moc-quality` + `moc-notable-thanh-long` → `moc-keystone-sinh-soi` → bridge `tho-kim-bridge-1` or hub → `kim-start` → `kim-notable-kim-quang` (cluster amplifier).
- **Primary keystone**: Cờ Bạc Tổ (hub) — anti-brick econ
- **Secondary**: Thiên Mệnh (preview loot drops) + Vô Vi (+50% loot)

### 6.5 Vong Linh (Thuỷ → Mộc, Linh Sơn)
Path: `thuy-start` → thuy smalls → `thuy-notable-thuy-tinh` + `thuy-notable-thuy-trieu-trieu` → `thuy-keystone-thuy-trieu` → bridge `thuy-moc-bridge-1` → **Hồn Linh** keystone → `moc-keystone-sinh-soi` → moc notables for sustain.
- **Primary keystone**: Hồn Linh (echo swarm)
- **Secondary**: Thuỷ Triều + Sinh Sôi (max linh lực count on board)

### 6.6 Hybrid: Crit Pháp Sư (Kim → Hoả → Thuỷ, multi-cluster)
Niche but viable: Sát Thủ base + thuy-tinh branch chain for crit propagation. Uses Sắc Bén + Liệt Hoả + Thuỷ Triều (3 keystone — only possible nếu hyper-focus).

### 6.7 Hybrid: Hộ Pháp Vong Linh (Thổ → Mộc → Thuỷ)
Echo + tank: Trọng Sơn + Hồn Linh + tho-notable-bach-quy. Slow build, very high stability ceiling.

---

## 7. Keystones

10 keystones chia thành 2 nhóm theo thiết kế: **element-aligned** (5 cái, mỗi cluster apex) và **paradigm-shift** (4 hub + 1 bridge). Element keystones khuếch đại personality nguyên tố của cluster — Sắc Bén (Kim) đẩy crit ×3, Sinh Sôi (Mộc) nhân linh lực, Thuỷ Triều tích velocity, Liệt Hoả bật ignite, Trọng Sơn bất tử vs Phong Ấn. Hub keystones không gắn nguyên tố: Thiên Mệnh (loot preview), Cờ Bạc Tổ (anti-brick), Vô Vi (loot +50% đổi auto-play), Bất Bại (tank Lò Thọ). Hồn Linh trên bridge Thuỷ-Mộc là ngoại lệ — không phải element nhưng gắn với cặp tương sinh cụ thể. Mọi keystone đều có trade-off bắt buộc: không có free power, mỗi paradigm-shift đổi chác rõ ràng.

Danh sách đầy đủ slug/tên/effect/trade-off: [`data/passive-tree.md`](data/passive-tree.md).

---

## 8. Acquisition & respec (from spec §12.4-12.5)

- 1 point per level (cap 100 ⇒ 100 points)
- +5 Atlas keystone reward, +5 Đạo Phái quest ⇒ 110 / 150 nodes → forced choice
- Free respec đến level 50, sau đó 1 Đan Tẩy per point

---

## 9. Connection topology rules

Generator wires undirected edges via these rules (see `tools/passive-tree-gen/generate.ts` §7):

1. **Starting node** → 5 inner-ring (ring 0) smalls of its cluster
2. **Cluster smalls** → 4-ring × 5-slot grid:
   - Ring connections: within each ring of 5, connect slot i ↔ slot i+1 (non-wrapping)
   - Spoke connections: ring r slot s ↔ ring r+1 slot s
3. **Cluster notables** (5 outer fan):
   - Each notable connects to its corresponding outer-ring small
   - Adjacent notables (i ↔ i-1) connect
4. **Element keystone** → middle 3 notables of cluster
5. **Hub smalls** → ring among themselves (5 nodes), each links to 1 starting node
6. **Hub keystones** → 2 nearest hub smalls
7. **Bridge smalls** → 2 ascendancy junction notables (one per adjacent cluster)
8. **Bridge keystone Hồn Linh** → Thuỷ-Mộc bridge small + Thuỷ keystone + Mộc keystone

Generator asserts:
- Exactly 150 nodes, exact type histogram
- Unique IDs
- All edges bidirectional
- No orphans
- Zod `PassiveTree.parse()` succeeds

---

## 10. Open questions / TODOs

| # | Q | Status |
|---|---|---|
| Q1 | Atlas keystone slot reservation (+5 nodes) — separate file or merged? | Defer to Atlas tree (`atlas-tree.json`, future) |
| Q2 | Đạo Phái mini-tree linkage — junction notable ID stable? | YES — `<el>-notable-junction-<el>` slugs are stable contract for `dao-phai.json` |
| Q3 | Position units — pixels or normalised? | Currently arbitrary float units. Renderer to map via viewport transform. |
| Q4 | Future expansion: nature of Cấp Vô Cực Bảng (`vo-cuc-bang.json`)? | Out of scope — separate post-100 infinite-scale tree |
| Q5 | Should small node effects scale with allocate order (notable adjacency bonus)? | NOT current scope. Flat additive effects only. Reconsider after first balance pass. |

---

## 11. Changelog

- **2026-05-19 v1**: Initial 150-node tree generated. 5 starting + 110 small + 25 notable + 10 keystone. All 10 spec §12.3 keystones implemented.
