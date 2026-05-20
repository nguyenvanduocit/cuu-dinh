#!/usr/bin/env bun
/**
 * migrate-item-shaped.ts — Phase 1 migration script
 *
 * Migrates 10 item-shaped categories from docs/data/*.md + docs/art-prompts/*
 * into per-entity bundles under docs/content/<category>/<entity-id>/.
 *
 * Usage:
 *   bun tools/migrate-item-shaped.ts --dry-run   # preview counts + sample 3
 *   bun tools/migrate-item-shaped.ts              # real run
 */

import { mkdir, writeFile, copyFile, readdir, stat } from "node:fs/promises";
import { readFileSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

const ROOT = join(import.meta.dir, "..");
const DATA_DIR = join(ROOT, "docs/data");
const ART_PROMPTS_DIR = join(ROOT, "docs/art-prompts");
const ART_GENERATED_DIR = join(ROOT, "docs/art/generated");
const CONTENT_DIR = join(ROOT, "docs/content");

const DRY_RUN = process.argv.includes("--dry-run");

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

function readMd(path: string): string {
  return readFileSync(path, "utf-8");
}

/**
 * Parse a pipe-delimited markdown table into rows of key-value objects.
 * Handles multi-line files with multiple tables (separated by headings).
 * Returns { sectionName, rows }[] for files with multiple sections,
 * or just rows[] for single-table files.
 */
function parseMarkdownTable(content: string): { header: string[]; rows: Record<string, string>[] } {
  const lines = content.split("\n");
  let headerLine = -1;
  let separatorLine = -1;

  // Find the first table
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line.startsWith("|") && line.endsWith("|")) {
      if (headerLine === -1) {
        headerLine = i;
      } else if (line.match(/^\|[\s-:|]+\|$/)) {
        separatorLine = i;
        break;
      }
    } else {
      // Reset if we hit non-table content
      if (headerLine !== -1 && separatorLine === -1) {
        headerLine = -1;
      }
    }
  }

  if (headerLine === -1 || separatorLine === -1) {
    return { header: [], rows: [] };
  }

  const header = lines[headerLine]
    .split("|")
    .map((s) => s.trim())
    .filter(Boolean);

  const rows: Record<string, string>[] = [];
  for (let i = separatorLine + 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line.startsWith("|")) break;
    if (line.match(/^\|[\s-:|]+\|$/)) continue; // skip separator lines

    const cells = line
      .split("|")
      .map((s) => s.trim())
      .filter((_, idx, arr) => idx > 0 && idx < arr.length); // remove leading/trailing empty

    if (cells.length === 0) continue;

    const row: Record<string, string> = {};
    for (let j = 0; j < header.length; j++) {
      row[header[j]] = (cells[j] ?? "").trim();
    }
    if (row["id"]) {
      rows.push(row);
    }
  }

  return { header, rows };
}

/**
 * Parse files with multiple tables separated by ## headings (like currency.md, affixes.md).
 */
