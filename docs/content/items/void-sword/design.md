---
id: void-sword
ten: Kiếm Vô Cực
type: sword
element: void
rarity: Magic
dropPool: Uncommon
tags: [void, pierce]
---

# Kiếm Vô Cực (`void-sword`)

## Lược tả

Kiếm không chọn bên — bypass toàn bộ element matrix, gây flat 50 quality damage mỗi hit. Không tương sinh, không tương khắc, không đại khắc. Đơn giản và tuyệt đối, dùng khi player không muốn đánh cược vào nguyên tố.

## Implicit

Linh lực chạm vào Kiếm Vô Cực: bỏ qua `element_factor` (§2 Layer 4 hoàn toàn), thay bằng flat **+50 quality** vào linh đan. Stability không bị ảnh hưởng (không có penalty). Không kích crit (crit chỉ áp lên quality gain từ element formula — flat +50 là constant).

**Cơ chế trong §2**: thay vì chạy qua `element_factor` matrix (§1), kiếm inject thẳng `linh_dan.quality += 50` sau khi tính `intensity` nhưng bỏ qua multiply. Intensity base vẫn tính (velocity × charge) nhưng không dùng để scale — chỉ dùng `50` flat.

Linh lực sau khi chạm kiếm: nguyên tố và charge tiếp tục bình thường cho các va chạm sau.

**Vai trò vật lý**: sword static deflector, linh lực đi qua kiếm theo góc deflect (như split nhưng không tách — chỉ 1 đường ra).

## Affix pool

Bias AffixTag `offensive` + `utility` + `chain`:

| AffixTag | Ví dụ affix | Cơ chế |
|---|---|---|
| `offensive` | Tăng flat quality | +50 → +65 (T3) flat quality/hit |
| `chain` | Pierce liên tục | Linh lực không bị deflect sau khi chạm — đi thẳng tiếp tục chain (true pierce) |
| `utility` | Áp flat stability damage | Thay quality gain: gây -20 stability thay vì +50 quality (chuyển sang damage mode — dùng tấn công linh đan địch hoặc bể mechanics) |
| `crit` | Flat + crit kích hoạt | Khi flat +50 hit: 15% chance trigger crit multi trên *hit tiếp theo* trong chain |

Tags `void, pierce` → AffixTag chủ đạo `offensive, chain`.

## Build role

**Archetype**: Vô Cực flat — build đảm bảo progress quality ổn định mà không phụ thuộc element matching. Phù hợp T1-T8 khi build chưa đủ mạnh để tối ưu element, hoặc khi linh đan element bất lợi với board hiện có.

**Đạo Phái**: **Hư Vô** (`void`) — build Vô Cực không cần element matrix; kiếm là linh khí core; **Thái Cực** (`tai-chi`) — cân bằng flat damage với element chain.

**Combo xác nhận**:
- `void-sword` + `spiritless-lantern`: hai linh khí Vô Cực — bảng "vô nguyên tố" hoàn toàn, flat damage ổn định không risk khắc.
- `void-sword` + `white-tiger-sword`: split ±30° từ kiếm Bạch Hổ → một nhánh Kim chạy element chain, nhánh kia qua kiếm Vô Cực → flat +50 guaranteed. Hybrid build ổn định + gamble.
- `void-sword` (affix pierce) + chain linh khí dài: linh lực đi thẳng qua kiếm không bị deflect, tích charge tiếp, chạm kiếm nhiều lần trong chain dài = flat +50 × nhiều hit.

**Anti-synergy**: build crit element cao (`vermilion-cauldron` + crit tree) — flat +50 không scale với crit, lãng phí layer 3-4 của §2. Thay bằng linh khí có element_factor cao hơn.
