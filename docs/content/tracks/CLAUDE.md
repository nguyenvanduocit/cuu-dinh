# Tracks — music brief (Tier 2)

> Tier 2 cho category `tracks`. Cascade từ root → `docs/content/CLAUDE.md` (Tier 1).

---

## Tracks trong universe

Track = **music brief** cho mỗi pháp trận / screen / boss / event. Mood chính: **tu chân / ritual fantasy huyền huyễn**. KHÔNG phải "soundtrack" western fantasy / sci-fi.

**Engine workflow**: draft Suno AI / royalty-free → polish Audacity → integrate.

**Quy mô**: 17 track brief.

---

## Design principles

- **Music MUST khớp scene cosmology**:
  - Pháp trận **diêm phủ** = u tối + chuông tử khí + sáo bi + trầm bass.
  - Pháp trận **thiên kiếp** = sấm + dây căng + xung lực + thiếu nữ thanh nhạc xa.
  - Pháp trận **tâm ma** = harp + dissonance + whisper layer + tempo variable.
  - Pháp trận **long cung** = nhạc đáy bể, vọng âm, sáo trúc dài.
  - Screen **Lò Luyện Đan** = thiền nhạc, mộc ngư đều, cổ cầm chậm.
- **Instrumentation** ưu tiên truyền thống: cổ cầm (古琴), sáo trúc, chuông, mộc ngư, đại cổ, đàn tì bà, đàn nhị, đàn nguyệt.
- **Tempo aligned action density**: combat fast (120-140 BPM), meditation slow (60-80 BPM), boss climax variable.
- **Loop-friendly** cho in-pháp-trận (~60-180s seamless loop).

---

## Lore voice (brief format)

Brief = **scene + mood + instrumentation + tempo + length + reference**. Example:

> "Pháp trận thiên kiếp boss fight. Mood: cosmic + nghịch ngũ hành chaos + urgency. Instrumentation: đại cổ + dây đàn dissonant + chuông xa + thiếu nữ thanh nhạc ngắn. Tempo 130-150 BPM rising. Length 120s loop-friendly. Reference: [movie / track] cho mood."

---

## Cross-system relationship

- **Maps / Screens**: track assigned per pháp trận / screen.
- **Acts**: act climax có theme track riêng (Act 5 climax = signature track).
- **Bosses**: per-boss-type theme track signature (Dị Tượng combat track; Tâm Ma dissonance; Thiên Kiếp cosmic).
- **Arenas**: per-arena ambient (long huyệt = vọng âm thuỷ; thiên đàn = sấm xa).
- **SFX**: track + SFX layer hài hoà (track quiet zone cho SFX punch through).

---

## Sub-grouping (Tier 3) — N/A

17 entity. Stay flat.

---

## Anti-patterns

- ❌ Western orchestral / EDM / synthwave — phá tu chân mood.
- ❌ Track không loop-friendly cho in-game (intro dài + outro hard cut → ugly loop).
- ❌ Brief mơ hồ — MUST instrumentation + tempo + length + reference cụ thể.
- ❌ Track Suno default chưa polish Audacity — output rough, có artifact AI.
- ❌ Tempo mismatch action density (slow ambient ở combat scene boss).
- ❌ Instrumentation modern (electric guitar, synth pad, drum kit) — phá tu chân.
