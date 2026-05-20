# Tinh Điểm — Wireframe (Portrait)

> Khung dọc ~36 cột. Mọi cạnh trên/dưới là safe-area boundary.
> Glyph legend: `●` travel alloc · `○` travel avail · `·` travel locked
>               `◆` notable alloc · `◇` notable avail · `⋄` notable locked
>               `★` keystone alloc · `☆` keystone avail

---

## Frame A — Zoom-out (Tổng quan 5 cụm)

Khi scale nhỏ: ẩn node đơn lẻ, hiện badge cụm ngũ hành
với tổng node đã allocate / tổng node cụm.

```
┌──────────────────────────────────────┐ ← top safe-area
│ 彡 Tinh Điểm          💠 Linh Lực   │ ← Top status (~7%)
├──────────────────────────────────────┤
│                                      │
│   [Mini-map]  ┌───────────────────┐  │
│    ┌──────┐   │ Vùng xem hiện tại │  │
│    │▓▓  ▓│   └───────────────────┘  │
│    │  ◈  │   (indicator góc P/R)    │
│    │▓  ▓▓│                          │
│    └──────┘                         │
│                                      │
│              ┌──────┐               │
│              │  MỘC │ ← cluster     │
│              │ 12/34│   badge       │
│              └──────┘               │
│       ┌──────┐     ┌──────┐        │
│       │ THUỶ│     │  HOẢ │        │
│       │  8/28│     │ 15/31│        │
│       └──────┘     └──────┘        │
│                                      │
│              ┌──────┐               │
│              │VÔ CỰC│               │
│              │  ☆   │               │
│              └──────┘               │
│       ┌──────┐     ┌──────┐        │
│       │  KIM │     │  THỔ │        │
│       │  5/22│     │  3/25│        │
│       └──────┘     └──────┘        │
│                                      │
│  ── pinch-in để xem node chi tiết ──│
│                                      │
├──────────────────────────────────────┤
│  Tinh Điểm: 43/110                  │ ← Thumb-bar (~17%)
│ [🔍 Search] [⊕ Alloc] [↩ Refund]  │
└──────────────────────────────────────┘ ← bottom safe-area
```

**Ghi chú zoom-out:**
- Badge badge = `TÊN CỤM / alloc / tổng`. Tap badge → zoom-in thẳng vào cụm.
- Vô Cực center luôn hiện (keystone hub duy nhất nằm giữa).
- Mini-map góc trái thể hiện viewport đang xem; hình vuông nhỏ bên trong = vùng nhìn thấy.
- Đường kết nối giữa cụm (edges inter-cluster) vẽ mờ khi zoom-out.

---

## Frame B — Zoom-in (Chi tiết node, cụm Mộc)

Sau khi tap badge MỘC hoặc pinch-out: viewport cuộn tự do
trên graph, chỉ thấy ~15 node trong vùng màn hình.

```
┌──────────────────────────────────────┐
│ 彡 Tinh Điểm          💠 Linh Lực   │
├──────────────────────────────────────┤
│  ┌────────────────────────────────┐  │
│  │[mini]│  ◈ = vùng bạn đang xem │  │
│  │ ┌┐  │                         │  │
│  │ ◈│  │                         │  │
│  │ └┘  │                         │  │
│  └──────┘                         │  │
│                                      │
│         ● ── ○ ── ○               │
│         │                          │
│    ● ── ● ── ◆ ── ⋄              │
│              │                     │
│         · ── ◇ ── ●              │
│              │                     │
│         ● ── ★ (Thiên Mộc Căn)    │
│              │                     │
│         ○ ── ○                    │
│                                    │
│   ← tree tiếp tục ngoài màn →     │
│                                    │
│  [ ○ ] tap node để xem chi tiết   │
│                                    │
├──────────────────────────────────────┤
│  Tinh Điểm: 43/110                  │
│ [🔍 Search] [⊕ Alloc] [↩ Refund]  │
└──────────────────────────────────────┘
```

**Ghi chú zoom-in:**
- Pan: 1-ngón kéo trượt tự do.
- Pinch-to-zoom: thu nhỏ về Frame A, phóng to xem node label rõ hơn.
- Double-tap nút (●/◆/★): allocate nhanh (nếu đủ Tinh Điểm + node kề đã alloc).
- Single tap: mở Bottom Sheet (Frame C).
- Node đã alloc (●◆★): màu ngũ hành (Mộc = xanh lá). Node avail (○◇☆): vàng nhạt. Locked (·⋄): xám.
- Đường alloc path: nét liền đậm. Đường avail: nét đứt. Đường locked: mờ.

---

## Frame C — Bottom Sheet (Node tapped)

Tap bất kỳ node → sheet vuốt lên từ đáy, phủ ~60% màn hình.
Nội dung tree mờ phía sau, giữ spatial context.

