---
id: azure-dragon-ancestor
ten: Thanh Long Linh Tổ
type: boss
bossType: atlas-mega
tier: T14-T15
element: wood
phaseCount: 3
---

# Thanh Long Linh Tổ (`azure-dragon-ancestor`)

## Định danh

Một trong Tứ Tượng Linh Tổ — góc Đông của Sơn Hà Đồ. Thanh Long Linh Tổ không phải kẻ thù; đây là **thực thể thượng cổ đang thử thách** người dám tiến vào lãnh địa của nó. Thanh Long không giết — nó **nuốt chửng** kẻ không xứng vào rừng rậm vĩnh cửu.

**Kiểm tra**: player có thể **duy trì damage ổn định khi board liên tục bị che phủ và healing decoy xuất hiện** không? Thanh Long punish build phụ thuộc vào board tĩnh, reward build linh hoạt.

Hình dạng: rồng xanh ngọc bích khổng lồ, thân dài cuộn quanh board, đầu ở góc trên phải. Mỗi khi bị hit đủ mạnh, vảy rồng phát sáng và rơi xuống thành linh khí Mộc tạm thời trên board.

## Bậc & Bối cảnh

- **Tier**: T14-T15 — Atlas corner Đông, mở sau khi hoàn thành Sơn Hà Đồ tier trung tâm T13
- **Win-rate target**: ~45% (level 90+, full Lò 8 slot Thần tier, Atlas tree đầu tư)
- **Khi nào gặp**: Endgame Atlas — cần Đan Pháp Mộc-tier cao + Mộc Nguyên Liệu để vào. Thanh Long counter đặc biệt build Kim (element khắc Mộc)
- **Môi trường**: Rừng Huyền Cổ — board bị cây leo Mộc che phủ dần (mechanic riêng). Mặt đất phát khí Mộc: linh lực Mộc tự tăng +15% velocity khi di chuyển qua vùng khí

## Phase & Pattern

### Phase 1: Căn Cơ Vạn Mộc (100% → 65% HP)

**Dây Leo Xâm Lấn** (mỗi 12 giây): 2-3 dây leo Mộc mọc từ rìa board, trải dài vào giữa — linh khí bị dây leo chạm qua nhận buff "Mộc Hoá": linh lực qua linh khí đó bị convert 30% sang Mộc. Linh đan Kim nhận tương khắc nếu Mộc hoá thành công.

**Công kích "Ngọc Trảo"** (mỗi 10 giây): boss vung chân rồng, bắn 3 viên linh lực Mộc tốc độ cao vào 3 linh khí ngẫu nhiên để "kích hoạt" chúng — linh khí đó phát nổ Mộc lực, bắn 2 viên nhỏ về phía linh đan. Stability damage nếu linh đan Kim: **-15** per viên boss bắn trực tiếp, **-8** per viên từ linh khí kích nổ.

**Healing Decoy Spawn** (khi boss HP ≤ 80%): boss sinh ra 1 "Linh Khí Giả" Mộc trên board — trông như linh khí bình thường nhưng nếu linh lực đi qua nó, boss hồi 5% HP. Cách phá: bắn linh lực Kim trực tiếp vào Linh Khí Giả để phá huỷ.

**Stability damage (§5)**: Ngọc Trảo trực tiếp: **-15**; Linh khí kích nổ: **-8** — T14 range, phía thấp của 5-25 nhưng cộng dồn nhiều nguồn.

### Phase 2: Rồng Xanh Thức Giấc (65% → 30% HP)

**Bứt Vảy Rồng** trigger: boss shed vảy liên tục — 4-5 linh khí Mộc tạm thời xuất hiện trên board, tồn tại 15 giây rồi biến mất. Linh khí Mộc tạm thời này **không thể bị phá huỷ** (khác Linh Khí Giả phase 1). Board trở nên đông đúc.

**Công kích "Lâm Hải Cuồng Lưu"** (mỗi 8 giây): boss phun luồng Mộc lực liên tục 3 giây, sweep ngang board. Mọi linh lực Kim bị quét ra khỏi board trong 3 giây đó (bị "hấp thụ" bởi Mộc lực). Stability damage nếu linh đan bị quét trúng: **-22** (1 lần per sweep).

