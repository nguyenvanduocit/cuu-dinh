# Changelog

Tất cả thay đổi đáng chú ý của **Cửu Đỉnh** được ghi lại tại đây.

Format theo [Keep a Changelog](https://keepachangelog.com/vi/1.1.0/).
Dự án đang ở giai đoạn **Pre-production** (concept + design lock), chưa có bản phát hành chơi được.

## [Chưa phát hành]

Giai đoạn tiếp theo: **Vertical prototype** (4-6 tuần) — 1 pháp trận, 10 linh khí, gambling cơ bản (Linh Đan + Phong Ấn), Lò 4-slot, login + cloud save + leaderboard. Chi tiết: `docs/roadmap.md`.

## [0.0.1] — 2026-05-20

Cột mốc **pre-production**: chốt toàn bộ game design + tech stack, dựng SSOT nội dung concept-phase.

### Thêm

- Khởi tạo dự án Cửu Đỉnh: monorepo Bun workspaces skeleton, `CLAUDE.md` (AI working instructions), `README.md` (pitch), `VISION.md` (manifesto), `tsconfig.base.json`.
- **29 locked decisions** — toàn bộ game design, tech stack web-first, mô hình authoring nội dung (chốt qua brainstorm 2026-05-19, revised 2026-05-20).
- Master spec trong `docs/superpowers/specs/`:
  - `2026-05-19-cuu-dinh-master-design.md` — master design.
  - `2026-05-19-tech-stack-revisit.md` — quyết định web stack.
  - `2026-05-20-naming-convention-pivot.md` — từ điển English-ID.
  - `2026-05-20-per-entity-content-bundle-design.md` — spec per-entity bundle.
- Tài liệu thiết kế cross-cutting trong `docs/`: tech-stack, art-direction, audio-spec, combat-math, economy-flow, lore, onboarding, progression-curve, roadmap, ui-wireframes, accessibility.
- **Per-entity content bundle** — SSOT concept phase tại `docs/content/<category>/<id>/` với `design.md` (YAML frontmatter machine-readable + mechanics), tuỳ chọn `lore.md` / `prompt.md` / `art/`. Tổng **675 entity** trên 22 category:
  - 190 affixes, 150 passive-tree nodes, 78 items, 62 currency, 50 equipment, 30 uniques.
  - 17 bosses, 17 tracks, 16 npcs, 16 lore-entities, 5 ascendancies, 5 factions.
  - 13 screens, 10 maps, 10 regions, 3 arenas, 3 sets.
- `docs/content/enums.md` — registry vocabulary dùng chung; `docs/content/style/` — MJ art tokens.
- `tools/derive-catalog.ts` — regenerate `_catalog.md` từ folder con.

### Thay đổi

- **Đổi tên game**: Lư Đan → **Cửu Đỉnh** (Nine Cauldrons); package npm scope `@cuu-dinh/*`, GitHub repo `cuu-dinh`. Viết lại pitch trong README (decision #28).
- **Tech stack pivot** → web-first: Vue 3.5 + PixiJS v8 + Rapier 2D + Nakama + Vite + Bun monorepo, thay cho hướng Godot 4 (decision #26).
- **Naming convention pivot**: code-level identifier (class/enum/file/variable/ID slug) → English; display name + lore prose giữ Hán-Việt. Rename hàng loạt UPPER_CASE → kebab-case (decision #27).
- **Mô hình authoring nội dung pivot**: từ bảng phẳng `docs/data/` → per-entity bundle `docs/content/<cat>/<id>/`; catalog cross-entity trở thành file derived (decision #29).
- Migrate toàn bộ nội dung sang per-entity bundle qua 4 phase: item-shaped (10 category), character-shaped (4 category), narrative acts, và spatial/UI/audio/effects.
- Cập nhật email liên hệ sang địa chỉ cá nhân.

### Gỡ bỏ

- `docs/data/` (bảng phẳng) — đã migrate hết sang per-entity content bundle.
- Các subdir trong `art-prompts/` đã migrate; `packages/data` cũ.
