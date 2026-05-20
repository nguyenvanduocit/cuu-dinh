#!/usr/bin/env bun
/**
 * Tinh Điểm passive tree generator.
 *
 * Locked budget (150 total):
 *  - 5 starting   (1 per element)
 *  - 110 small    (20/cluster × 5 = 100, + 5 hub, + 5 bridges)
 *  - 25 notable   (5/cluster × 5 — 4 regular + 1 ascendancy junction)
 *  - 10 keystone  (5 element-aligned + 4 hub + 1 bridge)
 *
 * Per element cluster: 1 start + 20 small + 5 notable + 1 keystone = 27 nodes
 * 5 clusters × 27 = 135
 * Hub: 5 small + 4 keystones = 9
 * Bridges: 5 small + 1 keystone (Hồn Linh on Thuỷ-Mộc) = 6
 * Total: 135 + 9 + 6 = 150 ✓
 *
 * Output: /Users/firegroup/projects/lu-dan-game/packages/data/passive-tree.json
 */

import { PassiveTree, type PassiveNode } from '../../packages/shared/src/schemas/passive-node.ts'

type Element = 'kim' | 'moc' | 'thuy' | 'hoa' | 'tho'

// -----------------------------------------------------------------------------
// 1. Cluster geometry — polar layout, 5 anchors at 72° intervals
// -----------------------------------------------------------------------------

const CLUSTER_RADIUS = 220 // distance from origin to cluster centre
const START_RADIUS = 100   // starting node distance from origin
const HUB_RADIUS = 40      // hub nodes near origin
const BRIDGE_RADIUS = 200  // bridge nodes between adjacent clusters

// Angles (radians) — Kim at top-right, Thuỷ at left, Mộc at top-left, Hoả at bottom-right, Thổ at bottom.
// Layout intent (counter-clockwise from "north-east" at -36°):
//   Kim   -> -36°  (top right)
//   Mộc   -> 108° absolute? — instead use tương sinh cycle clockwise so adjacent clusters share bridge.
// Tương sinh: Kim → Thuỷ → Mộc → Hoả → Thổ → Kim
// Place around circle in tương-sinh order so each adjacent pair is a sinh bridge.
const ANGLE: Record<Element, number> = {
  kim: -Math.PI / 2,                    // top (12 o'clock)
  thuy: -Math.PI / 2 + (2 * Math.PI / 5),     // top-right (after 72°)
  moc: -Math.PI / 2 + (4 * Math.PI / 5),      // bottom-right
  hoa: -Math.PI / 2 + (6 * Math.PI / 5),      // bottom-left
  tho: -Math.PI / 2 + (8 * Math.PI / 5),      // top-left
}

const ELEMENTS: Element[] = ['kim', 'moc', 'thuy', 'hoa', 'tho']

// Tương sinh adjacency (forms the bridge ring)
const BRIDGES: Array<[Element, Element]> = [
  ['kim', 'thuy'],
  ['thuy', 'moc'],
  ['moc', 'hoa'],
  ['hoa', 'tho'],
  ['tho', 'kim'],
]

function polar(r: number, angle: number): { x: number; y: number } {
  return { x: Math.round(r * Math.cos(angle) * 100) / 100, y: Math.round(r * Math.sin(angle) * 100) / 100 }
}

function midAngle(a: number, b: number): number {
  // Average two angles on the unit circle
  const x = Math.cos(a) + Math.cos(b)
  const y = Math.sin(a) + Math.sin(b)
  return Math.atan2(y, x)
}

// -----------------------------------------------------------------------------
// 2. Per-element personality (small-node stat banks)
// -----------------------------------------------------------------------------

const ELEMENT_NAME: Record<Element, string> = {
  kim: 'Kim', moc: 'Mộc', thuy: 'Thuỷ', hoa: 'Hoả', tho: 'Thổ',
}

