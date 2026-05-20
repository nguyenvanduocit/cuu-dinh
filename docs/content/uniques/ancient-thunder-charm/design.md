---
id: ancient-thunder-charm
ten: Lôi Phù Cổ
type: charm
element: metal
category: sustain-defensive
dropWeight: 100
dropRateHint: atlas drop, rare
---

# Lôi Phù Cổ (`ancient-thunder-charm`)

## Lược tả

Cổ vật phù chú hứng sấm: đổi thiên kiếp từ thảm họa thành đòn tấn công — nhưng để làm được điều đó, nó rút cạn sức đề kháng của linh đan trước mọi đòn bình thường khác.

## Cơ chế

Khi pháp trận có **thiên kiếp wave** (T14-T16 hoặc Đan Pháp Thiên Kiếp, combat-math §5):

- Thay vì linh đan nhận -50 stability (nếu unprotected), Lôi Phù Cổ **hứng toàn bộ sét** và chuyển hóa thành một **linh lực Lôi** cùng nguyên tố linh đan, intensity gốc của thiên kiếp ×50%.

| Tier | Intensity convert từ thiên kiếp | Stability damage từ hit bình thường |
| --- | --- | --- |
| T1 | Thiên kiếp → linh lực Lôi ×50% intensity | Tương khắc stability damage ×1.5 (không áp tương sinh/đồng hành) |
| T2 | Thiên kiếp → linh lực Lôi ×75% intensity | Tương khắc stability damage ×1.3 |
| T3 | Thiên kiếp → linh lực Lôi ×100% intensity; linh lực Lôi kế thừa charge hiện tại của chain | Tương khắc stability damage ×1.2 |

- **Linh lực Lôi**: spawn tại vị trí linh đan, bắn theo hướng ngẫu nhiên — không chắc chắn hit lại (chaos), nhưng intensity rất cao ở T16.
- **Vulnerability tương khắc**: combat-math §5 tương khắc hit = `-intensity × 0.40`. Với T1: trở thành `-intensity × 0.60`. Build thiếu element control bị tổn thương nặng hơn.
- Phù chú chỉ hứng **một lần mỗi thiên kiếp wave**; wave thứ 2 trong cùng ván (nếu có map mod đặc biệt) gây -50 stability như bình thường.

## Đánh đổi (Downside)

- **Tương khắc stability damage ×1.3–1.5**: board không element-clean sẽ nhận đòn tương khắc nặng hơn đáng kể. Ở T1: một đòn tương khắc intensity 25 gây -25×0.40×1.5 = -15 stability (thay vì -10). Nhiều đòn xấu → bể nhanh hơn bình thường.
- Build dùng Lôi Phù Cổ **không được phép lười element control**: nếu board lộn xộn element, downside vượt trội hoàn toàn benefit thiên kiếp (T16 thiên kiếp chỉ vài lần/pháp trận, tương khắc hit xảy ra liên tục).
- Không tương thích với `corruption-mask` (Tâm Ma luôn hoạt động → debuff tương khắc nhiều hơn → vulnerability ×1.5 lên cả debuff tick).

## Vì sao (WHY)

- **Convert thiên kiếp không free**: combat-math §5 Thiên Kiếp wave = -50 stability unprotected → -10 nếu Lôi Phù hứng. Đó là +40 stability saved. Compensation hợp lý là vulnerability thường xuyên với hit bình thường.
- **Vulnerability chỉ tương khắc, không tương sinh/đồng hành**: không punish build element tốt — chỉ punish sự lười biếng. Sustain-defensive category phù hợp: build phòng thủ đúng nghĩa không để tương khắc hit nhiều.
- **Linh lực Lôi intensity ×50-100%**: thiên kiếp T16 map tier ×2.5 → intensity gốc cực lớn, convert 50% vẫn là đòn khổng lồ. Balance target: T16 với Lôi Phù hứng được thiên kiếp ≈ kéo win-rate từ 45% lên ~52% (combat-math §9) — không bẻ gãy, chỉ hỗ trợ đáng kể.

## Synergy & Build

- **Archetype**: thiên kiếp farm / element control. Đạo Phái khớp nhất: **Tử Vi** (Thiên Nhãn — xem trước drop, tránh linh khí tương khắc nhờ thông tin trước) và **Thái Cực** (Vạn Pháp Dung Hoà — đa nguyên tố ổn định, giảm thiểu tương khắc hit ngẫu nhiên).
- **Combo**: `nine-grade-kasaya` (element resist) giảm thiệt hại tương khắc cơ bản trước khi ×1.5; Đan Pháp Thiên Kiếp (trigger nhiều thiên kiếp wave hơn) biến Lôi Phù thành engine tấn công chủ động.
- **Anti-synergy**: `corruption-mask` (Tâm Ma tăng tương khắc exposure → vulnerability ×1.5 đau hơn); `black-white-impermanence-charm` (50/50 ngẫu nhiên buff/debuff — không thể control element đủ sạch để tránh penalty).
- **Drop**: dropWeight 100, `atlas drop, rare` — entry point vào T14+ content, gặp đúng lúc.
