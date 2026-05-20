---
id: anomaly-wuxing
ten: Dị Tượng Ngũ Hành
type: boss
bossType: anomaly
tier: T5
element: void
phaseCount: 2
---

# Dị Tượng Ngũ Hành (`anomaly-wuxing`)

## Định danh

Dị vật hình thành khi Ngũ Hành mất cân bằng cực độ trong một bí cảnh bị phong ấn lâu năm. Không có ý thức cố định — nó **phản chiếu nguyên tố mà linh đan đang mang nhiều nhất** rồi tấn công bằng nguyên tố khắc lại. Kiểm tra liệu player có biết **đủ cả 5 nguyên tố** hay chỉ đang đánh một chiều.

Hình dạng: khối cầu hỗn nguyên 5 màu xoay liên tục, đổi màu trội khi chuyển phase element. Không có mặt, không có "ý muốn" — chỉ có phản ứng hoá học khổng lồ.

## Bậc & Bối cảnh

- **Tier**: T5 — Act 2, boss chốt chapter "Ngũ Hành Hội Tụ"
- **Win-rate target**: ~65% (mid-campaign, player cần Lò ≥ 4 slot + biết ít nhất 2 element chain)
- **Khi nào gặp**: Sau khi player mở rộng board lần đầu và thử Mộc/Kim chain. Boss buộc họ dùng ≥ 2 element khác nhau trong một ván
- **Môi trường**: Bí cảnh Ngũ Hành — board có sẵn 1 linh khí mỗi element (5 linh khí), nhưng vị trí ngẫu nhiên mỗi ván

## Phase & Pattern

### Phase 1: Ngũ Hành Tuần Hoàn (100% → 50% HP)

Boss xoay qua 5 element theo chu kỳ cố định: **Kim → Thổ → Thuỷ → Mộc → Hoả → Kim...** mỗi 12 giây đổi một lần. Element hiện tại = màu phát sáng trội.

**Công kích chu kỳ** (mỗi 6 giây, dùng element đang active):
- Bắn **2 viên linh lực** cùng element đang active, hướng thẳng về linh đan
- Nếu linh đan đang mang element **bị khắc** bởi element boss đang dùng: stability **-8** per hit
- Nếu linh đan cùng element với boss: stability +3 (tương sinh phụ — cảnh báo: tránh dùng element này để gây damage vì sẽ bị phản)

**Cơ hội phản công**: khi boss đang dùng element X, linh lực khắc X gây +50% damage lên boss HP. Player phải **đọc màu → chuyển chain** đúng lúc.

**Stability damage (§5)**: -8 per tương khắc hit — mid-range, đúng scale T5.

### Phase 2: Hỗn Nguyên Bạo Loạn (50% → 0% HP)

Boss dừng chu kỳ tuần hoàn, **mix ngẫu nhiên 2-3 element cùng lúc** mỗi 8 giây. Mỗi đợt bắn 3-4 viên linh lực hỗn tạp. Có thể tạo **đại khắc tự nhiên**: nếu 2 viên linh lực boss khác element tác động chain → linh đan nhận đại khắc (§1, stability -intensity×0.80).

**Enrage** (HP < 15%): tất cả 5 element phát sáng đồng thời, bắn 1 đợt 5 viên linh lực (mỗi viên 1 element) cùng lúc — "Ngũ Hành Tề Kích". Stability **-8×số hit trúng**.

**Stability damage tổng kết (§5)**:
- Phase 1 hit tương khắc: **-8** stability
- Phase 2 đại khắc khi chain: -intensity×0.80 (thường **-15 đến -20** ở T5 intensity)
- Ngũ Hành Tề Kích enrage: tối đa **-40** nếu dính cả 5 viên — cực hiếm

## Cơ chế đặc trưng

**Đọc Màu — Chuyển Chain** (Read-Rotate): boss liên tục thay đổi vulnerability. Player không thể "lock in" một element chain suốt ván — phải rotate theo màu boss. Boss này **punish one-trick** build cứng nhắc.

Phase 2 thêm ngẫu nhiên để tránh memrise thuần túy: player cần adapt thực sự, không chỉ học pattern cứng. Mỗi ván Phase 2 khác nhau.

## Counter-play

**Element**: Không có element "tốt nhất" — boss immunity luôn đổi. Build **Ngũ Hành đa nguyên tố** (tree nodes spread 2-3 element) hoạt động tốt hơn mono-element build. Đây là boss khuyến khích **hybrid** strategy.

**Cổ vật hữu ích**:
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): dispel + 20% stability khi Phase 2 gây đại khắc bất ngờ (§5)
- Cổ vật buff linh khí **Vô Cực** (element void): linh lực void = trung tính với mọi element (§1 matrix), an toàn khi không đọc được boss đang dùng element gì

**Chiến thuật**: Trong Phase 1, đọc màu → chuyển chain element khắc boss ngay. Trong Phase 2, dừng cố gắng gây damage lớn, tập trung **routing linh lực tránh linh đan** — bảo toàn stability là ưu tiên hơn max DPS.

## Phần thưởng

Drop theme: **Ngũ Hành Tinh Thạch** (5 loại, mỗi loại số lượng nhỏ) — nguyên liệu nâng cấp linh khí. Xác suất thấp: `reagent` Ngũ Hành Hỗn Linh (dùng cho Đan Pháp Hỗn Nguyên sau này). Drop Cổ vật: ưu tiên item multi-element hoặc "adapt" utility.
