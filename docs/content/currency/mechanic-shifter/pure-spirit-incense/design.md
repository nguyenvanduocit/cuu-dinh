---
id: pure-spirit-incense
ten: Tịnh Linh Hương
category: mechanic-shifter
weight: 60
---

# Tịnh Linh Hương (`pure-spirit-incense`)

## Lược tả

Nguyên Liệu giảm nhẹ tâm ma: toàn bộ năng lượng tiêu cực từ Tâm Ma modifier và boss bị cắt giảm 50%. Không loại bỏ Tâm Ma — chỉ làm dịu tác động, cho phép chạy bí cảnh Tâm Ma cao hơn mức build thông thường chịu được.

## Effect

Trong pháp trận này, mọi tác động tiêu cực từ Tâm Ma giảm **50%**:
- **Tâm Ma intensity modifier** (map_state.tam_ma_intensity_mod): nếu modifier là -50% (giảm damage), áp dụng bình thường. Nếu modifier là +100% (tăng damage từ tâm ma), thực tế chỉ còn +50% (§3 tâm ma modifier -50% → +100%, Tịnh Linh Hương chia đôi phần tiêu cực).
- **Stability debuff tâm ma boss** (-1/giây §5): giảm còn -0.5/giây.
- **Tâm Ma boss attack stability damage** (-5 đến -25 §5): giảm 50%, còn -2.5 đến -12.5.

Không ảnh hưởng phần thưởng từ Tâm Ma (drop Cổ Vật từ `corruption-bead` vẫn giữ nguyên +30%). Không ảnh hưởng intensity formula cơ bản hay drop pool.

## Khi nào dùng

- Bí cảnh có `corruption-bead` (Tâm Ma Châu): thêm Tâm Ma encounter — Tịnh Linh Hương giảm 50% drain stability của encounter đó.
- Map T10-T13 range Tâm Ma tier (T6-T13 §20): khi tâm ma modifier ngẫu nhiên roll cao (+80-100%), Tịnh Linh Hương cắt còn +40-50% — dễ chịu hơn đáng kể.
- Build thiếu Phong Ấn chống Tâm Ma: Tịnh Linh Hương bù đắp điểm yếu mà không cần passive-tree investment.

## Synergy

- **+ `corruption-bead` (Tâm Ma Châu)**: Tâm Ma Châu thêm Tâm Ma encounter (+drain stability); Tịnh Linh Hương giảm 50% drain → combo mang lại drop Cổ Vật cao mà không quá nguy hiểm.
- **+ `death-qi` (Tử Khí)**: Tử Khí loại bỏ variance element; Tịnh Linh Hương loại bỏ Tâm Ma variance — hai layer ổn định hóa pháp trận, thích hợp farm nhất quán T8-T12.
- **+ `water-crystal` (Thuỷ Tinh)**: Thuỷ tương sinh Mộc heal +5% stability §2; Tịnh Linh Hương giảm drain Tâm Ma → net stability loss per encounter cực thấp.
- **Không cần thiết với build Phong Ấn chuyên**: nếu passive-tree đã đầu tư cluster "Tịnh Tâm" chống Tâm Ma, Tịnh Linh Hương dư thừa — dùng slot cho Nguyên Liệu tăng drop thay.
