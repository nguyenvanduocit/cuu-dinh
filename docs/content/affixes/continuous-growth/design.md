---
id: continuous-growth
ten: Tăng Trưởng Tiếp Nối
category: suffix
tags: [offensive, utility]
weight: 100
---

# Tăng Trưởng Tiếp Nối (`continuous-growth`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Mỗi 5 va chạm liên tiếp không bị interrupt: +5% intensity tạm (max 3 stack) |
| T2 | Mỗi 4 va chạm: +6% intensity (max 4 stack) |
| T3 | Mỗi 3 va chạm: +8% intensity (max 5 stack); stack không reset giữa các ván |

## Tương tác

Bonus +intensity mỗi stack áp vào **player.intensity_multiplier** (§7.3 Lò affix layer) — additive với các prefix intensity khác trong cùng layer. Stack tích lũy khi N va chạm liên tiếp không bị "interrupt" (interrupt = linh lực bị chặn, chuyển hướng bất thường, hoặc board reset giữa ván). T3 "stack không reset giữa các ván" là ngoại lệ quan trọng: stack tích qua nhiều ván trong cùng pháp trận (5–8 ván + boss). Suffix — ghép với prefix bất kỳ.

## Build & Synergy

Roll trên mọi item base type. Scale theo thời gian trong pháp trận:
- T3 cross-ván stack: tối đa 5 stack × +8% = +40% intensity ở ván cuối nếu không bị interrupt — đây là "late scaling" affix mạnh nhất vào boss fight.
- `charge-store` + `chain-link`: chain liên tục ít bị interrupt → stack tích đều đặn.
- `anchored` / `charm-seal-ward`: bảo vệ linh khí khỏi nhiễm khí → board ổn định → ít interrupt → stack duy trì tốt.
- Kết hợp `ancient-dragon-rise` (burst đầu ván): mỗi ván mới bắt đầu với hit đầu mạnh + stack đã tích từ ván trước → crescendo rõ rệt qua pháp trận.
