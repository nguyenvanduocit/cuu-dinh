/**
 * Zod contract cho linh khí — regenerate từ frontmatter
 * docs/content/items/<type>/<id>/design.md qua tools/content-codegen.
 */
import { z } from 'zod'

export const artifactBlueprintSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  /** Display name Hán-Việt — player-facing (locked #27). */
  ten: z.string().min(1),
  type: z.string(),
  element: z.enum(['metal', 'wood', 'water', 'fire', 'earth', 'void']),
  rarity: z.enum(['Common', 'Magic', 'Rare', 'Epic', 'Unique']),
  tags: z.array(z.string()),
})

export const artifactCatalogSchema = z.array(artifactBlueprintSchema)

export type ArtifactBlueprint = z.infer<typeof artifactBlueprintSchema>
