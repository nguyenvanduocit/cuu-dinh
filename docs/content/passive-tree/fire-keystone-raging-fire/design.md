---
id: fire-keystone-raging-fire
ten: Liệt Hoả
type: keystone
element: fire
cluster: fire-keystone
pos_x: -252.74
pos_y: 347.87
connections: [fire-notable-nine-heavens-thunder, fire-notable-fire-counter-metal, fire-notable-blaze-heart]
---

# Liệt Hoả (`fire-keystone-raging-fire`)

## Effect

KEYSTONE: Va chạm Hoả đánh dấu "cháy" 5s, tick damage 8% intensity/s. Trade-off: Hoả base hit -25% intensity.

## Cơ chế

Đổi mô hình damage Hoả: thay vì burst 1 lần (đồng hành ×0.10 quality, §7.2), linh đan nhận DoT 5 giây = 5 tick × 8% intensity = tổng 40% intensity/hit nếu linh đan không bị hit thêm trong 5s. Base hit penalty −25% intensity nghĩa là initial hit_factor = 0.75× — net dương chỉ khi tick hoàn thành. Tick không áp dụng damage formula tương sinh/tương khắc riêng — tính từ intensity của hit gốc.

## Synergy

Keystone định nghĩa archetype **Pháp Sư** (Hoả chain): đặt nhiều linh khí Hoả để linh đan liên tục bị đánh dấu cháy, tick overlap nếu hit nhanh (DoT stack). Đánh đổi: burst build (1 hit lớn) trở nên yếu hơn — buộc phải build velocity cao + chain dày. Cộng hưởng với Đạo Phái Vô Cực (random ×2 có thể nhân intensity tick) và affix `blazing-corruption-bane`. Không tương thích với Hộ Pháp muốn ít hit Hoả vào đan Thổ.
