---
id: fire-bead-vase
ten: Bình Hoả Châu
type: vase
element: fire
rarity: Magic
dropPool: Uncommon
tags: [fire, convert, counter]
---

# Bình Hoả Châu (`fire-bead-vase`)

## Lược tả

Bình đất nung đỏ rực, bên trong chứa hoả châu — viên ngọc lửa từ núi lửa ngủ nghìn năm. Linh khí Hoả chuyên biệt: đối xứng hoàn toàn với `dark-nectar-vase` — bình này hấp thụ linh lực **Thuỷ** và phun ra **Hoả**. Counter-rescue cho board đang bị Thuỷ áp đảo hoặc cần Hoả mà không có nguồn.

## Implicit

Bình **hấp thụ linh lực Thuỷ** và **phun ra Hoả**. Linh lực nguyên tố khác đi qua không bị ảnh hưởng.

Cơ chế combat-math: Thuỷ vào → Hoả ra. Theo §1: Hoả khắc Mộc, Hoả sinh Thổ, Hoả đồng hành Hoả-đan (+10%), Thuỷ khắc Hoả-đan (-40%). Bình này đảo ngược: thay vì Thuỷ khắc đan Hoả (-40%), convert thành Hoả → đồng hành (+10%). Tổng cộng: từ -40% stability thành +10% quality — swing +50% hiệu quả trên cùng một hit.

Ứng dụng đặc biệt: đan Hoả đang bị Thuỷ lane công → đặt bình chắn Thuỷ → Thuỷ biến thành Hoả → Hoả nuôi đan Hoả thay vì phá. Hoàn toàn đảo chiều combat dynamics.

## Affix pool

Tag roll trên `vase`:

| Affix slug | Tags | Vai trò trên Bình Hoả Châu |
|---|---|---|
| `vase-absorb-convert` | elemental, utility | Tăng cường convert — mở rộng absorption sang nguyên tố khác hoặc tăng intensity của Hoả output |

## Build role

**Thuỷ counter** và **Hoả amplifier** — mirror build của `dark-nectar-vase` cho bên Hoả.

- **Đan Hoả bảo vệ khỏi Thuỷ** (§1 Thuỷ khắc Hoả): board Hoả cần bình này như `dark-nectar-vase` cần cho board Thuỷ. Đặt trên đường Thuỷ trước đan → Thuỷ biến Hoả → đan Hoả nhận đồng hành thay vì tương khắc.
- **Hoả lane builder từ Thuỷ nguồn**: nếu map có nhiều Thuỷ linh khí (mod "Thuỷ Triều") nhưng build là Hoả, bình convert toàn bộ Thuỷ thành Hoả. Biến map mod bất lợi thành nguồn nguyên liệu.
- **Set Tứ Linh** (`four-spirits`): `fire-bead-vase` có thể là piece Hoả trong bộ nếu cần (kết hợp với Chu Tước linh khí khác). Hoả lane + bình = sustained Hoả supply.
- **Đạo Phái**: **Cửu Âm** (`nine-yin`) — Hoả intensive với chain Hoả dài; hoặc **Linh Sơn** (`spirit-mountain`) nếu echo Hoả được nhân sau convert.
- **Combo `fire-dragon-sword`**: bình convert Thuỷ → Hoả, kiếm split Hoả thành 2 đường. Từ 1 Thuỷ hit → 1 Hoả → 2 Hoả split. Pipeline Thuỷ→Hoả×2 cho board cần mật độ Hoả cao.
- **Map counter**: đặc biệt hiệu quả trên map mod "Hàn Băng" (Thuỷ/Băng dominant) khi chơi build Hoả — biến toàn bộ map mod thành lợi thế.
