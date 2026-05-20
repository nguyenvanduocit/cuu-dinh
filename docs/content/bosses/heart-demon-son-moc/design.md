---
id: heart-demon-son-moc
ten: Tâm Ma Sơn Mộc
type: boss
bossType: anomaly
tier: T2
element: wood
phaseCount: 1
---

# Tâm Ma Sơn Mộc (`heart-demon-son-moc`)

## Định danh

Linh vật đầu tiên chặn đường tu. Tâm Ma Sơn Mộc là biểu hiện của lòng kiêu ngạo — người mới bắt đầu tu luyện luôn tin rằng chỉ cần thúc đẩy linh lực mạnh là đủ; boss này dạy rằng sức mạnh thô thiển không bảo vệ được linh đan. **Bài học cốt lõi**: stability là sinh mạng, một cú đại khắc đủ kết thúc ván.

Thân hình nửa người nửa cây cổ thụ, rễ bám chặt board, phun linh lực Mộc theo nhịp đều đặn — dễ đọc nhưng không tha thứ nếu bị phớt lờ.

## Bậc & Bối cảnh

- **Tier**: T2 — Act 1, node cuối cùng trước khi mở Lò Luyện Đan đầy đủ
- **Win-rate target**: ~70% (new player, calibration boss)
- **Khi nào gặp**: Sau khi player hoàn thành 2-3 ván học cơ chế linh lực; đây là Boss đầu tiên thực sự gây stability damage
- **Môi trường**: Rừng cổ thụ — linh khí khởi điểm trên board là Cành Bồ Đề (Mộc), bài học về tương sinh/tương khắc ngay trên board

## Phase & Pattern

### Phase 1 duy nhất (100% → 0% HP)

**Nhịp công kích** (mỗi 8 giây):
1. **Xúc Tu Căn Rễ** — rễ cây trồi lên ở 1-2 vị trí ngẫu nhiên trên board, linh khí tại đó bị "khóa" 3 giây (không phản xạ linh lực). Telegraph: vệt xanh rung 1.5 giây trước khi rễ trồi. Stability damage: **-5** nếu linh đan đang nằm trong vùng rễ khi rễ kích hoạt.
2. **Phun Mộc Lực** — boss phun 3 viên linh lực Mộc nhỏ từ cành tay, đi theo đường zigzag chậm về phía linh đan. Nếu chạm linh đan Kim (tương khắc Kim→Mộc ngược: Mộc khắc Kim): stability **-5** và quality **-0.10×intensity**. Nếu chạm linh đan Thuỷ (tương sinh): bật ngược không gây damage.

**Enrage** (HP < 30%): nhịp công kích rút xuống 5 giây, số viên linh lực Mộc tăng từ 3 lên 5.

**Stability damage tổng kết (§5 khớp)**:
- Xúc Tu Căn Rễ: **-5** stability per trigger (đúng range Tâm Ma boss T2: 5-25)
- Phun Mộc Lực tương khắc: **-5** stability per hit

## Cơ chế đặc trưng

**Vùng Phong Tỏa Căn Rễ**: mỗi lần Xúc Tu Căn Rễ kích hoạt, linh khí bị khóa tạo ra lỗ hổng trong chain. Player buộc phải adapt routing tức thì — nếu chain plan dựa vào linh khí đó, linh lực mất hướng và va thẳng vào linh đan ở góc khắc.

Đây là lần đầu tiên player thấy "chain bị gián đoạn" — cơ chế sẽ tái xuất phức tạp hơn ở boss sau. Tâm Ma Sơn Mộc là phiên bản dạy học.

## Counter-play

**Element**: Linh lực **Kim** (khắc Mộc) làm giảm HP boss nhanh nhất. Linh lực **Hoả** (tương sinh Mộc — sinh cho boss, không nên ưu tiên). Tránh chain Hoả nếu chain sẽ bật về linh đan không cùng element.

**Cổ vật hữu ích**:
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): dispel debuff + restore 20% stability — dùng khi stability xuống dưới 40% do bị phun liên tục (§5)
- Bất kỳ cổ vật nào buff linh khí Cành Bồ Đề Mộc để chain dài hơn — tuy nhiên cẩn thận: chain Mộc vào linh đan Kim gây tương khắc

**Chiến thuật cốt lõi**: học đọc telegraph 1.5 giây của Xúc Tu Căn Rễ, "né" chain qua vùng sắp bị khóa trước khi rễ trồi. Player nào hiểu telegraph = boss này không còn đáng sợ.

## Phần thưởng

Drop theme: **Mộc nguyên liệu cơ bản** — Mộc Tinh Thạch, Mầm Linh, Lá Bồ Đề Cổ. Xác suất thấp: `pure-heart-bead` (tier thấp) — foreshadow cho cổ vật sẽ cứu mạng ở T10+. Không drop Cổ vật Unique ở T2.
