# Pháp Trận — Wireframe (Portrait Mobile)

> Khung **portrait ~390×844**, 36 cột ASCII, 3 vùng dọc:
> Top ~7% | Content ~76% | Thumb-bar ~17%

---

## 7.1 Setup Phase

```
╔══════════════════════════════════════╗  ← top 7%
║ Pháp Trận: Tử Sinh Mộc T8  Ván 1/8 ║
║ [Tâm Ma: Hồn Cuồng + Đại Khắc]  ⏸ ║
╠══════════════════════════════════════╣  ← content 76%
║                                      ║
║  ┌──────────── SÂN ──────────────┐   ║
║  │                                │   ║
║  │     ★           ★             │   ║
║  │          ★   ★                │   ║
║  │     ★                ★        │   ║
║  │          ★       ★            │   ║
║  │     ★        ★        ★       │   ║
║  │                                │   ║
║  │   ┌────────────────────────┐   │   ║
║  │   │  ⊕  LINH ĐAN          │   │   ║
║  │   │     Mộc · Phẩm: Phàm  │   │   ║
║  │   │     Mục tiêu: 70%      │   │   ║
║  │   └────────────────────────┘   │   ║
║  │                                │   ║
║  └────────────────────────────────┘   ║
║                                      ║
║  Ngũ Hành: 木→水→金→土→火→木        ║
║  (tương sinh vòng)                   ║
║                                      ║
║  ┌─── Linh Khí đã chọn ──────────┐  ║
║  │ Cành Bồ Đề · Huyền Chung · … │  ║
║  │                  [Đổi linh khí ↑] ║
║  └────────────────────────────────┘  ║
║                                      ║
╠══════════════════════════════════════╣  ← thumb-bar 17%
║                                      ║
║  ┌──────────────────────────────┐    ║
║  │      Bắt Đầu Luyện  ▶        │    ║
║  └──────────────────────────────┘    ║
║  [Stash linh khí ↑] (bottom-sheet)  ║
╚══════════════════════════════════════╝
```

> Stash linh khí = bottom-sheet vuốt lên, không side-panel.
> "Đổi linh khí ↑" mở same sheet half-open.
> "Bắt Đầu Luyện" chiếm full width thumb-bar, ≥44px.

---

## 7.2 Simulate Phase

<!-- Sân "Thác Tầng Dọc" — thiết kế khai thác chiều CAO màn dọc:
     • Linh lực búng TỪ ĐÁY LÊN (slingshot ở vùng ngón cái).
     • Linh khí xếp 3–4 TẦNG DỌC như thác nước từ trên xuống (立軸 hanging scroll).
     • Linh đan ở tầng giữa (mid-upper).
     • Banh bay lên chạm linh khí tầng 1→2→3, rơi lại qua tầng 3→2 cho re-hit chain.
       Density dọc + re-entry chain tạo kịch tính quỹ đạo.
     • Playtest feel ≤ tuần 2 prototype để chỉnh tham số tầng.
-->

```
╔══════════════════════════════════════╗  ← top 7%
║ Ván 1/8 · Mộc T8  ⏱87s  [⏸]       ║
╠══════════════════════════════════════╣  ← content 76%
║                                      ║
║  LÒ THỌ ████████████░░░  78 / 100   ║
║  Linh Đan: Mộc  Quality 47%  ░Phàm  ║
║  ─────────────────────────────────   ║
║                                      ║
║  ┌──────────── SÂN ──────────────┐   ║
║  │                                │   ║
║  │  TẦNG 3 ───────────────────   │   ║
║  │     ★  Huyền Chung  ★         │   ║
║  │          ★                     │   ║
║  │                                │   ║
║  │  TẦNG 2 ───────────────────   │   ║
║  │   ★       ┌──────────┐  ★     │   ║
║  │           │ ⊕ LINH   │        │   ║
║  │   ★       │   ĐAN    │  ★     │   ║
║  │  +12%Mộc  │ 47%→59%  │        │   ║
║  │           └──────────┘        │   ║
║  │                                │   ║
║  │  TẦNG 1 ───────────────────   │   ║
║  │   ★    Cành Bồ Đề   ★         │   ║
║  │      ★          ★             │   ║
║  │                                │   ║
║  │  ▼ AIM ···················•   │   ║
║  │  └── búng từ đáy lên ──────   │   ║
║  └────────────────────────────────┘   ║
║                                      ║
║  Combo chain: 3x  -5 Kim tương khắc  ║
║                                      ║
╠══════════════════════════════════════╣  ← thumb-bar 17%
║                                      ║
║ ┌────┐ ┌────┐ ┌────┐ ┌────┐ ┌────┐  ║
║ │ 金 │ │ 水 │ │ 木 │ │ 火 │ │ 土 │  ║
║ │Kim │ │Thuỷ│ │Mộc │ │Hoả │ │Thổ │  ║
║ └────┘ └────┘ └────┘ └────┘ └────┘  ║
║  [giữ+kéo = charge · thả = búng]    ║
╚══════════════════════════════════════╝
```

