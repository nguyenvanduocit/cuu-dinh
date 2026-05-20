# /generate-game-art — Cửu Đỉnh Art Asset Generator

> **Project skill** (Claude Code style)
> Canonical location: `.claude/skills/generate-game-art/SKILL.md`

This skill is the single source of truth for generating all visual assets for the Cửu Đỉnh project.

**MUST BE USED** whenever the user asks to create art, sprites, icons, concepts, mood references, or any visual asset for the game.

---

## Generation Engine — Codex CLI

All images are generated through the **Codex CLI** image generation tool, invoked headlessly via `codex exec`.

Codex CLI produces images at OpenAI-image-model quality — the result depends entirely on **how well the prompt is written**. This skill's job is to compose a complete, self-contained prompt from the official art-direction system, then hand it to Codex.

### How transparency works (important)

Codex does not render true alpha directly. Its built-in `imagegen` skill generates the subject on a **bright chroma-key background**, then runs `remove_chroma_key.py` to knock it out into a clean transparent PNG (RGBA). To trigger this:

- Ask Codex for an **isolated subject cutout on a removable solid background** — its imagegen pipeline chroma-keys it automatically.
- Do **not** ask the underlying image model to "render literal transparency" — phrase it as cutout / isolated subject / no environment.
- Codex writes the raw image to `~/.codex/generated_images/<uuid>/` and the chroma-keyed PNG to the save path you specify.

### Resolution — keep native output (hard rule)

**Keep Codex's native generation resolution. Never resize, never downscale.**

- Never put a pixel-dimension token in the prompt (`128px`, `128×128`, `64px icon`, etc.). Codex obeys it literally and shrinks the image, destroying detail.
- The pixel sizes written in `docs/art-prompts/` (e.g. `128×128 sprite`) describe the **final in-game asset** size. Resizing to that size is a later Aseprite step — never part of generation.
- Use pixel-art *style* tokens only (`crisp hard pixel edges`, `limited palette`, `sharp silhouette`) — never canvas-size tokens.
- Explicitly tell Codex: *"keep the native generation resolution — do not resize or downscale."*

### Invocation pattern

Run Codex from the project root with workspace-write sandbox so it can save into the repo:

```bash
codex exec --sandbox workspace-write "$CODEX_PROMPT"
```

`$CODEX_PROMPT` must be a **single, fully self-contained instruction** — Codex has no other context. It must contain, in this order:

1. A direct instruction: *"Use your image generation tool to create one image."*
2. The full composed art prompt (subject + element tokens + rarity tokens + STYLE SUFFIX, verbatim).
3. The transparency rule: **isolated subject cutout, no environment / no backdrop, transparent (RGBA) PNG output**.
4. The exact absolute save path under `docs/art/generated/<category>/`.
5. A closing instruction: *"After saving, print the file path and file size."*

### Prompt template handed to Codex

```
Use your image generation tool to create exactly one image.

ART PROMPT:
<composed prompt — subject, element tokens, rarity tokens, STYLE SUFFIX verbatim>

OUTPUT REQUIREMENTS:
- Isolated subject cutout — no environment, no vignette, no ink backdrop. Transparent (RGBA) PNG.
- Keep the native generation resolution — do NOT resize or downscale the image.
- Crisp hard pixel edges, sharp silhouette, limited 6-color palette, no anti-aliasing, no soft gradients.
- No text, watermark, signature.

SAVE: write the final transparent PNG to
/Users/firegroup/projects/cuu-dinh/docs/art/generated/<category>/<name>.png

After saving, print the absolute file path and the file size in bytes.
```

One `codex exec` call generates **one** image. For a batch, issue one call per asset.

---

## Core Requirements (Strictly Enforced)

### 1. Transparent Background (Production Rule)
- **All images must be delivered on pure transparent background (RGBA PNG).**
- No dark ink background, no vignette, no environment, no "centered on ink".
- Output must be a clean cutout / isolated subject.

### 2. Follow the Official Art Direction System
Before writing any prompt, you **must** read these files in order:

1. `docs/art-prompts/_style/convention.md` — compose formula and hard rules
2. `docs/art-prompts/_style/style-suffix.md` — full STYLE SUFFIX (copy verbatim)
3. `docs/art-prompts/_style/palette.md` — locked 6-color palette
4. `docs/art-prompts/_style/element-tokens.md` — how to describe Ngũ Hành
5. `docs/art-prompts/_style/rarity-tokens.md` (when relevant)
6. The specific source file for the asset:
   `docs/art-prompts/<category>/<file>.md` (e.g. `furnace-parts/crown.md`, `linh-khi/fire.md`)
7. Real data when needed: `docs/data/equipment.md`, `items.md`, `uniques.md`, etc.

### 3. Use Real Data Only
- Never invent subject, `id`, or `ten`.
- Always copy the real `id` and Vietnamese `ten` (NFC) from the source files.
- Code-level ID stays English (kebab-case), display name stays Vietnamese.

### 4. Aesthetic Rules
- Moody pixel art game art
- Xianxia / daoist alchemy aesthetic
- Talismanic cinnabar runes + bagua trigram motifs
- Limited 6-color palette (ink black, cinnabar red, imperial gold, ivory white, jade green, twilight purple)
- Hand-crafted sprite craftsmanship (spirit of Eastward + Sea of Stars)
- Very crisp hard pixel edges, sharp silhouette, limited colors, no soft gradients, no anti-aliasing
- Forbidden: anime, manga, ukiyo-e, western fantasy, photorealistic, 3D render, glossy, text, watermark, signature, background

### 5. Output Location
Always save generated files to:

```
docs/art/generated/<category>/
```

Recommended naming:
- `crown-rare-heaven.png`
- `body-legendary-nine-turn.png`
- `tam-ma-boss-01.png`

---

## Workflow (Mandatory)

1. User invokes `/generate-game-art <request>`
2. Read all required style files + the specific asset definition file.
3. Compose the prompt using the project formula.
4. Build `$CODEX_PROMPT` from the template above (composed prompt + output requirements + absolute save path).
5. Generate by running `codex exec --sandbox workspace-write "$CODEX_PROMPT"` from the project root — one call per image.
6. Verify the file exists at the expected path and is a non-empty RGBA PNG (`file <path>` should report `RGBA`).
7. Ask for feedback before generating the next batch.

---

## Usage Examples

```
/generate-game-art crown-rare-heaven

/generate-game-art --category furnace-parts --id body-legendary-nine-turn

/generate-game-art linh khí Hỏa variant 2, transparent

/generate-game-art Tâm Ma boss silhouette, high contrast
```

---

## Important Notes

- The files under `docs/art-prompts/` were originally written for the Midjourney concept phase (with dark background). This skill overrides the background rule for production assets: **always transparent**.
- Codex sees only what is inside `$CODEX_PROMPT` — never rely on conversation context leaking into Codex. Inline everything.
- A single `codex exec` image call typically takes 1–3 minutes; run batches as background tasks.
- Furnace Parts (8 slots) currently have the highest visual priority.
- When the user gives new global art requirements, update this `SKILL.md` file immediately. Treat changes as locked for the project.

---

**This is the official, project-internal art generation skill for Cửu Đỉnh.**

Any other skill (global or elsewhere) should redirect to or load this file when working inside the project.
