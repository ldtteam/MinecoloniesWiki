import { reference, z } from 'astro:content';

const recipeItem = reference('items').or(reference('items').array());
const recipeTag = reference('tags');

const shapedRecipe = z.object({
  type: z.literal('shaped'),
  row1: z
    .object({
      item1: recipeItem.optional(),
      item2: recipeItem.optional(),
      item3: recipeItem.optional(),
      tag1: recipeTag.optional(),
      tag2: recipeTag.optional(),
      tag3: recipeTag.optional()
    })
    .optional(),
  row2: z
    .object({
      item1: recipeItem.optional(),
      item2: recipeItem.optional(),
      item3: recipeItem.optional(),
      tag1: recipeTag.optional(),
      tag2: recipeTag.optional(),
      tag3: recipeTag.optional()
    })
    .optional(),
  row3: z
    .object({
      item1: recipeItem.optional(),
      item2: recipeItem.optional(),
      item3: recipeItem.optional(),
      tag1: recipeTag.optional(),
      tag2: recipeTag.optional(),
      tag3: recipeTag.optional()
    })
    .optional()
});

const customRecipe = z.object({
  type: z.literal('custom'),
  items: z
    .array(
      z.object({
        item: recipeItem.optional(),
        tag: recipeTag.optional(),
        amount: z.number().default(1)
      })
    )
    .max(9)
});

const buildingCraftingCondition = z.object({
  type: z.literal('building'),
  building: reference('buildings'),
  level: z.number().optional()
});

const researchCraftingCondition = z.object({
  type: z.literal('research'),
  research: reference('research')
});

const recipeTypes = z.discriminatedUnion('type', [shapedRecipe, customRecipe]);
const craftingConditionTypes = z.discriminatedUnion('type', [buildingCraftingCondition, researchCraftingCondition]);

export const recipeSchema = recipeTypes.and(
  z.object({
    output: reference('items'),
    amount: z.number().default(1),
    conditions: z.array(craftingConditionTypes).default([])
  })
);

export type RecipeTag = z.infer<typeof recipeTag>;
export type RecipeItem = z.infer<typeof recipeItem>;
