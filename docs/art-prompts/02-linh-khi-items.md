# 02 — Linh Khí, La Hán Set & Lò Parts

> Item sprite icon. Dùng `--ar 1:1 --stylize 120` (bám prompt sát, sprite cần control). Append [STYLE SUFFIX] từ `README.md`.

Item base sprite **64×64** (`ART_DIRECTION.md:66`), 3 visual layer: base sprite + element aura + rarity border (`:85-103`). MJ v6 cho ra concept icon; sprite final qua SDXL+LoRA.

---

## §0. Công thức compose

```
/imagine prompt: a single [BASE-NOUN SUBJECT], [ELEMENT TOKEN], [RARITY TREATMENT], centered game item icon on dark ink background, [STYLE SUFFIX] --ar 1:1 --stylize 120
```

Ghép 4 mảnh: **base-noun** (§3) + **element token** (§1) + **rarity treatment** (§2) + STYLE SUFFIX. Tra batch table §4 để lấy `[type, element, rarity]` thật cho từng item theo `id`.

---

## §1. Element token (Ngũ Hành)

| Element (data) | Token chèn vào prompt |
|---|---|
| `metal` (Kim) | `forged metal with a sharp angular silhouette and cold metallic gleam, imperial gold (#D4AF37) edge light` |
| `wood` (Mộc) | `living wood with organic curves and sprouting leaf motifs, jade green (#2E5E4E) qi glow` |
| `water` (Thuỷ) | `flowing water forms with ripples and drifting mist, deep blue (#1E3A5F) inner light` |
| `fire` (Hoả) | `upward-licking flames and floating embers, cinnabar red (#C82127) radiant heat` |
| `earth` (Thổ) | `solid blocky weight with dust and carved stone, earthen brown (#8B5E34) tone` |
| `void` (Vô Cực) | `cosmic void with star-flecks and infinity motif, twilight purple (#4A1942) ethereal aura` |

## §2. Rarity treatment + border (`ART_DIRECTION.md:90-103`)

| Rarity (data) | Phẩm | Treatment chèn vào prompt |
|---|---|---|
| `Common` | Phàm | `plain dull finish, simple thin gray border frame, no glow` |
| `Magic` | Linh | `soft blue inner glow, clean blue border frame` |
| `Rare` | Bảo | `purple crystalline sheen, ornate purple border with a subtle repeating talisman pattern` |
| `Legendary` | Thần | `bright orange aura with floating ember particles, glowing orange border frame` |
| `Unique` (Cổ vật) | Cổ | `intense prismatic rainbow particle storm, shifting iridescent border, legendary radiance` → xem `03-co-vat-uniques.md` |

## §3. Base-noun subject dictionary (`type` → subject)

| `type` | ten gốc | SUBJECT để chèn |
|---|---|---|
| `bell` | Chuông | `an ancient bronze ritual bell` |
| `sword` | Kiếm | `a slender daoist flying sword (phi kiem)` |
| `saber` | Đao | `a curved single-edged daoist saber` |
| `inkstone` | Nghiên Mực | `a carved scholar inkstone slab with an ink pool` |
| `bead` | Châu | `a glowing round spirit bead orb` |
| `statue` | Tượng | `a small carved guardian statue figurine` |
| `talisman` | Bùa/Phù | `a hanging paper talisman strip with brush-written cinnabar runes` |
| `cauldron` | Đỉnh | `a three-legged daoist alchemy cauldron` |
| `box` | Hộp | `an ornate sealed treasure box` |
| `fan` | Quạt | `a half-open folding ritual fan` |
| `branch` | Cành | `a gnarled spirit-tree branch with a few sprouting leaves` |
| `lantern` | Đèn | `a hanging paper lantern` |
| `flower` | Hoa | `a blooming spirit lotus flower` |
| `vase` | Bình | `a slender porcelain nectar vase` |
| `charm` | Phù | `a carved jade pendant charm` |

---

## §4. Batch tables — 60 linh khí base (ID thật từ `packages/data/items.csv`)

### 4.1 Kim / metal (10)

