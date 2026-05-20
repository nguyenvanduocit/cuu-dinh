# Pháp Trận Maps — 10 Đan Pháp Variants

> Blueprint catalog cho 10 Đan Pháp variants (locked decision #25). Mỗi variant = một **structural container** cho bí cảnh — composition tại Sơn Hà Đồ Lệnh sẽ emerge thành unique session.

> Doc này = design rationale. Danh sách đầy đủ blueprints + anchor data + ASCII geometry: [`docs/content/maps/`](content/maps/).

---

## 1. Overview

| # | Variant | Slug | Tier | Ván | Boss | Modifier | Reward profile |
|---|---|---|---|---|---|---|---|
| 1 | Tiêu Chuẩn | `tieu-chuan` | T1–T16 | 5–8 | Dị Tượng | 0–3 | Baseline, all-purpose |
| 2 | Tử Sinh | `tu-sinh` | T8–T16 | 20 | Tâm Ma | 1–3 | Cổ Vật + Đan Pháp Cổ tier (Sanctum reward) |
| 3 | Hỗn Nguyên | `hon-nguyen` | T10–T16 | 10–30 | Tâm Ma | 2–5 | Time-scaling marathon loot |
| 4 | Thiên Kiếp | `thien-kiep` | T14–T16 | 7 | Thiên Kiếp | 0–2 | Tiên/Thánh đan promotion |
| 5 | Tâm Ma | `tam-ma` | T6–T13 | 5 | Tâm Ma | 1–3 | Personalized Cổ Vật (build-tied) |
| 6 | Cổ Đan Lò | `co-dan-lo` | T5–T14 | 2–3 | Dị Tượng | 1–4 | Currency-rich (đan dược farm) |
| 7 | Long Cung | `long-cung` | T4–T14 | 6–9 | Dị Tượng | 1–3 | Thuỷ linh khí + Long Cốt Cổ Vật |
| 8 | Cửu Tiêu | `cuu-tieu` | T6–T16 | 6–9 | Thiên Kiếp | 1–3 | Kim/Hoả intensity loot, thiên đạo build |
| 9 | Diêm Phủ | `diem-phu` | T8–T16 | 5–7 | Tâm Ma | 2–4 | Tâm Ma Mặt Nạ Cổ Vật, Tịnh Tâm đan dược |
| 10 | Vô Cực | `vo-cuc` | T16 | 50–100 | Thiên Kiếp | 3–8 | Endless escalating, Tâm Ma Vĩ Đại drops |

---

## 2. Design language

Mỗi variant có 1 **anchor layout signature** thể hiện identity gameplay của nó. Layout không chỉ trang trí — nó **buộc player chọn build pattern khác nhau** cho cùng một set linh khí.

| Variant | Layout pattern | Forces player to... |
|---|---|---|
| Tiêu Chuẩn | Lưới đối xứng 3-3-2-2 | Học đọc board cơ bản, không có pattern lock-in |
| Tử Sinh | 8-điểm packed dense | Tối ưu spot per phòng, vì sẽ regenerate 20 phòng |
| Hỗn Nguyên | 14 anchor scattered chaos | Rebuild build mỗi 3 ván khi intensity nhảy bậc |
| Thiên Kiếp | 7 anchor dọc trục đứng (kênh sét) | Chain dọc thay vì ngang, force Lôi Phù |
| Tâm Ma | 10 anchor mirror-symmetric | Build symmetric (an toàn) hoặc asymmetric (break mirror) |
| Cổ Đan Lò | 12 anchor 3 vòng concentric | Build chain ly tâm Vô Cực → Hoả → Thổ |
| Long Cung | 11 anchor curved (xương sống rồng) | Route theo đường cong, không grid |
| Cửu Tiêu | 9 anchor 3 tầng × 3 cột | Chọn lane (3 cột), build Hoả→Vô Cực→Thổ vertical |
| Diêm Phủ | 10 anchor clustered nửa dưới | Build defensive — đan ở khu vực bóp nghẹt |
| Vô Cực | 13 anchor random sample | Không có pattern — runtime regenerate mỗi run |

### Element bias philosophy

- **Tiêu Chuẩn / Vô Cực**: tất cả `null` — không bias, để player + Nguyên Liệu quyết.
- **Tử Sinh**: `null` — variant identity là sinh tử quan, không phải nguyên tố.
- **Specialized variants** (Long Cung / Cửu Tiêu / Thiên Kiếp / Cổ Đan Lò): bias đậm theo identity.
- **Diêm Phủ**: tất cả `voCuc` — schema không có `tam-ma` element; `voCuc` là proxy "không thuộc Ngũ Hành".
- **Hỗn Nguyên**: bias đủ 5 nguyên tố scattered — Ngũ Hành chain luôn khả thi nhưng phải tự route trong chaos.
- **Tâm Ma**: 4 anchor biên `voCuc` (đại diện gương phản chiếu), 6 anchor trung tâm `null` (để player build chiếm).

---

## 3. Variant details

10 variants phân thành 3 nhóm theo structural identity. **Canvas variants** (Tiêu Chuẩn, Vô Cực) không có element bias — Tiêu Chuẩn là baseline đo mọi thứ, Vô Cực là endgame không hồi kết với anchor regenerate mỗi run. **Thematic variants** (Long Cung, Cửu Tiêu, Thiên Kiếp, Cổ Đan Lò) bias đậm theo identity element/cơ chế, đặt hard constraint vào build: Long Cung lock Thuỷ/Mộc + override physics gravity/friction, Cửu Tiêu dọc 600×1800 với 3-cột lane, Thiên Kiếp kênh sét 7 anchor dọc trục + Lôi Phù bắt buộc, Cổ Đan Lò 3 vòng concentric cho currency farm. **Narrative variants** (Tử Sinh, Hỗn Nguyên, Tâm Ma, Diêm Phủ) định nghĩa loại trải nghiệm: Tử Sinh là Sanctum 20 phòng sinh tử, Hỗn Nguyên là marathon intensity escalating với bail-out windows, Tâm Ma là mirror boss read player Lò, Diêm Phủ là Tâm Ma exclusive với Ngũ Hành disabled. Layout signature của mỗi variant không trang trí — nó **buộc build pattern khác nhau** cho cùng một set linh khí.

Danh sách đầy đủ anchor coords, special rules, lore, Nguyên Liệu pairings, ASCII geometry: [`docs/content/maps/`](content/maps/).

## 5. Reward profile

> Bảng loot bias matrix — variant nào reward gì.

| Variant | Linh Khí drop | Đan Dược | Cổ Vật chance | Đan Pháp drop | Special |
|---|---|---|---|---|---|
| Tiêu Chuẩn | baseline 100% | baseline | baseline | baseline | — |
| Tử Sinh | -30% | -50% | **+200% guaranteed Cổ tier** | **+1 Đan Pháp Cổ tier** | Boss chest only after room 20 |
| Hỗn Nguyên | +scaling/wave | +scaling | +50% at 15min+ | +scaling/wave | Bail-out lock-in |
| Thiên Kiếp | -50% (no normal drops) | -50% | +30% Lôi Phù Cổ | +30% Thiên Kiếp Đan Pháp | **Tiên/Thánh đan promotion** |
| Tâm Ma | baseline | baseline | **+100% personalized Cổ Vật** | +20% | Build-tied unique |
| Cổ Đan Lò | **-50%** | **+200% đan dược** | -30% | -50% | Currency farm tốc độ cao |
| Long Cung | +50% Thuỷ linh khí | baseline | +30% Long Cốt | +20% Thuỷ Đan Pháp | Thuỷ build supplier |
| Cửu Tiêu | +30% Kim+Hoả | baseline | +20% Lôi Phù | +20% Kim Đan Pháp | Intensity build supplier |
| Diêm Phủ | -50% (no normal drops) | +50% Tịnh Tâm | **+50% Tâm Ma Mặt Nạ** | +30% Diêm Phủ Đan Pháp | Anti-Tâm-Ma items |
| Vô Cực | scaling endless | scaling | escalating | escalating | Tâm Ma Vĩ Đại drops at milestones |

---

## 6. Composition recipes (recommended)

Sample compositions ở Sơn Hà Đồ Lệnh (xem master spec §9.6):

| Goal | Đan Pháp | Nguyên Liệu | Đan Dược splash |
|---|---|---|---|
| Cổ Vật farm | Tử Sinh | Cổ Đan splash + Linh Hoa + Tâm Ma Châu | Cổ Đan |
| Đan dược farm tốc độ | Cổ Đan Lò T8 | Hoả Tinh + Tinh Tinh Thạch + Linh Hoa | Linh Đan |
| Promote đan lên Tiên | Thiên Kiếp T16 | Đèn Trời + Phong Vũ Hồn + Lôi Phù Cổ | Cửu Chuyển Đan |
| Speed farm tier-up Đan Pháp | Tiêu Chuẩn T8 | Cửu Chuyển Linh Hoa + Mưa Linh | Tử Hoàn Đan |
| Thuỷ build supply run | Long Cung T10 | Thuỷ Tinh + Long Cốt + Mộc Linh Tinh | Linh Đan |
| Self-test build | Tâm Ma T10 | Tịnh Linh Hương + Hỗn Nguyên Tâm Ma Hồn | Tử Hoàn Đan |
| Endgame leaderboard push | Vô Cực T16 | Vô Cực Thạch + Tinh Tinh Thạch ×3 + Đèn Trời | Cổ Đan |

---

## 7. Open questions

1. **Tử Sinh room generation algorithm**: 20 rooms từ 1 template — design seed mỗi phòng theo hash(player, run-id, room-idx) hay pre-defined sequence per Đan Pháp instance? Decision needed before alpha.
2. **Vô Cực anchor regeneration constraint**: 8-13 anchor random — có cần đảm bảo "always solvable" check (linh đan reachable từ spawn)? Probably yes — add runtime constraint solver.
3. **Diêm Phủ Tâm Ma channel**: schema NgHanh không có `'tam-ma'` enum value. Hiện đang dùng `voCuc` làm proxy. Cần extend enum hoặc keep proxy?
4. **Hỗn Nguyên boss promotion**: T14+ promote boss từ `tam-ma` → `thien-kiep`. Schema chỉ chấp nhận 1 bossType — runtime override OK nhưng cần document chỗ override.
5. **Long Cung physics override**: gravity/friction override per-Đan-Pháp cần engine support — Godot PhysicsServer2D set_area_param feasible? Verify trong prototype.
6. **Cửu Tiêu vertical board**: 600×1800 viewport — cần camera scrolling hay zoom-out fit screen? UX research.
7. **Tâm Ma boss generation**: runtime đọc 8-slot + Đạo Phái + top 5 keystone — define exact mirror algorithm (reverse element? reverse intensity? reverse trigger?). Spec needed.
8. **Cổ Đan Lò 3-vòng concentric placement**: hiện hard-coded 12 anchor. Consider parameterising radius cho variant tier scaling (T5 radius 200, T14 radius 280)?
9. **Vô Cực modifier cap 8**: schema hard limit. Endgame escalating beyond 8 cần plan — soft-stack effects thay vì thêm slot?
10. **Đan Pháp instance metadata**: PhapTran schema = blueprint. Cần thêm `PhapTranInstance` schema cho per-run state (rolled modifier, seed, player choices) — separate concern, defer to instance schema sprint.

---

## 8. Decision log

- **2026-05-19**: Initial 10-variant blueprint locked. Tier ranges, anchor counts, bossType, modifierSlots, geometry per variant. Layout pattern signature documented. Reward profile matrix established.
