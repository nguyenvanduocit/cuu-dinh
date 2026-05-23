---
id: attraction
ten: Hấp Lực
category: suffix
tags: [utility]
weight: 100
---

# Hấp Lực (`attraction`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Hút linh lực trong bán kính 30px về phía linh khí |
| T2 | Hút linh lực trong bán kính 40px |
| T3 | Hút linh lực trong bán kính 50px; lực hút +15% |

## Tương tác

Cơ chế vật lý (physics layer) — không tác động trực tiếp vào intensity formula (§7.2). Lực hút ảnh hưởng đến `velocity_factor` của linh lực bị kéo: linh lực tăng tốc khi bị hút → velocity cao hơn khi chạm linh khí → intensity tăng gián tiếp. T3 +15% lực hút tăng acceleration gradient. Không có cap riêng; bị giới hạn bởi velocity max vật lý Rapier. Không phân biệt nguyên tố.

## Build & Synergy

Roll trên mọi item base type. Affix utility-positioning — tăng hiệu quả mọi build cần linh lực đi đúng route:
- Kết hợp `armor-break` (AOE defense reduce): kéo linh lực vào vùng AOE của linh khí có `armor-break` → nhiều hit hơn trong range.
- `chain-link` / `bead-chain`: hút linh lực gần lại → tăng xác suất chain nhảy trong range ngắn.
- Build velocity (`swift-speed`, `accelerate-box`): linh lực đã nhanh + được kéo thêm → velocity_factor tối đa.
- Đặc biệt mạnh trong pháp trận có nhiều lane — hút linh lực lạc về đúng path.