// 20 small-node effects per cluster. Each must be specific (intensity, crit, stability, charge, etc.).
const SMALL_EFFECTS: Record<Element, Array<{ slug: string; ten: string; effect: string }>> = {
  kim: [
    { slug: 'sat-1',     ten: 'Sắc Khí I',         effect: '+5% intensity Kim lực' },
    { slug: 'sat-2',     ten: 'Sắc Khí II',        effect: '+5% intensity Kim lực' },
    { slug: 'sat-3',     ten: 'Sắc Khí III',       effect: '+8% intensity Kim lực' },
    { slug: 'kim-bich',  ten: 'Kim Bích',          effect: '+4% crit chance trên Kim linh lực' },
    { slug: 'kim-bich-2',ten: 'Kim Bích Hậu',      effect: '+4% crit chance trên Kim linh lực' },
    { slug: 'kim-bich-3',ten: 'Kim Bích Thâm',     effect: '+6% crit chance trên Kim linh lực' },
    { slug: 'kim-pierce-1', ten: 'Kim Châm I',     effect: '+10% xác suất xuyên qua linh khí Mộc' },
    { slug: 'kim-pierce-2', ten: 'Kim Châm II',    effect: '+10% xác suất xuyên qua linh khí Mộc' },
    { slug: 'kim-crit-dmg-1', ten: 'Tử Sát I',     effect: '+15% crit damage Kim' },
    { slug: 'kim-crit-dmg-2', ten: 'Tử Sát II',    effect: '+15% crit damage Kim' },
    { slug: 'kim-velocity-1', ten: 'Phong Tốc I',  effect: '+6% velocity Kim linh lực' },
    { slug: 'kim-velocity-2', ten: 'Phong Tốc II', effect: '+6% velocity Kim linh lực' },
    { slug: 'kim-charge-1', ten: 'Tích Sát I',     effect: '+8% charge gain khi qua linh khí Kim' },
    { slug: 'kim-charge-2', ten: 'Tích Sát II',    effect: '+8% charge gain khi qua linh khí Kim' },
    { slug: 'kim-anchor-1', ten: 'Định Kim I',     effect: '+5% intensity cho linh khí Kim trong 100px' },
    { slug: 'kim-anchor-2', ten: 'Định Kim II',    effect: '+5% intensity cho linh khí Kim trong 100px' },
    { slug: 'kim-burst-1', ten: 'Bộc Liệt I',      effect: 'Crit Kim hit gây thêm +10% intensity ván sau' },
    { slug: 'kim-burst-2', ten: 'Bộc Liệt II',     effect: 'Crit Kim hit gây thêm +10% intensity ván sau' },
    { slug: 'kim-affix-1', ten: 'Khắc Phù Kim I',  effect: '+1 tier hiệu lực affix Kim trên Lò' },
    { slug: 'kim-purity',  ten: 'Thuần Kim',       effect: '+12% intensity nếu toàn bộ linh khí trong 150px là Kim' },
  ],
  moc: [
    { slug: 'sinh-1', ten: 'Sinh Khí I',          effect: '+5% stability max linh đan' },
    { slug: 'sinh-2', ten: 'Sinh Khí II',         effect: '+5% stability max linh đan' },
    { slug: 'sinh-3', ten: 'Sinh Khí III',        effect: '+8% stability max linh đan' },
    { slug: 'moc-heal-1', ten: 'Hồi Mộc I',       effect: 'Mộc tương sinh hit heal +0.5% stability thêm' },
    { slug: 'moc-heal-2', ten: 'Hồi Mộc II',      effect: 'Mộc tương sinh hit heal +0.5% stability thêm' },
    { slug: 'moc-heal-3', ten: 'Hồi Mộc III',     effect: 'Mộc tương sinh hit heal +1% stability thêm' },
    { slug: 'moc-regen-1', ten: 'Mạch Sinh I',    effect: 'Stability tự hồi +0.1%/giây' },
    { slug: 'moc-regen-2', ten: 'Mạch Sinh II',   effect: 'Stability tự hồi +0.1%/giây' },
    { slug: 'moc-quality-1', ten: 'Linh Phẩm I',  effect: '+5% quality gain trên Mộc đan' },
    { slug: 'moc-quality-2', ten: 'Linh Phẩm II', effect: '+5% quality gain trên Mộc đan' },
    { slug: 'moc-slow-1', ten: 'Trầm Khí I',      effect: 'Linh lực Mộc bị slow 5%, +6% intensity bù lại' },
    { slug: 'moc-slow-2', ten: 'Trầm Khí II',     effect: 'Linh lực Mộc bị slow 5%, +6% intensity bù lại' },
    { slug: 'moc-anchor-1', ten: 'Định Mộc I',    effect: '+5% intensity cho linh khí Mộc trong 100px' },
    { slug: 'moc-anchor-2', ten: 'Định Mộc II',   effect: '+5% intensity cho linh khí Mộc trong 100px' },
    { slug: 'moc-immune-1', ten: 'Vô Nhiễm I',    effect: '-10% xác suất linh khí Mộc bị nhiễm khí' },
    { slug: 'moc-immune-2', ten: 'Vô Nhiễm II',   effect: '-10% xác suất linh khí Mộc bị nhiễm khí' },
    { slug: 'moc-affix-1', ten: 'Khắc Phù Mộc I', effect: '+1 tier hiệu lực affix Mộc trên Lò' },
    { slug: 'moc-charge-1', ten: 'Tích Sinh I',   effect: '+8% charge gain khi qua linh khí Mộc' },
    { slug: 'moc-charge-2', ten: 'Tích Sinh II',  effect: '+8% charge gain khi qua linh khí Mộc' },
    { slug: 'moc-purity', ten: 'Thuần Mộc',       effect: '+12% stability max nếu toàn bộ linh khí trong 150px là Mộc' },
  ],
  thuy: [
    { slug: 'luu-1', ten: 'Lưu Thuỷ I',           effect: '+5% chain hop intensity Thuỷ' },
    { slug: 'luu-2', ten: 'Lưu Thuỷ II',          effect: '+5% chain hop intensity Thuỷ' },
    { slug: 'luu-3', ten: 'Lưu Thuỷ III',         effect: '+8% chain hop intensity Thuỷ' },
    { slug: 'thuy-hop-1', ten: 'Tăng Bậc I',      effect: '+1 max chain hop trên Thuỷ linh lực' },
    { slug: 'thuy-hop-2', ten: 'Tăng Bậc II',     effect: '+1 max chain hop trên Thuỷ linh lực' },
    { slug: 'thuy-slow-1', ten: 'Hàn Khí I',      effect: 'Linh lực Hoả qua đây bị slow 10%' },
    { slug: 'thuy-slow-2', ten: 'Hàn Khí II',     effect: 'Linh lực Hoả qua đây bị slow 10%' },
    { slug: 'thuy-dispel-1', ten: 'Tịnh Hoá I',   effect: '-5% nhiễm khí duration trên linh khí Thuỷ' },
    { slug: 'thuy-dispel-2', ten: 'Tịnh Hoá II',  effect: '-5% nhiễm khí duration trên linh khí Thuỷ' },
    { slug: 'thuy-bounce-1', ten: 'Phản Lưu I',   effect: '+8% elastic restitution Thuỷ linh lực' },
    { slug: 'thuy-bounce-2', ten: 'Phản Lưu II',  effect: '+8% elastic restitution Thuỷ linh lực' },
    { slug: 'thuy-anchor-1', ten: 'Định Thuỷ I',  effect: '+5% intensity cho linh khí Thuỷ trong 100px' },
    { slug: 'thuy-anchor-2', ten: 'Định Thuỷ II', effect: '+5% intensity cho linh khí Thuỷ trong 100px' },
    { slug: 'thuy-charge-1', ten: 'Tích Lưu I',   effect: '+8% charge gain khi qua linh khí Thuỷ' },
    { slug: 'thuy-charge-2', ten: 'Tích Lưu II',  effect: '+8% charge gain khi qua linh khí Thuỷ' },
    { slug: 'thuy-redirect-1', ten: 'Vòng Xoáy I',effect: '+10% xác suất Thuỷ linh lực đổi hướng tới linh khí gần nhất' },
    { slug: 'thuy-redirect-2', ten: 'Vòng Xoáy II',effect: '+10% xác suất Thuỷ linh lực đổi hướng tới linh khí gần nhất' },
    { slug: 'thuy-affix-1', ten: 'Khắc Phù Thuỷ I',effect: '+1 tier hiệu lực affix Thuỷ trên Lò' },
    { slug: 'thuy-spread-1', ten: 'Chia Dòng I',  effect: 'Chain hop hit lan tới linh khí trong 60px' },
    { slug: 'thuy-purity', ten: 'Thuần Thuỷ',     effect: '+1 max chain hop nếu toàn bộ linh khí trong 150px là Thuỷ' },
  ],
  hoa: [
    { slug: 'liet-1', ten: 'Liệt Hoả I',          effect: '+6% intensity Hoả lực' },
    { slug: 'liet-2', ten: 'Liệt Hoả II',         effect: '+6% intensity Hoả lực' },
    { slug: 'liet-3', ten: 'Liệt Hoả III',        effect: '+10% intensity Hoả lực' },
    { slug: 'hoa-aoe-1', ten: 'Tản Hoả I',        effect: '+10% AOE radius Hoả va chạm' },
    { slug: 'hoa-aoe-2', ten: 'Tản Hoả II',       effect: '+10% AOE radius Hoả va chạm' },
    { slug: 'hoa-ignite-1', ten: 'Cháy I',        effect: '+10% xác suất gây cháy 3s (tick 5% intensity/s)' },
    { slug: 'hoa-ignite-2', ten: 'Cháy II',       effect: '+10% xác suất gây cháy 3s (tick 5% intensity/s)' },
    { slug: 'hoa-ignite-dur', ten: 'Hoả Dư',      effect: '+1s duration cháy' },
    { slug: 'hoa-mult-1', ten: 'Bội Hoả I',       effect: '+5% multiplier Hoả tới đan Kim (tương khắc)' },
    { slug: 'hoa-mult-2', ten: 'Bội Hoả II',      effect: '+5% multiplier Hoả tới đan Kim' },
    { slug: 'hoa-vel-1', ten: 'Hoả Tốc I',        effect: '+6% velocity Hoả linh lực' },
    { slug: 'hoa-vel-2', ten: 'Hoả Tốc II',       effect: '+6% velocity Hoả linh lực' },
    { slug: 'hoa-anchor-1', ten: 'Định Hoả I',    effect: '+5% intensity cho linh khí Hoả trong 100px' },
    { slug: 'hoa-anchor-2', ten: 'Định Hoả II',   effect: '+5% intensity cho linh khí Hoả trong 100px' },
    { slug: 'hoa-charge-1', ten: 'Tích Hoả I',    effect: '+8% charge gain khi qua linh khí Hoả' },
    { slug: 'hoa-charge-2', ten: 'Tích Hoả II',   effect: '+8% charge gain khi qua linh khí Hoả' },
    { slug: 'hoa-burst-1', ten: 'Hoả Bộc I',      effect: 'Hoả hit lên đan thêm +5% spike intensity 1s' },
    { slug: 'hoa-burst-2', ten: 'Hoả Bộc II',     effect: 'Hoả hit lên đan thêm +5% spike intensity 1s' },
    { slug: 'hoa-affix-1', ten: 'Khắc Phù Hoả I', effect: '+1 tier hiệu lực affix Hoả trên Lò' },
    { slug: 'hoa-purity', ten: 'Thuần Hoả',       effect: '+15% AOE radius nếu toàn bộ linh khí trong 150px là Hoả' },
  ],
  tho: [
    { slug: 'tho-stab-1', ten: 'Trấn Thổ I',      effect: '+6% stability max linh đan' },
    { slug: 'tho-stab-2', ten: 'Trấn Thổ II',     effect: '+6% stability max linh đan' },
    { slug: 'tho-stab-3', ten: 'Trấn Thổ III',    effect: '+10% stability max linh đan' },
    { slug: 'tho-charge-1', ten: 'Tích Thổ I',    effect: '+10% charge gain khi qua linh khí Thổ' },
    { slug: 'tho-charge-2', ten: 'Tích Thổ II',   effect: '+10% charge gain khi qua linh khí Thổ' },
    { slug: 'tho-slow-1', ten: 'Trầm Tốc I',      effect: 'Linh lực qua linh khí Thổ slow 8%, +6% intensity bù' },
    { slug: 'tho-slow-2', ten: 'Trầm Tốc II',     effect: 'Linh lực qua linh khí Thổ slow 8%, +6% intensity bù' },
    { slug: 'tho-armor-1', ten: 'Hộ Đan I',       effect: '-5% tương khắc damage tới linh đan' },
    { slug: 'tho-armor-2', ten: 'Hộ Đan II',      effect: '-5% tương khắc damage tới linh đan' },
    { slug: 'tho-armor-3', ten: 'Hộ Đan III',     effect: '-8% tương khắc damage tới linh đan' },
    { slug: 'tho-tho-1', ten: 'Cố Lò I',          effect: '+10 Lò Thọ' },
    { slug: 'tho-tho-2', ten: 'Cố Lò II',         effect: '+10 Lò Thọ' },
    { slug: 'tho-anchor-1', ten: 'Định Thổ I',    effect: '+5% intensity cho linh khí Thổ trong 100px' },
    { slug: 'tho-anchor-2', ten: 'Định Thổ II',   effect: '+5% intensity cho linh khí Thổ trong 100px' },
    { slug: 'tho-board-1', ten: 'Trấn Bàn I',     effect: '-5% sai số góc spawn linh lực' },
    { slug: 'tho-board-2', ten: 'Trấn Bàn II',    effect: '-5% sai số góc spawn linh lực' },
    { slug: 'tho-phong-1', ten: 'Cố Phong I',     effect: '-3% xác suất Phong Ấn brick trên Lò' },
    { slug: 'tho-phong-2', ten: 'Cố Phong II',    effect: '-3% xác suất Phong Ấn brick trên Lò' },
    { slug: 'tho-affix-1', ten: 'Khắc Phù Thổ I', effect: '+1 tier hiệu lực affix Thổ trên Lò' },
    { slug: 'tho-purity', ten: 'Thuần Thổ',       effect: '+15% stability max nếu toàn bộ linh khí trong 150px là Thổ' },
  ],
}

