import { z } from 'astro/zod';
import { reference } from 'astro:content';

import { versionedObjectSchema } from './version-object';

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
  item: recipeItems,
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
  research: reference('research_effect')
});

const craftingConditionTypes = z.discriminatedUnion('type', [buildingCraftingCondition, researchCraftingCondition]);

export const recipeSchema = z
  .object({
    output: reference('items'),
    amount: z.number().default(1),
    conditions: z.array(craftingConditionTypes).default([])
  })
  .and(z.discriminatedUnion('type', [shapedRecipe, shapelessRecipe, crafterRecipe, smeltingRecipe]));

export const itemSchemaWithoutVersionData = z.object({
  name: z.string(),
  blockId: z.string().optional(),
  recipes: recipeSchema.array()
});

export const itemSchema = itemSchemaWithoutVersionData.and(versionedObjectSchema);

export type RecipeSchema = z.infer<typeof recipeSchema>;
export type RecipeItem = z.infer<typeof recipeItems>;
export type RecipeCondition = z.infer<typeof craftingConditionTypes>;
