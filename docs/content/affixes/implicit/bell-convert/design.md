---
id: bell-convert
ten: Chuông Chuyển Hoá
category: implicit
tags: [elemental, utility]
element: metal
compatibleItemTypes: [bell]
weight: 60
---

# Chuông Chuyển Hoá (`bell-convert`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực qua Chuông có 40% chance đổi nguyên tố sang Kim |
| T2 | Linh lực qua Chuông có 65% chance đổi nguyên tố sang Kim |
| T3 | Linh lực qua Chuông 100% đổi nguyên tố sang Kim |

## Tương tác

Đổi nguyên tố linh lực sang **Kim** — thay đổi lớp element trong intensity formula (§7.2). Sau convert, linh lực Kim áp tương sinh/tương khắc Kim: tương sinh Thổ→Kim (Thổ nuôi Kim đan), tương khắc Kim→Mộc (Kim phá Mộc linh khí). T1 40% chance → có thể thất bại; T3 100% guaranteed. Convert xảy ra ngay khi linh lực rời Chuông — charge_factor đã tích trước đó giữ nguyên. Không stack: nếu linh lực đã là Kim, affix không làm gì.

## Build & Synergy

Implicit — chỉ roll trên **bell**. Chuyên **Kim build** hoặc **convert pipeline**:
- Đặt Chuông có `bell-convert` trên path dẫn đến linh đan Kim → force mọi linh lực thành Kim trước khi đánh đan.
- `azure-dragon-wrath` (Mộc intensity): nếu linh đan là Kim, Mộc tương khắc Kim → dùng `bell-convert` đổi Mộc sang Kim trước khi đến đan → từ khắc thành đồng hành. Tactical counter.
- Combo với keystone **Sắc Bén** (Kim element mạnh về crit): force Kim để trigger Sắc Bén crit bonus.
- Tinh Hoa Kim (essence) force roll affix Kim trên Chuông → đảm bảo có affix Kim đi kèm.
