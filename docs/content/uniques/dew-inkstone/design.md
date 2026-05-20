---
id: dew-inkstone
ten: Nghiên Mực Sương
type: inkstone
element: void
category: build-defining
dropWeight: 100
dropRateHint: atlas drop, rare
---

# Nghiên Mực Sương (`dew-inkstone`)

## Lược tả

Cổ vật build-defining cho lối AoE đám đông: mỗi linh lực chạm linh khí để lại vệt mực ngũ hành — vùng độc tố 3s gây damage liên tục cho mọi linh lực khác đi qua. Biến board thành ma trận bẫy chồng bẫy.

## Cơ chế

Khi một linh lực hoàn tất va chạm với bất kỳ linh khí, nó để lại **vệt mực** tại điểm va chạm, tồn tại **3 giây**. Bất kỳ linh lực nào khác đi qua vệt mực nhận thêm damage theo nguyên tố của vệt.

| Tier | Diện tích vệt | Damage/giây (% intensity gốc) | Thời gian |
| --- | --- | --- | --- |
| T1 | r=40px | 15% intensity gốc/s | 3s |
| T2 | r=55px | 20% intensity gốc/s + slow 10% velocity | 3s |
| T3 | r=70px | 25% intensity gốc/s + slow 15% velocity + element của vệt = nguyên tố linh lực tạo ra | 3s |

- **Nguyên tố vệt = nguyên tố linh lực tạo vệt** → vệt Mộc gây tương sinh với linh đan Thuỷ, vệt Kim gây tương khắc với linh đan Mộc — tương tác đầy đủ với element matrix (combat-math §1).
- **Chồng vệt**: nhiều vệt cùng vùng cộng dồn damage/s; không cap số vệt.
- **Intensity vệt** = intensity của linh lực tạo vệt tại thời điểm va chạm → chain dài trước khi tạo vệt = vệt mạnh hơn (combat-math §2).

## Đánh đổi (Downside)

- **Linh lực của chính mình cũng ăn vệt** — không phân biệt "friendly": linh lực Hoả chạy qua vệt Kim sẽ nhận tương khắc passthrough, làm giảm stability của linh đan nếu vệt Kim đó là đồng nguyên tố linh đan Kim. Board dày vệt = mạo hiểm tự-damage.
- **Velocity slow T2/T3** làm giảm velocity factor (combat-math §2, 0.5x–2.0x) → linh lực qua nhiều vệt mất đà, intensity active hit suy giảm. Chain dài hết ý nghĩa nếu linh lực bị slow xuống 0.5x trước khi tới linh đan.
- **Board management nặng**: cần theo dõi thời gian tồn tại vệt; vệt hết hạn không kiểm soát được = không reliable. Khác hoàn toàn với lối single-hit chính xác (`ancient-dragon-soul-jade`).

## Vì sao (WHY)

- **15-25%/s thay vì flat damage**: vệt là DoT theo intensity gốc → không trivial-hoá build flat-intensity thấp; scale tự nhiên với progression (combat-math §3 intensity sources).
- **Element vệt = element linh lực**: giữ nguyên hệ thống element matrix, không tạo ngoại lệ cứng; đồng thời tạo ra chiều sâu — player xây board để linh lực Mộc luôn tạo vệt Mộc tại vị trí linh đan Thuỷ đứng.
- **Self-damage intentional**: AoE weapon phải có rủi ro self-hit; ngăn build "đặt mọi thứ bừa". Punish đủ mạnh (tương khắc = -40% stability, combat-math §5) để bắt buộc thiết kế board có chủ đích.

## Synergy & Build

- **Archetype**: AoE vệt chồng. Đạo Phái **Cửu Âm** (Nguyền Linh Lực — aura giảm phòng thủ 30% trong r=150px) cộng hưởng: vệt nằm trong vùng aura → intensity vệt tăng thêm 30% hiệu quả.
- **Đạo Phái Linh Sơn** (echo 10% spawn): echo tạo vệt riêng → board nhân đôi số vệt mà không tốn thêm linh lực gốc.
- **Combo**: keystone **Trọng Sơn** (Huyết Sát immune) + `landscape-map` (+5 slot, board rộng → vệt phủ diện tích lớn hơn); Đan Pháp **Hỗn Nguyên** (nhiều nguyên tố cùng board → vệt đa nguyên tố).
- **Anti-synergy**: build single-precision "Bùng Bạo" (1 hit mạnh) — vệt DoT không có ý nghĩa khi linh lực tới linh đan trong 1 hop, không đi qua vệt nào; `lantern-spirit-path` (darkness) khiến không thấy vệt đang active.
- **Drop**: dropWeight 100, `atlas drop, rare` — build enabler gặp được ở mid-atlas.
