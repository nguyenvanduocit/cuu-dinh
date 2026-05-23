---
id: heaven-dragon-bone
ten: Thiên Long Cốt
category: boss-modifier
weight: 40
---

# Thiên Long Cốt (`heaven-dragon-bone`)

## Lược tả

Xương long thấm thiên đạo — boss tuần hoàn qua ngũ hành, không bao giờ dừng ở một nguyên tố. Player phải dự đoán chu kỳ và điều hướng chain trước khi element đổi.

## Effect

**Rotating element boss** (boss encounter structure + combat-math §1):
- Boss **đổi nguyên tố tấn công mỗi 10 giây** theo chu kỳ ngũ hành theo thứ tự cố định: Kim → Mộc → Thuỷ → Hoả → Thổ → Kim → ...
- Element tấn công xác định loại stability drain: nếu boss element = tương khắc với linh đan → drain theo §5 tâm ma boss attack (-5 đến -25/attack), nếu trung tính hoặc sinh → drain giảm 50%.
- **Chu kỳ cố định và có thể học**: sau vài lần gặp boss này, player có thể predict element tiếp theo và chuẩn bị chain sinh trước 2-3 giây.
- Boss HP và attack frequency không đổi so với baseline.
- Drop boss: **+2 Đan Dược đảm bảo** phẩm tương ứng map tier.

## Đánh đổi & Risk

**Boss yêu cầu kiến thức chu kỳ**, không phải raw power. Player lần đầu gặp: encounter hỗn loạn, khó predict. Player đã học cycle: encounter có thể được "giải" bằng cách sync chain với chu kỳ boss.

Nguy hiểm: nếu player sai timing và boss đang ở element tương khắc linh đan trong khi chain chưa kịp đổi → 10 giây drain liên tục. Ở T14+ với intensity cao, 10 giây tương khắc = -100 đến -250 stability.

Không có fail state đột ngột như các mod khác — nguy hiểm tích lũy theo thời gian sai timing.

**Reward** Đan Dược đảm bảo: tăng ngân sách splash modifier cho map sau.

## Khi nào dùng + Synergy

**Dùng khi**: player đã thuộc chu kỳ ngũ hành (§1 ma trận); build linh hoạt chuyển chain nhanh; muốn farm Đan Dược thêm; T8-T14.

**Composing pháp trận**:
- Phối hợp **Long Phụng Châu** (`dragon-phoenix-bead`): cả hai đòi adapt element nhưng theo cơ chế khác — nếu stacking cần build đặc biệt linh hoạt.
- Tránh **Tâm Ma Ngũ Hành** (`corruption-wuxing`) kết hợp: linh đan đổi element ngẫu nhiên + boss đổi element định kỳ = quá nhiều biến số, không thể plan.
- An toàn với **Cổ Long Đan**: loot modifier không ảnh hưởng combat.

**Synergy**:
- **Ngũ Hành set 5-cycle**: board đủ 5 element → luôn sẵn chain phù hợp với bất kỳ element boss nào.
- **Chu kỳ memory**: ghi nhớ "Kim 10 giây → Mộc 10 giây..." và pre-chain trước khi đổi để chain tương sinh ngay khi boss đổi element.
- **Lò.Thân stability max bonus**: buffer dày để chịu vài giây sai timing trong khi re-route chain.