> 5 nút ngũ hành = 5 loại linh lực búng. Màu mã: Kim=trắng bạc,
> Thuỷ=lam, Mộc=lục, Hoả=đỏ cam, Thổ=vàng nâu. Mỗi nút ≥44px.
>
> **Tương sinh/tương khắc cheat** — icon nhỏ trên nút: mũi tên
> sinh sang nút kế, dấu ✕ sang nút khắc. Đủ glanceable.
>
> "Giữ + kéo" tính charge intensity, thả = búng. Hướng xác định
> bằng góc kéo (vector từ điểm chạm đến điểm thả).
>
> "▼ AIM" = aim-line ghost (dotted trajectory preview, phong cách
> Ballionaire). Cập nhật realtime khi giữ ngón.

---

## 7.3 Loot Phase

```
╔══════════════════════════════════════╗  ← top 7%
║ Ván 1 Hoàn Thành  Quality 78%       ║
╠══════════════════════════════════════╣  ← content 76%
║                                      ║
║  ┌────────────────────────────────┐  ║
║  │      ✦  LINH ĐAN  ✦           │  ║
║  │   Mộc · 78% · Phẩm: Trung     │  ║
║  │                                │  ║
║  │   Stability: ██████████░ 65%   │  ║
║  │   ⚠ Ổn định nhưng cần chú ý.  │  ║
║  └────────────────────────────────┘  ║
║                                      ║
║  ── Loot Thu Được ─────────────────  ║
║                                      ║
║   [⊙ Linh khí ×2]  [◈ Phong ấn ×1] ║
║   [❋ Linh đan ×3]  [✦ Gold +200]   ║
║                                      ║
║   +320 XP  ·  Cấp 8  (42%)          ║
║                                      ║
║  ── Tiến Trình Pháp Trận ──────────  ║
║   Ván: 1 / 8  ████░░░░░░░░  12%     ║
║   Lò Thọ: 78 / 100  ██████░░░       ║
║                                      ║
╠══════════════════════════════════════╣  ← thumb-bar 17%
║                                      ║
║  ┌──────────────────────────────┐    ║
║  │  Tiếp Tục Ván 2  →           │    ║
║  └──────────────────────────────┘    ║
║  [Thoát Pháp Trận]  (destructive,   ║
║   xác nhận trước — mất loot map)    ║
╚══════════════════════════════════════╝
```

> "Thoát Pháp Trận" = tertiary action, nhỏ, confirm bottom-sheet
> (warn: mất loot map, character không mất — per decision #2).
>
> Nếu ván cuối (8/8 hoặc boss): CTA đổi thành "Vào Boss →" hoặc
> "Hoàn Thành Pháp Trận →".

---

## Tương sinh/tương khắc legend (inline reference)

```
  TƯƠNG SINH (power ×1.5)    TƯƠNG KHẮC (debuff -stability)
  木Mộc → 火Hoả               木Mộc ✕ 土Thổ
  火Hoả → 土Thổ               土Thổ ✕ 水Thuỷ
  土Thổ → 金Kim               水Thuỷ ✕ 火Hoả
  金Kim → 水Thuỷ              火Hoả ✕ 金Kim
  水Thuỷ → 木Mộc             金Kim ✕ 木Mộc
```

---

## Ý tưởng khai thác chiều cao — "Thác Tầng Dọc"

```
  ┌──────────────────────────────────┐
  │  TẦNG 3 (linh khí thưa, khó hit)│
  │       ★          ★              │
  │                                  │
  │  TẦNG 2 (linh đan target + dense│
  │   ★    ┌──────┐    ★            │
  │        │LINH  │                  │
  │   ★    │ĐAN   │    ★            │
  │        └──────┘                  │
  │                                  │
  │  TẦNG 1 (linh khí dày, easy hit)│
  │   ★   ★   ★   ★   ★            │
  │                                  │
  │      ↑ búng từ ngón cái ↑        │
  │  [Kim] [Thuỷ] [Mộc] [Hoả] [Thổ]│
  └──────────────────────────────────┘

  Ballistische path:
  ngón cái → TẦNG 1 (bounce) → TẦNG 2 (hit linh đan) 
           → TẦNG 3 (energy release) → rơi xuống → loop

  Precedent: Peggle (bottom launcher, upward travel),
             Plinko (gravity exploit), 立軸 hanging scroll 
             (mountain tiers stacked top→bottom).
```

> Ba tầng phân bố đều theo chiều cao ~630px content → banh bounce
> qua 3 tầng, số lần hit per banh cao nhờ density dọc + re-entry chain.
