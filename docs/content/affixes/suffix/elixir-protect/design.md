---
id: elixir-protect
ten: Bảo Vệ Linh Đan
category: suffix
tags: [defensive]
weight: 60
---

# Bảo Vệ Linh Đan (`elixir-protect`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Khi stability linh đan < 30%: linh khí này nhận thêm 1 hit bảo vệ → linh lực tương khắc bị deflect |
| T2 | Khi stability < 35%: deflect tương khắc |
| T3 | Khi stability < 40%: deflect; deflect trả lại 30% intensity về nguồn |

## Tương tác
Deflect layer hoạt động trước formula §7.2 — linh lực tương khắc bị chặn, không apply stability drain (-0.40 × intensity). T3 reflect 30% intensity về nguồn: nếu linh lực bounced trúng linh khí khác với element tương sinh với đan → gây quality gain thay vì stability drain. Condition `linh_dan.stability < threshold` check real-time per hit. Cặp tự nhiên với `desperate-frenzy` (prefix, cần low stability để kích buff offense).

## Build & Synergy
Roll trên statue, talisman, charm (tag `defensive`). Pair chuẩn nhất trong game: `desperate-frenzy` (prefix offense tại low stability) + `elixir-protect` (suffix defense tại low stability) trên hai linh khí riêng — desperate-frenzy gây damage cao, elixir-protect ngăn bể. Deflect T3 có thể convert linh lực thành quality gain nếu redirect đúng element — cần routing board tốt. Đạo Phái **Thái Cực** (+5% all) và **Hộ Pháp** archetype (Thổ→Mộc, sustain) là home.
