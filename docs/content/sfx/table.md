# SFX Library — Đan Kiếp

> Source: `docs/audio-spec.md` §2. Atomic entity — per-entity bundle quá overkill (decision per spec §10).
> ~80 SFX. Mỗi SFX 1 dòng table.

## Categories

- **collision**: linh lực element-specific collision sounds (10)
- **elixir**: linh đan quality/grade/stability events (15)
- **seal**: phong ấn outcome stings (4)
- **ui**: button, hover, drag, menu, confirm, cancel, error, notification (10)
- **ambient**: environment-specific ambient loops (8)
- **boss**: boss spawn, attack, phase transition, defeat (per-boss, ~5-10 each)
- **special**: cổ vật roll, drops, unlocks, level up, milestones (10)

## Collision SFX (§2.1)

| id | ten | category | reference | pitch | notes |
|---|---|---|---|---|---|
| collision-metal | Chuông kim loại | collision | bell, metallic | High | Kim element collision |
| collision-wood | Gỗ gõ | collision | wood block tap | Mid | Mộc element collision |
| collision-water | Giọt nước | collision | water drop / splash | Mid-low | Thuỷ element collision |
| collision-fire | Lửa rít | collision | crackle / fizz | Mid-high | Hoả element collision |
| collision-earth | Đá chạm | collision | stone tap / thud | Low | Thổ element collision |
| collision-void | Ánh thuỷ tinh | collision | glass shimmer | Mid-high, ethereal | Vô Cực element collision |
| collision-heart-demon | Thì thầm hư vô | collision | whisper / void hum | Low, sub-bass | Tâm Ma element collision |
| collision-heavenly | Sét nứt | collision | lightning crack | Very high, harsh | Thiên Kiếp element collision |
| collision-convert | Chuyển hoá | collision | subtle "twist" pitch shift | Variable | Element conversion (linh khí transforms) |
| collision-charge | Tích tụ | collision | ascending tone | Ascending | Charge accumulation (chain hop) |

## Elixir Events SFX (§2.2)

| id | ten | category | reference | notes |
|---|---|---|---|---|
| elixir-progress | Tiến triển linh đan | elixir | soft chime ascending | Every 10% quality progress |
| elixir-grade-1 | Phàm lên Linh | elixir | gong + ascending arpeggio | Phàm → Linh |
| elixir-grade-2 | Linh lên Bảo | elixir | gong + chord | Linh → Bảo |
| elixir-grade-3 | Bảo lên Thần | elixir | big gong + choir | Bảo → Thần |
| elixir-grade-4 | Thần lên Cổ | elixir | massive gong + reverb | Thần → Cổ |
| elixir-grade-5 | Cổ lên Tiên | elixir | epic celestial chord | Cổ → Tiên |
| elixir-grade-6 | Tiên lên Thánh | elixir | almost-divine resonance | Tiên → Thánh |
| stability-warning | Cảnh báo ổn định | elixir | heart beat pulse | Stability < 25% |
| stability-danger | Nguy hiểm ổn định | elixir | heart beat fast | Stability < 10% |
| elixir-shatter | Linh đan bể | elixir | glass shatter + low rumble | Failure state |
| hit-tuong-sinh | Tương sinh | elixir | crystal chime | Tương sinh element hit |
| hit-tuong-khac | Tương khắc | elixir | discord crackle | Tương khắc element hit |
| hit-dai-khac | Đại khắc | elixir | sharp crack + bass drop | Must feel DANGEROUS |
| combo-5 | Combo 5 | elixir | ascending arpeggio | 5-chain combo |
| combo-10 | Combo 10+ | elixir | crescendo wave | 10+ chain combo |

## Seal Outcome SFX (§2.3)

