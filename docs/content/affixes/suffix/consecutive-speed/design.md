---
id: consecutive-speed
ten: Phi Tốc Liên Tiếp
category: suffix
tags: [speed, crit]
weight: 60
---

# Phi Tốc Liên Tiếp (`consecutive-speed`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Linh lực hit liên tiếp trong 1s: mỗi hit sau +5% velocity |
| T2 | +7% velocity mỗi hit liên tiếp |
| T3 | +10% velocity mỗi hit liên tiếp; 3 hit liên tiếp → next hit tự động crit |

## Tương tác

Bonus velocity per hit liên tiếp áp vào **velocity_factor** (§7.2 intensity formula) — cộng dồn additive mỗi hit trong window 1s. Nếu window reset (không hit trong 1s), velocity bonus reset. T3: 3 hit liên tiếp → next hit **auto crit** — proc độc lập, không tương tác với crit chance khác nhưng cộng với crit multiplier (`peak-crit`, keystone Sắc Bén). Suffix — kết hợp với prefix crit hoặc intensity bất kỳ. Weight 60.

## Build & Synergy

Roll trên mọi item base type. Build tốc độ duy trì:
- `charge-store` + `chain-link`: chain liên tục giữ window 1s → velocity cộng dồn nhiều hit → velocity_factor cao → intensity cao.
- T3 auto-crit sau 3 hit liên tiếp: kết hợp `peak-crit` (+45–60% intensity on crit) hoặc `savage-crit-burst` (AOE crit) → crit auto được amplify.
- Keystone **Sắc Bén** (×3 crit multi): auto-crit T3 × Sắc Bén = burst lớn mỗi 3 hit trong window.
- `swift-speed` / `accelerate-box` (prefix/suffix speed): cộng thêm velocity ngoài bonus per-hit → velocity_factor escalate nhanh hơn.
- Yếu trong build burst đơn lẻ (1 hit lớn rồi reset board) — cần nhiều hit liên tiếp để value.
