import { z } from 'astro/zod';
import type { CollectionEntry, ReferenceDataEntry } from 'astro:content';
import type { ZodDiscriminatedUnion, ZodDiscriminatedUnionOption } from 'astro:schema';

import type { recipeSchema } from '../../schemas/item';
import type { SupportedSubmodules } from '../../schemas/version';
import { getItemsFromTag } from '../../util/items';
import { parseResourceLocation, resourceLocationToWikiReference } from '../../util/resourcelocation';

export type StoredRecipeData = z.infer<typeof recipeSchema>;

type RequiredZodUnion = ZodDiscriminatedUnion<
  'type',
  readonly [ZodDiscriminatedUnionOption<'type'>, ...ZodDiscriminatedUnionOption<'type'>[]]
>;

export interface RecipeConverterModule<Union extends RequiredZodUnion> {
  fullSchema: Union;
  convert: (
    recipe: z.infer<Union>,
    version: CollectionEntry<'versions'>['data']
  ) => Promise<StoredRecipeData | undefined>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VersionSchemaMap = Record<SupportedSubmodules, RecipeConverterModule<any>>;

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
