---
id: base-damage-reduce
ten: Giảm Thiệt Hại Nền
category: suffix
tags: [defensive, sustain]
weight: 100
---

# Giảm Thiệt Hại Nền (`base-damage-reduce`)

## Tier Values

| Tier | Effect |
| --- | --- |
| T1 | Giảm 8% damage nhận từ linh lực trung tính (không tương sinh không tương khắc) |
| T2 | Giảm 12% damage trung tính |
| T3 | Giảm 18% damage trung tính; trung tính hit → heal stability +0.3% |

## Tương tác

Áp vào lớp **giảm thiệt hại** nhận từ linh lực trung tính — tức linh lực không thuộc tương sinh cũng không thuộc tương khắc với linh đan (§7.2 else branch: `quality += intensity × 0.05`). Giảm 8–18% damage trung tính nghĩa là nhân thêm hệ số (1 - reduction%) vào intensity trước khi apply quality change. T3 bonus: trung tính hit → heal stability +0.3% (nhỏ nhưng tích lũy theo số hit). Không ảnh hưởng tương sinh (hit tốt) hay tương khắc (hit xấu).

## Build & Synergy

Roll trên mọi item base type. Phòng thủ niche — giá trị khi:
- Board có nhiều linh lực ngẫu nhiên (pháp trận `Hỗn Nguyên`, map mod ngẫu nhiên element) → nhiều hit trung tính.
- Build sustain (tối đa stability của linh đan) muốn chặn mọi nguồn thiệt hại kể cả trung tính.
- T3 heal +0.3%/hit trung tính: kết hợp `branch-recovery` (heal Mộc), `azure-thunder-frost` T3 (heal Thuỷ tương sinh) → sustain từ nhiều nguồn.
- Thay thế bằng element-specific defense nếu biết rõ linh lực sẽ đến từ element cụ thể.
