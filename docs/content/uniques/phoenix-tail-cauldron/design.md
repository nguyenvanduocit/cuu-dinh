---
id: phoenix-tail-cauldron
ten: Đỉnh Phượng Linh Vĩ
type: cauldron
element: fire
category: chaos-risk
dropWeight: 60
dropRateHint: atlas drop, rare
---

# Đỉnh Phượng Linh Vĩ (`phoenix-tail-cauldron`)

## Lược tả

Cổ vật chaos-risk cho lối Boss Chuyên Sâu: intensity trong boss-ván tăng ×5, nhưng intensity trong ván thường (non-boss) giảm còn ×0.5. Đỉnh Phượng chỉ bốc lửa khi đối mặt kẻ xứng tầm.

## Cơ chế

Mỗi pháp trận gồm 5-8 ván thường + 1 boss-ván cuối (combat-math §5). Đỉnh Phượng Linh Vĩ áp **multiplier riêng biệt cho từng loại ván**, nhân vào Layer 3 map_mult (combat-math §2):

- **Boss-ván** (Dị Tượng T1-T8 / Tâm Ma T6-T13 / Thiên Kiếp T14-T16): intensity ×5
- **Ván thường** (non-boss): intensity ×0.5

| Tier | Intensity boss-ván | Intensity ván thường |
|---|---|---|
| T1 | ×5 | ×0.5 |
| T2 | ×5; boss-ván crit chance +10% | ×0.5 |
| T3 | ×5; boss-ván crit chance +10%; boss kill bonus: +15 flat quality vào linh đan | ×0.5 |

- **"Intensity"** ở đây là toàn bộ quality delta và stability delta trong công thức collision (§2) — cả SINH lẫn KHẮC đều bị scale. Tương sinh trong ván thường heal ít hơn; tương khắc trong boss-ván damage nhiều hơn.
- Stability vẫn start 100 mỗi pháp trận (§5) — boss-ván ×5 stability delta nghĩa là tương khắc đau gấp 5 (nhưng tương sinh heal gấp 5 luôn).
- T3 boss kill bonus: +15 flat quality chỉ trigger khi boss-ván kết thúc thắng lợi (kim đan target met trước khi stability về 0).

## Đánh đổi (Downside)

- **×0.5 ván thường**: 5-7 ván đầu mỗi pháp trận gần như vô nghĩa về quality gain — player phải tồn tại đến boss-ván với stability còn đủ, trong khi healing (tương sinh) cũng bị halved.
- **Stability vulnerable pre-boss**: tương khắc ván thường ×0.5 ít hại hơn, nhưng tương sinh ×0.5 cũng ít heal hơn — player đến boss-ván với stability thấp hơn bình thường.
- **Boss-ván ×5 là con dao hai lưỡi**: nếu nguyên tố linh lực không thuận với linh đan trong boss-ván, đại khắc gây stability -80% × 5 = gần như instant bể.
- Không hoạt động tốt với `amitabha-statue` (drip quality cần nhiều ván win; ván thường đóng góp gần bằng 0 với ×0.5).

## Vì sao (WHY)

- **×5 boss / ×0.5 thường**: tỷ lệ 10:1 tạo gameplay hai giai đoạn rõ ràng — phase sinh tồn (ván thường) và phase bùng phát (boss). Không thể "farm safe" suốt pháp trận rồi bỏ boss-ván.
- **Cả SINH lẫn KHẮC đều scale**: tránh "chỉ damage scale" làm boss-ván quá an toàn — risk/reward đồng thời tăng.
- **T3 +15 flat quality**: flat vì combat-math §6 cho thấy flat tự suy giảm liên quan ở phẩm cao → boss kill reward lớn ở Phàm/Linh, nhỏ dần ở Thánh.

## Synergy & Build

- **Archetype**: Boss Chuyên Sâu — tích tụ charge dài trong ván thường, bùng phát toàn bộ trong boss-ván. Đạo Phái **Linh Sơn** (Hồi Vang Linh Sơn 10% echo — echo cũng được ×5 trong boss-ván, chuỗi bùng nổ) và **Tử Vi** (xem trước drops → chọn đan dược tăng stability vào trước boss-ván).
- **Combo cốt lõi**: keystone **Sắc Bén** (×3 crit multi, crit chance ÷2) + Đạo Phái Tử Vi crit +10% T2 (boss-ván) → boss-ván crit explosion tối đa; Đan Pháp **Thiên Kiếp** (boss-ván sớm hơn, nhiều boss hơn) → nhiều lần bùng phát.
- **Anti-synergy**: `amitabha-statue` (drip quality gần 0 ở ván thường ×0.5); `nine-abyss-black-elixir` (×3 intensity mọi ván — boss-ván kết hợp ×15, stability vào đại khắc = instant bể với xác suất cao).
- **Drop**: dropWeight 60, `atlas drop, rare` — gặp ở T8+, dành cho player đã hiểu boss cycle.
