import { reference, z } from 'astro:content';

const recipeItems = z.string().or(z.array(z.string())).or(z.null());

const shapedRecipe = z.object({
  type: z.literal('shaped'),
  row1: z.object({
    item1: recipeItems,
    item2: recipeItems,
    item3: recipeItems
  }),
  row2: z.object({
    item1: recipeItems,
    item2: recipeItems,
    item3: recipeItems
  }),
  row3: z.object({
    item1: recipeItems,
    item2: recipeItems,
    item3: recipeItems
  })
});

const customRecipe = z.object({
  type: z.literal('custom'),
  items: z
    .array(
      z.object({
        item: recipeItems,
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
    output: z.string(),
    amount: z.number().default(1),
    conditions: z.array(craftingConditionTypes).default([])
  })
);

export type RecipeItems = z.infer<typeof recipeItems>;
