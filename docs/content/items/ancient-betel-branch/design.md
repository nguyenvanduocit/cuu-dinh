---
id: ancient-betel-branch
ten: Cây Trầu Cổ
type: branch
element: wood
rarity: Common
dropPool: Common
tags: [wood, aura, infect]
---

# Cây Trầu Cổ (`ancient-betel-branch`)

## Lược tả

Nhánh trầu cau linh hoá từ thời tổ tông. Toả aura Mộc khí liên tục — mọi linh khí lân cận bị "nhiễm" Mộc 5 giây, tạm thời chuyển sang element Mộc để tương sinh hoặc tương khắc theo ý đạo sĩ.

## Implicit

Aura thường trực bán kính `±120px`: mọi linh khí trong vùng bị nhiễm khí Mộc `5s` (combat-math §4.2 resist mechanic — linh khí ngược element bị nhiễm khí tạm chuyển element). Linh lực qua linh khí nhiễm Mộc được coi là tương sinh/tương khắc theo Mộc element của linh khí đó. Bản thân cành không phản linh lực — chỉ tỏa aura, không va chạm vật lý.

## Affix pool

Dựa trên tags `[wood, aura, infect]` và base type `branch`:
- **Prefix** (`elemental`, `aoe`, `utility`): `+Xpx bán kính aura nhiễm Mộc`, `thời gian nhiễm Mộc +Xs`, `linh khí nhiễm Mộc gain +X% intensity Mộc`
- **Suffix** (`chain`, `utility`, `offensive`): `linh lực Mộc qua vùng aura +X% tốc độ`, `% chance nhiễm kép (Mộc + nguyên tố gốc đồng thời)`, `linh khí nhiễm Mộc: tương sinh chain +1 hop bonus`

## Build role

**Archetype**: Mộc-control / element-conversion. Vai trò là "bộ chuyển đổi board" — đặt cành trầu giữa board để toàn bộ linh khí quanh đó tạm thành Mộc, rồi dùng linh lực Mộc để tương sinh kép. Kết hợp với **Quạt Trúc Cổ** (`ancient-bamboo-fan`) để tạo tốc độ cao sau khi element đã chuẩn. Đạo Phái khớp: **Mộc Linh** và **Hộ Pháp** (Thổ→Mộc arc — nhiễm Mộc làm Thổ linh khí "giả Mộc", tương sinh Hoả). Điểm yếu: không có intensity riêng, phụ thuộc các linh khí khác phát huy.
