# 03 — Cổ Vật (30 Unique items)

> Cổ vật = **hand-painted unique art per item** (`ART_DIRECTION.md:247`). Khác linh khí (template hoá) — mỗi cổ vật prompt riêng, đậm lore. ID thật từ `packages/data/uniques.csv`. `--ar 1:1 --stylize 150`. Append [STYLE SUFFIX] từ `README.md`.

## Compose chung

```
/imagine prompt: a single [UNIQUE SUBJECT — đặc tả riêng], legendary artifact, intense prismatic rainbow particle storm and shifting iridescent aura, centered hero game item icon on dark ink background, [STYLE SUFFIX] --ar 1:1 --stylize 150
```

Rarity treatment cổ vật **luôn là** `intense prismatic rainbow particle storm` (`ART_DIRECTION.md:96`). Element token (§1 file 02) chèn thêm nếu cổ vật có element ≠ void.

---

## §1. Build-defining (10)

| id | ten | element | SUBJECT đặc tả |
|---|---|---|---|
| `sun-wukong-staff` | Trượng Tôn Ngộ Không | void | `Sun Wukong's golden-banded ruyi cudgel staff, splitting into three glowing copies` |
| `bagua-mirror` | Gương Bát Quái | void | `an octagonal bagua-trigram bronze mirror, surface reflecting energy upward` |
| `lantern-spirit-path` | Linh Đường Đèn Lồng | void | `a dark spirit-path lantern emitting only a small halo of light, surrounded by shadow` |
| `thousand-mile-scythe` | Lưỡi Hái Thiên Lý | void | `a long-reaching soul-harvest reaper scythe with a curved spectral blade` |
| `landscape-map` | Bản Đồ Sơn Hà | void | `an unfurled ancient scroll map of mountains and rivers, edges expanding outward` |
| `cosmos-furnace` | Đan Lư Càn Khôn | void | `a vast heaven-and-earth alchemy cauldron containing a swirling miniature cosmos` |
| `black-white-mask` | Mặt Nạ Hắc Bạch | void | `a half-black half-white daoist opera mask, perfect yin-yang split` |
| `dew-inkstone` | Nghiên Mực Sương | void | `a misty dew-soaked inkstone trailing lingering wisps of dark ink` |
| `ziwei-talisman` | Bùa Tử Vi | void | `a purple ziwei-star astrology talisman with constellation lines, foresight aura` |
| `wind-thunder-fan` | Quạt Phong Lôi | void | `a wind-and-thunder folding fan crackling with redirecting gust and gold sparks` |

**Ví dụ đầy đủ (`sun-wukong-staff`)**:
```
/imagine prompt: a single Sun Wukong golden-banded ruyi cudgel staff splitting into three glowing copies, legendary artifact, intense prismatic rainbow particle storm and shifting iridescent aura, centered hero game item icon on dark ink background, moody pixel art game art, xianxia daoist alchemy aesthetic, talismanic cinnabar runes and bagua trigram motifs, limited six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple, hand-crafted sprite craftsmanship in the spirit of Eastward and Sea of Stars, atmospheric serious mystical tone, crisp hard pixel edges --style raw --v 6 --no anime, manga, ukiyo-e, western fantasy, generic asian temple stock photo, photorealistic, 3d render, glossy plastic, modern, text, ui, watermark, signature, blur --ar 1:1 --stylize 150
```

---

## §2. Sustain / defensive (10)

| id | ten | element | SUBJECT đặc tả |
|---|---|---|---|
| `amitabha-statue` | Tượng Phật A Di Đà | void | `a serene Amitabha Buddha statue with a gentle protective golden halo` |
| `great-bell` | Chuông Đại Hồng | metal | `a giant resonant temple bronze bell, sound rings radiating outward, gold gleam` |
| `nine-grade-kasaya` | Áo Cà Sa Cửu Phẩm | void | `a nine-grade monk's patchwork kasaya robe folded, faint expanding aura` |
| `heaven-decree-furnace` | Đan Lò Thiên Lệnh | void | `a heaven-decree alchemy furnace stamped with a glowing protective imperial seal` |
| `pure-heart-bead` | Tịnh Tâm Linh Châu | void | `a crystal-clear pure-heart spirit bead radiating cleansing light` |
| `ancient-thunder-charm` | Lôi Phù Cổ | metal | `an ancient thunder talisman charm catching a captured lightning bolt, gold sparks` |
| `jade-spirit-flower` | Linh Hoa Bích Bảo | wood | `a luminous jade treasure spirit flower in full bloom, jade-green petals` |
| `mystic-heaven-bell` | Huyền Thiên Cổ Chung | metal | `a mystic-heaven ancient bell emitting concentric accumulating sound rings` |
| `ancestral-necklace` | Vòng Cổ Tổ Phụ | void | `an ancestral heirloom jade-and-gold necklace humming with inherited power` |
| `galaxy-lantern` | Đèn Tinh Thiên Hà | void | `a galaxy lantern with a swirling spiral cosmos and future stars glowing inside` |

---

## §3. Chaos / risk (10)

Tone tối, nguy hiểm hơn — đẩy `--chaos 20` lúc explore để bắt cảm giác bất ổn.

| id | ten | element | SUBJECT đặc tả |
|---|---|---|---|
| `doomed-short-life-charm` | Mạt Niên Đoản Mệnh | void | `a doom-fated short-life talisman with an ominous cracked red glow, fragile` |
| `primordial-jade-bead` | Hỗn Nguyên Ngọc Châu | void | `a primordial-chaos jade bead with randomly shifting elemental colors swirling inside` |
| `white-bone-decree` | Bạch Cốt Lệnh | void | `a white-bone command tablet etched with necromantic runes, faint soul wisps` |
| `death-soul-box` | Tử Hồn Linh Bao | void | `a death-soul spirit pouch leaking reclaimed essence light` |
| `nine-abyss-black-elixir` | Cửu U Hắc Đan | water | `a nine-abyss black elixir box radiating hardcore abyssal blue-black power` |
| `black-white-impermanence-charm` | Bùa Hắc Bạch Vô Thường | void | `a black-and-white impermanence talisman, a gambler's flipping yin-yang coin motif` |
| `ancient-dragon-soul-jade` | Cổ Long Hồn Ngọc | void | `an ancient dragon-soul jade bead with a tiny coiling spectral dragon, homing aura` |
| `phoenix-tail-cauldron` | Đỉnh Phượng Linh Vĩ | fire | `a phoenix-tail spirit cauldron crowned with a blazing cinnabar plume of fire` |
| `corruption-mask` | Tâm Ma Mặt Nạ | void | `a sinister heart-demon mask dripping twilight-purple corruption, high-risk allure` |
| `primordial-black-elixir` | Hỗn Nguyên Hắc Đan | void | `a primordial black elixir box, unstable cracking with raw promotion energy` |

---

## Lưu ý

- **Đậm lore**: đối chiếu `packages/data/lore/item-flavor.json` để bắt đúng tích truyện trước khi gen (vd Trượng Tôn Ngộ Không, Bồ Đề...).
- Cổ vật là **hero art** — cho phép detail cao hơn linh khí thường, nhưng vẫn giữ pixel discipline + palette.
- 5 Lò part `isUnique=true` (Thiên Long Quan, Càn Khôn Đỉnh Lư, Tổ Đan Bất Hoại, Thiên Cơ Bí Lục, Khắc Phù Tổ Sư, Ngũ Hành Trận, Linh Thủ Bảo Ký, Thiên Địa Bảo Đai) dùng cùng compose này nhưng subject lấy từ slot-subject ở `02-linh-khi-items.md §6`.