// -----------------------------------------------------------------------------
// 3. Notables per cluster (5 each — 4 thematic + 1 ascendancy junction)
// -----------------------------------------------------------------------------

interface NotableDef { slug: string; ten: string; effect: string; junction?: boolean }

const NOTABLES: Record<Element, NotableDef[]> = {
  kim: [
    { slug: 'thien-loi',  ten: 'Thiên Lôi Triệu Hồi',
      effect: '5% xác suất Kim crit hit triệu hồi sét đánh xuống linh đan: +30% intensity Kim spike 0.5s' },
    { slug: 'kim-quang',  ten: 'Kim Quang Trận',
      effect: '+25% crit chance Kim khi 3+ linh khí Kim đứng cách nhau ≤120px' },
    { slug: 'tu-sat',     ten: 'Tử Sát Phong',
      effect: '+60% crit damage Kim, -10% non-crit Kim intensity' },
    { slug: 'kim-xuyen',  ten: 'Kim Xuyên Mộc',
      effect: 'Kim tương khắc hit lên Mộc đan: +50% stability damage' },
    { slug: 'junction-kim', ten: 'Đạo Phái Kim Môn', junction: true,
      effect: 'Mở cổng Đạo Phái Kim — kết nối tới subtree Đạo Phái Kim trong dao-phai.json. +3% all intensity.' },
  ],
  moc: [
    { slug: 'truong-sinh', ten: 'Trường Sinh Mạch',
      effect: '+20% stability max, stability regen +0.3%/s' },
    { slug: 'sinh-co',     ten: 'Sinh Cơ Tái Tạo',
      effect: 'Khi stability < 30%: heal +5%/s trong 5s. Cooldown 30s.' },
    { slug: 'thanh-long',  ten: 'Thanh Long Linh Trận',
      effect: 'Linh khí Mộc trong 200px share +15% intensity với nhau' },
    { slug: 'moc-quality', ten: 'Mộc Tinh Hoá',
      effect: '+25% quality gain trên linh đan Mộc khi stability ≥ 80%' },
    { slug: 'junction-moc', ten: 'Đạo Phái Mộc Môn', junction: true,
      effect: 'Mở cổng Đạo Phái Mộc — kết nối tới subtree Đạo Phái Mộc. +3% all stability max.' },
  ],
  thuy: [
    { slug: 'thuy-trieu-trieu', ten: 'Thuỷ Triều Linh Mạch',
      effect: '+2 max chain hop trên Thuỷ linh lực, +10% intensity per hop' },
    { slug: 'huyen-vu',         ten: 'Huyền Vũ Hộ Trận',
      effect: 'Mỗi Thuỷ chain hop heal +0.5% stability đan' },
    { slug: 'thuy-tinh',        ten: 'Thuỷ Tinh Quang',
      effect: 'Chain hop có 20% xác suất lan tới linh khí thứ hai trong 80px (branch chain)' },
    { slug: 'tinh-tam-tron',    ten: 'Tịnh Tâm Linh Tuyền',
      effect: 'Tâm Ma negative energy hit lên đan: -30% damage, dispel nhiễm khí 1s' },
    { slug: 'junction-thuy', ten: 'Đạo Phái Thuỷ Môn', junction: true,
      effect: 'Mở cổng Đạo Phái Thuỷ — kết nối tới subtree Đạo Phái Thuỷ. +3% all chain intensity.' },
  ],
  hoa: [
    { slug: 'phung-hoang',     ten: 'Phụng Hoàng Liệt Diệm',
      effect: '+30% AOE radius Hoả, AOE hit linh đan: +15% spike intensity 2s' },
    { slug: 'liet-tam',        ten: 'Liệt Hoả Tâm',
      effect: 'Cháy tick gây +50% damage, +1s duration' },
    { slug: 'cuu-tieu-loi',    ten: 'Cửu Tiêu Lôi Trận',
      effect: 'Crit Hoả hit triệu hồi 3 mini-explosion ngẫu nhiên trong 200px (intensity 30% mỗi cái)' },
    { slug: 'hoa-khac-kim',    ten: 'Hoả Khắc Kim Lực',
      effect: 'Hoả tương khắc hit lên Kim đan: +60% stability damage, +20% quality damage' },
    { slug: 'junction-hoa', ten: 'Đạo Phái Hoả Môn', junction: true,
      effect: 'Mở cổng Đạo Phái Hoả — kết nối tới subtree Đạo Phái Hoả. +3% all AOE radius.' },
  ],
  tho: [
    { slug: 'tho-truong-son',  ten: 'Trường Sơn Trấn Đan',
      effect: '+30% stability max, -10% tương khắc damage tới linh đan' },
    { slug: 'tho-kim-cuong',   ten: 'Kim Cương Hộ Pháp',
      effect: 'Linh khí Thổ +50% durability vs map "Huyết Sát" mod. Phong Ấn brick chance -8% trên Lò.' },
    { slug: 'tho-bach-quy',    ten: 'Bạch Quy Linh Bàn',
      effect: 'Mỗi linh lực rớt khỏi board (catch bởi Đế): linh đan +1% stability heal' },
    { slug: 'tho-tich-tho',    ten: 'Tích Thổ Bộc Phá',
      effect: 'Mỗi 10 hit lên linh khí Thổ → next hit +100% charge spike' },
    { slug: 'junction-tho', ten: 'Đạo Phái Thổ Môn', junction: true,
      effect: 'Mở cổng Đạo Phái Thổ — kết nối tới subtree Đạo Phái Thổ. +3% all defense.' },
  ],
}

