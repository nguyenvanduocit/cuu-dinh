---
id: fire-wind-fan
ten: Quạt Phong Hoả
type: fan
element: fire
rarity: Common
dropPool: Common
tags: [fire, aoe, push]
---

# Quạt Phong Hoả (`fire-wind-fan`)

## Lược tả

Pháp khí Hoả hệ dạng quạt — khi linh lực Hoả va chạm, toả sóng Hoả lan diện rộng. Vai trò vật lý: **bộ khuếch đại diện tích**; mỗi hit một điểm nhân thành sóng phủ vùng 100px, biến một linh lực đơn thành nhiều hit đồng thời. Đặt tại vị trí linh lực hay qua để wave phủ tối đa linh khí + linh đan.

## Implicit

Mỗi lần linh lực Hoả va chạm Quạt Phong Hoả: phát sinh **sóng AOE Hoả bán kính 100px** quanh điểm va chạm, gây damage = **0.5× intensity** của linh lực đó lên mọi linh khí và linh đan trong vùng. Linh lực gốc tiếp tục nảy bình thường sau khi tạo sóng.

- Sóng AOE áp dụng tương sinh/tương khắc: Hoả→Thổ (tương sinh) heal stability; Hoả khắc Kim gây -40% intensity penalty (§2).
- Linh lực không phải Hoả: không kích wave, Quạt hoạt động như linh khí vật lý thông thường (nảy bình thường).
- Cùng 1 hit có thể vừa tạo wave (0.5×) vừa là hit gốc (1×) — tổng 2 nguồn damage riêng biệt.

## Affix pool

| Tag | Affix tiêu biểu |
|---|---|
| `offensive` | Wave damage tăng 0.65× / 0.8× intensity |
| `aoe` | Bán kính wave 140px / 180px |
| `push` | Wave đẩy linh khí nhẹ ra ngoài 30px (repositioning) |
| `chain` | Wave thứ hai lan thêm 50px sau khi chạm linh khí đầu tiên |
| `speed` | Tốc độ lan wave tăng ×1.5 — phủ board nhanh hơn trước khi linh lực gốc rời vùng |

## Build role

**Element**: Hoả. **Archetype**: AOE splash / spread / đa mục tiêu.

- **Vai trò cốt lõi**: board Common cost cho build cần thêm nguồn AOE Hoả mà không tốn slot Rare. Phù hợp đặt 2–3 Quạt trên board để mọi linh lực Hoả đều kích wave — tổng DPS AOE cao mà cost thấp.
- **Đạo Phái khớp nhất**: **Cửu Âm** (`nine-yin`) — wave phủ 100px đi qua vùng aura Nguyền, gây hit trong aura = debuff stack nhanh hơn; `nine-yin-notable-curse-slow` làm linh lực Hoả chậm lại trong aura, wave lan trong thời gian tiếp xúc dài hơn. **Thái Cực** (`tai-chi`) — Quạt Hoả là nguồn nguyên tố Hoả rẻ để duy trì ≥3 nguyên tố trên board cho `tai-chi-notable-harmony-bonus`.
- **Combo**: Châu Hoả Phượng (`fire-phoenix-bead`) — wave từ Quạt tích điểm cho Châu mà không cần player bắn thêm; board tự động tích lũy nổ định kỳ. Hộp Hoả Tinh (`fire-essence-box`) — wave từ Quạt không tích vào Hộp (chỉ linh lực gốc mới tích), nhưng wave phủ linh đan = hit thêm trong lúc chờ Hộp xả.
- **Anti-synergy**: build "Bùng Bạo" single-hit — 0.5× wave loãng tổng damage khi chiến lược là 1 cú ×2 intensity.