**Healing Decoy tăng**: từ 1 → 2 Linh Khí Giả cùng lúc. Hồi 8% HP mỗi cái nếu không phá.

**Stability damage (§5)**: Lâm Hải Cuồng Lưu sweep: **-22** — T14-15 range chính xác.

### Phase 3: Thanh Long Giải Phong (30% → 0% HP)

**Toàn Thân Mộc Giáp**: boss phủ vảy Mộc dày — immunity hoàn toàn với linh lực Mộc, giảm 50% damage từ mọi element khác ngoài Kim. Kim gây damage bình thường (tương khắc Mộc). Player buộc phải switch sang Kim chain dù board đầy linh khí Mộc từ phase 2.

**Ngàn Dây Cùng Lúc** (mỗi 15 giây): tất cả dây leo phase 1 + linh khí vảy phase 2 cùng phát nổ Mộc lực đồng thời — stability **-10** per nguồn phát nổ trên board. Trung bình board có 6-8 nguồn → **-60 đến -80** tổng. Cách sống sót: dùng `pure-heart-bead` TRƯỚC khi nổ (dispel + 20% stability), hoặc clear board trước 15 giây.

**Stability damage tổng kết (§5)**:
- Phase 1: **-15** trực tiếp, **-8** gián tiếp
- Phase 2: **-22** sweep
- Phase 3 Ngàn Dây: **-10** per nguồn (nhiều nguồn, gộp lại vượt 25 nhưng từng nguồn ≤ 25)

## Cơ chế đặc trưng

**Healing Decoy Linh Khí**: mechanic độc quyền Thanh Long — board không chỉ là arena mà là tài nguyên boss có thể "ký sinh". Player phải vừa tấn công boss vừa quản lý board health. Build một-chiều (chỉ tấn công) sẽ thấy boss tự hồi 30-40% HP trong 1 ván.

**Mộc Hoá Chain Corruption**: dây leo biến chain Kim thành Mộc bất đắc dĩ — punish build Kim không kiểm soát chain path. Reward build Kim có thể "route around" vùng dây leo.

## Counter-play

**Element**: **Kim** (khắc Mộc) là element tốt nhất — duy nhất có thể phá Healing Decoy nhanh và damage boss phase 3. Build mono-Kim với chain tránh linh khí Mộc hoá là optimal.

**Cổ vật hữu ích**:
- `pure-heart-bead` ("Tịnh Tâm Linh Châu"): bắt buộc dùng trước Ngàn Dây phase 3 — 20% stability + dispel bất kỳ Mộc Hoá debuff (§5)
- `sun-wukong-staff` ("Trượng Tôn Ngộ Không"): ×3 linh lực sau hit đầu → phá Healing Decoy nhanh hơn (3 viên Kim lan ra board, hit decoy bất kể hướng)
- Cổ vật buff chain Kim (velocity + charge): rút ngắn thời gian cần để DPS boss qua Mộc Giáp phase 3
- Keystone **Trọng Sơn** (durability immune): không cần thiết ở T14-15 nếu không có map mod Huyết Sát, nhưng nếu có thì bắt buộc vì ×3 hit từ sun-wukong-staff ăn mòn gấp 3

**Chiến thuật**: phase 1 — phá Healing Decoy ngay khi spawn, không để boss hồi. Phase 2 — bắn Kim tránh sweep 3 giây (đọc animation boss ngẩng đầu). Phase 3 — chuẩn bị pure-heart-bead, clear board sạch nhất có thể trước Ngàn Dây.

## Phần thưởng

Drop theme: **Mộc Atlas Fragment** (mảnh Sơn Hà Đồ unlock tier T15-T16 vùng Đông) + Mộc Tinh Thạch cấp Cổ. Drop Cổ vật: ưu tiên Kim-element hoặc board-management. Xác suất nhỏ: Atlas node unlock "Đông Phương Chi Mộc" — passive tree Atlas node buff Mộc toàn Sơn Hà Đồ.
