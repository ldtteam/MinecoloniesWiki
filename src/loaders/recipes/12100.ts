import {
  parseResourceLocation,
  resourceLocationToWikiId,
  resourceLocationToWikiReference
} from '@utils/resourcelocation';
import { getVersionCollectionId } from '@utils/version';
import { type CollectionEntry, type ReferenceDataEntry, z } from 'astro:content';
import type { RecipeConditions } from 'src/schemas/recipe';

import { convertIngredientToItemArray, ingredientSchema } from './common';
import type { RecipeConverterModule, StoredRecipeData } from './types';

// Schema definitions
const minecraftShapedRecipeSchema = z.object({
  type: z.literal('minecraft:crafting_shaped'),
  category: z.string().optional(),
  key: z.record(z.string(), ingredientSchema.or(z.array(ingredientSchema))),
  pattern: z.array(z.string()),
  result: z.object({ id: z.string(), count: z.number().optional() })
});

const minecraftShapelessRecipeSchema = z.object({
  type: z.literal('minecraft:crafting_shapeless'),
  category: z.string().optional(),
  ingredients: z.array(ingredientSchema),
  result: z.object({ id: z.string(), count: z.number().optional() })
});

const minecraftSmeltingRecipeSchema = z.object({
  type: z.literal('minecraft:smelting'),
  category: z.string().optional(),
  ingredient: ingredientSchema,
  result: z.object({ id: z.string(), count: z.number().optional() }),
  cookingtime: z.number().optional(),
  experience: z.number().optional()
});

const minecraftBlastingRecipeSchema = z.object({
  type: z.literal('minecraft:blasting'),
  category: z.string().optional(),
  ingredient: ingredientSchema,
  result: z.object({ id: z.string(), count: z.number().optional() }),
  cookingtime: z.number().optional(),
  experience: z.number().optional()
});

const minecraftSmokingRecipeSchema = z.object({
  type: z.literal('minecraft:smoking'),
  category: z.string().optional(),
  ingredient: ingredientSchema,
  result: z.object({ id: z.string(), count: z.number().optional() }),
  cookingtime: z.number().optional(),
  experience: z.number().optional()
});

const minecraftCampfireCookingRecipeSchema = z.object({
  type: z.literal('minecraft:campfire_cooking'),
  category: z.string().optional(),
  ingredient: ingredientSchema,
  result: z.object({ id: z.string(), count: z.number().optional() }),
  cookingtime: z.number().optional(),
  experience: z.number().optional()
});

const minecoloniesCrafterRecipeSchema = z.object({
  type: z.literal('recipe'),
  crafter: z.string(),
  inputs: z.array(
    z.object({
      item: z.string().optional(),
      count: z.number().default(1)
    })
  ),
  intermediate: z.string(),
  result: z
    .string()
    .or(z.object({ id: z.string(), count: z.number().optional() }))
    .optional(),
  count: z.number().optional(),
  ['min-building-level']: z.number().optional(),
  ['research-id']: z.string().or(z.string().array()).optional(),
  ['additional-output']: z
    .array(
      z.object({
        item: z.string().optional(),
        count: z.number().default(1)
      })
    )
    .optional(),
  ['loot-table']: z.string().optional(),
  tool: z.string().optional(),
  ['show-tooltip']: z.boolean().optional()
});

const minecoloniesCompostingRecipeSchema = z.object({
  type: z.literal('minecolonies:composting')
});

const minecoloniesZeroWasteRecipeSchema = z.object({
  type: z.literal('minecolonies:zero_waste')
});

const domumOrnamentumArchitectsCutterRecipeSchema = z.object({
  type: z.literal('domum_ornamentum:architects_cutter')
});

const anyRecipeSchema = z.discriminatedUnion('type', [
  minecraftShapedRecipeSchema,
  minecraftShapelessRecipeSchema,
  minecraftSmeltingRecipeSchema,
  minecraftBlastingRecipeSchema,
  minecraftSmokingRecipeSchema,
  minecraftCampfireCookingRecipeSchema,
  minecoloniesCrafterRecipeSchema,
  minecoloniesCompostingRecipeSchema,
  minecoloniesZeroWasteRecipeSchema,
  domumOrnamentumArchitectsCutterRecipeSchema
]);

// Converter functions
async function convertShapedRecipe(
  baseId: string,
  recipe: z.infer<typeof minecraftShapedRecipeSchema>,
  version: CollectionEntry<'versions'>['data']
): Promise<StoredRecipeData> {
  const items: Array<Array<ReferenceDataEntry<'items'>[] | undefined>> = [
    [undefined, undefined, undefined],
    [undefined, undefined, undefined],
    [undefined, undefined, undefined]
  ];
  for (let rowIndex = 0; rowIndex < recipe.pattern.length; rowIndex++) {
    const column = Array.from(recipe.pattern[rowIndex]);
    for (let colIndex = 0; colIndex < column.length; colIndex++) {
      const char = column[colIndex];
      if (char === ' ') {
        continue;
      }

      const ingredients = recipe.key[char];
      if (!ingredients) {
        continue;
      }

      if (Array.isArray(ingredients)) {
        items[rowIndex][colIndex] = await Promise.all(
          ingredients.map((ingredient) => convertIngredientToItemArray(ingredient, version))
        ).then((res) => res.flatMap((recipes) => recipes));
      } else {
        items[rowIndex][colIndex] = await convertIngredientToItemArray(ingredients, version);
      }
    }
  }

  return {
    type: 'shaped',
    baseId,
    version: {
      id: version.id,
      collection: 'versions'
    },
    items,
    output: resourceLocationToWikiReference(parseResourceLocation(recipe.result.id), version, 'items'),
    amount: recipe.result.count ?? 1,
    conditions: []
  };
}

