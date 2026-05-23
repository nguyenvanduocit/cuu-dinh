---
id: lantern-element-cycle
ten: Đèn Nguyên Tố Chuyển
category: implicit
tags: [elemental, chain]
compatibleItemTypes: [lantern]
weight: 60
---

# Đèn Nguyên Tố Chuyển (`lantern-element-cycle`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi 3 va chạm: đổi nguyên tố phát sáng theo vòng Ngũ Hành |
| T2 | Mỗi 2 va chạm: đổi nguyên tố phát sáng theo vòng Ngũ Hành |
| T3 | Mỗi va chạm: đổi nguyên tố phát sáng; linh lực được +15% intensity khi cùng nguyên tố Đèn |

## Tương tác

Implicit của **lantern** base type. Đèn đổi "nguyên tố phát sáng" theo vòng Ngũ Hành (Kim→Thuỷ→Mộc→Hoả→Thổ→Kim) mỗi 3/2/1 va chạm. Nguyên tố phát sáng = element mà Đèn đang convert linh lực qua nó sang (hoạt động như convert tạm). Linh lực cùng nguyên tố với Đèn tại thời điểm chạm nhận +15% intensity (T3). Cycle không reset giữa các ván — trạng thái persist, tạo yếu tố thời gian trong setup.

## Build & Synergy

Implicit của **lantern**. Dùng để tạo dynamic element routing — không cố định một element mà cycle qua cả 5. Mạnh nhất khi linh đan element Mộc: chờ Đèn cycle đến Thuỷ (tương sinh Mộc) rồi route linh lực vào. Combo với `lantern-convert` trên Đèn thứ nhất (convert cứng Hoả) + lantern-element-cycle trên Đèn thứ hai: player biết Đèn 1 luôn Hoả, chỉ cần track cycle Đèn 2. `wuxing-chain` hoặc `wuxing-convert-power` (slice khác) synergy tự nhiên với cycle này. Đạo Phái Ngũ Hành set build (5 linh khí khác element): cycle Đèn giúp đảm bảo có đủ element qua đúng thứ tự.
