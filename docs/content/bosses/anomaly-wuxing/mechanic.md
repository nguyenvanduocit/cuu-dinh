# Dị Tượng Ngũ Hành — Mechanics

Extracted from `docs/boss-patterns.md`.

**Role**: Tests if player learned all 5 elements.

**Phases**: 2

**Phase 1: Wandering Element** (boss HP 100% → 50%)
- **Element shift** (8s cycle): Boss cycles through 5 elements. While in element X, spawns linh lực of element X.
- **Volley** (5s cooldown): Spawn 4 linh lực current element.
- **Telegraph**: visual color change matches current element.

**Phase 2: Tương Khắc Spike** (boss HP 50% → 0%)
- **Khắc Attack** (4s cooldown): Boss INTENTIONALLY spawns linh lực that tương khắc with linh đan element. Player must route or convert.
- **Element shift** continues but faster (5s cycle).
- **Adds**: 2 small mini-Dị Tượng spawn, each tăng intensity của linh lực ×1.5 in their range.

**Reward**:
- 1 Bảo linh khí
- 500 gold
- 1 Tinh Hoa Ngũ Hành random
- +500 XP
