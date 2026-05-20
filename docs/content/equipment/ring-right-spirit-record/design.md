---
id: ring-right-spirit-record
ten: Linh Thủ Bảo Ký (Phải)
slot: ringR
rarity: Unique
variant: Cổ vật
isUnique: true
---

# Linh Thủ Bảo Ký (Phải) (`ring-right-spirit-record`)

## Lược tả

Cổ vật nhẫn duy nhất mang ký ức linh khí — viên ngọc trong nhẫn ghi khắc "linh ấn" của một affix xuất sắc mỗi khi pháp trận kết thúc, rồi truyền ký ức đó vào cõi hư không để bản khắc đó tái hiện ở map tiếp theo. Nhẫn phải trái cùng mang ngọc ký ức đối xứng — hai mảnh của một cuốn nhật ký linh khí.

## Implicit

**+10% intensity mỗi Đồ Sương — mỗi pháp trận hoàn thành: lưu 1 affix của linh khí bất kỳ, affix đó xuất hiện guaranteed ở map tiếp theo.**

Cơ chế chi tiết (Unique — Cổ vật):

**Intensity bonus (§3 combat-math):**
- Mỗi Đồ Sương trang bị: **+10% intensity** toàn bộ linh lực trong ván.
- Trang bị cả 2 Đồ Sương (L+R) = **+20% intensity tổng**.

**Crit bonus (§4 combat-math — "Tinh Hoa Crit" Đồ Sương):**
- Đồ Sương Unique có thêm **+5% crit chance** (Tinh Hoa Crit base của slot Đồ Sương).
- Trang bị cả 2 Đồ Sương Unique = **+10% crit chance tổng**.

**Affix memory (implicit riêng của variant spirit-record):**
- Cuối mỗi pháp trận hoàn thành: player chọn **1 affix từ bất kỳ linh khí còn sống** trên board cuối ván.
- Affix đó được "lưu" vào nhẫn — pháp trận tiếp theo, **1 linh khí random spawn với affix đó guaranteed**.
- Chỉ lưu được 1 affix tại một thời điểm — lưu mới ghi đè cũ.
- Trang bị cả `ring-left-spirit-record` + `ring-right-spirit-record` = **2 affix lưu đồng thời**.

## Slot role

**Đồ Sương (ringR)** — nhẫn sương phải trong Lò Luyện Đan. Đồ Sương Unique: +10% intensity (§3) + +5% crit (§4 Tinh Hoa Crit) + affix memory cross-map. Linh Thủ Bảo Ký là Đồ Sương duy nhất tác động lên **meta-progression** — định hình loot spawn của pháp trận sau. Mirror pair với `ring-left-spirit-record` — đeo cả hai = +20% intensity + +10% crit + 2 affix lưu đồng thời.

## Build use

- **Affix chaining build**: target farm affix Legendary cụ thể — Linh Thủ Bảo Ký đảm bảo affix đó tái hiện mỗi pháp trận, giảm số lần phải farm.
- **Stack đôi**: `ring-left-spirit-record` + `ring-right-spirit-record` → 2 affix lưu + +20% intensity + +10% crit — bộ nhẫn Unique mạnh nhất nhưng tốn 2 slot ring.
- **Combo `handle-left-wuxing-array` / `handle-right-wuxing-array`**: lưu affix Ngũ Hành (ring) → map sau spawn linh khí đúng nguyên tố đó → triệu hồi thêm (Quai) → chain hoàn hảo.
- **Combo `lid-heaven-secret-record`**: Nắp Unique tích lũy tier/pháp trận + Nhẫn Unique lưu affix cross-map = bộ Unique duo tối thượng cho long-run build.
- **Combo `sun-wukong-staff`**: lưu affix crit từ linh khí Legendary → map sau guaranteed spawn linh khí crit Legendary → tách ×3 với crit multi cao → cấp số nhân.
- **Đánh đổi**: Unique chiếm cả slot ring — không thể dùng ring khác cùng lúc. Chọn Linh Thủ Bảo Ký khi build đã ổn định và cần meta-progression.