// -----------------------------------------------------------------------------
// 4. Element-aligned keystones (1 per cluster, from spec §12.3)
// -----------------------------------------------------------------------------

const ELEMENT_KEYSTONES: Record<Element, NotableDef> = {
  kim: { slug: 'keystone-sac-ben', ten: 'Sắc Bén',
    effect: 'KEYSTONE: Crit damage ×3. Crit chance ÷2. Mỗi hit Kim không crit bị giảm -20% intensity.' },
  moc: { slug: 'keystone-sinh-soi', ten: 'Sinh Sôi',
    effect: 'KEYSTONE: Mỗi 10s, linh lực Mộc đầu tiên spawn ra "thai" tách thành 2 viên. Trade-off: -15% intensity Mộc base.' },
  thuy: { slug: 'keystone-thuy-trieu', ten: 'Thuỷ Triều',
    effect: 'KEYSTONE: Thuỷ linh lực càng nhiều va chạm càng nhanh (+3% velocity per hit, max +60%). Trade-off: velocity cap +60% nhưng -20% crit chance trên Thuỷ.' },
  hoa: { slug: 'keystone-liet-hoa', ten: 'Liệt Hoả',
    effect: 'KEYSTONE: Va chạm Hoả đánh dấu "cháy" 5s, tick damage 8% intensity/s. Trade-off: Hoả base hit -25% intensity.' },
  tho: { slug: 'keystone-trong-son', ten: 'Trọng Sơn',
    effect: 'KEYSTONE: Linh khí Thổ bất tử trước Phong Ấn brick, -50% Phong Ấn negative effect. Trade-off: Linh khí Thổ -30% drop chance trong run.' },
}

