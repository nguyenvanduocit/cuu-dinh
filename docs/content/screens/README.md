# `screens/` — UI Screens (Wireframe + Concept Art Unified)

> 13 screens with wireframes and/or concept art prompts.

## Design rationale

Screens unify UI wireframe specs (from `../../ui-wireframes.md`) with concept art prompts into per-screen bundles. Each screen may have both a technical wireframe and a visual concept art prompt, or just one of the two.

## Cross-references

- UI design principles: `../../ui-wireframes.md` §0-§1
- Art direction: `../../art-direction.md`

## Entity layout

```
screens/<id>/
├── design.md     # required — screen purpose and key elements
├── wireframe.md  # optional — ASCII wireframe layout
└── prompt.md     # optional — concept art MJ prompt
```
