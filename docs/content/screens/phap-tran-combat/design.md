---
id: phap-tran-combat
ten: Pháp Trận
type: screen
screenKind: both
navigation: [son-ha-do-altar]
firstSeenIn: act-1
---

# Pháp Trận (`phap-tran-combat`)

## Identity

Combat screen — 3 phases: Setup, Simulate, Loot. This is the core match layer (PixiJS + Rapier 2D). 20% of gameplay time but 100% of the physics action. Player places linh khí, watches physics simulation, collects loot between ván.

## Layout principles

Portrait skeleton (3 vùng dọc, mọi phase):
- **Top ~7%** — glanceable info, ít chạm. Pháp trận title + ván counter + pause (top-right). Tâm Ma mod badge (setup phase only).
- **Content ~76%** — 立軸 dọc, sân physics Rapier + PixiJS. Phase-specific.
- **Thumb-bar ~17%** — safe-area padded, touch target ≥44px. Primary CTA.

### Setup phase
- Content: sân board với linh đan (mid) + anchor points (★) phân tầng dọc. Linh khí đã chọn hiển thị dạng preview compact dưới sân.
- Linh khí pool = bottom-sheet vuốt lên (không side-panel). "Đổi linh khí ↑" mở sheet half-open.
- Tâm Ma Mod + Ngũ Hành tương sinh legend compact ở dưới sân, trên thumb-bar.
- Thumb-bar: "Bắt Đầu Luyện ▶" full-width.

### Simulate phase
- Top HUD (ngay dưới top bar): **Lò Thọ** progress bar + Linh Đan quality % + phẩm cấp + mục tiêu ván.
- Content: sân physics "Thác Tầng Dọc" — linh khí xếp 3 tầng dọc, linh đan ở tầng 2, slingshot pad ở đáy content. Banh búng từ đáy lên, bounce qua các tầng, rơi xuống re-hit.
- Floating delta text ("+12% Mộc tương sinh", "-5 Kim tương khắc") xuất hiện gần linh đan.
- Combo chain counter hiện trong field, góc trên content.
- Thumb-bar: 5 nút ngũ hành (Kim/Thuỷ/Mộc/Hoả/Thổ) full-width, màu mã. Giữ+kéo = charge, thả = búng. Aim-line ghost realtime.

### Loot phase
- Content: card linh đan (quality + phẩm cấp + stability bar), loot grid, XP/gold strip, tiến trình pháp trận (ván N/8 + Lò Thọ).
- Stability warning inline nếu < 70%.
- Thumb-bar: "Tiếp tục Ván N →" full-width. "Thoát Pháp Trận" tertiary — confirm bottom-sheet (warn: mất loot map, character an toàn).

Background: PixiJS canvas renders realtime. MJ provides board frame + backdrop mood only.
