---
id: charm-seal-ward
ten: Phù Tắc Đầu
category: implicit
tags: [seal-safety, defensive]
compatibleItemTypes: [charm]
weight: 60
---

# Phù Tắc Đầu (`charm-seal-ward`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | 1x/ván: phong ấn tất cả linh khí trong 80px không bị nhiễm khí 3s |
| T2 | 1x/ván: phong ấn tất cả linh khí trong 120px không bị nhiễm khí 4s |
| T3 | 2x/ván: phong ấn tất cả linh khí trong 150px không bị nhiễm khí 5s |

## Tương tác

Cơ chế **phòng thủ theo event** — không tác động vào intensity formula (§7.2). Kích hoạt 1–2x/ván, không thể kích hoạt nhiều hơn. Phong ấn area-wide: mọi linh khí trong range (80–150px) không bị nhiễm khí (§7.4) trong 3–5s — giữ element gốc ổn định. Không phân biệt nguyên tố linh khí trong range. Charge độc lập, không liên quan đến charge_factor linh lực.

## Build & Synergy

Implicit — chỉ roll trên **charm**. Bảo vệ board khỏi nhiễm khí mass:
- `anchored` (per-linh-khí persistent): kết hợp — `charm-seal-ward` phong ấn area tức thì khi cần, `anchored` duy trì per-linh-khí liên tục. Lớp bảo vệ kép.
- Đặt ở trung tâm board để range 120–150px phủ nhiều linh khí nhất.
- Quan trọng nhất trong pháp trận `Tâm Ma` (negative energy §7.4 gây nhiễm khí mạnh) hoặc map mod nhiều linh lực đa nguyên tố.
- Kết hợp `azure-thunder-frost` + `branch-recovery` (sustain) + `charm-seal-ward` (phòng thủ): bộ ba sustain hoàn chỉnh cho build tương sinh dài hơi.
