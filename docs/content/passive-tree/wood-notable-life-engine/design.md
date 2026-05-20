---
id: wood-notable-life-engine
ten: Sinh Cơ Tái Tạo
type: notable
element: wood
cluster: wood-notable
pos_x: 249.34
pos_y: 283.78
connections: [wood-keystone-proliferate, wood-notable-azure-dragon, wood-notable-longevity, wood-small-wood-affix-1]
---

# Sinh Cơ Tái Tạo (`wood-notable-life-engine`)

## Effect

Khi stability < 30%: heal +5%/s trong 5s. Cooldown 30s.

## Cơ chế

Trigger khi `linh_dan.stability` xuống dưới 30% threshold. Heal 5%/s trong 5s = +25% stability tổng nếu không bị hit tiếp trong window. Cooldown 30s tính từ lúc trigger (không phải lúc kết thúc heal). Không stack với heal từ tương sinh hit — cộng dồn độc lập.

## Synergy

Vai trò safety net cho build Sinh Sôi (keystone Proliferate) khi hai viên đi sai lane và gây double tương khắc hit. Kết hợp với `wood-notable-longevity` (+20% stability max, +0.3%/s regen) tạo lớp recovery kép: longevity giữ stability cao bình thường, life-engine cứu khi đã đổ vỡ. Dẫn tới keystone `wood-keystone-proliferate` — bắt buộc lấy trên đường đến keystone trong mọi build Mộc offensive.
