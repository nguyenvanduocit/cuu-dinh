> Nguồn data: `ui-wireframes.md` (screen layouts). Append [STYLE SUFFIX] từ `../_style/style-suffix.md`.

# Screens (concept / scene art)

> **Framing quan trọng**: MJ render UI/HUD/text rất tệ. File này dùng MJ cho **background scene + mood + panel ornament**, KHÔNG để gen layout. Layout + HUD đã định ở `ui-wireframes.md` (ASCII). Output đây = nền và khung trang trí để code/Vue dựng UI lên trên.

`--ar 16:9` cho scene, `--ar 1:1`/`3:1` cho ornament. Append [STYLE SUFFIX] từ `../_style/style-suffix.md`.

Mỗi screen có thể cần 2 loại asset:
- **(S) Scene** — tranh nền painted full-bleed.
- **(O) Ornament** — viền/khung/hoa văn pháp trận overlay (transparent center).

---

## 1. Main Menu — `ui-wireframes.md:53`

**(S)** Nền tranh tiên phủ cosmic temple:
```
/imagine prompt: a cinematic title-screen background, a cosmic daoist temple silhouette on a floating mountain at night, a glowing alchemy elixir rising into a starry sky, vast and mystical, ample empty dark space at center for a logo, painterly pixel art, twilight purple and ink black with imperial gold elixir glow, moody pixel art game art, xianxia daoist alchemy aesthetic, talismanic cinnabar runes and bagua trigram motifs, limited six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple, hand-crafted sprite craftsmanship in the spirit of Eastward and Sea of Stars, atmospheric serious mystical tone, crisp hard pixel edges --style raw --v 6 --no anime, manga, ukiyo-e, western fantasy, generic asian temple stock photo, photorealistic, 3d render, glossy plastic, modern, text, ui, watermark, signature, blur --ar 16:9 --stylize 350
```

## 2. Base Camp Hub — `ui-wireframes.md:79`

→ Dùng scene "Khai Lư Trấn" ở `../environments/regions.md` làm nền. Bổ sung **(O)** khung HUD hoa văn pháp trận:
```
/imagine prompt: a horizontal decorative ui banner border ornament, daoist talisman runes, bagua geometry, cloud motifs, hollow transparent center, imperial gold and cinnabar red on dark, [STYLE SUFFIX] --ar 3:1 --stylize 120
```

## 3. Lò Editor — `ui-wireframes.md:123`

**(S)** Bàn luyện khí tĩnh, focus vào lò trung tâm:
```
/imagine prompt: a dim alchemist's workshop interior, a single ornate three-legged alchemy furnace centered on a stone workbench, soft focused light on the furnace, dark blurred surroundings, reverent craftsmanship mood, painterly pixel art, ink black with imperial gold rim light, [STYLE SUFFIX] --ar 16:9 --stylize 200
```

## 4. Tinh Điểm Tree — `ui-wireframes.md:176`

**(S)** Nền tinh đồ huyền ảo (node tree do SVG code vẽ, đây chỉ là nền):
```
/imagine prompt: a deep cosmic star-chart background for a skill tree, faint constellation lines and nebula, five elemental color regions bleeding softly into a central void, very dark and uncluttered for overlaid nodes, twilight purple and ink black with five-element color hints, painterly pixel art, [STYLE SUFFIX] --ar 16:9 --stylize 300
```
**(O)** Keystone node frame (5 element-colored variants): xem rarity border cách làm ở `../_style/rarity-tokens.md`, đổi sang `large diamond keystone frame, [element] colored`.

## 5. Sơn Hà Đồ Lệnh Altar — `ui-wireframes.md:226`

**(S)** Bàn thờ map device thiêng:
```
/imagine prompt: a sacred map-device altar chamber, a raised stone pedestal holding an unfurled glowing landscape scroll, ritual offering slots carved around it, mysterious anticipatory glow, painterly pixel art, cinnabar red and imperial gold on ink black, [STYLE SUFFIX] --ar 16:9 --stylize 250
```

## 6. Pháp Trận — combat scene (3 phase) — `ui-wireframes.md:278`

Match layer là **PixiJS canvas** (gameplay vẽ realtime), MJ chỉ cho **board frame + backdrop mood** mỗi phase.

