---
id: primordial-chaos-qi
ten: Hỗn Nguyên Khí
category: mechanic-shifter
weight: 60
---

# Hỗn Nguyên Khí (`primordial-chaos-qi`)

## Lược tả

Nguyên Liệu cực đoan nhất trong mechanic-shifter: **xoá bỏ giới hạn ván** của pháp trận, chuyển sang cấu trúc marathon vô hạn. Player tự quyết khi nào thoát — nhưng thoát muộn đồng nghĩa tích lũy lớn hơn lẫn rủi ro fatigue tăng dần.

## Effect

Pháp trận này chuyển sang `MapVariant: marathon` (per `MapVariant` enum). Cơ chế:
- **Số ván không giới hạn**: không có countdown ván còn lại — pháp trận tiếp tục spawn ván mới cho đến khi player thoát hoặc linh đan bể.
- **Boss spawn**: boss vẫn xuất hiện định kỳ (mỗi 5-8 ván thường, như cấu trúc gốc) — không mất boss, chỉ mất giới hạn tổng.
- **Loot tích lũy**: mỗi ván thêm vào loot pool; thoát sau 15 ván được loot ×3 so với pháp trận 5 ván thường.
- **Fatigue mechanic**: sau mỗi 5 ván vượt quá cấu trúc gốc (>8 ván), intensity tâm ma modifier tăng +10% mỗi 5 ván tiếp — pháp trận ngày càng nguy hiểm.

Modifier mechanic-shifter thuần, không ảnh hưởng intensity formula cơ bản.

## Khi nào dùng

- Build survival cao: stability sustain tốt (board Mộc heal, Mộc Linh Tinh buffer) → marathon dài, loot cực lớn.
- Farm currency lớn một lần thay vì nhiều pháp trận ngắn — tiết kiệm thời gian load, maximize yield/session.
- Đan phẩm cao (Thần-Cổ tier): cần nhiều ván để đủ quality → marathon đảm bảo không bị interrupt bởi "hết ván".

## Synergy

- **+ `wood-crystal` (Mộc Tinh) + `wood-spirit-crystal` (Mộc Linh Tinh)**: combo heal sustain tối đa — Mộc heal implicit +2%/hit §5 + stability max +20% → sống sót qua 15-20 ván marathon.
- **+ `life-death-crystal` (Sinh Tử Tinh)**: insurance khi marathon kéo dài và fatigue tăng; Sinh Tử Tinh cho phép bể 1 lần mà không mất toàn bộ progress marathon.
- **+ `nine-turn-spirit-flower` (Cửu Chuyển Linh Hoa)**: Đan Pháp marathon bị tiêu thụ sau khi thoát; Cửu Chuyển Linh Hoa 30% giữ lại — bảo vệ Đan Pháp tốn kém sau marathon dài.
- **+ `secret-realm-soul` (Bí Cảnh Hỗn)**: Bí Cảnh Hỗn ẩn số ván còn lại (vốn đã vô hạn trong marathon) — kết hợp tạo ra pháp trận hoàn toàn không rõ timeline, pressure tâm lý tối đa cho player.