function parseMultiSectionTable(content: string): { section: string; header: string[]; rows: Record<string, string>[] }[] {
  const sections: { section: string; header: string[]; rows: Record<string, string>[] }[] = [];
  const lines = content.split("\n");

  let currentSection = "";
  let tableStart = -1;
  let headerIdx = -1;
  let separatorIdx = -1;
  let currentHeader: string[] = [];
  let currentRows: Record<string, string>[] = [];

  function flushSection() {
    if (currentHeader.length > 0 && currentRows.length > 0) {
      sections.push({ section: currentSection, header: currentHeader, rows: [...currentRows] });
    }
    currentHeader = [];
    currentRows = [];
    headerIdx = -1;
    separatorIdx = -1;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (line.startsWith("## ")) {
      flushSection();
      currentSection = line.replace(/^## /, "").trim();
      continue;
    }

    if (!line.startsWith("|")) continue;

    if (headerIdx === -1) {
      // Potential header row
      headerIdx = i;
      currentHeader = line
        .split("|")
        .map((s) => s.trim())
        .filter(Boolean);
      continue;
    }

    if (separatorIdx === -1 && line.match(/^\|[\s-:|]+\|$/)) {
      separatorIdx = i;
      continue;
    }

    if (separatorIdx !== -1) {
      // Data row
      if (line.match(/^\|[\s-:|]+\|$/)) continue;
      const cells = line
        .split("|")
        .map((s) => s.trim())
        .filter((_, idx, arr) => idx > 0 && idx < arr.length);
      if (cells.length === 0) continue;

      const row: Record<string, string> = {};
      for (let j = 0; j < currentHeader.length; j++) {
        row[currentHeader[j]] = (cells[j] ?? "").trim();
      }
      if (row["id"]) {
        currentRows.push(row);
      }
    }
  }
  flushSection();
  return sections;
}

/**
 * Parse art-prompt entries from a markdown file.
 * Pattern: ### `<id>` — <ten>, optional **Mô tả**: ..., fenced code block.
 */
function parseArtPromptEntries(content: string): { id: string; ten: string; description: string; prompt: string }[] {
  const entries: { id: string; ten: string; description: string; prompt: string }[] = [];
  const lines = content.split("\n");

  let currentId = "";
  let currentTen = "";
  let currentDesc = "";
  let currentPrompt = "";
  let inCodeBlock = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Match ### `<id>` — <ten>
    const headingMatch = line.match(/^###\s+`([^`]+)`\s+—\s+(.+)$/);
    if (headingMatch) {
      // Flush previous entry
      if (currentId && currentPrompt) {
        entries.push({ id: currentId, ten: currentTen, description: currentDesc.trim(), prompt: currentPrompt.trim() });
      }
      currentId = headingMatch[1];
      currentTen = headingMatch[2].trim();
      currentDesc = "";
      currentPrompt = "";
      inCodeBlock = false;
      continue;
    }

    if (!currentId) continue;

    // Match **Mô tả**: ...
    const descMatch = line.match(/^\*\*Mô tả\*\*:\s*(.+)$/);
    if (descMatch && !inCodeBlock) {
      currentDesc = descMatch[1];
      continue;
    }

    // Track code blocks
    if (line.trim().startsWith("```") && !inCodeBlock) {
      inCodeBlock = true;
      continue;
    }
    if (line.trim() === "```" && inCodeBlock) {
      inCodeBlock = false;
      continue;
    }
    if (inCodeBlock) {
      currentPrompt += (currentPrompt ? "\n" : "") + line;
    }
  }

  // Flush last entry
  if (currentId && currentPrompt) {
    entries.push({ id: currentId, ten: currentTen, description: currentDesc.trim(), prompt: currentPrompt.trim() });
  }

  return entries;
}

/**
 * Parse lore entries from docs/data/lore.md (Item Flavor section).
 */
function parseLoreEntries(content: string): Map<string, string> {
  const loreMap = new Map<string, string>();
  const { rows } = parseMarkdownTable(content);
  for (const row of rows) {
    if (row["id"] && row["flavor"]) {
      loreMap.set(row["id"], row["flavor"]);
    }
  }
  return loreMap;
}

/**
 * Convert a row field value to YAML.
 * Multi-value fields → array, numbers → number, booleans → boolean, empty → omit.
 */
function toYamlValue(key: string, value: string): string | null {
  if (!value || value.trim() === "") return null;

  const arrayFields = ["tags", "connections", "compatibleItemTypes", "memberItemIds", "prerequisites"];
  const numericFields = ["weight", "dropWeight", "pos_x", "pos_y", "unlockLevel", "rewardMultiplier", "difficultyTier"];
  const boolFields = ["isUnique"];

  if (boolFields.includes(key)) {
    return value.toLowerCase() === "true" ? "true" : "false";
  }

  if (numericFields.includes(key)) {
    const num = parseFloat(value);
    return isNaN(num) ? `"${escapeYaml(value)}"` : String(num);
  }

  if (arrayFields.includes(key)) {
    const items = value.split(",").map((s) => s.trim()).filter(Boolean);
    return `[${items.join(", ")}]`;
  }

  // Simple kebab-case slugs and single words don't need quoting
  if (/^[a-z0-9]+(-[a-z0-9]+)*$/.test(value)) return value;
  // Simple PascalCase/camelCase words
  if (/^[A-Za-z][A-Za-z0-9]*$/.test(value)) return value;

  // String values — quote if they contain special YAML characters
  if (value.includes(":") || value.includes("#") || value.includes("{") || value.includes("}") ||
      value.includes("[") || value.includes("]") || value.includes("→") || value.includes("|") ||
      value.includes("'") || value.includes('"') || value.includes("%") || value.includes("×") ||
      value.includes("+") || value.includes("-") || value.includes("÷") || value.includes("/") ||
      value.startsWith("!") || value.startsWith("&") || value.startsWith("*") ||
      value.startsWith(" ") || value.endsWith(" ")) {
    return `"${escapeYaml(value)}"`;
  }

  return value;
}

function escapeYaml(s: string): string {
  return s.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

// ---------------------------------------------------------------------------
// Design.md generators per category type
// ---------------------------------------------------------------------------

function generateItemDesign(row: Record<string, string>): string {
  const fm: string[] = ["---"];
  const fields = ["id", "ten", "type", "element", "rarity", "dropPool", "tags"];
  for (const f of fields) {
    const val = toYamlValue(f, row[f]);
    if (val !== null) fm.push(`${f}: ${val}`);
  }
  fm.push("---");

  const body = [`\n# ${row["ten"]} (\`${row["id"]}\`)`, "", "## Implicit", "", row["implicit"] || ""];
  return fm.join("\n") + "\n" + body.join("\n") + "\n";
}

function generateUniqueDesign(row: Record<string, string>): string {
  const fm: string[] = ["---"];
  const fields = ["id", "ten", "type", "element", "category", "dropWeight", "dropRateHint"];
  for (const f of fields) {
    const val = toYamlValue(f, row[f]);
    if (val !== null) fm.push(`${f}: ${val}`);
  }
  fm.push("---");

  const body = [
    `\n# ${row["ten"]} (\`${row["id"]}\`)`,
    "",
    "## Effect",
    "",
    row["effect"] || "",
    "",
    "## Build Hook",
    "",
    row["buildHook"] || "",
  ];
  return fm.join("\n") + "\n" + body.join("\n") + "\n";
}

function generateAffixDesign(row: Record<string, string>): string {
  const fm: string[] = ["---"];
  const fields = ["id", "ten", "category", "tags", "element", "compatibleItemTypes", "weight"];
  for (const f of fields) {
    const val = toYamlValue(f, row[f]);
    if (val !== null) fm.push(`${f}: ${val}`);
  }
  fm.push("---");

  const body = [
    `\n# ${row["ten"]} (\`${row["id"]}\`)`,
    "",
    "## Tier Values",
    "",
    `| Tier | Effect |`,
    `| --- | --- |`,
  ];
  if (row["t1"]) body.push(`| T1 | ${row["t1"]} |`);
  if (row["t2"]) body.push(`| T2 | ${row["t2"]} |`);
  if (row["t3"]) body.push(`| T3 | ${row["t3"]} |`);

  return fm.join("\n") + "\n" + body.join("\n") + "\n";
}

function generateEquipmentDesign(row: Record<string, string>): string {
  const fm: string[] = ["---"];
  const fields = ["id", "ten", "slot", "rarity", "variant", "isUnique"];
  for (const f of fields) {
    const val = toYamlValue(f, row[f]);
    if (val !== null) fm.push(`${f}: ${val}`);
  }
  fm.push("---");

  const body = [
    `\n# ${row["ten"]} (\`${row["id"]}\`)`,
    "",
    "## Implicit",
    "",
    row["implicit"] || "",
  ];
  return fm.join("\n") + "\n" + body.join("\n") + "\n";
}

function generateCurrencyDesign(row: Record<string, string>, subCategory: string): string {
  const fm: string[] = ["---"];

  // Different fields for different sub-categories
  if (subCategory === "reagents") {
    const fields = ["id", "ten", "category", "dropPool", "weight", "element"];
    for (const f of fields) {
      const val = toYamlValue(f, row[f]);
      if (val !== null) fm.push(`${f}: ${val}`);
    }
  } else if (subCategory === "catalysts") {
    const fields = ["id", "ten", "category", "weight"];
    for (const f of fields) {
      const val = toYamlValue(f, row[f]);
      if (val !== null) fm.push(`${f}: ${val}`);
    }
  } else if (subCategory === "corruption-mods") {
    const fields = ["id", "ten", "riskLevel", "rewardMultiplier", "difficultyTier"];
    for (const f of fields) {
      const val = toYamlValue(f, row[f]);
      if (val !== null) fm.push(`${f}: ${val}`);
    }
    fm.push(`category: corruption-mod`);
  }
  fm.push("---");

  const body = [
    `\n# ${row["ten"]} (\`${row["id"]}\`)`,
    "",
    "## Effect",
    "",
    row["effect"] || "",
  ];
  return fm.join("\n") + "\n" + body.join("\n") + "\n";
}

function generatePassiveTreeDesign(row: Record<string, string>): string {
  const fm: string[] = ["---"];
  const fields = ["id", "ten", "type", "element", "cluster", "pos_x", "pos_y", "connections"];
  for (const f of fields) {
    const val = toYamlValue(f, row[f]);
    if (val !== null) fm.push(`${f}: ${val}`);
  }
  fm.push("---");

  const body = [
    `\n# ${row["ten"]} (\`${row["id"]}\`)`,
    "",
    "## Effect",
    "",
    row["effect"] || "",
  ];
  return fm.join("\n") + "\n" + body.join("\n") + "\n";
}

function generateAscendancyDesign(ascData: {
  id: string;
  ten: string;
  unlockLevel: string;
  primaryElement: string;
  tagline: string;
  innatePassive: string;
  description: string;
  nodes: Record<string, string>[];
}): string {
  const fm: string[] = [
    "---",
    `id: ${ascData.id}`,
    `ten: ${ascData.ten}`,
    `unlockLevel: ${ascData.unlockLevel}`,
    `primaryElement: ${ascData.primaryElement}`,
    `tagline: "${escapeYaml(ascData.tagline)}"`,
    "---",
  ];

  const body = [
    `\n# ${ascData.ten} (\`${ascData.id}\`)`,
    "",
    ascData.description,
    "",
    ascData.innatePassive,
    "",
    "## Nodes",
    "",
    "| id | ten | type | effect | prerequisites |",
    "| --- | --- | --- | --- | --- |",
  ];

  for (const node of ascData.nodes) {
    body.push(`| ${node["id"]} | ${node["ten"]} | ${node["type"]} | ${node["effect"]} | ${node["prerequisites"] || ""} |`);
  }

  return fm.join("\n") + "\n" + body.join("\n") + "\n";
}

function generateMapDesign(mapContent: string): string {
  // Maps are complex structured entries — we extract and restructure them
  // The map content is already the full section for one map
  return mapContent;
}

function generateSetDesign(setData: {
  id: string;
  ten: string;
  description: string;
  memberItemIds: string[];
  bonuses: { requiredCount: string; effect: string }[];
}): string {
  const fm: string[] = [
    "---",
    `id: ${setData.id}`,
    `ten: ${setData.ten}`,
    `memberItemIds: [${setData.memberItemIds.join(", ")}]`,
    "---",
  ];

  const body = [
    `\n# ${setData.ten} (\`${setData.id}\`)`,
    "",
    setData.description,
    "",
    "## Set Bonuses",
    "",
    "| requiredCount | effect |",
    "| --- | --- |",
  ];

  for (const b of setData.bonuses) {
    body.push(`| ${b.requiredCount} | ${b.effect} |`);
  }

  return fm.join("\n") + "\n" + body.join("\n") + "\n";
}

// ---------------------------------------------------------------------------
// Prompt.md generator (shared across all categories)
// ---------------------------------------------------------------------------

function generatePromptMd(entry: { id: string; ten: string; description: string; prompt: string }): string {
  const lines = [`# ${entry.ten} — MJ v6 prompt`, "", `**Format**: append \`[STYLE SUFFIX]\` từ \`../../_style/style-suffix.md\`.`, ""];

  if (entry.description) {
    lines.push(entry.description, "");
  }

  lines.push("```", entry.prompt, "```", "");
  return lines.join("\n");
}

// ---------------------------------------------------------------------------
// Lore.md generator
// ---------------------------------------------------------------------------

function generateLoreMd(ten: string, flavor: string): string {
  return `# ${ten} — Lore\n\n${flavor}\n`;
}

// ---------------------------------------------------------------------------
// Art prompt collection: map art-prompt dir to content category
// ---------------------------------------------------------------------------

const ART_PROMPT_CATEGORY_MAP: Record<string, string> = {
  "linh-khi": "items",
  "co-vat": "uniques",
  "affixes": "affixes",
  "furnace-parts": "equipment",
  "currency": "currency",
  "passive-tree": "passive-tree",
  "la-han": "la-han",
  "sets": "sets",
};

async function collectAllArtPrompts(): Promise<Map<string, Map<string, { ten: string; description: string; prompt: string }>>> {
  // category -> id -> entry
  const result = new Map<string, Map<string, { ten: string; description: string; prompt: string }>>();

  for (const [dirName, category] of Object.entries(ART_PROMPT_CATEGORY_MAP)) {
    const dirPath = join(ART_PROMPTS_DIR, dirName);
    if (!existsSync(dirPath)) continue;

    const files = await readdir(dirPath);
    const map = new Map<string, { ten: string; description: string; prompt: string }>();

    for (const file of files) {
      if (!file.endsWith(".md")) continue;
      const content = readMd(join(dirPath, file));
      const entries = parseArtPromptEntries(content);
      for (const e of entries) {
        map.set(e.id, { ten: e.ten, description: e.description, prompt: e.prompt });
      }
    }

    result.set(category, map);
  }

  // Handle ascendancies separately (stored in passive-tree dir)
  const ascPath = join(ART_PROMPTS_DIR, "passive-tree/ascendancies.md");
  if (existsSync(ascPath)) {
    const content = readMd(ascPath);
    const entries = parseArtPromptEntries(content);
    const map = new Map<string, { ten: string; description: string; prompt: string }>();
    for (const e of entries) {
      map.set(e.id, { ten: e.ten, description: e.description, prompt: e.prompt });
    }
    result.set("ascendancies", map);
  }

  return result;
}

// ---------------------------------------------------------------------------
// Generated art mapping
// ---------------------------------------------------------------------------

async function collectGeneratedArt(): Promise<Map<string, string>> {
  // slug -> absolute file path
  const artMap = new Map<string, string>();

  if (!existsSync(ART_GENERATED_DIR)) return artMap;

  // Top-level files: bronze-bell-grok.jpg -> bronze-bell
  const topFiles = await readdir(ART_GENERATED_DIR);
  for (const f of topFiles) {
    const fullPath = join(ART_GENERATED_DIR, f);
    const s = await stat(fullPath);
    if (s.isFile() && (f.endsWith(".jpg") || f.endsWith(".png"))) {
      // Extract slug: remove -grok suffix and extension
      const slug = f.replace(/-grok\.(jpg|png)$/, "").replace(/\.(jpg|png)$/, "");
      artMap.set(slug, fullPath);
    }
  }

  // Subdirectories: furnace-parts/, screens/, bosses-npcs/
  const subdirs = ["furnace-parts", "screens", "bosses-npcs"];
  for (const subdir of subdirs) {
    const subdirPath = join(ART_GENERATED_DIR, subdir);
    if (!existsSync(subdirPath)) continue;
    const files = await readdir(subdirPath);
    for (const f of files) {
      if (f.endsWith(".jpg") || f.endsWith(".png")) {
        const slug = f.replace(/\.(jpg|png)$/, "");
        artMap.set(`${subdir}/${slug}`, join(subdirPath, f));
      }
    }
  }

  return artMap;
}

// ---------------------------------------------------------------------------
// Parse ascendancies.md — special structure (not simple table)
// ---------------------------------------------------------------------------

function parseAscendancies(content: string): {
  id: string;
  ten: string;
  unlockLevel: string;
  primaryElement: string;
  tagline: string;
  innatePassive: string;
  description: string;
  nodes: Record<string, string>[];
}[] {
  const results: ReturnType<typeof parseAscendancies> = [];
  const lines = content.split("\n");

  let current: any = null;
  let inFieldTable = false;
  let inNodeTable = false;
  let nodeHeader: string[] = [];
  let nodeSepSeen = false;
  let collectingDescription = false;
  let collectingInnate = false;

  function flush() {
    if (current && current.id) {
      results.push(current);
    }
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Match ## <ten> (<id>)
    const h2Match = trimmed.match(/^## (.+?) \(([a-z-]+)\)$/);
    if (h2Match) {
      flush();
      current = {
        id: h2Match[2],
        ten: h2Match[1],
        unlockLevel: "",
        primaryElement: "",
        tagline: "",
        innatePassive: "",
        description: "",
        nodes: [],
      };
      inFieldTable = false;
      inNodeTable = false;
      collectingDescription = false;
      collectingInnate = false;
      continue;
    }

    if (!current) continue;

    // Field table rows: | field | value |
    if (trimmed.startsWith("| field |") || trimmed.startsWith("| --- |")) {
      inFieldTable = true;
      continue;
    }

    if (inFieldTable && trimmed.startsWith("|")) {
      const cells = trimmed.split("|").map((s) => s.trim()).filter(Boolean);
      if (cells.length >= 2) {
        const [field, value] = cells;
        if (field === "id") current.id = value;
        else if (field === "ten") current.ten = value;
        else if (field === "unlockLevel") current.unlockLevel = value;
        else if (field === "primaryElement") current.primaryElement = value;
        else if (field === "tagline") current.tagline = value;
      }
      continue;
    }

    if (inFieldTable && !trimmed.startsWith("|")) {
      inFieldTable = false;
    }

    // Description paragraph (right after field table, before innate passive)
    if (!inFieldTable && !inNodeTable && current.id && !current.description && trimmed && !trimmed.startsWith("**Innate") && !trimmed.startsWith("###") && !trimmed.startsWith("#")) {
      current.description = trimmed;
      continue;
    }

    // Innate passive
    if (trimmed.startsWith("**Innate passive")) {
      current.innatePassive = trimmed;
      continue;
    }

    // Node table
    if (trimmed.startsWith("### Nodes")) {
      inNodeTable = true;
      nodeHeader = [];
      nodeSepSeen = false;
      continue;
    }

    if (inNodeTable) {
      if (trimmed.startsWith("| id |")) {
        nodeHeader = trimmed.split("|").map((s) => s.trim()).filter(Boolean);
        continue;
      }
      if (trimmed.match(/^\|[\s-:|]+\|$/)) {
        nodeSepSeen = true;
        continue;
      }
      if (nodeSepSeen && trimmed.startsWith("|")) {
        const cells = trimmed.split("|").map((s) => s.trim()).filter(Boolean);
        const row: Record<string, string> = {};
        for (let j = 0; j < nodeHeader.length; j++) {
          row[nodeHeader[j]] = cells[j] ?? "";
        }
        current.nodes.push(row);
        continue;
      }
      if (!trimmed.startsWith("|") && trimmed !== "") {
        inNodeTable = false;
      }
    }
  }

  flush();
  return results;
}

// ---------------------------------------------------------------------------
// Parse maps.md — special structure (field table + anchors + prose sections)
// ---------------------------------------------------------------------------

function parseMaps(content: string): {
  id: string;
  ten: string;
  fields: Record<string, string>;
  anchors: Record<string, string>[];
  specialRules: string;
  description: string;
  geometry: string;
}[] {
  const results: ReturnType<typeof parseMaps> = [];
  const lines = content.split("\n");

  let current: any = null;
  let inFieldTable = false;
  let inAnchorTable = false;
  let anchorHeader: string[] = [];
  let anchorSepSeen = false;
  let collectingSection = "";
  let sectionBuffer = "";

  function flush() {
    if (current && current.id) {
      if (collectingSection === "specialRules") current.specialRules = sectionBuffer.trim();
      if (collectingSection === "description") current.description = sectionBuffer.trim();
      if (collectingSection === "geometry") current.geometry = sectionBuffer.trim();
      results.push(current);
    }
    collectingSection = "";
    sectionBuffer = "";
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Match ## <ten> (<id>)
    const h2Match = trimmed.match(/^## (.+?) \(([a-z-]+)\)$/);
    if (h2Match) {
      flush();
      current = {
        id: h2Match[2],
        ten: h2Match[1],
        fields: {},
        anchors: [],
        specialRules: "",
        description: "",
        geometry: "",
      };
      inFieldTable = false;
      inAnchorTable = false;
      continue;
    }

    if (!current) continue;

    // Field table
    if (trimmed.startsWith("| field |") || (trimmed.startsWith("| --- |") && !inAnchorTable)) {
      inFieldTable = true;
      collectingSection = "";
      continue;
    }

    if (inFieldTable && trimmed.startsWith("|") && !trimmed.match(/^\|[\s-:|]+\|$/)) {
      const cells = trimmed.split("|").map((s) => s.trim()).filter(Boolean);
      if (cells.length >= 2) {
        current.fields[cells[0]] = cells[1];
        if (cells[0] === "id") current.id = cells[1];
        if (cells[0] === "ten") current.ten = cells[1];
      }
      continue;
    }

    if (inFieldTable && !trimmed.startsWith("|")) {
      inFieldTable = false;
    }

    // Anchor table
    if (trimmed.startsWith("### Anchors")) {
      inAnchorTable = true;
      anchorHeader = [];
      anchorSepSeen = false;
      collectingSection = "";
      continue;
    }

    if (inAnchorTable) {
      if (trimmed.startsWith("| anchor id |") || trimmed.startsWith("| anchor")) {
        anchorHeader = trimmed.split("|").map((s) => s.trim()).filter(Boolean);
        continue;
      }
      if (trimmed.match(/^\|[\s-:|]+\|$/)) {
        anchorSepSeen = true;
        continue;
      }
      if (anchorSepSeen && trimmed.startsWith("|")) {
        const cells = trimmed.split("|").map((s) => s.trim()).filter(Boolean);
        const row: Record<string, string> = {};
        for (let j = 0; j < anchorHeader.length; j++) {
          row[anchorHeader[j]] = cells[j] ?? "";
        }
        current.anchors.push(row);
        continue;
      }
      if (!trimmed.startsWith("|")) {
        inAnchorTable = false;
      }
    }

    // Section markers
    if (trimmed.startsWith("**Special rules**:")) {
      if (collectingSection) {
        if (collectingSection === "specialRules") current.specialRules = sectionBuffer.trim();
        if (collectingSection === "description") current.description = sectionBuffer.trim();
        if (collectingSection === "geometry") current.geometry = sectionBuffer.trim();
      }
      collectingSection = "specialRules";
      sectionBuffer = trimmed.replace("**Special rules**:", "").trim() + "\n";
      continue;
    }

    if (trimmed.startsWith("**Description**:")) {
      if (collectingSection) {
        if (collectingSection === "specialRules") current.specialRules = sectionBuffer.trim();
        if (collectingSection === "description") current.description = sectionBuffer.trim();
        if (collectingSection === "geometry") current.geometry = sectionBuffer.trim();
      }
      collectingSection = "description";
      sectionBuffer = trimmed.replace("**Description**:", "").trim() + "\n";
      continue;
    }

    if (trimmed.startsWith("**Geometry**")) {
      if (collectingSection) {
        if (collectingSection === "specialRules") current.specialRules = sectionBuffer.trim();
        if (collectingSection === "description") current.description = sectionBuffer.trim();
        if (collectingSection === "geometry") current.geometry = sectionBuffer.trim();
      }
      collectingSection = "geometry";
      sectionBuffer = trimmed + "\n";
      continue;
    }

    if (collectingSection && !trimmed.startsWith("##")) {
      sectionBuffer += line + "\n";
    }
  }

  flush();
  return results;
}

function generateMapDesignMd(map: ReturnType<typeof parseMaps>[0]): string {
  const fm: string[] = ["---"];
  const fieldOrder = ["id", "ten", "variant", "tierRange", "vanCount", "bossType", "modifierSlots", "geometry"];
  for (const f of fieldOrder) {
    const val = map.fields[f];
    if (val) {
      fm.push(`${f}: ${toYamlValue(f, val) ?? val}`);
    }
  }
  fm.push("---");

  const body = [
    `\n# ${map.ten} (\`${map.id}\`)`,
    "",
  ];

  if (map.description) {
    body.push(map.description, "");
  }

  // Anchors table
  if (map.anchors.length > 0) {
    body.push("## Anchors", "");
    const headers = Object.keys(map.anchors[0]);
    body.push(`| ${headers.join(" | ")} |`);
    body.push(`| ${headers.map(() => "---").join(" | ")} |`);
    for (const anchor of map.anchors) {
      body.push(`| ${headers.map((h) => anchor[h] ?? "").join(" | ")} |`);
    }
    body.push("");
  }

  if (map.specialRules) {
    body.push("## Special Rules", "", map.specialRules, "");
  }

  if (map.geometry) {
    body.push("## Geometry", "", map.geometry, "");
  }

  return fm.join("\n") + "\n" + body.join("\n") + "\n";
}

// ---------------------------------------------------------------------------
// Parse sets.md — special structure
// ---------------------------------------------------------------------------

function parseSets(content: string): {
  id: string;
  ten: string;
  description: string;
  memberItemIds: string[];
  bonuses: { requiredCount: string; effect: string }[];
}[] {
  const results: ReturnType<typeof parseSets> = [];
  const lines = content.split("\n");

  let current: any = null;
  let inBonusTable = false;
  let bonusSepSeen = false;

  function flush() {
    if (current && current.id) {
      results.push(current);
    }
    inBonusTable = false;
    bonusSepSeen = false;
  }

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimmed = line.trim();

    // Match ## <ten> (<id>)
    const h2Match = trimmed.match(/^## (.+?) \(([a-z-]+)\)$/);
    if (h2Match) {
      flush();
      current = {
        id: h2Match[2],
        ten: h2Match[1],
        description: "",
        memberItemIds: [],
        bonuses: [],
      };
      continue;
    }

    if (!current) continue;

    // Description: first non-empty line after heading that isn't a member/table line
    if (!current.description && trimmed && !trimmed.startsWith("**Member") && !trimmed.startsWith("|")) {
      current.description = trimmed;
      continue;
    }

    // Member items
    const memberMatch = trimmed.match(/^\*\*Member items \(\d+\)\*\*:\s*(.+)$/);
    if (memberMatch) {
      current.memberItemIds = memberMatch[1].split(",").map((s: string) => s.trim().replace(/^`/, "").replace(/`$/, ""));
      continue;
    }

    // Bonus table
    if (trimmed.startsWith("| requiredCount")) {
      inBonusTable = true;
      continue;
    }
    if (inBonusTable && trimmed.match(/^\|[\s-:|]+\|$/)) {
      bonusSepSeen = true;
      continue;
    }
    if (inBonusTable && bonusSepSeen && trimmed.startsWith("|")) {
      const cells = trimmed.split("|").map((s) => s.trim()).filter(Boolean);
      if (cells.length >= 2) {
        current.bonuses.push({ requiredCount: cells[0], effect: cells[1] });
      }
      continue;
    }
    if (inBonusTable && !trimmed.startsWith("|") && trimmed !== "") {
      inBonusTable = false;
    }
  }

  flush();
  return results;
}

// ---------------------------------------------------------------------------
// Main migration
// ---------------------------------------------------------------------------

interface MigrationStats {
  category: string;
  expected: number;
  actual: number;
  withPrompt: number;
  withLore: number;
  withArt: number;
}

async function writeEntity(
  category: string,
  id: string,
  designContent: string,
  promptEntry: { ten: string; description: string; prompt: string } | undefined,
  loreText: string | undefined,
  artSourcePath: string | undefined,
): Promise<void> {
  const dir = join(CONTENT_DIR, category, id);

  if (DRY_RUN) return;

  await mkdir(dir, { recursive: true });
  await writeFile(join(dir, "design.md"), designContent);

  if (promptEntry) {
    await writeFile(join(dir, "prompt.md"), generatePromptMd({ id, ...promptEntry }));
  }

  if (loreText) {
    // Extract ten from design content frontmatter
    const tenMatch = designContent.match(/^ten:\s*(.+)$/m);
    const ten = tenMatch ? tenMatch[1].replace(/^"/, "").replace(/"$/, "") : id;
    await writeFile(join(dir, "lore.md"), generateLoreMd(ten, loreText));
  }

  if (artSourcePath) {
    const artDir = join(dir, "art");
    await mkdir(artDir, { recursive: true });
    const ext = artSourcePath.endsWith(".png") ? ".png" : ".jpg";
    const artFileName = basename(artSourcePath).includes("grok")
      ? `concept-grok-v1${ext}`
      : `concept-v1${ext}`;
    await copyFile(artSourcePath, join(artDir, artFileName));
  }
}

async function migrate() {
  console.log(`\n${DRY_RUN ? "🔍 DRY RUN" : "🚀 REAL RUN"} — Phase 1 item-shaped migration\n`);

  // Collect shared resources
  const artPrompts = await collectAllArtPrompts();
  const generatedArt = await collectGeneratedArt();
  const loreContent = readMd(join(DATA_DIR, "lore.md"));
  const loreMap = parseLoreEntries(loreContent);

  const stats: MigrationStats[] = [];

  // =========================================================================
  // 1. ITEMS (78)
  // =========================================================================
  {
    const content = readMd(join(DATA_DIR, "items.md"));
    const { rows } = parseMarkdownTable(content);
    const prompts = artPrompts.get("items") ?? new Map();
    let withPrompt = 0, withLore = 0, withArt = 0;

    for (const row of rows) {
      const id = row["id"];
      const prompt = prompts.get(id);
      const lore = loreMap.get(id);
      const art = generatedArt.get(id);

      if (prompt) withPrompt++;
      if (lore) withLore++;
      if (art) withArt++;

      await writeEntity("items", id, generateItemDesign(row), prompt, lore, art);
    }

    stats.push({ category: "items", expected: 78, actual: rows.length, withPrompt, withLore, withArt });
    console.log(`  items: ${rows.length}/78 entities${DRY_RUN ? " (dry-run)" : " created"}`);
  }

  // =========================================================================
  // 2. UNIQUES (30)
  // =========================================================================
  {
    const content = readMd(join(DATA_DIR, "uniques.md"));
    const { rows } = parseMarkdownTable(content);
    const prompts = artPrompts.get("uniques") ?? new Map();
    let withPrompt = 0, withLore = 0, withArt = 0;

    for (const row of rows) {
      const id = row["id"];
      const prompt = prompts.get(id);
      if (prompt) withPrompt++;

      await writeEntity("uniques", id, generateUniqueDesign(row), prompt, undefined, undefined);
    }

    stats.push({ category: "uniques", expected: 30, actual: rows.length, withPrompt, withLore: 0, withArt: 0 });
    console.log(`  uniques: ${rows.length}/30 entities${DRY_RUN ? " (dry-run)" : " created"}`);
  }

  // =========================================================================
  // 3. AFFIXES (190)
  // =========================================================================
  {
    const content = readMd(join(DATA_DIR, "affixes.md"));
    const sections = parseMultiSectionTable(content);
    const prompts = artPrompts.get("affixes") ?? new Map();
    let total = 0, withPrompt = 0;

    for (const section of sections) {
      for (const row of section.rows) {
        total++;
        const id = row["id"];
        const prompt = prompts.get(id);
        if (prompt) withPrompt++;

        await writeEntity("affixes", id, generateAffixDesign(row), prompt, undefined, undefined);
      }
    }

    stats.push({ category: "affixes", expected: 190, actual: total, withPrompt, withLore: 0, withArt: 0 });
    console.log(`  affixes: ${total}/190 entities${DRY_RUN ? " (dry-run)" : " created"}`);
  }

  // =========================================================================
  // 4. EQUIPMENT (50)
  // =========================================================================
  {
    const content = readMd(join(DATA_DIR, "equipment.md"));
    const { rows } = parseMarkdownTable(content);
    const prompts = artPrompts.get("equipment") ?? new Map();
    let withPrompt = 0, withArt = 0;

    // Map furnace-parts generated art to equipment slugs
    const equipArtMap = new Map<string, string>();
    for (const [key, path] of generatedArt.entries()) {
      if (key.startsWith("furnace-parts/")) {
        const slug = key.replace("furnace-parts/", "");
        equipArtMap.set(slug, path);
      }
    }

    for (const row of rows) {
      const id = row["id"];
      const prompt = prompts.get(id);
      if (prompt) withPrompt++;

      // Match generated art: exact id match only, or slug-common → id match
      // Art files: amulet.jpg, base-common.jpg, belt.jpg, body-common.jpg, handle-seal.jpg, lid-common.jpg
      let artPath: string | undefined;
      if (equipArtMap.has(id)) {
        // Exact match: base-common.jpg → base-common equipment
        artPath = equipArtMap.get(id);
      }

      if (artPath) withArt++;

      await writeEntity("equipment", id, generateEquipmentDesign(row), prompt, undefined, artPath);
    }

    stats.push({ category: "equipment", expected: 50, actual: rows.length, withPrompt, withLore: 0, withArt });
    console.log(`  equipment: ${rows.length}/50 entities${DRY_RUN ? " (dry-run)" : " created"}`);
  }

  // =========================================================================
  // 5. CURRENCY (62)
  // =========================================================================
  {
    const content = readMd(join(DATA_DIR, "currency.md"));
    const sections = parseMultiSectionTable(content);
    const prompts = artPrompts.get("currency") ?? new Map();
    let total = 0, withPrompt = 0;

    // Map section names to sub-categories
    const sectionCatMap: Record<string, string> = {
      "Đan Dược / Reagents (20)": "reagents",
      "Nguyên Liệu / Catalysts (30)": "catalysts",
      "Tâm Ma / Corruption Mods (12)": "corruption-mods",
    };

    for (const section of sections) {
      const subCat = sectionCatMap[section.section] || "reagents";
      for (const row of section.rows) {
        total++;
        const id = row["id"];
        const prompt = prompts.get(id);
        if (prompt) withPrompt++;

        await writeEntity("currency", id, generateCurrencyDesign(row, subCat), prompt, undefined, undefined);
      }
    }

    stats.push({ category: "currency", expected: 62, actual: total, withPrompt, withLore: 0, withArt: 0 });
    console.log(`  currency: ${total}/62 entities${DRY_RUN ? " (dry-run)" : " created"}`);
  }

  // =========================================================================
  // 6. PASSIVE-TREE (150)
  // =========================================================================
  {
    const content = readMd(join(DATA_DIR, "passive-tree.md"));
    const { rows } = parseMarkdownTable(content);
    const prompts = artPrompts.get("passive-tree") ?? new Map();
    let withPrompt = 0;

    for (const row of rows) {
      const id = row["id"];
      const prompt = prompts.get(id);
      if (prompt) withPrompt++;

      await writeEntity("passive-tree", id, generatePassiveTreeDesign(row), prompt, undefined, undefined);
    }

    stats.push({ category: "passive-tree", expected: 150, actual: rows.length, withPrompt, withLore: 0, withArt: 0 });
    console.log(`  passive-tree: ${rows.length}/150 entities${DRY_RUN ? " (dry-run)" : " created"}`);
  }

  // =========================================================================
  // 7. ASCENDANCIES (5)
  // =========================================================================
  {
    const content = readMd(join(DATA_DIR, "ascendancies.md"));
    const ascendancies = parseAscendancies(content);
    const prompts = artPrompts.get("ascendancies") ?? new Map();
    let withPrompt = 0;

    for (const asc of ascendancies) {
      const prompt = prompts.get(asc.id);
      if (prompt) withPrompt++;

      const designContent = generateAscendancyDesign(asc);
      await writeEntity("ascendancies", asc.id, designContent, prompt, undefined, undefined);
    }

    stats.push({ category: "ascendancies", expected: 5, actual: ascendancies.length, withPrompt, withLore: 0, withArt: 0 });
    console.log(`  ascendancies: ${ascendancies.length}/5 entities${DRY_RUN ? " (dry-run)" : " created"}`);
  }

  // =========================================================================
  // 8. MAPS (10)
  // =========================================================================
  {
    const content = readMd(join(DATA_DIR, "maps.md"));
    const maps = parseMaps(content);
    // Maps have no art prompts in scope

    for (const map of maps) {
      const designContent = generateMapDesignMd(map);
      await writeEntity("maps", map.id, designContent, undefined, undefined, undefined);
    }

    stats.push({ category: "maps", expected: 10, actual: maps.length, withPrompt: 0, withLore: 0, withArt: 0 });
    console.log(`  maps: ${maps.length}/10 entities${DRY_RUN ? " (dry-run)" : " created"}`);
  }

  // =========================================================================
  // 9. SETS (3)
  // =========================================================================
  {
    const content = readMd(join(DATA_DIR, "sets.md"));
    const sets = parseSets(content);
    const prompts = artPrompts.get("sets") ?? new Map();
    let withPrompt = 0;

    for (const set of sets) {
      const prompt = prompts.get(set.id);
      if (prompt) withPrompt++;

      const designContent = generateSetDesign(set);
      await writeEntity("sets", set.id, designContent, prompt, undefined, undefined);
    }

    stats.push({ category: "sets", expected: 3, actual: sets.length, withPrompt, withLore: 0, withArt: 0 });
    console.log(`  sets: ${sets.length}/3 entities${DRY_RUN ? " (dry-run)" : " created"}`);
  }

  // =========================================================================
  // 10. LA-HAN (18)
  // =========================================================================
  {
    // La-han items are a subset of items.md (arhat-* ids)
    // They exist in both items/ AND la-han/ (per advisor recommendation — duplication, flagged)
    const content = readMd(join(DATA_DIR, "items.md"));
    const { rows } = parseMarkdownTable(content);
    const laHanRows = rows.filter((r) => r["id"].startsWith("arhat-"));
    const prompts = artPrompts.get("la-han") ?? new Map();
    let withPrompt = 0;

    for (const row of laHanRows) {
      const id = row["id"];
      const prompt = prompts.get(id);
      const lore = loreMap.get(id);
      if (prompt) withPrompt++;

      await writeEntity("la-han", id, generateItemDesign(row), prompt, lore, undefined);
    }

    stats.push({ category: "la-han", expected: 18, actual: laHanRows.length, withPrompt, withLore: 0, withArt: 0 });
    console.log(`  la-han: ${laHanRows.length}/18 entities${DRY_RUN ? " (dry-run)" : " created"}`);
  }

  // =========================================================================
  // Summary
  // =========================================================================
  console.log("\n=== MIGRATION SUMMARY ===\n");
  console.log("| Category | Expected | Actual | Prompt | Lore | Art |");
  console.log("| --- | --- | --- | --- | --- | --- |");
  let totalExpected = 0, totalActual = 0;
  for (const s of stats) {
    const match = s.expected === s.actual ? "✓" : "⚠";
    console.log(`| ${s.category} | ${s.expected} | ${s.actual} ${match} | ${s.withPrompt} | ${s.withLore} | ${s.withArt} |`);
    totalExpected += s.expected;
    totalActual += s.actual;
  }
  console.log(`| **TOTAL** | **${totalExpected}** | **${totalActual}** | | | |`);

  // Note about la-han duplication
  console.log("\n⚠ NOTE: la-han entities are DUPLICATED in both items/ and la-han/.");
  console.log("  items/ contains all 78 items (including 18 arhat-*), la-han/ duplicates arhat-* with la-han prompts.");
  console.log("  Lead to decide: keep duplication, or remove arhat-* from items/ (→ items=60).\n");

  // Report unmapped generated art
  const mappedSlugs = new Set<string>();
  mappedSlugs.add("bronze-bell"); // mapped to items
  // furnace-parts mapped above
  for (const [key] of generatedArt.entries()) {
    if (key.startsWith("furnace-parts/")) mappedSlugs.add(key);
  }
  console.log("Generated art mapping:");
  for (const [slug, path] of generatedArt.entries()) {
    if (slug === "bronze-bell") {
      console.log(`  ✓ ${slug} → items/bronze-bell/art/`);
    } else if (slug.startsWith("furnace-parts/")) {
      console.log(`  ~ ${slug} → equipment/ (best-match by slot)`);
    } else if (slug.startsWith("screens/") || slug.startsWith("bosses-npcs/")) {
      console.log(`  ⏳ ${slug} → DEFERRED (Phase 2/4)`);
    } else {
      console.log(`  ⏳ ${slug} → DEFERRED (not item-shaped: ${basename(path)})`);
    }
  }

  if (DRY_RUN) {
    // Show sample 3 entities
    console.log("\n=== SAMPLE ENTITIES (dry-run preview) ===\n");

    // Sample 1: bronze-bell (items)
    const itemsContent = readMd(join(DATA_DIR, "items.md"));
    const { rows: itemRows } = parseMarkdownTable(itemsContent);
    const bbRow = itemRows.find((r) => r["id"] === "bronze-bell");
    if (bbRow) {
      console.log("--- items/bronze-bell/design.md ---");
      console.log(generateItemDesign(bbRow));
    }

    // Sample 2: frenzy (affixes)
    const affixContent = readMd(join(DATA_DIR, "affixes.md"));
    const affixSections = parseMultiSectionTable(affixContent);
    const frenzyRow = affixSections[0]?.rows.find((r) => r["id"] === "frenzy");
    if (frenzyRow) {
      console.log("--- affixes/frenzy/design.md ---");
      console.log(generateAffixDesign(frenzyRow));
    }

    // Sample 3: standard (maps)
    const mapsContent = readMd(join(DATA_DIR, "maps.md"));
    const maps = parseMaps(mapsContent);
    const stdMap = maps.find((m) => m.id === "standard");
    if (stdMap) {
      console.log("--- maps/standard/design.md (first 30 lines) ---");
      const mapDesign = generateMapDesignMd(stdMap);
      console.log(mapDesign.split("\n").slice(0, 30).join("\n"));
      console.log("... (truncated)");
    }
  }
}

migrate().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
