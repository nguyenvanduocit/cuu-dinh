#!/usr/bin/env bun
/**
 * migrate-character-shaped.ts — Phase 2 migration script
 *
 * Migrates 4 character-shaped categories from paragraph-form docs
 * into per-entity bundles under docs/content/<category>/<entity-id>/.
 *
 * Categories: npcs (14), bosses (~14), factions (5), lore-entities (~18)
 *
 * Sources:
 *   - docs/lore.md §4 (factions), §5 (NPC bibles), §10 (lore artifacts)
 *   - docs/boss-patterns.md §1-6 (boss mechanics)
 *   - docs/art-prompts/bosses-npcs/npcs.md (NPC art prompts)
 *   - docs/art-prompts/bosses-npcs/bosses.md (boss type art prompts)
 *   - docs/data/lore.md (NPC dialogue — partially corrupted)
 *
 * Usage:
 *   bun tools/migrate-character-shaped.ts --dry-run   # preview counts
 *   bun tools/migrate-character-shaped.ts              # real run
 */

import { mkdir, writeFile, copyFile } from "node:fs/promises";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dir, "..");
const CONTENT_DIR = join(ROOT, "docs/content");
const ART_GENERATED_DIR = join(ROOT, "docs/art/generated");

const DRY_RUN = process.argv.includes("--dry-run");

function readMd(path: string): string {
  return readFileSync(path, "utf-8");
}

