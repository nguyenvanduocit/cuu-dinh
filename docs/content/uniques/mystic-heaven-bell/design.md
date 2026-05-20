---
id: mystic-heaven-bell
ten: Huyền Thiên Cổ Chung
type: bell
element: metal
category: build-defining
dropWeight: 100
dropRateHint: atlas drop, rare
---

# Huyền Thiên Cổ Chung (`mystic-heaven-bell`)

## Lược tả

Cổ vật build-defining cho lối Tích Lôi: mỗi va chạm tích một sóng âm — đến 5 sóng, kích nổ AoE phủ toàn board. Sức mạnh trong sự tích luỹ; nhưng sau mỗi vụ nổ, Cổ Chung câm lặng 4 giây — không tích, không nổ.

## Cơ chế

Mỗi lần linh lực va chạm bất kỳ linh khí, `mystic-heaven-bell` tích **1 sóng âm** (max 5). Khi đạt 5 sóng: tự động kích **AoE boom** phủ toàn board.

| Tier | AoE intensity | Cooldown sau nổ | Đặc tính |
| --- | --- | --- | --- |
| T1 | 150% intensity trung bình của 5 hit tích lại | 4s câm lặng | Element AoE = Kim (nguyên tố chuông) |
| T2 | 175% intensity trung bình; 4 sóng đã đủ kích nổ | 3s câm lặng | Element AoE = element linh lực gây sóng cuối |
| T3 | 200% intensity trung bình; 4 sóng; nổ gây thêm +10 stability damage tới linh đan (self-punish nếu chain xấu) | 2s câm lặng | Element AoE = element đa số (majority vote trong 4 sóng) |

- **Intensity AoE = trung bình 5 hit đã tích**: build cần *tất cả 5 hit đều mạnh* để AoE tối đa; 1 hit yếu kéo xuống trung bình (combat-math §2, intensity = base × player_mult × map_mult).
- **Element AoE** tương tác đầy đủ với element matrix (§1): AoE Kim vào linh đan Mộc = tương khắc → −40% stability; vào linh đan Kim = đồng hành → +10% quality.
- **T3 +10 stability damage self**: nếu AoE element sai (tương khắc với linh đan), nổ gây −10 stability thêm lên linh đan — penalty tự ngã vì chain xấu.

## Đánh đổi (Downside)

- **4s câm lặng sau nổ**: trong 4 giây không tích sóng → không có AoE → engine tạm dừng hoàn toàn. Build hoàn toàn phụ thuộc timing nổ; nổ sai lúc (ví dụ mid-boss-phase) = 4 giây trống.
- **Intensity = trung bình 5 hit**: không chọn được "5 hit tốt nhất" — tích đủ thứ tự các hit xảy ra, kể cả hit yếu. Một ván nhiều hit tương khắc yếu kéo trung bình xuống → AoE không đủ mạnh dù timing đúng.
- **T3 self-damage +10 stability**: nổ phải element đúng để không tự hại. Ở T16 với Tâm Ma boss (§5 boss attack −5 đến −25/hit), +10 tự-damage từ AoE xấu cộng boss damage = accelerated bể.
- **Tách biệt với `great-bell`**: Cổ Chung tích-tích-nổ (burst cycle, active timing); Chuông Đại Hồng = passive tick đều không ngừng. Hai kim loại, không stack được có ý nghĩa (cùng lúc 1 build chỉ dùng tốt 1 trong 2 nhịp điệu).

## Vì sao (WHY)

- **150-200% intensity trung bình (không ×10)**: AoE phủ toàn board là tác động rất lớn; ×10 như `thousand-mile-scythe` không cân bằng vì không tốn linh khí hi sinh. 150-200% trung bình = tương đương 5 hit trực tiếp với intensity trung bình — reward tích luỹ, không reward vô lý.
- **4s câm lặng (không 1-2s)**: nếu cooldown ngắn, build "spam 5 hit" quá dễ → AoE quá thường xuyên. 4s tạo ra rhythm rõ ràng: tích → nổ → chờ → tích; buộc player chủ động trong giai đoạn câm.
- **Category build-defining (không sustain-defensive)**: AoE burst không phải defensive — không bảo vệ stability, không heal. Cơ chế hoàn toàn tấn công; nổ sai = self-damage (T3) → xứng build-defining hơn sustain.

## Synergy & Build

- **Archetype**: Tích Lôi / AoE Burst. Đạo Phái **Cửu Âm** (Nguyền Linh Lực — aura r=150px giảm phòng thủ linh khí 30%): mỗi hit trong 5-sóng-tích đều benefit từ aura debuff → trung bình 5 hit cao hơn → AoE mạnh hơn. Timing AoE dễ plan khi biết rõ aura đang bao phủ.
- **Combo**: keystone **Sắc Bén** (crit ×3) — nếu hit thứ 5 là crit, intensity trung bình tăng vọt → AoE bùng nổ; Đan Pháp **Vô Lượng** (intensity amplifier, nếu có) feed vào trung bình.
- **Đạo Phái Tử Vi** (xem trước 3 drop + timing): biết trước linh lực element sắp rơi → plan element AoE (T2/T3) trước khi tích đủ 5 — control AoE element.
- **Anti-synergy**: `great-bell` (passive tick engine — nhịp điệu trái ngược, không mix build tốt); build velocity thấp (linh lực chậm → 5 sóng tích lâu, 4s câm trở nên cực đoan tương đối); Đan Pháp **Hỗn Nguyên** (nguyên tố chaos → element AoE sẽ random → T3 self-damage risk cao).
- **Drop**: dropWeight 100, `atlas drop, rare` — build-defining accessible, skill ceiling cao.
