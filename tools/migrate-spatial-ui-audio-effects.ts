#!/usr/bin/env bun
/**
 * migrate-spatial-ui-audio-effects.ts — Phase 4 validation script
 *
 * Validates 7 categories migrated in Phase 4:
 *   regions (10), arenas (3), screens (13), tracks (17),
 *   sfx (1 table), effects (1 table), icons (17 bundle)
 *
 * Checks:
 *   1. Entity counts per category
 *   2. Frontmatter id matches folder name
 *   3. Cross-refs resolve to existing Phase 1+2+3 entities
 *   4. Required files present (design.md for bundles)
 *   5. SFX/effects are table files (not bundles)
 *
 * Usage:
 *   bun tools/migrate-spatial-ui-audio-effects.ts
 */

import { readdirSync, readFileSync, existsSync, statSync } from "node:fs";
import { join } from "node:path";

const ROOT = join(import.meta.dir, "..");
const CONTENT = join(ROOT, "docs/content");

let errors: string[] = [];
let warnings: string[] = [];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function listEntityDirs(category: string): string[] {
  const catDir = join(CONTENT, category);
  if (!existsSync(catDir)) return [];
  return readdirSync(catDir).filter((f) => {
    const fp = join(catDir, f);
    return statSync(fp).isDirectory() && !f.startsWith("_") && !f.startsWith(".");
  });
}

function extractFrontmatter(filePath: string): Record<string, string> | null {
  if (!existsSync(filePath)) return null;
  const content = readFileSync(filePath, "utf-8");
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return null;
  const fm: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const colon = line.indexOf(":");
    if (colon > 0) {
      fm[line.substring(0, colon).trim()] = line.substring(colon + 1).trim();
    }
  }
  return fm;
}

function entityExists(category: string, slug: string): boolean {
  return existsSync(join(CONTENT, category, slug, "design.md"));
}

// ---------------------------------------------------------------------------
// Validate bundle category
// ---------------------------------------------------------------------------

function validateBundleCategory(
  category: string,
  expectedMin: number,
  expectedMax: number,
  requiredFiles: string[] = ["design.md"],
) {
  const entities = listEntityDirs(category);
  const count = entities.length;

  if (count < expectedMin || count > expectedMax) {
    errors.push(
      `${category}: count ${count} outside expected range [${expectedMin}, ${expectedMax}]`,
    );
  } else {
    console.log(`  ${category}: ${count} entities (expected ${expectedMin}-${expectedMax}) OK`);
  }

  for (const id of entities) {
    const dir = join(CONTENT, category, id);

    // Check required files
    for (const file of requiredFiles) {
      if (!existsSync(join(dir, file))) {
        errors.push(`${category}/${id}: missing required ${file}`);
      }
    }

    // Check frontmatter id matches folder name
    const designPath = join(dir, "design.md");
    if (existsSync(designPath)) {
      const fm = extractFrontmatter(designPath);
      if (!fm) {
        errors.push(`${category}/${id}/design.md: no frontmatter found`);
      } else if (fm.id !== id) {
        errors.push(
          `${category}/${id}/design.md: frontmatter id="${fm.id}" does not match folder "${id}"`,
        );
      }
    }
  }

  return entities;
}

// ---------------------------------------------------------------------------
// Validate table file
// ---------------------------------------------------------------------------

function validateTableFile(category: string, fileName: string) {
  const filePath = join(CONTENT, category, fileName);
  if (!existsSync(filePath)) {
    errors.push(`${category}/${fileName}: file not found`);
    return;
  }
  const content = readFileSync(filePath, "utf-8");
  const tableRows = content.split("\n").filter((l) => l.startsWith("|") && !l.startsWith("|---") && !l.startsWith("| id"));
  console.log(`  ${category}/${fileName}: exists, ~${tableRows.length} data rows`);

  // Check no per-entity subdirectories exist (table exception)
  const dirs = listEntityDirs(category);
  if (dirs.length > 0) {
    warnings.push(
      `${category}: table exception but found ${dirs.length} entity subdirectories: ${dirs.join(", ")}`,
    );
  }
}

// ---------------------------------------------------------------------------
// Cross-ref validation
// ---------------------------------------------------------------------------

