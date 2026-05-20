# Tương Sinh -- Script

## State machine

```
[Đạo Sĩ Mộc Linh NPC]
    |
[Pháp Trận #2: Tương Sinh] <- can lose, gentle retry
    |
[Sư Phụ mid-Act dialogue]
```

## Pre-pháp-trận

```
+=========== TUONG SINH ==============+
|                                     |
|   Tu hanh thu hai                   |
|                                     |
|   Muc tieu: Luyen linh dan Moc     |
|   tu Pham -> Bao (2 pham)          |
|                                     |
|   Stability: free play             |
|   Linh luc: 70% Moc + 30% Thuy    |
|                                     |
|   Hint: Thuy sinh Moc -- chu y    |
|   cac vien xanh duong!             |
|                                     |
|   [Bat dau]                         |
+=====================================+
```

## In-pháp-trận overlays

**On first Thuỷ collision with linh khí Mộc**:
> Floating number: `+30%` BIG GREEN
>
> OVERLAY (3s): *"Thuỷ SINH Mộc -- nó tăng cường đan."*

**On first đồng hành Mộc-Mộc collision**:
> Floating number: `+10%` SMALLER GREEN
>
> OVERLAY (2s): *"Đồng hành -- buff nhẹ."*

**Mid-pháp-trận NPC voice line**:
> ĐẠO SĨ MỘC LINH (text appears top): *"Thuỷ sinh Mộc -- đan của con sẽ uống Thuỷ lực mà lớn."*

**Stability damage moment** (if it happens):
> Floating number: `-X stability` RED
>
> OVERLAY (3s): *"Có nguyên tố nào đó tương khắc với đan. Chú ý placement."*

## Failure recovery

If linh đan bể:

```
+==============================+
|   LINH DAN BE                |
|                              |
|   Dung nan. Dan luyen hong   |
|   la chuyen thuong.          |
|                              |
|   Hint: Thuy sinh Moc, Moc  |
|   khong khac Thuy. Ban an   |
|   toan voi Thuy luc.        |
|                              |
|   [Thu lai]                  |
+==============================+
```

Free retry, no penalty.

## Post-PT2 Sư Phụ dialogue (~30s)

> SƯ PHỤ: *"Bảo phẩm. Khá nhanh. Con có thiên phú."*
>
> SƯ PHỤ: *"Bây giờ -- Kim. Tương khắc với Mộc. Mộc chính của con là Mộc, nên Kim sẽ làm con đau."*
>
> SƯ PHỤ: *"Đi tới đỉnh kế tiếp. Có lão tiều phu ở giữa đường, có thể cho con vài thứ. Đừng vội qua."*
