# Tutorial Script — Cửu Đỉnh

> Exact dialogue + UI prompts + state machine cho Act 1 tutorial. Write trước implement.

> Vietnamese-native voice. EN translation pass post-write.

---

## 0. State machine

```
[Game Start]
    ↓
[Character Naming]
    ↓
[Sư Phụ am - intro cutscene]
    ↓
[Pháp Trận #1: Khai Đan] ← cannot fail
    ↓
[Sư Phụ post-PT1 dialogue]
    ↓
[Đạo Sĩ Mộc Linh NPC]
    ↓
[Pháp Trận #2: Tương Sinh] ← can lose, gentle retry
    ↓
[Sư Phụ mid-Act dialogue]
    ↓
[Optional: Lão Tiều Phu side]
    ↓
[Pháp Trận #3: Tương Khắc] ← real challenge, can lose
    ↓
[BOSS: Tâm Ma Sơn Mộc] ← Act 1 boss
    ↓
[Base camp unlock + welcome tour]
    ↓
[Act 1 complete → portal Act 2]
```

---

## 1. Character Naming Screen

```
╔═══════════════════════════════════════╗
║       CỬU ĐỈNH                          ║
║   (huyền huyễn luyện đan tu chân)     ║
║                                       ║
║   Tu danh của con là:                 ║
║   [___________________]               ║
║   (Nhập tên đạo sĩ)                   ║
║                                       ║
║   [Tiếp tục]                          ║
╚═══════════════════════════════════════╝
```

**Default**: "Vô Danh" (Nameless)

