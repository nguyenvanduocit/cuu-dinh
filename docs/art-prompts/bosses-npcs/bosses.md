> Nguồn data: `ART_DIRECTION.md:158-174` (boss visual language). Append [STYLE SUFFIX] từ `../_style/style-suffix.md`.

# Bosses (3 types) — `128×128` sprite, `--ar 1:1 --stylize 200`

3 boss type theo decision #20: Dị Tượng (T1-T8), Tâm Ma (T6-T13), Thiên Kiếp (T14-T16). Mỗi loại 3 anim state (idle / attack / death) — gen idle trước làm chuẩn.

---

## 1.1 Dị Tượng — Anomaly (T1-T8)

> `ART_DIRECTION.md:159-162`: asymmetric, glitchy, hỗn loạn; colors shift unpredictably; made of multiple element fragments.

```
/imagine prompt: an anomaly boss creature, an asymmetric glitching entity assembled from mismatched elemental fragments — shards of fire, water, wood, metal and earth fused together wrongly, colors shifting unpredictably, unstable distorted silhouette, menacing and chaotic, full clashing six-color palette, painterly pixel art game boss sprite, moody pixel art game art, xianxia daoist alchemy aesthetic, talismanic cinnabar runes and bagua trigram motifs, limited six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple, hand-crafted sprite craftsmanship in the spirit of Eastward and Sea of Stars, atmospheric serious mystical tone, crisp hard pixel edges --style raw --v 6 --no anime, manga, ukiyo-e, western fantasy, generic asian temple stock photo, photorealistic, 3d render, glossy plastic, modern, text, ui, watermark, signature, blur --ar 1:1 --stylize 200 --chaos 25
```

## 1.2 Tâm Ma — Heart Demon (T6-T13)

> `ART_DIRECTION.md:164-168`: dark tím triều base, smoky aura, human-shaped silhouette with horrific mask.

```
/imagine prompt: a heart-demon boss, a tall human-shaped shadow silhouette wrapped in thick smoky aura, wearing a horrific cracked daoist opera mask, hollow glowing eyes, oppressive and sinister, deep twilight purple (#4A1942) and ink black with sickly accents, painterly pixel art game boss sprite, [STYLE SUFFIX] --ar 1:1 --stylize 200
```

## 1.3 Thiên Kiếp — Heavenly Tribulation (T14-T16 + endgame)

> `ART_DIRECTION.md:170-174`: no body — only lightning; sky near-black; golden lightning bolts.

```
/imagine prompt: a heavenly tribulation boss with no physical body, a colossal column of jagged golden (#D4AF37) lightning descending from near-black storm clouds, swirling electric vortex, divine and overwhelming, awe-inspiring threat, ink black sky with blinding imperial gold electricity, painterly pixel art game boss, [STYLE SUFFIX] --ar 1:1 --stylize 200
```

---

## Lưu ý

- Boss/NPC cần **3 anim state** — gen idle làm canonical rồi dùng làm reference (img2img/IP-adapter) cho attack/death để giữ consistency.
