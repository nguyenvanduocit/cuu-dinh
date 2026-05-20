#!/usr/bin/env bun
/**
 * migrate-acts.ts — Phase 3 validation script
 *
 * Validates the narrative-shaped migration: 5 Acts with nested nodes
 * under docs/content/acts/.
 *
 * Unlike Phase 1/2 scripts which generate content from tables,
 * Phase 3 content is hand-written (narrative prose doesn't parse mechanically).
 * This script validates structure, cross-refs, and reports counts.
 *
 * Checks:
 *   1. Every act-N/ has overview.md + boss.md
 *   2. Every node folder has narrative.md (minimum)
 *   3. Frontmatter id matches folder name
 *   4. All cross-ref links (../../bosses/<slug>/, ../../npcs/<slug>/) resolve
 *   5. nodeType is valid enum value
 *   6. Node count per Act + breakdown by nodeType
 *
 * Usage:
 *   bun tools/migrate-acts.ts              # full validation
 *   bun tools/migrate-acts.ts --summary    # counts only
 */

import { readFileSync, existsSync, readdirSync, statSync } from "node:fs";
import { join, basename } from "node:path";

const ROOT = join(import.meta.dir, "..");
const CONTENT_DIR = join(ROOT, "docs/content");
const ACTS_DIR = join(CONTENT_DIR, "acts");

const SUMMARY_ONLY = process.argv.includes("--summary");

const VALID_NODE_TYPES = new Set([
  "tutorial-fight",
  "story-fight",
  "npc-encounter",
  "optional-side",
  "boss-prep",
]);

const errors: string[] = [];
const warnings: string[] = [];

interface NodeInfo {
  id: string;
  actId: string;
  nodeType: string;
  hasScript: boolean;
  hasNarrative: boolean;
}

interface ActInfo {
  id: string;
  hasOverview: boolean;
  hasBoss: boolean;
  nodes: NodeInfo[];
}

// ---------------------------------------------------------------------------
// Parse frontmatter
// ---------------------------------------------------------------------------

function parseFrontmatter(content: string): Record<string, string> {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const fm: Record<string, string> = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      let val = line.slice(idx + 1).trim();
      // Strip surrounding quotes
      if (val.startsWith('"') && val.endsWith('"')) {
        val = val.slice(1, -1);
      }
      fm[key] = val;
    }
  }
  return fm;
}

// ---------------------------------------------------------------------------
// Extract cross-ref links from markdown
// ---------------------------------------------------------------------------

function extractCrossRefs(content: string): string[] {
  const refs: string[] = [];
  // Match patterns like ../../bosses/<slug>/ or ../../../../npcs/<slug>/
  const regex = /(?:\.\.\/)+(?:bosses|npcs|maps|lore-entities|factions|ascendancies)\/([a-z0-9-]+)\//g;
  let m: RegExpExecArray | null;
  while ((m = regex.exec(content)) !== null) {
    // Extract the category + slug
    const fullMatch = m[0];
    // Normalize to content-relative path
    const catSlugMatch = fullMatch.match(/(bosses|npcs|maps|lore-entities|factions|ascendancies)\/([a-z0-9-]+)/);
    if (catSlugMatch) {
      refs.push(`${catSlugMatch[1]}/${catSlugMatch[2]}`);
    }
  }
  return [...new Set(refs)];
}

// ---------------------------------------------------------------------------
// Validate one Act
// ---------------------------------------------------------------------------

