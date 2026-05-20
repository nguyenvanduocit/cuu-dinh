---
id: standard
ten: Tiêu Chuẩn
variant: standard
tierRange: 1-16
vanCount: 5-8
bossType: anomaly
modifierSlots: 0-3
geometry: "800×1200"
---

# Tiêu Chuẩn (`standard`)

Pháp trận sơ khai mà đạo sĩ luyện đan nào cũng phải qua. Đất bằng, trời quang, linh lực rơi đều — không có cơ chế nào ám hại. Đây là nơi tu chân học cách đặt linh khí, đọc dòng chảy ngũ hành, và làm quen với hơi thở của lò. Khi đan thành ở Tiêu Chuẩn, đạo sĩ mới đủ tâm cảnh để bước vào những bí cảnh hiểm hơn.

## Special Rules

Pháp Trận trung tính, không có cơ chế đặc biệt. Cấu trúc PoE-map cơ bản: 5-8 ván + 1 boss Dị Tượng cuối. 0-3 modifier slot tuỳ atlas keystone. Drop pool theo region atlas. Đây là baseline để đo cảm giác mọi pháp trận khác — bất kỳ variant nào lệch khỏi đây phải có lý do design rõ ràng. Anchor đặt theo lưới đối xứng 3-3-2-2: dạy người chơi đọc hình học board trước khi gặp variant phức tạp.

## Geometry

**Geometry** (800×1200, 10 anchor — lưới đối xứng 3-3-2-2):
```
+--------------------+
|                    |
|     ⊙    ⊙    ⊙    |   y≈280  (top tier)
|                    |
|                    |
|   ⊙      ⊙      ⊙  |   y≈500  (mid tier)
|                    |
|                    |
|     ⊙        ⊙     |   y≈720  (lower)
|                    |
|       ⊙  ⊙         |   y≈900  (catch zone)
|                    |
|       [linh đan]   |   y≈1000
+--------------------+
```
> ⊙ = anchor (all elementBias=null — no element lock)

