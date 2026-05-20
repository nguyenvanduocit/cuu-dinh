---
id: phap-tran-combat
ten: Pháp Trận
type: screen
screenKind: both
navigation: [son-ha-do-altar]
firstSeenIn: act-1
---

# Pháp Trận (`phap-tran-combat`)

## Identity

Combat screen — 3 phases: Setup, Simulate, Loot. This is the core match layer (PixiJS + Rapier 2D). 20% of gameplay time but 100% of the physics action. Player places linh khí, watches physics simulation, collects loot between ván.

## Layout principles

### Setup phase
- Left panel: linh khí pool (stash subset)
- Right panel: board with anchor points (★) and linh đan at bottom
- Bottom: "Bắt Đầu Luyện" button + Tâm Ma Mod display + Ngũ Hành cheat sheet

### Simulate phase
- Full board: physics simulation running (linh lực balls bouncing, linh khí reacting)
- Top bar: pháp trận info (variant, ván count, quality %, stability %)
- Bottom: timer, combo chain counter, pause/quit
- Floating text: quality/stability delta per hit

### Loot phase
- Centered: loot display (linh khí, linh đan, phong ấn drops)
- XP and gold summary
- "Tiếp tục Ván N →" button
- Stability warning if low

Background: PixiJS canvas renders realtime. MJ provides board frame + backdrop mood only.