// -----------------------------------------------------------------------------
// 5. Hub & bridge nodes (5 small hub + 4 hub keystones + 5 bridge small + 1 bridge keystone)
// -----------------------------------------------------------------------------

interface HubNode { slug: string; ten: string; effect: string; type: 'small' | 'keystone'; element: Element | null; pos: { x: number; y: number } }

const HUB_NODES: HubNode[] = [
  // Central hub small nodes (~5) — cross-element synergies
  { slug: 'hub-vo-cuc-1', ten: 'Vô Cực Tâm I', type: 'small', element: null,
    effect: '+3% intensity tất cả Ngũ Hành', pos: polar(HUB_RADIUS, -Math.PI / 2) },
  { slug: 'hub-vo-cuc-2', ten: 'Vô Cực Tâm II', type: 'small', element: null,
    effect: '+3% stability max linh đan', pos: polar(HUB_RADIUS, -Math.PI / 2 + (2 * Math.PI / 5)) },
  { slug: 'hub-vo-cuc-3', ten: 'Vô Cực Tâm III', type: 'small', element: null,
    effect: '+3% quality gain linh đan', pos: polar(HUB_RADIUS, -Math.PI / 2 + (4 * Math.PI / 5)) },
  { slug: 'hub-vo-cuc-4', ten: 'Vô Cực Tâm IV', type: 'small', element: null,
    effect: '+3% charge gain tất cả linh khí', pos: polar(HUB_RADIUS, -Math.PI / 2 + (6 * Math.PI / 5)) },
  { slug: 'hub-vo-cuc-5', ten: 'Vô Cực Tâm V', type: 'small', element: null,
    effect: '+5 Lò Thọ', pos: polar(HUB_RADIUS, -Math.PI / 2 + (8 * Math.PI / 5)) },

  // 4 hub keystones (Thiên Mệnh, Cờ Bạc Tổ, Vô Vi, Bất Bại)
  { slug: 'keystone-thien-menh', ten: 'Thiên Mệnh', type: 'keystone', element: null,
    effect: 'KEYSTONE: Xem trước 5 drop kế tiếp trong run. Trade-off: -10% drop rate Cổ vật.',
    pos: { x: 0, y: 80 } },
  { slug: 'keystone-co-bac-to', ten: 'Cờ Bạc Tổ', type: 'keystone', element: null,
    effect: 'KEYSTONE: Phong Ấn brick chance -10%. Trade-off: Phong Ấn "Thăng" upgrade chance -10%.',
    pos: { x: 80, y: 0 } },
  { slug: 'keystone-vo-vi', ten: 'Vô Vi', type: 'keystone', element: null,
    effect: 'KEYSTONE: Banh tự rơi (no player intervention), +50% loot drop chance. Trade-off: -30% intensity tất cả.',
    pos: { x: 0, y: -80 } },
  { slug: 'keystone-bat-bai', ten: 'Bất Bại', type: 'keystone', element: null,
    effect: 'KEYSTONE: Lò Thọ damage -50%. Trade-off: -20% stability max linh đan.',
    pos: { x: -80, y: 0 } },
]

