---
id: bead-absorb
ten: Châu Hấp Thu
category: implicit
tags: [offensive, utility]
compatibleItemTypes: [bead]
weight: 100
---

# Châu Hấp Thu (`bead-absorb`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Hấp thụ linh lực 1 lần; lưu trữ; sau 3 hit phun ra với +30% intensity |
| T2 | Hấp thụ linh lực 1 lần; lưu trữ; sau 2 hit phun ra với +45% intensity |
| T3 | Hấp thụ linh lực bất kỳ; sau 2 hit phun ra với +60% intensity + cùng nguyên tố |

## Tương tác

Cơ chế **store-and-release**: linh lực bị giữ lại, không tính intensity ngay. Khi phun ra, intensity tính tại thời điểm phun dựa trên **velocity lúc hấp thụ** × **charge_factor tích lũy** × **player_mult** — velocity không đổi khi stored (Rapier physics freeze). T3 kế thừa nguyên tố linh lực → phun ra vẫn tương sinh/tương khắc đúng với linh đan. Không stack: mỗi Châu chỉ hấp thụ 1 lần (T1–T2); T3 hấp thụ bất kỳ linh lực nào nhưng vẫn 1 lần.

## Build & Synergy

Implicit — chỉ roll trên **bead** (`compatibleItemTypes: bead`). Tăng intensity hit cụm lớn:
- `bead-chain` (Châu nhảy chain): phun ra với +60% intensity → nhảy tiếp → chain intensity escalation.
- `charged-might` (+intensity khi charge >= N hops): nếu linh lực tích charge cao trước khi hấp thụ → phun ra với charge_factor lớn + absorb bonus.
- `box-store-energy` (Hộp trữ): cùng mechanic store-then-burst → đặt Châu sau Hộp để double-delay = intensity rất lớn khi bung.
- Build **Châu** chuyên: stack nhiều bead implicit để tạo "nổ trễ" theo làn sóng.
