# Accessibility — Lư Đan

> Inclusive design. Colorblind support, font scaling, key remap, audio cues for deaf players.

> **Philosophy**: Accessibility = MORE players, not lesser product. Built-in, not bolted-on.

---

## 0. Coverage targets (v1.0)

| Disability area | Target coverage |
|---|---|
| Visual (colorblind, low vision) | 90% — full color, font scale, contrast options |
| Auditory (deaf, hard of hearing) | 80% — subtitles, visual cues, no audio-required gameplay |
| Motor (limited dexterity) | 70% — full remappable, slow/auto mode toggle |
| Cognitive (ADHD, autism, processing) | 70% — tooltip persistence, pause anywhere, simplified mode |

---

## 1. Visual Accessibility

### 1.1 Colorblind support

Game uses Ngũ Hành colors (Kim/Mộc/Thuỷ/Hoả/Thổ) extensively. Without colorblind support, this is broken for ~8% of male players.

#### Implementation

Add colorblind modes in Settings:
- **Off** (default)
- **Deuteranopia** (red-green most common)
- **Protanopia** (red weakness)
- **Tritanopia** (blue-yellow)
- **Monochrome** (full grayscale)

For each mode, remap palette:
- Use **shape + color** distinguishing (not color alone)
- Each element gets unique geometric symbol overlay:
  - Kim: ✦ (sharp 4-point)
  - Mộc: 🌿 (leaf)
  - Thuỷ: 〰 (wave)
  - Hoả: 🔥 (flame)
  - Thổ: ▲ (triangle)
  - Vô Cực: ◯ (circle)

These symbols always visible on linh lực + linh khí + linh đan, regardless of colorblind mode.

### 1.2 Font scaling

UI text scalable 100% to 200%:
- 100%: default 14-16px body
- 125%: 17-20px (mild visual impairment)
- 150%: 21-24px (moderate)
- 200%: 28-32px (large)

Tooltips, dialogue, all menus scale together.

Note: HUD may not scale (limited screen space) — but tooltip "hold to see large" available.

### 1.3 High contrast mode

Settings toggle: High Contrast UI
- Background → solid black
- Text → solid white
- Buttons → outlined
- Disable background texture (cleaner)

### 1.4 Brightness / gamma slider

Per-room brightness adjustment (player preference).

### 1.5 Damage number persistence

Damage numbers float for 1.5s default → settable 1-5s for slower processing.

### 1.6 Reduced motion mode

For migraine, photosensitivity, motion sensitivity:
- No camera shake on impact (replace with brief flash)
- No screen flash (replace with vignette darken)
- Slower particle effects
- No camera bob

---

## 2. Auditory Accessibility

### 2.1 Subtitles

All NPC dialogue + boss whispers + narrator → subtitled.
- Always on (default)
- Toggleable in Settings
- Subtitle size scalable
- Speaker identification (label "Sư Phụ:" before quote)
- Background option: black with 80% opacity vs transparent

### 2.2 Visual audio cues

For deaf/hard-of-hearing:
- **Linh lực collision** → visible particle + color flash + intensity number
- **Stability warning** → screen pulse red border at < 25%
- **Boss attack telegraph** → glow + countdown number visible (not just sound)
- **Combo chain** → number popup ascending
- **Phong Ấn result** → text label appears alongside SFX

### 2.3 No audio-required mechanics

Every gameplay-critical signal has visual equivalent:
- ✅ Linh lực collision = particle (visible)
- ✅ Phong Ấn outcome = text + visual change (visible)
- ✅ Stability danger = HUD red flash (visible)
- ❌ NO "listen for the sound to time it" mechanics

### 2.4 Visual SFX intensity

Sound intensity → visual intensity scaling:
- Soft sound = small particle
- Loud sound = big particle + screen subtle flash
- This way deaf players can "see" the loudness

---

## 3. Motor Accessibility

### 3.1 Full keyboard remapping

All keys remappable in Settings. Default + remap suggestions:

| Action | Default | Common alternate |
|---|---|---|
| Move cursor | Arrow keys | WASD |
| Click / interact | Space / Enter | Mouse left |
| Drag start | Hold (click + drag) | Click + click |
| Open menu | Escape | F1 |
| Quick save | F5 | Ctrl+S |
| Quick load | F9 | Ctrl+L |
| Pause | P | Pause key |
| Cheat sheet toggle | Tab | H |
| Inventory | I | Ctrl+I |

### 3.2 Hold vs Toggle

Settings option: "Hold buttons" or "Toggle buttons" for actions that require sustained input.

### 3.3 Auto-mode for slow players

Settings: "Auto-Mode"
- Auto-place linh khí (1 click = AI suggests + places)
- Auto-confirm common dialogue
- Auto-collect loot at end of pháp trận

### 3.4 Gamepad support (v1.0)

- Xbox controller: native support
- PlayStation: native support
- Switch Pro: native support
- Custom remap available
- Reduce trigger pull pressure setting

### 3.5 Touch support (v1.5+)

Post-launch:
- iPad / Android tablet only
- Drag-drop optimized for touch
- Pinch-zoom Atlas
- Long-tap for tooltip

---

## 4. Cognitive Accessibility

### 4.1 Tooltip persistence

Settings option: "Tooltip stays open"
- Off: tooltip closes after 5s (default)
- On: tooltip stays until clicked elsewhere

### 4.2 Pause anywhere

`P` key or pause button pauses **everything** including:
- Physics simulation (linh lực freezes)
- Boss attacks
- Timers
- Music