// Bridges — one small node per bridge + Hồn Linh keystone on Thuỷ-Mộc bridge
interface BridgeNode { slug: string; ten: string; effect: string; type: 'small' | 'keystone'; pair: [Element, Element] }

const BRIDGE_NODES: BridgeNode[] = [
  { slug: 'kim-thuy-bridge-1', ten: 'Kim Sinh Thuỷ',
    effect: '+8% intensity tương sinh Kim → Thuỷ chain hop', type: 'small', pair: ['kim', 'thuy'] },
  { slug: 'thuy-moc-bridge-1', ten: 'Thuỷ Sinh Mộc',
    effect: '+8% stability heal khi Thuỷ tương sinh Mộc đan', type: 'small', pair: ['thuy', 'moc'] },
  { slug: 'moc-hoa-bridge-1', ten: 'Mộc Sinh Hoả',
    effect: '+8% AOE radius khi Hoả linh lực được nuôi bởi Mộc charge', type: 'small', pair: ['moc', 'hoa'] },
  { slug: 'hoa-tho-bridge-1', ten: 'Hoả Sinh Thổ',
    effect: '+8% charge accumulation khi Hoả convert sang Thổ', type: 'small', pair: ['hoa', 'tho'] },
  { slug: 'tho-kim-bridge-1', ten: 'Thổ Sinh Kim',
    effect: '+8% crit chance Kim sau khi linh lực qua linh khí Thổ', type: 'small', pair: ['tho', 'kim'] },

  // Bridge keystone: Hồn Linh on Thuỷ-Mộc (echo/swarm pairs with Vong Linh archetype)
  { slug: 'keystone-hon-linh', ten: 'Hồn Linh', type: 'keystone', pair: ['thuy', 'moc'],
    effect: 'KEYSTONE: Linh khí Mộc/Thuỷ hi sinh (vỡ) khi 1 linh lực rớt khỏi board → spawn 1 linh lực "Hồn" tương sinh respawn lên top. Trade-off: linh khí Mộc/Thuỷ durability -50%.' },
]

// -----------------------------------------------------------------------------
// 6. Build the graph
// -----------------------------------------------------------------------------

const nodes: PassiveNode[] = []
const edges = new Map<string, Set<string>>()

function addNode(n: PassiveNode) {
  nodes.push(n)
  if (!edges.has(n.id)) edges.set(n.id, new Set())
}
function connect(a: string, b: string) {
  if (!edges.has(a)) edges.set(a, new Set())
  if (!edges.has(b)) edges.set(b, new Set())
  edges.get(a)!.add(b)
  edges.get(b)!.add(a)
}

// 6.1 Starting nodes
for (const el of ELEMENTS) {
  const pos = polar(START_RADIUS, ANGLE[el])
  addNode({
    id: `${el}-start`,
    ten: `Đan Đạo ${ELEMENT_NAME[el]} Khởi`,
    type: 'starting',
    effect: `+5% intensity ${ELEMENT_NAME[el]} lực. Cho phép vào ${ELEMENT_NAME[el]} cluster.`,
    element: el,
    connections: [],
    position: pos,
    cluster: `${el}-start`,
  })
}

