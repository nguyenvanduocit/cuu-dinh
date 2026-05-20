---
id: cosmos-furnace
ten: Đan Lư Càn Khôn
type: cauldron
element: void
category: build-defining
dropWeight: 100
dropRateHint: atlas drop, rare
---

# Đan Lư Càn Khôn (`cosmos-furnace`)

## Lược tả

Cổ vật tích lũy dài hạn: mỗi ván sống sót, một linh khí trên board nhận thêm một affix tier — nhưng lò nhỏ lại, board bị giới hạn, và sức mạnh chỉ đến sau nhiều ván gian khổ.

## Cơ chế

Sau mỗi ván hoàn thành (không bể), **1 linh khí bất kỳ trên board** được nâng **+1 affix tier** vĩnh viễn trong pháp trận đó (không carry sang pháp trận khác). Player chọn linh khí nào được nâng.

| Tier | Affix tier tăng mỗi ván | Board size tối đa | Linh khí nhận nâng tier mỗi ván |
| --- | --- | --- | --- |
| T1 | +1 tier, tối đa T3 | 5 linh khí (thay vì 8 mặc định) | 1 linh khí |
| T2 | +1 tier, tối đa T3 | 6 linh khí | 1 linh khí, player chọn affix nào được nâng |
| T3 | +1 tier, tối đa T3; ván thắng boss: +2 tier | 7 linh khí | 1 linh khí, player chọn affix + loại tier |

- **Affix tier cap T3**: linh khí đã T3 không thể nâng thêm — tích lũy redistribute sang linh khí khác (player chọn). Sau 5-8 ván = 5-8 linh khí được nâng tier, hoặc 2-3 linh khí đạt T3 hết affix.
- **Board size 5 slot (T1)**: mặc định 8 linh khí slot (game default) → chỉ còn 5. Chain ngắn hơn, ít hop hơn, charge tích lũy chậm hơn. Mất 3 linh khí = mất ~30-60% chain potential tùy board setup.
- **"Vĩnh viễn trong pháp trận"**: nâng tier không xóa khi ván kết thúc — tiến độ giữ xuyên suốt pháp trận. Sau boss phẩm trận, reset khi vào pháp trận mới.

## Đánh đổi (Downside)

- **Board giới hạn 5-7 linh khí (T1: 5, thay vì 8)**: mất 3 slot = chain cơ bản ngắn hơn, ít bounce hơn, charge per hop khó tích lũy đến cap 200% (§2, cần 10 hops). Build phụ thuộc chain dài (`Ngũ Hành 5-cycle` +200% intensity) bị punish nặng.
- **Power ramp chậm**: ván 1-2 Lò Càn Khôn không mạnh hơn lò thường (chỉ mới +1 tier 1-2 linh khí). Chỉ đến ván 5-8 mới thật sự bùng nổ — build phải sống sót đủ lâu mà không cần power spike sớm.
- **5 linh khí T1 bị "Huyết Sát"** dễ mất hơn (§8: durability -10/hit, 5 linh khí ít = hit/linh khí nhiều hơn) — map mod Huyết Sát counters hard.

## Vì sao (WHY)

- **5 slot thay vì free**: combat-math §3 chain nguồn intensity quan trọng nhất. Board nhỏ = chain cap thấp = intensity ceiling thấp → offsets affix tier gain. Player trade breadth (nhiều linh khí nhiều chain) lấy depth (ít linh khí nhưng từng cái rất mạnh).
- **Power ramp vs. snap power**: amitabha-statue cũng tích lũy (flat quality/ván) nhưng không punish board. Lò Càn Khôn mạnh hơn ở cuối pháp trận nhưng punish sớm nặng hơn — differentiation rõ ràng.
- **Player choice (T2+)**: không random linh khí nào được nâng — player quyết định strategically. Skill expression: chọn đúng linh khí đúng thời điểm = power; chọn sai = waste.

## Synergy & Build

- **Archetype**: long-run accumulator / board depth. Đạo Phái khớp nhất: **Linh Sơn** (Hồi Vang echo — bù chain từ board nhỏ, mỗi linh khí hit tạo echo = effectively chain dài hơn) và **Tử Vi** (Thiên Nhãn — xem trước drop, giúp plan linh khí nào nâng tier tối ưu mỗi ván).
- **Combo**: `thousand-mile-scythe` (hi sinh linh khí yếu làm đạn — Lò Càn Khôn board nhỏ = linh khí nào cũng quan trọng, nhưng T3 Lưỡi Hái hồi sinh 30% linh khí hi sinh → combo manageable); Đan Pháp Marathon (nhiều ván = nhiều tier stack).
- **Anti-synergy**: `landscape-map` (+5 linh khí slot — ngược hoàn toàn, board lớn vs. board nhỏ forced); build chain-dependent `Ngũ Hành 5-cycle` (cần ≥5 nguyên tố trên board, 5 slot vừa đủ nhưng không có buffer).
- **Drop**: dropWeight 100, `atlas drop, rare` — build-defining nhưng accessible, phù hợp player muốn thử lối chơi patience.
