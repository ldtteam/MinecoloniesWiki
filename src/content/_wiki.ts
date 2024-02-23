import { z } from 'astro/zod';
import { defineCollection, reference } from 'astro:content';

const regularPage = z.object({
  type: z.literal('page'),
  title: z.string()
});

const itemPage = z.object({
  type: z.literal('item'),
  item: reference('items')
});

const itemCombinedPage = z.object({
  type: z.literal('item-combined'),
  title: z.string(),
  items: z.array(reference('items'))
});

const buildingPage = z.object({
  type: z.literal('building'),
  building: reference('buildings')
});

const workerPage = z.object({
  type: z.literal('worker'),
  worker: reference('workers')
});

export const wikiCollection = defineCollection({
  type: 'content',
  schema: z.discriminatedUnion('type', [regularPage, itemPage, itemCombinedPage, buildingPage, workerPage])
});

export const wikiCategories = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    order: z.number()
  })
});

export const buildingsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    plural: z.string(),
    workers: reference('workers').array().optional(),
    recipes: z.array(z.string()).optional(),
    settings: z
      .array(
        z.object({
          name: z.string(),
          description: z.string(),
          options: z
            .array(
              z.object({
                name: z.string(),
                description: z.string()
              })
            )
            .optional()
        })
      )
      .optional()
  })
});

export const workersCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    plural: z.string(),
    type: z.enum(['animals', 'crafter', 'gatherer', 'guard', 'other']),
    traits: z.object({
      primary: z.string().optional(),
      secondary: z.string().optional()
    }),
    effects: z.object({
      primary: z.string().optional(),
      secondary: z.string().optional()
    }),
    buildings: reference('buildings').array().optional()
  })
});

export const itemsCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      icons: z.array(image())
    })
});

const itemOrArray = z.undefined().or(z.null()).or(z.string()).or(z.array(z.string()));

export const recipesCollection = defineCollection({
  type: 'data',
  schema: z.object({
    recipes: z.array(
      z.object({
        firstRow: z.object({
          firstItem: itemOrArray,
          secondItem: itemOrArray,
          thirdItem: itemOrArray
        }),
        secondRow: z.object({
          firstItem: itemOrArray,
          secondItem: itemOrArray,
          thirdItem: itemOrArray
        }),
        thirdRow: z.object({
          firstItem: itemOrArray,
          secondItem: itemOrArray,
          thirdItem: itemOrArray
        }),
        product: z.string(),
        amount: z.number().default(1)
      })
    )
  })
});
