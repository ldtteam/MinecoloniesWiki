import type { CollectionEntry, z } from 'astro:content';
import type { ZodDiscriminatedUnion, ZodDiscriminatedUnionOption } from 'astro:schema';
import type { recipeSchema } from 'src/schemas/recipe';
import type { SupportedSubmodules } from 'src/schemas/version';

export type StoredRecipeData = z.infer<typeof recipeSchema>;

export interface IngredientSchema {
  item?: string;
  tag?: string;
}

type RequiredZodUnion = ZodDiscriminatedUnion<
  'type',
  readonly [ZodDiscriminatedUnionOption<'type'>, ...ZodDiscriminatedUnionOption<'type'>[]]
>;

export interface RecipeConverterModule<Union extends RequiredZodUnion> {
  fullSchema: Union;
  convert: (
    baseId: string,
    recipe: z.infer<Union>,
    version: CollectionEntry<'versions'>['data']
  ) => Promise<StoredRecipeData | undefined>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type VersionSchemaMap = Record<SupportedSubmodules, RecipeConverterModule<any>>;
