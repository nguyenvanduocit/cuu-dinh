---
id: swift-speed
ten: Phi Tốc
category: prefix
tags: [offensive, speed]
weight: 100
---

# Phi Tốc (`swift-speed`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +20% velocity linh lực; velocity bonus → +10% intensity |
| T2 | +28% velocity; +14% intensity |
| T3 | +38% velocity; +20% intensity; crit chance +5% khi velocity cực cao |

## Tương tác

Thuộc **Layer 1 + Layer 2**: velocity boost áp dụng trực tiếp lên linh lực (Layer 1, tăng velocity factor 0.5x–2.0x). Intensity bonus (+10/14/20%) additive vào `player_mult` mỗi collision tại linh khí này — áp dụng unconditional, không chờ velocity ngưỡng như `storm-surge`. T3 crit +5% khi "velocity cực cao" (>1.8x base, gần max 2.0x): additive vào `player.crit_chance`, kích hoạt crit multiplier check (§4). Velocity ảnh hưởng multiplicative: velocity 1.8x vs 1.0x = +80% base intensity trước khi nhân `player_mult`.

## Build & Synergy

Roll prefix, tags `offensive, speed`. **Velocity build anchor** — prefix đặt trên linh khí đầu chain để linh lực xuất phát với velocity cao. Cặp chuẩn với `storm-surge` (prefix trên linh khí khác): `swift-speed` khởi đầu velocity cao, `storm-surge` khai thác ngưỡng >1.5x tại mọi hop. `speed-retain` (suffix) duy trì velocity suốt chain, `speed-force` (suffix) boost thêm sau bounce. T3 +5% crit khi velocity cực cao cộng hưởng với `savage-crit-burst` (prefix khác item): velocity cao → crit → AOE burst. Tổng velocity build đầy đủ: `swift-speed` +20% intensity + `storm-surge` +38% (conditional) + `speed-force` +10% (T3) = +68% additive trước nhân chain/map multipliers. Keystone Sắc Bén nhân ×3 crit từ T3 crit chance +5% → crit spike lớn khi velocity peak.