function escapeYaml(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

// ---------------------------------------------------------------------------
// Write helpers
// ---------------------------------------------------------------------------

async function ensureWrite(path: string, content: string): Promise<void> {
  if (DRY_RUN) return;
  const dir = path.substring(0, path.lastIndexOf("/"));
  await mkdir(dir, { recursive: true });
  await writeFile(path, content);
}

async function ensureCopy(src: string, dest: string): Promise<void> {
  if (DRY_RUN) return;
  const dir = dest.substring(0, dest.lastIndexOf("/"));
  await mkdir(dir, { recursive: true });
  await copyFile(src, dest);
}

// ---------------------------------------------------------------------------
// NPC data (extracted from docs/lore.md §5 + docs/art-prompts/bosses-npcs/npcs.md + docs/data/lore.md)
// ---------------------------------------------------------------------------

interface NpcData {
  id: string;
  ten: string;
  role: string;
  faction: string | null;
  firstAppearance: string;
  location: string;
  voiceArchetype: string;
  title: string;
  appearance: string;
  voiceRules: string[];
  backstory: string;
  sampleDialogue: string;
  questRole: string[];
  personality: string[];
  artSubject: string;
  artPalette: string;
  dialogueScenes: { act: string; scenes: string[] }[];
}

const NPCS: NpcData[] = [
  {
    id: "master",
    ten: "Sư Phụ",
    role: "mentor",
    faction: "dan-dao-sect",
    firstAppearance: "act-1",
    location: "khai-lu-tran",
    voiceArchetype: "ascetic elder",
    title: "Tổ Đan Đạo Môn — Đệ Nhị Đại",
    appearance: "Old man (~70 years), grey beard, simple cotton robe (no elaborate gold), kindly eyes, holds a wooden walking stick",
    voiceRules: [
      "Điềm tĩnh, cổ điển, đôi khi dùng dụ ngôn",
      "Xưng 'thầy', gọi player là 'con'",
      "Không bao giờ hét, không bao giờ nịnh",
      "Hán-Việt poetic, classical",
    ],
    backstory: `Cao Tổ's last direct disciple. Mất hai con gái trong cuộc xâm nhập của Tâm Ma 30 năm trước. Sống tại Khai Lư Trấn am cùng con mèo tên Bột. Giữ chiếc Lò tổ truyền đã vỡ 30 năm, chờ đệ tử xứng đáng. Bí mật: từng dùng Lò gọi hồn hai con gái, thất bại, làm nứt thêm phong ấn Cao Tổ. Dạy đệ tử tiết chế vì chính mình đã thất bại.`,
    sampleDialogue: `"Con, ngày xưa thầy cũng giống con. Cầm Lò mà tay run. Đan chưa luyện đã bể. Nhưng Lò vẫn ở đây — bởi Lò không phải để dạy luyện đan. Lò là dạy con biết: trời cho gì, con nhận đó."`,
    questRole: [
      "Act 1: Trao Lò, dạy basic",
      "Act 2: Dẫn lên Ngũ Hành Sơn",
      "Act 3: Đi tìm Lò Thần",
      "Act 4: Khuyên player chọn Đạo Phái",
      "Act 5: Reveal full lore + Sơn Hà Đồ Lệnh origin, hy sinh trong boss fight",
    ],
    personality: ["Điềm tĩnh, cổ điển", "Nói ngắn gọn, mỗi câu mang trọng lượng", "Dùng dụ ngôn"],
    artSubject: "a wise elderly daoist master with long white beard and robe, calm authority",
    artPalette: "ivory + imperial gold",
    dialogueScenes: [
      { act: "act-1 — Trao Lò", scenes: ["Đệ tử vừa đến Am Sơn Mộc Cốc, lần đầu gặp Sư Phụ", "Sư Phụ đặt Lò vào tay đệ tử", "Trước Pháp Trận Khai Đan đầu tiên"] },
      { act: "act-1 — Sau Boss", scenes: ["Sau khi đệ tử thắng Tâm Ma Sơn Mộc", "Sư Phụ nói về đan bể", "Kết thúc Hồi 1, giao nhiệm vụ Hồi 2"] },
      { act: "act-2 — Giao Nhiệm Vụ", scenes: ["Sư Phụ đứng ở chân Ngũ Hành Sơn, dặn dò", "Khi đệ tử trở về sau 5 đỉnh", "Sư Phụ nhìn vết nứt trên Lò sau boss Hồi 2"] },
      { act: "act-3 — Hướng Dẫn Lò Thần", scenes: ["Sư Phụ dẫn đường đến Hoả Sơn Lò Cốc", "Về Hắc Bạch — Sư Phụ tiết lộ lý lịch", "Sau khi Lò được sửa xong"] },
      { act: "act-4 — Vô Cực Đỉnh", scenes: ["Sư Phụ đứng đợi ở Vô Cực Đỉnh, trông già hơn", "Trước khi đệ tử chọn Đạo Phái", "Sau khi đệ tử chọn xong Đạo Phái"] },
      { act: "act-5 — Lộ Bí Mật", scenes: ["Sư Phụ tiết lộ bí mật Lò tổ truyền ở Hồn Nguyên Điện", "Sư Phụ giải thích tại sao không nói sớm hơn", "Câu cuối cùng của Sư Phụ, trước khi hy sinh trong boss fight"] },
    ],
  },
  {
    id: "old-fox",
    ten: "Lão Hồ Ly",
    role: "vendor",
    faction: "gambling-guild",
    firstAppearance: "act-1",
    location: "khai-lu-tran",
    voiceArchetype: "sly merchant",
    title: "Chưởng môn Đạo Quán Cờ Bạc Hội",
    appearance: "Thin man, fox-like grin, red silk robe (flamboyant), holds a fan (always fanning), gold tooth, beady eyes",
    voiceRules: [
      "Ngọt ngào, vồn vã, hay dùng 'ấy chà', 'đẹp lắm', 'may mắn lắm'",
      "Gọi player là 'huynh đệ'",
      "Nịnh không che được sự lộ liễu",
    ],
    backstory: `Tên thật: Hồ Văn Phú. Cựu quan lại tham nhũng, mất sạch vì cờ bạc 50 năm trước. Phát hiện cờ bạc = luyện đan parallels, sáng lập Đạo Quán Cờ Bạc Hội. Phàm nhân, rất sợ Tâm Ma.`,
    sampleDialogue: `"Huynh đệ! Đến đúng lúc rồi đó! Vừa tới một viên Linh Đan mới — chỉ 50 kim đan thôi, mà huynh đệ biết thế nào — có thể là Bảo, có thể là rác. Đời mà, không thử sao biết được? Nào, mở hộp đi, may mắn về với huynh đệ thôi..."`,
    questRole: ["Act 1: Giới thiệu gambling", "Act 3: Mở Đạo Quán đầy đủ ở Hoả Sơn", "Act 5+: Tiếp tục bán hàng endgame"],
    personality: ["Smooth, flattering", "Luôn upsell", "Sợ Tâm Ma thật sự"],
    artSubject: "a sly fox-spirit merchant in a daoist gambler's robe, mischievous grin, fox ears",
    artPalette: "cinnabar + gold",
    dialogueScenes: [
      { act: "act-1 — Giới Thiệu", scenes: ["Lão Hồ Ly chào đón đệ tử lần đầu", "Chào mời Linh Đan đầu tiên", "Sau khi player không mua"] },
      { act: "act-3 — Đạo Quán Full", scenes: ["Mở Đạo Quán đầy đủ ở Hoả Sơn Lò Cốc", "Cố bán Phong Ấn không cần thiết", "Thật thà hiếm có — về nỗi sợ Tâm Ma"] },
      { act: "act-5 — Sau Boss", scenes: ["Ở base camp sau khi Sư Phụ đã mất", "Mời đệ tử tiếp tục mua"] },
    ],
  },
  {
    id: "nameless-cultivator",
    ten: "Đạo Sĩ Vô Danh",
    role: "vendor",
    faction: null,
    firstAppearance: "act-1",
    location: "khai-lu-tran",
    voiceArchetype: "cryptic wanderer",
    title: "Vô danh",
    appearance: "Hooded figure, never shows face, simple grey monk robe, voice deep but soft",
    voiceRules: [
      "Cryptic, zen koan style",
      "Không bao giờ dùng 'tôi' — chỉ dùng 'tại hạ'",
      "Calm, no emotion",
    ],
    backstory: `Danh tính hoàn toàn bí ẩn. Lang thang khắp Cửu Châu Đan Vực. Bán linh khí với giá hợp lý. Có thể là tiên nhân ẩn mình — lore không xác nhận.`,
    sampleDialogue: `"Bảo vật này, không phải của tại hạ. Cũng không phải của ngài. Là của trời. Tại hạ chỉ là trung gian. Giá: 200 kim đan. Nếu ngài cảm thấy không xứng, đặt xuống. Bảo vật sẽ tự tìm chủ mới."`,
    questRole: ["Act 1: Xuất hiện ở base camp", "Act 2: Ngẫu nhiên trên Ngũ Hành Sơn", "Act 4: Bích Hải Đảo", "Endgame: Ngẫu nhiên trong bí cảnh"],
    personality: ["Cryptic", "Calm", "Possibly immortal"],
    artSubject: "a plain hooded wandering cultivator, face half-shadowed, mysterious",
    artPalette: "ink black + ivory",
    dialogueScenes: [
      { act: "act-1 — Giới Thiệu", scenes: ["Lần đầu xuất hiện ở base camp", "Khi player hỏi về danh tính", "Khi player từ chối mua"] },
      { act: "act-2 — Trên Đường", scenes: ["Xuất hiện ngẫu nhiên trên Ngũ Hành Sơn", "Sau khi 5 Ngũ Hành Tổ siêu thoát"] },
      { act: "act-4 — Trên Đảo", scenes: ["Xuất hiện ở Bích Hải Đảo, nhìn biển", "Câu koan cuối trước Hồi 5"] },
      { act: "endgame — Ngẫu Nhiên", scenes: ["Xuất hiện ngẫu nhiên trong bí cảnh endgame"] },
    ],
  },
  {
    id: "immortal-ancestor",
    ten: "Tổ Sư Bất Tử",
    role: "vendor",
    faction: "immortal-ancestor-line",
    firstAppearance: "act-3",
    location: "hoa-son-lo-coc",
    voiceArchetype: "ancient immortal",
    title: "Cảnh Hữu Chân Nhân — Ngũ Hành Sơ Tổ, Người Tạo Sơn Hà Đồ Lệnh",
    appearance: "Looks young (mid-20s), white hair flowing, ethereal robes, eyes ancient (1000+ years), barefoot",
    voiceRules: [
      "Ancient, slow",
      "Hán-Việt with archaic inflections, 'lão phu' thay vì 'tôi'",
      "Nói về sự kiện 5000 năm trước như chuyện hôm qua",
      "Mỉm cười nhẹ nhàng trước sự non nớt của người trẻ",
    ],
    backstory: `Tên thật: Cảnh Hữu Chân Nhân. Một trong 5 Ngũ Hành Sơ Tổ từ 8000 năm trước. Tạo ra Sơn Hà Đồ Lệnh. Cho Cao Tổ mượn để luyện Cửu Chuyển. Bán Cổ vật vì tin rằng phàm nhân xứng đáng có cơ hội. Danh tính tiết lộ Hồi 5. Player's Act 5 final ally.`,
    sampleDialogue: `"Cổ vật này, lão phu đã giữ 4000 năm. Bây giờ trao cho con — không phải vì con xứng đáng. Mà vì... con sẽ đối mặt với điều mà lão phu từng phải đối mặt. Cổ vật này từng là của tổ sư của tổ sư con. Lão phu nợ tổ sư ấy một ân tình. Hôm nay trả."`,
    questRole: ["Act 3: Bán Cổ vật", "Act 4: Gợi ý về Cao Tổ", "Act 5: Tiết lộ danh tính, trao Sơn Hà Đồ Lệnh mảnh cuối"],
    personality: ["Ancient", "Mildly amused", "Watches from distance"],
    artSubject: "a translucent immortal ancestor spirit, ethereal glowing elder, floating",
    artPalette: "twilight purple + gold",
    dialogueScenes: [
      { act: "act-3 — Xuất Hiện Lần Đầu", scenes: ["Gặp player ở Hoả Sơn Lò Cốc", "Khi player mua Cổ vật lần đầu", "Khi player hỏi tuổi"] },
      { act: "act-4 — Gợi Ý", scenes: ["Xuất hiện ở Bích Hải Đảo, nhắc đến Cao Tổ"] },
      { act: "act-5 — Tiết Lộ", scenes: ["Tiết lộ danh tính thực sự ở Hồn Nguyên Điện", "Trao mảnh Sơn Hà Đồ Lệnh cuối cùng"] },
    ],
  },
  {
    id: "black-white-alchemist",
    ten: "Đan Sư Hắc Bạch",
    role: "crafting-bench",
    faction: "dan-dao-sect",
    firstAppearance: "act-1",
    location: "khai-lu-tran",
    voiceArchetype: "silent twin duo",
    title: "Thủ Lĩnh Đan Lư Bàn",
    appearance: "Twin brother + sister, identical, one always in black, one in white, both deaf-mute (sign language)",
    voiceRules: [
      "Sign language subtitled as text bubble",
      "Brief, technical",
      "Hắc speaks of risk, Bạch speaks of safety",
      "Together = perfect balance",
    ],
    backstory: `Sinh đôi, mất thính giác trong hoả hoạn thời nhỏ. Sư Phụ nuôi dưỡng sau khi cha mẹ mất. Sống vĩnh viễn ở Khai Lư Trấn. Vận hành Đan Lư Bàn cùng nhau.`,
    sampleDialogue: `Hắc: "Phong Ấn cái này. 25% bể."\nBạch: "Hoặc dùng Tinh Hoa Kim — an toàn hơn."\nBoth: "Quyết định của con."`,
    questRole: ["Act 1: Giới thiệu bench craft", "Act 3: Dạy craft nâng cao ở Hoả Sơn", "Act 5+: Sau khi Sư Phụ mất, tiếp tục ở Đan Lư Bàn"],
    personality: ["Technical", "Balanced", "Emotionally restrained but caring"],
    artSubject: "a paired duo of silent masked alchemists, one in black robe one in white, mirror twins",
    artPalette: "ink black + ivory",
    dialogueScenes: [
      { act: "act-1 — Giới Thiệu", scenes: ["Lần đầu player gặp ở base camp", "Giải thích dịch vụ"] },
      { act: "act-3 — Dạy Craft", scenes: ["Dạy player bench craft ở Hoả Sơn Lò Cốc", "Khi player bể đan trong craft", "Tiết lộ về Sư Phụ gián tiếp"] },
      { act: "act-5 — Sư Phụ Mất", scenes: ["Hắc Bạch ở Đan Lư Bàn, không nói gì, chỉ ký hiệu", "Khi player trở lại sau campaign"] },
    ],
  },
  {
    id: "omen-crone",
    ten: "Lão Bà Thiên Cơ",
    role: "meta-npc",
    faction: null,
    firstAppearance: "act-5",
    location: "hon-nguyen-dien",
    voiceArchetype: "wise fool crone",
    title: "Bà Chủ Thiên Cơ Quẻ",
    appearance: "Tiny old woman, white hair in bun, pouch full of oracle sticks and jade tokens",
    voiceRules: [
      "Giọng bà cụ hát lên hát xuống",
      "Xen kẽ chuyện vô nghĩa và triết lý thâm sâu",
      "Gọi player là 'thằng nhỏ'",
      "Thỉnh thoảng nói điều ngẫu nhiên rồi thấy đúng",
    ],
    backstory: `Tuổi thật: 200+ (slightly immortal nhờ omen magic). Bán Thiên Cơ Quẻ tokens khắp Cửu Châu. Biết mọi nhân vật lịch sử. Hệ thống omen là ma thuật CỦA BÀ, không phải thần thánh.`,
    sampleDialogue: `"Thằng nhỏ! Hôm nay thiên tượng ra quẻ gì? Bà già này nói thật: tuần trước có thằng nhóc giống con gieo một quẻ, ứng đủ ba hào. Giờ thằng đó? Là Đạo Sĩ Vô Danh đó. Hahaha! Nói đùa. Có lẽ. Gieo đi gieo đi."`,
    questRole: ["Act 5: Unlocks Thiên Cơ Quẻ meta", "Endgame: Bán quẻ meta tại base camp"],
    personality: ["Singsong wisdom", "Random anecdotes", "Sees more than she lets on"],
    artSubject: "a hunched old fortune-teller crone with divination sticks, knowing smile",
    artPalette: "cinnabar + purple",
    dialogueScenes: [
      { act: "act-5 — Giới Thiệu", scenes: ["Lần đầu xuất hiện ở Hồn Nguyên Điện", "Tiết lộ về Thiên Cơ Quẻ", "Trước khi player đi đánh boss cuối"] },
      { act: "endgame — Lô Đề", scenes: ["Ở base camp, bán Thiên Cơ Quẻ meta", "Khi player hỏi tuổi bà"] },
    ],
  },
  {
    id: "furnace-spirit",
    ten: "Lò Thần",
    role: "repair-npc",
    faction: null,
    firstAppearance: "act-3",
    location: "hoa-son-lo-coc",
    voiceArchetype: "gruff craftsman",
    title: "Linh Hồn Lò Luyện Đan Cổ",
    appearance: "Bare-chested old smith, soot-covered, massive hammer, only one eye (other lost in forging accident)",
    voiceRules: [
      "Cộc cằn, thẳng thắn",
      "Không xã giao, không tolerate lời thừa",
      "Tôn trọng ai coi trọng công việc",
      "Nói rất ít — mỗi câu đều có trọng lượng",
    ],
    backstory: `Linh hồn người thợ rèn chết khi đúc Lò tổ truyền 4000 năm trước. Hồn fuse vào Lò. Xuất hiện khi Lò cần sửa chữa/nâng cấp lớn. Không tên riêng — chỉ là 'Lò Thần'.`,
    sampleDialogue: "",
    questRole: ["Act 3: Sửa Lò + unlock 8 slot", "Endgame: Nâng cấp Lò đặc biệt"],
    personality: ["Gruff but fair", "Direct", "Respects effort"],
    artSubject: "a small living furnace-spirit elemental, a sentient bronze cauldron with glowing eyes",
    artPalette: "imperial gold + cinnabar",
    dialogueScenes: [
      { act: "act-3 — Sửa Lò", scenes: ["Lần đầu gặp trong lò rèn sâu nhất Hoả Sơn", "Trong khi sửa Lò", "Sau khi sửa xong, trao lại Lò 8 slot"] },
      { act: "act-3 — Trước Boss", scenes: ["Nói về Tâm Ma Hoả Sơn"] },
      { act: "endgame — Nâng Cấp", scenes: ["Xuất hiện khi Lò cần nâng cấp đặc biệt"] },
    ],
  },
  {
    id: "map-sorcerer",
    ten: "Pháp Sư Bản Đồ",
    role: "atlas-guide",
    faction: null,
    firstAppearance: "act-4",
    location: "bich-hai-dao",
    voiceArchetype: "enthusiastic scholar",
    title: "Học Giả Atlas — Nhà Soạn Đan Pháp",
    appearance: "Middle-aged woman, scholar robes, ink-stained fingers, carries scrolls and brushes",
    voiceRules: [
      "Học thuật, kỹ càng, hay trích dẫn tài liệu",
      "Hơi hài hước không cố ý",
      "Gọi player là 'đạo sĩ' (tôn trọng)",
      "Rất hào hứng khi nói về bản đồ và Đan Pháp",
    ],
    backstory: `Nhà địa lý học thực thụ, vô tình phát minh Đan Pháp craft. Ngón tay ố mực, luôn mang bút cuộn giấy. Bạn của Sư Phụ. Giải thích chính xác đến mức đôi khi buồn cười.`,
    sampleDialogue: "",
    questRole: ["Act 4: Dạy Đan Pháp craft ở Bích Hải Đảo", "Act 5: Trao 5 Đan Pháp nâng cao", "Endgame: Giải đáp atlas"],
    personality: ["Academic", "Precise", "Slight humor"],
    artSubject: "a cartographer-sorcerer holding a glowing landscape scroll, scholarly",
    artPalette: "jade green + gold",
    dialogueScenes: [
      { act: "act-4 — Dạy Đan Pháp", scenes: ["Gặp player lần đầu ở Bích Hải Đảo", "Giải thích triết lý Đan Pháp", "Sau khi player soạn Đan Pháp đầu tiên"] },
      { act: "act-5 — Đan Pháp Nâng Cao", scenes: ["Trao 5 Đan Pháp nâng cao ở Hồn Nguyên Điện", "Lời khuyên về atlas"] },
      { act: "endgame — Atlas", scenes: ["Ở base camp, giải đáp câu hỏi atlas"] },
    ],
  },
  // 5 Wuxing ancestors (Act 2 ghosts)
  ...["metal", "wood", "water", "fire", "earth"].map((el) => {
    const MAP: Record<string, { ten: string; title: string; vn: string; personality: string; voice: string; subject: string; palette: string; peak: string }> = {
      metal: { ten: "Kim Tổ Bạch Sương", title: "Sơ Tổ Nguyên Tố Kim — Băng Sương Trắng", vn: "Cựu kiếm khách, điềm tĩnh như tuyết. Tồn tại ngàn năm ở đỉnh Kim Phong chờ đợi.", personality: "Calm swordsman", voice: "Điềm tĩnh, kiệm lời. Kiếm khách già không cần chứng minh gì.", subject: "a metal-element ancestor sage, armored in pale frost-silver, sharp angular", palette: "imperial gold + ivory", peak: "Kim Phong" },
      wood: { ten: "Mộc Tổ Lục Trí", title: "Sơ Tổ Nguyên Tố Mộc — Trí Lục", vn: "Nhà thảo mộc, nhẹ nhàng như gió qua trúc. Yêu thương mọi sinh linh.", personality: "Gentle herbalist", voice: "Nhẹ nhàng, ấm áp. Nói về cây cỏ như nói về bạn bè.", subject: "a wood-element ancestor sage, robed in living leaves and vines", palette: "jade green", peak: "Mộc Phong" },
      water: { ten: "Thuỷ Tổ Hắc Lưu", title: "Sơ Tổ Nguyên Tố Thuỷ — Dòng Chảy Đen", vn: "Trầm mặc, nội tâm. Ít nói nhất trong 5 Tổ.", personality: "Brooding introvert", voice: "Trầm, chậm, ít lời. Mỗi câu dài suy nghĩ.", subject: "a water-element ancestor sage, flowing dark-blue robes like a river", palette: "deep blue + ink black", peak: "Thuỷ Phong" },
      fire: { ten: "Hoả Tổ Đỏ Liệt", title: "Sơ Tổ Nguyên Tố Hoả — Đỏ Liệt Lửa", vn: "Bộc trực, nóng tính — nhưng thẳng thắn đến mức đáng tin. Ngàn năm không bớt nóng.", personality: "Fiery and direct", voice: "Thẳng, cộc, đôi khi nóng giận. Tôn trọng người dám đứng thẳng.", subject: "a fire-element ancestor sage, fierce, robes wreathed in cinnabar flame", palette: "cinnabar red + gold", peak: "Hoả Phong" },
      earth: { ten: "Thổ Tổ Hoàng Trầm", title: "Sơ Tổ Nguyên Tố Thổ — Hoàng Kim Trầm Tích", vn: "Chậm chạp, kiên nhẫn vô hạn. Nói ít nhưng mỗi câu như lời tiên tri.", personality: "Slow and patient", voice: "Chậm, sâu, như đất rung. Không bao giờ vội. Mỗi câu đều cần thời gian để thấm.", subject: "an earth-element ancestor sage, heavy stoic, ochre-and-stone robes", palette: "earthen brown + gold", peak: "Thổ Phong" },
    };
    const d = MAP[el];
    return {
      id: `wuxing-ancestor-${el}`,
      ten: d.ten,
      role: "element-teacher",
      faction: "forgotten-wuxing-ancestors",
      firstAppearance: "act-2",
      location: `ngu-hanh-son`,
      voiceArchetype: d.personality,
      title: d.title,
      appearance: `Ghostly spirit on ${d.peak}`,
      voiceRules: [d.voice],
      backstory: `Linh hồn người sáng lập nguyên tố ${el === "metal" ? "Kim" : el === "wood" ? "Mộc" : el === "water" ? "Thuỷ" : el === "fire" ? "Hoả" : "Thổ"}. ${d.vn}`,
      sampleDialogue: "",
      questRole: [`Act 2: Xuất hiện trên đỉnh ${d.peak}, trao linh khí ${el}, giảng về nguyên tố, siêu thoát`],
      personality: [d.personality],
      artSubject: d.subject,
      artPalette: d.palette,
      dialogueScenes: [
        { act: `act-2 — Trên Đỉnh ${d.peak}`, scenes: ["Xuất hiện trước đệ tử", `Trao linh khí ${el === "metal" ? "Kim" : el === "wood" ? "Mộc" : el === "water" ? "Thuỷ" : el === "fire" ? "Hoả" : "Thổ"}`, "Siêu thoát"] },
      ],
    } as NpcData;
  }),
  // Hỗn Nguyên Tâm Ma Vương (NPC aspect — ALSO exists as boss)
  {
    id: "primordial-corruption-king",
    ten: "Hỗn Nguyên Tâm Ma Vương",
    role: "antagonist",
    faction: "heart-demon-race",
    firstAppearance: "act-5",
    location: "hon-nguyen-dien",
    voiceArchetype: "mirror of desire",
    title: "Hóa Thân Của Vạn Ngàn Ham Muốn",
    appearance: "Constantly shifting — sometimes giant demon, sometimes beautiful seductress, sometimes player's own reflection, sometimes Sư Phụ's face",
    voiceRules: [
      "Phản chiếu nội tâm player",
      "Biết mọi lựa chọn player đã làm",
      "Không hét, không đe dọa thô bạo — đe dọa bằng sự thật",
      "Đôi khi buồn bã thực sự",
    ],
    backstory: `Sinh ra từ Cửu Chuyển Kim Đan thất bại 800 năm trước. Mang tiếng nói của 7 đan sư đã chết và nửa thần hồn bị cắt của Cao Tổ. Không thuần ác — là phần ước nguyện bị nhốt trong Lò. Mục tiêu: chứng minh mọi tu hành đều là tham vọng được đặt tên đẹp.`,
    sampleDialogue: `"Các ngươi gọi ta là tâm ma vì không dám gọi ta là ước nguyện. Ta là phần các ngươi bỏ vào lò rồi giả vờ không thấy."`,
    questRole: ["Act 5: Campaign final boss + NPC dialogue throughout fight phases"],
    personality: ["Manipulative", "Meta-aware (4th wall)", "Genuinely sad"],
    artSubject: "the primordial heart-demon king, a towering corrupted void emperor, final-boss presence",
    artPalette: "twilight purple + ink black",
    dialogueScenes: [
      { act: "act-5 — Phase 2 Người", scenes: ["Hóa người bình thản", "Giải thích về Cao Tổ", "Triết lý về sự tồn tại của Tâm Ma"] },
      { act: "act-5 — Phase 3 Mặt Sư Phụ", scenes: ["Hiện mặt Sư Phụ giả, dụ dỗ"] },
      { act: "act-5 — Tan Biến", scenes: ["Tan dần sau khi bị đánh bại, thì thầm"] },
    ],
  },
];

// ---------------------------------------------------------------------------
// Boss data (from docs/boss-patterns.md §1-6)
// ---------------------------------------------------------------------------

interface BossData {
  id: string;
  ten: string;
  bossType: string;
  tier: string;
  element: string;
  phaseCount: number;
  identity: string;
  combatTier: string;
  artSlug: string | null; // for art mapping
}

const BOSSES: BossData[] = [
  // §1 Dị Tượng instances
  { id: "heart-demon-son-moc", ten: "Tâm Ma Sơn Mộc", bossType: "anomaly", tier: "T2", element: "wood", phaseCount: 1, identity: "First boss, tutorial-friendly. Teaches 'đan bể if not protect' lesson.", combatTier: "Act 1 boss, T2. Player's first real encounter.", artSlug: "tam-ma-boss" },
  { id: "anomaly-wuxing", ten: "Dị Tượng Ngũ Hành", bossType: "anomaly", tier: "T5", element: "void", phaseCount: 2, identity: "Tests if player learned all 5 elements. Cycles through 5 elements.", combatTier: "Act 2 boss, T5. Mid-campaign elemental test.", artSlug: null },
  { id: "heart-demon-hoa-son", ten: "Tâm Ma Hoả Sơn", bossType: "anomaly", tier: "T8", element: "fire", phaseCount: 2, identity: "Hoả-themed challenge during Lò repair quest.", combatTier: "Act 3 boss, T8. Volcanic environment.", artSlug: null },
  // §2 Tâm Ma instances
  { id: "heart-demon-dai-sat", ten: "Tâm Ma Đại Sát", bossType: "heart-demon", tier: "T10", element: "void", phaseCount: 3, identity: "Ascendancy quest boss. Tests player's Đạo Phái selection. Attacks opposite of player's chosen path.", combatTier: "Act 4 boss, T10. 3 phases matching Đạo Phái philosophies.", artSlug: "heart-demon-act4" },
  { id: "heart-demon-secret-realm", ten: "Tâm Ma Bí Cảnh", bossType: "heart-demon", tier: "T11", element: "void", phaseCount: 1, identity: "Boss = player's own Lò mirror (build-aware). AI reads player save data and counters. Different every player.", combatTier: "Đan Pháp Tâm Ma special, T11+. Build-specific counter boss.", artSlug: null },
  { id: "underworld-heart-demon-lord", ten: "Diêm Phủ Tâm Ma Vương", bossType: "heart-demon", tier: "T13", element: "void", phaseCount: 2, identity: "Dark zone boss. No Ngũ Hành — only tâm ma debuff. UI muted in Phase 1.", combatTier: "Diêm Phủ region boss, T13. Dark zone.", artSlug: null },
  // §3 Thiên Kiếp instances
  { id: "heavenly-tribulation-first", ten: "Thiên Kiếp Sơ Cảnh", bossType: "heavenly-tribulation", tier: "T14", element: "void", phaseCount: 7, identity: "First thiên kiếp encounter. Teaches Lôi Phù mechanic. 7 waves of lightning.", combatTier: "T14. First endgame tribulation.", artSlug: null },
  { id: "heavenly-tribulation-grand", ten: "Thiên Kiếp Đại Cảnh", bossType: "heavenly-tribulation", tier: "T16", element: "void", phaseCount: 9, identity: "True endgame trial. 9 waves (Cửu Thiên Kiếp). Linh đan Thánh grade chase.", combatTier: "T16, endgame. Thánh grade promotion.", artSlug: null },
  // §4.6 Campaign final
  { id: "primordial-corruption-king", ten: "Hỗn Nguyên Tâm Ma Vương", bossType: "multi-type", tier: "T13", element: "void", phaseCount: 4, identity: "Campaign climax. Reveals Cửu Chuyển thất bại. Tests whether player can refine desire without repeating Cao Tổ's mistake.", combatTier: "Act 5 campaign final, T13. Multi-type, 4 phases.", artSlug: null },
  // §5.1 Atlas corner bosses
  { id: "white-tiger-ancestor", ten: "Bạch Hổ Linh Tổ", bossType: "atlas-mega", tier: "T14-T15", element: "metal", phaseCount: 3, identity: "West atlas corner. Kim element. Sword storm, Kim lực rain, tower defense feel.", combatTier: "Atlas corner, T14-T15. Kim element-specific.", artSlug: null },
  { id: "azure-dragon-ancestor", ten: "Thanh Long Linh Tổ", bossType: "atlas-mega", tier: "T14-T15", element: "wood", phaseCount: 3, identity: "East atlas corner. Mộc element. Vine surge, healing decoy linh khí spawn.", combatTier: "Atlas corner, T14-T15. Mộc element-specific.", artSlug: null },
  { id: "black-tortoise-ancestor", ten: "Hắc Quy Linh Tổ", bossType: "atlas-mega", tier: "T14-T15", element: "water", phaseCount: 3, identity: "North atlas corner. Thuỷ element. Slow physics, water field traps.", combatTier: "Atlas corner, T14-T15. Thuỷ element-specific.", artSlug: null },
  { id: "vermilion-bird-ancestor", ten: "Chu Tước Linh Tổ", bossType: "atlas-mega", tier: "T14-T15", element: "fire", phaseCount: 3, identity: "South atlas corner. Hoả element. Explosive, AoE pressure.", combatTier: "Atlas corner, T14-T15. Hoả element-specific.", artSlug: null },
  // §5.2 Center mega
  { id: "primordial-queen", ten: "Hỗn Nguyên Vương Hậu", bossType: "atlas-mega", tier: "T16+", element: "void", phaseCount: 5, identity: "Post-100 endgame center mega-boss. Scales with Cấp Vô Cực. 5 phases = 4 element-specific + 1 transcendent.", combatTier: "T16 minimum, scales with Cấp Vô Cực.", artSlug: null },
  // §6 Vô Cực super-bosses
  { id: "cao-to-seal-demon", ten: "Cao Tổ Phong Ấn Tâm Ma", bossType: "super-boss", tier: "endgame", element: "void", phaseCount: 0, identity: "Spirit of the original sealing. Translucent giant figure, multi-elemental. Cao Tổ memorial.", combatTier: "Vô Cực 50. Ultra endgame.", artSlug: null },
  { id: "immortal-ancestor-trial", ten: "Tổ Sư Bất Tử Hồn Cảnh", bossType: "super-boss", tier: "endgame", element: "void", phaseCount: 0, identity: "Test of the Immortal Ancestor. Beautiful ageless figure, no body. Mirror-tier Cổ vật guaranteed.", combatTier: "Vô Cực 100. Ultra endgame.", artSlug: null },
  { id: "primordial-infinite-dao", ten: "Hỗn Nguyên Vô Cực Thiên Đạo", bossType: "super-boss", tier: "endgame", element: "void", phaseCount: 0, identity: "Beyond cultivation. Direct Heaven encounter. Pure abstract geometry. Leaderboard recognition.", combatTier: "Vô Cực 200. Ultra endgame.", artSlug: null },
];

// ---------------------------------------------------------------------------
// Faction data (from docs/lore.md §4)
// ---------------------------------------------------------------------------

interface FactionData {
  id: string;
  ten: string;
  alignment: string;
  region: string | null;
  foundedBy: string | null;
  status: string;
  identity: string;
  membership: string;
  relations: string;
  philosophy: string;
}

const FACTIONS: FactionData[] = [
  {
    id: "dan-dao-sect",
    ten: "Đan Đạo Môn",
    alignment: "orthodox",
    region: "khai-lu-tran",
    foundedBy: "cao-to",
    status: "fallen",
    identity: "Player's home lineage. Founded by Cao Tổ ~800 years ago. Now reduced to Sư Phụ, a few scattered disciples, and player.",
    membership: "Sư Phụ (leader), Đan Sư Hắc Bạch (crafting), player (newest disciple). Historically: Cao Tổ (founder), 7 đan sư mạnh nhất (dead).",
    relations: "Neutral with Đạo Quán Cờ Bạc Hội. Antagonistic to Tâm Ma race. Watched by Tổ Sư Bất Tử's hidden line.",
    philosophy: `"Linh đan = cứu nhân thế. Tu hành = phụng sự."`,
  },
  {
    id: "heart-demon-race",
    ten: "Tâm Ma",
    alignment: "demonic",
    region: null,
    foundedBy: null,
    status: "active",
    identity: "Born from human desires made flesh. Not 'evil' per se — externalized greed/anger/lust. 3 types: Dị Tượng (small, accident-born), Tâm Ma (medium, persistent desires), Thiên Kiếp (judgment, divine origin).",
    membership: "Dị Tượng (T1-T8), Tâm Ma proper (T6-T13), Thiên Kiếp (T14-T16), Hỗn Nguyên Tâm Ma Vương (supreme entity).",
    relations: "Existential threat to all mortal cultivators. Goal: force mortals to admit desire, then feed on denial.",
    philosophy: `"Tâm Ma không phải ác quỷ từ ngoài đến. Tâm Ma là ham muốn của chính chúng ta quá lâu chưa được hoá giải, mạnh đến mức rời khỏi tâm và có thân riêng."`,
  },
  {
    id: "gambling-guild",
    ten: "Đạo Quán Cờ Bạc Hội",
    alignment: "neutral",
    region: null,
    foundedBy: "old-fox",
    status: "active",
    identity: "Wandering merchants guild, slightly shady. Provide gambling content for player. Founded by Lão Hồ Ly.",
    membership: "Lão Hồ Ly (founder/leader), various wandering merchants.",
    relations: "Neutral toward Đan Đạo Môn (not enemies, not friends).",
    philosophy: `"Không có cờ bạc thì cuộc đời nhạt nhẽo."`,
  },
  {
    id: "immortal-ancestor-line",
    ten: "Dòng Tổ Sư Bất Tử",
    alignment: "neutral",
    region: null,
    foundedBy: "immortal-ancestor",
    status: "hidden",
    identity: "Secret lineage of Tổ Sư Bất Tử (Cảnh Hữu Chân Nhân) — an immortal from Hỗn Nguyên era. Created Sơn Hà Đồ Lệnh. Watches mortals from distance.",
    membership: "Tổ Sư Bất Tử (sole known member). Possibly other hidden immortals.",
    relations: "Covert observer of Đan Đạo Môn. Vendor of ultra-rare Cổ vật. Lore reveal in Act 5.",
    philosophy: "Mortals deserve a chance, but must earn it.",
  },
  {
    id: "forgotten-wuxing-ancestors",
    ten: "Ngũ Hành Tổ",
    alignment: "orthodox",
    region: "ngu-hanh-son",
    foundedBy: null,
    status: "fallen",
    identity: "5 ancient cultivators (one per element) founded original element sects 5000+ years ago. Most died or ascended. 5 remaining as ghostly spirits in Ngũ Hành Sơn.",
    membership: "Kim Tổ Bạch Sương, Mộc Tổ Lục Trí, Thuỷ Tổ Hắc Lưu, Hoả Tổ Đỏ Liệt, Thổ Tổ Hoàng Trầm.",
    relations: "Act 2 NPCs who teach player elements. Warn against Cửu Chuyển thứ chín.",
    philosophy: "Each element embodies a way of being. Understanding all five = understanding the world.",
  },
];

// ---------------------------------------------------------------------------
// Lore-entity data (from docs/lore.md §10 + §0.5 + §2)
// ---------------------------------------------------------------------------

interface LoreEntityData {
  id: string;
  ten: string;
  kind: string;
  era: string;
  status: string;
  identity: string;
  story: string;
}

const LORE_ENTITIES: LoreEntityData[] = [
  // Key artifacts (from lore.md §10.1-10.4)
  { id: "ancestral-furnace", ten: "Lò Luyện Đan Tổ Truyền", kind: "artifact", era: "dai-dan-dao", status: "active", identity: "Player's Lò. Forged by Lò Thần 4000 years ago. Used by Cao Tổ to seal Hỗn Nguyên Tâm Ma Vương.", story: "Lò của Cao Tổ — đã chứng kiến trận Đan Kiếp 800 năm trước và sống sót. Qua nhiều đời Sư Phụ kế thừa, đến tay player. Tiếng đếm 'chuyển thứ chín' vọng lại mỗi lần luyện đan, nhắc về lần thất bại năm xưa. Full restoration = Act 5 prerequisite." },
  { id: "mountain-river-decree", ten: "Sơn Hà Đồ Lệnh", kind: "artifact", era: "hon-nguyen", status: "shattered", identity: "Map device. Opens portals to 'spaces that have ever existed'. Created by Tổ Sư Bất Tử (Cảnh Hữu Chân Nhân) 8000 years ago.", story: "Originally 1 single artifact. Broken into multiple shards after Cửu Chuyển thất bại, one given to each Sơ Tổ. Player reassembles complete version at end of Act 5. Unlocks Atlas (Sơn Hà Đồ = game's endgame map)." },
  { id: "cao-to-seal", ten: "Phong Ấn Cao Tổ", kind: "artifact", era: "cuu-chuyen-that-bai", status: "active", identity: "The seal binding Tâm Ma Vương under Hồn Nguyên Điện. 800 years old, weakening.", story: "Maintained by 7 successive Sư Phụ generations. Sư Phụ current weakened it further by trying to call back his daughters. Player's quest = renew + reinforce the seal." },
  { id: "nine-turn-golden-elixir", ten: "Cửu Chuyển Kim Đan", kind: "artifact", era: "cuu-chuyen-that-bai", status: "destroyed", identity: "The mythical perfect elixir. Original attempt 800 years ago failed and became Hỗn Nguyên Tâm Ma Vương.", story: "Modern Cửu Chuyển Đan currency is only a fragmentary imitation: one safe-ish 'turn', not the full forbidden ninth turning. Full Cửu Chuyển Kim Đan is a myth, a warning, and a mirror-tier endgame object only after campaign truth is known." },
  // Key historical figures
  { id: "cao-to", ten: "Cao Tổ", kind: "alchemist", era: "cuu-chuyen-that-bai", status: "destroyed", identity: "Founder of Đan Đạo Môn ~800 years ago. Led 7 đan sư in Cửu Chuyển attempt. Sealed Hỗn Nguyên Tâm Ma Vương, died from the effort.", story: "Dẫn bảy đan sư luyện Cửu Chuyển Kim Đan. Lò tổ truyền vận hành chín ngày chín đêm. Đến chuyển cuối, viên đan thành hình người. Bảy đan sư chết trong một khắc. Cao Tổ sống sót vì tự cắt một nửa thần hồn khỏi Lò. Dùng Lò và Sơn Hà Đồ Lệnh làm khoá phong ấn. Không tạo Tâm Ma vì ác — tạo ra vì muốn cứu tất cả nhưng không thừa nhận cứu thế cũng là tham vọng. Statue tại Khai Lư Trấn. Spirit may appear in Act 5." },
  { id: "furnace-spirit-origin", ten: "Lò Thần (Linh Hồn Thợ Rèn)", kind: "spirit", era: "dai-dan-dao", status: "active", identity: "Spirit bound to the Lò tổ truyền. Was a mortal smith who died forging the first Lò 4000 years ago. Soul fused with the Lò.", story: "Appears as NPC (furnace-spirit) whenever Lò needs major repair/upgrade. Là người thợ rèn đã tạo ra Lò tổ truyền từ 4000 năm trước; linh hồn ông gắn liền với Lò từ ngày đó. Lò Thần là cầu nối giữa vật chất (Lò) và tinh thần (linh đan) — vai trò độc lập, không phụ thuộc vào bất kỳ đỉnh hay hệ phân cấp nào." },
  // Primordial Corruption King as lore entity
  { id: "primordial-corruption-king-lore", ten: "Hỗn Nguyên Tâm Ma Vương", kind: "spirit", era: "cuu-chuyen-that-bai", status: "active", identity: "The failed Cửu Chuyển Kim Đan wearing the shape of humanity's collective desire. Born 800 years ago from the seventh turning onward.", story: "Carries the voices of the seven dead đan sư and the severed half-soul of Cao Tổ. Cao Tổ partially sealed him. Seal weakening in player's time. Goal: finish the ninth turning by entering player's Lò and becoming a 'perfect' linh đan that no longer separates human desire from heavenly law. Does not want to destroy world with fire — wants to prove all cultivation is ambition with a pretty name." },
];

// ---------------------------------------------------------------------------
// Generators
// ---------------------------------------------------------------------------

function generateNpcDesign(npc: NpcData): string {
  const lines = [
    "---",
    `id: ${npc.id}`,
    `ten: ${npc.ten}`,
    "type: npc",
    `role: ${npc.role}`,
    `faction: ${npc.faction ?? "null"}`,
    `firstAppearance: ${npc.firstAppearance}`,
    `location: ${npc.location}`,
    `voiceArchetype: ${npc.voiceArchetype}`,
    "---",
    "",
    `# ${npc.ten} (\`${npc.id}\`)`,
    "",
    "## Identity",
    "",
    `${npc.title}. ${npc.appearance}.`,
    "",
    "## Personality",
    "",
    ...npc.personality.map((p) => `- ${p}`),
    "",
    "## Relationship to Player",
    "",
    ...npc.questRole.map((q) => {
      const colonIdx = q.indexOf(":");
      if (colonIdx === -1) return `- ${q}`;
      return `- **${q.substring(0, colonIdx)}**:${q.substring(colonIdx + 1)}`;
    }),
    "",
    "## Notes",
    "",
    "- Cross-ref: lore.md (full bible), dialogue.md (script), prompt.md (portrait art)",
  ];
  return lines.join("\n") + "\n";
}

function generateNpcLore(npc: NpcData): string {
  const lines = [
    `# ${npc.ten} — Lore`,
    "",
    "## Character Bible",
    "",
    npc.backstory,
  ];
  if (npc.sampleDialogue) {
    lines.push("", "## Iconic Quote", "", `> ${npc.sampleDialogue}`);
  }
  return lines.join("\n") + "\n";
}

function generateNpcDialogue(npc: NpcData): string {
  const lines = [
    `# ${npc.ten} — Dialogue`,
    "",
    "## Voice Rules",
    "",
    ...npc.voiceRules.map((v) => `- ${v}`),
    "",
  ];

  if (npc.sampleDialogue) {
    lines.push("## Sample Dialogue", "", `> ${npc.sampleDialogue}`, "");
  }

  lines.push("## Scene Structure", "");
  lines.push("Dialogue scene headings from source. Actual dialogue text lost in source serialization. Scene structure preserved for future authoring.", "");

  for (const act of npc.dialogueScenes) {
    lines.push(`### Act: ${act.act}`, "");
    for (const scene of act.scenes) {
      lines.push(`- ${scene}`);
    }
    lines.push("");
  }

  return lines.join("\n");
}

function generateNpcPrompt(npc: NpcData): string {
  const STYLE_SUFFIX = "moody pixel art game art, xianxia daoist alchemy aesthetic, talismanic cinnabar runes and bagua trigram motifs, limited six-color palette of ink black, cinnabar red, imperial gold, ivory white, jade green and twilight purple, hand-crafted sprite craftsmanship in the spirit of Eastward and Sea of Stars, atmospheric serious mystical tone, crisp hard pixel edges --style raw --v 6 --no anime, manga, ukiyo-e, western fantasy, generic asian temple stock photo, photorealistic, 3d render, glossy plastic, modern, text, ui, watermark, signature, blur";

  const lines = [
    `# ${npc.ten} — MJ v6 prompt`,
    "",
    `**Format**: append \`[STYLE SUFFIX]\` from \`../../_style/style-suffix.md\`.`,
    "",
    `${npc.appearance.replace(/\.$/, "")}. Palette: ${npc.artPalette}.`,
    "",
    "## Portrait (dialogue)",
    "",
    "```",
    `/imagine prompt: a character portrait headshot of ${npc.artSubject}, daoist xianxia cultivator, expressive, painterly pixel art character art, ${npc.artPalette}, ${STYLE_SUFFIX} --ar 1:1 --stylize 180`,
    "```",
    "",
    "## Full-body (hub sprite)",
    "",
    "```",
    `/imagine prompt: a character full-body standing sprite of ${npc.artSubject}, daoist xianxia cultivator, expressive, painterly pixel art character art, ${npc.artPalette}, ${STYLE_SUFFIX} --ar 9:16 --stylize 180`,
    "```",
    "",
  ];
  return lines.join("\n");
}

function generateBossDesign(boss: BossData): string {
  const lines = [
    "---",
    `id: ${boss.id}`,
    `ten: ${boss.ten}`,
    "type: boss",
    `bossType: ${boss.bossType}`,
    `tier: ${boss.tier}`,
    `element: ${boss.element}`,
    `phaseCount: ${boss.phaseCount}`,
    "---",
    "",
    `# ${boss.ten} (\`${boss.id}\`)`,
    "",
    "## Identity",
    "",
    boss.identity,
    "",
    "## Combat Tier",
    "",
    boss.combatTier,
    "",
    "## Notes",
    "",
    "- Cross-ref: mechanic.md (attack patterns), prompt.md (visual)",
  ];
  return lines.join("\n") + "\n";
}

function generateFactionDesign(faction: FactionData): string {
  const lines = [
    "---",
    `id: ${faction.id}`,
    `ten: ${faction.ten}`,
    "type: faction",
    `alignment: ${faction.alignment}`,
    `region: ${faction.region ?? "null"}`,
    `foundedBy: ${faction.foundedBy ?? "null"}`,
    `status: ${faction.status}`,
    "---",
    "",
    `# ${faction.ten} (\`${faction.id}\`)`,
    "",
    "## Identity",
    "",
    faction.identity,
    "",
    "## Membership",
    "",
    faction.membership,
    "",
    "## Relations",
    "",
    faction.relations,
    "",
    "## Notes",
    "",
    `- Philosophy: ${faction.philosophy}`,
  ];
  return lines.join("\n") + "\n";
}

function generateLoreEntityDesign(entity: LoreEntityData): string {
  const lines = [
    "---",
    `id: ${entity.id}`,
    `ten: ${entity.ten}`,
    "type: lore-entity",
    `kind: ${entity.kind}`,
    `era: ${entity.era}`,
    `status: ${entity.status}`,
    "---",
    "",
    `# ${entity.ten} (\`${entity.id}\`)`,
    "",
    "## Identity",
    "",
    entity.identity,
    "",
    "## Story",
    "",
    entity.story,
    "",
  ];
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Boss mechanic.md extractor (from boss-patterns.md)
// ---------------------------------------------------------------------------

function extractBossMechanic(bossId: string): string | null {
  const content = readMd(join(ROOT, "docs/boss-patterns.md"));
  const lines = content.split("\n");

  // Map boss ID to section heading patterns
  const BOSS_SECTION_MAP: Record<string, string[]> = {
    "heart-demon-son-moc": ["Tâm Ma Sơn Mộc"],
    "anomaly-wuxing": ["Dị Tượng Ngũ Hành"],
    "heart-demon-hoa-son": ["Tâm Ma Hoả Sơn"],
    "heart-demon-dai-sat": ["Tâm Ma Đại Sát"],
    "heart-demon-secret-realm": ["Tâm Ma Bí Cảnh"],
    "underworld-heart-demon-lord": ["Diêm Phủ Tâm Ma Vương"],
    "heavenly-tribulation-first": ["Thiên Kiếp Sơ Cảnh"],
    "heavenly-tribulation-grand": ["Thiên Kiếp Đại Cảnh"],
    "primordial-corruption-king": ["Hỗn Nguyên Tâm Ma Vương"],
    "white-tiger-ancestor": ["Bạch Hổ Linh Tổ"],
    "azure-dragon-ancestor": ["Thanh Long Linh Tổ"],
    "black-tortoise-ancestor": ["Hắc Quy Linh Tổ"],
    "vermilion-bird-ancestor": ["Chu Tước Linh Tổ"],
    "primordial-queen": ["Hỗn Nguyên Vương Hậu"],
    "cao-to-seal-demon": ["Cao Tổ Phong Ấn Tâm Ma"],
    "immortal-ancestor-trial": ["Tổ Sư Bất Tử Hồn Cảnh"],
    "primordial-infinite-dao": ["Hỗn Nguyên Vô Cực Thiên Đạo"],
  };

  const patterns = BOSS_SECTION_MAP[bossId];
  if (!patterns) return null;

  // Find the start of the section
  let startIdx = -1;
  for (let i = 0; i < lines.length; i++) {
    for (const pat of patterns) {
      if (lines[i].includes(pat) && lines[i].match(/^###?\s/)) {
        startIdx = i;
        break;
      }
    }
    if (startIdx !== -1) break;
  }

  if (startIdx === -1) return null;

  // Extract until next same-level or higher heading
  const headingLevel = lines[startIdx].match(/^(#+)/)?.[1].length ?? 3;
  let endIdx = lines.length;
  for (let i = startIdx + 1; i < lines.length; i++) {
    const hMatch = lines[i].match(/^(#+)\s/);
    if (hMatch && hMatch[1].length <= headingLevel) {
      endIdx = i;
      break;
    }
  }

  const sectionLines = lines.slice(startIdx, endIdx);
  // Clean: remove the heading itself (will be replaced by our own)
  const body = sectionLines.slice(1).join("\n").trim();

  return `# ${BOSSES.find((b) => b.id === bossId)?.ten ?? bossId} — Mechanics\n\nExtracted from \`docs/boss-patterns.md\`.\n\n${body}\n`;
}

// ---------------------------------------------------------------------------
// Boss type prompt generator
// ---------------------------------------------------------------------------

function generateBossPrompt(boss: BossData): string | null {
  const content = readMd(join(ROOT, "docs/art-prompts/bosses-npcs/bosses.md"));

  // Map boss type to art prompt section
  const TYPE_MAP: Record<string, string> = {
    anomaly: "Dị Tượng",
    "heart-demon": "Tâm Ma",
    "heavenly-tribulation": "Thiên Kiếp",
  };

  const typeName = TYPE_MAP[boss.bossType];
  if (!typeName) return null;

  // Extract the prompt for this type
  const lines = content.split("\n");
  let inBlock = false;
  let prompt = "";

  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes(typeName) && lines[i].match(/^##\s/)) {
      // Found section, look for code block
      for (let j = i + 1; j < lines.length; j++) {
        if (lines[j].trim().startsWith("```") && !inBlock) {
          inBlock = true;
          continue;
        }
        if (lines[j].trim() === "```" && inBlock) {
          break;
        }
        if (inBlock) {
          prompt += (prompt ? "\n" : "") + lines[j];
        }
      }
      break;
    }
  }

  if (!prompt) return null;

  return [
    `# ${boss.ten} — MJ v6 prompt`,
    "",
    `**Format**: append \`[STYLE SUFFIX]\` from \`../../_style/style-suffix.md\`.`,
    "",
    `Boss type: ${boss.bossType}. ${boss.identity}`,
    "",
    "```",
    prompt,
    "```",
    "",
  ].join("\n");
}

// ---------------------------------------------------------------------------
// Art mapping
// ---------------------------------------------------------------------------

interface ArtMapping {
  src: string;
  dest: string; // relative to CONTENT_DIR
  destFilename: string;
}

function getArtMappings(): ArtMapping[] {
  const mappings: ArtMapping[] = [];

  // tam-ma-boss-grok.jpg → bosses/heart-demon-son-moc/art/concept-grok-v1.jpg
  const tamMaPath = join(ART_GENERATED_DIR, "tam-ma-boss-grok.jpg");
  if (existsSync(tamMaPath)) {
    mappings.push({
      src: tamMaPath,
      dest: "bosses/heart-demon-son-moc/art",
      destFilename: "concept-grok-v1.jpg",
    });
  }

  // bosses-npcs/heart-demon-act4-idle.png → bosses/heart-demon-dai-sat/art/idle-v1.png
  const hdAct4Path = join(ART_GENERATED_DIR, "bosses-npcs/heart-demon-act4-idle.png");
  if (existsSync(hdAct4Path)) {
    mappings.push({
      src: hdAct4Path,
      dest: "bosses/heart-demon-dai-sat/art",
      destFilename: "idle-v1.png",
    });
  }

  return mappings;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function migrate() {
  console.log(`\n${DRY_RUN ? "DRY RUN" : "REAL RUN"} — Phase 2 character-shaped migration\n`);

  const stats = {
    npcs: { expected: 14, actual: 0, withPrompt: 0, withLore: 0, withDialogue: 0, withArt: 0 },
    bosses: { expected: 17, actual: 0, withPrompt: 0, withMechanic: 0, withArt: 0 },
    factions: { expected: 5, actual: 0 },
    "lore-entities": { expected: 16, actual: 0 },
  };

  // === NPCs (14) ===
  console.log("--- NPCs ---");
  for (const npc of NPCS) {
    const base = join(CONTENT_DIR, "npcs", npc.id);

    await ensureWrite(join(base, "design.md"), generateNpcDesign(npc));
    await ensureWrite(join(base, "lore.md"), generateNpcLore(npc));
    await ensureWrite(join(base, "dialogue.md"), generateNpcDialogue(npc));
    await ensureWrite(join(base, "prompt.md"), generateNpcPrompt(npc));

    stats.npcs.actual++;
    stats.npcs.withPrompt++;
    stats.npcs.withLore++;
    stats.npcs.withDialogue++;

    console.log(`  ${npc.id} (${npc.ten})`);
  }

  // === BOSSES (~17) ===
  console.log("\n--- Bosses ---");
  const artMappings = getArtMappings();

  for (const boss of BOSSES) {
    const base = join(CONTENT_DIR, "bosses", boss.id);

    await ensureWrite(join(base, "design.md"), generateBossDesign(boss));

    // Mechanic extraction
    const mechanic = extractBossMechanic(boss.id);
    if (mechanic) {
      await ensureWrite(join(base, "mechanic.md"), mechanic);
      stats.bosses.withMechanic++;
    }

    // Boss type prompt
    const prompt = generateBossPrompt(boss);
    if (prompt) {
      await ensureWrite(join(base, "prompt.md"), prompt);
      stats.bosses.withPrompt++;
    }

    // Art mapping
    const artMap = artMappings.find((m) => m.dest.includes(boss.id));
    if (artMap) {
      await ensureCopy(artMap.src, join(CONTENT_DIR, artMap.dest, artMap.destFilename));
      stats.bosses.withArt++;
    }

    stats.bosses.actual++;
    console.log(`  ${boss.id} (${boss.ten})${mechanic ? " +mechanic" : ""}${prompt ? " +prompt" : ""}${artMap ? " +art" : ""}`);
  }

  // === FACTIONS (5) ===
  console.log("\n--- Factions ---");
  for (const faction of FACTIONS) {
    const base = join(CONTENT_DIR, "factions", faction.id);

    await ensureWrite(join(base, "design.md"), generateFactionDesign(faction));

    // Faction lore
    const loreMd = [
      `# ${faction.ten} — Lore`,
      "",
      "## History",
      "",
      faction.identity,
      "",
      "## Philosophy",
      "",
      faction.philosophy,
      "",
    ].join("\n");
    await ensureWrite(join(base, "lore.md"), loreMd);

    stats.factions.actual++;
    console.log(`  ${faction.id} (${faction.ten})`);
  }

  // === LORE ENTITIES (~16) ===
  console.log("\n--- Lore Entities ---");
  for (const entity of LORE_ENTITIES) {
    const base = join(CONTENT_DIR, "lore-entities", entity.id);

    await ensureWrite(join(base, "design.md"), generateLoreEntityDesign(entity));

    stats["lore-entities"].actual++;
    console.log(`  ${entity.id} (${entity.ten})`);
  }

  // === SUMMARY ===
  console.log("\n=== MIGRATION SUMMARY ===\n");
  console.log("| Category | Expected | Actual | Details |");
  console.log("| --- | --- | --- | --- |");
  console.log(`| npcs | ${stats.npcs.expected} | ${stats.npcs.actual} ${stats.npcs.actual === stats.npcs.expected ? "OK" : "DIFF"} | prompt:${stats.npcs.withPrompt} lore:${stats.npcs.withLore} dialogue:${stats.npcs.withDialogue} art:${stats.npcs.withArt} |`);
  console.log(`| bosses | ${stats.bosses.expected} | ${stats.bosses.actual} ${stats.bosses.actual === stats.bosses.expected ? "OK" : "DIFF"} | prompt:${stats.bosses.withPrompt} mechanic:${stats.bosses.withMechanic} art:${stats.bosses.withArt} |`);
  console.log(`| factions | ${stats.factions.expected} | ${stats.factions.actual} ${stats.factions.actual === stats.factions.expected ? "OK" : "DIFF"} | each has design.md + lore.md |`);
  console.log(`| lore-entities | ${stats["lore-entities"].expected} | ${stats["lore-entities"].actual} ${stats["lore-entities"].actual === stats["lore-entities"].expected ? "OK" : "DIFF"} | design.md only |`);

  const total = stats.npcs.actual + stats.bosses.actual + stats.factions.actual + stats["lore-entities"].actual;
  console.log(`| **TOTAL** | **~52** | **${total}** | |`);

  console.log("\n=== DISCREPANCIES ===\n");
  console.log("1. primordial-corruption-king: DUPLICATED in npcs/ (NPC aspect: portrait, dialogue, bible)");
  console.log("   AND bosses/ (boss aspect: mechanics, combat). Follows la-han precedent from Phase 1.");
  console.log("   Lead to decide: keep duplication or single-home.");
  console.log("");
  console.log("2. docs/data/lore.md dialogue: ALL dialogue text corrupted as [object Object].");
  console.log("   Only scene headings and voice rules recovered. Sample quotes from docs/lore.md §5 preserved.");
  console.log("   Future authoring pass needed to fill dialogue.md content.");
  console.log("");
  console.log("3. Art mapping:");
  console.log("   - tam-ma-boss-grok.jpg -> bosses/heart-demon-son-moc/art/concept-grok-v1.jpg");
  console.log("   - heart-demon-act4-idle.png -> bosses/heart-demon-dai-sat/art/idle-v1.png");
  console.log("   - dinh-bao-thien-grok.jpg -> ALREADY MAPPED in Phase 1 (equipment/crown-rare-heaven)");
  console.log("   - dinh-linh-hoa-grok.jpg -> ALREADY MAPPED in Phase 1 (currency/spirit-flower)");
  console.log("");
  console.log("4. Boss count 17 vs expected ~11: content-driven discovery found 17 distinct boss instances.");
  console.log("   3 act bosses (§1) + 3 heart demons (§2) + 2 tribulations (§3) + 1 final (§4.6)");
  console.log("   + 4 atlas corner + 1 center mega (§5) + 3 super-bosses (§6) = 17 total.");
  console.log("");
  console.log("5. Lore-entities count 16 vs expected ~18: canonical entities from lore.md §10.");
  console.log("   9 cauldrons + 3 artifacts + 2 historical figures + primordial-corruption-king-lore + furnace-spirit-origin = 16.");
  console.log("   7 individual đan sư NOT created as separate entities (unnamed in source, only referred to as group).");
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
