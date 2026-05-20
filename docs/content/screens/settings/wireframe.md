# Cài Đặt — Wireframe (Mobile Portrait)

Source: `docs/superpowers/specs/2026-05-20-mobile-portrait-pivot-design.md`

```
┌────────────────────────┐  ← 390px
│ 立軸 CÀI ĐẶT           │  TOP STATUS ~7%
│ ←                      │  back góc trái
├────────────────────────┤
│                        │
│  ── Đồ Hoạ ──────────  │  CONTENT ~76%
│                        │  cuộn dọc
│  Độ sáng               │
│  ████████░░  80%   [<>]│  slider, 56px row
│                        │
│  Hiệu ứng hạt          │
│  Bật           [ ON ]  │  toggle
│                        │
│  FPS Cap               │
│  60 / 120 / Không giới │
│  hạn          [120 ▾]  │  selector
│                        │
│  ── Âm Thanh ─────────  │
│                        │
│  Tổng thể              │
│  ████████░░  80%   [<>]│
│                        │
│  Nhạc nền              │
│  ██████░░░░  60%   [<>]│
│                        │
│  Hiệu âm (SFX)         │
│  ████████░░  80%   [<>]│
│                        │
│  ── Ngôn Ngữ ──────────  │
│                        │
│  Tiếng Việt       [▾]  │
│  (VI / EN / 中 / 日)   │
│                        │
│  ── Tu Chân ──────────  │
│                        │
│  Chế độ Lão Luyện      │
│  (Bỏ qua Act 1)  [ OFF]│
│                        │
│  Độ khó                │
│  Tiêu Chuẩn       [▾]  │
│  (Dễ / TC / Khó)       │
│                        │
│  ── Khả Năng Tiếp Cận ──│
│                        │
│  Mù màu                │
│  Tắt              [▾]  │
│                        │
│  Cỡ chữ               │
│  100%             [▾]  │
│                        │
│  Hiệu ứng âm thanh     │
│  trực quan       [ OFF]│
│                        │
│  Rung (haptic)   [ ON ]│
│                        │
│  (cuộn dọc thêm...)    │
│                        │
├────────────────────────┤
│     [Lưu]   [Huỷ]      │  BOTTOM THUMB-BAR ~17%
│  ≥44px  ·  ≥44px       │  luôn visible, không cuộn
└────────────────────────┘
```

## Section — Nhóm theo dọc

Thứ tự cuộn: Đồ Hoạ → Âm Thanh → Ngôn Ngữ → Tu Chân → Khả Năng Tiếp Cận.

Mỗi section header: thanh ngang brush-stroke full width, chữ section bên trái.

## Control Types

| Loại | Ví dụ | Touch target |
|------|-------|-------------|
| Slider | Âm lượng, độ sáng | Track 44px cao, thumb 44×44 |
| Toggle ON/OFF | Hiệu ứng hạt, rung | 44px cao, pill 51×31 |
| Selector [▾] | Ngôn ngữ, độ khó | Row 56px → bottom sheet chọn |

## Selector Bottom Sheet (tap [▾])

Vuốt lên từ đáy, ~40% chiều cao. Danh sách option, tap chọn, tự đóng.

```
┌────────────────────────┐
│         ▬▬▬            │
├────────────────────────┤
│  Chọn Độ Khó           │
├────────────────────────┤
│  ○  Dễ                 │  56px row
│  ●  Tiêu Chuẩn         │  ● = selected
│  ○  Khó                │
└────────────────────────┘
```

## Tương tác portrait

- **[Lưu]** / **[Huỷ]** cố định bottom thumb-bar — không cuộn khỏi tầm tay
- **Back** góc trái / vuốt mép trái → về màn trước (không lưu)
- **Slider** kéo ngang ngón cái
- **Tap [▾]** → bottom sheet chọn option, tap ngoài sheet đóng
