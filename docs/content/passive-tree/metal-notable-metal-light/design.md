---
id: metal-notable-metal-light
ten: Kim Quang Trận
type: notable
element: metal
cluster: metal-notable
pos_x: -34.92
pos_y: -376.14
connections: [metal-keystone-sharpness, metal-notable-heaven-thunder, metal-notable-death-kill, metal-small-metal-burst-1]
---

# Kim Quang Trận (`metal-notable-metal-light`)

## Effect

+25% crit chance Kim khi 3+ linh khí Kim đứng cách nhau ≤120px

## Cơ chế

Điều kiện kiểm tra mỗi frame: đếm linh khí Kim có center-to-center distance ≤120px với ít nhất 2 linh khí Kim khác. Nếu thoả ≥3 linh khí Kim trong cluster 120px: áp +25% crit chance additive lên mọi hit Kim trong frame đó. Điều kiện dynamic — bật/tắt theo vị trí linh khí real-time.

## Synergy

Node chủ chốt của cluster density Kim. Yêu cầu board setup chặt: linh khí Kim cần đặt gần nhau (≤120px) — hạn chế spread nhưng tạo ra crit-burst zone mạnh. Kết hợp `metal-small-metal-burst-1/2` (+10% intensity ván sau khi crit) để duy trì momentum. Path hội tụ tới `metal-keystone-sharpness` qua `metal-notable-death-kill`: ba node cùng nhau tạo engine crit hoàn chỉnh. Đạo Phái Kim (via `metal-notable-junction-metal`) thường có thêm node density/proximity synergy trong subtree riêng.
