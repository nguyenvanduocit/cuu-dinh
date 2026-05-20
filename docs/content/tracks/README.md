# `tracks/` — Music Tracks

> 15+ music tracks for v1.0.

## Design rationale

Music tracks are composed per mood/location, not per-entity. Each track has a brief describing mood, instruments, length, and intended use. Suno AI / AIVA for initial drafts, hand-corrected by composer.

## Cross-references

- Audio philosophy + mixing: `../../audio-spec.md` §0, §3-§10
- Instrument palette: `../../audio-spec.md` §6

## Entity layout

```
tracks/<id>/
├── brief.md    # required — mood, instruments, length, use context
└── art/        # optional — album art concept
```
