---
id: spirit-rain
ten: Mưa Linh
category: drop-bias
weight: 100
---

# Mưa Linh (`spirit-rain`)

## Lược tả

Nguyên Liệu duy nhất trong drop-bias ảnh hưởng đồng thời **physics** và **loot pool**: tốc độ rơi linh lực tăng ×1.5, kéo theo loot toàn pháp trận +30%. Cầu nối giữa gameplay feel và economy.

## Effect

Trong suốt pháp trận:
- **Tốc độ rơi linh lực ×1.5**: linh lực từ emitter spawn nhanh hơn — số hit trên linh đan tăng, DPS board tổng thể cao hơn. Đồng thời, physics velocity tăng trung bình → `velocity_factor` (§2) dịch lên, xấp xỉ +0.2×base (từ 1.0 → 1.2x trung bình).
- **Loot toàn pháp trận +30%**: modifier Nguyên Liệu layer (-50% → +200% §3) áp lên toàn bộ drop pool — currency, linh khí, Cổ Vật xác suất đều tăng 30%.

Tốc độ rơi cao hơn cũng làm pháp trận **nhanh hơn** — thời gian thực tế mỗi pháp trận ngắn lại, phù hợp build tốc độ.

## Khi nào dùng

- Farm currency hiệu quả thời gian: +30% loot + pháp trận nhanh hơn = yield/giờ cao nhất trong drop-bias thông thường.
- Build velocity-heavy (§2 velocity_factor 0.5-2.0x): Mưa Linh tăng velocity base → damage tự nhiên cao hơn không cần thêm tree point.
- Map T1-T10 để tăng tempo farm nhanh — T11+ boss encounter nguy hiểm hơn khi linh lực rơi quá nhanh khó kiểm soát chain.

## Synergy

- **+ `fire-crystal` (Hoả Tinh)**: linh khí Hoả nhiều hơn + tốc độ rơi ×1.5 → DPS chain Hoả bùng lên cấp số nhân.
- **+ `spirit-flower` (Linh Hoa)**: Mưa Linh +30% loot pool thường; Linh Hoa guaranteed 1 Cổ Vật ngoài pool — hai layer bổ sung không chồng, tổng loot tăng đáng kể.
- **+ `star-stone` (Tinh Tinh Thạch)**: Tinh Tinh Thạch thêm 1 modifier slot Đan Pháp → có thể stack thêm modifier intensity; Mưa Linh tăng velocity → modifier intensity mới phát huy tối đa.
- **Thận trọng với boss encounter T14+**: linh lực rơi ×1.5 trong ván boss → tương khắc accidental tăng, stability drain nhanh hơn (§5 tương khắc -intensity×0.40). Cần board chính xác trước khi dùng ở T14+.
