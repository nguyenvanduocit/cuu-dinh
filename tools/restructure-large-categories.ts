#!/usr/bin/env bun
/**
 * restructure-large-categories.ts — B3 migration cho cascade hierarchy #32
 *
 * Restructures 4 large category (>50 entity) thành sub-folder Tier 3:
 * - items/        → 12 sub: cauldron, statue, talisman, fan, bead, lantern,
 *                          inkstone, box, vase, sword, arhat, misc
 * - affixes/      → 3 sub: prefix, suffix, implicit (from frontmatter `category`)
 * - passive-tree/ → 5 sub: water, fire, wood, metal, earth (from frontmatter `element`)
 * - currency/     → 6 sub: main, essence, corruption-mod, mechanic-shifter,
 *                          drop-bias, boss-modifier (from frontmatter `category`)
 *
 * Frontmatter `id` field stays unchanged — chỉ folder PATH đổi. Cross-references
 * dùng id slug → không impact.
 *
 * Usage:
 *   bun tools/restructure-large-categories.ts --dry-run                # preview tất cả
 *   bun tools/restructure-large-categories.ts --dry-run --cat=items    # preview 1 cat
 *   bun tools/restructure-large-categories.ts                          # real run tất cả
 *   bun tools/restructure-large-categories.ts --cat=items              # real 1 cat
 */

import { readdir, rename, mkdir } from "node:fs/promises";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";

const ROOT = join(import.meta.dir, "..");
const CONTENT_DIR = join(ROOT, "docs/content");

const DRY_RUN = process.argv.includes("--dry-run");
const ONLY_CAT = process.argv.find((a) => a.startsWith("--cat="))?.split("=")[1];

// ---------------------------------------------------------------------------
// Frontmatter parse
// ---------------------------------------------------------------------------

