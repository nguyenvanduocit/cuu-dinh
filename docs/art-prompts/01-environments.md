# 01 — Environments & Backgrounds

> Nguồn: `ART_DIRECTION.md:178-188` (region biome) + `:158-174` (boss visual). Mỗi background dùng `--ar 16:9 --stylize 250` cho concept rộng. Append [STYLE SUFFIX] từ `README.md` vào cuối mọi prompt.

Background trong game là **painted 1920×1080** (mix raster + pixel art) — đây là layer được phép vẽ tay/painted nhiều nhất, nên MJ v6 hợp nhất ở đây.

---

## 1. Base Camp — Khai Lư Trấn

Bối cảnh hub chính (`UI_WIREFRAMES.md:79`). Tone ấm, tĩnh, an toàn — đối lập với pháp trận căng thẳng.

```
/imagine prompt: Khai Lư Trấn, a quiet daoist cultivation village courtyard at dusk, low stone temple buildings with upturned tiled roofs, hanging red paper lanterns casting warm orange-red glow, a central stone alchemy altar, distant misty mountains, a few wisps of incense smoke, calm and welcoming, painterly pixel art environment, warm ivory and cinnabar palette with imperial gold lantern light, [STYLE SUFFIX] --ar 16:9 --stylize 250
```

Biến thể đêm khuya (cho cinematic): thêm `deep night, moonlit, fewer lanterns lit, lonely contemplative mood`.

---

## 2. Mộc region — rừng trúc linh

```
/imagine prompt: a misty bamboo spirit forest, towering green bamboo stalks fading into fog, soft shafts of jade-green (#2E5E4E) light, floating leaf motes, mossy daoist shrine half-hidden among the stalks, life and qi everywhere, organic flowing composition, painterly pixel art environment, jade green and ink black palette, [STYLE SUFFIX] --ar 16:9 --stylize 250
```

## 3. Hoả region — hoả sơn động

```
/imagine prompt: a volcanic cultivation cavern, glowing red rock and lava veins, rising smoke and floating embers, cracked obsidian floor, a half-buried ancient alchemy furnace radiating heat, dramatic upward firelight, cinnabar red (#C82127) and imperial gold (#D4AF37) glow against ink black shadow, painterly pixel art environment, [STYLE SUFFIX] --ar 16:9 --stylize 250
```

## 4. Thuỷ region — thuỷ động linh trì

```
/imagine prompt: a serene underwater spirit grotto, deep blue (#1E3A5F) water with descending light shafts, slow drifting bubbles and ripples, submerged jade pillars and a sunken daoist gate, cold tranquil mood, flowing aquatic composition, painterly pixel art environment, deep blue and ivory palette, [STYLE SUFFIX] --ar 16:9 --stylize 250
```

## 5. Kim region — kim khoáng sơn động

```
/imagine prompt: a cold mountain cave threaded with metallic ore veins, sharp angular rock formations, glints of gold and silver ore in grey stone, faint cold light, austere and metallic, hard-edged composition, painterly pixel art environment, cold grey with imperial gold (#D4AF37) metallic gleam, [STYLE SUFFIX] --ar 16:9 --stylize 250
```

## 6. Thổ region — thổ nhai cổ điện

```
/imagine prompt: a cliffside daoist temple carved into ochre earth, layered stone terraces, drifting dust in low golden light, weighty solid architecture, ancient and grounded, earthen brown (#8B5E34) and ivory palette, painterly pixel art environment, [STYLE SUFFIX] --ar 16:9 --stylize 250
```

## 7. Vô Cực center — hư không tinh hải

Trung tâm Atlas (`UI_WIREFRAMES.md:447`). Không gian siêu thực, cosmic.

```
/imagine prompt: floating in a cosmic void, scattered stars and nebula dust, fragments of broken daoist platforms drifting in space, a distant glowing alchemy elixir like a small sun, infinite depth, surreal and meditative, twilight purple (#4A1942) and ink black with golden star-flecks, painterly pixel art environment, [STYLE SUFFIX] --ar 16:9 --stylize 350
```

---

## 8. Boss arenas

Cite trực tiếp visual language `ART_DIRECTION.md:158-174` — không paraphrase mất chất.

### 8.1 Dị Tượng arena (Anomaly, T1-T8)

> Asymmetric, glitchy, hỗn loạn; colors shift unpredictably; made of multiple element fragments.

```
/imagine prompt: a chaotic anomaly battle arena, asymmetric glitching architecture, unstable terrain made of mismatched elemental fragments — bits of fire, water, wood, metal and earth fused wrongly together, colors shifting unpredictably, reality distortion, unsettling broken composition, full six-color palette clashing, painterly pixel art environment, [STYLE SUFFIX] --ar 16:9 --stylize 300 --chaos 25
```

### 8.2 Tâm Ma arena (Heart Demon, T6-T13)

> Dark tím triều base, smoky aura, human-shaped silhouettes with horrific masks, whispers.

```
/imagine prompt: a heart-demon nightmare arena, deep twilight purple (#4A1942) darkness, thick smoky aura, faint human-shaped shadow silhouettes wearing horrific opera masks lurking at the edges, oppressive whispering dread, claustrophobic composition, twilight purple and ink black palette with sickly accents, painterly pixel art environment, [STYLE SUFFIX] --ar 16:9 --stylize 300
```

### 8.3 Thiên Kiếp arena (Heavenly Tribulation, T14-T16 + endgame)

> No body — only lightning; sky darkens to almost black; golden lightning bolts; thunder shake.

```
/imagine prompt: a heavenly tribulation arena, sky darkened to near-black storm clouds, a lone exposed mountain altar, jagged golden (#D4AF37) lightning bolts striking down, electric crackle in the air, awe and divine threat, no monster — only the storm itself as the enemy, ink black sky with blinding imperial gold lightning, painterly pixel art environment, [STYLE SUFFIX] --ar 16:9 --stylize 300
```

---

## Tip explore

- Lần đầu: `--chaos 25` để xem 4 hướng khác nhau, chọn 1 rồi rerun với `--chaos 0`.
- Muốn region khác giờ trong ngày: thêm `dawn / high noon / blue hour / deep night`.
- Cần biến thể cho từng tier (T1 vs T16 cùng biome): tăng `decay, corruption, intensity, denser fog, more cracks` theo tier.
