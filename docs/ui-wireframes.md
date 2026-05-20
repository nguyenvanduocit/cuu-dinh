# UI Wireframes — Cửu Đỉnh

> Per-screen wireframes + state diagrams. Locked layout principles before implementation.

> **Locked decision**: tối giản UI, KHÔNG đơn giản hoá feature.

---

## 0. Design principles

1. **PoE-grade information density**: don't hide numbers
2. **No tutorial wall**: tooltip on-demand
3. **Mode-less navigation**: hub-style, không page lockstep
4. **Asian aesthetic**: ô lệch, hoa văn vàng, brush stroke titles
5. **Single-handed friendly**: keyboard-only navigable cho accessibility

---

## 1. Navigation map (state diagram)

```
                       ┌─────[Settings]
                       │
                  [Main Menu]
                       │
              ┌────────┼────────┐
        [New Game]  [Load]  [Veteran Skip]
              │        │
              └────┬───┘
                   ↓
                [BASE CAMP HUB]
                   │
       ┌───────┬───┴───┬───────┬───────┐
       │       │       │       │       │
   [Lò Editor] [Tinh Điểm Tree] [Atlas/Pháp Trận] [Stash] [Vendor]
       │       │       │       │       │
       │       │   [Sơn Hà Đồ Lệnh]    │       │
       │       │       │       │       │
       │       │   [Pháp Trận instance]│       │
       │       │       │       │       │
       └───────┴───────┴───────┴───────┘
                       │
                   [Loot Screen]
                       │
                       ↓
                   [BASE CAMP HUB]
```

Player can navigate from base camp to any sub-screen and back without lockstep.

---

## 2-14. Per-screen wireframes

> Sections §2-§14 dissolved 2026-05-20 sang per-entity bundle. Xem `docs/content/screens/<id>/wireframe.md` cho từng screen wireframe (Main Menu, Base Camp Hub, Lo Editor, Tinh Diem Tree, Son Ha Do Lenh Altar, Phap Tran Combat, Dan Lu Ban Crafting, Vendor, Atlas, Stash, Cheat Sheet, Settings, Modal patterns).

---

## 15. Decision log

- **2026-05-19**: Initial UI wireframe locked. 14 screens defined. Cheat sheet always-on. Modal patterns standardized.
