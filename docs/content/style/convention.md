# CONVENTION — contract viết prompt (mọi agent tuân thủ)

> Đọc file này + 5 file `style/` còn lại trước khi viết bất kỳ entry nào.

## Compose formula

```
[SUBJECT cụ thể] + [ELEMENT TOKEN nếu element≠rỗng] + [RARITY TREATMENT] + [centered game item icon on dark ink background] + [STYLE SUFFIX] [--ar/--stylize]
```

- SUBJECT: tra `style/base-noun-dictionary.md` theo `type`/slot.
- ELEMENT TOKEN: tra `style/element-tokens.md` theo `element`.
- RARITY TREATMENT: tra `style/rarity-tokens.md` theo `rarity`/`variant`.
- STYLE SUFFIX: lấy từ `style/style-suffix.md` (dán đầy đủ khi gen thật).

## Format MỖI entry (bắt buộc, đồng nhất toàn bộ)

```markdown
### `<id thật từ data>` — <ten thật từ data>

**Mô tả**: <1-2 câu tiếng Việt: vật phẩm là gì + nét thị giác chủ đạo, có thể nhắc lore nếu lore/item-flavor.json có>.

​```
/imagine prompt: <prompt đầy đủ tiếng Anh ghép theo compose formula, KẾT bằng STYLE SUFFIX và --ar/--stylize>
​```
```

## Quy tắc cứng

1. **ID phải khớp data thật** — copy nguyên `id` từ CSV/JSON. KHÔNG bịa. Verify bằng grep nếu nghi ngờ.
2. **`ten` giữ nguyên tiếng Việt đủ dấu** từ data (NFC).
3. **Mô tả tiếng Việt**, prompt `/imagine` tiếng Anh.
4. **4 thành phần** mỗi prompt (subject + named-color + STYLE SUFFIX `--style raw --v 6` + `--no`).
5. **Match art value với vai trò**:
   - Hero items (cổ vật, unique parts, đạo phái): chi tiết cao, `--stylize 150`.
   - Linh khí / La Hán / parts: `--ar 1:1 --stylize 120`.
   - Icon currency/material 32-64px: compact, legible-at-small-size, `--stylize 80`.
   - Affix rune / passive node: COMPACT glyph overlay/icon, KHÔNG hero illustration, `--stylize 80-90`.
6. **Element rỗng** → bỏ element token, dùng `neutral ivory-and-gold` hoặc theo ngữ cảnh hiệu ứng.
7. **Per-entity layout**: mỗi entity giữ MJ block trong file riêng `docs/content/<category>/<id>/prompt.md`. KHÔNG batch nhiều entity vào 1 file.
8. **`prompt.md` mở đầu**: optional dòng `> Mô tả: ...` tiếng Việt 1-2 câu, rồi block ```` ```/imagine ... ``` ```` với STYLE SUFFIX dán đầy đủ ít nhất ở 1 entity head-of-category để verify; entity sau dùng placeholder `[STYLE SUFFIX]` nếu cần gọn.
9. **Bundle-specific art rule**: subject mapping per-slot (equipment) và rune overlay per-affix-category (affixes) sống ở bundle README (`../equipment/README.md`, `../affixes/README.md`) — KHÔNG nhồi vào `style/` shared.

## Ví dụ chuẩn (linh khí `bronze-bell`)

```markdown
### `bronze-bell` — Chuông Đồng

**Mô tả**: Chuông đồng cổ luyện từ thời Hùng Vương, gõ một tiếng thì linh khí trong lò thức giấc. Hình khối góc cạnh, ánh kim lạnh.

​```
/imagine prompt: a single ancient bronze ritual bell, forged metal with a sharp angular silhouette and cold metallic gleam, imperial gold (#D4AF37) edge light, plain dull finish, simple thin gray border frame, no glow, centered game item icon on dark ink background, moody pixel art game art, xianxia daoist alchemy aesthetic, talismanic cinnabar runes and bagua trigram motifs, limited six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple, hand-crafted sprite craftsmanship in the spirit of Eastward and Sea of Stars, atmospheric serious mystical tone, crisp hard pixel edges --style raw --v 6 --no anime, manga, ukiyo-e, western fantasy, generic asian temple stock photo, photorealistic, 3d render, glossy plastic, modern, text, ui, watermark, signature, blur --ar 1:1 --stylize 120
​```
```

> Trong file thật, sau ví dụ expanded đầu tiên mỗi file, các entry tiếp theo có thể viết `... [STYLE SUFFIX] --ar 1:1 --stylize 120` (dùng placeholder) để gọn — miễn là file có ÍT NHẤT 1 ví dụ expanded đầy đủ ở đầu để người đọc biết STYLE SUFFIX dán vào đâu.