// 6.2 Cluster small + notable + keystone
// Layout: arrange 20 small + 5 notable + 1 keystone around the cluster anchor in a fan.
// Concept: cluster anchor at CLUSTER_RADIUS. Small nodes occupy inner ring (180-260), notables at 280-310, keystone at 340.
for (const el of ELEMENTS) {
  const baseAngle = ANGLE[el]
  const center = polar(CLUSTER_RADIUS, baseAngle)

  // 20 smalls — 4 rings of 5 each at radii 30, 60, 90, 120 around cluster centre
  const smalls = SMALL_EFFECTS[el]
  for (let i = 0; i < 20; i++) {
    const ring = Math.floor(i / 5)        // 0..3
    const slot = i % 5                     // 0..4
    const r = 35 + ring * 28
    // spread small fan ±0.55rad around baseAngle outward
    const localAngle = baseAngle + (slot - 2) * 0.18 + (ring % 2 === 0 ? 0 : 0.09)
    const offset = polar(r, localAngle)
    const def = smalls[i]!
    addNode({
      id: `${el}-small-${def.slug}`,
      ten: def.ten,
      type: 'small',
      effect: def.effect,
      element: el,
      connections: [],
      position: { x: center.x + offset.x, y: center.y + offset.y },
      cluster: `${el}-small`,
    })
  }

  // 5 notables fan outer
  const notables = NOTABLES[el]
  for (let i = 0; i < 5; i++) {
    const def = notables[i]!
    const localAngle = baseAngle + (i - 2) * 0.22
    const offset = polar(160, localAngle)
    addNode({
      id: `${el}-notable-${def.slug}`,
      ten: def.ten,
      type: 'notable',
      effect: def.effect,
      element: el,
      connections: [],
      position: { x: center.x + offset.x, y: center.y + offset.y },
      cluster: def.junction ? `${el}-junction` : `${el}-notable`,
    })
  }

  // 1 element keystone — outer-most along baseAngle direction
  const ks = ELEMENT_KEYSTONES[el]
  const ksOffset = polar(210, baseAngle)
  addNode({
    id: `${el}-${ks.slug}`,
    ten: ks.ten,
    type: 'keystone',
    effect: ks.effect,
    element: el,
    connections: [],
    position: { x: center.x + ksOffset.x, y: center.y + ksOffset.y },
    cluster: `${el}-keystone`,
  })
}

// 6.3 Hub nodes
for (const h of HUB_NODES) {
  addNode({
    id: h.slug,
    ten: h.ten,
    type: h.type === 'small' ? 'small' : 'keystone',
    effect: h.effect,
    element: h.element,
    connections: [],
    position: h.pos,
    cluster: h.type === 'small' ? 'hub-vo-cuc-small' : 'hub-vo-cuc-keystone',
  })
}

// 6.4 Bridge nodes — placed at mid-angle between the two cluster anchors, on bridge ring
for (const b of BRIDGE_NODES) {
  const ang = midAngle(ANGLE[b.pair[0]], ANGLE[b.pair[1]])
  const r = b.type === 'keystone' ? BRIDGE_RADIUS + 40 : BRIDGE_RADIUS
  addNode({
    id: b.slug,
    ten: b.ten,
    type: b.type === 'small' ? 'small' : 'keystone',
    effect: b.effect,
    element: null,
    connections: [],
    position: polar(r, ang),
    cluster: `${b.pair[0]}-${b.pair[1]}-bridge`,
  })
}

// -----------------------------------------------------------------------------
// 7. Wire connections
// -----------------------------------------------------------------------------

// 7.1 Each starting node → 3 inner-ring smalls (slots 0,1,2 of ring 0) of its cluster
for (const el of ELEMENTS) {
  const startId = `${el}-start`
  const ringZero = SMALL_EFFECTS[el].slice(0, 5).map((d) => `${el}-small-${d.slug}`)
  for (const sid of ringZero) connect(startId, sid)
}

// 7.2 Connect smalls within each cluster — ring connectivity + spoke to next ring
for (const el of ELEMENTS) {
  const ids = SMALL_EFFECTS[el].map((d) => `${el}-small-${d.slug}`)
  // ring connections: within each ring of 5, connect consecutive (slot i ↔ i+1) — but not wrap
  for (let ring = 0; ring < 4; ring++) {
    for (let slot = 0; slot < 4; slot++) {
      connect(ids[ring * 5 + slot]!, ids[ring * 5 + slot + 1]!)
    }
  }
  // spoke connections: each slot in ring r connects to same slot in ring r+1
  for (let ring = 0; ring < 3; ring++) {
    for (let slot = 0; slot < 5; slot++) {
      connect(ids[ring * 5 + slot]!, ids[(ring + 1) * 5 + slot]!)
    }
  }
}

// 7.3 Notables connect to outermost ring smalls + adjacent notables + keystone
for (const el of ELEMENTS) {
  const ids = NOTABLES[el].map((d) => `${el}-notable-${d.slug}`)
  const outerSmalls = SMALL_EFFECTS[el].slice(15, 20).map((d) => `${el}-small-${d.slug}`)
  for (let i = 0; i < 5; i++) {
    connect(ids[i]!, outerSmalls[i]!)
    if (i > 0) connect(ids[i]!, ids[i - 1]!)
  }
  // Keystone connects to middle 3 notables (idx 1,2,3)
  const ksId = `${el}-${ELEMENT_KEYSTONES[el].slug}`
  connect(ksId, ids[1]!)
  connect(ksId, ids[2]!)
  connect(ksId, ids[3]!)
}