function readFrontmatter(path: string): Record<string, unknown> | null {
  const content = readFileSync(path, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  return parseYaml(match[1]) as Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// Category configs
// ---------------------------------------------------------------------------

const ITEMS_KNOWN_SUFFIX = new Set([
  "cauldron",
  "statue",
  "talisman",
  "fan",
  "bead",
  "lantern",
  "inkstone",
  "box",
  "vase",
  "sword",
]);

type CategoryConfig = {
  cat: string;
  classify: (id: string, fm: Record<string, unknown>) => string;
  allowedSubs: string[];
};

const CONFIGS: CategoryConfig[] = [
  {
    cat: "items",
    classify: (id) => {
      // arhat-* prefix takes precedence over suffix
      if (id.startsWith("arhat-")) return "arhat";
      const parts = id.split("-");
      const last = parts[parts.length - 1] ?? "";
      if (last === "saber") return "sword"; // merge saber into sword
      if (ITEMS_KNOWN_SUFFIX.has(last)) return last;
      return "misc";
    },
    allowedSubs: [
      "cauldron",
      "statue",
      "talisman",
      "fan",
      "bead",
      "lantern",
      "inkstone",
      "box",
      "vase",
      "sword",
      "arhat",
      "misc",
    ],
  },
  {
    cat: "affixes",
    classify: (_id, fm) => String(fm.category ?? "implicit"),
    allowedSubs: ["prefix", "suffix", "implicit"],
  },
  {
    cat: "passive-tree",
    classify: (_id, fm) => String(fm.element ?? "neutral"),
    allowedSubs: ["water", "fire", "wood", "metal", "earth", "neutral"],
  },
  {
    cat: "currency",
    classify: (_id, fm) => String(fm.category ?? "main"),
    allowedSubs: [
      "main",
      "essence",
      "corruption-mod",
      "mechanic-shifter",
      "drop-bias",
      "boss-modifier",
    ],
  },
];

// ---------------------------------------------------------------------------
// Process
// ---------------------------------------------------------------------------

type Op = {
  from: string;
  to: string;
  sub: string;
  id: string;
  warn?: string;
};

async function processCategory(cfg: CategoryConfig): Promise<void> {
  const catDir = join(CONTENT_DIR, cfg.cat);
  if (!existsSync(catDir)) {
    console.log(`\n=== ${cfg.cat} — NOT FOUND, skip ===`);
    return;
  }
  const entries = await readdir(catDir, { withFileTypes: true });

  // Skip entries that are already sub-folder (idempotent) or non-entity files
  const entityDirs = entries.filter(
    (e) => e.isDirectory() && !cfg.allowedSubs.includes(e.name)
  );

  const ops: Op[] = [];

  for (const entry of entityDirs) {
    const id = entry.name;
    const designPath = join(catDir, id, "design.md");
    if (!existsSync(designPath)) {
      ops.push({ from: id, to: "", sub: "", id, warn: "missing design.md" });
      continue;
    }
    const fm = readFrontmatter(designPath);
    if (!fm) {
      ops.push({
        from: id,
        to: "",
        sub: "",
        id,
        warn: "missing or invalid frontmatter",
      });
      continue;
    }
    if (fm.id !== id) {
      ops.push({
        from: id,
        to: "",
        sub: "",
        id,
        warn: `frontmatter id "${String(fm.id)}" mismatch folder "${id}"`,
      });
      continue;
    }
    const sub = cfg.classify(id, fm);
    if (!cfg.allowedSubs.includes(sub)) {
      ops.push({
        from: id,
        to: "",
        sub,
        id,
        warn: `classify returned unknown sub "${sub}"`,
      });
      continue;
    }
    ops.push({
      from: join(catDir, id),
      to: join(catDir, sub, id),
      sub,
      id,
    });
  }

  // Summary
  console.log(`\n=== ${cfg.cat} (${entityDirs.length} entity) ===`);
  const bySub = new Map<string, number>();
  for (const op of ops) {
    if (op.warn) continue;
    bySub.set(op.sub, (bySub.get(op.sub) ?? 0) + 1);
  }
  const sortedSubs = [...bySub.entries()].sort((a, b) => b[1] - a[1]);
  for (const [sub, count] of sortedSubs) {
    console.log(`  ${cfg.cat}/${sub}/ ← ${count} entity`);
  }
  const warnings = ops.filter((o) => o.warn);
  if (warnings.length > 0) {
    console.log(`\n  ⚠ ${warnings.length} warning(s):`);
    for (const w of warnings) {
      console.log(`    - ${w.id}: ${w.warn}`);
    }
  }
  // Sample 3 ops cho mỗi sub để verify naming
  if (DRY_RUN) {
    console.log(`\n  Sample ops (3 per sub):`);
    const samplesBySub = new Map<string, Op[]>();
    for (const op of ops) {
      if (op.warn) continue;
      const arr = samplesBySub.get(op.sub) ?? [];
      if (arr.length < 3) {
        arr.push(op);
        samplesBySub.set(op.sub, arr);
      }
    }
    for (const [sub, samples] of samplesBySub) {
      for (const s of samples) {
        console.log(`    ${s.id} → ${cfg.cat}/${sub}/${s.id}`);
      }
    }
    console.log(`  (dry-run, no mv executed)`);
    return;
  }

  // Real run: create sub-dirs + mv
  for (const sub of bySub.keys()) {
    await mkdir(join(catDir, sub), { recursive: true });
  }
  let count = 0;
  for (const op of ops) {
    if (op.warn) continue;
    await rename(op.from, op.to);
    count++;
  }
  console.log(`  ✓ ${count} folder mv done`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

const cats = ONLY_CAT ? CONFIGS.filter((c) => c.cat === ONLY_CAT) : CONFIGS;

if (cats.length === 0) {
  console.error(
    `Unknown --cat. Available: ${CONFIGS.map((c) => c.cat).join(", ")}`
  );
  process.exit(1);
}

console.log(
  `Restructure ${DRY_RUN ? "[DRY RUN]" : "[REAL]"} — ${cats.map((c) => c.cat).join(", ")}`
);
for (const cfg of cats) {
  await processCategory(cfg);
}
console.log(`\nDone.`);