**(S) Setup/Simulate backdrop** (phía sau board vật lý):
```
/imagine prompt: a vertical alchemy board backdrop, an ornate furnace interior wall with anchor-point sockets and faint trigram engravings, a glowing elixir core slot at lower center, dark so the physics balls read clearly on top, painterly pixel art, ink black with element-colored ambient glow, [STYLE SUFFIX] --ar 9:16 --stylize 180
```
**(O) Loot phase** — rương báu mở:
```
/imagine prompt: a reward burst ornament, an opened treasure chest of spirit artifacts radiating golden light rays, celebratory but mystical, hollow center for item icons, imperial gold and cinnabar red, painterly pixel art, [STYLE SUFFIX] --ar 1:1 --stylize 150
```

## 7. Đan Lư Bàn (Crafting) — `ui-wireframes.md:371`

**(S)** Phòng chế đan, NPC Đan Sư Hắc Bạch lặng lẽ phía sau:
```
/imagine prompt: a daoist crafting chamber, a central anvil-altar for refining spirit artifacts, two silent masked alchemist monks (one black-robed one white-robed) watching from the shadows in the background, focused craft light, painterly pixel art, ink black with cinnabar and ivory, [STYLE SUFFIX] --ar 16:9 --stylize 220
```

## 8. Vendor — Lão Hồ Ly — `ui-wireframes.md:409`

**(S)** Quầy hàng Đạo Quán:
```
/imagine prompt: a quirky daoist curio shop stall interior, shelves of talismans, beads and elixir bottles, warm lantern light, an inviting cluttered merchant mood, empty foreground counter for item list, painterly pixel art, warm cinnabar and imperial gold, [STYLE SUFFIX] --ar 16:9 --stylize 220
```
(Chân dung Lão Hồ Ly → `../bosses-npcs/npcs.md`.)

## 9. Atlas — Sơn Hà Đồ — `ui-wireframes.md:437`

**(S)** Bản đồ thế giới hư không (node do code vẽ):
```
/imagine prompt: a vast world-atlas backdrop, a celestial map of floating regions arranged around a central void core, four distant corner boss citadels, deep space between nodes, very dark for overlaid map markers, twilight purple and ink black with imperial gold landmarks, painterly pixel art, [STYLE SUFFIX] --ar 16:9 --stylize 300
```

## 10. Stash — `ui-wireframes.md:469`

Chủ yếu grid UI → chỉ cần **(O)** texture nền + tab frame:
```
/imagine prompt: a seamless dark parchment-and-lacquer storage panel texture, faint trigram watermark, subtle and uncluttered for an inventory grid, ink black with faint imperial gold, painterly pixel art, [STYLE SUFFIX] --ar 16:9 --stylize 100 --tile
```

## 11. Cheat sheet — Ngũ Hành wheel — `ui-wireframes.md:500`

**(O)** Vòng tròn Ngũ Hành luôn hiện góc màn hình:
```
/imagine prompt: a clean five-element wuxing cycle diagram wheel, five nodes (metal water wood fire earth) connected by generating and overcoming arrows, each node tinted its element color, compact icon-clear and legible, dark background, painterly pixel art, [STYLE SUFFIX] --ar 1:1 --stylize 80
```

## 12. Settings — `ui-wireframes.md:530`

Pure UI → chỉ cần **(O)** nền tĩnh nhẹ (tái dùng Stash texture §10) + 1 motif góc:
```
/imagine prompt: a single corner ornament flourish, a daoist cloud-and-crane brush motif, transparent background, imperial gold on dark, painterly pixel art, [STYLE SUFFIX] --ar 1:1 --stylize 100
```

## 13. Modal — Phong Ấn / Linh Đan Bể — `ui-wireframes.md:566`

**(O)** Khung modal cảnh báo (2 tone):
```
/imagine prompt: an ornate warning dialog frame border, glowing cinnabar-red talisman seal corners radiating caution, hollow center, dark, painterly pixel art, [STYLE SUFFIX] --ar 4:3 --stylize 120
```
Biến thể "Linh Đan Bể" (thất bại): đổi sang `shattered cracked frame, dark mournful red, broken elixir shards in the corners`.

---

## Lưu ý

- MJ output ở đây = **mood + nền + ornament**. KHÔNG copy text/số/HUD từ output (MJ viết chữ sai). HUD do Vue + Tailwind dựng theo `ui-wireframes.md`.
- Texture lặp (Stash/Settings) thêm `--tile` để seamless.
- Giữ **center tối/trống** ở scene để code overlay UI không chìm.
