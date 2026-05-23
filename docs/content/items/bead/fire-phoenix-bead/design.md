---
id: fire-phoenix-bead
ten: Châu Hoả Phượng
type: bead
element: fire
rarity: Magic
dropPool: Uncommon
tags: [fire, aoe, charge]
---

# Châu Hoả Phượng (`fire-phoenix-bead`)

## Lược tả

Pháp bảo Hoả hệ dạng châu — khi linh lực Hoả đạt đủ số lần va chạm, châu phát nổ AOE thiêu đốt. Vai trò vật lý: **bộ đếm + nổ**; đặt trên đường đi linh lực, mỗi lần qua đếm +1, đủ 5 hit thì bùng. Vị trí lý tưởng: nơi linh lực xuyên qua nhiều lần (hành lang hẹp, gần góc bounce).

## Implicit

Mỗi lần linh lực Hoả va chạm Châu Hoả Phượng: tích 1 điểm. Khi tích đủ **5 điểm**, Châu kích nổ AOE Hoả **120px** quanh tâm Châu, gây damage = **0.8× intensity trung bình** của 5 lần hit tích luỹ lên mọi linh khí + linh đan trong vùng. Sau nổ, bộ đếm reset về 0.

- AOE damage áp dụng tương sinh/tương khắc bình thường (Hoả→Thổ tương sinh = stability heal §2; Hoả khắc Kim = -40% intensity penalty §2).
- Mỗi nổ tạo 1 hit riêng biệt — tính crit check độc lập với hit linh lực.
- Linh lực không phải Hoả khi va chạm: không tích điểm, Châu hoạt động như linh khí thông thường (nảy).

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `offensive` | AOE damage tăng lên 1.0× / 1.2× intensity trung bình |
| `aoe` | Bán kính AOE mở rộng 150px / 180px |
| `charge` | Mỗi 3 hit thay vì 5 hit kích nổ (T1); mỗi 4 hit (T2) |
| `crit` | Nổ AOE có +15% crit chance riêng |
| `chain` | Nổ AOE chain sang Châu Hoả Phượng gần nhất trong 200px (không loop) |

Affix `charge` (giảm ngưỡng kích nổ) là roll quan trọng nhất — 3-hit cycle thay vì 5-hit tăng DPS lý thuyết ~65%.

## Build role

**Element**: Hoả. **Archetype**: AOE / board-flood / multi-target.

- **Vai trò cốt lõi**: nguồn AOE Hoả định kỳ, độc lập với hướng bắn của player — đặt nhiều Châu trên board để AOE phủ toàn diện mà không cần ngắm.
- **Đạo Phái khớp nhất**: **Linh Sơn** (`spirit-mountain`) — echo spawn mỗi va chạm tăng tốc bộ đếm Châu; với `spirit-mountain-notable-echo-rate` 18% echo, mỗi 6 lần linh lực qua Châu thực ra ~7 hit (6 gốc + ~1 echo trung bình). **Thái Cực** (`tai-chi`) — board đa nguyên tố + Châu Hoả bổ sung nguyên tố Hoả vào cycle, hỗ trợ `tai-chi-notable-cycle-amplify` Đại Tuần Hoàn.
- **Combo**: Bùa Phượng Linh (`phoenix-spirit-talisman`) trên cùng board — ignite chain 5s sau mỗi hit Hoả; kết hợp AOE Châu nổ, board trở thành "địa ngục Hoả" diện rộng. Affix `chain` Châu tự kích dây chuyền sang Châu bên cạnh.
- **Anti-synergy**: build "Bùng Bạo" single-hit — Châu cần 5 lần hit tích luỹ, mâu thuẫn với chiến lược 1 cú quyết định.