| id | ten | category | reference | notes |
|---|---|---|---|---|
| seal-pre | Chuẩn bị Phong Ấn | seal | ominous gong + 3s build-up | Pre-Phong-Ấn tension |
| seal-strip | Phá Niêm | seal | stripped, hollow tone | 25% outcome |
| seal-downgrade | Giáng Phẩm | seal | descending chord, soft | 25% outcome |
| seal-upgrade | Thăng Phẩm | seal | ascending chord, triumphant | 25% outcome |
| seal-engrave | Khắc Phong Ấn | seal | magical sparkle + low resonance | 25% outcome |

## UI SFX (§2.4)

| id | ten | category | reference | notes |
|---|---|---|---|---|
| ui-hover | Hover nút | ui | soft tap | Button hover |
| ui-click | Nhấn nút | ui | crisp click | Button click |
| ui-drag-start | Bắt đầu kéo | ui | lift sound | Item drag start |
| ui-drag-drop | Thả vào slot | ui | snap-into-place | Item drag drop |
| ui-menu-open | Mở menu | ui | pop in | Open menu |
| ui-menu-close | Đóng menu | ui | pop out | Close menu |
| ui-confirm | Xác nhận | ui | affirmative chord | Confirm action |
| ui-cancel | Huỷ bỏ | ui | negative tone | Cancel action |
| ui-error | Lỗi | ui | soft buzz | Error feedback |
| ui-notification | Thông báo | ui | ding | Notification |

## Ambient SFX (§2.5)

| id | ten | category | reference | notes |
|---|---|---|---|---|
| ambient-base-camp | Làng Khai Lư Trấn | ambient | birds, distant chatter, wind | Base camp village |
| ambient-forest | Rừng Mộc | ambient | birds, rustling leaves, brook | Mộc forest |
| ambient-volcano | Hoả sơn | ambient | distant rumble, fire crackle | Hoả volcano |
| ambient-sea | Biển Thuỷ | ambient | waves, seagulls | Thuỷ sea |
| ambient-mountain | Núi Kim | ambient | wind, distant rock fall | Kim mountain |
| ambient-desert | Sa mạc Thổ | ambient | wind, sand shifting | Thổ desert |
| ambient-void | Hư không Vô Cực | ambient | silence + occasional cosmic hum | Vô Cực void |
| ambient-underworld | Diêm Phủ | ambient | whispers, distant cries | Underworld |

## Boss Attack SFX (§2.6)

Per boss: spawn announcement, each attack pattern, phase transition, defeat, special abilities. 15+ SFX per boss x 12 main bosses = 180+ boss-specific SFX (alpha goal). Detailed per-boss SFX lists authored when boss mechanics are finalized.

| id | ten | category | notes |
|---|---|---|---|
| boss-spawn | Boss xuất hiện | boss | Generic spawn announcement (customize per boss) |
| boss-phase-transition | Chuyển phase | boss | Generic phase transition (customize per boss) |
| boss-defeat | Boss bại | boss | Generic defeat (customize per boss) |

## Special Effects SFX (§2.7)

| id | ten | category | reference | notes |
|---|---|---|---|---|
| special-co-vat-roll | Roll Cổ vật | special | unique magical tone | Cổ vật roll |
| special-dan-duoc-drop | Đan dược rơi | special | soft ding + sparkle | Đan dược drop |
| special-dan-phap-drop | Đan Pháp rơi | special | scroll unfurl sound | Đan Pháp drop |
| special-dan-phap-consume | Tiêu Đan Pháp | special | burning parchment | Đan Pháp consume |
| special-atlas-unlock | Mở atlas node | special | map unfold + chime | Atlas unlock |
| special-quest-complete | Hoàn thành quest | special | triumphant sting | Quest complete |
| special-achievement | Thành tựu | special | achievement jingle | Achievement unlock |
| special-level-up | Lên cấp | special | ascending gong + sparkle | Level up |
| special-vo-cuc-milestone | Cấp Vô Cực milestone | special | cosmic resonance | Cấp Vô Cực milestone |
| special-portal-open | Mở cổng Sơn Hà | special | dimensional rift + light | Sơn Hà Đồ Lệnh portal |