Player can read tooltips, plan, take a break.

### 4.3 Slow mode

Settings: "Pháp trận speed"
- Standard (100%)
- Slower (50%): physics ½ speed
- Slowest (25%): physics ¼ speed

Tied to "Easy difficulty" by default but separately toggleable.

### 4.4 Simplified mode

Settings: "Simplified UI"
- Hide affix details unless hovered
- Hide stability number (just show colored bar)
- Hide combo chain counter
- Remove particle clutter
- Larger button labels

Trade-off: less information, easier processing.

### 4.5 Skip animations

Settings: "Skip animations"
- Skip phẩm thăng celebration (just show new linh đan)
- Skip boss intro animations
- Skip loot drop animations (instant show)

Useful for: players with attention difficulties + speedrunners.

### 4.6 Save anywhere

Auto-save before/after pháp trận. Manual save at any base camp.

For cognitive load reduction: never lose progress, always retreat option.

---

## 5. Difficulty Modes

### 5.1 Modes

| Mode | Description |
|---|---|
| **Phàm** (Easy) | Stability buffer ×2, drop rate ×1.5, all map mods optional |
| **Linh** (Standard, default) | Baseline values |
| **Bảo** (Hard) | -20% stability buffer, +30% boss damage, more mods active |
| **Thần** (Hardcore) | Permadeath in pháp trận (lose Lò Thọ severely on bể) |
| **Cổ** (Ironman) | No save scumming, no Veteran Mode, single character |

Players can switch difficulty anytime (downward) but not upward without restarting.

### 5.2 Custom difficulty

Players can mix-and-match:
- Stability multiplier
- Damage multiplier
- Drop rate multiplier
- XP multiplier
- Boss difficulty

This makes the game accessible without forcing all-or-nothing.

---

## 6. Localization & Language

### 6.1 Vietnamese as native language

- Game default Vietnamese
- All UI text in Vietnamese
- All NPC dialogue Vietnamese
- All lore Vietnamese

### 6.2 English translation

- Professional translation (NOT machine)
- Full localization including UI
- Cultural footnotes available (optional setting):
  - "Thiên Cơ Quẻ" → tooltip explaining omen/fortune mechanic
  - "Đạo sĩ" → tooltip "Taoist priest / cultivator"
  - "Đan dược" → tooltip "Alchemical elixir / currency"

### 6.3 Additional languages (post-launch)

Priority order (based on Steam audience):
1. Chinese Simplified (large ARPG audience)
2. Korean (Korean indie game scene)
3. Japanese (PoE-style game audience)
4. Spanish (LATAM market)
5. Portuguese-Brazil (LATAM)
6. German (Steam Top 10 country)
7. French
8. Russian

Each language: professional translation, cultural sensitivity reading.

---

## 7. Inclusive Design Decisions

### 7.1 Character creation

- No gender selection (player is "đạo sĩ" — gender ambiguous)
- Naming flexible (any character set, any diacritics)
- No body customization (player IS the Lò)

### 7.2 Inclusive imagery

- NPC art: varied silhouettes and ages, not one generic cultivator look
- No exoticized depictions
- Cultivation-inspired items shown with internal consistency, not generic "Asian fantasy"

### 7.3 Content warnings

Optional content warnings for:
- Boss imagery (potentially disturbing)
- Tâm ma themes (existential, can be heavy)
- Gambling mechanics (acknowledgement for those with addiction)

Settings: "Show content warning" before potentially sensitive content.

### 7.4 Anti-toxic community

Built-in features:
- No in-game chat (no harassment vector)
- Leaderboard (post-launch): anonymous unless opt-in
- Custom name validation (avoid offensive)

---

## 8. Testing checklist

Pre-launch accessibility QA:

- [ ] Each colorblind mode test all 5+ element distinguishable
- [ ] Each font size from 100-200% all UI readable
- [ ] High contrast mode usable for all screens
- [ ] All gameplay completable with subtitles only (no audio)
- [ ] All gameplay completable with one-handed input
- [ ] All gameplay completable with gamepad
- [ ] All gameplay completable on slowest speed setting
- [ ] All gameplay completable with simplified UI
- [ ] Color/symbol pair always present
- [ ] No flashing > 3 Hz (epilepsy safe)
- [ ] All damage indicators have non-color cue
- [ ] All audio cues have visual equivalent
- [ ] Localization passes professional review
- [ ] Content warnings configurable

---

## 9. Implementation priority

### v1.0 ship: Must-have
- Full keyboard remapping
- Colorblind modes (5)
- Subtitle toggle
- Font scale 100-200%
- High contrast option
- Pause anywhere
- Auto-save

### v1.0 ship: Should-have
- Visual audio cues
- Symbol+color element distinction
- Slow mode
- Custom difficulty mixer
- Gamepad support

### v1.1+ launch: Nice-to-have
- Voice acting
- Touch support (tablet)
- Additional languages
- Eye-tracking input (if feasible)
- Color-only HUD option

---

## 10. Audit + advocacy

### Pre-launch
- Hire accessibility consultant (~$1K) — review entire game
- Vietnamese and broader ARPG/cultivation player early access (1 month)
- Steam Deck verified (motor accessibility benefit)

### Post-launch
- Quarterly accessibility audit
- Open accessibility feedback channel (Discord)
- Community-suggested accessibility improvements priority

---

## 11. Decision log

- **2026-05-19**: Initial accessibility spec. Full keyboard remap + 5 colorblind modes + subtitle + font scale must-have v1.0. Difficulty mixer available. Multiple language post-launch.
