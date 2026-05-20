---
id: white-bone-decree
ten: Bạch Cốt Lệnh
type: charm
element: void
category: chaos-risk
dropWeight: 60
dropRateHint: atlas drop, rare
---

# Bạch Cốt Lệnh (`white-bone-decree`)

## Lược tả

Cổ vật Vong Linh nền tảng: linh khí hi sinh (bởi `thousand-mile-scythe` hoặc bất kỳ cơ chế sacrifice) có 30% cơ hội hồi sinh sau khi trigger — nhưng linh khí hồi sinh trở về với **mọi affix giảm 1 tier** và không thể hồi sinh lần thứ hai.

## Cơ chế

Khi một linh khí bị **hi sinh** (bất kỳ nguồn: `thousand-mile-scythe`, map mod Huyết Sát vỡ, hoặc Đan Pháp Diêm Phủ sacrifice mechanic), có **30% cơ hội** linh khí đó hồi sinh tại vị trí cũ sau khi animation sacrifice hoàn tất. Linh khí hồi sinh mang tag **"đã hồi sinh"** — mọi affix trên linh khí đó giảm 1 tier (T3→T2, T2→T1, T1 bị xoá). Linh khí đã hồi sinh **không thể hồi sinh lần hai** nếu bị sacrifice tiếp.

| Tier | Cơ hội hồi sinh | Affix penalty | Lần hồi sinh tối đa |
|---|---|---|---|
| T1 | 30% | Tất cả affix -1 tier | 1 lần |
| T2 | 40% | Tất cả affix -1 tier | 1 lần |
| T3 | 50% | Affix -1 tier; nhưng **1 affix ngẫu nhiên** giữ nguyên tier gốc | 1 lần |

- **Affix tier**: T3 affix là mạnh nhất (combat-math §3: "Lò.Đỉnh element bias: max +50%") — hồi sinh với T2 affix vẫn là một linh khí hữu ích, không phải rác.
- **Tag "đã hồi sinh"**: visible trên UI → player biết linh khí nào không thể tái sacrifice. Tránh chain sacrifice vô hạn.
- Hoạt động **độc lập với `thousand-mile-scythe`**: nếu mang cả hai item, `thousand-mile-scythe` sacrifice → 30%/40%/50% linh khí hồi sinh → linh khí hồi sinh không thể sacrifice tiếp (nên không trigger `thousand-mile-scythe` lần hai từ linh khí đó).
- `white-bone-decree` cũng trigger với sacrifice từ map mod Huyết Sát (§8) và Đan Pháp Diêm Phủ — không gắn cứng với một cơ chế.

## Đánh đổi (Downside)

- **Affix -1 tier**: linh khí hồi sinh yếu hơn bản gốc — không bao giờ "free recovery", luôn có cost. T1 affix bị xoá hoàn toàn (linh khí plain).
- **Không thể hồi sinh lần hai**: không thể lợi dụng sacrifice loop vô hạn — mỗi linh khí chỉ có 1 cơ hội. Build cần quản lý "linh khí còn sacrifice được" vs "đã hồi sinh rồi".
- **70% (T1) không hồi sinh**: xác suất thất bại cao hơn thành công — không thể plan chắc. Build sacrifice cần backup plan khi miss proc.
- Linh khí hồi sinh T1-affix (toàn bộ) = linh khí plain, chỉ còn element và position — gần như vô nghĩa nếu affix là nguồn power chính.

## Vì sao (WHY)

- **Affix -1 tier thay vì stat penalty**: affix là currency trong game; downgrade tier là cost rõ ràng và đo lường được, không phải "weakened" mơ hồ. Player thấy ngay trên UI.
- **30%/40%/50% thay vì 100%**: free resurrection biến sacrifice thành "đỡ tốn" — mất đi tension thiết kế. Proc chance tạo variance đúng tinh thần chaos-risk.
- **1 lần hồi sinh**: ngăn chain sacrifice exploit (sacrifice → hồi sinh → sacrifice → hồi sinh vô hạn), giữ board quản lý meaningful.

## Synergy & Build

- **Archetype**: Vong Linh Resurrection — sacrifice có chủ đích, board recovery. Cặp bài trùng với `thousand-mile-scythe` (Lưỡi Hái Thiên Lý sacrifice → 30%+ hồi sinh; nếu T3 Bạch Cốt 50% + T3 Thiên Lý hồi sinh 30% từ item đó → effective sacrifice cost thấp); cite chéo đúng như exemplar `thousand-mile-scythe` đã reference `white-bone-decree`.
- **Đạo Phái Vô Cực** (khuếch đại biên độ random: 30% → distribution rộng hơn; tốt hơn bình thường hoặc tệ hơn bình thường, không trung bình) và **Linh Sơn** (Hồi Vang echo từ linh khí hồi sinh — linh khí yếu hơn nhưng echo bù).
- **Combo cốt lõi**: Đan Pháp **Diêm Phủ** (sacrifice mechanic là core — nhiều sacrifice = nhiều proc cơ hội) + linh khí T3 affix làm "đạn hi sinh" (nếu miss proc, mất T3; nếu hit, giữ lại T2 vẫn hữu ích).
- **Anti-synergy**: build không có cơ chế sacrifice nào (`amitabha-statue`, `nine-grade-kasaya`) — item gần như trống vì không có trigger. `primordial-black-elixir` (stability cap 25 + mất linh khí khi sacrifice dù nhỏ = quá rủi ro).
- **Drop**: dropWeight 60, `atlas drop, rare` — enabler cho Vong Linh, không quá hiếm để build được access.