function validateRegionCrossRefs(regions: string[]) {
  // Check NPC location values resolve to regions
  const npcDirs = listEntityDirs("npcs");
  for (const npcId of npcDirs) {
    const fm = extractFrontmatter(join(CONTENT, "npcs", npcId, "design.md"));
    if (fm?.location && fm.location !== "null") {
      const loc = fm.location.replace(/"/g, "");
      if (!regions.includes(loc)) {
        warnings.push(
          `npcs/${npcId}: location="${loc}" does not match any region folder. Region folders: ${regions.join(", ")}`,
        );
      }
    }
  }
}

function validateArenaCrossRefs() {
  // Check arena hostsBossType matches existing boss bossType values
  const arenaDirs = listEntityDirs("arenas");
  const bossDirs = listEntityDirs("bosses");
  const bossTypes = new Set<string>();
  for (const bossId of bossDirs) {
    const fm = extractFrontmatter(join(CONTENT, "bosses", bossId, "design.md"));
    if (fm?.bossType) bossTypes.add(fm.bossType);
  }

  for (const arenaId of arenaDirs) {
    const fm = extractFrontmatter(join(CONTENT, "arenas", arenaId, "design.md"));
    if (fm?.hostsBossType && !bossTypes.has(fm.hostsBossType)) {
      warnings.push(
        `arenas/${arenaId}: hostsBossType="${fm.hostsBossType}" not found in any boss bossType. Known types: ${[...bossTypes].join(", ")}`,
      );
    }
  }
}

function validateScreenFiles() {
  const screenDirs = listEntityDirs("screens");
  for (const screenId of screenDirs) {
    const fm = extractFrontmatter(join(CONTENT, "screens", screenId, "design.md"));
    if (fm?.screenKind === "both" || fm?.screenKind === "ui-wireframe") {
      if (!existsSync(join(CONTENT, "screens", screenId, "wireframe.md"))) {
        warnings.push(`screens/${screenId}: screenKind=${fm.screenKind} but no wireframe.md`);
      }
    }
    if (fm?.screenKind === "both" || fm?.screenKind === "concept-scene") {
      if (!existsSync(join(CONTENT, "screens", screenId, "prompt.md"))) {
        warnings.push(`screens/${screenId}: screenKind=${fm.screenKind} but no prompt.md`);
      }
    }
  }
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

console.log("=== Phase 4 Validation: Spatial / UI / Audio / Effects ===\n");

console.log("1. Entity counts:");
const regions = validateBundleCategory("regions", 8, 12);
const arenas = validateBundleCategory("arenas", 3, 3);
const screens = validateBundleCategory("screens", 13, 30);
const tracks = validateBundleCategory("tracks", 15, 25);
const icons = validateBundleCategory("icons", 15, 25);

console.log("\n2. Table exceptions:");
validateTableFile("sfx", "table.md");
validateTableFile("effects", "table.md");

console.log("\n3. Cross-ref validation:");
validateRegionCrossRefs(regions);
console.log("  Region ↔ NPC location: checked");
validateArenaCrossRefs();
console.log("  Arena ↔ Boss type: checked");
validateScreenFiles();
console.log("  Screen wireframe/prompt presence: checked");

console.log("\n4. Frontmatter id ↔ folder match: checked inline above");

// Summary
console.log("\n=== SUMMARY ===");
console.log(
  `Entities: regions=${regions.length}, arenas=${arenas.length}, screens=${screens.length}, tracks=${tracks.length}, icons=${icons.length}`,
);
console.log(`Tables: sfx/table.md, effects/table.md`);
console.log(`Total Phase 4 entities: ${regions.length + arenas.length + screens.length + tracks.length + icons.length} bundled + 2 tables`);

if (errors.length > 0) {
  console.log(`\nERRORS (${errors.length}):`);
  for (const e of errors) console.log(`  ❌ ${e}`);
}
if (warnings.length > 0) {
  console.log(`\nWARNINGS (${warnings.length}):`);
  for (const w of warnings) console.log(`  ⚠️  ${w}`);
}
if (errors.length === 0 && warnings.length === 0) {
  console.log("\n✅ All checks passed. Zero errors, zero warnings.");
}

process.exit(errors.length > 0 ? 1 : 0);