async function convertShapelessRecipe(
  baseId: string,
  recipe: z.infer<typeof minecraftShapelessRecipeSchema>,
  version: CollectionEntry<'versions'>['data']
): Promise<StoredRecipeData> {
  const items = await Promise.all(
    recipe.ingredients.map(async (ingredient) => ({
      item: await convertIngredientToItemArray(ingredient, version)
    }))
  );

  return {
    type: 'shapeless',
    baseId,
    version: {
      id: version.id,
      collection: 'versions'
    },
    items,
    output: resourceLocationToWikiReference(parseResourceLocation(recipe.result.id), version, 'items'),
    amount: recipe.result.count ?? 1,
    conditions: []
  };
}

async function convertSmeltingRecipe(
  baseId: string,
  recipe: z.infer<typeof minecraftSmeltingRecipeSchema>,
  version: CollectionEntry<'versions'>['data']
): Promise<StoredRecipeData> {
  return {
    type: 'smelting',
    baseId,
    version: {
      id: version.id,
      collection: 'versions'
    },
    item: await convertIngredientToItemArray(recipe.ingredient, version),
    cookingTime: recipe.cookingtime ?? 200,
    experience: recipe.experience ?? 0,
    output: resourceLocationToWikiReference(parseResourceLocation(recipe.result.id), version, 'items'),
    amount: recipe.result.count ?? 1,
    conditions: []
  };
}

async function convertCrafterRecipe(
  baseId: string,
  recipe: z.infer<typeof minecoloniesCrafterRecipeSchema>,
  version: CollectionEntry<'versions'>['data']
): Promise<StoredRecipeData | undefined> {
  if (!recipe.result) {
    return undefined;
  }

  const outputItem = resourceLocationToWikiReference(
    parseResourceLocation(typeof recipe.result === 'object' ? recipe.result.id : recipe.result),
    version,
    'items'
  );
  const outputCount = (typeof recipe.result === 'object' ? recipe.result.count : recipe.count) ?? 1;

  const inputs = recipe.inputs
    .filter((f) => f.item)
    .map((input) => ({
      item: [resourceLocationToWikiReference(parseResourceLocation(input.item ?? ''), version, 'items')],
      count: input.count
    }));

  const conditions: RecipeConditions[] = [];

  if (Array.isArray(recipe['research-id'])) {
    recipe['research-id']
      .map<RecipeConditions>((researchId) => ({
        type: 'research',
        research: {
          collection: 'research',
          id: getVersionCollectionId(
            resourceLocationToWikiId(parseResourceLocation(researchId)),
            version.order
          ).replace('effects/', '')
        }
      }))
      .forEach((condition) => conditions.push(condition));
  } else if (recipe['research-id']) {
    conditions.push({
      type: 'research',
      research: {
        collection: 'research',
        id: getVersionCollectionId(
          resourceLocationToWikiId(parseResourceLocation(recipe['research-id'])),
          version.order
        ).replace('effects/', '')
      }
    });
  }

  return {
    type: 'crafter',
    baseId,
    version: {
      id: version.id,
      collection: 'versions'
    },
    crafter: recipe.crafter,
    inputs,
    intermediate: resourceLocationToWikiReference(parseResourceLocation(recipe.intermediate), version, 'items'),
    minBuildingLevel: recipe['min-building-level'],
    conditions,
    additionalOutput:
      recipe['additional-output']
        ?.filter((f) => f.item)
        .map((out) => ({
          item: [resourceLocationToWikiReference(parseResourceLocation(out.item ?? ''), version, 'items')],
          count: out.count
        })) ?? [],
    tool: recipe.tool,
    output: outputItem,
    amount: outputCount
  };
}

// Module creation
export const parserModule12100: RecipeConverterModule<typeof anyRecipeSchema> = {
  fullSchema: anyRecipeSchema,
  convert: async (baseId, recipe, version) => {
    if (recipe.type === 'minecraft:crafting_shaped') {
      return await convertShapedRecipe(baseId, recipe, version);
    } else if (recipe.type === 'minecraft:crafting_shapeless') {
      return await convertShapelessRecipe(baseId, recipe, version);
    } else if (recipe.type === 'minecraft:smelting') {
      return await convertSmeltingRecipe(baseId, recipe, version);
    } else if (recipe.type === 'recipe') {
      return await convertCrafterRecipe(baseId, recipe, version);
    }
    return undefined;
  }
};
