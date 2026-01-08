import { reference, z } from 'astro:content';

import { versionedObjectSchema } from './version';

const recipeItems = reference('items').array();

const shapedRecipe = z.object({
  type: z.literal('shaped'),
  items: z.array(z.array(recipeItems.or(z.undefined())).max(3)).max(3)
});

const shapelessRecipe = z.object({
  type: z.literal('shapeless'),
  items: z.array(
    z.object({
      item: recipeItems
    })
  )
});

const crafterRecipe = z.object({
  type: z.literal('crafter'),
  crafter: z.string(),
  inputs: z.array(
    z.object({
      item: recipeItems,
      count: z.number().default(1)
    })
  ),
  intermediate: reference('items'),
  minBuildingLevel: z.number().optional(),
  additionalOutput: z
    .array(
      z.object({
        item: recipeItems,
        count: z.number().default(1)
      })
    )
    .optional(),
  tool: z.string().optional()
});

const smeltingRecipe = z.object({
  type: z.literal('smelting'),
  item: recipeItems.max(1),
  cookingTime: z.number().default(200),
  experience: z.number().default(0)
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

const craftingConditionTypes = z.discriminatedUnion('type', [buildingCraftingCondition, researchCraftingCondition]);

const recipeTypes = z.discriminatedUnion('type', [shapedRecipe, shapelessRecipe, crafterRecipe, smeltingRecipe]);

export const recipeSchema = z
  .object({
    output: reference('items'),
    amount: z.number().default(1),
    conditions: z.array(craftingConditionTypes).default([])
  })
  .and(versionedObjectSchema)
  .and(recipeTypes);

export type RecipeItem = z.infer<typeof recipeItems>;
export type RecipeConditions = z.infer<typeof craftingConditionTypes>;