| id | ten | type | rarity |
|---|---|---|---|
| `bronze-bell` | Chuông Đồng | bell | Common |
| `white-tiger-sword` | Kiếm Cổ Bạch Hổ | sword | Magic |
| `metal-essence-inkstone` | Nghiên Mực Kim Tinh | inkstone | Common |
| `white-tiger-bead` | Châu Bạch Hổ | bead | Magic |
| `ancient-keen-saber` | Đao Cổ Sắc | saber | Common |
| `white-tiger-statue` | Tượng Bạch Hổ | statue | Magic |
| `metal-rune-talisman` | Phù Kim Tự | talisman | Rare |
| `platinum-cauldron` | Đỉnh Bạch Kim | cauldron | Magic |
| `ancient-metal-box` | Hộp Cổ Kim Khí | box | Common |
| `silver-star-fan` | Quạt Bạch Tinh | fan | Common |

**Ví dụ đầy đủ (`bronze-bell`)**:
```
/imagine prompt: a single ancient bronze ritual bell, forged metal with a sharp angular silhouette and cold metallic gleam, imperial gold (#D4AF37) edge light, plain dull finish, simple thin gray border frame, no glow, centered game item icon on dark ink background, moody pixel art game art, xianxia daoist alchemy aesthetic, talismanic cinnabar runes and bagua trigram motifs, limited six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple, hand-crafted sprite craftsmanship in the spirit of Eastward and Sea of Stars, atmospheric serious mystical tone, crisp hard pixel edges --style raw --v 6 --no anime, manga, ukiyo-e, western fantasy, generic asian temple stock photo, photorealistic, 3d render, glossy plastic, modern, text, ui, watermark, signature, blur --ar 1:1 --stylize 120
```

### 4.2 Mộc / wood (10)

| id | ten | type | rarity |
|---|---|---|---|
| `bodhi-branch` | Cành Bồ Đề | branch | Common |
| `lotus-leaf-lantern` | Đèn Lá Sen | lantern | Common |
| `longevity-talisman` | Bùa Trường Sinh | talisman | Magic |
| `azure-dragon-statue` | Tượng Thanh Long | statue | Magic |
| `azure-dragon-bead` | Châu Thanh Long | bead | Magic |
| `spirit-lotus-flower` | Hoa Sen Linh | flower | Common |
| `green-nectar-vase` | Bình Cam Lộ Xanh | vase | Magic |
| `ancient-betel-branch` | Cây Trầu Cổ | branch | Common |
| `jade-cauldron` | Đỉnh Lục Bảo | cauldron | Magic |
| `ancient-bamboo-fan` | Quạt Trúc Cổ | fan | Common |

### 4.3 Thuỷ / water (10)

| id | ten | type | rarity |
|---|---|---|---|
| `dark-nectar-vase` | Bình Cam Lộ Đen | vase | Magic |
| `water-dragon-bead` | Châu Thuỷ Long | bead | Magic |
| `ice-lantern` | Đèn Băng | lantern | Common |
| `black-tortoise-statue` | Tượng Hắc Quy | statue | Magic |
| `sea-dragon-talisman` | Bùa Hải Long | talisman | Rare |
| `frost-ice-inkstone` | Nghiên Mực Hàn Băng | inkstone | Common |
| `flowing-ice-sword` | Kiếm Lưu Băng | sword | Common |
| `black-jade-cauldron` | Đỉnh Hắc Bích | cauldron | Magic |
| `frost-qi-box` | Hộp Hàn Khí | box | Magic |
| `black-phoenix-fan` | Quạt Hắc Phụng | fan | Common |

### 4.4 Hoả / fire (10)

| id | ten | type | rarity |
|---|---|---|---|
| `red-lantern` | Đèn Lồng Đỏ | lantern | Common |
| `phoenix-spirit-talisman` | Bùa Phượng Linh | talisman | Magic |
| `vermilion-bird-statue` | Tượng Chu Tước | statue | Magic |
| `fire-phoenix-bead` | Châu Hoả Phượng | bead | Magic |
| `fire-dragon-sword` | Kiếm Hoả Long | sword | Common |
| `vermilion-cauldron` | Đỉnh Đỏ Son | cauldron | Magic |
| `fire-wind-fan` | Quạt Phong Hoả | fan | Common |
| `red-inkstone` | Nghiên Mực Đỏ | inkstone | Common |
| `fire-essence-box` | Hộp Hoả Tinh | box | Rare |
| `fire-bead-vase` | Bình Hoả Châu | vase | Magic |

### 4.5 Thổ / earth (10)

