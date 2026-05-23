---
id: longevity-inner-qi
ten: Trường Sinh Nội Khí
category: suffix
tags: [sustain]
weight: 60
---

# Trường Sinh Nội Khí (`longevity-inner-qi`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi ván win: +0.5% max stability linh đan (stack pháp trận này; max 5%) |
| T2 | Mỗi ván win: +0.8% max stability (max 8%) |
| T3 | Mỗi ván win: +1.2% max stability (max 12%) |

## Tương tác

Tác động lên **max stability** của linh đan (§5.3) — tăng ngưỡng trên trước khi stability overflow (không liên quan đến stability hiện tại). Stack cộng dồn mỗi ván win trong cùng pháp trận; reset khi pháp trận kết thúc. T3 max +12% nghĩa là linh đan có thể chịu thêm ~12% tương khắc hit thêm trước khi bể — tương đương `intensity * 0.40 * 0.12 = ~5%` buffer thực tế. Không ảnh hưởng quality, không ảnh hưởng formula intensity.

## Build & Synergy

Roll trên mọi item base type. Giá trị tỷ lệ với số ván win liên tiếp — pháp trận dài (5-8 ván) tận dụng tốt nhất:
- Kết hợp `recovery` (heal stability mỗi hit) + `nectar-recovery` (tương sinh heal) — ba lớp sustain stability cùng lúc.
- `revive-force` cover khi stability < 30%; affix này mở rộng buffer trước khi chạm ngưỡng đó.
- Đạo Phái Mộc (sustain archetype) tận dụng tốt nhất — passive tree có node tăng stability heal rate.
