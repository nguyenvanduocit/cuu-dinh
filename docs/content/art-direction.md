# Art Direction — Đan Kiếp

> Visual identity locked 2026-05-19. Mọi asset phải align với guide này.

---

## North Star

**Huyền huyễn tu chân + Pixel art + đan đạo ritual craft.**

Không phải:
- ❌ Anime/manga
- ❌ Generic low-effort xianxia
- ❌ Japanese ukiyo-e
- ❌ Western fantasy
- ❌ Generic "Asian temple"

Phải là:
- ✅ Tiên phủ, tông môn, động thiên phúc địa
- ✅ Pháp trận, phù văn, trận kỳ, ngọc giản, dấu ấn đan đạo
- ✅ Đan lô, hồ lô, phi kiếm, linh châu, chuông khánh
- ✅ Núi mây, thạch môn, cổ điện, bí cảnh, thiên kiếp
- ✅ Robe silhouettes for đạo sĩ/đan sư/trận sư

---

## Palette — Tiên Phủ Huyền Quang (Locked 6-color)

```
#1A1A1A — Mực huyền       (background, base)
#C82127 — Đỏ chu sa       (primary accent, danger)
#D4AF37 — Vàng kim        (highlight, success)
#F5E6D3 — Trắng ngà       (text, neutral)
#2E5E4E — Xanh ngọc       (Mộc element)
#4A1942 — Tím triều       (Tâm Ma, dark energy)
```

### Element extensions (Ngũ Hành color coding)

| Element | Color | Hex | Visual cue |
|---|---|---|---|
| **Kim** (Metal) | Vàng kim | `#D4AF37` | Sharp angular shapes, metallic gleam |
| **Mộc** (Wood) | Xanh ngọc | `#2E5E4E` | Organic curves, leaf motifs |
| **Thuỷ** (Water) | Xanh dương đậm | `#1E3A5F` | Flowing curves, ripples |
| **Hoả** (Fire) | Đỏ son | `#C82127` | Sharp flames, particles upward |
| **Thổ** (Earth) | Nâu đất | `#8B5E34` | Solid blocks, weight, dust |
| **Vô Cực** | Tím triều | `#4A1942` | Cosmic, void, infinity |

### Linh đan grade colors

| Phẩm cấp | Color | Visual |
|---|---|---|
| **Phàm** | Xám | `#808080` | Dull stone |
| **Linh** | Xanh nhạt | `#5B8FAA` | Soft glow |
| **Bảo** | Tím | `#9B59B6` | Crystal sheen |
| **Thần** | Cam | `#E67E22` | Bright aura |
| **Cổ** | Cầu vồng | rainbow gradient | Multi-color glow |
| **Tiên** | Trắng pure | `#FFFFFF` | Blinding white + golden particles |
| **Thánh** | Vàng kim | `#D4AF37` | Sun-like radiance |

---

## Style: Pixel Art

### Resolution
- **Sprites: 64×64 base** (linh khí, NPCs, linh đan)
- **Larger: 128×128** for bosses, Lò editor
- **Icons: 32×32** for UI inventory
- **Backgrounds: 1920×1080 native** painted (mix raster + pixel art)

### Why pixel art
- AI co-pilot CỰC mạnh trên pixel art generation (SD with pixel-art LoRA, Aseprite plugins)
- Cohesive aesthetic dễ maintain consistency
- Performance ngon
- Distinct visual identity (avoid AI-art look)

### Pixel art rules
- **No anti-aliasing** trên sprites (hard edges)
- **Limited palette per sprite** (~8-12 colors per item)
- **Hand-cleaned**: AI gen draft → manual polish trong Aseprite. Không ship raw AI.
- **Consistent perspective**: head-on or 3/4 view, không mixed

---

## Linh Khí Visual Language

Mỗi linh khí có **3 visual layers**:

1. **Base sprite** (32-64px) — the object itself (drum, fan, lantern, etc.)
2. **Element aura** — colored glow per Ngũ Hành element
3. **Rarity border** — outer frame color
   - Phàm: gray simple
   - Linh: blue
   - Bảo: purple + subtle pattern
   - Thần: orange + animated particles
   - Cổ: rainbow + intense particle storm

### Affix visual hints
- Prefix offensive → red runes overlay
- Suffix utility → blue runes overlay
- Implicit → gold sigil center
- Phong Ấn khắc implicit → big red corruption seal

---

## Linh Lực (banh) Visual

- **Size**: 16-24px diameter
- **Color**: element-coded (see palette)
- **Trail**: 8-frame motion blur trail behind
- **On collision**:
  - Particle burst element-colored
  - Screen shake micro (1-2 pixels)
  - Sound bell tone
- **Velocity vis**: faster = longer trail + brighter

---

## Linh Đan Visual

- **Center board, glowing orb 80px diameter**
- **Quality vis**: ring fills like loading bar
- **Stability vis**: crack lines appear when stability < 50%
- **Phẩm cấp transition**: zoom-in particle burst, color shift to new tier
- **Bể (destroyed)**: shatter into pieces, red flash, screen darken 1s

---

## UI Aesthetic

### Layout principles
- **60% mực huyền/đá tiên phủ** background (calming, focus on content)
- **30% đỏ chu sa** for primary frames/borders
- **10% vàng kim** for highlights, important numbers
- **Asymmetric layout** — không grid-rigid, có offset feel
- **Phù văn pháp trận / vân mây / dấu chu sa / chất liệu lò cổ** motif borders for major panels

### Typography

| Use case | Font family | Size |
|---|---|---|
| Headlines | Vietnamese serif (SVN-Aristotelica, or Be Vietnam Pro Display) | 32-48px |
| Body | Be Vietnam Pro Regular | 14-16px |
| Numbers | JetBrains Mono Vietnamese | 18-24px |
| Calligraphy moments | Hand-drawn brush stroke font | 60+ px |