```
┌──────────────────────────────────────┐
│ 彡 Tinh Điểm          💠 Linh Lực   │
├──────────────────────────────────────┤
│                                      │
│  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  │ ← tree mờ
│  ░░  ● ── ○ ── ○  ░░░░░░░░░░░░░░░  │   phía sau
│  ░░  │            ░░░░░░░░░░░░░░░░  │
│  ░░  ● ── ● ──[◆]░░░░░░░░░░░░░░░░  │ ← node selected
│                                      │
│┌────────────────────────────────────┐│
││  ━━━━━━━━ (drag handle) ━━━━━━━━  ││
││                                    ││
││  ◆  Huyết Mạch Tăng Cường         ││
││     Notable · Cụm Mộc              ││
││  ─────────────────────────────     ││
││  + 12% Sinh Lực tối đa             ││
││  + 8% Hồi Phục Sinh Lực/giây      ││
││  + 5% Kháng Mộc                   ││
││                                    ││
││  Trạng thái: Có thể phân bổ ✓      ││
││  Chi phí: 1 Tinh Điểm             ││
││                                    ││
││  [     ⊕ Phân Bổ (1đ)     ]       ││
││                                    ││
│└────────────────────────────────────┘│
│ vuốt xuống để đóng                   │
└──────────────────────────────────────┘
```

**Ghi chú bottom sheet:**
- Sheet = Reka UI Drawer / vaul-style, snap 60% khi mở, vuốt xuống đóng.
- Drag handle trên cùng sheet để kéo lên/xuống.
- Nút [⊕ Phân Bổ] đổi thành [↩ Hoàn Trả] nếu node đã alloc.
- Nếu node locked (không kề alloc): button disabled + toast inline "Cần phân bổ node kề".
- Tap vùng mờ phía sau: đóng sheet.

---

## Frame D — Search / Jump to Node

Tap [🔍 Search] ở thumb-bar: input field hiện fullscreen sheet,
keyboard lên. User gõ tên node → danh sách gợi ý cuộn.

```
┌──────────────────────────────────────┐
│ 彡 Tinh Điểm          💠 Linh Lực   │
├──────────────────────────────────────┤
│                                      │
│┌────────────────────────────────────┐│
││ 🔍 [ thiên mộc___________ ] [✕]   ││
│└────────────────────────────────────┘│
│                                      │
│  Kết quả:                            │
│ ┌────────────────────────────────────┐│
│ │ ★  Thiên Mộc Căn      Cụm Mộc  ↗ ││
│ │    Keystone — Tăng 100% Sinh Lực  ││
│ ├────────────────────────────────────┤│
│ │ ◆  Thiên Mộc Tốc Độ   Cụm Mộc  ↗ ││
│ │    Notable — +20% Tốc Di Chuyển   ││
│ ├────────────────────────────────────┤│
│ │ ○  Mộc Hành Khí Lực   Cụm Mộc  ↗ ││
│ │    Travel — +6% Kháng Mộc         ││
│ └────────────────────────────────────┘│
│                                      │
│  Tap ↗ → pan + zoom đến node đó     │
│  (highlight + bounce animation)      │
│                                      │
│  ── ── ── ── ── ── ── ── ── ── ──   │
│  (keyboard area)                     │
│                                      │
└──────────────────────────────────────┘
```

**Ghi chú search:**
- Tìm theo tên display (Hán-Việt) hoặc cụm (Mộc/Hoả/Thổ/Kim/Thuỷ).
- Kết quả hiện: icon type, tên, cụm, 1-line stat preview, nút jump ↗.
- Tap ↗: đóng search, camera pan + zoom-in đến node, node bounce-highlight.
- Nếu đã alloc: badge `✓` bên cạnh tên trong kết quả.

---

## Legend dùng chung (Portrait)

```
Glyph   Trạng thái     Loại
─────   ───────────    ──────────
  ●     allocated      Travel
  ○     available      Travel
  ·     locked         Travel
  ◆     allocated      Notable
  ◇     available      Notable
  ⋄     locked         Notable
  ★     allocated      Keystone
  ☆     available      Keystone
  (☆locked = không hiện nếu không trong range)

Cạnh
────────────────────────────
  ───   đường đã alloc
  - -   đường available (kề alloc node)
  ···   đường locked

Màu (không thể hiện trong ASCII, implementation):
  Mộc = xanh lá #4CAF50
  Hoả = đỏ cam  #F44336
  Thổ = vàng đất #A1824A
  Kim  = trắng bạc #C0C0C0
  Thuỷ = lam    #2196F3
  Alloc path = vàng #FFD700 (glow)
```

---

## Thumb-bar layout (2 hàng trong 17%)

```
┌──────────────────────────────────────┐
│  Tinh Điểm: 43 / 110 đã phân bổ    │ ← hàng counter (glanceable)
│ [🔍 Search] [🎯 Jump] [⊕ Alloc] [↩] │ ← hàng action (≥44px tap target)
└──────────────────────────────────────┘
```

- Counter hàng trên: font mono, cập nhật real-time khi alloc/refund.
- [🔍 Search]: mở Frame D sheet.
- [🎯 Jump]: jump về node vừa alloc gần nhất (convenience).
- [⊕ Alloc]: nếu node đang được highlight (tap 1 lần) → alloc luôn.
- [↩ Refund]: mở Refund confirmation sheet (confirm trước khi hoàn trả).
