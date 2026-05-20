---
id: violent-wind
ten: Cuồng Phong
riskLevel: medium
rewardMultiplier: 1.5
difficultyTier: 3
category: corruption-mod
---

# Cuồng Phong (`violent-wind`)

## Lược tả

Cuồng phong tà kiếm — cứ 5 giây một lần, gió xoáy đổi hướng toàn bộ linh lực 90°. Mọi chain vừa dựng xong lập tức tan vỡ; chỉ build chủ động thích nghi mới sống sót.

## Effect

**Direction wipe mỗi 5 giây** (physics layer — velocity direction):
- Theo chu kỳ **mỗi 5 giây**, toàn bộ linh lực đang bay **xoay hướng di chuyển 90°** (ngẫu nhiên trái hoặc phải).
- Tốc độ (velocity magnitude) giữ nguyên — chỉ direction thay đổi.
- Linh lực đang chạm chain bị văng ra khỏi quỹ đạo dự kiến → chain bị phá.
- **Charge count reset** về 0 khi direction wipe xảy ra giữa chain (charge tích theo hop liên tục — §2 +20%/hop — bị reset khi chain đứt).
- Intensity base từ velocity không đổi (§2 velocity factor 0.5x–2.0x còn nguyên); chỉ chain charge bị mất.
- Stability: không bị tấn công trực tiếp — nguy hiểm gián tiếp qua tương khắc hit khi linh lực bay lạc hướng.
- Phần thưởng: **×1.5 reward multiplier** (rewardMultiplier 1.5).

## Đánh đổi & Risk

**RiskLevel medium** — chu kỳ 5 giây là rhythmic, có thể predict và plan around. Ở difficultyTier 3, không phải fail state cứng nhưng đòi hỏi build không phụ thuộc charge stacking dài hạn.

Nguy hiểm chính: charge reset mỗi 5 giây = intensity ceiling thấp hơn đáng kể cho build phụ thuộc charge (§2 cap 200% = 10 hop — không thể đạt nếu chain bị cắt mỗi 5 giây). Build velocity-based hoặc crit-based không bị ảnh hưởng nhiều.

**Reward** ×1.5 phù hợp — không cao vì mod này counters được bằng build design đúng.

## Khi nào dùng + Synergy

**Dùng khi**: build không phụ thuộc charge stacking (crit build "Cuồng Sát", velocity build, hoặc build tương sinh burst ngắn); player muốn thử challenge rhythm-based; T6-T12.

**Composing pháp trận**:
- An toàn với **Phong Hoả** (`sealed-slot`) — ít linh khí + cuồng phong = board nhỏ gọn, chain ngắn không cần charge dài.
- Tránh **Hồn Cuồng** (`frenzied-soul`) — velocity cao + direction wipe mỗi 5 giây = linh lực bay cực hỗn loạn.
- Tránh **Set Ngũ Hành 5-cycle**: chain 5-hop bị cắt trước khi hoàn thành 5 giây = không bao giờ đạt spike +200%.

**Synergy**:
- **Crit build "Cuồng Sát"** (100% crit chance × multi): mỗi hit riêng lẻ đã mạnh → không cần chain dài để đạt damage.
- **Build "Bùng Bạo"** (low crit chance, very high crit multi): ít hit mạnh → cuồng phong không phá được vì không cần chain liên tục.
- **Linh khí Mộc/Thuỷ heal** (§5 tương sinh heal): đặt gần linh đan để ngay cả khi linh lực bay lạc vẫn có heal hit thường xuyên.