| id | ten | type | rarity |
|---|---|---|---|
| `ancient-stone-cauldron` | Đá Cổ | cauldron | Common |
| `yellow-qilin-statue` | Tượng Hoàng Lân | statue | Magic |
| `yellow-earth-bead` | Châu Hoàng Thổ | bead | Magic |
| `demon-ward-talisman` | Bùa Trấn Yêu | talisman | Magic |
| `ancient-earth-box` | Hộp Đất Cổ | box | Rare |
| `agarwood-cauldron` | Đỉnh Trầm Hương | cauldron | Magic |
| `yellow-sand-fan` | Quạt Hoàng Sa | fan | Common |
| `earth-wall-statue` | Tường Thổ | statue | Common |
| `yellow-inkstone` | Nghiên Mực Hoàng | inkstone | Common |
| `earth-lantern` | Đèn Đất | lantern | Common |

### 4.6 Vô Cực / void (10 base)

| id | ten | type | rarity |
|---|---|---|---|
| `wordless-talisman` | Bùa Vô Tự | talisman | Common |
| `faceless-statue` | Tượng Vô Diện | statue | Magic |
| `primordial-chaos-bead` | Châu Hỗn Nguyên | bead | Common |
| `void-box` | Hộp Vô Cực | box | Common |
| `spiritless-lantern` | Đèn Vô Linh | lantern | Common |
| `void-sword` | Kiếm Vô Cực | sword | Magic |
| `primordial-chaos-cauldron` | Đỉnh Hỗn Nguyên | cauldron | Rare |
| `secret-realm-inkstone` | Nghiên Mực Bí Cảnh | inkstone | Common |
| `formless-fan` | Quạt Vô Hình | fan | Magic |
| `chaos-elixir-vase` | Bình Hỗn Đan | vase | Magic |

> **Vô Diện / Vô Hình note**: với item "mất mặt / vô hình" thêm `partially translucent, fading edges` để diễn tả tính vô tướng.

---

## §5. La Hán set — 18 small statue (`tags: la-han|set`, all `type=statue`, `element=void`)

Bộ endgame `set-bonuses` Thập Bát La Hán. Tất cả là **tượng La Hán nhỏ** đồng bộ phong cách, mỗi cái 1 nguyên tố chủ + 1 ấn quyết đặc trưng. Subject chung:

```
/imagine prompt: a small carved arhat (luohan) buddhist saint statue figurine, [ELEMENT TOKEN của statue đó], serene weathered stone-and-bronze finish, distinct hand gesture mudra, [RARITY TREATMENT], part of an eighteen-statue matched set, centered game item icon on dark ink background, [STYLE SUFFIX] --ar 1:1 --stylize 120
```

| id | ten | rarity | nét đặc trưng gợi ý |
|---|---|---|---|
| `arhat-wood-soul` | Tượng La Hán Mộc Hồn | Rare | leaf crown, jade-green moss |
| `arhat-fire-tail` | Tượng La Hán Hoả Vĩ | Rare | flame-shaped halo behind head |
| `arhat-water-spirit` | Tượng La Hán Thuỷ Linh | Rare | water-droplet beads, blue sheen |
| `arhat-diamond` | Tượng La Hán Kim Cương | Rare | armored vajra fist, gold gleam |
| `arhat-earth-grain` | Tượng La Hán Thổ Cốc | Rare | holding grain bowl, earthen dust |
| `arhat-soul-grain` | Tượng La Hán Hồn Cốc | Rare | linked aura threads to others |
| `arhat-agarwood` | Tượng La Hán Trầm Hương | Rare | incense smoke curling up |
| `arhat-wind-rain` | Tượng La Hán Phong Vũ | Rare | wind-swept robe, rain streaks |
| `arhat-thunderbolt` | Tượng La Hán Lôi Đình | Rare | small lightning arc in palm, gold |
| `arhat-uncontested` | Tượng La Hán Vô Tranh | Legendary | calm closed eyes, faint orange aura |
| `arhat-indestructible` | Tượng La Hán Bất Hoại | Legendary | cracked but unbroken, glowing seams |
| `arhat-myriad-laws` | Tượng La Hán Vạn Pháp | Legendary | many tiny floating sigils |
| `arhat-primordial-chaos` | Tượng La Hán Hỗn Nguyên | Rare | shifting purple void mist |
| `arhat-nine-heavens` | Tượng La Hán Cửu Tiêu | Rare | nine tiny stars orbiting |
| `arhat-yama` | Tượng La Hán Diêm Vương | Rare | underworld judge crown, stern |
| `arhat-heavenly-lamp` | Tượng La Hán Thiên Đăng | Rare | holding a glowing lamp, light radius |
| `arhat-bodhi` | Tượng La Hán Bồ Đề | Legendary | bodhi tree halo, accumulating glow |
| `arhat-shramana` | Tượng La Hán Sa Môn | Legendary | wandering monk staff, worn robe |

