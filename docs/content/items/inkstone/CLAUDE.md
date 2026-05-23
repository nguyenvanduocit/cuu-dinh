# Inkstone (Nghiên Mực) — ink trail mark element (Tier 3)

> Tier 3 cho `items/inkstone/`. Cascade từ root → Tier 1 → `items/CLAUDE.md` (Tier 2).

---

## Sub-type trong tu chân lore

Inkstone = **nghiên mực** — đá nghiên đạo gia / văn sĩ dùng mài mực viết chú văn, phù, kinh. Trong tu chân lore = pháp khí của đạo sĩ scholarly — không phải combat-direct, mà **viết / vẽ chú văn lên không trung** → chú văn biến thành effect.

Một số nghiên cổ là di vật văn sĩ tu chân — đá nghiên hấp thụ vong khí từ chú văn người viết = identity dark scholarly.

---

## Game role specific

- **Physics**: **paint trail tagged element trên board** — linh khí đi qua "vẽ" mực element-tagged để lại trail. Linh lực tiếp theo va trail → trigger element effect.
- **Anchor placement**: thường mid-board, where trail formation cần.
- **Element bias**: Thổ (đá) + Mộc (bút lông từ cây) + Vô Cực (mực đen). Variant Hoả (mực đỏ son), Thuỷ (mực nước).

---

## Design constraints

- Inkstone MUST có **trail effect visible** — paint stroke remains trên board (X giây).
- Trail color khớp element identity.
- Visual art: nghiên đá + **mực đen pooled** + **bút lông** cận kề (compose context).
- Trail mechanic = signature. KHÔNG burst, KHÔNG zone — chỉ trail.

---

## Lore motifs

- Material: đá nghiên (slate / black stone / jade-veined), mực đen.
- Form: nghiên hình chữ nhật / oval với mặt khoét lõm chứa mực.
- Accessory: bút lông, cup nước, ấn triện.

---

## Cross-references

- **Affixes** — inkstone-specific affix về trail duration / trail effect.
- **NPCs** — văn sĩ tu chân NPC có thể tặng inkstone unique.
- **Effects** — ink-trail effect cross-ref `effects/`.

---

## Anti-patterns

- ❌ Inkstone không có trail effect → mất identity.
- ❌ Trail color sai element (Thuỷ inkstone trail đỏ).
- ❌ Trail instant disappear (< 0.5s) → player không thấy → mất feedback.
- ❌ Inkstone burst damage primary → sai trail identity.
- ❌ Modern inkstone aesthetic (gel ink, fountain pen) → phá tu chân.
- ❌ Không có mực pooled hoặc bút lông trong art context → mất "scholar pháp khí" feel.
