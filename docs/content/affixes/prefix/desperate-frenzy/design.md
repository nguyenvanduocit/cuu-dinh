---
id: desperate-frenzy
ten: Kích Bạo Liều Lĩnh
category: prefix
tags: [offensive]
weight: 40
---

# Kích Bạo Liều Lĩnh (`desperate-frenzy`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +50% intensity khi linh đan stability < 40%; nhưng +5% chance bể linh đan mỗi hit |
| T2 | +65% intensity khi stability < 40%; +4% chance bể |
| T3 | +80% intensity khi stability < 50%; +3% chance bể; 10% chance heal +3% stability khi hit |

## Tương tác
+X% intensity vào `player.intensity_multiplier`, chỉ khi `linh_dan.stability` dưới ngưỡng. Đây là affix high-risk: mỗi hit thêm X% chance bể linh đan trực tiếp (bypass stability drain formula — là roll độc lập). T3 heal 10% chance +3% stability vào `linh_dan.stability` cùng slot với tương sinh heal (§7.2) — cộng dồn. Ngưỡng T3 (50%) rộng hơn T1/T2 (40%) → buff active sớm hơn, rủi ro cao hơn.

## Build & Synergy
Roll trên sword, saber, inkstone (tag `offensive`). Cặp tự nhiên với `elixir-protect` (suffix, deflect tương khắc khi stability < 40%) — desperate-frenzy đẩy damage cao khi nguy, elixir-protect chặn damage thêm để không bể. Cặp với Thuỷ-Mộc tương sinh chain (§7.2: stability heal +intensity × 0.05) để bù stability liên tục. Keystone **Bất Bại** (Lò Thọ -50% damage) không liên quan trực tiếp — fail state là linh đan bể, không Lò chết. Đạo Phái **Vô Cực** (chaos ×2) khuếch đại rủi ro/thưởng thêm.