> 18 tượng phải **đồng bộ tỉ lệ + phong cách** (matched set). Gen liền 1 batch, giữ seed gốc rồi đổi nét đặc trưng để consistency.

---

## §6. Lò Parts — 50 furnace components (`packages/data/equipment.csv`)

8 slot cấu hình Lò Luyện Đan (`CLAUDE.md` decision #8). Mỗi slot 1 subject riêng; rarity dùng cột `variant` (Phàm/Linh/Bảo/Thần/Cổ vật) map sang §2.

### Subject theo slot

| slot | SUBJECT |
|---|---|
| `crown` (Đỉnh) | `the ornate crown finial cap atop a daoist alchemy furnace, where spirit energy emerges` |
| `body` (Thân) | `the main rounded body vessel of a three-legged alchemy furnace, engraved with trigrams` |
| `base` (Đế) | `the footed pedestal base of an alchemy furnace, three sturdy legs` |
| `handleL` / `handleR` (Quai) | `a daoist talisman charm dangling from a furnace side-handle, brush-written paper seal with tassel` |
| `lid` (Nắp) | `the sealing lid of an alchemy furnace, engraved bagua trigrams and a knob` |
| `amulet` (Khắc Phù) | `a carved jade amulet pendant mounted on a furnace, glowing inscription` |
| `ringL` / `ringR` (Đồ Sương) | `an ornate metal ring band fitted around a furnace neck, etched motifs` |
| `belt` (Dây Phong Ấn) | `a binding sealing cord wrapping a furnace, talisman knots and paper seals` |

### Compose

```
/imagine prompt: [SLOT SUBJECT], [RARITY TREATMENT theo variant], centered game item icon on dark ink background, [STYLE SUFFIX] --ar 1:1 --stylize 120
```

### Batch table (50 parts)

| slot | id | ten | variant→rarity |
|---|---|---|---|
| crown | `crown-common` | Đỉnh Phàm | Phàm→Common |
| crown | `crown-magic-fire` | Đỉnh Linh Hoả | Linh→Magic (+`fire` token) |
| crown | `crown-rare-heaven` | Đỉnh Bảo Thiên | Bảo→Rare |
| crown | `crown-legendary-void` | Đỉnh Thần Vô Cực | Thần→Legendary (+`void` token) |
| crown | `crown-heaven-dragon` | Thiên Long Quan | Cổ→Unique (+dragon-crown motif) |
| body | `body-common` | Thân Phàm | Phàm→Common |
| body | `body-magic-wood` | Thân Linh Mộc | Linh→Magic (+`wood` token) |
| body | `body-rare-furnace` | Thân Bảo Đan Lư | Bảo→Rare |
| body | `body-legendary-nine-turn` | Thân Thần Cửu Chuyển | Thần→Legendary |
| body | `body-cosmos-furnace` | Càn Khôn Đỉnh Lư | Cổ→Unique (+shifting layout motif) |
| base | `base-common` | Đế Phàm | Phàm→Common |
| base | `base-magic-rescue` | Đế Linh Cứu | Linh→Magic |
| base | `base-rare-return` | Đế Bảo Hồi Tâm | Bảo→Rare |
| base | `base-legendary-thousand-mile` | Đế Thần Thiên Lý | Thần→Legendary |
| base | `base-ancestral-indestructible` | Tổ Đan Bất Hoại | Cổ→Unique |
| handleL | `handle-left-seal-swift` | Quai Phong Ấn Tốc (Trái) | Phàm→Common |
| handleL | `handle-left-revive-charm` | Quai Hồi Sinh Phù (Trái) | Linh→Magic |
| handleL | `handle-left-pure-heart-charm` | Quai Tịnh Tâm Phù (Trái) | Bảo→Rare |
| handleL | `handle-left-thunderbolt-charm` | Quai Lôi Đình Phù (Trái) | Thần→Legendary (+lightning) |
| handleL | `handle-left-wuxing-array` | Ngũ Hành Trận (Trái) | Cổ→Unique (+five-element ring) |
| handleR | `handle-right-seal-swift` | Quai Phong Ấn Tốc (Phải) | Phàm→Common |
| handleR | `handle-right-revive-charm` | Quai Hồi Sinh Phù (Phải) | Linh→Magic |
| handleR | `handle-right-pure-heart-charm` | Quai Tịnh Tâm Phù (Phải) | Bảo→Rare |
| handleR | `handle-right-thunderbolt-charm` | Quai Lôi Đình Phù (Phải) | Thần→Legendary (+lightning) |
| handleR | `handle-right-wuxing-array` | Ngũ Hành Trận (Phải) | Cổ→Unique (+five-element ring) |
| lid | `lid-common` | Nắp Phàm | Phàm→Common |
| lid | `lid-magic-frenzy` | Nắp Linh Cuồng | Linh→Magic |
| lid | `lid-rare-heaven-secret` | Nắp Bảo Thiên Cơ | Bảo→Rare |
| lid | `lid-legendary-great-elixir` | Nắp Thần Đại Đan Bí | Thần→Legendary |
| lid | `lid-heaven-secret-record` | Thiên Cơ Bí Lục | Cổ→Unique |
| amulet | `amulet-common` | Khắc Phù Phàm | Phàm→Common |
| amulet | `amulet-magic-essence` | Khắc Phù Linh Tinh | Linh→Magic |
| amulet | `amulet-rare-great` | Khắc Phù Bảo Đại | Bảo→Rare |
| amulet | `amulet-legendary-heaven-fate` | Khắc Phù Thần Thiên Mệnh | Thần→Legendary |
| amulet | `amulet-patriarch` | Khắc Phù Tổ Sư | Cổ→Unique |
| ringL | `ring-left-reroll-thrift` | Đồ Sương Reroll Tiết Kiệm (Trái) | Phàm→Common |
| ringL | `ring-left-rare-drop` | Đồ Sương Loại Đan Hiếm (Trái) | Linh→Magic |
| ringL | `ring-left-corruption-counter` | Đồ Sương Tâm Ma Khắc (Trái) | Bảo→Rare |
| ringL | `ring-left-seal-safety` | Đồ Sương Phong Ấn An Toàn (Trái) | Thần→Legendary |
| ringL | `ring-left-spirit-record` | Linh Thủ Bảo Ký (Trái) | Cổ→Unique |
| ringR | `ring-right-reroll-thrift` | Đồ Sương Reroll Tiết Kiệm (Phải) | Phàm→Common |
| ringR | `ring-right-rare-drop` | Đồ Sương Loại Đan Hiếm (Phải) | Linh→Magic |
| ringR | `ring-right-corruption-counter` | Đồ Sương Tâm Ma Khắc (Phải) | Bảo→Rare |
| ringR | `ring-right-seal-safety` | Đồ Sương Phong Ấn An Toàn (Phải) | Thần→Legendary |
| ringR | `ring-right-spirit-record` | Linh Thủ Bảo Ký (Phải) | Cổ→Unique |
| belt | `belt-common` | Dây Phong Ấn Phàm | Phàm→Common |
| belt | `belt-magic-elixir-flow` | Dây Phong Ấn Linh Đan Lưu | Linh→Magic |
| belt | `belt-rare-essence` | Dây Phong Ấn Bảo Tinh Hoa | Bảo→Rare |
| belt | `belt-legendary-nine-turn` | Dây Phong Ấn Thần Cửu Chuyển | Thần→Legendary |
| belt | `belt-heaven-earth-treasure` | Thiên Địa Bảo Đai | Cổ→Unique |

> 5 part Cổ vật (`isUnique=true`) nên gen riêng kỹ như cổ vật — xem cách viết ở `03-co-vat-uniques.md`.

---

## §7. Rarity border — 5 frame sprite độc lập (`ART_DIRECTION.md:90-96`)

Khung viền dùng overlay lên mọi item icon. Gen riêng làm 9-slice frame.

```
/imagine prompt: an empty square game item icon border frame only, hollow center, [chi tiết theo rarity], ornamental corners, on transparent dark background, [STYLE SUFFIX] --ar 1:1 --stylize 100
```

| Frame | Chi tiết chèn |
|---|---|
| Phàm | `thin plain gray line border, minimal` |
| Linh | `clean glowing blue border, soft even glow` |
| Bảo | `ornate purple border with a subtle repeating talisman pattern and crystalline corners` |
| Thần | `glowing orange border with small floating ember particles at the corners` |
| Cổ | `prismatic rainbow shifting border with an intense particle storm and radiant corner sigils` |
