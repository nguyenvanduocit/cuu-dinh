# Audio Spec — Cửu Đỉnh

> Music tracks, SFX library, voice direction, mixing principles.

> Style: Huyền huyễn tu chân orchestral + lo-fi blend. Cultivation/ritual instruments primary.

---

## 0. Philosophy

**Audio = nửa gameplay.** Cửu Đỉnh is a physics game — collisions, chains, combos = audio events. Audio quality determines:
- Combat feel (juice)
- Tutorial clarity (audio cues)
- Emotional resonance (story moments)
- TikTok/Twitter virality (clips are audio-first)

### 3 audio pillars

1. **Authenticity**: cultivation ritual palette, not generic stock "Asian" pentatonic
2. **Layered juice**: every collision = sound + intensity scales
3. **Adaptive mixing**: music tempo/intensity matches gameplay state

---

## 1. Music tracks (15+ for v1.0)

### 1.1 Base camp themes (4 tracks)

| Track | Length | Mood | Instruments |
|---|---|---|---|
| **Khai Lư Trấn (day)** | 3:00 loop | Peaceful, hopeful | Đàn bầu solo + soft piano + ambient birds |
| **Khai Lư Trấn (evening)** | 2:30 loop | Reflective, warm | Đàn tranh + flute + crickets |
| **Sư Phụ am** | 2:00 loop | Meditative, sacred | Single đàn bầu + temple bells |
| **Đạo Quán Cờ Bạc** | 1:30 loop | Mischievous, tense | Đàn nhị + percussion + low brass |

### 1.2 Pháp trận themes (5 tracks)

| Track | Length | Mood | Use |
|---|---|---|---|
| **Mộc pháp trận (forest)** | 3:00 loop | Tranquil, mysterious | Mộc-themed maps |
| **Hoả pháp trận (volcano)** | 3:00 loop | Tense, urgent | Hoả-themed maps |
| **Thuỷ pháp trận (sea)** | 3:00 loop | Flowing, ambient | Thuỷ-themed maps |
| **Kim pháp trận (mountain)** | 3:00 loop | Crystalline, focused | Kim-themed maps |
| **Thổ pháp trận (desert)** | 3:00 loop | Ancient, dusty | Thổ-themed maps |

### 1.3 Boss themes (4 tracks)

| Track | Length | Mood | Use |
|---|---|---|---|
| **Dị Tượng boss** | 2:30 loop | Chaotic, escalating | T1-T8 act bosses |
| **Tâm Ma boss** | 3:00 loop | Sinister, slow build | T6-T13 Tâm Ma bosses |
| **Thiên Kiếp** | 2:00 loop | Heavenly, awe + dread | T14+ Thiên Kiếp encounters |
| **Hỗn Nguyên Tâm Ma Vương (final)** | 6:00 epic | 4 phases dynamic music | Final boss |

### 1.4 Story moments (4 tracks)

| Track | Length | Mood |
|---|---|---|
| **Intro cutscene (Sư Phụ am)** | 1:30 | Solemn, beginning |
| **Cao Tổ memorial** | 2:00 | Mournful, reverent |
| **Đạo Phái selection** | 2:30 | Resolute, deciding |
| **Sơn Hà Đồ Lệnh unlock** | 1:30 | Triumphant, cosmic |

### 1.5 Atlas themes (post-launch, v1.1+)

Per atlas region:
- Diêm Phủ (underworld): dark, no-melody, drone-based
- Vô Cực Center (cosmic): otherworldly, no Earth instruments
- Long Cung (underwater): submerged, low-frequency, sonar tones
- Cửu Tiêu (sky): airy, light, ascending scales

---

## 2. SFX Library (~80 effects for v1.0)

### 2.1 Linh lực collision (10 SFX, element-specific)

| Element | Sound | Pitch |
|---|---|---|
| Kim | Chuông (bell, metallic) | High |
| Mộc | Wood block tap | Mid |
| Thuỷ | Water drop / splash | Mid-low |
| Hoả | Crackle / fizz | Mid-high |
| Thổ | Stone tap / thud | Low |
| Vô Cực | Glass shimmer | Mid-high, ethereal |
| Tâm Ma | Whisper / void hum | Low, sub-bass |
| Thiên Kiếp | Lightning crack | Very high, harsh |

