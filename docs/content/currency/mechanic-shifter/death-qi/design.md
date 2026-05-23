---
id: death-qi
ten: Tử Khí
category: mechanic-shifter
weight: 60
---

# Tử Khí (`death-qi`)

## Lược tả

Nguyên Liệu đổi cơ chế physics: **buộc toàn bộ linh lực** trong pháp trận chuyển sang nguyên tố Thuỷ bất kể nguồn gốc. Board trở thành Thuỷ đơn nguyên tố — loại bỏ mọi yếu tố Ngũ Hành ngẫu nhiên, đổi lấy predictability tuyệt đối.

## Effect

Mọi linh lực spawn trong pháp trận này **forcibly convert sang Thuỷ** ngay khi spawn, kể cả linh lực từ linh khí không phải Thuỷ. Conversion xảy ra trước khi tính element interaction:
- Linh đan Mộc + linh lực Thuỷ = tương sinh (+30% quality, +5% heal §2) — guaranteed mỗi hit.
- Linh đan Hoả + linh lực Thuỷ = tương khắc (-intensity×0.40 stability §2) — guaranteed destroy Hoả target.
- Linh đan Kim + linh lực Thuỷ = tương sinh Kim→Thuỷ không đúng chiều: Thuỷ đánh Kim là trung tính (+5% quality §2, Kim sinh Thuỷ chứ không phải Thuỷ sinh Kim).

Modifier Nguyên Liệu layer (-50% → +200% §3): Tử Khí là mechanic-shifter, không ảnh hưởng intensity formula trực tiếp — thay vào đó lock `element` của mọi linh lực = `water`.

## Khi nào dùng

- Đan Mộc phẩm chuyên: guaranteed tương sinh Thuỷ→Mộc mỗi hit → quality gain tối đa, không lo linh lực sai element.
- Build stability sustain: tương sinh Thuỷ→Mộc +5% heal mỗi hit §2 → stability không bao giờ cạn nếu board Mộc đủ dày.
- Counter map có tâm ma modifier Hoả mạnh: Tử Khí biến mọi linh lực thành Thuỷ khắc Hoả → neutralize hoàn toàn Hoả damage.

## Synergy

- **+ `water-crystal` (Thuỷ Tinh)**: Tử Khí đã biến mọi linh lực thành Thuỷ — Thuỷ Tinh tăng drop linh khí Thuỷ trở nên thừa (linh lực đã là Thuỷ rồi). Tránh dùng cùng — lãng phí slot Nguyên Liệu.
- **+ `wood-crystal` (Mộc Tinh)**: Mộc Tinh tăng linh khí Mộc trên board; Tử Khí guaranteed Thuỷ hit Mộc = tương sinh → tất cả hit đều là maximum quality gain. Combo mạnh nhất cho đan Mộc phẩm speed run.
- **+ `pure-spirit-incense` (Tịnh Linh Hương)**: giảm 50% tâm ma năng lượng tiêu cực; Tử Khí loại bỏ variance element → pháp trận hoàn toàn ổn định, phù hợp farm nhất quán T8-T12.
- **Tránh dùng với đan Hoả/Kim phẩm**: Thuỷ khắc Hoả và trung tính với Kim — Tử Khí phá hoại hoàn toàn các target này.
