---
id: landscape-map
ten: Bản Đồ Sơn Hà
type: charm
element: void
category: build-defining
dropWeight: 30
dropRateHint: atlas keystone, very rare
---

# Bản Đồ Sơn Hà (`landscape-map`)

## Lược tả

Cổ vật build-defining mở rộng sân chơi: board tăng 50% diện tích, thêm 5 slot linh khí, tâm ma được khuếch đại — nhưng vật lý board rộng kéo dãn trajectory linh lực, khiến chain ngắn hơn và intensity mỗi viên thấp hơn.

## Cơ chế

Mang `landscape-map` thay đổi cấu trúc board của pháp trận:

| Tier | Board | Linh khí slot | Tâm ma modifier |
| --- | --- | --- | --- |
| T1 | +50% diện tích | +5 slot | Tâm ma intensity bonus ×1.5 |
| T2 | +50% diện tích | +7 slot | Tâm ma intensity bonus ×1.5; tâm ma debuff radius +25% |
| T3 | +60% diện tích | +8 slot | Tâm ma ×1.5; tâm ma có thể spawn thêm 1 loại modifier ngoài giới hạn bình thường |

- **Tâm ma khuếch đại** (×1.5 intensity bonus): bí cảnh Tâm Ma mod (combat-math §2: −50% đến +100% intensity) với ×1.5 = tối đa +150% intensity từ Tâm Ma → cực đoan hơn về risk/reward.
- **+5-8 slot**: cho phép nhiều linh khí hơn trên board → nhiều chain path, nhiều element coverage — mass linh khí build become viable.

## Đánh đổi (Downside)

- **Board rộng hơn = trajectory dài hơn**: linh lực phải di chuyển xa hơn để chạm linh đan — thời gian bay dài hơn nhưng velocity không tăng (physics-driven, combat-math §2). Kết quả: chain hop count trên đường đi ít hơn vì khoảng cách giữa linh khí cũng dãn ra → charge thấp hơn so với board tiêu chuẩn cùng số linh khí.
- **Tâm ma khuếch đại ×1.5 = cả bad mod**: nếu pháp trận có Tâm Ma mod âm (−50% intensity, §2), ×1.5 → −75% intensity. Board lớn không giúp ích gì khi intensity bị cắt sâu.
- **5-8 slot thêm = phải lấp đầy**: 5 slot trống trên board lớn làm thưa chain path; không phải mọi player đủ linh khí tốt để fill → board "hở" thực chất kém hơn board nhỏ đầy đủ.

## Vì sao (WHY)

- **+50% diện tích (không +100%)**: board nhân đôi triệt tiêu hoàn toàn chain density; +50% là điểm tăng trải nghiệm "rộng hơn rõ" nhưng vẫn có thể chain nếu đặt linh khí thông minh (second-order thinking — player plan trước khi fill slot).
- **Tâm ma ×1.5 (không +2.0)**: ×2.0 với Tâm Ma +100% = +200% intensity → vượt trần stack hợp lý cho single modifier; ×1.5 = +150% tổng từ Tâm Ma, nằm trong stack ceiling ~67x khi combine toàn bộ (§3).
- **dropWeight 30 (very rare)**: board-altering effect mạnh nhất game (thêm slot, khuếch đại Tâm Ma) → xứng hiếm như `thousand-mile-scythe`.

## Synergy & Build

- **Archetype**: Mass linh khí / Tâm Ma farming. Đạo Phái **Cửu Âm** (Nguyền Linh Lực — aura r=150px giảm phòng thủ 30%): board rộng cho phép nhiều linh khí không chồng aura lên nhau → coverage rộng, mọi vùng đều có aura debuff.
- **Đạo Phái Thái Cực** (cộng hưởng +2% intensity mỗi nguyên tố trong r=200px): board lớn + nhiều slot → nhiều nguyên tố đồng thời → Thái Cực bonus +10% intensity tối đa dễ đạt.
- **Combo**: Đan Pháp **Tâm Ma** (Tâm Ma modifier force-active, combine với ×1.5 khuếch đại = extreme risk/reward) + `great-bell` (free trigger mỗi 7s — board rộng nhiều linh khí → nhiều viên mỗi tiếng chuông).
- **Anti-synergy**: `thousand-mile-scythe` (hi sinh linh khí thu hồi — mất linh khí làm hở board lớn) + `lantern-spirit-path` (tắt sáng board — board rộng + tối = càng không thấy gì); build chain-dense nhỏ (cần khoảng cách gần giữa linh khí).
- **Drop**: dropWeight 30, `atlas keystone, very rare` — build-defining rarest, power spike xứng đáng với độ hiếm.
