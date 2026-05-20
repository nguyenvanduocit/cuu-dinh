/**
 * Minimal RFC-4180-ish CSV parser.
 * Handles: quoted fields, escaped quotes (""), embedded commas/newlines.
 * Returns header + rows as string arrays. Up-stream code maps to records.
 */
export function parseCsv(text: string): { header: string[]; rows: string[][] } {
  const out: string[][] = []
  let field = ''
  let row: string[] = []
  let inQuotes = false
  let i = 0

  while (i < text.length) {
    const ch = text[i]!
    if (inQuotes) {
      if (ch === '"') {
        if (text[i + 1] === '"') {
          field += '"'
          i += 2
          continue
        }
        inQuotes = false
        i++
        continue
      }
      field += ch
      i++
      continue
    }
    if (ch === '"') {
      inQuotes = true
      i++
      continue
    }
    if (ch === ',') {
      row.push(field)
      field = ''
      i++
      continue
    }
    if (ch === '\r') {
      i++
      continue
    }
    if (ch === '\n') {
      row.push(field)
      out.push(row)
      row = []
      field = ''
      i++
      continue
    }
    field += ch
    i++
  }
  if (field.length > 0 || row.length > 0) {
    row.push(field)
    out.push(row)
  }

  const header = out.shift() ?? []
  return { header, rows: out.filter((r) => r.length > 1 || (r.length === 1 && r[0] !== '')) }
}

export function rowsToRecords(
  header: string[],
  rows: string[][],
): Array<Record<string, string>> {
  return rows.map((row) => {
    const rec: Record<string, string> = {}
    header.forEach((col, idx) => {
      rec[col] = row[idx] ?? ''
    })
    return rec
  })
}
