---
id: victory-stack
ten: Cao Trường Toàn Thắng
category: prefix
tags: [offensive]
weight: 60
---

# Cao Trường Toàn Thắng (`victory-stack`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | +15% intensity; mỗi ván win: thêm +2% intensity cộng dồn pháp trận này (max 10%) |
| T2 | +20% intensity; +3% cộng dồn mỗi ván win (max 18%) |
| T3 | +25% intensity; +4% cộng dồn mỗi ván win (max 28%) |

## Tương tác

Stack cộng dồn tích lũy vào `player_intensity_multiplier` suốt pháp trận (reset khi pháp trận kết thúc). Base +15-25% là flat từ đầu; stack win cộng thêm tuyến tính. T3 max stack = +28% sau 7 ván win — kết hợp base +25% tổng cộng +53% intensity tại `player_intensity_multiplier`. Stack mất nếu thua ván (reset về 0 stack, giữ base).

## Build & Synergy

Roll mọi base type (prefix, element-neutral). Hiệu quả nhất ở pháp trận dài 7-8 ván — stack tối đa chỉ đạt gần cuối. Kết hợp `vitality-restore` (heal stability mỗi hit → tăng khả năng win từng ván để giữ stack) và `essence-guarantee` (đảm bảo không mất loot khi streak win dài). Đạo Phái bất kỳ — stack-scaling phù hợp build damage tổng kết pháp trận.
