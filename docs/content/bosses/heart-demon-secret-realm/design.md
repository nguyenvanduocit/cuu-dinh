---
id: heart-demon-secret-realm
ten: Tâm Ma Bí Cảnh
type: boss
bossType: heart-demon
tier: T11
element: void
phaseCount: 1
---

# Tâm Ma Bí Cảnh (`heart-demon-secret-realm`)

## Định danh

Không có hình dạng riêng. Tâm Ma Bí Cảnh là **bản sao hoàn hảo của Lò Luyện Đan player** — đọc save data, tái tạo board giống hệt, rồi chơi tốt hơn player.

**Kiểm tra**: liệu player thực sự hiểu build của mình không? Boss này chỉ thắng được bằng cách đánh tốt hơn chính mình — không có cơ chế ẩn để "cheat". Đây là gương thử đạo tâm.

Boss xuất hiện khi player dùng **Đan Pháp Tâm Ma** (variant 5 trong 10 Đan Pháp) — một trong những bí cảnh hiếm nhất, emergent từ tổ hợp Tâm Ma Nguyên Liệu + Tâm Ma Catalyst. Không phải boss cố định — là kết quả của lựa chọn.

Hình dạng: linh đan của boss = linh đan của player nhưng màu đen; board = board player nhưng ngược chiều. Không có khuôn mặt, không có voice line.

## Bậc & Bối cảnh

- **Tier**: T11+ (emerges từ T11, scale với tier map dùng để vào — có thể gặp T13 nếu dùng Tâm Ma Đan Pháp ở bản đồ cao)
- **Win-rate target**: ~55% (build-dependent mạnh — player hiểu build mình: >70%; player không hiểu: <30%)
- **Khi nào gặp**: Chỉ khi dùng Đan Pháp Tâm Ma trong Sơn Hà Đồ Lệnh composition. Không gặp trong campaign thường
- **Môi trường**: Bí Cảnh Gương — board đối xứng hoàn hảo, không có môi trường đặc biệt ngoài ánh sáng đen/trắng tương phản

## Phase & Pattern

### Phase 1 duy nhất: Gương Đạo (100% → 0% HP)

Không có multi-phase vì đây không phải "boss có lifecycle" — đây là duel.

**Cơ chế nền "Sao Chép Thời Gian Thực"**: mỗi action player thực hiện (bắn linh lực, chọn chain, kích hoạt cổ vật), boss copy sau **2 giây delay**. Bắn linh lực Kim → 2 giây sau boss bắn linh lực Kim từ phía đối diện. Kích hoạt cổ vật → 2 giây sau boss dùng hiệu ứng tương đương.

**Điểm phá vỡ gương**: boss không thể copy **timing** — nó luôn delay 2 giây. Player thắng bằng cách tạo situation mà 2 giây delay khiến boss "phản" sai thời điểm. Ví dụ: bắn linh lực Kim khi linh đan boss đang ở phase tương sinh → boss copy Kim 2 giây sau khi linh đan đã rotate → Kim vào sai element.

**Công kích độc lập (không copy)** (mỗi 20 giây): boss phóng 1 viên linh lực màu đen về phía linh đan player. Linh lực đen = element **khắc nhất linh đan của player tại thời điểm đó** (đọc linh đan realtime). Stability damage: **-18** nếu linh đan không có bảo vệ.

**Stability damage (§5)**:
- Linh lực đen độc lập: **-18** (T11 range, giữa 5-25)
- Copy action feedback: varies — nếu player bắn đại khắc vào linh đan boss thì boss sẽ copy và làm điều tương tự 2 giây sau

**Enrage không tồn tại**: nếu duel kéo dài quá 8 phút, board collapse (cả 2 thua) — tránh stall tactic.

## Cơ chế đặc trưng

**2-Giây Delay Gương**: mechanic duy nhất, đơn giản về mô tả nhưng sâu về execution. Player thắng không phải bằng firepower mà bằng **tạo timing trap** cho bản sao chậm của mình.

Cơ chế này không thể có "universal guide" — tốt nhất phụ thuộc build. Build chain dài: tạo chain bẫy mà 2 giây sau chain path đã thay đổi. Build crit: bắn rồi move linh khí buffer tức thì để bản sao crit vào void.

**Không có lore drop**: boss này không giải thích mình là ai. Không có voice, không có cutscene. Chỉ có gương.

## Counter-play

**Không có element counter** — boss dùng element của chính player. Counter duy nhất: **khai thác delay**.

**Cổ vật hữu ích**:
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): 20% stability — dùng ngay sau linh lực đen -18 hit (§5), trước khi copy wave của boss vào
- Cổ vật với **instant trigger** (không animation delay): tốt vì boss copy action nhưng không copy tốc độ trigger. Instant = không bị bắt chước hiệu quả
- Affix giảm delay trigger (nếu có): giúp "reset" timing window nhanh hơn

**Chiến thuật cốt lõi**: đừng cố đánh nhanh — đánh theo nhịp. Bắn → đợi 2 giây xem copy đi đâu → bắn tiếp khai thác chỗ hổng copy. Người stall liên tục bị enrage timer phạt.

## Phần thưởng

Drop theme: **Tâm Ma Catalyst** (hiếm, dùng để craft Đan Pháp Tâm Ma tier cao hơn) + nguyên liệu reflection-theme. Xác suất thấp: `mirror-tier` loot — rare nhất game, xác suất rất thấp nhưng scale với tier map dùng (T13 Tâm Ma = cơ hội tốt nhất). Drop Cổ vật: ưu tiên utility/timing item thay vì raw power.
