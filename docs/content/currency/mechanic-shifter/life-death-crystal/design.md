---
id: life-death-crystal
ten: Sinh Tử Tinh
category: mechanic-shifter
weight: 60
---

# Sinh Tử Tinh (`life-death-crystal`)

## Lược tả

Nguyên Liệu đổi fail state của pháp trận: thay vì mất hoàn toàn khi linh đan bể, **được thử lại 1 lần** với 50% quality hoàn trả. Lưới an toàn cho bí cảnh high-risk.

## Effect

Khi linh đan bể trong pháp trận này (stability ≤ 0, hoặc brick chance trigger §5):
- **Pháp trận không kết thúc ngay** — kích hoạt cơ chế Sinh Tử.
- Linh đan được **hồi sinh** với stability = 50 và quality = **50% quality tại thời điểm bể** (không hoàn về 0 — mất nửa progress đã làm).
- Pháp trận tiếp tục từ ván tiếp theo, timeline còn lại giữ nguyên.
- Sinh Tử chỉ dùng được **1 lần** — nếu bể lần hai, pháp trận kết thúc bình thường.

Không ảnh hưởng intensity formula hay drop pool. Modifier thuần mechanic-shifter.

## Khi nào dùng

- Bí cảnh high-risk: `dragon-bone` (boss sinh đôi), Đan Pháp `lightning` (Thiên Kiếp T14-T16), `corruption-bead` kép → nguy cơ bể linh đan cao. Sinh Tử Tinh là insurance.
- Player đang push phẩm cấp mới lần đầu: quality cao mà bể vì 1 đại khắc bất ngờ → Sinh Tử Tinh bảo toàn 50% tiến trình.
- Compose thử nghiệm: khi muốn test compose lạ ở tier cao mà chưa chắc chắn win rate.

## Synergy

- **+ `dragon-bone` (Long Cốt)**: boss sinh đôi tăng rủi ro bể đáng kể; Sinh Tử Tinh là safety net bắt buộc khi chạy Long Cốt ở T14+.
- **+ `star-stone` (Tinh Tinh Thạch)**: Tâm Ma modifier kép từ Tinh Tinh Thạch tăng nguy hiểm; Sinh Tử Tinh bù đắp risk — standard combo cho endgame high-stack.
- **+ `primordial-chaos-qi` (Hỗn Nguyên Khí)**: marathon vô hạn ván tích lũy fatigue; Sinh Tử Tinh cho phép bể 1 lần mà không mất toàn bộ progress marathon.
- **Không cần thiết ở T1-T8**: win rate T1 ~70%, T5 ~65% (§9 balance targets) — Sinh Tử Tinh là overinvestment. Dành cho T12+ hoặc compose nguy hiểm.
