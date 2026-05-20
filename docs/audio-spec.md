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

## 1. Music tracks

> Section dissolved 2026-05-20 sang per-entity bundle. Xem `docs/content/tracks/` cho từng music track brief.

---

## 2. SFX Library

> Section dissolved 2026-05-20 sang per-entity bundle. Xem `docs/content/sfx/table.md` cho SFX catalog (table exception — per-SFX bundle quá overkill).

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
