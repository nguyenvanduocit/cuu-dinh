> Nguồn data: `docs/data/lore.md` (NPC IDs). Append [STYLE SUFFIX] từ `../_style/style-suffix.md`.

# NPCs (14) — `--ar 1:1` portrait + `--ar 9:16` full-body

Mỗi NPC 2 asset: **portrait** (chân dung dialogue) + **full sprite** (đứng trong hub). Compose:

```
/imagine prompt: a character [portrait headshot | full-body standing sprite] of [NPC SUBJECT], daoist xianxia cultivator, expressive, painterly pixel art character art, [palette gợi ý], moody pixel art game art, xianxia daoist alchemy aesthetic, talismanic cinnabar runes and bagua trigram motifs, limited six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple, hand-crafted sprite craftsmanship in the spirit of Eastward and Sea of Stars, atmospheric serious mystical tone, crisp hard pixel edges --style raw --v 6 --no anime, manga, ukiyo-e, western fantasy, generic asian temple stock photo, photorealistic, 3d render, glossy plastic, modern, text, ui, watermark, signature, blur --ar [1:1 | 9:16] --stylize 180
```

| id | ten | SUBJECT đặc tả | palette gợi ý |
|---|---|---|---|
| `master` | Sư Phụ | `a wise elderly daoist master with long white beard and robe, calm authority` | ivory + imperial gold |
| `old-fox` | Lão Hồ Ly | `a sly fox-spirit merchant in a daoist gambler's robe, mischievous grin, fox ears` | cinnabar + gold |
| `nameless-cultivator` | Đạo Sĩ Vô Danh | `a plain hooded wandering cultivator, face half-shadowed, mysterious` | ink black + ivory |
| `immortal-ancestor` | Tổ Sư Bất Tử | `a translucent immortal ancestor spirit, ethereal glowing elder, floating` | twilight purple + gold |
| `black-white-alchemist` | Đan Sư Hắc Bạch | `a paired duo of silent masked alchemists, one in black robe one in white, mirror twins` | ink black + ivory |
| `omen-crone` | Lão Bà Thiên Cơ | `a hunched old fortune-teller crone with divination sticks, knowing smile` | cinnabar + purple |
| `furnace-spirit` | Lò Thần | `a small living furnace-spirit elemental, a sentient bronze cauldron with glowing eyes` | imperial gold + cinnabar |
| `map-sorcerer` | Pháp Sư Bản Đồ | `a cartographer-sorcerer holding a glowing landscape scroll, scholarly` | jade green + gold |
| `wuxing-ancestor-metal` | Kim Tổ Bạch Sương | `a metal-element ancestor sage, armored in pale frost-silver, sharp angular` | imperial gold + ivory |
| `wuxing-ancestor-wood` | Mộc Tổ Lục Trí | `a wood-element ancestor sage, robed in living leaves and vines` | jade green |
| `wuxing-ancestor-water` | Thuỷ Tổ Hắc Lưu | `a water-element ancestor sage, flowing dark-blue robes like a river` | deep blue + ink black |
| `wuxing-ancestor-fire` | Hoả Tổ Đỏ Liệt | `a fire-element ancestor sage, fierce, robes wreathed in cinnabar flame` | cinnabar red + gold |
| `wuxing-ancestor-earth` | Thổ Tổ Hoàng Trầm | `an earth-element ancestor sage, heavy stoic, ochre-and-stone robes` | earthen brown + gold |
| `primordial-corruption-king` | Hỗn Nguyên Tâm Ma Vương | `the primordial heart-demon king, a towering corrupted void emperor, final-boss presence` | twilight purple + ink black |

> 5 Wuxing ancestor (`wuxing-ancestor-*`) là **bộ đồng phong cách** elder sage, chỉ khác element costume — gen 1 batch giữ seed.
> `primordial-corruption-king` là cuối-game boss-NPC: gen ở `--ar 9:16 --stylize 250`, scale lớn, áp lực thị giác cao nhất.
