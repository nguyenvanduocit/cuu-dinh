# Neutral — bridge + universal keystone (Tier 3)

> Tier 3 cho `passive-tree/neutral/`. Cascade từ root → Tier 1 → `passive-tree/CLAUDE.md` (Tier 2).
> **Note**: 15 node — bridge nodes (cross-element pivots) + universal keystones (rule rewrite không tied to 1 element).

---

## Sub-type trong tu chân lore

Neutral = **node không gắn 1 ngũ hành cụ thể**. Hai loại:

1. **Bridge nodes** (`<elementA>-<elementB>-bridge-N`) — cho phép player **cross-element pivot** giữa các cluster ngũ hành. Examples: `water-wood-bridge-1` (Thuỷ → Mộc, tương sinh natural), `fire-earth-bridge-1` (Hoả → Thổ, tương sinh natural).
2. **Universal keystone** (`keystone-X`) — rule rewrite global, không tied to 1 element. Examples: `keystone-invincible` (giả thuyết — generic rule rewrite).

Trong tu chân lore = ngộ đạo về **hỗn nguyên** (chaos / hỗn hợp) — đạo sĩ vượt ra khỏi 1 ngũ hành, ngộ ra mối liên hệ giữa các hành. Vô Cực path là một dạng neutral đầy đủ.

---

## Game role specific

- **Bridge nodes**: low power individually, nhưng critical cho build path cho phép pivot late-game.
- **Universal keystone**: power cao game-changing nhưng KHÔNG element-locked.
- **Position trên graph**: bridge ở **biên giới 2 cluster element**; keystone ở **central / outer rim** tuỳ theme.

---

## Design constraints

- Bridge node MUST có **2 element identity** trong cluster name (`<A>-<B>-bridge-N`).
- Bridge effect MUST nhỏ + utility, KHÔNG nhân power. Vai trò = **connector**, không **main path**.
- Universal keystone MUST **rewrite rule** không gắn 1 element (vd "loại bỏ crit, nhưng nhân intensity 2x"). Element-specific keystone = belongs trong element folder.
- Neutral KHÔNG nên chiếm > 10% tổng node count — purpose là connector.

---

## Lore motifs

- Đạo lý: hỗn nguyên, vượt ngũ hành, ngộ đạo cross-element.
- Texture: vô tướng, không màu rõ, balance, hỗn hợp.
- Voice: contemplative, philosophical, transcendent.

---

## Cross-references

- **Passive tree element subs (`../water/`, `../fire/`, `../wood/`, `../metal/`, `../earth/`)**: bridge nodes link cluster bordering nhau.
- **Ascendancies**: Vô Cực Đạo Phái (nếu có) heavy lean trên neutral nodes.
- **Combat math**: bridge effect áp ngoài element-specific buffer.

---

## Anti-patterns

- ❌ Neutral chiếm build path lớn — purpose là connector, không main path.
- ❌ Bridge node power-creep (cho power cao individually) → bridges đáng lý weak utility.
- ❌ Universal keystone tied to 1 element (sai folder placement, move sang element folder).
- ❌ Bridge name sai pattern (không có `<A>-<B>-bridge`).
- ❌ Element drift trong cluster (fire node trong neutral folder).
- ❌ Bridge giữa 2 element không có tương sinh / tương khắc rationale (random pair).
