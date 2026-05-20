---
id: reagent-choice
ten: Tăng Chọn Đan Dược
category: suffix
tags: [currency-control]
weight: 40
---

# Tăng Chọn Đan Dược (`reagent-choice`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Sau mỗi ván win: thêm 1 đan dược vào lựa chọn loot |
| T2 | Thêm 2 đan dược lựa chọn |
| T3 | Thêm 2 đan dược; 10% chance 1 trong đó là Cửu Chuyển Đan hoặc Phong Ấn |

## Tương tác

Thuộc **currency-control** layer — tác động vào loot selection UI sau mỗi ván win, không phải drop pool trong ván. Thêm 2 đan dược vào danh sách lựa chọn cuối ván (flat additive). T3 10% chance: 1 trong 2 đan dược thêm đó là Cửu Chuyển Đan hoặc Phong Ấn — hai item gambling trụ cột (§12 locked decision). Roll độc lập mỗi ván win.

## Build & Synergy

Roll trên mọi item base type. Giá trị tỷ lệ với số ván win trong pháp trận — pháp trận 5-8 ván = 5-8 lần proc:
- Kết hợp `lucky-fate` (thêm đan dược mid-ván) + `reagent-choice` (thêm lựa chọn cuối ván) = coverage cả in-ván và post-ván.
- Build gambling-focus: T3 Phong Ấn trong lựa chọn → dùng ngay trong pháp trận tiếp theo — economy loop tự cấp.
- Dây Phong Ấn slot (§3.1) phù hợp nhất; Đạo Phái bất kỳ dùng được.