// 7.4 Hub small nodes — form a ring at centre and each links to its nearest cluster starting node
const hubSmalls = HUB_NODES.filter((h) => h.type === 'small').map((h) => h.slug)
for (let i = 0; i < hubSmalls.length; i++) {
  connect(hubSmalls[i]!, hubSmalls[(i + 1) % hubSmalls.length]!)
}
// Map hub smalls to element starts by index (hub-vo-cuc-1..5 → kim, thuy, moc, hoa, tho)
const hubToStart: Array<[string, string]> = [
  ['hub-vo-cuc-1', 'kim-start'],
  ['hub-vo-cuc-2', 'thuy-start'],
  ['hub-vo-cuc-3', 'moc-start'],
  ['hub-vo-cuc-4', 'hoa-start'],
  ['hub-vo-cuc-5', 'tho-start'],
]
for (const [h, s] of hubToStart) connect(h, s)

// 7.5 Hub keystones — link each to the 2 nearest hub smalls
const hubKeystoneLinks: Array<[string, string[]]> = [
  ['keystone-thien-menh', ['hub-vo-cuc-1', 'hub-vo-cuc-5']],  // top
  ['keystone-co-bac-to',  ['hub-vo-cuc-1', 'hub-vo-cuc-2']],  // right
  ['keystone-vo-vi',      ['hub-vo-cuc-3', 'hub-vo-cuc-4']],  // bottom
  ['keystone-bat-bai',    ['hub-vo-cuc-4', 'hub-vo-cuc-5']],  // left
]
for (const [k, ss] of hubKeystoneLinks) for (const s of ss) connect(k, s)

// 7.6 Bridge nodes — each bridge small links the two adjacent cluster junction notables
for (const b of BRIDGE_NODES.filter((b) => b.type === 'small')) {
  const j1 = `${b.pair[0]}-notable-junction-${b.pair[0]}`
  const j2 = `${b.pair[1]}-notable-junction-${b.pair[1]}`
  connect(b.slug, j1)
  connect(b.slug, j2)
}
// Bridge keystone Hồn Linh → connects to thuy-moc bridge small + Thuỷ keystone + Mộc keystone
connect('keystone-hon-linh', 'thuy-moc-bridge-1')
connect('keystone-hon-linh', 'thuy-keystone-thuy-trieu')
connect('keystone-hon-linh', 'moc-keystone-sinh-soi')

// -----------------------------------------------------------------------------
// 8. Write connections back into node objects
// -----------------------------------------------------------------------------

for (const n of nodes) {
  n.connections = Array.from(edges.get(n.id) ?? []).sort()
}

// -----------------------------------------------------------------------------
// 9. Verification
// -----------------------------------------------------------------------------

function assert(cond: boolean, msg: string) {
  if (!cond) {
    console.error('ASSERT FAIL:', msg)
    process.exit(1)
  }
}

// 9.1 Counts
assert(nodes.length === 150, `expected 150 nodes, got ${nodes.length}`)

const byType = { starting: 0, small: 0, notable: 0, keystone: 0 } as Record<string, number>
for (const n of nodes) byType[n.type]++
assert(byType.starting === 5, `expected 5 starting, got ${byType.starting}`)
assert(byType.small === 110, `expected 110 small, got ${byType.small}`)
assert(byType.notable === 25, `expected 25 notable, got ${byType.notable}`)
assert(byType.keystone === 10, `expected 10 keystone, got ${byType.keystone}`)

// 9.2 Unique ids
const idSet = new Set(nodes.map((n) => n.id))
assert(idSet.size === nodes.length, 'duplicate node id')

// 9.3 Bidirectional symmetry
for (const n of nodes) {
  for (const adj of n.connections) {
    const other = nodes.find((x) => x.id === adj)
    assert(!!other, `node ${n.id} connects to unknown ${adj}`)
    assert(other!.connections.includes(n.id), `asymmetric edge ${n.id} → ${adj}`)
  }
}

// 9.4 No orphans
for (const n of nodes) {
  assert(n.connections.length > 0, `orphan node ${n.id}`)
}

// 9.5 Element histogram
const byElement: Record<string, number> = {}
for (const n of nodes) {
  const k = n.element ?? 'null'
  byElement[k] = (byElement[k] ?? 0) + 1
}
console.log('Element histogram:', byElement)
console.log('Type histogram:', byType)

// 9.6 Zod schema validation
const tree = { version: 1, nodes }
const parsed = PassiveTree.safeParse(tree)
if (!parsed.success) {
  console.error('Schema validation failed:')
  console.error(parsed.error.format())
  process.exit(1)
}

// -----------------------------------------------------------------------------
// 10. Write output
// -----------------------------------------------------------------------------

const outPath = '/Users/firegroup/projects/lu-dan-game/packages/data/passive-tree.json'
// sort nodes by cluster + type + id for deterministic output
nodes.sort((a, b) => (a.cluster + a.type + a.id).localeCompare(b.cluster + b.type + b.id))
const final = JSON.stringify({ version: 1, nodes }, null, 2)
await Bun.write(outPath, final + '\n')
console.log(`Wrote ${nodes.length} nodes to ${outPath}`)
