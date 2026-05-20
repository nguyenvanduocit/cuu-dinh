---
id: lantern-convert
ten: Đèn Chuyển Hoá
category: implicit
tags: [elemental, utility]
element: fire
compatibleItemTypes: [lantern]
weight: 100
---

# Đèn Chuyển Hoá (`lantern-convert`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Chuyển hoá 60% linh lực qua đây sang Hoả |
| T2 | Chuyển hoá 80% linh lực qua đây sang Hoả |
| T3 | Chuyển hoá 100% linh lực qua đây sang Hoả + AOE ánh sáng 50px |

## Tương tác

Implicit của **lantern** base type, element Hoả. Convert 60/80/100% linh lực qua đây sang Hoả — nghĩa là nếu linh lực Mộc đi qua, element đổi thành Hoả trước khi tiếp tục travel. Phần không convert (T1: 40%, T2: 20%) giữ element gốc — linh lực mang "mixed element" áp dụng damage formula theo element chủ đạo. T3 100%: hoàn toàn Hoả, AOE ánh sáng 50px không gây damage nhưng đẩy nhẹ linh khí trong vùng.

## Build & Synergy

Implicit của **lantern**. Đặt Đèn trước linh đan Thổ (Hoả tương sinh Thổ): convert sang Hoả → hit tương sinh = quality+. Combo với `hundred-fire-immortal` trên linh khí Hoả sau Đèn: linh lực đã convert Hoả → ignite vệt cháy → thêm 20% intensity. `lantern-element-cycle` trên Đèn thứ hai: đổi nguyên tố theo vòng — pair Đèn convert cứng Hoả + Đèn cycle tạo dynamic element routing. Đạo Phái Hoả: đây là convert foundation. Không dùng với linh đan Mộc (Hoả khắc Mộc = stability damage).
