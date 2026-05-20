---
id: sun-wukong-staff
ten: Trượng Tôn Ngộ Không
type: sword
element: void
category: build-defining
dropWeight: 100
dropRateHint: atlas drop, rare
---

# Trượng Tôn Ngộ Không (`sun-wukong-staff`)

## Lược tả

Cổ vật build-defining cho lối nhân bản linh lực (multiplier). Sau va chạm đầu tiên, mỗi viên linh lực tách thành 3 — biến một cú búng thành cơn mưa.

## Cơ chế

Khi một viên linh lực hoàn tất **va chạm đầu tiên** với bất kỳ linh khí, nó tách thành **3 viên linh lực con** cùng nguyên tố, toả ±30°, mỗi viên kế thừa intensity tại thời điểm tách.

| Tier | Hiệu ứng |
| --- | --- |
| T1 | Tách 3, mỗi con 60% intensity gốc |
| T2 | Tách 3, mỗi con 75% intensity; con tính `charge_count` riêng từ điểm tách |
| T3 | Tách 3, mỗi con 90% intensity + **+50% crit multiplier** cho mọi con (khớp `combat-math.md §4`) |

- Con tiếp tục chain bình thường → mỗi con tự cộng `+20%/hop` (combat-math §2), một búng tốt phủ kín board.
- **Charge**: con kế thừa `charge_count` (T2+) → chain dài trước khi tách = 3 con đều "nóng".
- **Crit**: T3 nhân crit multi *sau* khi đã ×3 số hit → bùng nổ cấp số nhân với build crit cao.

## Đánh đổi (Downside)

- **Mỗi con < 100% intensity gốc** (60-90%) → làm loãng sát thương: vô dụng cho build single-big-hit "Bùng Bạo", chỉ thắng khi tổng số hit nhiều.
- **×3 hit ăn mòn durability linh khí gấp 3** dưới map mod "Huyết Sát" (combat-math §8) → board dễ vỡ nếu thiếu keystone "Trọng Sơn".
- Splitting mất kiểm soát hướng (±30° ngẫu nhiên) → khó "ngắm" linh đan; ngược với accuracy build (`ancient-dragon-soul-jade`).

## Vì sao (WHY)

- **×3 số _hit_, không ×intensity**: tổng 3 con < 300% intensity gốc → tránh free-damage; vẫn nằm dưới trần stack ~67x (combat-math §3).
- **T3 chỉ +50% crit multi**: vì đã nhân 3 nguồn hit, cộng crit cao sẽ phá balance target T16 win-rate 45% (combat-math §9). 50% là trần đã tham chiếu sẵn ở crit math.
- **Counter có chủ đích**: map mod "Huyết Sát" (durability linh khí, §8) ăn mòn gấp 3 vì ×3 hit → build buộc kèm keystone "Trọng Sơn" (durability immune) hoặc né Huyết Sát.

## Synergy & Build

- **Archetype**: crit-multiplier / "Cuồng Sát" (combat-math §4). Đạo Phái khớp nhất: **Linh Sơn** (Hồi Vang spawn echo — echo cũng tách ×3 → cấp số nhân) và **Tử Vi** (+10% crit free).
- **Combo**: keystone **Sắc Bén** (×3 crit multi, crit chance ÷2) + prefix **Hung Diệt** (Lò) + set **Ngũ Hành 5-cycle** (+200% intensity nuôi mỗi con).
- **Anti-synergy**: build single-big-hit "Bùng Bạo" — tách ×3 làm loãng intensity mỗi viên, ngược mục tiêu một cú thật mạnh.
- **Drop**: dropWeight 100, `atlas drop, rare` — build-enabler crit gặp tương đối sớm.
