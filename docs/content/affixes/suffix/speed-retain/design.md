---
id: speed-retain
ten: Lưu Giữ Tốc Độ
category: suffix
tags: [speed]
weight: 100
---

# Lưu Giữ Tốc Độ (`speed-retain`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực không mất velocity khi qua linh khí này (thường -10% per hit) |
| T2 | Không mất velocity + +5% velocity bonus |
| T3 | Không mất velocity + +10% bonus; linh lực rời nhanh hơn 15% |

## Tương tác

Thuộc **Layer 1 (per-collision)**: bình thường linh lực mất -10% velocity mỗi hop (ma sát). Affix này nullify khoản mất đó — velocity factor duy trì qua chain thay vì decay. T2 +5%, T3 +10% velocity bonus thêm vào velocity hiện tại sau collision. T3 "rời nhanh hơn 15%": exit angle từ linh khí này nhanh hơn → trajectory sau bounce ít bị deceleration vật lý hơn. Kết hợp với `sea-crest-surge`: charge hop count vẫn tăng nhưng không decay velocity → cuối chain cả velocity và charge đều ở peak.

## Build & Synergy

Roll suffix — core của **chain build** và **velocity build**. Thiết yếu khi board có nhiều linh khí (chain dài): không có `speed-retain`, velocity decay qua 5-8 hop làm intensity giảm ~40-50%; với affix này, intensity duy trì hoặc tăng. Combo tốt nhất: `speed-retain` + `sea-crest-surge` (prefix) + `swift-junction` (suffix khác) → chain dài với full intensity mỗi hop. `swift-speed` (prefix) tăng velocity đầu chain, `speed-retain` duy trì velocity suốt chain — cặp đôi nền tảng velocity build. `storm-surge` (prefix) hưởng lợi khi velocity duy trì cao >1.5x suốt chain thay vì chỉ ở đầu.
