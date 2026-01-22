import { z } from 'astro/zod';
import type { CollectionEntry, ReferenceDataEntry } from 'astro:content';

import { getItemsFromTag } from '../../util/items';
import { parseResourceLocation, resourceLocationToWikiReference } from '../../util/resourcelocation';

// Ingredient logic
export type IngredientSchema = z.infer<typeof ingredientSchema>;

export const ingredientSchema = z.object({
  item: z.string().optional(),
  tag: z.string().optional()
});

export async function convertIngredientToItemArray(
  ingredient: IngredientSchema,
  version: CollectionEntry<'versions'>['data']
): Promise<ReferenceDataEntry<'items'>[]> {
  if (ingredient.item) {
    return [resourceLocationToWikiReference(parseResourceLocation(ingredient.item), version, 'items')];
  } else if (ingredient.tag) {
    return getItemsFromTag(parseResourceLocation(ingredient.tag), version);
  }
  return [];
}