**Validation**:
- Min 1 char, max 16
- Vietnamese diacritics OK
- No profanity filter (player's name is sacred)

---

## 2. Sư Phụ am - intro cutscene (~90 seconds)

**Setting**: Quiet bamboo grove at dawn. Mist. Sư Phụ in plain robe sitting in meditation. Player approaches.

**Music**: Single đàn bầu note, slow piano.

**Visual**: Hand-drawn parchment cutscene, 5 frames.

### Frame 1
> *Bamboo, mist, am gate.*
> 
> NARRATOR: *"Sơn Mộc Cốc — nơi tu hành của Sư Phụ, đệ tử cuối cùng của Cao Tổ."*

### Frame 2
> *Player walking up the steps toward am.*
> 
> NARRATOR: *"Con đã tới đây từ làng quê xa. Sư Phụ chờ con."*

### Frame 3
> *Sư Phụ opens his eyes slowly.*
> 
> SƯ PHỤ: *"Con đã tới."*
> 
> *(Pause 2 seconds.)*
> 
> SƯ PHỤ: *"Ngồi xuống. Có gì cần kể, ta đã biết rồi."*

### Frame 4
> *Sư Phụ holds out a wrapped bundle. He unwraps slowly. Inside: a small bronze furnace, cracked but ornate.*
> 
> SƯ PHỤ: *"Lò Luyện Đan của tổ sư. 800 năm tuổi. Hư nhưng còn linh."*
>
> *Player touches the furnace. A whisper comes from inside the metal, barely audible.*
>
> LÒ: *"Chuyển thứ chín..."*
>
> *Sư Phụ's fingers tighten around the cloth. He hears it too, but says nothing.*

### Frame 5
> *Lò glows faintly. Sư Phụ smiles slightly.*
> 
> SƯ PHỤ: *"Nếu con nghe tiếng gì trong Lò, đừng trả lời. Chỉ luyện."*
>
> SƯ PHỤ: *"Tâm Ma sẽ trở lại. Con phải tu hành. Bắt đầu thôi."*
> 
> *(Skip → Pháp Trận #1)*

**Skippable**: After first viewing, Veteran Mode can skip.

---

## 3. Pháp Trận #1: "Khai Đan"

**Goal**: Teach physics + linh khí placement. Cannot fail.

### Pre-pháp-trận setup screen

```
╔══════════ KHAI ĐAN ══════════════════╗
║                                       ║
║   Tu hành đầu tiên                    ║
║                                       ║
║   Mục tiêu: Luyện 1 viên Linh Đan    ║
║   từ Phàm phẩm lên Linh phẩm.         ║
║                                       ║
║   Stability: 100% (locked tutorial)   ║
║                                       ║
║   [Bắt đầu]                           ║
╚═══════════════════════════════════════╝
```

### In-pháp-trận tutorial overlay sequence

**Step 1 — Show board** (auto, 3s read):
> OVERLAY: *"Đây là pháp trận. Bàn luyện đan của con."*
>
> ARROW pointing at linh đan center: *"Đây là viên linh đan. Mục tiêu của con là luyện nó."*

**Step 2 — Show linh khí inventory** (player must click):
> OVERLAY: *"Đây là linh khí — pháp khí giúp con hứng linh lực."*
>
> 3 LINH KHÍ in inventory (forced): Cành Bồ Đề (Mộc), Cành Bồ Đề (Mộc), Cành Bồ Đề (Mộc).
>
> *"Kéo 1 linh khí vào ô sáng nhấp nháy."*

**Step 3 — Place 1st linh khí**:
> Player drags Cành Bồ Đề into anchor slot.
> 
> SOUND: gentle bell.
> 
> OVERLAY: *"Tốt. Đặt 2 cái còn lại."*

**Step 4 — Place 2nd, 3rd**:
> Player places remaining.
> 
> OVERLAY: *"Sẵn sàng. Bấm 'Luyện' để bắt đầu."*

**Step 5 — Simulate phase**:
> Player clicks "Luyện".
> 
> Music intensifies.
> 
> Linh lực Mộc (green orbs) start raining down.
> 
> First collision linh lực-linh khí: SOUND chime + GLOW.
> 
> OVERLAY: *"Linh lực đi qua linh khí — nó tích lực. Khi tới linh đan, nó truyền lực."*

**Step 6 — First linh đan hit**:
> Linh lực reaches linh đan.
> 
> Floating number: `+5% quality` GREEN.
> 
> OVERLAY: *"Đan đang lớn. Tiếp tục."*

**Step 7 — Around 50% quality**:
> Linh đan glow brightening.
> 
> OVERLAY: *"Quality 50%. Sắp thăng phẩm."*

**Step 8 — Phẩm thăng moment**:
> Linh đan quality hits 100%.
> 
> SCREEN FLASH white.
> 
> Linh đan visually changes: Phàm gray → Linh blue.
> 
> SOUND: gong + ascending notes.
> 
> OVERLAY (large): *"PHẨM CẤP THĂNG — LINH ĐAN ĐẠT LINH!"*
>
> *(Pause 2s for emotional moment.)*

**Step 9 — Pháp trận end**:
> All ván auto-complete.
> 
> Reward screen:
> 
> ```
> ╔═══ KHAI ĐAN HOÀN THÀNH ═══════╗
> ║                                 ║
> ║   Linh Đan Linh phẩm  ✓        ║
> ║   +200 XP                      ║
> ║   +1 Cổ Vật: "Sư Phụ Truyền    ║
> ║      Đan"                       ║
> ║                                 ║
> ║   [Tiếp tục]                    ║
> ╚════════════════════════════════╝
> ```

### Failure handling
None — tutorial cannot fail.

---

## 4. Post-PT1 Sư Phụ dialogue (~30s)

> *Player returns to am. Sư Phụ waiting.*
>
> SƯ PHỤ: *"Đan đầu tiên. Như thầy luyện 50 năm trước."*
>
> *(Sư Phụ hands player a small bell.)*
>
> SƯ PHỤ: *"Đi tới mạn rừng. Có một đạo sĩ tu hành ở đó. Tên Mộc Linh. Hắn sẽ dạy con về Mộc nguyên tố."*
>
> *(Map updates to show Đạo Sĩ Mộc Linh node.)*

---

## 5. Đạo Sĩ Mộc Linh NPC encounter (~60s)

**Setting**: Bamboo grove, small wooden hut. Old herbalist in green robe.

> ĐẠO SĨ MỘC LINH: *"À, con là đệ tử mới của Sư Phụ. Hắn đã kể rồi."*
>
> ĐẠO SĨ MỘC LINH: *"Cửu Đỉnh có 5 nguyên tố. Hôm nay ta dạy về Mộc. Mộc là sinh — sinh sôi, sinh sản, sinh khí."*
>
> *(He picks up 3 small wooden charms.)*
>
> ĐẠO SĨ MỘC LINH: *"Cầm lấy. Đặt vào pháp trận tiếp theo. Con sẽ thấy điều thú vị."*
>
> REWARD UI:
> ```
> +3 Linh Đan (currency)
> +3 Linh Khí Mộc Linh (Linh tier)
> Lore page unlocked: "Mộc nguyên tố"
> ```
>
> ĐẠO SĨ MỘC LINH: *"Đi đi. Đan đợi con."*

---

## 6. Pháp Trận #2: "Tương Sinh"

**Goal**: Teach tương sinh + element conversion. Can lose, gentle retry.

### Pre-pháp-trận

```
╔══════════ TƯƠNG SINH ════════════════╗
║                                       ║
║   Tu hành thứ hai                     ║
║                                       ║
║   Mục tiêu: Luyện linh đan Mộc       ║
║   từ Phàm → Bảo (2 phẩm)              ║
║                                       ║
║   Stability: free play                ║
║   Linh lực: 70% Mộc + 30% Thuỷ        ║
║                                       ║
║   Hint: Thuỷ sinh Mộc — chú ý        ║
║   các viên xanh dương!                ║
║                                       ║
║   [Bắt đầu]                           ║
╚═══════════════════════════════════════╝
```

### In-pháp-trận overlays

**On first Thuỷ collision with linh khí Mộc**:
> Floating number: `+30%` BIG GREEN
> 
> OVERLAY (3s): *"Thuỷ SINH Mộc — nó tăng cường đan."*

**On first đồng hành Mộc-Mộc collision**:
> Floating number: `+10%` SMALLER GREEN
> 
> OVERLAY (2s): *"Đồng hành — buff nhẹ."*

**Mid-pháp-trận NPC voice line**:
> ĐẠO SĨ MỘC LINH (text appears top): *"Thuỷ sinh Mộc — đan của con sẽ uống Thuỷ lực mà lớn."*

**Stability damage moment** (if it happens):
> Floating number: `-X stability` RED
> 
> OVERLAY (3s): *"Có nguyên tố nào đó tương khắc với đan. Chú ý placement."*

### Failure recovery

If linh đan bể:
> OVERLAY (full screen):
> ```
> ╔══════════════════════════════╗
> ║   LINH ĐAN BỂ                ║
> ║                              ║
> ║   Đừng nản. Đan luyện hỏng   ║
> ║   là chuyện thường.           ║
> ║                              ║
> ║   Hint: Thuỷ sinh Mộc, Mộc   ║
> ║   không khắc Thuỷ. Bạn an    ║
> ║   toàn với Thuỷ lực.         ║
> ║                              ║
> ║   [Thử lại]                   ║
> ╚══════════════════════════════╝
> ```

Free retry, no penalty.

---

## 7. Post-PT2 Sư Phụ dialogue (~30s)

> SƯ PHỤ: *"Bảo phẩm. Khá nhanh. Con có thiên phú."*
>
> SƯ PHỤ: *"Bây giờ — Kim. Tương khắc với Mộc. Mộc chính của con là Mộc, nên Kim sẽ làm con đau."*
>
> SƯ PHỤ: *"Đi tới đỉnh kế tiếp. Có lão tiều phu ở giữa đường, có thể cho con vài thứ. Đừng vội qua."*

---

## 8. Optional: Lão Tiều Phu side node (~45s)

**Setting**: A simple woodcutter chopping bamboo. Pile of cut wood beside him.

> LÃO TIỀU PHU: *"Đạo sĩ trẻ? Đến đây tu sao?"*
> 
> [DIALOGUE CHOICE]:
> - "Vâng, con tu luyện đan."
> - "Tôi đi qua đây thôi."

**If chose "Vâng"**:
> LÃO TIỀU PHU: *"Ha! Tu thì giúp lão một tay. Khúc gỗ này lão chặt 30 năm — gỗ Bồ Đề. Linh khí trong nó còn."*
>
> *(He hands a wood charm.)*
>
> LÃO TIỀU PHU: *"Cầm đi. Có lẽ giúp ích."*
>
> REWARD: 1 linh khí Mộc Phàm random + 50 gold
>
> Lore page unlocked: "Lão Tiều Phu — câu chuyện về Sơn Mộc Cốc"

**If chose "Tôi đi qua đây thôi"**:
> LÃO TIỀU PHU: *"Đi nhanh đi. Người trẻ vội. Lão già cũng từng vội."*
>
> No reward. (Player can return later.)

---

## 9. Pháp Trận #3: "Tương Khắc"

**Goal**: Teach tương khắc + element routing. Real challenge.

### Pre-pháp-trận

```
╔══════════ TƯƠNG KHẮC ════════════════╗
║                                       ║
║   Tu hành thứ ba — thực sự           ║
║                                       ║
║   Mục tiêu: Luyện linh đan Mộc       ║
║   từ Phàm → Bảo (giữ stability!)      ║
║                                       ║
║   Linh lực: 50% Mộc + 30% Thuỷ +     ║
║              20% Kim (Kim KHẮC Mộc)   ║
║                                       ║
║   ⚠ Kim sẽ làm đan bị tổn thương.    ║
║   Phải ROUTE Kim TRÁNH linh đan,     ║
║   HOẶC chuyển nó qua linh khí Hoả    ║
║   để đổi sang Hoả (Hoả không khắc).   ║
║                                       ║
║   [Bắt đầu]                           ║
╚═══════════════════════════════════════╝
```

### Sư Phụ voice line in-pháp-trận (after 30s)

> SƯ PHỤ (text top): *"Con nhớ — Hoả sinh Thổ, Hoả không khắc Mộc. Chuyển Kim qua Hoả là an toàn."*

### Failure → retry with stronger hint

After 2 fails:
> SƯ PHỤ (text top, after retry start): *"Đặt 1 linh khí Hoả ở giữa — Kim đi qua nó, biến Kim thành Hoả. Hoả tới Mộc đan thì sao? Hoả sinh Thổ — đan Mộc của con sẽ KHÔNG bị Hoả khắc. An toàn."*

### Pass condition

Linh đan reaches Bảo with stability > 0.

### Reward

```
+500 XP
+5 Linh Đan
+2 Cổ Vật chance roll (one of 3 unidentified)
Lore page: "Tương khắc — bài học sinh tử"
```

---

## 10. BOSS: Tâm Ma Sơn Mộc

**See `boss-patterns.md` §1.1 for attack patterns.**

### Pre-boss dialogue

> SƯ PHỤ: *"Con thấy không? Có một tâm ma nhỏ — sinh ra từ sự bực bội của lão tiều phu. Lão không muốn đốn gỗ tổ truyền."*
>
> SƯ PHỤ: *"Tâm Ma không phải kẻ ác. Là... ham muốn của loài người, hiện hình. Con chiến đấu để giải thoát họ."*
>
> *(Boss music starts: low drum + sáo trúc.)*

### During fight

Standard boss UI. If linh đan stability < 20%:

> SƯ PHỤ (text top): *"Bình tĩnh. Một viên đan bể không phải hết. Con tu hành lâu dài, không cấp tốc."*

### Post-boss dialogue

> SƯ PHỤ: *"Tốt. Tâm Ma đã được giải thoát. Linh hồn nó trở về thiên nhiên."*
>
> *(Boss particle effect dissipates.)*
>
> SƯ PHỤ: *"Trở về am. Có nhiều thứ cần dạy con. Bắt đầu là... gặp gỡ các đạo sĩ khác trong làng."*

### Reward

```
+1 Bảo linh khí (Mộc)
+200 gold
+200 XP
+1 Lò Thân slot upgrade
Lore page: "Tâm Ma — bản chất"
```

---

## 11. Base Camp Welcome Tour (~5 min)

Player returns to Khai Lư Trấn (base camp). Sư Phụ leads tour.

### Stop 1: Đạo Quán Cờ Bạc

> SƯ PHỤ: *"Lão Hồ Ly — cờ bạc lừa lọc nhưng có hàng tốt. Hắn không phải bạn, không phải thù."*
>
> LÃO HỒ LY: *"Aiya, đệ tử mới! Có Linh Đan đầu tiên chưa? Lão có hàng mới — giá rẻ — chỉ cho người mới —"*
>
> SƯ PHỤ (cắt): *"Bỏ qua hắn. Cảnh giác."*

### Stop 2: Đan Lư Bàn

> SƯ PHỤ: *"Đan Lư Bàn — nơi crafting. Hắc Bạch sẽ giúp con."*
>
> ĐAN SƯ HẮC (sign language, subtitle): *"Mang linh khí về đây. Ta giúp tinh chỉnh."*
>
> ĐAN SƯ BẠCH (sign language, subtitle): *"An toàn. Tỉ mỉ. Đừng vội."*

### Stop 3: Đạo Sĩ Vô Danh (mid vendor)

> SƯ PHỤ: *"Vô Danh — hắn không nói nhiều. Hàng hắn quý."*
>
> ĐẠO SĨ VÔ DANH (hood up): *"Bảo vật này, không phải của tại hạ. Cũng không phải của ngài. Là của trời..."*

### Stop 4: Tổ Sư Bất Tử (rare vendor, locked early)

> SƯ PHỤ: *"Tổ Sư Bất Tử — hắn sẽ xuất hiện khi con đủ trình. Bây giờ, hắn ẩn."*

### Stop 5: Lò Thần forge (locked, Act 3)

> SƯ PHỤ: *"Lò Thần — sửa Lò. Bây giờ chưa cần. Khi nào Lò vỡ, con sẽ gặp hắn."*

### Stop 6: Lão Bà Thiên Cơ (locked, Act 5)

> SƯ PHỤ: *"Lão Bà Thiên Cơ — quẻ vận mệnh. Con sẽ hiểu sau."*

### Final stop: Sư Phụ am (player's home)

> SƯ PHỤ: *"Đây là nhà con. Bất cứ lúc nào lạc đường, về đây. Ta đợi con."*
>
> *(Save point unlocked.)*
>
> NEW QUEST: *"Đi tới Ngũ Hành Sơn — Act 2 begins"*

---

## 12. Tooltip timing rules (global)

| Trigger | Timing |
|---|---|
| Hover < 1s | Nothing |
| Hover 1-3s | Brief tooltip (1 line) |
| Hover 3s+ | Full tooltip + "Nhấn ? for more" |
| First-time UI element | Auto-tooltip persistent until dismissed |
| Repeated UI element | Tooltip only on demand |

---

## 13. Skip behavior (Veteran Mode)

When player chooses Veteran Mode in Settings:
- Skip intro cutscene
- Skip Pháp Trận #1 (auto-completed, give same rewards)
- Skip base camp tour
- Start at Pháp Trận #2 with starter kit:
  - 5 Linh Đan
  - 5 random linh khí Phàm/Linh
  - Lò 4-slot (Đỉnh + Thân + Đế + Khắc Phù)

Achievement: "Tu Chân Lão Tổ" — unlocks after first character completes Act 5 once.

---

## 14. Decision log

- **2026-05-19**: Initial tutorial script v1. Full Act 1 dialogue locked.
