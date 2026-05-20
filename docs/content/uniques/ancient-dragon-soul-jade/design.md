---
id: ancient-dragon-soul-jade
ten: Cổ Long Hồn Ngọc
type: bead
element: void
category: chaos-risk
dropWeight: 60
dropRateHint: atlas drop, rare
---

# Cổ Long Hồn Ngọc (`ancient-dragon-soul-jade`)

## Lược tả

Cổ vật homing chính xác: linh lực mang hồn long cổ đại, tự lần theo linh đan như rắn bám mồi — nhưng mỗi lần ngoặt đổi hướng, hào khí tích lũy tan biến, chain phải xây lại từ đầu.

## Cơ chế

Mọi linh lực trên board nhận hành vi **homing**: sau mỗi lần va chạm linh khí, nếu linh đan nằm trong góc 90° phía trước, linh lực **tự lệch hướng** tối đa 20° về phía linh đan để ưu tiên va chạm trực tiếp.

| Tier | Góc lệch tối đa | Homing khởi động sau | Charge reset khi lệch hướng |
| --- | --- | --- | --- |
| T1 | 15° | 1 linh khí đầu tiên | Reset về 0 charge |
| T2 | 20° | Ngay khi tung | Reset về **50%** charge hiện tại |
| T3 | 25° | Ngay khi tung | Reset về **50%** charge + nếu hit trực tiếp linh đan: +1 charge bonus |

- **Homing chỉ lệch, không teleport**: vật lý vẫn tuân Rapier 2D — nếu linh đan nằm sau linh khí, homing không giúp.
- **Charge reset**: combat-math §2 mỗi hop +20% intensity, cap 200% (10 hops). Mỗi lần homing kích hoạt (linh lực lệch hướng) reset charge về 0 (T1) hoặc 50% (T2/T3). Build chain dài trước khi homing = mất tích lũy.
- Không homing nếu linh đan bị che khuất hoàn toàn (≥2 linh khí block đường thẳng).

## Đánh đổi (Downside)

- **Charge reset mỗi lần homing kích hoạt**: homing ưu tiên hit linh đan → tắt chain → linh lực đến linh đan sớm hơn nhưng với intensity thấp hơn (charge 0 thay vì charge 6-7 hop). T1: mất toàn bộ; T2/T3: mất 50% — vẫn đau.
- Phản tác dụng với build chain-depth cao: `Ngũ Hành 5-cycle` (+200% intensity) cần chain dài qua 5 nguyên tố — homing ngắt chain giữa chừng phá vỡ cycle.
- Anti-synergy với `sun-wukong-staff` (tách ×3 sau va chạm đầu tiên — con tách đi theo hướng ngẫu nhiên ±30°, homing chỉ còn tác dụng lên viên gốc trước khi tách).

## Vì sao (WHY)

- **Homing không free**: accuracy build đáng nhận accuracy chỉ khi trade intensity. Charge reset buộc player chọn: chain dài để intensity cao (bỏ homing) hay homing để chắc chắn hit (mất chain). Hai chiến lược rõ ràng.
- **50% reset (T2/T3)**: không phá hoàn toàn như T1, nhưng vẫn cảm nhận được — 6 hop → 3 hop: mất 60% intensity từ charge component (+120% → +60%).
- **Góc 15-25° tôn trọng vật lý**: không override Rapier — chỉ nudge. Kẻ thiếu kinh nghiệm coi homing là tự động; người chơi tốt dùng nó để close gap cuối mà không phá chain.

## Synergy & Build

- **Archetype**: accuracy / precision strike — board ít linh khí, linh lực đi thẳng hơn. Đạo Phái khớp nhất: **Tử Vi** (Thiên Nhãn Tử Vi — xem trước drop, tối ưu hóa chain ngắn có chủ đích) và **Thái Cực** (đa nguyên tố board, mỗi hop chọn nguyên tố phù hợp trước khi homing kick in).
- **Combo**: passive tree **Tập Trung** nodes (intensity per low-charge hit) bù thiệt hại từ charge reset; `wind-thunder-fan` (đẩy linh lực theo ý muốn) kiểm soát vị trí trước khi homing.
- **Anti-synergy**: build chain-depth `Ngũ Hành 5-cycle` (cần chain dài — homing ngắt); `sun-wukong-staff` (tách ×3 làm homing chỉ ảnh hưởng viên gốc).
- **Drop**: dropWeight 60, `atlas drop, rare` — chaos-risk card phù hợp người thích build precision.
