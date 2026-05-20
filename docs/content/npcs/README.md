# `npcs/` — NPC Character Bibles

> 15 NPCs with character bibles, dialogue trees, and portrait art.

## Design rationale

NPCs are the narrative spine of Cuu Dinh. Each NPC has a distinct voice, backstory, and quest role across the 5-Act campaign. NPCs are NOT generic quest-givers — each has personal arcs, motivations, contradictions, and ties to the lore's central dramatic question about desire vs cultivation.

## Voice rules

- Full diacritics always for Vietnamese dialogue
- Han-Viet cultivation flavor but readable to modern Vietnamese speakers
- Each NPC has a unique speech pattern (see per-entity `dialogue.md`)
- Refer to `../../lore.md` §8 Voice & tone for global voice direction

## Entity layout

```
npcs/<id>/
├── design.md     # required — role, appearance, backstory, quest role
├── lore.md       # optional — extended character bible
├── dialogue.md   # optional — sample dialogue lines
└── prompt.md     # optional — portrait MJ prompt
```