**Vietnamese diacritics support is non-negotiable.** Test mọi font với "Đạo sĩ luyện đan — Cửu Chuyển Linh Đan."

### Animation
- **Slow ink bleed** for transitions (200-400ms)
- **Fast snap** for tap/select (50-80ms)
- **Particle persist** for important events (Phong Ấn, phẩm thăng)
- **No bouncy/playful** — game tone is serious/mystical, not cartoony

---

## Bố Cục Dọc / Portrait Composition (立軸)

Mọi concept art ưu tiên **khung dọc** theo định dạng 立軸 (hanging scroll) của hội hoạ Trung Hoa cổ điển: sơn thuỷ núi non xếp tầng từ chân lên đỉnh, không gian dọc dẫn mắt người xem từ dưới lên.

**Áp dụng cho**: screens, regions, arenas, bosses, background paintings.

### Nguyên tắc bố cục

- **Tầng dọc** (vertical layering): foreground → midground → background xếp chồng theo chiều cao.
- **Trục trung tâm dọc**: subject chính (boss, linh đan, đan lô) nằm trên trục dọc giữa hoặc lệch nhẹ, không dạt sang hai bên.
- **Canvas dọc**: draft thẳng trên khung đứng (portrait ratio) — bố cục sinh ra cho chiều cao.
- **Khoảng trống phía trên** (thiên không): vùng trời/khí/vũ trụ luôn có không gian thở phía trên subject — đặc trưng 立軸.
- **Hoa văn viền dọc**: đường viền phủ văn/vân mây chạy dọc hai bên tạo cảm giác cuộn thư.

### Prompt note cho AI draft

Thêm vào mọi prompt asset có background: `"vertical scroll composition, hanging scroll (立軸), layered mountain mist, portrait orientation, top sky space, side vertical border motif"`. Bỏ qua với sprite nhỏ (linh khí icon 32-64px) — chỉ áp cho background / full-scene art.

---

## Boss Visual Language

### Dị Tượng (Anomaly)
- Asymmetric, glitchy, hỗn loạn
- Colors shift unpredictably
- Made of multiple element fragments

### Tâm Ma (Heart Demon)
- Dark tím triều base
- Smoky aura
- Human-shaped silhouettes with horrific masks
- Whispers/distorted sound

### Thiên Kiếp (Heavenly Tribulation)
- No body — only lightning
- Sky darkens to almost black
- Golden lightning bolts (vàng kim, electric)
- Thunder shake on screen

---

## Environments

| Region | Visual theme |
|---|---|
| **Base camp** | Quiet temple courtyard, evening, paper lanterns, warm orange-red light |
| **Mộc region** | Bamboo forest, fog, green-tinted, life everywhere |
| **Hoả region** | Volcanic, red rock, smoke, glow |
| **Thuỷ region** | Underwater cave or pond, blue-green light shafts |
| **Kim region** | Mountain cave with metal ore veins, cold grey-gold |
| **Thổ region** | Cliffside temple, ochre earth tones |
| **Vô Cực center** | Floating in void, stars/cosmos, deep purple |

---

## AI Asset Pipeline

### Phase 1: Draft (AI)
- Stable Diffusion XL với pixel art LoRA
- Prompt template: `"xianxia cultivation alchemist artifact, [item name], pixel art, [palette colors], talismanic runes, ancient daoist furnace, 64x64, --no anime --no western fantasy"`
- Generate 10-20 variants per item
- Pick top 3 candidates

### Phase 2: Polish (Manual)
- Import to Aseprite
- Hand-clean edges, fix palette to project palette
- Add animation frames if needed (4-8 frames typical)
- Export PNG + Godot AtlasTexture

### Phase 3: Integration (Code)
- Reference sprite from `.tres` Resource file
- Test in Godot scene
- Performance check (sprite count, particle budget)

### Quality gates
- ❌ Reject if: anime traits, generic stock temple look, low-quality AI look, palette deviation > 10%
- ✅ Accept if: distinct cultivation/alchemy feel, palette match, clean pixel edges, reads at small sizes

---

## Inspirational references

> KHÔNG copy. STUDY, then create original.

### Pixel art reference
- **Eastward** (game) — Asian setting + pixel craftsmanship
- **Sea of Stars** — palette discipline
- **Death's Door** — moody atmosphere
- **Hyper Light Drifter** — limited palette mastery

### Tu chân visual reference
- Đạo giáo phù lục, trận đồ, chu sa talismans, đan đạo sealwork
- Đan lô, hồ lô, ngọc giản, phi kiếm, trận kỳ, linh châu
- Tiên sơn, mây biển, thạch môn, cổ điện, động thiên phúc địa
- Cổ cầm, chuông khánh, đàn tranh, nghi lễ luyện đan
- Elemental color symbolism only when the subject is explicitly elemental; otherwise use ritual craft, sect, material, and alchemy motifs

### NEVER reference
- Generic xianxia novel cover cliches
- Japanese anime/manga art
- Western fantasy concept art
- Generic "Asian temple" stock imagery

---

## Asset checklist for v1.0

### Sprites needed
- 60 linh khí base sprites + 5 rarity border variants = 300 sprite states
- 30 Cổ vật base sprites (unique art per) = 30 hand-painted
- 6 Lò designs (each 8-slot configurable) = ~50 part sprites
- 15 NPC characters (full + portrait) = 30 sprites
- 5 boss types × 3 anim states = 15 boss sprites
- 30 background environments (one per atlas region biome) = 30 paintings
- 100+ UI icons (đan dược, nguyên liệu, etc.)
- 50+ particle/effect sprites

### Estimated total: ~600 sprite assets
