# Khai Đan -- Script

## State machine

```
[Sư Phụ am - intro cutscene]
    |
[Pháp Trận #1: Khai Đan] <- cannot fail
    |
[Sư Phụ post-PT1 dialogue]
```

## Pre-pháp-trận setup screen

```
+=========== KHAI DAN ==============+
|                                   |
|   Tu hanh dau tien                |
|                                   |
|   Muc tieu: Luyen 1 vien Linh Dan |
|   tu Pham pham len Linh pham.     |
|                                   |
|   Stability: 100% (locked)       |
|                                   |
|   [Bat dau]                       |
+===================================+
```

## Dialogue

### In-pháp-trận tutorial overlay sequence

**Step 1 -- Show board** (auto, 3s read):
> OVERLAY: *"Đây là pháp trận. Bàn luyện đan của con."*
>
> ARROW pointing at linh đan center: *"Đây là viên linh đan. Mục tiêu của con là luyện nó."*

**Step 2 -- Show linh khí inventory** (player must click):
> OVERLAY: *"Đây là linh khí -- pháp khí giúp con hứng linh lực."*
>
> 3 LINH KHI in inventory (forced): Cành Bồ Đề (Mộc) x3.
>
> *"Kéo 1 linh khí vào ô sáng nhấp nháy."*

**Step 3 -- Place 1st linh khí**:
> Player drags Cành Bồ Đề into anchor slot.
>
> SOUND: gentle bell.
>
> OVERLAY: *"Tốt. Đặt 2 cái còn lại."*

**Step 4 -- Place 2nd, 3rd**:
> Player places remaining.
>
> OVERLAY: *"Sẵn sàng. Bấm 'Luyện' để bắt đầu."*

**Step 5 -- Simulate phase**:
> Player clicks "Luyện".
>
> Music intensifies. Linh lực Mộc (green orbs) start raining down.
>
> First collision linh lực-linh khí: SOUND chime + GLOW.
>
> OVERLAY: *"Linh lực đi qua linh khí -- nó tích lực. Khi tới linh đan, nó truyền lực."*

**Step 6 -- First linh đan hit**:
> Linh lực reaches linh đan.
>
> Floating number: `+5% quality` GREEN.
>
> OVERLAY: *"Đan đang lớn. Tiếp tục."*

**Step 7 -- Around 50% quality**:
> Linh đan glow brightening.
>
> OVERLAY: *"Quality 50%. Sắp thăng phẩm."*

**Step 8 -- Phẩm thăng moment**:
> Linh đan quality hits 100%.
>
> SCREEN FLASH white. Linh đan visually changes: Phàm gray -> Linh blue.
>
> SOUND: gong + ascending notes.
>
> OVERLAY (large): *"PHẨM CẤP THĂNG -- LINH ĐAN ĐẠT LINH!"*

**Step 9 -- Pháp trận end**:
> Reward screen:
> - Linh Đan Linh phẩm
> - +200 XP
> - +1 Cổ Vật: "Sư Phụ Truyền Đan"

### Post-PT1 Sư Phụ dialogue (~30s)

> SƯ PHỤ: *"Đan đầu tiên. Như thầy luyện 50 năm trước."*
>
> *(Sư Phụ hands player a small bell.)*
>
> SƯ PHỤ: *"Đi tới mạn rừng. Có một đạo sĩ tu hành ở đó. Tên Mộc Linh. Hắn sẽ dạy con về Mộc nguyên tố."*
>
> *(Map updates to show Đạo Sĩ Mộc Linh node.)*

## Failure handling

None -- tutorial cannot fail.
