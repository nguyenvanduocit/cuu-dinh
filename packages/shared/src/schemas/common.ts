import { z } from 'zod'

/** Ngũ Hành (5 elements) + Vô Cực (void). */
export const Element = z.enum(['metal', 'wood', 'water', 'fire', 'earth', 'void'])
export type Element = z.infer<typeof Element>

export const Rarity = z.enum(['Common', 'Magic', 'Rare', 'Legendary', 'Unique', 'Mirror'])
export type Rarity = z.infer<typeof Rarity>

export const DropPool = z.enum(['Common', 'Uncommon', 'Rare', 'VeryRare', 'ExtremelyRare'])
export type DropPool = z.infer<typeof DropPool>

export const ItemBaseType = z.enum([
  'bell', 'sword', 'saber', 'inkstone', 'bead', 'statue', 'talisman',
  'cauldron', 'box', 'fan', 'branch', 'lantern', 'flower', 'vase', 'drum', 'charm',
])
export type ItemBaseType = z.infer<typeof ItemBaseType>

export const EquipmentSlot = z.enum([
  'crown', 'body', 'base', 'handleL', 'handleR', 'lid', 'amulet',
  'ringL', 'ringR', 'belt',
])
export type EquipmentSlot = z.infer<typeof EquipmentSlot>

export const AffixCategory = z.enum(['prefix', 'suffix', 'implicit'])
export type AffixCategory = z.infer<typeof AffixCategory>

export const AffixTier = z.enum(['T1', 'T2', 'T3'])
export type AffixTier = z.infer<typeof AffixTier>

/**
 * Slug ID — kebab-case ASCII English derived from the meaning of the Vietnamese name.
 * Example: "Chuông Đồng" → "bronze-bell".
 */
export const Slug = z
  .string()
  .min(1)
  .regex(/^[a-z0-9]+(-[a-z0-9]+)*$/, 'slug must be kebab-case ASCII')

/**
 * Display name in Vietnamese with full diacritics — player-facing.
 * Example: "Chuông Đồng" (NEVER "Chuong Dong").
 */
export const DisplayName = z
  .string()
  .min(1)
  .refine((s) => s === s.normalize('NFC'), 'must be NFC-normalised Unicode')