Plus modifier tones:
- Element conversion (linh khí transforms element): subtle "twist" pitch shift
- Charge accumulation (chain hop): ascending tone
- Đan đại khắc hit: sharp "crack" — must feel DANGEROUS

### 2.2 Linh đan events (15 SFX)

| Event | Sound |
|---|---|
| Linh đan quality progress (every 10%) | Soft chime ascending |
| Linh đan phẩm thăng (Phàm → Linh) | Gong + ascending arpeggio |
| Linh đan phẩm thăng (Linh → Bảo) | Gong + chord |
| Linh đan phẩm thăng (Bảo → Thần) | Big gong + choir |
| Linh đan phẩm thăng (Thần → Cổ) | Massive gong + reverb |
| Linh đan phẩm thăng (Cổ → Tiên) | Epic celestial chord |
| Linh đan phẩm thăng (Tiên → Thánh) | Almost-divine resonance |
| Stability < 25 warning | Heart beat pulse |
| Stability < 10 danger | Heart beat fast |
| Linh đan bể (failure) | Glass shatter + low rumble |
| Tương sinh hit | Crystal chime |
| Tương khắc hit | Discord crackle |
| Đại khắc hit | Sharp crack + bass drop |
| Combo 5 chain | Ascending arpeggio |
| Combo 10+ chain | Crescendo wave |

### 2.3 Phong Ấn outcomes (4 SFX)

Each Phong Ấn result has distinct sting:

| Result | Sound |
|---|---|
| Phá Niêm (25%) | Stripped, hollow tone |
| Giáng Phẩm (25%) | Descending chord, soft |
| Thăng Phẩm (25%) | Ascending chord, triumphant |
| Khắc Phong Ấn (25%) | Magical sparkle + low resonance |

Pre-Phong-Ấn: ominous gong + 3-second build-up.

### 2.4 UI sounds (10 SFX)

| UI Event | Sound |
|---|---|
| Hover button | Soft tap |
| Click button | Crisp click |
| Item drag start | Lift sound |
| Item drag drop | Snap-into-place |
| Open menu | Pop in |
| Close menu | Pop out |
| Confirm | Affirmative chord |
| Cancel | Negative tone |
| Error | Soft buzz |
| Notification | Ding |

### 2.5 Environmental ambience (8 SFX)

| Environment | Ambience |
|---|---|
| Base camp village | Birds, distant chatter, wind |
| Mộc forest | Birds, rustling leaves, brook |
| Hoả volcano | Distant rumble, fire crackle |
| Thuỷ sea | Waves, seagulls |
| Kim mountain | Wind, distant rock fall |
| Thổ desert | Wind, sand shifting |
| Vô Cực void | Silence + occasional cosmic hum |
| Diêm Phủ underworld | Whispers, distant cries |

### 2.6 Boss attacks (per boss, ~5-10 SFX each)

For each boss:
- Spawn announcement
- Each attack pattern
- Phase transition
- Defeat
- Special abilities

15+ SFX per boss × 12 main bosses = 180+ boss-specific SFX (alpha goal).

### 2.7 Special effects (10 SFX)

- Cổ vật roll
- Đan dược drop
- Đan Pháp drop
- Đan Pháp consume
- Atlas unlock
- Quest complete
- Achievement unlock
- Level up
- Cấp Vô Cực milestone
- Sơn Hà Đồ Lệnh portal opens

---

## 3. Voice direction

### 3.1 NPC voice acting decision

**v1.0**: Text-only (no voice acting). Reasons:
- Cost: voice acting Vietnamese + EN = $20K+ even cheap
- Solo dev scope
- Story-light game philosophy

**v1.5+** (post-launch consideration): Vietnamese voice acting for key NPCs only:
- Sư Phụ (10-15 lines)
- Tổ Sư Bất Tử (5-10 lines)
- Hỗn Nguyên Tâm Ma Vương boss (15-20 lines)

### 3.2 Tone direction for future voice actors

**Sư Phụ**:
- Older male voice (60+)
- Calm, measured, never raises
- Slight northern Vietnamese accent (more authentic)
- Brief poetic pauses

**Tổ Sư Bất Tử**:
- Genderless voice (slightly ambiguous)
- Aged but young-sounding
- Slow tempo
- Almost monotone, deliberate

**Hỗn Nguyên Tâm Ma Vương**:
- Distorted, multi-voice (3-4 voices layered)
- Sometimes seductive, sometimes threatening
- Echo reverb heavy
- Vietnamese with distorted pitch