function validateAct(actDir: string): ActInfo {
  const actId = basename(actDir);
  const info: ActInfo = {
    id: actId,
    hasOverview: false,
    hasBoss: false,
    nodes: [],
  };

  // Check overview.md
  const overviewPath = join(actDir, "overview.md");
  if (existsSync(overviewPath)) {
    info.hasOverview = true;
    const content = readFileSync(overviewPath, "utf-8");
    const fm = parseFrontmatter(content);
    if (fm.id && fm.id !== actId) {
      errors.push(`${actId}/overview.md: frontmatter id="${fm.id}" != folder "${actId}"`);
    }
    // Validate cross-refs in overview
    if (!SUMMARY_ONLY) {
      for (const ref of extractCrossRefs(content)) {
        const refPath = join(CONTENT_DIR, ref);
        if (!existsSync(refPath)) {
          warnings.push(`${actId}/overview.md: cross-ref "${ref}" does not resolve`);
        }
      }
    }
  } else {
    errors.push(`${actId}: missing overview.md`);
  }

  // Check boss.md
  const bossPath = join(actDir, "boss.md");
  if (existsSync(bossPath)) {
    info.hasBoss = true;
    if (!SUMMARY_ONLY) {
      const content = readFileSync(bossPath, "utf-8");
      for (const ref of extractCrossRefs(content)) {
        const refPath = join(CONTENT_DIR, ref);
        if (!existsSync(refPath)) {
          errors.push(`${actId}/boss.md: cross-ref "${ref}" does not resolve`);
        }
      }
    }
  } else {
    errors.push(`${actId}: missing boss.md`);
  }

  // Check nodes/
  const nodesDir = join(actDir, "nodes");
  if (existsSync(nodesDir)) {
    const nodeFolders = readdirSync(nodesDir).filter((f) => {
      const p = join(nodesDir, f);
      return statSync(p).isDirectory();
    });

    for (const nodeFolder of nodeFolders) {
      const nodeDir = join(nodesDir, nodeFolder);
      const narrativePath = join(nodeDir, "narrative.md");
      const scriptPath = join(nodeDir, "script.md");

      const nodeInfo: NodeInfo = {
        id: nodeFolder,
        actId,
        nodeType: "unknown",
        hasNarrative: existsSync(narrativePath),
        hasScript: existsSync(scriptPath),
      };

      if (!nodeInfo.hasNarrative) {
        errors.push(`${actId}/nodes/${nodeFolder}: missing narrative.md`);
      } else {
        const content = readFileSync(narrativePath, "utf-8");
        const fm = parseFrontmatter(content);

        // Validate id matches folder
        if (fm.id && fm.id !== nodeFolder) {
          errors.push(
            `${actId}/nodes/${nodeFolder}/narrative.md: frontmatter id="${fm.id}" != folder "${nodeFolder}"`
          );
        }

        // Validate actId
        if (fm.actId && fm.actId !== actId) {
          errors.push(
            `${actId}/nodes/${nodeFolder}/narrative.md: frontmatter actId="${fm.actId}" != "${actId}"`
          );
        }

        // Validate nodeType
        if (fm.nodeType) {
          nodeInfo.nodeType = fm.nodeType;
          if (!VALID_NODE_TYPES.has(fm.nodeType)) {
            errors.push(
              `${actId}/nodes/${nodeFolder}/narrative.md: invalid nodeType="${fm.nodeType}"`
            );
          }
        } else {
          warnings.push(`${actId}/nodes/${nodeFolder}/narrative.md: missing nodeType in frontmatter`);
        }

        // Validate cross-refs
        if (!SUMMARY_ONLY) {
          for (const ref of extractCrossRefs(content)) {
            const refPath = join(CONTENT_DIR, ref);
            if (!existsSync(refPath)) {
              warnings.push(
                `${actId}/nodes/${nodeFolder}/narrative.md: cross-ref "${ref}" does not resolve`
              );
            }
          }
        }
      }

      info.nodes.push(nodeInfo);
    }
  } else {
    errors.push(`${actId}: missing nodes/ directory`);
  }

  return info;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

function main() {
  console.log("=== Cửu Đỉnh — Phase 3 Acts Validation ===\n");

  if (!existsSync(ACTS_DIR)) {
    console.error("ERROR: docs/content/acts/ does not exist");
    process.exit(1);
  }

  // Check README.md
  const readmePath = join(ACTS_DIR, "README.md");
  if (!existsSync(readmePath)) {
    errors.push("acts/README.md: missing");
  }

  // Validate each act
  const acts: ActInfo[] = [];
  for (let i = 1; i <= 5; i++) {
    const actDir = join(ACTS_DIR, `act-${i}`);
    if (!existsSync(actDir)) {
      errors.push(`act-${i}: directory does not exist`);
      continue;
    }
    acts.push(validateAct(actDir));
  }

  // Report
  console.log("--- Node Count Per Act ---\n");
  let totalNodes = 0;
  const typeCounts: Record<string, number> = {};

  for (const act of acts) {
    const nodesByType: Record<string, string[]> = {};
    for (const node of act.nodes) {
      const t = node.nodeType;
      if (!nodesByType[t]) nodesByType[t] = [];
      nodesByType[t].push(node.id);
      if (!typeCounts[t]) typeCounts[t] = 0;
      typeCounts[t]++;
    }

    console.log(`${act.id}: ${act.nodes.length} nodes`);
    console.log(`  overview.md: ${act.hasOverview ? "OK" : "MISSING"}`);
    console.log(`  boss.md: ${act.hasBoss ? "OK" : "MISSING"}`);
    for (const [type, ids] of Object.entries(nodesByType)) {
      console.log(`  ${type} (${ids.length}): ${ids.join(", ")}`);
    }
    console.log();
    totalNodes += act.nodes.length;
  }

  console.log(`--- Total: ${totalNodes} nodes across ${acts.length} Acts ---\n`);
  console.log("--- By nodeType ---");
  for (const [type, count] of Object.entries(typeCounts).sort()) {
    console.log(`  ${type}: ${count}`);
  }
  console.log();

  // Script files summary
  const nodesWithScript = acts.flatMap((a) => a.nodes).filter((n) => n.hasScript);
  console.log(
    `--- Script files: ${nodesWithScript.length} nodes have script.md ---`
  );
  for (const n of nodesWithScript) {
    console.log(`  ${n.actId}/nodes/${n.id}/script.md`);
  }
  console.log();

  // Errors and warnings
  if (errors.length > 0) {
    console.log(`--- ERRORS (${errors.length}) ---`);
    for (const e of errors) {
      console.log(`  ERROR: ${e}`);
    }
    console.log();
  }

  if (warnings.length > 0) {
    console.log(`--- WARNINGS (${warnings.length}) ---`);
    for (const w of warnings) {
      console.log(`  WARN: ${w}`);
    }
    console.log();
  }

  if (errors.length === 0 && warnings.length === 0) {
    console.log("All checks passed.\n");
  }

  // Exit code
  process.exit(errors.length > 0 ? 1 : 0);
}

main();