### 3.3 Narrator decision

No narrator in v1.0. If we add (post-launch), only for:
- Cutscene intro
- Major lore revelations

---

## 4. Mixing principles

### 4.1 Headroom

- Music: -18 dB peak, -23 LUFS integrated
- SFX: -12 dB peak (impact effects)
- Voice: -6 dB peak (if added)

### 4.2 Frequency separation

- Bass region (20-200 Hz): boss attacks, big events
- Mid-low (200-500 Hz): music base, NPC voice if added
- Mid-high (500-2K Hz): linh lực collisions
- High (2K-8K Hz): chimes, alerts, UI
- Air (8K+): magical sparkles

Avoid frequency conflicts — boss attack should not overlap with linh đan progress chime.

### 4.3 Spatial audio

- Stereo only for v1.0 (no surround sound)
- Linh lực collision pan from left/right based on board position
- Boss attacks centered (impact)
- Music center-mixed (no stereo wide effects)

---

## 5. Adaptive music

### 5.1 Pháp trận dynamic layers

Music in pháp trận has 4 stems mixed dynamically:
- **Bass layer**: always on
- **Melody layer**: starts dim, intensity matches linh đan quality progress
- **Percussion layer**: triggers on combo chains 10+
- **Tension layer**: triggers when stability < 30%

### 5.2 Boss music phases

Each boss music has multiple sections matching phase transitions:
- Phase 1: established theme
- Phase 2: layered, more instruments
- Phase 3: full chaotic ensemble
- Final phase (if exists): epic finale

Cross-fade smooth, ~3 seconds transition.

### 5.3 Pause behavior

Music auto-ducks 30% on pause menu. Returns to full on resume.

---

## 6. Instrument palette

### Primary palette
- **Cổ cầm / guqin-like zither** — solo, lead, meditative
- **Đàn tranh / zither** — harmonic, base
- **Đàn nhị / erhu-like bowed strings** — emotional, expressive
- **Sáo trúc** (bamboo flute) — high, ethereal
- **Chuông khánh / ritual bell** — bass, ceremonial
- **Đàn nguyệt** (moon lute) — strumming, rhythm

### Supporting (lo-fi blend)
- Piano (soft, electric)
- Synth pad (ambient)
- Cello (low strings, dramatic)
- Soft drum kit (rhythm, modern)
- Choir (boss moments, epic)

### Banned
- ❌ Generic royalty-free "Chinese restaurant" loops
- ❌ Anime battle-rock instrumentation
- ❌ Overused pentatonic clichés without texture
- ❌ Western orchestral horns (too cinematic)
- ❌ Electric guitar / heavy synth (out of vibe)

---

## 7. Audio asset pipeline

### Phase 1: Composition (AI + human)
- Suno AI / AIVA for initial drafts
- Hand-correct by composer
- Mix in Logic / FL Studio
- Master with reference tracks (PoE soundtrack, Hades soundtrack)

### Phase 2: SFX creation
- Royalty-free libraries (Splice, Sonniss GDC freebies)
- Field recordings (real plucked strings, bamboo flute, bells, stone/metal hits if possible)
- Foley work (real objects for collision sounds)
- Synth-design in Vital / Serum

### Phase 3: Implementation in Godot
- Import as Ogg Vorbis (compressed) for music
- WAV for SFX (uncompressed, smaller files OK)
- Use Godot AudioStreamPlayer + AudioBus for routing
- Sub-bus per category (UI / music / SFX / voice)

### Phase 4: QA
- Test on speakers + headphones + earbuds
- Test at low volume (mobile-like)
- Confirm no clipping
- Confirm element-specific SFX distinguishable

---

## 8. Localization audio

- NPC dialogue: TEXT ONLY, multi-language support
- No voice acting v1.0 (consistent across languages)
- SFX universal (not localized)
- Music universal (not localized)

---

## 9. Audio budget

- Total audio files: ~150 (90 SFX + 15 music + supporting)
- File size budget: 50-100 MB compressed
- Streaming budget: -3dB headroom for compressibility

---

## 10. Decision log

- **2026-05-19**: Audio spec locked. 15+ music tracks, 80+ SFX, no voice acting v1.0. Adaptive music in pháp trận.
- **2026-05-20**: Audio direction pivoted from Vietnamese-instrument focus to cultivation ritual/xianxia alchemy palette.
